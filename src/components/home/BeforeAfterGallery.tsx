
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

interface Project {
  title: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

const projects: Project[] = [
  {
    title: 'Commercial Flat Roof — Full TPO Replacement',
    location: 'Puget Sound, WA',
    description:
      'Complete tear-off of a failing built-up roof and installation of a new white TPO membrane system with proper insulation and drainage.',
    beforeImage: '/gallery/commercial-before.jpg',
    afterImage: '/gallery/commercial-after.jpg',
  },
  {
    title: 'Residential Shingle Roof Replacement',
    location: 'Seattle Metro, WA',
    description:
      'Worn, aging shingles replaced with new GAF Timberline HDZ architectural shingles — installed with ice & water shield and proper ventilation.',
    beforeImage: '/gallery/shingle-before.jpg',
    afterImage: '/gallery/shingle-after.jpg',
  },
  {
    title: 'Roof Vent Pipe Restoration',
    location: 'Eastside, WA',
    description:
      'Corroded and rusted roof vent pipe replaced with a new sealed unit and proper flashing to prevent leaks.',
    beforeImage: '/gallery/vent-before.jpg',
    afterImage: '/gallery/vent-after.jpg',
  },
];

const BeforeAfterGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  const goToPrev = () =>
    setActiveIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const goToNext = () =>
    setActiveIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-stark-red font-semibold text-sm uppercase tracking-widest">
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mt-2">
            Before &amp; After
          </h2>
          <p className="text-charcoal/70 mt-3 max-w-2xl mx-auto">
            Drag the slider to see real transformations from our roofing and renovation projects across the Puget Sound.
          </p>
        </motion.div>

        {/* Slider + Info */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* Interactive slider */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
            />
          </div>

          {/* Project info + navigation */}
          <div className="flex flex-col justify-center space-y-5">
            <h3 className="text-2xl font-heading font-bold text-navy">
              {project.title}
            </h3>
            <p className="text-sm text-stark-red font-medium uppercase tracking-wide">
              {project.location}
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              {project.description}
            </p>

            {/* Nav arrows + dots */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={goToPrev}
                aria-label="Previous project"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-colors"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to project ${i + 1}`}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === activeIndex
                        ? 'bg-stark-red'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                aria-label="Next project"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              <span className="ml-auto text-sm text-charcoal/50">
                {activeIndex + 1} / {projects.length}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <div className="flex justify-center gap-4 mt-10">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative rounded-lg overflow-hidden w-28 h-20 border-2 transition-all ${
                i === activeIndex
                  ? 'border-stark-red shadow-md scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={p.afterImage}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
