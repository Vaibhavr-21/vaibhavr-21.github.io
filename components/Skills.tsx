import React from 'react';
import { Section } from './Section';
import { skillsList } from '../data';
import { CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills" className="bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsList.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:border-blue-200 transition-colors"
          >
            <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
            <span className="text-slate-700 font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};