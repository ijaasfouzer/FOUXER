import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FouxerLogo } from './FouxerLogo';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className={`mx-auto px-6 rounded-full transition-all duration-300 ${
        isScrolled ? 'max-w-[90%] bg-dark-900/90 backdrop-blur-sm shadow-2xl border border-dark-800' : 'container'
      }`}>
        <div className="flex items-center justify-between py-2">
          <Link to="/" className="flex items-center space-x-2 animate-fade-in">
            <FouxerLogo className="h-8" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {location.pathname === '/' ? (
              <>
                <a href="#services" className="text-dark-300 hover:text-brand-purple transition-colors duration-300">Services</a>
                <a href="#portfolio" className="text-dark-300 hover:text-brand-purple transition-colors duration-300">Portfolio</a>
                <a href="#about" className="text-dark-300 hover:text-brand-purple transition-colors duration-300">About</a>
                <a href="#contact" className="text-dark-300 hover:text-brand-purple transition-colors duration-300">Contact</a>
                <a
                  href="#contact"
                  className="px-6 py-2 bg-gradient-brand text-white rounded-full hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </a>
              </>
            ) : (
              <>
                <Link to="/" className="text-dark-300 hover:text-brand-purple transition-colors duration-300">Home</Link>
                <Link to="/#services" className="text-dark-300 hover:text-brand-purple transition-colors duration-300">Services</Link>
                <Link to="/#about" className="text-dark-300 hover:text-brand-purple transition-colors duration-300">About</Link>
                <Link to="/#contact" className="text-dark-300 hover:text-brand-purple transition-colors duration-300">Contact</Link>
                <Link
                  to="/#contact"
                  className="px-6 py-2 bg-gradient-brand text-white rounded-full hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}