// // // // // // import React, { useState } from 'react';
// // // // // // import { Search, Star, Heart, Clock, Award, ShieldCheck, 
// // // // // //   Users, CheckCircle2, ChevronRight, ChevronLeft, X, 
// // // // // //   Info, Filter, Grid, List, Sparkles, MessageSquare, 
// // // // // //   Headphones, Calendar, Lock
// // // // // // } from 'lucide-react';
// // // // // // import  Banner from './components/Banner'

// // // // // // // --- TYPES ---
// // // // // // interface Mentor {
// // // // // //   id: number;
// // // // // //   name: string;
// // // // // //   role: string;
// // // // // //   expertise: string;
// // // // // //   image: string;
// // // // // //   rating: number;
// // // // // //   reviewsCount: number;
// // // // // //   studentsCount: string;
// // // // // //   experienceYears: number;
// // // // // //   tags: string[];
// // // // // //   hourlyRate: number;
// // // // // //   sessionRate: number;
// // // // // //   specializationText: string;
// // // // // //   isAvailable: boolean;
// // // // // // }

// // // // // // // --- MOCK DATA ---
// // // // // // const INITIAL_MENTORS: Mentor[] = [
// // // // // //   {
// // // // // //     id: 1,
// // // // // //     name: 'Dr. Arjun Mehta',
// // // // // //     role: 'NEET Expert – Physics',
// // // // // //     expertise: 'Mechanics, Optics, Electrostatics, Modern Physics',
// // // // // //     image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
// // // // // //     rating: 4.9,
// // // // // //     reviewsCount: 256,
// // // // // //     studentsCount: '12,500+',
// // // // // //     experienceYears: 8,
// // // // // //     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
// // // // // //     hourlyRate: 800,
// // // // // //     sessionRate: 499,
// // // // // //     specializationText: 'Mechanics, Optics, Electrostatics, Modern Physics',
// // // // // //     isAvailable: true,
// // // // // //   },
// // // // // //   {
// // // // // //     id: 2,
// // // // // //     name: 'Dr. Priya Sharma',
// // // // // //     role: 'NEET Expert – Chemistry',
// // // // // //     expertise: 'Organic, Inorganic, Physical Chemistry',
// // // // // //     image: 'https://images.unsplash.com/photo-1594824813566-82823d5afe4a?w=400&auto=format&fit=crop&q=80',
// // // // // //     rating: 4.9,
// // // // // //     reviewsCount: 198,
// // // // // //     studentsCount: '9,800+',
// // // // // //     experienceYears: 7,
// // // // // //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// // // // // //     hourlyRate: 700,
// // // // // //     sessionRate: 449,
// // // // // //     specializationText: 'Organic, Inorganic, Physical Chemistry',
// // // // // //     isAvailable: true,
// // // // // //   },
// // // // // //   {
// // // // // //     id: 3,
// // // // // //     name: 'Dr. Neha Singh',
// // // // // //     role: 'NEET Expert – Botany',
// // // // // //     expertise: 'Plant Physiology, Genetics, Ecology, Biotechnology',
// // // // // //     image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80',
// // // // // //     rating: 4.8,
// // // // // //     reviewsCount: 210,
// // // // // //     studentsCount: '9,900+',
// // // // // //     experienceYears: 6,
// // // // // //     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
// // // // // //     hourlyRate: 600,
// // // // // //     sessionRate: 399,
// // // // // //     specializationText: 'Plant Physiology, Genetics, Ecology, Biotechnology',
// // // // // //     isAvailable: true,
// // // // // //   },
// // // // // //   {
// // // // // //     id: 4,
// // // // // //     name: 'Dr. Karan Verma',
// // // // // //     role: 'NEET Expert – Zoology',
// // // // // //     expertise: 'Human Physiology, Genetics, Animal Kingdom',
// // // // // //     image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80',
// // // // // //     rating: 4.8,
// // // // // //     reviewsCount: 176,
// // // // // //     studentsCount: '7,600+',
// // // // // //     experienceYears: 7,
// // // // // //     tags: ['Tutor', 'Homework Helper', 'Mentorship'],
// // // // // //     hourlyRate: 650,
// // // // // //     sessionRate: 449,
// // // // // //     specializationText: 'Human Physiology, Genetics, Animal Kingdom',
// // // // // //     isAvailable: true,
// // // // // //   },
// // // // // //   {
// // // // // //     id: 5,
// // // // // //     name: 'Dr. Ayesha Khan',
// // // // // //     role: 'NEET Expert – Physics',
// // // // // //     expertise: 'Electrostatics, Current Electricity, Waves',
// // // // // //     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
// // // // // //     rating: 4.7,
// // // // // //     reviewsCount: 154,
// // // // // //     studentsCount: '6,200+',
// // // // // //     experienceYears: 5,
// // // // // //     tags: ['Tutor', 'Doubt Solver', 'Homework Helper'],
// // // // // //     hourlyRate: 600,
// // // // // //     sessionRate: 399,
// // // // // //     specializationText: 'Electrostatics, Current Electricity, Waves',
// // // // // //     isAvailable: true,
// // // // // //   },
// // // // // //   {
// // // // // //     id: 6,
// // // // // //     name: 'Dr. Rohan Iyer',
// // // // // //     role: 'NEET Expert – Chemistry',
// // // // // //     expertise: 'Chemical Bonding, Thermodynamics, Solutions',
// // // // // //     image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80',
// // // // // //     rating: 4.7,
// // // // // //     reviewsCount: 132,
// // // // // //     studentsCount: '5,400+',
// // // // // //     experienceYears: 6,
// // // // // //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// // // // // //     hourlyRate: 550,
// // // // // //     sessionRate: 379,
// // // // // //     specializationText: 'Chemical Bonding, Thermodynamics, Solutions',
// // // // // //     isAvailable: true,
// // // // // //   },
// // // // // //   {
// // // // // //     id: 7,
// // // // // //     name: 'Dr. Meera Nair',
// // // // // //     role: 'NEET Expert – Botany',
// // // // // //     expertise: 'Cell Biology, Ecology, Plant Diversity',
// // // // // //     image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&auto=format&fit=crop&q=80',
// // // // // //     rating: 4.6,
// // // // // //     reviewsCount: 122,
// // // // // //     studentsCount: '4,900+',
// // // // // //     experienceYears: 5,
// // // // // //     tags: ['Tutor', 'Doubt Solver', 'Mentorship'],
// // // // // //     hourlyRate: 500,
// // // // // //     sessionRate: 349,
// // // // // //     specializationText: 'Cell Biology, Ecology, Plant Diversity',
// // // // // //     isAvailable: true,
// // // // // //   },
// // // // // //   {
// // // // // //     id: 8,
// // // // // //     name: 'Dr. Vivek Joshi',
// // // // // //     role: 'NEET Expert – Zoology',
// // // // // //     expertise: 'Animal Physiology, Evolution, Biotechnology',
// // // // // //     image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=80',
// // // // // //     rating: 4.6,
// // // // // //     reviewsCount: 118,
// // // // // //     studentsCount: '4,300+',
// // // // // //     experienceYears: 6,
// // // // // //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// // // // // //     hourlyRate: 550,
// // // // // //     sessionRate: 379,
// // // // // //     specializationText: 'Animal Physiology, Evolution, Biotechnology',
// // // // // //     isAvailable: true,
// // // // // //   },
// // // // // // ];

// // // // // // export default function MentorsPage() {
// // // // // //   const [favorites, setFavorites] = useState<number[]>([]);
// // // // // //   const [activeFilters, setActiveFilters] = useState<string[]>([
// // // // // //     'NEET',
// // // // // //     'Physics',
// // // // // //     'Both Teaching + Guidance',
// // // // // //       'Both Teaching + Guidance',
// // // // // //     'Available Now',
// // // // // //   ]);

// // // // // //   const toggleFavorite = (id: number) => {
// // // // // //     setFavorites((prev) =>
// // // // // //       prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
// // // // // //     );
// // // // // //   };

// // // // // //   const removeFilter = (filter: string) => {
// // // // // //     setActiveFilters((prev) => prev.filter((f) => f !== filter));
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs">
// // // // // //       {/* Top Navbar / Header Container */}
// // // // // //         <Banner/>
// // // // // //       <div className="max-w-7xl mx-auto px-4 py-4">
// // // // // //         {/* Breadcrumb */}
// // // // // //         <nav className="text-gray-400 text-xs mb-2 flex items-center gap-1">
// // // // // //           <span>Home</span>
// // // // // //           <span>&gt;</span>
// // // // // //           <span>Mentorship</span>
// // // // // //           <span>&gt;</span>
// // // // // //           <span className="text-gray-700 font-medium">All Mentornnnnns</span>
// // // // // //         </nav>

// // // // // //         <div className="flex flex-col md:flex-row gap-6">
// // // // // //           {/* ================= SIDEBAR FILTERS ================= */}
// // // // // //           <aside className="w-full md:w-64 flex-shrink-0 space-y-5 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
// // // // // //             <div className="flex justify-between items-center pb-2 border-b">
// // // // // //               <h2 className="font-bold text-sm text-gray-800">Filter Mentors</h2>
// // // // // //               <button 
// // // // // //                 onClick={() => setActiveFilters([])} 
// // // // // //                 className="text-orange-500 font-medium text-xs hover:underline"
// // // // // //               >
// // // // // //                 Clear All ↺
// // // // // //               </button>
// // // // // //             </div>

// // // // // //             {/* 1. Exam / Category */}
// // // // // //             <div>
// // // // // //               <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
// // // // // //                 <span>1. Exam / Category</span>
// // // // // //                 <Info size={12} className="text-gray-400" />
// // // // // //               </div>
// // // // // //               <select className="w-full border border-gray-300 rounded-lg p-2 text-xs text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-orange-500">
// // // // // //                 <option>NEET</option>
// // // // // //                 <option>JEE Main</option>
// // // // // //                 <option>JEE Advanced</option>
// // // // // //               </select>
// // // // // //               <div className="mt-2 space-y-1.5 pl-1">
// // // // // //                 {['JEE Main', 'JEE Advanced', 'Class 11 - 12', 'Class 6 - 10', 'CUET', 'Olympiad', 'Boards', 'Other Exams'].map((item) => (
// // // // // //                   <label key={item} className="flex items-center gap-2 text-gray-600 cursor-pointer">
// // // // // //                     <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500 accent-orange-500" />
// // // // // //                     <span>{item}</span>
// // // // // //                   </label>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* 2. Subject */}
// // // // // //             <div className="pt-2 border-t">
// // // // // //               <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
// // // // // //                 <span>2. Subject (NEET)</span>
// // // // // //                 <Info size={12} className="text-gray-400" />
// // // // // //               </div>
// // // // // //               <div className="space-y-1.5 pl-1">
// // // // // //                 {['Physics', 'Chemistry', 'Botany', 'Zoology'].map((sub, i) => (
// // // // // //                   <label key={sub} className="flex items-center gap-2 text-gray-600 cursor-pointer">
// // // // // //                     <input type="checkbox" defaultChecked className="rounded accent-orange-500" />
// // // // // //                     <span>{sub}</span>
// // // // // //                   </label>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* 3. Service Type */}
// // // // // //             <div className="pt-2 border-t">
// // // // // //               <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
// // // // // //                 <span>4. Service Type</span>
// // // // // //                 <Info size={12} className="text-gray-400" />
// // // // // //               </div>
// // // // // //               <div className="space-y-1.5 pl-1">
// // // // // //                 {[
// // // // // //                   { name: 'Online Classes / Tutor', count: 512 },
// // // // // //                   { name: 'Mentorship & Guidance', count: 438 },
// // // // // //                   { name: 'Homework Helper', count: 286 },
// // // // // //                   { name: '1:1 Doubt Solving', count: 324 },
// // // // // //                   { name: 'Test Preparation', count: 412 },
// // // // // //                   { name: 'College Counselling', count: 196 },
// // // // // //                 ].map((item) => (
// // // // // //                   <label key={item.name} className="flex items-center justify-between text-gray-600 cursor-pointer">
// // // // // //                     <div className="flex items-center gap-2">
// // // // // //                       <input type="checkbox" className="rounded accent-orange-500" />
// // // // // //                       <span>{item.name}</span>
// // // // // //                     </div>
// // // // // //                     <span className="text-gray-400 text-[10px]">({item.count})</span>
// // // // // //                   </label>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* 5. Teaching / Guidance Mode */}
// // // // // //             <div className="pt-2 border-t">
// // // // // //               <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
// // // // // //                 <span>5. Teaching / Guidance Mode</span>
// // // // // //                 <Info size={12} className="text-gray-400" />
// // // // // //               </div>
// // // // // //               <div className="space-y-1.5 pl-1">
// // // // // //                 {['Online Teaching Only', 'Guidance Only', 'Both Teaching + Guidance'].map((mode, idx) => (
// // // // // //                   <label key={mode} className="flex items-center gap-2 text-gray-600 cursor-pointer">
// // // // // //                     <input type="radio" name="mode" defaultChecked={idx === 2} className="accent-orange-500" />
// // // // // //                     <span>{mode}</span>
// // // // // //                   </label>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* 6. Price Range */}
// // // // // //             <div className="pt-2 border-t">
// // // // // //               <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
// // // // // //                 <span>6. Price Range</span>
// // // // // //                 <Info size={12} className="text-gray-400" />
// // // // // //               </div>
// // // // // //               <p className="text-gray-500 text-[11px] mb-1">Teaching Fee (₹ / hour)</p>
// // // // // //               <div className="flex gap-2 items-center mb-3">
// // // // // //                 <input type="text" value="₹ 0" readOnly className="w-1/2 border rounded p-1 text-center bg-gray-50" />
// // // // // //                 <span>-</span>
// // // // // //                 <input type="text" value="₹ 5000+" readOnly className="w-1/2 border rounded p-1 text-center bg-gray-50" />
// // // // // //               </div>
// // // // // //               <p className="text-gray-500 text-[11px] mb-1">Guidance Fee (₹ / session)</p>
// // // // // //               <div className="flex gap-2 items-center">
// // // // // //                 <input type="text" value="₹ 0" readOnly className="w-1/2 border rounded p-1 text-center bg-gray-50" />
// // // // // //                 <span>-</span>
// // // // // //                 <input type="text" value="₹ 5000+" readOnly className="w-1/2 border rounded p-1 text-center bg-gray-50" />
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Apply Filters CTA */}
// // // // // //             <div className="pt-3 border-t space-y-2">
// // // // // //               <button className="w-full bg-orange-500 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-orange-600 transition">
// // // // // //                 Apply Filters
// // // // // //               </button>
// // // // // //               <button onClick={() => setActiveFilters([])} className="w-full text-center text-gray-500 hover:underline">
// // // // // //                 Clear All Filters
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </aside>

// // // // // //           {/* ================= MAIN CONTENT ================= */}
// // // // // //           <main className="flex-1 space-y-6">
          
// // // // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">



// // // // // //               <div>
// // // // // //                 {/* <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
// // // // // //                   All Mentors
// // // // // //                   <span className="text-xs font-normal text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
// // // // // //                     (326 Mentors Found)
// // // // // //                   </span>
// // // // // //                 </h1> */}

// // // // // //  <h1 className="text-2xl font-bold text-orange-500 flex items-center gap-2">
// // // // // //   All Mentors
// // // // // //   <span className="text-xs font-normal text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
// // // // // //     (326 Mentors Found)
// // // // // //   </span>
// // // // // // </h1>
// // // // // //                 <p className="text-gray-500 text-xs mt-0.5">
// // // // // //                   Connect with expert mentors and achieve your academic and career goals.
// // // // // //                 </p>
// // // // // //               </div>

// // // // // //               {/* Sort By & View Toggle */}
// // // // // //               <div className="flex items-center gap-3">
// // // // // //                 <div className="flex items-center gap-2">
// // // // // //                   <span className="text-gray-500">Sort By</span>
// // // // // //                   <select className="border border-gray-300 rounded-lg p-1.5 bg-white text-xs text-gray-700 focus:outline-none">
// // // // // //                     <option>Recommended</option>
// // // // // //                     <option>Rating: High to Low</option>
// // // // // //                     <option>Price: Low to High</option>
// // // // // //                   </select>
// // // // // //                 </div>
// // // // // //                 <div className="flex border rounded-lg bg-white p-0.5 border-gray-200">
// // // // // //                   <button className="p-1 bg-orange-500 text-white rounded"><Grid size={14} /></button>
// // // // // //                   <button className="p-1 text-gray-400 hover:text-gray-600"><List size={14} /></button>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Feature Highlights Banner */}
// // // // // //             {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
// // // // // //               {[
// // // // // //                 { icon: ShieldCheck, title: 'Expert & Verified Mentors', desc: 'All mentors are verified for their qualifications & experience.' },
// // // // // //                 { icon: Users, title: 'Personalized Guidance', desc: '1:1 sessions tailored to your learning needs.' },
// // // // // //                 { icon: Award, title: 'Better Results', desc: 'Regular tracking and expert feedback for continuous growth.' },
// // // // // //                 { icon: Headphones, title: 'Flexible & Convenient', desc: 'Learn online anytime, anywhere with complete flexibility.' },
// // // // // //               ].map((feat, idx) => (
// // // // // //                 <div key={idx} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-start gap-2.5">
// // // // // //                   <div className="p-2 bg-purple-50 text-purple-600 rounded-lg flex-shrink-0">
// // // // // //                     <feat.icon size={18} />
// // // // // //                   </div>
// // // // // //                   <div>
// // // // // //                     <h4 className="font-semibold text-gray-800 text-[11px]">{feat.title}</h4>
// // // // // //                     <p className="text-[10px] text-gray-500 leading-snug mt-0.5">{feat.desc}</p>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div> */}

// // // // // //             {/* Stats Highlight Banner */}
// // // // // //             {/* <div className="bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 p-3.5 rounded-xl border border-gray-100 flex flex-wrap items-center justify-around gap-4 text-center">
// // // // // //               <div className="flex items-center gap-1.5 text-yellow-500 font-semibold text-xs">
// // // // // //                 <Star size={14} fill="currentColor" />
// // // // // //                 <span className="text-gray-800">Why students love our mentors?</span>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <span className="font-bold text-sm text-gray-900">4.8/5</span>
// // // // // //                 <p className="text-[10px] text-gray-500">Average Rating</p>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <span className="font-bold text-sm text-gray-900">98%</span>
// // // // // //                 <p className="text-[10px] text-gray-500">Satisfaction Rate</p>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <span className="font-bold text-sm text-gray-900">10K+</span>
// // // // // //                 <p className="text-[10px] text-gray-500">Students Mentored</p>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <span className="font-bold text-sm text-gray-900">5+ Years</span>
// // // // // //                 <p className="text-[10px] text-gray-500">Average Experience</p>
// // // // // //               </div>
// // // // // //             </div> */}

// // // // // //             {/* Active Filters Bar */}
// // // // // //             {activeFilters.length > 0 && (
// // // // // //               <div className="flex flex-wrap items-center gap-2">
// // // // // //                 <span className="font-medium text-gray-600 text-xs">Active Filters:</span>
// // // // // //                 {activeFilters.map((filter) => (
// // // // // //                   <span
// // // // // //                     key={filter}
// // // // // //                     className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] rounded-full shadow-sm"
// // // // // //                   >
// // // // // //                     {filter}
// // // // // //                     <X
// // // // // //                       size={12}
// // // // // //                       className="cursor-pointer hover:text-red-500"
// // // // // //                       onClick={() => removeFilter(filter)}
// // // // // //                     />
// // // // // //                   </span>
// // // // // //                 ))}
// // // // // //                 <button
// // // // // //                   onClick={() => setActiveFilters([])}
// // // // // //                   className="text-orange-500 text-xs hover:underline ml-2"
// // // // // //                 >
// // // // // //                   Clear All
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* Mentors Grid */}
// // // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // // // // //               {INITIAL_MENTORS.map((mentor) => {
// // // // // //                 const isFav = favorites.includes(mentor.id);
// // // // // //                 return (
// // // // // //                   <div
// // // // // //                     key={mentor.id}
// // // // // //                     className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden relative"
// // // // // //                   >
// // // // // //                     {/* Available Now Badge */}
// // // // // //                     <div className="p-3 pb-0 flex items-center justify-between">
// // // // // //                       <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
// // // // // //                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
// // // // // //                         Available Now
// // // // // //                       </span>
// // // // // //                       <button
// // // // // //                         onClick={() => toggleFavorite(mentor.id)}
// // // // // //                         className="text-gray-400 hover:text-red-500 transition"
// // // // // //                       >
// // // // // //                         <Heart
// // // // // //                           size={16}
// // // // // //                           fill={isFav ? '#ef4444' : 'none'}
// // // // // //                           className={isFav ? 'text-red-500' : 'text-gray-400'}
// // // // // //                         />
// // // // // //                       </button>
// // // // // //                     </div>

// // // // // //                     {/* Mentor Profile Info */}
// // // // // //                     <div className="p-3 text-center">
// // // // // //                       <div className="relative inline-block mb-2">
// // // // // //                         <img
// // // // // //                           src={mentor.image}
// // // // // //                           alt={mentor.name}
// // // // // //                           className="w-16 h-16 rounded-full object-cover mx-auto ring-2 ring-emerald-400/30"
// // // // // //                         />
// // // // // //                         <CheckCircle2
// // // // // //                           size={16}
// // // // // //                           className="text-emerald-500 bg-white rounded-full absolute bottom-0 right-0 fill-emerald-500 text-white"
// // // // // //                         />
// // // // // //                       </div>

// // // // // //                       <h3 className="font-bold text-gray-900 text-sm">{mentor.name}</h3>
// // // // // //                       <p className="text-emerald-600 text-[11px] font-medium">{mentor.role}</p>

// // // // // //                       {/* Ratings */}
// // // // // //                       <div className="flex items-center justify-center gap-1 text-[11px] mt-1.5 text-gray-600">
// // // // // //                         <Star size={12} fill="#eab308" className="text-yellow-500" />
// // // // // //                         <span className="font-bold text-gray-800">{mentor.rating}</span>
// // // // // //                         <span>({mentor.reviewsCount})</span>
// // // // // //                         <span className="text-gray-300">•</span>
// // // // // //                         <span>{mentor.studentsCount} Students</span>
// // // // // //                       </div>

// // // // // //                       {/* Experience Badge */}
// // // // // //                       <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full mt-2">
// // // // // //                         <Clock size={10} />
// // // // // //                         <span>{mentor.experienceYears}+ Years Experience</span>
// // // // // //                       </div>

// // // // // //                       {/* Specialization / Expertise */}
// // // // // //                       <p className="text-[10px] text-gray-500 mt-2 line-clamp-2 px-1">
// // // // // //                         <strong className="text-gray-700">Expert in:</strong> {mentor.specializationText}
// // // // // //                       </p>

// // // // // //                       {/* Tags */}
// // // // // //                       <div className="flex flex-wrap justify-center gap-1 mt-2.5">
// // // // // //                         {mentor.tags.map((tag) => (
// // // // // //                           <span
// // // // // //                             key={tag}
// // // // // //                             className="bg-purple-50 text-purple-600 text-[9px] font-medium px-2 py-0.5 rounded"
// // // // // //                           >
// // // // // //                             {tag}
// // // // // //                           </span>
// // // // // //                         ))}
// // // // // //                       </div>

// // // // // //                       {/* Pricing Table */}
// // // // // //                       <div className="grid grid-cols-2 gap-2 my-3 pt-2 border-t border-dashed border-gray-200 text-left">
// // // // // //                         <div className="bg-gray-50 p-1.5 rounded">
// // // // // //                           <p className="text-[9px] text-gray-400">Online Classes</p>
// // // // // //                           <p className="text-[9px] text-gray-400">(1:1 Live Teaching)</p>
// // // // // //                           <p className="font-bold text-emerald-600 text-xs mt-0.5">
// // // // // //                             ₹{mentor.hourlyRate} <span className="text-[9px] font-normal text-gray-500">/ hour</span>
// // // // // //                           </p>
// // // // // //                         </div>
// // // // // //                         <div className="bg-gray-50 p-1.5 rounded">
// // // // // //                           <p className="text-[9px] text-gray-400">Guidance Only</p>
// // // // // //                           <p className="text-[9px] text-gray-400">(Mentorship)</p>
// // // // // //                           <p className="font-bold text-emerald-600 text-xs mt-0.5">
// // // // // //                             ₹{mentor.sessionRate} <span className="text-[9px] font-normal text-gray-500">/ session</span>
// // // // // //                           </p>
// // // // // //                         </div>
// // // // // //                       </div>

// // // // // //                       {/* CTA Buttons */}
// // // // // //                       <div className="grid grid-cols-2 gap-2">
// // // // // //                         <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-1.5 rounded-lg text-[11px] transition">
// // // // // //                           View Profile
// // // // // //                         </button>
// // // // // //                         <button className="w-full bg-orange-500 text-white hover:bg-orange-600 font-semibold py-1.5 rounded-lg text-[11px] transition shadow-sm">
// // // // // //                           Book Session
// // // // // //                         </button>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 );
// // // // // //               })}
// // // // // //             </div>

// // // // // //             {/* Pagination */}
// // // // // //             <div className="flex justify-center items-center gap-1 pt-4 pb-2">
// // // // // //               <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronLeft size={14} /></button>
// // // // // //               <button className="w-6 h-6 rounded bg-orange-500 text-white font-medium text-xs flex items-center justify-center">1</button>
// // // // // //               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">2</button>
// // // // // //               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">3</button>
// // // // // //               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">4</button>
// // // // // //               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">5</button>
// // // // // //               <span className="px-1 text-gray-400 text-xs">...</span>
// // // // // //               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">14</button>
// // // // // //               <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronRight size={14} /></button>
// // // // // //             </div>

// // // // // //             {/* "Can't find the right mentor?" Banner */}
// // // // // //             <div className="bg-red-50/60 border border-red-100 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
// // // // // //               <div className="flex items-center gap-3">
// // // // // //                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
// // // // // //                   <MessageSquare size={20} />
// // // // // //                 </div>
// // // // // //                 <div>
// // // // // //                   <h3 className="font-bold text-gray-900 text-sm">Can't find the right mentor?</h3>
// // // // // //                   <p className="text-gray-600 text-xs">Tell us your requirements and we'll match you with the perfect mentor for your goals.</p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition flex-shrink-0">
// // // // // //                 Request a Mentor <ChevronRight size={14} />
// // // // // //               </button>
// // // // // //             </div>

// // // // // //             {/* Bottom Footer Trust Badges */}
// // // // // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t text-center text-[11px] text-gray-600">
// // // // // //               <div className="flex items-center justify-center gap-2">
// // // // // //                 <ShieldCheck size={18} className="text-orange-500" />
// // // // // //                 <div className="text-left">
// // // // // //                   <p className="font-semibold text-gray-800">100% Verified Mentors</p>
// // // // // //                   <p className="text-gray-400 text-[10px]">Qualified & background verified</p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <div className="flex items-center justify-center gap-2">
// // // // // //                 <Lock size={18} className="text-orange-500" />
// // // // // //                 <div className="text-left">
// // // // // //                   <p className="font-semibold text-gray-800">Safe & Secure Sessions</p>
// // // // // //                   <p className="text-gray-400 text-[10px]">Your privacy is our priority</p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <div className="flex items-center justify-center gap-2">
// // // // // //                 <Calendar size={18} className="text-orange-500" />
// // // // // //                 <div className="text-left">
// // // // // //                   <p className="font-semibold text-gray-800">Flexible Scheduling</p>
// // // // // //                   <p className="text-gray-400 text-[10px]">Learn at your convenient time</p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <div className="flex items-center justify-center gap-2">
// // // // // //                 <Headphones size={18} className="text-orange-500" />
// // // // // //                 <div className="text-left">
// // // // // //                   <p className="font-semibold text-gray-800">24/7 Support</p>
// // // // // //                   <p className="text-gray-400 text-[10px]">We're here to help you anytime</p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //           </main>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }




// // // // // import React, { useState } from 'react';
// // // // // import { 
// // // // //   Search, Star, Heart, Clock, ShieldCheck, 
// // // // //   Users, CheckCircle2, ChevronRight, ChevronLeft, X, 
// // // // //   Info, Grid, List, MessageSquare, Headphones, 
// // // // //   Calendar, Lock, ChevronDown, RotateCcw, Filter
// // // // // } from 'lucide-react';
// // // // // import Banner from './components/Banner';

// // // // // // --- TYPES ---
// // // // // interface Mentor {
// // // // //   id: number;
// // // // //   name: string;
// // // // //   role: string;
// // // // //   expertise: string;
// // // // //   image: string;
// // // // //   rating: number;
// // // // //   reviewsCount: number;
// // // // //   studentsCount: string;
// // // // //   experienceYears: number;
// // // // //   tags: string[];
// // // // //   hourlyRate: number;
// // // // //   sessionRate: number;
// // // // //   specializationText: string;
// // // // //   isAvailable: boolean;
// // // // // }

// // // // // // --- MOCK DATA ---
// // // // // const INITIAL_MENTORS: Mentor[] = [
// // // // //   {
// // // // //     id: 1,
// // // // //     name: 'Dr. Arjun Mehta',
// // // // //     role: 'NEET Expert – Physics',
// // // // //     expertise: 'Mechanics, Optics, Electrostatics, Modern Physics',
// // // // //     image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
// // // // //     rating: 4.9,
// // // // //     reviewsCount: 256,
// // // // //     studentsCount: '12,500+',
// // // // //     experienceYears: 8,
// // // // //     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
// // // // //     hourlyRate: 800,
// // // // //     sessionRate: 499,
// // // // //     specializationText: 'Mechanics, Optics, Electrostatics, Modern Physics',
// // // // //     isAvailable: true,
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     name: 'Dr. Priya Sharma',
// // // // //     role: 'NEET Expert – Chemistry',
// // // // //     expertise: 'Organic, Inorganic, Physical Chemistry',
// // // // //     image: 'https://images.unsplash.com/photo-1594824813566-82823d5afe4a?w=400&auto=format&fit=crop&q=80',
// // // // //     rating: 4.9,
// // // // //     reviewsCount: 198,
// // // // //     studentsCount: '9,800+',
// // // // //     experienceYears: 7,
// // // // //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// // // // //     hourlyRate: 700,
// // // // //     sessionRate: 449,
// // // // //     specializationText: 'Organic, Inorganic, Physical Chemistry',
// // // // //     isAvailable: true,
// // // // //   },
// // // // //   {
// // // // //     id: 3,
// // // // //     name: 'Dr. Neha Singh',
// // // // //     role: 'NEET Expert – Botany',
// // // // //     expertise: 'Plant Physiology, Genetics, Ecology, Biotechnology',
// // // // //     image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80',
// // // // //     rating: 4.8,
// // // // //     reviewsCount: 210,
// // // // //     studentsCount: '9,900+',
// // // // //     experienceYears: 6,
// // // // //     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
// // // // //     hourlyRate: 600,
// // // // //     sessionRate: 399,
// // // // //     specializationText: 'Plant Physiology, Genetics, Ecology, Biotechnology',
// // // // //     isAvailable: true,
// // // // //   },
// // // // //   {
// // // // //     id: 4,
// // // // //     name: 'Dr. Karan Verma',
// // // // //     role: 'NEET Expert – Zoology',
// // // // //     expertise: 'Human Physiology, Genetics, Animal Kingdom',
// // // // //     image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80',
// // // // //     rating: 4.8,
// // // // //     reviewsCount: 176,
// // // // //     studentsCount: '7,600+',
// // // // //     experienceYears: 7,
// // // // //     tags: ['Tutor', 'Homework Helper', 'Mentorship'],
// // // // //     hourlyRate: 650,
// // // // //     sessionRate: 449,
// // // // //     specializationText: 'Human Physiology, Genetics, Animal Kingdom',
// // // // //     isAvailable: true,
// // // // //   },
// // // // //   {
// // // // //     id: 5,
// // // // //     name: 'Dr. Ayesha Khan',
// // // // //     role: 'NEET Expert – Physics',
// // // // //     expertise: 'Electrostatics, Current Electricity, Waves',
// // // // //     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
// // // // //     rating: 4.7,
// // // // //     reviewsCount: 154,
// // // // //     studentsCount: '6,200+',
// // // // //     experienceYears: 5,
// // // // //     tags: ['Tutor', 'Doubt Solver', 'Homework Helper'],
// // // // //     hourlyRate: 600,
// // // // //     sessionRate: 399,
// // // // //     specializationText: 'Electrostatics, Current Electricity, Waves',
// // // // //     isAvailable: true,
// // // // //   },
// // // // //   {
// // // // //     id: 6,
// // // // //     name: 'Dr. Rohan Iyer',
// // // // //     role: 'NEET Expert – Chemistry',
// // // // //     expertise: 'Chemical Bonding, Thermodynamics, Solutions',
// // // // //     image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80',
// // // // //     rating: 4.7,
// // // // //     reviewsCount: 132,
// // // // //     studentsCount: '5,400+',
// // // // //     experienceYears: 6,
// // // // //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// // // // //     hourlyRate: 550,
// // // // //     sessionRate: 379,
// // // // //     specializationText: 'Chemical Bonding, Thermodynamics, Solutions',
// // // // //     isAvailable: true,
// // // // //   },
// // // // //   {
// // // // //     id: 7,
// // // // //     name: 'Dr. Meera Nair',
// // // // //     role: 'NEET Expert – Botany',
// // // // //     expertise: 'Cell Biology, Ecology, Plant Diversity',
// // // // //     image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&auto=format&fit=crop&q=80',
// // // // //     rating: 4.6,
// // // // //     reviewsCount: 122,
// // // // //     studentsCount: '4,900+',
// // // // //     experienceYears: 5,
// // // // //     tags: ['Tutor', 'Doubt Solver', 'Mentorship'],
// // // // //     hourlyRate: 500,
// // // // //     sessionRate: 349,
// // // // //     specializationText: 'Cell Biology, Ecology, Plant Diversity',
// // // // //     isAvailable: true,
// // // // //   },
// // // // //   {
// // // // //     id: 8,
// // // // //     name: 'Dr. Vivek Joshi',
// // // // //     role: 'NEET Expert – Zoology',
// // // // //     expertise: 'Animal Physiology, Evolution, Biotechnology',
// // // // //     image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=80',
// // // // //     rating: 4.6,
// // // // //     reviewsCount: 118,
// // // // //     studentsCount: '4,300+',
// // // // //     experienceYears: 6,
// // // // //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// // // // //     hourlyRate: 550,
// // // // //     sessionRate: 379,
// // // // //     specializationText: 'Animal Physiology, Evolution, Biotechnology',
// // // // //     isAvailable: true,
// // // // //   },
// // // // // ];

// // // // // export default function MentorsPage() {
// // // // //   const [favorites, setFavorites] = useState<number[]>([]);
// // // // //   const [activeFilters, setActiveFilters] = useState<string[]>([
// // // // //     'NEET',
// // // // //     'Physics',
// // // // //     'Both Teaching + Guidance',
// // // // //     'Available Now',
// // // // //   ]);

// // // // //   // Sidebar dynamic filter state management
// // // // //   const [selectedExam, setSelectedExam] = useState<string>('NEET');
// // // // //   const [selectedExamsList, setSelectedExamsList] = useState<string[]>(['JEE Main']);
// // // // //   const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Physics', 'Chemistry', 'Botany', 'Zoology']);
// // // // //   const [selectedServices, setSelectedServices] = useState<string[]>(['Online Classes / Tutor', 'Mentorship & Guidance']);
// // // // //   const [guidanceMode, setGuidanceMode] = useState<string>('Both Teaching + Guidance');
// // // // //   const [teachingFeeMax, setTeachingFeeMax] = useState<number>(5000);
// // // // //   const [guidanceFeeMax, setGuidanceFeeMax] = useState<number>(5000);
// // // // //   const [experienceLevel, setExperienceLevel] = useState<string>('5+ Years');

// // // // //   // Toggle Favorite
// // // // //   const toggleFavorite = (id: number) => {
// // // // //     setFavorites((prev) =>
// // // // //       prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
// // // // //     );
// // // // //   };

// // // // //   // Filter actions
// // // // //   const removeFilter = (filter: string) => {
// // // // //     setActiveFilters((prev) => prev.filter((f) => f !== filter));
// // // // //   };

// // // // //   const handleCheckboxToggle = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
// // // // //     if (list.includes(item)) {
// // // // //       setList(list.filter((i) => i !== item));
// // // // //     } else {
// // // // //       setList([...list, item]);
// // // // //     }
// // // // //   };

// // // // //   const clearAllFilters = () => {
// // // // //     setActiveFilters([]);
// // // // //     setSelectedExamsList([]);
// // // // //     setSelectedSubjects([]);
// // // // //     setSelectedServices([]);
// // // // //     setTeachingFeeMax(5000);
// // // // //     setGuidanceFeeMax(5000);
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs">
// // // // //       {/* Top Banner Component */}
// // // // //       <Banner />

// // // // //       {/* Main Container - Extended to Full Screen / Extra Wide Canvas */}
// // // // //       <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        
// // // // //         {/* Breadcrumb Navigation */}
// // // // //         <nav className="text-gray-400 text-xs mb-4 flex items-center gap-1.5 font-medium">
// // // // //           <span className="hover:text-orange-500 cursor-pointer transition">Home</span>
// // // // //           <span>&gt;</span>
// // // // //           <span className="hover:text-orange-500 cursor-pointer transition">Mentorship</span>
// // // // //           <span>&gt;</span>
// // // // //           <span className="text-gray-800 font-semibold">All Mentors</span>
// // // // //         </nav>

// // // // //         <div className="flex flex-col lg:flex-row gap-6 items-start">
          
// // // // //           {/* ================= COMPLETE & ENHANCED SIDEBAR FILTERS ================= */}
// // // // //           <aside className="w-full lg:w-72 flex-shrink-0 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-5 sticky top-4">
            
// // // // //             {/* Filter Header */}
// // // // //             <div className="flex justify-between items-center pb-3 border-b border-gray-100">
// // // // //               <div className="flex items-center gap-2">
// // // // //                 <Filter size={16} className="text-orange-500" />
// // // // //                 <h2 className="font-bold text-sm text-gray-900">Filter Mentors</h2>
// // // // //               </div>
// // // // //               <button 
// // // // //                 onClick={clearAllFilters} 
// // // // //                 className="text-orange-500 font-medium text-xs hover:underline flex items-center gap-1"
// // // // //               >
// // // // //                 <RotateCcw size={11} /> Clear All
// // // // //               </button>
// // // // //             </div>

// // // // //             {/* 1. Primary Category Select */}
// // // // //             <div>
// // // // //               <div className="flex items-center justify-between font-semibold text-gray-800 mb-2">
// // // // //                 <label className="flex items-center gap-1">
// // // // //                   <span>1. Primary Target Exam</span>
// // // // //                   <Info size={12} className="text-gray-400" />
// // // // //                 </label>
// // // // //               </div>
// // // // //               <select 
// // // // //                 value={selectedExam}
// // // // //                 onChange={(e) => setSelectedExam(e.target.value)}
// // // // //                 className="w-full border border-gray-200 rounded-lg p-2.5 text-xs text-gray-700 bg-gray-50/50 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition"
// // // // //               >
// // // // //                 <option value="NEET">NEET (Medical)</option>
// // // // //                 <option value="JEE Main">JEE Main (Engineering)</option>
// // // // //                 <option value="JEE Advanced">JEE Advanced</option>
// // // // //                 <option value="CUET">CUET</option>
// // // // //                 <option value="Class 11-12">Class 11 - 12 Board</option>
// // // // //               </select>
// // // // //             </div>

// // // // //             {/* 2. Other Target Exams */}
// // // // //             <div className="pt-3 border-t border-gray-100">
// // // // //               <div className="flex items-center gap-1 font-semibold text-gray-800 mb-2">
// // // // //                 <span>2. Other Target Exams</span>
// // // // //               </div>
// // // // //               <div className="space-y-2 max-h-40 overflow-y-auto pr-1 custom-scrollbar">
// // // // //                 {['JEE Main', 'JEE Advanced', 'Class 11 - 12', 'Class 6 - 10', 'CUET', 'Olympiad', 'Boards', 'KVPY'].map((item) => (
// // // // //                   <label key={item} className="flex items-center gap-2.5 text-gray-600 cursor-pointer hover:text-gray-900 transition">
// // // // //                     <input 
// // // // //                       type="checkbox" 
// // // // //                       checked={selectedExamsList.includes(item)}
// // // // //                       onChange={() => handleCheckboxToggle(item, selectedExamsList, setSelectedExamsList)}
// // // // //                       className="rounded border-gray-300 text-orange-500 focus:ring-orange-500 accent-orange-500 w-3.5 h-3.5 cursor-pointer" 
// // // // //                     />
// // // // //                     <span>{item}</span>
// // // // //                   </label>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* 3. Subject Selection */}
// // // // //             <div className="pt-3 border-t border-gray-100">
// // // // //               <div className="flex items-center justify-between font-semibold text-gray-800 mb-2">
// // // // //                 <span className="flex items-center gap-1">
// // // // //                   <span>3. Subjects ({selectedExam})</span>
// // // // //                   <Info size={12} className="text-gray-400" />
// // // // //                 </span>
// // // // //                 <span className="text-[10px] text-orange-500 cursor-pointer hover:underline" onClick={() => setSelectedSubjects(['Physics', 'Chemistry', 'Botany', 'Zoology'])}>Select All</span>
// // // // //               </div>
// // // // //               <div className="space-y-2">
// // // // //                 {['Physics', 'Chemistry', 'Botany', 'Zoology'].map((sub) => (
// // // // //                   <label key={sub} className="flex items-center gap-2.5 text-gray-600 cursor-pointer hover:text-gray-900 transition">
// // // // //                     <input 
// // // // //                       type="checkbox" 
// // // // //                       checked={selectedSubjects.includes(sub)}
// // // // //                       onChange={() => handleCheckboxToggle(sub, selectedSubjects, setSelectedSubjects)}
// // // // //                       className="rounded border-gray-300 accent-orange-500 w-3.5 h-3.5 cursor-pointer" 
// // // // //                     />
// // // // //                     <span>{sub}</span>
// // // // //                   </label>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* 4. Service Type */}
// // // // //             <div className="pt-3 border-t border-gray-100">
// // // // //               <div className="flex items-center gap-1 font-semibold text-gray-800 mb-2">
// // // // //                 <span>4. Service Offering</span>
// // // // //                 <Info size={12} className="text-gray-400" />
// // // // //               </div>
// // // // //               <div className="space-y-2">
// // // // //                 {[
// // // // //                   { name: 'Online Classes / Tutor', count: 512 },
// // // // //                   { name: 'Mentorship & Guidance', count: 438 },
// // // // //                   { name: 'Homework Helper', count: 286 },
// // // // //                   { name: '1:1 Doubt Solving', count: 324 },
// // // // //                   { name: 'Test Preparation', count: 412 },
// // // // //                   { name: 'College Counselling', count: 196 },
// // // // //                 ].map((item) => (
// // // // //                   <label key={item.name} className="flex items-center justify-between text-gray-600 cursor-pointer hover:text-gray-900 transition">
// // // // //                     <div className="flex items-center gap-2.5">
// // // // //                       <input 
// // // // //                         type="checkbox" 
// // // // //                         checked={selectedServices.includes(item.name)}
// // // // //                         onChange={() => handleCheckboxToggle(item.name, selectedServices, setSelectedServices)}
// // // // //                         className="rounded border-gray-300 accent-orange-500 w-3.5 h-3.5 cursor-pointer" 
// // // // //                       />
// // // // //                       <span>{item.name}</span>
// // // // //                     </div>
// // // // //                     <span className="text-gray-400 text-[10px] bg-gray-50 px-1.5 py-0.5 rounded-full">({item.count})</span>
// // // // //                   </label>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* 5. Teaching / Guidance Mode */}
// // // // //             <div className="pt-3 border-t border-gray-100">
// // // // //               <div className="flex items-center gap-1 font-semibold text-gray-800 mb-2">
// // // // //                 <span>5. Teaching & Mentoring Mode</span>
// // // // //               </div>
// // // // //               <div className="space-y-2">
// // // // //                 {['Online Teaching Only', 'Guidance Only', 'Both Teaching + Guidance','Available Local Tutor'].map((mode) => (
// // // // //                   <label key={mode} className="flex items-center gap-2.5 text-gray-600 cursor-pointer hover:text-gray-900 transition">
// // // // //                     <input 
// // // // //                       type="radio" 
// // // // //                       name="mode" 
// // // // //                       checked={guidanceMode === mode}
// // // // //                       onChange={() => setGuidanceMode(mode)}
// // // // //                       className="accent-orange-500 w-3.5 h-3.5 cursor-pointer" 
// // // // //                     />
// // // // //                     <span>{mode}</span>
// // // // //                   </label>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* 6. Experience Level */}
// // // // //             <div className="pt-3 border-t border-gray-100">
// // // // //               <div className="flex items-center gap-1 font-semibold text-gray-800 mb-2">
// // // // //                 <span>6. Experience Level</span>
// // // // //               </div>
// // // // //               <div className="grid grid-cols-2 gap-2">
// // // // //                 {['1-3 Years', '3-5 Years', '5+ Years', '10+ Years'].map((exp) => (
// // // // //                   <button
// // // // //                     key={exp}
// // // // //                     type="button"
// // // // //                     onClick={() => setExperienceLevel(exp)}
// // // // //                     className={`py-1.5 px-2 rounded-lg text-[11px] font-medium border transition ${
// // // // //                       experienceLevel === exp 
// // // // //                         ? 'bg-orange-50 border-orange-500 text-orange-600' 
// // // // //                         : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
// // // // //                     }`}
// // // // //                   >
// // // // //                     {exp}
// // // // //                   </button>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* 7. Price Filter Ranges */}
// // // // //             <div className="pt-3 border-t border-gray-100">
// // // // //               <div className="flex items-center gap-1 font-semibold text-gray-800 mb-2">
// // // // //                 <span>7. Pricing Budget</span>
// // // // //               </div>
              
// // // // //               <div className="space-y-3">
// // // // //                 <div>
// // // // //                   <div className="flex justify-between text-[11px] text-gray-500 mb-1">
// // // // //                     <span>Teaching Fee (₹/hr)</span>
// // // // //                     <span className="font-semibold text-gray-700">Max: ₹{teachingFeeMax}</span>
// // // // //                   </div>
// // // // //                   <input 
// // // // //                     type="range" 
// // // // //                     min="300" 
// // // // //                     max="5000" 
// // // // //                     step="100" 
// // // // //                     value={teachingFeeMax} 
// // // // //                     onChange={(e) => setTeachingFeeMax(Number(e.target.value))}
// // // // //                     className="w-full accent-orange-500 h-1.5 bg-gray-200 rounded-lg cursor-pointer" 
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div>
// // // // //                   <div className="flex justify-between text-[11px] text-gray-500 mb-1">
// // // // //                     <span>Guidance Fee (₹/session)</span>
// // // // //                     <span className="font-semibold text-gray-700">Max: ₹{guidanceFeeMax}</span>
// // // // //                   </div>
// // // // //                   <input 
// // // // //                     type="range" 
// // // // //                     min="200" 
// // // // //                     max="5000" 
// // // // //                     step="100" 
// // // // //                     value={guidanceFeeMax} 
// // // // //                     onChange={(e) => setGuidanceFeeMax(Number(e.target.value))}
// // // // //                     className="w-full accent-orange-500 h-1.5 bg-gray-200 rounded-lg cursor-pointer" 
// // // // //                   />
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Apply Filters Action Buttons */}
// // // // //             <div className="pt-4 border-t border-gray-100 space-y-2">
// // // // //               <button className="w-full bg-orange-500 text-white font-semibold py-2.5 rounded-xl shadow-sm hover:bg-orange-600 active:scale-[0.98] transition">
// // // // //                 Apply Selected Filters
// // // // //               </button>
// // // // //               <button 
// // // // //                 onClick={clearAllFilters} 
// // // // //                 className="w-full text-center text-gray-500 hover:text-gray-700 font-medium py-1 transition"
// // // // //               >
// // // // //                 Reset All Filters
// // // // //               </button>
// // // // //             </div>
// // // // //           </aside>

// // // // //           {/* ================= MAIN CONTENT AREA ================= */}
// // // // //           <main className="flex-1 space-y-6 w-full">
            
// // // // //             {/* Title & View Configuration Header */}
// // // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
// // // // //               <div>
// // // // //                 <h1 className="text-2xl font-bold text-orange-500 flex items-center gap-2.5">
// // // // //                   All Mentors
// // // // //                   <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
// // // // //                     326 Mentors Available
// // // // //                   </span>
// // // // //                 </h1>
// // // // //                 <p className="text-gray-500 text-xs mt-1">
// // // // //                   Connect with India's top verified mentors for live 1:1 teaching, doubts, and career strategy.
// // // // //                 </p>
// // // // //               </div>

// // // // //               {/* Sorting & Layout Toggles */}
// // // // //               <div className="flex items-center gap-3 self-end sm:self-auto">
// // // // //                 <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5">
// // // // //                   <span className="text-gray-500 font-medium text-xs">Sort By:</span>
// // // // //                   <select className="bg-transparent text-xs text-gray-800 font-semibold focus:outline-none cursor-pointer">
// // // // //                     <option>Recommended</option>
// // // // //                     <option>Rating: High to Low</option>
// // // // //                     <option>Price: Low to High</option>
// // // // //                     <option>Price: High to Low</option>
// // // // //                     <option>Experience: High to Low</option>
// // // // //                   </select>
// // // // //                 </div>

// // // // //                 <div className="flex border rounded-xl bg-gray-50 p-1 border-gray-200">
// // // // //                   <button className="p-1.5 bg-orange-500 text-white rounded-lg shadow-sm"><Grid size={15} /></button>
// // // // //                   <button className="p-1.5 text-gray-400 hover:text-gray-600"><List size={15} /></button>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Active Filters Bar */}
// // // // //             {activeFilters.length > 0 && (
// // // // //               <div className="flex flex-wrap items-center gap-2 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
// // // // //                 <span className="font-semibold text-gray-600 text-xs mr-1">Active Filters:</span>
// // // // //                 {activeFilters.map((filter) => (
// // // // //                   <span
// // // // //                     key={filter}
// // // // //                     className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-50/60 border border-orange-200/60 text-orange-700 font-medium text-[11px] rounded-full"
// // // // //                   >
// // // // //                     {filter}
// // // // //                     <X
// // // // //                       size={12}
// // // // //                       className="cursor-pointer hover:text-red-500 transition"
// // // // //                       onClick={() => removeFilter(filter)}
// // // // //                     />
// // // // //                   </span>
// // // // //                 ))}
// // // // //                 <button
// // // // //                   onClick={clearAllFilters}
// // // // //                   className="text-orange-500 text-xs font-semibold hover:underline ml-2"
// // // // //                 >
// // // // //                   Clear All
// // // // //                 </button>
// // // // //               </div>
// // // // //             )}

// // // // //             {/* Mentors Grid - Fully Responsive Layout (Up to 4 columns on desktop) */}
// // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
// // // // //               {INITIAL_MENTORS.map((mentor) => {
// // // // //                 const isFav = favorites.includes(mentor.id);
// // // // //                 return (
// // // // //                   <div
// // // // //                     key={mentor.id}
// // // // //                     className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden relative group"
// // // // //                   >
// // // // //                     {/* Top Status Badge & Favorite */}
// // // // //                     <div className="p-3.5 pb-0 flex items-center justify-between">
// // // // //                       <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">
// // // // //                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
// // // // //                         Available Now
// // // // //                       </span>
// // // // //                       <button
// // // // //                         onClick={() => toggleFavorite(mentor.id)}
// // // // //                         className="p-1.5 rounded-full bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 transition"
// // // // //                       >
// // // // //                         <Heart
// // // // //                           size={15}
// // // // //                           fill={isFav ? '#ef4444' : 'none'}
// // // // //                           className={isFav ? 'text-red-500' : ''}
// // // // //                         />
// // // // //                       </button>
// // // // //                     </div>

// // // // //                     {/* Mentor Profile Information */}
// // // // //                     <div className="p-4 text-center flex-1 flex flex-col items-center">
// // // // //                       <div className="relative inline-block mb-3">
// // // // //                         <img
// // // // //                           src={mentor.image}
// // // // //                           alt={mentor.name}
// // // // //                           className="w-18 h-18 w-16 h-16 rounded-full object-cover ring-4 ring-emerald-500/10 group-hover:scale-105 transition duration-300"
// // // // //                         />
// // // // //                         <CheckCircle2
// // // // //                           size={18}
// // // // //                           className="text-emerald-500 bg-white rounded-full absolute bottom-0 right-0 fill-emerald-500 text-white shadow-sm"
// // // // //                         />
// // // // //                       </div>

// // // // //                       <h3 className="font-bold text-gray-900 text-sm hover:text-orange-500 cursor-pointer transition">{mentor.name}</h3>
// // // // //                       <p className="text-emerald-600 text-[11px] font-semibold mt-0.5">{mentor.role}</p>

// // // // //                       {/* Rating Badges */}
// // // // //                       <div className="flex items-center justify-center gap-1 text-[11px] mt-2 text-gray-600">
// // // // //                         <Star size={13} fill="#eab308" className="text-yellow-500" />
// // // // //                         <span className="font-bold text-gray-900">{mentor.rating}</span>
// // // // //                         <span className="text-gray-400">({mentor.reviewsCount})</span>
// // // // //                         <span className="text-gray-300">•</span>
// // // // //                         <span className="font-medium text-gray-700">{mentor.studentsCount} Students</span>
// // // // //                       </div>

// // // // //                       {/* Experience Indicator */}
// // // // //                       <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-medium px-2.5 py-1 rounded-full mt-2.5">
// // // // //                         <Clock size={11} className="text-gray-400" />
// // // // //                         <span>{mentor.experienceYears}+ Years Experience</span>
// // // // //                       </div>

// // // // //                       {/* Expertise / Specialization */}
// // // // //                       <p className="text-[11px] text-gray-500 mt-3 line-clamp-2 leading-relaxed px-1">
// // // // //                         <strong className="text-gray-700 font-semibold">Expertise:</strong> {mentor.specializationText}
// // // // //                       </p>

// // // // //                       {/* Tag List */}
// // // // //                       <div className="flex flex-wrap justify-center gap-1 mt-3">
// // // // //                         {mentor.tags.map((tag) => (
// // // // //                           <span
// // // // //                             key={tag}
// // // // //                             className="bg-purple-50 text-purple-600 border border-purple-100 text-[9px] font-semibold px-2 py-0.5 rounded-md"
// // // // //                           >
// // // // //                             {tag}
// // // // //                           </span>
// // // // //                         ))}
// // // // //                       </div>

// // // // //                       {/* Dual Pricing Breakdown Box */}
// // // // //                       <div className="w-full grid grid-cols-2 gap-2 my-3 pt-3 border-t border-dashed border-gray-200 text-left mt-auto">
// // // // //                         <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
// // // // //                           <p className="text-[9px] font-semibold text-gray-500 uppercase tracking-tight">Live Class</p>
// // // // //                           <p className="text-[9px] text-gray-400">(1:1 Teaching)</p>
// // // // //                           <p className="font-bold text-emerald-600 text-xs mt-1">
// // // // //                             ₹{mentor.hourlyRate} <span className="text-[9px] font-normal text-gray-500">/hr</span>
// // // // //                           </p>
// // // // //                         </div>
// // // // //                         <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
// // // // //                           <p className="text-[9px] font-semibold text-gray-500 uppercase tracking-tight">Guidance</p>
// // // // //                           <p className="text-[9px] text-gray-400">(Mentorship)</p>
// // // // //                           <p className="font-bold text-emerald-600 text-xs mt-1">
// // // // //                             ₹{mentor.sessionRate} <span className="text-[9px] font-normal text-gray-500">/sess</span>
// // // // //                           </p>
// // // // //                         </div>
// // // // //                       </div>

// // // // //                       {/* Action CTA Buttons */}
// // // // //                       <div className="w-full grid grid-cols-2 gap-2 pt-1">
// // // // //                         <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-2 rounded-xl text-[11px] transition">
// // // // //                           View Profile
// // // // //                         </button>
// // // // //                         <button className="w-full bg-orange-500 text-white hover:bg-orange-600 font-semibold py-2 rounded-xl text-[11px] transition shadow-sm active:scale-[0.98]">
// // // // //                           Book Session
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 );
// // // // //               })}
// // // // //             </div>

// // // // //             {/* Pagination Controls */}
// // // // //             <div className="flex justify-center items-center gap-1.5 pt-6 pb-2">
// // // // //               <button className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 transition"><ChevronLeft size={16} /></button>
// // // // //               <button className="w-7 h-7 rounded-lg bg-orange-500 text-white font-bold text-xs flex items-center justify-center shadow-sm">1</button>
// // // // //               <button className="w-7 h-7 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center transition">2</button>
// // // // //               <button className="w-7 h-7 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center transition">3</button>
// // // // //               <button className="w-7 h-7 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center transition">4</button>
// // // // //               <span className="px-1 text-gray-400 text-xs">...</span>
// // // // //               <button className="w-7 h-7 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center transition">14</button>
// // // // //               <button className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 transition"><ChevronRight size={16} /></button>
// // // // //             </div>

// // // // //             {/* Custom Mentor Request Section */}
// // // // //             <div className="bg-gradient-to-r from-orange-50/80 via-amber-50/50 to-orange-50/80 border border-orange-100 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
// // // // //               <div className="flex items-center gap-4">
// // // // //                 <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
// // // // //                   <MessageSquare size={22} />
// // // // //                 </div>
// // // // //                 <div>
// // // // //                   <h3 className="font-bold text-gray-900 text-sm">Can't find the exact mentor you need?</h3>
// // // // //                   <p className="text-gray-600 text-xs mt-0.5">Share your specific exam requirements and we'll connect you with a custom mentor match within 24 hours.</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition shadow-sm whitespace-nowrap active:scale-[0.98]">
// // // // //                 Request Custom Mentor <ChevronRight size={15} />
// // // // //               </button>
// // // // //             </div>

           

// // // // //           </main>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // import React, { useState } from 'react';
// // // // import { 
// // // //   Search, Star, Heart, Clock, ShieldCheck, 
// // // //   Users, CheckCircle2, ChevronRight, ChevronLeft, X, 
// // // //   Info, Grid, List, MessageSquare, Headphones, 
// // // //   Calendar, Lock, RotateCcw, Filter, SlidersHorizontal, Zap
// // // // } from 'lucide-react';
// // // // import Banner from './components/Banner';

// // // // // --- TYPES ---
// // // // interface Mentor {
// // // //   id: number;
// // // //   name: string;
// // // //   role: string;
// // // //   expertise: string;
// // // //   image: string;
// // // //   rating: number;
// // // //   reviewsCount: number;
// // // //   studentsCount: string;
// // // //   experienceYears: number;
// // // //   tags: string[];
// // // //   hourlyRate: number;
// // // //   sessionRate: number;
// // // //   specializationText: string;
// // // //   isAvailable: boolean;
// // // // }

// // // // // --- MOCK DATA ---
// // // // const INITIAL_MENTORS: Mentor[] = [
// // // //   {
// // // //     id: 1,
// // // //     name: 'Dr. Arjun Mehta',
// // // //     role: 'NEET Expert – Physics',
// // // //     expertise: 'Mechanics, Optics, Electrostatics, Modern Physics',
// // // //     image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
// // // //     rating: 4.9,
// // // //     reviewsCount: 256,
// // // //     studentsCount: '12,500+',
// // // //     experienceYears: 8,
// // // //     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
// // // //     hourlyRate: 800,
// // // //     sessionRate: 499,
// // // //     specializationText: 'Mechanics, Optics, Electrostatics, Modern Physics',
// // // //     isAvailable: true,
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: 'Dr. Priya Sharma',
// // // //     role: 'NEET Expert – Chemistry',
// // // //     expertise: 'Organic, Inorganic, Physical Chemistry',
// // // //     image: 'https://images.unsplash.com/photo-1594824813566-82823d5afe4a?w=400&auto=format&fit=crop&q=80',
// // // //     rating: 4.9,
// // // //     reviewsCount: 198,
// // // //     studentsCount: '9,800+',
// // // //     experienceYears: 7,
// // // //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// // // //     hourlyRate: 700,
// // // //     sessionRate: 449,
// // // //     specializationText: 'Organic, Inorganic, Physical Chemistry',
// // // //     isAvailable: true,
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     name: 'Dr. Neha Singh',
// // // //     role: 'NEET Expert – Botany',
// // // //     expertise: 'Plant Physiology, Genetics, Ecology, Biotechnology',
// // // //     image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80',
// // // //     rating: 4.8,
// // // //     reviewsCount: 210,
// // // //     studentsCount: '9,900+',
// // // //     experienceYears: 6,
// // // //     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
// // // //     hourlyRate: 600,
// // // //     sessionRate: 399,
// // // //     specializationText: 'Plant Physiology, Genetics, Ecology, Biotechnology',
// // // //     isAvailable: true,
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     name: 'Dr. Karan Verma',
// // // //     role: 'NEET Expert – Zoology',
// // // //     expertise: 'Human Physiology, Genetics, Animal Kingdom',
// // // //     image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80',
// // // //     rating: 4.8,
// // // //     reviewsCount: 176,
// // // //     studentsCount: '7,600+',
// // // //     experienceYears: 7,
// // // //     tags: ['Tutor', 'Homework Helper', 'Mentorship'],
// // // //     hourlyRate: 650,
// // // //     sessionRate: 449,
// // // //     specializationText: 'Human Physiology, Genetics, Animal Kingdom',
// // // //     isAvailable: true,
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     name: 'Dr. Ayesha Khan',
// // // //     role: 'NEET Expert – Physics',
// // // //     expertise: 'Electrostatics, Current Electricity, Waves',
// // // //     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
// // // //     rating: 4.7,
// // // //     reviewsCount: 154,
// // // //     studentsCount: '6,200+',
// // // //     experienceYears: 5,
// // // //     tags: ['Tutor', 'Doubt Solver', 'Homework Helper'],
// // // //     hourlyRate: 600,
// // // //     sessionRate: 399,
// // // //     specializationText: 'Electrostatics, Current Electricity, Waves',
// // // //     isAvailable: true,
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     name: 'Dr. Rohan Iyer',
// // // //     role: 'NEET Expert – Chemistry',
// // // //     expertise: 'Chemical Bonding, Thermodynamics, Solutions',
// // // //     image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80',
// // // //     rating: 4.7,
// // // //     reviewsCount: 132,
// // // //     studentsCount: '5,400+',
// // // //     experienceYears: 6,
// // // //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// // // //     hourlyRate: 550,
// // // //     sessionRate: 379,
// // // //     specializationText: 'Chemical Bonding, Thermodynamics, Solutions',
// // // //     isAvailable: true,
// // // //   },
// // // //   {
// // // //     id: 7,
// // // //     name: 'Dr. Meera Nair',
// // // //     role: 'NEET Expert – Botany',
// // // //     expertise: 'Cell Biology, Ecology, Plant Diversity',
// // // //     image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&auto=format&fit=crop&q=80',
// // // //     rating: 4.6,
// // // //     reviewsCount: 122,
// // // //     studentsCount: '4,900+',
// // // //     experienceYears: 5,
// // // //     tags: ['Tutor', 'Doubt Solver', 'Mentorship'],
// // // //     hourlyRate: 500,
// // // //     sessionRate: 349,
// // // //     specializationText: 'Cell Biology, Ecology, Plant Diversity',
// // // //     isAvailable: true,
// // // //   },
// // // //   {
// // // //     id: 8,
// // // //     name: 'Dr. Vivek Joshi',
// // // //     role: 'NEET Expert – Zoology',
// // // //     expertise: 'Animal Physiology, Evolution, Biotechnology',
// // // //     image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=80',
// // // //     rating: 4.6,
// // // //     reviewsCount: 118,
// // // //     studentsCount: '4,300+',
// // // //     experienceYears: 6,
// // // //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// // // //     hourlyRate: 550,
// // // //     sessionRate: 379,
// // // //     specializationText: 'Animal Physiology, Evolution, Biotechnology',
// // // //     isAvailable: true,
// // // //   },
// // // // ];

// // // // export default function MentorsPage() {
// // // //   const [favorites, setFavorites] = useState<number[]>([]);
// // // //   const [activeFilters, setActiveFilters] = useState<string[]>([
// // // //     'NEET',
// // // //     'Physics',
// // // //     'Both Teaching + Guidance',
// // // //     'Available Now',
// // // //   ]);

// // // //   // Sidebar dynamic filter state matching image exactly
// // // //   const [selectedMainExam, setSelectedMainExam] = useState<string>('NEET');
// // // //   const [selectedExams, setSelectedExams] = useState<string[]>([]);
// // // //   const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Physics', 'Chemistry', 'Botany', 'Zoology']);
// // // //   const [selectedTopic, setSelectedTopic] = useState<string>('All Topics');
// // // //   const [selectedServices, setSelectedServices] = useState<string[]>([
// // // //     'Online Classes / Tutor',
// // // //     'Mentorship & Guidance',
// // // //     'Homework Helper',
// // // //     '1:1 Doubt Solving',
// // // //     'Test Preparation',
// // // //     'College Counselling'
// // // //   ]);
// // // //   const [guidanceMode, setGuidanceMode] = useState<string>('Both Teaching + Guidance');
// // // //   const [teachingFeeMax, setTeachingFeeMax] = useState<number>(5000);
// // // //   const [guidanceFeeMax, setGuidanceFeeMax] = useState<number>(5000);
// // // //   const [selectedDays, setSelectedDays] = useState<string[]>(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
// // // //   const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
// // // //   const [isInstantAvailable, setIsInstantAvailable] = useState<boolean>(true);
// // // //   const [selectedLanguage, setSelectedLanguage] = useState<string>('');
// // // //   const [selectedLanguagesList, setSelectedLanguagesList] = useState<string[]>(['English']);
// // // //   const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
// // // //   const [selectedRating, setSelectedRating] = useState<string>('');

// // // //   const toggleFavorite = (id: number) => {
// // // //     setFavorites((prev) =>
// // // //       prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
// // // //     );
// // // //   };

// // // //   const removeFilter = (filter: string) => {
// // // //     setActiveFilters((prev) => prev.filter((f) => f !== filter));
// // // //   };

// // // //   const toggleArrayItem = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
// // // //     if (list.includes(item)) {
// // // //       setList(list.filter((i) => i !== item));
// // // //     } else {
// // // //       setList([...list, item]);
// // // //     }
// // // //   };

// // // //   const clearAllFilters = () => {
// // // //     setActiveFilters([]);
// // // //     setSelectedExams([]);
// // // //     setSelectedSubjects([]);
// // // //     setSelectedServices([]);
// // // //     setSelectedDays([]);
// // // //     setSelectedTimes([]);
// // // //     setIsInstantAvailable(false);
// // // //     setSelectedLanguagesList([]);
// // // //     setSelectedExperiences([]);
// // // //     setSelectedRating('');
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs">
// // // //       {/* Top Banner Component */}
// // // //       <Banner />

// // // //       {/* Main Container */}
// // // //       <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        
// // // //         {/* Breadcrumb Navigation */}
// // // //         <nav className="text-gray-400 text-xs mb-4 flex items-center gap-1.5 font-medium">
// // // //           <span className="hover:text-orange-500 cursor-pointer transition">Home</span>
// // // //           <span>&gt;</span>
// // // //           <span className="hover:text-orange-500 cursor-pointer transition">Mentorship</span>
// // // //           <span>&gt;</span>
// // // //           <span className="text-gray-800 font-semibold">All Mentors</span>
// // // //         </nav>

// // // //         <div className="flex flex-col lg:flex-row gap-6 items-start">
          
// // // //           {/* ================= SIDEBAR FILTERS (EXACT MATCH TO SCREENSHOT) ================= */}
// // // //           <aside className="w-full lg:w-[290px] flex-shrink-0 bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4">
            
// // // //             {/* Header */}
// // // //             <div className="flex justify-between items-center pb-2 border-b border-gray-100">
// // // //               <h2 className="font-bold text-sm text-[#1E293B]">Filter Mentors</h2>
// // // //               <button 
// // // //                 onClick={clearAllFilters} 
// // // //                 className="text-[#FF5722] font-semibold text-xs hover:underline flex items-center gap-1"
// // // //               >
// // // //                 Clear All <RotateCcw size={12} />
// // // //               </button>
// // // //             </div>

// // // //             {/* 1. Exam / Category */}
// // // //             <div>
// // // //               <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // // //                 <span>1. Exam / Category</span>
// // // //                 <Info size={13} className="text-gray-400 cursor-pointer" />
// // // //               </div>
              
// // // //               <div className="flex items-center gap-2 mb-2">
// // // //                 <input 
// // // //                   type="checkbox" 
// // // //                   checked={true}
// // // //                   readOnly
// // // //                   className="rounded border-gray-300 text-[#FF5722] accent-[#FF5722] w-3.5 h-3.5" 
// // // //                 />
// // // //                 <select 
// // // //                   value={selectedMainExam}
// // // //                   onChange={(e) => setSelectedMainExam(e.target.value)}
// // // //                   className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-800 font-semibold bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722]"
// // // //                 >
// // // //                   <option value="NEET">NEET</option>
// // // //                   <option value="JEE Main">JEE Main</option>
// // // //                   <option value="JEE Advanced">JEE Advanced</option>
// // // //                 </select>
// // // //               </div>

// // // //               <div className="space-y-2 pl-0.5">
// // // //                 {[
// // // //                   'JEE Main', 
// // // //                   'JEE Advanced', 
// // // //                   'Class 11 – 12', 
// // // //                   'Class 6 – 10', 
// // // //                   'CUET', 
// // // //                   'Olympiad', 
// // // //                   'Boards', 
// // // //                   'Other Exams'
// // // //                 ].map((item) => (
// // // //                   <label key={item} className="flex items-center gap-2.5 text-gray-600 cursor-pointer hover:text-gray-900">
// // // //                     <input 
// // // //                       type="checkbox" 
// // // //                       checked={selectedExams.includes(item)}
// // // //                       onChange={() => toggleArrayItem(item, selectedExams, setSelectedExams)}
// // // //                       className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // // //                     />
// // // //                     <span className="font-medium text-[11px]">{item}</span>
// // // //                   </label>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             {/* 2. Subject (NEET) */}
// // // //             <div className="pt-3 border-t border-gray-100">
// // // //               <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // // //                 <span>2. Subject ({selectedMainExam})</span>
// // // //                 <Info size={13} className="text-gray-400 cursor-pointer" />
// // // //               </div>
// // // //               <div className="space-y-2">
// // // //                 {['Physics', 'Chemistry', 'Botany', 'Zoology'].map((sub) => (
// // // //                   <label key={sub} className="flex items-center gap-2.5 text-gray-700 font-medium cursor-pointer">
// // // //                     <input 
// // // //                       type="checkbox" 
// // // //                       checked={selectedSubjects.includes(sub)}
// // // //                       onChange={() => toggleArrayItem(sub, selectedSubjects, setSelectedSubjects)}
// // // //                       className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // // //                     />
// // // //                     <span className="text-[11px]">{sub}</span>
// // // //                   </label>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             {/* 3. Topic / Expertise */}
// // // //             <div className="pt-3 border-t border-gray-100">
// // // //               <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // // //                 <span>3. Topic / Expertise</span>
// // // //                 <Info size={13} className="text-gray-400 cursor-pointer" />
// // // //               </div>
// // // //               <select 
// // // //                 value={selectedTopic}
// // // //                 onChange={(e) => setSelectedTopic(e.target.value)}
// // // //                 className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722]"
// // // //               >
// // // //                 <option>All Topics</option>
// // // //                 <option>Mechanics</option>
// // // //                 <option>Optics</option>
// // // //                 <option>Electrostatics</option>
// // // //                 <option>Organic Chemistry</option>
// // // //               </select>
// // // //             </div>

// // // //             {/* 4. Service Type */}
// // // //             <div className="pt-3 border-t border-gray-100">
// // // //               <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // // //                 <span>4. Service Type</span>
// // // //                 <Info size={13} className="text-gray-400 cursor-pointer" />
// // // //               </div>
// // // //               <div className="space-y-2">
// // // //                 {[
// // // //                   { name: 'Online Classes / Tutor', count: 512 },
// // // //                   { name: 'Mentorship & Guidance', count: 438 },
// // // //                   { name: 'Homework Helper', count: 286 },
// // // //                   { name: '1:1 Doubt Solving', count: 324 },
// // // //                   { name: 'Test Preparation', count: 412 },
// // // //                   { name: 'College Counselling', count: 196 },
// // // //                 ].map((item) => (
// // // //                   <label key={item.name} className="flex items-center justify-between text-gray-700 cursor-pointer">
// // // //                     <div className="flex items-center gap-2.5">
// // // //                       <input 
// // // //                         type="checkbox" 
// // // //                         checked={selectedServices.includes(item.name)}
// // // //                         onChange={() => toggleArrayItem(item.name, selectedServices, setSelectedServices)}
// // // //                         className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // // //                       />
// // // //                       <span className="text-[11px] font-medium">{item.name}</span>
// // // //                     </div>
// // // //                     <span className="text-gray-400 text-[10px]">({item.count})</span>
// // // //                   </label>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             {/* 5. Teaching / Guidance Mode */}
// // // //             <div className="pt-3 border-t border-gray-100">
// // // //               <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // // //                 <span>5. Teaching / Guidance Mode</span>
// // // //                 <Info size={13} className="text-gray-400 cursor-pointer" />
// // // //               </div>
// // // //               <div className="space-y-2">
// // // //                 {['Online Teaching Only', 'Guidance Only', 'Both Teaching + Guidance'].map((mode) => (
// // // //                   <label key={mode} className="flex items-center gap-2.5 text-gray-700 cursor-pointer">
// // // //                     <input 
// // // //                       type="radio" 
// // // //                       name="guidance_mode" 
// // // //                       checked={guidanceMode === mode}
// // // //                       onChange={() => setGuidanceMode(mode)}
// // // //                       className="accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // // //                     />
// // // //                     <span className="text-[11px] font-medium">{mode}</span>
// // // //                   </label>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             {/* 6. Price Range */}
// // // //             <div className="pt-3 border-t border-gray-100">
// // // //               <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // // //                 <span>6. Price Range</span>
// // // //                 <Info size={13} className="text-gray-400 cursor-pointer" />
// // // //               </div>
              
// // // //               <div className="space-y-3">
// // // //                 <div>
// // // //                   <p className="text-gray-600 text-[11px] font-semibold mb-1">Teaching Fee (₹ / hour)</p>
// // // //                   <div className="relative flex items-center my-1.5">
// // // //                     <input 
// // // //                       type="range" 
// // // //                       min="0" 
// // // //                       max="5000" 
// // // //                       value={teachingFeeMax} 
// // // //                       onChange={(e) => setTeachingFeeMax(Number(e.target.value))}
// // // //                       className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" 
// // // //                     />
// // // //                   </div>
// // // //                   <div className="flex gap-2 items-center">
// // // //                     <input type="text" value="₹ 0" readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
// // // //                     <span className="text-gray-400">-</span>
// // // //                     <input type="text" value={`₹ ${teachingFeeMax}+`} readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
// // // //                   </div>
// // // //                 </div>

// // // //                 <div>
// // // //                   <p className="text-gray-600 text-[11px] font-semibold mb-1">Guidance Fee (₹ / session)</p>
// // // //                   <div className="relative flex items-center my-1.5">
// // // //                     <input 
// // // //                       type="range" 
// // // //                       min="0" 
// // // //                       max="5000" 
// // // //                       value={guidanceFeeMax} 
// // // //                       onChange={(e) => setGuidanceFeeMax(Number(e.target.value))}
// // // //                       className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" 
// // // //                     />
// // // //                   </div>
// // // //                   <div className="flex gap-2 items-center">
// // // //                     <input type="text" value="₹ 0" readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
// // // //                     <span className="text-gray-400">-</span>
// // // //                     <input type="text" value={`₹ ${guidanceFeeMax}+`} readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* 7. Available Days */}
// // // //             <div className="pt-3 border-t border-gray-100">
// // // //               <div className="flex items-center justify-between font-bold text-[#1E293B] mb-2">
// // // //                 <span className="flex items-center gap-1">
// // // //                   <span>7. Available Days</span>
// // // //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// // // //                 </span>
// // // //                 <span className="text-xs text-gray-500 cursor-pointer">^</span>
// // // //               </div>
// // // //               <div className="grid grid-cols-4 gap-1.5">
// // // //                 {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
// // // //                   const isSelected = selectedDays.includes(day);
// // // //                   return (
// // // //                     <button
// // // //                       key={day}
// // // //                       type="button"
// // // //                       onClick={() => toggleArrayItem(day, selectedDays, setSelectedDays)}
// // // //                       className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded-md border text-[11px] font-medium transition ${
// // // //                         isSelected 
// // // //                           ? 'border-[#FF5722] text-[#FF5722] bg-orange-50/50' 
// // // //                           : 'border-gray-200 text-gray-600 hover:bg-gray-50'
// // // //                       }`}
// // // //                     >
// // // //                       <input 
// // // //                         type="checkbox" 
// // // //                         checked={isSelected}
// // // //                         readOnly
// // // //                         className="accent-[#FF5722] w-3 h-3 rounded"
// // // //                       />
// // // //                       <span>{day}</span>
// // // //                     </button>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </div>

// // // //             {/* 8. Availability Time */}
// // // //             <div className="pt-3 border-t border-gray-100">
// // // //               <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // // //                 <span>8. Availability Time</span>
// // // //                 <Info size={13} className="text-gray-400 cursor-pointer" />
// // // //               </div>
// // // //               <div className="space-y-2">
// // // //                 {[
// // // //                   { name: 'Morning', time: '(6 AM – 12 PM)' },
// // // //                   { name: 'Afternoon', time: '(12 PM – 4 PM)' },
// // // //                   { name: 'Evening', time: '(4 PM – 9 PM)' },
// // // //                   { name: 'Night', time: '(9 PM – 12 AM)' },
// // // //                 ].map((slot) => (
// // // //                   <label key={slot.name} className="flex items-center gap-2.5 text-gray-600 cursor-pointer">
// // // //                     <input 
// // // //                       type="checkbox" 
// // // //                       checked={selectedTimes.includes(slot.name)}
// // // //                       onChange={() => toggleArrayItem(slot.name, selectedTimes, setSelectedTimes)}
// // // //                       className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // // //                     />
// // // //                     <span className="text-[11px] font-medium text-gray-700">{slot.name}</span>
// // // //                     <span className="text-gray-400 text-[10px]">{slot.time}</span>
// // // //                   </label>
// // // //                 ))}
// // // //               </div>
// // // //               <div className="mt-3">
// // // //                 <input type="range" min="6" max="24" defaultValue="18" className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" />
// // // //                 <div className="flex justify-between text-[10px] text-gray-500 mt-1">
// // // //                   <span>06:00 AM</span>
// // // //                   <span>12:00 AM</span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* 9. Instant Availability */}
// // // //             <div className="pt-3 border-t border-gray-100">
// // // //               <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // // //                 <span>9. Instant Availability</span>
// // // //                 <Info size={13} className="text-gray-400 cursor-pointer" />
// // // //               </div>
// // // //               <label className="flex items-center gap-2 text-gray-700 cursor-pointer font-medium text-[11px]">
// // // //                 <input 
// // // //                   type="checkbox" 
// // // //                   checked={isInstantAvailable}
// // // //                   onChange={(e) => setIsInstantAvailable(e.target.checked)}
// // // //                   className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // // //                 />
// // // //                 <span>Available Now</span>
// // // //                 <Zap size={13} className="text-emerald-500 fill-emerald-500" />
// // // //               </label>
// // // //             </div>

// // // //             {/* 10. Language */}
// // // //             <div className="pt-3 border-t border-gray-100">
// // // //               <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // // //                 <span>10. Language</span>
// // // //                 <Info size={13} className="text-gray-400 cursor-pointer" />
// // // //               </div>
// // // //               <select 
// // // //                 value={selectedLanguage}
// // // //                 onChange={(e) => setSelectedLanguage(e.target.value)}
// // // //                 className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722] mb-2"
// // // //               >
// // // //                 <option value="">Select Language</option>
// // // //                 <option value="English">English</option>
// // // //                 <option value="Hindi">Hindi</option>
// // // //                 <option value="Hinglish">Hinglish</option>
// // // //               </select>
// // // //               <div className="flex flex-wrap gap-1.5">
// // // //                 {['English', 'Hindi', 'Hinglish', '+ More'].map((lang) => {
// // // //                   const isSel = selectedLanguagesList.includes(lang);
// // // //                   return (
// // // //                     <button
// // // //                       key={lang}
// // // //                       type="button"
// // // //                       onClick={() => toggleArrayItem(lang, selectedLanguagesList, setSelectedLanguagesList)}
// // // //                       className={`px-3 py-1 rounded-md border text-[11px] font-medium transition ${
// // // //                         isSel 
// // // //                           ? 'border-[#FF5722] text-[#FF5722] bg-orange-50/50' 
// // // //                           : 'border-gray-200 text-gray-600 hover:bg-gray-50'
// // // //                       }`}
// // // //                     >
// // // //                       {lang}
// // // //                     </button>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </div>

// // // //             {/* 11. Experience */}
// // // //             <div className="pt-3 border-t border-gray-100">
// // // //               <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // // //                 <span>11. Experience</span>
// // // //                 <Info size={13} className="text-gray-400 cursor-pointer" />
// // // //               </div>
// // // //               <div className="grid grid-cols-2 gap-2">
// // // //                 {['0 – 2 Years', '3 – 5 Years', '6 – 10 Years', '10+ Years'].map((exp) => (
// // // //                   <label key={exp} className="flex items-center gap-2 text-gray-600 cursor-pointer">
// // // //                     <input 
// // // //                       type="checkbox" 
// // // //                       checked={selectedExperiences.includes(exp)}
// // // //                       onChange={() => toggleArrayItem(exp, selectedExperiences, setSelectedExperiences)}
// // // //                       className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // // //                     />
// // // //                     <span className="text-[11px] font-medium text-gray-700">{exp}</span>
// // // //                   </label>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             {/* 12. Rating */}
// // // //             <div className="pt-3 border-t border-gray-100">
// // // //               <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // // //                 <span>12. Rating</span>
// // // //                 <Info size={13} className="text-gray-400 cursor-pointer" />
// // // //               </div>
// // // //               <div className="space-y-2">
// // // //                 {[
// // // //                   { label: '4.5 & above', stars: 5 },
// // // //                   { label: '4.0 & above', stars: 4 },
// // // //                   { label: '3.5 & above', stars: 3 },
// // // //                   { label: '3.0 & above', stars: 3 },
// // // //                 ].map((rate) => (
// // // //                   <label key={rate.label} className="flex items-center gap-2 cursor-pointer">
// // // //                     <input 
// // // //                       type="radio" 
// // // //                       name="rating_filter" 
// // // //                       checked={selectedRating === rate.label}
// // // //                       onChange={() => setSelectedRating(rate.label)}
// // // //                       className="accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // // //                     />
// // // //                     <div className="flex items-center gap-1">
// // // //                       <div className="flex text-yellow-400">
// // // //                         {[...Array(5)].map((_, i) => (
// // // //                           <Star key={i} size={11} fill={i < rate.stars ? "#f59e0b" : "none"} className={i < rate.stars ? "text-amber-500" : "text-gray-200"} />
// // // //                         ))}
// // // //                       </div>
// // // //                       <span className="text-[11px] font-medium text-gray-600">{rate.label}</span>
// // // //                     </div>
// // // //                   </label>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             {/* Apply & Clear CTA Buttons */}
// // // //             <div className="pt-4 border-t border-gray-100 space-y-2">
// // // //               <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg shadow flex items-center justify-center gap-2 text-xs transition active:scale-[0.98]">
// // // //                 <span>Apply Filters</span>
// // // //                 <SlidersHorizontal size={14} />
// // // //               </button>
// // // //               <button 
// // // //                 onClick={clearAllFilters} 
// // // //                 className="w-full text-center text-[#FF5722] font-semibold text-xs hover:underline py-1"
// // // //               >
// // // //                 Clear All Filters
// // // //               </button>
// // // //             </div>
// // // //           </aside>

// // // //           {/* ================= MAIN CONTENT AREA ================= */}
// // // //           <main className="flex-1 space-y-6 w-full">
            
// // // //             {/* Title & Header */}
// // // //             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
// // // //               <div>
// // // //                 <h1 className="text-2xl font-bold text-[#FF5722] flex items-center gap-2">
// // // //                   All Mentors
// // // //                   <span className="text-xs font-normal text-[#FF5722] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
// // // //                     (326 Mentors Found)
// // // //                   </span>
// // // //                 </h1>
// // // //                 <p className="text-gray-500 text-xs mt-0.5">
// // // //                   Connect with expert mentors and achieve your academic and career goals.
// // // //                 </p>
// // // //               </div>

// // // //               {/* Sort By & View Toggle */}
// // // //               <div className="flex items-center gap-3">
// // // //                 <div className="flex items-center gap-2">
// // // //                   <span className="text-gray-500">Sort By</span>
// // // //                   <select className="border border-gray-300 rounded-lg p-1.5 bg-white text-xs text-gray-700 focus:outline-none">
// // // //                     <option>Recommended</option>
// // // //                     <option>Rating: High to Low</option>
// // // //                     <option>Price: Low to High</option>
// // // //                   </select>
// // // //                 </div>
// // // //                 <div className="flex border rounded-lg bg-white p-0.5 border-gray-200">
// // // //                   <button className="p-1 bg-[#FF5722] text-white rounded"><Grid size={14} /></button>
// // // //                   <button className="p-1 text-gray-400 hover:text-gray-600"><List size={14} /></button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Active Filters Bar */}
// // // //             {activeFilters.length > 0 && (
// // // //               <div className="flex flex-wrap items-center gap-2">
// // // //                 <span className="font-medium text-gray-600 text-xs">Active Filters:</span>
// // // //                 {activeFilters.map((filter) => (
// // // //                   <span
// // // //                     key={filter}
// // // //                     className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] rounded-full shadow-sm"
// // // //                   >
// // // //                     {filter}
// // // //                     <X
// // // //                       size={12}
// // // //                       className="cursor-pointer hover:text-red-500"
// // // //                       onClick={() => removeFilter(filter)}
// // // //                     />
// // // //                   </span>
// // // //                 ))}
// // // //                 <button
// // // //                   onClick={clearAllFilters}
// // // //                   className="text-[#FF5722] text-xs hover:underline ml-2 font-medium"
// // // //                 >
// // // //                   Clear All
// // // //                 </button>
// // // //               </div>
// // // //             )}

// // // //             {/* Mentors Grid */}
// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // // //               {INITIAL_MENTORS.map((mentor) => {
// // // //                 const isFav = favorites.includes(mentor.id);
// // // //                 return (
// // // //                   <div
// // // //                     key={mentor.id}
// // // //                     className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden relative"
// // // //                   >
// // // //                     {/* Available Now Badge */}
// // // //                     <div className="p-3 pb-0 flex items-center justify-between">
// // // //                       <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
// // // //                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
// // // //                         Available Now
// // // //                       </span>
// // // //                       <button
// // // //                         onClick={() => toggleFavorite(mentor.id)}
// // // //                         className="text-gray-400 hover:text-red-500 transition"
// // // //                       >
// // // //                         <Heart
// // // //                           size={16}
// // // //                           fill={isFav ? '#ef4444' : 'none'}
// // // //                           className={isFav ? 'text-red-500' : 'text-gray-400'}
// // // //                         />
// // // //                       </button>
// // // //                     </div>

// // // //                     {/* Mentor Profile Info */}
// // // //                     <div className="p-3 text-center">
// // // //                       <div className="relative inline-block mb-2">
// // // //                         <img
// // // //                           src={mentor.image}
// // // //                           alt={mentor.name}
// // // //                           className="w-16 h-16 rounded-full object-cover mx-auto ring-2 ring-emerald-400/30"
// // // //                         />
// // // //                         <CheckCircle2
// // // //                           size={16}
// // // //                           className="text-emerald-500 bg-white rounded-full absolute bottom-0 right-0 fill-emerald-500 text-white"
// // // //                         />
// // // //                       </div>

// // // //                       <h3 className="font-bold text-gray-900 text-sm">{mentor.name}</h3>
// // // //                       <p className="text-emerald-600 text-[11px] font-medium">{mentor.role}</p>

// // // //                       {/* Ratings */}
// // // //                       <div className="flex items-center justify-center gap-1 text-[11px] mt-1.5 text-gray-600">
// // // //                         <Star size={12} fill="#eab308" className="text-yellow-500" />
// // // //                         <span className="font-bold text-gray-800">{mentor.rating}</span>
// // // //                         <span>({mentor.reviewsCount})</span>
// // // //                         <span className="text-gray-300">•</span>
// // // //                         <span>{mentor.studentsCount} Students</span>
// // // //                       </div>

// // // //                       {/* Experience Badge */}
// // // //                       <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full mt-2">
// // // //                         <Clock size={10} />
// // // //                         <span>{mentor.experienceYears}+ Years Experience</span>
// // // //                       </div>

// // // //                       {/* Specialization / Expertise */}
// // // //                       <p className="text-[10px] text-gray-500 mt-2 line-clamp-2 px-1">
// // // //                         <strong className="text-gray-700">Expert in:</strong> {mentor.specializationText}
// // // //                       </p>

// // // //                       {/* Tags */}
// // // //                       <div className="flex flex-wrap justify-center gap-1 mt-2.5">
// // // //                         {mentor.tags.map((tag) => (
// // // //                           <span
// // // //                             key={tag}
// // // //                             className="bg-purple-50 text-purple-600 text-[9px] font-medium px-2 py-0.5 rounded"
// // // //                           >
// // // //                             {tag}
// // // //                           </span>
// // // //                         ))}
// // // //                       </div>

// // // //                       {/* Pricing Table */}
// // // //                       <div className="grid grid-cols-2 gap-2 my-3 pt-2 border-t border-dashed border-gray-200 text-left">
// // // //                         <div className="bg-gray-50 p-1.5 rounded">
// // // //                           <p className="text-[9px] text-gray-400">Online Classes</p>
// // // //                           <p className="text-[9px] text-gray-400">(1:1 Live Teaching)</p>
// // // //                           <p className="font-bold text-emerald-600 text-xs mt-0.5">
// // // //                             ₹{mentor.hourlyRate} <span className="text-[9px] font-normal text-gray-500">/ hour</span>
// // // //                           </p>
// // // //                         </div>
// // // //                         <div className="bg-gray-50 p-1.5 rounded">
// // // //                           <p className="text-[9px] text-gray-400">Guidance Only</p>
// // // //                           <p className="text-[9px] text-gray-400">(Mentorship)</p>
// // // //                           <p className="font-bold text-emerald-600 text-xs mt-0.5">
// // // //                             ₹{mentor.sessionRate} <span className="text-[9px] font-normal text-gray-500">/ session</span>
// // // //                           </p>
// // // //                         </div>
// // // //                       </div>

// // // //                       {/* CTA Buttons */}
// // // //                       <div className="grid grid-cols-2 gap-2">
// // // //                         <button className="w-full border border-[#FF5722] text-[#FF5722] hover:bg-orange-50 font-semibold py-1.5 rounded-lg text-[11px] transition">
// // // //                           View Profile
// // // //                         </button>
// // // //                         <button className="w-full bg-[#FF5722] text-white hover:bg-orange-600 font-semibold py-1.5 rounded-lg text-[11px] transition shadow-sm">
// // // //                           Book Session
// // // //                         </button>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 );
// // // //               })}
// // // //             </div>

// // // //             {/* Pagination */}
// // // //             <div className="flex justify-center items-center gap-1 pt-4 pb-2">
// // // //               <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronLeft size={14} /></button>
// // // //               <button className="w-6 h-6 rounded bg-[#FF5722] text-white font-medium text-xs flex items-center justify-center">1</button>
// // // //               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">2</button>
// // // //               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">3</button>
// // // //               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">4</button>
// // // //               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">5</button>
// // // //               <span className="px-1 text-gray-400 text-xs">...</span>
// // // //               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">14</button>
// // // //               <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronRight size={14} /></button>
// // // //             </div>

// // // //             {/* "Can't find the right mentor?" Banner */}
// // // //             <div className="bg-red-50/60 border border-red-100 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
// // // //               <div className="flex items-center gap-3">
// // // //                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
// // // //                   <MessageSquare size={20} />
// // // //                 </div>
// // // //                 <div>
// // // //                   <h3 className="font-bold text-gray-900 text-sm">Can't find the right mentor?</h3>
// // // //                   <p className="text-gray-600 text-xs">Tell us your requirements and we'll match you with the perfect mentor for your goals.</p>
// // // //                 </div>
// // // //               </div>
// // // //               <button className="bg-[#FF5722] hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition flex-shrink-0">
// // // //                 Request a Mentor <ChevronRight size={14} />
// // // //               </button>
// // // //             </div>

// // // //             {/* Bottom Footer Trust Badges */}
// // // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t text-center text-[11px] text-gray-600">
// // // //               <div className="flex items-center justify-center gap-2">
// // // //                 <ShieldCheck size={18} className="text-[#FF5722]" />
// // // //                 <div className="text-left">
// // // //                   <p className="font-semibold text-gray-800">100% Verified Mentors</p>
// // // //                   <p className="text-gray-400 text-[10px]">Qualified & background verified</p>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="flex items-center justify-center gap-2">
// // // //                 <Lock size={18} className="text-[#FF5722]" />
// // // //                 <div className="text-left">
// // // //                   <p className="font-semibold text-gray-800">Safe & Secure Sessions</p>
// // // //                   <p className="text-gray-400 text-[10px]">Your privacy is our priority</p>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="flex items-center justify-center gap-2">
// // // //                 <Calendar size={18} className="text-[#FF5722]" />
// // // //                 <div className="text-left">
// // // //                   <p className="font-semibold text-gray-800">Flexible Scheduling</p>
// // // //                   <p className="text-gray-400 text-[10px]">Learn at your convenient time</p>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="flex items-center justify-center gap-2">
// // // //                 <Headphones size={18} className="text-[#FF5722]" />
// // // //                 <div className="text-left">
// // // //                   <p className="font-semibold text-gray-800">24/7 Support</p>
// // // //                   <p className="text-gray-400 text-[10px]">We're here to help you anytime</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //           </main>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }





// // // import React, { useState } from 'react';
// // // import { 
// // //   Star, Heart, Clock, ShieldCheck, 
// // //   CheckCircle2, ChevronRight, ChevronLeft, X, 
// // //   Info, Grid, List, MessageSquare, Headphones, 
// // //   Calendar, Lock, RotateCcw, SlidersHorizontal, Zap
// // // } from 'lucide-react';
// // // import Banner from './components/Banner';

// // // // --- TYPES ---
// // // interface Mentor {
// // //   id: number;
// // //   name: string;
// // //   role: string;
// // //   expertise: string;
// // //   image: string;
// // //   rating: number;
// // //   reviewsCount: number;
// // //   studentsCount: string;
// // //   experienceYears: number;
// // //   tags: string[];
// // //   hourlyRate: number;
// // //   sessionRate: number;
// // //   specializationText: string;
// // //   isAvailable: boolean;
// // // }

// // // // --- MOCK DATA (FILLED MORE MENTORS TO MATCH SIDEBAR HEIGHT EQUALLY) ---
// // // const INITIAL_MENTORS: Mentor[] = [
// // //   {
// // //     id: 1,
// // //     name: 'Dr. Arjun Mehta',
// // //     role: 'NEET Expert – Physics',
// // //     expertise: 'Mechanics, Optics, Electrostatics, Modern Physics',
// // //     image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
// // //     rating: 4.9,
// // //     reviewsCount: 256,
// // //     studentsCount: '12,500+',
// // //     experienceYears: 8,
// // //     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
// // //     hourlyRate: 800,
// // //     sessionRate: 499,
// // //     specializationText: 'Mechanics, Optics, Electrostatics, Modern Physics',
// // //     isAvailable: true,
// // //   },
// // //   {
// // //     id: 2,
// // //     name: 'Dr. Priya Sharma',
// // //     role: 'NEET Expert – Chemistry',
// // //     expertise: 'Organic, Inorganic, Physical Chemistry',
// // //     image: 'https://images.unsplash.com/photo-1594824813566-82823d5afe4a?w=400&auto=format&fit=crop&q=80',
// // //     rating: 4.9,
// // //     reviewsCount: 198,
// // //     studentsCount: '9,800+',
// // //     experienceYears: 7,
// // //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// // //     hourlyRate: 700,
// // //     sessionRate: 449,
// // //     specializationText: 'Organic, Inorganic, Physical Chemistry',
// // //     isAvailable: true,
// // //   },
// // //   {
// // //     id: 3,
// // //     name: 'Dr. Neha Singh',
// // //     role: 'NEET Expert – Botany',
// // //     expertise: 'Plant Physiology, Genetics, Ecology, Biotechnology',
// // //     image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80',
// // //     rating: 4.8,
// // //     reviewsCount: 210,
// // //     studentsCount: '9,900+',
// // //     experienceYears: 6,
// // //     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
// // //     hourlyRate: 600,
// // //     sessionRate: 399,
// // //     specializationText: 'Plant Physiology, Genetics, Ecology, Biotechnology',
// // //     isAvailable: true,
// // //   },
// // //   {
// // //     id: 4,
// // //     name: 'Dr. Karan Verma',
// // //     role: 'NEET Expert – Zoology',
// // //     expertise: 'Human Physiology, Genetics, Animal Kingdom',
// // //     image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80',
// // //     rating: 4.8,
// // //     reviewsCount: 176,
// // //     studentsCount: '7,600+',
// // //     experienceYears: 7,
// // //     tags: ['Tutor', 'Homework Helper', 'Mentorship'],
// // //     hourlyRate: 650,
// // //     sessionRate: 449,
// // //     specializationText: 'Human Physiology, Genetics, Animal Kingdom',
// // //     isAvailable: true,
// // //   },
// // //   {
// // //     id: 5,
// // //     name: 'Dr. Ayesha Khan',
// // //     role: 'NEET Expert – Physics',
// // //     expertise: 'Electrostatics, Current Electricity, Waves',
// // //     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
// // //     rating: 4.7,
// // //     reviewsCount: 154,
// // //     studentsCount: '6,200+',
// // //     experienceYears: 5,
// // //     tags: ['Tutor', 'Doubt Solver', 'Homework Helper'],
// // //     hourlyRate: 600,
// // //     sessionRate: 399,
// // //     specializationText: 'Electrostatics, Current Electricity, Waves',
// // //     isAvailable: true,
// // //   },
// // //   {
// // //     id: 6,
// // //     name: 'Dr. Rohan Iyer',
// // //     role: 'NEET Expert – Chemistry',
// // //     expertise: 'Chemical Bonding, Thermodynamics, Solutions',
// // //     image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80',
// // //     rating: 4.7,
// // //     reviewsCount: 132,
// // //     studentsCount: '5,400+',
// // //     experienceYears: 6,
// // //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// // //     hourlyRate: 550,
// // //     sessionRate: 379,
// // //     specializationText: 'Chemical Bonding, Thermodynamics, Solutions',
// // //     isAvailable: true,
// // //   },
// // //   {
// // //     id: 7,
// // //     name: 'Dr. Meera Nair',
// // //     role: 'NEET Expert – Botany',
// // //     expertise: 'Cell Biology, Ecology, Plant Diversity',
// // //     image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&auto=format&fit=crop&q=80',
// // //     rating: 4.6,
// // //     reviewsCount: 122,
// // //     studentsCount: '4,900+',
// // //     experienceYears: 5,
// // //     tags: ['Tutor', 'Doubt Solver', 'Mentorship'],
// // //     hourlyRate: 500,
// // //     sessionRate: 349,
// // //     specializationText: 'Cell Biology, Ecology, Plant Diversity',
// // //     isAvailable: true,
// // //   },
// // //   {
// // //     id: 8,
// // //     name: 'Dr. Vivek Joshi',
// // //     role: 'NEET Expert – Zoology',
// // //     expertise: 'Animal Physiology, Evolution, Biotechnology',
// // //     image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=80',
// // //     rating: 4.6,
// // //     reviewsCount: 118,
// // //     studentsCount: '4,300+',
// // //     experienceYears: 6,
// // //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// // //     hourlyRate: 550,
// // //     sessionRate: 379,
// // //     specializationText: 'Animal Physiology, Evolution, Biotechnology',
// // //     isAvailable: true,
// // //   },
// // //   {
// // //     id: 9,
// // //     name: 'Dr. Ananya Roy',
// // //     role: 'NEET Expert – Organic Chem',
// // //     expertise: 'Hydrocarbons, Biomolecules, Reaction Mechanism',
// // //     image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80',
// // //     rating: 4.9,
// // //     reviewsCount: 310,
// // //     studentsCount: '15,100+',
// // //     experienceYears: 9,
// // //     tags: ['Tutor', 'Mentorship', 'Concept Builder'],
// // //     hourlyRate: 850,
// // //     sessionRate: 520,
// // //     specializationText: 'Hydrocarbons, Biomolecules, Reaction Mechanism',
// // //     isAvailable: true,
// // //   },
// // //   {
// // //     id: 10,
// // //     name: 'Dr. Rajesh Gupta',
// // //     role: 'NEET Expert – Modern Physics',
// // //     expertise: 'Semiconductors, Atoms & Nuclei, Dual Nature',
// // //     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
// // //     rating: 4.8,
// // //     reviewsCount: 220,
// // //     studentsCount: '11,200+',
// // //     experienceYears: 10,
// // //     tags: ['Tutor', 'Doubt Solver'],
// // //     hourlyRate: 900,
// // //     sessionRate: 550,
// // //     specializationText: 'Semiconductors, Atoms & Nuclei, Dual Nature',
// // //     isAvailable: true,
// // //   },
// // //   {
// // //     id: 11,
// // //     name: 'Dr. Sunita Patel',
// // //     role: 'NEET Expert – Genetics',
// // //     expertise: 'Molecular Basis of Inheritance, Mendelian Genetics',
// // //     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
// // //     rating: 4.7,
// // //     reviewsCount: 185,
// // //     studentsCount: '8,400+',
// // //     experienceYears: 7,
// // //     tags: ['Mentorship', 'Homework Helper'],
// // //     hourlyRate: 650,
// // //     sessionRate: 410,
// // //     specializationText: 'Molecular Basis of Inheritance, Mendelian Genetics',
// // //     isAvailable: true,
// // //   },
// // //   {
// // //     id: 12,
// // //     name: 'Dr. Amit Trivedi',
// // //     role: 'NEET Expert – Physical Chem',
// // //     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// // //     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
// // //     rating: 4.9,
// // //     reviewsCount: 290,
// // //     studentsCount: '13,800+',
// // //     experienceYears: 8,
// // //     tags: ['Tutor', 'Test Prep'],
// // //     hourlyRate: 750,
// // //     sessionRate: 480,
// // //     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// // //     isAvailable: true,
// // //   },
// // //     {
// // //     id: 13,
// // //     name: 'Dr. Anil Kumar',
// // //     role: 'NEET Expert – Physical Chem',
// // //     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// // //     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80&utm_source=chatgpt.co',
// // //     rating: 4.9,
// // //     reviewsCount: 290,
// // //     studentsCount: '13,800+',
// // //     experienceYears: 8,
// // //     tags: ['Tutor', 'Test Prep'],
// // //     hourlyRate: 750,
// // //     sessionRate: 480,
// // //     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// // //     isAvailable: true,
// // //   },
// // //     {
// // //     id: 14,
// // //     name: 'Dr. Rohit Sharma',
// // //     role: 'NEET Expert – Physical Chem',
// // //     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// // //     image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80&utm_source=chatgpt.com',
// // //     rating: 4.9,
// // //     reviewsCount: 290,
// // //     studentsCount: '13,800+',
// // //     experienceYears: 8,
// // //     tags: ['Tutor', 'Test Prep'],
// // //     hourlyRate: 750,
// // //     sessionRate: 480,
// // //     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// // //     isAvailable: true,
// // //   },
// // //     {
// // //     id: 15,
// // //     name: 'Dr. Vikas Gupta',
// // //     role: 'NEET Expert – Physical Chem',
// // //     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// // //     image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80&utm_source=chatgpt.com',
// // //     rating: 4.9,
// // //     reviewsCount: 290,
// // //     studentsCount: '13,800+',
// // //     experienceYears: 8,
// // //     tags: ['Tutor', 'Test Prep'],
// // //     hourlyRate: 750,
// // //     sessionRate: 480,
// // //     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// // //     isAvailable: true,
// // //   },
// // //     {
// // //     id: 16,
// // //     name: 'Dr. Dhemdra',
// // //     role: 'NEET Expert – Physical Chem',
// // //     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// // //     image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80&utm_source=chatgpt.com',
// // //     rating: 4.9,
// // //     reviewsCount: 290,
// // //     studentsCount: '13,800+',
// // //     experienceYears: 8,
// // //     tags: ['Tutor', 'Test Prep'],
// // //     hourlyRate: 750,
// // //     sessionRate: 480,
// // //     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// // //     isAvailable: true,
// // //   }

// // // ];

// // // export default function MentorsPage() {
// // //   const [favorites, setFavorites] = useState<number[]>([]);
// // //   const [activeFilters, setActiveFilters] = useState<string[]>([
// // //     'NEET',
// // //     'Physics',
// // //     'Both Teaching + Guidance',
// // //     'Available Now',
// // //   ]);

// // //   // State Management matching the original filter screenshot
// // //   const [selectedMainExam, setSelectedMainExam] = useState<string>('NEET');
// // //   const [selectedExams, setSelectedExams] = useState<string[]>([]);
// // //   const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Physics', 'Chemistry', 'Botany', 'Zoology']);
// // //   const [selectedTopic, setSelectedTopic] = useState<string>('All Topics');
// // //   const [selectedServices, setSelectedServices] = useState<string[]>([
// // //     'Online Classes / Tutor',
// // //     'Mentorship & Guidance',
// // //     'Homework Helper',
// // //     '1:1 Doubt Solving',
// // //     'Test Preparation',
// // //     'College Counselling'
// // //   ]);
// // //   const [guidanceMode, setGuidanceMode] = useState<string>('Both Teaching + Guidance');
// // //   const [teachingFeeMax, setTeachingFeeMax] = useState<number>(5000);
// // //   const [guidanceFeeMax, setGuidanceFeeMax] = useState<number>(5000);
// // //   const [selectedDays, setSelectedDays] = useState<string[]>(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
// // //   const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
// // //   const [isInstantAvailable, setIsInstantAvailable] = useState<boolean>(true);
// // //   const [selectedLanguage, setSelectedLanguage] = useState<string>('');
// // //   const [selectedLanguagesList, setSelectedLanguagesList] = useState<string[]>(['English']);
// // //   const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
// // //   const [selectedRating, setSelectedRating] = useState<string>('');

// // //   const toggleFavorite = (id: number) => {
// // //     setFavorites((prev) =>
// // //       prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
// // //     );
// // //   };

// // //   const removeFilter = (filter: string) => {
// // //     setActiveFilters((prev) => prev.filter((f) => f !== filter));
// // //   };

// // //   const toggleArrayItem = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
// // //     if (list.includes(item)) {
// // //       setList(list.filter((i) => i !== item));
// // //     } else {
// // //       setList([...list, item]);
// // //     }
// // //   };

// // //   const clearAllFilters = () => {
// // //     setActiveFilters([]);
// // //     setSelectedExams([]);
// // //     setSelectedSubjects([]);
// // //     setSelectedServices([]);
// // //     setSelectedDays([]);
// // //     setSelectedTimes([]);
// // //     setIsInstantAvailable(false);
// // //     setSelectedLanguagesList([]);
// // //     setSelectedExperiences([]);
// // //     setSelectedRating('');
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs">
// // //       {/* Top Banner */}
// // //       <Banner />

// // //       {/* Main Container */}
// // //       <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        
// // //         {/* Breadcrumb Navigation */}
// // //         <nav className="text-gray-400 text-xs mb-4 flex items-center gap-1.5 font-medium">
// // //           <span className="hover:text-orange-500 cursor-pointer transition">Home</span>
// // //           <span>&gt;</span>
// // //           <span className="hover:text-orange-500 cursor-pointer transition">Mentorship</span>
// // //           <span>&gt;</span>
// // //           <span className="text-gray-800 font-semibold">All Mentors</span>
// // //         </nav>

// // //         {/* Outer Flex with Equal Height Stretching */}
// // //         <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          
// // //           {/* ================= SIDEBAR FILTERS ================= */}
// // //           <aside className="w-full lg:w-[290px] flex-shrink-0 bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4 flex flex-col justify-between">
// // //             <div className="space-y-4">
// // //               {/* Header */}
// // //               <div className="flex justify-between items-center pb-2 border-b border-gray-100">
// // //                 <h2 className="font-bold text-sm text-[#1E293B]">Filter Mentors</h2>
// // //                 <button 
// // //                   onClick={clearAllFilters} 
// // //                   className="text-[#FF5722] font-semibold text-xs hover:underline flex items-center gap-1"
// // //                 >
// // //                   Clear All <RotateCcw size={12} />
// // //                 </button>
// // //               </div>

// // //               {/* 1. Exam / Category */}
// // //               <div>
// // //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // //                   <span>1. Exam / Category</span>
// // //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// // //                 </div>
                
// // //                 <div className="flex items-center gap-2 mb-2">
// // //                   <input 
// // //                     type="checkbox" 
// // //                     checked={true}
// // //                     readOnly
// // //                     className="rounded border-gray-300 text-[#FF5722] accent-[#FF5722] w-3.5 h-3.5" 
// // //                   />
// // //                   <select 
// // //                     value={selectedMainExam}
// // //                     onChange={(e) => setSelectedMainExam(e.target.value)}
// // //                     className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-800 font-semibold bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722]"
// // //                   >
// // //                     <option value="NEET">NEET</option>
// // //                     <option value="JEE Main">JEE Main</option>
// // //                     <option value="JEE Advanced">JEE Advanced</option>
// // //                   </select>
// // //                 </div>

// // //                 <div className="space-y-2 pl-0.5">
// // //                   {[
// // //                     'JEE Main', 
// // //                     'JEE Advanced', 
// // //                     'Class 11 – 12', 
// // //                     'Class 6 – 10', 
// // //                     'CUET', 
// // //                     'Olympiad', 
// // //                     'Boards', 
// // //                     'Other Exams'
// // //                   ].map((item) => (
// // //                     <label key={item} className="flex items-center gap-2.5 text-gray-600 cursor-pointer hover:text-gray-900">
// // //                       <input 
// // //                         type="checkbox" 
// // //                         checked={selectedExams.includes(item)}
// // //                         onChange={() => toggleArrayItem(item, selectedExams, setSelectedExams)}
// // //                         className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // //                       />
// // //                       <span className="font-medium text-[11px]">{item}</span>
// // //                     </label>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               {/* 2. Subject (NEET) */}
// // //               <div className="pt-3 border-t border-gray-100">
// // //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // //                   <span>2. Subject ({selectedMainExam})</span>
// // //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// // //                 </div>
// // //                 <div className="space-y-2">
// // //                   {['Physics', 'Chemistry', 'Botany', 'Zoology'].map((sub) => (
// // //                     <label key={sub} className="flex items-center gap-2.5 text-gray-700 font-medium cursor-pointer">
// // //                       <input 
// // //                         type="checkbox" 
// // //                         checked={selectedSubjects.includes(sub)}
// // //                         onChange={() => toggleArrayItem(sub, selectedSubjects, setSelectedSubjects)}
// // //                         className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // //                       />
// // //                       <span className="text-[11px]">{sub}</span>
// // //                     </label>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               {/* 3. Topic / Expertise */}
// // //               <div className="pt-3 border-t border-gray-100">
// // //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // //                   <span>3. Topic / Expertise</span>
// // //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// // //                 </div>
// // //                 <select 
// // //                   value={selectedTopic}
// // //                   onChange={(e) => setSelectedTopic(e.target.value)}
// // //                   className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722]"
// // //                 >
// // //                   <option>All Topics</option>
// // //                   <option>Mechanics</option>
// // //                   <option>Optics</option>
// // //                   <option>Electrostatics</option>
// // //                   <option>Organic Chemistry</option>
// // //                 </select>
// // //               </div>

// // //               {/* 4. Service Type */}
// // //               <div className="pt-3 border-t border-gray-100">
// // //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // //                   <span>4. Service Type</span>
// // //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// // //                 </div>
// // //                 <div className="space-y-2">
// // //                   {[
// // //                     { name: 'Online Classes / Tutor', count: 512 },
// // //                     { name: 'Mentorship & Guidance', count: 438 },
// // //                     { name: 'Homework Helper', count: 286 },
// // //                     { name: '1:1 Doubt Solving', count: 324 },
// // //                     { name: 'Test Preparation', count: 412 },
// // //                     { name: 'College Counselling', count: 196 },
// // //                   ].map((item) => (
// // //                     <label key={item.name} className="flex items-center justify-between text-gray-700 cursor-pointer">
// // //                       <div className="flex items-center gap-2.5">
// // //                         <input 
// // //                           type="checkbox" 
// // //                           checked={selectedServices.includes(item.name)}
// // //                           onChange={() => toggleArrayItem(item.name, selectedServices, setSelectedServices)}
// // //                           className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // //                         />
// // //                         <span className="text-[11px] font-medium">{item.name}</span>
// // //                       </div>
// // //                       <span className="text-gray-400 text-[10px]">({item.count})</span>
// // //                     </label>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               {/* 5. Teaching / Guidance Mode */}
// // //               <div className="pt-3 border-t border-gray-100">
// // //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // //                   <span>5. Teaching / Guidance Mode</span>
// // //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// // //                 </div>
// // //                 <div className="space-y-2">
// // //                   {['Online Teaching Only', 'Guidance Only', 'Both Teaching + Guidance', 'Available Local Tutor'].map((mode) => (
// // //                     <label key={mode} className="flex items-center gap-2.5 text-gray-700 cursor-pointer">
// // //                       <input 
// // //                         type="radio" 
// // //                         name="guidance_mode" 
// // //                         checked={guidanceMode === mode}
// // //                         onChange={() => setGuidanceMode(mode)}
// // //                         className="accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // //                       />
// // //                       <span className="text-[11px] font-medium">{mode}</span>
// // //                     </label>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               {/* 6. Price Range */}
// // //               <div className="pt-3 border-t border-gray-100">
// // //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // //                   <span>6. Price Range</span>
// // //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// // //                 </div>
                
// // //                 <div className="space-y-3">
// // //                   <div>
// // //                     <p className="text-gray-600 text-[11px] font-semibold mb-1">Teaching Fee (₹ / hour)</p>
// // //                     <div className="relative flex items-center my-1.5">
// // //                       <input 
// // //                         type="range" 
// // //                         min="0" 
// // //                         max="5000" 
// // //                         value={teachingFeeMax} 
// // //                         onChange={(e) => setTeachingFeeMax(Number(e.target.value))}
// // //                         className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" 
// // //                       />
// // //                     </div>
// // //                     <div className="flex gap-2 items-center">
// // //                       <input type="text" value="₹ 0" readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
// // //                       <span className="text-gray-400">-</span>
// // //                       <input type="text" value={`₹ ${teachingFeeMax}+`} readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
// // //                     </div>
// // //                   </div>

// // //                   <div>
// // //                     <p className="text-gray-600 text-[11px] font-semibold mb-1">Guidance Fee (₹ / session)</p>
// // //                     <div className="relative flex items-center my-1.5">
// // //                       <input 
// // //                         type="range" 
// // //                         min="0" 
// // //                         max="5000" 
// // //                         value={guidanceFeeMax} 
// // //                         onChange={(e) => setGuidanceFeeMax(Number(e.target.value))}
// // //                         className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" 
// // //                       />
// // //                     </div>
// // //                     <div className="flex gap-2 items-center">
// // //                       <input type="text" value="₹ 0" readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
// // //                       <span className="text-gray-400">-</span>
// // //                       <input type="text" value={`₹ ${guidanceFeeMax}+`} readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* 7. Available Days */}
// // //               <div className="pt-3 border-t border-gray-100">
// // //                 <div className="flex items-center justify-between font-bold text-[#1E293B] mb-2">
// // //                   <span className="flex items-center gap-1">
// // //                     <span>7. Available Days</span>
// // //                     <Info size={13} className="text-gray-400 cursor-pointer" />
// // //                   </span>
// // //                   <span className="text-xs text-gray-500 cursor-pointer">^</span>
// // //                 </div>
// // //                 <div className="grid grid-cols-4 gap-1.5">
// // //                   {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
// // //                     const isSelected = selectedDays.includes(day);
// // //                     return (
// // //                       <button
// // //                         key={day}
// // //                         type="button"
// // //                         onClick={() => toggleArrayItem(day, selectedDays, setSelectedDays)}
// // //                         className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded-md border text-[11px] font-medium transition ${
// // //                           isSelected 
// // //                             ? 'border-[#FF5722] text-[#FF5722] bg-orange-50/50' 
// // //                             : 'border-gray-200 text-gray-600 hover:bg-gray-50'
// // //                         }`}
// // //                       >
// // //                         <input 
// // //                           type="checkbox" 
// // //                           checked={isSelected}
// // //                           readOnly
// // //                           className="accent-[#FF5722] w-3 h-3 rounded"
// // //                         />
// // //                         <span>{day}</span>
// // //                       </button>
// // //                     );
// // //                   })}
// // //                 </div>
// // //               </div>

// // //               {/* 8. Availability Time */}
// // //               <div className="pt-3 border-t border-gray-100">
// // //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // //                   <span>8. Availability Time</span>
// // //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// // //                 </div>
// // //                 <div className="space-y-2">
// // //                   {[
// // //                     { name: 'Morning', time: '(6 AM – 12 PM)' },
// // //                     { name: 'Afternoon', time: '(12 PM – 4 PM)' },
// // //                     { name: 'Evening', time: '(4 PM – 9 PM)' },
// // //                     { name: 'Night', time: '(9 PM – 12 AM)' },
// // //                   ].map((slot) => (
// // //                     <label key={slot.name} className="flex items-center gap-2.5 text-gray-600 cursor-pointer">
// // //                       <input 
// // //                         type="checkbox" 
// // //                         checked={selectedTimes.includes(slot.name)}
// // //                         onChange={() => toggleArrayItem(slot.name, selectedTimes, setSelectedTimes)}
// // //                         className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // //                       />
// // //                       <span className="text-[11px] font-medium text-gray-700">{slot.name}</span>
// // //                       <span className="text-gray-400 text-[10px]">{slot.time}</span>
// // //                     </label>
// // //                   ))}
// // //                 </div>
// // //                 <div className="mt-3">
// // //                   <input type="range" min="6" max="24" defaultValue="18" className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" />
// // //                   <div className="flex justify-between text-[10px] text-gray-500 mt-1">
// // //                     <span>06:00 AM</span>
// // //                     <span>12:00 AM</span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* 9. Instant Availability */}
// // //               <div className="pt-3 border-t border-gray-100">
// // //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // //                   <span>9. Instant Availability</span>
// // //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// // //                 </div>
// // //                 <label className="flex items-center gap-2 text-gray-700 cursor-pointer font-medium text-[11px]">
// // //                   <input 
// // //                     type="checkbox" 
// // //                     checked={isInstantAvailable}
// // //                     onChange={(e) => setIsInstantAvailable(e.target.checked)}
// // //                     className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // //                   />
// // //                   <span>Available Now</span>
// // //                   <Zap size={13} className="text-emerald-500 fill-emerald-500" />
// // //                 </label>
// // //               </div>

// // //               {/* 10. Language */}
// // //               <div className="pt-3 border-t border-gray-100">
// // //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // //                   <span>10. Language</span>
// // //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// // //                 </div>
// // //                 <select 
// // //                   value={selectedLanguage}
// // //                   onChange={(e) => setSelectedLanguage(e.target.value)}
// // //                   className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722] mb-2"
// // //                 >
// // //                   <option value="">Select Language</option>
// // //                   <option value="English">English</option>
// // //                   <option value="Hindi">Hindi</option>
// // //                   <option value="Hinglish">Hinglish</option>
// // //                 </select>
// // //                 <div className="flex flex-wrap gap-1.5">
// // //                   {['English', 'Hindi', 'Hinglish', '+ More'].map((lang) => {
// // //                     const isSel = selectedLanguagesList.includes(lang);
// // //                     return (
// // //                       <button
// // //                         key={lang}
// // //                         type="button"
// // //                         onClick={() => toggleArrayItem(lang, selectedLanguagesList, setSelectedLanguagesList)}
// // //                         className={`px-3 py-1 rounded-md border text-[11px] font-medium transition ${
// // //                           isSel 
// // //                             ? 'border-[#FF5722] text-[#FF5722] bg-orange-50/50' 
// // //                             : 'border-gray-200 text-gray-600 hover:bg-gray-50'
// // //                         }`}
// // //                       >
// // //                         {lang}
// // //                       </button>
// // //                     );
// // //                   })}
// // //                 </div>
// // //               </div>

// // //               {/* 11. Experience */}
// // //               <div className="pt-3 border-t border-gray-100">
// // //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // //                   <span>11. Experience</span>
// // //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// // //                 </div>
// // //                 <div className="grid grid-cols-2 gap-2">
// // //                   {['0 – 2 Years', '3 – 5 Years', '6 – 10 Years', '10+ Years'].map((exp) => (
// // //                     <label key={exp} className="flex items-center gap-2 text-gray-600 cursor-pointer">
// // //                       <input 
// // //                         type="checkbox" 
// // //                         checked={selectedExperiences.includes(exp)}
// // //                         onChange={() => toggleArrayItem(exp, selectedExperiences, setSelectedExperiences)}
// // //                         className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // //                       />
// // //                       <span className="text-[11px] font-medium text-gray-700">{exp}</span>
// // //                     </label>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               {/* 12. Rating */}
// // //               <div className="pt-3 border-t border-gray-100">
// // //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// // //                   <span>12. Rating</span>
// // //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// // //                 </div>
// // //                 <div className="space-y-2">
// // //                   {[
// // //                     { label: '4.5 & above', stars: 5 },
// // //                     { label: '4.0 & above', stars: 4 },
// // //                     { label: '3.5 & above', stars: 3 },
// // //                     { label: '3.0 & above', stars: 3 },
// // //                   ].map((rate) => (
// // //                     <label key={rate.label} className="flex items-center gap-2 cursor-pointer">
// // //                       <input 
// // //                         type="radio" 
// // //                         name="rating_filter" 
// // //                         checked={selectedRating === rate.label}
// // //                         onChange={() => setSelectedRating(rate.label)}
// // //                         className="accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// // //                       />
// // //                       <div className="flex items-center gap-1">
// // //                         <div className="flex text-yellow-400">
// // //                           {[...Array(5)].map((_, i) => (
// // //                             <Star key={i} size={11} fill={i < rate.stars ? "#f59e0b" : "none"} className={i < rate.stars ? "text-amber-500" : "text-gray-200"} />
// // //                           ))}
// // //                         </div>
// // //                         <span className="text-[11px] font-medium text-gray-600">{rate.label}</span>
// // //                       </div>
// // //                     </label>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Apply & Clear CTA Buttons */}
// // //             <div className="pt-4 border-t border-gray-100 space-y-2 mt-auto">
// // //               <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg shadow flex items-center justify-center gap-2 text-xs transition active:scale-[0.98]">
// // //                 <span>Apply Filters</span>
// // //                 <SlidersHorizontal size={14} />
// // //               </button>
// // //               <button 
// // //                 onClick={clearAllFilters} 
// // //                 className="w-full text-center text-[#FF5722] font-semibold text-xs hover:underline py-1"
// // //               >
// // //                 Clear All Filters
// // //               </button>
// // //             </div>
// // //           </aside>

// // //           {/* ================= MAIN CONTENT AREA ================= */}
// // //           <main className="flex-1 space-y-6 w-full flex flex-col justify-between">
            
// // //             <div className="space-y-6">
// // //               {/* Header */}
// // //               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
// // //                 <div>
// // //                   <h1 className="text-2xl font-bold text-[#FF5722] flex items-center gap-2">
// // //                     All Mentors
// // //                     <span className="text-xs font-normal text-[#FF5722] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
// // //                       (326 Mentors Found)
// // //                     </span>
// // //                   </h1>
// // //                   <p className="text-gray-500 text-xs mt-0.5">
// // //                     Connect with expert mentors and achieve your academic and career goals.
// // //                   </p>
// // //                 </div>

// // //                 {/* Sort By & View Toggle */}
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="flex items-center gap-2">
// // //                     <span className="text-gray-500">Sort By</span>
// // //                     <select className="border border-gray-300 rounded-lg p-1.5 bg-white text-xs text-gray-700 focus:outline-none">
// // //                       <option>Recommended</option>
// // //                       <option>Rating: High to Low</option>
// // //                       <option>Price: Low to High</option>
// // //                     </select>
// // //                   </div>
// // //                   <div className="flex border rounded-lg bg-white p-0.5 border-gray-200">
// // //                     <button className="p-1 bg-[#FF5722] text-white rounded"><Grid size={14} /></button>
// // //                     <button className="p-1 text-gray-400 hover:text-gray-600"><List size={14} /></button>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Active Filters Bar */}
// // //               {activeFilters.length > 0 && (
// // //                 <div className="flex flex-wrap items-center gap-2">
// // //                   <span className="font-medium text-gray-600 text-xs">Active Filters:</span>
// // //                   {activeFilters.map((filter) => (
// // //                     <span
// // //                       key={filter}
// // //                       className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] rounded-full shadow-sm"
// // //                     >
// // //                       {filter}
// // //                       <X
// // //                         size={12}
// // //                         className="cursor-pointer hover:text-red-500"
// // //                         onClick={() => removeFilter(filter)}
// // //                       />
// // //                     </span>
// // //                   ))}
// // //                   <button
// // //                     onClick={clearAllFilters}
// // //                     className="text-[#FF5722] text-xs hover:underline ml-2 font-medium"
// // //                   >
// // //                     Clear All
// // //                   </button>
// // //                 </div>
// // //               )}

// // //               {/* Mentors Grid */}
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
// // //                 {INITIAL_MENTORS.map((mentor) => {
// // //                   const isFav = favorites.includes(mentor.id);
// // //                   return (
// // //                     <div
// // //                       key={mentor.id}
// // //                       className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden relative"
// // //                     >
// // //                       {/* Available Badge */}
// // //                       <div className="p-3 pb-0 flex items-center justify-between">
// // //                         <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
// // //                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
// // //                           Available Now
// // //                         </span>
// // //                         <button
// // //                           onClick={() => toggleFavorite(mentor.id)}
// // //                           className="text-gray-400 hover:text-red-500 transition"
// // //                         >
// // //                           <Heart
// // //                             size={16}
// // //                             fill={isFav ? '#ef4444' : 'none'}
// // //                             className={isFav ? 'text-red-500' : 'text-gray-400'}
// // //                           />
// // //                         </button>
// // //                       </div>

// // //                       {/* Mentor Details */}
// // //                       <div className="p-3 text-center flex-1 flex flex-col justify-between">
// // //                         <div>
// // //                           <div className="relative inline-block mb-2">
// // //                             <img
// // //                               src={mentor.image}
// // //                               alt={mentor.name}
// // //                               className="w-16 h-16 rounded-full object-cover mx-auto ring-2 ring-emerald-400/30"
// // //                             />
// // //                             <CheckCircle2
// // //                               size={16}
// // //                               className="text-emerald-500 bg-white rounded-full absolute bottom-0 right-0 fill-emerald-500 text-white"
// // //                             />
// // //                           </div>

// // //                           <h3 className="font-bold text-gray-900 text-sm">{mentor.name}</h3>
// // //                           <p className="text-emerald-600 text-[11px] font-medium">{mentor.role}</p>

// // //                           {/* Ratings */}
// // //                           <div className="flex items-center justify-center gap-1 text-[11px] mt-1.5 text-gray-600">
// // //                             <Star size={12} fill="#eab308" className="text-yellow-500" />
// // //                             <span className="font-bold text-gray-800">{mentor.rating}</span>
// // //                             <span>({mentor.reviewsCount})</span>
// // //                             <span className="text-gray-300">•</span>
// // //                             <span>{mentor.studentsCount} Students</span>
// // //                           </div>

// // //                           {/* Experience */}
// // //                           <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full mt-2">
// // //                             <Clock size={10} />
// // //                             <span>{mentor.experienceYears}+ Years Experience</span>
// // //                           </div>

// // //                           <p className="text-[10px] text-gray-500 mt-2 line-clamp-2 px-1">
// // //                             <strong className="text-gray-700">Expert in:</strong> {mentor.specializationText}
// // //                           </p>

// // //                           <div className="flex flex-wrap justify-center gap-1 mt-2.5">
// // //                             {mentor.tags.map((tag) => (
// // //                               <span
// // //                                 key={tag}
// // //                                 className="bg-purple-50 text-purple-600 text-[9px] font-medium px-2 py-0.5 rounded"
// // //                               >
// // //                                 {tag}
// // //                               </span>
// // //                             ))}
// // //                           </div>
// // //                         </div>

// // //                         <div>
// // //                           {/* Pricing */}
// // //                           <div className="grid grid-cols-2 gap-2 my-3 pt-2 border-t border-dashed border-gray-200 text-left">
// // //                             <div className="bg-gray-50 p-1.5 rounded">
// // //                               <p className="text-[9px] text-gray-400">Online Classes</p>
// // //                               <p className="text-[9px] text-gray-400">(1:1 Live Teaching)</p>
// // //                               <p className="font-bold text-emerald-600 text-xs mt-0.5">
// // //                                 ₹{mentor.hourlyRate} <span className="text-[9px] font-normal text-gray-500">/ hour</span>
// // //                               </p>
// // //                             </div>
// // //                             <div className="bg-gray-50 p-1.5 rounded">
// // //                               <p className="text-[9px] text-gray-400">Guidance Only</p>
// // //                               <p className="text-[9px] text-gray-400">(Mentorship)</p>
// // //                               <p className="font-bold text-emerald-600 text-xs mt-0.5">
// // //                                 ₹{mentor.sessionRate} <span className="text-[9px] font-normal text-gray-500">/ session</span>
// // //                               </p>
// // //                             </div>
// // //                           </div>

// // //                           {/* Buttons */}
// // //                           <div className="grid grid-cols-2 gap-2">
// // //                             <button className="w-full border border-[#FF5722] text-[#FF5722] hover:bg-orange-50 font-semibold py-1.5 rounded-lg text-[11px] transition">
// // //                               View Profile
// // //                             </button>
// // //                             <button className="w-full bg-[#FF5722] text-white hover:bg-orange-600 font-semibold py-1.5 rounded-lg text-[11px] transition shadow-sm">
// // //                               Book Session
// // //                             </button>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   );
// // //                 })}
// // //               </div>
// // //             </div>

// // //             {/* Bottom Controls & Footer Badges */}
// // //             <div className="space-y-6 pt-4">
// // //               {/* Pagination */}
// // //               <div className="flex justify-center items-center gap-1">
// // //                 <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronLeft size={14} /></button>
// // //                 <button className="w-6 h-6 rounded bg-[#FF5722] text-white font-medium text-xs flex items-center justify-center">1</button>
// // //                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">2</button>
// // //                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">3</button>
// // //                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">4</button>
// // //                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">5</button>
// // //                 <span className="px-1 text-gray-400 text-xs">...</span>
// // //                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">14</button>
// // //                 <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronRight size={14} /></button>
// // //               </div>

// // //               {/* Request Banner */}
// // //               <div className="bg-red-50/60 border border-red-100 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
// // //                     <MessageSquare size={20} />
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="font-bold text-gray-900 text-sm">Can't find the right mentor?</h3>
// // //                     <p className="text-gray-600 text-xs">Tell us your requirements and we'll match you with the perfect mentor for your goals.</p>
// // //                   </div>
// // //                 </div>
// // //                 <button className="bg-[#FF5722] hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition flex-shrink-0">
// // //                   Request a Mentor <ChevronRight size={14} />
// // //                 </button>
// // //               </div>

            
// // //             </div>

// // //           </main>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import React, { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { 
// //   Star, Heart, Clock, ShieldCheck, 
// //   CheckCircle2, ChevronRight, ChevronLeft, X, 
// //   Info, Grid, List, MessageSquare, Headphones, 
// //   Calendar, Lock, RotateCcw, SlidersHorizontal, Zap
// // } from 'lucide-react';
// // import Banner from './components/Banner';

// // // --- TYPES ---
// // export interface Mentor {
// //   id: number;
// //   name: string;
// //   role: string;
// //   expertise: string;
// //   image: string;
// //   rating: number;
// //   reviewsCount: number;
// //   studentsCount: string;
// //   experienceYears: number;
// //   tags: string[];
// //   hourlyRate: number;
// //   sessionRate: number;
// //   specializationText: string;
// //   isAvailable: boolean;
// // }

// // // --- MOCK DATA ---
// // const INITIAL_MENTORS: Mentor[] = [
// //   {
// //     id: 1,
// //     name: 'Dr. Arjun Mehta',
// //     role: 'NEET Expert – Physics',
// //     expertise: 'Mechanics, Optics, Electrostatics, Modern Physics',
// //     image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
// //     rating: 4.9,
// //     reviewsCount: 256,
// //     studentsCount: '12,500+',
// //     experienceYears: 8,
// //     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
// //     hourlyRate: 800,
// //     sessionRate: 499,
// //     specializationText: 'Mechanics, Optics, Electrostatics, Modern Physics',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 2,
// //     name: 'Dr. Priya Sharma',
// //     role: 'NEET Expert – Chemistry',
// //     expertise: 'Organic, Inorganic, Physical Chemistry',
// //     image: 'https://images.unsplash.com/photo-1594824813566-82823d5afe4a?w=400&auto=format&fit=crop&q=80',
// //     rating: 4.9,
// //     reviewsCount: 198,
// //     studentsCount: '9,800+',
// //     experienceYears: 7,
// //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// //     hourlyRate: 700,
// //     sessionRate: 449,
// //     specializationText: 'Organic, Inorganic, Physical Chemistry',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 3,
// //     name: 'Dr. Neha Singh',
// //     role: 'NEET Expert – Botany',
// //     expertise: 'Plant Physiology, Genetics, Ecology, Biotechnology',
// //     image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80',
// //     rating: 4.8,
// //     reviewsCount: 210,
// //     studentsCount: '9,900+',
// //     experienceYears: 6,
// //     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
// //     hourlyRate: 600,
// //     sessionRate: 399,
// //     specializationText: 'Plant Physiology, Genetics, Ecology, Biotechnology',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 4,
// //     name: 'Dr. Karan Verma',
// //     role: 'NEET Expert – Zoology',
// //     expertise: 'Human Physiology, Genetics, Animal Kingdom',
// //     image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80',
// //     rating: 4.8,
// //     reviewsCount: 176,
// //     studentsCount: '7,600+',
// //     experienceYears: 7,
// //     tags: ['Tutor', 'Homework Helper', 'Mentorship'],
// //     hourlyRate: 650,
// //     sessionRate: 449,
// //     specializationText: 'Human Physiology, Genetics, Animal Kingdom',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 5,
// //     name: 'Dr. Ayesha Khan',
// //     role: 'NEET Expert – Physics',
// //     expertise: 'Electrostatics, Current Electricity, Waves',
// //     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
// //     rating: 4.7,
// //     reviewsCount: 154,
// //     studentsCount: '6,200+',
// //     experienceYears: 5,
// //     tags: ['Tutor', 'Doubt Solver', 'Homework Helper'],
// //     hourlyRate: 600,
// //     sessionRate: 399,
// //     specializationText: 'Electrostatics, Current Electricity, Waves',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 6,
// //     name: 'Dr. Rohan Iyer',
// //     role: 'NEET Expert – Chemistry',
// //     expertise: 'Chemical Bonding, Thermodynamics, Solutions',
// //     image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80',
// //     rating: 4.7,
// //     reviewsCount: 132,
// //     studentsCount: '5,400+',
// //     experienceYears: 6,
// //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// //     hourlyRate: 550,
// //     sessionRate: 379,
// //     specializationText: 'Chemical Bonding, Thermodynamics, Solutions',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 7,
// //     name: 'Dr. Meera Nair',
// //     role: 'NEET Expert – Botany',
// //     expertise: 'Cell Biology, Ecology, Plant Diversity',
// //     image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&auto=format&fit=crop&q=80',
// //     rating: 4.6,
// //     reviewsCount: 122,
// //     studentsCount: '4,900+',
// //     experienceYears: 5,
// //     tags: ['Tutor', 'Doubt Solver', 'Mentorship'],
// //     hourlyRate: 500,
// //     sessionRate: 349,
// //     specializationText: 'Cell Biology, Ecology, Plant Diversity',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 8,
// //     name: 'Dr. Vivek Joshi',
// //     role: 'NEET Expert – Zoology',
// //     expertise: 'Animal Physiology, Evolution, Biotechnology',
// //     image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=80',
// //     rating: 4.6,
// //     reviewsCount: 118,
// //     studentsCount: '4,300+',
// //     experienceYears: 6,
// //     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
// //     hourlyRate: 550,
// //     sessionRate: 379,
// //     specializationText: 'Animal Physiology, Evolution, Biotechnology',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 9,
// //     name: 'Dr. Ananya Roy',
// //     role: 'NEET Expert – Organic Chem',
// //     expertise: 'Hydrocarbons, Biomolecules, Reaction Mechanism',
// //     image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80',
// //     rating: 4.9,
// //     reviewsCount: 310,
// //     studentsCount: '15,100+',
// //     experienceYears: 9,
// //     tags: ['Tutor', 'Mentorship', 'Concept Builder'],
// //     hourlyRate: 850,
// //     sessionRate: 520,
// //     specializationText: 'Hydrocarbons, Biomolecules, Reaction Mechanism',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 10,
// //     name: 'Dr. Rajesh Gupta',
// //     role: 'NEET Expert – Modern Physics',
// //     expertise: 'Semiconductors, Atoms & Nuclei, Dual Nature',
// //     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
// //     rating: 4.8,
// //     reviewsCount: 220,
// //     studentsCount: '11,200+',
// //     experienceYears: 10,
// //     tags: ['Tutor', 'Doubt Solver'],
// //     hourlyRate: 900,
// //     sessionRate: 550,
// //     specializationText: 'Semiconductors, Atoms & Nuclei, Dual Nature',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 11,
// //     name: 'Dr. Sunita Patel',
// //     role: 'NEET Expert – Genetics',
// //     expertise: 'Molecular Basis of Inheritance, Mendelian Genetics',
// //     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
// //     rating: 4.7,
// //     reviewsCount: 185,
// //     studentsCount: '8,400+',
// //     experienceYears: 7,
// //     tags: ['Mentorship', 'Homework Helper'],
// //     hourlyRate: 650,
// //     sessionRate: 410,
// //     specializationText: 'Molecular Basis of Inheritance, Mendelian Genetics',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 12,
// //     name: 'Dr. Amit Trivedi',
// //     role: 'NEET Expert – Physical Chem',
// //     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// //     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
// //     rating: 4.9,
// //     reviewsCount: 290,
// //     studentsCount: '13,800+',
// //     experienceYears: 8,
// //     tags: ['Tutor', 'Test Prep'],
// //     hourlyRate: 750,
// //     sessionRate: 480,
// //     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 13,
// //     name: 'Dr. Anil Kumar',
// //     role: 'NEET Expert – Physical Chem',
// //     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// //     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80&utm_source=chatgpt.co',
// //     rating: 4.9,
// //     reviewsCount: 290,
// //     studentsCount: '13,800+',
// //     experienceYears: 8,
// //     tags: ['Tutor', 'Test Prep'],
// //     hourlyRate: 750,
// //     sessionRate: 480,
// //     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 14,
// //     name: 'Dr. Rohit Sharma',
// //     role: 'NEET Expert – Physical Chem',
// //     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// //     image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80&utm_source=chatgpt.com',
// //     rating: 4.9,
// //     reviewsCount: 290,
// //     studentsCount: '13,800+',
// //     experienceYears: 8,
// //     tags: ['Tutor', 'Test Prep'],
// //     hourlyRate: 750,
// //     sessionRate: 480,
// //     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 15,
// //     name: 'Dr. Vikas Gupta',
// //     role: 'NEET Expert – Physical Chem',
// //     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// //     image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80&utm_source=chatgpt.com',
// //     rating: 4.9,
// //     reviewsCount: 290,
// //     studentsCount: '13,800+',
// //     experienceYears: 8,
// //     tags: ['Tutor', 'Test Prep'],
// //     hourlyRate: 750,
// //     sessionRate: 480,
// //     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// //     isAvailable: true,
// //   },
// //   {
// //     id: 16,
// //     name: 'Dr. Dhemdra',
// //     role: 'NEET Expert – Physical Chem',
// //     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// //     image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80&utm_source=chatgpt.com',
// //     rating: 4.9,
// //     reviewsCount: 290,
// //     studentsCount: '13,800+',
// //     experienceYears: 8,
// //     tags: ['Tutor', 'Test Prep'],
// //     hourlyRate: 750,
// //     sessionRate: 480,
// //     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
// //     isAvailable: true,
// //   }
// // ];

// // export default function MentorsPage() {
// //   const [favorites, setFavorites] = useState<number[]>([]);
// //   const [activeFilters, setActiveFilters] = useState<string[]>([
// //     'NEET',
// //     'Physics',
// //     'Both Teaching + Guidance',
// //     'Available Now',
// //   ]);

// //   // State Management matching the original filter
// //   const [selectedMainExam, setSelectedMainExam] = useState<string>('NEET');
// //   const [selectedExams, setSelectedExams] = useState<string[]>([]);
// //   const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Physics', 'Chemistry', 'Botany', 'Zoology']);
// //   const [selectedTopic, setSelectedTopic] = useState<string>('All Topics');
// //   const [selectedServices, setSelectedServices] = useState<string[]>([
// //     'Online Classes / Tutor',
// //     'Mentorship & Guidance',
// //     'Homework Helper',
// //     '1:1 Doubt Solving',
// //     'Test Preparation',
// //     'College Counselling'
// //   ]);
// //   const [guidanceMode, setGuidanceMode] = useState<string>('Both Teaching + Guidance');
// //   const [teachingFeeMax, setTeachingFeeMax] = useState<number>(5000);
// //   const [guidanceFeeMax, setGuidanceFeeMax] = useState<number>(5000);
// //   const [selectedDays, setSelectedDays] = useState<string[]>(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
// //   const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
// //   const [isInstantAvailable, setIsInstantAvailable] = useState<boolean>(true);
// //   const [selectedLanguage, setSelectedLanguage] = useState<string>('');
// //   const [selectedLanguagesList, setSelectedLanguagesList] = useState<string[]>(['English']);
// //   const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
// //   const [selectedRating, setSelectedRating] = useState<string>('');

// //   const toggleFavorite = (id: number) => {
// //     setFavorites((prev) =>
// //       prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
// //     );
// //   };

// //   const removeFilter = (filter: string) => {
// //     setActiveFilters((prev) => prev.filter((f) => f !== filter));
// //   };

// //   const toggleArrayItem = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
// //     if (list.includes(item)) {
// //       setList(list.filter((i) => i !== item));
// //     } else {
// //       setList([...list, item]);
// //     }
// //   };

// //   const clearAllFilters = () => {
// //     setActiveFilters([]);
// //     setSelectedExams([]);
// //     setSelectedSubjects([]);
// //     setSelectedServices([]);
// //     setSelectedDays([]);
// //     setSelectedTimes([]);
// //     setIsInstantAvailable(false);
// //     setSelectedLanguagesList([]);
// //     setSelectedExperiences([]);
// //     setSelectedRating('');
// //   };

// //   // Safe navigation function
// //   const handleNavigateToProfile = (mentorId: number) => {
// //     window.location.href = `/mentorprofile?id=${mentorId}`;
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs">
// //       {/* Top Banner */}
// //       <Banner />

// //       {/* Main Container */}
// //       <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        
// //         {/* Breadcrumb Navigation */}
// //         <nav className="text-gray-400 text-xs mb-4 flex items-center gap-1.5 font-medium">
// //           <span className="hover:text-orange-500 cursor-pointer transition">Home</span>
// //           <span>&gt;</span>
// //           <span className="hover:text-orange-500 cursor-pointer transition">Mentorship</span>
// //           <span>&gt;</span>
// //           <span className="text-gray-800 font-semibold">All Mentors</span>
// //         </nav>

// //         {/* Outer Flex with Equal Height Stretching */}
// //         <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          
// //           {/* ================= SIDEBAR FILTERS ================= */}
// //           <aside className="w-full lg:w-[290px] flex-shrink-0 bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4 flex flex-col justify-between">
// //             <div className="space-y-4">
// //               {/* Header */}
// //               <div className="flex justify-between items-center pb-2 border-b border-gray-100">
// //                 <h2 className="font-bold text-sm text-[#1E293B]">Filter Mentors</h2>
// //                 <button 
// //                   onClick={clearAllFilters} 
// //                   className="text-[#FF5722] font-semibold text-xs hover:underline flex items-center gap-1"
// //                 >
// //                   Clear All <RotateCcw size={12} />
// //                 </button>
// //               </div>

// //               {/* 1. Exam / Category */}
// //               <div>
// //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// //                   <span>1. Exam / Category</span>
// //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// //                 </div>
                
// //                 <div className="flex items-center gap-2 mb-2">
// //                   <input 
// //                     type="checkbox" 
// //                     checked={true}
// //                     readOnly
// //                     className="rounded border-gray-300 text-[#FF5722] accent-[#FF5722] w-3.5 h-3.5" 
// //                   />
// //                   <select 
// //                     value={selectedMainExam}
// //                     onChange={(e) => setSelectedMainExam(e.target.value)}
// //                     className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-800 font-semibold bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722]"
// //                   >
// //                     <option value="NEET">NEET</option>
// //                     <option value="JEE Main">JEE Main</option>
// //                     <option value="JEE Advanced">JEE Advanced</option>
// //                   </select>
// //                 </div>

// //                 <div className="space-y-2 pl-0.5">
// //                   {[
// //                     'JEE Main', 
// //                     'JEE Advanced', 
// //                     'Class 11 – 12', 
// //                     'Class 6 – 10', 
// //                     'CUET', 
// //                     'Olympiad', 
// //                     'Boards', 
// //                     'Other Exams'
// //                   ].map((item) => (
// //                     <label key={item} className="flex items-center gap-2.5 text-gray-600 cursor-pointer hover:text-gray-900">
// //                       <input 
// //                         type="checkbox" 
// //                         checked={selectedExams.includes(item)}
// //                         onChange={() => toggleArrayItem(item, selectedExams, setSelectedExams)}
// //                         className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// //                       />
// //                       <span className="font-medium text-[11px]">{item}</span>
// //                     </label>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* 2. Subject (NEET) */}
// //               <div className="pt-3 border-t border-gray-100">
// //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// //                   <span>2. Subject ({selectedMainExam})</span>
// //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// //                 </div>
// //                 <div className="space-y-2">
// //                   {['Physics', 'Chemistry', 'Botany', 'Zoology'].map((sub) => (
// //                     <label key={sub} className="flex items-center gap-2.5 text-gray-700 font-medium cursor-pointer">
// //                       <input 
// //                         type="checkbox" 
// //                         checked={selectedSubjects.includes(sub)}
// //                         onChange={() => toggleArrayItem(sub, selectedSubjects, setSelectedSubjects)}
// //                         className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// //                       />
// //                       <span className="text-[11px]">{sub}</span>
// //                     </label>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* 3. Topic / Expertise */}
// //               <div className="pt-3 border-t border-gray-100">
// //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// //                   <span>3. Topic / Expertise</span>
// //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// //                 </div>
// //                 <select 
// //                   value={selectedTopic}
// //                   onChange={(e) => setSelectedTopic(e.target.value)}
// //                   className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722]"
// //                 >
// //                   <option>All Topics</option>
// //                   <option>Mechanics</option>
// //                   <option>Optics</option>
// //                   <option>Electrostatics</option>
// //                   <option>Organic Chemistry</option>
// //                 </select>
// //               </div>

// //               {/* 4. Service Type */}
// //               <div className="pt-3 border-t border-gray-100">
// //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// //                   <span>4. Service Type</span>
// //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// //                 </div>
// //                 <div className="space-y-2">
// //                   {[
// //                     { name: 'Online Classes / Tutor', count: 512 },
// //                     { name: 'Mentorship & Guidance', count: 438 },
// //                     { name: 'Homework Helper', count: 286 },
// //                     { name: '1:1 Doubt Solving', count: 324 },
// //                     { name: 'Test Preparation', count: 412 },
// //                     { name: 'College Counselling', count: 196 },
// //                   ].map((item) => (
// //                     <label key={item.name} className="flex items-center justify-between text-gray-700 cursor-pointer">
// //                       <div className="flex items-center gap-2.5">
// //                         <input 
// //                           type="checkbox" 
// //                           checked={selectedServices.includes(item.name)}
// //                           onChange={() => toggleArrayItem(item.name, selectedServices, setSelectedServices)}
// //                           className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// //                         />
// //                         <span className="text-[11px] font-medium">{item.name}</span>
// //                       </div>
// //                       <span className="text-gray-400 text-[10px]">({item.count})</span>
// //                     </label>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* 5. Teaching / Guidance Mode */}
// //               <div className="pt-3 border-t border-gray-100">
// //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// //                   <span>5. Teaching / Guidance Mode</span>
// //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// //                 </div>
// //                 <div className="space-y-2">
// //                   {['Online Teaching Only', 'Guidance Only', 'Both Teaching + Guidance', 'Available Local Tutor'].map((mode) => (
// //                     <label key={mode} className="flex items-center gap-2.5 text-gray-700 cursor-pointer">
// //                       <input 
// //                         type="radio" 
// //                         name="guidance_mode" 
// //                         checked={guidanceMode === mode}
// //                         onChange={() => setGuidanceMode(mode)}
// //                         className="accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// //                       />
// //                       <span className="text-[11px] font-medium">{mode}</span>
// //                     </label>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* 6. Price Range */}
// //               <div className="pt-3 border-t border-gray-100">
// //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// //                   <span>6. Price Range</span>
// //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// //                 </div>
                
// //                 <div className="space-y-3">
// //                   <div>
// //                     <p className="text-gray-600 text-[11px] font-semibold mb-1">Teaching Fee (₹ / hour)</p>
// //                     <div className="relative flex items-center my-1.5">
// //                       <input 
// //                         type="range" 
// //                         min="0" 
// //                         max="5000" 
// //                         value={teachingFeeMax} 
// //                         onChange={(e) => setTeachingFeeMax(Number(e.target.value))}
// //                         className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" 
// //                       />
// //                     </div>
// //                     <div className="flex gap-2 items-center">
// //                       <input type="text" value="₹ 0" readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
// //                       <span className="text-gray-400">-</span>
// //                       <input type="text" value={`₹ ${teachingFeeMax}+`} readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <p className="text-gray-600 text-[11px] font-semibold mb-1">Guidance Fee (₹ / session)</p>
// //                     <div className="relative flex items-center my-1.5">
// //                       <input 
// //                         type="range" 
// //                         min="0" 
// //                         max="5000" 
// //                         value={guidanceFeeMax} 
// //                         onChange={(e) => setGuidanceFeeMax(Number(e.target.value))}
// //                         className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" 
// //                       />
// //                     </div>
// //                     <div className="flex gap-2 items-center">
// //                       <input type="text" value="₹ 0" readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
// //                       <span className="text-gray-400">-</span>
// //                       <input type="text" value={`₹ ${guidanceFeeMax}+`} readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* 7. Available Days */}
// //               <div className="pt-3 border-t border-gray-100">
// //                 <div className="flex items-center justify-between font-bold text-[#1E293B] mb-2">
// //                   <span className="flex items-center gap-1">
// //                     <span>7. Available Days</span>
// //                     <Info size={13} className="text-gray-400 cursor-pointer" />
// //                   </span>
// //                   <span className="text-xs text-gray-500 cursor-pointer">^</span>
// //                 </div>
// //                 <div className="grid grid-cols-4 gap-1.5">
// //                   {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
// //                     const isSelected = selectedDays.includes(day);
// //                     return (
// //                       <button
// //                         key={day}
// //                         type="button"
// //                         onClick={() => toggleArrayItem(day, selectedDays, setSelectedDays)}
// //                         className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded-md border text-[11px] font-medium transition ${
// //                           isSelected 
// //                             ? 'border-[#FF5722] text-[#FF5722] bg-orange-50/50' 
// //                             : 'border-gray-200 text-gray-600 hover:bg-gray-50'
// //                         }`}
// //                       >
// //                         <input 
// //                           type="checkbox" 
// //                           checked={isSelected}
// //                           readOnly
// //                           className="accent-[#FF5722] w-3 h-3 rounded"
// //                         />
// //                         <span>{day}</span>
// //                       </button>
// //                     );
// //                   })}
// //                 </div>
// //               </div>

// //               {/* 8. Availability Time */}
// //               <div className="pt-3 border-t border-gray-100">
// //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// //                   <span>8. Availability Time</span>
// //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// //                 </div>
// //                 <div className="space-y-2">
// //                   {[
// //                     { name: 'Morning', time: '(6 AM – 12 PM)' },
// //                     { name: 'Afternoon', time: '(12 PM – 4 PM)' },
// //                     { name: 'Evening', time: '(4 PM – 9 PM)' },
// //                     { name: 'Night', time: '(9 PM – 12 AM)' },
// //                   ].map((slot) => (
// //                     <label key={slot.name} className="flex items-center gap-2.5 text-gray-600 cursor-pointer">
// //                       <input 
// //                         type="checkbox" 
// //                         checked={selectedTimes.includes(slot.name)}
// //                         onChange={() => toggleArrayItem(slot.name, selectedTimes, setSelectedTimes)}
// //                         className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// //                       />
// //                       <span className="text-[11px] font-medium text-gray-700">{slot.name}</span>
// //                       <span className="text-gray-400 text-[10px]">{slot.time}</span>
// //                     </label>
// //                   ))}
// //                 </div>
// //                 <div className="mt-3">
// //                   <input type="range" min="6" max="24" defaultValue="18" className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" />
// //                   <div className="flex justify-between text-[10px] text-gray-500 mt-1">
// //                     <span>06:00 AM</span>
// //                     <span>12:00 AM</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* 9. Instant Availability */}
// //               <div className="pt-3 border-t border-gray-100">
// //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// //                   <span>9. Instant Availability</span>
// //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// //                 </div>
// //                 <label className="flex items-center gap-2 text-gray-700 cursor-pointer font-medium text-[11px]">
// //                   <input 
// //                     type="checkbox" 
// //                     checked={isInstantAvailable}
// //                     onChange={(e) => setIsInstantAvailable(e.target.checked)}
// //                     className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// //                   />
// //                   <span>Available Now</span>
// //                   <Zap size={13} className="text-emerald-500 fill-emerald-500" />
// //                 </label>
// //               </div>

// //               {/* 10. Language */}
// //               <div className="pt-3 border-t border-gray-100">
// //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// //                   <span>10. Language</span>
// //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// //                 </div>
// //                 <select 
// //                   value={selectedLanguage}
// //                   onChange={(e) => setSelectedLanguage(e.target.value)}
// //                   className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722] mb-2"
// //                 >
// //                   <option value="">Select Language</option>
// //                   <option value="English">English</option>
// //                   <option value="Hindi">Hindi</option>
// //                   <option value="Hinglish">Hinglish</option>
// //                 </select>
// //                 <div className="flex flex-wrap gap-1.5">
// //                   {['English', 'Hindi', 'Hinglish', '+ More'].map((lang) => {
// //                     const isSel = selectedLanguagesList.includes(lang);
// //                     return (
// //                       <button
// //                         key={lang}
// //                         type="button"
// //                         onClick={() => toggleArrayItem(lang, selectedLanguagesList, setSelectedLanguagesList)}
// //                         className={`px-3 py-1 rounded-md border text-[11px] font-medium transition ${
// //                           isSel 
// //                             ? 'border-[#FF5722] text-[#FF5722] bg-orange-50/50' 
// //                             : 'border-gray-200 text-gray-600 hover:bg-gray-50'
// //                         }`}
// //                       >
// //                         {lang}
// //                       </button>
// //                     );
// //                   })}
// //                 </div>
// //               </div>

// //               {/* 11. Experience */}
// //               <div className="pt-3 border-t border-gray-100">
// //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// //                   <span>11. Experience</span>
// //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// //                 </div>
// //                 <div className="grid grid-cols-2 gap-2">
// //                   {['0 – 2 Years', '3 – 5 Years', '6 – 10 Years', '10+ Years'].map((exp) => (
// //                     <label key={exp} className="flex items-center gap-2 text-gray-600 cursor-pointer">
// //                       <input 
// //                         type="checkbox" 
// //                         checked={selectedExperiences.includes(exp)}
// //                         onChange={() => toggleArrayItem(exp, selectedExperiences, setSelectedExperiences)}
// //                         className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// //                       />
// //                       <span className="text-[11px] font-medium text-gray-700">{exp}</span>
// //                     </label>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* 12. Rating */}
// //               <div className="pt-3 border-t border-gray-100">
// //                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
// //                   <span>12. Rating</span>
// //                   <Info size={13} className="text-gray-400 cursor-pointer" />
// //                 </div>
// //                 <div className="space-y-2">
// //                   {[
// //                     { label: '4.5 & above', stars: 5 },
// //                     { label: '4.0 & above', stars: 4 },
// //                     { label: '3.5 & above', stars: 3 },
// //                     { label: '3.0 & above', stars: 3 },
// //                   ].map((rate) => (
// //                     <label key={rate.label} className="flex items-center gap-2 cursor-pointer">
// //                       <input 
// //                         type="radio" 
// //                         name="rating_filter" 
// //                         checked={selectedRating === rate.label}
// //                         onChange={() => setSelectedRating(rate.label)}
// //                         className="accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
// //                       />
// //                       <div className="flex items-center gap-1">
// //                         <div className="flex text-yellow-400">
// //                           {[...Array(5)].map((_, i) => (
// //                             <Star key={i} size={11} fill={i < rate.stars ? "#f59e0b" : "none"} className={i < rate.stars ? "text-amber-500" : "text-gray-200"} />
// //                           ))}
// //                         </div>
// //                         <span className="text-[11px] font-medium text-gray-600">{rate.label}</span>
// //                       </div>
// //                     </label>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Apply & Clear CTA Buttons */}
// //             <div className="pt-4 border-t border-gray-100 space-y-2 mt-auto">
// //               <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg shadow flex items-center justify-center gap-2 text-xs transition active:scale-[0.98]">
// //                 <span>Apply Filters</span>
// //                 <SlidersHorizontal size={14} />
// //               </button>
// //               <button 
// //                 onClick={clearAllFilters} 
// //                 className="w-full text-center text-[#FF5722] font-semibold text-xs hover:underline py-1"
// //               >
// //                 Clear All Filters
// //               </button>
// //             </div>
// //           </aside>

// //           {/* ================= MAIN CONTENT AREA ================= */}
// //           <main className="flex-1 space-y-6 w-full flex flex-col justify-between">
            
// //             <div className="space-y-6">
// //               {/* Header */}
// //               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
// //                 <div>
// //                   <h1 className="text-2xl font-bold text-[#FF5722] flex items-center gap-2">
// //                     All Mentors
// //                     <span className="text-xs font-normal text-[#FF5722] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
// //                       (326 Mentors Found)
// //                     </span>
// //                   </h1>
// //                   <p className="text-gray-500 text-xs mt-0.5">
// //                     Connect with expert mentors and achieve your academic and career goals.
// //                   </p>
// //                 </div>

// //                 {/* Sort By & View Toggle */}
// //                 <div className="flex items-center gap-3">
// //                   <div className="flex items-center gap-2">
// //                     <span className="text-gray-500">Sort By</span>
// //                     <select className="border border-gray-300 rounded-lg p-1.5 bg-white text-xs text-gray-700 focus:outline-none">
// //                       <option>Recommended</option>
// //                       <option>Rating: High to Low</option>
// //                       <option>Price: Low to High</option>
// //                     </select>
// //                   </div>
// //                   <div className="flex border rounded-lg bg-white p-0.5 border-gray-200">
// //                     <button className="p-1 bg-[#FF5722] text-white rounded"><Grid size={14} /></button>
// //                     <button className="p-1 text-gray-400 hover:text-gray-600"><List size={14} /></button>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Active Filters Bar */}
// //               {activeFilters.length > 0 && (
// //                 <div className="flex flex-wrap items-center gap-2">
// //                   <span className="font-medium text-gray-600 text-xs">Active Filters:</span>
// //                   {activeFilters.map((filter) => (
// //                     <span
// //                       key={filter}
// //                       className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] rounded-full shadow-sm"
// //                     >
// //                       {filter}
// //                       <X
// //                         size={12}
// //                         className="cursor-pointer hover:text-red-500"
// //                         onClick={() => removeFilter(filter)}
// //                       />
// //                     </span>
// //                   ))}
// //                   <button
// //                     onClick={clearAllFilters}
// //                     className="text-[#FF5722] text-xs hover:underline ml-2 font-medium"
// //                   >
// //                     Clear All
// //                   </button>
// //                 </div>
// //               )}

// //               {/* Mentors Grid */}
// //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
// //                 {INITIAL_MENTORS.map((mentor) => {
// //                   const isFav = favorites.includes(mentor.id);
// //                   return (
// //                     <div
// //                       key={mentor.id}
// //                       className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden relative"
// //                     >
// //                       {/* Available Badge */}
// //                       <div className="p-3 pb-0 flex items-center justify-between">
// //                         <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
// //                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
// //                           Available Now
// //                         </span>
// //                         <button
// //                           onClick={() => toggleFavorite(mentor.id)}
// //                           className="text-gray-400 hover:text-red-500 transition"
// //                         >
// //                           <Heart
// //                             size={16}
// //                             fill={isFav ? '#ef4444' : 'none'}
// //                             className={isFav ? 'text-red-500' : 'text-gray-400'}
// //                           />
// //                         </button>
// //                       </div>

// //                       {/* Mentor Details */}
// //                       <div className="p-3 text-center flex-1 flex flex-col justify-between">
// //                         <div>
// //                           <div className="relative inline-block mb-2">
// //                             <img
// //                               src={mentor.image}
// //                               alt={mentor.name}
// //                               className="w-16 h-16 rounded-full object-cover mx-auto ring-2 ring-emerald-400/30"
// //                             />
// //                             <CheckCircle2
// //                               size={16}
// //                               className="text-emerald-500 bg-white rounded-full absolute bottom-0 right-0 fill-emerald-500 text-white"
// //                             />
// //                           </div>

// //                           <h3 className="font-bold text-gray-900 text-sm">{mentor.name}</h3>
// //                           <p className="text-emerald-600 text-[11px] font-medium">{mentor.role}</p>

// //                           {/* Ratings */}
// //                           <div className="flex items-center justify-center gap-1 text-[11px] mt-1.5 text-gray-600">
// //                             <Star size={12} fill="#eab308" className="text-yellow-500" />
// //                             <span className="font-bold text-gray-800">{mentor.rating}</span>
// //                             <span>({mentor.reviewsCount})</span>
// //                             <span className="text-gray-300">•</span>
// //                             <span>{mentor.studentsCount} Students</span>
// //                           </div>

// //                           {/* Experience */}
// //                           <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full mt-2">
// //                             <Clock size={10} />
// //                             <span>{mentor.experienceYears}+ Years Experience</span>
// //                           </div>

// //                           <p className="text-[10px] text-gray-500 mt-2 line-clamp-2 px-1">
// //                             <strong className="text-gray-700">Expert in:</strong> {mentor.specializationText}
// //                           </p>

// //                           <div className="flex flex-wrap justify-center gap-1 mt-2.5">
// //                             {mentor.tags.map((tag) => (
// //                               <span
// //                                 key={tag}
// //                                 className="bg-purple-50 text-purple-600 text-[9px] font-medium px-2 py-0.5 rounded"
// //                               >
// //                                 {tag}
// //                               </span>
// //                             ))}
// //                           </div>
// //                         </div>

// //                         <div>
// //                           {/* Pricing */}
// //                           <div className="grid grid-cols-2 gap-2 my-3 pt-2 border-t border-dashed border-gray-200 text-left">
// //                             <div className="bg-gray-50 p-1.5 rounded">
// //                               <p className="text-[9px] text-gray-400">Online Classes</p>
// //                               <p className="text-[9px] text-gray-400">(1:1 Live Teaching)</p>
// //                               <p className="font-bold text-emerald-600 text-xs mt-0.5">
// //                                 ₹{mentor.hourlyRate} <span className="text-[9px] font-normal text-gray-500">/ hour</span>
// //                               </p>
// //                             </div>
// //                             <div className="bg-gray-50 p-1.5 rounded">
// //                               <p className="text-[9px] text-gray-400">Guidance Only</p>
// //                               <p className="text-[9px] text-gray-400">(Mentorship)</p>
// //                               <p className="font-bold text-emerald-600 text-xs mt-0.5">
// //                                 ₹{mentor.sessionRate} <span className="text-[9px] font-normal text-gray-500">/ session</span>
// //                               </p>
// //                             </div>
// //                           </div>

// //                           {/* Buttons */}
// //                           <div className="grid grid-cols-2 gap-2">
// //                             <a 
// //                               href={`/mentorprofile?id=${mentor.id}`}
// //                               onClick={(e) => {
// //                                 e.preventDefault();
// //                                 handleNavigateToProfile(mentor.id);
// //                               }}
// //                               className="w-full border border-[#FF5722] text-[#FF5722] hover:bg-orange-50 font-semibold py-1.5 rounded-lg text-[11px] transition text-center flex items-center justify-center cursor-pointer"
// //                             >
// //                               View Profile
// //                             </a>
// //                             <button className="w-full bg-[#FF5722] text-white hover:bg-orange-600 font-semibold py-1.5 rounded-lg text-[11px] transition shadow-sm">
// //                               Book Session
// //                             </button>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>

// //             {/* Bottom Controls & Footer Badges */}
// //             <div className="space-y-6 pt-4">
// //               {/* Pagination */}
// //               <div className="flex justify-center items-center gap-1">
// //                 <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronLeft size={14} /></button>
// //                 <button className="w-6 h-6 rounded bg-[#FF5722] text-white font-medium text-xs flex items-center justify-center">1</button>
// //                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">2</button>
// //                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">3</button>
// //                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">4</button>
// //                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">5</button>
// //                 <span className="px-1 text-gray-400 text-xs">...</span>
// //                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">14</button>
// //                 <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronRight size={14} /></button>
// //               </div>

// //               {/* Request Banner */}
// //               <div className="bg-red-50/60 border border-red-100 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
// //                 <div className="flex items-center gap-3">
// //                   <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
// //                     <MessageSquare size={20} />
// //                   </div>
// //                   <div>
// //                     <h3 className="font-bold text-gray-900 text-sm">Can't find the right mentor?</h3>
// //                     <p className="text-gray-600 text-xs">Tell us your requirements and we'll match you with the perfect mentor for your goals.</p>
// //                   </div>
// //                 </div>
// //                 <button className="bg-[#FF5722] hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition flex-shrink-0">
// //                   Request a Mentor <ChevronRight size={14} />
// //                 </button>
// //               </div>

// //             </div>

// //           </main>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { 
//   Star, Heart, Clock, ShieldCheck, 
//   CheckCircle2, ChevronRight, ChevronLeft, X, 
//   Info, Grid, List, MessageSquare, Headphones, 
//   Calendar, Lock, RotateCcw, SlidersHorizontal, Zap, ArrowLeft, Award, BookOpen, User
// } from 'lucide-react';
// import Banner from './components/Banner';

// // --- TYPES ---
// export interface Mentor {
//   id: number;
//   name: string;
//   role: string;
//   expertise: string;
//   image: string;
//   rating: number;
//   reviewsCount: number;
//   studentsCount: string;
//   experienceYears: number;
//   tags: string[];
//   hourlyRate: number;
//   sessionRate: number;
//   specializationText: string;
//   isAvailable: boolean;
// }

// // --- MOCK DATA ---
// const INITIAL_MENTORS: Mentor[] = [
//   {
//     id: 1,
//     name: 'Dr. Arjun Mehta',
//     role: 'NEET Expert – Physics',
//     expertise: 'Mechanics, Optics, Electrostatics, Modern Physics',
//     image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 256,
//     studentsCount: '12,500+',
//     experienceYears: 8,
//     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
//     hourlyRate: 800,
//     sessionRate: 499,
//     specializationText: 'Mechanics, Optics, Electrostatics, Modern Physics',
//     isAvailable: true,
//   },
//   {
//     id: 2,
//     name: 'Dr. Priya Sharma',
//     role: 'NEET Expert – Chemistry',
//     expertise: 'Organic, Inorganic, Physical Chemistry',
//     image: 'https://images.unsplash.com/photo-1594824813566-82823d5afe4a?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 198,
//     studentsCount: '9,800+',
//     experienceYears: 7,
//     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
//     hourlyRate: 700,
//     sessionRate: 449,
//     specializationText: 'Organic, Inorganic, Physical Chemistry',
//     isAvailable: true,
//   },
//   {
//     id: 3,
//     name: 'Dr. Neha Singh',
//     role: 'NEET Expert – Botany',
//     expertise: 'Plant Physiology, Genetics, Ecology, Biotechnology',
//     image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80',
//     rating: 4.8,
//     reviewsCount: 210,
//     studentsCount: '9,900+',
//     experienceYears: 6,
//     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
//     hourlyRate: 600,
//     sessionRate: 399,
//     specializationText: 'Plant Physiology, Genetics, Ecology, Biotechnology',
//     isAvailable: true,
//   },
//   {
//     id: 4,
//     name: 'Dr. Karan Verma',
//     role: 'NEET Expert – Zoology',
//     expertise: 'Human Physiology, Genetics, Animal Kingdom',
//     image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80',
//     rating: 4.8,
//     reviewsCount: 176,
//     studentsCount: '7,600+',
//     experienceYears: 7,
//     tags: ['Tutor', 'Homework Helper', 'Mentorship'],
//     hourlyRate: 650,
//     sessionRate: 449,
//     specializationText: 'Human Physiology, Genetics, Animal Kingdom',
//     isAvailable: true,
//   },
//   {
//     id: 5,
//     name: 'Dr. Ayesha Khan',
//     role: 'NEET Expert – Physics',
//     expertise: 'Electrostatics, Current Electricity, Waves',
//     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
//     rating: 4.7,
//     reviewsCount: 154,
//     studentsCount: '6,200+',
//     experienceYears: 5,
//     tags: ['Tutor', 'Doubt Solver', 'Homework Helper'],
//     hourlyRate: 600,
//     sessionRate: 399,
//     specializationText: 'Electrostatics, Current Electricity, Waves',
//     isAvailable: true,
//   },
//   {
//     id: 6,
//     name: 'Dr. Rohan Iyer',
//     role: 'NEET Expert – Chemistry',
//     expertise: 'Chemical Bonding, Thermodynamics, Solutions',
//     image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80',
//     rating: 4.7,
//     reviewsCount: 132,
//     studentsCount: '5,400+',
//     experienceYears: 6,
//     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
//     hourlyRate: 550,
//     sessionRate: 379,
//     specializationText: 'Chemical Bonding, Thermodynamics, Solutions',
//     isAvailable: true,
//   },
//   {
//     id: 7,
//     name: 'Dr. Meera Nair',
//     role: 'NEET Expert – Botany',
//     expertise: 'Cell Biology, Ecology, Plant Diversity',
//     image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&auto=format&fit=crop&q=80',
//     rating: 4.6,
//     reviewsCount: 122,
//     studentsCount: '4,900+',
//     experienceYears: 5,
//     tags: ['Tutor', 'Doubt Solver', 'Mentorship'],
//     hourlyRate: 500,
//     sessionRate: 349,
//     specializationText: 'Cell Biology, Ecology, Plant Diversity',
//     isAvailable: true,
//   },
//   {
//     id: 8,
//     name: 'Dr. Vivek Joshi',
//     role: 'NEET Expert – Zoology',
//     expertise: 'Animal Physiology, Evolution, Biotechnology',
//     image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=80',
//     rating: 4.6,
//     reviewsCount: 118,
//     studentsCount: '4,300+',
//     experienceYears: 6,
//     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
//     hourlyRate: 550,
//     sessionRate: 379,
//     specializationText: 'Animal Physiology, Evolution, Biotechnology',
//     isAvailable: true,
//   },
//   {
//     id: 9,
//     name: 'Dr. Ananya Roy',
//     role: 'NEET Expert – Organic Chem',
//     expertise: 'Hydrocarbons, Biomolecules, Reaction Mechanism',
//     image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 310,
//     studentsCount: '15,100+',
//     experienceYears: 9,
//     tags: ['Tutor', 'Mentorship', 'Concept Builder'],
//     hourlyRate: 850,
//     sessionRate: 520,
//     specializationText: 'Hydrocarbons, Biomolecules, Reaction Mechanism',
//     isAvailable: true,
//   },
//   {
//     id: 10,
//     name: 'Dr. Rajesh Gupta',
//     role: 'NEET Expert – Modern Physics',
//     expertise: 'Semiconductors, Atoms & Nuclei, Dual Nature',
//     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
//     rating: 4.8,
//     reviewsCount: 220,
//     studentsCount: '11,200+',
//     experienceYears: 10,
//     tags: ['Tutor', 'Doubt Solver'],
//     hourlyRate: 900,
//     sessionRate: 550,
//     specializationText: 'Semiconductors, Atoms & Nuclei, Dual Nature',
//     isAvailable: true,
//   },
//   {
//     id: 11,
//     name: 'Dr. Sunita Patel',
//     role: 'NEET Expert – Genetics',
//     expertise: 'Molecular Basis of Inheritance, Mendelian Genetics',
//     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
//     rating: 4.7,
//     reviewsCount: 185,
//     studentsCount: '8,400+',
//     experienceYears: 7,
//     tags: ['Mentorship', 'Homework Helper'],
//     hourlyRate: 650,
//     sessionRate: 410,
//     specializationText: 'Molecular Basis of Inheritance, Mendelian Genetics',
//     isAvailable: true,
//   },
//   {
//     id: 12,
//     name: 'Dr. Amit Trivedi',
//     role: 'NEET Expert – Physical Chem',
//     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 290,
//     studentsCount: '13,800+',
//     experienceYears: 8,
//     tags: ['Tutor', 'Test Prep'],
//     hourlyRate: 750,
//     sessionRate: 480,
//     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     isAvailable: true,
//   },
//   {
//     id: 13,
//     name: 'Dr. Anil Kumar',
//     role: 'NEET Expert – Physical Chem',
//     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 290,
//     studentsCount: '13,800+',
//     experienceYears: 8,
//     tags: ['Tutor', 'Test Prep'],
//     hourlyRate: 750,
//     sessionRate: 480,
//     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     isAvailable: true,
//   },
//   {
//     id: 14,
//     name: 'Dr. Rohit Sharma',
//     role: 'NEET Expert – Physical Chem',
//     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 290,
//     studentsCount: '13,800+',
//     experienceYears: 8,
//     tags: ['Tutor', 'Test Prep'],
//     hourlyRate: 750,
//     sessionRate: 480,
//     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     isAvailable: true,
//   },
//   {
//     id: 15,
//     name: 'Dr. Vikas Gupta',
//     role: 'NEET Expert – Physical Chem',
//     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 290,
//     studentsCount: '13,800+',
//     experienceYears: 8,
//     tags: ['Tutor', 'Test Prep'],
//     hourlyRate: 750,
//     sessionRate: 480,
//     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     isAvailable: true,
//   },
//   {
//     id: 16,
//     name: 'Dr. Dhemdra',
//     role: 'NEET Expert – Physical Chem',
//     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 290,
//     studentsCount: '13,800+',
//     experienceYears: 8,
//     tags: ['Tutor', 'Test Prep'],
//     hourlyRate: 750,
//     sessionRate: 480,
//     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     isAvailable: true,
//   }
// ];

// export default function MentorsPage() {
//   const [favorites, setFavorites] = useState<number[]>([]);
//   const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
//   const [activeFilters, setActiveFilters] = useState<string[]>([
//     'NEET',
//     'Physics',
//     'Both Teaching + Guidance',
//     'Available Now',
//   ]);

//   // State Management matching the original filter
//   const [selectedMainExam, setSelectedMainExam] = useState<string>('NEET');
//   const [selectedExams, setSelectedExams] = useState<string[]>([]);
//   const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Physics', 'Chemistry', 'Botany', 'Zoology']);
//   const [selectedTopic, setSelectedTopic] = useState<string>('All Topics');
//   const [selectedServices, setSelectedServices] = useState<string[]>([
//     'Online Classes / Tutor',
//     'Mentorship & Guidance',
//     'Homework Helper',
//     '1:1 Doubt Solving',
//     'Test Preparation',
//     'College Counselling'
//   ]);
//   const [guidanceMode, setGuidanceMode] = useState<string>('Both Teaching + Guidance');
//   const [teachingFeeMax, setTeachingFeeMax] = useState<number>(5000);
//   const [guidanceFeeMax, setGuidanceFeeMax] = useState<number>(5000);
//   const [selectedDays, setSelectedDays] = useState<string[]>(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
//   const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
//   const [isInstantAvailable, setIsInstantAvailable] = useState<boolean>(true);
//   const [selectedLanguage, setSelectedLanguage] = useState<string>('');
//   const [selectedLanguagesList, setSelectedLanguagesList] = useState<string[]>(['English']);
//   const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
//   const [selectedRating, setSelectedRating] = useState<string>('');

//   const toggleFavorite = (id: number) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
//     );
//   };

//   const removeFilter = (filter: string) => {
//     setActiveFilters((prev) => prev.filter((f) => f !== filter));
//   };

//   const toggleArrayItem = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
//     if (list.includes(item)) {
//       setList(list.filter((i) => i !== item));
//     } else {
//       setList([...list, item]);
//     }
//   };

//   const clearAllFilters = () => {
//     setActiveFilters([]);
//     setSelectedExams([]);
//     setSelectedSubjects([]);
//     setSelectedServices([]);
//     setSelectedDays([]);
//     setSelectedTimes([]);
//     setIsInstantAvailable(false);
//     setSelectedLanguagesList([]);
//     setSelectedExperiences([]);
//     setSelectedRating('');
//   };

//   const handleNavigateToProfile = (mentor: Mentor) => {
//     setSelectedMentor(mentor);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs">
//       {/* Top Banner */}
//       <Banner />

//       {/* Main Container */}
//       <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        
//         {/* Breadcrumb Navigation */}
//         <nav className="text-gray-400 text-xs mb-4 flex items-center gap-1.5 font-medium">
//           <span 
//             onClick={() => setSelectedMentor(null)} 
//             className="hover:text-orange-500 cursor-pointer transition"
//           >
//             Home
//           </span>
//           <span>&gt;</span>
//           <span 
//             onClick={() => setSelectedMentor(null)} 
//             className="hover:text-orange-500 cursor-pointer transition"
//           >
//             Mentorship
//           </span>
//           <span>&gt;</span>
//           {selectedMentor ? (
//             <>
//               <span 
//                 onClick={() => setSelectedMentor(null)} 
//                 className="hover:text-orange-500 cursor-pointer transition"
//               >
//                 All Mentors
//               </span>
//               <span>&gt;</span>
//               <span className="text-gray-800 font-semibold">{selectedMentor.name}</span>
//             </>
//           ) : (
//             <span className="text-gray-800 font-semibold">All Mentors</span>
//           )}
//         </nav>

//         {/* Dynamic View: If mentor is selected, show profile view, else show full list */}
//         {selectedMentor ? (
//           /* ================= MENTOR PROFILE VIEW ================= */
//           <div className="space-y-6">
//             <button 
//               onClick={() => setSelectedMentor(null)}
//               className="flex items-center gap-2 text-[#FF5722] font-semibold text-xs bg-orange-50 hover:bg-orange-100 border border-orange-200 px-3 py-1.5 rounded-lg transition"
//             >
//               <ArrowLeft size={14} /> Back to All Mentors
//             </button>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               {/* Profile Card Left */}
//               <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
//                 <div className="text-center space-y-2">
//                   <div className="relative inline-block">
//                     <img
//                       src={selectedMentor.image}
//                       alt={selectedMentor.name}
//                       className="w-28 h-28 rounded-full object-cover mx-auto ring-4 ring-emerald-100 shadow-sm"
//                     />
//                     <CheckCircle2
//                       size={22}
//                       className="text-emerald-500 bg-white rounded-full absolute bottom-0 right-1 fill-emerald-500 text-white"
//                     />
//                   </div>
//                   <h2 className="font-bold text-gray-900 text-lg">{selectedMentor.name}</h2>
//                   <p className="text-emerald-600 text-xs font-semibold">{selectedMentor.role}</p>
                  
//                   <div className="flex items-center justify-center gap-1 text-xs text-gray-600 pt-1">
//                     <Star size={14} fill="#eab308" className="text-yellow-500" />
//                     <span className="font-bold text-gray-800">{selectedMentor.rating}</span>
//                     <span>({selectedMentor.reviewsCount} reviews)</span>
//                   </div>

//                   <div className="flex justify-center gap-2 pt-2">
//                     {selectedMentor.tags.map((tag) => (
//                       <span key={tag} className="bg-purple-50 text-purple-600 text-[10px] font-medium px-2.5 py-1 rounded-md border border-purple-100">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="border-t border-dashed border-gray-200 pt-4 space-y-3 text-xs">
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-500 flex items-center gap-1.5"><Clock size={14} /> Experience</span>
//                     <span className="font-semibold text-gray-800">{selectedMentor.experienceYears}+ Years</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-500 flex items-center gap-1.5"><User size={14} /> Students Taught</span>
//                     <span className="font-semibold text-gray-800">{selectedMentor.studentsCount}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-500 flex items-center gap-1.5"><Zap size={14} /> Status</span>
//                     <span className="text-emerald-600 font-semibold flex items-center gap-1">
//                       <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Available Now
//                     </span>
//                   </div>
//                 </div>

//                 <div className="border-t border-dashed border-gray-200 pt-4">
//                   <div className="bg-gray-50 p-3 rounded-xl space-y-2">
//                     <p className="text-gray-500 text-[11px]">Pricing Details:</p>
//                     <div className="flex justify-between items-center text-xs">
//                       <span>Online Classes (1:1)</span>
//                       <span className="font-bold text-emerald-600">₹{selectedMentor.hourlyRate}/hr</span>
//                     </div>
//                     <div className="flex justify-between items-center text-xs">
//                       <span>Guidance / Mentorship</span>
//                       <span className="font-bold text-emerald-600">₹{selectedMentor.sessionRate}/session</span>
//                     </div>
//                   </div>
                  
//                   <button className="w-full mt-4 bg-[#FF5722] text-white hover:bg-orange-600 font-semibold py-2.5 rounded-xl text-xs transition shadow-sm">
//                     Book Session Now
//                   </button>
//                 </div>
//               </div>

//               {/* Profile Overview Details */}
//               <div className="lg:col-span-2 space-y-6">
//                 <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
//                   <h3 className="text-sm font-bold text-[#1E293B] border-b pb-2 flex items-center gap-2">
//                     <BookOpen size={16} className="text-[#FF5722]" /> Specialization & Expertise
//                   </h3>
//                   <p className="text-gray-600 text-xs leading-relaxed">
//                     {selectedMentor.specializationText}
//                   </p>
//                   <div className="p-3 bg-orange-50/50 rounded-lg border border-orange-100 text-xs text-gray-700">
//                     <strong className="text-orange-800">Expertise Core Topics:</strong> {selectedMentor.expertise}
//                   </div>
//                 </div>

//                 <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
//                   <h3 className="text-sm font-bold text-[#1E293B] border-b pb-2 flex items-center gap-2">
//                     <Award size={16} className="text-[#FF5722]" /> About Mentorship Program
//                   </h3>
//                   <p className="text-gray-600 text-xs leading-relaxed">
//                     Providing top-tier doubt resolution, deep exam prep strategies, and step-by-step guidance tailored for NEET aspirants. Personalized regular sessions, mock test planning, and physical chemistry/physics focus according to requirement.
//                   </p>
                  
//                   <div className="grid grid-cols-2 gap-3 pt-2">
//                     <div className="border border-gray-100 p-3 rounded-lg bg-gray-50/50">
//                       <p className="font-semibold text-gray-800 text-xs mb-1">1:1 Mentorship</p>
//                       <p className="text-gray-500 text-[11px]">Direct live interactive sessions focused on your weak areas.</p>
//                     </div>
//                     <div className="border border-gray-100 p-3 rounded-lg bg-gray-50/50">
//                       <p className="font-semibold text-gray-800 text-xs mb-1">Doubt Solving</p>
//                       <p className="text-gray-500 text-[11px]">Step-by-step breakdown of complex formulas and problems.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           /* ================= MAIN LISTING VIEW ================= */
//           <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            
//             {/* ================= SIDEBAR FILTERS ================= */}
//             <aside className="w-full lg:w-[290px] flex-shrink-0 bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4 flex flex-col justify-between">
//               <div className="space-y-4">
//                 {/* Header */}
//                 <div className="flex justify-between items-center pb-2 border-b border-gray-100">
//                   <h2 className="font-bold text-sm text-[#1E293B]">Filter Mentors</h2>
//                   <button 
//                     onClick={clearAllFilters} 
//                     className="text-[#FF5722] font-semibold text-xs hover:underline flex items-center gap-1"
//                   >
//                     Clear All <RotateCcw size={12} />
//                   </button>
//                 </div>

//                 {/* 1. Exam / Category */}
//                 <div>
//                   <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                     <span>1. Exam / Category</span>
//                     <Info size={13} className="text-gray-400 cursor-pointer" />
//                   </div>
                  
//                   <div className="flex items-center gap-2 mb-2">
//                     <input 
//                       type="checkbox" 
//                       checked={true}
//                       readOnly
//                       className="rounded border-gray-300 text-[#FF5722] accent-[#FF5722] w-3.5 h-3.5" 
//                     />
//                     <select 
//                       value={selectedMainExam}
//                       onChange={(e) => setSelectedMainExam(e.target.value)}
//                       className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-800 font-semibold bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722]"
//                     >
//                       <option value="NEET">NEET</option>
//                       <option value="JEE Main">JEE Main</option>
//                       <option value="JEE Advanced">JEE Advanced</option>
//                     </select>
//                   </div>

//                   <div className="space-y-2 pl-0.5">
//                     {[
//                       'JEE Main', 
//                       'JEE Advanced', 
//                       'Class 11 – 12', 
//                       'Class 6 – 10', 
//                       'CUET', 
//                       'Olympiad', 
//                       'Boards', 
//                       'Other Exams'
//                     ].map((item) => (
//                       <label key={item} className="flex items-center gap-2.5 text-gray-600 cursor-pointer hover:text-gray-900">
//                         <input 
//                           type="checkbox" 
//                           checked={selectedExams.includes(item)}
//                           onChange={() => toggleArrayItem(item, selectedExams, setSelectedExams)}
//                           className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                         />
//                         <span className="font-medium text-[11px]">{item}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* 2. Subject (NEET) */}
//                 <div className="pt-3 border-t border-gray-100">
//                   <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                     <span>2. Subject ({selectedMainExam})</span>
//                     <Info size={13} className="text-gray-400 cursor-pointer" />
//                   </div>
//                   <div className="space-y-2">
//                     {['Physics', 'Chemistry', 'Botany', 'Zoology'].map((sub) => (
//                       <label key={sub} className="flex items-center gap-2.5 text-gray-700 font-medium cursor-pointer">
//                         <input 
//                           type="checkbox" 
//                           checked={selectedSubjects.includes(sub)}
//                           onChange={() => toggleArrayItem(sub, selectedSubjects, setSelectedSubjects)}
//                           className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                         />
//                         <span className="text-[11px]">{sub}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* 3. Topic / Expertise */}
//                 <div className="pt-3 border-t border-gray-100">
//                   <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                     <span>3. Topic / Expertise</span>
//                     <Info size={13} className="text-gray-400 cursor-pointer" />
//                   </div>
//                   <select 
//                     value={selectedTopic}
//                     onChange={(e) => setSelectedTopic(e.target.value)}
//                     className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722]"
//                   >
//                     <option>All Topics</option>
//                     <option>Mechanics</option>
//                     <option>Optics</option>
//                     <option>Electrostatics</option>
//                     <option>Organic Chemistry</option>
//                   </select>
//                 </div>

//                 {/* 4. Service Type */}
//                 <div className="pt-3 border-t border-gray-100">
//                   <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                     <span>4. Service Type</span>
//                     <Info size={13} className="text-gray-400 cursor-pointer" />
//                   </div>
//                   <div className="space-y-2">
//                     {[
//                       { name: 'Online Classes / Tutor', count: 512 },
//                       { name: 'Mentorship & Guidance', count: 438 },
//                       { name: 'Homework Helper', count: 286 },
//                       { name: '1:1 Doubt Solving', count: 324 },
//                       { name: 'Test Preparation', count: 412 },
//                       { name: 'College Counselling', count: 196 },
//                     ].map((item) => (
//                       <label key={item.name} className="flex items-center justify-between text-gray-700 cursor-pointer">
//                         <div className="flex items-center gap-2.5">
//                           <input 
//                             type="checkbox" 
//                             checked={selectedServices.includes(item.name)}
//                             onChange={() => toggleArrayItem(item.name, selectedServices, setSelectedServices)}
//                             className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                           />
//                           <span className="text-[11px] font-medium">{item.name}</span>
//                         </div>
//                         <span className="text-gray-400 text-[10px]">({item.count})</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* 5. Teaching / Guidance Mode */}
//                 <div className="pt-3 border-t border-gray-100">
//                   <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                     <span>5. Teaching / Guidance Mode</span>
//                     <Info size={13} className="text-gray-400 cursor-pointer" />
//                   </div>
//                   <div className="space-y-2">
//                     {['Online Teaching Only', 'Guidance Only', 'Both Teaching + Guidance', 'Available Local Tutor'].map((mode) => (
//                       <label key={mode} className="flex items-center gap-2.5 text-gray-700 cursor-pointer">
//                         <input 
//                           type="radio" 
//                           name="guidance_mode" 
//                           checked={guidanceMode === mode}
//                           onChange={() => setGuidanceMode(mode)}
//                           className="accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                         />
//                         <span className="text-[11px] font-medium">{mode}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* 6. Price Range */}
//                 <div className="pt-3 border-t border-gray-100">
//                   <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                     <span>6. Price Range</span>
//                     <Info size={13} className="text-gray-400 cursor-pointer" />
//                   </div>
                  
//                   <div className="space-y-3">
//                     <div>
//                       <p className="text-gray-600 text-[11px] font-semibold mb-1">Teaching Fee (₹ / hour)</p>
//                       <div className="relative flex items-center my-1.5">
//                         <input 
//                           type="range" 
//                           min="0" 
//                           max="5000" 
//                           value={teachingFeeMax} 
//                           onChange={(e) => setTeachingFeeMax(Number(e.target.value))}
//                           className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" 
//                         />
//                       </div>
//                       <div className="flex gap-2 items-center">
//                         <input type="text" value="₹ 0" readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
//                         <span className="text-gray-400">-</span>
//                         <input type="text" value={`₹ ${teachingFeeMax}+`} readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
//                       </div>
//                     </div>

//                     <div>
//                       <p className="text-gray-600 text-[11px] font-semibold mb-1">Guidance Fee (₹ / session)</p>
//                       <div className="relative flex items-center my-1.5">
//                         <input 
//                           type="range" 
//                           min="0" 
//                           max="5000" 
//                           value={guidanceFeeMax} 
//                           onChange={(e) => setGuidanceFeeMax(Number(e.target.value))}
//                           className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" 
//                         />
//                       </div>
//                       <div className="flex gap-2 items-center">
//                         <input type="text" value="₹ 0" readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
//                         <span className="text-gray-400">-</span>
//                         <input type="text" value={`₹ ${guidanceFeeMax}+`} readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* 7. Available Days */}
//                 <div className="pt-3 border-t border-gray-100">
//                   <div className="flex items-center justify-between font-bold text-[#1E293B] mb-2">
//                     <span className="flex items-center gap-1">
//                       <span>7. Available Days</span>
//                       <Info size={13} className="text-gray-400 cursor-pointer" />
//                     </span>
//                     <span className="text-xs text-gray-500 cursor-pointer">^</span>
//                   </div>
//                   <div className="grid grid-cols-4 gap-1.5">
//                     {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
//                       const isSelected = selectedDays.includes(day);
//                       return (
//                         <button
//                           key={day}
//                           type="button"
//                           onClick={() => toggleArrayItem(day, selectedDays, setSelectedDays)}
//                           className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded-md border text-[11px] font-medium transition ${
//                             isSelected 
//                               ? 'border-[#FF5722] text-[#FF5722] bg-orange-50/50' 
//                               : 'border-gray-200 text-gray-600 hover:bg-gray-50'
//                           }`}
//                         >
//                           <input 
//                             type="checkbox" 
//                             checked={isSelected}
//                             readOnly
//                             className="accent-[#FF5722] w-3 h-3 rounded"
//                           />
//                           <span>{day}</span>
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* 8. Availability Time */}
//                 <div className="pt-3 border-t border-gray-100">
//                   <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                     <span>8. Availability Time</span>
//                     <Info size={13} className="text-gray-400 cursor-pointer" />
//                   </div>
//                   <div className="space-y-2">
//                     {[
//                       { name: 'Morning', time: '(6 AM – 12 PM)' },
//                       { name: 'Afternoon', time: '(12 PM – 4 PM)' },
//                       { name: 'Evening', time: '(4 PM – 9 PM)' },
//                       { name: 'Night', time: '(9 PM – 12 AM)' },
//                     ].map((slot) => (
//                       <label key={slot.name} className="flex items-center gap-2.5 text-gray-600 cursor-pointer">
//                         <input 
//                           type="checkbox" 
//                           checked={selectedTimes.includes(slot.name)}
//                           onChange={() => toggleArrayItem(slot.name, selectedTimes, setSelectedTimes)}
//                           className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                         />
//                         <span className="text-[11px] font-medium text-gray-700">{slot.name}</span>
//                         <span className="text-gray-400 text-[10px]">{slot.time}</span>
//                       </label>
//                     ))}
//                   </div>
//                   <div className="mt-3">
//                     <input type="range" min="6" max="24" defaultValue="18" className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" />
//                     <div className="flex justify-between text-[10px] text-gray-500 mt-1">
//                       <span>06:00 AM</span>
//                       <span>12:00 AM</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* 9. Instant Availability */}
//                 <div className="pt-3 border-t border-gray-100">
//                   <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                     <span>9. Instant Availability</span>
//                     <Info size={13} className="text-gray-400 cursor-pointer" />
//                   </div>
//                   <label className="flex items-center gap-2 text-gray-700 cursor-pointer font-medium text-[11px]">
//                     <input 
//                       type="checkbox" 
//                       checked={isInstantAvailable}
//                       onChange={(e) => setIsInstantAvailable(e.target.checked)}
//                       className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                     />
//                     <span>Available Now</span>
//                     <Zap size={13} className="text-emerald-500 fill-emerald-500" />
//                   </label>
//                 </div>

//                 {/* 10. Language */}
//                 <div className="pt-3 border-t border-gray-100">
//                   <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                     <span>10. Language</span>
//                     <Info size={13} className="text-gray-400 cursor-pointer" />
//                   </div>
//                   <select 
//                     value={selectedLanguage}
//                     onChange={(e) => setSelectedLanguage(e.target.value)}
//                     className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722] mb-2"
//                   >
//                     <option value="">Select Language</option>
//                     <option value="English">English</option>
//                     <option value="Hindi">Hindi</option>
//                     <option value="Hinglish">Hinglish</option>
//                   </select>
//                   <div className="flex flex-wrap gap-1.5">
//                     {['English', 'Hindi', 'Hinglish', '+ More'].map((lang) => {
//                       const isSel = selectedLanguagesList.includes(lang);
//                       return (
//                         <button
//                           key={lang}
//                           type="button"
//                           onClick={() => toggleArrayItem(lang, selectedLanguagesList, setSelectedLanguagesList)}
//                           className={`px-3 py-1 rounded-md border text-[11px] font-medium transition ${
//                             isSel 
//                               ? 'border-[#FF5722] text-[#FF5722] bg-orange-50/50' 
//                               : 'border-gray-200 text-gray-600 hover:bg-gray-50'
//                           }`}
//                         >
//                           {lang}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* 11. Experience */}
//                 <div className="pt-3 border-t border-gray-100">
//                   <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                     <span>11. Experience</span>
//                     <Info size={13} className="text-gray-400 cursor-pointer" />
//                   </div>
//                   <div className="grid grid-cols-2 gap-2">
//                     {['0 – 2 Years', '3 – 5 Years', '6 – 10 Years', '10+ Years'].map((exp) => (
//                       <label key={exp} className="flex items-center gap-2 text-gray-600 cursor-pointer">
//                         <input 
//                           type="checkbox" 
//                           checked={selectedExperiences.includes(exp)}
//                           onChange={() => toggleArrayItem(exp, selectedExperiences, setSelectedExperiences)}
//                           className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                         />
//                         <span className="text-[11px] font-medium text-gray-700">{exp}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* 12. Rating */}
//                 <div className="pt-3 border-t border-gray-100">
//                   <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                     <span>12. Rating</span>
//                     <Info size={13} className="text-gray-400 cursor-pointer" />
//                   </div>
//                   <div className="space-y-2">
//                     {[
//                       { label: '4.5 & above', stars: 5 },
//                       { label: '4.0 & above', stars: 4 },
//                       { label: '3.5 & above', stars: 3 },
//                       { label: '3.0 & above', stars: 3 },
//                     ].map((rate) => (
//                       <label key={rate.label} className="flex items-center gap-2 cursor-pointer">
//                         <input 
//                           type="radio" 
//                           name="rating_filter" 
//                           checked={selectedRating === rate.label}
//                           onChange={() => setSelectedRating(rate.label)}
//                           className="accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                         />
//                         <div className="flex items-center gap-1">
//                           <div className="flex text-yellow-400">
//                             {[...Array(5)].map((_, i) => (
//                               <Star key={i} size={11} fill={i < rate.stars ? "#f59e0b" : "none"} className={i < rate.stars ? "text-amber-500" : "text-gray-200"} />
//                             ))}
//                           </div>
//                           <span className="text-[11px] font-medium text-gray-600">{rate.label}</span>
//                         </div>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Apply & Clear CTA Buttons */}
//               <div className="pt-4 border-t border-gray-100 space-y-2 mt-auto">
//                 <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg shadow flex items-center justify-center gap-2 text-xs transition active:scale-[0.98]">
//                   <span>Apply Filters</span>
//                   <SlidersHorizontal size={14} />
//                 </button>
//                 <button 
//                   onClick={clearAllFilters} 
//                   className="w-full text-center text-[#FF5722] font-semibold text-xs hover:underline py-1"
//                 >
//                   Clear All Filters
//                 </button>
//               </div>
//             </aside>

//             {/* ================= MAIN CONTENT AREA ================= */}
//             <main className="flex-1 space-y-6 w-full flex flex-col justify-between">
              
//               <div className="space-y-6">
//                 {/* Header */}
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                   <div>
//                     <h1 className="text-2xl font-bold text-[#FF5722] flex items-center gap-2">
//                       All Mentors
//                       <span className="text-xs font-normal text-[#FF5722] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
//                         (326 Mentors Found)
//                       </span>
//                     </h1>
//                     <p className="text-gray-500 text-xs mt-0.5">
//                       Connect with expert mentors and achieve your academic and career goals.
//                     </p>
//                   </div>

//                   {/* Sort By & View Toggle */}
//                   <div className="flex items-center gap-3">
//                     <div className="flex items-center gap-2">
//                       <span className="text-gray-500">Sort By</span>
//                       <select className="border border-gray-300 rounded-lg p-1.5 bg-white text-xs text-gray-700 focus:outline-none">
//                         <option>Recommended</option>
//                         <option>Rating: High to Low</option>
//                         <option>Price: Low to High</option>
//                       </select>
//                     </div>
//                     <div className="flex border rounded-lg bg-white p-0.5 border-gray-200">
//                       <button className="p-1 bg-[#FF5722] text-white rounded"><Grid size={14} /></button>
//                       <button className="p-1 text-gray-400 hover:text-gray-600"><List size={14} /></button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Active Filters Bar */}
//                 {activeFilters.length > 0 && (
//                   <div className="flex flex-wrap items-center gap-2">
//                     <span className="font-medium text-gray-600 text-xs">Active Filters:</span>
//                     {activeFilters.map((filter) => (
//                       <span
//                         key={filter}
//                         className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] rounded-full shadow-sm"
//                       >
//                         {filter}
//                         <X
//                           size={12}
//                           className="cursor-pointer hover:text-red-500"
//                           onClick={() => removeFilter(filter)}
//                         />
//                       </span>
//                     ))}
//                     <button
//                       onClick={clearAllFilters}
//                       className="text-[#FF5722] text-xs hover:underline ml-2 font-medium"
//                     >
//                       Clear All
//                     </button>
//                   </div>
//                 )}

//                 {/* Mentors Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//                   {INITIAL_MENTORS.map((mentor) => {
//                     const isFav = favorites.includes(mentor.id);
//                     return (
//                       <div
//                         key={mentor.id}
//                         className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden relative"
//                       >
//                         {/* Available Badge */}
//                         <div className="p-3 pb-0 flex items-center justify-between">
//                           <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
//                             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
//                             Available Now
//                           </span>
//                           <button
//                             onClick={() => toggleFavorite(mentor.id)}
//                             className="text-gray-400 hover:text-red-500 transition"
//                           >
//                             <Heart
//                               size={16}
//                               fill={isFav ? '#ef4444' : 'none'}
//                               className={isFav ? 'text-red-500' : 'text-gray-400'}
//                             />
//                           </button>
//                         </div>

//                         {/* Mentor Details */}
//                         <div className="p-3 text-center flex-1 flex flex-col justify-between">
//                           <div>
//                             <div className="relative inline-block mb-2">
//                               <img
//                                 src={mentor.image}
//                                 alt={mentor.name}
//                                 className="w-16 h-16 rounded-full object-cover mx-auto ring-2 ring-emerald-400/30"
//                               />
//                               <CheckCircle2
//                                 size={16}
//                                 className="text-emerald-500 bg-white rounded-full absolute bottom-0 right-0 fill-emerald-500 text-white"
//                               />
//                             </div>

//                             <h3 className="font-bold text-gray-900 text-sm">{mentor.name}</h3>
//                             <p className="text-emerald-600 text-[11px] font-medium">{mentor.role}</p>

//                             {/* Ratings */}
//                             <div className="flex items-center justify-center gap-1 text-[11px] mt-1.5 text-gray-600">
//                               <Star size={12} fill="#eab308" className="text-yellow-500" />
//                               <span className="font-bold text-gray-800">{mentor.rating}</span>
//                               <span>({mentor.reviewsCount})</span>
//                               <span className="text-gray-300">•</span>
//                               <span>{mentor.studentsCount} Students</span>
//                             </div>

//                             {/* Experience */}
//                             <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full mt-2">
//                               <Clock size={10} />
//                               <span>{mentor.experienceYears}+ Years Experience</span>
//                             </div>

//                             <p className="text-[10px] text-gray-500 mt-2 line-clamp-2 px-1">
//                               <strong className="text-gray-700">Expert in:</strong> {mentor.specializationText}
//                             </p>

//                             <div className="flex flex-wrap justify-center gap-1 mt-2.5">
//                               {mentor.tags.map((tag) => (
//                                 <span
//                                   key={tag}
//                                   className="bg-purple-50 text-purple-600 text-[9px] font-medium px-2 py-0.5 rounded"
//                                 >
//                                   {tag}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>

//                           <div>
//                             {/* Pricing */}
//                             <div className="grid grid-cols-2 gap-2 my-3 pt-2 border-t border-dashed border-gray-200 text-left">
//                               <div className="bg-gray-50 p-1.5 rounded">
//                                 <p className="text-[9px] text-gray-400">Online Classes</p>
//                                 <p className="text-[9px] text-gray-400">(1:1 Live Teaching)</p>
//                                 <p className="font-bold text-emerald-600 text-xs mt-0.5">
//                                   ₹{mentor.hourlyRate} <span className="text-[9px] font-normal text-gray-500">/ hour</span>
//                                 </p>
//                               </div>
//                               <div className="bg-gray-50 p-1.5 rounded">
//                                 <p className="text-[9px] text-gray-400">Guidance Only</p>
//                                 <p className="text-[9px] text-gray-400">(Mentorship)</p>
//                                 <p className="font-bold text-emerald-600 text-xs mt-0.5">
//                                   ₹{mentor.sessionRate} <span className="text-[9px] font-normal text-gray-500">/ session</span>
//                                 </p>
//                               </div>
//                             </div>

//                             {/* Buttons */}
//                             <div className="grid grid-cols-2 gap-2">
//                               <button 
//                                 onClick={() => handleNavigateToProfile(mentor)}
//                                 className="w-full border border-[#FF5722] text-[#FF5722] hover:bg-orange-50 font-semibold py-1.5 rounded-lg text-[11px] transition text-center flex items-center justify-center cursor-pointer"
//                               >
//                                 View Profile
//                               </button>
//                               <button className="w-full bg-[#FF5722] text-white hover:bg-orange-600 font-semibold py-1.5 rounded-lg text-[11px] transition shadow-sm">
//                                 Book Session
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Bottom Controls & Footer Badges */}
//               <div className="space-y-6 pt-4">
//                 {/* Pagination */}
//                 <div className="flex justify-center items-center gap-1">
//                   <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronLeft size={14} /></button>
//                   <button className="w-6 h-6 rounded bg-[#FF5722] text-white font-medium text-xs flex items-center justify-center">1</button>
//                   <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">2</button>
//                   <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">3</button>
//                   <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">4</button>
//                   <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">5</button>
//                   <span className="px-1 text-gray-400 text-xs">...</span>
//                   <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">14</button>
//                   <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronRight size={14} /></button>
//                 </div>

//                 {/* Request Banner */}
//                 <div className="bg-red-50/60 border border-red-100 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
//                       <MessageSquare size={20} />
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-gray-900 text-sm">Can't find the right mentor?</h3>
//                       <p className="text-gray-600 text-xs">Tell us your requirements and we'll match you with the perfect mentor for your goals.</p>
//                     </div>
//                   </div>
//                   <button className="bg-[#FF5722] hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition flex-shrink-0">
//                     Request a Mentor <ChevronRight size={14} />
//                   </button>
//                 </div>

//               </div>

//             </main>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   Star, Heart, Clock, CheckCircle2, ChevronRight, ChevronLeft, X, 
//   Info, Grid, List, MessageSquare, RotateCcw, SlidersHorizontal, Zap
// } from 'lucide-react';
// import Banner from './components/Banner';

// export interface Mentor {
//   id: number;
//   name: string;
//   role: string;
//   expertise: string;
//   image: string;
//   rating: number;
//   reviewsCount: number;
//   studentsCount: string;
//   experienceYears: number;
//   tags: string[];
//   hourlyRate: number;
//   sessionRate: number;
//   specializationText: string;
//   isAvailable: boolean;
// }

// export const INITIAL_MENTORS: Mentor[] = [
//   {
//     id: 1,
//     name: 'Dr. Arjun Mehta',
//     role: 'NEET Expert – Physics',
//     expertise: 'Mechanics, Optics, Electrostatics, Modern Physics',
//     image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 256,
//     studentsCount: '12,500+',
//     experienceYears: 8,
//     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
//     hourlyRate: 800,
//     sessionRate: 499,
//     specializationText: 'Mechanics, Optics, Electrostatics, Modern Physics',
//     isAvailable: true,
//   },
//   {
//     id: 2,
//     name: 'Dr. Priya Sharma',
//     role: 'NEET Expert – Chemistry',
//     expertise: 'Organic, Inorganic, Physical Chemistry',
//     image: 'https://images.unsplash.com/photo-1594824813566-82823d5afe4a?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 198,
//     studentsCount: '9,800+',
//     experienceYears: 7,
//     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
//     hourlyRate: 700,
//     sessionRate: 449,
//     specializationText: 'Organic, Inorganic, Physical Chemistry',
//     isAvailable: true,
//   },
//   {
//     id: 3,
//     name: 'Dr. Neha Singh',
//     role: 'NEET Expert – Botany',
//     expertise: 'Plant Physiology, Genetics, Ecology, Biotechnology',
//     image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80',
//     rating: 4.8,
//     reviewsCount: 210,
//     studentsCount: '9,900+',
//     experienceYears: 6,
//     tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
//     hourlyRate: 600,
//     sessionRate: 399,
//     specializationText: 'Plant Physiology, Genetics, Ecology, Biotechnology',
//     isAvailable: true,
//   },
//   {
//     id: 4,
//     name: 'Dr. Karan Verma',
//     role: 'NEET Expert – Zoology',
//     expertise: 'Human Physiology, Genetics, Animal Kingdom',
//     image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80',
//     rating: 4.8,
//     reviewsCount: 176,
//     studentsCount: '7,600+',
//     experienceYears: 7,
//     tags: ['Tutor', 'Homework Helper', 'Mentorship'],
//     hourlyRate: 650,
//     sessionRate: 449,
//     specializationText: 'Human Physiology, Genetics, Animal Kingdom',
//     isAvailable: true,
//   },
//   {
//     id: 5,
//     name: 'Dr. Ayesha Khan',
//     role: 'NEET Expert – Physics',
//     expertise: 'Electrostatics, Current Electricity, Waves',
//     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
//     rating: 4.7,
//     reviewsCount: 154,
//     studentsCount: '6,200+',
//     experienceYears: 5,
//     tags: ['Tutor', 'Doubt Solver', 'Homework Helper'],
//     hourlyRate: 600,
//     sessionRate: 399,
//     specializationText: 'Electrostatics, Current Electricity, Waves',
//     isAvailable: true,
//   },
//   {
//     id: 6,
//     name: 'Dr. Rohan Iyer',
//     role: 'NEET Expert – Chemistry',
//     expertise: 'Chemical Bonding, Thermodynamics, Solutions',
//     image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80',
//     rating: 4.7,
//     reviewsCount: 132,
//     studentsCount: '5,400+',
//     experienceYears: 6,
//     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
//     hourlyRate: 550,
//     sessionRate: 379,
//     specializationText: 'Chemical Bonding, Thermodynamics, Solutions',
//     isAvailable: true,
//   },
//   {
//     id: 7,
//     name: 'Dr. Meera Nair',
//     role: 'NEET Expert – Botany',
//     expertise: 'Cell Biology, Ecology, Plant Diversity',
//     image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&auto=format&fit=crop&q=80',
//     rating: 4.6,
//     reviewsCount: 122,
//     studentsCount: '4,900+',
//     experienceYears: 5,
//     tags: ['Tutor', 'Doubt Solver', 'Mentorship'],
//     hourlyRate: 500,
//     sessionRate: 349,
//     specializationText: 'Cell Biology, Ecology, Plant Diversity',
//     isAvailable: true,
//   },
//   {
//     id: 8,
//     name: 'Dr. Vivek Joshi',
//     role: 'NEET Expert – Zoology',
//     expertise: 'Animal Physiology, Evolution, Biotechnology',
//     image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=80',
//     rating: 4.6,
//     reviewsCount: 118,
//     studentsCount: '4,300+',
//     experienceYears: 6,
//     tags: ['Tutor', 'Mentorship', 'Homework Helper'],
//     hourlyRate: 550,
//     sessionRate: 379,
//     specializationText: 'Animal Physiology, Evolution, Biotechnology',
//     isAvailable: true,
//   },
//   {
//     id: 9,
//     name: 'Dr. Ananya Roy',
//     role: 'NEET Expert – Organic Chem',
//     expertise: 'Hydrocarbons, Biomolecules, Reaction Mechanism',
//     image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 310,
//     studentsCount: '15,100+',
//     experienceYears: 9,
//     tags: ['Tutor', 'Mentorship', 'Concept Builder'],
//     hourlyRate: 850,
//     sessionRate: 520,
//     specializationText: 'Hydrocarbons, Biomolecules, Reaction Mechanism',
//     isAvailable: true,
//   },
//   {
//     id: 10,
//     name: 'Dr. Rajesh Gupta',
//     role: 'NEET Expert – Modern Physics',
//     expertise: 'Semiconductors, Atoms & Nuclei, Dual Nature',
//     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
//     rating: 4.8,
//     reviewsCount: 220,
//     studentsCount: '11,200+',
//     experienceYears: 10,
//     tags: ['Tutor', 'Doubt Solver'],
//     hourlyRate: 900,
//     sessionRate: 550,
//     specializationText: 'Semiconductors, Atoms & Nuclei, Dual Nature',
//     isAvailable: true,
//   },
//   {
//     id: 11,
//     name: 'Dr. Sunita Patel',
//     role: 'NEET Expert – Genetics',
//     expertise: 'Molecular Basis of Inheritance, Mendelian Genetics',
//     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
//     rating: 4.7,
//     reviewsCount: 185,
//     studentsCount: '8,400+',
//     experienceYears: 7,
//     tags: ['Mentorship', 'Homework Helper'],
//     hourlyRate: 650,
//     sessionRate: 410,
//     specializationText: 'Molecular Basis of Inheritance, Mendelian Genetics',
//     isAvailable: true,
//   },
//   {
//     id: 12,
//     name: 'Dr. Amit Trivedi',
//     role: 'NEET Expert – Physical Chem',
//     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 290,
//     studentsCount: '13,800+',
//     experienceYears: 8,
//     tags: ['Tutor', 'Test Prep'],
//     hourlyRate: 750,
//     sessionRate: 480,
//     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     isAvailable: true,
//   },
//   {
//     id: 13,
//     name: 'Dr. Anil Kumar',
//     role: 'NEET Expert – Physical Chem',
//     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 290,
//     studentsCount: '13,800+',
//     experienceYears: 8,
//     tags: ['Tutor', 'Test Prep'],
//     hourlyRate: 750,
//     sessionRate: 480,
//     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     isAvailable: true,
//   },
//   {
//     id: 14,
//     name: 'Dr. Rohit Sharma',
//     role: 'NEET Expert – Physical Chem',
//     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 290,
//     studentsCount: '13,800+',
//     experienceYears: 8,
//     tags: ['Tutor', 'Test Prep'],
//     hourlyRate: 750,
//     sessionRate: 480,
//     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     isAvailable: true,
//   },
//   {
//     id: 15,
//     name: 'Dr. Vikas Gupta',
//     role: 'NEET Expert – Physical Chem',
//     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 290,
//     studentsCount: '13,800+',
//     experienceYears: 8,
//     tags: ['Tutor', 'Test Prep'],
//     hourlyRate: 750,
//     sessionRate: 480,
//     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     isAvailable: true,
//   },
//   {
//     id: 16,
//     name: 'Dr. Dhemdra',
//     role: 'NEET Expert – Physical Chem',
//     expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
//     rating: 4.9,
//     reviewsCount: 290,
//     studentsCount: '13,800+',
//     experienceYears: 8,
//     tags: ['Tutor', 'Test Prep'],
//     hourlyRate: 750,
//     sessionRate: 480,
//     specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
//     isAvailable: true,
//   }
// ];

// export default function MentorsPage() {
//   const navigate = useNavigate();
//   const [favorites, setFavorites] = useState<number[]>([]);
//   const [activeFilters, setActiveFilters] = useState<string[]>([
//     'NEET',
//     'Physics',
//     'Both Teaching + Guidance',
//     'Available Now',
//   ]);

//   const [selectedMainExam, setSelectedMainExam] = useState<string>('NEET');
//   const [selectedExams, setSelectedExams] = useState<string[]>([]);
//   const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Physics', 'Chemistry', 'Botany', 'Zoology']);
//   const [selectedTopic, setSelectedTopic] = useState<string>('All Topics');
//   const [selectedServices, setSelectedServices] = useState<string[]>([
//     'Online Classes / Tutor',
//     'Mentorship & Guidance',
//     'Homework Helper',
//     '1:1 Doubt Solving',
//     'Test Preparation',
//     'College Counselling'
//   ]);
//   const [guidanceMode, setGuidanceMode] = useState<string>('Both Teaching + Guidance');
//   const [teachingFeeMax, setTeachingFeeMax] = useState<number>(5000);
//   const [guidanceFeeMax, setGuidanceFeeMax] = useState<number>(5000);
//   const [selectedDays, setSelectedDays] = useState<string[]>(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
//   const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
//   const [isInstantAvailable, setIsInstantAvailable] = useState<boolean>(true);
//   const [selectedLanguage, setSelectedLanguage] = useState<string>('');
//   const [selectedLanguagesList, setSelectedLanguagesList] = useState<string[]>(['English']);
//   const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
//   const [selectedRating, setSelectedRating] = useState<string>('');

//   const toggleFavorite = (id: number) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
//     );
//   };

//   const removeFilter = (filter: string) => {
//     setActiveFilters((prev) => prev.filter((f) => f !== filter));
//   };

//   const toggleArrayItem = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
//     if (list.includes(item)) {
//       setList(list.filter((i) => i !== item));
//     } else {
//       setList([...list, item]);
//     }
//   };

//   const clearAllFilters = () => {
//     setActiveFilters([]);
//     setSelectedExams([]);
//     setSelectedSubjects([]);
//     setSelectedServices([]);
//     setSelectedDays([]);
//     setSelectedTimes([]);
//     setIsInstantAvailable(false);
//     setSelectedLanguagesList([]);
//     setSelectedExperiences([]);
//     setSelectedRating('');
//   };

//   // Navigates to new route with Query Parameter id
//   const handleNavigateToProfile = (mentorId: number) => {
//     navigate(`/mentorprofile?id=${mentorId}`);
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs">
//       <Banner />

//       <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        
//         <nav className="text-gray-400 text-xs mb-4 flex items-center gap-1.5 font-medium">
//           <span className="hover:text-orange-500 cursor-pointer transition">Home</span>
//           <span>&gt;</span>
//           <span className="hover:text-orange-500 cursor-pointer transition">Mentorship</span>
//           <span>&gt;</span>
//           <span className="text-gray-800 font-semibold">All Mentors</span>
//         </nav>

//         <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          
//           {/* ================= SIDEBAR FILTERS ================= */}
//           <aside className="w-full lg:w-[290px] flex-shrink-0 bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4 flex flex-col justify-between">
//             <div className="space-y-4">
//               <div className="flex justify-between items-center pb-2 border-b border-gray-100">
//                 <h2 className="font-bold text-sm text-[#1E293B]">Filter Mentors</h2>
//                 <button 
//                   onClick={clearAllFilters} 
//                   className="text-[#FF5722] font-semibold text-xs hover:underline flex items-center gap-1"
//                 >
//                   Clear All <RotateCcw size={12} />
//                 </button>
//               </div>

//               <div>
//                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                   <span>1. Exam / Category</span>
//                   <Info size={13} className="text-gray-400 cursor-pointer" />
//                 </div>
                
//                 <div className="flex items-center gap-2 mb-2">
//                   <input 
//                     type="checkbox" 
//                     checked={true}
//                     readOnly
//                     className="rounded border-gray-300 text-[#FF5722] accent-[#FF5722] w-3.5 h-3.5" 
//                   />
//                   <select 
//                     value={selectedMainExam}
//                     onChange={(e) => setSelectedMainExam(e.target.value)}
//                     className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-800 font-semibold bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722]"
//                   >
//                     <option value="NEET">NEET</option>
//                     <option value="JEE Main">JEE Main</option>
//                     <option value="JEE Advanced">JEE Advanced</option>
//                   </select>
//                 </div>

//                 <div className="space-y-2 pl-0.5">
//                   {[
//                     'JEE Main', 
//                     'JEE Advanced', 
//                     'Class 11 – 12', 
//                     'Class 6 – 10', 
//                     'CUET', 
//                     'Olympiad', 
//                     'Boards', 
//                     'Other Exams'
//                   ].map((item) => (
//                     <label key={item} className="flex items-center gap-2.5 text-gray-600 cursor-pointer hover:text-gray-900">
//                       <input 
//                         type="checkbox" 
//                         checked={selectedExams.includes(item)}
//                         onChange={() => toggleArrayItem(item, selectedExams, setSelectedExams)}
//                         className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                       />
//                       <span className="font-medium text-[11px]">{item}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="pt-3 border-t border-gray-100">
//                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                   <span>2. Subject ({selectedMainExam})</span>
//                   <Info size={13} className="text-gray-400 cursor-pointer" />
//                 </div>
//                 <div className="space-y-2">
//                   {['Physics', 'Chemistry', 'Botany', 'Zoology'].map((sub) => (
//                     <label key={sub} className="flex items-center gap-2.5 text-gray-700 font-medium cursor-pointer">
//                       <input 
//                         type="checkbox" 
//                         checked={selectedSubjects.includes(sub)}
//                         onChange={() => toggleArrayItem(sub, selectedSubjects, setSelectedSubjects)}
//                         className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                       />
//                       <span className="text-[11px]">{sub}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="pt-3 border-t border-gray-100">
//                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                   <span>3. Topic / Expertise</span>
//                   <Info size={13} className="text-gray-400 cursor-pointer" />
//                 </div>
//                 <select 
//                   value={selectedTopic}
//                   onChange={(e) => setSelectedTopic(e.target.value)}
//                   className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722]"
//                 >
//                   <option>All Topics</option>
//                   <option>Mechanics</option>
//                   <option>Optics</option>
//                   <option>Electrostatics</option>
//                   <option>Organic Chemistry</option>
//                 </select>
//               </div>

//               <div className="pt-3 border-t border-gray-100">
//                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                   <span>4. Service Type</span>
//                   <Info size={13} className="text-gray-400 cursor-pointer" />
//                 </div>
//                 <div className="space-y-2">
//                   {[
//                     { name: 'Online Classes / Tutor', count: 512 },
//                     { name: 'Mentorship & Guidance', count: 438 },
//                     { name: 'Homework Helper', count: 286 },
//                     { name: '1:1 Doubt Solving', count: 324 },
//                     { name: 'Test Preparation', count: 412 },
//                     { name: 'College Counselling', count: 196 },
//                   ].map((item) => (
//                     <label key={item.name} className="flex items-center justify-between text-gray-700 cursor-pointer">
//                       <div className="flex items-center gap-2.5">
//                         <input 
//                           type="checkbox" 
//                           checked={selectedServices.includes(item.name)}
//                           onChange={() => toggleArrayItem(item.name, selectedServices, setSelectedServices)}
//                           className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                         />
//                         <span className="text-[11px] font-medium">{item.name}</span>
//                       </div>
//                       <span className="text-gray-400 text-[10px]">({item.count})</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="pt-3 border-t border-gray-100">
//                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                   <span>5. Teaching / Guidance Mode</span>
//                   <Info size={13} className="text-gray-400 cursor-pointer" />
//                 </div>
//                 <div className="space-y-2">
//                   {['Online Teaching Only', 'Guidance Only', 'Both Teaching + Guidance', 'Available Local Tutor'].map((mode) => (
//                     <label key={mode} className="flex items-center gap-2.5 text-gray-700 cursor-pointer">
//                       <input 
//                         type="radio" 
//                         name="guidance_mode" 
//                         checked={guidanceMode === mode}
//                         onChange={() => setGuidanceMode(mode)}
//                         className="accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                       />
//                       <span className="text-[11px] font-medium">{mode}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="pt-3 border-t border-gray-100">
//                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                   <span>6. Price Range</span>
//                   <Info size={13} className="text-gray-400 cursor-pointer" />
//                 </div>
                
//                 <div className="space-y-3">
//                   <div>
//                     <p className="text-gray-600 text-[11px] font-semibold mb-1">Teaching Fee (₹ / hour)</p>
//                     <div className="relative flex items-center my-1.5">
//                       <input 
//                         type="range" 
//                         min="0" 
//                         max="5000" 
//                         value={teachingFeeMax} 
//                         onChange={(e) => setTeachingFeeMax(Number(e.target.value))}
//                         className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" 
//                       />
//                     </div>
//                     <div className="flex gap-2 items-center">
//                       <input type="text" value="₹ 0" readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
//                       <span className="text-gray-400">-</span>
//                       <input type="text" value={`₹ ${teachingFeeMax}+`} readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
//                     </div>
//                   </div>

//                   <div>
//                     <p className="text-gray-600 text-[11px] font-semibold mb-1">Guidance Fee (₹ / session)</p>
//                     <div className="relative flex items-center my-1.5">
//                       <input 
//                         type="range" 
//                         min="0" 
//                         max="5000" 
//                         value={guidanceFeeMax} 
//                         onChange={(e) => setGuidanceFeeMax(Number(e.target.value))}
//                         className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" 
//                       />
//                     </div>
//                     <div className="flex gap-2 items-center">
//                       <input type="text" value="₹ 0" readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
//                       <span className="text-gray-400">-</span>
//                       <input type="text" value={`₹ ${guidanceFeeMax}+`} readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="pt-3 border-t border-gray-100">
//                 <div className="flex items-center justify-between font-bold text-[#1E293B] mb-2">
//                   <span className="flex items-center gap-1">
//                     <span>7. Available Days</span>
//                     <Info size={13} className="text-gray-400 cursor-pointer" />
//                   </span>
//                   <span className="text-xs text-gray-500 cursor-pointer">^</span>
//                 </div>
//                 <div className="grid grid-cols-4 gap-1.5">
//                   {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
//                     const isSelected = selectedDays.includes(day);
//                     return (
//                       <button
//                         key={day}
//                         type="button"
//                         onClick={() => toggleArrayItem(day, selectedDays, setSelectedDays)}
//                         className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded-md border text-[11px] font-medium transition ${
//                           isSelected 
//                             ? 'border-[#FF5722] text-[#FF5722] bg-orange-50/50' 
//                             : 'border-gray-200 text-gray-600 hover:bg-gray-50'
//                         }`}
//                       >
//                         <input 
//                           type="checkbox" 
//                           checked={isSelected}
//                           readOnly
//                           className="accent-[#FF5722] w-3 h-3 rounded"
//                         />
//                         <span>{day}</span>
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div className="pt-3 border-t border-gray-100">
//                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                   <span>8. Availability Time</span>
//                   <Info size={13} className="text-gray-400 cursor-pointer" />
//                 </div>
//                 <div className="space-y-2">
//                   {[
//                     { name: 'Morning', time: '(6 AM – 12 PM)' },
//                     { name: 'Afternoon', time: '(12 PM – 4 PM)' },
//                     { name: 'Evening', time: '(4 PM – 9 PM)' },
//                     { name: 'Night', time: '(9 PM – 12 AM)' },
//                   ].map((slot) => (
//                     <label key={slot.name} className="flex items-center gap-2.5 text-gray-600 cursor-pointer">
//                       <input 
//                         type="checkbox" 
//                         checked={selectedTimes.includes(slot.name)}
//                         onChange={() => toggleArrayItem(slot.name, selectedTimes, setSelectedTimes)}
//                         className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                       />
//                       <span className="text-[11px] font-medium text-gray-700">{slot.name}</span>
//                       <span className="text-gray-400 text-[10px]">{slot.time}</span>
//                     </label>
//                   ))}
//                 </div>
//                 <div className="mt-3">
//                   <input type="range" min="6" max="24" defaultValue="18" className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" />
//                   <div className="flex justify-between text-[10px] text-gray-500 mt-1">
//                     <span>06:00 AM</span>
//                     <span>12:00 AM</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="pt-3 border-t border-gray-100">
//                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                   <span>9. Instant Availability</span>
//                   <Info size={13} className="text-gray-400 cursor-pointer" />
//                 </div>
//                 <label className="flex items-center gap-2 text-gray-700 cursor-pointer font-medium text-[11px]">
//                   <input 
//                     type="checkbox" 
//                     checked={isInstantAvailable}
//                     onChange={(e) => setIsInstantAvailable(e.target.checked)}
//                     className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                   />
//                   <span>Available Now</span>
//                   <Zap size={13} className="text-emerald-500 fill-emerald-500" />
//                 </label>
//               </div>

//               <div className="pt-3 border-t border-gray-100">
//                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                   <span>10. Language</span>
//                   <Info size={13} className="text-gray-400 cursor-pointer" />
//                 </div>
//                 <select 
//                   value={selectedLanguage}
//                   onChange={(e) => setSelectedLanguage(e.target.value)}
//                   className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-400 bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722] mb-2"
//                 >
//                   <option value="">Select Language</option>
//                   <option value="English">English</option>
//                   <option value="Hindi">Hindi</option>
//                   <option value="Hinglish">Hinglish</option>
//                 </select>
//                 <div className="flex flex-wrap gap-1.5">
//                   {['English', 'Hindi', 'Hinglish', '+ More'].map((lang) => {
//                     const isSel = selectedLanguagesList.includes(lang);
//                     return (
//                       <button
//                         key={lang}
//                         type="button"
//                         onClick={() => toggleArrayItem(lang, selectedLanguagesList, setSelectedLanguagesList)}
//                         className={`px-3 py-1 rounded-md border text-[11px] font-medium transition ${
//                           isSel 
//                             ? 'border-[#FF5722] text-[#FF5722] bg-orange-50/50' 
//                             : 'border-gray-200 text-gray-600 hover:bg-gray-50'
//                         }`}
//                       >
//                         {lang}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div className="pt-3 border-t border-gray-100">
//                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                   <span>11. Experience</span>
//                   <Info size={13} className="text-gray-400 cursor-pointer" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-2">
//                   {['0 – 2 Years', '3 – 5 Years', '6 – 10 Years', '10+ Years'].map((exp) => (
//                     <label key={exp} className="flex items-center gap-2 text-gray-600 cursor-pointer">
//                       <input 
//                         type="checkbox" 
//                         checked={selectedExperiences.includes(exp)}
//                         onChange={() => toggleArrayItem(exp, selectedExperiences, setSelectedExperiences)}
//                         className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                       />
//                       <span className="text-[11px] font-medium text-gray-700">{exp}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div className="pt-3 border-t border-gray-100">
//                 <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
//                   <span>12. Rating</span>
//                   <Info size={13} className="text-gray-400 cursor-pointer" />
//                 </div>
//                 <div className="space-y-2">
//                   {[
//                     { label: '4.5 & above', stars: 5 },
//                     { label: '4.0 & above', stars: 4 },
//                     { label: '3.5 & above', stars: 3 },
//                     { label: '3.0 & above', stars: 3 },
//                   ].map((rate) => (
//                     <label key={rate.label} className="flex items-center gap-2 cursor-pointer">
//                       <input 
//                         type="radio" 
//                         name="rating_filter" 
//                         checked={selectedRating === rate.label}
//                         onChange={() => setSelectedRating(rate.label)}
//                         className="accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
//                       />
//                       <div className="flex items-center gap-1">
//                         <div className="flex text-yellow-400">
//                           {[...Array(5)].map((_, i) => (
//                             <Star key={i} size={11} fill={i < rate.stars ? "#f59e0b" : "none"} className={i < rate.stars ? "text-amber-500" : "text-gray-200"} />
//                           ))}
//                         </div>
//                         <span className="text-[11px] font-medium text-gray-600">{rate.label}</span>
//                       </div>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="pt-4 border-t border-gray-100 space-y-2 mt-auto">
//               <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg shadow flex items-center justify-center gap-2 text-xs transition active:scale-[0.98]">
//                 <span>Apply Filters</span>
//                 <SlidersHorizontal size={14} />
//               </button>
//               <button 
//                 onClick={clearAllFilters} 
//                 className="w-full text-center text-[#FF5722] font-semibold text-xs hover:underline py-1"
//               >
//                 Clear All Filters
//               </button>
//             </div>
//           </aside>

//           {/* ================= MAIN CONTENT AREA ================= */}
//           <main className="flex-1 space-y-6 w-full flex flex-col justify-between">
            
//             <div className="space-y-6">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                 <div>
//                   <h1 className="text-2xl font-bold text-[#FF5722] flex items-center gap-2">
//                     All Mentors
//                     <span className="text-xs font-normal text-[#FF5722] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
//                       (326 Mentors Found)
//                     </span>
//                   </h1>
//                   <p className="text-gray-500 text-xs mt-0.5">
//                     Connect with expert mentors and achieve your academic and career goals.
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center gap-2">
//                     <span className="text-gray-500">Sort By</span>
//                     <select className="border border-gray-300 rounded-lg p-1.5 bg-white text-xs text-gray-700 focus:outline-none">
//                       <option>Recommended</option>
//                       <option>Rating: High to Low</option>
//                       <option>Price: Low to High</option>
//                     </select>
//                   </div>
//                   <div className="flex border rounded-lg bg-white p-0.5 border-gray-200">
//                     <button className="p-1 bg-[#FF5722] text-white rounded"><Grid size={14} /></button>
//                     <button className="p-1 text-gray-400 hover:text-gray-600"><List size={14} /></button>
//                   </div>
//                 </div>
//               </div>

//               {activeFilters.length > 0 && (
//                 <div className="flex flex-wrap items-center gap-2">
//                   <span className="font-medium text-gray-600 text-xs">Active Filters:</span>
//                   {activeFilters.map((filter) => (
//                     <span
//                       key={filter}
//                       className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] rounded-full shadow-sm"
//                     >
//                       {filter}
//                       <X
//                         size={12}
//                         className="cursor-pointer hover:text-red-500"
//                         onClick={() => removeFilter(filter)}
//                       />
//                     </span>
//                   ))}
//                   <button
//                     onClick={clearAllFilters}
//                     className="text-[#FF5722] text-xs hover:underline ml-2 font-medium"
//                   >
//                     Clear All
//                   </button>
//                 </div>
//               )}

//               {/* Mentors Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//                 {INITIAL_MENTORS.map((mentor) => {
//                   const isFav = favorites.includes(mentor.id);
//                   return (
//                     <div
//                       key={mentor.id}
//                       className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden relative"
//                     >
//                       <div className="p-3 pb-0 flex items-center justify-between">
//                         <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
//                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
//                           Available Now
//                         </span>
//                         <button
//                           onClick={() => toggleFavorite(mentor.id)}
//                           className="text-gray-400 hover:text-red-500 transition"
//                         >
//                           <Heart
//                             size={16}
//                             fill={isFav ? '#ef4444' : 'none'}
//                             className={isFav ? 'text-red-500' : 'text-gray-400'}
//                           />
//                         </button>
//                       </div>

//                       <div className="p-3 text-center flex-1 flex flex-col justify-between">
//                         <div>
//                           <div className="relative inline-block mb-2">
//                             <img
//                               src={mentor.image}
//                               alt={mentor.name}
//                               className="w-16 h-16 rounded-full object-cover mx-auto ring-2 ring-emerald-400/30"
//                             />
//                             <CheckCircle2
//                               size={16}
//                               className="text-emerald-500 bg-white rounded-full absolute bottom-0 right-0 fill-emerald-500 text-white"
//                             />
//                           </div>

//                           <h3 className="font-bold text-gray-900 text-sm">{mentor.name}</h3>
//                           <p className="text-emerald-600 text-[11px] font-medium">{mentor.role}</p>

//                           <div className="flex items-center justify-center gap-1 text-[11px] mt-1.5 text-gray-600">
//                             <Star size={12} fill="#eab308" className="text-yellow-500" />
//                             <span className="font-bold text-gray-800">{mentor.rating}</span>
//                             <span>({mentor.reviewsCount})</span>
//                             <span className="text-gray-300">•</span>
//                             <span>{mentor.studentsCount} Students</span>
//                           </div>

//                           <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full mt-2">
//                             <Clock size={10} />
//                             <span>{mentor.experienceYears}+ Years Experience</span>
//                           </div>

//                           <p className="text-[10px] text-gray-500 mt-2 line-clamp-2 px-1">
//                             <strong className="text-gray-700">Expert in:</strong> {mentor.specializationText}
//                           </p>

//                           <div className="flex flex-wrap justify-center gap-1 mt-2.5">
//                             {mentor.tags.map((tag) => (
//                               <span
//                                 key={tag}
//                                 className="bg-purple-50 text-purple-600 text-[9px] font-medium px-2 py-0.5 rounded"
//                               >
//                                 {tag}
//                               </span>
//                             ))}
//                           </div>
//                         </div>

//                         <div>
//                           <div className="grid grid-cols-2 gap-2 my-3 pt-2 border-t border-dashed border-gray-200 text-left">
//                             <div className="bg-gray-50 p-1.5 rounded">
//                               <p className="text-[9px] text-gray-400">Online Classes</p>
//                               <p className="text-[9px] text-gray-400">(1:1 Live Teaching)</p>
//                               <p className="font-bold text-emerald-600 text-xs mt-0.5">
//                                 ₹{mentor.hourlyRate} <span className="text-[9px] font-normal text-gray-500">/ hour</span>
//                               </p>
//                             </div>
//                             <div className="bg-gray-50 p-1.5 rounded">
//                               <p className="text-[9px] text-gray-400">Guidance Only</p>
//                               <p className="text-[9px] text-gray-400">(Mentorship)</p>
//                               <p className="font-bold text-emerald-600 text-xs mt-0.5">
//                                 ₹{mentor.sessionRate} <span className="text-[9px] font-normal text-gray-500">/ session</span>
//                               </p>
//                             </div>
//                           </div>

//                           <div className="grid grid-cols-2 gap-2">
//                             <button
//                               onClick={() => handleNavigateToProfile(mentor.id)}
//                               className="w-full border border-[#FF5722] text-[#FF5722] hover:bg-orange-50 font-semibold py-1.5 rounded-lg text-[11px] transition text-center flex items-center justify-center cursor-pointer"
//                             >
//                               View Profile
//                             </button>
//                             <button className="w-full bg-[#FF5722] text-white hover:bg-orange-600 font-semibold py-1.5 rounded-lg text-[11px] transition shadow-sm">
//                               Book Session
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="space-y-6 pt-4">
//               <div className="flex justify-center items-center gap-1">
//                 <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronLeft size={14} /></button>
//                 <button className="w-6 h-6 rounded bg-[#FF5722] text-white font-medium text-xs flex items-center justify-center">1</button>
//                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">2</button>
//                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">3</button>
//                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">4</button>
//                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">5</button>
//                 <span className="px-1 text-gray-400 text-xs">...</span>
//                 <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">14</button>
//                 <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronRight size={14} /></button>
//               </div>

//               <div className="bg-red-50/60 border border-red-100 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
//                     <MessageSquare size={20} />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-gray-900 text-sm">Can't find the right mentor?</h3>
//                     <p className="text-gray-600 text-xs">Tell us your requirements and we'll match you with the perfect mentor for your goals.</p>
//                   </div>
//                 </div>
//                 <button className="bg-[#FF5722] hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition flex-shrink-0">
//                   Request a Mentor <ChevronRight size={14} />
//                 </button>
//               </div>

//             </div>

//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { 
  Star, Heart, Clock, CheckCircle2, ChevronRight, ChevronLeft, X, 
  Info, Grid, List, MessageSquare, RotateCcw, SlidersHorizontal, Zap
} from 'lucide-react';
import  Banner  from './components/Banner';

// Safe Fallback Banner Component in case local `./components/Banner` doesn't exist
const SafeBanner = () => (
  <div className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-6 px-4 text-center shadow-md">
    <h1 className="text-xl md:text-2xl font-bold">Find & Connect with Top Academic Mentors</h1>
    <p className="text-xs md:text-sm mt-1 text-orange-100">1:1 Mentorship, Online Classes & Doubt Solving for NEET & JEE</p>
  </div>
);

export interface Mentor {
  id: number;
  name: string;
  role: string;
  expertise: string;
  image: string;
  rating: number;
  reviewsCount: number;
  studentsCount: string;
  experienceYears: number;
  tags: string[];
  hourlyRate: number;
  sessionRate: number;
  specializationText: string;
  isAvailable: boolean;
}

export const INITIAL_MENTORS: Mentor[] = [
  {
    id: 1,
    name: 'Dr. Arjun Mehta',
    role: 'NEET Expert – Physics',
    expertise: 'Mechanics, Optics, Electrostatics, Modern Physics',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewsCount: 256,
    studentsCount: '12,500+',
    experienceYears: 8,
    tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
    hourlyRate: 800,
    sessionRate: 499,
    specializationText: 'Mechanics, Optics, Electrostatics, Modern Physics',
    isAvailable: true,
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    role: 'NEET Expert – Chemistry',
    expertise: 'Organic, Inorganic, Physical Chemistry',
    image: 'https://images.unsplash.com/photo-1594824813566-82823d5afe4a?w=400&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewsCount: 198,
    studentsCount: '9,800+',
    experienceYears: 7,
    tags: ['Tutor', 'Mentorship', 'Homework Helper'],
    hourlyRate: 700,
    sessionRate: 449,
    specializationText: 'Organic, Inorganic, Physical Chemistry',
    isAvailable: true,
  },
  {
    id: 3,
    name: 'Dr. Neha Singh',
    role: 'NEET Expert – Botany',
    expertise: 'Plant Physiology, Genetics, Ecology, Biotechnology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewsCount: 210,
    studentsCount: '9,900+',
    experienceYears: 6,
    tags: ['Tutor', 'Mentorship', 'Doubt Solver'],
    hourlyRate: 600,
    sessionRate: 399,
    specializationText: 'Plant Physiology, Genetics, Ecology, Biotechnology',
    isAvailable: true,
  },
  {
    id: 4,
    name: 'Dr. Karan Verma',
    role: 'NEET Expert – Zoology',
    expertise: 'Human Physiology, Genetics, Animal Kingdom',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewsCount: 176,
    studentsCount: '7,600+',
    experienceYears: 7,
    tags: ['Tutor', 'Homework Helper', 'Mentorship'],
    hourlyRate: 650,
    sessionRate: 449,
    specializationText: 'Human Physiology, Genetics, Animal Kingdom',
    isAvailable: true,
  },
  {
    id: 5,
    name: 'Dr. Ayesha Khan',
    role: 'NEET Expert – Physics',
    expertise: 'Electrostatics, Current Electricity, Waves',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    rating: 4.7,
    reviewsCount: 154,
    studentsCount: '6,200+',
    experienceYears: 5,
    tags: ['Tutor', 'Doubt Solver', 'Homework Helper'],
    hourlyRate: 600,
    sessionRate: 399,
    specializationText: 'Electrostatics, Current Electricity, Waves',
    isAvailable: true,
  },
  {
    id: 6,
    name: 'Dr. Rohan Iyer',
    role: 'NEET Expert – Chemistry',
    expertise: 'Chemical Bonding, Thermodynamics, Solutions',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80',
    rating: 4.7,
    reviewsCount: 132,
    studentsCount: '5,400+',
    experienceYears: 6,
    tags: ['Tutor', 'Mentorship', 'Homework Helper'],
    hourlyRate: 550,
    sessionRate: 379,
    specializationText: 'Chemical Bonding, Thermodynamics, Solutions',
    isAvailable: true,
  },
  {
    id: 7,
    name: 'Dr. Meera Nair',
    role: 'NEET Expert – Botany',
    expertise: 'Cell Biology, Ecology, Plant Diversity',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&auto=format&fit=crop&q=80',
    rating: 4.6,
    reviewsCount: 122,
    studentsCount: '4,900+',
    experienceYears: 5,
    tags: ['Tutor', 'Doubt Solver', 'Mentorship'],
    hourlyRate: 500,
    sessionRate: 349,
    specializationText: 'Cell Biology, Ecology, Plant Diversity',
    isAvailable: true,
  },
  {
    id: 8,
    name: 'Dr. Vivek Joshi',
    role: 'NEET Expert – Zoology',
    expertise: 'Animal Physiology, Evolution, Biotechnology',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=80',
    rating: 4.6,
    reviewsCount: 118,
    studentsCount: '4,300+',
    experienceYears: 6,
    tags: ['Tutor', 'Mentorship', 'Homework Helper'],
    hourlyRate: 550,
    sessionRate: 379,
    specializationText: 'Animal Physiology, Evolution, Biotechnology',
    isAvailable: true,
  },
  {
    id: 9,
    name: 'Dr. Ananya Roy',
    role: 'NEET Expert – Organic Chem',
    expertise: 'Hydrocarbons, Biomolecules, Reaction Mechanism',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewsCount: 310,
    studentsCount: '15,100+',
    experienceYears: 9,
    tags: ['Tutor', 'Mentorship', 'Concept Builder'],
    hourlyRate: 850,
    sessionRate: 520,
    specializationText: 'Hydrocarbons, Biomolecules, Reaction Mechanism',
    isAvailable: true,
  },
  {
    id: 10,
    name: 'Dr. Rajesh Gupta',
    role: 'NEET Expert – Modern Physics',
    expertise: 'Semiconductors, Atoms & Nuclei, Dual Nature',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewsCount: 220,
    studentsCount: '11,200+',
    experienceYears: 10,
    tags: ['Tutor', 'Doubt Solver'],
    hourlyRate: 900,
    sessionRate: 550,
    specializationText: 'Semiconductors, Atoms & Nuclei, Dual Nature',
    isAvailable: true,
  },
  {
    id: 11,
    name: 'Dr. Sunita Patel',
    role: 'NEET Expert – Genetics',
    expertise: 'Molecular Basis of Inheritance, Mendelian Genetics',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    rating: 4.7,
    reviewsCount: 185,
    studentsCount: '8,400+',
    experienceYears: 7,
    tags: ['Mentorship', 'Homework Helper'],
    hourlyRate: 650,
    sessionRate: 410,
    specializationText: 'Molecular Basis of Inheritance, Mendelian Genetics',
    isAvailable: true,
  },
  {
    id: 12,
    name: 'Dr. Amit Trivedi',
    role: 'NEET Expert – Physical Chem',
    expertise: 'Electrochemistry, Chemical Kinetics, Equilibrium',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewsCount: 290,
    studentsCount: '13,800+',
    experienceYears: 8,
    tags: ['Tutor', 'Test Prep'],
    hourlyRate: 750,
    sessionRate: 480,
    specializationText: 'Electrochemistry, Chemical Kinetics, Equilibrium',
    isAvailable: true,
  }
];

export default function MentorsPage() {
  // Using wouter's location hook instead of react-router-dom
  const [, setLocation] = useLocation();

  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([
    'NEET',
    'Physics',
    'Both Teaching + Guidance',
    'Available Now',
  ]);

  const [selectedMainExam, setSelectedMainExam] = useState<string>('NEET');
  const [selectedExams, setSelectedExams] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Physics', 'Chemistry', 'Botany', 'Zoology']);
  const [selectedTopic, setSelectedTopic] = useState<string>('All Topics');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Online Classes / Tutor',
    'Mentorship & Guidance',
    'Homework Helper',
    '1:1 Doubt Solving',
    'Test Preparation',
    'College Counselling'
  ]);
  const [guidanceMode, setGuidanceMode] = useState<string>('Both Teaching + Guidance');
  const [teachingFeeMax, setTeachingFeeMax] = useState<number>(5000);
  const [guidanceFeeMax, setGuidanceFeeMax] = useState<number>(5000);
  const [selectedDays, setSelectedDays] = useState<string[]>(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [isInstantAvailable, setIsInstantAvailable] = useState<boolean>(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [selectedLanguagesList, setSelectedLanguagesList] = useState<string[]>(['English']);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<string>('');

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const removeFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  };

  const toggleArrayItem = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setSelectedExams([]);
    setSelectedSubjects([]);
    setSelectedServices([]);
    setSelectedDays([]);
    setSelectedTimes([]);
    setIsInstantAvailable(false);
    setSelectedLanguagesList([]);
    setSelectedExperiences([]);
    setSelectedRating('');
  };

  // Navigates to new route using wouter
  const handleNavigateToProfile = (mentorId: number) => {
    setLocation(`/mentorprofile?id=${mentorId}`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs">
      <Banner />

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        
        <nav className="text-gray-400 text-xs mb-4 flex items-center gap-1.5 font-medium">
          <span className="hover:text-orange-500 cursor-pointer transition">Home</span>
          <span>&gt;</span>
          <span className="hover:text-orange-500 cursor-pointer transition">Mentorship</span>
          <span>&gt;</span>
          <span className="text-gray-800 font-semibold">All Mentors</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* ================= SIDEBAR FILTERS ================= */}
          <aside className="w-full lg:w-[290px] flex-shrink-0 bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <h2 className="font-bold text-sm text-[#1E293B]">Filter Mentors</h2>
                <button 
                  onClick={clearAllFilters} 
                  className="text-[#FF5722] font-semibold text-xs hover:underline flex items-center gap-1"
                >
                  Clear All <RotateCcw size={12} />
                </button>
              </div>

              <div>
                <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
                  <span>1. Exam / Category</span>
                  <Info size={13} className="text-gray-400 cursor-pointer" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <input 
                    type="checkbox" 
                    checked={true}
                    readOnly
                    className="rounded border-gray-300 text-[#FF5722] accent-[#FF5722] w-3.5 h-3.5" 
                  />
                  <select 
                    value={selectedMainExam}
                    onChange={(e) => setSelectedMainExam(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-800 font-semibold bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722]"
                  >
                    <option value="NEET">NEET</option>
                    <option value="JEE Main">JEE Main</option>
                    <option value="JEE Advanced">JEE Advanced</option>
                  </select>
                </div>

                <div className="space-y-2 pl-0.5">
                  {[
                    'JEE Main', 
                    'JEE Advanced', 
                    'Class 11 – 12', 
                    'Class 6 – 10', 
                    'CUET', 
                    'Olympiad', 
                    'Boards', 
                    'Other Exams'
                  ].map((item) => (
                    <label key={item} className="flex items-center gap-2.5 text-gray-600 cursor-pointer hover:text-gray-900">
                      <input 
                        type="checkbox" 
                        checked={selectedExams.includes(item)}
                        onChange={() => toggleArrayItem(item, selectedExams, setSelectedExams)}
                        className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
                      />
                      <span className="font-medium text-[11px]">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
                  <span>2. Subject ({selectedMainExam})</span>
                  <Info size={13} className="text-gray-400 cursor-pointer" />
                </div>
                <div className="space-y-2">
                  {['Physics', 'Chemistry', 'Botany', 'Zoology'].map((sub) => (
                    <label key={sub} className="flex items-center gap-2.5 text-gray-700 font-medium cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedSubjects.includes(sub)}
                        onChange={() => toggleArrayItem(sub, selectedSubjects, setSelectedSubjects)}
                        className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
                      />
                      <span className="text-[11px]">{sub}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
                  <span>3. Topic / Expertise</span>
                  <Info size={13} className="text-gray-400 cursor-pointer" />
                </div>
                <select 
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722]"
                >
                  <option>All Topics</option>
                  <option>Mechanics</option>
                  <option>Optics</option>
                  <option>Electrostatics</option>
                  <option>Organic Chemistry</option>
                </select>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
                  <span>4. Service Type</span>
                  <Info size={13} className="text-gray-400 cursor-pointer" />
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Online Classes / Tutor', count: 512 },
                    { name: 'Mentorship & Guidance', count: 438 },
                    { name: 'Homework Helper', count: 286 },
                    { name: '1:1 Doubt Solving', count: 324 },
                    { name: 'Test Preparation', count: 412 },
                    { name: 'College Counselling', count: 196 },
                  ].map((item) => (
                    <label key={item.name} className="flex items-center justify-between text-gray-700 cursor-pointer">
                      <div className="flex items-center gap-2.5">
                        <input 
                          type="checkbox" 
                          checked={selectedServices.includes(item.name)}
                          onChange={() => toggleArrayItem(item.name, selectedServices, setSelectedServices)}
                          className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
                        />
                        <span className="text-[11px] font-medium">{item.name}</span>
                      </div>
                      <span className="text-gray-400 text-[10px]">({item.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
                  <span>5. Teaching / Guidance Mode</span>
                  <Info size={13} className="text-gray-400 cursor-pointer" />
                </div>
                <div className="space-y-2">
                  {['Online Teaching Only', 'Guidance Only', 'Both Teaching + Guidance', 'Available Local Tutor'].map((mode) => (
                    <label key={mode} className="flex items-center gap-2.5 text-gray-700 cursor-pointer">
                      <input 
                        type="radio" 
                        name="guidance_mode" 
                        checked={guidanceMode === mode}
                        onChange={() => setGuidanceMode(mode)}
                        className="accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
                      />
                      <span className="text-[11px] font-medium">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
                  <span>6. Price Range</span>
                  <Info size={13} className="text-gray-400 cursor-pointer" />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-600 text-[11px] font-semibold mb-1">Teaching Fee (₹ / hour)</p>
                    <div className="relative flex items-center my-1.5">
                      <input 
                        type="range" 
                        min="0" 
                        max="5000" 
                        value={teachingFeeMax} 
                        onChange={(e) => setTeachingFeeMax(Number(e.target.value))}
                        className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" 
                      />
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="text" value="₹ 0" readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
                      <span className="text-gray-400">-</span>
                      <input type="text" value={`₹ ${teachingFeeMax}+`} readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-600 text-[11px] font-semibold mb-1">Guidance Fee (₹ / session)</p>
                    <div className="relative flex items-center my-1.5">
                      <input 
                        type="range" 
                        min="0" 
                        max="5000" 
                        value={guidanceFeeMax} 
                        onChange={(e) => setGuidanceFeeMax(Number(e.target.value))}
                        className="w-full accent-[#FF5722] h-1 bg-orange-200 rounded-lg cursor-pointer" 
                      />
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="text" value="₹ 0" readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
                      <span className="text-gray-400">-</span>
                      <input type="text" value={`₹ ${guidanceFeeMax}+`} readOnly className="w-1/2 border border-gray-200 rounded p-1 text-center bg-gray-50 text-[11px] font-medium" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between font-bold text-[#1E293B] mb-2">
                  <span className="flex items-center gap-1">
                    <span>7. Available Days</span>
                    <Info size={13} className="text-gray-400 cursor-pointer" />
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
                    const isSelected = selectedDays.includes(day);
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => toggleArrayItem(day, selectedDays, setSelectedDays)}
                        className={`flex items-center justify-center gap-1 py-1 px-1.5 rounded-md border text-[11px] font-medium transition ${
                          isSelected 
                            ? 'border-[#FF5722] text-[#FF5722] bg-orange-50/50' 
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <input 
                          type="checkbox" 
                          checked={isSelected}
                          readOnly
                          className="accent-[#FF5722] w-3 h-3 rounded"
                        />
                        <span>{day}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
                  <span>8. Availability Time</span>
                  <Info size={13} className="text-gray-400 cursor-pointer" />
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Morning', time: '(6 AM – 12 PM)' },
                    { name: 'Afternoon', time: '(12 PM – 4 PM)' },
                    { name: 'Evening', time: '(4 PM – 9 PM)' },
                    { name: 'Night', time: '(9 PM – 12 AM)' },
                  ].map((slot) => (
                    <label key={slot.name} className="flex items-center gap-2.5 text-gray-600 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedTimes.includes(slot.name)}
                        onChange={() => toggleArrayItem(slot.name, selectedTimes, setSelectedTimes)}
                        className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
                      />
                      <span className="text-[11px] font-medium text-gray-700">{slot.name}</span>
                      <span className="text-gray-400 text-[10px]">{slot.time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
                  <span>9. Instant Availability</span>
                  <Info size={13} className="text-gray-400 cursor-pointer" />
                </div>
                <label className="flex items-center gap-2 text-gray-700 cursor-pointer font-medium text-[11px]">
                  <input 
                    type="checkbox" 
                    checked={isInstantAvailable}
                    onChange={(e) => setIsInstantAvailable(e.target.checked)}
                    className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
                  />
                  <span>Available Now</span>
                  <Zap size={13} className="text-emerald-500 fill-emerald-500" />
                </label>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
                  <span>10. Language</span>
                  <Info size={13} className="text-gray-400 cursor-pointer" />
                </div>
                <select 
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-600 bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722] mb-2"
                >
                  <option value="">Select Language</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Hinglish">Hinglish</option>
                </select>
                <div className="flex flex-wrap gap-1.5">
                  {['English', 'Hindi', 'Hinglish'].map((lang) => {
                    const isSel = selectedLanguagesList.includes(lang);
                    return (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => toggleArrayItem(lang, selectedLanguagesList, setSelectedLanguagesList)}
                        className={`px-3 py-1 rounded-md border text-[11px] font-medium transition ${
                          isSel 
                            ? 'border-[#FF5722] text-[#FF5722] bg-orange-50/50' 
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {lang}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
                  <span>11. Experience</span>
                  <Info size={13} className="text-gray-400 cursor-pointer" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['0 – 2 Years', '3 – 5 Years', '6 – 10 Years', '10+ Years'].map((exp) => (
                    <label key={exp} className="flex items-center gap-2 text-gray-600 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={selectedExperiences.includes(exp)}
                        onChange={() => toggleArrayItem(exp, selectedExperiences, setSelectedExperiences)}
                        className="rounded border-gray-300 accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
                      />
                      <span className="text-[11px] font-medium text-gray-700">{exp}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1 font-bold text-[#1E293B] mb-2">
                  <span>12. Rating</span>
                  <Info size={13} className="text-gray-400 cursor-pointer" />
                </div>
                <div className="space-y-2">
                  {[
                    { label: '4.5 & above', stars: 5 },
                    { label: '4.0 & above', stars: 4 },
                    { label: '3.5 & above', stars: 3 },
                    { label: '3.0 & above', stars: 3 },
                  ].map((rate) => (
                    <label key={rate.label} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="rating_filter" 
                        checked={selectedRating === rate.label}
                        onChange={() => setSelectedRating(rate.label)}
                        className="accent-[#FF5722] w-3.5 h-3.5 cursor-pointer" 
                      />
                      <div className="flex items-center gap-1">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={11} fill={i < rate.stars ? "#f59e0b" : "none"} className={i < rate.stars ? "text-amber-500" : "text-gray-200"} />
                          ))}
                        </div>
                        <span className="text-[11px] font-medium text-gray-600">{rate.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-2">
              <button className="w-full bg-[#FF5722] hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg shadow flex items-center justify-center gap-2 text-xs transition active:scale-[0.98]">
                <span>Apply Filters</span>
                <SlidersHorizontal size={14} />
              </button>
              <button 
                onClick={clearAllFilters} 
                className="w-full text-center text-[#FF5722] font-semibold text-xs hover:underline py-1"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* ================= MAIN CONTENT AREA ================= */}
          <main className="flex-1 space-y-6 w-full flex flex-col justify-between">
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-[#FF5722] flex items-center gap-2">
                    All Mentors
                    <span className="text-xs font-normal text-[#FF5722] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                      ({INITIAL_MENTORS.length} Mentors Found)
                    </span>
                  </h1>
                  <p className="text-gray-500 text-xs mt-0.5">
                    Connect with expert mentors and achieve your academic and career goals.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Sort By</span>
                    <select className="border border-gray-300 rounded-lg p-1.5 bg-white text-xs text-gray-700 focus:outline-none">
                      <option>Recommended</option>
                      <option>Rating: High to Low</option>
                      <option>Price: Low to High</option>
                    </select>
                  </div>
                  <div className="flex border rounded-lg bg-white p-0.5 border-gray-200">
                    <button className="p-1 bg-[#FF5722] text-white rounded"><Grid size={14} /></button>
                    <button className="p-1 text-gray-400 hover:text-gray-600"><List size={14} /></button>
                  </div>
                </div>
              </div>

              {activeFilters.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium text-gray-600 text-xs">Active Filters:</span>
                  {activeFilters.map((filter) => (
                    <span
                      key={filter}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] rounded-full shadow-sm"
                    >
                      {filter}
                      <X
                        size={12}
                        className="cursor-pointer hover:text-red-500"
                        onClick={() => removeFilter(filter)}
                      />
                    </span>
                  ))}
                  <button
                    onClick={clearAllFilters}
                    className="text-[#FF5722] text-xs hover:underline ml-2 font-medium"
                  >
                    Clear All
                  </button>
                </div>
              )}

              {/* Mentors Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {INITIAL_MENTORS.map((mentor) => {
                  const isFav = favorites.includes(mentor.id);
                  return (
                    <div
                      key={mentor.id}
                      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden relative"
                    >
                      <div className="p-3 pb-0 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          Available Now
                        </span>
                        <button
                          onClick={() => toggleFavorite(mentor.id)}
                          className="text-gray-400 hover:text-red-500 transition"
                        >
                          <Heart
                            size={16}
                            fill={isFav ? '#ef4444' : 'none'}
                            className={isFav ? 'text-red-500' : 'text-gray-400'}
                          />
                        </button>
                      </div>

                      <div className="p-3 text-center flex-1 flex flex-col justify-between">
                        <div>
                          <div className="relative inline-block mb-2">
                            <img
                              src={mentor.image}
                              alt={mentor.name}
                              className="w-16 h-16 rounded-full object-cover mx-auto ring-2 ring-emerald-400/30"
                            />
                            <CheckCircle2
                              size={16}
                              className="text-emerald-500 bg-white rounded-full absolute bottom-0 right-0 fill-emerald-500 text-white"
                            />
                          </div>

                          <h3 className="font-bold text-gray-900 text-sm">{mentor.name}</h3>
                          <p className="text-emerald-600 text-[11px] font-medium">{mentor.role}</p>

                          <div className="flex items-center justify-center gap-1 text-[11px] mt-1.5 text-gray-600">
                            <Star size={12} fill="#eab308" className="text-yellow-500" />
                            <span className="font-bold text-gray-800">{mentor.rating}</span>
                            <span>({mentor.reviewsCount})</span>
                            <span className="text-gray-300">•</span>
                            <span>{mentor.studentsCount} Students</span>
                          </div>

                          <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full mt-2">
                            <Clock size={10} />
                            <span>{mentor.experienceYears}+ Years Experience</span>
                          </div>

                          <p className="text-[10px] text-gray-500 mt-2 line-clamp-2 px-1">
                            <strong className="text-gray-700">Expert in:</strong> {mentor.specializationText}
                          </p>

                          <div className="flex flex-wrap justify-center gap-1 mt-2.5">
                            {mentor.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-purple-50 text-purple-600 text-[9px] font-medium px-2 py-0.5 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="grid grid-cols-2 gap-2 my-3 pt-2 border-t border-dashed border-gray-200 text-left">
                            <div className="bg-gray-50 p-1.5 rounded">
                              <p className="text-[9px] text-gray-400">Online Classes</p>
                              <p className="text-[9px] text-gray-400">(1:1 Live Teaching)</p>
                              <p className="font-bold text-emerald-600 text-xs mt-0.5">
                                ₹{mentor.hourlyRate} <span className="text-[9px] font-normal text-gray-500">/ hour</span>
                              </p>
                            </div>
                            <div className="bg-gray-50 p-1.5 rounded">
                              <p className="text-[9px] text-gray-400">Guidance Only</p>
                              <p className="text-[9px] text-gray-400">(Mentorship)</p>
                              <p className="font-bold text-emerald-600 text-xs mt-0.5">
                                ₹{mentor.sessionRate} <span className="text-[9px] font-normal text-gray-500">/ session</span>
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => handleNavigateToProfile(mentor.id)}
                              className="w-full border border-[#FF5722] text-[#FF5722] hover:bg-orange-50 font-semibold py-1.5 rounded-lg text-[11px] transition text-center flex items-center justify-center cursor-pointer"
                            >
                              View Profile
                            </button>
                            <button className="w-full bg-[#FF5722] text-white hover:bg-orange-600 font-semibold py-1.5 rounded-lg text-[11px] transition shadow-sm">
                              Book Session
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex justify-center items-center gap-1">
                <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronLeft size={14} /></button>
                <button className="w-6 h-6 rounded bg-[#FF5722] text-white font-medium text-xs flex items-center justify-center">1</button>
                <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">2</button>
                <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">3</button>
                <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronRight size={14} /></button>
              </div>

              <div className="bg-red-50/60 border border-red-100 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Can't find the right mentor?</h3>
                    <p className="text-gray-600 text-xs">Tell us your requirements and we'll match you with the perfect mentor for your goals.</p>
                  </div>
                </div>
                <button className="bg-[#FF5722] hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition flex-shrink-0">
                  Request a Mentor <ChevronRight size={14} />
                </button>
              </div>

            </div>

          </main>
        </div>
      </div>
    </div>
  );
}