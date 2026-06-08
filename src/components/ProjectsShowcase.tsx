import { useState } from "react";
import { FolderCode, Award, ExternalLink, Filter, HelpCircle, ToggleLeft, GitFork, BookOpen, Layers, CheckCircle, Flame, X } from "lucide-react";
import { projectsList } from "../data";
import { Project } from "../types";

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedInspectProject, setSelectedInspectProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "Android", label: "Android Apps" },
    { id: "KMP", label: "Kotlin Multiplatform" },
    { id: "Backend", label: "Enterprise backend" },
    { id: "Hackathon", label: "Hackathon Winner" },
  ];

  const filteredProjects = activeCategory === "all"
    ? projectsList
    : projectsList.filter(proj => proj.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-[#FAFAFA] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="projects-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="projects-header">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-none">
            TECHNICAL FOOTPRINTS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-950 uppercase tracking-wide mt-4">
            Featured Systems & Applications
          </h2>
          <p className="text-gray-500 text-xs mt-3 uppercase tracking-wider">
            Filtered showcases from professional freelance deliveries, structural research, and competitive hackathons.
          </p>
          <div className="w-16 h-1 bg-gray-950 mx-auto mt-4"></div>
        </div>

        {/* Categories Navbar */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-12" id="projects-categories-toolbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              id={`projects-filter-${tab.id.toLowerCase()}`}
              className={`px-4 py-2.5 rounded-none font-bold text-[10px] uppercase tracking-widest cursor-pointer border transition-all ${
                activeCategory === tab.id
                  ? "bg-gray-950 text-white border-gray-950"
                  : "bg-white text-gray-500 hover:text-gray-950 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="projects-grid">
          {filteredProjects.map((project) => {
            const isHackathonWinner = project.category === "Hackathon";
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`flex flex-col h-full bg-white rounded-none border transition-all hover:border-gray-400 overflow-hidden relative ${
                  isHackathonWinner
                    ? "border-amber-400"
                    : "border-gray-200"
                }`}
              >
                
                {/* Special Ribbon for Hackathon Winner */}
                {isHackathonWinner && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white font-mono font-bold text-[9px] uppercase px-2.5 py-1.5 rounded-none flex items-center gap-1 shadow-xs z-10">
                    <Award className="w-3.5 h-3.5" />
                    <span>NASA 1st Place</span>
                  </div>
                )}

                {/* Card Main Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tiny Metadata tag */}
                    <div className="flex items-center justify-between text-[9px] font-mono text-gray-450 mb-4 uppercase tracking-wider">
                      <span>Category // {project.category}</span>
                      {project.client && (
                        <span className="text-blue-600 font-bold">Client: {project.client}</span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-gray-950 text-base sm:text-lg tracking-wide uppercase mb-3 flex items-center gap-2">
                      <FolderCode className={`w-5 h-5 ${isHackathonWinner ? "text-amber-500" : "text-blue-600"}`} />
                      <span>{project.title}</span>
                    </h3>

                    <p className="text-gray-655 text-xs leading-relaxed line-clamp-3 mb-5">
                      {project.description}
                    </p>
                  </div>

                  {/* Bullet Highlights pre-view */}
                  <div className="space-y-2 mb-5">
                    <span className="font-mono text-[9px] text-gray-400 font-bold tracking-widest block uppercase">
                      Impact Metrics
                    </span>
                    {project.impactMetrics && project.impactMetrics.slice(0, 1).map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-700 font-semibold uppercase">
                        <Flame className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span className="line-clamp-1">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Mini Pill bar */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-50 border border-gray-150 text-gray-500 text-[10px] font-bold rounded-none font-mono uppercase tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[9px] text-gray-400 font-bold font-mono self-center pl-1">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Interactive Card Action Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono">Verified Build</span>
                  <button
                    onClick={() => setSelectedInspectProject(project)}
                    className={`px-3.5 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-none transition-all cursor-pointer flex items-center gap-1.5 border ${
                      isHackathonWinner
                        ? "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100"
                        : "bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100"
                    }`}
                    id={`view-specs-project-${project.id}`}
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Detailed Inspection Modal Container Overlay */}
        {selectedInspectProject && (
          <div 
            className="fixed inset-0 bg-gray-950/75 backdrop-blur-xs flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedInspectProject(null)}
            id="project-inspect-overlay"
          >
            <div 
              className="bg-white rounded-none border border-gray-300 w-full max-w-2xl overflow-hidden text-gray-950"
              onClick={(e) => e.stopPropagation()}
              id="project-inspect-modal"
            >
              {/* Modal Banner - Solid, bold geometric blocks */}
              <div className={`p-6 text-white relative flex justify-between items-start ${
                selectedInspectProject.category === "Hackathon"
                  ? "bg-amber-600"
                  : "bg-gray-950"
              }`}>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest block bg-white/10 text-white px-2 py-1 border border-white/20 rounded-none w-fit mb-3">
                    {selectedInspectProject.category.toUpperCase()} ECOSYSTEM
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl uppercase tracking-wider">
                    {selectedInspectProject.title}
                  </h3>
                  <p className="text-gray-300 text-xs mt-1 font-mono uppercase tracking-widest">
                    Role served // {selectedInspectProject.role}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedInspectProject(null)}
                  className="bg-white/10 hover:bg-white/20 text-white p-1.5 rounded-none border border-white/15 cursor-pointer transition-colors"
                  aria-label="Close"
                  id="modal-close-icon-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                
                {/* Description block */}
                <div className="space-y-2">
                  <h4 className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                    Executive System Summary
                  </h4>
                  <p className="text-gray-750 text-xs sm:text-sm leading-relaxed">
                    {selectedInspectProject.description}
                  </p>
                </div>

                {/* Bullet Points Solutions */}
                <div className="space-y-3">
                  <h4 className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                    Engineering Integrations Implemented
                  </h4>
                  
                  <ul className="space-y-2.5">
                    {selectedInspectProject.detailedPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-gray-750 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Metrics Block */}
                {selectedInspectProject.impactMetrics && selectedInspectProject.impactMetrics.length > 0 && (
                  <div className="space-y-2.5">
                    <h4 className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                      Measurable Business & Client Impact
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedInspectProject.impactMetrics.map((metric, idx) => (
                        <div key={idx} className="bg-blue-50/50 p-3.5 border border-blue-200 flex items-center gap-2.5 text-blue-950 text-xs font-bold uppercase tracking-wide rounded-none">
                          <Flame className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technical Stack Pills */}
                <div className="space-y-2.5">
                  <h4 className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                    Full System Technologies Used
                  </h4>
                  
                  <div className="flex flex-wrap gap-1">
                    {selectedInspectProject.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2.5 py-1 bg-[#FAFAFA] text-gray-700 border border-gray-200 text-[10px] font-bold uppercase tracking-wider rounded-none font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer actions */}
              <div className="bg-[#FAFAFA] px-6 py-4 flex justify-between items-center border-t border-gray-250 border-gray-200">
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">System Certified Natively</span>
                <button
                  onClick={() => setSelectedInspectProject(null)}
                  className="px-5 py-2.5 bg-gray-950 hover:bg-blue-600 text-white rounded-none text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer border border-transparent"
                  id="modal-close-close-btn"
                >
                  Close Inspection
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
