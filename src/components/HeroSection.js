import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold">
        Enhance Jet Engine Reliability
      </h1>
      <p className="mt-4 text-lg">
        Revolutionizing aviation maintenance with AI and IoT.
      </p>
      <a
        href="#catalog"
        className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600"
      >
        Explore Our Solutions
      </a>
    </section>
  );
};

export default HeroSection;
