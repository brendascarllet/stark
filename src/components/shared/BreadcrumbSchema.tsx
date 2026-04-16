import { useEffect } from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * Injects BreadcrumbList JSON-LD into <head> for the current page.
 * Follows the same DOM-injection + cleanup pattern as ServiceSchema.tsx.
 *
 * Usage:
 *   <BreadcrumbSchema items={[
 *     { name: "Home", url: "https://starkroofingrenovation.com/" },
 *     { name: "Services", url: "https://starkroofingrenovation.com/services" },
 *     { name: "Roof Replacement", url: "https://starkroofingrenovation.com/roof-replacement" },
 *   ]} />
 */
const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  useEffect(() => {
    if (!items || items.length === 0) return;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [items]);

  return null;
};

export default BreadcrumbSchema;
