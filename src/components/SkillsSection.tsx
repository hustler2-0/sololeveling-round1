
import React from 'react';
import { sungJinWooSkills } from '../data/jinWooData';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-solo-dark to-solo-shadow/80">
      <div className="absolute inset-0 bg-rune-pattern opacity-5" />
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="section-heading text-center">Shadow Monarch Abilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {sungJinWooSkills.map((skill, index) => (
            <div 
              key={skill.id}
              className="glass-card rounded-lg p-6 opacity-0 animate-appear group hover:translate-y-[-5px] transition-all duration-300"
              style={{ 
                animationDelay: `${index * 150}ms`,
                background: `linear-gradient(145deg, rgba(26, 31, 44, 0.8), rgba(15, 23, 42, 0.9))`,
                boxShadow: `0 0 15px 1px ${skill.color}30`
              }}
            >
              <div 
                className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center"
                style={{ background: `${skill.color}30` }}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:animate-pulse-glow"
                  style={{ background: `${skill.color}50` }}
                >
                  <span className="text-xl font-bold" style={{ color: skill.color }}>{skill.id}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-glow">{skill.name}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
