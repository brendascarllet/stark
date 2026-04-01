import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import HorizontalContactForm from '@/components/shared/HorizontalContactForm';
interface StormTestimonial {
  name: string;
  location: string;
  quote: string;
  date: string;
  rating: number;
  serviceType: string;
}
const StormTestimonialsSection = () => {
  const testimonials: StormTestimonial[] = [{
    name: "Michael Thompson",
    location: "Bellevue, WA",
    quote: "After a severe windstorm damaged our roof, Stark's team was at our home within hours to tarp the affected areas. Their emergency response saved us from extensive water damage, and their permanent repairs were flawless.",
    date: "January 2025",
    rating: 5,
    serviceType: "Wind Damage Repair"
  }, {
    name: "Sarah Johnson",
    location: "Kirkland, WA",
    quote: "When hail damaged our fairly new roof, I was devastated. Stark not only helped us navigate the insurance claim process but matched our existing shingles perfectly. You can't even tell where the repairs were made!",
    date: "November 2024",
    rating: 5,
    serviceType: "Hail Damage Restoration"
  }, {
    name: "David Wilson",
    location: "Redmond, WA",
    quote: "A fallen tree branch punctured our roof during a storm. Stark's team provided emergency tarping that night and helped us file our insurance claim. The repairs were completed quickly and professionally. Couldn't ask for better service.",
    date: "March 2025",
    rating: 5,
    serviceType: "Emergency Storm Repair"
  }];
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => <Star key={index} className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />);
  };
  return <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Storm Damage Success Stories</h2>
        <p className="section-subtitle text-center">
          Real Washington homeowners share their experiences with our storm damage restoration services
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="overflow-hidden h-full animate-fade-in" style={{
          animationDelay: `${index * 150}ms`
        }}>
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-row space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="h-8 w-8 text-stark-red/20 rotate-180" />
                </div>
                
                <p className="text-charcoal/90 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <div className="flex flex-col">
                    <span className="font-bold text-navy">{testimonial.name}</span>
                    <span className="text-sm text-charcoal/70">{testimonial.location}</span>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-stark-red font-medium">{testimonial.serviceType}</span>
                      <span className="text-xs text-charcoal/60">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        
      </div>
    </section>;
};
export default StormTestimonialsSection;