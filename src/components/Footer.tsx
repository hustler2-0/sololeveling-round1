import React from 'react';
import { Github } from '@/icons/Github';

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

        {/* Team Members */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-solo-purple mb-4 text-center">Team Hustlers</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center text-gray-400 text-sm">
            <li>
              <a 
                href="https://www.linkedin.com/in/Shubhashish-Chakraborty" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-solo-purple transition-colors"
              >
                Shubhashish Chakraborty
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/nihal-yadav2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-solo-purple transition-colors"
              >
                Nihal Yadav
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/moksh-mishra-956868289" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-solo-purple transition-colors"
              >
                Moksh Mishra
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/akshat-singh-tomar-4307772a0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-solo-purple transition-colors"
              >
                Akshat Singh Tomar
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/mayank-agrawal155" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-solo-purple transition-colors"
              >
                Mayank Agrawal
              </a>
            </li>
          </ul>
        </div>

        {/* GitHub Project Link */}
        <div className="mt-10 text-center">
          <a 
            href="https://github.com/hustler2-0/sololeveling-round1"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
          >
            <Github/>
            View Project on GitHub
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Team Hustlers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
