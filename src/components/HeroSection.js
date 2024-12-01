import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1 } },
    hover: { scale: 1.1 },
  };

  return (
    <section
      id="home"
      className="h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Enhance Jet Engine Reliability
      </motion.h1>
      <motion.p
        className="mt-4 text-lg"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        Revolutionizing aviation maintenance with AI and IoT.
      </motion.p>
      <motion.a
        href="#catalog"
        className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        Explore Our Solutions
      </motion.a>
    </section>
  );
};

export default HeroSection;

