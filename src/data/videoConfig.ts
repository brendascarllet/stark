/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║           STARK ROOFING — VIDEO CONFIGURATION           ║
 * ║                                                          ║
 * ║  HOW TO ADD YOUR OWN YOUTUBE VIDEOS:                    ║
 * ║  1. Open YouTube and find the video you want            ║
 * ║  2. Copy the part after "v=" in the URL                 ║
 * ║     e.g. youtube.com/watch?v=ABC123xyz → "ABC123xyz"   ║
 * ║  3. Paste it in the ytId field below                    ║
 * ║  4. Set enabled: true                                   ║
 * ╚══════════════════════════════════════════════════════════╝
 */

export interface VideoSlide {
  id: string;
  label: string;
  /** YouTube video ID — paste the part after ?v= */
  ytId?: string;
  /** Local file path (in /public) as fallback */
  localSrc?: string;
  /** Image fallback for when video isn't available */
  imageSrc?: string;
  caption: string;
  enabled: boolean;
}

export interface YouTubeSegment {
  id: string;
  label: string;
  ytId: string;
  /** Start time in seconds */
  start: number;
  /** End time in seconds */
  end: number;
  caption: string;
}

// ─── HOME PAGE HERO VIDEOS ─────────────────────────────────────────────────────
export const HOME_HERO_VIDEOS: VideoSlide[] = [
  {
    id: 'hero-main',
    label: 'Stark Drone Intro',
    localSrc: '/hero-drone-1.mp4',
    imageSrc: '/drone-1.webp',
    caption: "WA State's #1 Roofing Crew",
    enabled: true,
  },
];

// ─── YOUTUBE DRONE SEGMENTS (Lake Washington & Seattle Skyline) ────────────────
// Video: https://www.youtube.com/watch?v=GnZgvVnHnA8
// "Relaxing 4K Drone Film of Lake Washington & Seattle Skyline"
// Segments identified as clean (no text overlays):
export const YT_DRONE_SEGMENTS: YouTubeSegment[] = [
  {
    id: 'lake-wash-aerial',
    label: 'Lake Washington Aerial',
    ytId: 'GnZgvVnHnA8',
    start: 5,
    end: 40,
    caption: 'Serving Greater Seattle & Beyond',
  },
  {
    id: 'bellevue-skyline',
    label: 'Bellevue Skyline + Lakeside Homes',
    ytId: 'GnZgvVnHnA8',
    start: 55,
    end: 85,
    caption: 'Pacific Northwest — Built to Last',
  },
  {
    id: 'lake-wash-seattle',
    label: 'Lake Washington + Seattle Skyline',
    ytId: 'GnZgvVnHnA8',
    start: 100,
    end: 130,
    caption: 'Lake Washington · Seattle · Bellevue',
  },
  {
    id: 'freeway-lake',
    label: 'Overhead Freeway + Lake',
    ytId: 'GnZgvVnHnA8',
    start: 147,
    end: 175,
    caption: 'Connected to Every Corner of the Puget Sound',
  },
];

// ─── SERVICE PAGE HERO IMAGES ──────────────────────────────────────────────────
export const SERVICE_HERO_IMAGES: Record<string, string> = {
  'roof-replacement':   '/drone-1.webp',
  'roof-repair':        '/stark-crew-team.jpg',
  'metal-roofing':      '/drone-3.webp',
  'gutter-replacement': '/drone-4.webp',
  'gutter-repair':      '/stark-crew-team.jpg',
  'storm-damage':       '/drone-6.webp',
  'commercial':         '/drone-7.jpg',
  'skylights':          '/stark-crew-team.jpg',
  'siding':             '/drone-2.webp',
  'tpo':                '/drone-5.webp',
  'roof-cleaning':      '/stark-crew-team.jpg',
  'windows':            '/stark-cover.png',
  'contact':            '/drone-7.jpg',
  'about':              '/stark-crew-team.jpg',
};
