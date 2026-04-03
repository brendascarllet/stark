import { useEffect } from 'react';

interface Review {
  name: string;
  location: string;
  quote: string;
  rating?: number;
}

interface ReviewSchemaProps {
  reviews: Review[];
}

const ReviewSchema = ({ reviews }: ReviewSchemaProps) => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'RoofingContractor',
      'name': 'Stark Roofing & Renovation',
      'url': 'https://www.starkroofingrenovation.com',
      'telephone': '+12067398232',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '5.0',
        'bestRating': '5',
        'worstRating': '1',
        'reviewCount': String(reviews.length),
      },
      'review': reviews.map((review) => ({
        '@type': 'Review',
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': String(review.rating || 5),
          'bestRating': '5',
        },
        'author': {
          '@type': 'Person',
          'name': review.name,
        },
        'reviewBody': review.quote,
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-review-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [reviews]);

  return null;
};

export default ReviewSchema;
