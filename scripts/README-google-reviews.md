# Google Reviews Auto-Fetch — Setup Guide

Real Google reviews from Stark Roofing's Google Business Profile are pulled into the homepage at build time via [scripts/fetch-google-reviews.mjs](./fetch-google-reviews.mjs). No manual copy-paste. Reviews refresh on every deploy.

## What you need (one-time setup, ~10 minutes)

Two environment variables:

1. **`GOOGLE_PLACE_ID`** — unique Google identifier for Stark Roofing's business
2. **`GOOGLE_PLACES_API_KEY`** — API key with Places API (New) enabled

## Step 1: Find your Google Place ID (2 min)

1. Open [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. In the map search box, type: `Stark Roofing & Renovation Sammamish WA`
3. Click the correct result on the map
4. The Place ID appears in a popup — it starts with `ChIJ` and looks like `ChIJxxxxxxxxxxxxxxxxxxxxxxxx`
5. **Copy it exactly** (including the `ChIJ` prefix)

## Step 2: Create a Google Places API key (5 min)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use existing) — call it `stark-reviews` or similar
3. In the left sidebar: **APIs & Services → Library**
4. Search for **"Places API (New)"** — there are two, make sure you enable the one labeled **"Places API (New)"** (not the legacy "Places API")
5. Click **Enable**
6. In the left sidebar: **APIs & Services → Credentials**
7. Click **+ Create Credentials → API key**
8. A key is generated — **copy it immediately** (looks like `AIzaSy...`)
9. Click **Restrict key** (important — prevents abuse):
   - **Application restrictions:** None (we need server-side access from CI/CD)
   - **API restrictions:** Select "Restrict key" → check only **Places API (New)**
10. Click **Save**

## Step 3: Add billing (required, but free for our usage)

Google requires a billing account linked to any project using Places API, BUT:

- Google gives you **$200 of free Maps Platform credit per month**
- Our fetch runs ~once per deploy (~$0.017 per request for Place Details)
- Even with 100 deploys/month = $1.70/month — **fully covered by the $200 free tier**

1. Cloud Console → **Billing → Link billing account**
2. Add your business credit card (won't be charged under $200/mo usage)

## Step 4: Set the env vars

### Locally (for testing on your laptop)

Create `.env.local` in the `trust-roofing-pros/` directory (NOT committed to git):

```
GOOGLE_PLACES_API_KEY=AIzaSy...your-real-key-here
GOOGLE_PLACE_ID=ChIJ...your-real-place-id-here
```

Then test with:

```
npm run fetch-reviews
```

You should see output like:
```
[fetch-google-reviews] fetching ChIJ...
[fetch-google-reviews] wrote /path/to/src/data/googleReviews.json
[fetch-google-reviews] success: 5 review(s), rating 4.9/23
```

Then run `npm run dev` and check the homepage — real reviews should appear in the Testimonials section.

### On your deployment platform

Whichever host you use (Lovable, Netlify, Vercel, Cloudflare Pages), add the same two env vars in their settings:

- **Lovable:** Project settings → Environment variables → add both
- **Vercel:** Project → Settings → Environment Variables
- **Netlify:** Site settings → Build & deploy → Environment
- **GitHub Actions:** Settings → Secrets and variables → Actions

Both vars should be available at **build time** (not runtime — they're only read during `npm run build`).

## How it works

1. `npm run build` triggers the `prebuild` script → runs `fetch-google-reviews.mjs`
2. The script calls `GET https://places.googleapis.com/v1/places/{PLACE_ID}` with the API key
3. The response (up to 5 reviews, plus the overall rating and total review count) is normalized and written to [src/data/googleReviews.json](../src/data/googleReviews.json)
4. Vite then builds the site — [TestimonialsSection.tsx](../src/components/home/TestimonialsSection.tsx) imports the JSON and renders each review
5. [GoogleReviewSchema.tsx](../src/components/shared/GoogleReviewSchema.tsx) injects real `AggregateRating` + `Review` JSON-LD structured data (only when real data exists)
6. Prerender step (puppeteer) bakes everything into static HTML

## Limitations

- **Max 5 reviews:** Google Places API (New) only returns the 5 most helpful reviews per place. There is no way to get 10+ via this API — that would require the **Google My Business API**, which requires OAuth as the business owner (more complex).
- **Can't pick which 5:** Google decides which reviews are "most helpful." The script filters out any review below 4 stars, but beyond that it's Google's algorithm.
- **No review text editing:** we show reviews verbatim as Google returns them. Google's own UI is the source of truth.

## If you want more than 5 reviews on the page

Options:
1. **Add curated reviews alongside the API-fetched ones.** Add a second JSON file `src/data/curatedReviews.json` with a few more you hand-picked from your GBP. Merge both arrays in the component. Label them differently (e.g., "Verified Google Review" vs. "Happy Customer"). ← I can build this if you want.
2. **Wait until you have more Google reviews.** Per the GBP checklist, the target is 50+ reviews in 6 months. More reviews = Google rotates through different "top 5" over time, so the page naturally refreshes.
3. **Upgrade to Google My Business API.** Requires OAuth as the verified business owner, more complex setup. ~20 reviews max.

## Graceful failure

The fetch script **never fails the build**. If:

- Env vars are missing → skips fetch, uses existing cached JSON (or empty)
- API key is wrong → warns, keeps existing cache
- Network is down → warns, keeps existing cache
- Google returns zero reviews → keeps existing cache (won't overwrite good data with empty)

So a temporary Google API outage won't break the site.

## Testing the script locally without hitting Google

You can manually write a test `src/data/googleReviews.json` to simulate the output:

```json
{
  "fetchedAt": "2026-04-11T12:00:00Z",
  "placeId": "ChIJtest",
  "businessName": "Stark Roofing & Renovation",
  "rating": 4.9,
  "userRatingCount": 23,
  "reviews": [
    {
      "author": "Test Customer",
      "authorUrl": null,
      "authorPhoto": null,
      "rating": 5,
      "text": "Sample review text for local testing.",
      "languageCode": "en",
      "publishTime": "2025-10-15T08:30:00Z",
      "relativeTime": "3 months ago"
    }
  ],
  "source": "manual-test"
}
```

Then run `npm run dev` and confirm the section renders. Remember to revert this file or run `npm run fetch-reviews` with real credentials before deploying.
