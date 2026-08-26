
// import React, { useState } from 'react';
// import {
//   ChevronRight,
//   ArrowLeft,
//   Download,
//   ArrowRight,
//   Calculator,
//   FlaskConical,
//   BookOpen,
//   Monitor,
//   Globe,
//   Brain,
//   Languages,
//   Sparkles,
//   Trophy,
//   Lightbulb,
//   CheckCircle2,
//   FolderOpen
// } from 'lucide-react';

// export default function JuniorOlympiadDashboard() {
//   const [selectedClass, setSelectedClass] = useState('Class 1');
//   const [selectedSubject, setSelectedSubject] = useState('Mathematics Olympiad');
//   const [selectedTopic, setSelectedTopic] = useState('1. Numbers & Number System');
//   const [selectedSubtopic, setSelectedSubtopic] = useState('1.1 Natural Numbers');

//   const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'];

//   const subjects = [
//     { id: 'math', name: 'Mathematics Olympiad', icon: Calculator, color: 'text-purple-600', active: true },
//     { id: 'sci', name: 'Science Olympiad', icon: FlaskConical, color: 'text-emerald-600' },
//     { id: 'eng', name: 'English Olympiad', icon: BookOpen, color: 'text-orange-500' },
//     { id: 'comp', name: 'Computer Olympiad', icon: Monitor, color: 'text-blue-500' },
//     { id: 'gk', name: 'GK Olympiad', icon: Globe, color: 'text-amber-500' },
//     { id: 'reas', name: 'Reasoning Olympiad', icon: Brain, color: 'text-rose-500' },
//     { id: 'hin', name: 'Hindi Olympiad', icon: Languages, color: 'text-teal-600' },
//     { id: 'stem', name: 'STEM & Other Olympiads', icon: Sparkles, color: 'text-purple-600' },
//   ];

//   const topics = [
//     { id: 1, name: '1. Numbers & Number System', icon: '1', active: true },
//     { id: 2, name: '2. Arithmetic Operations', icon: '➗' },
//     { id: 3, name: '3. Geometry', icon: '📐' },
//     { id: 4, name: '4. Measurement', icon: '📏' },
//     { id: 5, name: '5. Money & Time', icon: '⏰' },
//     { id: 6, name: '6. Data Handling', icon: '📊' },
//     { id: 7, name: '7. Logical Reasoning', icon: '💡' },
//     { id: 8, name: '8. Higher Order Thinking Skills', icon: '🧠' },
//   ];

//   const subtopics = [
//     { id: '1.1', name: '1.1 Natural Numbers', active: true },
//     { id: '1.2', name: '1.2 Whole Numbers' },
//     { id: '1.3', name: '1.3 Place Value' },
//     { id: '1.4', name: '1.4 Comparison of Numbers' },
//     { id: '1.5', name: '1.5 Number Patterns' },
//   ];

//   const organizers = [
//     {
//       name: 'Science Olympiad Foundation',
//       short: 'SOF',
//       exams: 'IMO | NSO | IEO | IGKO | ICSO | ISSO | IHO | ICO',
//       logoText: 'SOF'
//     },
//     {
//       name: 'SilverZone Foundation',
//       short: 'SILVERZONE',
//       exams: 'IOM | IOS | IOEL | IIO | ICOP | IGB',
//       logoText: 'SILVERZONE'
//     },
//     {
//       name: 'Unified Council',
//       short: 'UC',
//       exams: 'UIMO | NSTSE | UIEO | UICO | UIPSO',
//       logoText: 'Unified Council'
//     },
//     {
//       name: 'CREST Olympiads',
//       short: 'CREST',
//       exams: 'Maths | Science | English | Reasoning | Cyber | GK',
//       logoText: 'CREST'
//     },
//     {
//       name: 'Indian Talent Olympiad',
//       short: 'ITO',
//       exams: 'Maths | Science | English | GK | Computer | Reasoning',
//       logoText: 'Indian Talent'
//     },
//   ];

//   const questionLevels = [
//     { level: 'Easy', color: 'emerald', count: '10 MCQs' },
//     { level: 'Medium', color: 'amber', count: '10 MCQs' },
//     { level: 'Hard', color: 'rose', count: '10 MCQs' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] text-slate-800 p-4 md:p-8 font-sans">
//       <div className="max-w-7xl mx-auto space-y-6">

//         {/* Top Hero Banner */}
//         <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50/40 to-amber-50/40 border border-slate-100 p-6 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
//           {/* Left Decorative Illustration Placeholder */}
//           <div className="hidden lg:flex items-center gap-4">
//             <div className="relative w-44 h-40 bg-blue-100/60 rounded-2xl flex flex-col items-center justify-center p-4 border border-blue-200">
//               <span className="text-4xl">👦🏻📖</span>
//               <span className="text-xs font-semibold text-blue-600 mt-2">Active Learner</span>
//             </div>
//           </div>

//           {/* Center Content */}
//           <div className="text-center md:text-left flex-1 max-w-xl">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
//               Junior Olympiad
//             </h1>
//             <p className="text-slate-600 text-sm md:text-base mt-2 font-medium">
//               Build strong concepts, logical thinking & competitive skills from an early age.
//             </p>

//             <div className="mt-6">
//               <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
//                 Select Your Class
//               </p>
//               <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
//                 {classes.map((cls) => (
//                   <button
//                     key={cls}
//                     onClick={() => setSelectedClass(cls)}
//                     className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
//                       selectedClass === cls
//                         ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
//                         : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
//                     }`}
//                   >
//                     {cls}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Trophy Illustration Placeholder */}
//           <div className="hidden sm:flex items-center gap-4">
//             <div className="w-40 h-40 bg-amber-100/50 rounded-2xl flex flex-col items-center justify-center p-4 border border-amber-200 shadow-inner">
//               <Trophy className="w-16 h-16 text-amber-500 mb-2 drop-shadow" />
//               <span className="text-xs font-bold text-amber-700">Olympiad Prep</span>
//             </div>
//           </div>
//         </div>

//         {/* Main Grid Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          
//           {/* Column 1: Subject / Category */}
//           <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-full">
//             <div>
//               <div className="mb-4">
//                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Explore by</span>
//                 <h2 className="text-base font-bold text-slate-800">Subject / Category</h2>
//               </div>
              
//               <div className="space-y-1.5">
//                 {subjects.map((sub) => {
//                   const Icon = sub.icon;
//                   const isActive = selectedSubject === sub.name;
//                   return (
//                     <button
//                       key={sub.name}
//                       onClick={() => setSelectedSubject(sub.name)}
//                       className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs font-semibold transition-all ${
//                         isActive
//                           ? 'bg-indigo-50 text-indigo-700 border border-indigo-100 shadow-xs'
//                           : 'hover:bg-slate-50 text-slate-700 border border-transparent'
//                       }`}
//                     >
//                       <div className="flex items-center gap-2.5 truncate">
//                         <Icon className={`w-4 h-4 ${sub.color} shrink-0`} />
//                         <span className="truncate">{sub.name}</span>
//                       </div>
//                       <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             <button className="mt-4 w-full py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition">
//               View All Categories <ArrowRight className="w-3.5 h-3.5" />
//             </button>
//           </div>

//           {/* Column 2: Subject Topics */}
//           <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-full">
//             <div>
//               <h2 className="text-base font-bold text-slate-800 mb-4">{selectedSubject}</h2>
//               <div className="space-y-1.5">
//                 {topics.map((t) => (
//                   <button
//                     key={t.name}
//                     onClick={() => setSelectedTopic(t.name)}
//                     className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs font-medium transition ${
//                       selectedTopic === t.name
//                         ? 'bg-blue-50/80 text-blue-900 border border-blue-100 font-semibold'
//                         : 'hover:bg-slate-50 text-slate-700 border border-transparent'
//                     }`}
//                   >
//                     <div className="flex items-center gap-2 truncate">
//                       <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-600 text-[10px] flex items-center justify-center shrink-0">
//                         {t.icon}
//                       </span>
//                       <span className="truncate">{t.name}</span>
//                     </div>
//                     <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <button className="mt-4 w-full py-2.5 px-3 rounded-xl border border-blue-200 bg-blue-50/50 text-xs font-semibold text-blue-700 hover:bg-blue-50 flex items-center justify-center gap-1.5 transition">
//               Download Detailed Syllabus <Download className="w-3.5 h-3.5" />
//             </button>
//           </div>

//           {/* Column 3: Subtopics & Questions */}
//           <div className="space-y-4">
//             {/* Subtopic selector */}
//             <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
//               <div className="flex items-center gap-2">
//                 <ArrowLeft className="w-4 h-4 text-slate-600 cursor-pointer" />
//                 <h3 className="text-sm font-bold text-blue-950 truncate">{selectedTopic}</h3>
//               </div>
//               <div className="space-y-1.5">
//                 {subtopics.map((st) => (
//                   <button
//                     key={st.name}
//                     onClick={() => setSelectedSubtopic(st.name)}
//                     className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition ${
//                       selectedSubtopic === st.name
//                         ? 'bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200'
//                         : 'hover:bg-slate-50 text-slate-700 border border-slate-100'
//                     }`}
//                   >
//                     <span>{st.name}</span>
//                     <ChevronRight className="w-3.5 h-3.5 opacity-60" />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Questions Grid Box */}
//             <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-4">
//               <div>
//                 <div className="flex items-start justify-between">
//                   <h4 className="text-xs font-bold text-slate-800">{selectedSubtopic}</h4>
//                   <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
//                     Total Questions: 20
//                   </span>
//                 </div>
//                 <p className="text-[11px] text-slate-500 mt-1">
//                   Understand natural numbers, counting, and their sequence.
//                 </p>
//               </div>

//               {/* Levels & MCQ Matrix */}
//               <div className="space-y-4">
//                 {questionLevels.map((lvl) => (
//                   <div key={lvl.level} className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-1.5 text-xs font-bold">
//                         <span
//                           className={`w-2 h-2 rounded-full ${
//                             lvl.level === 'Easy'
//                               ? 'bg-emerald-500'
//                               : lvl.level === 'Medium'
//                               ? 'bg-amber-500'
//                               : 'bg-rose-500'
//                           }`}
//                         />
//                         <span className="text-slate-800">{lvl.level}</span>
//                       </div>
//                       <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
//                         {lvl.count}
//                       </span>
//                     </div>

//                     {/* Question Bubbles 1-10 */}
//                     <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
//                       {Array.from({ length: 10 }).map((_, i) => (
//                         <button
//                           key={i}
//                           className="h-7 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600 transition flex items-center justify-center"
//                         >
//                           {i + 1}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Quick tip box */}
//               <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 flex items-start gap-2 text-[11px] text-amber-800">
//                 <Lightbulb className="w-3.5 h-3.5 shrink-0 text-amber-600 mt-0.5" />
//                 <span>Tip: Start with Easy level to build your base concepts.</span>
//               </div>
//             </div>
//           </div>

//           {/* Column 4: Olympiad Organizers */}
//           <div className="space-y-3">
//             <h2 className="text-base font-bold text-slate-800 px-1">Olympiad Organizers</h2>
            
//             {organizers.map((org) => (
//               <div
//                 key={org.name}
//                 className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition space-y-2.5"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center font-bold text-xs text-slate-800 text-center">
//                     {org.logoText.slice(0, 3)}
//                   </div>
//                   <div>
//                     <h5 className="text-xs font-bold text-slate-800">{org.name}</h5>
//                     <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{org.exams}</p>
//                   </div>
//                 </div>

//                 <button className="w-full py-1.5 px-3 rounded-lg border border-slate-200 text-[11px] font-semibold text-blue-700 hover:bg-blue-50/50 flex items-center justify-center gap-1 transition">
//                   View Olympiad <ArrowRight className="w-3 h-3" />
//                 </button>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';
import {
  ChevronRight,
  Download,
  ArrowRight,
  Calculator,
  FlaskConical,
  BookOpen,
  Monitor,
  Globe,
  Brain,
  Languages,
  Sparkles,
  Trophy,
  Layers,
  Award,
  FileCheck2
} from 'lucide-react';
import { Header } from '../src/components/Header';

export default function JuniorOlympiadDashboard() {
  const [selectedClass, setSelectedClass] = useState('Class 1');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics Olympiad');
  const [selectedTopic, setSelectedTopic] = useState('1. Numbers & Number System');

  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'];

  const subjects = [
    { id: 'math', name: 'Mathematics Olympiad', icon: Calculator, color: 'text-purple-600' },
    { id: 'sci', name: 'Science Olympiad', icon: FlaskConical, color: 'text-emerald-600' },
    { id: 'eng', name: 'English Olympiad', icon: BookOpen, color: 'text-orange-500' },
    { id: 'comp', name: 'Computer Olympiad', icon: Monitor, color: 'text-blue-500' },
    { id: 'gk', name: 'GK Olympiad', icon: Globe, color: 'text-amber-500' },
    { id: 'reas', name: 'Reasoning Olympiad', icon: Brain, color: 'text-rose-500' },
    { id: 'hin', name: 'Hindi Olympiad', icon: Languages, color: 'text-teal-600' },
    { id: 'stem', name: 'STEM & Other Olympiads', icon: Sparkles, color: 'text-purple-600' },
  ];

  const topics = [
    { id: 1, name: '1. Numbers & Number System', icon: '1' },
    { id: 2, name: '2. Arithmetic Operations', icon: '➗' },
    { id: 3, name: '3. Geometry', icon: '📐' },
    { id: 4, name: '4. Measurement', icon: '📏' },
    { id: 5, name: '5. Money & Time', icon: '⏰' },
    { id: 6, name: '6. Data Handling', icon: '📊' },
    { id: 7, name: '7. Logical Reasoning', icon: '💡' },
    { id: 8, name: '8. Higher Order Thinking Skills', icon: '🧠' },
  ];

  const subtopics = [
    { id: '1.1', name: '1.1 Natural Numbers' },
    { id: '1.2', name: '1.2 Whole Numbers' },
    { id: '1.3', name: '1.3 Place Value' },
    { id: '1.4', name: '1.4 Comparison of Numbers' },
    { id: '1.5', name: '1.5 Number Patterns' },
  ];

  const organizers = [
    {
      name: 'Science Olympiad Foundation',
      short: 'SOF',
      exams: 'IMO | NSO | IEO | IGKO | ICSO | ISSO | IHO | ICO',
      logoText: 'SOF'
    },
    {
      name: 'SilverZone Foundation',
      short: 'SILVERZONE',
      exams: 'IOM | IOS | IOEL | IIO | ICOP | IGB',
      logoText: 'SILVERZONE'
    },
    {
      name: 'Unified Council',
      short: 'UC',
      exams: 'UIMO | NSTSE | UIEO | UICO | UIPSO',
      logoText: 'Unified Council'
    },
    {
      name: 'CREST Olympiads',
      short: 'CREST',
      exams: 'Maths | Science | English | Reasoning | Cyber | GK',
      logoText: 'CREST'
    },
    {
      name: 'Indian Talent Olympiad',
      short: 'ITO',
      exams: 'Maths | Science | English | GK | Computer | Reasoning',
      logoText: 'Indian Talent'
    },
  ];

  const handleDifficultyClick = (type, title, level) => {
    alert(`Starting ${type} - "${title}" (${level} Level)`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 p-4 md:p-8 font-sans">
        <Header />
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Top Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50/40 to-amber-50/40 border border-slate-100 p-6 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative w-44 h-40 bg-blue-100/60 rounded-2xl flex flex-col items-center justify-center p-4 border border-blue-200">
              <span className="text-4xl">👦🏻📖</span>
              <span className="text-xs font-semibold text-blue-600 mt-2">Active Learner</span>
            </div>
          </div>

          <div className="text-center md:text-left flex-1 max-w-xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
              Junior Olympiad
            </h1>
            <p className="text-slate-600 text-sm md:text-base mt-2 font-medium">
              Build strong concepts, logical thinking & competitive skills from an early age.
            </p>

            <div className="mt-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Select Your Class
              </p>
              <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                {classes.map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setSelectedClass(cls)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      selectedClass === cls
                        ? 'bg-blue-900 text-white shadow-md shadow-blue-900/20'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <div className="w-40 h-40 bg-amber-100/50 rounded-2xl flex flex-col items-center justify-center p-4 border border-amber-200 shadow-inner">
              <Trophy className="w-16 h-16 text-amber-500 mb-2 drop-shadow" />
              <span className="text-xs font-bold text-amber-700">Olympiad Prep</span>
            </div>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          
          {/* Column 1: Subject / Category */}
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Explore by</span>
                <h2 className="text-base font-bold text-slate-800">Subject / Category</h2>
              </div>
              
              <div className="space-y-1.5">
                {subjects.map((sub) => {
                  const Icon = sub.icon;
                  const isActive = selectedSubject === sub.name;
                  return (
                    <button
                      key={sub.name}
                      onClick={() => setSelectedSubject(sub.name)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-100 shadow-xs'
                          : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon className={`w-4 h-4 ${sub.color} shrink-0`} />
                        <span className="truncate">{sub.name}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <button className="mt-4 w-full py-2.5 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition">
              View All Categories <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Column 2: Subject Topics */}
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-full">
            <div>
              <h2 className="text-base font-bold text-slate-800 mb-4">{selectedSubject}</h2>
              <div className="space-y-1.5">
                {topics.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => setSelectedTopic(t.name)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs font-medium transition ${
                      selectedTopic === t.name
                        ? 'bg-blue-50/80 text-blue-900 border border-blue-100 font-semibold'
                        : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-600 text-[10px] flex items-center justify-center shrink-0">
                        {t.icon}
                      </span>
                      <span className="truncate">{t.name}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            <button className="mt-4 w-full py-2.5 px-3 rounded-xl border border-blue-200 bg-blue-50/50 text-xs font-semibold text-blue-700 hover:bg-blue-50 flex items-center justify-center gap-1.5 transition">
              Download Detailed Syllabus <Download className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Column 3: Practice MCQ (Subtopics + Full Chapter + Full Mock) */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              
              {/* Header */}
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                  Practice MCQ
                </span>
                <h3 className="text-sm font-bold text-slate-900 leading-snug mt-0.5">
                  {selectedTopic}
                </h3>
              </div>

              {/* Subtopic List (1.1 to 1.5) with Easy / Medium / Hard buttons */}
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Subtopics (1.1 - 1.5)
                </span>
                {subtopics.map((st) => (
                  <div
                    key={st.id}
                    className="p-2.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition space-y-2"
                  >
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span className="text-xs font-bold text-slate-800">{st.name}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5">
                      <button
                        onClick={() => handleDifficultyClick('Subtopic', st.name, 'Easy')}
                        className="py-1 px-2 rounded-lg text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 transition"
                      >
                        Easy
                      </button>
                      <button
                        onClick={() => handleDifficultyClick('Subtopic', st.name, 'Medium')}
                        className="py-1 px-2 rounded-lg text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 hover:border-amber-300 transition"
                      >
                        Medium
                      </button>
                      <button
                        onClick={() => handleDifficultyClick('Subtopic', st.name, 'Hard')}
                        className="py-1 px-2 rounded-lg text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 hover:border-rose-300 transition"
                      >
                        Hard
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Full Chapter Test Box */}
              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <div className="p-3 rounded-xl border border-indigo-100 bg-indigo-50/40 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-indigo-950 block">
                        {selectedTopic}
                      </span>
                      <span className="text-[10px] font-medium text-indigo-600">Full Chapter Test</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      onClick={() => handleDifficultyClick('Full Chapter', selectedTopic, 'Easy')}
                      className="py-1.5 px-2 rounded-lg text-[11px] font-bold bg-white text-emerald-700 border border-emerald-200 shadow-2xs hover:bg-emerald-50 transition"
                    >
                      Easy
                    </button>
                    <button
                      onClick={() => handleDifficultyClick('Full Chapter', selectedTopic, 'Medium')}
                      className="py-1.5 px-2 rounded-lg text-[11px] font-bold bg-white text-amber-700 border border-amber-200 shadow-2xs hover:bg-amber-50 transition"
                    >
                      Medium
                    </button>
                    <button
                      onClick={() => handleDifficultyClick('Full Chapter', selectedTopic, 'Hard')}
                      className="py-1.5 px-2 rounded-lg text-[11px] font-bold bg-white text-rose-700 border border-rose-200 shadow-2xs hover:bg-rose-50 transition"
                    >
                      Hard
                    </button>
                  </div>
                </div>

                {/* Subject Full Mock Test Box */}
                <div className="p-3 rounded-xl border border-purple-100 bg-purple-50/40 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-purple-600 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-purple-950 block">
                        {selectedSubject}
                      </span>
                      <span className="text-[10px] font-medium text-purple-600">Full Mock Test</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      onClick={() => handleDifficultyClick('Subject Mock', selectedSubject, 'Easy')}
                      className="py-1.5 px-2 rounded-lg text-[11px] font-bold bg-white text-emerald-700 border border-emerald-200 shadow-2xs hover:bg-emerald-50 transition"
                    >
                      Easy
                    </button>
                    <button
                      onClick={() => handleDifficultyClick('Subject Mock', selectedSubject, 'Medium')}
                      className="py-1.5 px-2 rounded-lg text-[11px] font-bold bg-white text-amber-700 border border-amber-200 shadow-2xs hover:bg-amber-50 transition"
                    >
                      Medium
                    </button>
                    <button
                      onClick={() => handleDifficultyClick('Subject Mock', selectedSubject, 'Hard')}
                      className="py-1.5 px-2 rounded-lg text-[11px] font-bold bg-white text-rose-700 border border-rose-200 shadow-2xs hover:bg-rose-50 transition"
                    >
                      Hard
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Column 4: Olympiad Organizers */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-800 px-1">Olympiad Organizers</h2>
            
            {organizers.map((org) => (
              <div
                key={org.name}
                className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition space-y-2.5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center font-bold text-xs text-slate-800 text-center">
                    {org.logoText.slice(0, 3)}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">{org.name}</h5>
                    <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{org.exams}</p>
                  </div>
                </div>

                <button className="w-full py-1.5 px-3 rounded-lg border border-slate-200 text-[11px] font-semibold text-blue-700 hover:bg-blue-50/50 flex items-center justify-center gap-1 transition">
                  View Olympiad <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}