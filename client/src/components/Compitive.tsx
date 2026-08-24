

// import React, { useState } from 'react';
// import { 
//   BookOpen, 
//   FileCheck2, 
//   ArrowRight, 
//   ChevronRight, 
//   GraduationCap, 
//   FileText, 
//   Target, 
//   TrendingUp, 
//   UserCheck 
// } from 'lucide-react';

// // Stream Category Type & Data
// type Stream = 'science' | 'commerce' | 'arts';

// interface StreamOption {
//   id: Stream;
//   label: string;
//   iconSvg: React.ReactNode;
//   activeColor: string;
// }

// const streams: StreamOption[] = [
//   {
//     id: 'science',
//     label: 'Science',
//     iconSvg: (
//       <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.60 15.12a2 2 0 01-1.022-.547l-1.22-1.22a2 2 0 010-2.828l6.83-6.83a2 2 0 012.828 0l6.83 6.83a2 2 0 010 2.828l-1.62 1.62z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2" />
//       </svg>
//     ),
//     activeColor: 'border-blue-500 text-blue-600 bg-blue-50/30',
//   },
//   {
//     id: 'commerce',
//     label: 'Commerce',
//     iconSvg: (
//       <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
//       </svg>
//     ),
//     activeColor: 'border-emerald-500 text-emerald-600 bg-emerald-50/30',
//   },
//   {
//     id: 'arts',
//     label: 'Arts',
//     iconSvg: (
//       <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
//       </svg>
//     ),
//     activeColor: 'border-purple-500 text-purple-600 bg-purple-50/30',
//   },
// ];

// // Stream Overview Header Data
// const streamOverview = {
//   science: { totalExams: '9', totalMcqs: '6,80,000+', totalTests: '2,120+' },
//   commerce: { totalExams: '16', totalMcqs: '2,40,000+', totalTests: '1,100+' },
//   arts: { totalExams: '15', totalMcqs: '2,10,000+', totalTests: '950+' },
// };

// // Exam Card Interface
// interface ExamCardData {
//   id: string;
//   title: string;
//   description: string;
//   totalMcqs: string;
//   totalTests: string;
//   buttonText: string;
//   imageUrl: string;
//   themeColor: 'blue' | 'emerald' | 'purple' | 'orange';
//   stream: Stream;
// }

// const examsData: ExamCardData[] = [
//   // --- ORIGINAL SCIENCE EXAMS (Restored) ---
//   {
//     id: 'jee',
//     title: 'JEE (Main & Advanced)',
//     description: 'For admission to IITs, NITs, IIITs & other top engineering colleges.',
//     totalMcqs: '1,25,000+',
//     totalTests: '450+',
//     buttonText: 'Explore JEE',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/1048/1048927.png',
//     themeColor: 'blue',
//     stream: 'science',
//   },
//   {
//     id: 'neet',
//     title: 'NEET UG',
//     description: 'For admission to MBBS, BDS, AYUSH & other medical courses.',
//     totalMcqs: '1,10,000+',
//     totalTests: '380+',
//     buttonText: 'Explore NEET',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
//     themeColor: 'emerald',
//     stream: 'science',
//   },
//   {
//     id: 'cuet',
//     title: 'CUET UG',
//     description: 'For admission to Central Universities and other top universities across India.',
//     totalMcqs: '95,000+',
//     totalTests: '320+',
//     buttonText: 'Explore CUET',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
//     themeColor: 'purple',
//     stream: 'science',
//   },
//   {
//     id: 'viteee',
//     title: 'VITEEE',
//     description: 'For admission to VIT campuses across India.',
//     totalMcqs: '65,000+',
//     totalTests: '230+',
//     buttonText: 'Explore VITEEE',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/4300/4300059.png',
//     themeColor: 'blue',
//     stream: 'science',
//   },
//   {
//     id: 'bitsat',
//     title: 'BITSAT',
//     description: 'For admission to BITS Pilani campuses in Goa, Hyderabad & Pilani.',
//     totalMcqs: '45,000+',
//     totalTests: '160+',
//     buttonText: 'Explore BITSAT',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3588/3588658.png',
//     themeColor: 'orange',
//     stream: 'science',
//   },
//   {
//     id: 'ipu-cet',
//     title: 'IPU CET',
//     description: 'For admission to UG courses in IP University, Delhi.',
//     totalMcqs: '55,000+',
//     totalTests: '180+',
//     buttonText: 'Explore IPU CET',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
//     themeColor: 'emerald',
//     stream: 'science',
//   },
//   {
//     id: 'nata',
//     title: 'NATA',
//     description: 'For admission to B.Arch courses in approved institutes.',
//     totalMcqs: '25,000+',
//     totalTests: '110+',
//     buttonText: 'Explore NATA',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
//     themeColor: 'orange',
//     stream: 'science',
//   },
//   {
//     id: 'clat',
//     title: 'CLAT UG',
//     description: 'For admission to 5-Year Integrated Law (BA LLB) courses.',
//     totalMcqs: '35,000+',
//     totalTests: '140+',
//     buttonText: 'Explore CLAT',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
//     themeColor: 'purple',
//     stream: 'science',
//   },
//   {
//     id: 'others',
//     title: 'Other Exams',
//     description: 'NID, UCEED, SET, SRMJEEE, MHT CET, WBJEE & more state & private exams.',
//     totalMcqs: '80,000+',
//     totalTests: '250+',
//     buttonText: 'Explore Others',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2997/2997295.png',
//     themeColor: 'blue',
//     stream: 'science',
//   },

//   // --- COMMERCE EXAMS ---
//   {
//     id: 'cuet-commerce',
//     title: 'CUET UG (Commerce)',
//     description: 'For admission to B.Com (Hons) and other commerce programs in central universities.',
//     totalMcqs: '40,000+',
//     totalTests: '200+',
//     buttonText: 'Explore CUET',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
//     themeColor: 'emerald',
//     stream: 'commerce',
//   },
//   {
//     id: 'ca-foundation',
//     title: 'CA Foundation',
//     description: 'For admission to Chartered Accountancy course by ICAI.',
//     totalMcqs: '20,000+',
//     totalTests: '100+',
//     buttonText: 'Explore CA Foundation',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/1533/1533913.png',
//     themeColor: 'blue',
//     stream: 'commerce',
//   },
//   {
//     id: 'cseet',
//     title: 'CS Executive Entrance (CSEET)',
//     description: 'For admission to Company Secretary Executive Programme.',
//     totalMcqs: '15,000+',
//     totalTests: '80+',
//     buttonText: 'Explore CSEET',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png',
//     themeColor: 'purple',
//     stream: 'commerce',
//   },
//   {
//     id: 'ipmat-commerce',
//     title: 'IPMAT (IIM Indore)',
//     description: 'For Integrated Program in Management Aptitude Test at IIM Indore.',
//     totalMcqs: '10,000+',
//     totalTests: '50+',
//     buttonText: 'Explore IPMAT',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
//     themeColor: 'emerald',
//     stream: 'commerce',
//   },
//   {
//     id: 'npat',
//     title: 'NPAT',
//     description: 'For admission to BBA program at NMIMS Mumbai.',
//     totalMcqs: '10,000+',
//     totalTests: '50+',
//     buttonText: 'Explore NPAT',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
//     themeColor: 'blue',
//     stream: 'commerce',
//   },
//   {
//     id: 'set-symbiosis',
//     title: 'SET (Symbiosis)',
//     description: 'For admission to BBA/B.Com programs in Symbiosis University.',
//     totalMcqs: '12,000+',
//     totalTests: '60+',
//     buttonText: 'Explore SET',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3588/3588658.png',
//     themeColor: 'orange',
//     stream: 'commerce',
//   },
//   {
//     id: 'du-jat-commerce',
//     title: 'DU JAT (Commerce)',
//     description: 'For admission to B.Com (Hons) and other commerce programs in DU.',
//     totalMcqs: '12,000+',
//     totalTests: '60+',
//     buttonText: 'Explore DU JAT',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
//     themeColor: 'emerald',
//     stream: 'commerce',
//   },
//   {
//     id: 'mht-cet-commerce',
//     title: 'MHT CET (Commerce)',
//     description: 'For admission to BBA/BMS and other commerce courses in Maharashtra.',
//     totalMcqs: '15,000+',
//     totalTests: '70+',
//     buttonText: 'Explore MHT CET',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png',
//     themeColor: 'emerald',
//     stream: 'commerce',
//   },
//   {
//     id: 'atma',
//     title: 'ATMA',
//     description: 'For admission to MBA/MCA programs in ATMA member institutes.',
//     totalMcqs: '10,000+',
//     totalTests: '50+',
//     buttonText: 'Explore ATMA',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/1048/1048927.png',
//     themeColor: 'blue',
//     stream: 'commerce',
//   },
//   {
//     id: 'xat',
//     title: 'XAT',
//     description: 'For admission to MBA/PGDM programs in XLRI and other top institutions.',
//     totalMcqs: '10,000+',
//     totalTests: '50+',
//     buttonText: 'Explore XAT',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
//     themeColor: 'blue',
//     stream: 'commerce',
//   },
//   {
//     id: 'mat',
//     title: 'MAT',
//     description: 'For admission to MBA/PGDM courses across India.',
//     totalMcqs: '10,000+',
//     totalTests: '50+',
//     buttonText: 'Explore MAT',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
//     themeColor: 'purple',
//     stream: 'commerce',
//   },
//   {
//     id: 'cmat',
//     title: 'CMAT',
//     description: 'For admission to MBA/PGDM programs in AICTE approved institutes.',
//     totalMcqs: '10,000+',
//     totalTests: '50+',
//     buttonText: 'Explore CMAT',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
//     themeColor: 'blue',
//     stream: 'commerce',
//   },

//   // --- ARTS EXAMS ---
//   {
//     id: 'cuet-arts',
//     title: 'CUET UG (Arts)',
//     description: 'For admission to undergraduate programs in central universities across India.',
//     totalMcqs: '40,000+',
//     totalTests: '200+',
//     buttonText: 'Explore CUET Arts',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
//     themeColor: 'purple',
//     stream: 'arts',
//   },
//   {
//     id: 'clat-ug',
//     title: 'CLAT UG',
//     description: 'For admission to 5-Year Integrated Law (BA LLB) in top NLUs.',
//     totalMcqs: '25,000+',
//     totalTests: '120+',
//     buttonText: 'Explore CLAT',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
//     themeColor: 'orange',
//     stream: 'arts',
//   },
//   {
//     id: 'ipu-cet-law',
//     title: 'IPU CET (B.A. LLB)',
//     description: 'For admission to BA LLB program in GGSIP University and its colleges.',
//     totalMcqs: '10,000+',
//     totalTests: '50+',
//     buttonText: 'Explore IPU CET',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
//     themeColor: 'blue',
//     stream: 'arts',
//   },
//   {
//     id: 'nata-arts',
//     title: 'NATA',
//     description: 'For admission to 5-Year B.Arch program in architecture colleges.',
//     totalMcqs: '18,000+',
//     totalTests: '80+',
//     buttonText: 'Explore NATA',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
//     themeColor: 'emerald',
//     stream: 'arts',
//   },
//   {
//     id: 'ailet',
//     title: 'AILET (BA LLB)',
//     description: 'For admission to 5-Year Integrated Law (BA LLB) in NLU Delhi.',
//     totalMcqs: '15,000+',
//     totalTests: '70+',
//     buttonText: 'Explore AILET',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
//     themeColor: 'purple',
//     stream: 'arts',
//   },
//   {
//     id: 'lsat',
//     title: 'LSAT India',
//     description: 'For admission to 5-Year Integrated Law (BA LLB) programs.',
//     totalMcqs: '12,000+',
//     totalTests: '60+',
//     buttonText: 'Explore LSAT',
//     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
//     themeColor: 'blue',
//     stream: 'arts',
//   },
// ];

// // Color theme map for styling
// const themeStyles = {
//   blue: {
//     badgeBg: 'bg-blue-50/60',
//     iconColor: 'text-blue-600',
//     buttonBorder: 'border-blue-200 text-blue-600 hover:bg-blue-50',
//   },
//   emerald: {
//     badgeBg: 'bg-emerald-50/60',
//     iconColor: 'text-emerald-600',
//     buttonBorder: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
//   },
//   purple: {
//     badgeBg: 'bg-purple-50/60',
//     iconColor: 'text-purple-600',
//     buttonBorder: 'border-purple-200 text-purple-600 hover:bg-purple-50',
//   },
//   orange: {
//     badgeBg: 'bg-orange-50/60',
//     iconColor: 'text-orange-600',
//     buttonBorder: 'border-orange-200 text-orange-600 hover:bg-orange-50',
//   },
// };

// export const ExploreExams: React.FC = () => {
//   const [activeStream, setActiveStream] = useState<Stream>('science');

//   // Filter exams based on selected activeStream tab
//   const filteredExams = examsData.filter((exam) => exam.stream === activeStream);
//   const currentOverview = streamOverview[activeStream];

//   return (
//     <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-[#F8FAFC]">
//       {/* --- Section Header --- */}
//       <div className="text-center mb-8">
//         <div className="inline-flex items-center gap-2 mb-2">
//           <span className="h-[2px] w-6 bg-orange-500"></span>
//           <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
//             YOUR FUTURE STARTS HERE
//           </span>
//           <span className="h-[2px] w-6 bg-orange-500"></span>
//         </div>
//         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//           Explore Exams <span className="text-orange-500">After 12th</span>
//         </h2>
//         <p className="text-slate-500 mt-2 text-sm md:text-base">
//           Find the right exam for your dream college and career.
//         </p>
//       </div>

//       {/* --- Stream Selection Tabs --- */}
//       <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
//         {streams.map((stream) => {
//           const isActive = activeStream === stream.id;
//           return (
//             <button
//               key={stream.id}
//               onClick={() => setActiveStream(stream.id)}
//               className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 cursor-pointer ${
//                 isActive
//                   ? `${stream.activeColor} border-2 font-bold shadow-md`
//                   : 'border-slate-200 text-slate-700 hover:border-slate-300'
//               }`}
//             >
//               <div className="p-1 bg-slate-50 rounded-lg">{stream.iconSvg}</div>
//               <span className="text-sm font-semibold">After 12th <span className="capitalize">{stream.label}</span></span>
//               <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
//             </button>
//           );
//         })}
//       </div>

//       {/* --- Top Metrics Summary Bar --- */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
//         <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
//           <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
//             <BookOpen className="w-6 h-6" />
//           </div>
//           <div>
//             <p className="text-xs text-slate-500 font-medium">Total Exams</p>
//             <p className="text-2xl font-black text-slate-900">{currentOverview.totalExams}</p>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
//           <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
//             <FileText className="w-6 h-6" />
//           </div>
//           <div>
//             <p className="text-xs text-slate-500 font-medium">Total MCQs</p>
//             <p className="text-2xl font-black text-slate-900">{currentOverview.totalMcqs}</p>
//           </div>
//         </div>

//         <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
//           <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
//             <FileCheck2 className="w-6 h-6" />
//           </div>
//           <div>
//             <p className="text-xs text-slate-500 font-medium">Total Tests</p>
//             <p className="text-2xl font-black text-slate-900">{currentOverview.totalTests}</p>
//           </div>
//         </div>
//       </div>

//       {/* --- Exam Cards Grid --- */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//         {filteredExams.map((exam) => {
//           const theme = themeStyles[exam.themeColor];

//           return (
//             <div
//               key={exam.id}
//               className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
//             >
//               <div>
//                 {/* Top Section: Graphic & Title */}
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="w-24 h-24 flex-shrink-0 rounded-2xl bg-slate-50/50 p-2 flex items-center justify-center">
//                     <img
//                       src={exam.imageUrl}
//                       alt={exam.title}
//                       className="w-full h-full object-contain drop-shadow-sm"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-base font-bold text-slate-900 leading-snug">
//                       {exam.title}
//                     </h3>
//                     <p className="text-xs text-slate-500 mt-1 line-clamp-2">
//                       {exam.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Metrics Badges */}
//                 <div className="grid grid-cols-2 gap-2 my-4">
//                   {/* Total MCQs */}
//                   <div className={`flex items-center gap-2 p-2.5 rounded-xl ${theme.badgeBg}`}>
//                     <BookOpen className={`w-4 h-4 ${theme.iconColor}`} />
//                     <div>
//                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total MCQs</p>
//                       <p className="text-xs font-bold text-slate-800 mt-1">{exam.totalMcqs}</p>
//                     </div>
//                   </div>

//                   {/* Total Tests */}
//                   <div className={`flex items-center gap-2 p-2.5 rounded-xl ${theme.badgeBg}`}>
//                     <FileCheck2 className={`w-4 h-4 ${theme.iconColor}`} />
//                     <div>
//                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total Tests</p>
//                       <p className="text-xs font-bold text-slate-800 mt-1">{exam.totalTests}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Action Button */}
//               <button
//                 className={`w-full mt-2 py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${theme.buttonBorder}`}
//               >
//                 <span>{exam.buttonText}</span>
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {/* --- Bottom Features Bar --- */}
//       <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="flex items-center gap-3">
//           <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
//             <GraduationCap className="w-6 h-6" />
//           </div>
//           <div>
//             <h4 className="text-xs font-bold text-slate-900">Expert Guidance</h4>
//             <p className="text-[11px] text-slate-500">Learn from top mentors and subject experts.</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-3">
//           <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
//             <Target className="w-6 h-6" />
//           </div>
//           <div>
//             <h4 className="text-xs font-bold text-slate-900">Smart Preparation</h4>
//             <p className="text-[11px] text-slate-500">Practice with the best questions & tests.</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-3">
//           <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
//             <TrendingUp className="w-6 h-6" />
//           </div>
//           <div>
//             <h4 className="text-xs font-bold text-slate-900">Track Progress</h4>
//             <p className="text-[11px] text-slate-500">Analyze performance and improve.</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-3">
//           <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
//             <UserCheck className="w-6 h-6" />
//           </div>
//           <div>
//             <h4 className="text-xs font-bold text-slate-900">Achieve Your Goal</h4>
//             <p className="text-[11px] text-slate-500">Get into top colleges and build your future.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExploreExams;

import React, { useState } from 'react';
import { 
  BookOpen, 
  FileCheck2, 
  ArrowRight, 
  ChevronRight, 
  GraduationCap, 
  FileText, 
  Target, 
  TrendingUp, 
  UserCheck,
  Users
} from 'lucide-react';

// Stream Category Type & Data
type Stream = 'science' | 'commerce' | 'arts';

interface StreamOption {
  id: Stream;
  label: string;
  iconSvg: React.ReactNode;
  activeColor: string;
}

const streams: StreamOption[] = [
  {
    id: 'science',
    label: 'Science',
    iconSvg: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.60 15.12a2 2 0 01-1.022-.547l-1.22-1.22a2 2 0 010-2.828l6.83-6.83a2 2 0 012.828 0l6.83 6.83a2 2 0 010 2.828l-1.62 1.62z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2" />
      </svg>
    ),
    activeColor: 'border-blue-500 text-blue-600 bg-blue-50/30',
  },
  {
    id: 'commerce',
    label: 'Commerce',
    iconSvg: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    activeColor: 'border-emerald-500 text-emerald-600 bg-emerald-50/30',
  },
  {
    id: 'arts',
    label: 'Arts',
    iconSvg: (
      <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    activeColor: 'border-purple-500 text-purple-600 bg-purple-50/30',
  },
];

// Stream Overview Header Data
const streamOverview = {
  science: { totalExams: '9', totalMcqs: '6,80,000+', totalTests: '2,120+', totalMentors: '150+' },
  commerce: { totalExams: '16', totalMcqs: '2,40,000+', totalTests: '1,100+', totalMentors: '90+' },
  arts: { totalExams: '15', totalMcqs: '2,10,000+', totalTests: '950+', totalMentors: '75+' },
};

// Exam Card Interface
interface ExamCardData {
  id: string;
  title: string;
  description: string;
  totalMcqs: string;
  totalTests: string;
  buttonText: string;
  imageUrl: string;
  themeColor: 'blue' | 'emerald' | 'purple' | 'orange';
  stream: Stream;
}

const examsData: ExamCardData[] = [
  // --- ORIGINAL SCIENCE EXAMS ---
  {
    id: 'jee',
    title: 'JEE (Main & Advanced)',
    description: 'For admission to IITs, NITs, IIITs & other top engineering colleges.',
    totalMcqs: '1,25,000+',
    totalTests: '450+',
    buttonText: 'Explore JEE',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1048/1048927.png',
    themeColor: 'blue',
    stream: 'science',
  },
  {
    id: 'neet',
    title: 'NEET UG',
    description: 'For admission to MBBS, BDS, AYUSH & other medical courses.',
    totalMcqs: '1,10,000+',
    totalTests: '380+',
    buttonText: 'Explore NEET',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
    themeColor: 'emerald',
    stream: 'science',
  },
  {
    id: 'cuet',
    title: 'CUET UG',
    description: 'For admission to Central Universities and other top universities across India.',
    totalMcqs: '95,000+',
    totalTests: '320+',
    buttonText: 'Explore CUET',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
    themeColor: 'purple',
    stream: 'science',
  },
  {
    id: 'viteee',
    title: 'VITEEE',
    description: 'For admission to VIT campuses across India.',
    totalMcqs: '65,000+',
    totalTests: '230+',
    buttonText: 'Explore VITEEE',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/4300/4300059.png',
    themeColor: 'blue',
    stream: 'science',
  },
  {
    id: 'bitsat',
    title: 'BITSAT',
    description: 'For admission to BITS Pilani campuses in Goa, Hyderabad & Pilani.',
    totalMcqs: '45,000+',
    totalTests: '160+',
    buttonText: 'Explore BITSAT',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3588/3588658.png',
    themeColor: 'orange',
    stream: 'science',
  },
  {
    id: 'ipu-cet',
    title: 'IPU CET',
    description: 'For admission to UG courses in IP University, Delhi.',
    totalMcqs: '55,000+',
    totalTests: '180+',
    buttonText: 'Explore IPU CET',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
    themeColor: 'emerald',
    stream: 'science',
  },
  {
    id: 'nata',
    title: 'NATA',
    description: 'For admission to B.Arch courses in approved institutes.',
    totalMcqs: '25,000+',
    totalTests: '110+',
    buttonText: 'Explore NATA',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
    themeColor: 'orange',
    stream: 'science',
  },
  {
    id: 'clat',
    title: 'CLAT UG',
    description: 'For admission to 5-Year Integrated Law (BA LLB) courses.',
    totalMcqs: '35,000+',
    totalTests: '140+',
    buttonText: 'Explore CLAT',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
    themeColor: 'purple',
    stream: 'science',
  },
  {
    id: 'others',
    title: 'Other Exams',
    description: 'NID, UCEED, SET, SRMJEEE, MHT CET, WBJEE & more state & private exams.',
    totalMcqs: '80,000+',
    totalTests: '250+',
    buttonText: 'Explore Others',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2997/2997295.png',
    themeColor: 'blue',
    stream: 'science',
  },

  // --- COMMERCE EXAMS ---
  {
    id: 'cuet-commerce',
    title: 'CUET UG (Commerce)',
    description: 'For admission to B.Com (Hons) and other commerce programs in central universities.',
    totalMcqs: '40,000+',
    totalTests: '200+',
    buttonText: 'Explore CUET',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
    themeColor: 'emerald',
    stream: 'commerce',
  },
  {
    id: 'ca-foundation',
    title: 'CA Foundation',
    description: 'For admission to Chartered Accountancy course by ICAI.',
    totalMcqs: '20,000+',
    totalTests: '100+',
    buttonText: 'Explore CA Foundation',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1533/1533913.png',
    themeColor: 'blue',
    stream: 'commerce',
  },
  {
    id: 'cseet',
    title: 'CS Executive Entrance (CSEET)',
    description: 'For admission to Company Secretary Executive Programme.',
    totalMcqs: '15,000+',
    totalTests: '80+',
    buttonText: 'Explore CSEET',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png',
    themeColor: 'purple',
    stream: 'commerce',
  },
  {
    id: 'ipmat-commerce',
    title: 'IPMAT (IIM Indore)',
    description: 'For Integrated Program in Management Aptitude Test at IIM Indore.',
    totalMcqs: '10,000+',
    totalTests: '50+',
    buttonText: 'Explore IPMAT',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    themeColor: 'emerald',
    stream: 'commerce',
  },
  {
    id: 'npat',
    title: 'NPAT',
    description: 'For admission to BBA program at NMIMS Mumbai.',
    totalMcqs: '10,000+',
    totalTests: '50+',
    buttonText: 'Explore NPAT',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
    themeColor: 'blue',
    stream: 'commerce',
  },
  {
    id: 'set-symbiosis',
    title: 'SET (Symbiosis)',
    description: 'For admission to BBA/B.Com programs in Symbiosis University.',
    totalMcqs: '12,000+',
    totalTests: '60+',
    buttonText: 'Explore SET',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3588/3588658.png',
    themeColor: 'orange',
    stream: 'commerce',
  },
  {
    id: 'du-jat-commerce',
    title: 'DU JAT (Commerce)',
    description: 'For admission to B.Com (Hons) and other commerce programs in DU.',
    totalMcqs: '12,000+',
    totalTests: '60+',
    buttonText: 'Explore DU JAT',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
    themeColor: 'emerald',
    stream: 'commerce',
  },
  {
    id: 'mht-cet-commerce',
    title: 'MHT CET (Commerce)',
    description: 'For admission to BBA/BMS and other commerce courses in Maharashtra.',
    totalMcqs: '15,000+',
    totalTests: '70+',
    buttonText: 'Explore MHT CET',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png',
    themeColor: 'emerald',
    stream: 'commerce',
  },
  {
    id: 'atma',
    title: 'ATMA',
    description: 'For admission to MBA/MCA programs in ATMA member institutes.',
    totalMcqs: '10,000+',
    totalTests: '50+',
    buttonText: 'Explore ATMA',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1048/1048927.png',
    themeColor: 'blue',
    stream: 'commerce',
  },
  {
    id: 'xat',
    title: 'XAT',
    description: 'For admission to MBA/PGDM programs in XLRI and other top institutions.',
    totalMcqs: '10,000+',
    totalTests: '50+',
    buttonText: 'Explore XAT',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
    themeColor: 'blue',
    stream: 'commerce',
  },
  {
    id: 'mat',
    title: 'MAT',
    description: 'For admission to MBA/PGDM courses across India.',
    totalMcqs: '10,000+',
    totalTests: '50+',
    buttonText: 'Explore MAT',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
    themeColor: 'purple',
    stream: 'commerce',
  },
  {
    id: 'cmat',
    title: 'CMAT',
    description: 'For admission to MBA/PGDM programs in AICTE approved institutes.',
    totalMcqs: '10,000+',
    totalTests: '50+',
    buttonText: 'Explore CMAT',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
    themeColor: 'blue',
    stream: 'commerce',
  },

  // --- ARTS EXAMS ---
  {
    id: 'cuet-arts',
    title: 'CUET UG (Arts)',
    description: 'For admission to undergraduate programs in central universities across India.',
    totalMcqs: '40,000+',
    totalTests: '200+',
    buttonText: 'Explore CUET Arts',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
    themeColor: 'purple',
    stream: 'arts',
  },
  {
    id: 'clat-ug',
    title: 'CLAT UG',
    description: 'For admission to 5-Year Integrated Law (BA LLB) in top NLUs.',
    totalMcqs: '25,000+',
    totalTests: '120+',
    buttonText: 'Explore CLAT',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
    themeColor: 'orange',
    stream: 'arts',
  },
  {
    id: 'ipu-cet-law',
    title: 'IPU CET (B.A. LLB)',
    description: 'For admission to BA LLB program in GGSIP University and its colleges.',
    totalMcqs: '10,000+',
    totalTests: '50+',
    buttonText: 'Explore IPU CET',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
    themeColor: 'blue',
    stream: 'arts',
  },
  {
    id: 'nata-arts',
    title: 'NATA',
    description: 'For admission to 5-Year B.Arch program in architecture colleges.',
    totalMcqs: '18,000+',
    totalTests: '80+',
    buttonText: 'Explore NATA',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
    themeColor: 'emerald',
    stream: 'arts',
  },
  {
    id: 'ailet',
    title: 'AILET (BA LLB)',
    description: 'For admission to 5-Year Integrated Law (BA LLB) in NLU Delhi.',
    totalMcqs: '15,000+',
    totalTests: '70+',
    buttonText: 'Explore AILET',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
    themeColor: 'purple',
    stream: 'arts',
  },
  {
    id: 'lsat',
    title: 'LSAT India',
    description: 'For admission to 5-Year Integrated Law (BA LLB) programs.',
    totalMcqs: '12,000+',
    totalTests: '60+',
    buttonText: 'Explore LSAT',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
    themeColor: 'blue',
    stream: 'arts',
  },
];

// Color theme map for styling
const themeStyles = {
  blue: {
    badgeBg: 'bg-blue-50/60',
    iconColor: 'text-blue-600',
    buttonBorder: 'border-blue-200 text-blue-600 hover:bg-blue-50',
  },
  emerald: {
    badgeBg: 'bg-emerald-50/60',
    iconColor: 'text-emerald-600',
    buttonBorder: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
  },
  purple: {
    badgeBg: 'bg-purple-50/60',
    iconColor: 'text-purple-600',
    buttonBorder: 'border-purple-200 text-purple-600 hover:bg-purple-50',
  },
  orange: {
    badgeBg: 'bg-orange-50/60',
    iconColor: 'text-orange-600',
    buttonBorder: 'border-orange-200 text-orange-600 hover:bg-orange-50',
  },
};

export const ExploreExams: React.FC = () => {
  const [activeStream, setActiveStream] = useState<Stream>('science');

  // Filter exams based on selected activeStream tab
  const filteredExams = examsData.filter((exam) => exam.stream === activeStream);
  const currentOverview = streamOverview[activeStream];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-[#F8FAFC]">
      {/* --- Section Header --- */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="h-[2px] w-6 bg-orange-500"></span>
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
            YOUR FUTURE STARTS HERE
          </span>
          <span className="h-[2px] w-6 bg-orange-500"></span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Explore Exams <span className="text-orange-500">After 12th</span>
        </h2>
        <p className="text-slate-500 mt-2 text-sm md:text-base">
          Find the right exam for your dream college and career.
        </p>
      </div>

      {/* --- Stream Selection Tabs --- */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        {streams.map((stream) => {
          const isActive = activeStream === stream.id;
          return (
            <button
              key={stream.id}
              onClick={() => setActiveStream(stream.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 cursor-pointer ${
                isActive
                  ? `${stream.activeColor} border-2 font-bold shadow-md`
                  : 'border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
            >
              <div className="p-1 bg-slate-50 rounded-lg">{stream.iconSvg}</div>
              <span className="text-sm font-semibold">After 12th <span className="capitalize">{stream.label}</span></span>
              <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
            </button>
          );
        })}
      </div>

      {/* --- Top Metrics Summary Bar --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Total Exams</p>
            <p className="text-2xl font-black text-slate-900">{currentOverview.totalExams}</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Total MCQs</p>
            <p className="text-2xl font-black text-slate-900">{currentOverview.totalMcqs}</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Total Tests</p>
            <p className="text-2xl font-black text-slate-900">{currentOverview.totalTests}</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Total Mentors</p>
            <p className="text-2xl font-black text-slate-900">{currentOverview.totalMentors}</p>
          </div>
        </div>
      </div>

      {/* --- Exam Cards Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredExams.map((exam) => {
          const theme = themeStyles[exam.themeColor];

          return (
            <div
              key={exam.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Section: Graphic & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-24 h-24 flex-shrink-0 rounded-2xl bg-slate-50/50 p-2 flex items-center justify-center">
                    <img
                      src={exam.imageUrl}
                      alt={exam.title}
                      className="w-full h-full object-contain drop-shadow-sm"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {exam.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {exam.description}
                    </p>
                  </div>
                </div>

                {/* Metrics Badges */}
                <div className="grid grid-cols-2 gap-2 my-4">
                  {/* Total MCQs */}
                  <div className={`flex items-center gap-2 p-2.5 rounded-xl ${theme.badgeBg}`}>
                    <BookOpen className={`w-4 h-4 ${theme.iconColor}`} />
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium leading-none">Total MCQs</p>
                      <p className="text-xs font-bold text-slate-800 mt-1">{exam.totalMcqs}</p>
                    </div>
                  </div>

                  {/* Total Tests */}
                  <div className={`flex items-center gap-2 p-2.5 rounded-xl ${theme.badgeBg}`}>
                    <FileCheck2 className={`w-4 h-4 ${theme.iconColor}`} />
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium leading-none">Total Tests</p>
                      <p className="text-xs font-bold text-slate-800 mt-1">{exam.totalTests}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                className={`w-full mt-2 py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${theme.buttonBorder}`}
              >
                <span>{exam.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      {/* --- Bottom Features Bar --- */}
      {/* <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
        {/* <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Expert Guidance</h4>
            <p className="text-[11px] text-slate-500">Learn from top mentors and subject experts.</p>
          </div>
        </div> */}

        {/* <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Smart Preparation</h4>
            <p className="text-[11px] text-slate-500">Practice with the best questions & tests.</p>
          </div>
        </div> */}

        {/* <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Track Progress</h4>
            <p className="text-[11px] text-slate-500">Analyze performance and improve.</p>
          </div>
        </div> */}

        {/* <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Achieve Your Goal</h4>
            <p className="text-[11px] text-slate-500">Get into top colleges and build your future.</p>
          </div>
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default ExploreExams;

