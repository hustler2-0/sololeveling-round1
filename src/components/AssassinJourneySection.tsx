
import React, { useEffect, useState, useRef } from 'react';

const AssassinJourneySection = () => {
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
      {/* Background with overlapping gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-solo-dark via-solo-shadow to-solo-dark opacity-80"></div>
      <div className="absolute inset-0 shadow-particles opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">The Weakest Hunter's Ascension</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From an E-rank hunter struggling to survive each dungeon to the sovereign of shadows feared by all.
            Witness the extraordinary journey that began with humility and culminated in absolute power.
          </p>
        </div>
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isVisible ? 'animate-appear' : 'opacity-0'}`}>
          {/* The Weakest Hunter Image with enhanced effects */}
          <div className="relative rounded-lg overflow-hidden group perspective transform transition-all duration-700 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-solo-dark via-transparent to-transparent z-10"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-solo-purple/50 via-solo-light-purple/30 to-solo-purple/50 rounded-lg z-0 animate-pulse-glow"></div>
            
            <div className="relative z-[1] p-1 rounded-lg overflow-hidden transform transition-all duration-500">
              <img 
                src="/uploads/37ee8ca7-53bd-42ad-b5d6-223b8a0859f9.png" 
                alt="Sung Jin-Woo as the weakest hunter" 
                className="rounded-lg w-full shadow-lg relative z-[2] transform transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Stylistic elements with enhanced animations */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-solo-purple/30 z-[3] group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4 text-sm font-mono text-solo-light-purple/70 z-[4] group-hover:text-white group-hover:scale-110 transition-all duration-500">E-RANK HUNTER</div>
              <div className="absolute bottom-4 right-4 px-2 py-1 bg-solo-dark/70 rounded text-sm text-solo-light-purple z-[4] border border-solo-purple/30 group-hover:bg-solo-purple/50 group-hover:text-white transition-all duration-500">
                SURVIVAL RATE: 14%
              </div>
              
              {/* New animated elements on hover */}
              <div className="absolute inset-0 bg-solo-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[3]"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-glow opacity-0 group-hover:opacity-70 transition-all duration-700 z-[2]"></div>
            </div>
          </div>
          
          {/* Journey text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-purple">
              The Weakest Becomes The Strongest
            </h3>
            
            <div className="space-y-4">
              {/* Timeline points */}
              <div className="relative pl-8 border-l border-solo-purple/30">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-solo-purple"></div>
                <h4 className="font-display text-xl text-solo-light-purple mb-1">Hunter Awakening</h4>
                <p className="text-gray-300">Awakened with minimal power, Jin-Woo became known as "the world's weakest hunter" with barely enough ability to enter the lowest-level dungeons.</p>
              </div>
              
              <div className="relative pl-8 border-l border-solo-purple/30">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-solo-purple"></div>
                <h4 className="font-display text-xl text-solo-light-purple mb-1">Double Dungeon Incident</h4>
                <p className="text-gray-300">A routine E-rank dungeon turned into a deadly trap, where Jin-Woo faced certain death until he encountered the mysterious System.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Double Dungeon Section with NEW IMAGE */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20 ${isVisible ? 'animate-appear animate-delay-300' : 'opacity-0'}`}>
          {/* Double Dungeon Journey text */}
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gradient-purple">
              The Mysterious Double Dungeon
            </h3>
            
            <div className="space-y-4">
              {/* Timeline points */}
              <div className="relative pl-8 border-l border-solo-blue/30">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-solo-blue"></div>
                <h4 className="font-display text-xl text-solo-blue-glow mb-1">The Deadly Trap</h4>
                <p className="text-gray-300">What appeared to be a low-level dungeon revealed itself as a high-level dungeon hidden within another dungeon—a phenomenon known as a "double dungeon."</p>
              </div>
              
              <div className="relative pl-8 border-l border-solo-blue/30">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-solo-blue"></div>
                <h4 className="font-display text-xl text-solo-blue-glow mb-1">The Last Man Standing</h4>
                <p className="text-gray-300">As high-rank hunters fell one by one to the dungeon's monsters, Jin-Woo was the final survivor, pushed beyond human limits and on the verge of death.</p>
              </div>
              
              <div className="relative pl-8 border-l border-solo-blue/30">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-solo-blue"></div>
                <h4 className="font-display text-xl text-solo-blue-glow mb-1">System Activation</h4>
                <p className="text-gray-300">In his final moments, a mysterious voice declared Jin-Woo as the only player to qualify for the hidden program, offering him a unique opportunity to start his player journey.</p>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-solo-blue-glow"></div>
                <h4 className="font-display text-xl text-solo-blue-glow mb-1">Rebirth</h4>
                <p className="text-gray-300">After accepting the System's offer, Jin-Woo awoke in a hospital, fundamentally changed, with a hidden interface only he could see, marking the beginning of his leveling journey.</p>
              </div>
            </div>
            
            <button className="px-6 py-3 mt-4 bg-solo-blue hover:bg-solo-blue/80 text-white rounded-lg font-medium transition-all shadow-neon-blue">
              Explore The Double Dungeon
            </button>
          </div>
          
          {/* Double Dungeon Image with dramatic effects - UPDATED WITH NEW IMAGE */}
          <div className="relative rounded-lg overflow-hidden order-1 lg:order-2 group perspective transform transition-all duration-700 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-solo-dark via-transparent to-transparent z-10"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-solo-blue/50 via-solo-blue-glow/30 to-solo-blue/50 rounded-lg z-0 animate-blue-shimmer"></div>
            
            <div className="relative z-[1] p-1 rounded-lg overflow-hidden transform transition-all duration-500">
              <img 
                src="/uploads/768a3c8d-4c40-4d95-b00a-7b29b3953def.png" 
                alt="The mysterious Double Dungeon" 
                className="rounded-lg w-full shadow-lg relative z-[2] transform transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Stylistic elements with enhanced animations */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-solo-blue/30 z-[3] group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4 text-sm font-mono text-solo-blue-glow/70 z-[4] group-hover:text-white group-hover:scale-110 transition-all duration-500">DOUBLE DUNGEON</div>
              <div className="absolute bottom-4 right-4 px-2 py-1 bg-solo-dark/70 rounded text-sm text-solo-blue-glow z-[4] border border-solo-blue/30 group-hover:bg-solo-blue/50 group-hover:text-white transition-all duration-500">
                MORTALITY RATE: 95%
              </div>
              
              {/* Animated elements on hover */}
              <div className="absolute inset-0 bg-solo-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[3]"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-radial from-solo-blue/40 to-transparent opacity-0 group-hover:opacity-70 transition-all duration-700 z-[2]"></div>
              
              {/* Glowing particles */}
              <div className="absolute w-2 h-2 left-1/4 top-1/4 rounded-full bg-solo-blue-glow animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[3]"></div>
              <div className="absolute w-1.5 h-1.5 right-1/3 top-1/2 rounded-full bg-solo-blue-glow animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-delay-200 z-[3]"></div>
              <div className="absolute w-2.5 h-2.5 left-1/2 bottom-1/4 rounded-full bg-solo-blue-glow animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-delay-400 z-[3]"></div>
              
              {/* New blue torches effect to match the image */}
              <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-solo-blue-glow/40 to-transparent z-[3] animate-pulse-slow"></div>
              <div className="absolute w-1 h-3 top-2 left-1/5 bg-solo-blue-glow rounded-full shadow-lg shadow-solo-blue-glow/70 animate-pulse-slow z-[4]"></div>
              <div className="absolute w-1 h-3 top-2 left-2/5 bg-solo-blue-glow rounded-full shadow-lg shadow-solo-blue-glow/70 animate-pulse-slow animate-delay-200 z-[4]"></div>
              <div className="absolute w-1 h-3 top-2 left-3/5 bg-solo-blue-glow rounded-full shadow-lg shadow-solo-blue-glow/70 animate-pulse-slow animate-delay-300 z-[4]"></div>
              <div className="absolute w-1 h-3 top-2 left-4/5 bg-solo-blue-glow rounded-full shadow-lg shadow-solo-blue-glow/70 animate-pulse-slow animate-delay-100 z-[4]"></div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6 mt-16">
          <div className="relative pl-8 border-l border-solo-purple/30">
            <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-solo-purple"></div>
            <h4 className="font-display text-xl text-solo-light-purple mb-1">System Awakening</h4>
            <p className="text-gray-300">Granted a second chance through the System, Jin-Woo began his journey of leveling up from the weakest to potentially the strongest hunter in existence.</p>
          </div>
          
          <div className="relative pl-8">
            <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-solo-light-purple"></div>
            <h4 className="font-display text-xl text-solo-light-purple mb-1">Shadow Monarch's Rise</h4>
            <p className="text-gray-300">His journey led him to inherit the legacy of the Shadow Monarch, transforming the once-ridiculed E-rank hunter into the most powerful entity in the world.</p>
          </div>
          
          <button className="px-6 py-3 mt-4 bg-solo-purple hover:bg-solo-purple/80 text-white rounded-lg font-medium transition-all shadow-neon-purple group-hover:shadow-neon-purple-intense">
            Experience The Full Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default AssassinJourneySection;
