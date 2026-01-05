import React from 'react';
import { Section } from './Section';
import { skillCategories } from '../data';
import { CheckCircle2, Code2, Database, LayoutTemplate } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes("Core")) return <Code2 className="text-primary" size={24} />;
    if (title.includes("HANA")) return <LayoutTemplate className="text-primary" size={24} />;
    return <Database className="text-primary" size={24} />;
  };

  return (
    <Section id="skills" title="Technical Skills" className="bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="bg-blue-50/50 p-4 border-b border-slate-100 flex items-center gap-3">
              {getIcon(category.title)}
              <h3 className="font-bold text-slate-800">{category.title}</h3>
            </div>
            <div className="p-5 flex-1">
              <ul className="space-y-3">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} />
                    <span className="text-slate-600 text-sm font-medium leading-tight">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};