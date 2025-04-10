
import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";

const AuraSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showTraits, setShowTraits] = useState(false);
  
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
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-solo-dark min-h-screen flex items-center">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-solo-dark via-solo-purple/10 to-solo-dark"></div>
      <div className="absolute inset-0 shadow-particles opacity-40"></div>
      
      {/* Floating particles */}
      <div className="absolute w-full h-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-solo-purple/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-enhanced ${3 + Math.random() * 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">The Shadow Monarch's Aura</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The overwhelming presence that inspires fear in enemies and respect in allies. 
            Witness the evolution of Sung Jin-Woo's aura as he ascends from weakness to absolute power.
          </p>
        </div>
        
        {/* Interactive 3D-like floating images */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isVisible ? 'animate-appear' : 'opacity-0'}`}>
          {/* First image - Pre-Awakening */}
          <div className="relative h-[500px] perspective group">
            <div className="absolute inset-0 flex items-center justify-center preserve-3d transform transition-all duration-700 group-hover:rotate-y-6">
              {/* Layered glow effects */}
              <div className="absolute inset-0 bg-gradient-radial from-solo-purple/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-radial from-solo-purple/30 to-transparent rounded-lg opacity-0 group-hover:opacity-80 transition-all duration-700 blur-lg animate-pulse-slow"></div>
              
              {/* Main image with parallax effect */}
              <div className="relative h-full w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-2xl preserve-3d group-hover:shadow-solo-purple/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-solo-dark via-transparent to-transparent z-10"></div>
                
                {/* Rain effect overlay */}
                <div className="absolute inset-0 rain-effect z-20 opacity-70"></div>
                
                <img 
                  src="/uploads/c9337de8-ddda-47af-97a2-89f97de6ab27.png" 
                  alt="Sung Jin-Woo's awakening aura" 
                  className="h-full w-full object-cover object-center transform transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Glowing eyes effect */}
                <div className="absolute top-[40%] left-[40%] w-3 h-3 rounded-full bg-solo-purple blur-sm animate-pulse-glow z-30"></div>
                <div className="absolute top-[40%] right-[40%] w-3 h-3 rounded-full bg-solo-purple blur-sm animate-pulse-glow z-30"></div>
                
                {/* Lightning effects */}
                <div className="absolute top-0 left-[30%] w-[1px] h-0 group-hover:h-full bg-solo-purple/70 transition-all duration-1000 delay-300 z-20"></div>
                <div className="absolute top-0 right-[40%] w-[1px] h-0 group-hover:h-full bg-solo-purple/70 transition-all duration-700 delay-100 z-20"></div>
                
                {/* Floating label */}
                <div className="absolute top-5 left-5 bg-solo-dark/80 backdrop-blur-sm px-3 py-1 rounded text-solo-purple text-sm font-mono border border-solo-purple/50 z-30">
                  AWAKENING PHASE
                </div>
                
                {/* Description overlay that appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-solo-dark/90 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <h3 className="text-xl font-display font-bold text-solo-light-purple mb-2">The Silent Intensity</h3>
                  <p className="text-gray-300 text-sm">
                    In moments of extreme pressure, Jin-Woo's aura manifests as an eerie stillness. 
                    His eyes glowing with purple light, the air around him becomes heavy with tension.
                  </p>
                </div>
              </div>
              
              {/* Floating runes */}
              <div className="absolute top-[-10%] left-[10%] w-16 h-16 border border-solo-purple/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 rotate-45 animate-float"></div>
              <div className="absolute bottom-[10%] right-[5%] w-12 h-12 border border-solo-purple/30 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 -rotate-12 animate-float"></div>
            </div>
          </div>
          
          {/* Second image - Full Power */}
          <div className="relative h-[500px] perspective group">
            <div className="absolute inset-0 flex items-center justify-center preserve-3d transform transition-all duration-700 group-hover:rotate-y-[-6deg]">
              {/* Layered glow effects */}
              <div className="absolute inset-0 bg-gradient-radial from-solo-blue/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
              <div className="absolute inset-0 bg-gradient-radial from-solo-blue/30 to-transparent rounded-lg opacity-0 group-hover:opacity-80 transition-all duration-700 blur-lg animate-pulse-slow"></div>
              
              {/* Main image with parallax effect */}
              <div className="relative h-full w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-2xl preserve-3d group-hover:shadow-solo-blue/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-solo-dark via-transparent to-transparent z-10"></div>
                
                {/* Aura effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-solo-blue/10 to-solo-blue/5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <img 
                  src="/uploads/1d7b38b2-48c3-41c1-8b5b-c66e0a154b95.png" 
                  alt="Sung Jin-Woo's full power aura" 
                  className="h-full w-full object-cover object-center transform transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Lighting particle effects */}
                <div className="absolute inset-0 z-20">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-[2px] h-[2px] bg-white"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: 0,
                        transform: 'scale(0)',
                        animation: `spark ${1 + Math.random() * 2}s infinite ease-out`,
                        animationDelay: `${Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Floating label */}
                <div className="absolute top-5 right-5 bg-solo-dark/80 backdrop-blur-sm px-3 py-1 rounded text-solo-blue-glow text-sm font-mono border border-solo-blue/50 z-30">
                  MONARCH PHASE
                </div>
                
                {/* Description overlay that appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-solo-dark/90 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <h3 className="text-xl font-display font-bold text-solo-blue-glow mb-2">The Commanding Presence</h3>
                  <p className="text-gray-300 text-sm">
                    With full mastery of his powers, Jin-Woo's aura commands absolute authority. 
                    His mere presence causes lesser beings to bow in submission, as the Shadow Monarch's
                    power radiates outward.
                  </p>
                </div>
              </div>
              
              {/* Floating energy particles */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-solo-blue-glow/70 opacity-0 group-hover:opacity-100 shadow-glow"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    transform: 'scale(0)',
                    animation: `appear-float ${2 + Math.random() * 3}s infinite ease-in-out`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Toggle button for traits */}
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            className="px-8 py-6 bg-transparent border-2 border-solo-purple/70 hover:bg-solo-purple/20 text-white rounded-lg font-medium text-lg transition-all duration-500 shadow-neon-purple hover:shadow-neon-purple-intense transform hover:scale-105"
            onClick={() => setShowTraits(!showTraits)}
          >
            {showTraits ? "Hide Monarch's Traits" : "Reveal Monarch's Traits"}
          </Button>
        </div>
        
        {/* Traits section that appears when toggled */}
        {showTraits && (
          <div className="mt-12 glass-card p-8 rounded-lg animate-fade-in">
            <h3 className="text-2xl font-display font-bold text-gradient-purple mb-8">The Shadow Monarch's Personality Traits</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div className="relative">
                <div className="absolute -left-5 top-0 h-full w-1 bg-gradient-to-b from-solo-purple via-solo-light-purple to-transparent"></div>
                <h4 className="text-xl font-display text-solo-light-purple mb-3">Unwavering Determination</h4>
                <p className="text-gray-300">Jin-Woo's resilience in the face of overwhelming odds defines his character. From surviving deadly dungeons to challenging national-level hunters, his resolve never falters.</p>
                <div className="mt-3 text-sm text-solo-purple">
                  <span className="font-bold">How to achieve:</span> Set immovable goals and pursue them regardless of obstacles. Train your mind to see setbacks as temporary challenges rather than permanent roadblocks.
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-5 top-0 h-full w-1 bg-gradient-to-b from-solo-blue via-solo-blue-glow to-transparent"></div>
                <h4 className="text-xl font-display text-solo-blue-glow mb-3">Calculated Restraint</h4>
                <p className="text-gray-300">Despite possessing overwhelming power, Jin-Woo exercises precise control, revealing his strength only when necessary. His composed demeanor masks the true extent of his abilities.</p>
                <div className="mt-3 text-sm text-solo-blue">
                  <span className="font-bold">How to achieve:</span> Practice emotional regulation and strategic thinking. The true display of power lies not in constant demonstration but in knowing exactly when to reveal your capabilities.
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-5 top-0 h-full w-1 bg-gradient-to-b from-solo-purple via-solo-light-purple to-transparent"></div>
                <h4 className="text-xl font-display text-solo-light-purple mb-3">Protective Instinct</h4>
                <p className="text-gray-300">Jin-Woo's drive to protect those he cares about fuels his growth. His sister and mother remain his primary motivation, extending to his close allies and eventually humanity itself.</p>
                <div className="mt-3 text-sm text-solo-purple">
                  <span className="font-bold">How to achieve:</span> Ground your ambitions in service to others. Power sought solely for oneself lacks purpose; the desire to shield others from harm provides unmatched motivation.
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-5 top-0 h-full w-1 bg-gradient-to-b from-solo-blue via-solo-blue-glow to-transparent"></div>
                <h4 className="text-xl font-display text-solo-blue-glow mb-3">Silent Authority</h4>
                <p className="text-gray-300">Jin-Woo commands respect without demanding it. His authority emanates naturally from his presence, causing even high-ranking hunters to instinctively defer to him.</p>
                <div className="mt-3 text-sm text-solo-blue">
                  <span className="font-bold">How to achieve:</span> Cultivate inner confidence that doesn't require external validation. Speak deliberately and with purpose, understanding that true authority comes from earned respect rather than forced compliance.
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-5 top-0 h-full w-1 bg-gradient-to-b from-solo-purple via-solo-light-purple to-transparent"></div>
                <h4 className="text-xl font-display text-solo-light-purple mb-3">Adaptable Intelligence</h4>
                <p className="text-gray-300">Jin-Woo's tactical mind allows him to adapt to new threats instantly. From analyzing enemy patterns to developing counter-strategies on the fly, his intelligence is a weapon as deadly as his strength.</p>
                <div className="mt-3 text-sm text-solo-purple">
                  <span className="font-bold">How to achieve:</span> Continuously learn and broaden your knowledge base. Practice problem-solving from multiple angles and develop the ability to quickly shift your approach when faced with new challenges.
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-5 top-0 h-full w-1 bg-gradient-to-b from-solo-blue via-solo-blue-glow to-transparent"></div>
                <h4 className="text-xl font-display text-solo-blue-glow mb-3">Understated Charisma</h4>
                <p className="text-gray-300">Without seeking followers, Jin-Woo naturally attracts loyal allies. His authenticity and straightforward approach earn him respect from friend and foe alike.</p>
                <div className="mt-3 text-sm text-solo-blue">
                  <span className="font-bold">How to achieve:</span> Be genuine in your interactions and maintain consistent principles. True charisma isn't about being the loudest or most visible, but about creating a presence that others naturally gravitate toward.
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-gradient-to-r from-solo-dark via-solo-purple/10 to-solo-dark rounded-lg">
              <h4 className="text-xl font-display text-gradient-purple mb-4">Aura Manifestation</h4>
              <p className="text-gray-200">
                The Shadow Monarch's aura isn't simply a display of power—it's a manifestation of his inner state. Jin-Woo's aura evolved from the desperate survival instinct of a weak hunter to the commanding presence of a sovereign entity. The transformation wasn't merely physical but spiritual, as his understanding of his own purpose and potential deepened.
              </p>
              <p className="mt-4 text-gray-200">
                To cultivate your own aura, focus on aligning your actions with your core values and developing unshakeable self-knowledge. An authentic aura cannot be faked—it radiates naturally when your external presence aligns with your internal truth.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                className="px-8 py-4 bg-gradient-to-r from-solo-purple to-solo-light-purple hover:from-solo-light-purple hover:to-solo-purple text-white rounded-lg font-medium transition-all duration-500 shadow-neon-purple hover:shadow-neon-purple-intense transform hover:scale-105"
              >
                Master Your Aura
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Custom animations */}
      <style>
        {`
        @keyframes rain {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 20% 100%;
          }
        }
        
        .rain-effect {
          background-image: linear-gradient(to bottom, transparent 0%, rgba(139, 92, 246, 0.2) 100%),
                            repeating-linear-gradient(transparent, transparent 1px, rgba(139, 92, 246, 0.3) 2px, transparent 3px, transparent 5px);
          background-size: 100% 100%, 20px 20px;
          animation: rain 8s linear infinite;
        }
        
        @keyframes spark {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          20% {
            opacity: 1;
            transform: scale(1.5);
          }
          40% {
            opacity: 0.5;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0);
          }
        }
        
        @keyframes appear-float {
          0% {
            opacity: 0;
            transform: scale(0) translateY(0px);
          }
          20% {
            opacity: 1;
            transform: scale(1) translateY(0px);
          }
          80% {
            opacity: 0.7;
            transform: scale(0.8) translateY(-15px);
          }
          100% {
            opacity: 0;
            transform: scale(0) translateY(-20px);
          }
        }
        
        .shadow-glow {
          box-shadow: 0 0 10px 3px rgba(59, 130, 246, 0.7);
        }
        `}
      </style>
    </section>
  );
};

export default AuraSection;
