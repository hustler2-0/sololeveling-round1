
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-solo-dark">
        <div className="absolute inset-0 bg-gradient-radial from-solo-purple/20 via-solo-dark to-solo-dark opacity-70" />
        <div className="absolute inset-0 shadow-particles" />
      </div>

      {/* Hero content */}
      <div className="container max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className={`space-y-6 text-center lg:text-left transform ${loaded ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 delay-300`}>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gradient-purple leading-tight">
              <span className="block">Sung Jin-Woo</span>
              <span className="text-3xl md:text-4xl text-solo-light-purple/80">The Shadow Monarch</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              From the weakest E-rank hunter to the most powerful entity in existence, 
              witness the extraordinary journey of the man who rewrote the rules of power.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-solo-purple hover:bg-solo-purple/80 text-white rounded-lg font-medium transition-all shadow-neon-purple">
                Explore His Power
              </button>
              <button className="px-6 py-3 bg-transparent border border-solo-purple/50 hover:border-solo-purple text-solo-light-purple rounded-lg font-medium transition-all hover:shadow-neon-purple">
                Shadow Army
              </button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className={`relative flex justify-center items-center transform ${loaded ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
            <div className="relative w-80 h-96 md:w-96 md:h-[30rem] perspective">
              <div className="absolute inset-0 hero-glow rounded-full opacity-30 animate-pulse-glow" />
              <img 
                src="/uploads/floating-bg-removed.png" 
                alt="Sung Jin-Woo" 
                className="object-contain h-full w-full z-10 relative purple-shadow animate-float"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  transform: 'translateY(30px)'
                }}
              />
              
              {/* Floating runes */}
              <div className="floating-rune w-10 h-10 border border-solo-purple/30 rotate-45 top-10 left-0 animate-delay-300" />
              <div className="floating-rune w-8 h-8 border-2 border-solo-light-purple/20 -rotate-12 bottom-20 right-10 animate-delay-700" />
              <div className="floating-rune w-6 h-6 bg-solo-purple/10 rounded-full bottom-40 left-10 animate-delay-500" />
              <div className="floating-rune w-12 h-12 border border-solo-purple/20 rotate-12 top-32 right-5 animate-delay-200" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-solo-light-purple/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
