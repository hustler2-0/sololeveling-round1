
import React from 'react';
import { sungJinWooPractices } from '../data/jinWooData';
import { Dumbbell } from 'lucide-react';

const PracticesSection = () => {
  return (
    <section id="practices" className="py-20 relative bg-gradient-to-b from-solo-shadow/80 to-solo-dark">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="section-heading text-center">Training & Practices</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {sungJinWooPractices.map((practice, index) => (
            <div 
              key={practice.id}
              className="glass-card p-6 rounded-lg opacity-0 animate-appear flex"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mr-4 shrink-0">
                <div className="w-12 h-12 rounded-full bg-solo-purple/20 flex items-center justify-center">
                  <Dumbbell size={24} className="text-solo-purple" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{practice.name}</h3>
                <p className="text-gray-300 mb-4">{practice.description}</p>
                <div className="bg-solo-purple/10 p-3 rounded border-l-2 border-solo-purple">
                  <span className="text-solo-light-purple font-medium block mb-1">Benefit:</span>
                  <p className="text-gray-300 text-sm">{practice.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticesSection;
