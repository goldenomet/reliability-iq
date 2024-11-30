import React from 'react';
import { motion } from 'framer-motion';

const catalogItems = [
  { id: 1, name: 'IoT Sensors', description: 'Real-time data for jet engines' },
  { id: 2, name: 'AI Analytics', description: 'Predictive maintenance insights' },
  { id: 3, name: 'Digital Twins', description: 'Simulate engine performance' },
];

const Catalog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="catalog" className="px-6 py-12 bg-gray-100 text-black">
      <h2 className="text-3xl font-bold text-center mb-8">Our Catalog</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {catalogItems.map((item) => (
          <motion.div
            key={item.id}
            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="mt-2">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Catalog;
