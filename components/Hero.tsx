import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { personalInfo } from '../data';

export const Hero: React.FC = () => {
  return (
    <div className="bg-primary text-white pt-20 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 space-y-6">
          <div className="inline-block bg-accent/20 px-3 py-1 rounded-full text-accent text-sm font-semibold mb-2 border border-accent/30">
            SAP Certified Associate
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hello, I'm <br/>
            <span className="text-accent">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
            {personalInfo.title}
          </h2>
          <p className="text-slate-300 max-w-xl text-lg leading-relaxed">
            {personalInfo.summary}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8 text-sm md:text-base">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={18} className="text-accent" />
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={18} className="text-accent" />
              {personalInfo.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={18} className="text-accent" />
              {personalInfo.location}
            </span>
          </div>

          <div className="pt-6">
            <button 
              onClick={() => window.print()}
              className="bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2"
            >
              <Download size={20} />
              Save as PDF
            </button>
          </div>
        </div>
        
        {/* Abstract graphical element since we don't have a photo */}
        <div className="hidden md:block md:w-1/3 relative mt-12 md:mt-0">
          <div className="w-64 h-64 bg-slate-700/50 rounded-full flex items-center justify-center border-4 border-slate-600/50 relative overflow-hidden mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-80"></div>
            <span className="text-6xl font-bold text-white/20 z-10">VR</span>
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/40 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
};