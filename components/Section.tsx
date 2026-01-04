import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      <h2 className="text-3xl font-bold text-slate-800 mb-8 pb-2 border-b-4 border-primary inline-block">
        {title}
      </h2>
      <div className="mt-4">
        {children}
      </div>
    </section>
  );
};