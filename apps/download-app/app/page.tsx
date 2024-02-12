import React from 'react';
import HeroSection from './components/HeroSection';
import FeatCardsSection from './components/FeatCardsSection';
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <main className='p-4 md:p-16'>
      <HeroSection />
      <FeatCardsSection />

    </main>
  );
};

export default HomePage;
