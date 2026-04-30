
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  link,
  delay = 0
}) => {
  const isInternalLink = link.startsWith('/');
  
  // Create the card content that will be reused
  const cardContent = (
    <>
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 text-center md:text-left">
        <h3 className="text-xl font-heading font-bold text-navy mb-3">{title}</h3>
        <p className="text-charcoal/80 mb-4">{description}</p>

        <div className="inline-flex items-center text-stark-red font-medium group-hover:text-navy transition-colors">
          Learn More
          <ChevronRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" size={18} />
        </div>
      </div>
    </>
  );
  
  // Wrapper with common styles
  const cardClasses = "service-card rounded-xl overflow-hidden shadow-md bg-white h-full group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1";
  
  return (
    <>
      {isInternalLink ? (
        <Link 
          to={link} 
          className={cardClasses}
          style={{ animationDelay: `${delay}ms` }}
          aria-label={`Learn more about ${title}`}
        >
          {cardContent}
        </Link>
      ) : (
        <a 
          href={link} 
          className={cardClasses}
          style={{ animationDelay: `${delay}ms` }}
          aria-label={`Learn more about ${title}`}
        >
          {cardContent}
        </a>
      )}
    </>
  );
};

export default ServiceCard;
