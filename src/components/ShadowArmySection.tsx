
import React, { useEffect, useState, useRef } from 'react';

const ShadowArmySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-solo-dark min-h-screen">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-solo-dark via-solo-purple/20 to-solo-dark"></div>
      <div className="absolute inset-0 shadow-particles opacity-40"></div>
      <div className="absolute inset-0 bg-radial-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">Shadow Army Commander</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The elite general of Sung Jin-Woo's shadow forces, commanding legions of the most powerful shadow soldiers extracted from S-rank hunters and monsters.
          </p>
        </div>
        
        {/* Enhanced 3D Model Section */}
        <div className={`relative w-full max-w-5xl mx-auto perspective ${isVisible ? 'animate-appear' : 'opacity-0'}`}>
          <div className="shadow-model-container w-full aspect-square max-w-2xl mx-auto relative transform-style-3d">
            {/* Rotating platform with intensified glow */}
            <div className="absolute inset-0 animate-rotate-slow shadow-model-platform"></div>
            
            {/* Enhanced energy effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[90%] h-[90%] rounded-full bg-purple-glow animate-pulse-intense opacity-80"></div>
              
              {/* More intense lightning effects */}
              <div className="lightning-effect lightning-1 w-1 h-[140px]"></div>
              <div className="lightning-effect lightning-2 w-1 h-[160px]"></div>
              <div className="lightning-effect lightning-3 w-1 h-[180px]"></div>
              <div className="lightning-effect lightning-4 w-1 h-[150px]"></div>
              <div className="lightning-effect lightning-5 w-1 h-[170px]"></div>
              
              {/* Enhanced purple mist */}
              <div className="absolute inset-0 purple-mist opacity-60"></div>
            </div>
            
            {/* New Shadow Commander Image with enhanced effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[95%] h-[95%] flex items-center justify-center">
                {/* Glow behind image */}
                <div className="absolute inset-0 rounded-full bg-solo-light-purple/30 blur-2xl animate-pulse-slow"></div>
                
                {/* Main image with enhanced shadow effects */}
                <img 
                  src="/uploads/16544e9c-b7ea-4ba3-a6e4-1c9fb4b40301.png" 
                  alt="Shadow Army Commander" 
                  className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] animate-float-enhanced z-10"
                />
                
                {/* Overlay light effect */}
                <div className="absolute inset-0 bg-gradient-radial from-solo-light-purple/20 via-transparent to-transparent mix-blend-screen"></div>
              </div>
            </div>
            
            {/* Enhanced floating runes */}
            <div className="floating-rune w-20 h-20 border-2 border-solo-purple/70 rotate-45 top-5 left-5 animate-delay-300 animate-float-enhanced"></div>
            <div className="floating-rune w-16 h-16 border-2 border-solo-light-purple/60 -rotate-12 bottom-10 right-0 animate-delay-700 animate-float-enhanced"></div>
            <div className="floating-rune w-14 h-14 bg-solo-purple/30 rounded-full bottom-40 left-0 animate-delay-500 animate-float-enhanced"></div>
            <div className="floating-rune w-24 h-24 border-2 border-solo-purple/50 rotate-12 top-20 right-5 animate-delay-200 animate-float-enhanced"></div>
            
            {/* Energy nodes */}
            <div className="energy-node top-1/4 left-1/4"></div>
            <div className="energy-node top-1/3 right-1/4"></div>
            <div className="energy-node bottom-1/4 left-1/3"></div>
            <div className="energy-node bottom-1/3 right-1/3"></div>
          </div>
          
          {/* Commander stats with enhanced styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="stat-card animate-delay-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-solo-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              <h3 className="text-xl font-display font-bold text-solo-light-purple mb-2 group-hover:text-glow transition-all duration-300">Extraction Origin</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">S-Rank Hunter Igris</p>
            </div>
            <div className="stat-card animate-delay-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-solo-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              <h3 className="text-xl font-display font-bold text-solo-light-purple mb-2 group-hover:text-glow transition-all duration-300">Specialization</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Silent Blade Techniques</p>
            </div>
            <div className="stat-card animate-delay-700 group">
              <div className="absolute inset-0 bg-gradient-to-br from-solo-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              <h3 className="text-xl font-display font-bold text-solo-light-purple mb-2 group-hover:text-glow transition-all duration-300">Rank</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Marshal Grade Shadow</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-solo-purple to-solo-light-purple/90 hover:from-solo-light-purple/90 hover:to-solo-purple text-white rounded-lg font-medium transition-all duration-500 shadow-neon-purple hover:shadow-neon-purple-intense transform hover:scale-105">
              Join The Shadow Army
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShadowArmySection;
