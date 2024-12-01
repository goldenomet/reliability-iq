import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Framer Motion Variants
  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      className="bg-black text-white px-6 py-4 fixed top-0 w-full z-20 shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Reliability IQ</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-red-500"><a href="#home">Home</a></li>
          <li className="hover:text-red-500"><a href="#catalog">Catalog</a></li>
          <li className="hover:text-red-500"><a href="#blog">Blog</a></li>
          <li className="hover:text-red-500"><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          className="md:hidden mt-4 bg-black border-t border-gray-700"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <ul className="flex flex-col space-y-4 text-center py-4">
            <li className="hover:text-red-500"><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li className="hover:text-red-500"><a href="#catalog" onClick={() => setIsOpen(false)}>Catalog</a></li>
            <li className="hover:text-red-500"><a href="#blog" onClick={() => setIsOpen(false)}>Blog</a></li>
            <li className="hover:text-red-500"><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>

          <ul className="hidden md:flex space-x-6">
           <li className="hover:text-red-500"><a href="#home">Home</a></li>
           <li className="hover:text-red-500"><a href="#catalog">Catalog</a></li>
           <li className="hover:text-red-500"><a href="/blog">Blog</a></li> {/* Link to Blog */}
           <li className="hover:text-red-500"><a href="#contact">Contact</a></li>
          </ul>


        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
