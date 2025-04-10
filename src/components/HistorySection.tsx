
import React from 'react';
import { sungJinWooHistory } from '../data/jinWooData';
import { Clock } from 'lucide-react';

const HistorySection = () => {
  // Color mapping for importance
  const importanceColors = {
    high: 'from-solo-purple to-solo-light-purple',
    medium: 'from-solo-blue to-solo-blue-glow',
    low: 'from-gray-500 to-gray-400'
  };
  
  return (
    <section id="history" className="py-20 relative">
      <div className="absolute inset-0 shadow-particles" />
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="section-heading text-center">The Ascension Journey</h2>
        
        <div className="mt-16 relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-solo-purple/50 to-transparent" />
          
          <div className="space-y-12">
            {sungJinWooHistory.map((event, index) => (
              <div 
                key={event.id}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col opacity-0 animate-appear`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-radial from-solo-purple to-solo-light-purple animate-pulse-glow z-20" />
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pb-8 md:pb-0`}>
                  <div 
                    className={`glass-card p-6 rounded-lg border-l-4 md:border-l-0 ${index % 2 === 0 ? 'md:border-r-4' : 'md:border-l-4'} hover:translate-y-[-5px] transition-all duration-300`}
                    style={{ borderColor: event.importance === 'high' ? '#8B5CF6' : event.importance === 'medium' ? '#3B82F6' : '#6B7280' }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Clock size={18} className={`text-${event.importance === 'high' ? 'solo-purple' : event.importance === 'medium' ? 'solo-blue' : 'gray-400'}`} />
                      <span className="text-solo-light-purple font-medium">{event.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                    
                    <div className={`h-1 w-24 mt-4 rounded-full bg-gradient-to-r ${importanceColors[event.importance]}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
