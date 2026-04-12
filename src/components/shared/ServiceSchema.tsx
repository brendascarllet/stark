import { useEffect } from 'react';

interface ServiceSchemaProps {
  /** The clean service name, e.g. "Roof Replacement" */
  name: string;
  /** Plain-text description of the service (reuse the page meta description) */
  description: string;
  /** Canonical URL of the page, e.g. "https://starkroofingrenovation.com/roof-replacement" */
  url: string;
  /**
   * Optional schema.org serviceType (defaults to the same as `name`).
   * Use this when you want a more specific category, e.g. "Roofing Repair".
   */
  serviceType?: string;
}

/**
 * Injects a per-page Service JSON-LD block into <head>.
 * Mirrors the pattern in ReviewSchema.tsx (DOM injection + cleanup on unmount).
 *
 * The global RoofingContractor + FAQPage blocks live in index.html and are
 * NOT duplicated here — this component only emits a single Service entity
 * referencing the business as `provider`.
 *
 * Verified business data sourced from index.html (do not edit without
 * updating index.html in lockstep):
 *   - address: 24243 SE 43rd Ct, Sammamish, WA 98029
 *   - geo: 47.6162, -122.0355
 *   - reviewCount: 50
 */
const ServiceSchema = ({ name, description, url, serviceType }: ServiceSchemaProps) => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': name,
      'description': description,
      'url': url,
      'serviceType': serviceType || name,
      'provider': {
        '@type': 'RoofingContractor',
        'name': 'Stark Roofing & Renovation',
        'url': 'https://www.starkroofingrenovation.com',
        'telephone': '+12067398232',
        'email': 'office@starkroofingrenovation.com',
        'image': 'https://starkroofingrenovation.com/stark-cover.png',
        'priceRange': '$$',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '24243 SE 43rd Ct',
          'addressLocality': 'Sammamish',
          'addressRegion': 'WA',
          'postalCode': '98029',
          'addressCountry': 'US',
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 47.6162,
          'longitude': -122.0355,
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '5.0',
          'reviewCount': '50',
        },
      },
      'areaServed': [
        { '@type': 'City', 'name': 'Sammamish' },
        { '@type': 'City', 'name': 'Seattle' },
        { '@type': 'City', 'name': 'Bellevue' },
        { '@type': 'City', 'name': 'Redmond' },
        { '@type': 'City', 'name': 'Kirkland' },
        { '@type': 'City', 'name': 'Issaquah' },
        { '@type': 'City', 'name': 'Bothell' },
        { '@type': 'City', 'name': 'Lynnwood' },
        { '@type': 'City', 'name': 'Everett' },
        { '@type': 'City', 'name': 'Tacoma' },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-service-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [name, description, url, serviceType]);

  return null;
};

export default ServiceSchema;
