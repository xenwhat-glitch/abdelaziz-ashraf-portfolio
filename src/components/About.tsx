import { useState } from "react";
import { GraduationCap, Award, BookOpen, Rocket, CheckCircle2, Heart } from "lucide-react";
import { motion } from "motion/react";
import { profileSummary } from "../data";

export default function About() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const keyPillars = [
    {
      title: "Mobile Architecture & Performance",
      description: "Obsessed with thread scheduling, coroutine pooling, and local caching paradigms. Keeping UI threads clean at a fluid 60/120fps is my technical default.",
      icon: <Rocket className="w-5 h-5 text-sky-600" />,
      bullets: [
        "Eliminated leaks using Lifecycle-Safety principles",
        "Mastered advanced caching with Room flow-streams",
        "Constructed asynchronous sync tasks using WorkManager",
      ]
    },
    {
      title: "Clean Declarative UI Design",
      description: "Embracing Jetpack Compose to construct modular, declarative designs that fit perfectly across different aspect-ratios. I bridge visual aesthetic design with solid system schemas.",
      icon: <Heart className="w-5 h-5 text-rose-600" />,
      bullets: [
        "Crafting re-usable customizable modifiers",
        "Handling deep RTL support & fully localized schemas",
        "Applying micro-movement UX queues naturally",
      ]
    },
    {
      title: "Full-Stack System Horizon",
      description: "Aiming to build entire app lifecycles. Actively expanding my domain beyond mobile devices by mastering Spring Boot, JPA, microservices structure, and relational schemas.",
      icon: <BookOpen className="w-5 h-5 text-purple-600" />,
      bullets: [
        "Designing robust, secure REST API endpoints",
        "Authoring efficient Hibernate transaction routes",
        "Working with multi-vendor, multi-role access schemas",
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="about-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="about-header">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-none">
            MY TRAJECTORY
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-950 uppercase tracking-wide mt-4">
            Ambitious Developer // Passionate Problem Solver
          </h2>
          <div className="w-16 h-1 bg-gray-950 mx-auto mt-4"></div>
        </div>

        {/* Story Intro Node */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20" id="about-story-grid">
          
          {/* Narrative card */}
          <div className="lg:col-span-7 space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed" id="about-narrative">
            <h3 className="font-display font-bold text-gray-950 text-lg uppercase tracking-wider">
              The Journey of Abdelaziz Ashraf
            </h3>
            
            <p>
              My coding story sparked into life in 2017 as a curious teenager exploring algorithmic challenges and computing logic. Over the years, this evolved into a dedicated career path focused on native Android deployment, resulting in robust apps currently active on consumer devices.
            </p>
            
            <p>
              Having graduated with a <strong>Bachelor's degree in Computer Science from Cairo University</strong> in 2024, my academic rigor is backed by nearly two years of professional software engineering experience. My craft relies on structuring high-grade codebases that maintain performance, scale smoothly, and provide elegant visual user experiences.
            </p>

            <p>
              I thrive on technical challenges. Whether it is scanning high-capacity QR-code tokens in milliseconds on low-end processors, configuring local offline caching states to prevent information blackouts, or routing REST APIs securely, I prioritize durability, clean code, and solid design hierarchy.
            </p>
          </div>

          {/* Quick Highlight credentials card */}
          <div className="lg:col-span-5 bg-[#FAFAFA] p-6 sm:p-8 rounded-none border border-gray-200" id="about-quick-profile-card">
            <h4 className="font-display font-bold text-gray-950 text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span>Academic & Peer Highlights</span>
            </h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-white rounded-none border border-gray-200 text-blue-600 mt-1">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-[13px] uppercase tracking-wide text-gray-950">NASA Space Apps Winner</h5>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">Winner of the Cairo Node Category Award — Disaster Navigation Spatial System Built in Kotlin and Compose.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-white rounded-none border border-gray-200 text-blue-600 mt-1">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-[13px] uppercase tracking-wide text-gray-950">Google Advanced NanoDegree & Meta Professional</h5>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">Completed advanced Kotlin and system architecture certifications verified by mobile leaders.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 bg-white rounded-none border border-gray-200 text-blue-600 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-[13px] uppercase tracking-wide text-gray-950">120+ Future Tech Leaders Taught</h5>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">Coding instructor at iSchool. Designed dynamic curricula on Object-Oriented design and logic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Drives Me - Core Pillars Interactive Panel */}
        <div className="border border-gray-200 rounded-none p-6 sm:p-10 bg-white" id="about-pillars-panel">
          <h4 className="font-display font-bold text-center text-gray-950 text-sm uppercase tracking-widest mb-8">
            My Professional Engineering Philosophies
          </h4>

          {/* Tab header buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 mb-10" id="about-pillar-selectors">
            {keyPillars.map((pillar, idx) => (
              <button
                key={idx}
                onClick={() => setActivePillar(idx)}
                id={`about-pillar-tab-${idx}`}
                className={`px-5 py-3.5 rounded-none font-bold text-xs uppercase tracking-widest transition-all text-center flex items-center justify-center gap-2 cursor-pointer border ${
                  activePillar === idx
                    ? "bg-gray-950 text-white border-gray-950"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-gray-950"
                }`}
              >
                <span>{pillar.title.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Pillar detail */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch" id="about-active-pillar-details">
            <div className="md:col-span-8 space-y-4 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-blue-50 border border-blue-250 text-blue-600 rounded-none inline-block">
                  {keyPillars[activePillar].icon}
                </span>
                <h5 className="font-display font-bold text-gray-950 text-base uppercase tracking-wider">
                  {keyPillars[activePillar].title}
                </h5>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pt-2">
                {keyPillars[activePillar].description}
              </p>
            </div>

            <div className="md:col-span-4 bg-[#FAFAFA] p-6 rounded-none border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] text-blue-600 font-bold uppercase tracking-widest block mb-4">Key Exposure Index</span>
                <ul className="space-y-3">
                  {keyPillars[activePillar].bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs font-semibold text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
