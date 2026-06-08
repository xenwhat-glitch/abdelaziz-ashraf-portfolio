import { useState } from "react";
import { CheckCircle2, BadgeAlert, Sparkles, Star, Smartphone, Server, Layers, Wrench, Languages } from "lucide-react";
import { skillsList } from "../data";
import { Skill } from "../types";

export default function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  const categories = [
    { id: "all", label: "All Skills", icon: <Star className="w-3.5 h-3.5" /> },
    { id: "mobile", label: "Mobile Dev", icon: <Smartphone className="w-3.5 h-3.5" /> },
    { id: "language", label: "Languages", icon: <Languages className="w-3.5 h-3.5" /> },
    { id: "backend", label: "Backend Core", icon: <Server className="w-3.5 h-3.5" /> },
    { id: "architecture", label: "Architecture", icon: <Layers className="w-3.5 h-3.5" /> },
    { id: "tool", label: "Tools & APIs", icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills = activeCategory === "all"
    ? skillsList
    : skillsList.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="skills-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" id="skills-header">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-none">
            EXPERTISE ENGINES
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-950 uppercase tracking-wide mt-4">
            Acquired Technical Capabilities
          </h2>
          <p className="text-gray-500 text-xs mt-3 uppercase tracking-wider">
            Click on filters to isolate domains // Select a capability to view implementation footprints
          </p>
          <div className="w-16 h-1 bg-gray-950 mx-auto mt-4"></div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-10" id="skills-filter-toolbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setHoveredSkill(null);
              }}
              id={`skills-tab-${cat.id}`}
              className={`px-4 py-2.5 rounded-none font-bold text-[10px] uppercase tracking-widest flex items-center gap-1.5 transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-gray-950 text-white border-gray-950"
                  : "bg-white text-gray-500 border-gray-200 hover:text-gray-950 hover:bg-gray-50"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="skills-layout-grid">
          
          {/* Left Block: Grid of items */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" id="skills-cards-wrapper">
            {filteredSkills.map((skill) => {
              const matchesHover = hoveredSkill?.name === skill.name;
              return (
                <div
                  key={skill.name}
                  id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onClick={() => setHoveredSkill(skill)}
                  className={`p-4 bg-white rounded-none border transition-all cursor-pointer select-none ${
                    matchesHover
                      ? "border-blue-600 bg-blue-50/5 translate-x-0.5"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-display font-bold text-gray-950 text-sm tracking-tight uppercase">{skill.name}</h3>
                    {skill.featured && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-yellow-50 text-yellow-800 text-[8px] font-bold rounded-none border border-yellow-250 uppercase tracking-widest">
                        <Sparkles className="w-2.5 h-2.5 text-yellow-600" />
                        <span>Core</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono text-gray-500 mt-1 uppercase tracking-wider">
                    <span>Exp: {skill.years} {skill.years === 1 ? 'year' : 'years'}</span>
                    <span className="font-bold text-blue-600">{skill.level}% Exposure</span>
                  </div>

                  {/* Level visual progress indicator - thin drafting line */}
                  <div className="w-full bg-gray-150 h-[3px] rounded-none overflow-hidden mt-4">
                    <div
                      className="bg-blue-600 h-full rounded-none transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Block: Dynamic sub-topics detail panel */}
          <div className="lg:col-span-5" id="skill-detail-inspector-panel">
            <div className="sticky top-24 bg-white border border-gray-200 p-6 sm:p-8 rounded-none h-fit min-h-[340px] flex flex-col justify-between" id="skills-inspector-box">
              
              {hoveredSkill ? (
                <div className="space-y-5" id="inspector-active-state">
                  <div className="border-b border-gray-200 pb-4">
                    <span className="font-mono text-[9px] text-blue-600 font-bold uppercase tracking-widest block">
                      {hoveredSkill.category.toUpperCase()} SYSTEM CAPABILITIES
                    </span>
                    <h4 className="font-display font-bold text-gray-950 text-[15px] uppercase tracking-wider mt-1.5">
                      {hoveredSkill.name}
                    </h4>
                    <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
                      Operational exposure: ~{hoveredSkill.years} {hoveredSkill.years === 1 ? 'year' : 'years'} active track record
                    </p>
                  </div>

                  <div>
                    <h5 className="font-display font-bold text-gray-950 text-xs tracking-wider mb-4 uppercase flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span>Verified Implementation Footprint</span>
                    </h5>
                    
                    <ul className="space-y-3.5 pl-1">
                      {hoveredSkill.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-gray-600" id={`skill-detail-item-${index}`}>
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-none mt-1.5 flex-shrink-0"></div>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50/50 p-4 border border-blue-100 text-[11px] text-blue-900 leading-relaxed font-sans rounded-none">
                    <strong>Production Context:</strong> Deployed inside local application pipelines or evaluated extensively under Clean Architecture frameworks.
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-6 my-auto text-gray-400" id="inspector-idle-state">
                  <div className="w-12 h-12 rounded-none bg-[#FAFAFA] border border-gray-200 flex items-center justify-center text-gray-400 transform scale-110 mb-4 animate-pulse">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-display font-bold text-gray-950 text-xs uppercase tracking-wider">Select a Skill Card</h4>
                  <p className="text-[11px] text-gray-500 max-w-xs mt-2 leading-relaxed uppercase tracking-wider">
                    Hover or tap any capability card to reveal structural outputs, design specs, and verified metrics.
                  </p>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                <span>Ref: Resume Verification</span>
                <span>Type Safe Specs</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
