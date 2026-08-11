


// // // import React, { useState, useMemo } from 'react';
// // // import { useLocation } from 'wouter';
// // // import { 
// // //   Star, Clock, CheckCircle2, ArrowLeft, Award, BookOpen, User, 
// // //   MessageSquare, Calendar, ChevronDown, ShieldCheck,
// // //   Sparkles, Gift, FileText, HelpCircle, Layers, GraduationCap,
// // //   Home, BarChart2, Target, MessageCircle, ChevronRight, Download, Upload, Info,
// // //   Flame, Zap, Book, Check, Target as TargetIcon, Filter, IndianRupee, Lock, Package
// // // } from 'lucide-react';
// // // import { INITIAL_MENTORS, Mentor } from './Mentordetail';

// // // export default function MentorProfilePage() {
// // //   const [, setLocation] = useLocation();
// // //   const [activeTab, setActiveTab] = useState<string>('Overview');

// // //   // URL Query String (?name=Dr.%20Neha%20Singh or ?id=3) se Name/ID Get karna
// // //   // const mentorQueryParam = useMemo(() => {
// // //   //   const params = new URLSearchParams(window.location.search);
// // //   //   return params.get('name') || params.get('id');
// // //   // }, []);

// // //   const mentorQueryParam = useMemo(() => {
// // //   const params = new URLSearchParams(window.location.search);
// // //   return params.get('name') || params.get('id');
// // // }, []);

// // // const mentor: Mentor = useMemo(() => {
// // //   if (!mentorQueryParam) return INITIAL_MENTORS[0];

// // //   const rawParam = decodeURIComponent(mentorQueryParam).trim().toLowerCase();

// // //   const found = INITIAL_MENTORS.find((m) => {
// // //     // Name me se spaces hatakar '-' se match karega
// // //     const mentorSlug = m.name
// // //       .toLowerCase()
// // //       .replace(/[^a-z0-9\s-]/g, '')
// // //       .trim()
// // //       .replace(/\s+/g, '-');

// // //     return (
// // //       mentorSlug === rawParam ||
// // //       m.name.toLowerCase() === rawParam ||
// // //       m.id === Number(rawParam)
// // //     );
// // //   });

// // //   return found || INITIAL_MENTORS[0];
// // // }, [mentorQueryParam]);

// // //   // Selected Mentor search karna by Name or Fallback
// // //   // const mentor: Mentor = useMemo(() => {
// // //   //   if (!mentorQueryParam) return INITIAL_MENTORS[0];

    
// // //   //   const decodedParam = decodeURIComponent(mentorQueryParam).trim().toLowerCase();

    
// // //   //   const found = INITIAL_MENTORS.find(
// // //   //     (m) =>
// // //   //       m.name.toLowerCase() === decodedParam ||
// // //   //       m.id === Number(decodedParam)
// // //   //   );

// // //   //   return found || INITIAL_MENTORS[0];
// // //   // }, [mentorQueryParam]);

// // //   return (
// // //     <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs pb-12">
// // //       <div className="w-full max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 py-4 space-y-4">
        
// // //         {/* Breadcrumb Navigation & Back Button */}
// // //         <div className="flex items-center justify-between">
// // //           <button 
// // //             onClick={() => setLocation('/mentordetail')}
// // //             className="flex items-center gap-1.5 text-[#FF5722] font-semibold text-xs bg-orange-50 hover:bg-orange-100 border border-orange-200 px-3 py-1.5 rounded-lg transition cursor-pointer"
// // //           >
// // //             <ArrowLeft size={13} /> Back to List
// // //           </button>
// // //         </div>

// // //         {/* ================= MAIN 3-COLUMN LAYOUT ================= */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
// // //           {/* ================= LEFT COLUMN: PROFILE SIDEBAR (col-span-3) ================= */}
// // //           <div className="lg:col-span-3 space-y-4">
            
// // //             {/* Main Profile Header Card */}
// // //             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center relative overflow-hidden">
// // //               <span className="absolute top-3 right-3 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
// // //                 Available Now
// // //               </span>

// // //               <div className="relative inline-block my-2">
// // //                 <img
// // //                   src={mentor.image}
// // //                   alt={mentor.name}
// // //                   className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-emerald-50"
// // //                 />
// // //                 <CheckCircle2
// // //                   size={20}
// // //                   className="text-white bg-emerald-500 rounded-full absolute bottom-1 right-1 fill-emerald-500"
// // //                 />
// // //               </div>

// // //               <h2 className="font-bold text-gray-900 text-base">{mentor.name}</h2>
// // //               <p className="text-emerald-600 text-xs font-semibold mt-0.5">{mentor.role}</p>
              
// // //               <div className="flex items-center justify-center gap-1 text-xs text-gray-600 mt-2">
// // //                 <Star size={13} fill="#f59e0b" className="text-amber-500" />
// // //                 <span className="font-bold text-gray-800">{mentor.rating}</span>
// // //                 <span className="text-gray-400">({mentor.reviewsCount} Reviews)</span>
// // //               </div>

// // //               <div className="space-y-2 mt-4">
// // //                 <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer flex items-center justify-center gap-2">
// // //                   <Calendar size={14} /> Book a Session
// // //                 </button>
// // //                 <button className="w-full border border-orange-200 text-[#FF5722] hover:bg-orange-50 font-bold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-2">
// // //                   <MessageSquare size={14} /> Message Mentor
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* About Me Details Card */}
// // //             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
// // //               <h3 className="font-bold text-gray-900 text-xs border-b pb-2">About Me</h3>
// // //               <p className="text-gray-600 text-[11px] leading-relaxed">
// // //                 I make Physics simple and concept-based. My focus is on building strong fundamentals and problem solving skills to help students crack NEET with confidence.
// // //               </p>

// // //               <div className="space-y-2.5 pt-2 text-[11px]">
// // //                 <div className="flex items-start gap-2.5">
// // //                   <Clock size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
// // //                   <div>
// // //                     <p className="text-gray-400 text-[10px]">Experience</p>
// // //                     <p className="font-semibold text-gray-800">{mentor.experienceYears}+ Years</p>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex items-start gap-2.5">
// // //                   <User size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
// // //                   <div>
// // //                     <p className="text-gray-400 text-[10px]">Students Mentored</p>
// // //                     <p className="font-semibold text-gray-800">{mentor.studentsCount}</p>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex items-start gap-2.5">
// // //                   <GraduationCap size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
// // //                   <div>
// // //                     <p className="text-gray-400 text-[10px]">Qualification</p>
// // //                     <p className="font-semibold text-gray-800">B.Tech, M.Tech (IIT Delhi)</p>
// // //                     <p className="text-gray-500 text-[10px]">Ph.D. in Applied Physics</p>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex items-start gap-2.5">
// // //                   <Award size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
// // //                   <div>
// // //                     <p className="text-gray-400 text-[10px]">Institute</p>
// // //                     <p className="font-semibold text-gray-800">IIT Delhi Alumni</p>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex items-start gap-2.5">
// // //                   <GlobeIcon size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
// // //                   <div>
// // //                     <p className="text-gray-400 text-[10px]">Languages</p>
// // //                     <p className="font-semibold text-gray-800">English, Hindi</p>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex items-start gap-2.5">
// // //                   <BookOpen size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
// // //                   <div>
// // //                     <p className="text-gray-400 text-[10px]">Teaching Mode</p>
// // //                     <p className="font-semibold text-gray-800">Online • Home Tuition • Guidance</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Quick Stats Grid */}
// // //             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-2">
// // //               <h3 className="font-bold text-gray-900 text-xs mb-2">Quick Stats</h3>
// // //               <div className="grid grid-cols-2 gap-2">
// // //                 <div className="bg-emerald-50/50 border border-emerald-100 p-2.5 rounded-xl text-center">
// // //                   <p className="text-emerald-700 font-bold text-xs">{mentor.studentsCount}</p>
// // //                   <p className="text-gray-500 text-[9px] mt-0.5">Students Mentored</p>
// // //                 </div>
// // //                 <div className="bg-blue-50/50 border border-blue-100 p-2.5 rounded-xl text-center">
// // //                   <p className="text-blue-700 font-bold text-xs">{mentor.experienceYears}+ Years</p>
// // //                   <p className="text-gray-500 text-[9px] mt-0.5">Teaching Experience</p>
// // //                 </div>
// // //                 <div className="bg-amber-50/50 border border-amber-100 p-2.5 rounded-xl text-center">
// // //                   <p className="text-amber-700 font-bold text-xs">98%</p>
// // //                   <p className="text-gray-500 text-[9px] mt-0.5">Satisfaction Rate</p>
// // //                 </div>
// // //                 <div className="bg-purple-50/50 border border-purple-100 p-2.5 rounded-xl text-center">
// // //                   <p className="text-purple-700 font-bold text-xs">{mentor.reviewsCount}</p>
// // //                   <p className="text-gray-500 text-[9px] mt-0.5">Reviews</p>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Need Help CTA Box */}
// // //             <div className="bg-orange-50/60 border border-orange-100 rounded-2xl p-4 text-center space-y-2">
// // //               <h4 className="font-bold text-gray-900 text-xs">Need Help?</h4>
// // //               <p className="text-gray-500 text-[10px]">Not sure which service is right for you? Our team can help you choose.</p>
// // //               <button className="w-full bg-white border border-orange-200 text-[#FF5722] hover:bg-orange-100 font-semibold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
// // //                 <HelpCircle size={13} /> Talk to GoodGuiders
// // //               </button>
// // //             </div>

// // //           </div>

// // //           {/* ================= MIDDLE COLUMN: MAIN TAB CONTENT (col-span-6) ================= */}
// // //           <div className="lg:col-span-6 space-y-4">
            
// // //             {/* Navigation Tabs Bar */}
// // //             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-1.5 flex items-center gap-1 overflow-x-auto scrollbar-none">
// // //               {[
// // //                 { name: 'Overview', icon: BookOpen },
// // //                 { name: 'Service', icon: Layers },
// // //                 { name: 'Mock Test', icon: FileText },
// // //                 { name: 'Assignment', icon: FileText },
// // //                 { name: 'Study Material', icon: BookOpen },
// // //                  { name: 'Video lecture', icon: FileText },
// // //                 { name: 'Q&A', icon: HelpCircle },
// // //               ].map((tab) => {
// // //                 const Icon = tab.icon;
// // //                 const isActive = activeTab.startsWith(tab.name.split(' ')[0]);
// // //                 return (
// // //                   <button
// // //                     key={tab.name}
// // //                     onClick={() => setActiveTab(tab.name)}
// // //                     className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold whitespace-nowrap transition cursor-pointer ${
// // //                       isActive 
// // //                         ? 'bg-orange-50 text-[#FF5722] border border-orange-200' 
// // //                         : 'text-gray-600 hover:bg-gray-50'
// // //                     }`}
// // //                   >
// // //                     <Icon size={13} />
// // //                     <span>{tab.name}</span>
// // //                   </button>
// // //                 );
// // //               })}
// // //             </div>

// // //             {/* CONDITIONAL TAB CONTENT */}
// // //             {activeTab.startsWith('Assignments') ? (
// // //               /* ================= ASSIGNMENTS SECTION ================= */
// // //               <div className="space-y-4">
                
// // //                 {/* Header Title */}
// // //                 <div>
// // //                   <h2 className="text-lg font-extrabold text-indigo-950">Assignments</h2>
// // //                   <p className="text-gray-500 text-[11px] leading-relaxed mt-0.5">
// // //                     Assignments help you practice concepts in depth and strengthen your understanding.<br />
// // //                     It will help you identify your depth of knowledge. When you upload your assignments, we review them carefully and provide personalized improvement suggestions.
// // //                   </p>
// // //                 </div>

// // //                 {/* Filter Assignments Card */}
// // //                 <div className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 space-y-3">
// // //                   <h3 className="font-bold text-blue-950 text-xs">Filter Assignments</h3>
// // //                   <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 items-end">
// // //                     <div>
// // //                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Class</label>
// // //                       <div className="relative">
// // //                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
// // //                           <option>Select Class</option>
// // //                           <option>Class 11</option>
// // //                           <option>Class 12</option>
// // //                         </select>
// // //                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
// // //                       </div>
// // //                     </div>

// // //                     <div>
// // //                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Subject</label>
// // //                       <div className="relative">
// // //                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
// // //                           <option>Select Subject</option>
// // //                           <option>Physics</option>
// // //                           <option>Chemistry</option>
// // //                         </select>
// // //                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
// // //                       </div>
// // //                     </div>

// // //                     <div>
// // //                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Topic</label>
// // //                       <div className="relative">
// // //                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
// // //                           <option>Select Topic</option>
// // //                           <option>Kinematics</option>
// // //                           <option>Laws of Motion</option>
// // //                         </select>
// // //                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
// // //                       </div>
// // //                     </div>

// // //                     <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
// // //                       <Filter size={13} /> Apply
// // //                     </button>
// // //                   </div>
// // //                 </div>

// // //                 {/* Per Assignment Fee Banner */}
// // //                 <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3.5 flex items-center gap-3">
// // //                   <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center font-bold text-sm flex-shrink-0">
// // //                     ₹
// // //                   </div>
// // //                   <div>
// // //                     <h4 className="font-extrabold text-amber-950 text-xs">Per Assignment Fee: <span className="text-red-500">₹20</span></h4>
// // //                     <p className="text-amber-800 text-[10px] mt-0.5">
// // //                       Each assignment review and personalized feedback is available at just <span className="font-bold text-amber-950">₹20</span> per assignment.
// // //                     </p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Assignments Cards List */}
// // //                 <div className="space-y-3">
// // //                   {[
// // //                     {
// // //                       title: 'Kinematics – Practice Set 1',
// // //                       badge: 'Active',
// // //                       badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
// // //                       iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
// // //                       class: '11', subject: 'Physics', topic: 'Motion in a Straight Line',
// // //                       questions: 10, marks: 20, due: '25 May 2024',
// // //                       desc: 'This assignment covers basic kinematics concepts including displacement, velocity, acceleration and equations of motion.'
// // //                     },
// // //                     {
// // //                       title: 'Laws of Motion – Practice Set 1',
// // //                       badge: 'Active',
// // //                       badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
// // //                       iconBg: 'bg-purple-50 border-purple-100 text-purple-600',
// // //                       class: '11', subject: 'Physics', topic: "Newton's Laws of Motion",
// // //                       questions: 12, marks: 24, due: '30 May 2024',
// // //                       desc: "Practice problems based on Newton's three laws of motion."
// // //                     },
// // //                     {
// // //                       title: 'Work, Energy & Power – Practice Set 1',
// // //                       badge: 'Upcoming',
// // //                       badgeBg: 'bg-blue-50 text-blue-600 border-blue-100',
// // //                       iconBg: 'bg-amber-50 border-amber-100 text-amber-600',
// // //                       class: '11', subject: 'Physics', topic: 'Work, Power',
// // //                       questions: 10, marks: 20, due: '05 Jun 2024',
// // //                       desc: 'Numerical problems on work done, energy and power.'
// // //                     },
// // //                     {
// // //                       title: 'System of Particles – Practice Set 1',
// // //                       badge: 'Submitted',
// // //                       badgeBg: 'bg-purple-50 text-purple-600 border-purple-100',
// // //                       iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
// // //                       class: '11', subject: 'Physics', topic: 'Center of Mass',
// // //                       questions: 10, marks: 20, due: '18 May 2024',
// // //                       desc: 'Problems based on center of mass and related concepts.'
// // //                     },
// // //                     {
// // //                       title: 'Rotational Motion – Practice Set 1',
// // //                       badge: 'Submitted',
// // //                       badgeBg: 'bg-purple-50 text-purple-600 border-purple-100',
// // //                       iconBg: 'bg-purple-50 border-purple-100 text-purple-600',
// // //                       class: '11', subject: 'Physics', topic: 'Moment of Inertia',
// // //                       questions: 12, marks: 24, due: '12 May 2024',
// // //                       desc: 'Problems on moment of inertia and rotational dynamics.'
// // //                     },
// // //                     {
// // //                       title: 'Gravitation – Practice Set 1',
// // //                       badge: 'Evaluated',
// // //                       badgeBg: 'bg-amber-50 text-amber-600 border-amber-100',
// // //                       iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
// // //                       class: '11', subject: 'Physics', topic: 'Universal Law of Gravitation',
// // //                       questions: 10, marks: 20, due: '08 May 2024',
// // //                       desc: 'Conceptual and numerical problems on gravitation.'
// // //                     },
// // //                   ].map((item, idx) => (
// // //                     <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
// // //                       <div className="flex items-start justify-between gap-3 border-b border-gray-50 pb-3">
// // //                         <div className="flex items-center gap-2.5">
// // //                           <div className={`w-9 h-9 rounded-xl border ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
// // //                             <FileText size={18} />
// // //                           </div>
// // //                           <div className="flex items-center gap-2 flex-wrap">
// // //                             <h3 className="font-extrabold text-indigo-950 text-xs">{item.title}</h3>
// // //                             <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${item.badgeBg}`}>
// // //                               {item.badge}
// // //                             </span>
// // //                           </div>
// // //                         </div>

// // //                         {/* Upload Answer Right Column */}
// // //                         <div className="text-right flex-shrink-0 border-l border-gray-100 pl-4 space-y-1">
// // //                           <p className="font-extrabold text-indigo-950 text-[10px]">Upload Answer Sheet</p>
// // //                           <p className="text-gray-400 text-[8px]">Upload clear images or PDF</p>
// // //                           <p className="text-gray-400 text-[8px] font-semibold">Max 10MB</p>
// // //                           <button className="mt-1 border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold px-3 py-1 rounded-xl text-[10px] transition cursor-pointer flex items-center gap-1.5 ml-auto shadow-2xs">
// // //                             <Upload size={11} /> Upload Now
// // //                           </button>
// // //                         </div>
// // //                       </div>

// // //                       {/* Details row */}
// // //                       <div className="space-y-1.5 text-[10px]">
// // //                         <div className="flex items-center gap-4 text-gray-600 font-medium flex-wrap">
// // //                           <span>Class: <strong className="text-gray-900">{item.class}</strong></span>
// // //                           <span>Subject: <strong className="text-gray-900">{item.subject}</strong></span>
// // //                           <span>Topic: <strong className="text-gray-900">{item.topic}</strong></span>
// // //                         </div>

// // //                         <div className="flex items-center gap-4 text-gray-500 flex-wrap">
// // //                           <span>Questions: <strong className="text-gray-900">{item.questions}</strong></span>
// // //                           <span>Marks: <strong className="text-gray-900">{item.marks}</strong></span>
// // //                           <span>Due: <strong className="text-gray-900">{item.due}</strong></span>
// // //                         </div>

// // //                         <p className="text-gray-500 text-[10px] pt-1 leading-snug">
// // //                           {item.desc}
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>

// // //                 {/* Load More Assignments */}
// // //                 <div className="text-center pt-1">
// // //                   <button className="text-blue-600 hover:underline font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer">
// // //                     Load More Assignments <ChevronDown size={14} />
// // //                   </button>
// // //                 </div>

// // //                 {/* Assignment Package Offer Banner */}
// // //                 <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-4 space-y-3">
// // //                   <div className="flex items-center justify-between gap-3">
// // //                     <div className="flex items-center gap-3">
// // //                       <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
// // //                         <Package size={24} />
// // //                       </div>
// // //                       <div>
// // //                         <h3 className="font-extrabold text-indigo-950 text-sm">Assignment Package</h3>
// // //                         <p className="text-gray-500 text-[10px]">
// // //                           Get complete practice and expert feedback at the best value.
// // //                         </p>
// // //                       </div>
// // //                     </div>

// // //                     <div className="flex items-center gap-4 flex-shrink-0 text-right">
// // //                       <div>
// // //                         <p className="font-black text-indigo-950 text-lg leading-tight">210</p>
// // //                         <p className="text-gray-400 text-[9px] font-semibold">Assignments</p>
// // //                       </div>

// // //                       <div>
// // //                         <p className="font-black text-emerald-600 text-xl leading-tight">₹599</p>
// // //                         <p className="text-gray-400 text-[9px] font-semibold">Only</p>
// // //                       </div>

// // //                       <div className="space-y-1">
// // //                         <span className="bg-emerald-600 text-white font-bold text-[8px] px-2 py-0.5 rounded-full uppercase block">
// // //                           Best Value
// // //                         </span>
// // //                         <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition cursor-pointer shadow-sm">
// // //                           Get Package Now
// // //                         </button>
// // //                         <p className="text-gray-400 text-[8px]">Valid for 12 Months</p>
// // //                       </div>
// // //                     </div>
// // //                   </div>

// // //                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-emerald-100 pt-2 text-[10px] text-gray-700 font-medium">
// // //                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> 210 Assignments</div>
// // //                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Expert Review & Feedback</div>
// // //                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Better Preparation</div>
// // //                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Best Value</div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Bottom Security Banner */}
// // //                 <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3 text-center flex items-center justify-center gap-2 text-blue-900 text-xs font-semibold">
// // //                   <ShieldCheck size={16} className="text-blue-600" />
// // //                   <span>Your data and submissions are safe and secure with GoodGuiders.</span>
// // //                 </div>

// // //               </div>
// // //             ) : activeTab.startsWith('Mock') ? (
// // //               /* ================= MOCK TESTS SECTION ================= */
// // //               <div className="space-y-6">
                
// // //                 {/* Header Title */}
// // //                 <div>
// // //                   <h2 className="text-lg font-extrabold text-indigo-950">Mock Tests</h2>
// // //                   <p className="text-gray-500 text-[11px] mt-0.5">
// // //                     Practice with structured mock tests to improve accuracy, speed and confidence.
// // //                   </p>
// // //                 </div>

// // //                 {/* 1. Choose Your Exam / Class */}
// // //                 <div className="space-y-2.5">
// // //                   <h3 className="font-bold text-gray-900 text-xs">1. Choose Your Exam / Class</h3>
// // //                   <p className="text-gray-400 text-[10px]">Select the exam or class for which you want to appear in mock tests.</p>
                  
// // //                   <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1">
// // //                     <div className="bg-blue-50/40 border-2 border-blue-600 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer shadow-sm">
// // //                       <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
// // //                         U
// // //                       </div>
// // //                       <div>
// // //                         <p className="font-bold text-gray-900 text-[11px]">NEET</p>
// // //                         <p className="text-gray-400 text-[9px]">UG</p>
// // //                       </div>
// // //                     </div>

// // //                     <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
// // //                       <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
// // //                         <BookOpen size={14} />
// // //                       </div>
// // //                       <div>
// // //                         <p className="font-bold text-gray-900 text-[11px]">JEE</p>
// // //                         <p className="text-gray-400 text-[9px]">(Main + Adv)</p>
// // //                       </div>
// // //                     </div>

// // //                     <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
// // //                       <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
// // //                         <Book size={14} />
// // //                       </div>
// // //                       <div>
// // //                         <p className="font-bold text-gray-900 text-[11px]">Class 11</p>
// // //                         <p className="text-gray-400 text-[9px]">(Physics)</p>
// // //                       </div>
// // //                     </div>

// // //                     <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
// // //                       <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
// // //                         <Book size={14} />
// // //                       </div>
// // //                       <div>
// // //                         <p className="font-bold text-gray-900 text-[11px]">Class 12</p>
// // //                         <p className="text-gray-400 text-[9px]">(Physics)</p>
// // //                       </div>
// // //                     </div>

// // //                     <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
// // //                       <div className="w-7 h-7 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
// // //                         <Layers size={14} />
// // //                       </div>
// // //                       <div>
// // //                         <p className="font-bold text-gray-900 text-[11px]">More</p>
// // //                         <p className="text-gray-400 text-[9px]">Exams</p>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* 2. Topic Wise Mock Tests */}
// // //                 <div className="space-y-2.5">
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <h3 className="font-bold text-gray-900 text-xs">2. Topic Wise Mock Tests</h3>
// // //                       <p className="text-gray-400 text-[10px]">Practice individual topics to strengthen specific concepts.</p>
// // //                     </div>
// // //                     <button className="text-blue-600 font-bold text-[11px] hover:underline flex items-center gap-0.5">
// // //                       View All Topics
// // //                     </button>
// // //                   </div>

// // //                   <div className="relative">
// // //                     <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
// // //                       {[
// // //                         { title: 'Current Electricity', icon: Zap, color: 'text-purple-600 bg-purple-50' },
// // //                         { title: 'Magnetism', icon: TargetIcon, color: 'text-rose-500 bg-rose-50' },
// // //                         { title: 'Ray Optics', icon: HelpCircle, color: 'text-blue-600 bg-blue-50' },
// // //                         { title: 'Thermodynamics', icon: Flame, color: 'text-pink-600 bg-pink-50' },
// // //                         { title: 'Oscillations', icon: Sparkles, color: 'text-emerald-600 bg-emerald-50' },
// // //                       ].map((item, idx) => {
// // //                         const Icon = item.icon;
// // //                         return (
// // //                           <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 text-center space-y-2 flex flex-col justify-between">
// // //                             <div className="space-y-1.5">
// // //                               <div className={`w-8 h-8 rounded-full ${item.color} mx-auto flex items-center justify-center`}>
// // //                                 <Icon size={16} />
// // //                               </div>
// // //                               <h4 className="font-bold text-indigo-950 text-[11px] h-7 flex items-center justify-center leading-tight">{item.title}</h4>
// // //                               <p className="text-gray-400 text-[9px]">25 Questions</p>
// // //                               <p className="text-gray-400 text-[9px]">100 Marks</p>
// // //                               <p className="font-extrabold text-indigo-950 text-xs">₹49</p>
// // //                             </div>
// // //                             <button className="w-full border border-pink-200 text-pink-600 hover:bg-pink-50 font-bold py-1 rounded-xl text-[10px] transition cursor-pointer">
// // //                               Start Test
// // //                             </button>
// // //                           </div>
// // //                         );
// // //                       })}
// // //                     </div>
// // //                     <button className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 border shadow-md text-gray-500 hover:text-gray-800">
// // //                       <ChevronRight size={14} />
// // //                     </button>
// // //                   </div>

// // //                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
// // //                     <CheckCircle2 size={13} className="text-emerald-600" />
// // //                     <span>Total Topics Available: 120+</span>
// // //                     <Info size={12} className="text-emerald-500" />
// // //                   </div>
// // //                 </div>

// // //                 {/* 3. Chapter Wise Mock Tests */}
// // //                 <div className="space-y-2.5">
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <h3 className="font-bold text-gray-900 text-xs">3. Chapter Wise Mock Tests</h3>
// // //                       <p className="text-gray-400 text-[10px]">Practice complete chapters to build strong fundamentals.</p>
// // //                     </div>
// // //                     <button className="text-blue-600 font-bold text-[11px] hover:underline">
// // //                       View All Chapters
// // //                     </button>
// // //                   </div>

// // //                   <div className="relative">
// // //                     <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
// // //                       {[
// // //                         'Current Electricity', 'Moving Charges & Magnetism', 'EMI & AC', 'Optics', 'Dual Nature of Radiation'
// // //                       ].map((title, idx) => (
// // //                         <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 text-center space-y-2 flex flex-col justify-between">
// // //                           <div className="space-y-1.5">
// // //                             <h4 className="font-bold text-indigo-950 text-[11px] h-8 flex items-center justify-center leading-tight">{title}</h4>
// // //                             <p className="text-gray-400 text-[9px]">20 Questions</p>
// // //                             <p className="text-gray-400 text-[9px]">80 Marks</p>
// // //                             <p className="font-extrabold text-indigo-950 text-xs">₹79</p>
// // //                           </div>
// // //                           <button className="w-full border border-emerald-300 text-emerald-600 hover:bg-emerald-50 font-bold py-1 rounded-xl text-[10px] transition cursor-pointer">
// // //                             Start Test
// // //                           </button>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                     <button className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 border shadow-md text-gray-500 hover:text-gray-800">
// // //                       <ChevronRight size={14} />
// // //                     </button>
// // //                   </div>

// // //                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
// // //                     <CheckCircle2 size={13} className="text-emerald-600" />
// // //                     <span>Total Chapters Available: 48+</span>
// // //                     <Info size={12} className="text-emerald-500" />
// // //                   </div>
// // //                 </div>

// // //                 {/* 4. Subject Wise Mock Tests */}
// // //                 <div className="space-y-2.5">
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <h3 className="font-bold text-gray-900 text-xs">4. Subject Wise Mock Tests</h3>
// // //                       <p className="text-gray-400 text-[10px]">Practice full syllabus of a subject to boost your preparation.</p>
// // //                     </div>
// // //                     <button className="border border-gray-200 text-gray-700 font-semibold text-[11px] px-2.5 py-1 rounded-lg flex items-center gap-1 bg-white">
// // //                       Select Subject <ChevronDown size={12} />
// // //                     </button>
// // //                   </div>

// // //                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
// // //                     {[
// // //                       { name: 'Physics', color: 'text-purple-600 border-purple-200' },
// // //                       { name: 'Chemistry', color: 'text-emerald-600 border-emerald-200' },
// // //                       { name: 'Botany', color: 'text-purple-600 border-purple-200' },
// // //                       { name: 'Zoology', color: 'text-amber-600 border-amber-200' },
// // //                     ].map((sub, idx) => (
// // //                       <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 space-y-2">
// // //                         <h4 className={`font-bold text-xs ${sub.color.split(' ')[0]}`}>{sub.name}</h4>
// // //                         <p className="text-gray-400 text-[9px]">90 Questions</p>
// // //                         <p className="text-gray-400 text-[9px]">360 Marks</p>
// // //                         <p className="font-extrabold text-indigo-950 text-xs">₹249</p>
// // //                         <button className={`w-full border ${sub.color} hover:bg-gray-50 font-bold py-1 rounded-xl text-[10px] transition cursor-pointer`}>
// // //                           Start Test
// // //                         </button>
// // //                       </div>
// // //                     ))}
// // //                   </div>

// // //                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
// // //                     <CheckCircle2 size={13} className="text-emerald-600" />
// // //                     <span>Total Subjects Covered: 4+</span>
// // //                     <Info size={12} className="text-emerald-500" />
// // //                   </div>
// // //                 </div>

// // //                 {/* 5. Full Length Mock Tests */}
// // //                 <div className="space-y-2.5">
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <h3 className="font-bold text-gray-900 text-xs">5. Full Length Mock Tests</h3>
// // //                       <p className="text-gray-400 text-[10px]">Simulate real exam environment and test your overall preparation.</p>
// // //                     </div>
// // //                     <button className="text-blue-600 font-bold text-[11px] hover:underline">
// // //                       View All Tests
// // //                     </button>
// // //                   </div>

// // //                   <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 overflow-x-auto">
// // //                     <table className="w-full text-left border-collapse min-w-[450px]">
// // //                       <thead>
// // //                         <tr className="border-b border-gray-100 text-gray-400 text-[10px]">
// // //                           <th className="pb-2 font-medium">Test Name</th>
// // //                           <th className="pb-2 font-medium text-center">Questions</th>
// // //                           <th className="pb-2 font-medium text-center">Marks</th>
// // //                           <th className="pb-2 font-medium text-center">Duration</th>
// // //                           <th className="pb-2 font-medium text-center">Price</th>
// // //                           <th className="pb-2 font-medium text-right">Action</th>
// // //                         </tr>
// // //                       </thead>
// // //                       <tbody className="divide-y divide-gray-50 text-[11px] text-gray-800">
// // //                         {['01', '02', '03', '04'].map((num) => (
// // //                           <tr key={num}>
// // //                             <td className="py-2.5 font-bold">NEET Full Test {num}</td>
// // //                             <td className="py-2.5 text-center text-gray-500">180</td>
// // //                             <td className="py-2.5 text-center text-gray-500">720</td>
// // //                             <td className="py-2.5 text-center text-gray-500">3h 20m</td>
// // //                             <td className="py-2.5 text-center font-bold">₹299</td>
// // //                             <td className="py-2.5 text-right">
// // //                               <button className="border border-red-200 text-red-500 hover:bg-red-50 font-bold px-3 py-1 rounded-lg text-[10px] transition cursor-pointer">
// // //                                 Start Test
// // //                               </button>
// // //                             </td>
// // //                           </tr>
// // //                         ))}
// // //                       </tbody>
// // //                     </table>
// // //                   </div>

// // //                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
// // //                     <CheckCircle2 size={13} className="text-emerald-600" />
// // //                     <span>Total Full Length Tests: 20+</span>
// // //                     <Info size={12} className="text-emerald-500" />
// // //                   </div>
// // //                 </div>

// // //                 {/* 6. Model Test Paper (Subjective) */}
// // //                 <div className="space-y-2.5">
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <h3 className="font-bold text-gray-900 text-xs">6. Model Test Paper (Subjective)</h3>
// // //                       <p className="text-gray-400 text-[10px]">Attempt subjective model papers and upload your answers for evaluation.</p>
// // //                     </div>
// // //                     <button className="text-blue-600 font-bold text-[11px] hover:underline">
// // //                       View All Papers
// // //                     </button>
// // //                   </div>

// // //                   <div className="space-y-2">
// // //                     {[
// // //                       { title: 'NEET Model Test Paper 01', price: '₹99' },
// // //                       { title: 'NEET Model Test Paper 02', price: '₹99' },
// // //                     ].map((paper, idx) => (
// // //                       <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 flex items-center justify-between gap-2">
// // //                         <div className="flex items-center gap-2.5">
// // //                           <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
// // //                             <FileText size={16} />
// // //                           </div>
// // //                           <div>
// // //                             <h4 className="font-bold text-gray-900 text-xs">{paper.title}</h4>
// // //                             <p className="text-gray-400 text-[9px] space-x-1.5">
// // //                               <span>Subject: Physics</span> • <span>Author: Mentor</span> • <span>Format: PDF</span> • <span className="font-bold text-gray-800">Price: {paper.price}</span>
// // //                             </p>
// // //                           </div>
// // //                         </div>

// // //                         <div className="flex items-center gap-2 flex-shrink-0">
// // //                           <button className="border border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-2.5 py-1 rounded-lg text-[10px] flex items-center gap-1 transition cursor-pointer">
// // //                             <Download size={11} /> Download Paper
// // //                           </button>
// // //                           <button className="border border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-2.5 py-1 rounded-lg text-[10px] flex items-center gap-1 transition cursor-pointer">
// // //                             <Upload size={11} /> Upload Answer
// // //                           </button>
// // //                         </div>
// // //                       </div>
// // //                     ))}
// // //                   </div>

// // //                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
// // //                     <CheckCircle2 size={13} className="text-emerald-600" />
// // //                     <span>Total Model Papers: 10+</span>
// // //                     <Info size={12} className="text-emerald-500" />
// // //                   </div>
// // //                 </div>

// // //                 {/* Bottom Promo: All Access Package */}
// // //                 <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-4 space-y-3 relative overflow-hidden">
// // //                   <div className="flex items-center justify-between">
// // //                     <div className="flex items-center gap-2">
// // //                       <Star size={18} className="text-amber-500 fill-amber-500" />
// // //                       <div>
// // //                         <h3 className="font-extrabold text-indigo-950 text-sm">All Access Package (Complete Mock Test Package)</h3>
// // //                         <p className="text-gray-500 text-[10px]">One purchase, Unlimited access.</p>
// // //                       </div>
// // //                     </div>
// // //                     <span className="bg-red-500 text-white font-bold text-[9px] px-2 py-0.5 rounded-full uppercase">
// // //                       Best Value
// // //                     </span>
// // //                   </div>

// // //                   <div className="flex items-baseline gap-2">
// // //                     <span className="text-gray-400 line-through text-xs">₹2599</span>
// // //                     <span className="text-indigo-950 font-black text-xl">₹1299</span>
// // //                     <span className="bg-emerald-100 text-emerald-800 font-bold text-[9px] px-1.5 py-0.5 rounded">50% OFF</span>
// // //                   </div>

// // //                   {/* Highlights Bullet List */}
// // //                   <div className="grid grid-cols-2 gap-1.5 text-[10px] text-gray-700">
// // //                     <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> All Test Series + All Subjects</div>
// // //                     <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> Unlimited Practice • 12 Months Validity</div>
// // //                     <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> Regularly Updated Content</div>
// // //                     <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> One-time Payment</div>
// // //                   </div>

// // //                   {/* Icon Grid Stats */}
// // //                   <div className="grid grid-cols-5 gap-2 text-center pt-2 border-t border-amber-200/60">
// // //                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
// // //                       <Star size={14} className="mx-auto text-amber-500 mb-0.5" />
// // //                       <p className="text-gray-400 text-[8px]">Topic Wise Tests</p>
// // //                       <p className="font-extrabold text-indigo-950 text-xs">120+</p>
// // //                       <p className="text-gray-400 text-[8px]">Topics</p>
// // //                     </div>
// // //                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
// // //                       <Book size={14} className="mx-auto text-emerald-500 mb-0.5" />
// // //                       <p className="text-gray-400 text-[8px]">Chapter Wise Tests</p>
// // //                       <p className="font-extrabold text-indigo-950 text-xs">48+</p>
// // //                       <p className="text-gray-400 text-[8px]">Chapters</p>
// // //                     </div>
// // //                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
// // //                       <BookOpen size={14} className="mx-auto text-blue-500 mb-0.5" />
// // //                       <p className="text-gray-400 text-[8px]">Subject Wise Tests</p>
// // //                       <p className="font-extrabold text-indigo-950 text-xs">4+</p>
// // //                       <p className="text-gray-400 text-[8px]">Subjects</p>
// // //                     </div>
// // //                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
// // //                       <Calendar size={14} className="mx-auto text-purple-500 mb-0.5" />
// // //                       <p className="text-gray-400 text-[8px]">Full Length Tests</p>
// // //                       <p className="font-extrabold text-indigo-950 text-xs">20+</p>
// // //                       <p className="text-gray-400 text-[8px]">Tests</p>
// // //                     </div>
// // //                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
// // //                       <FileText size={14} className="mx-auto text-pink-500 mb-0.5" />
// // //                       <p className="text-gray-400 text-[8px]">Model Test Papers</p>
// // //                       <p className="font-extrabold text-indigo-950 text-xs">10+</p>
// // //                       <p className="text-gray-400 text-[8px]">Papers</p>
// // //                     </div>
// // //                   </div>

// // //                   <div className="pt-2 space-y-2">
// // //                     <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer">
// // //                       Buy All Access Package
// // //                     </button>
// // //                     <p className="text-center text-gray-500 text-[9px]">
// // //                       All tests are exam pattern based and regularly updated.
// // //                     </p>
// // //                   </div>
// // //                 </div>

// // //               </div>
// // //             ) : activeTab === 'Services' ? (
// // //               /* ================= MY SERVICES SECTION ================= */
// // //               <div className="space-y-4">
// // //                 {/* Header Card */}
// // //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
// // //                   <h2 className="text-base font-bold text-indigo-950">My Services</h2>
// // //                   <p className="text-gray-500 text-xs">
// // //                     Complete mentorship support to help you learn better, practice smart and achieve your goals.
// // //                   </p>

// // //                   {/* Highlights Grid */}
// // //                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
// // //                     <div className="bg-emerald-50/60 border border-emerald-100 p-2.5 rounded-xl flex items-center gap-2">
// // //                       <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
// // //                         <User size={14} />
// // //                       </div>
// // //                       <div>
// // //                         <p className="font-bold text-gray-800 text-[10px]">Personalized</p>
// // //                         <p className="text-gray-500 text-[9px]">1-on-1 Guidance</p>
// // //                       </div>
// // //                     </div>

// // //                     <div className="bg-purple-50/60 border border-purple-100 p-2.5 rounded-xl flex items-center gap-2">
// // //                       <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
// // //                         <Sparkles size={14} />
// // //                       </div>
// // //                       <div>
// // //                         <p className="font-bold text-gray-800 text-[10px]">Concept Clarity</p>
// // //                         <p className="text-gray-500 text-[9px]">& Doubt Solving</p>
// // //                       </div>
// // //                     </div>

// // //                     <div className="bg-blue-50/60 border border-blue-100 p-2.5 rounded-xl flex items-center gap-2">
// // //                       <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
// // //                         <BarChart2 size={14} />
// // //                       </div>
// // //                       <div>
// // //                         <p className="font-bold text-gray-800 text-[10px]">Regular Tests &</p>
// // //                         <p className="text-gray-500 text-[9px]">Performance Analysis</p>
// // //                       </div>
// // //                     </div>

// // //                     <div className="bg-amber-50/60 border border-amber-100 p-2.5 rounded-xl flex items-center gap-2">
// // //                       <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
// // //                         <Calendar size={14} />
// // //                       </div>
// // //                       <div>
// // //                         <p className="font-bold text-gray-800 text-[10px]">Flexible Schedule</p>
// // //                         <p className="text-gray-500 text-[9px]">as per your need</p>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <h3 className="font-bold text-indigo-950 text-sm pl-1">All Services</h3>

// // //                 {/* 1. One-to-One Mentorship */}
// // //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// // //                   <div className="flex items-start justify-between">
// // //                     <div className="flex gap-3">
// // //                       <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
// // //                         <User size={20} />
// // //                       </div>
// // //                       <div>
// // //                         <h4 className="font-bold text-gray-900 text-sm">One-to-One Mentorship</h4>
// // //                         <p className="text-gray-500 text-xs mt-0.5">
// // //                           Personalized 1-on-1 mentorship tailored to your learning needs and exam goals.
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                     <div className="text-right flex-shrink-0 ml-2">
// // //                       <p className="font-extrabold text-gray-900 text-base">₹2,499 <span className="text-[10px] text-gray-400 font-normal">/month</span></p>
// // //                       <button className="mt-1.5 border border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// // //                         Book Now
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Personalized 1-on-1 Guidance</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Doubt Solving (Chat + Session)</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Weekly Tests & Performance Report</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Study Plan & Strategy Guidance</div>
// // //                   </div>
// // //                 </div>

// // //                 {/* 2. Doubt Clearing (One Time) */}
// // //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// // //                   <div className="flex items-start justify-between">
// // //                     <div className="flex gap-3">
// // //                       <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
// // //                         <FileText size={20} />
// // //                       </div>
// // //                       <div>
// // //                         <h4 className="font-bold text-gray-900 text-sm">Doubt Clearing (One Time)</h4>
// // //                         <p className="text-gray-500 text-xs mt-0.5">
// // //                           Get your specific doubts solved with clear explanations by {mentor.name}.
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                     <div className="text-right flex-shrink-0 ml-2">
// // //                       <p className="font-extrabold text-gray-900 text-base">₹299 <span className="text-[10px] text-gray-400 font-normal">/session</span></p>
// // //                       <button className="mt-1.5 border border-purple-500 text-purple-600 hover:bg-purple-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// // //                         Book Now
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Concept-based Explanation</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Numerical Problem Solving</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Theory Doubt Clarification</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Quick & Effective Solutions</div>
// // //                   </div>
// // //                 </div>

// // //                 {/* 3. Test Evaluation & Feedback */}
// // //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// // //                   <div className="flex items-start justify-between">
// // //                     <div className="flex gap-3">
// // //                       <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0">
// // //                         <FileText size={20} />
// // //                       </div>
// // //                       <div>
// // //                         <h4 className="font-bold text-gray-900 text-sm">Test Evaluation & Feedback</h4>
// // //                         <p className="text-gray-500 text-xs mt-0.5">
// // //                           Upload your test and get detailed evaluation with suggestions to improve your performance.
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                     <div className="text-right flex-shrink-0 ml-2">
// // //                       <p className="font-extrabold text-gray-900 text-base">₹199 <span className="text-[10px] text-gray-400 font-normal">/test</span></p>
// // //                       <button className="mt-1.5 border border-orange-500 text-orange-600 hover:bg-orange-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// // //                         Upload Now
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Detailed Evaluation & Scoring</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Mistake Analysis & Improvement Tips</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Performance Comparison</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Personalized Feedback</div>
// // //                   </div>
// // //                 </div>

// // //                 {/* 4. Regular Tests & Performance Analysis */}
// // //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// // //                   <div className="flex items-start justify-between">
// // //                     <div className="flex gap-3">
// // //                       <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
// // //                         <Calendar size={20} />
// // //                       </div>
// // //                       <div>
// // //                         <h4 className="font-bold text-gray-900 text-sm">Regular Tests & Performance Analysis</h4>
// // //                         <p className="text-gray-500 text-xs mt-0.5">
// // //                           Take regular tests and get in-depth performance analysis to track your progress.
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                     <div className="text-right flex-shrink-0 ml-2">
// // //                       <p className="font-extrabold text-gray-900 text-base">₹399 <span className="text-[10px] text-gray-400 font-normal">/test</span></p>
// // //                       <button className="mt-1.5 border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// // //                         Enroll Now
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Subject-wise Tests</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> All India Rank Tracking</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Detailed Performance Analysis</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Improvement Roadmap</div>
// // //                   </div>
// // //                 </div>

// // //                 {/* 5. Custom Study Plan */}
// // //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// // //                   <div className="flex items-start justify-between">
// // //                     <div className="flex gap-3">
// // //                       <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0">
// // //                         <Target size={20} />
// // //                       </div>
// // //                       <div>
// // //                         <h4 className="font-bold text-gray-900 text-sm">Custom Study Plan</h4>
// // //                         <p className="text-gray-500 text-xs mt-0.5">
// // //                           Personalized study plan designed around your strengths, weaknesses and target exam.
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                     <div className="text-right flex-shrink-0 ml-2">
// // //                       <p className="font-extrabold text-gray-900 text-base">₹999 <span className="text-[10px] text-gray-400 font-normal">/plan</span></p>
// // //                       <button className="mt-1.5 border border-rose-400 text-rose-500 hover:bg-rose-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// // //                         Get Plan
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Chapter-wise Plan</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Daily/Weekly Targets</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Smart Study Strategy</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Revision Schedule</div>
// // //                   </div>
// // //                 </div>

// // //                 {/* 6. Chat Support (Priority) */}
// // //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// // //                   <div className="flex items-start justify-between">
// // //                     <div className="flex gap-3">
// // //                       <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
// // //                         <MessageCircle size={20} />
// // //                       </div>
// // //                       <div>
// // //                         <h4 className="font-bold text-gray-900 text-sm">Chat Support (Priority)</h4>
// // //                         <p className="text-gray-500 text-xs mt-0.5">
// // //                           Priority chat support for quick doubt solving and guidance whenever you need.
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                     <div className="text-right flex-shrink-0 ml-2">
// // //                       <p className="font-extrabold text-gray-900 text-base">₹499 <span className="text-[10px] text-gray-400 font-normal">/month</span></p>
// // //                       <button className="mt-1.5 border border-teal-500 text-teal-600 hover:bg-teal-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// // //                         Get Access
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Priority Response</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Unlimited Doubt Solving (Chat)</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Study & Exam Guidance</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Motivation & Support</div>
// // //                   </div>
// // //                 </div>

// // //                 {/* 7. Home Tuition (Offline) */}
// // //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// // //                   <div className="flex items-start justify-between">
// // //                     <div className="flex gap-3">
// // //                       <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
// // //                         <Home size={20} />
// // //                       </div>
// // //                       <div>
// // //                         <h4 className="font-bold text-gray-900 text-sm">Home Tuition (Offline)</h4>
// // //                         <p className="text-gray-500 text-xs mt-0.5">
// // //                           Personalized home tuition at your location for focused learning and doubt solving.
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                     <div className="text-right flex-shrink-0 ml-2">
// // //                       <p className="font-extrabold text-gray-900 text-base">₹1,499 <span className="text-[10px] text-gray-400 font-normal">/hour</span></p>
// // //                       <button className="mt-1.5 border border-amber-400 text-amber-600 hover:bg-amber-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// // //                         Enquire Now
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Personalized Teaching</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Concept Clarity & Practice</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Flexible Schedule</div>
// // //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Regular Test & Assessment</div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Footer Banner */}
// // //                 <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3 text-center flex items-center justify-center gap-2 text-blue-900 text-xs font-semibold">
// // //                   <ShieldCheck size={16} className="text-blue-600" />
// // //                   <span>All online sessions are conducted via Google Meet / Zoom.</span>
// // //                 </div>

// // //               </div>
// // //             ) : (
// // //               /* ================= DEFAULT OVERVIEW SECTION ================= */
// // //               <>
// // //                 {/* Overview Card */}
// // //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// // //                   <div>
// // //                     <h3 className="text-sm font-bold text-gray-900">Overview</h3>
// // //                     <p className="text-gray-500 text-xs mt-1">
// // //                       Expert Physics mentor for NEET with 8+ years of teaching experience. Helping students build strong concepts and achieve their goals.
// // //                     </p>
// // //                   </div>

// // //                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3 flex items-center justify-between">
// // //                     <div>
// // //                       <p className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider">Availability Status</p>
// // //                       <p className="text-emerald-700 font-semibold text-xs flex items-center gap-1.5 mt-0.5">
// // //                         <CheckCircle2 size={14} className="fill-emerald-500 text-white" /> Available for Sessions
// // //                       </p>
// // //                     </div>
// // //                     <p className="text-gray-500 text-[10px] flex items-center gap-1">
// // //                       <Clock size={12} /> Typically replies within 2 hours
// // //                     </p>
// // //                   </div>

// // //                   <div className="grid grid-cols-4 gap-2 pt-2">
// // //                     <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
// // //                       <p className="font-bold text-gray-900 text-sm">{mentor.studentsCount}</p>
// // //                       <p className="text-gray-500 text-[10px] mt-0.5">Students Mentored</p>
// // //                     </div>
// // //                     <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
// // //                       <p className="font-bold text-gray-900 text-sm">{mentor.experienceYears}+</p>
// // //                       <p className="text-gray-500 text-[10px] mt-0.5">Years Experience</p>
// // //                     </div>
// // //                     <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
// // //                       <p className="font-bold text-gray-900 text-sm">5+</p>
// // //                       <p className="text-gray-500 text-[10px] mt-0.5">Subjects Teaching</p>
// // //                     </div>
// // //                     <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
// // //                       <p className="font-bold text-gray-900 text-sm">98%</p>
// // //                       <p className="text-gray-500 text-[10px] mt-0.5">Satisfaction Rate</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* About the Mentor Section */}
// // //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// // //                   <h3 className="text-sm font-bold text-gray-900 border-b pb-2">About the Mentor</h3>
// // //                   <p className="text-gray-600 text-xs leading-relaxed">
// // //                     {mentor.name} is a Physics expert with over 8 years of teaching experience. He specializes in making complex concepts simple and improving problem solving skills. He has mentored thousands of NEET aspirants with a proven track record of results.
// // //                   </p>

// // //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
// // //                     <div className="space-y-2">
// // //                       {[
// // //                         'Conceptual teaching with real-life examples',
// // //                         'Focused on NCERT + Advanced problem solving',
// // //                         'Personalized mentoring & doubt clearing',
// // //                         'Regular tests and performance analysis',
// // //                         'Complete guidance for NEET Physics',
// // //                       ].map((point, idx) => (
// // //                         <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
// // //                           <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
// // //                           <span>{point}</span>
// // //                         </div>
// // //                       ))}
// // //                     </div>

// // //                     <div className="bg-purple-50/40 border border-purple-100 p-3 rounded-xl space-y-2">
// // //                       <p className="font-bold text-purple-900 text-xs">Teaching Expertise</p>
// // //                       <div className="flex flex-wrap gap-1.5">
// // //                         {['Concept Building', 'Problem Solving', 'NCERT Mastery', 'Exam Strategy', 'Doubt Solving', 'Physics Basics'].map((exp) => (
// // //                           <span key={exp} className="bg-white text-purple-700 border border-purple-200 text-[10px] font-medium px-2.5 py-1 rounded-lg">
// // //                             {exp}
// // //                           </span>
// // //                         ))}
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Teaching Subjects & Topics */}
// // //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// // //                   <h3 className="text-sm font-bold text-gray-900 border-b pb-2">Teaching Subjects & Topics</h3>
                  
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {['Physics', 'Mathematics', 'Chemistry', 'Biology', 'Aptitude'].map((sub, i) => (
// // //                       <span 
// // //                         key={sub} 
// // //                         className={`px-3 py-1 rounded-lg text-xs font-semibold ${
// // //                           i === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'
// // //                         }`}
// // //                       >
// // //                         {sub}
// // //                       </span>
// // //                     ))}
// // //                   </div>

// // //                   <div>
// // //                     <p className="font-bold text-gray-800 text-xs mb-2">Physics Topics Covered</p>
// // //                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
// // //                       {[
// // //                         'Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics',
// // //                         'Kinematics', 'Work, Energy & Power', 'Waves & Oscillations', 'Semiconductors', 'Atoms & Nuclei'
// // //                       ].map((topic) => (
// // //                         <div key={topic} className="flex items-center gap-2 border border-gray-100 p-2 rounded-xl bg-gray-50/50 text-xs text-gray-700">
// // //                           <BookOpen size={13} className="text-[#FF5722]" />
// // //                           <span className="text-[11px] font-medium truncate">{topic}</span>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   </div>

// // //                   <div className="text-center pt-2">
// // //                     <button className="text-[#FF5722] hover:underline font-semibold text-xs inline-flex items-center gap-1">
// // //                       View All Topics <ChevronRight size={13} />
// // //                     </button>
// // //                   </div>
// // //                 </div>

// // //                 {/* Teaching Approach */}
// // //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// // //                   <h3 className="text-sm font-bold text-gray-900 border-b pb-2">Teaching Approach</h3>
// // //                   <div className="grid grid-cols-2 gap-3">
// // //                     <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
// // //                       <p className="font-bold text-gray-800 text-xs mb-1">Concept First</p>
// // //                       <p className="text-gray-500 text-[10px]">Clear concepts first, then move to problems for better understanding.</p>
// // //                     </div>
// // //                     <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
// // //                       <p className="font-bold text-gray-800 text-xs mb-1">Practice Oriented</p>
// // //                       <p className="text-gray-500 text-[10px]">Regular practice with PYQs, NCERT & Advanced questions.</p>
// // //                     </div>
// // //                     <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
// // //                       <p className="font-bold text-gray-800 text-xs mb-1">Performance Tracking</p>
// // //                       <p className="text-gray-500 text-[10px]">Tests and analysis to track progress and improve weak areas.</p>
// // //                     </div>
// // //                     <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
// // //                       <p className="font-bold text-gray-800 text-xs mb-1">Doubt Support</p>
// // //                       <p className="text-gray-500 text-[10px]">Quick doubt resolution and personal attention for every student.</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Student Impact Section */}
// // //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// // //                   <h3 className="text-sm font-bold text-gray-900">Student Impact</h3>
// // //                   <p className="text-gray-500 text-xs">Results and feedback from my amazing students.</p>

// // //                   <div className="grid grid-cols-4 gap-2">
// // //                     <div className="bg-emerald-50/50 border border-emerald-100 p-2.5 rounded-xl text-center">
// // //                       <p className="font-bold text-emerald-700 text-xs">{mentor.studentsCount}</p>
// // //                       <p className="text-gray-500 text-[9px]">Students Mentored</p>
// // //                     </div>
// // //                     <div className="bg-blue-50/50 border border-blue-100 p-2.5 rounded-xl text-center">
// // //                       <p className="font-bold text-blue-700 text-xs">650+</p>
// // //                       <p className="text-gray-500 text-[9px]">Students Scored 650+ in NEET</p>
// // //                     </div>
// // //                     <div className="bg-purple-50/50 border border-purple-100 p-2.5 rounded-xl text-center">
// // //                       <p className="font-bold text-purple-700 text-xs">320+</p>
// // //                       <p className="text-gray-500 text-[9px]">Students Scored 700+ in NEET</p>
// // //                     </div>
// // //                     <div className="bg-amber-50/50 border border-amber-100 p-2.5 rounded-xl text-center">
// // //                       <p className="font-bold text-amber-700 text-xs">95%</p>
// // //                       <p className="text-gray-500 text-[9px]">Students Improved by 2+ Ranks</p>
// // //                     </div>
// // //                   </div>

// // //                   {/* Highlight Quote Block */}
// // //                   <div className="bg-emerald-50/40 border border-emerald-100 p-3.5 rounded-xl text-xs text-gray-700 italic space-y-2">
// // //                     <p className="text-emerald-900 font-medium">
// // //                       "Mentor who explains Physics in such an easy way that even the toughest topics feel simple. His guidance and support made a huge difference in my NEET preparation."
// // //                     </p>
// // //                     <p className="text-right text-gray-500 text-[10px] font-bold not-italic">- Ananya Sharma</p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Bottom Callout Banner */}
// // //                 <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-5 text-center space-y-3">
// // //                   <h3 className="font-bold text-gray-900 text-sm">Want to learn from {mentor.name}?</h3>
// // //                   <p className="text-gray-500 text-xs">Book a session now and take a step closer to your NEET success.</p>
// // //                   <button className="bg-[#FF5722] hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer inline-flex items-center gap-2">
// // //                     <Calendar size={14} /> Book a Session Now
// // //                   </button>
// // //                 </div>
// // //               </>
// // //             )}

// // //           </div>

// // //           {/* ================= RIGHT COLUMN: AVAILABILITY & REVIEWS (col-span-3) ================= */}
// // //           <div className="lg:col-span-3 space-y-4">
            
// // //             {/* Availability Slots Calendar Card */}
// // //             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
// // //               <div className="flex items-center justify-between border-b pb-2">
// // //                 <h3 className="font-bold text-gray-900 text-xs flex items-center gap-1.5">
// // //                   <Calendar size={14} className="text-[#FF5722]" /> Availability
// // //                 </h3>
// // //                 <span className="text-[#FF5722] font-semibold text-[10px] hover:underline cursor-pointer">View Calendar</span>
// // //               </div>

// // //               <div className="space-y-3 text-[11px]">
// // //                 <div>
// // //                   <p className="font-bold text-gray-800 text-[10px] mb-1.5">Today, 24 May</p>
// // //                   <div className="grid grid-cols-2 gap-2">
// // //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">6:00 PM</button>
// // //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">8:00 PM</button>
// // //                   </div>
// // //                 </div>

// // //                 <div>
// // //                   <p className="font-bold text-gray-800 text-[10px] mb-1.5">Sun, 25 May</p>
// // //                   <div className="grid grid-cols-2 gap-2">
// // //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">10:00 AM</button>
// // //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">4:00 PM</button>
// // //                   </div>
// // //                 </div>

// // //                 <div>
// // //                   <p className="font-bold text-gray-800 text-[10px] mb-1.5">Mon, 26 May</p>
// // //                   <div className="grid grid-cols-2 gap-2">
// // //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">6:00 PM</button>
// // //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">8:00 PM</button>
// // //                   </div>
// // //                 </div>

// // //                 <div>
// // //                   <p className="font-bold text-gray-800 text-[10px] mb-1.5">Tue, 27 May</p>
// // //                   <div className="grid grid-cols-2 gap-2">
// // //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">6:00 PM</button>
// // //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">9:00 PM</button>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="text-center pt-1 border-t border-dashed border-gray-100">
// // //                 <button className="text-gray-500 hover:text-gray-800 font-semibold text-[10px] inline-flex items-center gap-1">
// // //                   More slots available <ChevronDown size={12} />
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* Student Reviews Widget */}
// // //             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
// // //               <div className="flex items-center justify-between border-b pb-2">
// // //                 <h3 className="font-bold text-gray-900 text-xs">Student Reviews</h3>
// // //                 <span className="flex items-center gap-1 text-xs font-bold text-gray-800">
// // //                   <Star size={12} fill="#f59e0b" className="text-amber-500" /> {mentor.rating} ({mentor.reviewsCount})
// // //                 </span>
// // //               </div>

// // //               <div className="space-y-3 text-[11px]">
// // //                 {/* Review 1 */}
// // //                 <div className="border-b border-gray-100 pb-2.5 space-y-1">
// // //                   <div className="flex items-center gap-2">
// // //                     <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Ananya" className="w-6 h-6 rounded-full object-cover" />
// // //                     <div>
// // //                       <p className="font-bold text-gray-800 text-[10px]">Ananya Sharma</p>
// // //                       <div className="flex text-amber-500">
// // //                         {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#f59e0b" />)}
// // //                       </div>
// // //                     </div>
// // //                     <span className="ml-auto text-gray-400 text-[9px]">16 May 2024</span>
// // //                   </div>
// // //                   <p className="text-gray-600 text-[10px] leading-snug">
// // //                     Sir explains Physics in such an easy way that even the toughest topics feel simple. Highly recommended!
// // //                   </p>
// // //                 </div>

// // //                 {/* Review 2 */}
// // //                 <div className="border-b border-gray-100 pb-2.5 space-y-1">
// // //                   <div className="flex items-center gap-2">
// // //                     <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Rohit" className="w-6 h-6 rounded-full object-cover" />
// // //                     <div>
// // //                       <p className="font-bold text-gray-800 text-[10px]">Rohit Kumar</p>
// // //                       <div className="flex text-amber-500">
// // //                         {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#f59e0b" />)}
// // //                       </div>
// // //                     </div>
// // //                     <span className="ml-auto text-gray-400 text-[9px]">12 May 2024</span>
// // //                   </div>
// // //                   <p className="text-gray-600 text-[10px] leading-snug">
// // //                     Best mentor for NEET Physics. Regular practice sessions and doubt solving sessions are very helpful.
// // //                   </p>
// // //                 </div>

// // //                 {/* Review 3 */}
// // //                 <div className="space-y-1">
// // //                   <div className="flex items-center gap-2">
// // //                     <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Pooja" className="w-6 h-6 rounded-full object-cover" />
// // //                     <div>
// // //                       <p className="font-bold text-gray-800 text-[10px]">Pooja Verma</p>
// // //                       <div className="flex text-amber-500">
// // //                         {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#f59e0b" />)}
// // //                       </div>
// // //                     </div>
// // //                     <span className="ml-auto text-gray-400 text-[9px]">10 May 2024</span>
// // //                   </div>
// // //                   <p className="text-gray-600 text-[10px] leading-snug">
// // //                     The notes and quizzes provided by sir are excellent. Mock tests really help in exam preparation.
// // //                   </p>
// // //                 </div>
// // //               </div>

// // //               <div className="text-center pt-2 border-t border-gray-100">
// // //                 <button className="text-[#FF5722] hover:underline font-semibold text-xs inline-flex items-center gap-1">
// // //                   View all reviews <ChevronRight size={13} />
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             {/* New Student Offer Promo Box */}
// // //             <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-4 text-white text-center space-y-2 shadow-sm relative overflow-hidden">
// // //               <Gift size={28} className="mx-auto text-orange-100" />
// // //               <h4 className="font-bold text-sm">New Student Offer</h4>
// // //               <p className="text-orange-100 text-[10px]">Get 10% OFF on your first session with any service.</p>
// // //               <button className="w-full bg-white text-[#FF5722] font-bold py-2 rounded-xl text-xs hover:bg-orange-50 transition cursor-pointer shadow-sm">
// // //                 Apply Offer
// // //               </button>
// // //             </div>

// // //           </div>

// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // Small helper component for Globe icon
// // // function GlobeIcon({ size, className }: { size: number; className?: string }) {
// // //   return (
// // //     <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
// // //       <circle cx="12" cy="12" r="10"/>
// // //       <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
// // //       <path d="M2 12h20"/>
// // //     </svg>
// // //   );
// // // }




// // import React, { useState, useMemo } from 'react';
// // import { useLocation } from 'wouter';
// // import { 
// //   Star, Clock, CheckCircle2, ArrowLeft, Award, BookOpen, User, 
// //   MessageSquare, Calendar, ChevronDown, ShieldCheck,
// //   Sparkles, Gift, FileText, HelpCircle, Layers, GraduationCap,
// //   Home, BarChart2, Target, MessageCircle, ChevronRight, Download, Upload, Info,
// //   Flame, Zap, Book, Check, Target as TargetIcon, Filter, IndianRupee, Lock, Package,
// //   Eye, PlayCircle, Video
// // } from 'lucide-react';
// // import { INITIAL_MENTORS, Mentor } from './Mentordetail';

// // export default function MentorProfilePage() {
// //   const [, setLocation] = useLocation();
// //   const [activeTab, setActiveTab] = useState<string>('Overview');

// //   const mentorQueryParam = useMemo(() => {
// //     const params = new URLSearchParams(window.location.search);
// //     return params.get('name') || params.get('id');
// //   }, []);

// //   const mentor: Mentor = useMemo(() => {
// //     if (!mentorQueryParam) return INITIAL_MENTORS[0];

// //     const rawParam = decodeURIComponent(mentorQueryParam).trim().toLowerCase();

// //     const found = INITIAL_MENTORS.find((m) => {
// //       const mentorSlug = m.name
// //         .toLowerCase()
// //         .replace(/[^a-z0-9\s-]/g, '')
// //         .trim()
// //         .replace(/\s+/g, '-');

// //       return (
// //         mentorSlug === rawParam ||
// //         m.name.toLowerCase() === rawParam ||
// //         m.id === Number(rawParam)
// //       );
// //     });

// //     return found || INITIAL_MENTORS[0];
// //   }, [mentorQueryParam]);

// //   return (
// //     <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs pb-12">
// //       <div className="w-full max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 py-4 space-y-4">
        
// //         {/* Breadcrumb Navigation & Back Button */}
// //         <div className="flex items-center justify-between">
// //           <button 
// //             onClick={() => setLocation('/mentordetail')}
// //             className="flex items-center gap-1.5 text-[#FF5722] font-semibold text-xs bg-orange-50 hover:bg-orange-100 border border-orange-200 px-3 py-1.5 rounded-lg transition cursor-pointer"
// //           >
// //             <ArrowLeft size={13} /> Back to List
// //           </button>
// //         </div>

// //         {/* ================= MAIN 3-COLUMN LAYOUT ================= */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
// //           {/* ================= LEFT COLUMN: PROFILE SIDEBAR (col-span-3) ================= */}
// //           <div className="lg:col-span-3 space-y-4">
            
// //             {/* Main Profile Header Card */}
// //             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center relative overflow-hidden">
// //               <span className="absolute top-3 right-3 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
// //                 Available Now
// //               </span>

// //               <div className="relative inline-block my-2">
// //                 <img
// //                   src={mentor.image}
// //                   alt={mentor.name}
// //                   className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-emerald-50"
// //                 />
// //                 <CheckCircle2
// //                   size={20}
// //                   className="text-white bg-emerald-500 rounded-full absolute bottom-1 right-1 fill-emerald-500"
// //                 />
// //               </div>

// //               <h2 className="font-bold text-gray-900 text-base">{mentor.name}</h2>
// //               <p className="text-emerald-600 text-xs font-semibold mt-0.5">{mentor.role}</p>
              
// //               <div className="flex items-center justify-center gap-1 text-xs text-gray-600 mt-2">
// //                 <Star size={13} fill="#f59e0b" className="text-amber-500" />
// //                 <span className="font-bold text-gray-800">{mentor.rating}</span>
// //                 <span className="text-gray-400">({mentor.reviewsCount} Reviews)</span>
// //               </div>

// //               <div className="space-y-2 mt-4">
// //                 <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer flex items-center justify-center gap-2">
// //                   <Calendar size={14} /> Book a Session
// //                 </button>
// //                 <button className="w-full border border-orange-200 text-[#FF5722] hover:bg-orange-50 font-bold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-2">
// //                   <MessageSquare size={14} /> Message Mentor
// //                 </button>
// //               </div>
// //             </div>

// //             {/* About Me Details Card */}
// //             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
// //               <h3 className="font-bold text-gray-900 text-xs border-b pb-2">About Me</h3>
// //               <p className="text-gray-600 text-[11px] leading-relaxed">
// //                 I make Physics simple and concept-based. My focus is on building strong fundamentals and problem solving skills to help students crack NEET with confidence.
// //               </p>

// //               <div className="space-y-2.5 pt-2 text-[11px]">
// //                 <div className="flex items-start gap-2.5">
// //                   <Clock size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
// //                   <div>
// //                     <p className="text-gray-400 text-[10px]">Experience</p>
// //                     <p className="font-semibold text-gray-800">{mentor.experienceYears}+ Years</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-start gap-2.5">
// //                   <User size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
// //                   <div>
// //                     <p className="text-gray-400 text-[10px]">Students Mentored</p>
// //                     <p className="font-semibold text-gray-800">{mentor.studentsCount}</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-start gap-2.5">
// //                   <GraduationCap size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
// //                   <div>
// //                     <p className="text-gray-400 text-[10px]">Qualification</p>
// //                     <p className="font-semibold text-gray-800">B.Tech, M.Tech (IIT Delhi)</p>
// //                     <p className="text-gray-500 text-[10px]">Ph.D. in Applied Physics</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-start gap-2.5">
// //                   <Award size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
// //                   <div>
// //                     <p className="text-gray-400 text-[10px]">Institute</p>
// //                     <p className="font-semibold text-gray-800">IIT Delhi Alumni</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-start gap-2.5">
// //                   <GlobeIcon size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
// //                   <div>
// //                     <p className="text-gray-400 text-[10px]">Languages</p>
// //                     <p className="font-semibold text-gray-800">English, Hindi</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex items-start gap-2.5">
// //                   <BookOpen size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
// //                   <div>
// //                     <p className="text-gray-400 text-[10px]">Teaching Mode</p>
// //                     <p className="font-semibold text-gray-800">Online • Home Tuition • Guidance</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Quick Stats Grid */}
// //             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-2">
// //               <h3 className="font-bold text-gray-900 text-xs mb-2">Quick Stats</h3>
// //               <div className="grid grid-cols-2 gap-2">
// //                 <div className="bg-emerald-50/50 border border-emerald-100 p-2.5 rounded-xl text-center">
// //                   <p className="text-emerald-700 font-bold text-xs">{mentor.studentsCount}</p>
// //                   <p className="text-gray-500 text-[9px] mt-0.5">Students Mentored</p>
// //                 </div>
// //                 <div className="bg-blue-50/50 border border-blue-100 p-2.5 rounded-xl text-center">
// //                   <p className="text-blue-700 font-bold text-xs">{mentor.experienceYears}+ Years</p>
// //                   <p className="text-gray-500 text-[9px] mt-0.5">Teaching Experience</p>
// //                 </div>
// //                 <div className="bg-amber-50/50 border border-amber-100 p-2.5 rounded-xl text-center">
// //                   <p className="text-amber-700 font-bold text-xs">98%</p>
// //                   <p className="text-gray-500 text-[9px] mt-0.5">Satisfaction Rate</p>
// //                 </div>
// //                 <div className="bg-purple-50/50 border border-purple-100 p-2.5 rounded-xl text-center">
// //                   <p className="text-purple-700 font-bold text-xs">{mentor.reviewsCount}</p>
// //                   <p className="text-gray-500 text-[9px] mt-0.5">Reviews</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Need Help CTA Box */}
// //             <div className="bg-orange-50/60 border border-orange-100 rounded-2xl p-4 text-center space-y-2">
// //               <h4 className="font-bold text-gray-900 text-xs">Need Help?</h4>
// //               <p className="text-gray-500 text-[10px]">Not sure which service is right for you? Our team can help you choose.</p>
// //               <button className="w-full bg-white border border-orange-200 text-[#FF5722] hover:bg-orange-100 font-semibold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
// //                 <HelpCircle size={13} /> Talk to GoodGuiders
// //               </button>
// //             </div>

// //           </div>

// //           {/* ================= MIDDLE COLUMN: MAIN TAB CONTENT (col-span-6) ================= */}
// //           <div className="lg:col-span-6 space-y-4">
            
// //             {/* Navigation Tabs Bar */}
// //             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-1.5 flex items-center gap-1 overflow-x-auto scrollbar-none">
// //               {[
// //                 { name: 'Overview', icon: BookOpen },
// //                 { name: 'Service', icon: Layers },
// //                 { name: 'Mock Test', icon: FileText },
// //                 { name: 'Assignment', icon: FileText },
// //                 { name: 'Study Material', icon: BookOpen },
// //                 { name: 'Video lecture', icon: FileText },
// //                 { name: 'Q&A', icon: HelpCircle },
// //               ].map((tab) => {
// //                 const Icon = tab.icon;
// //                 const isActive = activeTab.toLowerCase().trim() === tab.name.toLowerCase().trim();
// //                 return (
// //                   <button
// //                     key={tab.name}
// //                     onClick={() => setActiveTab(tab.name)}
// //                     className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold whitespace-nowrap transition cursor-pointer ${
// //                       isActive 
// //                         ? 'bg-orange-50 text-[#FF5722] border border-orange-200' 
// //                         : 'text-gray-600 hover:bg-gray-50'
// //                     }`}
// //                   >
// //                     <Icon size={13} />
// //                     <span>{tab.name}</span>
// //                   </button>
// //                 );
// //               })}
// //             </div>

// //             {/* CONDITIONAL TAB CONTENT */}
// //             {activeTab.startsWith('Assignment') ? (
// //               /* ================= ASSIGNMENTS SECTION ================= */
// //               <div className="space-y-4">
                
// //                 {/* Header Title */}
// //                 <div>
// //                   <h2 className="text-lg font-extrabold text-indigo-950">Assignments</h2>
// //                   <p className="text-gray-500 text-[11px] leading-relaxed mt-0.5">
// //                     Assignments help you practice concepts in depth and strengthen your understanding.<br />
// //                     It will help you identify your depth of knowledge. When you upload your assignments, we review them carefully and provide personalized improvement suggestions.
// //                   </p>
// //                 </div>

// //                 {/* Filter Assignments Card */}
// //                 <div className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 space-y-3">
// //                   <h3 className="font-bold text-blue-950 text-xs">Filter Assignments</h3>
// //                   <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 items-end">
// //                     <div>
// //                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Class</label>
// //                       <div className="relative">
// //                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
// //                           <option>Select Class</option>
// //                           <option>Class 11</option>
// //                           <option>Class 12</option>
// //                         </select>
// //                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Subject</label>
// //                       <div className="relative">
// //                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
// //                           <option>Select Subject</option>
// //                           <option>Physics</option>
// //                           <option>Chemistry</option>
// //                         </select>
// //                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Topic</label>
// //                       <div className="relative">
// //                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
// //                           <option>Select Topic</option>
// //                           <option>Kinematics</option>
// //                           <option>Laws of Motion</option>
// //                         </select>
// //                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
// //                       </div>
// //                     </div>

// //                     <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
// //                       <Filter size={13} /> Apply
// //                     </button>
// //                   </div>
// //                 </div>

// //                 {/* Per Assignment Fee Banner */}
// //                 <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3.5 flex items-center gap-3">
// //                   <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center font-bold text-sm flex-shrink-0">
// //                     ₹
// //                   </div>
// //                   <div>
// //                     <h4 className="font-extrabold text-amber-950 text-xs">Per Assignment Fee: <span className="text-red-500">₹20</span></h4>
// //                     <p className="text-amber-800 text-[10px] mt-0.5">
// //                       Each assignment review and personalized feedback is available at just <span className="font-bold text-amber-950">₹20</span> per assignment.
// //                     </p>
// //                   </div>
// //                 </div>

// //                 {/* Assignments Cards List */}
// //                 <div className="space-y-3">
// //                   {[
// //                     {
// //                       title: 'Kinematics – Practice Set 1',
// //                       badge: 'Active',
// //                       badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
// //                       iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
// //                       class: '11', subject: 'Physics', topic: 'Motion in a Straight Line',
// //                       questions: 10, marks: 20, due: '25 May 2024',
// //                       desc: 'This assignment covers basic kinematics concepts including displacement, velocity, acceleration and equations of motion.'
// //                     },
// //                     {
// //                       title: 'Laws of Motion – Practice Set 1',
// //                       badge: 'Active',
// //                       badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
// //                       iconBg: 'bg-purple-50 border-purple-100 text-purple-600',
// //                       class: '11', subject: 'Physics', topic: "Newton's Laws of Motion",
// //                       questions: 12, marks: 24, due: '30 May 2024',
// //                       desc: "Practice problems based on Newton's three laws of motion."
// //                     },
// //                     {
// //                       title: 'Work, Energy & Power – Practice Set 1',
// //                       badge: 'Upcoming',
// //                       badgeBg: 'bg-blue-50 text-blue-600 border-blue-100',
// //                       iconBg: 'bg-amber-50 border-amber-100 text-amber-600',
// //                       class: '11', subject: 'Physics', topic: 'Work, Power',
// //                       questions: 10, marks: 20, due: '05 Jun 2024',
// //                       desc: 'Numerical problems on work done, energy and power.'
// //                     },
// //                     {
// //                       title: 'System of Particles – Practice Set 1',
// //                       badge: 'Submitted',
// //                       badgeBg: 'bg-purple-50 text-purple-600 border-purple-100',
// //                       iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
// //                       class: '11', subject: 'Physics', topic: 'Center of Mass',
// //                       questions: 10, marks: 20, due: '18 May 2024',
// //                       desc: 'Problems based on center of mass and related concepts.'
// //                     },
// //                     {
// //                       title: 'Rotational Motion – Practice Set 1',
// //                       badge: 'Submitted',
// //                       badgeBg: 'bg-purple-50 text-purple-600 border-purple-100',
// //                       iconBg: 'bg-purple-50 border-purple-100 text-purple-600',
// //                       class: '11', subject: 'Physics', topic: 'Moment of Inertia',
// //                       questions: 12, marks: 24, due: '12 May 2024',
// //                       desc: 'Problems on moment of inertia and rotational dynamics.'
// //                     },
// //                     {
// //                       title: 'Gravitation – Practice Set 1',
// //                       badge: 'Evaluated',
// //                       badgeBg: 'bg-amber-50 text-amber-600 border-amber-100',
// //                       iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
// //                       class: '11', subject: 'Physics', topic: 'Universal Law of Gravitation',
// //                       questions: 10, marks: 20, due: '08 May 2024',
// //                       desc: 'Conceptual and numerical problems on gravitation.'
// //                     },
// //                   ].map((item, idx) => (
// //                     <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
// //                       <div className="flex items-start justify-between gap-3 border-b border-gray-50 pb-3">
// //                         <div className="flex items-center gap-2.5">
// //                           <div className={`w-9 h-9 rounded-xl border ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
// //                             <FileText size={18} />
// //                           </div>
// //                           <div className="flex items-center gap-2 flex-wrap">
// //                             <h3 className="font-extrabold text-indigo-950 text-xs">{item.title}</h3>
// //                             <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${item.badgeBg}`}>
// //                               {item.badge}
// //                             </span>
// //                           </div>
// //                         </div>

// //                         {/* Upload Answer Right Column */}
// //                         <div className="text-right flex-shrink-0 border-l border-gray-100 pl-4 space-y-1">
// //                           <p className="font-extrabold text-indigo-950 text-[10px]">Upload Answer Sheet</p>
// //                           <p className="text-gray-400 text-[8px]">Upload clear images or PDF</p>
// //                           <p className="text-gray-400 text-[8px] font-semibold">Max 10MB</p>
// //                           <button className="mt-1 border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold px-3 py-1 rounded-xl text-[10px] transition cursor-pointer flex items-center gap-1.5 ml-auto shadow-2xs">
// //                             <Upload size={11} /> Upload Now
// //                           </button>
// //                         </div>
// //                       </div>

// //                       {/* Details row */}
// //                       <div className="space-y-1.5 text-[10px]">
// //                         <div className="flex items-center gap-4 text-gray-600 font-medium flex-wrap">
// //                           <span>Class: <strong className="text-gray-900">{item.class}</strong></span>
// //                           <span>Subject: <strong className="text-gray-900">{item.subject}</strong></span>
// //                           <span>Topic: <strong className="text-gray-900">{item.topic}</strong></span>
// //                         </div>

// //                         <div className="flex items-center gap-4 text-gray-500 flex-wrap">
// //                           <span>Questions: <strong className="text-gray-900">{item.questions}</strong></span>
// //                           <span>Marks: <strong className="text-gray-900">{item.marks}</strong></span>
// //                           <span>Due: <strong className="text-gray-900">{item.due}</strong></span>
// //                         </div>

// //                         <p className="text-gray-500 text-[10px] pt-1 leading-snug">
// //                           {item.desc}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Load More Assignments */}
// //                 <div className="text-center pt-1">
// //                   <button className="text-blue-600 hover:underline font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer">
// //                     Load More Assignments <ChevronDown size={14} />
// //                   </button>
// //                 </div>

// //                 {/* Assignment Package Offer Banner */}
// //                 <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-4 space-y-3">
// //                   <div className="flex items-center justify-between gap-3">
// //                     <div className="flex items-center gap-3">
// //                       <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
// //                         <Package size={24} />
// //                       </div>
// //                       <div>
// //                         <h3 className="font-extrabold text-indigo-950 text-sm">Assignment Package</h3>
// //                         <p className="text-gray-500 text-[10px]">
// //                           Get complete practice and expert feedback at the best value.
// //                         </p>
// //                       </div>
// //                     </div>

// //                     <div className="flex items-center gap-4 flex-shrink-0 text-right">
// //                       <div>
// //                         <p className="font-black text-indigo-950 text-lg leading-tight">210</p>
// //                         <p className="text-gray-400 text-[9px] font-semibold">Assignments</p>
// //                       </div>

// //                       <div>
// //                         <p className="font-black text-emerald-600 text-xl leading-tight">₹599</p>
// //                         <p className="text-gray-400 text-[9px] font-semibold">Only</p>
// //                       </div>

// //                       <div className="space-y-1">
// //                         <span className="bg-emerald-600 text-white font-bold text-[8px] px-2 py-0.5 rounded-full uppercase block">
// //                           Best Value
// //                         </span>
// //                         <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition cursor-pointer shadow-sm">
// //                           Get Package Now
// //                         </button>
// //                         <p className="text-gray-400 text-[8px]">Valid for 12 Months</p>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-emerald-100 pt-2 text-[10px] text-gray-700 font-medium">
// //                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> 210 Assignments</div>
// //                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Expert Review & Feedback</div>
// //                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Better Preparation</div>
// //                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Best Value</div>
// //                   </div>
// //                 </div>

// //                 {/* Bottom Security Banner */}
// //                 <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3 text-center flex items-center justify-center gap-2 text-blue-900 text-xs font-semibold">
// //                   <ShieldCheck size={16} className="text-blue-600" />
// //                   <span>Your data and submissions are safe and secure with GoodGuiders.</span>
// //                 </div>

// //               </div>
// //             ) : activeTab.startsWith('Mock') ? (
// //               /* ================= MOCK TESTS SECTION ================= */
// //               <div className="space-y-6">
                
// //                 {/* Header Title */}
// //                 <div>
// //                   <h2 className="text-lg font-extrabold text-indigo-950">Mock Tests</h2>
// //                   <p className="text-gray-500 text-[11px] mt-0.5">
// //                     Practice with structured mock tests to improve accuracy, speed and confidence.
// //                   </p>
// //                 </div>

// //                 {/* 1. Choose Your Exam / Class */}
// //                 <div className="space-y-2.5">
// //                   <h3 className="font-bold text-gray-900 text-xs">1. Choose Your Exam / Class</h3>
// //                   <p className="text-gray-400 text-[10px]">Select the exam or class for which you want to appear in mock tests.</p>
                  
// //                   <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1">
// //                     <div className="bg-blue-50/40 border-2 border-blue-600 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer shadow-sm">
// //                       <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
// //                         U
// //                       </div>
// //                       <div>
// //                         <p className="font-bold text-gray-900 text-[11px]">NEET</p>
// //                         <p className="text-gray-400 text-[9px]">UG</p>
// //                       </div>
// //                     </div>

// //                     <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
// //                       <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
// //                         <BookOpen size={14} />
// //                       </div>
// //                       <div>
// //                         <p className="font-bold text-gray-900 text-[11px]">JEE</p>
// //                         <p className="text-gray-400 text-[9px]">(Main + Adv)</p>
// //                       </div>
// //                     </div>

// //                     <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
// //                       <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
// //                         <Book size={14} />
// //                       </div>
// //                       <div>
// //                         <p className="font-bold text-gray-900 text-[11px]">Class 11</p>
// //                         <p className="text-gray-400 text-[9px]">(Physics)</p>
// //                       </div>
// //                     </div>

// //                     <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
// //                       <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
// //                         <Book size={14} />
// //                       </div>
// //                       <div>
// //                         <p className="font-bold text-gray-900 text-[11px]">Class 12</p>
// //                         <p className="text-gray-400 text-[9px]">(Physics)</p>
// //                       </div>
// //                     </div>

// //                     <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
// //                       <div className="w-7 h-7 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
// //                         <Layers size={14} />
// //                       </div>
// //                       <div>
// //                         <p className="font-bold text-gray-900 text-[11px]">More</p>
// //                         <p className="text-gray-400 text-[9px]">Exams</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* 2. Topic Wise Mock Tests */}
// //                 <div className="space-y-2.5">
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <h3 className="font-bold text-gray-900 text-xs">2. Topic Wise Mock Tests</h3>
// //                       <p className="text-gray-400 text-[10px]">Practice individual topics to strengthen specific concepts.</p>
// //                     </div>
// //                     <button className="text-blue-600 font-bold text-[11px] hover:underline flex items-center gap-0.5">
// //                       View All Topics
// //                     </button>
// //                   </div>

// //                   <div className="relative">
// //                     <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
// //                       {[
// //                         { title: 'Current Electricity', icon: Zap, color: 'text-purple-600 bg-purple-50' },
// //                         { title: 'Magnetism', icon: TargetIcon, color: 'text-rose-500 bg-rose-50' },
// //                         { title: 'Ray Optics', icon: HelpCircle, color: 'text-blue-600 bg-blue-50' },
// //                         { title: 'Thermodynamics', icon: Flame, color: 'text-pink-600 bg-pink-50' },
// //                         { title: 'Oscillations', icon: Sparkles, color: 'text-emerald-600 bg-emerald-50' },
// //                       ].map((item, idx) => {
// //                         const Icon = item.icon;
// //                         return (
// //                           <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 text-center space-y-2 flex flex-col justify-between">
// //                             <div className="space-y-1.5">
// //                               <div className={`w-8 h-8 rounded-full ${item.color} mx-auto flex items-center justify-center`}>
// //                                 <Icon size={16} />
// //                               </div>
// //                               <h4 className="font-bold text-indigo-950 text-[11px] h-7 flex items-center justify-center leading-tight">{item.title}</h4>
// //                               <p className="text-gray-400 text-[9px]">25 Questions</p>
// //                               <p className="text-gray-400 text-[9px]">100 Marks</p>
// //                               <p className="font-extrabold text-indigo-950 text-xs">₹49</p>
// //                             </div>
// //                             <button className="w-full border border-pink-200 text-pink-600 hover:bg-pink-50 font-bold py-1 rounded-xl text-[10px] transition cursor-pointer">
// //                               Start Test
// //                             </button>
// //                           </div>
// //                         );
// //                       })}
// //                     </div>
// //                     <button className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 border shadow-md text-gray-500 hover:text-gray-800">
// //                       <ChevronRight size={14} />
// //                     </button>
// //                   </div>

// //                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
// //                     <CheckCircle2 size={13} className="text-emerald-600" />
// //                     <span>Total Topics Available: 120+</span>
// //                     <Info size={12} className="text-emerald-500" />
// //                   </div>
// //                 </div>

// //                 {/* 3. Chapter Wise Mock Tests */}
// //                 <div className="space-y-2.5">
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <h3 className="font-bold text-gray-900 text-xs">3. Chapter Wise Mock Tests</h3>
// //                       <p className="text-gray-400 text-[10px]">Practice complete chapters to build strong fundamentals.</p>
// //                     </div>
// //                     <button className="text-blue-600 font-bold text-[11px] hover:underline">
// //                       View All Chapters
// //                     </button>
// //                   </div>

// //                   <div className="relative">
// //                     <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
// //                       {[
// //                         'Current Electricity', 'Moving Charges & Magnetism', 'EMI & AC', 'Optics', 'Dual Nature of Radiation'
// //                       ].map((title, idx) => (
// //                         <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 text-center space-y-2 flex flex-col justify-between">
// //                           <div className="space-y-1.5">
// //                             <h4 className="font-bold text-indigo-950 text-[11px] h-8 flex items-center justify-center leading-tight">{title}</h4>
// //                             <p className="text-gray-400 text-[9px]">20 Questions</p>
// //                             <p className="text-gray-400 text-[9px]">80 Marks</p>
// //                             <p className="font-extrabold text-indigo-950 text-xs">₹79</p>
// //                           </div>
// //                           <button className="w-full border border-emerald-300 text-emerald-600 hover:bg-emerald-50 font-bold py-1 rounded-xl text-[10px] transition cursor-pointer">
// //                             Start Test
// //                           </button>
// //                         </div>
// //                       ))}
// //                     </div>
// //                     <button className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 border shadow-md text-gray-500 hover:text-gray-800">
// //                       <ChevronRight size={14} />
// //                     </button>
// //                   </div>

// //                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
// //                     <CheckCircle2 size={13} className="text-emerald-600" />
// //                     <span>Total Chapters Available: 48+</span>
// //                     <Info size={12} className="text-emerald-500" />
// //                   </div>
// //                 </div>

// //                 {/* 4. Subject Wise Mock Tests */}
// //                 <div className="space-y-2.5">
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <h3 className="font-bold text-gray-900 text-xs">4. Subject Wise Mock Tests</h3>
// //                       <p className="text-gray-400 text-[10px]">Practice full syllabus of a subject to boost your preparation.</p>
// //                     </div>
// //                     <button className="border border-gray-200 text-gray-700 font-semibold text-[11px] px-2.5 py-1 rounded-lg flex items-center gap-1 bg-white">
// //                       Select Subject <ChevronDown size={12} />
// //                     </button>
// //                   </div>

// //                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
// //                     {[
// //                       { name: 'Physics', color: 'text-purple-600 border-purple-200' },
// //                       { name: 'Chemistry', color: 'text-emerald-600 border-emerald-200' },
// //                       { name: 'Botany', color: 'text-purple-600 border-purple-200' },
// //                       { name: 'Zoology', color: 'text-amber-600 border-amber-200' },
// //                     ].map((sub, idx) => (
// //                       <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 space-y-2">
// //                         <h4 className={`font-bold text-xs ${sub.color.split(' ')[0]}`}>{sub.name}</h4>
// //                         <p className="text-gray-400 text-[9px]">90 Questions</p>
// //                         <p className="text-gray-400 text-[9px]">360 Marks</p>
// //                         <p className="font-extrabold text-indigo-950 text-xs">₹249</p>
// //                         <button className={`w-full border ${sub.color} hover:bg-gray-50 font-bold py-1 rounded-xl text-[10px] transition cursor-pointer`}>
// //                           Start Test
// //                         </button>
// //                       </div>
// //                     ))}
// //                   </div>

// //                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
// //                     <CheckCircle2 size={13} className="text-emerald-600" />
// //                     <span>Total Subjects Covered: 4+</span>
// //                     <Info size={12} className="text-emerald-500" />
// //                   </div>
// //                 </div>

// //                 {/* 5. Full Length Mock Tests */}
// //                 <div className="space-y-2.5">
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <h3 className="font-bold text-gray-900 text-xs">5. Full Length Mock Tests</h3>
// //                       <p className="text-gray-400 text-[10px]">Simulate real exam environment and test your overall preparation.</p>
// //                     </div>
// //                     <button className="text-blue-600 font-bold text-[11px] hover:underline">
// //                       View All Tests
// //                     </button>
// //                   </div>

// //                   <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 overflow-x-auto">
// //                     <table className="w-full text-left border-collapse min-w-[450px]">
// //                       <thead>
// //                         <tr className="border-b border-gray-100 text-gray-400 text-[10px]">
// //                           <th className="pb-2 font-medium">Test Name</th>
// //                           <th className="pb-2 font-medium text-center">Questions</th>
// //                           <th className="pb-2 font-medium text-center">Marks</th>
// //                           <th className="pb-2 font-medium text-center">Duration</th>
// //                           <th className="pb-2 font-medium text-center">Price</th>
// //                           <th className="pb-2 font-medium text-right">Action</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody className="divide-y divide-gray-50 text-[11px] text-gray-800">
// //                         {['01', '02', '03', '04'].map((num) => (
// //                           <tr key={num}>
// //                             <td className="py-2.5 font-bold">NEET Full Test {num}</td>
// //                             <td className="py-2.5 text-center text-gray-500">180</td>
// //                             <td className="py-2.5 text-center text-gray-500">720</td>
// //                             <td className="py-2.5 text-center text-gray-500">3h 20m</td>
// //                             <td className="py-2.5 text-center font-bold">₹299</td>
// //                             <td className="py-2.5 text-right">
// //                               <button className="border border-red-200 text-red-500 hover:bg-red-50 font-bold px-3 py-1 rounded-lg text-[10px] transition cursor-pointer">
// //                                 Start Test
// //                               </button>
// //                             </td>
// //                           </tr>
// //                         ))}
// //                       </tbody>
// //                     </table>
// //                   </div>

// //                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
// //                     <CheckCircle2 size={13} className="text-emerald-600" />
// //                     <span>Total Full Length Tests: 20+</span>
// //                     <Info size={12} className="text-emerald-500" />
// //                   </div>
// //                 </div>

// //                 {/* 6. Model Test Paper (Subjective) */}
// //                 <div className="space-y-2.5">
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <h3 className="font-bold text-gray-900 text-xs">6. Model Test Paper (Subjective)</h3>
// //                       <p className="text-gray-400 text-[10px]">Attempt subjective model papers and upload your answers for evaluation.</p>
// //                     </div>
// //                     <button className="text-blue-600 font-bold text-[11px] hover:underline">
// //                       View All Papers
// //                     </button>
// //                   </div>

// //                   <div className="space-y-2">
// //                     {[
// //                       { title: 'NEET Model Test Paper 01', price: '₹99' },
// //                       { title: 'NEET Model Test Paper 02', price: '₹99' },
// //                     ].map((paper, idx) => (
// //                       <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 flex items-center justify-between gap-2">
// //                         <div className="flex items-center gap-2.5">
// //                           <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
// //                             <FileText size={16} />
// //                           </div>
// //                           <div>
// //                             <h4 className="font-bold text-gray-900 text-xs">{paper.title}</h4>
// //                             <p className="text-gray-400 text-[9px] space-x-1.5">
// //                               <span>Subject: Physics</span> • <span>Author: Mentor</span> • <span>Format: PDF</span> • <span className="font-bold text-gray-800">Price: {paper.price}</span>
// //                             </p>
// //                           </div>
// //                         </div>

// //                         <div className="flex items-center gap-2 flex-shrink-0">
// //                           <button className="border border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-2.5 py-1 rounded-lg text-[10px] flex items-center gap-1 transition cursor-pointer">
// //                             <Download size={11} /> Download Paper
// //                           </button>
// //                           <button className="border border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-2.5 py-1 rounded-lg text-[10px] flex items-center gap-1 transition cursor-pointer">
// //                             <Upload size={11} /> Upload Answer
// //                           </button>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>

// //                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
// //                     <CheckCircle2 size={13} className="text-emerald-600" />
// //                     <span>Total Model Papers: 10+</span>
// //                     <Info size={12} className="text-emerald-500" />
// //                   </div>
// //                 </div>

// //                 {/* Bottom Promo: All Access Package */}
// //                 <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-4 space-y-3 relative overflow-hidden">
// //                   <div className="flex items-center justify-between">
// //                     <div className="flex items-center gap-2">
// //                       <Star size={18} className="text-amber-500 fill-amber-500" />
// //                       <div>
// //                         <h3 className="font-extrabold text-indigo-950 text-sm">All Access Package (Complete Mock Test Package)</h3>
// //                         <p className="text-gray-500 text-[10px]">One purchase, Unlimited access.</p>
// //                       </div>
// //                     </div>
// //                     <span className="bg-red-500 text-white font-bold text-[9px] px-2 py-0.5 rounded-full uppercase">
// //                       Best Value
// //                     </span>
// //                   </div>

// //                   <div className="flex items-baseline gap-2">
// //                     <span className="text-gray-400 line-through text-xs">₹2599</span>
// //                     <span className="text-indigo-950 font-black text-xl">₹1299</span>
// //                     <span className="bg-emerald-100 text-emerald-800 font-bold text-[9px] px-1.5 py-0.5 rounded">50% OFF</span>
// //                   </div>

// //                   {/* Highlights Bullet List */}
// //                   <div className="grid grid-cols-2 gap-1.5 text-[10px] text-gray-700">
// //                     <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> All Test Series + All Subjects</div>
// //                     <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> Unlimited Practice • 12 Months Validity</div>
// //                     <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> Regularly Updated Content</div>
// //                     <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> One-time Payment</div>
// //                   </div>

// //                   {/* Icon Grid Stats */}
// //                   <div className="grid grid-cols-5 gap-2 text-center pt-2 border-t border-amber-200/60">
// //                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
// //                       <Star size={14} className="mx-auto text-amber-500 mb-0.5" />
// //                       <p className="text-gray-400 text-[8px]">Topic Wise Tests</p>
// //                       <p className="font-extrabold text-indigo-950 text-xs">120+</p>
// //                       <p className="text-gray-400 text-[8px]">Topics</p>
// //                     </div>
// //                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
// //                       <Book size={14} className="mx-auto text-emerald-500 mb-0.5" />
// //                       <p className="text-gray-400 text-[8px]">Chapter Wise Tests</p>
// //                       <p className="font-extrabold text-indigo-950 text-xs">48+</p>
// //                       <p className="text-gray-400 text-[8px]">Chapters</p>
// //                     </div>
// //                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
// //                       <BookOpen size={14} className="mx-auto text-blue-500 mb-0.5" />
// //                       <p className="text-gray-400 text-[8px]">Subject Wise Tests</p>
// //                       <p className="font-extrabold text-indigo-950 text-xs">4+</p>
// //                       <p className="text-gray-400 text-[8px]">Subjects</p>
// //                     </div>
// //                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
// //                       <Calendar size={14} className="mx-auto text-purple-500 mb-0.5" />
// //                       <p className="text-gray-400 text-[8px]">Full Length Tests</p>
// //                       <p className="font-extrabold text-indigo-950 text-xs">20+</p>
// //                       <p className="text-gray-400 text-[8px]">Tests</p>
// //                     </div>
// //                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
// //                       <FileText size={14} className="mx-auto text-pink-500 mb-0.5" />
// //                       <p className="text-gray-400 text-[8px]">Model Test Papers</p>
// //                       <p className="font-extrabold text-indigo-950 text-xs">10+</p>
// //                       <p className="text-gray-400 text-[8px]">Papers</p>
// //                     </div>
// //                   </div>

// //                   <div className="pt-2 space-y-2">
// //                     <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer">
// //                       Buy All Access Package
// //                     </button>
// //                     <p className="text-center text-gray-500 text-[9px]">
// //                       All tests are exam pattern based and regularly updated.
// //                     </p>
// //                   </div>
// //                 </div>

// //               </div>
// //             ) : activeTab.startsWith('Service') ? (
// //               /* ================= MY SERVICES SECTION ================= */
// //               <div className="space-y-4">
// //                 {/* Header Card */}
// //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
// //                   <h2 className="text-base font-bold text-indigo-950">My Services</h2>
// //                   <p className="text-gray-500 text-xs">
// //                     Complete mentorship support to help you learn better, practice smart and achieve your goals.
// //                   </p>

// //                   {/* Highlights Grid */}
// //                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
// //                     <div className="bg-emerald-50/60 border border-emerald-100 p-2.5 rounded-xl flex items-center gap-2">
// //                       <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
// //                         <User size={14} />
// //                       </div>
// //                       <div>
// //                         <p className="font-bold text-gray-800 text-[10px]">Personalized</p>
// //                         <p className="text-gray-500 text-[9px]">1-on-1 Guidance</p>
// //                       </div>
// //                     </div>

// //                     <div className="bg-purple-50/60 border border-purple-100 p-2.5 rounded-xl flex items-center gap-2">
// //                       <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
// //                         <Sparkles size={14} />
// //                       </div>
// //                       <div>
// //                         <p className="font-bold text-gray-800 text-[10px]">Concept Clarity</p>
// //                         <p className="text-gray-500 text-[9px]">& Doubt Solving</p>
// //                       </div>
// //                     </div>

// //                     <div className="bg-blue-50/60 border border-blue-100 p-2.5 rounded-xl flex items-center gap-2">
// //                       <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
// //                         <BarChart2 size={14} />
// //                       </div>
// //                       <div>
// //                         <p className="font-bold text-gray-800 text-[10px]">Regular Tests &</p>
// //                         <p className="text-gray-500 text-[9px]">Performance Analysis</p>
// //                       </div>
// //                     </div>

// //                     <div className="bg-amber-50/60 border border-amber-100 p-2.5 rounded-xl flex items-center gap-2">
// //                       <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
// //                         <Calendar size={14} />
// //                       </div>
// //                       <div>
// //                         <p className="font-bold text-gray-800 text-[10px]">Flexible Schedule</p>
// //                         <p className="text-gray-500 text-[9px]">as per your need</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <h3 className="font-bold text-indigo-950 text-sm pl-1">All Services</h3>

// //                 {/* 1. One-to-One Mentorship */}
// //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// //                   <div className="flex items-start justify-between">
// //                     <div className="flex gap-3">
// //                       <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
// //                         <User size={20} />
// //                       </div>
// //                       <div>
// //                         <h4 className="font-bold text-gray-900 text-sm">One-to-One Mentorship</h4>
// //                         <p className="text-gray-500 text-xs mt-0.5">
// //                           Personalized 1-on-1 mentorship tailored to your learning needs and exam goals.
// //                         </p>
// //                       </div>
// //                     </div>
// //                     <div className="text-right flex-shrink-0 ml-2">
// //                       <p className="font-extrabold text-gray-900 text-base">₹2,499 <span className="text-[10px] text-gray-400 font-normal">/month</span></p>
// //                       <button className="mt-1.5 border border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// //                         Book Now
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Personalized 1-on-1 Guidance</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Doubt Solving (Chat + Session)</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Weekly Tests & Performance Report</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Study Plan & Strategy Guidance</div>
// //                   </div>
// //                 </div>

// //                 {/* 2. Doubt Clearing (One Time) */}
// //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// //                   <div className="flex items-start justify-between">
// //                     <div className="flex gap-3">
// //                       <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
// //                         <FileText size={20} />
// //                       </div>
// //                       <div>
// //                         <h4 className="font-bold text-gray-900 text-sm">Doubt Clearing (One Time)</h4>
// //                         <p className="text-gray-500 text-xs mt-0.5">
// //                           Get your specific doubts solved with clear explanations by {mentor.name}.
// //                         </p>
// //                       </div>
// //                     </div>
// //                     <div className="text-right flex-shrink-0 ml-2">
// //                       <p className="font-extrabold text-gray-900 text-base">₹299 <span className="text-[10px] text-gray-400 font-normal">/session</span></p>
// //                       <button className="mt-1.5 border border-purple-500 text-purple-600 hover:bg-purple-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// //                         Book Now
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Concept-based Explanation</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Numerical Problem Solving</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Theory Doubt Clarification</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Quick & Effective Solutions</div>
// //                   </div>
// //                 </div>

// //                 {/* 3. Test Evaluation & Feedback */}
// //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// //                   <div className="flex items-start justify-between">
// //                     <div className="flex gap-3">
// //                       <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0">
// //                         <FileText size={20} />
// //                       </div>
// //                       <div>
// //                         <h4 className="font-bold text-gray-900 text-sm">Test Evaluation & Feedback</h4>
// //                         <p className="text-gray-500 text-xs mt-0.5">
// //                           Upload your test and get detailed evaluation with suggestions to improve your performance.
// //                         </p>
// //                       </div>
// //                     </div>
// //                     <div className="text-right flex-shrink-0 ml-2">
// //                       <p className="font-extrabold text-gray-900 text-base">₹199 <span className="text-[10px] text-gray-400 font-normal">/test</span></p>
// //                       <button className="mt-1.5 border border-orange-500 text-orange-600 hover:bg-orange-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// //                         Upload Now
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Detailed Evaluation & Scoring</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Mistake Analysis & Improvement Tips</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Performance Comparison</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Personalized Feedback</div>
// //                   </div>
// //                 </div>

// //                 {/* 4. Regular Tests & Performance Analysis */}
// //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// //                   <div className="flex items-start justify-between">
// //                     <div className="flex gap-3">
// //                       <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
// //                         <Calendar size={20} />
// //                       </div>
// //                       <div>
// //                         <h4 className="font-bold text-gray-900 text-sm">Regular Tests & Performance Analysis</h4>
// //                         <p className="text-gray-500 text-xs mt-0.5">
// //                           Take regular tests and get in-depth performance analysis to track your progress.
// //                         </p>
// //                       </div>
// //                     </div>
// //                     <div className="text-right flex-shrink-0 ml-2">
// //                       <p className="font-extrabold text-gray-900 text-base">₹399 <span className="text-[10px] text-gray-400 font-normal">/test</span></p>
// //                       <button className="mt-1.5 border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// //                         Enroll Now
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Subject-wise Tests</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> All India Rank Tracking</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Detailed Performance Analysis</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Improvement Roadmap</div>
// //                   </div>
// //                 </div>

// //                 {/* 5. Custom Study Plan */}
// //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// //                   <div className="flex items-start justify-between">
// //                     <div className="flex gap-3">
// //                       <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0">
// //                         <Target size={20} />
// //                       </div>
// //                       <div>
// //                         <h4 className="font-bold text-gray-900 text-sm">Custom Study Plan</h4>
// //                         <p className="text-gray-500 text-xs mt-0.5">
// //                           Personalized study plan designed around your strengths, weaknesses and target exam.
// //                         </p>
// //                       </div>
// //                     </div>
// //                     <div className="text-right flex-shrink-0 ml-2">
// //                       <p className="font-extrabold text-gray-900 text-base">₹999 <span className="text-[10px] text-gray-400 font-normal">/plan</span></p>
// //                       <button className="mt-1.5 border border-rose-400 text-rose-500 hover:bg-rose-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// //                         Get Plan
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Chapter-wise Plan</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Daily/Weekly Targets</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Smart Study Strategy</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Revision Schedule</div>
// //                   </div>
// //                 </div>

// //                 {/* 6. Chat Support (Priority) */}
// //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// //                   <div className="flex items-start justify-between">
// //                     <div className="flex gap-3">
// //                       <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
// //                         <MessageCircle size={20} />
// //                       </div>
// //                       <div>
// //                         <h4 className="font-bold text-gray-900 text-sm">Chat Support (Priority)</h4>
// //                         <p className="text-gray-500 text-xs mt-0.5">
// //                           Priority chat support for quick doubt solving and guidance whenever you need.
// //                         </p>
// //                       </div>
// //                     </div>
// //                     <div className="text-right flex-shrink-0 ml-2">
// //                       <p className="font-extrabold text-gray-900 text-base">₹499 <span className="text-[10px] text-gray-400 font-normal">/month</span></p>
// //                       <button className="mt-1.5 border border-teal-500 text-teal-600 hover:bg-teal-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// //                         Get Access
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Priority Response</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Unlimited Doubt Solving (Chat)</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Study & Exam Guidance</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Motivation & Support</div>
// //                   </div>
// //                 </div>

// //                 {/* 7. Home Tuition (Offline) */}
// //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// //                   <div className="flex items-start justify-between">
// //                     <div className="flex gap-3">
// //                       <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
// //                         <Home size={20} />
// //                       </div>
// //                       <div>
// //                         <h4 className="font-bold text-gray-900 text-sm">Home Tuition (Offline)</h4>
// //                         <p className="text-gray-500 text-xs mt-0.5">
// //                           Personalized home tuition at your location for focused learning and doubt solving.
// //                         </p>
// //                       </div>
// //                     </div>
// //                     <div className="text-right flex-shrink-0 ml-2">
// //                       <p className="font-extrabold text-gray-900 text-base">₹1,499 <span className="text-[10px] text-gray-400 font-normal">/hour</span></p>
// //                       <button className="mt-1.5 border border-amber-400 text-amber-600 hover:bg-amber-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
// //                         Enquire Now
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Personalized Teaching</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Concept Clarity & Practice</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Flexible Schedule</div>
// //                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Regular Test & Assessment</div>
// //                   </div>
// //                 </div>

// //                 {/* Footer Banner */}
// //                 <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3 text-center flex items-center justify-center gap-2 text-blue-900 text-xs font-semibold">
// //                   <ShieldCheck size={16} className="text-blue-600" />
// //                   <span>All online sessions are conducted via Google Meet / Zoom.</span>
// //                 </div>

// //               </div>
// //             ) : activeTab.startsWith('Study') ? (
// //               /* ================= STUDY MATERIAL SECTION ================= */
// //               <div className="space-y-4">
                
// //                 {/* Header Title */}
// //                 <div>
// //                   <h2 className="text-lg font-extrabold text-indigo-950">Study Materials</h2>
// //                   <p className="text-gray-500 text-[11px] leading-relaxed mt-0.5">
// //                     Study materials are carefully created to strengthen your concepts and support effective learning. They include notes, PDFs, formulas, diagrams and important resources for quick revision and better understanding.<br />
// //                     Use these materials regularly to build a strong foundation and perform your best.
// //                   </p>
// //                 </div>

// //                 {/* Filter Study Materials Card */}
// //                 <div className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 space-y-3">
// //                   <h3 className="font-bold text-blue-950 text-xs">Filter Study Materials</h3>
// //                   <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 items-end">
// //                     <div>
// //                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Class</label>
// //                       <div className="relative">
// //                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
// //                           <option>Select Class</option>
// //                           <option>Class 11</option>
// //                           <option>Class 12</option>
// //                         </select>
// //                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Subject</label>
// //                       <div className="relative">
// //                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
// //                           <option>Select Subject</option>
// //                           <option>Physics</option>
// //                           <option>Chemistry</option>
// //                         </select>
// //                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
// //                       </div>
// //                     </div>

// //                     <div>
// //                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Topic</label>
// //                       <div className="relative">
// //                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
// //                           <option>Select Topic</option>
// //                           <option>Complete Syllabus</option>
// //                           <option>Formulas</option>
// //                           <option>Laws of Motion</option>
// //                         </select>
// //                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
// //                       </div>
// //                     </div>

// //                     <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
// //                       <Filter size={13} /> Apply
// //                     </button>
// //                   </div>
// //                 </div>

// //                 {/* Top Banner Info */}
// //                 <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-3.5 flex items-center justify-between gap-3">
// //                   <div className="flex items-center gap-3">
// //                     <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
// //                       <BookOpen size={20} />
// //                     </div>
// //                     <div>
// //                       <h4 className="font-extrabold text-emerald-950 text-xs">High quality study materials curated for better concept clarity and exam.</h4>
// //                       <p className="text-gray-500 text-[10px]">Download and study anytime, anywhere.</p>
// //                     </div>
// //                   </div>
// //                   <div className="text-right flex-shrink-0">
// //                     <p className="text-gray-500 text-[9px] font-bold">Access All Materials</p>
// //                     <p className="font-extrabold text-emerald-600 text-base">₹20 <span className="text-[10px] text-gray-500 font-normal">Only</span></p>
// //                   </div>
// //                 </div>

// //                 {/* Study Materials List */}
// //                 <div className="space-y-3">
// //                   {[
// //                     {
// //                       title: 'NCERT Notes – Complete Physics',
// //                       type: 'PDF',
// //                       typeColor: 'text-rose-500 bg-rose-50 border-rose-100',
// //                       tags: ['Class 11, 12', 'Subject: Physics', 'Topic: Complete Syllabus'],
// //                       desc: 'Detailed NCERT based notes covering all chapters with important points and examples.',
// //                       updated: '20 May 2024',
// //                       size: '8.4 MB',
// //                       hasDownload: true
// //                     },
// //                     {
// //                       title: 'Important Formulas – Physics',
// //                       type: 'PDF',
// //                       typeColor: 'text-rose-500 bg-rose-50 border-rose-100',
// //                       tags: ['Class 11, 12', 'Subject: Physics', 'Topic: Formulas'],
// //                       desc: 'Chapter-wise list of important formulas for quick revision and exam preparation.',
// //                       updated: '18 May 2024',
// //                       size: '2.1 MB',
// //                       hasDownload: true
// //                     },
// //                     {
// //                       title: 'Chapter 3 – Laws of Motion Notes',
// //                       type: 'PDF',
// //                       typeColor: 'text-purple-600 bg-purple-50 border-purple-100',
// //                       tags: ['Class 11', 'Subject: Physics', 'Topic: Laws of Motion'],
// //                       desc: "Detailed notes on Newton's Laws of Motion with concepts, examples and practice questions.",
// //                       updated: '15 May 2024',
// //                       size: '1.6 MB',
// //                       hasDownload: true
// //                     },
// //                     {
// //                       title: 'Electrostatics – Complete Notes',
// //                       type: 'PDF',
// //                       typeColor: 'text-blue-600 bg-blue-50 border-blue-100',
// //                       tags: ['Class 12', 'Subject: Physics', 'Topic: Electrostatics'],
// //                       desc: 'Complete notes on Electrostatics including theory, derivations and solved examples.',
// //                       updated: '14 May 2024',
// //                       size: '3.7 MB',
// //                       hasDownload: true
// //                     },
// //                     {
// //                       title: 'Current Electricity – Concept Video',
// //                       type: 'VIDEO',
// //                       typeColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
// //                       tags: ['Class 12', 'Subject: Physics', 'Topic: Current Electricity'],
// //                       desc: 'Concept explanation with examples and solved problems in this video lecture.',
// //                       duration: '42 min',
// //                       uploaded: '12 May 2024',
// //                       hasDownload: false
// //                     },
// //                     {
// //                       title: 'Previous Year Questions – Physics',
// //                       type: 'PDF',
// //                       typeColor: 'text-rose-500 bg-rose-50 border-rose-100',
// //                       tags: ['Class 11, 12', 'Subject: Physics', 'Topic: PYQs'],
// //                       desc: 'Chapter-wise previous year questions with solutions for NEET exam practice.',
// //                       updated: '10 May 2024',
// //                       size: '5.2 MB',
// //                       hasDownload: true
// //                     },
// //                     {
// //                       title: 'Diagrams & Definitions – Quick Revision',
// //                       type: 'PDF',
// //                       typeColor: 'text-pink-600 bg-pink-50 border-pink-100',
// //                       tags: ['Class 11, 12', 'Subject: Physics', 'Topic: Diagrams'],
// //                       desc: 'Important diagrams and definitions for quick revision before exams.',
// //                       updated: '08 May 2024',
// //                       size: '1.9 MB',
// //                       hasDownload: true
// //                     },
// //                   ].map((item, idx) => (
// //                     <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
// //                       <div className="flex items-start justify-between gap-3 border-b border-gray-50 pb-3">
// //                         <div className="flex items-start gap-3">
// //                           <div className="flex flex-col items-center justify-center flex-shrink-0 space-y-1">
// //                             <div className={`w-10 h-10 rounded-xl border ${item.typeColor} flex items-center justify-center`}>
// //                               {item.type === 'VIDEO' ? <PlayCircle size={20} /> : <FileText size={20} />}
// //                             </div>
// //                             <span className="text-[8px] font-extrabold uppercase text-gray-400">{item.type}</span>
// //                           </div>
                          
// //                           <div className="space-y-1.5">
// //                             <h3 className="font-extrabold text-indigo-950 text-xs">{item.title}</h3>
// //                             <div className="flex items-center gap-1.5 flex-wrap">
// //                               {item.tags.map((t, i) => (
// //                                 <span key={i} className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-blue-50/60 text-blue-700 border border-blue-100">
// //                                   {t}
// //                                 </span>
// //                               ))}
// //                             </div>
// //                             <p className="text-gray-500 text-[10px] leading-snug pt-0.5">
// //                               {item.desc}
// //                             </p>
// //                           </div>
// //                         </div>

// //                         {/* Right Column Meta & Actions */}
// //                         <div className="text-right flex-shrink-0 pl-2 space-y-2 min-w-[120px]">
// //                           <div className="text-[9px] text-gray-400 space-y-0.5">
// //                             <p className="flex items-center justify-end gap-1"><Calendar size={11} /> {item.updated ? `Updated: ${item.updated}` : `Uploaded: ${item.uploaded}`}</p>
// //                             <p className="font-semibold text-gray-600">{item.size ? `Size: ${item.size}` : `Duration: ${item.duration}`}</p>
// //                           </div>
                          
// //                           <div className="space-y-1.5 pt-1">
// //                             <button className="w-full border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold px-3 py-1 rounded-xl text-[10px] transition cursor-pointer flex items-center justify-center gap-1 shadow-2xs">
// //                               <Eye size={11} /> Preview
// //                             </button>
// //                             {item.hasDownload && (
// //                               <button className="w-full border border-rose-400 text-rose-500 hover:bg-rose-50 font-bold px-3 py-1 rounded-xl text-[10px] transition cursor-pointer flex items-center justify-center gap-1 shadow-2xs">
// //                                 <Download size={11} /> Download
// //                               </button>
// //                             )}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Load More Button */}
// //                 <div className="text-center pt-1">
// //                   <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 font-bold text-xs px-4 py-2 rounded-xl inline-flex items-center gap-1.5 cursor-pointer transition">
// //                     Load More Materials <ChevronDown size={14} />
// //                   </button>
// //                 </div>

// //                 {/* Complete Study Material Package Offer Banner */}
// //                 <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-4 space-y-3">
// //                   <div className="flex items-center justify-between gap-3">
// //                     <div className="flex items-center gap-3">
// //                       <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
// //                         <Package size={24} />
// //                       </div>
// //                       <div>
// //                         <h3 className="font-extrabold text-indigo-950 text-sm">Complete Study Material Package</h3>
// //                         <p className="text-gray-500 text-[10px]">
// //                           Get full access to all premium notes, videos, PYQs and exclusive resources.
// //                         </p>
// //                       </div>
// //                     </div>

// //                     <div className="flex items-center gap-4 flex-shrink-0 text-right">
// //                       <div>
// //                         <p className="font-black text-emerald-600 text-xl leading-tight">₹599</p>
// //                         <p className="text-gray-400 text-[9px] font-semibold">Only</p>
// //                       </div>

// //                       <div className="space-y-1">
// //                         <span className="bg-emerald-600 text-white font-bold text-[8px] px-2 py-0.5 rounded-full uppercase block text-center">
// //                           Best Value
// //                         </span>
// //                         <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition cursor-pointer shadow-sm">
// //                           Offer Expires Now
// //                         </button>
// //                         <p className="text-gray-400 text-[8px] text-center">Valid for 12 Months</p>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-emerald-100 pt-2 text-[10px] text-gray-700 font-medium">
// //                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> All Premium Materials</div>
// //                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Regular Updates</div>
// //                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Expert Curated</div>
// //                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Unlimited Downloads</div>
// //                   </div>
// //                 </div>

// //                 {/* Bottom Security Banner */}
// //                 <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3 text-center flex items-center justify-center gap-2 text-blue-900 text-xs font-semibold">
// //                   <ShieldCheck size={16} className="text-blue-600" />
// //                   <span>Your data and submissions are safe and secure with GoodGuiders.</span>
// //                 </div>

// //               </div>
// //             ) : (
// //               /* ================= DEFAULT OVERVIEW SECTION ================= */
// //               <>
// //                 {/* Overview Card */}
// //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// //                   <div>
// //                     <h3 className="text-sm font-bold text-gray-900">Overview</h3>
// //                     <p className="text-gray-500 text-xs mt-1">
// //                       Expert Physics mentor for NEET with 8+ years of teaching experience. Helping students build strong concepts and achieve their goals.
// //                     </p>
// //                   </div>

// //                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3 flex items-center justify-between">
// //                     <div>
// //                       <p className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider">Availability Status</p>
// //                       <p className="text-emerald-700 font-semibold text-xs flex items-center gap-1.5 mt-0.5">
// //                         <CheckCircle2 size={14} className="fill-emerald-500 text-white" /> Available for Sessions
// //                       </p>
// //                     </div>
// //                     <p className="text-gray-500 text-[10px] flex items-center gap-1">
// //                       <Clock size={12} /> Typically replies within 2 hours
// //                     </p>
// //                   </div>

// //                   <div className="grid grid-cols-4 gap-2 pt-2">
// //                     <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
// //                       <p className="font-bold text-gray-900 text-sm">{mentor.studentsCount}</p>
// //                       <p className="text-gray-500 text-[10px] mt-0.5">Students Mentored</p>
// //                     </div>
// //                     <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
// //                       <p className="font-bold text-gray-900 text-sm">{mentor.experienceYears}+</p>
// //                       <p className="text-gray-500 text-[10px] mt-0.5">Years Experience</p>
// //                     </div>
// //                     <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
// //                       <p className="font-bold text-gray-900 text-sm">5+</p>
// //                       <p className="text-gray-500 text-[10px] mt-0.5">Subjects Teaching</p>
// //                     </div>
// //                     <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
// //                       <p className="font-bold text-gray-900 text-sm">98%</p>
// //                       <p className="text-gray-500 text-[10px] mt-0.5">Satisfaction Rate</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* About the Mentor Section */}
// //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// //                   <h3 className="text-sm font-bold text-gray-900 border-b pb-2">About the Mentor</h3>
// //                   <p className="text-gray-600 text-xs leading-relaxed">
// //                     {mentor.name} is a Physics expert with over 8 years of teaching experience. He specializes in making complex concepts simple and improving problem solving skills. He has mentored thousands of NEET aspirants with a proven track record of results.
// //                   </p>

// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
// //                     <div className="space-y-2">
// //                       {[
// //                         'Conceptual teaching with real-life examples',
// //                         'Focused on NCERT + Advanced problem solving',
// //                         'Personalized mentoring & doubt clearing',
// //                         'Regular tests and performance analysis',
// //                         'Complete guidance for NEET Physics',
// //                       ].map((point, idx) => (
// //                         <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
// //                           <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
// //                           <span>{point}</span>
// //                         </div>
// //                       ))}
// //                     </div>

// //                     <div className="bg-purple-50/40 border border-purple-100 p-3 rounded-xl space-y-2">
// //                       <p className="font-bold text-purple-900 text-xs">Teaching Expertise</p>
// //                       <div className="flex flex-wrap gap-1.5">
// //                         {['Concept Building', 'Problem Solving', 'NCERT Mastery', 'Exam Strategy', 'Doubt Solving', 'Physics Basics'].map((exp) => (
// //                           <span key={exp} className="bg-white text-purple-700 border border-purple-200 text-[10px] font-medium px-2.5 py-1 rounded-lg">
// //                             {exp}
// //                           </span>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Teaching Subjects & Topics */}
// //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// //                   <h3 className="text-sm font-bold text-gray-900 border-b pb-2">Teaching Subjects & Topics</h3>
                  
// //                   <div className="flex flex-wrap gap-2">
// //                     {['Physics', 'Mathematics', 'Chemistry', 'Biology', 'Aptitude'].map((sub, i) => (
// //                       <span 
// //                         key={sub} 
// //                         className={`px-3 py-1 rounded-lg text-xs font-semibold ${
// //                           i === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'
// //                         }`}
// //                       >
// //                         {sub}
// //                       </span>
// //                     ))}
// //                   </div>

// //                   <div>
// //                     <p className="font-bold text-gray-800 text-xs mb-2">Physics Topics Covered</p>
// //                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
// //                       {[
// //                         'Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics',
// //                         'Kinematics', 'Work, Energy & Power', 'Waves & Oscillations', 'Semiconductors', 'Atoms & Nuclei'
// //                       ].map((topic) => (
// //                         <div key={topic} className="flex items-center gap-2 border border-gray-100 p-2 rounded-xl bg-gray-50/50 text-xs text-gray-700">
// //                           <BookOpen size={13} className="text-[#FF5722]" />
// //                           <span className="text-[11px] font-medium truncate">{topic}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>

// //                   <div className="text-center pt-2">
// //                     <button className="text-[#FF5722] hover:underline font-semibold text-xs inline-flex items-center gap-1">
// //                       View All Topics <ChevronRight size={13} />
// //                     </button>
// //                   </div>
// //                 </div>

// //                 {/* Teaching Approach */}
// //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// //                   <h3 className="text-sm font-bold text-gray-900 border-b pb-2">Teaching Approach</h3>
// //                   <div className="grid grid-cols-2 gap-3">
// //                     <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
// //                       <p className="font-bold text-gray-800 text-xs mb-1">Concept First</p>
// //                       <p className="text-gray-500 text-[10px]">Clear concepts first, then move to problems for better understanding.</p>
// //                     </div>
// //                     <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
// //                       <p className="font-bold text-gray-800 text-xs mb-1">Practice Oriented</p>
// //                       <p className="text-gray-500 text-[10px]">Regular practice with PYQs, NCERT & Advanced questions.</p>
// //                     </div>
// //                     <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
// //                       <p className="font-bold text-gray-800 text-xs mb-1">Performance Tracking</p>
// //                       <p className="text-gray-500 text-[10px]">Tests and analysis to track progress and improve weak areas.</p>
// //                     </div>
// //                     <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
// //                       <p className="font-bold text-gray-800 text-xs mb-1">Doubt Support</p>
// //                       <p className="text-gray-500 text-[10px]">Quick doubt resolution and personal attention for every student.</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Student Impact Section */}
// //                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
// //                   <h3 className="text-sm font-bold text-gray-900">Student Impact</h3>
// //                   <p className="text-gray-500 text-xs">Results and feedback from my amazing students.</p>

// //                   <div className="grid grid-cols-4 gap-2">
// //                     <div className="bg-emerald-50/50 border border-emerald-100 p-2.5 rounded-xl text-center">
// //                       <p className="font-bold text-emerald-700 text-xs">{mentor.studentsCount}</p>
// //                       <p className="text-gray-500 text-[9px]">Students Mentored</p>
// //                     </div>
// //                     <div className="bg-blue-50/50 border border-blue-100 p-2.5 rounded-xl text-center">
// //                       <p className="font-bold text-blue-700 text-xs">650+</p>
// //                       <p className="text-gray-500 text-[9px]">Students Scored 650+ in NEET</p>
// //                     </div>
// //                     <div className="bg-purple-50/50 border border-purple-100 p-2.5 rounded-xl text-center">
// //                       <p className="font-bold text-purple-700 text-xs">320+</p>
// //                       <p className="text-gray-500 text-[9px]">Students Scored 700+ in NEET</p>
// //                     </div>
// //                     <div className="bg-amber-50/50 border border-amber-100 p-2.5 rounded-xl text-center">
// //                       <p className="font-bold text-amber-700 text-xs">95%</p>
// //                       <p className="text-gray-500 text-[9px]">Students Improved by 2+ Ranks</p>
// //                     </div>
// //                   </div>

// //                   {/* Highlight Quote Block */}
// //                   <div className="bg-emerald-50/40 border border-emerald-100 p-3.5 rounded-xl text-xs text-gray-700 italic space-y-2">
// //                     <p className="text-emerald-900 font-medium">
// //                       "Mentor who explains Physics in such an easy way that even the toughest topics feel simple. His guidance and support made a huge difference in my NEET preparation."
// //                     </p>
// //                     <p className="text-right text-gray-500 text-[10px] font-bold not-italic">- Ananya Sharma</p>
// //                   </div>
// //                 </div>

// //                 {/* Bottom Callout Banner */}
// //                 <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-5 text-center space-y-3">
// //                   <h3 className="font-bold text-gray-900 text-sm">Want to learn from {mentor.name}?</h3>
// //                   <p className="text-gray-500 text-xs">Book a session now and take a step closer to your NEET success.</p>
// //                   <button className="bg-[#FF5722] hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer inline-flex items-center gap-2">
// //                     <Calendar size={14} /> Book a Session Now
// //                   </button>
// //                 </div>
// //               </>
// //             )}

// //           </div>

// //           {/* ================= RIGHT COLUMN: AVAILABILITY & REVIEWS (col-span-3) ================= */}
// //           <div className="lg:col-span-3 space-y-4">
            
// //             {/* Availability Slots Calendar Card */}
// //             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
// //               <div className="flex items-center justify-between border-b pb-2">
// //                 <h3 className="font-bold text-gray-900 text-xs flex items-center gap-1.5">
// //                   <Calendar size={14} className="text-[#FF5722]" /> Availability
// //                 </h3>
// //                 <span className="text-[#FF5722] font-semibold text-[10px] hover:underline cursor-pointer">View Calendar</span>
// //               </div>

// //               <div className="space-y-3 text-[11px]">
// //                 <div>
// //                   <p className="font-bold text-gray-800 text-[10px] mb-1.5">Today, 24 May</p>
// //                   <div className="grid grid-cols-2 gap-2">
// //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">6:00 PM</button>
// //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">8:00 PM</button>
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <p className="font-bold text-gray-800 text-[10px] mb-1.5">Sun, 25 May</p>
// //                   <div className="grid grid-cols-2 gap-2">
// //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">10:00 AM</button>
// //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">4:00 PM</button>
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <p className="font-bold text-gray-800 text-[10px] mb-1.5">Mon, 26 May</p>
// //                   <div className="grid grid-cols-2 gap-2">
// //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">6:00 PM</button>
// //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">8:00 PM</button>
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <p className="font-bold text-gray-800 text-[10px] mb-1.5">Tue, 27 May</p>
// //                   <div className="grid grid-cols-2 gap-2">
// //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">6:00 PM</button>
// //                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">9:00 PM</button>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="text-center pt-1 border-t border-dashed border-gray-100">
// //                 <button className="text-gray-500 hover:text-gray-800 font-semibold text-[10px] inline-flex items-center gap-1">
// //                   More slots available <ChevronDown size={12} />
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Student Reviews Widget */}
// //             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
// //               <div className="flex items-center justify-between border-b pb-2">
// //                 <h3 className="font-bold text-gray-900 text-xs">Student Reviews</h3>
// //                 <span className="flex items-center gap-1 text-xs font-bold text-gray-800">
// //                   <Star size={12} fill="#f59e0b" className="text-amber-500" /> {mentor.rating} ({mentor.reviewsCount})
// //                 </span>
// //               </div>

// //               <div className="space-y-3 text-[11px]">
// //                 {/* Review 1 */}
// //                 <div className="border-b border-gray-100 pb-2.5 space-y-1">
// //                   <div className="flex items-center gap-2">
// //                     <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Ananya" className="w-6 h-6 rounded-full object-cover" />
// //                     <div>
// //                       <p className="font-bold text-gray-800 text-[10px]">Ananya Sharma</p>
// //                       <div className="flex text-amber-500">
// //                         {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#f59e0b" />)}
// //                       </div>
// //                     </div>
// //                     <span className="ml-auto text-gray-400 text-[9px]">16 May 2024</span>
// //                   </div>
// //                   <p className="text-gray-600 text-[10px] leading-snug">
// //                     Sir explains Physics in such an easy way that even the toughest topics feel simple. Highly recommended!
// //                   </p>
// //                 </div>

// //                 {/* Review 2 */}
// //                 <div className="border-b border-gray-100 pb-2.5 space-y-1">
// //                   <div className="flex items-center gap-2">
// //                     <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Rohit" className="w-6 h-6 rounded-full object-cover" />
// //                     <div>
// //                       <p className="font-bold text-gray-800 text-[10px]">Rohit Kumar</p>
// //                       <div className="flex text-amber-500">
// //                         {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#f59e0b" />)}
// //                       </div>
// //                     </div>
// //                     <span className="ml-auto text-gray-400 text-[9px]">12 May 2024</span>
// //                   </div>
// //                   <p className="text-gray-600 text-[10px] leading-snug">
// //                     Best mentor for NEET Physics. Regular practice sessions and doubt solving sessions are very helpful.
// //                   </p>
// //                 </div>

// //                 {/* Review 3 */}
// //                 <div className="space-y-1">
// //                   <div className="flex items-center gap-2">
// //                     <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Pooja" className="w-6 h-6 rounded-full object-cover" />
// //                     <div>
// //                       <p className="font-bold text-gray-800 text-[10px]">Pooja Verma</p>
// //                       <div className="flex text-amber-500">
// //                         {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#f59e0b" />)}
// //                       </div>
// //                     </div>
// //                     <span className="ml-auto text-gray-400 text-[9px]">10 May 2024</span>
// //                   </div>
// //                   <p className="text-gray-600 text-[10px] leading-snug">
// //                     The notes and quizzes provided by sir are excellent. Mock tests really help in exam preparation.
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="text-center pt-2 border-t border-gray-100">
// //                 <button className="text-[#FF5722] hover:underline font-semibold text-xs inline-flex items-center gap-1">
// //                   View all reviews <ChevronRight size={13} />
// //                 </button>
// //               </div>
// //             </div>

// //             {/* New Student Offer Promo Box */}
// //             <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-4 text-white text-center space-y-2 shadow-sm relative overflow-hidden">
// //               <Gift size={28} className="mx-auto text-orange-100" />
// //               <h4 className="font-bold text-sm">New Student Offer</h4>
// //               <p className="text-orange-100 text-[10px]">Get 10% OFF on your first session with any service.</p>
// //               <button className="w-full bg-white text-[#FF5722] font-bold py-2 rounded-xl text-xs hover:bg-orange-50 transition cursor-pointer shadow-sm">
// //                 Apply Offer
// //               </button>
// //             </div>

// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // Small helper component for Globe icon
// // function GlobeIcon({ size, className }: { size: number; className?: string }) {
// //   return (
// //     <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
// //       <circle cx="12" cy="12" r="10"/>
// //       <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
// //       <path d="M2 12h20"/>
// //     </svg>
// //   );
// // }


// import React, { useState, useMemo } from 'react';
// import { useLocation } from 'wouter';
// import { 
//   Star, Clock, CheckCircle2, ArrowLeft, Award, BookOpen, User, 
//   MessageSquare, Calendar, ChevronDown, ShieldCheck,
//   Sparkles, Gift, FileText, HelpCircle, Layers, GraduationCap,
//   Home, BarChart2, Target, MessageCircle, ChevronRight, Download, Upload, Info,
//   Flame, Zap, Book, Check, Target as TargetIcon, Filter, IndianRupee, Lock, Package,
//   Eye, PlayCircle, Video, Play, Youtube, Eye as ViewsIcon
// } from 'lucide-react';
// import { INITIAL_MENTORS, Mentor } from './Mentordetail';

// export default function MentorProfilePage() {
//   const [, setLocation] = useLocation();
//   const [activeTab, setActiveTab] = useState<string>('Overview');

//   const mentorQueryParam = useMemo(() => {
//     const params = new URLSearchParams(window.location.search);
//     return params.get('name') || params.get('id');
//   }, []);

//   const mentor: Mentor = useMemo(() => {
//     if (!mentorQueryParam) return INITIAL_MENTORS[0];

//     const rawParam = decodeURIComponent(mentorQueryParam).trim().toLowerCase();

//     const found = INITIAL_MENTORS.find((m) => {
//       const mentorSlug = m.name
//         .toLowerCase()
//         .replace(/[^a-z0-9\s-]/g, '')
//         .trim()
//         .replace(/\s+/g, '-');

//       return (
//         mentorSlug === rawParam ||
//         m.name.toLowerCase() === rawParam ||
//         m.id === Number(rawParam)
//       );
//     });

//     return found || INITIAL_MENTORS[0];
//   }, [mentorQueryParam]);

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs pb-12">
//       <div className="w-full max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 py-4 space-y-4">
        
//         {/* Breadcrumb Navigation & Back Button */}
//         <div className="flex items-center justify-between">
//           <button 
//             onClick={() => setLocation('/mentordetail')}
//             className="flex items-center gap-1.5 text-[#FF5722] font-semibold text-xs bg-orange-50 hover:bg-orange-100 border border-orange-200 px-3 py-1.5 rounded-lg transition cursor-pointer"
//           >
//             <ArrowLeft size={13} /> Back to List
//           </button>
//         </div>

//         {/* ================= MAIN 3-COLUMN LAYOUT ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
//           {/* ================= LEFT COLUMN: PROFILE SIDEBAR (col-span-3) ================= */}
//           <div className="lg:col-span-3 space-y-4">
            
//             {/* Main Profile Header Card */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center relative overflow-hidden">
//               <span className="absolute top-3 right-3 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
//                 Available Now
//               </span>

//               <div className="relative inline-block my-2">
//                 <img
//                   src={mentor.image}
//                   alt={mentor.name}
//                   className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-emerald-50"
//                 />
//                 <CheckCircle2
//                   size={20}
//                   className="text-white bg-emerald-500 rounded-full absolute bottom-1 right-1 fill-emerald-500"
//                 />
//               </div>

//               <h2 className="font-bold text-gray-900 text-base">{mentor.name}</h2>
//               <p className="text-emerald-600 text-xs font-semibold mt-0.5">{mentor.role}</p>
              
//               <div className="flex items-center justify-center gap-1 text-xs text-gray-600 mt-2">
//                 <Star size={13} fill="#f59e0b" className="text-amber-500" />
//                 <span className="font-bold text-gray-800">{mentor.rating}</span>
//                 <span className="text-gray-400">({mentor.reviewsCount} Reviews)</span>
//               </div>

//               <div className="space-y-2 mt-4">
//                 <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer flex items-center justify-center gap-2">
//                   <Calendar size={14} /> Book a Session
//                 </button>
//                 <button className="w-full border border-orange-200 text-[#FF5722] hover:bg-orange-50 font-bold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-2">
//                   <MessageSquare size={14} /> Message Mentor
//                 </button>
//               </div>
//             </div>

//             {/* About Me Details Card */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
//               <h3 className="font-bold text-gray-900 text-xs border-b pb-2">About Me</h3>
//               <p className="text-gray-600 text-[11px] leading-relaxed">
//                 I make Physics simple and concept-based. My focus is on building strong fundamentals and problem solving skills to help students crack NEET with confidence.
//               </p>

//               <div className="space-y-2.5 pt-2 text-[11px]">
//                 <div className="flex items-start gap-2.5">
//                   <Clock size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-gray-400 text-[10px]">Experience</p>
//                     <p className="font-semibold text-gray-800">{mentor.experienceYears}+ Years</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2.5">
//                   <User size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-gray-400 text-[10px]">Students Mentored</p>
//                     <p className="font-semibold text-gray-800">{mentor.studentsCount}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2.5">
//                   <GraduationCap size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-gray-400 text-[10px]">Qualification</p>
//                     <p className="font-semibold text-gray-800">B.Tech, M.Tech (IIT Delhi)</p>
//                     <p className="text-gray-500 text-[10px]">Ph.D. in Applied Physics</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2.5">
//                   <Award size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-gray-400 text-[10px]">Institute</p>
//                     <p className="font-semibold text-gray-800">IIT Delhi Alumni</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2.5">
//                   <GlobeIcon size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-gray-400 text-[10px]">Languages</p>
//                     <p className="font-semibold text-gray-800">English, Hindi</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-2.5">
//                   <BookOpen size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <p className="text-gray-400 text-[10px]">Teaching Mode</p>
//                     <p className="font-semibold text-gray-800">Online • Home Tuition • Guidance</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats Grid */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-2">
//               <h3 className="font-bold text-gray-900 text-xs mb-2">Quick Stats</h3>
//               <div className="grid grid-cols-2 gap-2">
//                 <div className="bg-emerald-50/50 border border-emerald-100 p-2.5 rounded-xl text-center">
//                   <p className="text-emerald-700 font-bold text-xs">{mentor.studentsCount}</p>
//                   <p className="text-gray-500 text-[9px] mt-0.5">Students Mentored</p>
//                 </div>
//                 <div className="bg-blue-50/50 border border-blue-100 p-2.5 rounded-xl text-center">
//                   <p className="text-blue-700 font-bold text-xs">{mentor.experienceYears}+ Years</p>
//                   <p className="text-gray-500 text-[9px] mt-0.5">Teaching Experience</p>
//                 </div>
//                 <div className="bg-amber-50/50 border border-amber-100 p-2.5 rounded-xl text-center">
//                   <p className="text-amber-700 font-bold text-xs">98%</p>
//                   <p className="text-gray-500 text-[9px] mt-0.5">Satisfaction Rate</p>
//                 </div>
//                 <div className="bg-purple-50/50 border border-purple-100 p-2.5 rounded-xl text-center">
//                   <p className="text-purple-700 font-bold text-xs">{mentor.reviewsCount}</p>
//                   <p className="text-gray-500 text-[9px] mt-0.5">Reviews</p>
//                 </div>
//               </div>
//             </div>

//             {/* Need Help CTA Box */}
//             <div className="bg-orange-50/60 border border-orange-100 rounded-2xl p-4 text-center space-y-2">
//               <h4 className="font-bold text-gray-900 text-xs">Need Help?</h4>
//               <p className="text-gray-500 text-[10px]">Not sure which service is right for you? Our team can help you choose.</p>
//               <button className="w-full bg-white border border-orange-200 text-[#FF5722] hover:bg-orange-100 font-semibold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
//                 <HelpCircle size={13} /> Talk to GoodGuiders
//               </button>
//             </div>

//           </div>

//           {/* ================= MIDDLE COLUMN: MAIN TAB CONTENT (col-span-6) ================= */}
//           <div className="lg:col-span-6 space-y-4">
            
//             {/* Navigation Tabs Bar */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-1.5 flex items-center gap-1 overflow-x-auto scrollbar-none">
//               {[
//                 { name: 'Overview', icon: BookOpen },
//                 { name: 'Service', icon: Layers },
//                 { name: 'Mock Test', icon: FileText },
//                 { name: 'Assignment', icon: FileText },
//                 { name: 'Study Material', icon: BookOpen },
//                 { name: 'Video lecture', icon: Video },
//                 { name: 'Q&A', icon: HelpCircle },
//               ].map((tab) => {
//                 const Icon = tab.icon;
//                 const isActive = activeTab.toLowerCase().trim() === tab.name.toLowerCase().trim();
//                 return (
//                   <button
//                     key={tab.name}
//                     onClick={() => setActiveTab(tab.name)}
//                     className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold whitespace-nowrap transition cursor-pointer ${
//                       isActive 
//                         ? 'bg-orange-50 text-[#FF5722] border border-orange-200' 
//                         : 'text-gray-600 hover:bg-gray-50'
//                     }`}
//                   >
//                     <Icon size={13} />
//                     <span>{tab.name}</span>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* CONDITIONAL TAB CONTENT */}
//             {activeTab.toLowerCase().includes('video') ? (
//               /* ================= VIDEO LECTURES SECTION ================= */
//               <div className="space-y-4">
                
//                 {/* Header Title with Graphic */}
//                 <div className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center justify-between gap-4 shadow-sm relative overflow-hidden">
//                   <div className="space-y-1 max-w-[65%]">
//                     <h2 className="text-lg font-extrabold text-indigo-950">Video Lectures</h2>
//                     <p className="text-gray-500 text-[11px] leading-relaxed">
//                       Learn from experienced mentors through high-quality video lectures. Choose from a wide range of topics and chapters across different subjects and exams.
//                     </p>
//                   </div>
                  
//                   {/* Decorative Monitor Graphic */}
//                   <div className="relative flex-shrink-0">
//                     <div className="w-28 h-20 bg-indigo-900 rounded-xl p-1.5 shadow-md flex flex-col justify-between items-center relative">
//                       <div className="w-full h-full bg-indigo-950 rounded-lg flex items-center justify-center relative overflow-hidden border border-indigo-800">
//                         <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
//                           <Play size={16} className="fill-white ml-0.5" />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-12 h-1.5 bg-gray-300 mx-auto rounded-b-md"></div>
//                     <div className="w-16 h-1 bg-gray-400 mx-auto rounded-full mt-0.5"></div>
//                     <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white text-[8px] font-bold">
//                       <Play size={10} className="fill-white ml-0.5" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Filter Video Lectures Card */}
//                 <div className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 space-y-3">
//                   <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 items-end">
//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Class</label>
//                       <div className="relative">
//                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
//                           <option>Choose Class</option>
//                           <option>Class 11</option>
//                           <option>Class 12</option>
//                         </select>
//                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Subject</label>
//                       <div className="relative">
//                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
//                           <option>Choose Subject</option>
//                           <option>Physics</option>
//                           <option>Chemistry</option>
//                         </select>
//                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Topic</label>
//                       <div className="relative">
//                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
//                           <option>Choose Topic</option>
//                           <option>Current Electricity</option>
//                           <option>Laws of Motion</option>
//                           <option>Electrostatics</option>
//                           <option>Thermodynamics</option>
//                         </select>
//                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </div>

//                     <button className="w-full bg-indigo-900 hover:bg-indigo-950 text-white font-bold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
//                       <Filter size={13} /> Apply
//                     </button>
//                   </div>
//                 </div>

//                 {/* Video Lectures Card List */}
//                 <div className="space-y-4">
//                   {[
//                     {
//                       title: 'Current Electricity – Full Chapter',
//                       thumbnailTitle: 'CURRENT ELECTRICITY',
//                       thumbnailSub: 'FULL CHAPTER',
//                       duration: '1h 24m 35s',
//                       badgeTime: '1:24:35',
//                       tags: ['NEET', 'Physics', 'Class 12', 'Chapter'],
//                       author: 'Abhishek Sir',
//                       authorPlatform: 'YouTube',
//                       desc: 'Complete explanation of Current Electricity with important formulas and solved examples.',
//                       topicsCount: 8,
//                       views: '45.2K',
//                       uploaded: '12 Apr 2024',
//                       learnPoints: [
//                         'Understand basic concepts of current electricity',
//                         'Learn important formulas and derivations',
//                         'Solve numerical problems with tricks',
//                         'Get exam oriented important questions'
//                       ]
//                     },
//                     {
//                       title: 'Laws of Motion – One Shot',
//                       thumbnailTitle: 'LAWS OF MOTION',
//                       thumbnailSub: 'ONE SHOT',
//                       duration: '58m 40s',
//                       badgeTime: '58:40',
//                       tags: ['NEET', 'Physics', 'Class 11', 'Chapter'],
//                       author: 'Physics Wallah',
//                       authorPlatform: 'YouTube',
//                       desc: 'All concepts of Laws of Motion in one shot with tricks and important questions.',
//                       topicsCount: 6,
//                       views: '32.1K',
//                       uploaded: '5 Mar 2024',
//                       learnPoints: [
//                         "Basics, Newton's Laws, Friction",
//                         'Numericals & problem solving',
//                         'Concepts with short tricks',
//                         'Important questions for exam'
//                       ]
//                     },
//                     {
//                       title: 'Electrostatics – Complete Chapter',
//                       thumbnailTitle: 'ELECTROSTATICS',
//                       thumbnailSub: 'COMPLETE CHAPTER',
//                       duration: '1h 32m 10s',
//                       badgeTime: '1:32:10',
//                       tags: ['NEET', 'Physics', 'Class 12', 'Chapter'],
//                       author: 'Mohit Tyagi',
//                       authorPlatform: 'YouTube',
//                       desc: 'Detailed lecture on Electrostatics with best examples and illustrations.',
//                       topicsCount: 9,
//                       views: '28.7K',
//                       uploaded: '18 Feb 2024',
//                       learnPoints: [
//                         "Electric Charge, Coulomb's Law",
//                         'Electric Field, Potential, Capacitance',
//                         'Solved examples & numericals',
//                         'Concepts explained in easy way'
//                       ]
//                     },
//                     {
//                       title: 'Thermodynamics – Full Chapter',
//                       thumbnailTitle: 'THERMODYNAMICS',
//                       thumbnailSub: 'FULL CHAPTER',
//                       duration: '1h 41m 22s',
//                       badgeTime: '1:41:22',
//                       tags: ['JEE Main', 'Physics', 'Class 11', 'Chapter'],
//                       author: 'Nishant Jindal',
//                       authorPlatform: 'YouTube',
//                       desc: 'Learn Thermodynamics from basics to advanced level with problem solving.',
//                       topicsCount: 7,
//                       views: '19.8K',
//                       uploaded: '2 Jan 2024',
//                       learnPoints: [
//                         'Zeroth, First & Second Law',
//                         'Thermodynamic Processes',
//                         'Numericals with concepts',
//                         'Important questions for JEE'
//                       ]
//                     },
//                   ].map((lecture, idx) => (
//                     <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
                      
//                       {/* Top Main Meta Row */}
//                       <div className="flex flex-col sm:flex-row items-start justify-between gap-4 border-b border-gray-50 pb-3">
//                         {/* Custom Dark Thumbnail */}
//                         <div className="w-full sm:w-48 h-28 bg-black rounded-xl relative flex-shrink-0 overflow-hidden flex flex-col justify-between p-2.5 border border-gray-800 group">
//                           <div className="space-y-0.5">
//                             <span className="text-[11px] font-black tracking-wider text-amber-400 block leading-tight">{lecture.thumbnailTitle}</span>
//                             <span className="text-[9px] font-extrabold tracking-wide text-white block uppercase">{lecture.thumbnailSub}</span>
//                           </div>

//                           <div className="flex items-end justify-between">
//                             <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
//                               <Play size={10} className="fill-white ml-0.5" />
//                             </div>
//                             <span className="bg-black/80 text-white font-mono text-[9px] px-1.5 py-0.5 rounded border border-gray-700">
//                               {lecture.badgeTime}
//                             </span>
//                           </div>
//                         </div>

//                         {/* Title, Tags, Description */}
//                         <div className="space-y-1.5 flex-1">
//                           <h3 className="font-extrabold text-indigo-950 text-sm">{lecture.title}</h3>
                          
//                           <div className="flex items-center gap-1.5 flex-wrap">
//                             {lecture.tags.map((tag, tIdx) => (
//                               <span key={tIdx} className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
//                                 {tag}
//                               </span>
//                             ))}
//                           </div>

//                           <div className="flex items-center gap-2 text-[10px] text-gray-600 pt-0.5">
//                             <div className="flex items-center gap-1 font-semibold text-gray-900">
//                               <span>By {lecture.author}</span>
//                               <CheckCircle2 size={11} className="text-blue-500 fill-blue-500 text-white" />
//                             </div>
//                             <span>•</span>
//                             <span className="flex items-center gap-1 text-red-600 font-bold text-[9px]">
//                               <Youtube size={12} className="fill-red-600 text-white" /> {lecture.authorPlatform}
//                             </span>
//                           </div>

//                           <p className="text-gray-500 text-[10px] leading-relaxed pt-0.5">
//                             {lecture.desc}
//                           </p>
//                         </div>

//                         {/* Action Column */}
//                         <div className="flex flex-col items-end justify-between sm:h-28 flex-shrink-0">
//                           <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1.5 rounded-xl text-[10px] transition cursor-pointer flex items-center gap-1.5 shadow-xs">
//                             <Youtube size={13} className="fill-white" /> Watch on YouTube
//                           </button>

//                           <button className="text-blue-600 font-bold text-[10px] hover:underline flex items-center gap-1 mt-auto">
//                             More Details <ChevronDown size={12} />
//                           </button>
//                         </div>
//                       </div>

//                       {/* Bottom Info Grid + "What you'll learn" */}
//                       <div className="bg-slate-50/60 rounded-xl p-3 grid grid-cols-1 md:grid-cols-12 gap-3 text-[10px]">
//                         {/* Meta Column */}
//                         <div className="md:col-span-5 space-y-1.5 text-gray-600 font-medium border-b md:border-b-0 md:border-r border-gray-200/60 pr-2 pb-2 md:pb-0">
//                           <div className="flex items-center gap-2">
//                             <Clock size={12} className="text-gray-400" />
//                             <span>Duration: <strong className="text-gray-900">{lecture.duration}</strong></span>
//                           </div>
//                           {lecture.topicsCount && (
//                             <div className="flex items-center gap-2">
//                               <Layers size={12} className="text-gray-400" />
//                               <span>Topics Covered: <strong className="text-gray-900">{lecture.topicsCount}</strong></span>
//                             </div>
//                           )}
//                           <div className="flex items-center gap-2">
//                             <ViewsIcon size={12} className="text-gray-400" />
//                             <span>Views: <strong className="text-gray-900">{lecture.views}</strong></span>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <Calendar size={12} className="text-gray-400" />
//                             <span>Uploaded on: <strong className="text-gray-900">{lecture.uploaded}</strong></span>
//                           </div>
//                         </div>

//                         {/* What You'll Learn Column */}
//                         <div className="md:col-span-7 space-y-1">
//                           <p className="font-bold text-gray-900 text-[10px] mb-1">What you'll learn:</p>
//                           <div className="grid grid-cols-1 gap-1">
//                             {lecture.learnPoints.map((point, pIdx) => (
//                               <div key={pIdx} className="flex items-center gap-1.5 text-gray-700">
//                                 <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0" />
//                                 <span>{point}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>

//                     </div>
//                   ))}
//                 </div>

//                 {/* Load More Button */}
//                 <div className="text-center pt-1">
//                   <button className="bg-white border border-gray-200 text-indigo-950 hover:bg-gray-50 font-bold text-xs px-4 py-2 rounded-xl inline-flex items-center gap-1.5 cursor-pointer transition shadow-2xs">
//                     Load More Lectures <ChevronDown size={14} />
//                   </button>
//                 </div>

//                 {/* YouTube Host Disclaimer Banner */}
//                 <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-3 text-center flex items-center justify-center gap-2 text-indigo-950 text-[10px] font-semibold">
//                   <ShieldCheck size={14} className="text-indigo-600 flex-shrink-0" />
//                   <span>GoodGuiders only lists content. All videos are hosted on YouTube. Earnings belong to the original creator.</span>
//                 </div>

//               </div>
//             ) : activeTab.startsWith('Assignment') ? (
//               /* ================= ASSIGNMENTS SECTION ================= */
//               <div className="space-y-4">
                
//                 {/* Header Title */}
//                 <div>
//                   <h2 className="text-lg font-extrabold text-indigo-950">Assignments</h2>
//                   <p className="text-gray-500 text-[11px] leading-relaxed mt-0.5">
//                     Assignments help you practice concepts in depth and strengthen your understanding.<br />
//                     It will help you identify your depth of knowledge. When you upload your assignments, we review them carefully and provide personalized improvement suggestions.
//                   </p>
//                 </div>

//                 {/* Filter Assignments Card */}
//                 <div className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 space-y-3">
//                   <h3 className="font-bold text-blue-950 text-xs">Filter Assignments</h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 items-end">
//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Class</label>
//                       <div className="relative">
//                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
//                           <option>Select Class</option>
//                           <option>Class 11</option>
//                           <option>Class 12</option>
//                         </select>
//                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Subject</label>
//                       <div className="relative">
//                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
//                           <option>Select Subject</option>
//                           <option>Physics</option>
//                           <option>Chemistry</option>
//                         </select>
//                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Topic</label>
//                       <div className="relative">
//                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
//                           <option>Select Topic</option>
//                           <option>Kinematics</option>
//                           <option>Laws of Motion</option>
//                         </select>
//                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </div>

//                     <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
//                       <Filter size={13} /> Apply
//                     </button>
//                   </div>
//                 </div>

//                 {/* Per Assignment Fee Banner */}
//                 <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3.5 flex items-center gap-3">
//                   <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center font-bold text-sm flex-shrink-0">
//                     ₹
//                   </div>
//                   <div>
//                     <h4 className="font-extrabold text-amber-950 text-xs">Per Assignment Fee: <span className="text-red-500">₹20</span></h4>
//                     <p className="text-amber-800 text-[10px] mt-0.5">
//                       Each assignment review and personalized feedback is available at just <span className="font-bold text-amber-950">₹20</span> per assignment.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Assignments Cards List */}
//                 <div className="space-y-3">
//                   {[
//                     {
//                       title: 'Kinematics – Practice Set 1',
//                       badge: 'Active',
//                       badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
//                       iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
//                       class: '11', subject: 'Physics', topic: 'Motion in a Straight Line',
//                       questions: 10, marks: 20, due: '25 May 2024',
//                       desc: 'This assignment covers basic kinematics concepts including displacement, velocity, acceleration and equations of motion.'
//                     },
//                     {
//                       title: 'Laws of Motion – Practice Set 1',
//                       badge: 'Active',
//                       badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
//                       iconBg: 'bg-purple-50 border-purple-100 text-purple-600',
//                       class: '11', subject: 'Physics', topic: "Newton's Laws of Motion",
//                       questions: 12, marks: 24, due: '30 May 2024',
//                       desc: "Practice problems based on Newton's three laws of motion."
//                     },
//                     {
//                       title: 'Work, Energy & Power – Practice Set 1',
//                       badge: 'Upcoming',
//                       badgeBg: 'bg-blue-50 text-blue-600 border-blue-100',
//                       iconBg: 'bg-amber-50 border-amber-100 text-amber-600',
//                       class: '11', subject: 'Physics', topic: 'Work, Power',
//                       questions: 10, marks: 20, due: '05 Jun 2024',
//                       desc: 'Numerical problems on work done, energy and power.'
//                     },
//                     {
//                       title: 'System of Particles – Practice Set 1',
//                       badge: 'Submitted',
//                       badgeBg: 'bg-purple-50 text-purple-600 border-purple-100',
//                       iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
//                       class: '11', subject: 'Physics', topic: 'Center of Mass',
//                       questions: 10, marks: 20, due: '18 May 2024',
//                       desc: 'Problems based on center of mass and related concepts.'
//                     },
//                     {
//                       title: 'Rotational Motion – Practice Set 1',
//                       badge: 'Submitted',
//                       badgeBg: 'bg-purple-50 text-purple-600 border-purple-100',
//                       iconBg: 'bg-purple-50 border-purple-100 text-purple-600',
//                       class: '11', subject: 'Physics', topic: 'Moment of Inertia',
//                       questions: 12, marks: 24, due: '12 May 2024',
//                       desc: 'Problems on moment of inertia and rotational dynamics.'
//                     },
//                     {
//                       title: 'Gravitation – Practice Set 1',
//                       badge: 'Evaluated',
//                       badgeBg: 'bg-amber-50 text-amber-600 border-amber-100',
//                       iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
//                       class: '11', subject: 'Physics', topic: 'Universal Law of Gravitation',
//                       questions: 10, marks: 20, due: '08 May 2024',
//                       desc: 'Conceptual and numerical problems on gravitation.'
//                     },
//                   ].map((item, idx) => (
//                     <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
//                       <div className="flex items-start justify-between gap-3 border-b border-gray-50 pb-3">
//                         <div className="flex items-center gap-2.5">
//                           <div className={`w-9 h-9 rounded-xl border ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
//                             <FileText size={18} />
//                           </div>
//                           <div className="flex items-center gap-2 flex-wrap">
//                             <h3 className="font-extrabold text-indigo-950 text-xs">{item.title}</h3>
//                             <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${item.badgeBg}`}>
//                               {item.badge}
//                             </span>
//                           </div>
//                         </div>

//                         {/* Upload Answer Right Column */}
//                         <div className="text-right flex-shrink-0 border-l border-gray-100 pl-4 space-y-1">
//                           <p className="font-extrabold text-indigo-950 text-[10px]">Upload Answer Sheet</p>
//                           <p className="text-gray-400 text-[8px]">Upload clear images or PDF</p>
//                           <p className="text-gray-400 text-[8px] font-semibold">Max 10MB</p>
//                           <button className="mt-1 border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold px-3 py-1 rounded-xl text-[10px] transition cursor-pointer flex items-center gap-1.5 ml-auto shadow-2xs">
//                             <Upload size={11} /> Upload Now
//                           </button>
//                         </div>
//                       </div>

//                       {/* Details row */}
//                       <div className="space-y-1.5 text-[10px]">
//                         <div className="flex items-center gap-4 text-gray-600 font-medium flex-wrap">
//                           <span>Class: <strong className="text-gray-900">{item.class}</strong></span>
//                           <span>Subject: <strong className="text-gray-900">{item.subject}</strong></span>
//                           <span>Topic: <strong className="text-gray-900">{item.topic}</strong></span>
//                         </div>

//                         <div className="flex items-center gap-4 text-gray-500 flex-wrap">
//                           <span>Questions: <strong className="text-gray-900">{item.questions}</strong></span>
//                           <span>Marks: <strong className="text-gray-900">{item.marks}</strong></span>
//                           <span>Due: <strong className="text-gray-900">{item.due}</strong></span>
//                         </div>

//                         <p className="text-gray-500 text-[10px] pt-1 leading-snug">
//                           {item.desc}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Load More Assignments */}
//                 <div className="text-center pt-1">
//                   <button className="text-blue-600 hover:underline font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer">
//                     Load More Assignments <ChevronDown size={14} />
//                   </button>
//                 </div>

//                 {/* Assignment Package Offer Banner */}
//                 <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-4 space-y-3">
//                   <div className="flex items-center justify-between gap-3">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
//                         <Package size={24} />
//                       </div>
//                       <div>
//                         <h3 className="font-extrabold text-indigo-950 text-sm">Assignment Package</h3>
//                         <p className="text-gray-500 text-[10px]">
//                           Get complete practice and expert feedback at the best value.
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-4 flex-shrink-0 text-right">
//                       <div>
//                         <p className="font-black text-indigo-950 text-lg leading-tight">210</p>
//                         <p className="text-gray-400 text-[9px] font-semibold">Assignments</p>
//                       </div>

//                       <div>
//                         <p className="font-black text-emerald-600 text-xl leading-tight">₹599</p>
//                         <p className="text-gray-400 text-[9px] font-semibold">Only</p>
//                       </div>

//                       <div className="space-y-1">
//                         <span className="bg-emerald-600 text-white font-bold text-[8px] px-2 py-0.5 rounded-full uppercase block">
//                           Best Value
//                         </span>
//                         <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition cursor-pointer shadow-sm">
//                           Get Package Now
//                         </button>
//                         <p className="text-gray-400 text-[8px]">Valid for 12 Months</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-emerald-100 pt-2 text-[10px] text-gray-700 font-medium">
//                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> 210 Assignments</div>
//                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Expert Review & Feedback</div>
//                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Better Preparation</div>
//                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Best Value</div>
//                   </div>
//                 </div>

//                 {/* Bottom Security Banner */}
//                 <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3 text-center flex items-center justify-center gap-2 text-blue-900 text-xs font-semibold">
//                   <ShieldCheck size={16} className="text-blue-600" />
//                   <span>Your data and submissions are safe and secure with GoodGuiders.</span>
//                 </div>

//               </div>
//             ) : activeTab.startsWith('Mock') ? (
//               /* ================= MOCK TESTS SECTION ================= */
//               <div className="space-y-6">
                
//                 {/* Header Title */}
//                 <div>
//                   <h2 className="text-lg font-extrabold text-indigo-950">Mock Tests</h2>
//                   <p className="text-gray-500 text-[11px] mt-0.5">
//                     Practice with structured mock tests to improve accuracy, speed and confidence.
//                   </p>
//                 </div>

//                 {/* 1. Choose Your Exam / Class */}
//                 <div className="space-y-2.5">
//                   <h3 className="font-bold text-gray-900 text-xs">1. Choose Your Exam / Class</h3>
//                   <p className="text-gray-400 text-[10px]">Select the exam or class for which you want to appear in mock tests.</p>
                  
//                   <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1">
//                     <div className="bg-blue-50/40 border-2 border-blue-600 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer shadow-sm">
//                       <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
//                         U
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 text-[11px]">NEET</p>
//                         <p className="text-gray-400 text-[9px]">UG</p>
//                       </div>
//                     </div>

//                     <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
//                       <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
//                         <BookOpen size={14} />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 text-[11px]">JEE</p>
//                         <p className="text-gray-400 text-[9px]">(Main + Adv)</p>
//                       </div>
//                     </div>

//                     <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
//                       <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
//                         <Book size={14} />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 text-[11px]">Class 11</p>
//                         <p className="text-gray-400 text-[9px]">(Physics)</p>
//                       </div>
//                     </div>

//                     <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
//                       <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
//                         <Book size={14} />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 text-[11px]">Class 12</p>
//                         <p className="text-gray-400 text-[9px]">(Physics)</p>
//                       </div>
//                     </div>

//                     <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
//                       <div className="w-7 h-7 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
//                         <Layers size={14} />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 text-[11px]">More</p>
//                         <p className="text-gray-400 text-[9px]">Exams</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* 2. Topic Wise Mock Tests */}
//                 <div className="space-y-2.5">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="font-bold text-gray-900 text-xs">2. Topic Wise Mock Tests</h3>
//                       <p className="text-gray-400 text-[10px]">Practice individual topics to strengthen specific concepts.</p>
//                     </div>
//                     <button className="text-blue-600 font-bold text-[11px] hover:underline flex items-center gap-0.5">
//                       View All Topics
//                     </button>
//                   </div>

//                   <div className="relative">
//                     <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
//                       {[
//                         { title: 'Current Electricity', icon: Zap, color: 'text-purple-600 bg-purple-50' },
//                         { title: 'Magnetism', icon: TargetIcon, color: 'text-rose-500 bg-rose-50' },
//                         { title: 'Ray Optics', icon: HelpCircle, color: 'text-blue-600 bg-blue-50' },
//                         { title: 'Thermodynamics', icon: Flame, color: 'text-pink-600 bg-pink-50' },
//                         { title: 'Oscillations', icon: Sparkles, color: 'text-emerald-600 bg-emerald-50' },
//                       ].map((item, idx) => {
//                         const Icon = item.icon;
//                         return (
//                           <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 text-center space-y-2 flex flex-col justify-between">
//                             <div className="space-y-1.5">
//                               <div className={`w-8 h-8 rounded-full ${item.color} mx-auto flex items-center justify-center`}>
//                                 <Icon size={16} />
//                               </div>
//                               <h4 className="font-bold text-indigo-950 text-[11px] h-7 flex items-center justify-center leading-tight">{item.title}</h4>
//                               <p className="text-gray-400 text-[9px]">25 Questions</p>
//                               <p className="text-gray-400 text-[9px]">100 Marks</p>
//                               <p className="font-extrabold text-indigo-950 text-xs">₹49</p>
//                             </div>
//                             <button className="w-full border border-pink-200 text-pink-600 hover:bg-pink-50 font-bold py-1 rounded-xl text-[10px] transition cursor-pointer">
//                               Start Test
//                             </button>
//                           </div>
//                         );
//                       })}
//                     </div>
//                     <button className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 border shadow-md text-gray-500 hover:text-gray-800">
//                       <ChevronRight size={14} />
//                     </button>
//                   </div>

//                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
//                     <CheckCircle2 size={13} className="text-emerald-600" />
//                     <span>Total Topics Available: 120+</span>
//                     <Info size={12} className="text-emerald-500" />
//                   </div>
//                 </div>

//                 {/* 3. Chapter Wise Mock Tests */}
//                 <div className="space-y-2.5">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="font-bold text-gray-900 text-xs">3. Chapter Wise Mock Tests</h3>
//                       <p className="text-gray-400 text-[10px]">Practice complete chapters to build strong fundamentals.</p>
//                     </div>
//                     <button className="text-blue-600 font-bold text-[11px] hover:underline">
//                       View All Chapters
//                     </button>
//                   </div>

//                   <div className="relative">
//                     <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
//                       {[
//                         'Current Electricity', 'Moving Charges & Magnetism', 'EMI & AC', 'Optics', 'Dual Nature of Radiation'
//                       ].map((title, idx) => (
//                         <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 text-center space-y-2 flex flex-col justify-between">
//                           <div className="space-y-1.5">
//                             <h4 className="font-bold text-indigo-950 text-[11px] h-8 flex items-center justify-center leading-tight">{title}</h4>
//                             <p className="text-gray-400 text-[9px]">20 Questions</p>
//                             <p className="text-gray-400 text-[9px]">80 Marks</p>
//                             <p className="font-extrabold text-indigo-950 text-xs">₹79</p>
//                           </div>
//                           <button className="w-full border border-emerald-300 text-emerald-600 hover:bg-emerald-50 font-bold py-1 rounded-xl text-[10px] transition cursor-pointer">
//                             Start Test
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                     <button className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 border shadow-md text-gray-500 hover:text-gray-800">
//                       <ChevronRight size={14} />
//                     </button>
//                   </div>

//                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
//                     <CheckCircle2 size={13} className="text-emerald-600" />
//                     <span>Total Chapters Available: 48+</span>
//                     <Info size={12} className="text-emerald-500" />
//                   </div>
//                 </div>

//                 {/* 4. Subject Wise Mock Tests */}
//                 <div className="space-y-2.5">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="font-bold text-gray-900 text-xs">4. Subject Wise Mock Tests</h3>
//                       <p className="text-gray-400 text-[10px]">Practice full syllabus of a subject to boost your preparation.</p>
//                     </div>
//                     <button className="border border-gray-200 text-gray-700 font-semibold text-[11px] px-2.5 py-1 rounded-lg flex items-center gap-1 bg-white">
//                       Select Subject <ChevronDown size={12} />
//                     </button>
//                   </div>

//                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
//                     {[
//                       { name: 'Physics', color: 'text-purple-600 border-purple-200' },
//                       { name: 'Chemistry', color: 'text-emerald-600 border-emerald-200' },
//                       { name: 'Botany', color: 'text-purple-600 border-purple-200' },
//                       { name: 'Zoology', color: 'text-amber-600 border-amber-200' },
//                     ].map((sub, idx) => (
//                       <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 space-y-2">
//                         <h4 className={`font-bold text-xs ${sub.color.split(' ')[0]}`}>{sub.name}</h4>
//                         <p className="text-gray-400 text-[9px]">90 Questions</p>
//                         <p className="text-gray-400 text-[9px]">360 Marks</p>
//                         <p className="font-extrabold text-indigo-950 text-xs">₹249</p>
//                         <button className={`w-full border ${sub.color} hover:bg-gray-50 font-bold py-1 rounded-xl text-[10px] transition cursor-pointer`}>
//                           Start Test
//                         </button>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
//                     <CheckCircle2 size={13} className="text-emerald-600" />
//                     <span>Total Subjects Covered: 4+</span>
//                     <Info size={12} className="text-emerald-500" />
//                   </div>
//                 </div>

//                 {/* 5. Full Length Mock Tests */}
//                 <div className="space-y-2.5">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="font-bold text-gray-900 text-xs">5. Full Length Mock Tests</h3>
//                       <p className="text-gray-400 text-[10px]">Simulate real exam environment and test your overall preparation.</p>
//                     </div>
//                     <button className="text-blue-600 font-bold text-[11px] hover:underline">
//                       View All Tests
//                     </button>
//                   </div>

//                   <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 overflow-x-auto">
//                     <table className="w-full text-left border-collapse min-w-[450px]">
//                       <thead>
//                         <tr className="border-b border-gray-100 text-gray-400 text-[10px]">
//                           <th className="pb-2 font-medium">Test Name</th>
//                           <th className="pb-2 font-medium text-center">Questions</th>
//                           <th className="pb-2 font-medium text-center">Marks</th>
//                           <th className="pb-2 font-medium text-center">Duration</th>
//                           <th className="pb-2 font-medium text-center">Price</th>
//                           <th className="pb-2 font-medium text-right">Action</th>
//                         </tr>
//                       </thead>
//                       <tbody className="divide-y divide-gray-50 text-[11px] text-gray-800">
//                         {['01', '02', '03', '04'].map((num) => (
//                           <tr key={num}>
//                             <td className="py-2.5 font-bold">NEET Full Test {num}</td>
//                             <td className="py-2.5 text-center text-gray-500">180</td>
//                             <td className="py-2.5 text-center text-gray-500">720</td>
//                             <td className="py-2.5 text-center text-gray-500">3h 20m</td>
//                             <td className="py-2.5 text-center font-bold">₹299</td>
//                             <td className="py-2.5 text-right">
//                               <button className="border border-red-200 text-red-500 hover:bg-red-50 font-bold px-3 py-1 rounded-lg text-[10px] transition cursor-pointer">
//                                 Start Test
//                               </button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>

//                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
//                     <CheckCircle2 size={13} className="text-emerald-600" />
//                     <span>Total Full Length Tests: 20+</span>
//                     <Info size={12} className="text-emerald-500" />
//                   </div>
//                 </div>

//                 {/* 6. Model Test Paper (Subjective) */}
//                 <div className="space-y-2.5">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="font-bold text-gray-900 text-xs">6. Model Test Paper (Subjective)</h3>
//                       <p className="text-gray-400 text-[10px]">Attempt subjective model papers and upload your answers for evaluation.</p>
//                     </div>
//                     <button className="text-blue-600 font-bold text-[11px] hover:underline">
//                       View All Papers
//                     </button>
//                   </div>

//                   <div className="space-y-2">
//                     {[
//                       { title: 'NEET Model Test Paper 01', price: '₹99' },
//                       { title: 'NEET Model Test Paper 02', price: '₹99' },
//                     ].map((paper, idx) => (
//                       <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 flex items-center justify-between gap-2">
//                         <div className="flex items-center gap-2.5">
//                           <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
//                             <FileText size={16} />
//                           </div>
//                           <div>
//                             <h4 className="font-bold text-gray-900 text-xs">{paper.title}</h4>
//                             <p className="text-gray-400 text-[9px] space-x-1.5">
//                               <span>Subject: Physics</span> • <span>Author: Mentor</span> • <span>Format: PDF</span> • <span className="font-bold text-gray-800">Price: {paper.price}</span>
//                             </p>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-2 flex-shrink-0">
//                           <button className="border border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-2.5 py-1 rounded-lg text-[10px] flex items-center gap-1 transition cursor-pointer">
//                             <Download size={11} /> Download Paper
//                           </button>
//                           <button className="border border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-2.5 py-1 rounded-lg text-[10px] flex items-center gap-1 transition cursor-pointer">
//                             <Upload size={11} /> Upload Answer
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
//                     <CheckCircle2 size={13} className="text-emerald-600" />
//                     <span>Total Model Papers: 10+</span>
//                     <Info size={12} className="text-emerald-500" />
//                   </div>
//                 </div>

//                 {/* Bottom Promo: All Access Package */}
//                 <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-4 space-y-3 relative overflow-hidden">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <Star size={18} className="text-amber-500 fill-amber-500" />
//                       <div>
//                         <h3 className="font-extrabold text-indigo-950 text-sm">All Access Package (Complete Mock Test Package)</h3>
//                         <p className="text-gray-500 text-[10px]">One purchase, Unlimited access.</p>
//                       </div>
//                     </div>
//                     <span className="bg-red-500 text-white font-bold text-[9px] px-2 py-0.5 rounded-full uppercase">
//                       Best Value
//                     </span>
//                   </div>

//                   <div className="flex items-baseline gap-2">
//                     <span className="text-gray-400 line-through text-xs">₹2599</span>
//                     <span className="text-indigo-950 font-black text-xl">₹1299</span>
//                     <span className="bg-emerald-100 text-emerald-800 font-bold text-[9px] px-1.5 py-0.5 rounded">50% OFF</span>
//                   </div>

//                   {/* Highlights Bullet List */}
//                   <div className="grid grid-cols-2 gap-1.5 text-[10px] text-gray-700">
//                     <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> All Test Series + All Subjects</div>
//                     <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> Unlimited Practice • 12 Months Validity</div>
//                     <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> Regularly Updated Content</div>
//                     <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> One-time Payment</div>
//                   </div>

//                   {/* Icon Grid Stats */}
//                   <div className="grid grid-cols-5 gap-2 text-center pt-2 border-t border-amber-200/60">
//                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
//                       <Star size={14} className="mx-auto text-amber-500 mb-0.5" />
//                       <p className="text-gray-400 text-[8px]">Topic Wise Tests</p>
//                       <p className="font-extrabold text-indigo-950 text-xs">120+</p>
//                       <p className="text-gray-400 text-[8px]">Topics</p>
//                     </div>
//                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
//                       <Book size={14} className="mx-auto text-emerald-500 mb-0.5" />
//                       <p className="text-gray-400 text-[8px]">Chapter Wise Tests</p>
//                       <p className="font-extrabold text-indigo-950 text-xs">48+</p>
//                       <p className="text-gray-400 text-[8px]">Chapters</p>
//                     </div>
//                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
//                       <BookOpen size={14} className="mx-auto text-blue-500 mb-0.5" />
//                       <p className="text-gray-400 text-[8px]">Subject Wise Tests</p>
//                       <p className="font-extrabold text-indigo-950 text-xs">4+</p>
//                       <p className="text-gray-400 text-[8px]">Subjects</p>
//                     </div>
//                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
//                       <Calendar size={14} className="mx-auto text-purple-500 mb-0.5" />
//                       <p className="text-gray-400 text-[8px]">Full Length Tests</p>
//                       <p className="font-extrabold text-indigo-950 text-xs">20+</p>
//                       <p className="text-gray-400 text-[8px]">Tests</p>
//                     </div>
//                     <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
//                       <FileText size={14} className="mx-auto text-pink-500 mb-0.5" />
//                       <p className="text-gray-400 text-[8px]">Model Test Papers</p>
//                       <p className="font-extrabold text-indigo-950 text-xs">10+</p>
//                       <p className="text-gray-400 text-[8px]">Papers</p>
//                     </div>
//                   </div>

//                   <div className="pt-2 space-y-2">
//                     <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer">
//                       Buy All Access Package
//                     </button>
//                     <p className="text-center text-gray-500 text-[9px]">
//                       All tests are exam pattern based and regularly updated.
//                     </p>
//                   </div>
//                 </div>

//               </div>
//             ) : activeTab.startsWith('Service') ? (
//               /* ================= MY SERVICES SECTION ================= */
//               <div className="space-y-4">
//                 {/* Header Card */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
//                   <h2 className="text-base font-bold text-indigo-950">My Services</h2>
//                   <p className="text-gray-500 text-xs">
//                     Complete mentorship support to help you learn better, practice smart and achieve your goals.
//                   </p>

//                   {/* Highlights Grid */}
//                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
//                     <div className="bg-emerald-50/60 border border-emerald-100 p-2.5 rounded-xl flex items-center gap-2">
//                       <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
//                         <User size={14} />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-800 text-[10px]">Personalized</p>
//                         <p className="text-gray-500 text-[9px]">1-on-1 Guidance</p>
//                       </div>
//                     </div>

//                     <div className="bg-purple-50/60 border border-purple-100 p-2.5 rounded-xl flex items-center gap-2">
//                       <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
//                         <Sparkles size={14} />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-800 text-[10px]">Concept Clarity</p>
//                         <p className="text-gray-500 text-[9px]">& Doubt Solving</p>
//                       </div>
//                     </div>

//                     <div className="bg-blue-50/60 border border-blue-100 p-2.5 rounded-xl flex items-center gap-2">
//                       <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
//                         <BarChart2 size={14} />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-800 text-[10px]">Regular Tests &</p>
//                         <p className="text-gray-500 text-[9px]">Performance Analysis</p>
//                       </div>
//                     </div>

//                     <div className="bg-amber-50/60 border border-amber-100 p-2.5 rounded-xl flex items-center gap-2">
//                       <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
//                         <Calendar size={14} />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-800 text-[10px]">Flexible Schedule</p>
//                         <p className="text-gray-500 text-[9px]">as per your need</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <h3 className="font-bold text-indigo-950 text-sm pl-1">All Services</h3>

//                 {/* 1. One-to-One Mentorship */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
//                   <div className="flex items-start justify-between">
//                     <div className="flex gap-3">
//                       <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
//                         <User size={20} />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-gray-900 text-sm">One-to-One Mentorship</h4>
//                         <p className="text-gray-500 text-xs mt-0.5">
//                           Personalized 1-on-1 mentorship tailored to your learning needs and exam goals.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="text-right flex-shrink-0 ml-2">
//                       <p className="font-extrabold text-gray-900 text-base">₹2,499 <span className="text-[10px] text-gray-400 font-normal">/month</span></p>
//                       <button className="mt-1.5 border border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
//                         Book Now
//                       </button>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Personalized 1-on-1 Guidance</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Doubt Solving (Chat + Session)</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Weekly Tests & Performance Report</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Study Plan & Strategy Guidance</div>
//                   </div>
//                 </div>

//                 {/* 2. Doubt Clearing (One Time) */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
//                   <div className="flex items-start justify-between">
//                     <div className="flex gap-3">
//                       <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
//                         <FileText size={20} />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-gray-900 text-sm">Doubt Clearing (One Time)</h4>
//                         <p className="text-gray-500 text-xs mt-0.5">
//                           Get your specific doubts solved with clear explanations by {mentor.name}.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="text-right flex-shrink-0 ml-2">
//                       <p className="font-extrabold text-gray-900 text-base">₹299 <span className="text-[10px] text-gray-400 font-normal">/session</span></p>
//                       <button className="mt-1.5 border border-purple-500 text-purple-600 hover:bg-purple-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
//                         Book Now
//                       </button>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Concept-based Explanation</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Numerical Problem Solving</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Theory Doubt Clarification</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Quick & Effective Solutions</div>
//                   </div>
//                 </div>

//                 {/* 3. Test Evaluation & Feedback */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
//                   <div className="flex items-start justify-between">
//                     <div className="flex gap-3">
//                       <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0">
//                         <FileText size={20} />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-gray-900 text-sm">Test Evaluation & Feedback</h4>
//                         <p className="text-gray-500 text-xs mt-0.5">
//                           Upload your test and get detailed evaluation with suggestions to improve your performance.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="text-right flex-shrink-0 ml-2">
//                       <p className="font-extrabold text-gray-900 text-base">₹199 <span className="text-[10px] text-gray-400 font-normal">/test</span></p>
//                       <button className="mt-1.5 border border-orange-500 text-orange-600 hover:bg-orange-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
//                         Upload Now
//                       </button>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Detailed Evaluation & Scoring</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Mistake Analysis & Improvement Tips</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Performance Comparison</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Personalized Feedback</div>
//                   </div>
//                 </div>

//                 {/* 4. Regular Tests & Performance Analysis */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
//                   <div className="flex items-start justify-between">
//                     <div className="flex gap-3">
//                       <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
//                         <Calendar size={20} />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-gray-900 text-sm">Regular Tests & Performance Analysis</h4>
//                         <p className="text-gray-500 text-xs mt-0.5">
//                           Take regular tests and get in-depth performance analysis to track your progress.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="text-right flex-shrink-0 ml-2">
//                       <p className="font-extrabold text-gray-900 text-base">₹399 <span className="text-[10px] text-gray-400 font-normal">/test</span></p>
//                       <button className="mt-1.5 border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
//                         Enroll Now
//                       </button>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Subject-wise Tests</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> All India Rank Tracking</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Detailed Performance Analysis</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Improvement Roadmap</div>
//                   </div>
//                 </div>

//                 {/* 5. Custom Study Plan */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
//                   <div className="flex items-start justify-between">
//                     <div className="flex gap-3">
//                       <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0">
//                         <Target size={20} />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-gray-900 text-sm">Custom Study Plan</h4>
//                         <p className="text-gray-500 text-xs mt-0.5">
//                           Personalized study plan designed around your strengths, weaknesses and target exam.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="text-right flex-shrink-0 ml-2">
//                       <p className="font-extrabold text-gray-900 text-base">₹999 <span className="text-[10px] text-gray-400 font-normal">/plan</span></p>
//                       <button className="mt-1.5 border border-rose-400 text-rose-500 hover:bg-rose-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
//                         Get Plan
//                       </button>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Chapter-wise Plan</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Daily/Weekly Targets</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Smart Study Strategy</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Revision Schedule</div>
//                   </div>
//                 </div>

//                 {/* 6. Chat Support (Priority) */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
//                   <div className="flex items-start justify-between">
//                     <div className="flex gap-3">
//                       <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
//                         <MessageCircle size={20} />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-gray-900 text-sm">Chat Support (Priority)</h4>
//                         <p className="text-gray-500 text-xs mt-0.5">
//                           Priority chat support for quick doubt solving and guidance whenever you need.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="text-right flex-shrink-0 ml-2">
//                       <p className="font-extrabold text-gray-900 text-base">₹499 <span className="text-[10px] text-gray-400 font-normal">/month</span></p>
//                       <button className="mt-1.5 border border-teal-500 text-teal-600 hover:bg-teal-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
//                         Get Access
//                       </button>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Priority Response</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Unlimited Doubt Solving (Chat)</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Study & Exam Guidance</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Motivation & Support</div>
//                   </div>
//                 </div>

//                 {/* 7. Home Tuition (Offline) */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
//                   <div className="flex items-start justify-between">
//                     <div className="flex gap-3">
//                       <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
//                         <Home size={20} />
//                       </div>
//                       <div>
//                         <h4 className="font-bold text-gray-900 text-sm">Home Tuition (Offline)</h4>
//                         <p className="text-gray-500 text-xs mt-0.5">
//                           Personalized home tuition at your location for focused learning and doubt solving.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="text-right flex-shrink-0 ml-2">
//                       <p className="font-extrabold text-gray-900 text-base">₹1,499 <span className="text-[10px] text-gray-400 font-normal">/hour</span></p>
//                       <button className="mt-1.5 border border-amber-400 text-amber-600 hover:bg-amber-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
//                         Enquire Now
//                       </button>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Personalized Teaching</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Concept Clarity & Practice</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Flexible Schedule</div>
//                     <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Regular Test & Assessment</div>
//                   </div>
//                 </div>

//                 {/* Footer Banner */}
//                 <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3 text-center flex items-center justify-center gap-2 text-blue-900 text-xs font-semibold">
//                   <ShieldCheck size={16} className="text-blue-600" />
//                   <span>All online sessions are conducted via Google Meet / Zoom.</span>
//                 </div>

//               </div>
//             ) : activeTab.startsWith('Study') ? (
//               /* ================= STUDY MATERIAL SECTION ================= */
//               <div className="space-y-4">
                
//                 {/* Header Title */}
//                 <div>
//                   <h2 className="text-lg font-extrabold text-indigo-950">Study Materials</h2>
//                   <p className="text-gray-500 text-[11px] leading-relaxed mt-0.5">
//                     Study materials are carefully created to strengthen your concepts and support effective learning. They include notes, PDFs, formulas, diagrams and important resources for quick revision and better understanding.<br />
//                     Use these materials regularly to build a strong foundation and perform your best.
//                   </p>
//                 </div>

//                 {/* Filter Study Materials Card */}
//                 <div className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 space-y-3">
//                   <h3 className="font-bold text-blue-950 text-xs">Filter Study Materials</h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 items-end">
//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Class</label>
//                       <div className="relative">
//                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
//                           <option>Select Class</option>
//                           <option>Class 11</option>
//                           <option>Class 12</option>
//                         </select>
//                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Subject</label>
//                       <div className="relative">
//                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
//                           <option>Select Subject</option>
//                           <option>Physics</option>
//                           <option>Chemistry</option>
//                         </select>
//                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Topic</label>
//                       <div className="relative">
//                         <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
//                           <option>Select Topic</option>
//                           <option>Complete Syllabus</option>
//                           <option>Formulas</option>
//                           <option>Laws of Motion</option>
//                         </select>
//                         <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </div>

//                     <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
//                       <Filter size={13} /> Apply
//                     </button>
//                   </div>
//                 </div>

//                 {/* Top Banner Info */}
//                 <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-3.5 flex items-center justify-between gap-3">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
//                       <BookOpen size={20} />
//                     </div>
//                     <div>
//                       <h4 className="font-extrabold text-emerald-950 text-xs">High quality study materials curated for better concept clarity and exam.</h4>
//                       <p className="text-gray-500 text-[10px]">Download and study anytime, anywhere.</p>
//                     </div>
//                   </div>
//                   <div className="text-right flex-shrink-0">
//                     <p className="text-gray-500 text-[9px] font-bold">Access All Materials</p>
//                     <p className="font-extrabold text-emerald-600 text-base">₹20 <span className="text-[10px] text-gray-500 font-normal">Only</span></p>
//                   </div>
//                 </div>

//                 {/* Study Materials List */}
//                 <div className="space-y-3">
//                   {[
//                     {
//                       title: 'NCERT Notes – Complete Physics',
//                       type: 'PDF',
//                       typeColor: 'text-rose-500 bg-rose-50 border-rose-100',
//                       tags: ['Class 11, 12', 'Subject: Physics', 'Topic: Complete Syllabus'],
//                       desc: 'Detailed NCERT based notes covering all chapters with important points and examples.',
//                       updated: '20 May 2024',
//                       size: '8.4 MB',
//                       hasDownload: true
//                     },
//                     {
//                       title: 'Important Formulas – Physics',
//                       type: 'PDF',
//                       typeColor: 'text-rose-500 bg-rose-50 border-rose-100',
//                       tags: ['Class 11, 12', 'Subject: Physics', 'Topic: Formulas'],
//                       desc: 'Chapter-wise list of important formulas for quick revision and exam preparation.',
//                       updated: '18 May 2024',
//                       size: '2.1 MB',
//                       hasDownload: true
//                     },
//                     {
//                       title: 'Chapter 3 – Laws of Motion Notes',
//                       type: 'PDF',
//                       typeColor: 'text-purple-600 bg-purple-50 border-purple-100',
//                       tags: ['Class 11', 'Subject: Physics', 'Topic: Laws of Motion'],
//                       desc: "Detailed notes on Newton's Laws of Motion with concepts, examples and practice questions.",
//                       updated: '15 May 2024',
//                       size: '1.6 MB',
//                       hasDownload: true
//                     },
//                     {
//                       title: 'Electrostatics – Complete Notes',
//                       type: 'PDF',
//                       typeColor: 'text-blue-600 bg-blue-50 border-blue-100',
//                       tags: ['Class 12', 'Subject: Physics', 'Topic: Electrostatics'],
//                       desc: 'Complete notes on Electrostatics including theory, derivations and solved examples.',
//                       updated: '14 May 2024',
//                       size: '3.7 MB',
//                       hasDownload: true
//                     },
//                     {
//                       title: 'Current Electricity – Concept Video',
//                       type: 'VIDEO',
//                       typeColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
//                       tags: ['Class 12', 'Subject: Physics', 'Topic: Current Electricity'],
//                       desc: 'Concept explanation with examples and solved problems in this video lecture.',
//                       duration: '42 min',
//                       uploaded: '12 May 2024',
//                       hasDownload: false
//                     },
//                     {
//                       title: 'Previous Year Questions – Physics',
//                       type: 'PDF',
//                       typeColor: 'text-rose-500 bg-rose-50 border-rose-100',
//                       tags: ['Class 11, 12', 'Subject: Physics', 'Topic: PYQs'],
//                       desc: 'Chapter-wise previous year questions with solutions for NEET exam practice.',
//                       updated: '10 May 2024',
//                       size: '5.2 MB',
//                       hasDownload: true
//                     },
//                     {
//                       title: 'Diagrams & Definitions – Quick Revision',
//                       type: 'PDF',
//                       typeColor: 'text-pink-600 bg-pink-50 border-pink-100',
//                       tags: ['Class 11, 12', 'Subject: Physics', 'Topic: Diagrams'],
//                       desc: 'Important diagrams and definitions for quick revision before exams.',
//                       updated: '08 May 2024',
//                       size: '1.9 MB',
//                       hasDownload: true
//                     },
//                   ].map((item, idx) => (
//                     <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
//                       <div className="flex items-start justify-between gap-3 border-b border-gray-50 pb-3">
//                         <div className="flex items-start gap-3">
//                           <div className="flex flex-col items-center justify-center flex-shrink-0 space-y-1">
//                             <div className={`w-10 h-10 rounded-xl border ${item.typeColor} flex items-center justify-center`}>
//                               {item.type === 'VIDEO' ? <PlayCircle size={20} /> : <FileText size={20} />}
//                             </div>
//                             <span className="text-[8px] font-extrabold uppercase text-gray-400">{item.type}</span>
//                           </div>
                          
//                           <div className="space-y-1.5">
//                             <h3 className="font-extrabold text-indigo-950 text-xs">{item.title}</h3>
//                             <div className="flex items-center gap-1.5 flex-wrap">
//                               {item.tags.map((t, i) => (
//                                 <span key={i} className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-blue-50/60 text-blue-700 border border-blue-100">
//                                   {t}
//                                 </span>
//                               ))}
//                             </div>
//                             <p className="text-gray-500 text-[10px] leading-snug pt-0.5">
//                               {item.desc}
//                             </p>
//                           </div>
//                         </div>

//                         {/* Right Column Meta & Actions */}
//                         <div className="text-right flex-shrink-0 pl-2 space-y-2 min-w-[120px]">
//                           <div className="text-[9px] text-gray-400 space-y-0.5">
//                             <p className="flex items-center justify-end gap-1"><Calendar size={11} /> {item.updated ? `Updated: ${item.updated}` : `Uploaded: ${item.uploaded}`}</p>
//                             <p className="font-semibold text-gray-600">{item.size ? `Size: ${item.size}` : `Duration: ${item.duration}`}</p>
//                           </div>
                          
//                           <div className="space-y-1.5 pt-1">
//                             <button className="w-full border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold px-3 py-1 rounded-xl text-[10px] transition cursor-pointer flex items-center justify-center gap-1 shadow-2xs">
//                               <Eye size={11} /> Preview
//                             </button>
//                             {item.hasDownload && (
//                               <button className="w-full border border-rose-400 text-rose-500 hover:bg-rose-50 font-bold px-3 py-1 rounded-xl text-[10px] transition cursor-pointer flex items-center justify-center gap-1 shadow-2xs">
//                                 <Download size={11} /> Download
//                               </button>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Load More Button */}
//                 <div className="text-center pt-1">
//                   <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 font-bold text-xs px-4 py-2 rounded-xl inline-flex items-center gap-1.5 cursor-pointer transition">
//                     Load More Materials <ChevronDown size={14} />
//                   </button>
//                 </div>

//                 {/* Complete Study Material Package Offer Banner */}
//                 <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-4 space-y-3">
//                   <div className="flex items-center justify-between gap-3">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
//                         <Package size={24} />
//                       </div>
//                       <div>
//                         <h3 className="font-extrabold text-indigo-950 text-sm">Complete Study Material Package</h3>
//                         <p className="text-gray-500 text-[10px]">
//                           Get full access to all premium notes, videos, PYQs and exclusive resources.
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-4 flex-shrink-0 text-right">
//                       <div>
//                         <p className="font-black text-emerald-600 text-xl leading-tight">₹599</p>
//                         <p className="text-gray-400 text-[9px] font-semibold">Only</p>
//                       </div>

//                       <div className="space-y-1">
//                         <span className="bg-emerald-600 text-white font-bold text-[8px] px-2 py-0.5 rounded-full uppercase block text-center">
//                           Best Value
//                         </span>
//                         <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition cursor-pointer shadow-sm">
//                           Offer Expires Now
//                         </button>
//                         <p className="text-gray-400 text-[8px] text-center">Valid for 12 Months</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-emerald-100 pt-2 text-[10px] text-gray-700 font-medium">
//                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> All Premium Materials</div>
//                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Regular Updates</div>
//                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Expert Curated</div>
//                     <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Unlimited Downloads</div>
//                   </div>
//                 </div>

//                 {/* Bottom Security Banner */}
//                 <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3 text-center flex items-center justify-center gap-2 text-blue-900 text-xs font-semibold">
//                   <ShieldCheck size={16} className="text-blue-600" />
//                   <span>Your data and submissions are safe and secure with GoodGuiders.</span>
//                 </div>

//               </div>
//             ) : (
//               /* ================= DEFAULT OVERVIEW SECTION ================= */
//               <>
//                 {/* Overview Card */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
//                   <div>
//                     <h3 className="text-sm font-bold text-gray-900">Overview</h3>
//                     <p className="text-gray-500 text-xs mt-1">
//                       Expert Physics mentor for NEET with 8+ years of teaching experience. Helping students build strong concepts and achieve their goals.
//                     </p>
//                   </div>

//                   <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3 flex items-center justify-between">
//                     <div>
//                       <p className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider">Availability Status</p>
//                       <p className="text-emerald-700 font-semibold text-xs flex items-center gap-1.5 mt-0.5">
//                         <CheckCircle2 size={14} className="fill-emerald-500 text-white" /> Available for Sessions
//                       </p>
//                     </div>
//                     <p className="text-gray-500 text-[10px] flex items-center gap-1">
//                       <Clock size={12} /> Typically replies within 2 hours
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-4 gap-2 pt-2">
//                     <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
//                       <p className="font-bold text-gray-900 text-sm">{mentor.studentsCount}</p>
//                       <p className="text-gray-500 text-[10px] mt-0.5">Students Mentored</p>
//                     </div>
//                     <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
//                       <p className="font-bold text-gray-900 text-sm">{mentor.experienceYears}+</p>
//                       <p className="text-gray-500 text-[10px] mt-0.5">Years Experience</p>
//                     </div>
//                     <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
//                       <p className="font-bold text-gray-900 text-sm">5+</p>
//                       <p className="text-gray-500 text-[10px] mt-0.5">Subjects Teaching</p>
//                     </div>
//                     <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
//                       <p className="font-bold text-gray-900 text-sm">98%</p>
//                       <p className="text-gray-500 text-[10px] mt-0.5">Satisfaction Rate</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* About the Mentor Section */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
//                   <h3 className="text-sm font-bold text-gray-900 border-b pb-2">About the Mentor</h3>
//                   <p className="text-gray-600 text-xs leading-relaxed">
//                     {mentor.name} is a Physics expert with over 8 years of teaching experience. He specializes in making complex concepts simple and improving problem solving skills. He has mentored thousands of NEET aspirants with a proven track record of results.
//                   </p>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
//                     <div className="space-y-2">
//                       {[
//                         'Conceptual teaching with real-life examples',
//                         'Focused on NCERT + Advanced problem solving',
//                         'Personalized mentoring & doubt clearing',
//                         'Regular tests and performance analysis',
//                         'Complete guidance for NEET Physics',
//                       ].map((point, idx) => (
//                         <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
//                           <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
//                           <span>{point}</span>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="bg-purple-50/40 border border-purple-100 p-3 rounded-xl space-y-2">
//                       <p className="font-bold text-purple-900 text-xs">Teaching Expertise</p>
//                       <div className="flex flex-wrap gap-1.5">
//                         {['Concept Building', 'Problem Solving', 'NCERT Mastery', 'Exam Strategy', 'Doubt Solving', 'Physics Basics'].map((exp) => (
//                           <span key={exp} className="bg-white text-purple-700 border border-purple-200 text-[10px] font-medium px-2.5 py-1 rounded-lg">
//                             {exp}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Teaching Subjects & Topics */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
//                   <h3 className="text-sm font-bold text-gray-900 border-b pb-2">Teaching Subjects & Topics</h3>
                  
//                   <div className="flex flex-wrap gap-2">
//                     {['Physics', 'Mathematics', 'Chemistry', 'Biology', 'Aptitude'].map((sub, i) => (
//                       <span 
//                         key={sub} 
//                         className={`px-3 py-1 rounded-lg text-xs font-semibold ${
//                           i === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'
//                         }`}
//                       >
//                         {sub}
//                       </span>
//                     ))}
//                   </div>

//                   <div>
//                     <p className="font-bold text-gray-800 text-xs mb-2">Physics Topics Covered</p>
//                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
//                       {[
//                         'Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics',
//                         'Kinematics', 'Work, Energy & Power', 'Waves & Oscillations', 'Semiconductors', 'Atoms & Nuclei'
//                       ].map((topic) => (
//                         <div key={topic} className="flex items-center gap-2 border border-gray-100 p-2 rounded-xl bg-gray-50/50 text-xs text-gray-700">
//                           <BookOpen size={13} className="text-[#FF5722]" />
//                           <span className="text-[11px] font-medium truncate">{topic}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="text-center pt-2">
//                     <button className="text-[#FF5722] hover:underline font-semibold text-xs inline-flex items-center gap-1">
//                       View All Topics <ChevronRight size={13} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Teaching Approach */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
//                   <h3 className="text-sm font-bold text-gray-900 border-b pb-2">Teaching Approach</h3>
//                   <div className="grid grid-cols-2 gap-3">
//                     <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
//                       <p className="font-bold text-gray-800 text-xs mb-1">Concept First</p>
//                       <p className="text-gray-500 text-[10px]">Clear concepts first, then move to problems for better understanding.</p>
//                     </div>
//                     <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
//                       <p className="font-bold text-gray-800 text-xs mb-1">Practice Oriented</p>
//                       <p className="text-gray-500 text-[10px]">Regular practice with PYQs, NCERT & Advanced questions.</p>
//                     </div>
//                     <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
//                       <p className="font-bold text-gray-800 text-xs mb-1">Performance Tracking</p>
//                       <p className="text-gray-500 text-[10px]">Tests and analysis to track progress and improve weak areas.</p>
//                     </div>
//                     <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
//                       <p className="font-bold text-gray-800 text-xs mb-1">Doubt Support</p>
//                       <p className="text-gray-500 text-[10px]">Quick doubt resolution and personal attention for every student.</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Student Impact Section */}
//                 <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
//                   <h3 className="text-sm font-bold text-gray-900">Student Impact</h3>
//                   <p className="text-gray-500 text-xs">Results and feedback from my amazing students.</p>

//                   <div className="grid grid-cols-4 gap-2">
//                     <div className="bg-emerald-50/50 border border-emerald-100 p-2.5 rounded-xl text-center">
//                       <p className="font-bold text-emerald-700 text-xs">{mentor.studentsCount}</p>
//                       <p className="text-gray-500 text-[9px]">Students Mentored</p>
//                     </div>
//                     <div className="bg-blue-50/50 border border-blue-100 p-2.5 rounded-xl text-center">
//                       <p className="font-bold text-blue-700 text-xs">650+</p>
//                       <p className="text-gray-500 text-[9px]">Students Scored 650+ in NEET</p>
//                     </div>
//                     <div className="bg-purple-50/50 border border-purple-100 p-2.5 rounded-xl text-center">
//                       <p className="font-bold text-purple-700 text-xs">320+</p>
//                       <p className="text-gray-500 text-[9px]">Students Scored 700+ in NEET</p>
//                     </div>
//                     <div className="bg-amber-50/50 border border-amber-100 p-2.5 rounded-xl text-center">
//                       <p className="font-bold text-amber-700 text-xs">95%</p>
//                       <p className="text-gray-500 text-[9px]">Students Improved by 2+ Ranks</p>
//                     </div>
//                   </div>

//                   {/* Highlight Quote Block */}
//                   <div className="bg-emerald-50/40 border border-emerald-100 p-3.5 rounded-xl text-xs text-gray-700 italic space-y-2">
//                     <p className="text-emerald-900 font-medium">
//                       "Mentor who explains Physics in such an easy way that even the toughest topics feel simple. His guidance and support made a huge difference in my NEET preparation."
//                     </p>
//                     <p className="text-right text-gray-500 text-[10px] font-bold not-italic">- Ananya Sharma</p>
//                   </div>
//                 </div>

//                 {/* Bottom Callout Banner */}
//                 <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-5 text-center space-y-3">
//                   <h3 className="font-bold text-gray-900 text-sm">Want to learn from {mentor.name}?</h3>
//                   <p className="text-gray-500 text-xs">Book a session now and take a step closer to your NEET success.</p>
//                   <button className="bg-[#FF5722] hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer inline-flex items-center gap-2">
//                     <Calendar size={14} /> Book a Session Now
//                   </button>
//                 </div>
//               </>
//             )}

//           </div>

//           {/* ================= RIGHT COLUMN: AVAILABILITY & REVIEWS (col-span-3) ================= */}
//           <div className="lg:col-span-3 space-y-4">
            
//             {/* Availability Slots Calendar Card */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
//               <div className="flex items-center justify-between border-b pb-2">
//                 <h3 className="font-bold text-gray-900 text-xs flex items-center gap-1.5">
//                   <Calendar size={14} className="text-[#FF5722]" /> Availability
//                 </h3>
//                 <span className="text-[#FF5722] font-semibold text-[10px] hover:underline cursor-pointer">View Calendar</span>
//               </div>

//               <div className="space-y-3 text-[11px]">
//                 <div>
//                   <p className="font-bold text-gray-800 text-[10px] mb-1.5">Today, 24 May</p>
//                   <div className="grid grid-cols-2 gap-2">
//                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">6:00 PM</button>
//                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">8:00 PM</button>
//                   </div>
//                 </div>

//                 <div>
//                   <p className="font-bold text-gray-800 text-[10px] mb-1.5">Sun, 25 May</p>
//                   <div className="grid grid-cols-2 gap-2">
//                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">10:00 AM</button>
//                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">4:00 PM</button>
//                   </div>
//                 </div>

//                 <div>
//                   <p className="font-bold text-gray-800 text-[10px] mb-1.5">Mon, 26 May</p>
//                   <div className="grid grid-cols-2 gap-2">
//                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">6:00 PM</button>
//                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">8:00 PM</button>
//                   </div>
//                 </div>

//                 <div>
//                   <p className="font-bold text-gray-800 text-[10px] mb-1.5">Tue, 27 May</p>
//                   <div className="grid grid-cols-2 gap-2">
//                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">6:00 PM</button>
//                     <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">9:00 PM</button>
//                   </div>
//                 </div>
//               </div>

//               <div className="text-center pt-1 border-t border-dashed border-gray-100">
//                 <button className="text-gray-500 hover:text-gray-800 font-semibold text-[10px] inline-flex items-center gap-1">
//                   More slots available <ChevronDown size={12} />
//                 </button>
//               </div>
//             </div>

//             {/* Student Reviews Widget */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
//               <div className="flex items-center justify-between border-b pb-2">
//                 <h3 className="font-bold text-gray-900 text-xs">Student Reviews</h3>
//                 <span className="flex items-center gap-1 text-xs font-bold text-gray-800">
//                   <Star size={12} fill="#f59e0b" className="text-amber-500" /> {mentor.rating} ({mentor.reviewsCount})
//                 </span>
//               </div>

//               <div className="space-y-3 text-[11px]">
//                 {/* Review 1 */}
//                 <div className="border-b border-gray-100 pb-2.5 space-y-1">
//                   <div className="flex items-center gap-2">
//                     <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Ananya" className="w-6 h-6 rounded-full object-cover" />
//                     <div>
//                       <p className="font-bold text-gray-800 text-[10px]">Ananya Sharma</p>
//                       <div className="flex text-amber-500">
//                         {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#f59e0b" />)}
//                       </div>
//                     </div>
//                     <span className="ml-auto text-gray-400 text-[9px]">16 May 2024</span>
//                   </div>
//                   <p className="text-gray-600 text-[10px] leading-snug">
//                     Sir explains Physics in such an easy way that even the toughest topics feel simple. Highly recommended!
//                   </p>
//                 </div>

//                 {/* Review 2 */}
//                 <div className="border-b border-gray-100 pb-2.5 space-y-1">
//                   <div className="flex items-center gap-2">
//                     <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Rohit" className="w-6 h-6 rounded-full object-cover" />
//                     <div>
//                       <p className="font-bold text-gray-800 text-[10px]">Rohit Kumar</p>
//                       <div className="flex text-amber-500">
//                         {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#f59e0b" />)}
//                       </div>
//                     </div>
//                     <span className="ml-auto text-gray-400 text-[9px]">12 May 2024</span>
//                   </div>
//                   <p className="text-gray-600 text-[10px] leading-snug">
//                     Best mentor for NEET Physics. Regular practice sessions and doubt solving sessions are very helpful.
//                   </p>
//                 </div>

//                 {/* Review 3 */}
//                 <div className="space-y-1">
//                   <div className="flex items-center gap-2">
//                     <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Pooja" className="w-6 h-6 rounded-full object-cover" />
//                     <div>
//                       <p className="font-bold text-gray-800 text-[10px]">Pooja Verma</p>
//                       <div className="flex text-amber-500">
//                         {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#f59e0b" />)}
//                       </div>
//                     </div>
//                     <span className="ml-auto text-gray-400 text-[9px]">10 May 2024</span>
//                   </div>
//                   <p className="text-gray-600 text-[10px] leading-snug">
//                     The notes and quizzes provided by sir are excellent. Mock tests really help in exam preparation.
//                   </p>
//                 </div>
//               </div>

//               <div className="text-center pt-2 border-t border-gray-100">
//                 <button className="text-[#FF5722] hover:underline font-semibold text-xs inline-flex items-center gap-1">
//                   View all reviews <ChevronRight size={13} />
//                 </button>
//               </div>
//             </div>

//             {/* New Student Offer Promo Box */}
//             <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-4 text-white text-center space-y-2 shadow-sm relative overflow-hidden">
//               <Gift size={28} className="mx-auto text-orange-100" />
//               <h4 className="font-bold text-sm">New Student Offer</h4>
//               <p className="text-orange-100 text-[10px]">Get 10% OFF on your first session with any service.</p>
//               <button className="w-full bg-white text-[#FF5722] font-bold py-2 rounded-xl text-xs hover:bg-orange-50 transition cursor-pointer shadow-sm">
//                 Apply Offer
//               </button>
//             </div>

//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// // Small helper component for Globe icon
// function GlobeIcon({ size, className }: { size: number; className?: string }) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//       <circle cx="12" cy="12" r="10"/>
//       <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
//       <path d="M2 12h20"/>
//     </svg>
//   );
// }




import React, { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { 
  Star, Clock, CheckCircle2, ArrowLeft, Award, BookOpen, User, 
  MessageSquare, Calendar, ChevronDown, ShieldCheck,
  Sparkles, Gift, FileText, HelpCircle, Layers, GraduationCap,
  Home, BarChart2, Target, MessageCircle, ChevronRight, Download, Upload, Info,
  Flame, Zap, Book, Check, Target as TargetIcon, Filter, IndianRupee, Lock, Package,
  Eye, PlayCircle, Video, Play, Youtube, Eye as ViewsIcon, Image, Send, ThumbsUp, MoreVertical
} from 'lucide-react';
import { INITIAL_MENTORS, Mentor } from './Mentordetail';

export default function MentorProfilePage() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<string>('Overview');

  const mentorQueryParam = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('name') || params.get('id');
  }, []);

  const mentor: Mentor = useMemo(() => {
    if (!mentorQueryParam) return INITIAL_MENTORS[0];

    const rawParam = decodeURIComponent(mentorQueryParam).trim().toLowerCase();

    const found = INITIAL_MENTORS.find((m) => {
      const mentorSlug = m.name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');

      return (
        mentorSlug === rawParam ||
        m.name.toLowerCase() === rawParam ||
        m.id === Number(rawParam)
      );
    });

    return found || INITIAL_MENTORS[0];
  }, [mentorQueryParam]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs pb-12">
      <div className="w-full max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 py-4 space-y-4">
        
        {/* Breadcrumb Navigation & Back Button */}
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setLocation('/mentordetail')}
            className="flex items-center gap-1.5 text-[#FF5722] font-semibold text-xs bg-orange-50 hover:bg-orange-100 border border-orange-200 px-3 py-1.5 rounded-lg transition cursor-pointer"
          >
            <ArrowLeft size={13} /> Back to List
          </button>
        </div>

        {/* ================= MAIN 3-COLUMN LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* ================= LEFT COLUMN: PROFILE SIDEBAR (col-span-3) ================= */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Main Profile Header Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center relative overflow-hidden">
              <span className="absolute top-3 right-3 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                Available Now
              </span>

              <div className="relative inline-block my-2">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-emerald-50"
                />
                <CheckCircle2
                  size={20}
                  className="text-white bg-emerald-500 rounded-full absolute bottom-1 right-1 fill-emerald-500"
                />
              </div>

              <h2 className="font-bold text-gray-900 text-base">{mentor.name}</h2>
              <p className="text-emerald-600 text-xs font-semibold mt-0.5">{mentor.role}</p>
              
              <div className="flex items-center justify-center gap-1 text-xs text-gray-600 mt-2">
                <Star size={13} fill="#f59e0b" className="text-amber-500" />
                <span className="font-bold text-gray-800">{mentor.rating}</span>
                <span className="text-gray-400">({mentor.reviewsCount} Reviews)</span>
              </div>

              <div className="space-y-2 mt-4">
                <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer flex items-center justify-center gap-2">
                  <Calendar size={14} /> Book a Session
                </button>
                <button className="w-full border border-orange-200 text-[#FF5722] hover:bg-orange-50 font-bold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-2">
                  <MessageSquare size={14} /> Message Mentor
                </button>
              </div>
            </div>

            {/* About Me Details Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
              <h3 className="font-bold text-gray-900 text-xs border-b pb-2">About Me</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed">
                I make Physics simple and concept-based. My focus is on building strong fundamentals and problem solving skills to help students crack NEET with confidence.
              </p>

              <div className="space-y-2.5 pt-2 text-[11px]">
                <div className="flex items-start gap-2.5">
                  <Clock size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-[10px]">Experience</p>
                    <p className="font-semibold text-gray-800">{mentor.experienceYears}+ Years</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <User size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-[10px]">Students Mentored</p>
                    <p className="font-semibold text-gray-800">{mentor.studentsCount}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <GraduationCap size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-[10px]">Qualification</p>
                    <p className="font-semibold text-gray-800">B.Tech, M.Tech (IIT Delhi)</p>
                    <p className="text-gray-500 text-[10px]">Ph.D. in Applied Physics</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Award size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-[10px]">Institute</p>
                    <p className="font-semibold text-gray-800">IIT Delhi Alumni</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <GlobeIcon size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-[10px]">Languages</p>
                    <p className="font-semibold text-gray-800">English, Hindi</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <BookOpen size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-[10px]">Teaching Mode</p>
                    <p className="font-semibold text-gray-800">Online • Home Tuition • Guidance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-2">
              <h3 className="font-bold text-gray-900 text-xs mb-2">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-emerald-50/50 border border-emerald-100 p-2.5 rounded-xl text-center">
                  <p className="text-emerald-700 font-bold text-xs">{mentor.studentsCount}</p>
                  <p className="text-gray-500 text-[9px] mt-0.5">Students Mentored</p>
                </div>
                <div className="bg-blue-50/50 border border-blue-100 p-2.5 rounded-xl text-center">
                  <p className="text-blue-700 font-bold text-xs">{mentor.experienceYears}+ Years</p>
                  <p className="text-gray-500 text-[9px] mt-0.5">Teaching Experience</p>
                </div>
                <div className="bg-amber-50/50 border border-amber-100 p-2.5 rounded-xl text-center">
                  <p className="text-amber-700 font-bold text-xs">98%</p>
                  <p className="text-gray-500 text-[9px] mt-0.5">Satisfaction Rate</p>
                </div>
                <div className="bg-purple-50/50 border border-purple-100 p-2.5 rounded-xl text-center">
                  <p className="text-purple-700 font-bold text-xs">{mentor.reviewsCount}</p>
                  <p className="text-gray-500 text-[9px] mt-0.5">Reviews</p>
                </div>
              </div>
            </div>

            {/* Need Help CTA Box */}
            <div className="bg-orange-50/60 border border-orange-100 rounded-2xl p-4 text-center space-y-2">
              <h4 className="font-bold text-gray-900 text-xs">Need Help?</h4>
              <p className="text-gray-500 text-[10px]">Not sure which service is right for you? Our team can help you choose.</p>
              <button className="w-full bg-white border border-orange-200 text-[#FF5722] hover:bg-orange-100 font-semibold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
                <HelpCircle size={13} /> Talk to GoodGuiders
              </button>
            </div>

          </div>

          {/* ================= MIDDLE COLUMN: MAIN TAB CONTENT (col-span-6) ================= */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Navigation Tabs Bar */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-1.5 flex items-center gap-1 overflow-x-auto scrollbar-none">
              {[
                { name: 'Overview', icon: BookOpen },
                { name: 'Service', icon: Layers },
                { name: 'Mock Test', icon: FileText },
                { name: 'Assignment', icon: FileText },
                { name: 'Study Material', icon: BookOpen },
                { name: 'Video lecture', icon: Video },
                { name: 'Q&A', icon: HelpCircle },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab.toLowerCase().trim() === tab.name.toLowerCase().trim();
                return (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold whitespace-nowrap transition cursor-pointer ${
                      isActive 
                        ? 'bg-orange-50 text-[#FF5722] border border-orange-200' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={13} />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* CONDITIONAL TAB CONTENT */}
            {activeTab.toLowerCase().includes('q&a') || activeTab.toLowerCase().includes('q & a') ? (
              /* ================= Q&A SECTION ================= */
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-5">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-extrabold text-indigo-950">Question & Answer</h2>
                    <p className="text-gray-500 text-[11px] mt-0.5">
                      Get your doubts cleared by {mentor.name} and learn better.
                    </p>
                  </div>
                  <button className="border border-gray-200 hover:bg-gray-50 text-indigo-950 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 transition cursor-pointer shadow-2xs">
                    <FileText size={13} /> My Questions
                  </button>
                </div>

                {/* Question Input Box */}
                <div className="border border-gray-200 rounded-2xl p-3 space-y-3 bg-white">
                  <textarea 
                    rows={3} 
                    placeholder="Type your question here..."
                    className="w-full text-xs text-gray-800 placeholder-gray-400 focus:outline-none resize-none"
                  />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-gray-500 text-[10px] flex-wrap">
                      <button className="flex items-center gap-1 hover:text-gray-700 cursor-pointer">
                        <Image size={13} /> Add Image
                      </button>
                      <button className="flex items-center gap-1 hover:text-gray-700 cursor-pointer">
                        <FileText size={13} /> Add File (PDF,JPG,PNG)
                      </button>
                      <label className="flex items-center gap-1 cursor-pointer select-none">
                        <input type="checkbox" className="rounded border-gray-300 text-[#FF5722] focus:ring-0" />
                        <span>Make this question private</span>
                        <Info size={11} className="text-gray-400" />
                      </label>
                    </div>

                    <button className="bg-[#FF5722] hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
                      Ask Question <Send size={12} />
                    </button>
                  </div>
                </div>

                {/* Filter and Sort Bar */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <div className="flex items-center gap-1.5">
                    <button className="bg-orange-50 text-[#FF5722] border border-orange-200 font-bold px-3 py-1 rounded-xl text-[11px]">
                      All Questions (125)
                    </button>
                    <button className="bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-100 font-semibold px-3 py-1 rounded-xl text-[11px]">
                      Answered (118)
                    </button>
                    <button className="bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-100 font-semibold px-3 py-1 rounded-xl text-[11px]">
                      Unanswered (7)
                    </button>
                  </div>

                  <div className="relative">
                    <select className="bg-white border border-gray-200 rounded-xl px-3 py-1 text-[11px] font-semibold text-gray-700 appearance-none pr-6 cursor-pointer focus:outline-none">
                      <option>Most Recent</option>
                      <option>Most Liked</option>
                    </select>
                    <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Questions List */}
                <div className="space-y-4">
                  
                  {/* Question Item 1 */}
                  <div className="border border-gray-100 rounded-2xl p-4 space-y-3 bg-white">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                          R
                        </div>
                        <div>
                          <span className="font-bold text-indigo-950 text-xs">Riya Sharma</span>
                          <span className="text-gray-400 text-[10px] ml-2">16 May 2024</span>
                        </div>
                        <span className="bg-emerald-50 text-emerald-600 font-semibold text-[9px] px-2 py-0.5 rounded-md border border-emerald-100 ml-1">
                          Answered
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <MoreVertical size={14} />
                      </button>
                    </div>

                    <div>
                      <h3 className="font-bold text-indigo-950 text-xs">How to solve problems on Circular Motion easily?</h3>
                      <span className="inline-block mt-1 bg-blue-50 text-blue-600 font-semibold text-[9px] px-2 py-0.5 rounded-md border border-blue-100">
                        Circular Motion
                      </span>
                    </div>

                    {/* Mentor Answer Box */}
                    <div className="bg-slate-50/70 rounded-xl p-3 space-y-2 border border-slate-100">
                      <div className="flex items-center gap-2">
                        <img src={mentor.image} alt={mentor.name} className="w-6 h-6 rounded-full object-cover" />
                        <span className="font-bold text-indigo-950 text-xs">{mentor.name}</span>
                        <span className="bg-emerald-100 text-emerald-700 font-bold text-[8px] px-1.5 py-0.5 rounded">
                          Mentor
                        </span>
                        <span className="text-gray-400 text-[9px] ml-auto">16 May 2024</span>
                      </div>
                      <p className="text-gray-600 text-[11px] leading-relaxed">
                        Focus on the centripetal force formula and practice different types of questions step by step. Make sure to understand the concept of tension, normal reaction and gravitational force in each case.
                      </p>
                      <div className="flex items-center gap-4 text-gray-500 text-[10px] pt-1">
                        <span>Was this answer helpful?</span>
                        <button className="flex items-center gap-1 text-gray-700 font-semibold cursor-pointer hover:text-blue-600">
                          <ThumbsUp size={12} /> 24
                        </button>
                        <button className="flex items-center gap-1 text-gray-700 font-semibold cursor-pointer hover:text-blue-600">
                          <MessageCircle size={12} /> 2
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Question Item 2 */}
                  <div className="border border-gray-100 rounded-2xl p-4 space-y-3 bg-white">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
                          A
                        </div>
                        <div>
                          <span className="font-bold text-indigo-950 text-xs">Ankit Verma</span>
                          <span className="text-gray-400 text-[10px] ml-2">15 May 2024</span>
                        </div>
                        <span className="bg-emerald-50 text-emerald-600 font-semibold text-[9px] px-2 py-0.5 rounded-md border border-emerald-100 ml-1">
                          Answered
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <MoreVertical size={14} />
                      </button>
                    </div>

                    <div>
                      <h3 className="font-bold text-indigo-950 text-xs">What is the best way to prepare for NEET Physics?</h3>
                      <span className="inline-block mt-1 bg-blue-50 text-blue-600 font-semibold text-[9px] px-2 py-0.5 rounded-md border border-blue-100">
                        Preparation Strategy
                      </span>
                    </div>

                    {/* Mentor Answer Box */}
                    <div className="bg-slate-50/70 rounded-xl p-3 space-y-2 border border-slate-100">
                      <div className="flex items-center gap-2">
                        <img src={mentor.image} alt={mentor.name} className="w-6 h-6 rounded-full object-cover" />
                        <span className="font-bold text-indigo-950 text-xs">{mentor.name}</span>
                        <span className="bg-emerald-100 text-emerald-700 font-bold text-[8px] px-1.5 py-0.5 rounded">
                          Mentor
                        </span>
                        <span className="text-gray-400 text-[9px] ml-auto">15 May 2024</span>
                      </div>
                      <p className="text-gray-600 text-[11px] leading-relaxed">
                        Build strong concepts, practice regularly, solve previous year papers and take mock tests. Also revise short notes daily.
                      </p>
                      <div className="flex items-center gap-4 text-gray-500 text-[10px] pt-1">
                        <span>Was this answer helpful?</span>
                        <button className="flex items-center gap-1 text-gray-700 font-semibold cursor-pointer hover:text-blue-600">
                          <ThumbsUp size={12} /> 18
                        </button>
                        <button className="flex items-center gap-1 text-gray-700 font-semibold cursor-pointer hover:text-blue-600">
                          <MessageCircle size={12} /> 1
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Question Item 3 (Unanswered) */}
                  <div className="border border-gray-100 rounded-2xl p-4 space-y-3 bg-white">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                          P
                        </div>
                        <div>
                          <span className="font-bold text-indigo-950 text-xs">Pooja Singh</span>
                          <span className="text-gray-400 text-[10px] ml-2">12 May 2024</span>
                        </div>
                        <span className="bg-amber-50 text-amber-600 font-semibold text-[9px] px-2 py-0.5 rounded-md border border-amber-100 ml-1">
                          Unanswered
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <MoreVertical size={14} />
                      </button>
                    </div>

                    <div>
                      <h3 className="font-bold text-indigo-950 text-xs">How to remember formulas easily?</h3>
                      <span className="inline-block mt-1 bg-blue-50 text-blue-600 font-semibold text-[9px] px-2 py-0.5 rounded-md border border-blue-100">
                        General
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            ) : activeTab.toLowerCase().includes('video') ? (
              /* ================= VIDEO LECTURES SECTION ================= */
              <div className="space-y-4">
                
                {/* Header Title with Graphic */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center justify-between gap-4 shadow-sm relative overflow-hidden">
                  <div className="space-y-1 max-w-[65%]">
                    <h2 className="text-lg font-extrabold text-indigo-950">Video Lectures</h2>
                    <p className="text-gray-500 text-[11px] leading-relaxed">
                      Learn from experienced mentors through high-quality video lectures. Choose from a wide range of topics and chapters across different subjects and exams.
                    </p>
                  </div>
                  
                  {/* Decorative Monitor Graphic */}
                  <div className="relative flex-shrink-0">
                    <div className="w-28 h-20 bg-indigo-900 rounded-xl p-1.5 shadow-md flex flex-col justify-between items-center relative">
                      <div className="w-full h-full bg-indigo-950 rounded-lg flex items-center justify-center relative overflow-hidden border border-indigo-800">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
                          <Play size={16} className="fill-white ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="w-12 h-1.5 bg-gray-300 mx-auto rounded-b-md"></div>
                    <div className="w-16 h-1 bg-gray-400 mx-auto rounded-full mt-0.5"></div>
                    <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white text-[8px] font-bold">
                      <Play size={10} className="fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Filter Video Lectures Card */}
                <div className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 items-end">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Class</label>
                      <div className="relative">
                        <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
                          <option>Choose Class</option>
                          <option>Class 11</option>
                          <option>Class 12</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Subject</label>
                      <div className="relative">
                        <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
                          <option>Choose Subject</option>
                          <option>Physics</option>
                          <option>Chemistry</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Topic</label>
                      <div className="relative">
                        <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
                          <option>Choose Topic</option>
                          <option>Current Electricity</option>
                          <option>Laws of Motion</option>
                          <option>Electrostatics</option>
                          <option>Thermodynamics</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <button className="w-full bg-indigo-900 hover:bg-indigo-950 text-white font-bold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
                      <Filter size={13} /> Apply
                    </button>
                  </div>
                </div>

                {/* Video Lectures Card List */}
                <div className="space-y-4">
                  {[
                    {
                      title: 'Current Electricity – Full Chapter',
                      thumbnailTitle: 'CURRENT ELECTRICITY',
                      thumbnailSub: 'FULL CHAPTER',
                      duration: '1h 24m 35s',
                      badgeTime: '1:24:35',
                      tags: ['NEET', 'Physics', 'Class 12', 'Chapter'],
                      author: 'Abhishek Sir',
                      authorPlatform: 'YouTube',
                      desc: 'Complete explanation of Current Electricity with important formulas and solved examples.',
                      topicsCount: 8,
                      views: '45.2K',
                      uploaded: '12 Apr 2024',
                      learnPoints: [
                        'Understand basic concepts of current electricity',
                        'Learn important formulas and derivations',
                        'Solve numerical problems with tricks',
                        'Get exam oriented important questions'
                      ]
                    },
                    {
                      title: 'Laws of Motion – One Shot',
                      thumbnailTitle: 'LAWS OF MOTION',
                      thumbnailSub: 'ONE SHOT',
                      duration: '58m 40s',
                      badgeTime: '58:40',
                      tags: ['NEET', 'Physics', 'Class 11', 'Chapter'],
                      author: 'Physics Wallah',
                      authorPlatform: 'YouTube',
                      desc: 'All concepts of Laws of Motion in one shot with tricks and important questions.',
                      topicsCount: 6,
                      views: '32.1K',
                      uploaded: '5 Mar 2024',
                      learnPoints: [
                        "Basics, Newton's Laws, Friction",
                        'Numericals & problem solving',
                        'Concepts with short tricks',
                        'Important questions for exam'
                      ]
                    },
                    {
                      title: 'Electrostatics – Complete Chapter',
                      thumbnailTitle: 'ELECTROSTATICS',
                      thumbnailSub: 'COMPLETE CHAPTER',
                      duration: '1h 32m 10s',
                      badgeTime: '1:32:10',
                      tags: ['NEET', 'Physics', 'Class 12', 'Chapter'],
                      author: 'Mohit Tyagi',
                      authorPlatform: 'YouTube',
                      desc: 'Detailed lecture on Electrostatics with best examples and illustrations.',
                      topicsCount: 9,
                      views: '28.7K',
                      uploaded: '18 Feb 2024',
                      learnPoints: [
                        "Electric Charge, Coulomb's Law",
                        'Electric Field, Potential, Capacitance',
                        'Solved examples & numericals',
                        'Concepts explained in easy way'
                      ]
                    },
                    {
                      title: 'Thermodynamics – Full Chapter',
                      thumbnailTitle: 'THERMODYNAMICS',
                      thumbnailSub: 'FULL CHAPTER',
                      duration: '1h 41m 22s',
                      badgeTime: '1:41:22',
                      tags: ['JEE Main', 'Physics', 'Class 11', 'Chapter'],
                      author: 'Nishant Jindal',
                      authorPlatform: 'YouTube',
                      desc: 'Learn Thermodynamics from basics to advanced level with problem solving.',
                      topicsCount: 7,
                      views: '19.8K',
                      uploaded: '2 Jan 2024',
                      learnPoints: [
                        'Zeroth, First & Second Law',
                        'Thermodynamic Processes',
                        'Numericals with concepts',
                        'Important questions for JEE'
                      ]
                    },
                  ].map((lecture, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
                      
                      {/* Top Main Meta Row */}
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 border-b border-gray-50 pb-3">
                        {/* Custom Dark Thumbnail */}
                        <div className="w-full sm:w-48 h-28 bg-black rounded-xl relative flex-shrink-0 overflow-hidden flex flex-col justify-between p-2.5 border border-gray-800 group">
                          <div className="space-y-0.5">
                            <span className="text-[11px] font-black tracking-wider text-amber-400 block leading-tight">{lecture.thumbnailTitle}</span>
                            <span className="text-[9px] font-extrabold tracking-wide text-white block uppercase">{lecture.thumbnailSub}</span>
                          </div>

                          <div className="flex items-end justify-between">
                            <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                              <Play size={10} className="fill-white ml-0.5" />
                            </div>
                            <span className="bg-black/80 text-white font-mono text-[9px] px-1.5 py-0.5 rounded border border-gray-700">
                              {lecture.badgeTime}
                            </span>
                          </div>
                        </div>

                        {/* Title, Tags, Description */}
                        <div className="space-y-1.5 flex-1">
                          <h3 className="font-extrabold text-indigo-950 text-sm">{lecture.title}</h3>
                          
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {lecture.tags.map((tag, tIdx) => (
                              <span key={tIdx} className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-2 text-[10px] text-gray-600 pt-0.5">
                            <div className="flex items-center gap-1 font-semibold text-gray-900">
                              <span>By {lecture.author}</span>
                              <CheckCircle2 size={11} className="text-blue-500 fill-blue-500 text-white" />
                            </div>
                            <span>•</span>
                            <span className="flex items-center gap-1 text-red-600 font-bold text-[9px]">
                              <Youtube size={12} className="fill-red-600 text-white" /> {lecture.authorPlatform}
                            </span>
                          </div>

                          <p className="text-gray-500 text-[10px] leading-relaxed pt-0.5">
                            {lecture.desc}
                          </p>
                        </div>

                        {/* Action Column */}
                        <div className="flex flex-col items-end justify-between sm:h-28 flex-shrink-0">
                          <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1.5 rounded-xl text-[10px] transition cursor-pointer flex items-center gap-1.5 shadow-xs">
                            <Youtube size={13} className="fill-white" /> Watch on YouTube
                          </button>

                          <button className="text-blue-600 font-bold text-[10px] hover:underline flex items-center gap-1 mt-auto">
                            More Details <ChevronDown size={12} />
                          </button>
                        </div>
                      </div>

                      {/* Bottom Info Grid + "What you'll learn" */}
                      <div className="bg-slate-50/60 rounded-xl p-3 grid grid-cols-1 md:grid-cols-12 gap-3 text-[10px]">
                        {/* Meta Column */}
                        <div className="md:col-span-5 space-y-1.5 text-gray-600 font-medium border-b md:border-b-0 md:border-r border-gray-200/60 pr-2 pb-2 md:pb-0">
                          <div className="flex items-center gap-2">
                            <Clock size={12} className="text-gray-400" />
                            <span>Duration: <strong className="text-gray-900">{lecture.duration}</strong></span>
                          </div>
                          {lecture.topicsCount && (
                            <div className="flex items-center gap-2">
                              <Layers size={12} className="text-gray-400" />
                              <span>Topics Covered: <strong className="text-gray-900">{lecture.topicsCount}</strong></span>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <ViewsIcon size={12} className="text-gray-400" />
                            <span>Views: <strong className="text-gray-900">{lecture.views}</strong></span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={12} className="text-gray-400" />
                            <span>Uploaded on: <strong className="text-gray-900">{lecture.uploaded}</strong></span>
                          </div>
                        </div>

                        {/* What You'll Learn Column */}
                        <div className="md:col-span-7 space-y-1">
                          <p className="font-bold text-gray-900 text-[10px] mb-1">What you'll learn:</p>
                          <div className="grid grid-cols-1 gap-1">
                            {lecture.learnPoints.map((point, pIdx) => (
                              <div key={pIdx} className="flex items-center gap-1.5 text-gray-700">
                                <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                <div className="text-center pt-1">
                  <button className="bg-white border border-gray-200 text-indigo-950 hover:bg-gray-50 font-bold text-xs px-4 py-2 rounded-xl inline-flex items-center gap-1.5 cursor-pointer transition shadow-2xs">
                    Load More Lectures <ChevronDown size={14} />
                  </button>
                </div>

                {/* YouTube Host Disclaimer Banner */}
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-3 text-center flex items-center justify-center gap-2 text-indigo-950 text-[10px] font-semibold">
                  <ShieldCheck size={14} className="text-indigo-600 flex-shrink-0" />
                  <span>GoodGuiders only lists content. All videos are hosted on YouTube. Earnings belong to the original creator.</span>
                </div>

              </div>
            ) : activeTab.startsWith('Assignment') ? (
              /* ================= ASSIGNMENTS SECTION ================= */
              <div className="space-y-4">
                
                {/* Header Title */}
                <div>
                  <h2 className="text-lg font-extrabold text-indigo-950">Assignments</h2>
                  <p className="text-gray-500 text-[11px] leading-relaxed mt-0.5">
                    Assignments help you practice concepts in depth and strengthen your understanding.<br />
                    It will help you identify your depth of knowledge. When you upload your assignments, we review them carefully and provide personalized improvement suggestions.
                  </p>
                </div>

                {/* Filter Assignments Card */}
                <div className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 space-y-3">
                  <h3 className="font-bold text-blue-950 text-xs">Filter Assignments</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 items-end">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Class</label>
                      <div className="relative">
                        <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
                          <option>Select Class</option>
                          <option>Class 11</option>
                          <option>Class 12</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Subject</label>
                      <div className="relative">
                        <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
                          <option>Select Subject</option>
                          <option>Physics</option>
                          <option>Chemistry</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Topic</label>
                      <div className="relative">
                        <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
                          <option>Select Topic</option>
                          <option>Kinematics</option>
                          <option>Laws of Motion</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
                      <Filter size={13} /> Apply
                    </button>
                  </div>
                </div>

                {/* Per Assignment Fee Banner */}
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3.5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    ₹
                  </div>
                  <div>
                    <h4 className="font-extrabold text-amber-950 text-xs">Per Assignment Fee: <span className="text-red-500">₹20</span></h4>
                    <p className="text-amber-800 text-[10px] mt-0.5">
                      Each assignment review and personalized feedback is available at just <span className="font-bold text-amber-950">₹20</span> per assignment.
                    </p>
                  </div>
                </div>

                {/* Assignments Cards List */}
                <div className="space-y-3">
                  {[
                    {
                      title: 'Kinematics – Practice Set 1',
                      badge: 'Active',
                      badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
                      iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
                      class: '11', subject: 'Physics', topic: 'Motion in a Straight Line',
                      questions: 10, marks: 20, due: '25 May 2024',
                      desc: 'This assignment covers basic kinematics concepts including displacement, velocity, acceleration and equations of motion.'
                    },
                    {
                      title: 'Laws of Motion – Practice Set 1',
                      badge: 'Active',
                      badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
                      iconBg: 'bg-purple-50 border-purple-100 text-purple-600',
                      class: '11', subject: 'Physics', topic: "Newton's Laws of Motion",
                      questions: 12, marks: 24, due: '30 May 2024',
                      desc: "Practice problems based on Newton's three laws of motion."
                    },
                    {
                      title: 'Work, Energy & Power – Practice Set 1',
                      badge: 'Upcoming',
                      badgeBg: 'bg-blue-50 text-blue-600 border-blue-100',
                      iconBg: 'bg-amber-50 border-amber-100 text-amber-600',
                      class: '11', subject: 'Physics', topic: 'Work, Power',
                      questions: 10, marks: 20, due: '05 Jun 2024',
                      desc: 'Numerical problems on work done, energy and power.'
                    },
                    {
                      title: 'System of Particles – Practice Set 1',
                      badge: 'Submitted',
                      badgeBg: 'bg-purple-50 text-purple-600 border-purple-100',
                      iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
                      class: '11', subject: 'Physics', topic: 'Center of Mass',
                      questions: 10, marks: 20, due: '18 May 2024',
                      desc: 'Problems based on center of mass and related concepts.'
                    },
                    {
                      title: 'Rotational Motion – Practice Set 1',
                      badge: 'Submitted',
                      badgeBg: 'bg-purple-50 text-purple-600 border-purple-100',
                      iconBg: 'bg-purple-50 border-purple-100 text-purple-600',
                      class: '11', subject: 'Physics', topic: 'Moment of Inertia',
                      questions: 12, marks: 24, due: '12 May 2024',
                      desc: 'Problems on moment of inertia and rotational dynamics.'
                    },
                    {
                      title: 'Gravitation – Practice Set 1',
                      badge: 'Evaluated',
                      badgeBg: 'bg-amber-50 text-amber-600 border-amber-100',
                      iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
                      class: '11', subject: 'Physics', topic: 'Universal Law of Gravitation',
                      questions: 10, marks: 20, due: '08 May 2024',
                      desc: 'Conceptual and numerical problems on gravitation.'
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
                      <div className="flex items-start justify-between gap-3 border-b border-gray-50 pb-3">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-9 h-9 rounded-xl border ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                            <FileText size={18} />
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-extrabold text-indigo-950 text-xs">{item.title}</h3>
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${item.badgeBg}`}>
                              {item.badge}
                            </span>
                          </div>
                        </div>

                        {/* Upload Answer Right Column */}
                        <div className="text-right flex-shrink-0 border-l border-gray-100 pl-4 space-y-1">
                          <p className="font-extrabold text-indigo-950 text-[10px]">Upload Answer Sheet</p>
                          <p className="text-gray-400 text-[8px]">Upload clear images or PDF</p>
                          <p className="text-gray-400 text-[8px] font-semibold">Max 10MB</p>
                          <button className="mt-1 border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold px-3 py-1 rounded-xl text-[10px] transition cursor-pointer flex items-center gap-1.5 ml-auto shadow-2xs">
                            <Upload size={11} /> Upload Now
                          </button>
                        </div>
                      </div>

                      {/* Details row */}
                      <div className="space-y-1.5 text-[10px]">
                        <div className="flex items-center gap-4 text-gray-600 font-medium flex-wrap">
                          <span>Class: <strong className="text-gray-900">{item.class}</strong></span>
                          <span>Subject: <strong className="text-gray-900">{item.subject}</strong></span>
                          <span>Topic: <strong className="text-gray-900">{item.topic}</strong></span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-500 flex-wrap">
                          <span>Questions: <strong className="text-gray-900">{item.questions}</strong></span>
                          <span>Marks: <strong className="text-gray-900">{item.marks}</strong></span>
                          <span>Due: <strong className="text-gray-900">{item.due}</strong></span>
                        </div>

                        <p className="text-gray-500 text-[10px] pt-1 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Assignments */}
                <div className="text-center pt-1">
                  <button className="text-blue-600 hover:underline font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer">
                    Load More Assignments <ChevronDown size={14} />
                  </button>
                </div>

                {/* Assignment Package Offer Banner */}
                <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Package size={24} />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-indigo-950 text-sm">Assignment Package</h3>
                        <p className="text-gray-500 text-[10px]">
                          Get complete practice and expert feedback at the best value.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0 text-right">
                      <div>
                        <p className="font-black text-indigo-950 text-lg leading-tight">210</p>
                        <p className="text-gray-400 text-[9px] font-semibold">Assignments</p>
                      </div>

                      <div>
                        <p className="font-black text-emerald-600 text-xl leading-tight">₹599</p>
                        <p className="text-gray-400 text-[9px] font-semibold">Only</p>
                      </div>

                      <div className="space-y-1">
                        <span className="bg-emerald-600 text-white font-bold text-[8px] px-2 py-0.5 rounded-full uppercase block">
                          Best Value
                        </span>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition cursor-pointer shadow-sm">
                          Get Package Now
                        </button>
                        <p className="text-gray-400 text-[8px]">Valid for 12 Months</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-emerald-100 pt-2 text-[10px] text-gray-700 font-medium">
                    <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> 210 Assignments</div>
                    <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Expert Review & Feedback</div>
                    <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Better Preparation</div>
                    <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Best Value</div>
                  </div>
                </div>

                {/* Bottom Security Banner */}
                <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3 text-center flex items-center justify-center gap-2 text-blue-900 text-xs font-semibold">
                  <ShieldCheck size={16} className="text-blue-600" />
                  <span>Your data and submissions are safe and secure with GoodGuiders.</span>
                </div>

              </div>
            ) : activeTab.startsWith('Mock') ? (
              /* ================= MOCK TESTS SECTION ================= */
              <div className="space-y-6">
                
                {/* Header Title */}
                <div>
                  <h2 className="text-lg font-extrabold text-indigo-950">Mock Tests</h2>
                  <p className="text-gray-500 text-[11px] mt-0.5">
                    Practice with structured mock tests to improve accuracy, speed and confidence.
                  </p>
                </div>

                {/* 1. Choose Your Exam / Class */}
                <div className="space-y-2.5">
                  <h3 className="font-bold text-gray-900 text-xs">1. Choose Your Exam / Class</h3>
                  <p className="text-gray-400 text-[10px]">Select the exam or class for which you want to appear in mock tests.</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1">
                    <div className="bg-blue-50/40 border-2 border-blue-600 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer shadow-sm">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                        U
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-[11px]">NEET</p>
                        <p className="text-gray-400 text-[9px]">UG</p>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                        <BookOpen size={14} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-[11px]">JEE</p>
                        <p className="text-gray-400 text-[9px]">(Main + Adv)</p>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                        <Book size={14} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-[11px]">Class 11</p>
                        <p className="text-gray-400 text-[9px]">(Physics)</p>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                        <Book size={14} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-[11px]">Class 12</p>
                        <p className="text-gray-400 text-[9px]">(Physics)</p>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 hover:border-gray-300 rounded-xl p-2.5 flex items-center gap-2 cursor-pointer">
                      <div className="w-7 h-7 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                        <Layers size={14} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-[11px]">More</p>
                        <p className="text-gray-400 text-[9px]">Exams</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Topic Wise Mock Tests */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xs">2. Topic Wise Mock Tests</h3>
                      <p className="text-gray-400 text-[10px]">Practice individual topics to strengthen specific concepts.</p>
                    </div>
                    <button className="text-blue-600 font-bold text-[11px] hover:underline flex items-center gap-0.5">
                      View All Topics
                    </button>
                  </div>

                  <div className="relative">
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                      {[
                        { title: 'Current Electricity', icon: Zap, color: 'text-purple-600 bg-purple-50' },
                        { title: 'Magnetism', icon: TargetIcon, color: 'text-rose-500 bg-rose-50' },
                        { title: 'Ray Optics', icon: HelpCircle, color: 'text-blue-600 bg-blue-50' },
                        { title: 'Thermodynamics', icon: Flame, color: 'text-pink-600 bg-pink-50' },
                        { title: 'Oscillations', icon: Sparkles, color: 'text-emerald-600 bg-emerald-50' },
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 text-center space-y-2 flex flex-col justify-between">
                            <div className="space-y-1.5">
                              <div className={`w-8 h-8 rounded-full ${item.color} mx-auto flex items-center justify-center`}>
                                <Icon size={16} />
                              </div>
                              <h4 className="font-bold text-indigo-950 text-[11px] h-7 flex items-center justify-center leading-tight">{item.title}</h4>
                              <p className="text-gray-400 text-[9px]">25 Questions</p>
                              <p className="text-gray-400 text-[9px]">100 Marks</p>
                              <p className="font-extrabold text-indigo-950 text-xs">₹49</p>
                            </div>
                            <button className="w-full border border-pink-200 text-pink-600 hover:bg-pink-50 font-bold py-1 rounded-xl text-[10px] transition cursor-pointer">
                              Start Test
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    <button className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 border shadow-md text-gray-500 hover:text-gray-800">
                      <ChevronRight size={14} />
                    </button>
                  </div>

                  <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>Total Topics Available: 120+</span>
                    <Info size={12} className="text-emerald-500" />
                  </div>
                </div>

                {/* 3. Chapter Wise Mock Tests */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xs">3. Chapter Wise Mock Tests</h3>
                      <p className="text-gray-400 text-[10px]">Practice complete chapters to build strong fundamentals.</p>
                    </div>
                    <button className="text-blue-600 font-bold text-[11px] hover:underline">
                      View All Chapters
                    </button>
                  </div>

                  <div className="relative">
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                      {[
                        'Current Electricity', 'Moving Charges & Magnetism', 'EMI & AC', 'Optics', 'Dual Nature of Radiation'
                      ].map((title, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 text-center space-y-2 flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <h4 className="font-bold text-indigo-950 text-[11px] h-8 flex items-center justify-center leading-tight">{title}</h4>
                            <p className="text-gray-400 text-[9px]">20 Questions</p>
                            <p className="text-gray-400 text-[9px]">80 Marks</p>
                            <p className="font-extrabold text-indigo-950 text-xs">₹79</p>
                          </div>
                          <button className="w-full border border-emerald-300 text-emerald-600 hover:bg-emerald-50 font-bold py-1 rounded-xl text-[10px] transition cursor-pointer">
                            Start Test
                          </button>
                        </div>
                      ))}
                    </div>
                    <button className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 border shadow-md text-gray-500 hover:text-gray-800">
                      <ChevronRight size={14} />
                    </button>
                  </div>

                  <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>Total Chapters Available: 48+</span>
                    <Info size={12} className="text-emerald-500" />
                  </div>
                </div>

                {/* 4. Subject Wise Mock Tests */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xs">4. Subject Wise Mock Tests</h3>
                      <p className="text-gray-400 text-[10px]">Practice full syllabus of a subject to boost your preparation.</p>
                    </div>
                    <button className="border border-gray-200 text-gray-700 font-semibold text-[11px] px-2.5 py-1 rounded-lg flex items-center gap-1 bg-white">
                      Select Subject <ChevronDown size={12} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { name: 'Physics', color: 'text-purple-600 border-purple-200' },
                      { name: 'Chemistry', color: 'text-emerald-600 border-emerald-200' },
                      { name: 'Botany', color: 'text-purple-600 border-purple-200' },
                      { name: 'Zoology', color: 'text-amber-600 border-amber-200' },
                    ].map((sub, idx) => (
                      <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 space-y-2">
                        <h4 className={`font-bold text-xs ${sub.color.split(' ')[0]}`}>{sub.name}</h4>
                        <p className="text-gray-400 text-[9px]">90 Questions</p>
                        <p className="text-gray-400 text-[9px]">360 Marks</p>
                        <p className="font-extrabold text-indigo-950 text-xs">₹249</p>
                        <button className={`w-full border ${sub.color} hover:bg-gray-50 font-bold py-1 rounded-xl text-[10px] transition cursor-pointer`}>
                          Start Test
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>Total Subjects Covered: 4+</span>
                    <Info size={12} className="text-emerald-500" />
                  </div>
                </div>

                {/* 5. Full Length Mock Tests */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xs">5. Full Length Mock Tests</h3>
                      <p className="text-gray-400 text-[10px]">Simulate real exam environment and test your overall preparation.</p>
                    </div>
                    <button className="text-blue-600 font-bold text-[11px] hover:underline">
                      View All Tests
                    </button>
                  </div>

                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[450px]">
                      <thead>
                        <tr className="border-b border-gray-100 text-gray-400 text-[10px]">
                          <th className="pb-2 font-medium">Test Name</th>
                          <th className="pb-2 font-medium text-center">Questions</th>
                          <th className="pb-2 font-medium text-center">Marks</th>
                          <th className="pb-2 font-medium text-center">Duration</th>
                          <th className="pb-2 font-medium text-center">Price</th>
                          <th className="pb-2 font-medium text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50 text-[11px] text-gray-800">
                        {['01', '02', '03', '04'].map((num) => (
                          <tr key={num}>
                            <td className="py-2.5 font-bold">NEET Full Test {num}</td>
                            <td className="py-2.5 text-center text-gray-500">180</td>
                            <td className="py-2.5 text-center text-gray-500">720</td>
                            <td className="py-2.5 text-center text-gray-500">3h 20m</td>
                            <td className="py-2.5 text-center font-bold">₹299</td>
                            <td className="py-2.5 text-right">
                              <button className="border border-red-200 text-red-500 hover:bg-red-50 font-bold px-3 py-1 rounded-lg text-[10px] transition cursor-pointer">
                                Start Test
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>Total Full Length Tests: 20+</span>
                    <Info size={12} className="text-emerald-500" />
                  </div>
                </div>

                {/* 6. Model Test Paper (Subjective) */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-xs">6. Model Test Paper (Subjective)</h3>
                      <p className="text-gray-400 text-[10px]">Attempt subjective model papers and upload your answers for evaluation.</p>
                    </div>
                    <button className="text-blue-600 font-bold text-[11px] hover:underline">
                      View All Papers
                    </button>
                  </div>

                  <div className="space-y-2">
                    {[
                      { title: 'NEET Model Test Paper 01', price: '₹99' },
                      { title: 'NEET Model Test Paper 02', price: '₹99' },
                    ].map((paper, idx) => (
                      <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-3 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                            <FileText size={16} />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-xs">{paper.title}</h4>
                            <p className="text-gray-400 text-[9px] space-x-1.5">
                              <span>Subject: Physics</span> • <span>Author: Mentor</span> • <span>Format: PDF</span> • <span className="font-bold text-gray-800">Price: {paper.price}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          <button className="border border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-2.5 py-1 rounded-lg text-[10px] flex items-center gap-1 transition cursor-pointer">
                            <Download size={11} /> Download Paper
                          </button>
                          <button className="border border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-2.5 py-1 rounded-lg text-[10px] flex items-center gap-1 transition cursor-pointer">
                            <Upload size={11} /> Upload Answer
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-2 flex items-center justify-center gap-1.5 text-[10px] text-emerald-800 font-semibold">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>Total Model Papers: 10+</span>
                    <Info size={12} className="text-emerald-500" />
                  </div>
                </div>

                {/* Bottom Promo: All Access Package */}
                <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-4 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star size={18} className="text-amber-500 fill-amber-500" />
                      <div>
                        <h3 className="font-extrabold text-indigo-950 text-sm">All Access Package (Complete Mock Test Package)</h3>
                        <p className="text-gray-500 text-[10px]">One purchase, Unlimited access.</p>
                      </div>
                    </div>
                    <span className="bg-red-500 text-white font-bold text-[9px] px-2 py-0.5 rounded-full uppercase">
                      Best Value
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-400 line-through text-xs">₹2599</span>
                    <span className="text-indigo-950 font-black text-xl">₹1299</span>
                    <span className="bg-emerald-100 text-emerald-800 font-bold text-[9px] px-1.5 py-0.5 rounded">50% OFF</span>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-2 gap-1.5 text-[10px] text-gray-700">
                    <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> All Test Series + All Subjects</div>
                    <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> Unlimited Practice • 12 Months Validity</div>
                    <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> Regularly Updated Content</div>
                    <div className="flex items-center gap-1.5"><Check size={12} className="text-emerald-600" /> One-time Payment</div>
                  </div>

                  {/* Icon Grid Stats */}
                  <div className="grid grid-cols-5 gap-2 text-center pt-2 border-t border-amber-200/60">
                    <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
                      <Star size={14} className="mx-auto text-amber-500 mb-0.5" />
                      <p className="text-gray-400 text-[8px]">Topic Wise Tests</p>
                      <p className="font-extrabold text-indigo-950 text-xs">120+</p>
                      <p className="text-gray-400 text-[8px]">Topics</p>
                    </div>
                    <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
                      <Book size={14} className="mx-auto text-emerald-500 mb-0.5" />
                      <p className="text-gray-400 text-[8px]">Chapter Wise Tests</p>
                      <p className="font-extrabold text-indigo-950 text-xs">48+</p>
                      <p className="text-gray-400 text-[8px]">Chapters</p>
                    </div>
                    <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
                      <BookOpen size={14} className="mx-auto text-blue-500 mb-0.5" />
                      <p className="text-gray-400 text-[8px]">Subject Wise Tests</p>
                      <p className="font-extrabold text-indigo-950 text-xs">4+</p>
                      <p className="text-gray-400 text-[8px]">Subjects</p>
                    </div>
                    <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
                      <Calendar size={14} className="mx-auto text-purple-500 mb-0.5" />
                      <p className="text-gray-400 text-[8px]">Full Length Tests</p>
                      <p className="font-extrabold text-indigo-950 text-xs">20+</p>
                      <p className="text-gray-400 text-[8px]">Tests</p>
                    </div>
                    <div className="bg-white/80 p-2 rounded-xl border border-amber-100">
                      <FileText size={14} className="mx-auto text-pink-500 mb-0.5" />
                      <p className="text-gray-400 text-[8px]">Model Test Papers</p>
                      <p className="font-extrabold text-indigo-950 text-xs">10+</p>
                      <p className="text-gray-400 text-[8px]">Papers</p>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer">
                      Buy All Access Package
                    </button>
                    <p className="text-center text-gray-500 text-[9px]">
                      All tests are exam pattern based and regularly updated.
                    </p>
                  </div>
                </div>

              </div>
            ) : activeTab.startsWith('Service') ? (
              /* ================= MY SERVICES SECTION ================= */
              <div className="space-y-4">
                {/* Header Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
                  <h2 className="text-base font-bold text-indigo-950">My Services</h2>
                  <p className="text-gray-500 text-xs">
                    Complete mentorship support to help you learn better, practice smart and achieve your goals.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    <div className="bg-emerald-50/60 border border-emerald-100 p-2.5 rounded-xl flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <User size={14} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-[10px]">Personalized</p>
                        <p className="text-gray-500 text-[9px]">1-on-1 Guidance</p>
                      </div>
                    </div>

                    <div className="bg-purple-50/60 border border-purple-100 p-2.5 rounded-xl flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                        <Sparkles size={14} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-[10px]">Concept Clarity</p>
                        <p className="text-gray-500 text-[9px]">& Doubt Solving</p>
                      </div>
                    </div>

                    <div className="bg-blue-50/60 border border-blue-100 p-2.5 rounded-xl flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                        <BarChart2 size={14} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-[10px]">Regular Tests &</p>
                        <p className="text-gray-500 text-[9px]">Performance Analysis</p>
                      </div>
                    </div>

                    <div className="bg-amber-50/60 border border-amber-100 p-2.5 rounded-xl flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                        <Calendar size={14} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-[10px]">Flexible Schedule</p>
                        <p className="text-gray-500 text-[9px]">as per your need</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-indigo-950 text-sm pl-1">All Services</h3>

                {/* 1. One-to-One Mentorship */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <User size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">One-to-One Mentorship</h4>
                        <p className="text-gray-500 text-xs mt-0.5">
                          Personalized 1-on-1 mentorship tailored to your learning needs and exam goals.
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="font-extrabold text-gray-900 text-base">₹2,499 <span className="text-[10px] text-gray-400 font-normal">/month</span></p>
                      <button className="mt-1.5 border border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
                        Book Now
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Personalized 1-on-1 Guidance</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Doubt Solving (Chat + Session)</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Weekly Tests & Performance Report</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Study Plan & Strategy Guidance</div>
                  </div>
                </div>

                {/* 2. Doubt Clearing (One Time) */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Doubt Clearing (One Time)</h4>
                        <p className="text-gray-500 text-xs mt-0.5">
                          Get your specific doubts solved with clear explanations by {mentor.name}.
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="font-extrabold text-gray-900 text-base">₹299 <span className="text-[10px] text-gray-400 font-normal">/session</span></p>
                      <button className="mt-1.5 border border-purple-500 text-purple-600 hover:bg-purple-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
                        Book Now
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Concept-based Explanation</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Numerical Problem Solving</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Theory Doubt Clarification</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Quick & Effective Solutions</div>
                  </div>
                </div>

                {/* 3. Test Evaluation & Feedback */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Test Evaluation & Feedback</h4>
                        <p className="text-gray-500 text-xs mt-0.5">
                          Upload your test and get detailed evaluation with suggestions to improve your performance.
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="font-extrabold text-gray-900 text-base">₹199 <span className="text-[10px] text-gray-400 font-normal">/test</span></p>
                      <button className="mt-1.5 border border-orange-500 text-orange-600 hover:bg-orange-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
                        Upload Now
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Detailed Evaluation & Scoring</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Mistake Analysis & Improvement Tips</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Performance Comparison</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Personalized Feedback</div>
                  </div>
                </div>

                {/* 4. Regular Tests & Performance Analysis */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Regular Tests & Performance Analysis</h4>
                        <p className="text-gray-500 text-xs mt-0.5">
                          Take regular tests and get in-depth performance analysis to track your progress.
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="font-extrabold text-gray-900 text-base">₹399 <span className="text-[10px] text-gray-400 font-normal">/test</span></p>
                      <button className="mt-1.5 border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Subject-wise Tests</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> All India Rank Tracking</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Detailed Performance Analysis</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Improvement Roadmap</div>
                  </div>
                </div>

                {/* 5. Custom Study Plan */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center flex-shrink-0">
                        <Target size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Custom Study Plan</h4>
                        <p className="text-gray-500 text-xs mt-0.5">
                          Personalized study plan designed around your strengths, weaknesses and target exam.
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="font-extrabold text-gray-900 text-base">₹999 <span className="text-[10px] text-gray-400 font-normal">/plan</span></p>
                      <button className="mt-1.5 border border-rose-400 text-rose-500 hover:bg-rose-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
                        Get Plan
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Chapter-wise Plan</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Daily/Weekly Targets</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Smart Study Strategy</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Revision Schedule</div>
                  </div>
                </div>

                {/* 6. Chat Support (Priority) */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Chat Support (Priority)</h4>
                        <p className="text-gray-500 text-xs mt-0.5">
                          Priority chat support for quick doubt solving and guidance whenever you need.
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="font-extrabold text-gray-900 text-base">₹499 <span className="text-[10px] text-gray-400 font-normal">/month</span></p>
                      <button className="mt-1.5 border border-teal-500 text-teal-600 hover:bg-teal-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
                        Get Access
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Priority Response</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Unlimited Doubt Solving (Chat)</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Study & Exam Guidance</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Motivation & Support</div>
                  </div>
                </div>

                {/* 7. Home Tuition (Offline) */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                        <Home size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Home Tuition (Offline)</h4>
                        <p className="text-gray-500 text-xs mt-0.5">
                          Personalized home tuition at your location for focused learning and doubt solving.
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="font-extrabold text-gray-900 text-base">₹1,499 <span className="text-[10px] text-gray-400 font-normal">/hour</span></p>
                      <button className="mt-1.5 border border-amber-400 text-amber-600 hover:bg-amber-50 font-bold px-4 py-1.5 rounded-xl text-xs transition cursor-pointer">
                        Enquire Now
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 pt-1 border-t border-gray-50">
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Personalized Teaching</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Concept Clarity & Practice</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Flexible Schedule</div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" /> Regular Test & Assessment</div>
                  </div>
                </div>

                {/* Footer Banner */}
                <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3 text-center flex items-center justify-center gap-2 text-blue-900 text-xs font-semibold">
                  <ShieldCheck size={16} className="text-blue-600" />
                  <span>All online sessions are conducted via Google Meet / Zoom.</span>
                </div>

              </div>
            ) : activeTab.startsWith('Study') ? (
              /* ================= STUDY MATERIAL SECTION ================= */
              <div className="space-y-4">
                
                {/* Header Title */}
                <div>
                  <h2 className="text-lg font-extrabold text-indigo-950">Study Materials</h2>
                  <p className="text-gray-500 text-[11px] leading-relaxed mt-0.5">
                    Study materials are carefully created to strengthen your concepts and support effective learning. They include notes, PDFs, formulas, diagrams and important resources for quick revision and better understanding.<br />
                    Use these materials regularly to build a strong foundation and perform your best.
                  </p>
                </div>

                {/* Filter Study Materials Card */}
                <div className="bg-blue-50/30 border border-blue-100 rounded-2xl p-4 space-y-3">
                  <h3 className="font-bold text-blue-950 text-xs">Filter Study Materials</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 items-end">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Class</label>
                      <div className="relative">
                        <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
                          <option>Select Class</option>
                          <option>Class 11</option>
                          <option>Class 12</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Subject</label>
                      <div className="relative">
                        <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
                          <option>Select Subject</option>
                          <option>Physics</option>
                          <option>Chemistry</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-gray-700 mb-1">Select Topic</label>
                      <div className="relative">
                        <select className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs appearance-none focus:outline-none focus:border-blue-500 cursor-pointer text-gray-700 font-semibold">
                          <option>Select Topic</option>
                          <option>Complete Syllabus</option>
                          <option>Formulas</option>
                          <option>Laws of Motion</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
                      <Filter size={13} /> Apply
                    </button>
                  </div>
                </div>

                {/* Top Banner Info */}
                <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-emerald-950 text-xs">High quality study materials curated for better concept clarity and exam.</h4>
                      <p className="text-gray-500 text-[10px]">Download and study anytime, anywhere.</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-gray-500 text-[9px] font-bold">Access All Materials</p>
                    <p className="font-extrabold text-emerald-600 text-base">₹20 <span className="text-[10px] text-gray-500 font-normal">Only</span></p>
                  </div>
                </div>

                {/* Study Materials List */}
                <div className="space-y-3">
                  {[
                    {
                      title: 'NCERT Notes – Complete Physics',
                      type: 'PDF',
                      typeColor: 'text-rose-500 bg-rose-50 border-rose-100',
                      tags: ['Class 11, 12', 'Subject: Physics', 'Topic: Complete Syllabus'],
                      desc: 'Detailed NCERT based notes covering all chapters with important points and examples.',
                      updated: '20 May 2024',
                      size: '8.4 MB',
                      hasDownload: true
                    },
                    {
                      title: 'Important Formulas – Physics',
                      type: 'PDF',
                      typeColor: 'text-rose-500 bg-rose-50 border-rose-100',
                      tags: ['Class 11, 12', 'Subject: Physics', 'Topic: Formulas'],
                      desc: 'Chapter-wise list of important formulas for quick revision and exam preparation.',
                      updated: '18 May 2024',
                      size: '2.1 MB',
                      hasDownload: true
                    },
                    {
                      title: 'Chapter 3 – Laws of Motion Notes',
                      type: 'PDF',
                      typeColor: 'text-purple-600 bg-purple-50 border-purple-100',
                      tags: ['Class 11', 'Subject: Physics', 'Topic: Laws of Motion'],
                      desc: "Detailed notes on Newton's Laws of Motion with concepts, examples and practice questions.",
                      updated: '15 May 2024',
                      size: '1.6 MB',
                      hasDownload: true
                    },
                    {
                      title: 'Electrostatics – Complete Notes',
                      type: 'PDF',
                      typeColor: 'text-blue-600 bg-blue-50 border-blue-100',
                      tags: ['Class 12', 'Subject: Physics', 'Topic: Electrostatics'],
                      desc: 'Complete notes on Electrostatics including theory, derivations and solved examples.',
                      updated: '14 May 2024',
                      size: '3.7 MB',
                      hasDownload: true
                    },
                    {
                      title: 'Current Electricity – Concept Video',
                      type: 'VIDEO',
                      typeColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
                      tags: ['Class 12', 'Subject: Physics', 'Topic: Current Electricity'],
                      desc: 'Concept explanation with examples and solved problems in this video lecture.',
                      duration: '42 min',
                      uploaded: '12 May 2024',
                      hasDownload: false
                    },
                    {
                      title: 'Previous Year Questions – Physics',
                      type: 'PDF',
                      typeColor: 'text-rose-500 bg-rose-50 border-rose-100',
                      tags: ['Class 11, 12', 'Subject: Physics', 'Topic: PYQs'],
                      desc: 'Chapter-wise previous year questions with solutions for NEET exam practice.',
                      updated: '10 May 2024',
                      size: '5.2 MB',
                      hasDownload: true
                    },
                    {
                      title: 'Diagrams & Definitions – Quick Revision',
                      type: 'PDF',
                      typeColor: 'text-pink-600 bg-pink-50 border-pink-100',
                      tags: ['Class 11, 12', 'Subject: Physics', 'Topic: Diagrams'],
                      desc: 'Important diagrams and definitions for quick revision before exams.',
                      updated: '08 May 2024',
                      size: '1.9 MB',
                      hasDownload: true
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
                      <div className="flex items-start justify-between gap-3 border-b border-gray-50 pb-3">
                        <div className="flex items-start gap-3">
                          <div className="flex flex-col items-center justify-center flex-shrink-0 space-y-1">
                            <div className={`w-10 h-10 rounded-xl border ${item.typeColor} flex items-center justify-center`}>
                              {item.type === 'VIDEO' ? <PlayCircle size={20} /> : <FileText size={20} />}
                            </div>
                            <span className="text-[8px] font-extrabold uppercase text-gray-400">{item.type}</span>
                          </div>
                          
                          <div className="space-y-1.5">
                            <h3 className="font-extrabold text-indigo-950 text-xs">{item.title}</h3>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {item.tags.map((t, i) => (
                                <span key={i} className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-blue-50/60 text-blue-700 border border-blue-100">
                                  {t}
                                </span>
                              ))}
                            </div>
                            <p className="text-gray-500 text-[10px] leading-snug pt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        {/* Right Column Meta & Actions */}
                        <div className="text-right flex-shrink-0 pl-2 space-y-2 min-w-[120px]">
                          <div className="text-[9px] text-gray-400 space-y-0.5">
                            <p className="flex items-center justify-end gap-1"><Calendar size={11} /> {item.updated ? `Updated: ${item.updated}` : `Uploaded: ${item.uploaded}`}</p>
                            <p className="font-semibold text-gray-600">{item.size ? `Size: ${item.size}` : `Duration: ${item.duration}`}</p>
                          </div>
                          
                          <div className="space-y-1.5 pt-1">
                            <button className="w-full border border-blue-500 text-blue-600 hover:bg-blue-50 font-bold px-3 py-1 rounded-xl text-[10px] transition cursor-pointer flex items-center justify-center gap-1 shadow-2xs">
                              <Eye size={11} /> Preview
                            </button>
                            {item.hasDownload && (
                              <button className="w-full border border-rose-400 text-rose-500 hover:bg-rose-50 font-bold px-3 py-1 rounded-xl text-[10px] transition cursor-pointer flex items-center justify-center gap-1 shadow-2xs">
                                <Download size={11} /> Download
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                <div className="text-center pt-1">
                  <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 font-bold text-xs px-4 py-2 rounded-xl inline-flex items-center gap-1.5 cursor-pointer transition">
                    Load More Materials <ChevronDown size={14} />
                  </button>
                </div>

                {/* Complete Study Material Package Offer Banner */}
                <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                        <Package size={24} />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-indigo-950 text-sm">Complete Study Material Package</h3>
                        <p className="text-gray-500 text-[10px]">
                          Get full access to all premium notes, videos, PYQs and exclusive resources.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0 text-right">
                      <div>
                        <p className="font-black text-emerald-600 text-xl leading-tight">₹599</p>
                        <p className="text-gray-400 text-[9px] font-semibold">Only</p>
                      </div>

                      <div className="space-y-1">
                        <span className="bg-emerald-600 text-white font-bold text-[8px] px-2 py-0.5 rounded-full uppercase block text-center">
                          Best Value
                        </span>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition cursor-pointer shadow-sm">
                          Offer Expires Now
                        </button>
                        <p className="text-gray-400 text-[8px] text-center">Valid for 12 Months</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-emerald-100 pt-2 text-[10px] text-gray-700 font-medium">
                    <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> All Premium Materials</div>
                    <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Regular Updates</div>
                    <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Expert Curated</div>
                    <div className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-600" /> Unlimited Downloads</div>
                  </div>
                </div>

                {/* Bottom Security Banner */}
                <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3 text-center flex items-center justify-center gap-2 text-blue-900 text-xs font-semibold">
                  <ShieldCheck size={16} className="text-blue-600" />
                  <span>Your data and submissions are safe and secure with GoodGuiders.</span>
                </div>

              </div>
            ) : (
              /* ================= DEFAULT OVERVIEW SECTION ================= */
              <>
                {/* Overview Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">Overview</h3>
                    <p className="text-gray-500 text-xs mt-1">
                      Expert Physics mentor for NEET with 8+ years of teaching experience. Helping students build strong concepts and achieve their goals.
                    </p>
                  </div>

                  <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider">Availability Status</p>
                      <p className="text-emerald-700 font-semibold text-xs flex items-center gap-1.5 mt-0.5">
                        <CheckCircle2 size={14} className="fill-emerald-500 text-white" /> Available for Sessions
                      </p>
                    </div>
                    <p className="text-gray-500 text-[10px] flex items-center gap-1">
                      <Clock size={12} /> Typically replies within 2 hours
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-2 pt-2">
                    <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
                      <p className="font-bold text-gray-900 text-sm">{mentor.studentsCount}</p>
                      <p className="text-gray-500 text-[10px] mt-0.5">Students Mentored</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
                      <p className="font-bold text-gray-900 text-sm">{mentor.experienceYears}+</p>
                      <p className="text-gray-500 text-[10px] mt-0.5">Years Experience</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
                      <p className="font-bold text-gray-900 text-sm">5+</p>
                      <p className="text-gray-500 text-[10px] mt-0.5">Subjects Teaching</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center">
                      <p className="font-bold text-gray-900 text-sm">98%</p>
                      <p className="text-gray-500 text-[10px] mt-0.5">Satisfaction Rate</p>
                    </div>
                  </div>
                </div>

                {/* About the Mentor Section */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
                  <h3 className="text-sm font-bold text-gray-900 border-b pb-2">About the Mentor</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {mentor.name} is a Physics expert with over 8 years of teaching experience. He specializes in making complex concepts simple and improving problem solving skills. He has mentored thousands of NEET aspirants with a proven track record of results.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-2">
                      {[
                        'Conceptual teaching with real-life examples',
                        'Focused on NCERT + Advanced problem solving',
                        'Personalized mentoring & doubt clearing',
                        'Regular tests and performance analysis',
                        'Complete guidance for NEET Physics',
                      ].map((point, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-purple-50/40 border border-purple-100 p-3 rounded-xl space-y-2">
                      <p className="font-bold text-purple-900 text-xs">Teaching Expertise</p>
                      <div className="flex flex-wrap gap-1.5">
                        {['Concept Building', 'Problem Solving', 'NCERT Mastery', 'Exam Strategy', 'Doubt Solving', 'Physics Basics'].map((exp) => (
                          <span key={exp} className="bg-white text-purple-700 border border-purple-200 text-[10px] font-medium px-2.5 py-1 rounded-lg">
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Teaching Subjects & Topics */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
                  <h3 className="text-sm font-bold text-gray-900 border-b pb-2">Teaching Subjects & Topics</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Physics', 'Mathematics', 'Chemistry', 'Biology', 'Aptitude'].map((sub, i) => (
                      <span 
                        key={sub} 
                        className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                          i === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                  <div>
                    <p className="font-bold text-gray-800 text-xs mb-2">Physics Topics Covered</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        'Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics', 'Modern Physics',
                        'Kinematics', 'Work, Energy & Power', 'Waves & Oscillations', 'Semiconductors', 'Atoms & Nuclei'
                      ].map((topic) => (
                        <div key={topic} className="flex items-center gap-2 border border-gray-100 p-2 rounded-xl bg-gray-50/50 text-xs text-gray-700">
                          <BookOpen size={13} className="text-[#FF5722]" />
                          <span className="text-[11px] font-medium truncate">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <button className="text-[#FF5722] hover:underline font-semibold text-xs inline-flex items-center gap-1">
                      View All Topics <ChevronRight size={13} />
                    </button>
                  </div>
                </div>

                {/* Teaching Approach */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
                  <h3 className="text-sm font-bold text-gray-900 border-b pb-2">Teaching Approach</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
                      <p className="font-bold text-gray-800 text-xs mb-1">Concept First</p>
                      <p className="text-gray-500 text-[10px]">Clear concepts first, then move to problems for better understanding.</p>
                    </div>
                    <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
                      <p className="font-bold text-gray-800 text-xs mb-1">Practice Oriented</p>
                      <p className="text-gray-500 text-[10px]">Regular practice with PYQs, NCERT & Advanced questions.</p>
                    </div>
                    <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
                      <p className="font-bold text-gray-800 text-xs mb-1">Performance Tracking</p>
                      <p className="text-gray-500 text-[10px]">Tests and analysis to track progress and improve weak areas.</p>
                    </div>
                    <div className="border border-gray-100 p-3 rounded-xl bg-gray-50/50">
                      <p className="font-bold text-gray-800 text-xs mb-1">Doubt Support</p>
                      <p className="text-gray-500 text-[10px]">Quick doubt resolution and personal attention for every student.</p>
                    </div>
                  </div>
                </div>

                {/* Student Impact Section */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
                  <h3 className="text-sm font-bold text-gray-900">Student Impact</h3>
                  <p className="text-gray-500 text-xs">Results and feedback from my amazing students.</p>

                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-emerald-50/50 border border-emerald-100 p-2.5 rounded-xl text-center">
                      <p className="font-bold text-emerald-700 text-xs">{mentor.studentsCount}</p>
                      <p className="text-gray-500 text-[9px]">Students Mentored</p>
                    </div>
                    <div className="bg-blue-50/50 border border-blue-100 p-2.5 rounded-xl text-center">
                      <p className="font-bold text-blue-700 text-xs">650+</p>
                      <p className="text-gray-500 text-[9px]">Students Scored 650+ in NEET</p>
                    </div>
                    <div className="bg-purple-50/50 border border-purple-100 p-2.5 rounded-xl text-center">
                      <p className="font-bold text-purple-700 text-xs">320+</p>
                      <p className="text-gray-500 text-[9px]">Students Scored 700+ in NEET</p>
                    </div>
                    <div className="bg-amber-50/50 border border-amber-100 p-2.5 rounded-xl text-center">
                      <p className="font-bold text-amber-700 text-xs">95%</p>
                      <p className="text-gray-500 text-[9px]">Students Improved by 2+ Ranks</p>
                    </div>
                  </div>

                  {/* Highlight Quote Block */}
                  <div className="bg-emerald-50/40 border border-emerald-100 p-3.5 rounded-xl text-xs text-gray-700 italic space-y-2">
                    <p className="text-emerald-900 font-medium">
                      "Mentor who explains Physics in such an easy way that even the toughest topics feel simple. His guidance and support made a huge difference in my NEET preparation."
                    </p>
                    <p className="text-right text-gray-500 text-[10px] font-bold not-italic">- Ananya Sharma</p>
                  </div>
                </div>

                {/* Bottom Callout Banner */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-5 text-center space-y-3">
                  <h3 className="font-bold text-gray-900 text-sm">Want to learn from {mentor.name}?</h3>
                  <p className="text-gray-500 text-xs">Book a session now and take a step closer to your NEET success.</p>
                  <button className="bg-[#FF5722] hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition shadow-sm cursor-pointer inline-flex items-center gap-2">
                    <Calendar size={14} /> Book a Session Now
                  </button>
                </div>
              </>
            )}

          </div>

          {/* ================= RIGHT COLUMN: AVAILABILITY & REVIEWS (col-span-3) ================= */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Availability Slots Calendar Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-bold text-gray-900 text-xs flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#FF5722]" /> Availability
                </h3>
                <span className="text-[#FF5722] font-semibold text-[10px] hover:underline cursor-pointer">View Calendar</span>
              </div>

              <div className="space-y-3 text-[11px]">
                <div>
                  <p className="font-bold text-gray-800 text-[10px] mb-1.5">Today, 24 May</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">6:00 PM</button>
                    <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">8:00 PM</button>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-gray-800 text-[10px] mb-1.5">Sun, 25 May</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">10:00 AM</button>
                    <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">4:00 PM</button>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-gray-800 text-[10px] mb-1.5">Mon, 26 May</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">6:00 PM</button>
                    <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">8:00 PM</button>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-gray-800 text-[10px] mb-1.5">Tue, 27 May</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">6:00 PM</button>
                    <button className="py-1.5 px-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-center font-medium hover:bg-emerald-100 transition cursor-pointer">9:00 PM</button>
                  </div>
                </div>
              </div>

              <div className="text-center pt-1 border-t border-dashed border-gray-100">
                <button className="text-gray-500 hover:text-gray-800 font-semibold text-[10px] inline-flex items-center gap-1">
                  More slots available <ChevronDown size={12} />
                </button>
              </div>
            </div>

            {/* Student Reviews Widget */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 space-y-3">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="font-bold text-gray-900 text-xs">Student Reviews</h3>
                <span className="flex items-center gap-1 text-xs font-bold text-gray-800">
                  <Star size={12} fill="#f59e0b" className="text-amber-500" /> {mentor.rating} ({mentor.reviewsCount})
                </span>
              </div>

              <div className="space-y-3 text-[11px]">
                {/* Review 1 */}
                <div className="border-b border-gray-100 pb-2.5 space-y-1">
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Ananya" className="w-6 h-6 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-gray-800 text-[10px]">Ananya Sharma</p>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#f59e0b" />)}
                      </div>
                    </div>
                    <span className="ml-auto text-gray-400 text-[9px]">16 May 2024</span>
                  </div>
                  <p className="text-gray-600 text-[10px] leading-snug">
                    Sir explains Physics in such an easy way that even the toughest topics feel simple. Highly recommended!
                  </p>
                </div>

                {/* Review 2 */}
                <div className="border-b border-gray-100 pb-2.5 space-y-1">
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Rohit" className="w-6 h-6 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-gray-800 text-[10px]">Rohit Kumar</p>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#f59e0b" />)}
                      </div>
                    </div>
                    <span className="ml-auto text-gray-400 text-[9px]">12 May 2024</span>
                  </div>
                  <p className="text-gray-600 text-[10px] leading-snug">
                    Best mentor for NEET Physics. Regular practice sessions and doubt solving sessions are very helpful.
                  </p>
                </div>

                {/* Review 3 */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Pooja" className="w-6 h-6 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-gray-800 text-[10px]">Pooja Verma</p>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="#f59e0b" />)}
                      </div>
                    </div>
                    <span className="ml-auto text-gray-400 text-[9px]">10 May 2024</span>
                  </div>
                  <p className="text-gray-600 text-[10px] leading-snug">
                    The notes and quizzes provided by sir are excellent. Mock tests really help in exam preparation.
                  </p>
                </div>
              </div>

              <div className="text-center pt-2 border-t border-gray-100">
                <button className="text-[#FF5722] hover:underline font-semibold text-xs inline-flex items-center gap-1">
                  View all reviews <ChevronRight size={13} />
                </button>
              </div>
            </div>

            {/* New Student Offer Promo Box */}
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-4 text-white text-center space-y-2 shadow-sm relative overflow-hidden">
              <Gift size={28} className="mx-auto text-orange-100" />
              <h4 className="font-bold text-sm">New Student Offer</h4>
              <p className="text-orange-100 text-[10px]">Get 10% OFF on your first session with any service.</p>
              <button className="w-full bg-white text-[#FF5722] font-bold py-2 rounded-xl text-xs hover:bg-orange-50 transition cursor-pointer shadow-sm">
                Apply Offer
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

// Small helper component for Globe icon
function GlobeIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
      <path d="M2 12h20"/>
    </svg>
  );
}

//////end//