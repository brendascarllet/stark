import React from 'react';

const SkylightTypes = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center">Types of Skylights We Install</h2>
        <p className="section-subtitle text-center mb-12">
          We offer a variety of skylight options to fit your specific needs and home design
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-xl overflow-hidden shadow-md bg-white">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/f6057036-c7fd-4c02-8d16-ed9c3bad8e5f.png" 
                alt="Modern living room with fixed skylights bringing natural light to a cozy seating area" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-navy mb-2">Fixed Skylights</h3>
              <p className="text-charcoal/80">
                Fixed skylights don't open but provide excellent light and can be installed in areas where ventilation isn't needed.
              </p>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-md bg-white">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/2821b129-1a0b-4714-9322-0ac209cc85ac.png" 
                alt="Modern vented skylights with black shades installed in white ceiling" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-navy mb-2">Vented Skylights</h3>
              <p className="text-charcoal/80">
                Vented skylights can be opened to allow fresh air into your home, perfect for kitchens and bathrooms.
              </p>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-md bg-white">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/34257d11-a88c-4148-9c8e-04aff77fef5d.png" 
                alt="Tubular skylight installation showing interior kitchen lighting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-navy mb-2">Tubular Skylights</h3>
              <p className="text-charcoal/80">
                Perfect for smaller spaces, tubular skylights channel sunlight through a reflective tube into areas where traditional skylights won't fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkylightTypes;
