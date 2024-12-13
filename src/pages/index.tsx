import React, { useState } from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import Login from '../components/Login';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Product from '../components/Product';

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Track login modal visibility

  const handleLoginSuccess = () => {
    setIsLoginOpen(false);
  };

  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Login
            onLoginSuccess={handleLoginSuccess}
            onClose={() => setIsLoginOpen(false)}
          />
        </div>
      )}

      <div className={`relative bg-background`}>
        <div className="max-w-10xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <Product />
      </LazyShow>
      <LazyShow>
        <Gallery />
        <Canvas />
        <About />
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
