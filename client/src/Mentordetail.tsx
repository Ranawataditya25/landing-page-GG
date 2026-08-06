
// import React, { useState } from 'react';
// import { 
//   Search, Star, Heart, Clock, Award, ShieldCheck, 
//   Users, CheckCircle2, ChevronRight, ChevronLeft, X, 
//   Info, Filter, Grid, List, Sparkles, MessageSquare, 
//   Headphones, Calendar, Lock
// } from 'lucide-react';

// // --- TYPES ---
// interface Mentor {
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
// ];

// export default function MentorsPage() {
//   const [favorites, setFavorites] = useState<number[]>([]);
//   const [activeFilters, setActiveFilters] = useState<string[]>([
//     'NEET',
//     'Physics',
//     'Both Teaching + Guidance',
//     'Available Now',
//   ]);

//   const toggleFavorite = (id: number) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
//     );
//   };

//   const removeFilter = (filter: string) => {
//     setActiveFilters((prev) => prev.filter((f) => f !== filter));
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs">
//       {/* Top Navbar / Header Container */}
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         {/* Breadcrumb */}
//         <nav className="text-gray-400 text-xs mb-2 flex items-center gap-1">
//           <span>Home</span>
//           <span>&gt;</span>
//           <span>Mentorship</span>
//           <span>&gt;</span>
//           <span className="text-gray-700 font-medium">All Mentors</span>
//         </nav>

//         <div className="flex flex-col md:flex-row gap-6">
//           {/* ================= SIDEBAR FILTERS ================= */}
//           <aside className="w-full md:w-64 flex-shrink-0 space-y-5 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
//             <div className="flex justify-between items-center pb-2 border-b">
//               <h2 className="font-bold text-sm text-gray-800">Filter Mentors</h2>
//               <button 
//                 onClick={() => setActiveFilters([])} 
//                 className="text-orange-500 font-medium text-xs hover:underline"
//               >
//                 Clear All ↺
//               </button>
//             </div>

//             {/* 1. Exam / Category */}
//             <div>
//               <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
//                 <span>1. Exam / Category</span>
//                 <Info size={12} className="text-gray-400" />
//               </div>
//               <select className="w-full border border-gray-300 rounded-lg p-2 text-xs text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-orange-500">
//                 <option>NEET</option>
//                 <option>JEE Main</option>
//                 <option>JEE Advanced</option>
//               </select>
//               <div className="mt-2 space-y-1.5 pl-1">
//                 {['JEE Main', 'JEE Advanced', 'Class 11 - 12', 'Class 6 - 10', 'CUET', 'Olympiad', 'Boards', 'Other Exams'].map((item) => (
//                   <label key={item} className="flex items-center gap-2 text-gray-600 cursor-pointer">
//                     <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500 accent-orange-500" />
//                     <span>{item}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* 2. Subject */}
//             <div className="pt-2 border-t">
//               <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
//                 <span>2. Subject (NEET)</span>
//                 <Info size={12} className="text-gray-400" />
//               </div>
//               <div className="space-y-1.5 pl-1">
//                 {['Physics', 'Chemistry', 'Botany', 'Zoology'].map((sub, i) => (
//                   <label key={sub} className="flex items-center gap-2 text-gray-600 cursor-pointer">
//                     <input type="checkbox" defaultChecked className="rounded accent-orange-500" />
//                     <span>{sub}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* 3. Service Type */}
//             <div className="pt-2 border-t">
//               <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
//                 <span>4. Service Type</span>
//                 <Info size={12} className="text-gray-400" />
//               </div>
//               <div className="space-y-1.5 pl-1">
//                 {[
//                   { name: 'Online Classes / Tutor', count: 512 },
//                   { name: 'Mentorship & Guidance', count: 438 },
//                   { name: 'Homework Helper', count: 286 },
//                   { name: '1:1 Doubt Solving', count: 324 },
//                   { name: 'Test Preparation', count: 412 },
//                   { name: 'College Counselling', count: 196 },
//                 ].map((item) => (
//                   <label key={item.name} className="flex items-center justify-between text-gray-600 cursor-pointer">
//                     <div className="flex items-center gap-2">
//                       <input type="checkbox" className="rounded accent-orange-500" />
//                       <span>{item.name}</span>
//                     </div>
//                     <span className="text-gray-400 text-[10px]">({item.count})</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* 5. Teaching / Guidance Mode */}
//             <div className="pt-2 border-t">
//               <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
//                 <span>5. Teaching / Guidance Mode</span>
//                 <Info size={12} className="text-gray-400" />
//               </div>
//               <div className="space-y-1.5 pl-1">
//                 {['Online Teaching Only', 'Guidance Only', 'Both Teaching + Guidance'].map((mode, idx) => (
//                   <label key={mode} className="flex items-center gap-2 text-gray-600 cursor-pointer">
//                     <input type="radio" name="mode" defaultChecked={idx === 2} className="accent-orange-500" />
//                     <span>{mode}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* 6. Price Range */}
//             <div className="pt-2 border-t">
//               <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
//                 <span>6. Price Range</span>
//                 <Info size={12} className="text-gray-400" />
//               </div>
//               <p className="text-gray-500 text-[11px] mb-1">Teaching Fee (₹ / hour)</p>
//               <div className="flex gap-2 items-center mb-3">
//                 <input type="text" value="₹ 0" readOnly className="w-1/2 border rounded p-1 text-center bg-gray-50" />
//                 <span>-</span>
//                 <input type="text" value="₹ 5000+" readOnly className="w-1/2 border rounded p-1 text-center bg-gray-50" />
//               </div>
//               <p className="text-gray-500 text-[11px] mb-1">Guidance Fee (₹ / session)</p>
//               <div className="flex gap-2 items-center">
//                 <input type="text" value="₹ 0" readOnly className="w-1/2 border rounded p-1 text-center bg-gray-50" />
//                 <span>-</span>
//                 <input type="text" value="₹ 5000+" readOnly className="w-1/2 border rounded p-1 text-center bg-gray-50" />
//               </div>
//             </div>

//             {/* Apply Filters CTA */}
//             <div className="pt-3 border-t space-y-2">
//               <button className="w-full bg-orange-500 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-orange-600 transition">
//                 Apply Filters
//               </button>
//               <button onClick={() => setActiveFilters([])} className="w-full text-center text-gray-500 hover:underline">
//                 Clear All Filters
//               </button>
//             </div>
//           </aside>

//           {/* ================= MAIN CONTENT ================= */}
//           <main className="flex-1 space-y-6">
//             {/* Title Section */}
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                   All Mentors
//                   <span className="text-xs font-normal text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
//                     (326 Mentors Found)
//                   </span>
//                 </h1>
//                 <p className="text-gray-500 text-xs mt-0.5">
//                   Connect with expert mentors and achieve your academic and career goals.
//                 </p>
//               </div>

//               {/* Sort By & View Toggle */}
//               <div className="flex items-center gap-3">
//                 <div className="flex items-center gap-2">
//                   <span className="text-gray-500">Sort By</span>
//                   <select className="border border-gray-300 rounded-lg p-1.5 bg-white text-xs text-gray-700 focus:outline-none">
//                     <option>Recommended</option>
//                     <option>Rating: High to Low</option>
//                     <option>Price: Low to High</option>
//                   </select>
//                 </div>
//                 <div className="flex border rounded-lg bg-white p-0.5 border-gray-200">
//                   <button className="p-1 bg-orange-500 text-white rounded"><Grid size={14} /></button>
//                   <button className="p-1 text-gray-400 hover:text-gray-600"><List size={14} /></button>
//                 </div>
//               </div>
//             </div>

//             {/* Feature Highlights Banner */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//               {[
//                 { icon: ShieldCheck, title: 'Expert & Verified Mentors', desc: 'All mentors are verified for their qualifications & experience.' },
//                 { icon: Users, title: 'Personalized Guidance', desc: '1:1 sessions tailored to your learning needs.' },
//                 { icon: Award, title: 'Better Results', desc: 'Regular tracking and expert feedback for continuous growth.' },
//                 { icon: Headphones, title: 'Flexible & Convenient', desc: 'Learn online anytime, anywhere with complete flexibility.' },
//               ].map((feat, idx) => (
//                 <div key={idx} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-start gap-2.5">
//                   <div className="p-2 bg-purple-50 text-purple-600 rounded-lg flex-shrink-0">
//                     <feat.icon size={18} />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800 text-[11px]">{feat.title}</h4>
//                     <p className="text-[10px] text-gray-500 leading-snug mt-0.5">{feat.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Stats Highlight Banner */}
//             <div className="bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 p-3.5 rounded-xl border border-gray-100 flex flex-wrap items-center justify-around gap-4 text-center">
//               <div className="flex items-center gap-1.5 text-yellow-500 font-semibold text-xs">
//                 <Star size={14} fill="currentColor" />
//                 <span className="text-gray-800">Why students love our mentors?</span>
//               </div>
//               <div>
//                 <span className="font-bold text-sm text-gray-900">4.8/5</span>
//                 <p className="text-[10px] text-gray-500">Average Rating</p>
//               </div>
//               <div>
//                 <span className="font-bold text-sm text-gray-900">98%</span>
//                 <p className="text-[10px] text-gray-500">Satisfaction Rate</p>
//               </div>
//               <div>
//                 <span className="font-bold text-sm text-gray-900">10K+</span>
//                 <p className="text-[10px] text-gray-500">Students Mentored</p>
//               </div>
//               <div>
//                 <span className="font-bold text-sm text-gray-900">5+ Years</span>
//                 <p className="text-[10px] text-gray-500">Average Experience</p>
//               </div>
//             </div>

//             {/* Active Filters Bar */}
//             {activeFilters.length > 0 && (
//               <div className="flex flex-wrap items-center gap-2">
//                 <span className="font-medium text-gray-600 text-xs">Active Filters:</span>
//                 {activeFilters.map((filter) => (
//                   <span
//                     key={filter}
//                     className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] rounded-full shadow-sm"
//                   >
//                     {filter}
//                     <X
//                       size={12}
//                       className="cursor-pointer hover:text-red-500"
//                       onClick={() => removeFilter(filter)}
//                     />
//                   </span>
//                 ))}
//                 <button
//                   onClick={() => setActiveFilters([])}
//                   className="text-orange-500 text-xs hover:underline ml-2"
//                 >
//                   Clear All
//                 </button>
//               </div>
//             )}

//             {/* Mentors Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//               {INITIAL_MENTORS.map((mentor) => {
//                 const isFav = favorites.includes(mentor.id);
//                 return (
//                   <div
//                     key={mentor.id}
//                     className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden relative"
//                   >
//                     {/* Available Now Badge */}
//                     <div className="p-3 pb-0 flex items-center justify-between">
//                       <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
//                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
//                         Available Now
//                       </span>
//                       <button
//                         onClick={() => toggleFavorite(mentor.id)}
//                         className="text-gray-400 hover:text-red-500 transition"
//                       >
//                         <Heart
//                           size={16}
//                           fill={isFav ? '#ef4444' : 'none'}
//                           className={isFav ? 'text-red-500' : 'text-gray-400'}
//                         />
//                       </button>
//                     </div>

//                     {/* Mentor Profile Info */}
//                     <div className="p-3 text-center">
//                       <div className="relative inline-block mb-2">
//                         <img
//                           src={mentor.image}
//                           alt={mentor.name}
//                           className="w-16 h-16 rounded-full object-cover mx-auto ring-2 ring-emerald-400/30"
//                         />
//                         <CheckCircle2
//                           size={16}
//                           className="text-emerald-500 bg-white rounded-full absolute bottom-0 right-0 fill-emerald-500 text-white"
//                         />
//                       </div>

//                       <h3 className="font-bold text-gray-900 text-sm">{mentor.name}</h3>
//                       <p className="text-emerald-600 text-[11px] font-medium">{mentor.role}</p>

//                       {/* Ratings */}
//                       <div className="flex items-center justify-center gap-1 text-[11px] mt-1.5 text-gray-600">
//                         <Star size={12} fill="#eab308" className="text-yellow-500" />
//                         <span className="font-bold text-gray-800">{mentor.rating}</span>
//                         <span>({mentor.reviewsCount})</span>
//                         <span className="text-gray-300">•</span>
//                         <span>{mentor.studentsCount} Students</span>
//                       </div>

//                       {/* Experience Badge */}
//                       <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full mt-2">
//                         <Clock size={10} />
//                         <span>{mentor.experienceYears}+ Years Experience</span>
//                       </div>

//                       {/* Specialization / Expertise */}
//                       <p className="text-[10px] text-gray-500 mt-2 line-clamp-2 px-1">
//                         <strong className="text-gray-700">Expert in:</strong> {mentor.specializationText}
//                       </p>

//                       {/* Tags */}
//                       <div className="flex flex-wrap justify-center gap-1 mt-2.5">
//                         {mentor.tags.map((tag) => (
//                           <span
//                             key={tag}
//                             className="bg-purple-50 text-purple-600 text-[9px] font-medium px-2 py-0.5 rounded"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>

//                       {/* Pricing Table */}
//                       <div className="grid grid-cols-2 gap-2 my-3 pt-2 border-t border-dashed border-gray-200 text-left">
//                         <div className="bg-gray-50 p-1.5 rounded">
//                           <p className="text-[9px] text-gray-400">Online Classes</p>
//                           <p className="text-[9px] text-gray-400">(1:1 Live Teaching)</p>
//                           <p className="font-bold text-emerald-600 text-xs mt-0.5">
//                             ₹{mentor.hourlyRate} <span className="text-[9px] font-normal text-gray-500">/ hour</span>
//                           </p>
//                         </div>
//                         <div className="bg-gray-50 p-1.5 rounded">
//                           <p className="text-[9px] text-gray-400">Guidance Only</p>
//                           <p className="text-[9px] text-gray-400">(Mentorship)</p>
//                           <p className="font-bold text-emerald-600 text-xs mt-0.5">
//                             ₹{mentor.sessionRate} <span className="text-[9px] font-normal text-gray-500">/ session</span>
//                           </p>
//                         </div>
//                       </div>

//                       {/* CTA Buttons */}
//                       <div className="grid grid-cols-2 gap-2">
//                         <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-1.5 rounded-lg text-[11px] transition">
//                           View Profile
//                         </button>
//                         <button className="w-full bg-orange-500 text-white hover:bg-orange-600 font-semibold py-1.5 rounded-lg text-[11px] transition shadow-sm">
//                           Book Session
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center items-center gap-1 pt-4 pb-2">
//               <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronLeft size={14} /></button>
//               <button className="w-6 h-6 rounded bg-orange-500 text-white font-medium text-xs flex items-center justify-center">1</button>
//               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">2</button>
//               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">3</button>
//               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">4</button>
//               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">5</button>
//               <span className="px-1 text-gray-400 text-xs">...</span>
//               <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">14</button>
//               <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronRight size={14} /></button>
//             </div>

//             {/* "Can't find the right mentor?" Banner */}
//             <div className="bg-red-50/60 border border-red-100 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
//                   <MessageSquare size={20} />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-gray-900 text-sm">Can't find the right mentor?</h3>
//                   <p className="text-gray-600 text-xs">Tell us your requirements and we'll match you with the perfect mentor for your goals.</p>
//                 </div>
//               </div>
//               <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition flex-shrink-0">
//                 Request a Mentor <ChevronRight size={14} />
//               </button>
//             </div>

//             {/* Bottom Footer Trust Badges */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t text-center text-[11px] text-gray-600">
//               <div className="flex items-center justify-center gap-2">
//                 <ShieldCheck size={18} className="text-orange-500" />
//                 <div className="text-left">
//                   <p className="font-semibold text-gray-800">100% Verified Mentors</p>
//                   <p className="text-gray-400 text-[10px]">Qualified & background verified</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-2">
//                 <Lock size={18} className="text-orange-500" />
//                 <div className="text-left">
//                   <p className="font-semibold text-gray-800">Safe & Secure Sessions</p>
//                   <p className="text-gray-400 text-[10px]">Your privacy is our priority</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-2">
//                 <Calendar size={18} className="text-orange-500" />
//                 <div className="text-left">
//                   <p className="font-semibold text-gray-800">Flexible Scheduling</p>
//                   <p className="text-gray-400 text-[10px]">Learn at your convenient time</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-2">
//                 <Headphones size={18} className="text-orange-500" />
//                 <div className="text-left">
//                   <p className="font-semibold text-gray-800">24/7 Support</p>
//                   <p className="text-gray-400 text-[10px]">We're here to help you anytime</p>
//                 </div>
//               </div>
//             </div>

//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }








import React, { useState } from 'react';
import { 
  Search, Star, Heart, Clock, Award, ShieldCheck, 
  Users, CheckCircle2, ChevronRight, ChevronLeft, X, 
  Info, Filter, Grid, List, Sparkles, MessageSquare, 
  Headphones, Calendar, Lock
} from 'lucide-react';
import TopBanner  from './components/TopBanner'

// --- TYPES ---
interface Mentor {
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

// --- MOCK DATA ---
const INITIAL_MENTORS: Mentor[] = [
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
];

export default function MentorsPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([
    'NEET',
    'Physics',
    'Both Teaching + Guidance',
    'Available Now',
  ]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const removeFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs">
      {/* Top Navbar / Header Container */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <nav className="text-gray-400 text-xs mb-2 flex items-center gap-1">
          <span>Home</span>
          <span>&gt;</span>
          <span>Mentorship</span>
          <span>&gt;</span>
          <span className="text-gray-700 font-medium">All Mentors</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-6">
          {/* ================= SIDEBAR FILTERS ================= */}
          <aside className="w-full md:w-64 flex-shrink-0 space-y-5 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center pb-2 border-b">
              <h2 className="font-bold text-sm text-gray-800">Filter Mentors</h2>
              <button 
                onClick={() => setActiveFilters([])} 
                className="text-orange-500 font-medium text-xs hover:underline"
              >
                Clear All ↺
              </button>
            </div>

            {/* 1. Exam / Category */}
            <div>
              <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
                <span>1. Exam / Category</span>
                <Info size={12} className="text-gray-400" />
              </div>
              <select className="w-full border border-gray-300 rounded-lg p-2 text-xs text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-orange-500">
                <option>NEET</option>
                <option>JEE Main</option>
                <option>JEE Advanced</option>
              </select>
              <div className="mt-2 space-y-1.5 pl-1">
                {['JEE Main', 'JEE Advanced', 'Class 11 - 12', 'Class 6 - 10', 'CUET', 'Olympiad', 'Boards', 'Other Exams'].map((item) => (
                  <label key={item} className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500 accent-orange-500" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 2. Subject */}
            <div className="pt-2 border-t">
              <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
                <span>2. Subject (NEET)</span>
                <Info size={12} className="text-gray-400" />
              </div>
              <div className="space-y-1.5 pl-1">
                {['Physics', 'Chemistry', 'Botany', 'Zoology'].map((sub, i) => (
                  <label key={sub} className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded accent-orange-500" />
                    <span>{sub}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 3. Service Type */}
            <div className="pt-2 border-t">
              <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
                <span>4. Service Type</span>
                <Info size={12} className="text-gray-400" />
              </div>
              <div className="space-y-1.5 pl-1">
                {[
                  { name: 'Online Classes / Tutor', count: 512 },
                  { name: 'Mentorship & Guidance', count: 438 },
                  { name: 'Homework Helper', count: 286 },
                  { name: '1:1 Doubt Solving', count: 324 },
                  { name: 'Test Preparation', count: 412 },
                  { name: 'College Counselling', count: 196 },
                ].map((item) => (
                  <label key={item.name} className="flex items-center justify-between text-gray-600 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded accent-orange-500" />
                      <span>{item.name}</span>
                    </div>
                    <span className="text-gray-400 text-[10px]">({item.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 5. Teaching / Guidance Mode */}
            <div className="pt-2 border-t">
              <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
                <span>5. Teaching / Guidance Mode</span>
                <Info size={12} className="text-gray-400" />
              </div>
              <div className="space-y-1.5 pl-1">
                {['Online Teaching Only', 'Guidance Only', 'Both Teaching + Guidance'].map((mode, idx) => (
                  <label key={mode} className="flex items-center gap-2 text-gray-600 cursor-pointer">
                    <input type="radio" name="mode" defaultChecked={idx === 2} className="accent-orange-500" />
                    <span>{mode}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 6. Price Range */}
            <div className="pt-2 border-t">
              <div className="flex items-center gap-1 font-semibold text-gray-700 mb-2">
                <span>6. Price Range</span>
                <Info size={12} className="text-gray-400" />
              </div>
              <p className="text-gray-500 text-[11px] mb-1">Teaching Fee (₹ / hour)</p>
              <div className="flex gap-2 items-center mb-3">
                <input type="text" value="₹ 0" readOnly className="w-1/2 border rounded p-1 text-center bg-gray-50" />
                <span>-</span>
                <input type="text" value="₹ 5000+" readOnly className="w-1/2 border rounded p-1 text-center bg-gray-50" />
              </div>
              <p className="text-gray-500 text-[11px] mb-1">Guidance Fee (₹ / session)</p>
              <div className="flex gap-2 items-center">
                <input type="text" value="₹ 0" readOnly className="w-1/2 border rounded p-1 text-center bg-gray-50" />
                <span>-</span>
                <input type="text" value="₹ 5000+" readOnly className="w-1/2 border rounded p-1 text-center bg-gray-50" />
              </div>
            </div>

            {/* Apply Filters CTA */}
            <div className="pt-3 border-t space-y-2">
              <button className="w-full bg-orange-500 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-orange-600 transition">
                Apply Filters
              </button>
              <button onClick={() => setActiveFilters([])} className="w-full text-center text-gray-500 hover:underline">
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* ================= MAIN CONTENT ================= */}
          <main className="flex-1 space-y-6">
            {/* Title Section */}
            <TopBanner/>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">



              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  All Mentors
                  <span className="text-xs font-normal text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                    (326 Mentors Found)
                  </span>
                </h1>
                <p className="text-gray-500 text-xs mt-0.5">
                  Connect with expert mentors and achieve your academic and career goals.
                </p>
              </div>

              {/* Sort By & View Toggle */}
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
                  <button className="p-1 bg-orange-500 text-white rounded"><Grid size={14} /></button>
                  <button className="p-1 text-gray-400 hover:text-gray-600"><List size={14} /></button>
                </div>
              </div>
            </div>

            {/* Feature Highlights Banner */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: ShieldCheck, title: 'Expert & Verified Mentors', desc: 'All mentors are verified for their qualifications & experience.' },
                { icon: Users, title: 'Personalized Guidance', desc: '1:1 sessions tailored to your learning needs.' },
                { icon: Award, title: 'Better Results', desc: 'Regular tracking and expert feedback for continuous growth.' },
                { icon: Headphones, title: 'Flexible & Convenient', desc: 'Learn online anytime, anywhere with complete flexibility.' },
              ].map((feat, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-start gap-2.5">
                  <div className="p-2 bg-purple-50 text-purple-600 rounded-lg flex-shrink-0">
                    <feat.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-[11px]">{feat.title}</h4>
                    <p className="text-[10px] text-gray-500 leading-snug mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div> */}

            {/* Stats Highlight Banner */}
            {/* <div className="bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 p-3.5 rounded-xl border border-gray-100 flex flex-wrap items-center justify-around gap-4 text-center">
              <div className="flex items-center gap-1.5 text-yellow-500 font-semibold text-xs">
                <Star size={14} fill="currentColor" />
                <span className="text-gray-800">Why students love our mentors?</span>
              </div>
              <div>
                <span className="font-bold text-sm text-gray-900">4.8/5</span>
                <p className="text-[10px] text-gray-500">Average Rating</p>
              </div>
              <div>
                <span className="font-bold text-sm text-gray-900">98%</span>
                <p className="text-[10px] text-gray-500">Satisfaction Rate</p>
              </div>
              <div>
                <span className="font-bold text-sm text-gray-900">10K+</span>
                <p className="text-[10px] text-gray-500">Students Mentored</p>
              </div>
              <div>
                <span className="font-bold text-sm text-gray-900">5+ Years</span>
                <p className="text-[10px] text-gray-500">Average Experience</p>
              </div>
            </div> */}

            {/* Active Filters Bar */}
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
                  onClick={() => setActiveFilters([])}
                  className="text-orange-500 text-xs hover:underline ml-2"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {INITIAL_MENTORS.map((mentor) => {
                const isFav = favorites.includes(mentor.id);
                return (
                  <div
                    key={mentor.id}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden relative"
                  >
                    {/* Available Now Badge */}
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

                    {/* Mentor Profile Info */}
                    <div className="p-3 text-center">
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

                      {/* Ratings */}
                      <div className="flex items-center justify-center gap-1 text-[11px] mt-1.5 text-gray-600">
                        <Star size={12} fill="#eab308" className="text-yellow-500" />
                        <span className="font-bold text-gray-800">{mentor.rating}</span>
                        <span>({mentor.reviewsCount})</span>
                        <span className="text-gray-300">•</span>
                        <span>{mentor.studentsCount} Students</span>
                      </div>

                      {/* Experience Badge */}
                      <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full mt-2">
                        <Clock size={10} />
                        <span>{mentor.experienceYears}+ Years Experience</span>
                      </div>

                      {/* Specialization / Expertise */}
                      <p className="text-[10px] text-gray-500 mt-2 line-clamp-2 px-1">
                        <strong className="text-gray-700">Expert in:</strong> {mentor.specializationText}
                      </p>

                      {/* Tags */}
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

                      {/* Pricing Table */}
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

                      {/* CTA Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-1.5 rounded-lg text-[11px] transition">
                          View Profile
                        </button>
                        <button className="w-full bg-orange-500 text-white hover:bg-orange-600 font-semibold py-1.5 rounded-lg text-[11px] transition shadow-sm">
                          Book Session
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-1 pt-4 pb-2">
              <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronLeft size={14} /></button>
              <button className="w-6 h-6 rounded bg-orange-500 text-white font-medium text-xs flex items-center justify-center">1</button>
              <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">2</button>
              <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">3</button>
              <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">4</button>
              <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">5</button>
              <span className="px-1 text-gray-400 text-xs">...</span>
              <button className="w-6 h-6 rounded border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium text-xs flex items-center justify-center">14</button>
              <button className="p-1 rounded border border-gray-200 text-gray-500 hover:bg-gray-100"><ChevronRight size={14} /></button>
            </div>

            {/* "Can't find the right mentor?" Banner */}
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
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition flex-shrink-0">
                Request a Mentor <ChevronRight size={14} />
              </button>
            </div>

            {/* Bottom Footer Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t text-center text-[11px] text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck size={18} className="text-orange-500" />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">100% Verified Mentors</p>
                  <p className="text-gray-400 text-[10px]">Qualified & background verified</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Lock size={18} className="text-orange-500" />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Safe & Secure Sessions</p>
                  <p className="text-gray-400 text-[10px]">Your privacy is our priority</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Calendar size={18} className="text-orange-500" />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Flexible Scheduling</p>
                  <p className="text-gray-400 text-[10px]">Learn at your convenient time</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Headphones size={18} className="text-orange-500" />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">24/7 Support</p>
                  <p className="text-gray-400 text-[10px]">We're here to help you anytime</p>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}