import React from 'react';
import { Section } from './Section';
import { certificationsData, awards } from '../data';
import { Award, Trophy } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications & Awards">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Certifications */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Award className="text-accent" />
            Certifications
          </h3>
          <ul className="space-y-4">
            {certificationsData.map((cert, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-700">
                <div className="min-w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                <span>{cert.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Awards */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Trophy className="text-yellow-500" />
            Awards & Recognition
          </h3>
          <ul className="space-y-4">
            {awards.map((award, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-700">
                 <div className="min-w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2"></div>
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </Section>
  );
};