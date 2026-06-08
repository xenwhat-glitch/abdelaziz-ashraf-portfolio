import { useState } from "react";
import { Badge, Award, GraduationCap, ArrowUpRight, BookOpen, Calendar, MapPin, CheckCircle2, ChevronRight, Trophy } from "lucide-react";
import { certificationsList, educationHistory, honorsAndAwards } from "../data";

export default function CertificatesList() {
  const [activeTab, setActiveTab] = useState<"certs" | "edu" | "awards">("certs");

  return (
    <section id="credentials" className="py-20 bg-white relative border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" id="credentials-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="credentials-header">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-none">
            ACCELERATED GROWTH
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-950 uppercase tracking-wide mt-4">
            Education, Certifications & Honors
          </h2>
          <div className="w-16 h-1 bg-gray-950 mx-auto mt-4"></div>
        </div>

        {/* Credentials Tab Toggle bar */}
        <div className="flex justify-center gap-1.5 sm:gap-3 mb-12 border-b border-gray-250 pb-0" id="credentials-switches">
          
          <button
            onClick={() => setActiveTab("certs")}
            className={`px-4 sm:px-6 py-3 font-bold text-[10px] sm:text-xs uppercase tracking-widest cursor-pointer border-b-2 transition-all ${
              activeTab === "certs"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-450 hover:text-gray-950"
            }`}
            id="tab-toggle-certs"
          >
            Certifications ({certificationsList.length})
          </button>

          <button
            onClick={() => setActiveTab("edu")}
            className={`px-4 sm:px-6 py-3 font-bold text-[10px] sm:text-xs uppercase tracking-widest cursor-pointer border-b-2 transition-all ${
              activeTab === "edu"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-450 hover:text-gray-950"
            }`}
            id="tab-toggle-edu"
          >
            Academic Degree (1)
          </button>

          <button
            onClick={() => setActiveTab("awards")}
            className={`px-4 sm:px-6 py-3 font-bold text-[10px] sm:text-xs uppercase tracking-widest cursor-pointer border-b-2 transition-all ${
              activeTab === "awards"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-450 hover:text-gray-950"
            }`}
            id="tab-toggle-awards"
          >
            Prestige Awards (1)
          </button>

        </div>

        {/* Dynamic content rendering based on active tab state */}
        <div className="min-h-[300px]" id="credentials-content-body">
          
          {/* Certifications Tab */}
          {activeTab === "certs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="certs-subgrid">
              {certificationsList.map((cert) => {
                const isTopCert = cert.id === "meta-android" || cert.id === "google-kotlin-nano";
                return (
                  <div
                    key={cert.id}
                    id={`cert-item-${cert.id}`}
                    className={`p-6 bg-white border border-gray-200 rounded-none transition-all hover:border-blue-600 flex flex-col justify-between ${
                      isTopCert
                        ? "shadow-none relative"
                        : ""
                    }`}
                  >
                    <div>
                      {/* Special gold star indicator */}
                      {isTopCert && (
                        <div className="absolute top-4 right-4 bg-blue-50 text-blue-600 font-mono text-[8px] uppercase tracking-widest px-2.5 py-1 rounded-none border border-blue-200">
                          Top Tier Credential
                        </div>
                      )}

                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-blue-50 border border-blue-150 text-blue-600 rounded-none">
                          {/* <Award className="w-4.5 h-4.5" /> */}
                          <img src={cert.logo} alt={cert.issuer} className="w-9 h-9" />
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400">{cert.issuer}</span>
                      </div>

                      <h4 className="font-display font-bold text-gray-950 text-sm sm:text-base uppercase tracking-wide leading-snug">
                        {cert.title}
                      </h4>

                      {/* Covered topics list */}
                      <div className="mt-4 space-y-2">
                        <span className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest block">
                          Core syllabus covered:
                        </span>
                        
                        <div className="flex flex-wrap gap-1 pt-1">
                          {cert.topics.map((topic, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 bg-[#FAFAFA] text-gray-500 border border-gray-200 rounded-none text-[9px] font-bold uppercase tracking-wide"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-205 flex items-center justify-between text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                      <span>Completed</span>
                      <span className="font-bold text-gray-700">{cert.date}</span>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

          {/* Academic Degree Tab */}
          {activeTab === "edu" && (
            <div className="max-w-4xl mx-auto" id="edu-subpanel">
              {educationHistory.map((edu, eIdx) => (
                <div
                  key={eIdx}
                  className="bg-white border border-gray-200 p-6 sm:p-8 rounded-none hover:border-blue-600 transition-all flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-start"
                >
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#FAFAFA] border border-gray-200 text-blue-600 rounded-none">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-gray-955 text-base sm:text-lg leading-snug uppercase tracking-wide">
                          {edu.degree} inside {edu.field}
                        </h4>
                        <p className="font-mono text-gray-400 text-[10px] uppercase tracking-wider mt-1.5">
                          {edu.institution} — Cairo Department of Computer Science
                        </p>
                      </div>
                    </div>

                    {/* Highlights bullet points list */}
                    <div className="space-y-3.5 pt-2">
                      <span className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest block">
                        Academic Footprint
                      </span>
                      
                      <ul className="space-y-2.5">
                        {edu.highlights.map((hlt, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-650 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{hlt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  <div className="flex md:flex-col justify-between md:items-end w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-8 text-right font-mono text-[10px] gap-3">
                    <div className="text-left md:text-right">
                      <span className="text-gray-400 block uppercase tracking-wider">Class Period</span>
                      <span className="font-bold text-gray-700 uppercase tracking-wide">{edu.period}</span>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="text-gray-400 block uppercase tracking-wider">Accreditation</span>
                      <span className="font-bold text-blue-600 uppercase tracking-widest">Graduated B.Sc.</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

          {/* Prestige Awards Tab */}
          {activeTab === "awards" && (
            <div className="max-w-4xl mx-auto" id="awards-subpanel">
              {honorsAndAwards.map((award, aIdx) => (
                <div
                  key={aIdx}
                  className="bg-white border border-amber-300 p-6 sm:p-10 rounded-none flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden"
                >
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-amber-50 border border-amber-200 text-amber-600 rounded-none">
                        <Trophy className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="font-mono text-[9px] text-amber-800 font-bold uppercase tracking-widest block bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-none w-fit mb-2 leading-none">
                          {award.year} NASA Event Winner
                        </span>
                        <h4 className="font-display font-bold text-gray-950 text-lg uppercase tracking-wide">
                          {award.award}
                        </h4>
                        <p className="font-mono text-gray-400 text-[10px] uppercase tracking-wider mt-1.5">
                          {award.event} Nodes
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-655 text-xs sm:text-sm leading-relaxed">
                      {award.description}
                    </p>

                    <div className="bg-[#FAFAFA] p-4 rounded-none border border-gray-200 font-sans text-xs">
                      <strong className="text-gray-950 uppercase tracking-wider text-[10px] block mb-1">System Designed:</strong>{" "}
                      <span className="text-gray-700 font-medium italic">{award.projectBuilt}</span>
                    </div>
                  </div>

                  <div className="text-center md:text-right font-mono text-[10px] border-t md:border-t-0 md:border-l border-amber-200 pt-4 md:pt-0 md:pl-8 flex-shrink-0 w-full md:w-auto self-stretch flex flex-row md:flex-col justify-between md:justify-center gap-4">
                    <div>
                      <span className="text-amber-700 block uppercase tracking-widest font-bold">Node</span>
                      <span className="font-bold text-gray-950 uppercase tracking-wider">Cairo Hub</span>
                    </div>
                    <div>
                      <span className="text-amber-700 block uppercase tracking-widest font-bold">Category Award</span>
                      <span className="font-bold text-gray-700 uppercase tracking-wider">1st Place Trophy</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
