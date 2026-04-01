import React from 'react';

const LeadershipTeam = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="w-16 h-1 bg-stark-red mx-auto mb-4"></div>
        <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">Meet Our Leadership Team</h2>
        <p className="text-lg text-charcoal/80 mb-12 max-w-3xl mx-auto text-center">
          Our experienced professionals are dedicated to delivering excellence on every project
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="h-64 relative">
              <img 
                src="https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80" 
                alt="John Stark" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-stark-red bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-bold text-navy mb-1">John Stark</h3>
              <p className="text-stark-red font-medium mb-4">Founder & CEO</p>
              <p className="text-charcoal/80">
                With over 20 years of experience in the roofing industry, John founded Stark Roofing with a vision to raise the bar for quality and service.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="h-64 relative">
              <img 
                src="/lovable-uploads/aa5ebae7-0087-41a9-8bb8-717d32e6ddfd.png" 
                alt="Sarah Johnson" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-stark-red bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-bold text-navy mb-1">Sarah Johnson</h3>
              <p className="text-stark-red font-medium mb-4">Operations Director</p>
              <p className="text-charcoal/80">
                Sarah ensures that every project runs smoothly from start to finish, coordinating our expert teams to deliver on-time, high-quality results.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300">
            <div className="h-64 relative">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80" 
                alt="Michael Rodriguez" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-stark-red bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-heading font-bold text-navy mb-1">Michael Rodriguez</h3>
              <p className="text-stark-red font-medium mb-4">Lead Project Manager</p>
              <p className="text-charcoal/80">
                Mike brings technical expertise and attention to detail to every project, ensuring that all work meets our rigorous quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
