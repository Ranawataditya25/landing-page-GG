


// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Users,
//   FileText,
//   Heart,
//   BarChart3,
//   TrendingUp,
//   ArrowRight,
// } from "lucide-react";

// // ==========================================
// // 1. TOP 3 CARDS DATA
// // ==========================================
// const topFeatures = [
//   {
//     id: 0,
//     title: "🤝 Evaluate",
//     description:
//       "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
//     bg: "bg-[rgb(125,219,123)]",
//     imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: 1,
//     title: "🧪 Educate",
//     description:
//       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
//     bg: "bg-[rgb(255,153,153)]",
//     imgUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: 2,
//     title: "🧠 Elevate",
//     description:
//       "Mental health support, stress management, and counseling for academic and personal challenges.",
//     bg: "bg-[rgb(169,254,255)]",
//     imgUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80",
//   },
// ];

// // ==========================================
// // 2. CLASSES 1-5 DATA (SAME BOX SIZE & STRUCTURE)
// // ==========================================
// const class1to5Data = [
//   {
//     id: 101,
//     title: "Learn Maths",
//     subtitle: "Build strong numbers & logic foundation",
//     badge: "FOUNDATION",
//     badgeBg: "bg-purple-100 text-purple-700",
//     color: "text-purple-600",
//     bgGradient: "from-purple-50/70 via-purple-50/20 to-white",
//     borderColor: "border-purple-200",
//     btnBg: "bg-purple-600 hover:bg-purple-700",
//     tagText: "Interactive Maths",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3771/3771278.png",
//   },
//   {
//     id: 102,
//     title: "Learn English",
//     subtitle: "Enhance vocabulary, grammar & reading skills",
//     badge: "LANGUAGE",
//     badgeBg: "bg-rose-100 text-rose-700",
//     color: "text-rose-600",
//     bgGradient: "from-rose-50/70 via-rose-50/20 to-white",
//     borderColor: "border-rose-200",
//     btnBg: "bg-rose-500 hover:bg-rose-600",
//     tagText: "Fun English",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3389/3389011.png",
//   },
//   {
//     id: 103,
//     title: "Science",
//     subtitle: "Explore natural phenomena and fun experiments",
//     badge: "DISCOVERY",
//     badgeBg: "bg-emerald-100 text-emerald-700",
//     color: "text-emerald-600",
//     bgGradient: "from-emerald-50/70 via-emerald-50/20 to-white",
//     borderColor: "border-emerald-200",
//     btnBg: "bg-emerald-600 hover:bg-emerald-700",
//     tagText: "Basic Science",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
//   },
//   {
//     id: 104,
//     title: "General Knowledge",
//     subtitle: "Discover world facts, geography & current affairs",
//     badge: "AWARENESS",
//     badgeBg: "bg-amber-100 text-amber-700",
//     color: "text-amber-600",
//     bgGradient: "from-amber-50/70 via-amber-50/20 to-white",
//     borderColor: "border-amber-200",
//     btnBg: "bg-amber-500 hover:bg-amber-600",
//     tagText: "GK Essentials",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2784/2784403.png",
//   },
//   {
//     id: 105,
//     title: "JNV Entrance",
//     subtitle: "Targeted entrance prep for Navodaya Vidyalaya",
//     badge: "ENTRANCE",
//     badgeBg: "bg-blue-100 text-blue-700",
//     color: "text-blue-600",
//     bgGradient: "from-blue-50/70 via-blue-50/20 to-white",
//     borderColor: "border-blue-200",
//     btnBg: "bg-blue-600 hover:bg-blue-700",
//     tagText: "JNV Special",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2231/2231605.png",
//   },
//   {
//     id: 106,
//     title: "KVS Prep",
//     subtitle: "Structured learning syllabus for Kendriya Vidyalaya",
//     badge: "SCHOOL PREP",
//     badgeBg: "bg-teal-100 text-teal-700",
//     color: "text-teal-600",
//     bgGradient: "from-teal-50/70 via-teal-50/20 to-white",
//     borderColor: "border-teal-200",
//     btnBg: "bg-teal-600 hover:bg-teal-700",
//     tagText: "KVS Curriculum",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2997/2997295.png",
//   },
//   {
//     id: 107,
//     title: "Sainik School",
//     subtitle: "Comprehensive training for All India Sainik School",
//     badge: "DEFENCE PREP",
//     badgeBg: "bg-orange-100 text-orange-700",
//     color: "text-orange-600",
//     bgGradient: "from-orange-50/70 via-orange-50/20 to-white",
//     borderColor: "border-orange-200",
//     btnBg: "bg-orange-500 hover:bg-orange-600",
//     tagText: "Sainik Entrance",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/167/167707.png",
//   },
//   {
//     id: 108,
//     title: "Olympiad",
//     subtitle: "Early competitive aptitude & reasoning booster",
//     badge: "COMPETITIVE",
//     badgeBg: "bg-indigo-100 text-indigo-700",
//     color: "text-indigo-600",
//     bgGradient: "from-indigo-50/70 via-indigo-50/20 to-white",
//     borderColor: "border-indigo-200",
//     btnBg: "bg-indigo-600 hover:bg-indigo-700",
//     tagText: "Olympiad Level",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
//   },
// ];

// // ==========================================
// // 3. CLASSES 6-10 DATA
// // ==========================================
// const class6to10Data = [
//   {
//     id: 3,
//     title: "Class 6",
//     subtitle: "Build strong basics for a bright future",
//     badge: "FOUNDATION",
//     badgeBg: "bg-blue-100 text-blue-700",
//     color: "text-blue-600",
//     bgGradient: "from-blue-50/70 via-blue-50/20 to-white",
//     borderColor: "border-blue-200",
//     btnBg: "bg-blue-600 hover:bg-blue-700",
//     // tagText: "",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2883/2883823.png",
//   },
//   {
//     id: 4,
//     title: "Class 7",
//     subtitle: "Strengthen concepts and skills",
//     badge: "FOUNDATION",
//     badgeBg: "bg-emerald-100 text-emerald-700",
//     color: "text-emerald-600",
//     bgGradient: "from-emerald-50/70 via-emerald-50/20 to-white",
//     borderColor: "border-emerald-200",
//     btnBg: "bg-emerald-600 hover:bg-emerald-700",
//     // tagText: "26 Boards",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3429/3429149.png",
//   },
//   {
//     id: 5,
//     title: "Class 8",
//     subtitle: "Explore, learn and excel every day",
//     badge: "ADVANCED",
//     badgeBg: "bg-amber-100 text-amber-700",
//     color: "text-amber-600",
//     bgGradient: "from-amber-50/70 via-amber-50/20 to-white",
//     borderColor: "border-amber-200",
//     btnBg: "bg-amber-500 hover:bg-amber-600",
//     // tagText: "26 Boards",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135753.png",
//   },
//   {
//     id: 6,
//     title: "Class 9",
//     subtitle: "Prepare better for higher achievements",
//     badge: "BOARD PREP",
//     badgeBg: "bg-orange-100 text-orange-700",
//     color: "text-orange-600",
//     bgGradient: "from-orange-50/70 via-orange-50/20 to-white",
//     borderColor: "border-orange-200",
//     btnBg: "bg-orange-500 hover:bg-orange-600",
//     // tagText: "26 Boards",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
//   },
//   {
//     id: 7,
//     title: "Class 10",
//     subtitle: "Master your boards with confidence",
//     badge: "BOARD MASTER",
//     badgeBg: "bg-rose-100 text-rose-700",
//     color: "text-rose-600",
//     bgGradient: "from-rose-50/70 via-rose-50/20 to-white",
//     borderColor: "border-rose-200",
//     btnBg: "bg-rose-500 hover:bg-rose-600",
//     // tagText: "26 Boards",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
//   },
//   {
//     id: 8,
//     title: "Olympiad",
//     subtitle: "Challenge yourself. Aim for excellence",
//     badge: "COMPETITIVE",
//     badgeBg: "bg-purple-100 text-purple-700",
//     color: "text-purple-600",
//     bgGradient: "from-purple-50/70 via-purple-50/20 to-white",
//     borderColor: "border-purple-200",
//     btnBg: "bg-purple-600 hover:bg-purple-700",
//     tagText: "Competitive Prep",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
//   },
// ];

// // ==========================================
// // 4. CLASSES 11-12 DATA
// // ==========================================
// const class11to12Data = [
//   {
//     id: 9,
//     title: "Class 11",
//     stream: "Arts",
//     tagline: "Explore. Express. Excel.",
//     color: "text-purple-700",
//     bgGradient: "from-purple-50/70 via-purple-50/20 to-white",
//     borderColor: "border-purple-200",
//     btnBg: "bg-purple-600 hover:bg-purple-700",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
//   },
//   {
//     id: 10,
//     title: "Class 11",
//     stream: "Commerce",
//     tagline: "Learn. Analyze. Grow.",
//     color: "text-emerald-700",
//     bgGradient: "from-emerald-50/70 via-emerald-50/20 to-white",
//     borderColor: "border-emerald-200",
//     btnBg: "bg-emerald-600 hover:bg-emerald-700",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2422/2422796.png",
//   },
//   {
//     id: 11,
//     title: "Class 11",
//     stream: "Science",
//     tagline: "Discover. Understand. Achieve.",
//     color: "text-blue-700",
//     bgGradient: "from-blue-50/70 via-blue-50/20 to-white",
//     borderColor: "border-blue-200",
//     btnBg: "bg-blue-600 hover:bg-blue-700",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/1085/1085461.png",
//   },
//   {
//     id: 12,
//     title: "Class 12",
//     stream: "Arts",
//     tagline: "Prepare. Perform. Progress.",
//     color: "text-orange-700",
//     bgGradient: "from-orange-50/70 via-orange-50/20 to-white",
//     borderColor: "border-orange-200",
//     btnBg: "bg-orange-500 hover:bg-orange-600",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135753.png",
//   },
//   {
//     id: 13,
//     title: "Class 12",
//     stream: "Commerce",
//     tagline: "Master Concepts. Maximize Results.",
//     color: "text-teal-700",
//     bgGradient: "from-teal-50/70 via-teal-50/20 to-white",
//     borderColor: "border-teal-200",
//     btnBg: "bg-teal-600 hover:bg-teal-700",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3076/3076416.png",
//   },
//   {
//     id: 14,
//     title: "Class 12",
//     stream: "Science",
//     tagline: "Focus. Practice. Succeed.",
//     color: "text-sky-700",
//     bgGradient: "from-sky-50/70 via-sky-50/20 to-white",
//     borderColor: "border-sky-200",
//     btnBg: "bg-blue-600 hover:bg-blue-700",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/1356/1356479.png",
//   },
// ];

// // ==========================================
// // 5. STUDY PLAN DETAILS MAPPER
// // ==========================================
// const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
//   0: { title: "Personalized Evaluation Plan", desc: "1:1 mentorship sessions, weak-subject analysis, target roadmap, and progress tracking.", icon: "🤝" },
//   1: { title: "Comprehensive Educate Module", desc: "Realistic mock test series, 10+ years PYQs analysis, and detailed strength/weakness analytics.", icon: "🧪" },
//   2: { title: "Mental Wellness & Support", desc: "Stress-management sessions, 1:1 counselor support, and exam anxiety mitigation plans.", icon: "🧠" },

//   // Classes 1-5 Custom Plan Details
//   101: { title: "Learn Maths Plan", desc: "Interactive math games, counting drills, basic geometry, and speed math tricks.", icon: "🔢" },
//   102: { title: "Learn English Plan", desc: "Phonics training, story-based reading practice, basic grammar, and spelling games.", icon: "📚" },
//   103: { title: "Science Discovery Plan", desc: "Interactive nature videos, basic science experiments, and fun quizzes.", icon: "🔬" },
//   104: { title: "GK Essentials Plan", desc: "Daily quiz cards, current events for kids, and world map exploration.", icon: "🌍" },
//   105: { title: "JNV Entrance Preparation", desc: "Targeted mental ability tests, language comprehension, and mock papers for JNV.", icon: "🏛️" },
//   106: { title: "KVS School Prep Module", desc: "Structured syllabus coverage as per KVS primary guidelines with fun worksheets.", icon: "🏫" },
//   107: { title: "Sainik School Entrance Module", desc: "Early aptitude drills, intelligence test practice, and mock exams for Sainik School.", icon: "🎖️" },
//   108: { title: "Olympiad Level Primary Prep", desc: "Logical reasoning workouts, mathematics and science olympiad test series.", icon: "🏆" },

//   // Classes 6-10
//   3: { title: "Class 6 Foundation Roadmap", desc: "26 Boards coverage, 1000+ MCQs, 2020+ Subjective Qs, 3000+ Model Papers, and top mentors.", icon: "🎒" },
//   4: { title: "Class 7 Concept Mastery", desc: "Interactive conceptual sessions, daily practice worksheets, and 24/7 doubt resolution.", icon: "🌱" },
//   5: { title: "Class 8 Advanced Prep", desc: "Targeted problem solving, early foundation for high school competition, and rank boosters.", icon: "🌍" },
//   6: { title: "Class 9 Board Prep", desc: "Detailed syllabus breakdown, high-yield revision notes, and past year question practice.", icon: "📖" },
//   7: { title: "Class 10 Board Master Series", desc: "Strictly timed mock exams, answer sheet evaluation by board experts, and formula sheets.", icon: "🏆" },
//   8: { title: "Olympiad Competitive Mastery", desc: "Logical reasoning drills, national-level rank predictor, and high-difficulty challenge modules.", icon: "🥇" },

//   // Classes 11-12
//   9: { title: "Class 11 Arts Roadmap", desc: "CUET foundation, subjective essay evaluation, and comprehensive humanities stream notes.", icon: "🎨" },
//   10: { title: "Class 11 Commerce Concept Booster", desc: "CA/CS foundation prep, Accounts & Economics core problem drills, and mock tests.", icon: "📈" },
//   11: { title: "Class 11 Science (JEE/NEET)", desc: "AITS (All India Test Series), Physics, Chemistry, Math/Bio formula sheets, and rank tracker.", icon: "🧪" },
//   12: { title: "Class 12 Arts & CUET Integrated", desc: "Integrated board exam prep with last 12 years PYQ detailed analysis and answer checking.", icon: "📚" },
//   13: { title: "Class 12 Commerce Special", desc: "Premium CA/CS foundation prep, 5000+ practice MCQs & case studies, and career guidance.", icon: "💼" },
//   14: { title: "Class 12 Science Target JEE/NEET", desc: "Daily live doubt clearing rooms, formula sheets, high-yield test series, and rank predictor.", icon: "🚀" },
// };

// function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
//   const data = studyPlanData[activeIndex] || studyPlanData[0];

//   return (
//     <div className="w-full mt-8 bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
//       <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-2xl overflow-hidden">
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
//         <div className="flex items-center gap-4 z-10">
//           <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
//             <BarChart3 className="w-10 h-10" />
//           </div>
//           <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
//             <FileText className="w-10 h-10" />
//           </div>
//           <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
//             <TrendingUp className="w-10 h-10" />
//           </div>
//         </div>
//       </div>

//       <div className="w-full md:w-1/2 flex flex-col items-start text-left">
//         <div className="flex items-center gap-3 mb-3">
//           <span className="text-3xl">{data.icon}</span>
//           <h4 className="text-xl font-bold text-slate-800 uppercase tracking-wide text-sm md:text-base">
//             {data.title}
//           </h4>
//         </div>
//         <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
//           {data.desc}
//         </p>
//         <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5">
//           JOIN US NOW
//         </button>
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // MAIN FEATURES COMPONENT
// // ==========================================
// export function Features() {
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);

//   const toggleExpand = (id: number) => {
//     setExpandedCard(expandedCard === id ? null : id);
//   };

//   return (
//     <section id="features" className="py-16 bg-slate-50/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
//         {/* Main Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
//             Comprehensive Guidance for Every Student
//           </h2>
//           <p className="text-lg text-slate-600 leading-relaxed">
//             Good Guiders brings together realistic Mock Tests, interactive Online Learning, and personalized Mentorship to help students learn smarter, perform better, and achieve their goals.
//           </p>
//         </div>

//         {/* ---------------------------------------------------- */}
//         {/* TOP ROW CARDS: Evaluate, Educate, Elevate */}
//         {/* ---------------------------------------------------- */}
//         <div className="flex flex-col gap-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {topFeatures.map((feature) => {
//               const isExpanded = expandedCard === feature.id;

//               return (
//                 <Card
//                   key={feature.id}
//                   className={`${feature.bg} border-none text-black h-[320px] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
//                     isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
//                   }`}
//                 >
//                   <CardContent className="p-6 flex flex-col h-full justify-between">
//                     <div>
//                       <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center mb-6 shadow-sm overflow-hidden p-2">
//                         <img src={feature.imgUrl} alt={feature.title} className="w-full h-full object-cover rounded-xl" />
//                       </div>
//                       <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
//                       <p className="text-black/80 font-medium leading-relaxed line-clamp-3">
//                         {feature.description}
//                       </p>
//                     </div>
//                     <button
//                       onClick={() => toggleExpand(feature.id)}
//                       className={`w-full py-3 rounded-xl transition-all font-semibold shadow-sm ${
//                         isExpanded
//                           ? "bg-black text-white hover:bg-gray-800"
//                           : "bg-slate-900 text-white hover:bg-slate-800"
//                       }`}
//                     >
//                       {isExpanded ? "Show Less" : "Learn More"}
//                     </button>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>

//           {expandedCard !== null && expandedCard < 3 && (
//             <PersonalizedStudyPlan activeIndex={expandedCard} />
//           )}
//         </div>

//         {/* ---------------------------------------------------- */}
//         {/* SECTION 1: CLASSES 1-5 (UNIFORM SIZE & DESIGN) */}
//         {/* ---------------------------------------------------- */}
//         <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
//           <div className="text-center mb-10">
            
//             <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-widest text-xl uppercase mb-2">

//   <span>🎓 CLASSES 1–5</span>

// </div>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Explore. Learn. Grow.
//             </h2>
//             <p className="text-slate-500 text-sm md:text-base mt-2">
//               Fun learning for a strong foundation
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {class1to5Data.map((item) => {
//               const isExpanded = expandedCard === item.id;

//               return (
//                 <Card
//                   key={item.id}
//                   className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-[280px] flex flex-col justify-between ${
//                     isExpanded ? "ring-4 ring-blue-400" : ""
//                   }`}
//                 >
//                   <CardContent className="p-6 flex flex-col justify-between h-full">
//                     <div>
//                       {/* Top Row: Badge & Image Visual */}
//                       <div className="flex items-center justify-between mb-2">
//                         <span className={`text-[10px] font-black px-3 py-1 rounded-md tracking-wider ${item.badgeBg}`}>
//                           {item.badge}
//                         </span>
//                         <div className="w-16 h-16 p-2 flex items-center justify-center">
//                           <img src={item.imgUrl} alt={item.title} className="w-full h-full object-contain drop-shadow-md" />
//                         </div>
//                       </div>

//                       <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
//                         {item.title}
//                       </h3>
//                       <p className="text-slate-600 text-sm font-medium leading-snug line-clamp-2">
//                         {item.subtitle}
//                       </p>
//                     </div>

//                     {/* Bottom Row: Tag & Explore Button */}
//                     <div className="flex items-center justify-between pt-4 border-t border-slate-100/80 mt-auto">
//                       <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5 shadow-2xs">
//                         📖 {item.tagText}
//                       </span>
//                       <button
//                         onClick={() => toggleExpand(item.id)}
//                         className={`px-4 py-2 text-xs font-bold text-white rounded-xl ${item.btnBg} transition-all flex items-center gap-1.5 shadow-sm hover:scale-105`}
//                       >
//                         {isExpanded ? "Close" : "Explore"} <ArrowRight className="w-3.5 h-3.5" />
//                       </button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>

//           {expandedCard !== null && expandedCard >= 101 && expandedCard <= 108 && (
//             <PersonalizedStudyPlan activeIndex={expandedCard} />
//           )}
//         </div>

//         {/* ---------------------------------------------------- */}
//         {/* SECTION 2: CLASSES 6-10 (UNIFORM SIZE & DESIGN) */}
//         {/* ---------------------------------------------------- */}
//         <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-widest text-xl uppercase mb-2">
//               <span>🎓</span> <span>CHOOSE YOUR CLASS</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Choose Your Class
//             </h2>
//             <p className="text-slate-500 text-sm md:text-base mt-2">
//               Personalized learning for every stage of your academic journey
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {class6to10Data.map((item) => {
//               const isExpanded = expandedCard === item.id;

//               return (
//                 <Card
//                   key={item.id}
//                   className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-[280px] flex flex-col justify-between ${
//                     isExpanded ? "ring-4 ring-blue-400" : ""
//                   }`}
//                 >
//                   <CardContent className="p-6 flex flex-col justify-between h-full">
//                     <div>
//                       {/* Top Row: Badge & Image Visual */}
//                       <div className="flex items-center justify-between mb-2">
//                         <span className={`text-[10px] font-black px-3 py-1 rounded-md tracking-wider ${item.badgeBg}`}>
//                           {item.badge}
//                         </span>
//                         <div className="w-20 h-20 p-2 flex items-center justify-center">
//                           <img src={item.imgUrl} alt={item.title} className="w-full h-full object-contain drop-shadow-md" />
//                         </div>
//                       </div>

//                       <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
//                         {item.title}
//                       </h3>
//                       <p className="text-slate-600 text-sm font-medium leading-snug line-clamp-2">
//                         {item.subtitle}
//                       </p>
//                     </div>

//                     {/* Bottom Row: Tag & Explore Button */}
//                     <div className="flex items-center justify-between pt-4 border-t border-slate-100/80 mt-auto">
//                       <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5 shadow-2xs">
//                         📖 {item.tagText}
//                       </span>
//                       <button
//                         onClick={() => toggleExpand(item.id)}
//                         className={`px-4 py-2 text-xs font-bold text-white rounded-xl ${item.btnBg} transition-all flex items-center gap-1.5 shadow-sm hover:scale-105`}
//                       >
//                         {isExpanded ? "Close" : "Explore"} <ArrowRight className="w-3.5 h-3.5" />
//                       </button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>

//           {expandedCard !== null && expandedCard >= 3 && expandedCard <= 8 && (
//             <PersonalizedStudyPlan activeIndex={expandedCard} />
//           )}
//         </div>

//         {/* ---------------------------------------------------- */}
//         {/* SECTION 3: CLASSES 11-12 (UNIFORM SIZE & DESIGN) */}
//         {/* ---------------------------------------------------- */}
//         <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-widest text-xl uppercase mb-2">
//                <span>CLASSES 11–12</span> 
//             </div>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Choose Your Stream
//             </h2>
//             <p className="text-slate-500 text-sm md:text-base mt-2">
//               Pick your path. We'll guide you to success.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {class11to12Data.map((item) => {
//               const isExpanded = expandedCard === item.id;

//               return (
//                 <Card
//                   key={item.id}
//                   className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col justify-between ${
//                     isExpanded ? "ring-4 ring-blue-400" : ""
//                   }`}
//                 >
//                   <CardContent className="p-6 flex flex-col justify-between h-full">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <span className="text-xs font-bold text-slate-400 tracking-wider uppercase block mb-1">
//                           {item.title}
//                         </span>
//                         <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
//                           {item.stream}
//                         </h3>
//                         <p className="text-slate-500 text-xs font-semibold line-clamp-2 mt-2">
//                           {item.tagline}
//                         </p>
//                       </div>

//                       {/* Visual Image */}
//                       <div className="w-20 h-20 p-2 flex items-center justify-center flex-shrink-0">
//                         <img src={item.imgUrl} alt={item.stream} className="w-full h-full object-contain drop-shadow-md" />
//                       </div>
//                     </div>

//                     {/* Bottom Action Button */}
//                     <div className="flex justify-end pt-4 border-t border-slate-100/80 mt-auto">
//                       <button
//                         onClick={() => toggleExpand(item.id)}
//                         className={`w-9 h-9 rounded-full ${item.btnBg} text-white flex items-center justify-center shadow-md hover:scale-110 transition-all`}
//                         aria-label={`Select ${item.title} ${item.stream}`}
//                       >
//                         <ArrowRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>

//           {expandedCard !== null && expandedCard >= 9 && (
//             <PersonalizedStudyPlan activeIndex={expandedCard} />
//           )}
//         </div>

//       </div>
//     </section>
//   );
// }





import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  FileText,
  Heart,
  BarChart3,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

// ==========================================
// 1. TOP 3 CARDS DATA
// ==========================================
const topFeatures = [
  {
    id: 0,
    title: "🤝 Evaluate",
    description:
      "Personalized guidance sessions with experienced mentors to help students achieve their academic and career goals.",
    bg: "bg-[rgb(125,219,123)]",
    imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 1,
    title: "🧪 Educate",
    description:
      "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
    bg: "bg-[rgb(255,153,153)]",
    imgUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    title: "🧠 Elevate",
    description:
      "Mental health support, stress management, and counseling for academic and personal challenges.",
    bg: "bg-[rgb(169,254,255)]",
    imgUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80",
  },
];

// ==========================================
// 2. CLASSES 1-5 DATA (SAME BOX SIZE & STRUCTURE)
// ==========================================
const class1to5Data = [
  {
    id: 101,
    title: "Learn Maths",
    subtitle: "Build strong numbers & logic foundation",
    badge: "FOUNDATION",
    badgeBg: "bg-purple-100 text-purple-700",
    color: "text-purple-600",
    bgGradient: "from-purple-50/70 via-purple-50/20 to-white",
    borderColor: "border-purple-200",
    btnBg: "bg-purple-600 hover:bg-purple-700",
    tagText: "Interactive Maths",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3771/3771278.png",
  },
  {
    id: 102,
    title: "Learn English",
    subtitle: "Enhance vocabulary, grammar & reading skills",
    badge: "LANGUAGE",
    badgeBg: "bg-rose-100 text-rose-700",
    color: "text-rose-600",
    bgGradient: "from-rose-50/70 via-rose-50/20 to-white",
    borderColor: "border-rose-200",
    btnBg: "bg-rose-500 hover:bg-rose-600",
    tagText: "Fun English",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3389/3389011.png",
  },
  {
    id: 103,
    title: "Science",
    subtitle: "Explore natural phenomena and fun experiments",
    badge: "DISCOVERY",
    badgeBg: "bg-emerald-100 text-emerald-700",
    color: "text-emerald-600",
    bgGradient: "from-emerald-50/70 via-emerald-50/20 to-white",
    borderColor: "border-emerald-200",
    btnBg: "bg-emerald-600 hover:bg-emerald-700",
    tagText: "Basic Science",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
  },
  {
    id: 104,
    title: "General Knowledge",
    subtitle: "Discover world facts, geography & current affairs",
    badge: "AWARENESS",
    badgeBg: "bg-amber-100 text-amber-700",
    color: "text-amber-600",
    bgGradient: "from-amber-50/70 via-amber-50/20 to-white",
    borderColor: "border-amber-200",
    btnBg: "bg-amber-500 hover:bg-amber-600",
    tagText: "GK Essentials",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2784/2784403.png",
  },
  {
    id: 105,
    title: "JNV Entrance",
    subtitle: "Targeted entrance prep for Navodaya Vidyalaya",
    badge: "ENTRANCE",
    badgeBg: "bg-blue-100 text-blue-700",
    color: "text-blue-600",
    bgGradient: "from-blue-50/70 via-blue-50/20 to-white",
    borderColor: "border-blue-200",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    tagText: "JNV Special",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2231/2231605.png",
  },
  {
    id: 106,
    title: "KVS Prep",
    subtitle: "Structured learning syllabus for Kendriya Vidyalaya",
    badge: "SCHOOL PREP",
    badgeBg: "bg-teal-100 text-teal-700",
    color: "text-teal-600",
    bgGradient: "from-teal-50/70 via-teal-50/20 to-white",
    borderColor: "border-teal-200",
    btnBg: "bg-teal-600 hover:bg-teal-700",
    tagText: "KVS Curriculum",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2997/2997295.png",
  },
  {
    id: 107,
    title: "Sainik School",
    subtitle: "Comprehensive training for All India Sainik School",
    badge: "DEFENCE PREP",
    badgeBg: "bg-orange-100 text-orange-700",
    color: "text-orange-600",
    bgGradient: "from-orange-50/70 via-orange-50/20 to-white",
    borderColor: "border-orange-200",
    btnBg: "bg-orange-500 hover:bg-orange-600",
    tagText: "Sainik Entrance",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/167/167707.png",
  },
  {
    id: 108,
    title: "Olympiad",
    subtitle: "Early competitive aptitude & reasoning booster",
    badge: "COMPETITIVE",
    badgeBg: "bg-indigo-100 text-indigo-700",
    color: "text-indigo-600",
    bgGradient: "from-indigo-50/70 via-indigo-50/20 to-white",
    borderColor: "border-indigo-200",
    btnBg: "bg-indigo-600 hover:bg-indigo-700",
    tagText: "Olympiad Level",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
  },
];

// ==========================================
// 3. CLASSES 6-10 DATA
// ==========================================
const class6to10Data = [
  {
    id: 3,
    title: "Class 6",
    subtitle: "Build strong basics for a bright future",
    badge: "FOUNDATION",
    badgeBg: "bg-blue-100 text-blue-700",
    color: "text-blue-600",
    bgGradient: "from-blue-50/70 via-blue-50/20 to-white",
    borderColor: "border-blue-200",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2883/2883823.png",
  },
  {
    id: 4,
    title: "Class 7",
    subtitle: "Strengthen concepts and skills",
    badge: "FOUNDATION",
    badgeBg: "bg-emerald-100 text-emerald-700",
    color: "text-emerald-600",
    bgGradient: "from-emerald-50/70 via-emerald-50/20 to-white",
    borderColor: "border-emerald-200",
    btnBg: "bg-emerald-600 hover:bg-emerald-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3429/3429149.png",
  },
  {
    id: 5,
    title: "Class 8",
    subtitle: "Explore, learn and excel every day",
    badge: "ADVANCED",
    badgeBg: "bg-amber-100 text-amber-700",
    color: "text-amber-600",
    bgGradient: "from-amber-50/70 via-amber-50/20 to-white",
    borderColor: "border-amber-200",
    btnBg: "bg-amber-500 hover:bg-amber-600",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135753.png",
  },
  {
    id: 6,
    title: "Class 9",
    subtitle: "Prepare better for higher achievements",
    badge: "BOARD PREP",
    badgeBg: "bg-orange-100 text-orange-700",
    color: "text-orange-600",
    bgGradient: "from-orange-50/70 via-orange-50/20 to-white",
    borderColor: "border-orange-200",
    btnBg: "bg-orange-500 hover:bg-orange-600",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
  },
  {
    id: 7,
    title: "Class 10",
    subtitle: "Master your boards with confidence",
    badge: "BOARD MASTER",
    badgeBg: "bg-rose-100 text-rose-700",
    color: "text-rose-600",
    bgGradient: "from-rose-50/70 via-rose-50/20 to-white",
    borderColor: "border-rose-200",
    btnBg: "bg-rose-500 hover:bg-rose-600",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
  },
  {
    id: 8,
    title: "Olympiad",
    subtitle: "Challenge yourself. Aim for excellence",
    badge: "COMPETITIVE",
    badgeBg: "bg-purple-100 text-purple-700",
    color: "text-purple-600",
    bgGradient: "from-purple-50/70 via-purple-50/20 to-white",
    borderColor: "border-purple-200",
    btnBg: "bg-purple-600 hover:bg-purple-700",
    tagText: "Competitive Prep",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
  },
];

// ==========================================
// 4. CLASSES 11-12 DATA
// ==========================================
const class11to12Data = [
  {
    id: 9,
    title: "Class 11",
    stream: "Arts",
    tagline: "Explore. Express. Excel.",
    color: "text-purple-700",
    bgGradient: "from-purple-50/70 via-purple-50/20 to-white",
    borderColor: "border-purple-200",
    btnBg: "bg-purple-600 hover:bg-purple-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },
  {
    id: 10,
    title: "Class 11",
    stream: "Commerce",
    tagline: "Learn. Analyze. Grow.",
    color: "text-emerald-700",
    bgGradient: "from-emerald-50/70 via-emerald-50/20 to-white",
    borderColor: "border-emerald-200",
    btnBg: "bg-emerald-600 hover:bg-emerald-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2422/2422796.png",
  },
  {
    id: 11,
    title: "Class 11",
    stream: "Science",
    tagline: "Discover. Understand. Achieve.",
    color: "text-blue-700",
    bgGradient: "from-blue-50/70 via-blue-50/20 to-white",
    borderColor: "border-blue-200",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1085/1085461.png",
  },
  {
    id: 12,
    title: "Class 12",
    stream: "Arts",
    tagline: "Prepare. Perform. Progress.",
    color: "text-orange-700",
    bgGradient: "from-orange-50/70 via-orange-50/20 to-white",
    borderColor: "border-orange-200",
    btnBg: "bg-orange-500 hover:bg-orange-600",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135753.png",
  },
  {
    id: 13,
    title: "Class 12",
    stream: "Commerce",
    tagline: "Master Concepts. Maximize Results.",
    color: "text-teal-700",
    bgGradient: "from-teal-50/70 via-teal-50/20 to-white",
    borderColor: "border-teal-200",
    btnBg: "bg-teal-600 hover:bg-teal-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3076/3076416.png",
  },
  {
    id: 14,
    title: "Class 12",
    stream: "Science",
    tagline: "Focus. Practice. Succeed.",
    color: "text-sky-700",
    bgGradient: "from-sky-50/70 via-sky-50/20 to-white",
    borderColor: "border-sky-200",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1356/1356479.png",
  },
];

// ==========================================
// 5. STUDY PLAN DETAILS MAPPER
// ==========================================
const studyPlanData: Record<number, { title: string; desc: string; icon: string }> = {
  0: { title: "Personalized Evaluation Plan", desc: "1:1 mentorship sessions, weak-subject analysis, target roadmap, and progress tracking.", icon: "🤝" },
  1: { title: "Comprehensive Educate Module", desc: "Realistic mock test series, 10+ years PYQs analysis, and detailed strength/weakness analytics.", icon: "🧪" },
  2: { title: "Mental Wellness & Support", desc: "Stress-management sessions, 1:1 counselor support, and exam anxiety mitigation plans.", icon: "🧠" },

  // Classes 1-5 Custom Plan Details
  101: { title: "Learn Maths Plan", desc: "Interactive math games, counting drills, basic geometry, and speed math tricks.", icon: "🔢" },
  102: { title: "Learn English Plan", desc: "Phonics training, story-based reading practice, basic grammar, and spelling games.", icon: "📚" },
  103: { title: "Science Discovery Plan", desc: "Interactive nature videos, basic science experiments, and fun quizzes.", icon: "🔬" },
  104: { title: "GK Essentials Plan", desc: "Daily quiz cards, current events for kids, and world map exploration.", icon: "🌍" },
  105: { title: "JNV Entrance Preparation", desc: "Targeted mental ability tests, language comprehension, and mock papers for JNV.", icon: "🏛️" },
  106: { title: "KVS School Prep Module", desc: "Structured syllabus coverage as per KVS primary guidelines with fun worksheets.", icon: "🏫" },
  107: { title: "Sainik School Entrance Module", desc: "Early aptitude drills, intelligence test practice, and mock exams for Sainik School.", icon: "🎖️" },
  108: { title: "Olympiad Level Primary Prep", desc: "Logical reasoning workouts, mathematics and science olympiad test series.", icon: "🏆" },

  // Classes 6-10
  3: { title: "Class 6 Foundation Roadmap", desc: "26 Boards coverage, 1000+ MCQs, 2020+ Subjective Qs, 3000+ Model Papers, and top mentors.", icon: "🎒" },
  4: { title: "Class 7 Concept Mastery", desc: "Interactive conceptual sessions, daily practice worksheets, and 24/7 doubt resolution.", icon: "🌱" },
  5: { title: "Class 8 Advanced Prep", desc: "Targeted problem solving, early foundation for high school competition, and rank boosters.", icon: "🌍" },
  6: { title: "Class 9 Board Prep", desc: "Detailed syllabus breakdown, high-yield revision notes, and past year question practice.", icon: "📖" },
  7: { title: "Class 10 Board Master Series", desc: "Strictly timed mock exams, answer sheet evaluation by board experts, and formula sheets.", icon: "🏆" },
  8: { title: "Olympiad Competitive Mastery", desc: "Logical reasoning drills, national-level rank predictor, and high-difficulty challenge modules.", icon: "🥇" },

  // Classes 11-12
  9: { title: "Class 11 Arts Roadmap", desc: "CUET foundation, subjective essay evaluation, and comprehensive humanities stream notes.", icon: "🎨" },
  10: { title: "Class 11 Commerce Concept Booster", desc: "CA/CS foundation prep, Accounts & Economics core problem drills, and mock tests.", icon: "📈" },
  11: { title: "Class 11 Science (JEE/NEET)", desc: "AITS (All India Test Series), Physics, Chemistry, Math/Bio formula sheets, and rank tracker.", icon: "🧪" },
  12: { title: "Class 12 Arts & CUET Integrated", desc: "Integrated board exam prep with last 12 years PYQ detailed analysis and answer checking.", icon: "📚" },
  13: { title: "Class 12 Commerce Special", desc: "Premium CA/CS foundation prep, 5000+ practice MCQs & case studies, and career guidance.", icon: "💼" },
  14: { title: "Class 12 Science Target JEE/NEET", desc: "Daily live doubt clearing rooms, formula sheets, high-yield test series, and rank predictor.", icon: "🚀" },
};

function PersonalizedStudyPlan({ activeIndex }: { activeIndex: number }) {
  const data = studyPlanData[activeIndex] || studyPlanData[0];

  return (
    <div className="w-full mt-8 bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="w-full md:w-1/2 flex justify-center items-center relative h-48 bg-slate-50 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="flex items-center gap-4 z-10">
          <div className="p-4 bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-200 animate-bounce">
            <BarChart3 className="w-10 h-10" />
          </div>
          <div className="p-4 bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-200">
            <FileText className="w-10 h-10" />
          </div>
          <div className="p-4 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-200 animate-pulse">
            <TrendingUp className="w-10 h-10" />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{data.icon}</span>
          <h4 className="text-xl font-bold text-slate-800 uppercase tracking-wide text-sm md:text-base">
            {data.title}
          </h4>
        </div>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
          {data.desc}
        </p>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5">
          JOIN US NOW
        </button>
      </div>
    </div>
  );
}

// ==========================================
// MAIN FEATURES COMPONENT
// ==========================================
export function Features() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="features" className="py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Comprehensive Guidance for Every Student
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Good Guiders brings together realistic Mock Tests, interactive Online Learning, and personalized Mentorship to help students learn smarter, perform better, and achieve their goals.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* TOP ROW CARDS: Evaluate, Educate, Elevate */}
        {/* ---------------------------------------------------- */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topFeatures.map((feature) => {
              const isExpanded = expandedCard === feature.id;

              return (
                <Card
                  key={feature.id}
                  className={`${feature.bg} border-none text-black h-[320px] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                    isExpanded ? "ring-4 ring-offset-2 ring-blue-500" : ""
                  }`}
                >
                  <CardContent className="p-6 flex flex-col h-full justify-between">
                    <div>
                      <div className="w-16 h-16 bg-white/40 rounded-2xl flex items-center justify-center mb-6 shadow-sm overflow-hidden p-2">
                        <img src={feature.imgUrl} alt={feature.title} className="w-full h-full object-cover rounded-xl" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-black/80 font-medium leading-relaxed line-clamp-3">
                        {feature.description}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleExpand(feature.id)}
                      className={`w-full py-3 rounded-xl transition-all font-semibold shadow-sm ${
                        isExpanded
                          ? "bg-black text-white hover:bg-gray-800"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      }`}
                    >
                      {isExpanded ? "Show Less" : "Learn More"}
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {expandedCard !== null && expandedCard < 3 && (
            <PersonalizedStudyPlan activeIndex={expandedCard} />
          )}
        </div>

        {/* ---------------------------------------------------- */}
        {/* SECTION 1: CLASSES 1-5 (UNIFORM SIZE & DESIGN) */}
        {/* ---------------------------------------------------- */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-widest text-xl uppercase mb-2">
              <span>🎓 CLASSES 1–5</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore. Learn. Grow.
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2">
              Fun learning for a strong foundation
            </p>

            {/* Sub-heading ke neeche 2 buttons ek hi row mein */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5">
                Explore Class
              </button>
              <button className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5">
               online Mentor
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {class1to5Data.map((item) => {
              const isExpanded = expandedCard === item.id;

              return (
                <Card
                  key={item.id}
                  className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-[280px] flex flex-col justify-between ${
                    isExpanded ? "ring-4 ring-blue-400" : ""
                  }`}
                >
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Row: Badge & Image Visual */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-black px-3 py-1 rounded-md tracking-wider ${item.badgeBg}`}>
                          {item.badge}
                        </span>
                        <div className="w-16 h-16 p-2 flex items-center justify-center">
                          <img src={item.imgUrl} alt={item.title} className="w-full h-full object-contain drop-shadow-md" />
                        </div>
                      </div>

                      <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-medium leading-snug line-clamp-2">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Bottom Row: Tag & Explore Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100/80 mt-auto">
                      <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5 shadow-2xs">
                        📖 {item.tagText}
                      </span>
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className={`px-4 py-2 text-xs font-bold text-white rounded-xl ${item.btnBg} transition-all flex items-center gap-1.5 shadow-sm hover:scale-105`}
                      >
                        {isExpanded ? "Close" : "Explore"} <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {expandedCard !== null && expandedCard >= 101 && expandedCard <= 108 && (
            <PersonalizedStudyPlan activeIndex={expandedCard} />
          )}
        </div>

        {/* ---------------------------------------------------- */}
        {/* SECTION 2: CLASSES 6-10 (UNIFORM SIZE & DESIGN) */}
        {/* ---------------------------------------------------- */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-widest text-xl uppercase mb-2">
              <span>🎓</span> <span>CHOOSE YOUR CLASS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Choose Your Class
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2">
              Personalized learning for every stage of your academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {class6to10Data.map((item) => {
              const isExpanded = expandedCard === item.id;

              return (
                <Card
                  key={item.id}
                  className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-[280px] flex flex-col justify-between ${
                    isExpanded ? "ring-4 ring-blue-400" : ""
                  }`}
                >
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Row: Badge & Image Visual */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-black px-3 py-1 rounded-md tracking-wider ${item.badgeBg}`}>
                          {item.badge}
                        </span>
                        <div className="w-20 h-20 p-2 flex items-center justify-center">
                          <img src={item.imgUrl} alt={item.title} className="w-full h-full object-contain drop-shadow-md" />
                        </div>
                      </div>

                      <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-medium leading-snug line-clamp-2">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Bottom Row: Tag & Explore Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100/80 mt-auto">
                      <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5 shadow-2xs">
                        📖 {item.tagText}
                      </span>
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className={`px-4 py-2 text-xs font-bold text-white rounded-xl ${item.btnBg} transition-all flex items-center gap-1.5 shadow-sm hover:scale-105`}
                      >
                        {isExpanded ? "Close" : "Explore"} <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {expandedCard !== null && expandedCard >= 3 && expandedCard <= 8 && (
            <PersonalizedStudyPlan activeIndex={expandedCard} />
          )}
        </div>

        {/* ---------------------------------------------------- */}
        {/* SECTION 3: CLASSES 11-12 (UNIFORM SIZE & DESIGN) */}
        {/* ---------------------------------------------------- */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-widest text-xl uppercase mb-2">
               <span>CLASSES 11–12</span> 
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Choose Your Stream
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2">
              Pick your path. We'll guide you to success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {class11to12Data.map((item) => {
              const isExpanded = expandedCard === item.id;

              return (
                <Card
                  key={item.id}
                  className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col justify-between ${
                    isExpanded ? "ring-4 ring-blue-400" : ""
                  }`}
                >
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-slate-400 tracking-wider uppercase block mb-1">
                          {item.title}
                        </span>
                        <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
                          {item.stream}
                        </h3>
                        <p className="text-slate-500 text-xs font-semibold line-clamp-2 mt-2">
                          {item.tagline}
                        </p>
                      </div>

                      {/* Visual Image */}
                      <div className="w-20 h-20 p-2 flex items-center justify-center flex-shrink-0">
                        <img src={item.imgUrl} alt={item.stream} className="w-full h-full object-contain drop-shadow-md" />
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="flex justify-end pt-4 border-t border-slate-100/80 mt-auto">
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className={`w-9 h-9 rounded-full ${item.btnBg} text-white flex items-center justify-center shadow-md hover:scale-110 transition-all`}
                        aria-label={`Select ${item.title} ${item.stream}`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {expandedCard !== null && expandedCard >= 9 && (
            <PersonalizedStudyPlan activeIndex={expandedCard} />
          )}
        </div>

      </div>
    </section>
  );
}

///dsalj///