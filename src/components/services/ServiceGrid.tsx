
import React from 'react';
import ServiceCard from '@/components/ServiceCard';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface ServiceGridProps {
  title: string;
  subtitle: string;
  services: Service[];
  className?: string;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ title, subtitle, services, className = '' }) => {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">{title}</h2>
        <p className="section-subtitle text-center">
          {subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.image}
              link={service.link || "#contact"}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
