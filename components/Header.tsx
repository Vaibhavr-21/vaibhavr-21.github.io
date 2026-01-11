import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md dark:bg-slate-950/90 shadow-md py-3'
          : 'bg-primary dark:bg-slate-900 text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-primary dark:text-white' : 'text-white'}`}>
          VR<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-4">
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 mr-4">
            {navLinks.map((link) => (
                <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-accent transition-colors ${
                    isScrolled ? 'text-slate-700 dark:text-slate-200' : 'text-slate-200'
                }`}
                >
                {link.name}
                </a>
            ))}
            </nav>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
            className="md:hidden p-1 ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
            {mobileMenuOpen ? (
                <X className={isScrolled ? 'text-slate-800 dark:text-white' : 'text-white'} />
            ) : (
                <Menu className={isScrolled ? 'text-slate-800 dark:text-white' : 'text-white'} />
            )}
            </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-lg border-t border-slate-100 dark:border-slate-800">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-700 dark:text-slate-200 font-medium py-2 border-b border-slate-50 dark:border-slate-800 hover:text-primary dark:hover:text-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
