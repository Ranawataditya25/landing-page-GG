// // // // // // import React, { useState } from 'react';
// // // // // // import { 
// // // // // //   FlaskConical, 
// // // // // //   TrendingUp, 
// // // // // //   Palette, 
// // // // // //   BookOpen, 
// // // // // //   FileCheck2, 
// // // // // //   ArrowRight,
// // // // // //   ChevronRight
// // // // // // } from 'lucide-react';

// // // // // // // Stream Category Type & Data
// // // // // // type Stream = 'science' | 'commerce' | 'arts';

// // // // // // interface StreamOption {
// // // // // //   id: Stream;
// // // // // //   label: string;
// // // // // //   icon: React.ReactNode;
// // // // // //   activeColor: string;
// // // // // // }

// // // // // // const streams: StreamOption[] = [
// // // // // //   {
// // // // // //     id: 'science',
// // // // // //     label: 'After 12th Science',
// // // // // //     icon: <FlaskConical className="w-5 h-5 text-blue-600" />,
// // // // // //     activeColor: 'border-blue-600 text-blue-600 bg-blue-50/50',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'commerce',
// // // // // //     label: 'After 12th Commerce',
// // // // // //     icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
// // // // // //     activeColor: 'border-emerald-600 text-emerald-600 bg-emerald-50/50',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'arts',
// // // // // //     label: 'After 12th Arts',
// // // // // //     icon: <Palette className="w-5 h-5 text-purple-600" />,
// // // // // //     activeColor: 'border-purple-600 text-purple-600 bg-purple-50/50',
// // // // // //   },
// // // // // // ];

// // // // // // // Exam Card Interface
// // // // // // interface ExamCardData {
// // // // // //   id: string;
// // // // // //   title: string;
// // // // // //   description: string;
// // // // // //   totalMcqs: string;
// // // // // //   totalTests: string;
// // // // // //   buttonText: string;
// // // // // //   imageUrl: string;
// // // // // //   themeColor: 'blue' | 'emerald' | 'purple' | 'orange';
// // // // // // }

// // // // // // const examsData: ExamCardData[] = [
// // // // // //   {
// // // // // //     id: 'jee',
// // // // // //     title: 'JEE (Main & Advanced)',
// // // // // //     description: 'For admission to IITs, NITs, IIITs & other top engineering colleges.',
// // // // // //     totalMcqs: '1,25,000+',
// // // // // //     totalTests: '450+',
// // // // // //     buttonText: 'Explore JEE',
// // // // // //     imageUrl: 'https://placehold.co/150x150/e0f2fe/0284c7?text=JEE+3D',
// // // // // //     themeColor: 'blue',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'neet',
// // // // // //     title: 'NEET UG',
// // // // // //     description: 'For admission to MBBS, BDS, AYUSH & other medical courses.',
// // // // // //     totalMcqs: '1,10,000+',
// // // // // //     totalTests: '380+',
// // // // // //     buttonText: 'Explore NEET',
// // // // // //     imageUrl: 'https://placehold.co/150x150/d1fae5/059669?text=NEET+3D',
// // // // // //     themeColor: 'emerald',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'cuet',
// // // // // //     title: 'CUET UG',
// // // // // //     description: 'For admission to Central Universities and other top universities across India.',
// // // // // //     totalMcqs: '95,000+',
// // // // // //     totalTests: '320+',
// // // // // //     buttonText: 'Explore CUET',
// // // // // //     imageUrl: 'https://placehold.co/150x150/f3e8ff/7e22ce?text=CUET+3D',
// // // // // //     themeColor: 'purple',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'viteee',
// // // // // //     title: 'VITEEE',
// // // // // //     description: 'For admission to VIT campuses across India.',
// // // // // //     totalMcqs: '65,000+',
// // // // // //     totalTests: '230+',
// // // // // //     buttonText: 'Explore VITEEE',
// // // // // //     imageUrl: 'https://placehold.co/150x150/e0f2fe/0284c7?text=VITEEE+3D',
// // // // // //     themeColor: 'blue',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'bitsat',
// // // // // //     title: 'BITSAT',
// // // // // //     description: 'For admission to BITS Pilani campuses in Goa, Hyderabad & Pilani.',
// // // // // //     totalMcqs: '45,000+',
// // // // // //     totalTests: '160+',
// // // // // //     buttonText: 'Explore BITSAT',
// // // // // //     imageUrl: 'https://placehold.co/150x150/ffedd5/ea580c?text=BITSAT+3D',
// // // // // //     themeColor: 'orange',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'ipu-cet',
// // // // // //     title: 'IPU CET',
// // // // // //     description: 'For admission to UG courses in IP University, Delhi.',
// // // // // //     totalMcqs: '55,000+',
// // // // // //     totalTests: '180+',
// // // // // //     buttonText: 'Explore IPU CET',
// // // // // //     imageUrl: 'https://placehold.co/150x150/d1fae5/059669?text=IPU+CET+3D',
// // // // // //     themeColor: 'emerald',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'nata',
// // // // // //     title: 'NATA',
// // // // // //     description: 'For admission to B.Arch courses in approved institutes.',
// // // // // //     totalMcqs: '25,000+',
// // // // // //     totalTests: '110+',
// // // // // //     buttonText: 'Explore NATA',
// // // // // //     imageUrl: 'https://placehold.co/150x150/ffedd5/ea580c?text=NATA+3D',
// // // // // //     themeColor: 'orange',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'clat',
// // // // // //     title: 'CLAT UG',
// // // // // //     description: 'For admission to 5-Year Integrated Law (BA LLB) courses.',
// // // // // //     totalMcqs: '35,000+',
// // // // // //     totalTests: '140+',
// // // // // //     buttonText: 'Explore CLAT',
// // // // // //     imageUrl: 'https://placehold.co/150x150/f3e8ff/7e22ce?text=CLAT+3D',
// // // // // //     themeColor: 'purple',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'others',
// // // // // //     title: 'Other Exams',
// // // // // //     description: 'NID, UCEED, SET, SRMJEEE, MHT CET, WBJEE & more state & private exams.',
// // // // // //     totalMcqs: '80,000+',
// // // // // //     totalTests: '250+',
// // // // // //     buttonText: 'Explore Others',
// // // // // //     imageUrl: 'https://placehold.co/150x150/e0f2fe/0284c7?text=Others+3D',
// // // // // //     themeColor: 'blue',
// // // // // //   },
// // // // // // ];

// // // // // // // Color mapping helper for themed styling
// // // // // // const themeStyles = {
// // // // // //   blue: {
// // // // // //     badgeBg: 'bg-blue-50',
// // // // // //     iconColor: 'text-blue-600',
// // // // // //     buttonBorder: 'border-blue-200 text-blue-600 hover:bg-blue-50',
// // // // // //   },
// // // // // //   emerald: {
// // // // // //     badgeBg: 'bg-emerald-50',
// // // // // //     iconColor: 'text-emerald-600',
// // // // // //     buttonBorder: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
// // // // // //   },
// // // // // //   purple: {
// // // // // //     badgeBg: 'bg-purple-50',
// // // // // //     iconColor: 'text-purple-600',
// // // // // //     buttonBorder: 'border-purple-200 text-purple-600 hover:bg-purple-50',
// // // // // //   },
// // // // // //   orange: {
// // // // // //     badgeBg: 'bg-orange-50',
// // // // // //     iconColor: 'text-orange-600',
// // // // // //     buttonBorder: 'border-orange-200 text-orange-600 hover:bg-orange-50',
// // // // // //   },
// // // // // // };

// // // // // // export const ExploreExams: React.FC = () => {
// // // // // //   const [activeStream, setActiveStream] = useState<Stream>('science');

// // // // // //   return (
// // // // // //     <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-slate-50/50">
// // // // // //       {/* --- Section Header --- */}
// // // // // //       <div className="text-center mb-8">
// // // // // //         <div className="inline-flex items-center gap-2 mb-2">
// // // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // // //           <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
// // // // // //             Your Future Starts Here
// // // // // //           </span>
// // // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // // //         </div>
// // // // // //         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // // // // //           Explore Exams <span className="text-orange-500">After 12th</span>
// // // // // //         </h2>
// // // // // //         <p className="text-slate-500 mt-2 text-sm md:text-base">
// // // // // //           Find the right exam for your dream college and career.
// // // // // //         </p>
// // // // // //       </div>

// // // // // //       {/* --- Stream Selection Tabs --- */}
// // // // // //       <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
// // // // // //         {streams.map((stream) => {
// // // // // //           const isActive = activeStream === stream.id;
// // // // // //           return (
// // // // // //             <button
// // // // // //               key={stream.id}
// // // // // //               onClick={() => setActiveStream(stream.id)}
// // // // // //               className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
// // // // // //                 isActive 
// // // // // //                   ? `${stream.activeColor} border-2 font-bold shadow-md` 
// // // // // //                   : 'border-slate-200 text-slate-700 hover:border-slate-300'
// // // // // //               }`}
// // // // // //             >
// // // // // //               <div className="p-1 bg-slate-100 rounded-lg">{stream.icon}</div>
// // // // // //               <span className="text-sm md:text-base">{stream.label}</span>
// // // // // //               <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
// // // // // //             </button>
// // // // // //           );
// // // // // //         })}
// // // // // //       </div>

// // // // // //       {/* --- Exam Cards Grid --- */}
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //         {examsData.map((exam) => {
// // // // // //           const theme = themeStyles[exam.themeColor];

// // // // // //           return (
// // // // // //             <div
// // // // // //               key={exam.id}
// // // // // //               className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
// // // // // //             >
// // // // // //               <div>
// // // // // //                 {/* Top Section: 3D Illustration & Title Info */}
// // // // // //                 <div className="flex items-start gap-4 mb-4">
// // // // // //                   <div className="w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
// // // // // //                     <img
// // // // // //                       src={exam.imageUrl}
// // // // // //                       alt={exam.title}
// // // // // //                       className="w-full h-full object-cover"
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                   <div>
// // // // // //                     <h3 className="text-lg font-bold text-slate-900 leading-snug">
// // // // // //                       {exam.title}
// // // // // //                     </h3>
// // // // // //                     <p className="text-xs text-slate-500 mt-1 line-clamp-2">
// // // // // //                       {exam.description}
// // // // // //                     </p>
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 {/* Metrics Badges */}
// // // // // //                 <div className="grid grid-cols-2 gap-2 my-4">
// // // // // //                   {/* Total MCQs */}
// // // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // // //                     <BookOpen className={`w-4 h-4 ${theme.iconColor}`} />
// // // // // //                     <div>
// // // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total MCQs</p>
// // // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalMcqs}</p>
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   {/* Total Tests */}
// // // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // // //                     <FileCheck2 className={`w-4 h-4 ${theme.iconColor}`} />
// // // // // //                     <div>
// // // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total Tests</p>
// // // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalTests}</p>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Action Button */}
// // // // // //               <button
// // // // // //                 className={`w-full mt-2 py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors ${theme.buttonBorder}`}
// // // // // //               >
// // // // // //                 <span>{exam.buttonText}</span>
// // // // // //                 <ArrowRight className="w-4 h-4" />
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           );
// // // // // //         })}
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default ExploreExams;



// // // // // // import React, { useState } from 'react';
// // // // // // import { 
// // // // // //   FlaskConical, 
// // // // // //   TrendingUp, 
// // // // // //   Palette, 
// // // // // //   BookOpen, 
// // // // // //   FileCheck2, 
// // // // // //   ArrowRight,
// // // // // //   ChevronRight
// // // // // // } from 'lucide-react';

// // // // // // // Stream Types
// // // // // // type Stream = 'science' | 'commerce' | 'arts';

// // // // // // interface StreamOption {
// // // // // //   id: Stream;
// // // // // //   label: string;
// // // // // //   icon: React.ReactNode;
// // // // // //   activeColor: string;
// // // // // // }

// // // // // // const streams: StreamOption[] = [
// // // // // //   {
// // // // // //     id: 'science',
// // // // // //     label: 'After 12th Science',
// // // // // //     icon: <FlaskConical className="w-5 h-5 text-blue-600" />,
// // // // // //     activeColor: 'border-blue-600 text-blue-600 bg-blue-50/50',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'commerce',
// // // // // //     label: 'After 12th Commerce',
// // // // // //     icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
// // // // // //     activeColor: 'border-emerald-600 text-emerald-600 bg-emerald-50/50',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'arts',
// // // // // //     label: 'After 12th Arts',
// // // // // //     icon: <Palette className="w-5 h-5 text-purple-600" />,
// // // // // //     activeColor: 'border-purple-600 text-purple-600 bg-purple-50/50',
// // // // // //   },
// // // // // // ];

// // // // // // interface ExamCardData {
// // // // // //   id: string;
// // // // // //   title: string;
// // // // // //   description: string;
// // // // // //   totalMcqs: string;
// // // // // //   totalTests: string;
// // // // // //   buttonText: string;
// // // // // //   imageUrl: string;
// // // // // //   themeColor: 'blue' | 'emerald' | 'purple' | 'orange';
// // // // // // }

// // // // // // // ----------------------------------------------------
// // // // // // // DYNAMIC DATA FOR SCIENCE, COMMERCE & ARTS
// // // // // // // ----------------------------------------------------
// // // // // // const streamExamsData: Record<Stream, ExamCardData[]> = {
// // // // // //   science: [
// // // // // //     {
// // // // // //       id: 'jee',
// // // // // //       title: 'JEE (Main & Advanced)',
// // // // // //       description: 'For admission to IITs, NITs, IIITs & other top engineering colleges.',
// // // // // //       totalMcqs: '1,25,000+',
// // // // // //       totalTests: '450+',
// // // // // //       buttonText: 'Explore JEE',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/engineering-project-8183181-6510344.png',
// // // // // //       themeColor: 'blue',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'neet',
// // // // // //       title: 'NEET UG',
// // // // // //       description: 'For admission to MBBS, BDS, AYUSH & other medical courses.',
// // // // // //       totalMcqs: '1,10,000+',
// // // // // //       totalTests: '380+',
// // // // // //       buttonText: 'Explore NEET',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/stethoscope-4621535-3850125.png',
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'cuet-sci',
// // // // // //       title: 'CUET UG (Science)',
// // // // // //       description: 'For admission to Central Universities and top science programs across India.',
// // // // // //       totalMcqs: '95,000+',
// // // // // //       totalTests: '320+',
// // // // // //       buttonText: 'Explore CUET',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/graduation-cap-4051061-3351996.png',
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'viteee',
// // // // // //       title: 'VITEEE',
// // // // // //       description: 'For admission to VIT campuses across India.',
// // // // // //       totalMcqs: '65,000+',
// // // // // //       totalTests: '230+',
// // // // // //       buttonText: 'Explore VITEEE',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/college-building-8002019-6407026.png',
// // // // // //       themeColor: 'blue',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'bitsat',
// // // // // //       title: 'BITSAT',
// // // // // //       description: 'For admission to BITS Pilani campuses in Goa, Hyderabad & Pilani.',
// // // // // //       totalMcqs: '45,000+',
// // // // // //       totalTests: '160+',
// // // // // //       buttonText: 'Explore BITSAT',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/campus-building-8245892-6582522.png',
// // // // // //       themeColor: 'orange',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'ipu-cet-sci',
// // // // // //       title: 'IPU CET',
// // // // // //       description: 'For admission to UG engineering & science courses in IP University, Delhi.',
// // // // // //       totalMcqs: '55,000+',
// // // // // //       totalTests: '180+',
// // // // // //       buttonText: 'Explore IPU CET',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/university-building-5606689-4674143.png',
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //   ],

// // // // // //   commerce: [
// // // // // //     {
// // // // // //       id: 'cuet-comm',
// // // // // //       title: 'CUET UG (Commerce)',
// // // // // //       description: 'For admission to B.Com (Hons) and other commerce programs in central universities.',
// // // // // //       totalMcqs: '40,000+',
// // // // // //       totalTests: '200+',
// // // // // //       buttonText: 'Explore CUET',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/graduation-cap-4051061-3351996.png',
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'ca-foundation',
// // // // // //       title: 'CA Foundation',
// // // // // //       description: 'For admission to Chartered Accountancy course by ICAI.',
// // // // // //       totalMcqs: '20,000+',
// // // // // //       totalTests: '100+',
// // // // // //       buttonText: 'Explore CA',
// // // // // //       imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICAI_Logo.png',
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'cseet',
// // // // // //       title: 'CS Executive Entrance (CSEET)',
// // // // // //       description: 'For admission to Company Secretary Executive Programme.',
// // // // // //       totalMcqs: '15,000+',
// // // // // //       totalTests: '80+',
// // // // // //       buttonText: 'Explore CSEET',
// // // // // //       imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'ipmat-comm',
// // // // // //       title: 'IPMAT (IIM Indore)',
// // // // // //       description: 'For Integrated Program in Management Aptitude Test at IIM Indore.',
// // // // // //       totalMcqs: '10,000+',
// // // // // //       totalTests: '50+',
// // // // // //       buttonText: 'Explore IPMAT',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/growing-chart-5606679-4674133.png',
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'npat',
// // // // // //       title: 'NPAT',
// // // // // //       description: 'For admission to BBA program at NMIMS Mumbai.',
// // // // // //       totalMcqs: '10,000+',
// // // // // //       totalTests: '50+',
// // // // // //       buttonText: 'Explore NPAT',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/leaf-3d-icon-download-in-png-blend-fbx-gltf-file-formats--nature-plant-green-pack-eco-icons-8664183.png',
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'set-comm',
// // // // // //       title: 'SET (Symbiosis)',
// // // // // //       description: 'For admission to BBA/B.Com programs in Symbiosis University.',
// // // // // //       totalMcqs: '12,000+',
// // // // // //       totalTests: '60+',
// // // // // //       buttonText: 'Explore SET',
// // // // // //       imageUrl: 'https://cdn-icons-png.flaticon.com/512/3588/3588658.png',
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //   ],

// // // // // //   arts: [
// // // // // //     {
// // // // // //       id: 'cuet-arts',
// // // // // //       title: 'CUET UG (Arts)',
// // // // // //       description: 'For admission to undergraduate programs in central universities across India.',
// // // // // //       totalMcqs: '40,000+',
// // // // // //       totalTests: '200+',
// // // // // //       buttonText: 'Explore CUET',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/university-building-5606689-4674143.png',
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'clat-arts',
// // // // // //       title: 'CLAT UG',
// // // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) in top NLUs.',
// // // // // //       totalMcqs: '25,000+',
// // // // // //       totalTests: '120+',
// // // // // //       buttonText: 'Explore CLAT',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/law-gavel-4621528-3850118.png',
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'ipu-cet-law',
// // // // // //       title: 'IPU CET (B.A. LLB)',
// // // // // //       description: 'For admission to BA LLB program in GGSIP University and its colleges.',
// // // // // //       totalMcqs: '10,000+',
// // // // // //       totalTests: '50+',
// // // // // //       buttonText: 'Explore IPU CET',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/campus-building-8245892-6582522.png',
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'nata-arts',
// // // // // //       title: 'NATA',
// // // // // //       description: 'For admission to 5-Year B.Arch program in architecture colleges.',
// // // // // //       totalMcqs: '18,000+',
// // // // // //       totalTests: '80+',
// // // // // //       buttonText: 'Explore NATA',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/architectural-blueprint-6598379-5438883.png',
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'ailet',
// // // // // //       title: 'AILET (BA LLB)',
// // // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) in NLU Delhi.',
// // // // // //       totalMcqs: '15,000+',
// // // // // //       totalTests: '70+',
// // // // // //       buttonText: 'Explore AILET',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/gavel-3d-icon-download-in-png-blend-fbx-gltf-file-formats--hammer-justice-law-auction-court-flat-general-objects-pack-icons-5309325.png',
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'lsat',
// // // // // //       title: 'LSAT India',
// // // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) programs.',
// // // // // //       totalMcqs: '12,000+',
// // // // // //       totalTests: '60+',
// // // // // //       buttonText: 'Explore LSAT',
// // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/law-book-3d-icon-download-in-png-blend-fbx-gltf-file-formats--justice-legal-code-rules-flat-general-objects-pack-icons-5309328.png',
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //   ]
// // // // // // };

// // // // // // // Styling by theme color
// // // // // // const themeStyles = {
// // // // // //   blue: {
// // // // // //     badgeBg: 'bg-blue-50',
// // // // // //     iconColor: 'text-blue-600',
// // // // // //     buttonBorder: 'border-blue-200 text-blue-600 hover:bg-blue-50',
// // // // // //   },
// // // // // //   emerald: {
// // // // // //     badgeBg: 'bg-emerald-50',
// // // // // //     iconColor: 'text-emerald-600',
// // // // // //     buttonBorder: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
// // // // // //   },
// // // // // //   purple: {
// // // // // //     badgeBg: 'bg-purple-50',
// // // // // //     iconColor: 'text-purple-600',
// // // // // //     buttonBorder: 'border-purple-200 text-purple-600 hover:bg-purple-50',
// // // // // //   },
// // // // // //   orange: {
// // // // // //     badgeBg: 'bg-orange-50',
// // // // // //     iconColor: 'text-orange-600',
// // // // // //     buttonBorder: 'border-orange-200 text-orange-600 hover:bg-orange-50',
// // // // // //   },
// // // // // // };

// // // // // // export const ExploreExams: React.FC = () => {
// // // // // //   // State for active stream selection
// // // // // //   const [activeStream, setActiveStream] = useState<Stream>('science');

// // // // // //   // Currently selected stream's exam list
// // // // // //   const currentExams = streamExamsData[activeStream];

// // // // // //   return (
// // // // // //     <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-slate-50/50">
// // // // // //       {/* --- Section Header --- */}
// // // // // //       <div className="text-center mb-8">
// // // // // //         <div className="inline-flex items-center gap-2 mb-2">
// // // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // // //           <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
// // // // // //             Your Future Starts Here
// // // // // //           </span>
// // // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // // //         </div>
// // // // // //         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // // // // //           Explore Exams <span className="text-orange-500">After 12th</span>
// // // // // //         </h2>
// // // // // //         <p className="text-slate-500 mt-2 text-sm md:text-base">
// // // // // //           Find the right exam for your dream college and career.
// // // // // //         </p>
// // // // // //       </div>

// // // // // //       {/* --- Stream Selection Tabs --- */}
// // // // // //       <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
// // // // // //         {streams.map((stream) => {
// // // // // //           const isActive = activeStream === stream.id;
// // // // // //           return (
// // // // // //             <button
// // // // // //               key={stream.id}
// // // // // //               onClick={() => setActiveStream(stream.id)}
// // // // // //               className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
// // // // // //                 isActive 
// // // // // //                   ? `${stream.activeColor} border-2 font-bold shadow-md` 
// // // // // //                   : 'border-slate-200 text-slate-700 hover:border-slate-300'
// // // // // //               }`}
// // // // // //             >
// // // // // //               <div className="p-1 bg-slate-100 rounded-lg">{stream.icon}</div>
// // // // // //               <span className="text-sm md:text-base">{stream.label}</span>
// // // // // //               <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
// // // // // //             </button>
// // // // // //           );
// // // // // //         })}
// // // // // //       </div>

// // // // // //       {/* --- Exam Cards Grid (Dynamic Render Based on activeStream) --- */}
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //         {currentExams.map((exam) => {
// // // // // //           const theme = themeStyles[exam.themeColor];

// // // // // //           return (
// // // // // //             <div
// // // // // //               key={exam.id}
// // // // // //               className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
// // // // // //             >
// // // // // //               <div>
// // // // // //                 {/* Top Section: 3D Image & Details */}
// // // // // //                 <div className="flex items-start gap-4 mb-4">
// // // // // //                   <div className="w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-2">
// // // // // //                     <img
// // // // // //                       src={exam.imageUrl}
// // // // // //                       alt={exam.title}
// // // // // //                       className="w-full h-full object-contain"
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                   <div>
// // // // // //                     <h3 className="text-lg font-bold text-slate-900 leading-snug">
// // // // // //                       {exam.title}
// // // // // //                     </h3>
// // // // // //                     <p className="text-xs text-slate-500 mt-1 line-clamp-2">
// // // // // //                       {exam.description}
// // // // // //                     </p>
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 {/* Metrics Badges */}
// // // // // //                 <div className="grid grid-cols-2 gap-2 my-4">
// // // // // //                   {/* Total MCQs */}
// // // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // // //                     <BookOpen className={`w-4 h-4 ${theme.iconColor}`} />
// // // // // //                     <div>
// // // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total MCQs</p>
// // // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalMcqs}</p>
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   {/* Total Tests */}
// // // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // // //                     <FileCheck2 className={`w-4 h-4 ${theme.iconColor}`} />
// // // // // //                     <div>
// // // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total Tests</p>
// // // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalTests}</p>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Action Button */}
// // // // // //               <button
// // // // // //                 className={`w-full mt-2 py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors ${theme.buttonBorder}`}
// // // // // //               >
// // // // // //                 <span>{exam.buttonText}</span>
// // // // // //                 <ArrowRight className="w-4 h-4" />
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           );
// // // // // //         })}
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default ExploreExams;




// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { 
// // // // // // // //   FlaskConical, 
// // // // // // // //   TrendingUp, 
// // // // // // // //   Palette, 
// // // // // // // //   BookOpen, 
// // // // // // // //   FileCheck2, 
// // // // // // // //   ArrowRight,
// // // // // // // //   ChevronRight
// // // // // // // // } from 'lucide-react';

// // // // // // // // // Stream Types
// // // // // // // // type Stream = 'science' | 'commerce' | 'arts';

// // // // // // // // interface StreamOption {
// // // // // // // //   id: Stream;
// // // // // // // //   label: string;
// // // // // // // //   icon: React.ReactNode;
// // // // // // // //   activeColor: string;
// // // // // // // // }

// // // // // // // // const streams: StreamOption[] = [
// // // // // // // //   {
// // // // // // // //     id: 'science',
// // // // // // // //     label: 'After 12th Science',
// // // // // // // //     icon: <FlaskConical className="w-5 h-5 text-blue-600" />,
// // // // // // // //     activeColor: 'border-blue-600 text-blue-600 bg-blue-50/50',
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 'commerce',
// // // // // // // //     label: 'After 12th Commerce',
// // // // // // // //     icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
// // // // // // // //     activeColor: 'border-emerald-600 text-emerald-600 bg-emerald-50/50',
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 'arts',
// // // // // // // //     label: 'After 12th Arts',
// // // // // // // //     icon: <Palette className="w-5 h-5 text-purple-600" />,
// // // // // // // //     activeColor: 'border-purple-600 text-purple-600 bg-purple-50/50',
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // interface ExamCardData {
// // // // // // // //   id: string;
// // // // // // // //   title: string;
// // // // // // // //   description: string;
// // // // // // // //   totalMcqs: string;
// // // // // // // //   totalTests: string;
// // // // // // // //   buttonText: string;
// // // // // // // //   imageUrl: string;
// // // // // // // //   themeColor: 'blue' | 'emerald' | 'purple' | 'orange';
// // // // // // // // }

// // // // // // // // // ----------------------------------------------------
// // // // // // // // // DYNAMIC DATA FOR SCIENCE, COMMERCE & ARTS
// // // // // // // // // ----------------------------------------------------
// // // // // // // // const streamExamsData: Record<Stream, ExamCardData[]> = {
// // // // // // // //   science: [
// // // // // // // //     {
// // // // // // // //       id: 'jee',
// // // // // // // //       title: 'JEE (Main & Advanced)',
// // // // // // // //       description: 'For admission to IITs, NITs, IIITs & other top engineering colleges.',
// // // // // // // //       totalMcqs: '1,25,000+',
// // // // // // // //       totalTests: '450+',
// // // // // // // //       buttonText: 'Explore JEE',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/engineering-project-8183181-6510344.png',
// // // // // // // //       themeColor: 'blue',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'neet',
// // // // // // // //       title: 'NEET UG',
// // // // // // // //       description: 'For admission to MBBS, BDS, AYUSH & other medical courses.',
// // // // // // // //       totalMcqs: '1,10,000+',
// // // // // // // //       totalTests: '380+',
// // // // // // // //       buttonText: 'Explore NEET',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/stethoscope-4621535-3850125.png',
// // // // // // // //       themeColor: 'emerald',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'cuet-sci',
// // // // // // // //       title: 'CUET UG (Science)',
// // // // // // // //       description: 'For admission to Central Universities and top science programs across India.',
// // // // // // // //       totalMcqs: '95,000+',
// // // // // // // //       totalTests: '320+',
// // // // // // // //       buttonText: 'Explore CUET',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/graduation-cap-4051061-3351996.png',
// // // // // // // //       themeColor: 'purple',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'viteee',
// // // // // // // //       title: 'VITEEE',
// // // // // // // //       description: 'For admission to VIT campuses across India.',
// // // // // // // //       totalMcqs: '65,000+',
// // // // // // // //       totalTests: '230+',
// // // // // // // //       buttonText: 'Explore VITEEE',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/college-building-8002019-6407026.png',
// // // // // // // //       themeColor: 'blue',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'bitsat',
// // // // // // // //       title: 'BITSAT',
// // // // // // // //       description: 'For admission to BITS Pilani campuses in Goa, Hyderabad & Pilani.',
// // // // // // // //       totalMcqs: '45,000+',
// // // // // // // //       totalTests: '160+',
// // // // // // // //       buttonText: 'Explore BITSAT',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/campus-building-8245892-6582522.png',
// // // // // // // //       themeColor: 'orange',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'ipu-cet-sci',
// // // // // // // //       title: 'IPU CET',
// // // // // // // //       description: 'For admission to UG engineering & science courses in IP University, Delhi.',
// // // // // // // //       totalMcqs: '55,000+',
// // // // // // // //       totalTests: '180+',
// // // // // // // //       buttonText: 'Explore IPU CET',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/university-building-5606689-4674143.png',
// // // // // // // //       themeColor: 'emerald',
// // // // // // // //     },
// // // // // // // //   ],

// // // // // // // //   commerce: [
// // // // // // // //     {
// // // // // // // //       id: 'cuet-comm',
// // // // // // // //       title: 'CUET UG (Commerce)',
// // // // // // // //       description: 'For admission to B.Com (Hons) and other commerce programs in central universities.',
// // // // // // // //       totalMcqs: '40,000+',
// // // // // // // //       totalTests: '200+',
// // // // // // // //       buttonText: 'Explore CUET',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/graduation-cap-4051061-3351996.png',
// // // // // // // //       themeColor: 'emerald',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'ca-foundation',
// // // // // // // //       title: 'CA Foundation',
// // // // // // // //       description: 'For admission to Chartered Accountancy course by ICAI.',
// // // // // // // //       totalMcqs: '20,000+',
// // // // // // // //       totalTests: '100+',
// // // // // // // //       buttonText: 'Explore CA',
// // // // // // // //       imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICAI_Logo.png',
// // // // // // // //       themeColor: 'emerald',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'cseet',
// // // // // // // //       title: 'CS Executive Entrance (CSEET)',
// // // // // // // //       description: 'For admission to Company Secretary Executive Programme.',
// // // // // // // //       totalMcqs: '15,000+',
// // // // // // // //       totalTests: '80+',
// // // // // // // //       buttonText: 'Explore CSEET',
// // // // // // // //       imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
// // // // // // // //       themeColor: 'emerald',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'ipmat-comm',
// // // // // // // //       title: 'IPMAT (IIM Indore)',
// // // // // // // //       description: 'For Integrated Program in Management Aptitude Test at IIM Indore.',
// // // // // // // //       totalMcqs: '10,000+',
// // // // // // // //       totalTests: '50+',
// // // // // // // //       buttonText: 'Explore IPMAT',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/growing-chart-5606679-4674133.png',
// // // // // // // //       themeColor: 'emerald',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'npat',
// // // // // // // //       title: 'NPAT',
// // // // // // // //       description: 'For admission to BBA program at NMIMS Mumbai.',
// // // // // // // //       totalMcqs: '10,000+',
// // // // // // // //       totalTests: '50+',
// // // // // // // //       buttonText: 'Explore NPAT',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/leaf-3d-icon-download-in-png-blend-fbx-gltf-file-formats--nature-plant-green-pack-eco-icons-8664183.png',
// // // // // // // //       themeColor: 'emerald',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'set-comm',
// // // // // // // //       title: 'SET (Symbiosis)',
// // // // // // // //       description: 'For admission to BBA/B.Com programs in Symbiosis University.',
// // // // // // // //       totalMcqs: '12,000+',
// // // // // // // //       totalTests: '60+',
// // // // // // // //       buttonText: 'Explore SET',
// // // // // // // //       imageUrl: 'https://cdn-icons-png.flaticon.com/512/3588/3588658.png',
// // // // // // // //       themeColor: 'emerald',
// // // // // // // //     },
// // // // // // // //   ],

// // // // // // // //   arts: [
// // // // // // // //     {
// // // // // // // //       id: 'cuet-arts',
// // // // // // // //       title: 'CUET UG (Arts)',
// // // // // // // //       description: 'For admission to undergraduate programs in central universities across India.',
// // // // // // // //       totalMcqs: '40,000+',
// // // // // // // //       totalTests: '200+',
// // // // // // // //       buttonText: 'Explore CUET',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/university-building-5606689-4674143.png',
// // // // // // // //       themeColor: 'purple',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'clat-arts',
// // // // // // // //       title: 'CLAT UG',
// // // // // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) in top NLUs.',
// // // // // // // //       totalMcqs: '25,000+',
// // // // // // // //       totalTests: '120+',
// // // // // // // //       buttonText: 'Explore CLAT',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/law-gavel-4621528-3850118.png',
// // // // // // // //       themeColor: 'purple',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'ipu-cet-law',
// // // // // // // //       title: 'IPU CET (B.A. LLB)',
// // // // // // // //       description: 'For admission to BA LLB program in GGSIP University and its colleges.',
// // // // // // // //       totalMcqs: '10,000+',
// // // // // // // //       totalTests: '50+',
// // // // // // // //       buttonText: 'Explore IPU CET',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/campus-building-8245892-6582522.png',
// // // // // // // //       themeColor: 'purple',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'nata-arts',
// // // // // // // //       title: 'NATA',
// // // // // // // //       description: 'For admission to 5-Year B.Arch program in architecture colleges.',
// // // // // // // //       totalMcqs: '18,000+',
// // // // // // // //       totalTests: '80+',
// // // // // // // //       buttonText: 'Explore NATA',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/architectural-blueprint-6598379-5438883.png',
// // // // // // // //       themeColor: 'purple',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'ailet',
// // // // // // // //       title: 'AILET (BA LLB)',
// // // // // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) in NLU Delhi.',
// // // // // // // //       totalMcqs: '15,000+',
// // // // // // // //       totalTests: '70+',
// // // // // // // //       buttonText: 'Explore AILET',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/gavel-3d-icon-download-in-png-blend-fbx-gltf-file-formats--hammer-justice-law-auction-court-flat-general-objects-pack-icons-5309325.png',
// // // // // // // //       themeColor: 'purple',
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       id: 'lsat',
// // // // // // // //       title: 'LSAT India',
// // // // // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) programs.',
// // // // // // // //       totalMcqs: '12,000+',
// // // // // // // //       totalTests: '60+',
// // // // // // // //       buttonText: 'Explore LSAT',
// // // // // // // //       imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/law-book-3d-icon-download-in-png-blend-fbx-gltf-file-formats--justice-legal-code-rules-flat-general-objects-pack-icons-5309328.png',
// // // // // // // //       themeColor: 'purple',
// // // // // // // //     },
// // // // // // // //   ]
// // // // // // // // };

// // // // // // // // // Styling by theme color
// // // // // // // // const themeStyles = {
// // // // // // // //   blue: {
// // // // // // // //     badgeBg: 'bg-blue-50',
// // // // // // // //     iconColor: 'text-blue-600',
// // // // // // // //     buttonBorder: 'border-blue-200 text-blue-600 hover:bg-blue-50',
// // // // // // // //   },
// // // // // // // //   emerald: {
// // // // // // // //     badgeBg: 'bg-emerald-50',
// // // // // // // //     iconColor: 'text-emerald-600',
// // // // // // // //     buttonBorder: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
// // // // // // // //   },
// // // // // // // //   purple: {
// // // // // // // //     badgeBg: 'bg-purple-50',
// // // // // // // //     iconColor: 'text-purple-600',
// // // // // // // //     buttonBorder: 'border-purple-200 text-purple-600 hover:bg-purple-50',
// // // // // // // //   },
// // // // // // // //   orange: {
// // // // // // // //     badgeBg: 'bg-orange-50',
// // // // // // // //     iconColor: 'text-orange-600',
// // // // // // // //     buttonBorder: 'border-orange-200 text-orange-600 hover:bg-orange-50',
// // // // // // // //   },
// // // // // // // // };

// // // // // // // // export const ExploreExams: React.FC = () => {
// // // // // // // //   // State for active stream selection
// // // // // // // //   const [activeStream, setActiveStream] = useState<Stream>('science');

// // // // // // // //   // Currently selected stream's exam list
// // // // // // // //   const currentExams = streamExamsData[activeStream];

// // // // // // // //   return (
// // // // // // // //     <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-slate-50/50">
// // // // // // // //       {/* --- Section Header --- */}
// // // // // // // //       <div className="text-center mb-8">
// // // // // // // //         <div className="inline-flex items-center gap-2 mb-2">
// // // // // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // // // // //           <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
// // // // // // // //             Your Future Starts Here
// // // // // // // //           </span>
// // // // // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // // // // //         </div>
// // // // // // // //         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // // // // // // //           Explore Exams <span className="text-orange-500">After 12th</span>
// // // // // // // //         </h2>
// // // // // // // //         <p className="text-slate-500 mt-2 text-sm md:text-base">
// // // // // // // //           Find the right exam for your dream college and career.
// // // // // // // //         </p>
// // // // // // // //       </div>

// // // // // // // //       {/* --- Stream Selection Tabs --- */}
// // // // // // // //       <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
// // // // // // // //         {streams.map((stream) => {
// // // // // // // //           const isActive = activeStream === stream.id;
// // // // // // // //           return (
// // // // // // // //             <button
// // // // // // // //               key={stream.id}
// // // // // // // //               onClick={() => setActiveStream(stream.id)}
// // // // // // // //               className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
// // // // // // // //                 isActive 
// // // // // // // //                   ? `${stream.activeColor} border-2 font-bold shadow-md` 
// // // // // // // //                   : 'border-slate-200 text-slate-700 hover:border-slate-300'
// // // // // // // //               }`}
// // // // // // // //             >
// // // // // // // //               <div className="p-1 bg-slate-100 rounded-lg">{stream.icon}</div>
// // // // // // // //               <span className="text-sm md:text-base">{stream.label}</span>
// // // // // // // //               <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
// // // // // // // //             </button>
// // // // // // // //           );
// // // // // // // //         })}
// // // // // // // //       </div>

// // // // // // // //       {/* --- Exam Cards Grid (Dynamic Render Based on activeStream) --- */}
// // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // //         {currentExams.map((exam) => {
// // // // // // // //           const theme = themeStyles[exam.themeColor];

// // // // // // // //           return (
// // // // // // // //             <div
// // // // // // // //               key={exam.id}
// // // // // // // //               className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
// // // // // // // //             >
// // // // // // // //               <div>
// // // // // // // //                 {/* Top Section: 3D Image & Details */}
// // // // // // // //                 <div className="flex items-start gap-4 mb-4">
// // // // // // // //                   <div className="w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-2">
// // // // // // // //                     <img
// // // // // // // //                       src={exam.imageUrl}
// // // // // // // //                       alt={exam.title}
// // // // // // // //                       className="w-full h-full object-contain"
// // // // // // // //                     />
// // // // // // // //                   </div>
// // // // // // // //                   <div>
// // // // // // // //                     <h3 className="text-lg font-bold text-slate-900 leading-snug">
// // // // // // // //                       {exam.title}
// // // // // // // //                     </h3>
// // // // // // // //                     <p className="text-xs text-slate-500 mt-1 line-clamp-2">
// // // // // // // //                       {exam.description}
// // // // // // // //                     </p>
// // // // // // // //                   </div>
// // // // // // // //                 </div>

// // // // // // // //                 {/* Metrics Badges */}
// // // // // // // //                 <div className="grid grid-cols-2 gap-2 my-4">
// // // // // // // //                   {/* Total MCQs */}
// // // // // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // // // // //                     <BookOpen className={`w-4 h-4 ${theme.iconColor}`} />
// // // // // // // //                     <div>
// // // // // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total MCQs</p>
// // // // // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalMcqs}</p>
// // // // // // // //                     </div>
// // // // // // // //                   </div>

// // // // // // // //                   {/* Total Tests */}
// // // // // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // // // // //                     <FileCheck2 className={`w-4 h-4 ${theme.iconColor}`} />
// // // // // // // //                     <div>
// // // // // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total Tests</p>
// // // // // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalTests}</p>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Action Button */}
// // // // // // // //               <button
// // // // // // // //                 className={`w-full mt-2 py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors ${theme.buttonBorder}`}
// // // // // // // //               >
// // // // // // // //                 <span>{exam.buttonText}</span>
// // // // // // // //                 <ArrowRight className="w-4 h-4" />
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           );
// // // // // // // //         })}
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ExploreExams;




// // // // // import React, { useState } from 'react';
// // // // // import { 
// // // // //   FlaskConical, 
// // // // //   TrendingUp, 
// // // // //   Palette, 
// // // // //   BookOpen, 
// // // // //   FileCheck2, 
// // // // //   ArrowRight,
// // // // //   ChevronRight
// // // // // } from 'lucide-react';

// // // // // // Stream Types
// // // // // type Stream = 'science' | 'commerce' | 'arts';

// // // // // interface StreamOption {
// // // // //   id: Stream;
// // // // //   label: string;
// // // // //   icon: React.ReactNode;
// // // // //   activeColor: string;
// // // // // }

// // // // // const streams: StreamOption[] = [
// // // // //   {
// // // // //     id: 'science',
// // // // //     label: 'After 12th Science',
// // // // //     icon: <FlaskConical className="w-5 h-5 text-blue-600" />,
// // // // //     activeColor: 'border-blue-600 text-blue-600 bg-blue-50/50',
// // // // //   },
// // // // //   {
// // // // //     id: 'commerce',
// // // // //     label: 'After 12th Commerce',
// // // // //     icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
// // // // //     activeColor: 'border-emerald-600 text-emerald-600 bg-emerald-50/50',
// // // // //   },
// // // // //   {
// // // // //     id: 'arts',
// // // // //     label: 'After 12th Arts',
// // // // //     icon: <Palette className="w-5 h-5 text-purple-600" />,
// // // // //     activeColor: 'border-purple-600 text-purple-600 bg-purple-50/50',
// // // // //   },
// // // // // ];

// // // // // interface ExamCardData {
// // // // //   id: string;
// // // // //   title: string;
// // // // //   description: string;
// // // // //   totalMcqs: string;
// // // // //   totalTests: string;
// // // // //   buttonText: string;
// // // // //   imageUrl?: string;
// // // // //   svgIcon?: React.ReactNode;
// // // // //   themeColor: 'blue' | 'emerald' | 'purple' | 'orange';
// // // // // }

// // // // // // ----------------------------------------------------
// // // // // // DYNAMIC DATA FOR SCIENCE, COMMERCE & ARTS
// // // // // // ----------------------------------------------------
// // // // // const streamExamsData: Record<Stream, ExamCardData[]> = {
// // // // //   science: [
// // // // //     {
// // // // //       id: 'jee',
// // // // //       title: 'JEE (Main & Advanced)',
// // // // //       description: 'For admission to IITs, NITs, IIITs & other top engineering colleges.',
// // // // //       totalMcqs: '1,25,000+',
// // // // //       totalTests: '450+',
// // // // //       buttonText: 'Explore JEE',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#E0F2FE" />
// // // // //           <path d="M30 40 L70 40 L70 70 L30 70 Z" fill="#0284C7" />
// // // // //           <circle cx="50" cy="30" r="12" fill="#38BDF8" />
// // // // //           <path d="M20 75 L80 75" stroke="#0369A1" strokeWidth="4" strokeLinecap="round" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'blue',
// // // // //     },
// // // // //     {
// // // // //       id: 'neet',
// // // // //       title: 'NEET UG',
// // // // //       description: 'For admission to MBBS, BDS, AYUSH & other medical courses.',
// // // // //       totalMcqs: '1,10,000+',
// // // // //       totalTests: '380+',
// // // // //       buttonText: 'Explore NEET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M50 30 C30 10 10 35 50 75 C90 35 70 10 50 30 Z" fill="#10B981" />
// // // // //           <path d="M35 50 L65 50 M50 35 L50 65" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'cuet-sci',
// // // // //       title: 'CUET UG (Science)',
// // // // //       description: 'For admission to Central Universities and top science programs across India.',
// // // // //       totalMcqs: '95,000+',
// // // // //       totalTests: '320+',
// // // // //       buttonText: 'Explore CUET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M20 45 L50 30 L80 45 L50 60 Z" fill="#9333EA" />
// // // // //           <path d="M30 52 L30 68 C30 68 50 78 70 68 L70 52" fill="none" stroke="#7E22CE" strokeWidth="4" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'viteee',
// // // // //       title: 'VITEEE',
// // // // //       description: 'For admission to VIT campuses across India.',
// // // // //       totalMcqs: '65,000+',
// // // // //       totalTests: '230+',
// // // // //       buttonText: 'Explore VITEEE',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#E0F2FE" />
// // // // //           <path d="M25 70 L25 40 L50 25 L75 40 L75 70 Z" fill="#0284C7" />
// // // // //           <rect x="40" y="50" width="20" height="20" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'blue',
// // // // //     },
// // // // //     {
// // // // //       id: 'bitsat',
// // // // //       title: 'BITSAT',
// // // // //       description: 'For admission to BITS Pilani campuses in Goa, Hyderabad & Pilani.',
// // // // //       totalMcqs: '45,000+',
// // // // //       totalTests: '160+',
// // // // //       buttonText: 'Explore BITSAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#FFEDD5" />
// // // // //           <path d="M30 75 L30 45 L50 25 L70 45 L70 75 Z" fill="#EA580C" />
// // // // //           <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'orange',
// // // // //     },
// // // // //     {
// // // // //       id: 'ipu-cet-sci',
// // // // //       title: 'IPU CET',
// // // // //       description: 'For admission to UG engineering & science courses in IP University, Delhi.',
// // // // //       totalMcqs: '55,000+',
// // // // //       totalTests: '180+',
// // // // //       buttonText: 'Explore IPU CET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M20 70 L50 30 L80 70 Z" fill="#059669" />
// // // // //           <circle cx="50" cy="55" r="10" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //   ],

// // // // //   commerce: [
// // // // //     {
// // // // //       id: 'cuet-comm',
// // // // //       title: 'CUET UG (Commerce)',
// // // // //       description: 'For admission to B.Com (Hons) and other commerce programs in central universities.',
// // // // //       totalMcqs: '40,000+',
// // // // //       totalTests: '200+',
// // // // //       buttonText: 'Explore CUET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M20 45 L50 30 L80 45 L50 60 Z" fill="#059669" />
// // // // //           <path d="M30 52 L30 68 C30 68 50 78 70 68 L70 52" fill="none" stroke="#047857" strokeWidth="4" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'ca-foundation',
// // // // //       title: 'CA Foundation',
// // // // //       description: 'For admission to Chartered Accountancy course by ICAI.',
// // // // //       totalMcqs: '20,000+',
// // // // //       totalTests: '100+',
// // // // //       buttonText: 'Explore CA',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <text x="50" y="62" fill="#047857" fontSize="32" fontWidth="bold" textAnchor="middle" fontFamily="sans-serif">CA</text>
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'cseet',
// // // // //       title: 'CS Executive Entrance (CSEET)',
// // // // //       description: 'For admission to Company Secretary Executive Programme.',
// // // // //       totalMcqs: '15,000+',
// // // // //       totalTests: '80+',
// // // // //       buttonText: 'Explore CSEET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <text x="50" y="62" fill="#065F46" fontSize="30" fontWidth="bold" textAnchor="middle" fontFamily="sans-serif">CS</text>
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'ipmat-comm',
// // // // //       title: 'IPMAT (IIM Indore)',
// // // // //       description: 'For Integrated Program in Management Aptitude Test at IIM Indore.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       buttonText: 'Explore IPMAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M25 70 L42 50 L58 60 L75 30" fill="none" stroke="#10B981" strokeWidth="6" strokeLinecap="round" />
// // // // //           <polygon points="75,25 82,35 70,35" fill="#10B981" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'npat',
// // // // //       title: 'NPAT',
// // // // //       description: 'For admission to BBA program at NMIMS Mumbai.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       buttonText: 'Explore NPAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <circle cx="50" cy="50" r="22" fill="#059669" />
// // // // //           <path d="M50 35 L50 65 M35 50 L65 50" stroke="#FFFFFF" strokeWidth="4" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'set-comm',
// // // // //       title: 'SET (Symbiosis)',
// // // // //       description: 'For admission to BBA/B.Com programs in Symbiosis University.',
// // // // //       totalMcqs: '12,000+',
// // // // //       totalTests: '60+',
// // // // //       buttonText: 'Explore SET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M30 35 C30 35 45 25 50 40 C55 55 70 45 70 65" fill="none" stroke="#047857" strokeWidth="6" strokeLinecap="round" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //   ],

// // // // //   arts: [
// // // // //     {
// // // // //       id: 'cuet-arts',
// // // // //       title: 'CUET UG (Arts)',
// // // // //       description: 'For admission to undergraduate programs in central universities across India.',
// // // // //       totalMcqs: '40,000+',
// // // // //       totalTests: '200+',
// // // // //       buttonText: 'Explore CUET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M25 70 L25 45 L50 30 L75 45 L75 70 Z" fill="#7E22CE" />
// // // // //           <rect x="42" y="52" width="16" height="18" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'clat-arts',
// // // // //       title: 'CLAT UG',
// // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) in top NLUs.',
// // // // //       totalMcqs: '25,000+',
// // // // //       totalTests: '120+',
// // // // //       buttonText: 'Explore CLAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M50 25 L50 65 M30 35 L70 35 M20 50 L40 50 M60 50 L80 50" stroke="#6B21A8" strokeWidth="5" strokeLinecap="round" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'ipu-cet-law',
// // // // //       title: 'IPU CET (B.A. LLB)',
// // // // //       description: 'For admission to BA LLB program in GGSIP University and its colleges.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       buttonText: 'Explore IPU CET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M20 70 L50 30 L80 70 Z" fill="#9333EA" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'nata-arts',
// // // // //       title: 'NATA',
// // // // //       description: 'For admission to 5-Year B.Arch program in architecture colleges.',
// // // // //       totalMcqs: '18,000+',
// // // // //       totalTests: '80+',
// // // // //       buttonText: 'Explore NATA',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <rect x="30" y="30" width="40" height="40" fill="none" stroke="#7E22CE" strokeWidth="4" />
// // // // //           <line x1="30" y1="30" x2="70" y2="70" stroke="#7E22CE" strokeWidth="3" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'ailet',
// // // // //       title: 'AILET (BA LLB)',
// // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) in NLU Delhi.',
// // // // //       totalMcqs: '15,000+',
// // // // //       totalTests: '70+',
// // // // //       buttonText: 'Explore AILET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M35 30 L65 30 L65 70 L35 70 Z" fill="#A855F7" />
// // // // //           <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'lsat',
// // // // //       title: 'LSAT India',
// // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) programs.',
// // // // //       totalMcqs: '12,000+',
// // // // //       totalTests: '60+',
// // // // //       buttonText: 'Explore LSAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M25 30 L75 30 L75 70 L25 70 Z" fill="#6B21A8" />
// // // // //           <line x1="50" y1="30" x2="50" y2="70" stroke="#FFFFFF" strokeWidth="3" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //   ]
// // // // // };

// // // // // // Color theme styles
// // // // // const themeStyles = {
// // // // //   blue: {
// // // // //     badgeBg: 'bg-blue-50',
// // // // //     iconColor: 'text-blue-600',
// // // // //     buttonBorder: 'border-blue-200 text-blue-600 hover:bg-blue-50',
// // // // //   },
// // // // //   emerald: {
// // // // //     badgeBg: 'bg-emerald-50',
// // // // //     iconColor: 'text-emerald-600',
// // // // //     buttonBorder: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
// // // // //   },
// // // // //   purple: {
// // // // //     badgeBg: 'bg-purple-50',
// // // // //     iconColor: 'text-purple-600',
// // // // //     buttonBorder: 'border-purple-200 text-purple-600 hover:bg-purple-50',
// // // // //   },
// // // // //   orange: {
// // // // //     badgeBg: 'bg-orange-50',
// // // // //     iconColor: 'text-orange-600',
// // // // //     buttonBorder: 'border-orange-200 text-orange-600 hover:bg-orange-50',
// // // // //   },
// // // // // };

// // // // // export const ExploreExams: React.FC = () => {
// // // // //   // Active Tab State (default 'science')
// // // // //   const [activeStream, setActiveStream] = useState<Stream>('science');

// // // // //   // Active Stream Exams
// // // // //   const currentExams = streamExamsData[activeStream];

// // // // //   return (
// // // // //     <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-slate-50/50">
// // // // //       {/* --- Section Header --- */}
// // // // //       <div className="text-center mb-8">
// // // // //         <div className="inline-flex items-center gap-2 mb-2">
// // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // //           <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
// // // // //             Your Future Starts Here
// // // // //           </span>
// // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // //         </div>
// // // // //         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // // // //           Explore Exams <span className="text-orange-500">After 12th</span>
// // // // //         </h2>
// // // // //         <p className="text-slate-500 mt-2 text-sm md:text-base">
// // // // //           Find the right exam for your dream college and career.
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* --- Stream Selection Tabs --- */}
// // // // //       <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
// // // // //         {streams.map((stream) => {
// // // // //           const isActive = activeStream === stream.id;
// // // // //           return (
// // // // //             <button
// // // // //               key={stream.id}
// // // // //               onClick={() => setActiveStream(stream.id)}
// // // // //               className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
// // // // //                 isActive 
// // // // //                   ? `${stream.activeColor} border-2 font-bold shadow-md` 
// // // // //                   : 'border-slate-200 text-slate-700 hover:border-slate-300'
// // // // //               }`}
// // // // //             >
// // // // //               <div className="p-1 bg-slate-100 rounded-lg">{stream.icon}</div>
// // // // //               <span className="text-sm md:text-base">{stream.label}</span>
// // // // //               <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
// // // // //             </button>
// // // // //           );
// // // // //         })}
// // // // //       </div>

// // // // //       {/* --- Exam Cards Grid --- */}
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //         {currentExams.map((exam) => {
// // // // //           const theme = themeStyles[exam.themeColor];

// // // // //           return (
// // // // //             <div
// // // // //               key={exam.id}
// // // // //               className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
// // // // //             >
// // // // //               <div>
// // // // //                 {/* Top Section: Graphic & Details */}
// // // // //                 <div className="flex items-start gap-4 mb-4">
// // // // //                   <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-1">
// // // // //                     {exam.svgIcon ? (
// // // // //                       exam.svgIcon
// // // // //                     ) : (
// // // // //                       <img
// // // // //                         src={exam.imageUrl}
// // // // //                         alt={exam.title}
// // // // //                         className="w-full h-full object-contain"
// // // // //                       />
// // // // //                     )}
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug">
// // // // //                       {exam.title}
// // // // //                     </h3>
// // // // //                     <p className="text-xs text-slate-500 mt-1 line-clamp-2">
// // // // //                       {exam.description}
// // // // //                     </p>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Metrics Badges */}
// // // // //                 <div className="grid grid-cols-2 gap-2 my-4">
// // // // //                   {/* Total MCQs */}
// // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // //                     <BookOpen className={`w-4 h-4 ${theme.iconColor}`} />
// // // // //                     <div>
// // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total MCQs</p>
// // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalMcqs}</p>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   {/* Total Tests */}
// // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // //                     <FileCheck2 className={`w-4 h-4 ${theme.iconColor}`} />
// // // // //                     <div>
// // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total Tests</p>
// // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalTests}</p>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Action Button */}
// // // // //               <button
// // // // //                 className={`w-full mt-2 py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors ${theme.buttonBorder}`}
// // // // //               >
// // // // //                 <span>{exam.buttonText}</span>
// // // // //                 <ArrowRight className="w-4 h-4" />
// // // // //               </button>
// // // // //             </div>
// // // // //           );
// // // // //         })}
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default ExploreExams;



// // // // // // import React, { useState } from 'react';
// // // // // // import { 
// // // // // //   FlaskConical, 
// // // // // //   TrendingUp, 
// // // // // //   Palette, 
// // // // // //   BookOpen, 
// // // // // //   FileCheck2, 
// // // // // //   ArrowRight,
// // // // // //   ChevronRight
// // // // // // } from 'lucide-react';

// // // // // // // Stream Types
// // // // // // type Stream = 'science' | 'commerce' | 'arts';

// // // // // // interface StreamOption {
// // // // // //   id: Stream;
// // // // // //   label: string;
// // // // // //   icon: React.ReactNode;
// // // // // //   activeColor: string;
// // // // // // }

// // // // // // const streams: StreamOption[] = [
// // // // // //   {
// // // // // //     id: 'science',
// // // // // //     label: 'After 12th Science',
// // // // // //     icon: <FlaskConical className="w-5 h-5 text-blue-600" />,
// // // // // //     activeColor: 'border-blue-600 text-blue-600 bg-blue-50/50',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'commerce',
// // // // // //     label: 'After 12th Commerce',
// // // // // //     icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
// // // // // //     activeColor: 'border-emerald-600 text-emerald-600 bg-emerald-50/50',
// // // // // //   },
// // // // // //   {
// // // // // //     id: 'arts',
// // // // // //     label: 'After 12th Arts',
// // // // // //     icon: <Palette className="w-5 h-5 text-purple-600" />,
// // // // // //     activeColor: 'border-purple-600 text-purple-600 bg-purple-50/50',
// // // // // //   },
// // // // // // ];

// // // // // // interface ExamCardData {
// // // // // //   id: string;
// // // // // //   title: string;
// // // // // //   description: string;
// // // // // //   totalMcqs: string;
// // // // // //   totalTests: string;
// // // // // //   buttonText: string;
// // // // // //   imageUrl?: string;
// // // // // //   svgIcon?: React.ReactNode;
// // // // // //   themeColor: 'blue' | 'emerald' | 'purple' | 'orange';
// // // // // // }

// // // // // // // ----------------------------------------------------
// // // // // // // DYNAMIC DATA FOR SCIENCE, COMMERCE & ARTS
// // // // // // // ----------------------------------------------------
// // // // // // const streamExamsData: Record<Stream, ExamCardData[]> = {
// // // // // //   science: [
// // // // // //     {
// // // // // //       id: 'jee',
// // // // // //       title: 'JEE (Main & Advanced)',
// // // // // //       description: 'For admission to IITs, NITs, IIITs & other top engineering colleges.',
// // // // // //       totalMcqs: '1,25,000+',
// // // // // //       totalTests: '450+',
// // // // // //       buttonText: 'Explore JEE',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#E0F2FE" />
// // // // // //           <path d="M30 40 L70 40 L70 70 L30 70 Z" fill="#0284C7" />
// // // // // //           <circle cx="50" cy="30" r="12" fill="#38BDF8" />
// // // // // //           <path d="M20 75 L80 75" stroke="#0369A1" strokeWidth="4" strokeLinecap="round" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'blue',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'neet',
// // // // // //       title: 'NEET UG',
// // // // // //       description: 'For admission to MBBS, BDS, AYUSH & other medical courses.',
// // // // // //       totalMcqs: '1,10,000+',
// // // // // //       totalTests: '380+',
// // // // // //       buttonText: 'Explore NEET',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // // //           <path d="M50 30 C30 10 10 35 50 75 C90 35 70 10 50 30 Z" fill="#10B981" />
// // // // // //           <path d="M35 50 L65 50 M50 35 L50 65" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'cuet-sci',
// // // // // //       title: 'CUET UG (Science)',
// // // // // //       description: 'For admission to Central Universities and top science programs across India.',
// // // // // //       totalMcqs: '95,000+',
// // // // // //       totalTests: '320+',
// // // // // //       buttonText: 'Explore CUET',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // // //           <path d="M20 45 L50 30 L80 45 L50 60 Z" fill="#9333EA" />
// // // // // //           <path d="M30 52 L30 68 C30 68 50 78 70 68 L70 52" fill="none" stroke="#7E22CE" strokeWidth="4" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'viteee',
// // // // // //       title: 'VITEEE',
// // // // // //       description: 'For admission to VIT campuses across India.',
// // // // // //       totalMcqs: '65,000+',
// // // // // //       totalTests: '230+',
// // // // // //       buttonText: 'Explore VITEEE',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#E0F2FE" />
// // // // // //           <path d="M25 70 L25 40 L50 25 L75 40 L75 70 Z" fill="#0284C7" />
// // // // // //           <rect x="40" y="50" width="20" height="20" fill="#FFFFFF" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'blue',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'bitsat',
// // // // // //       title: 'BITSAT',
// // // // // //       description: 'For admission to BITS Pilani campuses in Goa, Hyderabad & Pilani.',
// // // // // //       totalMcqs: '45,000+',
// // // // // //       totalTests: '160+',
// // // // // //       buttonText: 'Explore BITSAT',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#FFEDD5" />
// // // // // //           <path d="M30 75 L30 45 L50 25 L70 45 L70 75 Z" fill="#EA580C" />
// // // // // //           <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'orange',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'ipu-cet-sci',
// // // // // //       title: 'IPU CET',
// // // // // //       description: 'For admission to UG engineering & science courses in IP University, Delhi.',
// // // // // //       totalMcqs: '55,000+',
// // // // // //       totalTests: '180+',
// // // // // //       buttonText: 'Explore IPU CET',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // // //           <path d="M20 70 L50 30 L80 70 Z" fill="#059669" />
// // // // // //           <circle cx="50" cy="55" r="10" fill="#FFFFFF" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //   ],

// // // // // //   commerce: [
// // // // // //     {
// // // // // //       id: 'cuet-comm',
// // // // // //       title: 'CUET UG (Commerce)',
// // // // // //       description: 'For admission to B.Com (Hons) and other commerce programs in central universities.',
// // // // // //       totalMcqs: '40,000+',
// // // // // //       totalTests: '200+',
// // // // // //       buttonText: 'Explore CUET',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // // //           <path d="M20 45 L50 30 L80 45 L50 60 Z" fill="#059669" />
// // // // // //           <path d="M30 52 L30 68 C30 68 50 78 70 68 L70 52" fill="none" stroke="#047857" strokeWidth="4" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'ca-foundation',
// // // // // //       title: 'CA Foundation',
// // // // // //       description: 'For admission to Chartered Accountancy course by ICAI.',
// // // // // //       totalMcqs: '20,000+',
// // // // // //       totalTests: '100+',
// // // // // //       buttonText: 'Explore CA',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // // //           <text x="50" y="62" fill="#047857" fontSize="32" fontWidth="bold" textAnchor="middle" fontFamily="sans-serif">CA</text>
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'cseet',
// // // // // //       title: 'CS Executive Entrance (CSEET)',
// // // // // //       description: 'For admission to Company Secretary Executive Programme.',
// // // // // //       totalMcqs: '15,000+',
// // // // // //       totalTests: '80+',
// // // // // //       buttonText: 'Explore CSEET',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // // //           <text x="50" y="62" fill="#065F46" fontSize="30" fontWidth="bold" textAnchor="middle" fontFamily="sans-serif">CS</text>
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'ipmat-comm',
// // // // // //       title: 'IPMAT (IIM Indore)',
// // // // // //       description: 'For Integrated Program in Management Aptitude Test at IIM Indore.',
// // // // // //       totalMcqs: '10,000+',
// // // // // //       totalTests: '50+',
// // // // // //       buttonText: 'Explore IPMAT',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // // //           <path d="M25 70 L42 50 L58 60 L75 30" fill="none" stroke="#10B981" strokeWidth="6" strokeLinecap="round" />
// // // // // //           <polygon points="75,25 82,35 70,35" fill="#10B981" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'npat',
// // // // // //       title: 'NPAT',
// // // // // //       description: 'For admission to BBA program at NMIMS Mumbai.',
// // // // // //       totalMcqs: '10,000+',
// // // // // //       totalTests: '50+',
// // // // // //       buttonText: 'Explore NPAT',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // // //           <circle cx="50" cy="50" r="22" fill="#059669" />
// // // // // //           <path d="M50 35 L50 65 M35 50 L65 50" stroke="#FFFFFF" strokeWidth="4" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'set-comm',
// // // // // //       title: 'SET (Symbiosis)',
// // // // // //       description: 'For admission to BBA/B.Com programs in Symbiosis University.',
// // // // // //       totalMcqs: '12,000+',
// // // // // //       totalTests: '60+',
// // // // // //       buttonText: 'Explore SET',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // // //           <path d="M30 35 C30 35 45 25 50 40 C55 55 70 45 70 65" fill="none" stroke="#047857" strokeWidth="6" strokeLinecap="round" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'emerald',
// // // // // //     },
// // // // // //   ],

// // // // // //   arts: [
// // // // // //     {
// // // // // //       id: 'cuet-arts',
// // // // // //       title: 'CUET UG (Arts)',
// // // // // //       description: 'For admission to undergraduate programs in central universities across India.',
// // // // // //       totalMcqs: '40,000+',
// // // // // //       totalTests: '200+',
// // // // // //       buttonText: 'Explore CUET',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // // //           <path d="M25 70 L25 45 L50 30 L75 45 L75 70 Z" fill="#7E22CE" />
// // // // // //           <rect x="42" y="52" width="16" height="18" fill="#FFFFFF" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'clat-arts',
// // // // // //       title: 'CLAT UG',
// // // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) in top NLUs.',
// // // // // //       totalMcqs: '25,000+',
// // // // // //       totalTests: '120+',
// // // // // //       buttonText: 'Explore CLAT',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // // //           <path d="M50 25 L50 65 M30 35 L70 35 M20 50 L40 50 M60 50 L80 50" stroke="#6B21A8" strokeWidth="5" strokeLinecap="round" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'ipu-cet-law',
// // // // // //       title: 'IPU CET (B.A. LLB)',
// // // // // //       description: 'For admission to BA LLB program in GGSIP University and its colleges.',
// // // // // //       totalMcqs: '10,000+',
// // // // // //       totalTests: '50+',
// // // // // //       buttonText: 'Explore IPU CET',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // // //           <path d="M20 70 L50 30 L80 70 Z" fill="#9333EA" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'nata-arts',
// // // // // //       title: 'NATA',
// // // // // //       description: 'For admission to 5-Year B.Arch program in architecture colleges.',
// // // // // //       totalMcqs: '18,000+',
// // // // // //       totalTests: '80+',
// // // // // //       buttonText: 'Explore NATA',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // // //           <rect x="30" y="30" width="40" height="40" fill="none" stroke="#7E22CE" strokeWidth="4" />
// // // // // //           <line x1="30" y1="30" x2="70" y2="70" stroke="#7E22CE" strokeWidth="3" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'ailet',
// // // // // //       title: 'AILET (BA LLB)',
// // // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) in NLU Delhi.',
// // // // // //       totalMcqs: '15,000+',
// // // // // //       totalTests: '70+',
// // // // // //       buttonText: 'Explore AILET',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // // //           <path d="M35 30 L65 30 L65 70 L35 70 Z" fill="#A855F7" />
// // // // // //           <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //     {
// // // // // //       id: 'lsat',
// // // // // //       title: 'LSAT India',
// // // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) programs.',
// // // // // //       totalMcqs: '12,000+',
// // // // // //       totalTests: '60+',
// // // // // //       buttonText: 'Explore LSAT',
// // // // // //       svgIcon: (
// // // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // // //           <path d="M25 30 L75 30 L75 70 L25 70 Z" fill="#6B21A8" />
// // // // // //           <line x1="50" y1="30" x2="50" y2="70" stroke="#FFFFFF" strokeWidth="3" />
// // // // // //         </svg>
// // // // // //       ),
// // // // // //       themeColor: 'purple',
// // // // // //     },
// // // // // //   ]
// // // // // // };

// // // // // // // Color theme styles
// // // // // // const themeStyles = {
// // // // // //   blue: {
// // // // // //     badgeBg: 'bg-blue-50',
// // // // // //     iconColor: 'text-blue-600',
// // // // // //     buttonBorder: 'border-blue-200 text-blue-600 hover:bg-blue-50',
// // // // // //   },
// // // // // //   emerald: {
// // // // // //     badgeBg: 'bg-emerald-50',
// // // // // //     iconColor: 'text-emerald-600',
// // // // // //     buttonBorder: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
// // // // // //   },
// // // // // //   purple: {
// // // // // //     badgeBg: 'bg-purple-50',
// // // // // //     iconColor: 'text-purple-600',
// // // // // //     buttonBorder: 'border-purple-200 text-purple-600 hover:bg-purple-50',
// // // // // //   },
// // // // // //   orange: {
// // // // // //     badgeBg: 'bg-orange-50',
// // // // // //     iconColor: 'text-orange-600',
// // // // // //     buttonBorder: 'border-orange-200 text-orange-600 hover:bg-orange-50',
// // // // // //   },
// // // // // // };

// // // // // // export const ExploreExams: React.FC = () => {
// // // // // //   // Active Tab State (default 'science')
// // // // // //   const [activeStream, setActiveStream] = useState<Stream>('science');

// // // // // //   // Active Stream Exams
// // // // // //   const currentExams = streamExamsData[activeStream];

// // // // // //   return (
// // // // // //     <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-slate-50/50">
// // // // // //       {/* --- Section Header --- */}
// // // // // //       <div className="text-center mb-8">
// // // // // //         <div className="inline-flex items-center gap-2 mb-2">
// // // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // // //           <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
// // // // // //             Your Future Starts Here
// // // // // //           </span>
// // // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // // //         </div>
// // // // // //         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // // // // //           Explore Exams <span className="text-orange-500">After 12th</span>
// // // // // //         </h2>
// // // // // //         <p className="text-slate-500 mt-2 text-sm md:text-base">
// // // // // //           Find the right exam for your dream college and career.
// // // // // //         </p>
// // // // // //       </div>

// // // // // //       {/* --- Stream Selection Tabs --- */}
// // // // // //       <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
// // // // // //         {streams.map((stream) => {
// // // // // //           const isActive = activeStream === stream.id;
// // // // // //           return (
// // // // // //             <button
// // // // // //               key={stream.id}
// // // // // //               onClick={() => setActiveStream(stream.id)}
// // // // // //               className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
// // // // // //                 isActive 
// // // // // //                   ? `${stream.activeColor} border-2 font-bold shadow-md` 
// // // // // //                   : 'border-slate-200 text-slate-700 hover:border-slate-300'
// // // // // //               }`}
// // // // // //             >
// // // // // //               <div className="p-1 bg-slate-100 rounded-lg">{stream.icon}</div>
// // // // // //               <span className="text-sm md:text-base">{stream.label}</span>
// // // // // //               <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
// // // // // //             </button>
// // // // // //           );
// // // // // //         })}
// // // // // //       </div>

// // // // // //       {/* --- Exam Cards Grid --- */}
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //         {currentExams.map((exam) => {
// // // // // //           const theme = themeStyles[exam.themeColor];

// // // // // //           return (
// // // // // //             <div
// // // // // //               key={exam.id}
// // // // // //               className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
// // // // // //             >
// // // // // //               <div>
// // // // // //                 {/* Top Section: Graphic & Details */}
// // // // // //                 <div className="flex items-start gap-4 mb-4">
// // // // // //                   <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-1">
// // // // // //                     {exam.svgIcon ? (
// // // // // //                       exam.svgIcon
// // // // // //                     ) : (
// // // // // //                       <img
// // // // // //                         src={exam.imageUrl}
// // // // // //                         alt={exam.title}
// // // // // //                         className="w-full h-full object-contain"
// // // // // //                       />
// // // // // //                     )}
// // // // // //                   </div>
// // // // // //                   <div>
// // // // // //                     <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug">
// // // // // //                       {exam.title}
// // // // // //                     </h3>
// // // // // //                     <p className="text-xs text-slate-500 mt-1 line-clamp-2">
// // // // // //                       {exam.description}
// // // // // //                     </p>
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 {/* Metrics Badges */}
// // // // // //                 <div className="grid grid-cols-2 gap-2 my-4">
// // // // // //                   {/* Total MCQs */}
// // // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // // //                     <BookOpen className={`w-4 h-4 ${theme.iconColor}`} />
// // // // // //                     <div>
// // // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total MCQs</p>
// // // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalMcqs}</p>
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   {/* Total Tests */}
// // // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // // //                     <FileCheck2 className={`w-4 h-4 ${theme.iconColor}`} />
// // // // // //                     <div>
// // // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total Tests</p>
// // // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalTests}</p>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Action Button */}
// // // // // //               <button
// // // // // //                 className={`w-full mt-2 py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors ${theme.buttonBorder}`}
// // // // // //               >
// // // // // //                 <span>{exam.buttonText}</span>
// // // // // //                 <ArrowRight className="w-4 h-4" />
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           );
// // // // // //         })}
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default ExploreExams;



// // // // // import React, { useState } from 'react';
// // // // // import { 
// // // // //   FlaskConical, 
// // // // //   TrendingUp, 
// // // // //   Palette, 
// // // // //   BookOpen, 
// // // // //   FileCheck2, 
// // // // //   ChevronRight,
// // // // //   GraduationCap,
// // // // //   Sparkles,
// // // // //   LineChart,
// // // // //   UserCheck,
// // // // //   FileText
// // // // // } from 'lucide-react';

// // // // // // Stream Types
// // // // // type Stream = 'science' | 'commerce' | 'arts';

// // // // // interface StreamOption {
// // // // //   id: Stream;
// // // // //   label: string;
// // // // //   icon: React.ReactNode;
// // // // //   activeColor: string;
// // // // // }

// // // // // const streams: StreamOption[] = [
// // // // //   {
// // // // //     id: 'science',
// // // // //     label: 'After 12th Science',
// // // // //     icon: <FlaskConical className="w-5 h-5 text-blue-600" />,
// // // // //     activeColor: 'border-blue-600 text-blue-600 bg-blue-50/50',
// // // // //   },
// // // // //   {
// // // // //     id: 'commerce',
// // // // //     label: 'After 12th Commerce',
// // // // //     icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
// // // // //     activeColor: 'border-emerald-600 text-emerald-600 bg-emerald-50/50',
// // // // //   },
// // // // //   {
// // // // //     id: 'arts',
// // // // //     label: 'After 12th Arts',
// // // // //     icon: <Palette className="w-5 h-5 text-purple-600" />,
// // // // //     activeColor: 'border-purple-600 text-purple-600 bg-purple-50/50',
// // // // //   },
// // // // // ];

// // // // // interface ExamCardData {
// // // // //   id: string;
// // // // //   title: string;
// // // // //   description: string;
// // // // //   totalMcqs: string;
// // // // //   totalTests: string;
// // // // //   logo: React.ReactNode;
// // // // // }

// // // // // interface StreamStats {
// // // // //   totalExams: string;
// // // // //   totalMcqs: string;
// // // // //   totalTests: string;
// // // // //   themeColor: 'blue' | 'emerald' | 'purple';
// // // // // }

// // // // // // Stats summary for each stream
// // // // // const streamStatsData: Record<Stream, StreamStats> = {
// // // // //   science: {
// // // // //     totalExams: '15',
// // // // //     totalMcqs: '2,25,000+',
// // // // //     totalTests: '1,050+',
// // // // //     themeColor: 'blue',
// // // // //   },
// // // // //   commerce: {
// // // // //     totalExams: '16',
// // // // //     totalMcqs: '2,40,000+',
// // // // //     totalTests: '1,100+',
// // // // //     themeColor: 'emerald',
// // // // //   },
// // // // //   arts: {
// // // // //     totalExams: '15',
// // // // //     totalMcqs: '2,10,000+',
// // // // //     totalTests: '950+',
// // // // //     themeColor: 'purple',
// // // // //   },
// // // // // };

// // // // // // Custom SVG Logos to match the Commerce Image exact icons
// // // // // const CommerceLogos = {
// // // // //   cuet: (
// // // // //     <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center p-2">
// // // // //       <GraduationCap className="w-10 h-10 text-amber-600" />
// // // // //     </div>
// // // // //   ),
// // // // //   ca: (
// // // // //     <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center font-black text-2xl text-blue-900 tracking-tighter">
// // // // //       C<span className="text-red-600">A</span>
// // // // //     </div>
// // // // //   ),
// // // // //   cs: (
// // // // //     <div className="w-14 h-14 rounded-2xl bg-blue-950 flex items-center justify-center font-black text-2xl text-white tracking-tighter">
// // // // //       CS
// // // // //     </div>
// // // // //   ),
// // // // //   ipmat: (
// // // // //     <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center">
// // // // //       <TrendingUp className="w-10 h-10 text-emerald-600" />
// // // // //     </div>
// // // // //   ),
// // // // //   npat: (
// // // // //     <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center p-2">
// // // // //       <div className="w-8 h-8 rotate-45 bg-teal-500 rounded-lg"></div>
// // // // //     </div>
// // // // //   ),
// // // // //   set: (
// // // // //     <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center font-black text-white text-xs text-center p-1">
// // // // //       SET
// // // // //     </div>
// // // // //   ),
// // // // //   dujat: (
// // // // //     <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
// // // // //       <span className="text-2xl">🏛️</span>
// // // // //     </div>
// // // // //   ),
// // // // //   mhtcet: (
// // // // //     <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center">
// // // // //       <FileText className="w-8 h-8 text-amber-600" />
// // // // //     </div>
// // // // //   ),
// // // // //   atma: (
// // // // //     <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center font-bold text-blue-800 text-xs">
// // // // //       ATMA
// // // // //     </div>
// // // // //   ),
// // // // //   xat: (
// // // // //     <div className="w-14 h-14 rounded-2xl bg-blue-900 flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
// // // // //       XLRI<br/>XAT
// // // // //     </div>
// // // // //   ),
// // // // //   mat: (
// // // // //     <div className="w-14 h-14 rounded-2xl bg-slate-200 flex items-center justify-center font-extrabold text-slate-800 text-sm">
// // // // //       MAT
// // // // //     </div>
// // // // //   ),
// // // // //   cmat: (
// // // // //     <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center font-black text-white text-xs">
// // // // //       CMAT
// // // // //     </div>
// // // // //   ),
// // // // // };

// // // // // // Full Exam Cards Data for Commerce & Other Streams
// // // // // const streamExamsData: Record<Stream, ExamCardData[]> = {
// // // // //   commerce: [
// // // // //     {
// // // // //       id: 'cuet-comm',
// // // // //       title: 'CUET UG (Commerce)',
// // // // //       description: 'For admission to B.Com (Hons) and other commerce programs in central universities.',
// // // // //       totalMcqs: '40,000+',
// // // // //       totalTests: '200+',
// // // // //       logo: CommerceLogos.cuet,
// // // // //     },
// // // // //     {
// // // // //       id: 'ca-foundation',
// // // // //       title: 'CA Foundation',
// // // // //       description: 'For admission to Chartered Accountancy course by ICAI.',
// // // // //       totalMcqs: '20,000+',
// // // // //       totalTests: '100+',
// // // // //       logo: CommerceLogos.ca,
// // // // //     },
// // // // //     {
// // // // //       id: 'cseet',
// // // // //       title: 'CS Executive Entrance (CSEET)',
// // // // //       description: 'For admission to Company Secretary Executive Programme.',
// // // // //       totalMcqs: '15,000+',
// // // // //       totalTests: '80+',
// // // // //       logo: CommerceLogos.cs,
// // // // //     },
// // // // //     {
// // // // //       id: 'ipmat-comm',
// // // // //       title: 'IPMAT (IIM Indore)',
// // // // //       description: 'For Integrated Program in Management Aptitude Test at IIM Indore.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       logo: CommerceLogos.ipmat,
// // // // //     },
// // // // //     {
// // // // //       id: 'npat',
// // // // //       title: 'NPAT',
// // // // //       description: 'For admission to BBA program at NMIMS Mumbai.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       logo: CommerceLogos.npat,
// // // // //     },
// // // // //     {
// // // // //       id: 'set-comm',
// // // // //       title: 'SET (Symbiosis)',
// // // // //       description: 'For admission to BBA/B.Com programs in Symbiosis University.',
// // // // //       totalMcqs: '12,000+',
// // // // //       totalTests: '60+',
// // // // //       logo: CommerceLogos.set,
// // // // //     },
// // // // //     {
// // // // //       id: 'dujat-comm',
// // // // //       title: 'DU JAT (Commerce)',
// // // // //       description: 'For admission to B.Com (Hons) and other commerce programs in DU.',
// // // // //       totalMcqs: '12,000+',
// // // // //       totalTests: '60+',
// // // // //       logo: CommerceLogos.dujat,
// // // // //     },
// // // // //     {
// // // // //       id: 'mhtcet-comm',
// // // // //       title: 'MHT CET (Commerce)',
// // // // //       description: 'For admission to BBA/BMS and other commerce courses in Maharashtra.',
// // // // //       totalMcqs: '15,000+',
// // // // //       totalTests: '70+',
// // // // //       logo: CommerceLogos.mhtcet,
// // // // //     },
// // // // //     {
// // // // //       id: 'atma',
// // // // //       title: 'ATMA',
// // // // //       description: 'For admission to MBA/MCA programs in ATMA member institutes.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       logo: CommerceLogos.atma,
// // // // //     },
// // // // //     {
// // // // //       id: 'xat',
// // // // //       title: 'XAT',
// // // // //       description: 'For admission to MBA/PGDM programs in XLRI and other top institutions.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       logo: CommerceLogos.xat,
// // // // //     },
// // // // //     {
// // // // //       id: 'mat',
// // // // //       title: 'MAT',
// // // // //       description: 'For admission to MBA/PGDM courses across India.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       logo: CommerceLogos.mat,
// // // // //     },
// // // // //     {
// // // // //       id: 'cmat',
// // // // //       title: 'CMAT',
// // // // //       description: 'For admission to MBA/PGDM programs in AICTE approved institutes.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       logo: CommerceLogos.cmat,
// // // // //     },
// // // // //   ],

// // // // //   science: [
// // // // //     {
// // // // //       id: 'jee',
// // // // //       title: 'JEE (Main & Advanced)',
// // // // //       description: 'For admission to IITs, NITs, IIITs & other top engineering colleges.',
// // // // //       totalMcqs: '1,25,000+',
// // // // //       totalTests: '450+',
// // // // //       logo: <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-bold">JEE</div>,
// // // // //     },
// // // // //     {
// // // // //       id: 'neet',
// // // // //       title: 'NEET UG',
// // // // //       description: 'For admission to MBBS, BDS, AYUSH & other medical courses.',
// // // // //       totalMcqs: '1,10,000+',
// // // // //       totalTests: '380+',
// // // // //       logo: <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 font-bold">NEET</div>,
// // // // //     },
// // // // //     {
// // // // //       id: 'cuet-sci',
// // // // //       title: 'CUET UG (Science)',
// // // // //       description: 'For admission to Central Universities across India.',
// // // // //       totalMcqs: '95,000+',
// // // // //       totalTests: '320+',
// // // // //       logo: CommerceLogos.cuet,
// // // // //     },
// // // // //   ],

// // // // //   arts: [
// // // // //     {
// // // // //       id: 'cuet-arts',
// // // // //       title: 'CUET UG (Arts)',
// // // // //       description: 'For admission to undergraduate programs in central universities across India.',
// // // // //       totalMcqs: '40,000+',
// // // // //       totalTests: '200+',
// // // // //       logo: CommerceLogos.cuet,
// // // // //     },
// // // // //     {
// // // // //       id: 'clat-arts',
// // // // //       title: 'CLAT UG',
// // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) in top NLUs.',
// // // // //       totalMcqs: '25,000+',
// // // // //       totalTests: '120+',
// // // // //       logo: <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 font-bold">LAW</div>,
// // // // //     },
// // // // //   ]
// // // // // };

// // // // // // Stream specific color helpers
// // // // // const colorMap = {
// // // // //   blue: {
// // // // //     bg: 'bg-blue-50',
// // // // //     text: 'text-blue-600',
// // // // //     border: 'border-blue-200',
// // // // //     badge: 'bg-blue-100/50 text-blue-700',
// // // // //   },
// // // // //   emerald: {
// // // // //     bg: 'bg-emerald-50/50',
// // // // //     text: 'text-emerald-600',
// // // // //     border: 'border-emerald-200',
// // // // //     badge: 'bg-emerald-50 text-emerald-700',
// // // // //   },
// // // // //   purple: {
// // // // //     bg: 'bg-purple-50',
// // // // //     text: 'text-purple-600',
// // // // //     border: 'border-purple-200',
// // // // //     badge: 'bg-purple-100/50 text-purple-700',
// // // // //   },
// // // // // };

// // // // // export const ExploreExams: React.FC = () => {
// // // // //   const [activeStream, setActiveStream] = useState<Stream>('commerce');

// // // // //   const currentStats = streamStatsData[activeStream];
// // // // //   const currentExams = streamExamsData[activeStream];
// // // // //   const theme = colorMap[currentStats.themeColor];

// // // // //   return (
// // // // //     <section className="w-full max-w-7xl mx-auto px-4 py-10 bg-slate-50/30">
      
// // // // //       {/* --- Section Header --- */}
// // // // //       <div className="text-center mb-8">
// // // // //         <div className="inline-flex items-center gap-2 mb-2">
// // // // //           <span className="h-[2px] w-6 bg-orange-400"></span>
// // // // //           <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
// // // // //             YOUR FUTURE STARTS HERE
// // // // //           </span>
// // // // //           <span className="h-[2px] w-6 bg-orange-400"></span>
// // // // //         </div>
// // // // //         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // // // //           Explore Exams <span className="text-orange-500">After 12th</span>
// // // // //         </h2>
// // // // //         <p className="text-slate-500 mt-2 text-sm md:text-base">
// // // // //           Find the right exam for your dream college and career.
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* --- Stream Selector Buttons --- */}
// // // // //       <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
// // // // //         {streams.map((stream) => {
// // // // //           const isActive = activeStream === stream.id;
// // // // //           return (
// // // // //             <button
// // // // //               key={stream.id}
// // // // //               onClick={() => setActiveStream(stream.id)}
// // // // //               className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
// // // // //                 isActive 
// // // // //                   ? `${stream.activeColor} border-2 font-bold shadow-md` 
// // // // //                   : 'border-slate-200 text-slate-700 hover:border-slate-300'
// // // // //               }`}
// // // // //             >
// // // // //               <div className="p-1 bg-slate-100 rounded-lg">{stream.icon}</div>
// // // // //               <span className="text-sm md:text-base font-semibold">{stream.label}</span>
// // // // //               <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
// // // // //             </button>
// // // // //           );
// // // // //         })}
// // // // //       </div>

// // // // //       {/* --- Top Overall Stats Banner --- */}
// // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
// // // // //         <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-4">
// // // // //           <div className={`p-3 rounded-xl ${theme.bg} ${theme.text}`}>
// // // // //             <BookOpen className="w-6 h-6" />
// // // // //           </div>
// // // // //           <div>
// // // // //             <p className="text-xs text-slate-400 font-medium">Total Exams</p>
// // // // //             <h4 className="text-xl font-bold text-slate-900">{currentStats.totalExams}</h4>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-4">
// // // // //           <div className={`p-3 rounded-xl ${theme.bg} ${theme.text}`}>
// // // // //             <FileText className="w-6 h-6" />
// // // // //           </div>
// // // // //           <div>
// // // // //             <p className="text-xs text-slate-400 font-medium">Total MCQs</p>
// // // // //             <h4 className="text-xl font-bold text-slate-900">{currentStats.totalMcqs}</h4>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-4">
// // // // //           <div className={`p-3 rounded-xl ${theme.bg} ${theme.text}`}>
// // // // //             <FileCheck2 className="w-6 h-6" />
// // // // //           </div>
// // // // //           <div>
// // // // //             <p className="text-xs text-slate-400 font-medium">Total Tests</p>
// // // // //             <h4 className="text-xl font-bold text-slate-900">{currentStats.totalTests}</h4>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* --- Main Exams Grid --- */}
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
// // // // //         {currentExams.map((exam) => (
// // // // //           <div
// // // // //             key={exam.id}
// // // // //             className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
// // // // //           >
// // // // //             <div>
// // // // //               {/* Header: Logo & Title */}
// // // // //               <div className="flex items-start gap-4 mb-3">
// // // // //                 <div className="flex-shrink-0">{exam.logo}</div>
// // // // //                 <div>
// // // // //                   <h3 className="text-base font-bold text-slate-900 leading-snug">
// // // // //                     {exam.title}
// // // // //                   </h3>
// // // // //                   <p className="text-xs text-slate-500 mt-1 line-clamp-2">
// // // // //                     {exam.description}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* MCQs and Tests Split Info */}
// // // // //               <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-4">
// // // // //                 <div>
// // // // //                   <p className="text-[10px] text-slate-400 font-medium">MCQs</p>
// // // // //                   <p className={`text-sm font-bold ${theme.text}`}>{exam.totalMcqs}</p>
// // // // //                 </div>
// // // // //                 <div className="text-right">
// // // // //                   <p className="text-[10px] text-slate-400 font-medium">Tests</p>
// // // // //                   <p className={`text-sm font-bold ${theme.text}`}>{exam.totalTests}</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* --- Bottom Feature Bar --- */}
// // // // //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
// // // // //         <div className="flex items-center gap-3">
// // // // //           <div className={`p-2.5 rounded-xl ${theme.bg} ${theme.text}`}>
// // // // //             <GraduationCap className="w-5 h-5" />
// // // // //           </div>
// // // // //           <div>
// // // // //             <h5 className="text-xs font-bold text-slate-800">Expert Guidance</h5>
// // // // //             <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Learn from top mentors and subject experts.</p>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="flex items-center gap-3">
// // // // //           <div className={`p-2.5 rounded-xl ${theme.bg} ${theme.text}`}>
// // // // //             <Sparkles className="w-5 h-5" />
// // // // //           </div>
// // // // //           <div>
// // // // //             <h5 className="text-xs font-bold text-slate-800">Smart Preparation</h5>
// // // // //             <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Practice with the best questions & tests.</p>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="flex items-center gap-3">
// // // // //           <div className={`p-2.5 rounded-xl ${theme.bg} ${theme.text}`}>
// // // // //             <LineChart className="w-5 h-5" />
// // // // //           </div>
// // // // //           <div>
// // // // //             <h5 className="text-xs font-bold text-slate-800">Track Progress</h5>
// // // // //             <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Analyze performance and improve.</p>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="flex items-center gap-3">
// // // // //           <div className={`p-2.5 rounded-xl ${theme.bg} ${theme.text}`}>
// // // // //             <UserCheck className="w-5 h-5" />
// // // // //           </div>
// // // // //           <div>
// // // // //             <h5 className="text-xs font-bold text-slate-800">Achieve Your Goal</h5>
// // // // //             <p className="text-[11px] text-slate-400 leading-tight mt-0.5">Get into top colleges and build your future.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default ExploreExams;







// // // // // import React, { useState } from 'react';
// // // // // import { 
// // // // //   FlaskConical, 
// // // // //   TrendingUp, 
// // // // //   Palette, 
// // // // //   BookOpen, 
// // // // //   FileCheck2, 
// // // // //   ArrowRight,
// // // // //   ChevronRight
// // // // // } from 'lucide-react';

// // // // // // Stream Types
// // // // // type Stream = 'science' | 'commerce' | 'arts';

// // // // // interface StreamOption {
// // // // //   id: Stream;
// // // // //   label: string;
// // // // //   icon: React.ReactNode;
// // // // //   activeColor: string;
// // // // // }

// // // // // const streams: StreamOption[] = [
// // // // //   {
// // // // //     id: 'science',
// // // // //     label: 'After 12th Science',
// // // // //     icon: <FlaskConical className="w-5 h-5 text-blue-600" />,
// // // // //     activeColor: 'border-blue-600 text-blue-600 bg-blue-50/50',
// // // // //   },
// // // // //   {
// // // // //     id: 'commerce',
// // // // //     label: 'After 12th Commerce',
// // // // //     icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
// // // // //     activeColor: 'border-emerald-600 text-emerald-600 bg-emerald-50/50',
// // // // //   },
// // // // //   {
// // // // //     id: 'arts',
// // // // //     label: 'After 12th Arts',
// // // // //     icon: <Palette className="w-5 h-5 text-purple-600" />,
// // // // //     activeColor: 'border-purple-600 text-purple-600 bg-purple-50/50',
// // // // //   },
// // // // // ];

// // // // // interface ExamCardData {
// // // // //   id: string;
// // // // //   title: string;
// // // // //   description: string;
// // // // //   totalMcqs: string;
// // // // //   totalTests: string;
// // // // //   buttonText: string;
// // // // //   imageUrl?: string;
// // // // //   svgIcon?: React.ReactNode;
// // // // //   themeColor: 'blue' | 'emerald' | 'purple' | 'orange';
// // // // // }

// // // // // // ----------------------------------------------------
// // // // // // DYNAMIC DATA FOR SCIENCE, COMMERCE & ARTS
// // // // // // ----------------------------------------------------
// // // // // const streamExamsData: Record<Stream, ExamCardData[]> = {
// // // // //   science: [
// // // // //     {
// // // // //       id: 'jee',
// // // // //       title: 'JEE (Main & Advanced)',
// // // // //       description: 'For admission to IITs, NITs, IIITs & other top engineering colleges.',
// // // // //       totalMcqs: '1,25,000+',
// // // // //       totalTests: '450+',
// // // // //       buttonText: 'Explore JEE',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#E0F2FE" />
// // // // //           <path d="M30 40 L70 40 L70 70 L30 70 Z" fill="#0284C7" />
// // // // //           <circle cx="50" cy="30" r="12" fill="#38BDF8" />
// // // // //           <path d="M20 75 L80 75" stroke="#0369A1" strokeWidth="4" strokeLinecap="round" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'blue',
// // // // //     },
// // // // //     {
// // // // //       id: 'neet',
// // // // //       title: 'NEET UG',
// // // // //       description: 'For admission to MBBS, BDS, AYUSH & other medical courses.',
// // // // //       totalMcqs: '1,10,000+',
// // // // //       totalTests: '380+',
// // // // //       buttonText: 'Explore NEET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M50 30 C30 10 10 35 50 75 C90 35 70 10 50 30 Z" fill="#10B981" />
// // // // //           <path d="M35 50 L65 50 M50 35 L50 65" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'cuet-sci',
// // // // //       title: 'CUET UG (Science)',
// // // // //       description: 'For admission to Central Universities and top science programs across India.',
// // // // //       totalMcqs: '95,000+',
// // // // //       totalTests: '320+',
// // // // //       buttonText: 'Explore CUET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M20 45 L50 30 L80 45 L50 60 Z" fill="#9333EA" />
// // // // //           <path d="M30 52 L30 68 C30 68 50 78 70 68 L70 52" fill="none" stroke="#7E22CE" strokeWidth="4" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'viteee',
// // // // //       title: 'VITEEE',
// // // // //       description: 'For admission to VIT campuses across India.',
// // // // //       totalMcqs: '65,000+',
// // // // //       totalTests: '230+',
// // // // //       buttonText: 'Explore VITEEE',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#E0F2FE" />
// // // // //           <path d="M25 70 L25 40 L50 25 L75 40 L75 70 Z" fill="#0284C7" />
// // // // //           <rect x="40" y="50" width="20" height="20" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'blue',
// // // // //     },
// // // // //     {
// // // // //       id: 'bitsat',
// // // // //       title: 'BITSAT',
// // // // //       description: 'For admission to BITS Pilani campuses in Goa, Hyderabad & Pilani.',
// // // // //       totalMcqs: '45,000+',
// // // // //       totalTests: '160+',
// // // // //       buttonText: 'Explore BITSAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#FFEDD5" />
// // // // //           <path d="M30 75 L30 45 L50 25 L70 45 L70 75 Z" fill="#EA580C" />
// // // // //           <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'orange',
// // // // //     },
// // // // //     {
// // // // //       id: 'ipu-cet-sci',
// // // // //       title: 'IPU CET',
// // // // //       description: 'For admission to UG engineering & science courses in IP University, Delhi.',
// // // // //       totalMcqs: '55,000+',
// // // // //       totalTests: '180+',
// // // // //       buttonText: 'Explore IPU CET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M20 70 L50 30 L80 70 Z" fill="#059669" />
// // // // //           <circle cx="50" cy="55" r="10" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //   ],

// // // // //   commerce: [
// // // // //     {
// // // // //       id: 'cuet-comm',
// // // // //       title: 'CUET UG (Commerce)',
// // // // //       description: 'For admission to B.Com (Hons) and other commerce programs in central universities.',
// // // // //       totalMcqs: '40,000+',
// // // // //       totalTests: '200+',
// // // // //       buttonText: 'Explore CUET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M20 45 L50 30 L80 45 L50 60 Z" fill="#059669" />
// // // // //           <path d="M30 52 L30 68 C30 68 50 78 70 68 L70 52" fill="none" stroke="#047857" strokeWidth="4" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'ca-foundation',
// // // // //       title: 'CA Foundation',
// // // // //       description: 'For admission to Chartered Accountancy course by ICAI.',
// // // // //       totalMcqs: '20,000+',
// // // // //       totalTests: '100+',
// // // // //       buttonText: 'Explore CA',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <text x="50" y="62" fill="#047857" fontSize="32" fontWidth="bold" textAnchor="middle" fontFamily="sans-serif">CA</text>
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'cseet',
// // // // //       title: 'CS Executive Entrance (CSEET)',
// // // // //       description: 'For admission to Company Secretary Executive Programme.',
// // // // //       totalMcqs: '15,000+',
// // // // //       totalTests: '80+',
// // // // //       buttonText: 'Explore CSEET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <text x="50" y="62" fill="#065F46" fontSize="30" fontWidth="bold" textAnchor="middle" fontFamily="sans-serif">CS</text>
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'ipmat-comm',
// // // // //       title: 'IPMAT (IIM Indore)',
// // // // //       description: 'For Integrated Program in Management Aptitude Test at IIM Indore.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       buttonText: 'Explore IPMAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M25 70 L42 50 L58 60 L75 30" fill="none" stroke="#10B981" strokeWidth="6" strokeLinecap="round" />
// // // // //           <polygon points="75,25 82,35 70,35" fill="#10B981" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'npat',
// // // // //       title: 'NPAT',
// // // // //       description: 'For admission to BBA program at NMIMS Mumbai.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       buttonText: 'Explore NPAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <circle cx="50" cy="50" r="22" fill="#059669" />
// // // // //           <path d="M50 35 L50 65 M35 50 L65 50" stroke="#FFFFFF" strokeWidth="4" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'set-comm',
// // // // //       title: 'SET (Symbiosis)',
// // // // //       description: 'For admission to BBA/B.Com programs in Symbiosis University.',
// // // // //       totalMcqs: '12,000+',
// // // // //       totalTests: '60+',
// // // // //       buttonText: 'Explore SET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M30 35 C30 35 45 25 50 40 C55 55 70 45 70 65" fill="none" stroke="#047857" strokeWidth="6" strokeLinecap="round" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //   ],

// // // // //   arts: [
// // // // //     {
// // // // //       id: 'cuet-arts',
// // // // //       title: 'CUET UG (Arts)',
// // // // //       description: 'For admission to undergraduate programs in central universities across India.',
// // // // //       totalMcqs: '40,000+',
// // // // //       totalTests: '200+',
// // // // //       buttonText: 'Explore CUET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M25 70 L25 45 L50 30 L75 45 L75 70 Z" fill="#7E22CE" />
// // // // //           <rect x="42" y="52" width="16" height="18" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'clat-arts',
// // // // //       title: 'CLAT UG',
// // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) in top NLUs.',
// // // // //       totalMcqs: '25,000+',
// // // // //       totalTests: '120+',
// // // // //       buttonText: 'Explore CLAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M50 25 L50 65 M30 35 L70 35 M20 50 L40 50 M60 50 L80 50" stroke="#6B21A8" strokeWidth="5" strokeLinecap="round" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'ipu-cet-law',
// // // // //       title: 'IPU CET (B.A. LLB)',
// // // // //       description: 'For admission to BA LLB program in GGSIP University and its colleges.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       buttonText: 'Explore IPU CET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M20 70 L50 30 L80 70 Z" fill="#9333EA" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'nata-arts',
// // // // //       title: 'NATA',
// // // // //       description: 'For admission to 5-Year B.Arch program in architecture colleges.',
// // // // //       totalMcqs: '18,000+',
// // // // //       totalTests: '80+',
// // // // //       buttonText: 'Explore NATA',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <rect x="30" y="30" width="40" height="40" fill="none" stroke="#7E22CE" strokeWidth="4" />
// // // // //           <line x1="30" y1="30" x2="70" y2="70" stroke="#7E22CE" strokeWidth="3" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'ailet',
// // // // //       title: 'AILET (BA LLB)',
// // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) in NLU Delhi.',
// // // // //       totalMcqs: '15,000+',
// // // // //       totalTests: '70+',
// // // // //       buttonText: 'Explore AILET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M35 30 L65 30 L65 70 L35 70 Z" fill="#A855F7" />
// // // // //           <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'lsat',
// // // // //       title: 'LSAT India',
// // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) programs.',
// // // // //       totalMcqs: '12,000+',
// // // // //       totalTests: '60+',
// // // // //       buttonText: 'Explore LSAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M25 30 L75 30 L75 70 L25 70 Z" fill="#6B21A8" />
// // // // //           <line x1="50" y1="30" x2="50" y2="70" stroke="#FFFFFF" strokeWidth="3" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //   ]
// // // // // };

// // // // // // Color theme styles
// // // // // const themeStyles = {
// // // // //   blue: {
// // // // //     badgeBg: 'bg-blue-50',
// // // // //     iconColor: 'text-blue-600',
// // // // //     buttonBorder: 'border-blue-200 text-blue-600 hover:bg-blue-50',
// // // // //   },
// // // // //   emerald: {
// // // // //     badgeBg: 'bg-emerald-50',
// // // // //     iconColor: 'text-emerald-600',
// // // // //     buttonBorder: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
// // // // //   },
// // // // //   purple: {
// // // // //     badgeBg: 'bg-purple-50',
// // // // //     iconColor: 'text-purple-600',
// // // // //     buttonBorder: 'border-purple-200 text-purple-600 hover:bg-purple-50',
// // // // //   },
// // // // //   orange: {
// // // // //     badgeBg: 'bg-orange-50',
// // // // //     iconColor: 'text-orange-600',
// // // // //     buttonBorder: 'border-orange-200 text-orange-600 hover:bg-orange-50',
// // // // //   },
// // // // // };

// // // // // export const ExploreExams: React.FC = () => {
// // // // //   // Active Tab State (default 'science')
// // // // //   const [activeStream, setActiveStream] = useState<Stream>('science');

// // // // //   // Active Stream Exams
// // // // //   const currentExams = streamExamsData[activeStream];

// // // // //   return (
// // // // //     <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-slate-50/50">
// // // // //       {/* --- Section Header --- */}
// // // // //       <div className="text-center mb-8">
// // // // //         <div className="inline-flex items-center gap-2 mb-2">
// // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // //           <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
// // // // //             Your Future Starts Here
// // // // //           </span>
// // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // //         </div>
// // // // //         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // // // //           Explore Exams <span className="text-orange-500">After 12th</span>
// // // // //         </h2>
// // // // //         <p className="text-slate-500 mt-2 text-sm md:text-base">
// // // // //           Find the right exam for your dream college and career.
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* --- Stream Selection Tabs --- */}
// // // // //       <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
// // // // //         {streams.map((stream) => {
// // // // //           const isActive = activeStream === stream.id;
// // // // //           return (
// // // // //             <button
// // // // //               key={stream.id}
// // // // //               onClick={() => setActiveStream(stream.id)}
// // // // //               className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
// // // // //                 isActive 
// // // // //                   ? `${stream.activeColor} border-2 font-bold shadow-md` 
// // // // //                   : 'border-slate-200 text-slate-700 hover:border-slate-300'
// // // // //               }`}
// // // // //             >
// // // // //               <div className="p-1 bg-slate-100 rounded-lg">{stream.icon}</div>
// // // // //               <span className="text-sm md:text-base">{stream.label}</span>
// // // // //               <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
// // // // //             </button>
// // // // //           );
// // // // //         })}
// // // // //       </div>

// // // // //       {/* --- Exam Cards Grid --- */}
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //         {currentExams.map((exam) => {
// // // // //           const theme = themeStyles[exam.themeColor];

// // // // //           return (
// // // // //             <div
// // // // //               key={exam.id}
// // // // //               className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
// // // // //             >
// // // // //               <div>
// // // // //                 {/* Top Section: Graphic & Details */}
// // // // //                 <div className="flex items-start gap-4 mb-4">
// // // // //                   <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-1">
// // // // //                     {exam.svgIcon ? (
// // // // //                       exam.svgIcon
// // // // //                     ) : (
// // // // //                       <img
// // // // //                         src={exam.imageUrl}
// // // // //                         alt={exam.title}
// // // // //                         className="w-full h-full object-contain"
// // // // //                       />
// // // // //                     )}
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug">
// // // // //                       {exam.title}
// // // // //                     </h3>
// // // // //                     <p className="text-xs text-slate-500 mt-1 line-clamp-2">
// // // // //                       {exam.description}
// // // // //                     </p>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Metrics Badges */}
// // // // //                 <div className="grid grid-cols-2 gap-2 my-4">
// // // // //                   {/* Total MCQs */}
// // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // //                     <BookOpen className={`w-4 h-4 ${theme.iconColor}`} />
// // // // //                     <div>
// // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total MCQs</p>
// // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalMcqs}</p>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   {/* Total Tests */}
// // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // //                     <FileCheck2 className={`w-4 h-4 ${theme.iconColor}`} />
// // // // //                     <div>
// // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total Tests</p>
// // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalTests}</p>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Action Button */}
// // // // //               <button
// // // // //                 className={`w-full mt-2 py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors ${theme.buttonBorder}`}
// // // // //               >
// // // // //                 <span>{exam.buttonText}</span>
// // // // //                 <ArrowRight className="w-4 h-4" />
// // // // //               </button>
// // // // //             </div>
// // // // //           );
// // // // //         })}
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default ExploreExams;



// // // // ////./Update code for better structure and clarity


// // // // // import React, { useState } from 'react';
// // // // // import { 
// // // // //   FlaskConical, 
// // // // //   TrendingUp, 
// // // // //   Palette, 
// // // // //   BookOpen, 
// // // // //   FileCheck2, 
// // // // //   ArrowRight,
// // // // //   ChevronRight
// // // // // } from 'lucide-react';

// // // // // // Stream Types
// // // // // type Stream = 'science' | 'commerce' | 'arts';

// // // // // interface StreamOption {
// // // // //   id: Stream;
// // // // //   label: string;
// // // // //   icon: React.ReactNode;
// // // // //   activeColor: string;
// // // // // }

// // // // // const streams: StreamOption[] = [
// // // // //   {
// // // // //     id: 'science',
// // // // //     label: 'After 12th Science',
// // // // //     icon: <FlaskConical className="w-5 h-5 text-blue-600" />,
// // // // //     activeColor: 'border-blue-600 text-blue-600 bg-blue-50/50',
// // // // //   },
// // // // //   {
// // // // //     id: 'commerce',
// // // // //     label: 'After 12th Commerce',
// // // // //     icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
// // // // //     activeColor: 'border-emerald-600 text-emerald-600 bg-emerald-50/50',
// // // // //   },
// // // // //   {
// // // // //     id: 'arts',
// // // // //     label: 'After 12th Arts',
// // // // //     icon: <Palette className="w-5 h-5 text-purple-600" />,
// // // // //     activeColor: 'border-purple-600 text-purple-600 bg-purple-50/50',
// // // // //   },
// // // // // ];

// // // // // interface ExamCardData {
// // // // //   id: string;
// // // // //   title: string;
// // // // //   description: string;
// // // // //   totalMcqs: string;
// // // // //   totalTests: string;
// // // // //   buttonText: string;
// // // // //   imageUrl?: string;
// // // // //   svgIcon?: React.ReactNode;
// // // // //   themeColor: 'blue' | 'emerald' | 'purple' | 'orange';
// // // // // }

// // // // // // ----------------------------------------------------
// // // // // // DYNAMIC DATA FOR SCIENCE, COMMERCE & ARTS
// // // // // // ----------------------------------------------------
// // // // // const streamExamsData: Record<Stream, ExamCardData[]> = {
// // // // //   science: [
// // // // //     {
// // // // //       id: 'jee',
// // // // //       title: 'JEE (Main & Advanced)',
// // // // //       description: 'For admission to IITs, NITs, IIITs & other top engineering colleges.',
// // // // //       totalMcqs: '1,25,000+',
// // // // //       totalTests: '450+',
// // // // //       buttonText: 'Explore JEE',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#E0F2FE" />
// // // // //           <path d="M30 40 L70 40 L70 70 L30 70 Z" fill="#0284C7" />
// // // // //           <circle cx="50" cy="30" r="12" fill="#38BDF8" />
// // // // //           <path d="M20 75 L80 75" stroke="#0369A1" strokeWidth="4" strokeLinecap="round" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'blue',
// // // // //     },
// // // // //     {
// // // // //       id: 'neet',
// // // // //       title: 'NEET UG',
// // // // //       description: 'For admission to MBBS, BDS, AYUSH & other medical courses.',
// // // // //       totalMcqs: '1,10,000+',
// // // // //       totalTests: '380+',
// // // // //       buttonText: 'Explore NEET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M50 30 C30 10 10 35 50 75 C90 35 70 10 50 30 Z" fill="#10B981" />
// // // // //           <path d="M35 50 L65 50 M50 35 L50 65" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'cuet-sci',
// // // // //       title: 'CUET UG (Science)',
// // // // //       description: 'For admission to Central Universities and top science programs across India.',
// // // // //       totalMcqs: '95,000+',
// // // // //       totalTests: '320+',
// // // // //       buttonText: 'Explore CUET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M20 45 L50 30 L80 45 L50 60 Z" fill="#9333EA" />
// // // // //           <path d="M30 52 L30 68 C30 68 50 78 70 68 L70 52" fill="none" stroke="#7E22CE" strokeWidth="4" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'viteee',
// // // // //       title: 'VITEEE',
// // // // //       description: 'For admission to VIT campuses across India.',
// // // // //       totalMcqs: '65,000+',
// // // // //       totalTests: '230+',
// // // // //       buttonText: 'Explore VITEEE',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#E0F2FE" />
// // // // //           <path d="M25 70 L25 40 L50 25 L75 40 L75 70 Z" fill="#0284C7" />
// // // // //           <rect x="40" y="50" width="20" height="20" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'blue',
// // // // //     },
// // // // //     {
// // // // //       id: 'bitsat',
// // // // //       title: 'BITSAT',
// // // // //       description: 'For admission to BITS Pilani campuses in Goa, Hyderabad & Pilani.',
// // // // //       totalMcqs: '45,000+',
// // // // //       totalTests: '160+',
// // // // //       buttonText: 'Explore BITSAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#FFEDD5" />
// // // // //           <path d="M30 75 L30 45 L50 25 L70 45 L70 75 Z" fill="#EA580C" />
// // // // //           <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'orange',
// // // // //     },
// // // // //     {
// // // // //       id: 'ipu-cet-sci',
// // // // //       title: 'IPU CET',
// // // // //       description: 'For admission to UG engineering & science courses in IP University, Delhi.',
// // // // //       totalMcqs: '55,000+',
// // // // //       totalTests: '180+',
// // // // //       buttonText: 'Explore IPU CET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M20 70 L50 30 L80 70 Z" fill="#059669" />
// // // // //           <circle cx="50" cy="55" r="10" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //   ],

// // // // //   commerce: [
// // // // //     {
// // // // //       id: 'cuet-comm',
// // // // //       title: 'CUET UG (Commerce)',
// // // // //       description: 'For admission to B.Com (Hons) and other commerce programs in central universities.',
// // // // //       totalMcqs: '40,000+',
// // // // //       totalTests: '200+',
// // // // //       buttonText: 'Explore CUET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M20 45 L50 30 L80 45 L50 60 Z" fill="#059669" />
// // // // //           <path d="M30 52 L30 68 C30 68 50 78 70 68 L70 52" fill="none" stroke="#047857" strokeWidth="4" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'ca-foundation',
// // // // //       title: 'CA Foundation',
// // // // //       description: 'For admission to Chartered Accountancy course by ICAI.',
// // // // //       totalMcqs: '20,000+',
// // // // //       totalTests: '100+',
// // // // //       buttonText: 'Explore CA',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <text x="50" y="62" fill="#047857" fontSize="32" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">CA</text>
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'cseet',
// // // // //       title: 'CS Executive Entrance (CSEET)',
// // // // //       description: 'For admission to Company Secretary Executive Programme.',
// // // // //       totalMcqs: '15,000+',
// // // // //       totalTests: '80+',
// // // // //       buttonText: 'Explore CSEET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <text x="50" y="62" fill="#065F46" fontSize="30" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">CS</text>
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'ipmat-comm',
// // // // //       title: 'IPMAT (IIM Indore)',
// // // // //       description: 'For Integrated Program in Management Aptitude Test at IIM Indore.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       buttonText: 'Explore IPMAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M25 70 L42 50 L58 60 L75 30" fill="none" stroke="#10B981" strokeWidth="6" strokeLinecap="round" />
// // // // //           <polygon points="75,25 82,35 70,35" fill="#10B981" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'npat',
// // // // //       title: 'NPAT',
// // // // //       description: 'For admission to BBA program at NMIMS Mumbai.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       buttonText: 'Explore NPAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <circle cx="50" cy="50" r="22" fill="#059669" />
// // // // //           <path d="M50 35 L50 65 M35 50 L65 50" stroke="#FFFFFF" strokeWidth="4" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //     {
// // // // //       id: 'set-comm',
// // // // //       title: 'SET (Symbiosis)',
// // // // //       description: 'For admission to BBA/B.Com programs in Symbiosis University.',
// // // // //       totalMcqs: '12,000+',
// // // // //       totalTests: '60+',
// // // // //       buttonText: 'Explore SET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#D1FAE5" />
// // // // //           <path d="M30 35 C30 35 45 25 50 40 C55 55 70 45 70 65" fill="none" stroke="#047857" strokeWidth="6" strokeLinecap="round" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'emerald',
// // // // //     },
// // // // //   ],

// // // // //   arts: [
// // // // //     {
// // // // //       id: 'cuet-arts',
// // // // //       title: 'CUET UG (Arts)',
// // // // //       description: 'For admission to undergraduate programs in central universities across India.',
// // // // //       totalMcqs: '40,000+',
// // // // //       totalTests: '200+',
// // // // //       buttonText: 'Explore CUET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M25 70 L25 45 L50 30 L75 45 L75 70 Z" fill="#7E22CE" />
// // // // //           <rect x="42" y="52" width="16" height="18" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'clat-arts',
// // // // //       title: 'CLAT UG',
// // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) in top NLUs.',
// // // // //       totalMcqs: '25,000+',
// // // // //       totalTests: '120+',
// // // // //       buttonText: 'Explore CLAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M50 25 L50 65 M30 35 L70 35 M20 50 L40 50 M60 50 L80 50" stroke="#6B21A8" strokeWidth="5" strokeLinecap="round" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'ipu-cet-law',
// // // // //       title: 'IPU CET (B.A. LLB)',
// // // // //       description: 'For admission to BA LLB program in GGSIP University and its colleges.',
// // // // //       totalMcqs: '10,000+',
// // // // //       totalTests: '50+',
// // // // //       buttonText: 'Explore IPU CET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M20 70 L50 30 L80 70 Z" fill="#9333EA" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'nata-arts',
// // // // //       title: 'NATA',
// // // // //       description: 'For admission to 5-Year B.Arch program in architecture colleges.',
// // // // //       totalMcqs: '18,000+',
// // // // //       totalTests: '80+',
// // // // //       buttonText: 'Explore NATA',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <rect x="30" y="30" width="40" height="40" fill="none" stroke="#7E22CE" strokeWidth="4" />
// // // // //           <line x1="30" y1="30" x2="70" y2="70" stroke="#7E22CE" strokeWidth="3" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'ailet',
// // // // //       title: 'AILET (BA LLB)',
// // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) in NLU Delhi.',
// // // // //       totalMcqs: '15,000+',
// // // // //       totalTests: '70+',
// // // // //       buttonText: 'Explore AILET',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M35 30 L65 30 L65 70 L35 70 Z" fill="#A855F7" />
// // // // //           <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //     {
// // // // //       id: 'lsat',
// // // // //       title: 'LSAT India',
// // // // //       description: 'For admission to 5-Year Integrated Law (BA LLB) programs.',
// // // // //       totalMcqs: '12,000+',
// // // // //       totalTests: '60+',
// // // // //       buttonText: 'Explore LSAT',
// // // // //       svgIcon: (
// // // // //         <svg viewBox="0 0 100 100" className="w-full h-full">
// // // // //           <rect width="100" height="100" rx="20" fill="#F3E8FF" />
// // // // //           <path d="M25 30 L75 30 L75 70 L25 70 Z" fill="#6B21A8" />
// // // // //           <line x1="50" y1="30" x2="50" y2="70" stroke="#FFFFFF" strokeWidth="3" />
// // // // //         </svg>
// // // // //       ),
// // // // //       themeColor: 'purple',
// // // // //     },
// // // // //   ]
// // // // // };

// // // // // // Color theme styles
// // // // // const themeStyles = {
// // // // //   blue: {
// // // // //     badgeBg: 'bg-blue-50',
// // // // //     iconColor: 'text-blue-600',
// // // // //     buttonBorder: 'border-blue-200 text-blue-600 hover:bg-blue-50',
// // // // //   },
// // // // //   emerald: {
// // // // //     badgeBg: 'bg-emerald-50',
// // // // //     iconColor: 'text-emerald-600',
// // // // //     buttonBorder: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
// // // // //   },
// // // // //   purple: {
// // // // //     badgeBg: 'bg-purple-50',
// // // // //     iconColor: 'text-purple-600',
// // // // //     buttonBorder: 'border-purple-200 text-purple-600 hover:bg-purple-50',
// // // // //   },
// // // // //   orange: {
// // // // //     badgeBg: 'bg-orange-50',
// // // // //     iconColor: 'text-orange-600',
// // // // //     buttonBorder: 'border-orange-200 text-orange-600 hover:bg-orange-50',
// // // // //   },
// // // // // };

// // // // // export const ExploreExams: React.FC = () => {
// // // // //   // Active Tab State (default 'science')
// // // // //   const [activeStream, setActiveStream] = useState<Stream>('science');

// // // // //   // Active Stream Exams
// // // // //   const currentExams = streamExamsData[activeStream];

// // // // //   return (
// // // // //     <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-slate-50/50">
// // // // //       {/* --- Section Header --- */}
// // // // //       <div className="text-center mb-8">
// // // // //         <div className="inline-flex items-center gap-2 mb-2">
// // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // //           <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
// // // // //             Your Future Starts Here
// // // // //           </span>
// // // // //           <span className="h-[1px] w-8 bg-orange-400"></span>
// // // // //         </div>
// // // // //         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // // // //           Explore Exams <span className="text-orange-500">After 12th</span>
// // // // //         </h2>
// // // // //         <p className="text-slate-500 mt-2 text-sm md:text-base">
// // // // //           Find the right exam for your dream college and career.
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* --- Stream Selection Tabs --- */}
// // // // //       <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
// // // // //         {streams.map((stream) => {
// // // // //           const isActive = activeStream === stream.id;
// // // // //           return (
// // // // //             <button
// // // // //               key={stream.id}
// // // // //               onClick={() => setActiveStream(stream.id)}
// // // // //               className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
// // // // //                 isActive 
// // // // //                   ? `${stream.activeColor} border-2 font-bold shadow-md` 
// // // // //                   : 'border-slate-200 text-slate-700 hover:border-slate-300'
// // // // //               }`}
// // // // //             >
// // // // //               <div className="p-1 bg-slate-100 rounded-lg">{stream.icon}</div>
// // // // //               <span className="text-sm md:text-base">{stream.label}</span>
// // // // //               <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
// // // // //             </button>
// // // // //           );
// // // // //         })}
// // // // //       </div>

// // // // //       {/* --- Exam Cards Grid --- */}
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //         {currentExams.map((exam) => {
// // // // //           const theme = themeStyles[exam.themeColor];

// // // // //           return (
// // // // //             <div
// // // // //               key={exam.id}
// // // // //               className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
// // // // //             >
// // // // //               <div>
// // // // //                 {/* Top Section: Graphic & Details */}
// // // // //                 <div className="flex items-start gap-4 mb-4">
// // // // //                   <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-1">
// // // // //                     {exam.svgIcon ? (
// // // // //                       exam.svgIcon
// // // // //                     ) : (
// // // // //                       <img
// // // // //                         src={exam.imageUrl}
// // // // //                         alt={exam.title}
// // // // //                         className="w-full h-full object-contain"
// // // // //                       />
// // // // //                     )}
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug">
// // // // //                       {exam.title}
// // // // //                     </h3>
// // // // //                     <p className="text-xs text-slate-500 mt-1 line-clamp-2">
// // // // //                       {exam.description}
// // // // //                     </p>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Metrics Badges */}
// // // // //                 <div className="grid grid-cols-2 gap-2 my-4">
// // // // //                   {/* Total MCQs */}
// // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // //                     <BookOpen className={`w-4 h-4 ${theme.iconColor}`} />
// // // // //                     <div>
// // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total MCQs</p>
// // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalMcqs}</p>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   {/* Total Tests */}
// // // // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // // // //                     <FileCheck2 className={`w-4 h-4 ${theme.iconColor}`} />
// // // // //                     <div>
// // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total Tests</p>
// // // // //                       <p className="text-xs font-bold text-slate-800 mt-0.5">{exam.totalTests}</p>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Action Button */}
// // // // //               <button
// // // // //                 className={`w-full mt-2 py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors ${theme.buttonBorder}`}
// // // // //               >
// // // // //                 <span>{exam.buttonText}</span>
// // // // //                 <ArrowRight className="w-4 h-4" />
// // // // //               </button>
// // // // //             </div>
// // // // //           );
// // // // //         })}
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default ExploreExams;


// // // // // import React, { useState } from 'react';
// // // // // import { BookOpen, FileCheck2, ArrowRight, ChevronRight } from 'lucide-react';

// // // // // // Stream Category Type & Data
// // // // // type Stream = 'science' | 'commerce' | 'arts';

// // // // // interface StreamOption {
// // // // //   id: Stream;
// // // // //   label: string;
// // // // //   iconSvg: React.ReactNode;
// // // // //   activeColor: string;
// // // // // }

// // // // // const streams: StreamOption[] = [
// // // // //   {
// // // // //     id: 'science',
// // // // //     label: 'Science',
// // // // //     iconSvg: (
// // // // //       <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.60 15.12a2 2 0 01-1.022-.547l-1.22-1.22a2 2 0 010-2.828l6.83-6.83a2 2 0 012.828 0l6.83 6.83a2 2 0 010 2.828l-1.62 1.62z" />
// // // // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2" />
// // // // //       </svg>
// // // // //     ),
// // // // //     activeColor: 'border-blue-500 text-blue-600 bg-blue-50/30',
// // // // //   },
// // // // //   {
// // // // //     id: 'commerce',
// // // // //     label: 'Commerce',
// // // // //     iconSvg: (
// // // // //       <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
// // // // //       </svg>
// // // // //     ),
// // // // //     activeColor: 'border-emerald-500 text-emerald-600 bg-emerald-50/30',
// // // // //   },
// // // // //   {
// // // // //     id: 'arts',
// // // // //     label: 'Arts',
// // // // //     iconSvg: (
// // // // //       <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
// // // // //       </svg>
// // // // //     ),
// // // // //     activeColor: 'border-purple-500 text-purple-600 bg-purple-50/30',
// // // // //   },
// // // // // ];

// // // // // // Exam Card Interface
// // // // // interface ExamCardData {
// // // // //   id: string;
// // // // //   title: string;
// // // // //   description: string;
// // // // //   totalMcqs: string;
// // // // //   totalTests: string;
// // // // //   buttonText: string;
// // // // //   imageUrl: string;
// // // // //   themeColor: 'blue' | 'emerald' | 'purple' | 'orange';
// // // // // }

// // // // // const examsData: ExamCardData[] = [
// // // // //   {
// // // // //     id: 'jee',
// // // // //     title: 'JEE (Main & Advanced)',
// // // // //     description: 'For admission to IITs, NITs, IIITs & other top engineering colleges.',
// // // // //     totalMcqs: '1,25,000+',
// // // // //     totalTests: '450+',
// // // // //     buttonText: 'Explore JEE',
// // // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/1048/1048927.png', // Blue Gear & Blueprint
// // // // //     themeColor: 'blue',
// // // // //   },
// // // // //   {
// // // // //     id: 'neet',
// // // // //     title: 'NEET UG',
// // // // //     description: 'For admission to MBBS, BDS, AYUSH & other medical courses.',
// // // // //     totalMcqs: '1,10,000+',
// // // // //     totalTests: '380+',
// // // // //     buttonText: 'Explore NEET',
// // // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png', // Stethoscope & Heart
// // // // //     themeColor: 'emerald',
// // // // //   },
// // // // //   {
// // // // //     id: 'cuet',
// // // // //     title: 'CUET UG',
// // // // //     description: 'For admission to Central Universities and other top universities across India.',
// // // // //     totalMcqs: '95,000+',
// // // // //     totalTests: '320+',
// // // // //     buttonText: 'Explore CUET',
// // // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png', // Graduation Cap & Books
// // // // //     themeColor: 'purple',
// // // // //   },
// // // // //   {
// // // // //     id: 'viteee',
// // // // //     title: 'VITEEE',
// // // // //     description: 'For admission to VIT campuses across India.',
// // // // //     totalMcqs: '65,000+',
// // // // //     totalTests: '230+',
// // // // //     buttonText: 'Explore VITEEE',
// // // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/4300/4300059.png', // College Building
// // // // //     themeColor: 'blue',
// // // // //   },
// // // // //   {
// // // // //     id: 'bitsat',
// // // // //     title: 'BITSAT',
// // // // //     description: 'For admission to BITS Pilani campuses in Goa, Hyderabad & Pilani.',
// // // // //     totalMcqs: '45,000+',
// // // // //     totalTests: '160+',
// // // // //     buttonText: 'Explore BITSAT',
// // // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3588/3588658.png', // Clock Tower Building
// // // // //     themeColor: 'orange',
// // // // //   },
// // // // //   {
// // // // //     id: 'ipu-cet',
// // // // //     title: 'IPU CET',
// // // // //     description: 'For admission to UG courses in IP University, Delhi.',
// // // // //     totalMcqs: '55,000+',
// // // // //     totalTests: '180+',
// // // // //     buttonText: 'Explore IPU CET',
// // // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png', // Dome Building
// // // // //     themeColor: 'emerald',
// // // // //   },
// // // // //   {
// // // // //     id: 'nata',
// // // // //     title: 'NATA',
// // // // //     description: 'For admission to B.Arch courses in approved institutes.',
// // // // //     totalMcqs: '25,000+',
// // // // //     totalTests: '110+',
// // // // //     buttonText: 'Explore NATA',
// // // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png', // Architecture Notebook
// // // // //     themeColor: 'orange',
// // // // //   },
// // // // //   {
// // // // //     id: 'clat',
// // // // //     title: 'CLAT UG',
// // // // //     description: 'For admission to 5-Year Integrated Law (BA LLB) courses.',
// // // // //     totalMcqs: '35,000+',
// // // // //     totalTests: '140+',
// // // // //     buttonText: 'Explore CLAT',
// // // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png', // Law Scales & Books
// // // // //     themeColor: 'purple',
// // // // //   },
// // // // //   {
// // // // //     id: 'others',
// // // // //     title: 'Other Exams',
// // // // //     description: 'NID, UCEED, SET, SRMJEEE, MHT CET, WBJEE & more state & private exams.',
// // // // //     totalMcqs: '80,000+',
// // // // //     totalTests: '250+',
// // // // //     buttonText: 'Explore Others',
// // // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2997/2997295.png', // Magnifying Glass & Books
// // // // //     themeColor: 'blue',
// // // // //   },
// // // // // ];

// // // // // // Color theme map for styling
// // // // // const themeStyles = {
// // // // //   blue: {
// // // // //     badgeBg: 'bg-blue-50/60',
// // // // //     iconColor: 'text-blue-600',
// // // // //     buttonBorder: 'border-blue-200 text-blue-600 hover:bg-blue-50',
// // // // //   },
// // // // //   emerald: {
// // // // //     badgeBg: 'bg-emerald-50/60',
// // // // //     iconColor: 'text-emerald-600',
// // // // //     buttonBorder: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
// // // // //   },
// // // // //   purple: {
// // // // //     badgeBg: 'bg-purple-50/60',
// // // // //     iconColor: 'text-purple-600',
// // // // //     buttonBorder: 'border-purple-200 text-purple-600 hover:bg-purple-50',
// // // // //   },
// // // // //   orange: {
// // // // //     badgeBg: 'bg-orange-50/60',
// // // // //     iconColor: 'text-orange-600',
// // // // //     buttonBorder: 'border-orange-200 text-orange-600 hover:bg-orange-50',
// // // // //   },
// // // // // };

// // // // // export const ExploreExams: React.FC = () => {
// // // // //   const [activeStream, setActiveStream] = useState<Stream>('science');

// // // // //   return (
// // // // //     <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-[#F8FAFC]">
// // // // //       {/* --- Section Header --- */}
// // // // //       <div className="text-center mb-8">
// // // // //         <div className="inline-flex items-center gap-2 mb-2">
// // // // //           <span className="h-[2px] w-6 bg-orange-500"></span>
// // // // //           <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
// // // // //             YOUR FUTURE STARTS HERE
// // // // //           </span>
// // // // //           <span className="h-[2px] w-6 bg-orange-500"></span>
// // // // //         </div>
// // // // //         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // // // //           Explore Exams <span className="text-orange-500">After 12th</span>
// // // // //         </h2>
// // // // //         <p className="text-slate-500 mt-2 text-sm md:text-base">
// // // // //           Find the right exam for your dream college and career.
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* --- Stream Selection Tabs --- */}
// // // // //       <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
// // // // //         {streams.map((stream) => {
// // // // //           const isActive = activeStream === stream.id;
// // // // //           return (
// // // // //             <button
// // // // //               key={stream.id}
// // // // //               onClick={() => setActiveStream(stream.id)}
// // // // //               className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
// // // // //                 isActive
// // // // //                   ? `${stream.activeColor} border-2 font-bold shadow-md`
// // // // //                   : 'border-slate-200 text-slate-700 hover:border-slate-300'
// // // // //               }`}
// // // // //             >
// // // // //               <div className="p-1 bg-slate-50 rounded-lg">{stream.iconSvg}</div>
// // // // //               <span className="text-sm font-semibold">After 12th <span className="capitalize">{stream.label}</span></span>
// // // // //               <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
// // // // //             </button>
// // // // //           );
// // // // //         })}
// // // // //       </div>

// // // // //       {/* --- Exam Cards Grid --- */}
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //         {examsData.map((exam) => {
// // // // //           const theme = themeStyles[exam.themeColor];

// // // // //           return (
// // // // //             <div
// // // // //               key={exam.id}
// // // // //               className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
// // // // //             >
// // // // //               <div>
// // // // //                 {/* Top Section: Graphic & Title */}
// // // // //                 <div className="flex items-start gap-4 mb-4">
// // // // //                   <div className="w-24 h-24 flex-shrink-0 rounded-2xl bg-slate-50/50 p-2 flex items-center justify-center">
// // // // //                     <img
// // // // //                       src={exam.imageUrl}
// // // // //                       alt={exam.title}
// // // // //                       className="w-full h-full object-contain drop-shadow-sm"
// // // // //                     />
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <h3 className="text-base font-bold text-slate-900 leading-snug">
// // // // //                       {exam.title}
// // // // //                     </h3>
// // // // //                     <p className="text-xs text-slate-500 mt-1 line-clamp-2">
// // // // //                       {exam.description}
// // // // //                     </p>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Metrics Badges */}
// // // // //                 <div className="grid grid-cols-2 gap-2 my-4">
// // // // //                   {/* Total MCQs */}
// // // // //                   <div className={`flex items-center gap-2 p-2.5 rounded-xl ${theme.badgeBg}`}>
// // // // //                     <BookOpen className={`w-4 h-4 ${theme.iconColor}`} />
// // // // //                     <div>
// // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total MCQs</p>
// // // // //                       <p className="text-xs font-bold text-slate-800 mt-1">{exam.totalMcqs}</p>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   {/* Total Tests */}
// // // // //                   <div className={`flex items-center gap-2 p-2.5 rounded-xl ${theme.badgeBg}`}>
// // // // //                     <FileCheck2 className={`w-4 h-4 ${theme.iconColor}`} />
// // // // //                     <div>
// // // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total Tests</p>
// // // // //                       <p className="text-xs font-bold text-slate-800 mt-1">{exam.totalTests}</p>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Action Button */}
// // // // //               <button
// // // // //                 className={`w-full mt-2 py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors ${theme.buttonBorder}`}
// // // // //               >
// // // // //                 <span>{exam.buttonText}</span>
// // // // //                 <ArrowRight className="w-4 h-4" />
// // // // //               </button>
// // // // //             </div>
// // // // //           );
// // // // //         })}
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default ExploreExams;




// // // // import React, { useState } from 'react';
// // // // import { BookOpen, FileCheck2, ArrowRight, ChevronRight } from 'lucide-react';

// // // // // Stream Category Type & Data
// // // // type Stream = 'science' | 'commerce' | 'arts';

// // // // interface StreamOption {
// // // //   id: Stream;
// // // //   label: string;
// // // //   iconSvg: React.ReactNode;
// // // //   activeColor: string;
// // // // }

// // // // const streams: StreamOption[] = [
// // // //   {
// // // //     id: 'science',
// // // //     label: 'Science',
// // // //     iconSvg: (
// // // //       <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.60 15.12a2 2 0 01-1.022-.547l-1.22-1.22a2 2 0 010-2.828l6.83-6.83a2 2 0 012.828 0l6.83 6.83a2 2 0 010 2.828l-1.62 1.62z" />
// // // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2" />
// // // //       </svg>
// // // //     ),
// // // //     activeColor: 'border-blue-500 text-blue-600 bg-blue-50/30',
// // // //   },
// // // //   {
// // // //     id: 'commerce',
// // // //     label: 'Commerce',
// // // //     iconSvg: (
// // // //       <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
// // // //       </svg>
// // // //     ),
// // // //     activeColor: 'border-emerald-500 text-emerald-600 bg-emerald-50/30',
// // // //   },
// // // //   {
// // // //     id: 'arts',
// // // //     label: 'Arts',
// // // //     iconSvg: (
// // // //       <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
// // // //       </svg>
// // // //     ),
// // // //     activeColor: 'border-purple-500 text-purple-600 bg-purple-50/30',
// // // //   },
// // // // ];

// // // // // Exam Card Interface
// // // // interface ExamCardData {
// // // //   id: string;
// // // //   title: string;
// // // //   description: string;
// // // //   totalMcqs: string;
// // // //   totalTests: string;
// // // //   buttonText: string;
// // // //   imageUrl: string;
// // // //   themeColor: 'blue' | 'emerald' | 'purple' | 'orange';
// // // //   stream: Stream; // Added stream tag to link exams to streams
// // // // }

// // // // const examsData: ExamCardData[] = [
// // // //   // --- SCIENCE EXAMS ---
// // // //   {
// // // //     id: 'jee',
// // // //     title: 'JEE (Main & Advanced)',
// // // //     description: 'For admission to IITs, NITs, IIITs & other top engineering colleges.',
// // // //     totalMcqs: '1,25,000+',
// // // //     totalTests: '450+',
// // // //     buttonText: 'Explore JEE',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/1048/1048927.png',
// // // //     themeColor: 'blue',
// // // //     stream: 'science',
// // // //   },
// // // //   {
// // // //     id: 'neet',
// // // //     title: 'NEET UG',
// // // //     description: 'For admission to MBBS, BDS, AYUSH & other medical courses.',
// // // //     totalMcqs: '1,10,000+',
// // // //     totalTests: '380+',
// // // //     buttonText: 'Explore NEET',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
// // // //     themeColor: 'emerald',
// // // //     stream: 'science',
// // // //   },
// // // //   {
// // // //     id: 'cuet-science',
// // // //     title: 'CUET UG (Science)',
// // // //     description: 'For admission to Central Universities and other top universities across India.',
// // // //     totalMcqs: '95,000+',
// // // //     totalTests: '320+',
// // // //     buttonText: 'Explore CUET',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
// // // //     themeColor: 'purple',
// // // //     stream: 'science',
// // // //   },
// // // //   {
// // // //     id: 'viteee',
// // // //     title: 'VITEEE',
// // // //     description: 'For admission to VIT campuses across India.',
// // // //     totalMcqs: '65,000+',
// // // //     totalTests: '230+',
// // // //     buttonText: 'Explore VITEEE',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/4300/4300059.png',
// // // //     themeColor: 'blue',
// // // //     stream: 'science',
// // // //   },
// // // //   {
// // // //     id: 'bitsat',
// // // //     title: 'BITSAT',
// // // //     description: 'For admission to BITS Pilani campuses in Goa, Hyderabad & Pilani.',
// // // //     totalMcqs: '45,000+',
// // // //     totalTests: '160+',
// // // //     buttonText: 'Explore BITSAT',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3588/3588658.png',
// // // //     themeColor: 'orange',
// // // //     stream: 'science',
// // // //   },

// // // //   // --- COMMERCE EXAMS (From your uploaded Image 2) ---
// // // //   {
// // // //     id: 'cuet-commerce',
// // // //     title: 'CUET UG (Commerce)',
// // // //     description: 'For admission to B.Com (Hons) and other commerce programs in central universities.',
// // // //     totalMcqs: '40,000+',
// // // //     totalTests: '200+',
// // // //     buttonText: 'Explore CUET',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
// // // //     themeColor: 'emerald',
// // // //     stream: 'commerce',
// // // //   },
// // // //   {
// // // //     id: 'ca-foundation',
// // // //     title: 'CA Foundation',
// // // //     description: 'For admission to Chartered Accountancy course by ICAI.',
// // // //     totalMcqs: '20,000+',
// // // //     totalTests: '100+',
// // // //     buttonText: 'Explore CA Foundation',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/1533/1533913.png',
// // // //     themeColor: 'blue',
// // // //     stream: 'commerce',
// // // //   },
// // // //   {
// // // //     id: 'cseet',
// // // //     title: 'CS Executive Entrance (CSEET)',
// // // //     description: 'For admission to Company Secretary Executive Programme.',
// // // //     totalMcqs: '15,000+',
// // // //     totalTests: '80+',
// // // //     buttonText: 'Explore CSEET',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png',
// // // //     themeColor: 'purple',
// // // //     stream: 'commerce',
// // // //   },
// // // //   {
// // // //     id: 'ipmat-commerce',
// // // //     title: 'IPMAT (IIM Indore)',
// // // //     description: 'For Integrated Program in Management Aptitude Test at IIM Indore.',
// // // //     totalMcqs: '10,000+',
// // // //     totalTests: '50+',
// // // //     buttonText: 'Explore IPMAT',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
// // // //     themeColor: 'emerald',
// // // //     stream: 'commerce',
// // // //   },
// // // //   {
// // // //     id: 'npat',
// // // //     title: 'NPAT',
// // // //     description: 'For admission to BBA program at NMIMS Mumbai.',
// // // //     totalMcqs: '10,000+',
// // // //     totalTests: '50+',
// // // //     buttonText: 'Explore NPAT',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
// // // //     themeColor: 'blue',
// // // //     stream: 'commerce',
// // // //   },
// // // //   {
// // // //     id: 'set-symbiosis',
// // // //     title: 'SET (Symbiosis)',
// // // //     description: 'For admission to BBA/B.Com programs in Symbiosis University.',
// // // //     totalMcqs: '12,000+',
// // // //     totalTests: '60+',
// // // //     buttonText: 'Explore SET',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3588/3588658.png',
// // // //     themeColor: 'orange',
// // // //     stream: 'commerce',
// // // //   },

// // // //   // --- ARTS EXAMS (From your uploaded Image 1) ---
// // // //   {
// // // //     id: 'cuet-arts',
// // // //     title: 'CUET UG (Arts)',
// // // //     description: 'For admission to undergraduate programs in central universities across India.',
// // // //     totalMcqs: '40,000+',
// // // //     totalTests: '200+',
// // // //     buttonText: 'Explore CUET Arts',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
// // // //     themeColor: 'purple',
// // // //     stream: 'arts',
// // // //   },
// // // //   {
// // // //     id: 'clat-ug',
// // // //     title: 'CLAT UG',
// // // //     description: 'For admission to 5-Year Integrated Law (BA LLB) in top NLUs.',
// // // //     totalMcqs: '25,000+',
// // // //     totalTests: '120+',
// // // //     buttonText: 'Explore CLAT',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
// // // //     themeColor: 'orange',
// // // //     stream: 'arts',
// // // //   },
// // // //   {
// // // //     id: 'ipu-cet-law',
// // // //     title: 'IPU CET (B.A. LLB)',
// // // //     description: 'For admission to BA LLB program in GGSIP University and its colleges.',
// // // //     totalMcqs: '10,000+',
// // // //     totalTests: '50+',
// // // //     buttonText: 'Explore IPU CET',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
// // // //     themeColor: 'blue',
// // // //     stream: 'arts',
// // // //   },
// // // //   {
// // // //     id: 'nata-arts',
// // // //     title: 'NATA',
// // // //     description: 'For admission to 5-Year B.Arch program in architecture colleges.',
// // // //     totalMcqs: '18,000+',
// // // //     totalTests: '80+',
// // // //     buttonText: 'Explore NATA',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
// // // //     themeColor: 'emerald',
// // // //     stream: 'arts',
// // // //   },
// // // //   {
// // // //     id: 'ailet',
// // // //     title: 'AILET (BA LLB)',
// // // //     description: 'For admission to 5-Year Integrated Law (BA LLB) in NLU Delhi.',
// // // //     totalMcqs: '15,000+',
// // // //     totalTests: '70+',
// // // //     buttonText: 'Explore AILET',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
// // // //     themeColor: 'purple',
// // // //     stream: 'arts',
// // // //   },
// // // //   {
// // // //     id: 'lsat',
// // // //     title: 'LSAT India',
// // // //     description: 'For admission to 5-Year Integrated Law (BA LLB) programs.',
// // // //     totalMcqs: '12,000+',
// // // //     totalTests: '60+',
// // // //     buttonText: 'Explore LSAT',
// // // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
// // // //     themeColor: 'blue',
// // // //     stream: 'arts',
// // // //   },
// // // // ];

// // // // // Color theme map for styling
// // // // const themeStyles = {
// // // //   blue: {
// // // //     badgeBg: 'bg-blue-50/60',
// // // //     iconColor: 'text-blue-600',
// // // //     buttonBorder: 'border-blue-200 text-blue-600 hover:bg-blue-50',
// // // //   },
// // // //   emerald: {
// // // //     badgeBg: 'bg-emerald-50/60',
// // // //     iconColor: 'text-emerald-600',
// // // //     buttonBorder: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
// // // //   },
// // // //   purple: {
// // // //     badgeBg: 'bg-purple-50/60',
// // // //     iconColor: 'text-purple-600',
// // // //     buttonBorder: 'border-purple-200 text-purple-600 hover:bg-purple-50',
// // // //   },
// // // //   orange: {
// // // //     badgeBg: 'bg-orange-50/60',
// // // //     iconColor: 'text-orange-600',
// // // //     buttonBorder: 'border-orange-200 text-orange-600 hover:bg-orange-50',
// // // //   },
// // // // };

// // // // export const ExploreExams: React.FC = () => {
// // // //   const [activeStream, setActiveStream] = useState<Stream>('science');

// // // //   // Filter exams based on selected activeStream tab
// // // //   const filteredExams = examsData.filter((exam) => exam.stream === activeStream);

// // // //   return (
// // // //     <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-[#F8FAFC]">
// // // //       {/* --- Section Header --- */}
// // // //       <div className="text-center mb-8">
// // // //         <div className="inline-flex items-center gap-2 mb-2">
// // // //           <span className="h-[2px] w-6 bg-orange-500"></span>
// // // //           <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
// // // //             YOUR FUTURE STARTS HERE
// // // //           </span>
// // // //           <span className="h-[2px] w-6 bg-orange-500"></span>
// // // //         </div>
// // // //         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // // //           Explore Exams <span className="text-orange-500">After 12th</span>
// // // //         </h2>
// // // //         <p className="text-slate-500 mt-2 text-sm md:text-base">
// // // //           Find the right exam for your dream college and career.
// // // //         </p>
// // // //       </div>

// // // //       {/* --- Stream Selection Tabs --- */}
// // // //       <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
// // // //         {streams.map((stream) => {
// // // //           const isActive = activeStream === stream.id;
// // // //           return (
// // // //             <button
// // // //               key={stream.id}
// // // //               onClick={() => setActiveStream(stream.id)}
// // // //               className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 cursor-pointer ${
// // // //                 isActive
// // // //                   ? `${stream.activeColor} border-2 font-bold shadow-md`
// // // //                   : 'border-slate-200 text-slate-700 hover:border-slate-300'
// // // //               }`}
// // // //             >
// // // //               <div className="p-1 bg-slate-50 rounded-lg">{stream.iconSvg}</div>
// // // //               <span className="text-sm font-semibold">After 12th <span className="capitalize">{stream.label}</span></span>
// // // //               <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
// // // //             </button>
// // // //           );
// // // //         })}
// // // //       </div>

// // // //       {/* --- Exam Cards Grid --- */}
// // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //         {filteredExams.map((exam) => {
// // // //           const theme = themeStyles[exam.themeColor];

// // // //           return (
// // // //             <div
// // // //               key={exam.id}
// // // //               className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
// // // //             >
// // // //               <div>
// // // //                 {/* Top Section: Graphic & Title */}
// // // //                 <div className="flex items-start gap-4 mb-4">
// // // //                   <div className="w-20 h-20 flex-shrink-0 rounded-2xl bg-slate-50/50 p-2 flex items-center justify-center">
// // // //                     <img
// // // //                       src={exam.imageUrl}
// // // //                       alt={exam.title}
// // // //                       className="w-full h-full object-contain drop-shadow-sm"
// // // //                     />
// // // //                   </div>
// // // //                   <div>
// // // //                     <h3 className="text-base font-bold text-slate-900 leading-snug">
// // // //                       {exam.title}
// // // //                     </h3>
// // // //                     <p className="text-xs text-slate-500 mt-1 line-clamp-2">
// // // //                       {exam.description}
// // // //                     </p>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Metrics Badges */}
// // // //                 <div className="grid grid-cols-2 gap-2 my-4">
// // // //                   {/* Total MCQs */}
// // // //                   <div className={`flex items-center gap-2 p-2.5 rounded-xl ${theme.badgeBg}`}>
// // // //                     <BookOpen className={`w-4 h-4 ${theme.iconColor}`} />
// // // //                     <div>
// // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total MCQs</p>
// // // //                       <p className="text-xs font-bold text-slate-800 mt-1">{exam.totalMcqs}</p>
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* Total Tests */}
// // // //                   <div className={`flex items-center gap-2 p-2.5 rounded-xl ${theme.badgeBg}`}>
// // // //                     <FileCheck2 className={`w-4 h-4 ${theme.iconColor}`} />
// // // //                     <div>
// // // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Total Tests</p>
// // // //                       <p className="text-xs font-bold text-slate-800 mt-1">{exam.totalTests}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Action Button */}
// // // //               <button
// // // //                 className={`w-full mt-2 py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors ${theme.buttonBorder}`}
// // // //               >
// // // //                 <span>{exam.buttonText}</span>
// // // //                 <ArrowRight className="w-4 h-4" />
// // // //               </button>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ExploreExams;




// // // import React, { useState } from 'react';
// // // import { 
// // //   BookOpen, 
// // //   FileCheck2, 
// // //   ArrowRight, 
// // //   ChevronRight, 
// // //   GraduationCap, 
// // //   FileText, 
// // //   Award, 
// // //   Target, 
// // //   TrendingUp, 
// // //   UserCheck 
// // // } from 'lucide-react';

// // // // Stream Category Type & Data
// // // type Stream = 'science' | 'commerce' | 'arts';

// // // interface StreamOption {
// // //   id: Stream;
// // //   label: string;
// // //   iconSvg: React.ReactNode;
// // //   activeColor: string;
// // // }

// // // const streams: StreamOption[] = [
// // //   {
// // //     id: 'science',
// // //     label: 'Science',
// // //     iconSvg: (
// // //       <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.60 15.12a2 2 0 01-1.022-.547l-1.22-1.22a2 2 0 010-2.828l6.83-6.83a2 2 0 012.828 0l6.83 6.83a2 2 0 010 2.828l-1.62 1.62z" />
// // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2" />
// // //       </svg>
// // //     ),
// // //     activeColor: 'border-blue-500 text-blue-600 bg-blue-50/30',
// // //   },
// // //   {
// // //     id: 'commerce',
// // //     label: 'Commerce',
// // //     iconSvg: (
// // //       <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
// // //       </svg>
// // //     ),
// // //     activeColor: 'border-emerald-500 text-emerald-600 bg-emerald-50/30',
// // //   },
// // //   {
// // //     id: 'arts',
// // //     label: 'Arts',
// // //     iconSvg: (
// // //       <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
// // //       </svg>
// // //     ),
// // //     activeColor: 'border-purple-500 text-purple-600 bg-purple-50/30',
// // //   },
// // // ];

// // // // Stream Overview Header Data
// // // const streamOverview = {
// // //   science: { totalExams: '18', totalMcqs: '2,85,000+', totalTests: '1,250+' },
// // //   commerce: { totalExams: '16', totalMcqs: '2,40,000+', totalTests: '1,100+' },
// // //   arts: { totalExams: '15', totalMcqs: '2,10,000+', totalTests: '950+' },
// // // };

// // // // Exam Card Interface
// // // interface ExamCardData {
// // //   id: string;
// // //   title: string;
// // //   description: string;
// // //   totalMcqs: string;
// // //   totalTests: string;
// // //   buttonText: string;
// // //   imageUrl: string;
// // //   themeColor: 'blue' | 'emerald' | 'purple' | 'orange';
// // //   stream: Stream;
// // // }

// // // const examsData: ExamCardData[] = [
// // //   // --- SCIENCE EXAMS (Updated exactly as per the new image) ---
// // //   {
// // //     id: 'jee',
// // //     title: 'JEE Main & JEE Advanced',
// // //     description: 'For admission to NITs, IIITs, CFTIs and top IITs.',
// // //     totalMcqs: '60,000+',
// // //     totalTests: '250+',
// // //     buttonText: 'Explore JEE',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/1048/1048927.png',
// // //     themeColor: 'blue',
// // //     stream: 'science',
// // //   },
// // //   {
// // //     id: 'neet',
// // //     title: 'NEET UG',
// // //     description: 'For admission to MBBS, BDS, AYUSH and other medical courses.',
// // //     totalMcqs: '80,000+',
// // //     totalTests: '350+',
// // //     buttonText: 'Explore NEET',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
// // //     themeColor: 'emerald',
// // //     stream: 'science',
// // //   },
// // //   {
// // //     id: 'bitsat',
// // //     title: 'BITSAT',
// // //     description: 'For admission to BITS Pilani campuses.',
// // //     totalMcqs: '25,000+',
// // //     totalTests: '120+',
// // //     buttonText: 'Explore BITSAT',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3588/3588658.png',
// // //     themeColor: 'orange',
// // //     stream: 'science',
// // //   },
// // //   {
// // //     id: 'viteee',
// // //     title: 'VITEEE',
// // //     description: 'For admission to B.Tech programs at VIT campuses.',
// // //     totalMcqs: '15,000+',
// // //     totalTests: '80+',
// // //     buttonText: 'Explore VITEEE',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/4300/4300059.png',
// // //     themeColor: 'blue',
// // //     stream: 'science',
// // //   },
// // //   {
// // //     id: 'comedk',
// // //     title: 'COMEDK UGET',
// // //     description: 'For admission to engineering colleges in Karnataka.',
// // //     totalMcqs: '20,000+',
// // //     totalTests: '90+',
// // //     buttonText: 'Explore COMEDK',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
// // //     themeColor: 'purple',
// // //     stream: 'science',
// // //   },
// // //   {
// // //     id: 'mht-cet',
// // //     title: 'MHT CET',
// // //     description: 'For admission to engineering and pharmacy colleges in Maharashtra.',
// // //     totalMcqs: '20,000+',
// // //     totalTests: '90+',
// // //     buttonText: 'Explore MHT CET',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
// // //     themeColor: 'emerald',
// // //     stream: 'science',
// // //   },
// // //   {
// // //     id: 'wbjee',
// // //     title: 'WBJEE',
// // //     description: 'For admission to engineering, pharmacy and architecture colleges in West Bengal.',
// // //     totalMcqs: '15,000+',
// // //     totalTests: '70+',
// // //     buttonText: 'Explore WBJEE',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
// // //     themeColor: 'blue',
// // //     stream: 'science',
// // //   },
// // //   {
// // //     id: 'kcet',
// // //     title: 'KCET',
// // //     description: 'For admission to engineering and other professional courses in Karnataka.',
// // //     totalMcqs: '15,000+',
// // //     totalTests: '70+',
// // //     buttonText: 'Explore KCET',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
// // //     themeColor: 'orange',
// // //     stream: 'science',
// // //   },
// // //   {
// // //     id: 'iiser',
// // //     title: 'IISER Aptitude Test',
// // //     description: 'For admission to 5-Year Integrated BS-MS programs at IISERs.',
// // //     totalMcqs: '10,000+',
// // //     totalTests: '50+',
// // //     buttonText: 'Explore IISER',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
// // //     themeColor: 'purple',
// // //     stream: 'science',
// // //   },
// // //   {
// // //     id: 'niser',
// // //     title: 'NISER DAT',
// // //     description: 'For admission to Integrated M.Sc. programs at NISER.',
// // //     totalMcqs: '8,000+',
// // //     totalTests: '40+',
// // //     buttonText: 'Explore NISER',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
// // //     themeColor: 'emerald',
// // //     stream: 'science',
// // //   },
// // //   {
// // //     id: 'iit-series',
// // //     title: 'IIT Series',
// // //     description: 'For admission to B.Tech programs in IITs.',
// // //     totalMcqs: '12,000+',
// // //     totalTests: '60+',
// // //     buttonText: 'Explore IIT Series',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
// // //     themeColor: 'blue',
// // //     stream: 'science',
// // //   },
// // //   {
// // //     id: 'gate',
// // //     title: 'GATE',
// // //     description: 'For admission to M.Tech and PSU jobs.',
// // //     totalMcqs: '15,000+',
// // //     totalTests: '80+',
// // //     buttonText: 'Explore GATE',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/1048/1048927.png',
// // //     themeColor: 'orange',
// // //     stream: 'science',
// // //   },

// // //   // --- COMMERCE EXAMS ---
// // //   {
// // //     id: 'cuet-commerce',
// // //     title: 'CUET UG (Commerce)',
// // //     description: 'For admission to B.Com (Hons) and other commerce programs in central universities.',
// // //     totalMcqs: '40,000+',
// // //     totalTests: '200+',
// // //     buttonText: 'Explore CUET',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
// // //     themeColor: 'emerald',
// // //     stream: 'commerce',
// // //   },
// // //   {
// // //     id: 'ca-foundation',
// // //     title: 'CA Foundation',
// // //     description: 'For admission to Chartered Accountancy course by ICAI.',
// // //     totalMcqs: '20,000+',
// // //     totalTests: '100+',
// // //     buttonText: 'Explore CA Foundation',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/1533/1533913.png',
// // //     themeColor: 'blue',
// // //     stream: 'commerce',
// // //   },
// // //   {
// // //     id: 'cseet',
// // //     title: 'CS Executive Entrance (CSEET)',
// // //     description: 'For admission to Company Secretary Executive Programme.',
// // //     totalMcqs: '15,000+',
// // //     totalTests: '80+',
// // //     buttonText: 'Explore CSEET',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png',
// // //     themeColor: 'purple',
// // //     stream: 'commerce',
// // //   },
// // //   {
// // //     id: 'ipmat-commerce',
// // //     title: 'IPMAT (IIM Indore)',
// // //     description: 'For Integrated Program in Management Aptitude Test at IIM Indore.',
// // //     totalMcqs: '10,000+',
// // //     totalTests: '50+',
// // //     buttonText: 'Explore IPMAT',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
// // //     themeColor: 'emerald',
// // //     stream: 'commerce',
// // //   },

// // //   // --- ARTS EXAMS ---
// // //   {
// // //     id: 'cuet-arts',
// // //     title: 'CUET UG (Arts)',
// // //     description: 'For admission to undergraduate programs in central universities across India.',
// // //     totalMcqs: '40,000+',
// // //     totalTests: '200+',
// // //     buttonText: 'Explore CUET Arts',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
// // //     themeColor: 'purple',
// // //     stream: 'arts',
// // //   },
// // //   {
// // //     id: 'clat-ug',
// // //     title: 'CLAT UG',
// // //     description: 'For admission to 5-Year Integrated Law (BA LLB) in top NLUs.',
// // //     totalMcqs: '25,000+',
// // //     totalTests: '120+',
// // //     buttonText: 'Explore CLAT',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
// // //     themeColor: 'orange',
// // //     stream: 'arts',
// // //   },
// // //   {
// // //     id: 'ipu-cet-law',
// // //     title: 'IPU CET (B.A. LLB)',
// // //     description: 'For admission to BA LLB program in GGSIP University and its colleges.',
// // //     totalMcqs: '10,000+',
// // //     totalTests: '50+',
// // //     buttonText: 'Explore IPU CET',
// // //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
// // //     themeColor: 'blue',
// // //     stream: 'arts',
// // //   },
// // // ];

// // // // Color theme map for styling
// // // const themeStyles = {
// // //   blue: {
// // //     badgeBg: 'bg-blue-50/60',
// // //     iconColor: 'text-blue-600',
// // //     buttonBorder: 'border-blue-200 text-blue-600 hover:bg-blue-50',
// // //   },
// // //   emerald: {
// // //     badgeBg: 'bg-emerald-50/60',
// // //     iconColor: 'text-emerald-600',
// // //     buttonBorder: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
// // //   },
// // //   purple: {
// // //     badgeBg: 'bg-purple-50/60',
// // //     iconColor: 'text-purple-600',
// // //     buttonBorder: 'border-purple-200 text-purple-600 hover:bg-purple-50',
// // //   },
// // //   orange: {
// // //     badgeBg: 'bg-orange-50/60',
// // //     iconColor: 'text-orange-600',
// // //     buttonBorder: 'border-orange-200 text-orange-600 hover:bg-orange-50',
// // //   },
// // // };

// // // export const ExploreExams: React.FC = () => {
// // //   const [activeStream, setActiveStream] = useState<Stream>('science');

// // //   // Filter exams based on selected activeStream tab
// // //   const filteredExams = examsData.filter((exam) => exam.stream === activeStream);
// // //   const currentOverview = streamOverview[activeStream];

// // //   return (
// // //     <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-[#F8FAFC]">
// // //       {/* --- Section Header --- */}
// // //       <div className="text-center mb-8">
// // //         <div className="inline-flex items-center gap-2 mb-2">
// // //           <span className="h-[2px] w-6 bg-orange-500"></span>
// // //           <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
// // //             YOUR FUTURE STARTS HERE
// // //           </span>
// // //           <span className="h-[2px] w-6 bg-orange-500"></span>
// // //         </div>
// // //         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // //           Explore Exams <span className="text-orange-500">After 12th</span>
// // //         </h2>
// // //         <p className="text-slate-500 mt-2 text-sm md:text-base">
// // //           Find the right exam for your dream college and career.
// // //         </p>
// // //       </div>

// // //       {/* --- Stream Selection Tabs --- */}
// // //       <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
// // //         {streams.map((stream) => {
// // //           const isActive = activeStream === stream.id;
// // //           return (
// // //             <button
// // //               key={stream.id}
// // //               onClick={() => setActiveStream(stream.id)}
// // //               className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 cursor-pointer ${
// // //                 isActive
// // //                   ? `${stream.activeColor} border-2 font-bold shadow-md`
// // //                   : 'border-slate-200 text-slate-700 hover:border-slate-300'
// // //               }`}
// // //             >
// // //               <div className="p-1 bg-slate-50 rounded-lg">{stream.iconSvg}</div>
// // //               <span className="text-sm font-semibold">After 12th <span className="capitalize">{stream.label}</span></span>
// // //               <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
// // //             </button>
// // //           );
// // //         })}
// // //       </div>

// // //       {/* --- Top Metrics Summary Bar (Added from image) --- */}
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
// // //         <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
// // //           <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
// // //             <BookOpen className="w-6 h-6" />
// // //           </div>
// // //           <div>
// // //             <p className="text-xs text-slate-500 font-medium">Total Exams</p>
// // //             <p className="text-2xl font-black text-slate-900">{currentOverview.totalExams}</p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
// // //           <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
// // //             <FileText className="w-6 h-6" />
// // //           </div>
// // //           <div>
// // //             <p className="text-xs text-slate-500 font-medium">Total MCQs</p>
// // //             <p className="text-2xl font-black text-slate-900">{currentOverview.totalMcqs}</p>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
// // //           <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
// // //             <FileCheck2 className="w-6 h-6" />
// // //           </div>
// // //           <div>
// // //             <p className="text-xs text-slate-500 font-medium">Total Tests</p>
// // //             <p className="text-2xl font-black text-slate-900">{currentOverview.totalTests}</p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* --- Exam Cards Grid --- */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
// // //         {filteredExams.map((exam) => {
// // //           const theme = themeStyles[exam.themeColor];

// // //           return (
// // //             <div
// // //               key={exam.id}
// // //               className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
// // //             >
// // //               <div>
// // //                 {/* Top Section: Graphic & Title */}
// // //                 <div className="flex items-start gap-3 mb-4">
// // //                   <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-slate-50/80 p-2 flex items-center justify-center">
// // //                     <img
// // //                       src={exam.imageUrl}
// // //                       alt={exam.title}
// // //                       className="w-full h-full object-contain drop-shadow-sm"
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="text-sm font-bold text-slate-900 leading-snug">
// // //                       {exam.title}
// // //                     </h3>
// // //                     <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-normal">
// // //                       {exam.description}
// // //                     </p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Metrics Badges */}
// // //                 <div className="grid grid-cols-2 gap-2 my-4">
// // //                   {/* Total MCQs */}
// // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // //                     <div>
// // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">MCQs</p>
// // //                       <p className="text-xs font-bold text-slate-800 mt-1">{exam.totalMcqs}</p>
// // //                     </div>
// // //                   </div>

// // //                   {/* Total Tests */}
// // //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// // //                     <div>
// // //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Tests</p>
// // //                       <p className="text-xs font-bold text-slate-800 mt-1">{exam.totalTests}</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Action Button */}
// // //               <button
// // //                 className={`w-full mt-2 py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${theme.buttonBorder}`}
// // //               >
// // //                 <span>{exam.buttonText}</span>
// // //                 <ArrowRight className="w-4 h-4" />
// // //               </button>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>

// // //       {/* --- Bottom Features Bar (Added from image) --- */}
// // //       <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //         <div className="flex items-center gap-3">
// // //           <div className="p-3 bg-purple-50 rounded-2xl text-purple-600">
// // //             <GraduationCap className="w-6 h-6" />
// // //           </div>
// // //           <div>
// // //             <h4 className="text-xs font-bold text-slate-900">Expert Guidance</h4>
// // //             <p className="text-[11px] text-slate-500">Learn from top mentors and subject experts.</p>
// // //           </div>
// // //         </div>

// // //         <div className="flex items-center gap-3">
// // //           <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
// // //             <Target className="w-6 h-6" />
// // //           </div>
// // //           <div>
// // //             <h4 className="text-xs font-bold text-slate-900">Smart Preparation</h4>
// // //             <p className="text-[11px] text-slate-500">Practice with the best questions & tests.</p>
// // //           </div>
// // //         </div>

// // //         <div className="flex items-center gap-3">
// // //           <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
// // //             <TrendingUp className="w-6 h-6" />
// // //           </div>
// // //           <div>
// // //             <h4 className="text-xs font-bold text-slate-900">Track Progress</h4>
// // //             <p className="text-[11px] text-slate-500">Analyze performance and improve.</p>
// // //           </div>
// // //         </div>

// // //         <div className="flex items-center gap-3">
// // //           <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
// // //             <UserCheck className="w-6 h-6" />
// // //           </div>
// // //           <div>
// // //             <h4 className="text-xs font-bold text-slate-900">Achieve Your Goal</h4>
// // //             <p className="text-[11px] text-slate-500">Get into top colleges and build your future.</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ExploreExams;




// // import React, { useState } from 'react';
// // import { 
// //   BookOpen, 
// //   FileCheck2, 
// //   ArrowRight, 
// //   ChevronRight, 
// //   GraduationCap, 
// //   FileText, 
// //   Target, 
// //   TrendingUp, 
// //   UserCheck 
// // } from 'lucide-react';

// // // Stream Category Type & Data
// // type Stream = 'science' | 'commerce' | 'arts';

// // interface StreamOption {
// //   id: Stream;
// //   label: string;
// //   iconSvg: React.ReactNode;
// //   activeColor: string;
// // }

// // const streams: StreamOption[] = [
// //   {
// //     id: 'science',
// //     label: 'Science',
// //     iconSvg: (
// //       <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.60 15.12a2 2 0 01-1.022-.547l-1.22-1.22a2 2 0 010-2.828l6.83-6.83a2 2 0 012.828 0l6.83 6.83a2 2 0 010 2.828l-1.62 1.62z" />
// //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2" />
// //       </svg>
// //     ),
// //     activeColor: 'border-blue-500 text-blue-600 bg-blue-50/30',
// //   },
// //   {
// //     id: 'commerce',
// //     label: 'Commerce',
// //     iconSvg: (
// //       <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
// //       </svg>
// //     ),
// //     activeColor: 'border-emerald-500 text-emerald-600 bg-emerald-50/30',
// //   },
// //   {
// //     id: 'arts',
// //     label: 'Arts',
// //     iconSvg: (
// //       <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
// //       </svg>
// //     ),
// //     activeColor: 'border-purple-500 text-purple-600 bg-purple-50/30',
// //   },
// // ];

// // // Stream Overview Header Data
// // const streamOverview = {
// //   science: { totalExams: '18', totalMcqs: '2,85,000+', totalTests: '1,250+' },
// //   commerce: { totalExams: '16', totalMcqs: '2,40,000+', totalTests: '1,100+' },
// //   arts: { totalExams: '15', totalMcqs: '2,10,000+', totalTests: '950+' },
// // };

// // // Exam Card Interface
// // interface ExamCardData {
// //   id: string;
// //   title: string;
// //   description: string;
// //   totalMcqs: string;
// //   totalTests: string;
// //   buttonText: string;
// //   imageUrl: string;
// //   themeColor: 'blue' | 'emerald' | 'purple' | 'orange';
// //   stream: Stream;
// // }

// // const examsData: ExamCardData[] = [
// //   // --- SCIENCE EXAMS ---
// //   {
// //     id: 'jee',
// //     title: 'JEE Main & JEE Advanced',
// //     description: 'For admission to NITs, IIITs, CFTIs and top IITs.',
// //     totalMcqs: '60,000+',
// //     totalTests: '250+',
// //     buttonText: 'Explore JEE',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/1048/1048927.png',
// //     themeColor: 'blue',
// //     stream: 'science',
// //   },
// //   {
// //     id: 'neet',
// //     title: 'NEET UG',
// //     description: 'For admission to MBBS, BDS, AYUSH and other medical courses.',
// //     totalMcqs: '80,000+',
// //     totalTests: '350+',
// //     buttonText: 'Explore NEET',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
// //     themeColor: 'emerald',
// //     stream: 'science',
// //   },
// //   {
// //     id: 'bitsat',
// //     title: 'BITSAT',
// //     description: 'For admission to BITS Pilani campuses.',
// //     totalMcqs: '25,000+',
// //     totalTests: '120+',
// //     buttonText: 'Explore BITSAT',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3588/3588658.png',
// //     themeColor: 'orange',
// //     stream: 'science',
// //   },
// //   {
// //     id: 'viteee',
// //     title: 'VITEEE',
// //     description: 'For admission to B.Tech programs at VIT campuses.',
// //     totalMcqs: '15,000+',
// //     totalTests: '80+',
// //     buttonText: 'Explore VITEEE',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/4300/4300059.png',
// //     themeColor: 'blue',
// //     stream: 'science',
// //   },
// //   {
// //     id: 'comedk',
// //     title: 'COMEDK UGET',
// //     description: 'For admission to engineering colleges in Karnataka.',
// //     totalMcqs: '20,000+',
// //     totalTests: '90+',
// //     buttonText: 'Explore COMEDK',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
// //     themeColor: 'purple',
// //     stream: 'science',
// //   },
// //   {
// //     id: 'mht-cet',
// //     title: 'MHT CET',
// //     description: 'For admission to engineering and pharmacy colleges in Maharashtra.',
// //     totalMcqs: '20,000+',
// //     totalTests: '90+',
// //     buttonText: 'Explore MHT CET',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
// //     themeColor: 'emerald',
// //     stream: 'science',
// //   },

// //   // --- COMMERCE EXAMS (Exactly as per your updated screenshot) ---
// //   {
// //     id: 'cuet-commerce',
// //     title: 'CUET UG (Commerce)',
// //     description: 'For admission to B.Com (Hons) and other commerce programs in central universities.',
// //     totalMcqs: '40,000+',
// //     totalTests: '200+',
// //     buttonText: 'Explore CUET',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
// //     themeColor: 'emerald',
// //     stream: 'commerce',
// //   },
// //   {
// //     id: 'ca-foundation',
// //     title: 'CA Foundation',
// //     description: 'For admission to Chartered Accountancy course by ICAI.',
// //     totalMcqs: '20,000+',
// //     totalTests: '100+',
// //     buttonText: 'Explore CA Foundation',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/1533/1533913.png',
// //     themeColor: 'blue',
// //     stream: 'commerce',
// //   },
// //   {
// //     id: 'cseet',
// //     title: 'CS Executive Entrance (CSEET)',
// //     description: 'For admission to Company Secretary Executive Programme.',
// //     totalMcqs: '15,000+',
// //     totalTests: '80+',
// //     buttonText: 'Explore CSEET',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png',
// //     themeColor: 'purple',
// //     stream: 'commerce',
// //   },
// //   {
// //     id: 'ipmat-commerce',
// //     title: 'IPMAT (IIM Indore)',
// //     description: 'For Integrated Program in Management Aptitude Test at IIM Indore.',
// //     totalMcqs: '10,000+',
// //     totalTests: '50+',
// //     buttonText: 'Explore IPMAT',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
// //     themeColor: 'emerald',
// //     stream: 'commerce',
// //   },
// //   {
// //     id: 'npat',
// //     title: 'NPAT',
// //     description: 'For admission to BBA program at NMIMS Mumbai.',
// //     totalMcqs: '10,000+',
// //     totalTests: '50+',
// //     buttonText: 'Explore NPAT',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
// //     themeColor: 'blue',
// //     stream: 'commerce',
// //   },
// //   {
// //     id: 'set-symbiosis',
// //     title: 'SET (Symbiosis)',
// //     description: 'For admission to BBA/B.Com programs in Symbiosis University.',
// //     totalMcqs: '12,000+',
// //     totalTests: '60+',
// //     buttonText: 'Explore SET',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3588/3588658.png',
// //     themeColor: 'orange',
// //     stream: 'commerce',
// //   },
// //   {
// //     id: 'du-jat-commerce',
// //     title: 'DU JAT (Commerce)',
// //     description: 'For admission to B.Com (Hons) and other commerce programs in DU.',
// //     totalMcqs: '12,000+',
// //     totalTests: '60+',
// //     buttonText: 'Explore DU JAT',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
// //     themeColor: 'emerald',
// //     stream: 'commerce',
// //   },
// //   {
// //     id: 'mht-cet-commerce',
// //     title: 'MHT CET (Commerce)',
// //     description: 'For admission to BBA/BMS and other commerce courses in Maharashtra.',
// //     totalMcqs: '15,000+',
// //     totalTests: '70+',
// //     buttonText: 'Explore MHT CET',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2910/2910791.png',
// //     themeColor: 'emerald',
// //     stream: 'commerce',
// //   },
// //   {
// //     id: 'atma',
// //     title: 'ATMA',
// //     description: 'For admission to MBA/MCA programs in ATMA member institutes.',
// //     totalMcqs: '10,000+',
// //     totalTests: '50+',
// //     buttonText: 'Explore ATMA',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/1048/1048927.png',
// //     themeColor: 'blue',
// //     stream: 'commerce',
// //   },
// //   {
// //     id: 'xat',
// //     title: 'XAT',
// //     description: 'For admission to MBA/PGDM programs in XLRI and other top institutions.',
// //     totalMcqs: '10,000+',
// //     totalTests: '50+',
// //     buttonText: 'Explore XAT',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
// //     themeColor: 'blue',
// //     stream: 'commerce',
// //   },
// //   {
// //     id: 'mat',
// //     title: 'MAT',
// //     description: 'For admission to MBA/PGDM courses across India.',
// //     totalMcqs: '10,000+',
// //     totalTests: '50+',
// //     buttonText: 'Explore MAT',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
// //     themeColor: 'purple',
// //     stream: 'commerce',
// //   },
// //   {
// //     id: 'cmat',
// //     title: 'CMAT',
// //     description: 'For admission to MBA/PGDM programs in AICTE approved institutes.',
// //     totalMcqs: '10,000+',
// //     totalTests: '50+',
// //     buttonText: 'Explore CMAT',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2232/2232688.png',
// //     themeColor: 'blue',
// //     stream: 'commerce',
// //   },

// //   // --- ARTS EXAMS ---
// //   {
// //     id: 'cuet-arts',
// //     title: 'CUET UG (Arts)',
// //     description: 'For admission to undergraduate programs in central universities across India.',
// //     totalMcqs: '40,000+',
// //     totalTests: '200+',
// //     buttonText: 'Explore CUET Arts',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135810.png',
// //     themeColor: 'purple',
// //     stream: 'arts',
// //   },
// //   {
// //     id: 'clat-ug',
// //     title: 'CLAT UG',
// //     description: 'For admission to 5-Year Integrated Law (BA LLB) in top NLUs.',
// //     totalMcqs: '25,000+',
// //     totalTests: '120+',
// //     buttonText: 'Explore CLAT',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png',
// //     themeColor: 'orange',
// //     stream: 'arts',
// //   },
// //   {
// //     id: 'ipu-cet-law',
// //     title: 'IPU CET (B.A. LLB)',
// //     description: 'For admission to BA LLB program in GGSIP University and its colleges.',
// //     totalMcqs: '10,000+',
// //     totalTests: '50+',
// //     buttonText: 'Explore IPU CET',
// //     imageUrl: 'https://cdn-icons-png.flaticon.com/512/2830/2830312.png',
// //     themeColor: 'blue',
// //     stream: 'arts',
// //   },
// // ];

// // // Color theme map for styling
// // const themeStyles = {
// //   blue: {
// //     badgeBg: 'bg-blue-50/60',
// //     iconColor: 'text-blue-600',
// //     buttonBorder: 'border-blue-200 text-blue-600 hover:bg-blue-50',
// //   },
// //   emerald: {
// //     badgeBg: 'bg-emerald-50/60',
// //     iconColor: 'text-emerald-600',
// //     buttonBorder: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50',
// //   },
// //   purple: {
// //     badgeBg: 'bg-purple-50/60',
// //     iconColor: 'text-purple-600',
// //     buttonBorder: 'border-purple-200 text-purple-600 hover:bg-purple-50',
// //   },
// //   orange: {
// //     badgeBg: 'bg-orange-50/60',
// //     iconColor: 'text-orange-600',
// //     buttonBorder: 'border-orange-200 text-orange-600 hover:bg-orange-50',
// //   },
// // };

// // export const ExploreExams: React.FC = () => {
// //   const [activeStream, setActiveStream] = useState<Stream>('commerce');

// //   // Filter exams based on selected activeStream tab
// //   const filteredExams = examsData.filter((exam) => exam.stream === activeStream);
// //   const currentOverview = streamOverview[activeStream];

// //   return (
// //     <section className="w-full max-w-7xl mx-auto px-4 py-12 bg-[#F8FAFC]">
// //       {/* --- Section Header --- */}
// //       <div className="text-center mb-8">
// //         <div className="inline-flex items-center gap-2 mb-2">
// //           <span className="h-[2px] w-6 bg-orange-500"></span>
// //           <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
// //             YOUR FUTURE STARTS HERE
// //           </span>
// //           <span className="h-[2px] w-6 bg-orange-500"></span>
// //         </div>
// //         <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// //           Explore Exams <span className="text-orange-500">After 12th</span>
// //         </h2>
// //         <p className="text-slate-500 mt-2 text-sm md:text-base">
// //           Find the right exam for your dream college and career.
// //         </p>
// //       </div>

// //       {/* --- Stream Selection Tabs --- */}
// //       <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
// //         {streams.map((stream) => {
// //           const isActive = activeStream === stream.id;
// //           return (
// //             <button
// //               key={stream.id}
// //               onClick={() => setActiveStream(stream.id)}
// //               className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm transition-all duration-200 cursor-pointer ${
// //                 isActive
// //                   ? `${stream.activeColor} border-2 font-bold shadow-md`
// //                   : 'border-slate-200 text-slate-700 hover:border-slate-300'
// //               }`}
// //             >
// //               <div className="p-1 bg-slate-50 rounded-lg">{stream.iconSvg}</div>
// //               <span className="text-sm font-semibold">After 12th <span className="capitalize">{stream.label}</span></span>
// //               <ChevronRight className="w-4 h-4 text-slate-400 ml-2" />
// //             </button>
// //           );
// //         })}
// //       </div>

// //       {/* --- Top Metrics Summary Bar --- */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
// //         <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
// //           <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
// //             <BookOpen className="w-6 h-6" />
// //           </div>
// //           <div>
// //             <p className="text-xs text-slate-500 font-medium">Total Exams</p>
// //             <p className="text-2xl font-black text-slate-900">{currentOverview.totalExams}</p>
// //           </div>
// //         </div>

// //         <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
// //           <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
// //             <FileText className="w-6 h-6" />
// //           </div>
// //           <div>
// //             <p className="text-xs text-slate-500 font-medium">Total MCQs</p>
// //             <p className="text-2xl font-black text-slate-900">{currentOverview.totalMcqs}</p>
// //           </div>
// //         </div>

// //         <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
// //           <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
// //             <FileCheck2 className="w-6 h-6" />
// //           </div>
// //           <div>
// //             <p className="text-xs text-slate-500 font-medium">Total Tests</p>
// //             <p className="text-2xl font-black text-slate-900">{currentOverview.totalTests}</p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* --- Exam Cards Grid --- */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
// //         {filteredExams.map((exam) => {
// //           const theme = themeStyles[exam.themeColor];

// //           return (
// //             <div
// //               key={exam.id}
// //               className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
// //             >
// //               <div>
// //                 {/* Top Section: Graphic & Title */}
// //                 <div className="flex items-start gap-3 mb-4">
// //                   <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-slate-50/80 p-2 flex items-center justify-center">
// //                     <img
// //                       src={exam.imageUrl}
// //                       alt={exam.title}
// //                       className="w-full h-full object-contain drop-shadow-sm"
// //                     />
// //                   </div>
// //                   <div>
// //                     <h3 className="text-sm font-bold text-slate-900 leading-snug">
// //                       {exam.title}
// //                     </h3>
// //                     <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-normal">
// //                       {exam.description}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 {/* Metrics Badges */}
// //                 <div className="grid grid-cols-2 gap-2 my-4">
// //                   {/* Total MCQs */}
// //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// //                     <div>
// //                       <p className="text-[10px] text-slate-400 font-medium leading-none">MCQs</p>
// //                       <p className="text-xs font-bold text-slate-800 mt-1">{exam.totalMcqs}</p>
// //                     </div>
// //                   </div>

// //                   {/* Total Tests */}
// //                   <div className={`flex items-center gap-2 p-2 rounded-xl ${theme.badgeBg}`}>
// //                     <div>
// //                       <p className="text-[10px] text-slate-400 font-medium leading-none">Tests</p>
// //                       <p className="text-xs font-bold text-slate-800 mt-1">{exam.totalTests}</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Action Button */}
// //               <button
// //                 className={`w-full mt-2 py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${theme.buttonBorder}`}
// //               >
// //                 <span>{exam.buttonText}</span>
// //                 <ArrowRight className="w-4 h-4" />
// //               </button>
// //             </div>
// //           );
// //         })}
// //       </div>

// //       {/* --- Bottom Features Bar --- */}
// //       <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //         <div className="flex items-center gap-3">
// //           <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
// //             <GraduationCap className="w-6 h-6" />
// //           </div>
// //           <div>
// //             <h4 className="text-xs font-bold text-slate-900">Expert Guidance</h4>
// //             <p className="text-[11px] text-slate-500">Learn from top mentors and subject experts.</p>
// //           </div>
// //         </div>

// //         <div className="flex items-center gap-3">
// //           <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
// //             <Target className="w-6 h-6" />
// //           </div>
// //           <div>
// //             <h4 className="text-xs font-bold text-slate-900">Smart Preparation</h4>
// //             <p className="text-[11px] text-slate-500">Practice with the best questions & tests.</p>
// //           </div>
// //         </div>

// //         <div className="flex items-center gap-3">
// //           <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
// //             <TrendingUp className="w-6 h-6" />
// //           </div>
// //           <div>
// //             <h4 className="text-xs font-bold text-slate-900">Track Progress</h4>
// //             <p className="text-[11px] text-slate-500">Analyze performance and improve.</p>
// //           </div>
// //         </div>

// //         <div className="flex items-center gap-3">
// //           <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
// //             <UserCheck className="w-6 h-6" />
// //           </div>
// //           <div>
// //             <h4 className="text-xs font-bold text-slate-900">Achieve Your Goal</h4>
// //             <p className="text-[11px] text-slate-500">Get into top colleges and build your future.</p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ExploreExams;



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
//           {/* ahdskjha */}
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
  UserCheck 
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
  science: { totalExams: '9', totalMcqs: '6,80,000+', totalTests: '2,120+' },
  commerce: { totalExams: '16', totalMcqs: '2,40,000+', totalTests: '1,100+' },
  arts: { totalExams: '15', totalMcqs: '2,10,000+', totalTests: '950+' },
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
  // --- ORIGINAL SCIENCE EXAMS (Restored) ---
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
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
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Expert Guidance</h4>
            <p className="text-[11px] text-slate-500">Learn from top mentors and subject experts.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Smart Preparation</h4>
            <p className="text-[11px] text-slate-500">Practice with the best questions & tests.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Track Progress</h4>
            <p className="text-[11px] text-slate-500">Analyze performance and improve.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Achieve Your Goal</h4>
            <p className="text-[11px] text-slate-500">Get into top colleges and build your future.</p>
          </div>
          {/* ahdskjha */}
        </div>
      </div>

      {/* sadhfljads */}
    </section>
  );
};

export default ExploreExams;