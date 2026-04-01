
export interface CouponData {
  color: 'stark-red' | 'navy' | 'emerald-600' | 'amber-500' | 'light-blue';
  badgeText: string;
  iconName: string;
  title: string;
  price: string;
  originalPrice: string;
  savings: string;
  savingsPercent: string;
  features: Array<{
    text: string;
    delay: number;
  }>;
  linkTo: string;
  couponType: string;
  disclaimer: string;
  priceRange?: {
    show: boolean;
    startingAt?: string;
    minPrice?: string;
    maxPrice?: string;
    priceNote?: string;
  };
}

export const couponData: CouponData[] = [
  {
    color: 'stark-red',
    badgeText: 'HOT DEAL',
    iconName: 'Gift',
    title: '5" Gutters Repair Special',
    price: '$800',
    originalPrice: '$1500',
    savings: 'Save 47%',
    savingsPercent: '47%',
    features: [
      { text: 'Up to 100 feet of 5" gutters repair', delay: 0.4 },
      { text: 'Professional installation by experts', delay: 0.5 },
      { text: '1-year workmanship warranty', delay: 0.6 }
    ],
    linkTo: '/gutter-repair',
    couponType: 'Gutters Repair',
    disclaimer: '*Valid for standard 5" gutters only. Expires 05/31/2025.',
    priceRange: {
      show: false
    }
  },
  {
    color: 'light-blue',
    badgeText: 'PREMIUM PACKAGE',
    iconName: 'Percent',
    title: '5" Gutters + Filters System',
    price: '$1349',
    originalPrice: '$1549',
    savings: 'Save 13%',
    savingsPercent: '13%',
    features: [
      { text: 'Up to 100 feet of 5" seamless gutters', delay: 0.5 },
      { text: 'PLUS premium no-clog leaf filters', delay: 0.6 },
      { text: 'Exclusive lifetime clog-free guarantee', delay: 0.7 }
    ],
    linkTo: '/gutter-repair',
    couponType: 'Gutters Package',
    disclaimer: '*Lifetime material and 10-year labor warranty. Expires 05/31/2025.',
    priceRange: {
      show: false
    }
  },
  {
    color: 'emerald-600',
    badgeText: 'LIMITED TIME OFFER',
    iconName: 'Droplet',
    title: 'Roof Cleaning Special',
    price: '$600',
    originalPrice: '$900',
    savings: 'Save 33%',
    savingsPercent: '33%',
    features: [
      { text: 'Remove moss, algae & black streaks', delay: 0.4 },
      { text: 'Safe low-pressure cleaning', delay: 0.5 },
      { text: 'Extends roof life & improves curb appeal', delay: 0.6 }
    ],
    linkTo: '/roof-cleaning',
    couponType: 'Roof Cleaning',
    disclaimer: '*Valid for standard asphalt shingle roofs. Expires 05/31/2025.',
    priceRange: {
      show: false
    }
  }
];
