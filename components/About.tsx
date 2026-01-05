import React from 'react';
import { Section } from './Section';
import { personalInfo } from '../data';

export const About: React.FC = () => {
  return (
    <Section id="about" title="Objective">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
        <p className="text-slate-700 text-lg leading-relaxed">
          {personalInfo.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="bg-blue-50 text-primary px-4 py-2 rounded-lg font-medium text-sm">
            12+ Years Experience
          </div>
          <div className="bg-blue-50 text-primary px-4 py-2 rounded-lg font-medium text-sm">
            SAP ABAP Expert
          </div>
          <div className="bg-blue-50 text-primary px-4 py-2 rounded-lg font-medium text-sm">
            S/4 HANA
          </div>
        </div>
      </div>
    </Section>
  );
};