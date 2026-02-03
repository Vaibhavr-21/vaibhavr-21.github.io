import React, { useState } from 'react';
import { Section } from './Section';
import { experienceData } from '../data';
import { Briefcase, Calendar, Hash, Calculator } from 'lucide-react';
import { getGapInMonths } from '../utils/dateHelpers';


export const Experience: React.FC = () => {
  const [showLeavingReasons, setShowLeavingReasons] = useState(false);
  const [salaryInputs, setSalaryInputs] = useState<{ [key: string]: string }>({});

  const handleSalaryChange = (id: string, value: string) => {
    setSalaryInputs(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const calculateLoss = (gap: number, salaryStr: string) => {
    if (!gap || !salaryStr) return 0;
    const salary = parseFloat(salaryStr.replace(/,/g, ''));
    if (isNaN(salary)) return 0;
    return gap * salary;
  };

  // Calculate computed total loss (based on user-provided salary inputs)
  const computedLoss = experienceData.reduce((total, job, index) => {
      let gapMonths = 0;
      if (index > 0) {
          const nextJob = experienceData[index - 1];
          gapMonths = getGapInMonths(job.duration, nextJob.duration);
      }

      const salaryStr = salaryInputs[job.id];
      const loss = calculateLoss(gapMonths, salaryStr);
      return total + loss;
  }, 0);

  // Detect if user has provided any salary inputs
  const userProvidedSalary = Object.values(salaryInputs).some(v => v && v.trim() !== '');

  // Default value to display when no user inputs exist
  const defaultLoss = 3500000;

  const displayLoss = userProvidedSalary ? computedLoss : defaultLoss;
  const formattedDisplayLoss = displayLoss.toLocaleString(undefined, { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
  const displayIsDefault = !userProvidedSalary;

  return (
    <Section id="experience" title="Professional Experience">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 print:hidden">

        {/* Cumulative Loss Display */}
        <div className={`transition-all duration-500 ease-in-out ${showLeavingReasons ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0 overflow-hidden'}`}>
           <div className="bg-red-50 border border-red-200 rounded-lg p-3 shadow-sm flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-full text-red-600">
                <Calculator size={20} />
              </div>
              <div>
                <div className="text-xs font-semibold text-red-500 uppercase tracking-wide">Total Cumulative Loss</div>
                <div className={`text-2xl font-bold ${displayIsDefault ? 'text-slate-500' : 'text-red-800'}`}>
                  {formattedDisplayLoss}
                </div>
                <div className="text-[10px] text-red-400 italic">Monetary & Psychological Impact</div>
              </div>
           </div>
        </div>

        <label className="inline-flex items-center cursor-pointer mt-4 md:mt-0">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={showLeavingReasons}
            onChange={() => setShowLeavingReasons(!showLeavingReasons)}
          />
          <div className="relative w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after[...]
          <span className="ms-3 text-sm font-medium text-slate-900">Career Gap & Impact Analysis</span>
        </label>
      </div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b[...]
        {experienceData.map((job, index) => {
          // Calculate gap to the NEXT job (chronologically previous in the list)
          // List is reverse chronological: [Newest, ..., Oldest]
          // Gap is between current job's END and next job's START?
          // No, wait.
          // Job[0] (Current) -> Gap -> Job[1] (Previous).
          // Gap is between Job[1].End and Job[0].Start.
          // So the gap associated with "Leaving Job[1]" is the one BEFORE Job[0].

          // Let's render the gap logic inside the job card of the *previous* job?
          // If I am at Job[1], I left it, and then had a gap before Job[0].
          // So Job[1] is the "exited" job.
          // We calculate gap between Job[1].duration (End) and Job[0].duration (Start).

          let gapMonths = 0;
          if (index > 0) {
             const nextJob = experienceData[index - 1]; // Chronologically newer
             gapMonths = getGapInMonths(job.duration, nextJob.duration);
          }

          return (
          <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-hover:bg-accent group-hover:text-white text-slate-500 shadow shrink-0 md:orde[...]
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

              {/* Financial Loss Calculator (Only if gap exists and toggle is ON) */}
              {showLeavingReasons && gapMonths > 0 && (
                <div className="mb-6 p-4 bg-orange-50 border border-orange-100 rounded-lg animate-fadeIn">
                  <div className="flex items-center gap-2 text-orange-800 font-semibold mb-2">
                    <Calculator size={16} />
                    <span>Unemployment Gap: {gapMonths} months</span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label htmlFor={`salary-${job.id}`} className="block text-xs font-medium text-orange-700 mb-1">
                        Last Monthly Salary (at exit)
                      </label>
                      <div className="relative">
                         <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-bold">
                           $ / ₹
                         </span>
                         <input
                          type="number"
                          id={`salary-${job.id}`}
                          placeholder="e.g. 5000"
                          className="w-full pl-10 pr-3 py-1.5 text-sm border border-orange-200 rounded focus:ring-2 focus:ring-orange-300 focus:outline-none"
                          value={salaryInputs[job.id] || ''}
                          onChange={(e) => handleSalaryChange(job.id, e.target.value)}
                        />
                      </div>
                    </div>

                    {salaryInputs[job.id] && (
                       <div className="pt-2 border-t border-orange-200">
                         <div className="text-xs text-orange-600">Notional Financial Loss:</div>
                         <div className="text-lg font-bold text-orange-900">
                           {parseFloat(salaryInputs[job.id]) ? (parseFloat(salaryInputs[job.id]) * gapMonths).toLocaleString() : 0}
                         </div>
                       </div>
                    )}
                  </div>
                </div>
              )}

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
          );
        })}
      </div>
    </Section>
  );
};
