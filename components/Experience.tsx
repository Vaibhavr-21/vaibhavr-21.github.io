import React, { useState } from 'react';
import { Section } from './Section';
import { experienceData } from '../data';
import { Briefcase, Calendar, Hash } from 'lucide-react';

export const Experience: React.FC = () => {
  const [showLeavingReasons, setShowLeavingReasons] = useState(false);

  return (
    <Section id="experience" title="Professional Experience">
      <div className="flex justify-end mb-6 print:hidden">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={showLeavingReasons}
            onChange={() => setShowLeavingReasons(!showLeavingReasons)}
          />
          <div className="relative w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          <span className="ms-3 text-sm font-medium text-slate-900">Reason for Job Loss</span>
        </label>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {experienceData.map((job, index) => (
          <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-hover:bg-accent group-hover:text-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
              <Briefcase size={18} />
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl text-slate-800">{job.designation}</h3>
                  <div className="text-primary font-semibold">{job.company}</div>
                </div>
                <div className="flex items-center text-sm text-slate-500 mt-2 sm:mt-0 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                  <Calendar size={14} className="mr-1.5" />
                  {job.duration}
                </div>
              </div>

              {/* Projects Loop */}
              {job.projects.length > 0 && (
                <div className="mt-6 space-y-6">
                  {job.projects.map((project, pIndex) => (
                    <div key={pIndex} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <div className="flex flex-col gap-2 mb-3">
                        <div className="flex flex-wrap gap-2 items-baseline justify-between">
                          <span className="font-semibold text-slate-700 block">
                            Project: {project.name}
                          </span>
                          {project.duration && (
                            <span className="text-xs text-slate-500 italic">
                               {project.duration}
                            </span>
                          )}
                        </div>
                        
                        {/* Tags / Tech Stack */}
                        {project.tags && project.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {project.tags.map((tag, tIndex) => (
                              <span key={tIndex} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-800">
                                <Hash size={10} className="mr-0.5 opacity-50" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Leaving Reason - Conditional Display */}
                      {showLeavingReasons && project.leavingReason && (
                         <div className="mb-3 p-3 bg-red-50 border border-red-100 rounded text-sm text-red-800">
                           <span className="font-bold block mb-1 text-red-900">Reason for leaving:</span>
                           {project.leavingReason}
                         </div>
                      )}
                      
                      <ul className="space-y-2 mt-3">
                        {project.responsibilities.map((resp, rIndex) => (
                          <li key={rIndex} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-accent mt-1.5 text-[6px]">●</span>
                            <span className="flex-1">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};