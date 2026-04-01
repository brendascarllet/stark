
import React from 'react';
import { Gift, Percent, Droplet } from 'lucide-react';
import { motion } from 'framer-motion';
import CouponCard from './CouponCard';
import { couponData } from './couponData';

const PromotionCoupons = () => {
  // Function to render the appropriate icon based on icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gift':
        return <Gift size={14} className="mr-1" />;
      case 'Percent':
        return <Percent size={14} className="mr-1" />;
      case 'Droplet':
        return <Droplet size={14} className="mr-1" />;
      default:
        return <Gift size={14} className="mr-1" />;
    }
  };

  // Simplified animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="my-12 md:my-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-center text-3xl md:text-4xl font-bold text-stark-red mb-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Exclusive Service Coupons
        </motion.h2>
        
        <motion.p
          className="text-center text-lg mb-10 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          Save big on our professional home exterior services with these limited-time special promotions!
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {couponData.map((coupon, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="h-full" // Ensure parent has full height
            >
              <CouponCard
                color={coupon.color}
                icon={renderIcon(coupon.iconName)}
                badgeText={coupon.badgeText}
                title={coupon.title}
                price={coupon.price}
                originalPrice={coupon.originalPrice}
                savings={coupon.savings}
                savingsPercent={coupon.savingsPercent}
                features={coupon.features}
                linkTo={coupon.linkTo}
                couponType={coupon.couponType}
                disclaimer={coupon.disclaimer}
                priceRange={coupon.priceRange}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionCoupons;
