
import React from 'react';
import { sungJinWooAchievements } from '../data/jinWooData';
import { Trophy } from 'lucide-react';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="absolute inset-0 bg-purple-glow opacity-30" />
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="section-heading text-center">Legendary Achievements</h2>
        
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-solo-purple/80 via-solo-light-purple/50 to-solo-purple/80 rounded-full" />
          
          {/* Achievement cards */}
          <div className="space-y-12">
            {sungJinWooAchievements.map((achievement, index) => (
              <div 
                key={achievement.id} 
                className={`relative flex items-center opacity-0 animate-appear`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-solo-purple animate-shadow-pulse z-20" />
                
                {/* Content */}
                <div className={`w-full flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                  {/* Date */}
                  <div className={`w-2/5 ${index % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                    <span className="text-solo-light-purple font-display">{achievement.date}</span>
                  </div>
                  
                  {/* Achievement */}
                  <div className="w-3/5 max-w-sm">
                    <div 
                      className="glass-card p-6 rounded-lg border-l-4 hover:translate-y-[-5px] transition-all duration-300"
                      style={{ borderColor: '#8B5CF6' }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="shrink-0">
                          <Trophy size={24} className="text-solo-purple" />
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-bold text-white mb-1">{achievement.title}</h3>
                          <p className="text-gray-300 text-sm">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
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

export default AchievementsSection;
