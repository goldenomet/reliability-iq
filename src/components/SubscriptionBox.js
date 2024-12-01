import React from 'react';
import { motion } from 'framer-motion';

const SubscriptionBox = () => {
  const buttonVariants = {
    hover: { scale: 1.1, transition: { yoyo: Infinity } },
  };

  return (
    <section className="px-6 py-12 bg-black text-white">
      <h2 className="text-3xl font-bold text-center">Subscribe to Updates</h2>
      <form className="mt-6 flex flex-col items-center space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded border border-gray-300 w-3/4"
          required
        />
        <motion.button
          type="submit"
          className="px-6 py-2 bg-red-500 text-white rounded-lg"
          variants={buttonVariants}
          whileHover="hover"
        >
          Subscribe
        </motion.button>
      </form>
    </section>
  );
};

export default SubscriptionBox;
