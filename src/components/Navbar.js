import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.nav
      className="bg-black text-white px-6 py-4 fixed top-0 w-full z-10"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Reliability IQ</h1>
        <ul className="flex space-x-6">
          <li className="hover:text-red-500"><a href="#home">Home</a></li>
          <li className="hover:text-red-500"><a href="#catalog">Catalog</a></li>
          <li className="hover:text-red-500"><a href="#blog">Blog</a></li>
          <li className="hover:text-red-500"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
