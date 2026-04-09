import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain, Smartphone, Sun, Wind, Shield, Battery } from 'lucide-react';

const FEATURES = [
  {
    icon: CloudRain,
    title: 'Built-in rain sensor',
    body: "Storm rolls in while you're at work? The skylight closes itself the moment the first drop hits the sensor. No alerts, no panic, no water on the floor.",
  },
  {
    icon: Smartphone,
    title: 'Remote control',
    body: "Open and close from across the room — or pair it with smart home setups so it works on a schedule. No more standing on a chair with a pole.",
  },
  {
    icon: Sun,
    title: 'Solar option = no wiring',
    body: "VELUX Solar Powered (VSS) models charge a small panel on the roof. No electrician, no holes in your ceiling, no extra electrical permit.",
  },
  {
    icon: Wind,
    title: 'Real ventilation, not just light',
    body: "Hot air rises. Vented skylights pull stale, humid air straight up and out — kitchens stay cooler, bathrooms dry faster, the whole house breathes better.",
  },
  {
    icon: Battery,
    title: 'Battery backup on solar models',
    body: "The solar models keep working in cloudy Pacific Northwest weather thanks to an internal battery. Yes, even Seattle gets enough sun.",
  },
  {
    icon: Shield,
    title: 'Insect screen included',
    body: "Open the skylight as wide as you want without inviting mosquitoes or wasps. The screen tucks away when the skylight is closed.",
  },
];

const AutomaticSkylightsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-amber-50 via-white to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-3">
            Why Go Automatic
          </span>
          <h2 className="section-title text-center">Automatic Skylights Are Worth It</h2>
          <p className="section-subtitle text-center">
            Most homeowners ask about manual skylights first because they sound simpler. After we explain what automatic models actually do, almost everyone goes automatic. Here's why.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="bg-amber-100 p-3 rounded-lg inline-flex mb-4">
                  <Icon size={24} className="text-amber-700" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{feature.title}</h3>
                <p className="text-sm text-charcoal/75 leading-relaxed">{feature.body}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 max-w-3xl mx-auto bg-navy text-white p-6 md:p-8 rounded-xl">
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-bold text-amber-300">Stark's recommendation:</span>{' '}
            For 9 out of 10 homes we install in, the <strong>VELUX Solar Powered "Fresh Air"</strong> model is the right call. No wiring headaches, the rain sensor saves your floors, and you'll actually use it because the remote makes it effortless.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutomaticSkylightsSection;
