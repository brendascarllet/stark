
export interface HeroMediaItem {
  url: string;
  alt: string;
  caption: string;
  type?: 'image' | 'video';
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
}
