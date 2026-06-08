import { useState } from "react";
import { Smartphone, Mail, Sparkles, Code, Terminal, Layers, ArrowDown, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { profileSummary } from "../data";

export default function Hero() {
  const [selectedLayer, setSelectedLayer] = useState<string>("compose-ui");

  const layers = [
    {
      id: "fcm-push",
      name: "FCM Push Notifications Controller",
      badge: "Services Layer",
      icon: "🔔",
      color: "bg-amber-50 text-amber-600 border-amber-200",
      activeColor: "ring-2 ring-amber-400 bg-amber-500 text-white",
      specs: {
        class: "NotificationDispatcher.kt",
        pacing: "Real-time alerts via FCM Channels",
        latency: "< 140ms dispatch time",
        payload: '{"type":"academic_alert", "student_id":"889"}'
      },
      codeSnippet: `class NotificationDispatcher @Inject constructor(
    private val fcmService: FirebaseMessaging
) {
    fun dispatchUpdate(token: String, payload: Map<String, String>) {
        val message = Message.builder()
            .setToken(token)
            .putAllData(payload)
            .setAndroidConfig(AndroidConfig.builder().setPriority(Priority.HIGH).build())
            .build()
        fcmService.sendAsync(message)
    }
}`
    },
    {
      id: "compose-ui",
      name: "Jetpack Compose Declarative View",
      badge: "UI Presentation Layer",
      icon: "🎨",
      color: "bg-sky-50 text-sky-600 border-sky-200",
      activeColor: "ring-2 ring-sky-450 bg-sky-500 text-white",
      specs: {
        class: "ParentPortalDashboard.kt",
        rendering: "100% Declarative Compose UI",
        performance: "Recompositions checked & cached",
        animations: "Spring based tween specs"
      },
      codeSnippet: `@Composable
fun ParentPortalDashboard(viewModel: ParentViewModel) {
    val state by viewModel.uiState.collectAsStateWithLifecycle()
    LazyColumn(modifier = Modifier.fillMaxSize()) {
        item { HeaderSection(state.parentName) }
        items(state.children) { child ->
            AcademicProgressCard(child = child)
        }
    }
}`
    },
    {
      id: "camerax-scanner",
      name: "CameraX QR Attendance Engine",
      badge: "Hardware & QR layer",
      icon: "📷",
      color: "bg-purple-50 text-purple-600 border-purple-200",
      activeColor: "ring-2 ring-purple-400 bg-purple-500 text-white",
      specs: {
        class: "SecureQrAttendanceScanner.kt",
        hardware: "Android CameraX Jetpack API",
        decodeTime: "180ms scan-to-verify speed",
        algorithm: "SHA-256 rotating payload tokens"
      },
      codeSnippet: `fun bindCameraUseCases(previewView: PreviewView) {
    val imageAnalysis = ImageAnalysis.Builder()
        .setBackpressureStrategy(ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST)
        .build()
    imageAnalysis.setAnalyzer(executor) { imageProxy ->
        QrReader.decode(imageProxy) { token ->
            viewModel.verifyAttendanceToken(token)
        }
    }
}`
    },
    {
      id: "room-db",
      name: "Room Offline SQLite Cache",
      badge: "Persistent Storage Layer",
      icon: "💾",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      activeColor: "ring-2 ring-emerald-400 bg-emerald-500 text-white",
      specs: {
        class: "SchoolCacheDatabase.kt",
        engine: "SQLite with Reactive Flows",
        syncPolicy: "Queue-backed auto Sync",
        encrypt: "SQLCipher 256-bit AES protection"
      },
      codeSnippet: `@Dao
interface StudentDao {
    @Query("SELECT * FROM students WHERE parentId = :id")
    fun getStudentsByParent(id: String): Flow<List<StudentEntity>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertOrUpdate(students: List<StudentEntity>)
}`
    },
    {
      id: "spring-api",
      name: "Spring Boot Microservice REST API",
      badge: "Backend Integration",
      icon: "⚙️",
      color: "bg-rose-50 text-rose-600 border-rose-200",
      activeColor: "ring-2 ring-rose-400 bg-rose-500 text-white",
      specs: {
        class: "AttendanceRestController.java",
        framework: "Spring Boot 3.x + Hibernate ORM",
        security: "JWT stateless auth endpoints",
        database: "PostgreSQL optimized transactions"
      },
      codeSnippet: `@RestController
@RequestMapping("/api/attendance")
public class AttendanceRestController {
    @Autowired
    private AttendanceService service;

    @PostMapping("/verify-qr")
    public ResponseEntity<SyncResponse> verify(@RequestBody QrToken token) {
        SyncResponse res = service.processAttendanceToken(token);
        return ResponseEntity.ok(res);
    }
}`
    }
  ];

  const currentLayerData = layers.find(l => l.id === selectedLayer) || layers[1];

  function handleScrollToContact() {
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  }

  function handleScrollToExplore() {
    const element = document.getElementById("about");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-white"
    >
      {/* Decorative Grid SVG in background - structured coordinates indicator */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Subtle blueprints lines helper */}
      <div className="absolute left-[5%] top-0 bottom-0 w-[1px] bg-gray-150 pointer-events-none z-0"></div>
      <div className="absolute right-[5%] top-0 bottom-0 w-[1px] bg-gray-150 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full" id="hero-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Wing Component */}
          <div className="lg:col-span-7 flex flex-col space-y-6 lg:pr-4" id="hero-intro-text">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-none font-mono text-[10px] font-bold uppercase tracking-wider w-fit">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Seeking Junior/Mid Mobile Software Roles</span>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs tracking-[0.3em] text-blue-600 uppercase font-bold block" id="hero-greeting">
                HELLO WORLD // I AM
              </span>
              <h2 className="font-display font-bold text-gray-950 tracking-tight text-4xl sm:text-5xl lg:text-6xl uppercase" id="hero-name">
                {profileSummary.name}
              </h2>
              <div className="h-1 w-20 bg-blue-600 mt-2"></div>
              <h3 className="font-mono text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-semibold mt-3" id="hero-role-title">
                {profileSummary.title}
              </h3>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl font-sans" id="hero-tagline-para">
              Ambitious, growth-driven software engineer specialized in mobile ecosystems (Android, Kotlin Multiplatform, Coroutines & Compose). Combining professional core-mobile architecture with an expanding proficiency in modern enterprise backends (Spring Boot, Hibernate).
            </p>

            {/* Quick Metrics (Sharp tabular layout) */}
            <div className="grid grid-cols-3 gap-0 border border-gray-200 bg-[#FAFAFA] divide-x divide-gray-200 max-w-xl" id="hero-key-stats">
              <div className="p-4 text-center">
                <span className="block text-xl sm:text-2xl font-bold font-display text-gray-900">3 APPS</span>
                <span className="text-[9px] text-gray-500 uppercase font-mono tracking-wider">E-Learning Systems</span>
              </div>
              <div className="p-4 text-center">
                <span className="block text-xl sm:text-2xl font-bold font-display text-blue-600">120+</span>
                <span className="text-[9px] text-gray-500 uppercase font-mono tracking-wider">Mentored Students</span>
              </div>
              <div className="p-4 text-center">
                <span className="block text-xl sm:text-2xl font-bold font-display text-gray-900">WINNER</span>
                <span className="text-[9px] text-gray-500 uppercase font-mono tracking-wider">NASA SPACE APPS #1</span>
              </div>
            </div>

            {/* Interactive Call to Actions */}
            <div className="flex flex-wrap gap-4 pt-2" id="hero-buttons">
              <button
                onClick={handleScrollToExplore}
                className="px-6 py-4 bg-gray-950 hover:bg-blue-600 text-white rounded-none font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer border-2 border-gray-950 hover:border-blue-600"
                id="hero-explore-btn"
              >
                <span>Inspect Portfolio</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
              
              <button
                onClick={handleScrollToContact}
                className="px-6 py-4 bg-white border-2 border-gray-200 text-gray-800 hover:text-blue-600 hover:border-blue-600 rounded-none font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all cursor-pointer"
                id="hero-contact-btn"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Micro Quick info */}
            <div className="flex items-center space-x-6 pt-3 font-mono text-[10px] uppercase tracking-wider text-gray-500" id="hero-metadata-pills">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 bg-blue-600"></div>
                <span>Cairo, Egypt</span>
              </div>
              <div>
                <span>B.Sc. Computer Science '24</span>
              </div>
            </div>

          </div>

          {/* Right Wing: Interactive Layout Inspector Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative" id="hero-interactive-inspector">
            
            {/* Legend title */}
            <div className="absolute top-[-24px] left flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-gray-500 bg-white px-3 py-1 border border-gray-250">
              <Code className="w-3.5 h-3.5 text-blue-600" />
              <span>Android Layout Inspector [Active]</span>
            </div>

            {/* Sharp Architectural Device Frame */}
            <div className="w-[310px] sm:w-[340px] bg-white border-2 border-gray-950 rounded-none shadow-sm relative overflow-hidden flex flex-col h-[520px]">
              
              {/* Device Notch Bracket */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-gray-950 z-30 flex items-center justify-center">
                <div className="w-12 h-0.5 bg-gray-800"></div>
                <div className="w-1.5 h-1.5 bg-gray-800 ml-2"></div>
              </div>

              {/* Inside Screen Blueprint Layout */}
              <div className="pt-8 px-4 flex flex-col h-full bg-[#FAFAFA] text-black text-xs font-sans select-none">
                
                {/* Header of mockup app */}
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-600"></div>
                    <span className="font-mono text-[10px] font-bold text-gray-900 uppercase">Sanad_App_v1.0</span>
                  </div>
                  <div className="flex gap-1.5 text-[9px] font-mono text-gray-400">
                    <span>KT_COMPOSE</span>
                    <span>10:00 AM</span>
                  </div>
                </div>

                {/* Structured Simulated Inspector Canvas Grid */}
                <div className="relative flex-1 mt-3 flex flex-col space-y-2 overflow-y-auto pb-4 pt-1 pr-1" style={{ scrollbarWidth: "none" }}>
                  
                  {layers.map((layer) => {
                    const isActive = selectedLayer === layer.id;
                    return (
                      <button
                        key={layer.id}
                        onClick={() => setSelectedLayer(layer.id)}
                        id={`hero-layer-btn-${layer.id}`}
                        className={`w-full text-left p-2.5 rounded-none border transition-all relative flex flex-col cursor-pointer ${
                          isActive
                            ? "bg-blue-600 text-white border-blue-700 shadow-none translate-x-0.5"
                            : "bg-white text-gray-800 border-gray-200 hover:border-blue-600"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-mono text-[9px] font-bold uppercase tracking-wide ${isActive ? "text-blue-105" : "text-blue-600"}`}>{layer.badge}</span>
                          <span className="text-[10px]">{layer.icon}</span>
                        </div>
                        <h4 className="font-display font-medium text-[11px] mt-0.5 tracking-tight line-clamp-1 uppercase">{layer.name}</h4>
                        
                        {/* Blueprint grid dashes */}
                        <div className={`absolute -inset-px border-dashed border pointer-events-none opacity-40 ${
                          isActive ? "border-white" : "border-gray-400"
                        }`}></div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Layout Parameters Code Window (Sharp Codeblock Panel) */}
            <div className="mt-5 w-full bg-gray-950 rounded-none border border-gray-800 text-white font-mono text-xs overflow-hidden max-w-md">
              <div className="bg-gray-900 px-4 py-2 flex justify-between items-center border-b border-gray-850">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 bg-gray-800 inline-block border border-gray-700"></span>
                  <span className="w-2.5 h-2.5 bg-gray-800 inline-block border border-gray-700"></span>
                  <span className="w-2.5 h-2.5 bg-blue-600 inline-block"></span>
                </div>
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">
                  {currentLayerData.specs.class}
                </span>
              </div>
              
              <div className="p-4 space-y-3">
                {/* Visual Specifications Metrics */}
                <div className="grid grid-cols-2 gap-0 border border-gray-800 bg-black/40 divide-x divide-gray-800">
                  <div className="p-2.5">
                    <span className="text-[9px] text-gray-500 uppercase tracking-wider block">Mode Parameters</span>
                    <span className="text-blue-400 text-[10px] font-bold tracking-tight uppercase">{currentLayerData.specs.pacing || currentLayerData.specs.rendering || currentLayerData.specs.hardware || currentLayerData.specs.engine || currentLayerData.specs.framework}</span>
                  </div>
                  <div className="p-2.5">
                    <span className="text-[9px] text-gray-500 uppercase tracking-wider block">Diagnostics Specs</span>
                    <span className="text-emerald-400 text-[10px] font-bold tracking-tight uppercase">{currentLayerData.specs.latency || currentLayerData.specs.performance || currentLayerData.specs.decodeTime || currentLayerData.specs.syncPolicy || currentLayerData.specs.security}</span>
                  </div>
                </div>

                {/* Animated Code block transition */}
                <div className="max-h-[140px] overflow-y-auto text-[10px] leading-relaxed text-gray-300 bg-black/60 p-3 rounded-none border border-gray-850" style={{ scrollbarWidth: "none" }}>
                  <pre className="whitespace-pre-scroll font-mono">
                    <code>{currentLayerData.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
