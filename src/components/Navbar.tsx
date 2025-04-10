
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-solo-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-display font-bold text-gradient-purple flex items-center">
            <div className="w-8 h-8 bg-solo-purple/20 rounded-full flex items-center justify-center mr-2">
              <div className="w-4 h-4 bg-solo-purple rounded-full animate-pulse" />
            </div>
            Shadow Monarch
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex gap-8 items-center">
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#strengths">Strengths</NavLink>
              <NavLink href="#practices">Practices</NavLink>
              <NavLink href="#achievements">Achievements</NavLink>
              <NavLink href="#history">History</NavLink>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-solo-dark/95 backdrop-blur-md">
          <div className="container max-w-6xl mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4">
              <MobileNavLink href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</MobileNavLink>
              <MobileNavLink href="#strengths" onClick={() => setIsMobileMenuOpen(false)}>Strengths</MobileNavLink>
              <MobileNavLink href="#practices" onClick={() => setIsMobileMenuOpen(false)}>Practices</MobileNavLink>
              <MobileNavLink href="#achievements" onClick={() => setIsMobileMenuOpen(false)}>Achievements</MobileNavLink>
              <MobileNavLink href="#history" onClick={() => setIsMobileMenuOpen(false)}>History</MobileNavLink>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href}
      className="text-gray-300 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-solo-purple transition-all duration-300 group-hover:w-full" />
    </a>
  </li>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <li>
    <a 
      href={href}
      className="text-gray-300 hover:text-white transition-colors block py-2 border-b border-gray-800"
      onClick={onClick}
    >
      {children}
    </a>
  </li>
);

export default Navbar;
