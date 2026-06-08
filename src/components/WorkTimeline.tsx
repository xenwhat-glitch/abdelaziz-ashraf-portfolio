import { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle, Terminal, Award } from "lucide-react";
import { workExperienceList } from "../data";
import { WorkExperience } from "../types";

export default function WorkTimeline() {
  const [expandedId, setExpandedId] = useState<string>("sanad"); // Default expand Sanad

  function toggleExpand(id: string) {
    setExpandedId(expandedId === id ? "" : id);
  }

  return (
    <section id="experience" className="py-20 bg-white relative border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" id="experience-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="experience-header">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-none">
            PROFESSIONAL TIMELINE
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-950 uppercase tracking-wide mt-4">
            Relevant Work Experience
          </h2>
          <div className="w-16 h-1 bg-gray-950 mx-auto mt-4"></div>
        </div>

        {/* Stepped Timeline */}
        <div className="relative border-l border-gray-200 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12" id="timeline-stepper">
          
          {workExperienceList.map((job) => {
            const isExpanded = expandedId === job.id;
            return (
              <div 
                key={job.id} 
                id={`timeline-node-${job.id}`}
                className="relative group transition-all"
              >
                {/* Visual Icon Node on Timeline Line - Sharp Square Block */}
                <div className={`absolute -left-[38px] md:-left-[54px] top-1.5 w-6 h-6 rounded-none border-2 bg-white flex items-center justify-center transition-all ${
                  isExpanded
                    ? "border-blue-600"
                    : "border-gray-300 group-hover:border-blue-500"
                }`}>
                  <Briefcase className={`w-3.5 h-3.5 transition-colors ${
                    isExpanded ? "text-blue-650" : "text-gray-400 group-hover:text-blue-600"
                  }`} />
                </div>

                {/* Main Card */}
                <div className={`p-6 sm:p-8 bg-white border transition-all ${
                  isExpanded
                    ? "border-blue-600"
                    : "border-gray-200 hover:border-gray-400"
                }`}>
                  
                  {/* Click To Expand Header trigger */}
                  <div 
                    onClick={() => toggleExpand(job.id)}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 cursor-pointer select-none"
                    id={`experience-header-${job.id}`}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display font-bold text-gray-950 text-base uppercase tracking-wider">
                          {job.role}
                        </h3>
                        <span className="px-2.5 py-0.5 bg-gray-50 text-gray-950 text-[10px] font-mono font-bold rounded-none border border-gray-250 uppercase tracking-widest">
                          @{job.company}
                        </span>
                      </div>
                      
                      {/* Subtitles (Location & Dates) */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-gray-400 font-mono uppercase tracking-wider mt-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-blue-600" />
                          <span>{job.location}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" />
                          <span>{job.period}</span>
                        </span>
                        {job.periodArabic && (
                          <span className="text-gray-400 font-sans tracking-normal font-normal" dir="rtl">
                            ({job.periodArabic})
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-blue-605 text-[10px] font-bold uppercase tracking-widest self-end sm:self-center font-mono">
                      <span>{isExpanded ? "Collapse Specs" : "Expand Specs"}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-blue-600" /> : <ChevronDown className="w-4 h-4 text-blue-600" />}
                    </div>
                  </div>

                  {/* Expandable specs block */}
                  {isExpanded && (
                    <div className="mt-6 pt-5 border-t border-gray-200 space-y-6" id={`job-specs-${job.id}`}>
                      
                      {/* Big numbers (Achievements) */}
                      {job.achievements && job.achievements.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-blue-200 bg-blue-50/20 divide-y sm:divide-y-0 sm:divide-x divide-blue-200 rounded-none">
                          {job.achievements.map((ach, index) => (
                            <div key={index} className="p-4 flex items-start gap-2.5 text-xs text-blue-900 font-semibold leading-relaxed">
                              <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Main Bullet points */}
                      <div>
                        <h4 className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-3">
                          CORE RESPONSIBILITIES & DELIVERY FOOTPRINT
                        </h4>
                        
                        <ul className="space-y-3.5">
                          {job.bulletPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-650 leading-relaxed">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Pill Box */}
                      <div>
                        <h4 className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-3">
                          DEPLOYED STACK RUNTIME
                        </h4>
                        
                        <div className="flex flex-wrap gap-1.5">
                          {job.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2.5 py-1 bg-white border border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600 text-[10px] font-bold uppercase tracking-widest rounded-none transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              </div>
            );
          })}

        </div>

        {/* Core Methodology Highlights info */}
        <div className="mt-16 bg-[#FAFAFA] border border-gray-200 p-6 rounded-none text-center flex flex-col md:flex-row items-center justify-between gap-4" id="experience-methodology-summary">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 bg-white border border-gray-200 text-blue-600 rounded-none">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-gray-950 text-xs sm:text-sm uppercase tracking-wider">Strict Adherence to Google Play Store Standards</h4>
              <p className="text-xs text-gray-500 max-w-lg mt-1.5 leading-relaxed">I execute structured memory management audits, trace leak profiles via Profile tools, and configure proper RTL resource layouts as a standard implementation rule.</p>
            </div>
          </div>
          <span className="font-mono text-[9px] text-blue-600 font-bold bg-white px-3.5 py-1.5 border border-gray-200 rounded-none uppercase tracking-widest self-center md:self-auto flex-shrink-0">
            PROVEN TRACK RECORD
          </span>
        </div>

      </div>
    </section>
  );
}
