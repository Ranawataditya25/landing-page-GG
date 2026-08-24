



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Users,
//   FileText,
//   Heart,
//   BarChart3,
//   TrendingUp,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Bookmark,
//   CheckCircle2,
//   Star,
//   Clock,
// } from "lucide-react";

// // Safe Navigation Helper (Taki agar React Router Context miss bhi ho to crash na ho)
// function useSafeNavigate() {
//   try {
//     return useNavigate();
//   } catch (error) {
//     return (path: string) => {
//       window.location.href = path;
//     };
//   }
// }

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
//     imgUrl:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: 1,
//     title: "🧪 Educate",
//     description:
//       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
//     bg: "bg-[rgb(255,153,153)]",
//     imgUrl:
//       "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: 2,
//     title: "🧠 Elevate",
//     description:
//       "Mental health support, stress management, and counseling for academic and personal challenges.",
//     bg: "bg-[rgb(169,254,255)]",
//     imgUrl:
//       "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80",
//   },
// ];

// // ==========================================
// // 2. CLASSES 1-5 DATA
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
//     tagText: "Class 6 Prep",
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
//     tagText: "Class 7 Prep",
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
//     tagText: "Class 8 Prep",
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
//     tagText: "Class 9 Prep",
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
//     tagText: "Class 10 Board",
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
// // 5. 8 ONLINE MENTORS DATA
// // ==========================================
// const mentorsList = [
//   {
//     id: 1,
//     name: "Rahul Sharma",
//     badge: "JEE",
//     badgeBg: "bg-orange-500 text-white",
//     college: "IIT Delhi Alumnus",
//     role: "JEE Physics Mentor",
//     roleColor: "text-orange-600",
//     rating: "4.9",
//     students: "1,200+ Students",
//     exp: "8+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 2,
//     name: "Dr. Aditi Verma",
//     badge: "NEET",
//     badgeBg: "bg-emerald-600 text-white",
//     college: "AIIMS Delhi Graduate",
//     role: "NEET Biology Mentor",
//     roleColor: "text-emerald-600",
//     rating: "4.9",
//     students: "950+ Students",
//     exp: "7+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 3,
//     name: "Ankit Jain",
//     badge: "CLASS 6 - 10",
//     badgeBg: "bg-blue-600 text-white",
//     college: "IIT Bombay Alumnus",
//     role: "Maths Mentor",
//     roleColor: "text-blue-600",
//     rating: "4.8",
//     students: "1,500+ Students",
//     exp: "9+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 4,
//     name: "Neha Kapoor",
//     badge: "CAREER",
//     badgeBg: "bg-purple-600 text-white",
//     college: "Ex. Career Analyst, NASSCOM",
//     role: "Career & College Guidance",
//     roleColor: "text-purple-600",
//     rating: "4.9",
//     students: "1,100+ Students",
//     exp: "6+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 5,
//     name: "Vikram Malhotra",
//     badge: "FOUNDATION",
//     badgeBg: "bg-indigo-600 text-white",
//     college: "BITS Pilani Alumnus",
//     role: "Chemistry Specialist",
//     roleColor: "text-indigo-600",
//     rating: "4.8",
//     students: "800+ Students",
//     exp: "5+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 6,
//     name: "Pooja Reddy",
//     badge: "OLYMPIAD",
//     badgeBg: "bg-rose-500 text-white",
//     college: "Gold Medalist, IISc",
//     role: "Logical Reasoning Expert",
//     roleColor: "text-rose-600",
//     rating: "5.0",
//     students: "2,000+ Students",
//     exp: "10+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 7,
//     name: "Saurabh Mehta",
//     badge: "COMMERCE",
//     badgeBg: "bg-teal-600 text-white",
//     college: "Chartered Accountant (CA)",
//     role: "Accounts & Finance Mentor",
//     roleColor: "text-teal-600",
//     rating: "4.9",
//     students: "1,350+ Students",
//     exp: "8+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 8,
//     name: "Meenakshi Sundaram",
//     badge: "ENGLISH",
//     badgeBg: "bg-amber-500 text-white",
//     college: "DU Literature Lead",
//     role: "Grammar & Speaking Coach",
//     roleColor: "text-amber-600",
//     rating: "4.7",
//     students: "1,700+ Students",
//     exp: "11+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
//   },
// ];

// // ==========================================
// // STUDY PLAN DETAILS MAPPER
// // ==========================================
// const studyPlanData: Record<
//   number,
//   { title: string; desc: string; icon: string }
// > = {
//   0: {
//     title: "Personalized Evaluation Plan",
//     desc: "1:1 mentorship sessions, weak-subject analysis, target roadmap, and progress tracking.",
//     icon: "🤝",
//   },
//   1: {
//     title: "Comprehensive Educate Module",
//     desc: "Realistic mock test series, 10+ years PYQs analysis, and detailed strength/weakness analytics.",
//     icon: "🧪",
//   },
//   2: {
//     title: "Mental Wellness & Support",
//     desc: "Stress-management sessions, 1:1 counselor support, and exam anxiety mitigation plans.",
//     icon: "🧠",
//   },
//   101: {
//     title: "Learn Maths Plan",
//     desc: "Interactive math games, counting drills, basic geometry, and speed math tricks.",
//     icon: "🔢",
//   },
//   102: {
//     title: "Learn English Plan",
//     desc: "Phonics training, story-based reading practice, basic grammar, and spelling games.",
//     icon: "📚",
//   },
//   103: {
//     title: "Science Discovery Plan",
//     desc: "Interactive nature videos, basic science experiments, and fun quizzes.",
//     icon: "🔬",
//   },
//   104: {
//     title: "GK Essentials Plan",
//     desc: "Daily quiz cards, current events for kids, and world map exploration.",
//     icon: "🌍",
//   },
//   105: {
//     title: "JNV Entrance Preparation",
//     desc: "Targeted mental ability tests, language comprehension, and mock papers for JNV.",
//     icon: "🏛️",
//   },
//   106: {
//     title: "KVS School Prep Module",
//     desc: "Structured syllabus coverage as per KVS primary guidelines with fun worksheets.",
//     icon: "🏫",
//   },
//   107: {
//     title: "Sainik School Entrance Module",
//     desc: "Early aptitude drills, intelligence test practice, and mock exams for Sainik School.",
//     icon: "🎖️",
//   },
//   108: {
//     title: "Olympiad Level Primary Prep",
//     desc: "Logical reasoning workouts, mathematics and science olympiad test series.",
//     icon: "🏆",
//   },
//   3: {
//     title: "Class 6 Foundation Roadmap",
//     desc: "26 Boards coverage, 1000+ MCQs, 2020+ Subjective Qs, 3000+ Model Papers, and top mentors.",
//     icon: "🎒",
//   },
//   4: {
//     title: "Class 7 Concept Mastery",
//     desc: "Interactive conceptual sessions, daily practice worksheets, and 24/7 doubt resolution.",
//     icon: "🌱",
//   },
//   5: {
//     title: "Class 8 Advanced Prep",
//     desc: "Targeted problem solving, early foundation for high school competition, and rank boosters.",
//     icon: "🌍",
//   },
//   6: {
//     title: "Class 9 Board Prep",
//     desc: "Detailed syllabus breakdown, high-yield revision notes, and past year question practice.",
//     icon: "📖",
//   },
//   7: {
//     title: "Class 10 Board Master Series",
//     desc: "Strictly timed mock exams, answer sheet evaluation by board experts, and formula sheets.",
//     icon: "🏆",
//   },
//   8: {
//     title: "Olympiad Competitive Mastery",
//     desc: "Logical reasoning drills, national-level rank predictor, and high-difficulty challenge modules.",
//     icon: "🥇",
//   },
//   9: {
//     title: "Class 11 Arts Roadmap",
//     desc: "CUET foundation, subjective essay evaluation, and comprehensive humanities stream notes.",
//     icon: "🎨",
//   },
//   10: {
//     title: "Class 11 Commerce Concept Booster",
//     desc: "CA/CS foundation prep, Accounts & Economics core problem drills, and mock tests.",
//     icon: "📈",
//   },
//   11: {
//     title: "Class 11 Science (JEE/NEET)",
//     desc: "AITS (All India Test Series), Physics, Chemistry, Math/Bio formula sheets, and rank tracker.",
//     icon: "🧪",
//   },
//   12: {
//     title: "Class 12 Arts & CUET Integrated",
//     desc: "Integrated board exam prep with last 12 years PYQ detailed analysis and answer checking.",
//     icon: "📚",
//   },
//   13: {
//     title: "Class 12 Commerce Special",
//     desc: "Premium CA/CS foundation prep, 5000+ practice MCQs & case studies, and career guidance.",
//     icon: "💼",
//   },
//   14: {
//     title: "Class 12 Science Target JEE/NEET",
//     desc: "Daily live doubt clearing rooms, formula sheets, high-yield test series, and rank predictor.",
//     icon: "🚀",
//   },
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
// // MENTOR CAROUSEL COMPONENT (8 MENTORS AUTO-SLIDER)
// // ==========================================
// function MentorSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useSafeNavigate();

//   // Auto-slide Left to Right every 3.5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       handleNext();
//     }, 3500);
//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? mentorsList.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === mentorsList.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative w-full py-4 px-2 pb-14">
//       {/* Left Navigation Button */}
//       <button
//         onClick={handlePrev}
//         className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all"
//         aria-label="Previous"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>

//       {/* Slider Viewport */}
//       <div className="overflow-hidden w-full py-2">
//         <div
//           className="flex transition-transform duration-500 ease-out gap-6"
//           style={{
//             transform: `translateX(-${currentIndex * (100 / 4)}%)`,
//           }}
//         >
//           {mentorsList.map((mentor) => (
//             <div
//               key={mentor.id}
//               className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] flex-shrink-0"
//             >
//               <div className="bg-white border border-slate-200/80 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[420px] relative">
//                 {/* Header Tag & Bookmark */}
//                 <div className="flex justify-between items-center mb-3">
//                   <span
//                     className={`text-[10px] font-extrabold px-3 py-1 rounded-md tracking-wider uppercase ${mentor.badgeBg}`}
//                   >
//                     {mentor.badge}
//                   </span>
//                   <button className="text-gray-400 hover:text-gray-600 transition-colors">
//                     <Bookmark className="w-5 h-5" />
//                   </button>
//                 </div>

//                 {/* Mentor Photo */}
//                 <div className="flex justify-center my-2">
//                   <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-slate-100 shadow-inner">
//                     <img
//                       src={mentor.imgUrl}
//                       alt={mentor.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* Mentor Info */}
//                 <div className="text-center">
//                   <div className="flex items-center justify-center gap-1">
//                     <h3 className="text-lg font-bold text-slate-900">
//                       {mentor.name}
//                     </h3>
//                     <CheckCircle2 className="w-4 h-4 fill-orange-500 text-white" />
//                   </div>
//                   <p className="text-xs text-slate-500 mt-0.5">
//                     {mentor.college}
//                   </p>
//                   <p
//                     className={`text-sm font-semibold mt-1 ${mentor.roleColor}`}
//                   >
//                     {mentor.role}
//                   </p>
//                 </div>

//                 {/* Stats Row */}
//                 <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 px-2 py-2 border-t border-b border-slate-100 my-3">
//                   <div className="flex items-center gap-1">
//                     <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
//                     <span className="text-slate-800 font-bold">
//                       {mentor.rating}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Users className="w-3.5 h-3.5 text-slate-400" />
//                     <span>{mentor.students}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Clock className="w-3.5 h-3.5 text-slate-400" />
//                     <span>{mentor.exp}</span>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="grid grid-cols-2 gap-2 mt-auto">
//                   <button
//                     onClick={() => navigate("/mentordetail")}
//                     className="py-2.5 px-3 border border-orange-500 text-orange-500 hover:bg-orange-50 text-xs font-bold rounded-xl transition-all"
//                   >
//                     View Profile
//                   </button>
//                   <button
//                     onClick={() => navigate("/mentordetail")}
//                     className="py-2.5 px-3 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-orange-200"
//                   >
//                     Book Session
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Navigation Button */}
//       <button
//         onClick={handleNext}
//         className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all"
//         aria-label="Next"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       {/* Explore All Mentors Button */}
//       <button
//         onClick={() => navigate("/mentordetail")}
//         className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer z-30"
//       >
//         <span>Explore All Mentors</span>
//         <ArrowRight className="w-4 h-4" />
//       </button>
//     </div>
//   );
// }

// // ==========================================
// // SECTION WRAPPER COMPONENT WITH TOGGLE
// // ==========================================
// function DynamicSectionBlock({
//   sectionTitle,
//   sectionBadge,
//   data,
//   expandedCard,
//   toggleExpand,
// }: {
//   sectionTitle: string;
//   sectionBadge: string;
//   data: any[];
//   expandedCard: number | null;
//   toggleExpand: (id: number) => void;
// }) {
//   const [activeView, setActiveView] = useState<"classes" | "mentors">(
//     "classes"
//   );

//   return (
//     <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
//       <div className="text-center mb-10">
//         <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-widest text-xl uppercase mb-2">
//           <span>{sectionBadge}</span>
//         </div>
//         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//           {activeView === "classes" ? sectionTitle : "Available Online Mentors"}
//         </h2>
//         <p className="text-slate-500 text-sm md:text-base mt-2">
//           {activeView === "classes"
//             ? "Fun learning for a strong foundation"
//             : "Connect 1-on-1 with expert mentors from top universities"}
//         </p>

//         {/* Toggle Buttons */}
//         <div className="flex items-center justify-center gap-4 mt-6">
//           <button
//             onClick={() => setActiveView("classes")}
//             className={`px-6 py-2.5 font-semibold text-sm rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-md ${
//               activeView === "classes"
//                 ? "bg-orange-600 text-white"
//                 : "bg-slate-100 text-slate-700 hover:bg-slate-200"
//             }`}
//           >
//             Explore Class
//           </button>
//           <button
//             onClick={() => setActiveView("mentors")}
//             className={`px-6 py-2.5 font-semibold text-sm rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-md ${
//               activeView === "mentors"
//                 ? "bg-slate-900 text-white"
//                 : "bg-slate-100 text-slate-700 hover:bg-slate-200"
//             }`}
//           >
//             Online Mentor
//           </button>
//         </div>
//       </div>

//       {/* VIEW 1: Mentors Slider */}
//       {activeView === "mentors" && <MentorSlider />}

//       {/* VIEW 2: Default Classes Cards Grid */}
//       {activeView === "classes" && (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {data.map((item) => {
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
//                       <div className="flex items-center justify-between mb-2">
//                         <span
//                           className={`text-[10px] font-black px-3 py-1 rounded-md tracking-wider ${item.badgeBg}`}
//                         >
//                           {item.badge}
//                         </span>
//                         <div className="w-16 h-16 p-2 flex items-center justify-center">
//                           <img
//                             src={item.imgUrl}
//                             alt={item.title}
//                             className="w-full h-full object-contain drop-shadow-md"
//                           />
//                         </div>
//                       </div>

//                       <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
//                         {item.title}
//                       </h3>
//                       <p className="text-slate-600 text-sm font-medium leading-snug line-clamp-2">
//                         {item.subtitle}
//                       </p>
//                     </div>

//                     <div className="flex items-center justify-between pt-4 border-t border-slate-100/80 mt-auto">
//                       <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5 shadow-2xs">
//                         📖 {item.tagText || "Learning"}
//                       </span>
//                       <button
//                         onClick={() => toggleExpand(item.id)}
//                         className={`px-4 py-2 text-xs font-bold text-white rounded-xl ${item.btnBg} transition-all flex items-center gap-1.5 shadow-sm hover:scale-105`}
//                       >
//                         {isExpanded ? "Close" : "Explore"}{" "}
//                         <ArrowRight className="w-3.5 h-3.5" />
//                       </button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               );
//             })}
//           </div>

//           {expandedCard !== null &&
//             data.some((item) => item.id === expandedCard) && (
//               <PersonalizedStudyPlan activeIndex={expandedCard} />
//             )}
//         </>
//       )}
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
//             Good Guiders brings together realistic Mock Tests, interactive
//             Online Learning, and personalized Mentorship to help students learn
//             smarter, perform better, and achieve their goals.
//           </p>
//         </div>

//         {/* TOP ROW CARDS: Evaluate, Educate, Elevate */}
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
//                         <img
//                           src={feature.imgUrl}
//                           alt={feature.title}
//                           className="w-full h-full object-cover rounded-xl"
//                         />
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

//         {/* SECTION 1: CLASSES 1-5 */}
//         <DynamicSectionBlock
//           sectionBadge="🎓 CLASSES 1–5"
//           sectionTitle="Explore. Learn. Grow."
//           data={class1to5Data}
//           expandedCard={expandedCard}
//           toggleExpand={toggleExpand}
//         />

//         {/* SECTION 2: CLASSES 6-10 */}
//         <DynamicSectionBlock
//           sectionBadge="🎓 CHOOSE YOUR CLASS"
//           sectionTitle="Choose Your Class"
//           data={class6to10Data}
//           expandedCard={expandedCard}
//           toggleExpand={toggleExpand}
//         />

//         {/* SECTION 3: CLASSES 11-12 */}
//         <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-widest text-xl uppercase mb-2">
//               <span>CLASSES 11–12</span>
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
//                         <h3
//                           className={`text-2xl font-black mb-1 ${item.color}`}
//                         >
//                           {item.stream}
//                         </h3>
//                         <p className="text-slate-500 text-xs font-semibold line-clamp-2 mt-2">
//                           {item.tagline}
//                         </p>
//                       </div>

//                       <div className="w-20 h-20 p-2 flex items-center justify-center flex-shrink-0">
//                         <img
//                           src={item.imgUrl}
//                           alt={item.stream}
//                           className="w-full h-full object-contain drop-shadow-md"
//                         />
//                       </div>
//                     </div>

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





// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Users,
//   FileText,
//   BarChart3,
//   TrendingUp,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   Bookmark,
//   CheckCircle2,
//   Star,
//   Clock,
// } from "lucide-react";

// // Safe Navigation Helper
// function useSafeNavigate() {
//   try {
//     return useNavigate();
//   } catch (error) {
//     return (path: string, options?: { state?: any }) => {
//       window.location.href = path;
//     };
//   }
// }

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
//     imgUrl:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: 1,
//     title: "🧪 Educate",
//     description:
//       "Practice with realistic mock tests, previous year papers, and detailed performance analytics.",
//     bg: "bg-[rgb(255,153,153)]",
//     imgUrl:
//       "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=200&q=80",
//   },
//   {
//     id: 2,
//     title: "🧠 Elevate",
//     description:
//       "Mental health support, stress management, and counseling for academic and personal challenges.",
//     bg: "bg-[rgb(169,254,255)]",
//     imgUrl:
//       "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80",
//   },
// ];

// // ==========================================
// // 2. CLASSES 1-5 DATA
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
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
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
//     tagText: "Class 6 Prep",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2883/2883823.png",
//     path: "/mysubjectdetail",
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
//     tagText: "Class 7 Prep",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3429/3429149.png",
//     path: "/mysubjectdetail",
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
//     tagText: "Class 8 Prep",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135753.png",
//     path: "/mysubjectdetail",
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
//     tagText: "Class 9 Prep",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
//     path: "/mysubjectdetail",
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
//     tagText: "Class 10 Board",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
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
//     path: "/mysubjectdetail",
//   },
// ];

// // ==========================================
// // 5. 8 ONLINE MENTORS DATA
// // ==========================================
// const mentorsList = [
//   {
//     id: 1,
//     name: "Rahul Sharma",
//     badge: "JEE",
//     badgeBg: "bg-orange-500 text-white",
//     college: "IIT Delhi Alumnus",
//     role: "JEE Physics Mentor",
//     roleColor: "text-orange-600",
//     rating: "4.9",
//     students: "1,200+ Students",
//     exp: "8+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 2,
//     name: "Dr. Aditi Verma",
//     badge: "NEET",
//     badgeBg: "bg-emerald-600 text-white",
//     college: "AIIMS Delhi Graduate",
//     role: "NEET Biology Mentor",
//     roleColor: "text-emerald-600",
//     rating: "4.9",
//     students: "950+ Students",
//     exp: "7+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 3,
//     name: "Ankit Jain",
//     badge: "CLASS 6 - 10",
//     badgeBg: "bg-blue-600 text-white",
//     college: "IIT Bombay Alumnus",
//     role: "Maths Mentor",
//     roleColor: "text-blue-600",
//     rating: "4.8",
//     students: "1,500+ Students",
//     exp: "9+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 4,
//     name: "Neha Kapoor",
//     badge: "CAREER",
//     badgeBg: "bg-purple-600 text-white",
//     college: "Ex. Career Analyst, NASSCOM",
//     role: "Career & College Guidance",
//     roleColor: "text-purple-600",
//     rating: "4.9",
//     students: "1,100+ Students",
//     exp: "6+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 5,
//     name: "Vikram Malhotra",
//     badge: "FOUNDATION",
//     badgeBg: "bg-indigo-600 text-white",
//     college: "BITS Pilani Alumnus",
//     role: "Chemistry Specialist",
//     roleColor: "text-indigo-600",
//     rating: "4.8",
//     students: "800+ Students",
//     exp: "5+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 6,
//     name: "Pooja Reddy",
//     badge: "OLYMPIAD",
//     badgeBg: "bg-rose-500 text-white",
//     college: "Gold Medalist, IISc",
//     role: "Logical Reasoning Expert",
//     roleColor: "text-rose-600",
//     rating: "5.0",
//     students: "2,000+ Students",
//     exp: "10+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 7,
//     name: "Saurabh Mehta",
//     badge: "COMMERCE",
//     badgeBg: "bg-teal-600 text-white",
//     college: "Chartered Accountant (CA)",
//     role: "Accounts & Finance Mentor",
//     roleColor: "text-teal-600",
//     rating: "4.9",
//     students: "1,350+ Students",
//     exp: "8+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 8,
//     name: "Meenakshi Sundaram",
//     badge: "ENGLISH",
//     badgeBg: "bg-amber-500 text-white",
//     college: "DU Literature Lead",
//     role: "Grammar & Speaking Coach",
//     roleColor: "text-amber-600",
//     rating: "4.7",
//     students: "1,700+ Students",
//     exp: "11+ Years",
//     imgUrl:
//       "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=300&q=80",
//   },
// ];

// // ==========================================
// // STUDY PLAN DETAILS MAPPER
// // ==========================================
// const studyPlanData: Record<
//   number,
//   { title: string; desc: string; icon: string }
// > = {
//   0: {
//     title: "Personalized Evaluation Plan",
//     desc: "1:1 mentorship sessions, weak-subject analysis, target roadmap, and progress tracking.",
//     icon: "🤝",
//   },
//   1: {
//     title: "Comprehensive Educate Module",
//     desc: "Realistic mock test series, 10+ years PYQs analysis, and detailed strength/weakness analytics.",
//     icon: "🧪",
//   },
//   2: {
//     title: "Mental Wellness & Support",
//     desc: "Stress-management sessions, 1:1 counselor support, and exam anxiety mitigation plans.",
//     icon: "🧠",
//   },
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
// // MENTOR CAROUSEL COMPONENT
// // ==========================================
// function MentorSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useSafeNavigate();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       handleNext();
//     }, 3500);
//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? mentorsList.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === mentorsList.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative w-full py-4 px-2 pb-14">
//       <button
//         onClick={handlePrev}
//         className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all"
//         aria-label="Previous"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>

//       <div className="overflow-hidden w-full py-2">
//         <div
//           className="flex transition-transform duration-500 ease-out gap-6"
//           style={{
//             transform: `translateX(-${currentIndex * (100 / 4)}%)`,
//           }}
//         >
//           {mentorsList.map((mentor) => (
//             <div
//               key={mentor.id}
//               className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] flex-shrink-0"
//             >
//               <div className="bg-white border border-slate-200/80 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[420px] relative">
//                 <div className="flex justify-between items-center mb-3">
//                   <span
//                     className={`text-[10px] font-extrabold px-3 py-1 rounded-md tracking-wider uppercase ${mentor.badgeBg}`}
//                   >
//                     {mentor.badge}
//                   </span>
//                   <button className="text-gray-400 hover:text-gray-600 transition-colors">
//                     <Bookmark className="w-5 h-5" />
//                   </button>
//                 </div>

//                 <div className="flex justify-center my-2">
//                   <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-slate-100 shadow-inner">
//                     <img
//                       src={mentor.imgUrl}
//                       alt={mentor.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>

//                 <div className="text-center">
//                   <div className="flex items-center justify-center gap-1">
//                     <h3 className="text-lg font-bold text-slate-900">
//                       {mentor.name}
//                     </h3>
//                     <CheckCircle2 className="w-4 h-4 fill-orange-500 text-white" />
//                   </div>
//                   <p className="text-xs text-slate-500 mt-0.5">
//                     {mentor.college}
//                   </p>
//                   <p
//                     className={`text-sm font-semibold mt-1 ${mentor.roleColor}`}
//                   >
//                     {mentor.role}
//                   </p>
//                 </div>

//                 <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 px-2 py-2 border-t border-b border-slate-100 my-3">
//                   <div className="flex items-center gap-1">
//                     <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
//                     <span className="text-slate-800 font-bold">
//                       {mentor.rating}
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Users className="w-3.5 h-3.5 text-slate-400" />
//                     <span>{mentor.students}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Clock className="w-3.5 h-3.5 text-slate-400" />
//                     <span>{mentor.exp}</span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-2 mt-auto">
//                   <button
//                     onClick={() => navigate("/mentordetail")}
//                     className="py-2.5 px-3 border border-orange-500 text-orange-500 hover:bg-orange-50 text-xs font-bold rounded-xl transition-all"
//                   >
//                     View Profile
//                   </button>
//                   <button
//                     onClick={() => navigate("/mentordetail")}
//                     className="py-2.5 px-3 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-orange-200"
//                   >
//                     Book Session
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={handleNext}
//         className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all"
//         aria-label="Next"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       <button
//         onClick={() => navigate("/mentordetail")}
//         className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer z-30"
//       >
//         <span>Explore All Mentors</span>
//         <ArrowRight className="w-4 h-4" />
//       </button>
//     </div>
//   );
// }

// // ==========================================
// // SECTION WRAPPER COMPONENT (NAVIGATES TO /mysubjectdetail)
// // ==========================================
// function DynamicSectionBlock({
//   sectionTitle,
//   sectionBadge,
//   data,
// }: {
//   sectionTitle: string;
//   sectionBadge: string;
//   data: any[];
// }) {
//   const [activeView, setActiveView] = useState<"classes" | "mentors">("classes");
//   const navigate = useSafeNavigate();

//   const handleCardClick = (item: any) => {
//     // Navigate to /mysubjectdetail and pass the selected class details in state
//     navigate(item.path || "/mysubjectdetail", {
//       state: {
//         id: item.id,
//         title: item.title,
//         subtitle: item.subtitle,
//         tag: item.tagText || item.badge,
//       },
//     });
//   };

//   return (
//     <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
//       <div className="text-center mb-10">
//         <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-widest text-xl uppercase mb-2">
//           <span>{sectionBadge}</span>
//         </div>
//         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//           {activeView === "classes" ? sectionTitle : "Available Online Mentors"}
//         </h2>
//         <p className="text-slate-500 text-sm md:text-base mt-2">
//           {activeView === "classes"
//             ? "Fun learning for a strong foundation"
//             : "Connect 1-on-1 with expert mentors from top universities"}
//         </p>

//         {/* Toggle Buttons */}
//         <div className="flex items-center justify-center gap-4 mt-6">
//           <button
//             onClick={() => setActiveView("classes")}
//             className={`px-6 py-2.5 font-semibold text-sm rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-md ${
//               activeView === "classes"
//                 ? "bg-orange-600 text-white"
//                 : "bg-slate-100 text-slate-700 hover:bg-slate-200"
//             }`}
//           >
//             Explore Class
//           </button>
//           <button
//             onClick={() => setActiveView("mentors")}
//             className={`px-6 py-2.5 font-semibold text-sm rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-md ${
//               activeView === "mentors"
//                 ? "bg-slate-900 text-white"
//                 : "bg-slate-100 text-slate-700 hover:bg-slate-200"
//             }`}
//           >
//             Online Mentor
//           </button>
//         </div>
//       </div>

//       {/* VIEW 1: Mentors Slider */}
//       {activeView === "mentors" && <MentorSlider />}

//       {/* VIEW 2: Classes Cards Grid */}
//       {activeView === "classes" && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {data.map((item) => (
//             <Card
//               key={item.id}
//               onClick={() => handleCardClick(item)}
//               className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden h-[280px] flex flex-col justify-between cursor-pointer group`}
//             >
//               <CardContent className="p-6 flex flex-col justify-between h-full">
//                 <div>
//                   <div className="flex items-center justify-between mb-2">
//                     <span
//                       className={`text-[10px] font-black px-3 py-1 rounded-md tracking-wider ${item.badgeBg}`}
//                     >
//                       {item.badge}
//                     </span>
//                     <div className="w-16 h-16 p-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
//                       <img
//                         src={item.imgUrl}
//                         alt={item.title}
//                         className="w-full h-full object-contain drop-shadow-md"
//                       />
//                     </div>
//                   </div>

//                   <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
//                     {item.title}
//                   </h3>
//                   <p className="text-slate-600 text-sm font-medium leading-snug line-clamp-2">
//                     {item.subtitle}
//                   </p>
//                 </div>

//                 <div className="flex items-center justify-between pt-4 border-t border-slate-100/80 mt-auto">
//                   <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 flex items-center gap-1.5 shadow-2xs">
//                     📖 {item.tagText || "Learning"}
//                   </span>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleCardClick(item);
//                     }}
//                     className={`px-4 py-2 text-xs font-bold text-white rounded-xl ${item.btnBg} transition-all flex items-center gap-1.5 shadow-sm group-hover:scale-105`}
//                   >
//                     Explore <ArrowRight className="w-3.5 h-3.5" />
//                   </button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// // ==========================================
// // MAIN FEATURES COMPONENT
// // ==========================================
// export function Features() {
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const navigate = useSafeNavigate();

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
//             Good Guiders brings together realistic Mock Tests, interactive
//             Online Learning, and personalized Mentorship to help students learn
//             smarter, perform better, and achieve their goals.
//           </p>
//         </div>

//         {/* TOP ROW CARDS: Evaluate, Educate, Elevate */}
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
//                         <img
//                           src={feature.imgUrl}
//                           alt={feature.title}
//                           className="w-full h-full object-cover rounded-xl"
//                         />
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

//         {/* SECTION 1: CLASSES 1-5 */}
//         <DynamicSectionBlock
//           sectionBadge="🎓 CLASSES 1–5"
//           sectionTitle="Explore. Learn. Grow."
//           data={class1to5Data}
//         />

//         {/* SECTION 2: CLASSES 6-10 */}
//         <DynamicSectionBlock
//           sectionBadge="🎓 CHOOSE YOUR CLASS"
//           sectionTitle="Choose Your Class"
//           data={class6to10Data}
//         />

//         {/* SECTION 3: CLASSES 11-12 */}
//         <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-widest text-xl uppercase mb-2">
//               <span>CLASSES 11–12</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//               Choose Your Stream
//             </h2>
//             <p className="text-slate-500 text-sm md:text-base mt-2">
//               Pick your path. We'll guide you to success.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {class11to12Data.map((item) => (
//               <Card
//                 key={item.id}
//                 onClick={() =>
//                   navigate(item.path || "/mysubjectdetail", {
//                     state: {
//                       id: item.id,
//                       title: item.title,
//                       stream: item.stream,
//                     },
//                   })
//                 }
//                 className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col justify-between cursor-pointer group`}
//               >
//                 <CardContent className="p-6 flex flex-col justify-between h-full">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <span className="text-xs font-bold text-slate-400 tracking-wider uppercase block mb-1">
//                         {item.title}
//                       </span>
//                       <h3 className={`text-2xl font-black mb-1 ${item.color}`}>
//                         {item.stream}
//                       </h3>
//                       <p className="text-slate-500 text-xs font-semibold line-clamp-2 mt-2">
//                         {item.tagline}
//                       </p>
//                     </div>

//                     <div className="w-20 h-20 p-2 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
//                       <img
//                         src={item.imgUrl}
//                         alt={item.stream}
//                         className="w-full h-full object-contain drop-shadow-md"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex justify-end pt-4 border-t border-slate-100/80 mt-auto">
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         navigate(item.path || "/mysubjectdetail", {
//                           state: {
//                             id: item.id,
//                             title: item.title,
//                             stream: item.stream,
//                           },
//                         });
//                       }}
//                       className={`w-9 h-9 rounded-full ${item.btnBg} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-all`}
//                       aria-label={`Select ${item.title} ${item.stream}`}
//                     >
//                       <ArrowRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div
//     </section>
//   );
// }

// export default Features;






// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Users,
//   ArrowRight,
//   Bookmark,
//   CheckCircle2,
//   Star,
//   Clock,
//   Sparkles,
//   GraduationCap,
// } from "lucide-react";

// // Safe Navigation helper to prevent router crashes
// function useSafeNavigate() {
//   try {
//     return useNavigate();
//   } catch (error) {
//     return (path: string, options?: { state?: any }) => {
//       window.location.href = path;
//     };
//   }
// }

// // 1. TOP 3 PILLARS
// const topFeatures = [
//   {
//     id: 0,
//     title: "Evaluate",
//     icon: "🤝",
//     description: "1-on-1 personalized guidance with top mentors to calibrate your academic roadmap.",
//     gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
//     border: "border-emerald-200/60",
//     btnColor: "bg-emerald-600 hover:bg-emerald-700",
//   },
//   {
//     id: 1,
//     title: "Educate",
//     icon: "🧪",
//     description: "Adaptive mock tests, 10+ years PYQs, and AI-driven deep performance diagnostics.",
//     gradient: "from-rose-500/10 via-rose-500/5 to-transparent",
//     border: "border-rose-200/60",
//     btnColor: "bg-rose-600 hover:bg-rose-700",
//   },
//   {
//     id: 2,
//     title: "Elevate",
//     icon: "🧠",
//     description: "Mental well-being, strategic stress mitigation, and continuous counselor support.",
//     gradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
//     border: "border-cyan-200/60",
//     btnColor: "bg-cyan-600 hover:bg-cyan-700",
//   },
// ];

// // 2. CLASSES 1-5
// const class1to5Data = [
//   {
//     id: 101,
//     classNumber: "1-5",
//     title: "Learn Maths",
//     subtitle: "Build strong numbers, mental arithmetic & logic foundation",
//     badge: "FOUNDATION",
//     badgeBg: "bg-purple-50 text-purple-700 border border-purple-200",
//     color: "text-purple-700",
//     bgGradient: "from-purple-50/50 via-white to-white",
//     borderColor: "border-purple-200 hover:border-purple-300",
//     btnBg: "bg-purple-600 hover:bg-purple-700",
//     tagText: "Interactive Maths",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3771/3771278.png",
//   },
//   {
//     id: 102,
//     classNumber: "1-5",
//     title: "Learn English",
//     subtitle: "Enhance vocabulary, grammar, phonics & reading mastery",
//     badge: "LANGUAGE",
//     badgeBg: "bg-rose-50 text-rose-700 border border-rose-200",
//     color: "text-rose-700",
//     bgGradient: "from-rose-50/50 via-white to-white",
//     borderColor: "border-rose-200 hover:border-rose-300",
//     btnBg: "bg-rose-600 hover:bg-rose-700",
//     tagText: "Fun English",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3389/3389011.png",
//   },
//   {
//     id: 103,
//     classNumber: "1-5",
//     title: "Science Discovery",
//     subtitle: "Explore natural phenomena and fun visual experiments",
//     badge: "DISCOVERY",
//     badgeBg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
//     color: "text-emerald-700",
//     bgGradient: "from-emerald-50/50 via-white to-white",
//     borderColor: "border-emerald-200 hover:border-emerald-300",
//     btnBg: "bg-emerald-600 hover:bg-emerald-700",
//     tagText: "Basic Science",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
//   },
//   {
//     id: 104,
//     classNumber: "1-5",
//     title: "General Knowledge",
//     subtitle: "Discover world facts, geography & dynamic current affairs",
//     badge: "AWARENESS",
//     badgeBg: "bg-amber-50 text-amber-800 border border-amber-200",
//     color: "text-amber-700",
//     bgGradient: "from-amber-50/50 via-white to-white",
//     borderColor: "border-amber-200 hover:border-amber-300",
//     btnBg: "bg-amber-600 hover:bg-amber-700",
//     tagText: "GK Essentials",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2784/2784403.png",
//   },
//   {
//     id: 105,
//     classNumber: "6",
//     title: "JNV Entrance",
//     subtitle: "Targeted entrance prep for Jawahar Navodaya Vidyalaya",
//     badge: "ENTRANCE",
//     badgeBg: "bg-blue-50 text-blue-700 border border-blue-200",
//     color: "text-blue-700",
//     bgGradient: "from-blue-50/50 via-white to-white",
//     borderColor: "border-blue-200 hover:border-blue-300",
//     btnBg: "bg-blue-600 hover:bg-blue-700",
//     tagText: "JNV Special",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2231/2231605.png",
//   },
//   {
//     id: 106,
//     classNumber: "1-5",
//     title: "KVS Prep",
//     subtitle: "Structured syllabus modules for Kendriya Vidyalayas",
//     badge: "SCHOOL PREP",
//     badgeBg: "bg-teal-50 text-teal-700 border border-teal-200",
//     color: "text-teal-700",
//     bgGradient: "from-teal-50/50 via-white to-white",
//     borderColor: "border-teal-200 hover:border-teal-300",
//     btnBg: "bg-teal-600 hover:bg-teal-700",
//     tagText: "KVS Curriculum",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2997/2997295.png",
//   },
//   {
//     id: 107,
//     classNumber: "6",
//     title: "Sainik School",
//     subtitle: "Comprehensive entrance training for AISSEE examination",
//     badge: "DEFENCE PREP",
//     badgeBg: "bg-orange-50 text-orange-700 border border-orange-200",
//     color: "text-orange-700",
//     bgGradient: "from-orange-50/50 via-white to-white",
//     borderColor: "border-orange-200 hover:border-orange-300",
//     btnBg: "bg-orange-600 hover:bg-orange-700",
//     tagText: "Sainik Entrance",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/167/167707.png",
//   },
//   {
//     id: 108,
//     classNumber: "1-5",
//     title: "Junior Olympiad",
//     subtitle: "Early competitive aptitude, logical reasoning & analytical mind",
//     badge: "COMPETITIVE",
//     badgeBg: "bg-indigo-50 text-indigo-700 border border-indigo-200",
//     color: "text-indigo-700",
//     bgGradient: "from-indigo-50/50 via-white to-white",
//     borderColor: "border-indigo-200 hover:border-indigo-300",
//     btnBg: "bg-indigo-600 hover:bg-indigo-700",
//     tagText: "Olympiad Level",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
//   },
// ];

// // 3. CLASSES 6-10
// const class6to10Data = [
//   {
//     id: 3,
//     classNumber: "6",
//     title: "Class 6",
//     subtitle: "Solidify core fundamentals in Maths, Science & Languages",
//     badge: "FOUNDATION",
//     badgeBg: "bg-blue-50 text-blue-700 border border-blue-200",
//     color: "text-blue-700",
//     bgGradient: "from-blue-50/50 via-white to-white",
//     borderColor: "border-blue-200 hover:border-blue-300",
//     btnBg: "bg-blue-600 hover:bg-blue-700",
//     tagText: "Class 6 Prep",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2883/2883823.png",
//   },
//   {
//     id: 4,
//     classNumber: "7",
//     title: "Class 7",
//     subtitle: "Strengthen concepts and intermediate problem solving",
//     badge: "FOUNDATION",
//     badgeBg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
//     color: "text-emerald-700",
//     bgGradient: "from-emerald-50/50 via-white to-white",
//     borderColor: "border-emerald-200 hover:border-emerald-300",
//     btnBg: "bg-emerald-600 hover:bg-emerald-700",
//     tagText: "Class 7 Prep",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3429/3429149.png",
//   },
//   {
//     id: 5,
//     classNumber: "8",
//     title: "Class 8",
//     subtitle: "Prepare critical bridging concepts for senior high school",
//     badge: "ADVANCED",
//     badgeBg: "bg-amber-50 text-amber-800 border border-amber-200",
//     color: "text-amber-700",
//     bgGradient: "from-amber-50/50 via-white to-white",
//     borderColor: "border-amber-200 hover:border-amber-300",
//     btnBg: "bg-amber-600 hover:bg-amber-700",
//     tagText: "Class 8 Prep",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135753.png",
//   },
//   {
//     id: 6,
//     classNumber: "9",
//     title: "Class 9",
//     subtitle: "Pre-board rigor with extensive numerical & theory practice",
//     badge: "BOARD PREP",
//     badgeBg: "bg-orange-50 text-orange-700 border border-orange-200",
//     color: "text-orange-700",
//     bgGradient: "from-orange-50/50 via-white to-white",
//     borderColor: "border-orange-200 hover:border-orange-300",
//     btnBg: "bg-orange-600 hover:bg-orange-700",
//     tagText: "Class 9 Prep",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
//   },
//   {
//     id: 7,
//     classNumber: "10",
//     title: "Class 10",
//     subtitle: "Complete Board exam mastery with test series & PYQs",
//     badge: "BOARD MASTER",
//     badgeBg: "bg-rose-50 text-rose-700 border border-rose-200",
//     color: "text-rose-700",
//     bgGradient: "from-rose-50/50 via-white to-white",
//     borderColor: "border-rose-200 hover:border-rose-300",
//     btnBg: "bg-rose-600 hover:bg-rose-700",
//     tagText: "Class 10 Board",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
//   },
//   {
//     id: 8,
//     classNumber: "Olympiad",
//     title: "Olympiad & NTSE",
//     subtitle: "High-tier competitive aptitude, NTSE & national Olympiads",
//     badge: "COMPETITIVE",
//     badgeBg: "bg-purple-50 text-purple-700 border border-purple-200",
//     color: "text-purple-700",
//     bgGradient: "from-purple-50/50 via-white to-white",
//     borderColor: "border-purple-200 hover:border-purple-300",
//     btnBg: "bg-purple-600 hover:bg-purple-700",
//     tagText: "Competitive Prep",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
//   },
// ];

// // 4. CLASSES 11-12
// const class11to12Data = [
//   {
//     id: 9,
//     classNumber: "11",
//     title: "Class 11",
//     stream: "Arts & Humanities",
//     tagline: "History, Political Science, Psychology & Sociology",
//     color: "text-purple-700",
//     bgGradient: "from-purple-50/40 via-white to-white",
//     borderColor: "border-purple-200 hover:border-purple-300",
//     btnBg: "bg-purple-600 hover:bg-purple-700",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
//   },
//   {
//     id: 10,
//     classNumber: "11",
//     title: "Class 11",
//     stream: "Commerce",
//     tagline: "Accountancy, Business Studies, Economics & Core Maths",
//     color: "text-emerald-700",
//     bgGradient: "from-emerald-50/40 via-white to-white",
//     borderColor: "border-emerald-200 hover:border-emerald-300",
//     btnBg: "bg-emerald-600 hover:bg-emerald-700",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/2422/2422796.png",
//   },
//   {
//     id: 11,
//     classNumber: "11",
//     title: "Class 11",
//     stream: "Science (PCM / PCB)",
//     tagline: "Physics, Chemistry, Advanced Maths & Biology",
//     color: "text-blue-700",
//     bgGradient: "from-blue-50/40 via-white to-white",
//     borderColor: "border-blue-200 hover:border-blue-300",
//     btnBg: "bg-blue-600 hover:bg-blue-700",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/1085/1085461.png",
//   },
//   {
//     id: 12,
//     classNumber: "12",
//     title: "Class 12",
//     stream: "Arts & Humanities",
//     tagline: "Target 98%+ in Boards & CUET entrance preparation",
//     color: "text-orange-700",
//     bgGradient: "from-orange-50/40 via-white to-white",
//     borderColor: "border-orange-200 hover:border-orange-300",
//     btnBg: "bg-orange-600 hover:bg-orange-700",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135753.png",
//   },
//   {
//     id: 13,
//     classNumber: "12",
//     title: "Class 12",
//     stream: "Commerce",
//     tagline: "CA Foundation alignment, Board tests & case analysis",
//     color: "text-teal-700",
//     bgGradient: "from-teal-50/40 via-white to-white",
//     borderColor: "border-teal-200 hover:border-teal-300",
//     btnBg: "bg-teal-600 hover:bg-teal-700",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/3076/3076416.png",
//   },
//   {
//     id: 14,
//     classNumber: "12",
//     title: "Class 12",
//     stream: "Science (PCM / PCB)",
//     tagline: "Master Board Syllabus alongside JEE & NEET prep",
//     color: "text-sky-700",
//     bgGradient: "from-sky-50/40 via-white to-white",
//     borderColor: "border-sky-200 hover:border-sky-300",
//     btnBg: "bg-blue-600 hover:bg-blue-700",
//     imgUrl: "https://cdn-icons-png.flaticon.com/512/1356/1356479.png",
//   },
// ];

// // 5. MENTORS
// const mentorsList = [
//   {
//     id: 1,
//     name: "Rahul Sharma",
//     badge: "JEE MAIN & ADV",
//     badgeBg: "bg-orange-500 text-white",
//     college: "IIT Delhi Alumnus",
//     role: "JEE Physics Lead",
//     roleColor: "text-orange-600",
//     rating: "4.9",
//     students: "1,200+ Students",
//     exp: "8+ Years",
//     imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 2,
//     name: "Dr. Aditi Verma",
//     badge: "NEET SPECIALIST",
//     badgeBg: "bg-emerald-600 text-white",
//     college: "AIIMS Delhi Graduate",
//     role: "NEET Biology Mentor",
//     roleColor: "text-emerald-600",
//     rating: "4.9",
//     students: "950+ Students",
//     exp: "7+ Years",
//     imgUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 3,
//     name: "Ankit Jain",
//     badge: "CLASS 6-10",
//     badgeBg: "bg-blue-600 text-white",
//     college: "IIT Bombay Alumnus",
//     role: "Maths Olympiad Head",
//     roleColor: "text-blue-600",
//     rating: "4.8",
//     students: "1,500+ Students",
//     exp: "9+ Years",
//     imgUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
//   },
//   {
//     id: 4,
//     name: "Neha Kapoor",
//     badge: "CAREER & PROFILE",
//     badgeBg: "bg-purple-600 text-white",
//     college: "Ex-Career Analyst",
//     role: "Higher Education Counselor",
//     roleColor: "text-purple-600",
//     rating: "4.9",
//     students: "1,100+ Students",
//     exp: "6+ Years",
//     imgUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
//   },
// ];

// function MentorSlider() {
//   const navigate = useSafeNavigate();

//   return (
//     <div className="w-full py-2">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {mentorsList.map((mentor) => (
//           <div
//             key={mentor.id}
//             className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-[390px]"
//           >
//             <div>
//               <div className="flex justify-between items-center mb-3">
//                 <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider ${mentor.badgeBg}`}>
//                   {mentor.badge}
//                 </span>
//                 <button className="text-slate-300 hover:text-orange-500">
//                   <Bookmark className="w-4 h-4" />
//                 </button>
//               </div>

//               <div className="flex justify-center my-3">
//                 <div className="w-20 h-20 rounded-full overflow-hidden p-1 ring-2 ring-slate-100">
//                   <img src={mentor.imgUrl} alt={mentor.name} className="w-full h-full object-cover rounded-full" />
//                 </div>
//               </div>

//               <div className="text-center">
//                 <div className="flex items-center justify-center gap-1.5">
//                   <h3 className="text-base font-bold text-slate-900">{mentor.name}</h3>
//                   <CheckCircle2 className="w-4 h-4 text-orange-500" />
//                 </div>
//                 <p className="text-xs text-slate-400 font-medium">{mentor.college}</p>
//                 <p className={`text-xs font-bold mt-1 ${mentor.roleColor}`}>{mentor.role}</p>
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 px-3 py-2 bg-slate-50 rounded-xl mb-3">
//                 <div className="flex items-center gap-1">
//                   <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
//                   <span className="text-slate-800 font-bold">{mentor.rating}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Users className="w-3.5 h-3.5 text-slate-400" />
//                   <span>{mentor.students}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Clock className="w-3.5 h-3.5 text-slate-400" />
//                   <span>{mentor.exp}</span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-2">
//                 <button
//                   onClick={() => navigate("/mentordetail")}
//                   className="py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
//                 >
//                   Profile
//                 </button>
//                 <button
//                   onClick={() => navigate("/mentordetail")}
//                   className="py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition shadow-sm"
//                 >
//                   Book Slot
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function DynamicSectionBlock({
//   sectionTitle,
//   sectionBadge,
//   data,
// }: {
//   sectionTitle: string;
//   sectionBadge: string;
//   data: any[];
// }) {
//   const [activeView, setActiveView] = useState<"classes" | "mentors">("classes");
//   const navigate = useSafeNavigate();

//   const handleCardClick = (item: any) => {
//     const classNum =
//       item.classNumber || (item.title.match(/\d+/) ? item.title.match(/\d+/)[0] : "6");
//     navigate(`/mysubjectdetail?class=${classNum}`, {
//       state: {
//         id: item.id,
//         title: item.title,
//         subtitle: item.subtitle,
//         tag: item.tagText || item.badge,
//         classNumber: classNum,
//       },
//     });
//   };

//   return (
//     <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
//       <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-100 gap-4">
//         <div>
//           <div className="inline-flex items-center gap-2 text-orange-600 font-extrabold tracking-widest text-xs uppercase mb-1">
//             <GraduationCap className="w-4 h-4" />
//             <span>{sectionBadge}</span>
//           </div>
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
//             {activeView === "classes" ? sectionTitle : "Verified Subject Mentors"}
//           </h2>
//         </div>

//         <div className="inline-flex p-1 bg-slate-100 rounded-2xl self-start md:self-auto">
//           <button
//             onClick={() => setActiveView("classes")}
//             className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
//               activeView === "classes"
//                 ? "bg-white text-slate-900 shadow-sm"
//                 : "text-slate-500 hover:text-slate-800"
//             }`}
//           >
//             Explore Classes
//           </button>
//           <button
//             onClick={() => setActiveView("mentors")}
//             className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
//               activeView === "mentors"
//                 ? "bg-slate-900 text-white shadow-sm"
//                 : "text-slate-500 hover:text-slate-800"
//             }`}
//           >
//             Online Mentors
//           </button>
//         </div>
//       </div>

//       {activeView === "mentors" ? (
//         <MentorSlider />
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {data.map((item) => (
//             <div
//               key={item.id}
//               onClick={() => handleCardClick(item)}
//               className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between min-h-[280px] cursor-pointer group`}
//             >
//               <div>
//                 <div className="flex items-center justify-between mb-4">
//                   <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider ${item.badgeBg}`}>
//                     {item.badge}
//                   </span>
//                   <div className="w-12 h-12 p-1.5 flex items-center justify-center">
//                     <img src={item.imgUrl} alt={item.title} className="w-full h-full object-contain" />
//                   </div>
//                 </div>

//                 <h3 className={`text-xl font-bold mb-1.5 ${item.color}`}>{item.title}</h3>
//                 <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-2">
//                   {item.subtitle}
//                 </p>
//               </div>

//               <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
//                 <span className="text-[11px] font-semibold text-slate-500">
//                   {item.tagText || "Curriculum"}
//                 </span>
//                 <div
//                   className={`px-3 py-1.5 text-xs font-bold text-white rounded-xl ${item.btnBg} transition-all flex items-center gap-1 shadow-sm`}
//                 >
//                   <span>Explore</span>
//                   <ArrowRight className="w-3.5 h-3.5" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export function Features() {
//   const navigate = useSafeNavigate();

//   const handleStreamClick = (item: any) => {
//     navigate(`/mysubjectdetail?class=${item.classNumber}&stream=${encodeURIComponent(item.stream)}`, {
//       state: {
//         id: item.id,
//         title: item.title,
//         stream: item.stream,
//         classNumber: item.classNumber,
//       },
//     });
//   };

//   return (
//     <section id="features" className="py-12 bg-slate-50 font-sans text-slate-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto space-y-3">
//           <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-3.5 py-1 rounded-full text-orange-700 text-xs font-bold tracking-wide uppercase">
//             <Sparkles className="w-3.5 h-3.5" />
//             <span>Targeted Learning & Mentorship</span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
//             Comprehensive Guidance for Every Student
//           </h2>
//           <p className="text-sm sm:text-base text-slate-600">
//             Good Guiders brings together realistic Mock Tests, interactive Online Learning, and personalized Mentorship to help students learn smarter.
//           </p>
//         </div>

//         {/* Top 3 Core Features */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {topFeatures.map((feat) => (
//             <div
//               key={feat.id}
//               className={`bg-gradient-to-b ${feat.gradient} bg-white border ${feat.border} rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[230px]`}
//             >
//               <div>
//                 <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-2xl mb-4">
//                   {feat.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-2">{feat.title}</h3>
//                 <p className="text-slate-600 text-xs leading-relaxed">{feat.description}</p>
//               </div>
//               <button
//                 onClick={() => navigate("/mentordetail")}
//                 className={`mt-6 w-full py-2.5 rounded-xl text-white text-xs font-bold shadow-sm transition-all ${feat.btnColor}`}
//               >
//                 Learn More
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Section 1: Classes 1-5 */}
//         <DynamicSectionBlock
//           sectionBadge="Classes 1–5"
//           sectionTitle="Explore. Learn. Grow."
//           data={class11to12Data ? class1to5Data : []}
//         />

//         {/* Section 2: Classes 6-10 */}
//         <DynamicSectionBlock
//           sectionBadge="Classes 6–10"
//           sectionTitle="Choose Your Class"
//           data={class6to10Data}
//         />

//         {/* Section 3: Classes 11-12 */}
//         <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-100 gap-2">
//             <div>
//               <div className="inline-flex items-center gap-2 text-orange-600 font-extrabold tracking-widest text-xs uppercase mb-1">
//                 <GraduationCap className="w-4 h-4" />
//                 <span>Senior Secondary</span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
//                 Classes 11 & 12 Specialized Streams
//               </h2>
//             </div>
//             <p className="text-xs text-slate-400 font-medium">Select your targeted domain</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {class11to12Data.map((item) => (
//               <div
//                 key={item.id}
//                 onClick={() => handleStreamClick(item)}
//                 className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between min-h-[240px] cursor-pointer group`}
//               >
//                 <div>
//                   <div className="flex justify-between items-start mb-3">
//                     <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
//                       {item.title}
//                     </span>
//                     <div className="w-12 h-12 p-1">
//                       <img src={item.imgUrl} alt={item.stream} className="w-full h-full object-contain" />
//                     </div>
//                   </div>
//                   <h3 className={`text-lg font-bold mb-1.5 ${item.color}`}>{item.stream}</h3>
//                   <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-2">
//                     {item.tagline}
//                   </p>
//                 </div>

//                 <div className="flex justify-end pt-4 border-t border-slate-100 mt-4">
//                   <div
//                     className={`w-8 h-8 rounded-full ${item.btnBg} text-white flex items-center justify-center shadow-sm`}
//                   >
//                     <ArrowRight className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Features;

//////honey//////


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Star,
  Clock,
  Sparkles,
  GraduationCap,
} from "lucide-react";

// Safe Navigation helper to prevent router crashes
function useSafeNavigate() {
  try {
    return useNavigate();
  } catch (error) {
    return (path: string, options?: { state?: any }) => {
      window.location.href = path;
    };
  }
}

// 1. TOP 3 PILLARS
const topFeatures = [
  {
    id: 0,
    title: "Evaluate",
    icon: "🤝",
    description: "1-on-1 personalized guidance with top mentors to calibrate your academic roadmap.",
    gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    border: "border-emerald-200/60",
    btnColor: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    id: 1,
    title: "Educate",
    icon: "🧪",
    description: "Adaptive mock tests, 10+ years PYQs, and AI-driven deep performance diagnostics.",
    gradient: "from-rose-500/10 via-rose-500/5 to-transparent",
    border: "border-rose-200/60",
    btnColor: "bg-rose-600 hover:bg-rose-700",
  },
  {
    id: 2,
    title: "Elevate",
    icon: "🧠",
    description: "Mental well-being, strategic stress mitigation, and continuous counselor support.",
    gradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
    border: "border-cyan-200/60",
    btnColor: "bg-cyan-600 hover:bg-cyan-700",
  },
];

// 2. CLASSES 1-5
const class1to5Data = [
  {
    id: 101,
    classNumber: "1-5",
    title: "Learn Maths",
    subtitle: "Build strong numbers, mental arithmetic & logic foundation",
    badge: "FOUNDATION",
    badgeBg: "bg-purple-50 text-purple-700 border border-purple-200",
    color: "text-purple-700",
    bgGradient: "from-purple-50/50 via-white to-white",
    borderColor: "border-purple-200 hover:border-purple-300",
    btnBg: "bg-purple-600 hover:bg-purple-700",
    tagText: "Interactive Maths",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3771/3771278.png",
  },
  {
    id: 102,
    classNumber: "1-5",
    title: "Learn English",
    subtitle: "Enhance vocabulary, grammar, phonics & reading mastery",
    badge: "LANGUAGE",
    badgeBg: "bg-rose-50 text-rose-700 border border-rose-200",
    color: "text-rose-700",
    bgGradient: "from-rose-50/50 via-white to-white",
    borderColor: "border-rose-200 hover:border-rose-300",
    btnBg: "bg-rose-600 hover:bg-rose-700",
    tagText: "Fun English",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3389/3389011.png",
  },
  {
    id: 103,
    classNumber: "1-5",
    title: "Science Discovery",
    subtitle: "Explore natural phenomena and fun visual experiments",
    badge: "DISCOVERY",
    badgeBg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    color: "text-emerald-700",
    bgGradient: "from-emerald-50/50 via-white to-white",
    borderColor: "border-emerald-200 hover:border-emerald-300",
    btnBg: "bg-emerald-600 hover:bg-emerald-700",
    tagText: "Basic Science",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
  },
  {
    id: 104,
    classNumber: "1-5",
    title: "General Knowledge",
    subtitle: "Discover world facts, geography & dynamic current affairs",
    badge: "AWARENESS",
    badgeBg: "bg-amber-50 text-amber-800 border border-amber-200",
    color: "text-amber-700",
    bgGradient: "from-amber-50/50 via-white to-white",
    borderColor: "border-amber-200 hover:border-amber-300",
    btnBg: "bg-amber-600 hover:bg-amber-700",
    tagText: "GK Essentials",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2784/2784403.png",
  },
  {
    id: 105,
    classNumber: "6",
    title: "JNV Entrance",
    subtitle: "Targeted entrance prep for Jawahar Navodaya Vidyalaya",
    badge: "ENTRANCE",
    badgeBg: "bg-blue-50 text-blue-700 border border-blue-200",
    color: "text-blue-700",
    bgGradient: "from-blue-50/50 via-white to-white",
    borderColor: "border-blue-200 hover:border-blue-300",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    tagText: "JNV Special",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2231/2231605.png",
  },
  {
    id: 106,
    classNumber: "1-5",
    title: "KVS Prep",
    subtitle: "Structured syllabus modules for Kendriya Vidyalayas",
    badge: "SCHOOL PREP",
    badgeBg: "bg-teal-50 text-teal-700 border border-teal-200",
    color: "text-teal-700",
    bgGradient: "from-teal-50/50 via-white to-white",
    borderColor: "border-teal-200 hover:border-teal-300",
    btnBg: "bg-teal-600 hover:bg-teal-700",
    tagText: "KVS Curriculum",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2997/2997295.png",
  },
  {
    id: 107,
    classNumber: "6",
    title: "Sainik School",
    subtitle: "Comprehensive entrance training for AISSEE examination",
    badge: "DEFENCE PREP",
    badgeBg: "bg-orange-50 text-orange-700 border border-orange-200",
    color: "text-orange-700",
    bgGradient: "from-orange-50/50 via-white to-white",
    borderColor: "border-orange-200 hover:border-orange-300",
    btnBg: "bg-orange-600 hover:bg-orange-700",
    tagText: "Sainik Entrance",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/167/167707.png",
  },
  {
    id: 108,
    classNumber: "1-5",
    title: "Junior Olympiad",
    subtitle: "Early competitive aptitude, logical reasoning & analytical mind",
    badge: "COMPETITIVE",
    badgeBg: "bg-indigo-50 text-indigo-700 border border-indigo-200",
    color: "text-indigo-700",
    bgGradient: "from-indigo-50/50 via-white to-white",
    borderColor: "border-indigo-200 hover:border-indigo-300",
    btnBg: "bg-indigo-600 hover:bg-indigo-700",
    tagText: "Olympiad Level",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
    customRoute: "/juniorolympiad",
  },
];

// 3. CLASSES 6-10
const class6to10Data = [
  {
    id: 3,
    classNumber: "6",
    title: "Class 6",
    subtitle: "Solidify core fundamentals in Maths, Science & Languages",
    badge: "FOUNDATION",
    badgeBg: "bg-blue-50 text-blue-700 border border-blue-200",
    color: "text-blue-700",
    bgGradient: "from-blue-50/50 via-white to-white",
    borderColor: "border-blue-200 hover:border-blue-300",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    tagText: "Class 6 Prep",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2883/2883823.png",
  },
  {
    id: 4,
    classNumber: "7",
    title: "Class 7",
    subtitle: "Strengthen concepts and intermediate problem solving",
    badge: "FOUNDATION",
    badgeBg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    color: "text-emerald-700",
    bgGradient: "from-emerald-50/50 via-white to-white",
    borderColor: "border-emerald-200 hover:border-emerald-300",
    btnBg: "bg-emerald-600 hover:bg-emerald-700",
    tagText: "Class 7 Prep",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3429/3429149.png",
  },
  {
    id: 5,
    classNumber: "8",
    title: "Class 8",
    subtitle: "Prepare critical bridging concepts for senior high school",
    badge: "ADVANCED",
    badgeBg: "bg-amber-50 text-amber-800 border border-amber-200",
    color: "text-amber-700",
    bgGradient: "from-amber-50/50 via-white to-white",
    borderColor: "border-amber-200 hover:border-amber-300",
    btnBg: "bg-amber-600 hover:bg-amber-700",
    tagText: "Class 8 Prep",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135753.png",
  },
  {
    id: 6,
    classNumber: "9",
    title: "Class 9",
    subtitle: "Pre-board rigor with extensive numerical & theory practice",
    badge: "BOARD PREP",
    badgeBg: "bg-orange-50 text-orange-700 border border-orange-200",
    color: "text-orange-700",
    bgGradient: "from-orange-50/50 via-white to-white",
    borderColor: "border-orange-200 hover:border-orange-300",
    btnBg: "bg-orange-600 hover:bg-orange-700",
    tagText: "Class 9 Prep",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
  },
  {
    id: 7,
    classNumber: "10",
    title: "Class 10",
    subtitle: "Complete Board exam mastery with test series & PYQs",
    badge: "BOARD MASTER",
    badgeBg: "bg-rose-50 text-rose-700 border border-rose-200",
    color: "text-rose-700",
    bgGradient: "from-rose-50/50 via-white to-white",
    borderColor: "border-rose-200 hover:border-rose-300",
    btnBg: "bg-rose-600 hover:bg-rose-700",
    tagText: "Class 10 Board",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
  },
  {
    id: 8,
    classNumber: "Olympiad",
    title: "Olympiad & NTSE",
    subtitle: "High-tier competitive aptitude, NTSE & national Olympiads",
    badge: "COMPETITIVE",
    badgeBg: "bg-purple-50 text-purple-700 border border-purple-200",
    color: "text-purple-700",
    bgGradient: "from-purple-50/50 via-white to-white",
    borderColor: "border-purple-200 hover:border-purple-300",
    btnBg: "bg-purple-600 hover:bg-purple-700",
    tagText: "Competitive Prep",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2583/2583319.png",
     customRoute: "/juniorolympiad",
  },
];

// 4. CLASSES 11-12
const class11to12Data = [
  {
    id: 9,
    classNumber: "11",
    title: "Class 11",
    stream: "Arts & Humanities",
    tagline: "History, Political Science, Psychology & Sociology",
    color: "text-purple-700",
    bgGradient: "from-purple-50/40 via-white to-white",
    borderColor: "border-purple-200 hover:border-purple-300",
    btnBg: "bg-purple-600 hover:bg-purple-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },
  {
    id: 10,
    classNumber: "11",
    title: "Class 11",
    stream: "Commerce",
    tagline: "Accountancy, Business Studies, Economics & Core Maths",
    color: "text-emerald-700",
    bgGradient: "from-emerald-50/40 via-white to-white",
    borderColor: "border-emerald-200 hover:border-emerald-300",
    btnBg: "bg-emerald-600 hover:bg-emerald-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2422/2422796.png",
  },
  {
    id: 11,
    classNumber: "11",
    title: "Class 11",
    stream: "Science (PCM / PCB)",
    tagline: "Physics, Chemistry, Advanced Maths & Biology",
    color: "text-blue-700",
    bgGradient: "from-blue-50/40 via-white to-white",
    borderColor: "border-blue-200 hover:border-blue-300",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1085/1085461.png",
  },
  {
    id: 12,
    classNumber: "12",
    title: "Class 12",
    stream: "Arts & Humanities",
    tagline: "Target 98%+ in Boards & CUET entrance preparation",
    color: "text-orange-700",
    bgGradient: "from-orange-50/40 via-white to-white",
    borderColor: "border-orange-200 hover:border-orange-300",
    btnBg: "bg-orange-600 hover:bg-orange-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135753.png",
  },
  {
    id: 13,
    classNumber: "12",
    title: "Class 12",
    stream: "Commerce",
    tagline: "CA Foundation alignment, Board tests & case analysis",
    color: "text-teal-700",
    bgGradient: "from-teal-50/40 via-white to-white",
    borderColor: "border-teal-200 hover:border-teal-300",
    btnBg: "bg-teal-600 hover:bg-teal-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3076/3076416.png",
  },
  {
    id: 14,
    classNumber: "12",
    title: "Class 12",
    stream: "Science (PCM / PCB)",
    tagline: "Master Board Syllabus alongside JEE & NEET prep",
    color: "text-sky-700",
    bgGradient: "from-sky-50/40 via-white to-white",
    borderColor: "border-sky-200 hover:border-sky-300",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1356/1356479.png",
  },
];

// 5. MENTORS
const mentorsList = [
  {
    id: 1,
    name: "Rahul Sharma",
    badge: "JEE MAIN & ADV",
    badgeBg: "bg-orange-500 text-white",
    college: "IIT Delhi Alumnus",
    role: "JEE Physics Lead",
    roleColor: "text-orange-600",
    rating: "4.9",
    students: "1,200+ Students",
    exp: "8+ Years",
    imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Dr. Aditi Verma",
    badge: "NEET SPECIALIST",
    badgeBg: "bg-emerald-600 text-white",
    college: "AIIMS Delhi Graduate",
    role: "NEET Biology Mentor",
    roleColor: "text-emerald-600",
    rating: "4.9",
    students: "950+ Students",
    exp: "7+ Years",
    imgUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Ankit Jain",
    badge: "CLASS 6-10",
    badgeBg: "bg-blue-600 text-white",
    college: "IIT Bombay Alumnus",
    role: "Maths Olympiad Head",
    roleColor: "text-blue-600",
    rating: "4.8",
    students: "1,500+ Students",
    exp: "9+ Years",
    imgUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    badge: "CAREER & PROFILE",
    badgeBg: "bg-purple-600 text-white",
    college: "Ex-Career Analyst",
    role: "Higher Education Counselor",
    roleColor: "text-purple-600",
    rating: "4.9",
    students: "1,100+ Students",
    exp: "6+ Years",
    imgUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
];

function MentorSlider() {
  const navigate = useSafeNavigate();

  return (
    <div className="w-full py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentorsList.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-[390px]"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider ${mentor.badgeBg}`}>
                  {mentor.badge}
                </span>
                <button className="text-slate-300 hover:text-orange-500">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>

              <div className="flex justify-center my-3">
                <div className="w-20 h-20 rounded-full overflow-hidden p-1 ring-2 ring-slate-100">
                  <img src={mentor.imgUrl} alt={mentor.name} className="w-full h-full object-cover rounded-full" />
                </div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5">
                  <h3 className="text-base font-bold text-slate-900">{mentor.name}</h3>
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                </div>
                <p className="text-xs text-slate-400 font-medium">{mentor.college}</p>
                <p className={`text-xs font-bold mt-1 ${mentor.roleColor}`}>{mentor.role}</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 px-3 py-2 bg-slate-50 rounded-xl mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-slate-800 font-bold">{mentor.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>{mentor.students}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{mentor.exp}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => navigate("/mentordetail")}
                  className="py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
                >
                  Profile
                </button>
                <button
                  onClick={() => navigate("/mentordetail")}
                  className="py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition shadow-sm"
                >
                  Book Slot
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DynamicSectionBlock({
  sectionTitle,
  sectionBadge,
  data,
}: {
  sectionTitle: string;
  sectionBadge: string;
  data: any[];
}) {
  const [activeView, setActiveView] = useState<"classes" | "mentors">("classes");
  const navigate = useSafeNavigate();

  const handleCardClick = (item: any) => {
    if (item.customRoute || item.title === "Junior Olympiad") {
      navigate(item.customRoute || "/juniorolympiad", {
        state: {
          id: item.id,
          title: item.title,
          subtitle: item.subtitle,
          tag: item.tagText || item.badge,
        },
      });
      return;
    }

    const classNum =
      item.classNumber || (item.title.match(/\d+/) ? item.title.match(/\d+/)[0] : "6");
    navigate(`/mysubjectdetail?class=${classNum}`, {
      state: {
        id: item.id,
        title: item.title,
        subtitle: item.subtitle,
        tag: item.tagText || item.badge,
        classNumber: classNum,
      },
    });
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Header Center Aligned */}
      <div className="flex flex-col items-center justify-center text-center mb-8 pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="inline-flex items-center justify-center gap-2 text-orange-600 font-extrabold tracking-widest text-xl uppercase mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>{sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {activeView === "classes" ? sectionTitle : "Verified Subject Mentors"}
          </h2>
        </div>

        <div className="inline-flex p-1 bg-slate-100 rounded-2xl">
          <button
            onClick={() => setActiveView("classes")}
            className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
              activeView === "classes"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Explore Classes
          </button>
          <button
            onClick={() => setActiveView("mentors")}
            className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
              activeView === "mentors"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Online Mentors
          </button>
        </div>
      </div>

      {activeView === "mentors" ? (
        <MentorSlider />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between min-h-[280px] cursor-pointer group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                  <div className="w-12 h-12 p-1.5 flex items-center justify-center">
                    <img src={item.imgUrl} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-1.5 ${item.color}`}>{item.title}</h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
                <span className="text-[11px] font-semibold text-slate-500">
                  {item.tagText || "Curriculum"}
                </span>
                <div
                  className={`px-3 py-1.5 text-xs font-bold text-white rounded-xl ${item.btnBg} transition-all flex items-center gap-1 shadow-sm`}
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Features() {
  const navigate = useSafeNavigate();

  const handleStreamClick = (item: any) => {
    navigate(`/mysubjectdetail?class=${item.classNumber}&stream=${encodeURIComponent(item.stream)}`, {
      state: {
        id: item.id,
        title: item.title,
        stream: item.stream,
        classNumber: item.classNumber,
      },
    });
  };

  return (
    <section id="features" className="py-12 bg-slate-50 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-3.5 py-1 rounded-full text-orange-700 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Targeted Learning & Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Guidance for Every Student
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Good Guiders brings together realistic Mock Tests, interactive Online Learning, and personalized Mentorship to help students learn smarter.
          </p>
        </div>

        {/* Top 3 Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topFeatures.map((feat) => (
            <div
              key={feat.id}
              className={`bg-gradient-to-b ${feat.gradient} bg-white border ${feat.border} rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[230px]`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-2xl mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{feat.description}</p>
              </div>
              <button
                onClick={() => navigate("/mentordetail")}
                className={`mt-6 w-full py-2.5 rounded-xl text-white text-xs font-bold shadow-sm transition-all ${feat.btnColor}`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Section 1: Classes 1-5 (Header Centered) */}
        <DynamicSectionBlock
          sectionBadge="Classes 1–5"
          sectionTitle="Explore. Learn. Grow."
          data={class1to5Data}
        />

        {/* Section 2: Classes 6-10 (Header Centered) */}
        <DynamicSectionBlock
          sectionBadge="Classes 6–10"
          sectionTitle="Choose Your Class"
          data={class6to10Data}
        />

        {/* Section 3: Classes 11-12 (Header Centered) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col items-center justify-center text-center mb-8 pb-6 border-b border-slate-100 gap-2">
            <div>
              <div className="inline-flex items-center justify-center gap-2 text-orange-600 font-extrabold tracking-widest text-xl uppercase mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>Senior Secondary</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Classes 11 & 12 Specialized Streams
              </h2>
            </div>
            <p className="text-xs text-slate-400 font-medium">Select your targeted domain</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {class11to12Data.map((item) => (
              <div
                key={item.id}
                onClick={() => handleStreamClick(item)}
                className={`bg-gradient-to-b ${item.bgGradient} border ${item.borderColor} rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between min-h-[240px] cursor-pointer group`}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {item.title}
                    </span>
                    <div className="w-12 h-12 p-1">
                      <img src={item.imgUrl} alt={item.stream} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold mb-1.5 ${item.color}`}>{item.stream}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-2">
                    {item.tagline}
                  </p>
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-100 mt-4">
                  <div
                    className={`w-8 h-8 rounded-full ${item.btnBg} text-white flex items-center justify-center shadow-sm`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;