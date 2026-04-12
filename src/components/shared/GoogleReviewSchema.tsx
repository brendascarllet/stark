import { useEffect } from 'react';

interface GoogleReview {
  author: string;
  authorUrl: string | null;
  rating: number;
  text: string;
  publishTime: string | null;
}

interface GoogleReviewsData {
  fetchedAt: string | null;
  placeId: string | null;
  businessName: string;
  rating: number | null;
  userRatingCount: number | null;
  reviews: GoogleReview[];
  source: string;
}

interface GoogleReviewSchemaProps {
  data: GoogleReviewsData;
}

/**
 * Injects honest Review + AggregateRating structured data sourced from the
 * Google Places API. Only activates when real reviews and a real aggregate
 * rating exist — never invents numbers. The previous ReviewSchema.tsx was
 * deleted because it fabricated an AggregateRating from sample testimonials;
 * this replacement only renders when the underlying data is genuine.
 */
const GoogleReviewSchema = ({ data }: GoogleReviewSchemaProps) => {
  useEffect(() => {
    if (!data || !data.reviews || data.reviews.length === 0) return;
    if (data.rating === null || data.userRatingCount === null) return;

    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'RoofingContractor',
      '@id': 'https://starkroofingrenovation.com/#organization',
      name: data.businessName,
      url: 'https://starkroofingrenovation.com',
      telephone: '+12067398232',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: data.rating.toFixed(1),
        bestRating: '5',
        worstRating: '1',
        reviewCount: String(data.userRatingCount),
      },
      review: data.reviews.map((r) => ({
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(r.rating),
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: r.author,
        },
        reviewBody: r.text,
        ...(r.publishTime ? { datePublished: r.publishTime } : {}),
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-google-review-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [data]);

  return null;
};

export default GoogleReviewSchema;
