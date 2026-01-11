import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { personalInfo } from '../data';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export const Hero: React.FC = () => {
  return (
    <div className="bg-primary dark:bg-slate-900 text-white pt-20 pb-24 px-4 md:px-8 transition-colors duration-300 print:bg-white print:text-slate-900 print:pt-0 print:pb-8 print:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-2/3 space-y-6"
        >
          <div className="inline-block bg-accent/20 px-3 py-1 rounded-full text-accent text-sm font-semibold mb-2 border border-accent/30 print:border-slate-300 print:text-slate-700 print:bg-slate-100">
            SAP Certified Associate
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight print:text-slate-900">
            Hello, I'm <br/>
            <span className="text-accent print:text-primary">
              <Typewriter
                words={[personalInfo.name]}
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300 font-light print:text-slate-700">
            {personalInfo.title}
          </h2>
          <p className="text-slate-300 max-w-xl text-lg leading-relaxed print:text-slate-600">
            {personalInfo.summary}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8 text-sm md:text-base print:text-slate-800">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-accent transition-colors print:text-slate-900">
              <Mail size={18} className="text-accent print:text-primary" />
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors print:text-slate-900">
              <Phone size={18} className="text-accent print:text-primary" />
              {personalInfo.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={18} className="text-accent print:text-primary" />
              {personalInfo.location}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="pt-6 print:hidden"
          >
            <button 
              onClick={() => window.print()}
              className="bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2"
            >
              <Download size={20} />
              Save as PDF
            </button>
          </motion.div>
        </motion.div>
        
        {/* Photo or Abstract Fallback */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block md:w-1/3 relative mt-12 md:mt-0 print:hidden"
        >
          {/* Decorative Blobs */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/40 rounded-full blur-xl"></div>
          
          {/* Image Container */}
          <div className="w-64 h-64 rounded-full border-4 border-white/10 relative overflow-hidden mx-auto shadow-2xl z-10 bg-slate-800">
            {personalInfo.photoUrl ? (
              <img 
                src={personalInfo.photoUrl} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              /* Fallback Abstract */
              <div className="w-full h-full flex items-center justify-center relative bg-slate-700/50">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-80"></div>
                 <span className="text-6xl font-bold text-white/20 z-10">VR</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
