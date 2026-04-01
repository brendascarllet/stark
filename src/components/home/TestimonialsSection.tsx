
import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "James Anderson",
      location: "Mercer Island, WA",
      quote: "The metal roof installation on our waterfront home is absolutely stunning. Stark's attention to detail and premium materials exceeded our expectations.",
    },
    {
      name: "Victoria Chen",
      location: "Bellevue, WA",
      quote: "Our custom deck project transformed our outdoor space completely. The design and craftsmanship are exactly what we envisioned for our modern home.",
    },
    {
      name: "Robert Martinez",
      location: "Kirkland, WA",
      quote: "From the gutter system to the new windows, every aspect of our home's renovation was handled with exceptional professionalism.",
    },
  ];

  return (
    <section className="section-padding bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Trusted by Washington's Most Discerning Homeowners</h2>
        <p className="section-subtitle text-center">
          Excellence in Every Detail
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8 flex flex-col h-full animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-row space-x-1 text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <Quote className="h-10 w-10 text-stark-red/20 rotate-180" />
                </div>
                
                <p className="text-charcoal/90 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-auto">
                <h4 className="font-bold text-navy">{testimonial.name}</h4>
                <p className="text-sm text-charcoal/70">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
