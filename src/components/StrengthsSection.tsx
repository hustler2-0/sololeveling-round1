
import React from 'react';
import { sungJinWooStrengths } from '../data/jinWooData';

const StrengthsSection = () => {
  return (
    <section id="strengths" className="py-20 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-heading text-center">Extraordinary Strengths</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {sungJinWooStrengths.map((strength, index) => (
            <div 
              key={strength.id}
              className="stat-card opacity-0 animate-appear"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-solo-purple/20 flex items-center justify-center mr-3 shrink-0">
                  <span className="text-2xl font-display text-solo-purple">{strength.id}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white">{strength.name}</h3>
              </div>
              
              <div className="w-full bg-gray-800/50 rounded-full h-2.5 mb-3">
                <div 
                  className="bg-gradient-to-r from-solo-purple to-solo-light-purple h-2.5 rounded-full animate-pulse-glow"
                  style={{ width: `${(strength.value / 300) * 100}%` }}
                />
              </div>
              
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-gray-400">0</span>
                <span className="text-solo-light-purple font-medium">{strength.value}/300</span>
              </div>
              
              <p className="text-gray-300 text-sm mt-3">{strength.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 max-w-3xl mx-auto">
            With stats far exceeding even National Level hunters, Sung Jin-Woo's powers continue to grow with every battle.
            His true capabilities remain unknown, as the System continually allows him to break his previous limits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
