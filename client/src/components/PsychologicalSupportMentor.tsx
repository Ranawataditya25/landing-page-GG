


// import React from 'react';
// import {
//   Heart,
//   Target,
//   Brain,
//   Sparkles,
//   ShieldCheck,
//   ArrowRight,
//   MessageSquare,
//   CheckCircle2,
//   Flower2,
// } from 'lucide-react';

// // --- Types ---
// interface CardProps {
//   icon: React.ReactNode;
//   iconBg: string;
//   title: string;
//   desc: string;
// }

// interface Mentor {
//   name: string;
//   role: string;
//   roleColor: string;
//   imgBorder: string;
//   image: string;
//   tags: string[];
// }

// // --- Mentors Data ---
// const mentorsData: Mentor[] = [
//   {
//     name: 'Dr. Ananya Sharma',
//     role: 'Clinical Psychologist',
//     roleColor: 'text-emerald-600',
//     imgBorder: 'border-emerald-400',
//     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
//     tags: ['Anxiety & Stress Management', 'Emotional Well-being'],
//   },
//   {
//     name: 'Mr. Rohan Mehta',
//     role: 'Counselling Psychologist',
//     roleColor: 'text-purple-600',
//     imgBorder: 'border-purple-300',
//     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&auto=format&fit=crop&q=80',
//     tags: ['Confidence Building', 'Self-esteem & Motivation'],
//   },
//   {
//     name: 'Ms. Priya Nair',
//     role: 'Educational Psychologist',
//     roleColor: 'text-pink-600',
//     imgBorder: 'border-pink-300',
//     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
//     tags: ['Study Stress & Focus', 'Exam Anxiety Support'],
//   },
//   {
//     name: 'Mr. Karan Malhotra',
//     role: 'Behavioral Coach',
//     roleColor: 'text-teal-600',
//     imgBorder: 'border-teal-300',
//     image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
//     tags: ['Habit Building', 'Personal Growth'],
//   },
//   {
//     name: 'Ms. Neha Verma',
//     role: 'Mindfulness Coach',
//     roleColor: 'text-indigo-600',
//     imgBorder: 'border-indigo-300',
//     image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
//     tags: ['Mindfulness & Relaxation', 'Emotional Balance'],
//   },
// ];

// export const PsychologicalSupport: React.FC = () => {
//   return (
//     <section className="relative w-full bg-[#FAF9FF] py-12 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
//       {/* Background Soft Floating Shapes */}
//       <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#2E1065] rounded-bl-full opacity-90 -z-10" />
//       <div className="absolute top-6 right-12 w-[480px] h-[480px] bg-[#EAE3FF] rounded-full blur-2xl opacity-70 -z-10" />
//       <div className="absolute top-0 right-1/3 w-[360px] h-[360px] bg-[#E3FAF2] rounded-full blur-3xl opacity-80 -z-10" />
//       <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#DCFCE7] rounded-tr-full blur-2xl opacity-70 -z-10" />
//       <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-[#F3E8FF] rounded-full blur-2xl opacity-60 -z-10" />

//       <div className="max-w-7xl mx-auto space-y-12">
        
//         {/* ================= 1. HERO + CARDS SECTION (CLEAN FLEX NO-OVERLAP) ================= */}
//         <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          
//           {/* LEFT HERO TEXT - Strictly Isolated Container */}
//           <div className="w-full lg:w-[35%] xl:w-[32%] shrink-0 space-y-4 pt-2">
//             <span className="text-[#FFA000] font-bold text-xs tracking-widest uppercase block">
//               OUR PSYCHOLOGICAL SUPPORT
//             </span>

//             <h1 className="text-3xl md:text-4xl lg:text-[38px] font-extrabold text-[#1E0E62] leading-tight">
//               Mental Well-being.<br />
//               Better You. Stronger Tomorrow.
//             </h1>

//             {/* Purple Line */}
//             <div className="w-10 h-[3px] bg-[orange] rounded-full my-3" />

//             {/* Safe Paragraph Text */}
//             <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-sm">
//               Pursuing goals is important, but so is your mental well-being.
//               Our psychological support mentors are here to help you manage stress,
//               overcome challenges, and build a healthy mindset. Get a safe space
//               to talk, be heard, and grow emotionally – because your mental health matters.
//             </p>

//             {/* Bottom Row Card 4 (Placed directly under left hero text for perfect alignment) */}
//             <div className="pt-6 hidden lg:block">
//               <CardItem
//                 icon={<Brain className="w-5 h-5 text-[#F43F5E]" />}
//                 iconBg="bg-[#FFE4E6]"
//                 title="MENTAL CLARITY & FOCUS"
//                 desc="Improve concentration, clarity of thought, and stay motivated towards your goals."
//               />
//             </div>
//           </div>

//           {/* RIGHT CARDS - 2 Column Layout with Staircase Arrangement */}
//           <div className="w-full lg:w-[63%] xl:w-[65%] space-y-5">
            
//             {/* Top Row: Emotional Well-being Card (Aligned to Right) */}
//             <div className="flex justify-end">
//               <div className="w-full sm:w-[49%]">
//                 <CardItem
//                   icon={<Heart className="w-5 h-5 text-[#32B583] fill-[#32B583]" />}
//                   iconBg="bg-[#E8F8F0]"
//                   title="EMOTIONAL WELL-BEING"
//                   desc="Talk about your feelings and get support to manage emotions like stress, anxiety, and overthinking."
//                 />
//               </div>
//             </div>

//             {/* Middle Row: Stress Management + Confidence & Self-Esteem */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               <CardItem
//                 icon={<Flower2 className="w-5 h-5 text-[#8B5CF6]" />}
//                 iconBg="bg-[#F3E8FF]"
//                 title="STRESS MANAGEMENT"
//                 desc="Learn practical techniques to reduce stress and find balance in your daily life."
//               />
//               <CardItem
//                 icon={<Target className="w-5 h-5 text-[#A855F7]" />}
//                 iconBg="bg-[#F3E8FF]"
//                 title="CONFIDENCE & SELF-ESTEEM"
//                 desc="Build self-confidence and believe in yourself to tackle challenges with a positive mindset."
//               />
//             </div>

//             {/* Bottom Row for Mobile/Tablet or Right Side Items */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               <div className="lg:hidden">
//                 <CardItem
//                   icon={<Brain className="w-5 h-5 text-[#F43F5E]" />}
//                   iconBg="bg-[#FFE4E6]"
//                   title="MENTAL CLARITY & FOCUS"
//                   desc="Improve concentration, clarity of thought, and stay motivated towards your goals."
//                 />
//               </div>
//               <CardItem
//                 icon={<Sparkles className="w-5 h-5 text-[#14B8A6]" />}
//                 iconBg="bg-[#CCFBF1]"
//                 title="PERSONAL GROWTH & RESILIENCE"
//                 desc="Develop healthy habits, build resilience, and grow stronger through life's ups and downs."
//               />
//               <CardItem
//                 icon={<ShieldCheck className="w-5 h-5 text-[#9333EA]" />}
//                 iconBg="bg-[#F3E8FF]"
//                 title="SAFE & CONFIDENTIAL SPACE"
//                 desc="Your privacy matters. We provide a supportive and non-judgmental space where you can be yourself."
//               />
//             </div>

//           </div>

//         </div>

//         {/* ================= 2. MENTORS SECTION ================= */}
//         <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm space-y-6">
          
//           {/* Section Divider Header */}
//           <div className="flex items-center justify-center gap-3">
//             <div className="h-[1px] bg-slate-200 flex-1" />
//             <div className="flex items-center gap-2 px-2">
//               <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
//               <h2 className="text-xs md:text-sm font-extrabold text-slate-800 uppercase tracking-widest text-center">
//                 MEET OUR PSYCHOLOGICAL SUPPORT MENTORS
//               </h2>
//               <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
//             </div>
//             <div className="h-[1px] bg-slate-200 flex-1" />
//           </div>

//           {/* Mentors Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//             {mentorsData.map((mentor, index) => (
//               <div
//                 key={index}
//                 className="bg-[#FAF9FE] p-3.5 rounded-2xl border border-slate-100 flex flex-col justify-between gap-3 hover:border-slate-200 transition-colors min-w-0"
//               >
//                 <div className="flex items-center gap-2.5 min-w-0">
//                   <img
//                     src={mentor.image}
//                     alt={mentor.name}
//                     className={`w-11 h-11 rounded-full object-cover border-2 ${mentor.imgBorder} shrink-0`}
//                   />
//                   <div className="min-w-0 flex-1">
//                     <h4 className="text-xs font-bold text-slate-900 truncate">
//                       {mentor.name}
//                     </h4>
//                     <p className={`text-[10px] font-semibold ${mentor.roleColor} truncate mt-0.5`}>
//                       {mentor.role}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="space-y-1.5 pt-2 border-t border-slate-200/60 text-[10px] text-slate-600">
//                   {mentor.tags.map((tag, tIdx) => (
//                     <div key={tIdx} className="flex items-start gap-1.5 min-w-0">
//                       <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
//                       <span className="truncate">{tag}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Banner */}
//           <div className="bg-[#F3EEFF] rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-[#E6F7F0] flex items-center justify-center shrink-0">
//                 <MessageSquare className="w-6 h-6 text-[#32B583] fill-[#32B583]" />
//               </div>
//               <div>
//                 <h4 className="text-base md:text-lg font-extrabold text-slate-900">
//                   You are not alone. We are with you!
//                 </h4>
//                 <p className="text-xs md:text-sm text-slate-600 mt-0.5">
//                   Talk to our mentors and take the first step towards a happier, healthier you.
//                 </p>
//               </div>
//             </div>

//             <button className="bg-[#32B583] hover:bg-[#28986D] text-white font-semibold text-xs md:text-sm px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shrink-0 cursor-pointer shadow-xs">
//               <span>Talk to a Mentor Today</span>
//               <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// // --- Single Feature Card Component ---
// const CardItem: React.FC<CardProps> = ({ icon, iconBg, title, desc }) => {
//   return (
//     <div className="bg-white p-5 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 flex items-start gap-3.5 w-full transition-all hover:-translate-y-0.5 min-w-0">
//       <div className={`p-2.5 rounded-2xl ${iconBg} shrink-0 flex items-center justify-center`}>
//         {icon}
//       </div>
//       <div className="space-y-1 flex-1 min-w-0">
//         <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase leading-snug truncate">
//           {title}
//         </h3>
//         <p className="text-slate-500 text-[11px] leading-relaxed break-words">
//           {desc}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PsychologicalSupport;



// // import React, { useState } from 'react';
// // import { 
// //   Search, Bell, ChevronDown, Filter, Home, BookOpen, Award, Users, 
// //   MapPin, Star, Clock, Monitor, CheckCircle, ArrowRight, Play, 
// //   Heart, Shield, Zap, Smile, Activity, Compass
// // } from 'lucide-react';

// // export default function DanceCategoryPage() {
// //   const [selectedFilter, setSelectedFilter] = useState('Dance');
// //   const [activeSubTab, setActiveSubTab] = useState('All Dance Forms');

// //   const categories = [
// //     { name: 'All Activities', count: 48 },
// //     { name: 'Art & Craft', count: 8 },
// //     { name: 'Music', count: 6 },
// //     { name: 'Dance', count: 5, active: true },
// //     { name: 'Public Speaking', count: 3 },
// //     { name: 'Yoga & Fitness', count: 4 },
// //     { name: 'Coding & Robotics', count: 5 },
// //     { name: 'Sports', count: 7 },
// //   ];

// //   const subTabs = ['All Dance Forms', 'Classical', 'Folk', 'Western', 'Contemporary', 'Hip Hop', 'Bollywood', 'Other Styles'];

// //   const mentors = [
// //     { name: 'Ms. Riya Nair', role: 'Bharatanatyam Expert', rating: 4.9, reviews: 120, exp: '8+ Years Exp.', students: '120+ Students', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300' },
// //     { name: 'Mr. Arjun Malhotra', role: 'Hip Hop Instructor', rating: 4.8, reviews: 86, exp: '6+ Years Exp.', students: '80+ Students', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300' },
// //     { name: 'Ms. Ananya Iyer', role: 'Contemporary Dancer', rating: 4.9, reviews: 85, exp: '7+ Years Exp.', students: '90+ Students', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300' },
// //     { name: 'Mr. Karan Mehta', role: 'Bollywood Choreographer', rating: 4.8, reviews: 68, exp: '6+ Years Exp.', students: '80+ Students', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300' },
// //     { name: 'Ms. Pooja Sharma', role: 'Kathak Specialist', rating: 4.9, reviews: 65, exp: '10+ Years Exp.', students: '150+ Students', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300' },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-[#F8F9FC] text-gray-800 font-sans">
      
// //       {/* Top Navbar */}
// //       <header className="bg-white border-b border-gray-100 sticky top-0 z-50 px-6 py-3 flex items-center justify-between">
// //         <div className="flex items-center gap-8">
// //           <div className="flex items-center gap-2">
// //             <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-indigo-600 bg-clip-text text-transparent">Good Guiders</span>
// //           </div>
// //           <div className="relative hidden md:block w-96">
// //             <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
// //             <input 
// //               type="text" 
// //               placeholder="Search activities, mentors, or skills..." 
// //               className="w-full bg-gray-50 border border-gray-200 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
// //             />
// //           </div>
// //         </div>

// //         <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
// //           <a href="#" className="hover:text-indigo-600">Home</a>
// //           <a href="#" className="flex items-center gap-1 hover:text-indigo-600">Courses <ChevronDown className="w-4 h-4" /></a>
// //           <a href="#" className="flex items-center gap-1 hover:text-indigo-600">Exam Prep <ChevronDown className="w-4 h-4" /></a>
// //           <a href="#" className="flex items-center gap-1 hover:text-indigo-600">Local Tutors <ChevronDown className="w-4 h-4" /></a>
// //           <a href="#" className="flex items-center gap-1 hover:text-indigo-600">Online Mentors <ChevronDown className="w-4 h-4" /></a>
// //         </nav>

// //         <div className="flex items-center gap-4">
// //           <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md shadow-orange-500/20 hover:bg-orange-600 transition">Join Us</button>
// //           <div className="relative p-2 bg-gray-50 rounded-full cursor-pointer hover:bg-gray-100">
// //             <Bell className="w-4 h-4 text-gray-600" />
// //             <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full"></span>
// //           </div>
// //           <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-9 h-9 rounded-full object-cover border border-gray-200" />
// //         </div>
// //       </header>

// //       {/* Main Container */}
// //       <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
// //         {/* Left Sidebar Filters */}
// //         <aside className="bg-white p-5 rounded-2xl border border-gray-100 h-fit space-y-6">
// //           <div className="flex items-center justify-between pb-4 border-b border-gray-100">
// //             <span className="font-bold text-gray-900 flex items-center gap-2">Filter Activities</span>
// //             <Filter className="w-4 h-4 text-indigo-600" />
// //           </div>

// //           {/* Activity Category List */}
// //           <div className="space-y-1 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
// //             <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">All activities</div>
// //             {categories.map((cat, idx) => (
// //               <div 
// //                 key={idx} 
// //                 className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium cursor-pointer transition ${cat.active ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
// //               >
// //                 <div className="flex items-center gap-3">
// //                   <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs ${cat.active ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'}`}>🎭</span>
// //                   <span>{cat.name}</span>
// //                 </div>
// //                 <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{cat.count}</span>
// //               </div>
// //             ))}
// //           </div>

// //           <button className="w-full py-2.5 border border-indigo-100 text-indigo-600 rounded-xl text-sm font-semibold hover:bg-indigo-50 transition">
// //             Clear Filters
// //           </button>

// //           {/* Age Group Filter */}
// //           <div className="pt-4 border-t border-gray-100 space-y-3">
// //             <h4 className="font-bold text-sm text-gray-900">Age Group</h4>
// //             {['All Ages', '5 – 10 Years', '11 – 15 Years', '16 – 18 Years', '18+ Years'].map((age, i) => (
// //               <label key={i} className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
// //                 <input type="checkbox" defaultChecked={i === 0} className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4" />
// //                 <span>{age}</span>
// //               </label>
// //             ))}
// //           </div>

// //           {/* Skill Level Filter */}
// //           <div className="pt-4 border-t border-gray-100 space-y-3">
// //             <h4 className="font-bold text-sm text-gray-900">Skill Level</h4>
// //             <div className="grid grid-cols-3 gap-2">
// //               {['Beginner', 'Intermediate', 'Advanced'].map((lvl, i) => (
// //                 <button key={i} className={`py-1.5 text-xs font-medium rounded-lg border ${i === 0 ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
// //                   {lvl}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </aside>

// //         {/* Right Content Area */}
// //         <main className="lg:col-span-3 space-y-8">
          
// //           {/* Header Title & Social Proof Banner */}
// //           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-gray-100">
// //             <div>
// //               <h1 className="text-2xl font-black text-gray-900">Explore <span className="text-orange-500">Extracurricular Activities</span></h1>
// //               <p className="text-sm text-gray-500 mt-1">Discover a wide range of activities that build skills, boost confidence, and help you grow beyond the classroom.</p>
// //             </div>
// //             <div className="flex items-center gap-4 bg-orange-50/50 border border-orange-100 px-4 py-3 rounded-2xl">
// //               <div className="bg-orange-500 text-white p-2.5 rounded-xl">
// //                 <Users className="w-5 h-5" />
// //               </div>
// //               <div>
// //                 <h3 className="font-bold text-sm text-gray-900">5000+</h3>
// //                 <p className="text-xs text-gray-500">Students Engaged</p>
// //               </div>
// //               <div className="flex -space-x-2 ml-4">
// //                 <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Student" />
// //                 <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Student" />
// //               </div>
// //             </div>
// //           </div>

// //           {/* Breadcrumb & Hero Card */}
// //           <div className="space-y-4">
// //             <div className="text-xs font-semibold text-gray-400 flex items-center gap-2">
// //               <span>Home</span> / <span>Activities</span> / <span className="text-indigo-600">Dance</span>
// //             </div>

// //             <div className="relative bg-gradient-to-r from-gray-900 via-indigo-950 to-indigo-900 rounded-3xl p-8 text-white overflow-hidden shadow-xl flex flex-col lg:flex-row items-center justify-between">
// //               <div className="z-10 max-w-lg space-y-4">
// //                 <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
// //                   <span className="text-2xl">🩰</span>
// //                 </div>
// //                 <h2 className="text-4xl font-black">Dance</h2>
// //                 <p className="text-sm text-gray-300 font-medium">Learn various dance forms and express yourself.</p>
// //                 <p className="text-xs text-gray-400 leading-relaxed">Dance is more than movement – it's an expression of emotion, culture, and creativity. Build confidence, discipline, fitness and stage presence through dance.</p>
                
// //                 <div className="flex flex-wrap gap-2 pt-2">
// //                   {['Fitness', 'Confidence', 'Discipline', 'Creativity', 'Expression'].map((tag, idx) => (
// //                     <span key={idx} className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Stats Sub-banner inside Hero */}
// //               <div className="z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 lg:mt-0 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
// //                 <div className="text-center px-3">
// //                   <div className="flex justify-center mb-1 text-orange-400"><Users className="w-4 h-4" /></div>
// //                   <div className="text-lg font-bold">28</div>
// //                   <div className="text-[10px] text-gray-300 uppercase">Mentors</div>
// //                 </div>
// //                 <div className="text-center px-3 border-l border-white/10">
// //                   <div className="flex justify-center mb-1 text-orange-400"><BookOpen className="w-4 h-4" /></div>
// //                   <div className="text-lg font-bold">86</div>
// //                   <div className="text-[10px] text-gray-300 uppercase">Programs</div>
// //                 </div>
// //                 <div className="text-center px-3 border-l border-white/10">
// //                   <div className="flex justify-center mb-1 text-orange-400"><Star className="w-4 h-4" /></div>
// //                   <div className="text-lg font-bold">4.8</div>
// //                   <div className="text-[10px] text-gray-300 uppercase">Rating</div>
// //                 </div>
// //                 <div className="text-center px-3 border-l border-white/10">
// //                   <div className="flex justify-center mb-1 text-orange-400"><Award className="w-4 h-4" /></div>
// //                   <div className="text-lg font-bold">1.2K+</div>
// //                   <div className="text-[10px] text-gray-300 uppercase">Enrolled</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Sub Navigation Tabs */}
// //           <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
// //             {subTabs.map((tab, idx) => (
// //               <button 
// //                 key={idx} 
// //                 onClick={() => setActiveSubTab(tab)}
// //                 className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition shadow-sm ${activeSubTab === tab ? 'bg-indigo-600 text-white shadow-indigo-600/20' : 'bg-white text-gray-600 border border-gray-100 hover:bg-gray-50'}`}
// //               >
// //                 {tab}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Top Dance Mentors Section */}
// //           <div className="space-y-4">
// //             <div className="flex items-center justify-between">
// //               <h3 className="text-lg font-bold text-gray-900">Top Dance Mentors</h3>
// //               <a href="#" className="text-xs font-semibold text-indigo-600 hover:underline flex items-center gap-1">View All Mentors <ArrowRight className="w-3 h-3" /></a>
// //             </div>

// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
// //               {mentors.map((mentor, idx) => (
// //                 <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
// //                   <div className="space-y-3">
// //                     <div className="relative">
// //                       <img src={mentor.img} alt={mentor.name} className="w-full h-36 object-cover rounded-xl" />
// //                       <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
// //                         <Star className="w-3 h-3 text-orange-400 fill-orange-400" /> {mentor.rating} ({mentor.reviews})
// //                       </span>
// //                     </div>
// //                     <div>
// //                       <h4 className="font-bold text-sm text-gray-900 flex items-center gap-1">
// //                         {mentor.name} <CheckCircle className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" />
// //                       </h4>
// //                       <p className="text-xs text-gray-500 mt-0.5">{mentor.role}</p>
// //                     </div>
// //                   </div>

// //                   <div className="mt-4 pt-3 border-t border-gray-50 space-y-3">
// //                     <div className="flex justify-between text-[10px] font-semibold text-gray-400">
// //                       <span>{mentor.exp}</span>
// //                       <span>{mentor.students}</span>
// //                     </div>
// //                     <button className="w-full py-2 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-600 hover:text-white transition">
// //                       View Profile
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Why Learn Dance Section */}
// //           <div className="bg-white p-6 rounded-3xl border border-gray-100 space-y-6">
// //             <h3 className="text-lg font-bold text-gray-900">Why Learn Dance?</h3>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //               {[
// //                 { title: 'Physical Fitness', desc: 'Improve strength, flexibility & stamina.', icon: Activity, color: 'bg-emerald-50 text-emerald-600' },
// //                 { title: 'Boosts Confidence', desc: 'Builds self-esteem & stage presence.', icon: Shield, color: 'bg-blue-50 text-blue-600' },
// //                 { title: 'Better Focus', desc: 'Enhances concentration and memory.', icon: Zap, color: 'bg-purple-50 text-purple-600' },
// //                 { title: 'Emotional Well-being', desc: 'Reduces stress and boosts happiness.', icon: Heart, color: 'bg-rose-50 text-rose-600' },
// //                 { title: 'Social Skills', desc: 'Encourages teamwork and communication.', icon: Users, color: 'bg-amber-50 text-amber-600' },
// //                 { title: 'Creative Expression', desc: 'Helps express emotion and creativity.', icon: Smile, color: 'bg-indigo-50 text-indigo-600' },
// //               ].map((item, i) => {
// //                 const IconComponent = item.icon;
// //                 return (
// //                   <div key={i} className="p-4 rounded-2xl border border-gray-50 bg-gray-50/50 flex items-start gap-4">
// //                     <div className={`p-3 rounded-xl ${item.color}`}>
// //                       <IconComponent className="w-5 h-5" />
// //                     </div>
// //                     <div>
// //                       <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
// //                       <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>

// //           {/* Call to Action Banner */}
// //           <div className="relative bg-gradient-to-r from-indigo-900 via-indigo-950 to-purple-950 rounded-3xl p-8 text-white flex flex-col lg:flex-row items-center justify-between overflow-hidden">
// //             <div className="space-y-4 max-w-md z-10">
// //               <h3 className="text-2xl font-black">Ready to start your dance journey?</h3>
// //               <p className="text-xs text-gray-300 leading-relaxed">Connect with our mentors and find the perfect program for you.</p>
              
// //               <div className="grid grid-cols-3 gap-2 pt-2">
// //                 <div className="flex items-center gap-2 text-xs text-gray-300">
// //                   <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-orange-400">✓</div>
// //                   <span>Personalized Guidance</span>
// //                 </div>
// //                 <div className="flex items-center gap-2 text-xs text-gray-300">
// //                   <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-orange-400">✓</div>
// //                   <span>Flexible Timings</span>
// //                 </div>
// //                 <div className="flex items-center gap-2 text-xs text-gray-300">
// //                   <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-orange-400">✓</div>
// //                   <span>Safe & Supportive</span>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="z-10 mt-6 lg:mt-0">
// //               <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition">
// //                 Connect with Mentors →
// //               </button>
// //             </div>
// //           </div>

// //         </main>
// //       </div>
// //     </div>
// //   );
// // }





import React, { useState } from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  useNavigate 
} from 'react-router-dom';
import { 
  Target, 
  UserCheck, 
  Star, 
  Trophy, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Clock, 
  Users,
  Search,
  ArrowLeft
} from 'lucide-react';

// ==========================================
// MOCK DATA FOR ALL MENTORS
// ==========================================
const MENTORS_DATA = [
  { id: 1, name: "Mr. Arjun Malhotra", role: "Art Instructor", experience: "8+ Years Experience", rating: "4.9", reviews: "120", category: "Art", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" },
  { id: 2, name: "Ms. Sneha Kapoor", role: "Dance Coach", experience: "7+ Years Experience", rating: "4.9", reviews: "98", category: "Dance", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300" },
  { id: 3, name: "Mr. Rohan Verma", role: "Music Mentor", experience: "10+ Years Experience", rating: "4.8", reviews: "112", category: "Music", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" },
  { id: 4, name: "Ms. Priya Nair", role: "Yoga & Fitness Coach", experience: "6+ Years Experience", rating: "4.9", reviews: "85", category: "Fitness", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300" },
  { id: 5, name: "Dr. Vikram Seth", role: "Public Speaking Expert", experience: "12+ Years Experience", rating: "5.0", reviews: "140", category: "Speaking", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" },
  { id: 6, name: "Ananya Sharma", role: "Coding & Robotics Lead", experience: "5+ Years Experience", rating: "4.8", reviews: "76", category: "Technology", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" },
  { id: 7, name: "Kabir Mehra", role: "Guitar & Vocals Instructor", experience: "9+ Years Experience", rating: "4.9", reviews: "105", category: "Music", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300" },
  { id: 8, name: "Neha Gupta", role: "Classical & Contemporary Dancer", experience: "8+ Years Experience", rating: "4.7", reviews: "64", category: "Dance", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300" }
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExtracurricularSection />} />
        <Route path="/mentors" element={<AllMentorsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// ==========================================
// 1. HOME / EXTRACURRICULAR SECTION
// ==========================================
function ExtracurricularSection() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* TOP HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-rose-600 font-bold text-xs tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              <span>Beyond Academics, Beyond Limits</span>
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Discover. Learn. Grow Through <br />
              <span className="text-orange-600">Extracurricular Activities.</span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed">
              Explore a wide range of activities that build creativity, confidence, teamwork and life skills. Find the right mentor and turn your passion into achievement.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Skill Development</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Learn new skills and unlock potential.</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Expert Mentors</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Learn from experienced professionals.</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Personal Growth</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Build confidence and leadership.</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Achievements</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Participate, compete and achieve.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[360px] bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800" 
                alt="Children practicing arts and music" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                    👥
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-base">5000+</div>
                    <div className="text-slate-500 text-xs">Students Engaged</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* POPULAR ACTIVITIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ActivityCard icon="🎨" title="Art & Craft" desc="Explore creativity through drawing, painting, and craft." benefits={["Boosts Creativity", "Improves Focus"]} mentorsCount="24 Mentors" badgeBg="bg-rose-50 text-rose-600" />
          <ActivityCard icon="🎵" title="Music" desc="Vocal or instrumental, discover the joy of rhythm." benefits={["Enhances Concentration", "Builds Confidence"]} mentorsCount="32 Mentors" badgeBg="bg-indigo-50 text-indigo-600" />
          <ActivityCard icon="💃" title="Dance" desc="Learn various dance forms and express yourself." benefits={["Improves Fitness", "Increases Confidence"]} mentorsCount="28 Mentors" badgeBg="bg-amber-50 text-amber-600" />
        </div>

        {/* FEATURED MENTORS ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
          <MentorCard image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" name="Mr. Arjun Malhotra" role="Art Instructor" experience="8+ Years" rating="4.9" reviews="120" />
          <MentorCard image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300" name="Ms. Sneha Kapoor" role="Dance Coach" experience="7+ Years" rating="4.9" reviews="98" />
          <MentorCard image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" name="Mr. Rohan Verma" role="Music Mentor" experience="10+ Years" rating="4.8" reviews="112" />
          <MentorCard image="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300" name="Ms. Priya Nair" role="Yoga Coach" experience="6+ Years" rating="4.9" reviews="85" />

          {/* PROMO CARD WITH WORKING BUTTON NAVIGATION */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 leading-tight">Learn from the Best</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Connect with verified mentors who are experts in their fields and passionate about guiding you.
              </p>
              <button 
                onClick={() => navigate('/othermentor')}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-xs shadow-md transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>View All Mentors</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <div className="mt-4 rounded-xl overflow-hidden h-28 relative">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400" 
                alt="Kid learning" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* FOOTER VALUES BAR */}
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Certified & Verified</h4>
              <p className="text-slate-500 text-xs">Background checked mentors</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Flexible Timings</h4>
              <p className="text-slate-500 text-xs">Choose times that suit you</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Personalized Guidance</h4>
              <p className="text-slate-500 text-xs">Support tailored to goals</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Safe Environment</h4>
              <p className="text-slate-500 text-xs">Comfort is our priority</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// 2. NEW PAGE: ALL MENTORS LISTING PAGE
// ==========================================
function AllMentorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Art', 'Dance', 'Music', 'Fitness', 'Speaking', 'Technology'];

  const filteredMentors = MENTORS_DATA.filter((mentor) => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          mentor.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || mentor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Navigation / Header bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900">Explore All Mentors</h1>
              <p className="text-slate-500 text-xs">Browse our complete directory of verified expert coaches.</p>
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or skill..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMentors.length > 0 ? (
            filteredMentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition">
                <div className="flex flex-col items-center text-center space-y-3">
                  <img src={mentor.image} alt={mentor.name} className="w-20 h-20 rounded-full object-cover shadow-sm" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{mentor.name}</h4>
                    <p className="text-slate-500 text-xs">{mentor.role}</p>
                  </div>
                  <div className="text-[11px] text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full font-medium">
                    ⏱️ {mentor.experience}
                  </div>
                  <div className="flex items-center space-x-1 text-xs font-bold text-slate-800 pt-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{mentor.rating}</span>
                    <span className="text-slate-400 font-normal">({mentor.reviews})</span>
                  </div>
                </div>

                <button className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-bold rounded-xl text-xs transition cursor-pointer">
                  View Profile & Book
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center space-y-3 bg-white rounded-3xl border border-slate-100">
              <p className="text-slate-400 text-sm">No mentors found matching your search.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} 
                className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// ==========================================
// SUB-COMPONENTS
// ==========================================
function ActivityCard({ icon, title, desc, benefits, mentorsCount, badgeBg }) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition">
      <div className="space-y-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${badgeBg}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-extrabold text-slate-900 text-lg">{title}</h3>
          <p className="text-slate-500 text-xs mt-1 leading-relaxed">{desc}</p>
        </div>

        <div className="space-y-2 pt-2 border-t border-slate-50">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
              <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="flex -space-x-2">
          <img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50" alt="mentor" />
          <img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50" alt="mentor" />
        </div>
        <span className="text-xs font-bold text-indigo-950">{mentorsCount}</span>
      </div>
    </div>
  );
}

function MentorCard({ image, name, role, experience, rating, reviews }) {
  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between space-y-4">
      <div className="flex flex-col items-center text-center space-y-3">
        <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover shadow-sm" />
        <div>
          <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
          <p className="text-slate-500 text-xs">{role}</p>
        </div>
        <div className="text-[11px] text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full font-medium">
          ⏱️ {experience}
        </div>
        <div className="flex items-center space-x-1 text-xs font-bold text-slate-800 pt-1">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{rating}</span>
          <span className="text-slate-400 font-normal">({reviews})</span>
        </div>
      </div>

      <button className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-bold rounded-xl text-xs transition cursor-pointer">
        View Profile
      </button>
    </div>
  );
}