
import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import CalculatorForm from './calculator/CalculatorForm';
import ResultsPanel from './calculator/ResultsPanel';
import { calculateCosts } from './calculator/calculatorUtils';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { motion } from 'framer-motion';

const RepairCalculator = () => {
  const [roofArea, setRoofArea] = useState<number>(350);
  const [materialType, setMaterialType] = useState<string>('asphalt');
  const [complexity, setComplexity] = useState<string>('simple');
  const [totalCost, setTotalCost] = useState<number>(2450);
  const [materialCost, setMaterialCost] = useState<number>(700);
  const [laborCost, setLaborCost] = useState<number>(1750);
  const [isCalculated, setIsCalculated] = useState<boolean>(false);

  // Create ref for scroll reveal animation
  const sectionRef = useScrollReveal<HTMLDivElement>();
  
  // Calculate costs when inputs change
  useEffect(() => {
    if (!roofArea) return;

    // Add a small delay for visual effect
    const timer = setTimeout(() => {
      const costs = calculateCosts(
        roofArea,
        materialType as 'asphalt' | 'metal' | 'wood',
        complexity as 'simple' | 'moderate' | 'complex'
      );

      // Set the state
      setMaterialCost(costs.materialCost);
      setLaborCost(costs.laborCost);
      setTotalCost(costs.totalCost);
      setIsCalculated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [roofArea, materialType, complexity]);

  // Handle area input change
  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setRoofArea(0);
    } else {
      setRoofArea(Math.min(5000, Math.max(100, value)));
    }
    
    // Visual feedback that calculation is happening
    setIsCalculated(false);
  };

  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section-padding bg-gray-100" id="repair-calculator" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="reveal-on-scroll"
        >
          <motion.div 
            className="flex items-center justify-center gap-2 mb-6"
            variants={itemVariants}
          >
            <Calculator size={32} className="text-stark-red animate-float-subtle" />
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Roof Repair Cost Calculator</h2>
          </motion.div>
          
          <motion.p 
            className="text-center text-charcoal/80 mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Estimate the cost of your roof repair project by entering your roof details below. 
            Get an instant calculation to help plan your budget.
          </motion.p>
          
          <div className="max-w-5xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-500 ${isCalculated ? 'opacity-100' : 'opacity-95'}`}>
              <CalculatorForm
                roofArea={roofArea}
                materialType={materialType}
                complexity={complexity}
                onRoofAreaChange={handleAreaChange}
                onMaterialTypeChange={setMaterialType}
                onComplexityChange={setComplexity}
              />
              
              <ResultsPanel
                totalCost={totalCost}
                materialCost={materialCost}
                laborCost={laborCost}
                materialType={materialType}
                complexity={complexity}
                roofArea={roofArea}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RepairCalculator;
