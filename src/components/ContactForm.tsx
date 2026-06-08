import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, Check, Copy, Sparkles, Smartphone, Terminal, ArrowUpRight } from "lucide-react";
import { profileSummary } from "../data";

export default function ContactForm() {
  const [copiedText, setCopiedText] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderCompany, setSenderCompany] = useState("");
  const [roleType, setRoleType] = useState("Android Native Developer");
  const [workScope, setWorkScope] = useState("Full-Time Remote");
  const [timeline, setTimeline] = useState("Immediate Start");
  
  const [compiledMessage, setCompiledMessage] = useState("");

  // Compile letter whenever toggles or inputs change
  useEffect(() => {
    const greeting = senderName ? `Dear Abdelaziz, \n\nMy name is ${senderName}${senderCompany ? ` from ${senderCompany}` : ""}.` : `Hi Abdelaziz,`;
    
    const body = `I came across your Senior-grade portfolio, highlighting your robust work footprint delivered at Sanad (managing 3 complex Android apps) and your academic background in Computer Science from Cairo University. \n\nWe are currently sourcing candidates for an active ${roleType} role under a ${workScope} engagement model. Our expected timeline for this placement is: ${timeline}.\n\nGiven your expertise inside Jetpack Compose, Kotlin Multiplatform, and your continuous growth track mastering Spring Boot backend architectures, we believe your skills align nicely with our goals.`;
    
    const callToAction = `Would you be available for a introductory structural discussion somewhere next week?\n\nLooking forward to hearing from you,\n${senderName ? senderName : "[Your Name]"}`;
    
    setCompiledMessage(`${greeting}\n\n${body}\n\n${callToAction}`);
  }, [senderName, senderCompany, roleType, workScope, timeline]);

  function handleCopy() {
    navigator.clipboard.writeText(compiledMessage);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  }

  function handleMailto() {
    const subject = encodeURIComponent(`Inquiry: ${roleType} Opening - Abdelaziz Ashraf`);
    const body = encodeURIComponent(compiledMessage);
    window.location.href = `mailto:${profileSummary.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="contact-header">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-none">
            ESTABLISH COMMUNICATION
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-950 uppercase tracking-wide mt-4">
            Initiate Conversation
          </h2>
          <p className="text-gray-500 text-xs mt-3 uppercase tracking-wider">
            Connect directly via professional links or compile a tailored introductory invite.
          </p>
          <div className="w-16 h-1 bg-gray-950 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-layout-grid">
          
          {/* Left Wing - Direct Info Touchpoints */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-block">
            
            <div className="bg-white p-6 sm:p-8 rounded-none border border-gray-200 shadow-none" id="identity-card bg-white">
              <span className="font-mono text-[9px] text-blue-600 font-bold uppercase tracking-widest block mb-2">
                CONTACT METADATA
              </span>
              <h3 className="font-display font-bold text-gray-950 text-lg uppercase tracking-wider mb-2">
                Abdelaziz Ashraf
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans border-b border-gray-150 pb-4 mb-5 uppercase tracking-wide">
                Android Developer, Kotlin Multiplatform Specialist, and Full-Stack Trainee engineer based in Cairo, Egypt.
              </p>

              <div className="space-y-3">
                
                <a
                  href={`mailto:${profileSummary.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-none hover:bg-[#FAFAFA] border border-transparent hover:border-gray-200 transition-all text-gray-750"
                  id="contact-email-cta"
                >
                  <div className="w-10 h-10 rounded-none bg-blue-50 border border-blue-150 text-blue-605 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 block font-mono uppercase tracking-wider">PRIMARY INBOX</span>
                    <span className="text-xs sm:text-sm font-bold font-mono text-gray-950">{profileSummary.email}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 ml-auto" />
                </a>

                <a
                  href={`tel:${profileSummary.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-none hover:bg-[#FAFAFA] border border-transparent hover:border-gray-200 transition-all text-gray-755"
                  id="contact-phone-cta"
                >
                  <div className="w-10 h-10 rounded-none bg-blue-50 border border-blue-150 text-blue-605 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 block font-mono uppercase tracking-wider">MOBILE LINE</span>
                    <span className="text-xs sm:text-sm font-bold font-mono text-gray-950">{profileSummary.phone}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 ml-auto" />
                </a>

                <div
                  className="flex items-center gap-3.5 p-3 rounded-none border border-transparent text-gray-750 cursor-default"
                  id="contact-location-info"
                >
                  <div className="w-10 h-10 rounded-none bg-blue-50 border border-blue-150 text-blue-605 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 block font-mono uppercase tracking-wider">CURRENT STATION</span>
                    <span className="text-xs sm:text-sm font-bold font-mono text-gray-950 uppercase">{profileSummary.location} (Cairo Time UTC+2)</span>
                  </div>
                </div>

              </div>

              {/* LinkedIn block link button */}
              <div className="mt-8 pt-6 border-t border-gray-205">
                <a
                  href={profileSummary.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 bg-[#0077b5] hover:bg-blue-600 text-white rounded-none text-center font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer border border-transparent shadow-none"
                  id="contact-linkedin-btn"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 opacity-75" />
                </a>
              </div>
            </div>

            {/* Quick response standards widget */}
            <div className="p-5 bg-blue-50/50 border border-blue-105 rounded-none" id="contact-latency-widget">
              <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold text-blue-800 uppercase tracking-widest mb-2.5">
                <Terminal className="w-4 h-4 text-blue-600" />
                <span>Inbox Latency Index</span>
              </span>
              <p className="text-[11px] text-blue-950 leading-relaxed font-semibold uppercase tracking-wider">
                I target a maximum 12-hour response bracket for genuine technical and recruitment outreach. I look forward to analyzing your structural design plans and active parameters!
              </p>
            </div>

          </div>

          {/* Right Wing - Message Generator Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-none border border-gray-200 shadow-none" id="contact-generator-box">
            
            <div className="flex items-center gap-1.5 mb-5 border-b border-gray-200 pb-3">
              <Sparkles className="w-4.5 h-4.5 text-blue-600" />
              <h3 className="font-display font-bold text-gray-955 text-xs sm:text-sm uppercase tracking-wider">
                Recruiter Quick Invite Draft Builder // Let's Connect
              </h3>
            </div>

            {/* Config inputs row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-[9px] font-mono text-gray-400 font-bold uppercase tracking-widest mb-2">
                  Your Sender Name
                </label>
                <input
                  type="text"
                  placeholder="Sarah"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full text-xs bg-[#FAFAFA] border border-gray-250 rounded-none px-3 py-2.5 outline-hidden focus:border-blue-600 focus:bg-white transition-colors animate-none"
                  id="sender-name-input"
                />
              </div>

              <div>
                <label className="block text-[9px] font-mono text-gray-400 font-bold uppercase tracking-widest mb-2">
                  Your Company / Node
                </label>
                <input
                  type="text"
                  placeholder="TechCorp Solutions"
                  value={senderCompany}
                  onChange={(e) => setSenderCompany(e.target.value)}
                  className="w-full text-xs bg-[#FAFAFA] border border-gray-255 rounded-none px-3 py-2.5 outline-hidden focus:border-blue-600 focus:bg-white transition-colors animate-none"
                  id="sender-company-input"
                />
              </div>
            </div>

            {/* Quick configurations choices tags */}
            <div className="space-y-4 mb-6" id="selector-tag-groups">
              
              {/* Role config */}
              <div>
                <span className="block text-[9px] font-mono text-gray-400 font-bold uppercase tracking-widest mb-2.5">
                  Target Project Responsibility
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Android Native Developer", "Kotlin Multiplatform (KMP)", "Full-Stack Trainee (Spring)"].map((role) => (
                    <button
                      key={role}
                      onClick={() => setRoleType(role)}
                      className={`px-3 py-2 rounded-none text-[9px] font-bold uppercase tracking-wide border transition-all cursor-pointer ${
                        roleType === role
                          ? "bg-blue-650 text-white border-blue-650"
                          : "bg-white text-gray-500 border-gray-200 hover:bg-[#FAFAFA]"
                      }`}
                      id={`contact-toggle-role-${role.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Engagement Type */}
              <div>
                <span className="block text-[9px] font-mono text-gray-400 font-bold uppercase tracking-widest mb-2.5">
                  Expectancy Model
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Full-Time Remote", "Full-Time Cairo On-Site", "Part-Time Contract / Mentor"].map((scope) => (
                    <button
                      key={scope}
                      onClick={() => setWorkScope(scope)}
                      className={`px-3 py-2 rounded-none text-[9px] font-bold uppercase tracking-wide border transition-all cursor-pointer ${
                        workScope === scope
                          ? "bg-blue-650 text-white border-blue-650"
                          : "bg-white text-gray-500 border-gray-200 hover:bg-[#FAFAFA]"
                      }`}
                      id={`contact-toggle-scope-${scope.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hiring pacing timeline */}
              <div>
                <span className="block text-[9px] font-mono text-gray-400 font-bold uppercase tracking-widest mb-2.5">
                  Project Launch Timeline
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Immediate Start", "Within 30 Days", "Future Bench Sourcing"].map((time) => (
                    <button
                      key={time}
                      onClick={() => setTimeline(time)}
                      className={`px-3 py-2 rounded-none text-[9px] font-bold uppercase tracking-wide border transition-all cursor-pointer ${
                        timeline === time
                          ? "bg-blue-650 text-white border-blue-650"
                          : "bg-white text-gray-500 border-gray-200 hover:bg-[#FAFAFA]"
                      }`}
                      id={`contact-toggle-time-${time.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Resulting text body compiler */}
            <div className="space-y-2.5">
              <label className="block text-[9px] font-mono text-gray-400 font-bold uppercase flex justify-between tracking-widest">
                <span>Tailored Compiled Outreach Message</span>
                <span className="text-blue-600 font-bold text-[9px] tracking-wide">Reactive Template Engine</span>
              </label>

              <textarea
                value={compiledMessage}
                readOnly
                rows={8}
                className="w-full text-xs bg-[#FAFAFA] border border-gray-205 p-4 rounded-none outline-none text-gray-800 font-mono leading-relaxed"
                id="compiled-invite-box"
              ></textarea>
            </div>

            {/* Quick compiler actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6">
              
              <button
                onClick={handleCopy}
                className="py-3 bg-white border border-gray-205 hover:border-blue-600 text-gray-700 hover:text-blue-650 rounded-none text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-none"
                id="contact-copy-draft-btn"
              >
                {copiedText ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Copied Template!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy to Clipboard</span>
                  </>
                )}
              </button>

              <button
                onClick={handleMailto}
                className="py-3 bg-gray-950 hover:bg-blue-650 text-white rounded-none text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer border border-transparent"
                id="contact-mailto-dispatch-btn"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email Service</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
