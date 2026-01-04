import React from 'react';
import { Section } from './Section';
import { educationData } from '../data';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" className="bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
            <div className="bg-blue-50 p-3 rounded-lg text-primary">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800">{edu.course}</h3>
              <div className="text-slate-600 font-medium">{edu.institution}</div>
              <div className="text-slate-500 text-sm">{edu.university}</div>
              <div className="flex items-center gap-3 mt-2 text-sm">
                <span className="bg-slate-100 px-2 py-1 rounded text-slate-600 font-medium">
                  {edu.year}
                </span>
                <span className="text-accent font-semibold">
                  {edu.percentage}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};