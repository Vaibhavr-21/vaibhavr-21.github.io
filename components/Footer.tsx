import React from 'react';
import { personalInfo } from '../data';
import { Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h2>
          <p className="text-slate-400">{personalInfo.title}</p>
        </div>

        <div className="flex flex-col gap-4 text-center md:text-right">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors flex items-center justify-center md:justify-end gap-2">
                <Mail size={16} />
                {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors flex items-center justify-center md:justify-end gap-2">
                <Phone size={16} />
                {personalInfo.phone}
            </a>
            <p className="text-sm text-slate-500 mt-2">
              Based in {personalInfo.location}
            </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 flex justify-between items-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Vaibhav Reddy. All rights reserved.
        </p>
        <button 
          onClick={scrollToTop}
          className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};