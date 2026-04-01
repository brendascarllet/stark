import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { motion } from 'framer-motion';

const PremiumServicesSection: React.FC = () => {
  return <section className="section-padding premium-services-section">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        <h2 className="section-title text-center text-stark-red">Our Premium Services</h2>
        <p className="section-subtitle text-center">
          We provide top-quality roofing and exterior protection services to safeguard your home and increase its value.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="animate-fade-in" style={{
          animationDelay: '100ms'
        }}>
            <ServiceCard title="Premium Roofing" description="High-quality GAF shingles installed by certified professionals to provide lasting protection and curb appeal for your home." imageUrl="/lovable-uploads/c2a7817f-3028-495b-99de-54a2646bf9a2.png" link="/services" />
          </div>
          <div className="animate-fade-in" style={{
          animationDelay: '200ms'
        }}>
            <ServiceCard title="Premium Gutters Systems" description="Seamless gutters with advanced leaf protection technology to prevent water damage and protect your home's foundation." imageUrl="/lovable-uploads/abc5c17d-4f26-4f7e-811d-9084453492d2.png" link="/gutter-replacement" />
          </div>
          <div className="animate-fade-in" style={{
          animationDelay: '300ms'
        }}>
            <ServiceCard title="Storm Damage Repair" description="Expert assessment and repair of storm-damaged roofs, including emergency services when you need them most." imageUrl="/lovable-uploads/a57c60ef-f31b-4378-bc0a-b445132bf3f1.png" link="/storm-damage" />
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Link to="/services" className="flex items-center bg-stark-red hover:bg-stark-red/80 text-white rounded-lg shadow-lg transition-all py-[23px] px-[40px]">
              <Grid size={18} className="mr-2" />
              <span className="font-medium">View All Services</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default PremiumServicesSection;
