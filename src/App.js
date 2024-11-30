import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Catalog from './components/Catalog';
import SubscriptionBox from './components/SubscriptionBox';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Catalog />
      <SubscriptionBox />
    </div>
  );
};

export default App;

