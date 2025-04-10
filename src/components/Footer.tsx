
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-solo-shadow relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-display font-bold text-gradient-purple">Sung Jin-Woo</span>
            <p className="text-gray-400 text-sm mt-2">The Shadow Monarch's Legacy</p>
          </div>
          
          <div className="flex gap-8 items-center">
            <nav>
              <ul className="flex gap-6 text-gray-300">
                <li><a href="#skills" className="hover:text-solo-purple transition-colors">Skills</a></li>
                <li><a href="#strengths" className="hover:text-solo-purple transition-colors">Strengths</a></li>
                <li><a href="#achievements" className="hover:text-solo-purple transition-colors">Achievements</a></li>
                <li><a href="#history" className="hover:text-solo-purple transition-colors">History</a></li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
