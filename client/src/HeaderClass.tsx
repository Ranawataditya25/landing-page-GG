// // import React, { useState } from "react";
// // import {
// //   Search,
// //   ChevronDown,
// //   ChevronUp,
// //   LayoutGrid,
// //   List,
// //   Heart,
// //   Star,
// //   ShieldCheck,
// //   Award,
// //   UserCheck,
// //   Clock,
// //   Lock,
// //   Calendar,
// //   Headphones,
// //   CheckCircle2,
// //   ChevronRight,
// //   ChevronLeft,
// // } from "lucide-react";

// // interface Mentor {
// //   id: string;
// //   name: string;
// //   role: string;
// //   experience: string;
// //   rating: number;
// //   reviewsCount: number;
// //   price: number;
// //   avatar: string;
// //   available: boolean;
// //   tags: string[];
// //   moreTagsCount?: number;
// // }

// // const mentorsData: Mentor[] = [
// //   {
// //     id: "1",
// //     name: "Mr. Rohan Mehta",
// //     role: "Counselling Psychologist & Wellness Expert",
// //     experience: "6+ Years Experience",
// //     rating: 4.9,
// //     reviewsCount: 120,
// //     price: 799,
// //     avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
// //     available: true,
// //     tags: ["Stress Management", "Student Counselling"],
// //     moreTagsCount: 3,
// //   },
// //   {
// //     id: "2",
// //     name: "Dr. Ananya Sharma",
// //     role: "Clinical Psychologist",
// //     experience: "8+ Years Experience",
// //     rating: 4.8,
// //     reviewsCount: 96,
// //     price: 899,
// //     avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
// //     available: true,
// //     tags: ["Confidence Building", "Emotional Well-being"],
// //     moreTagsCount: 3,
// //   },
// //   {
// //     id: "3",
// //     name: "CA Rohan Kapoor",
// //     role: "Commerce Mentor",
// //     experience: "7+ Years Experience",
// //     rating: 4.7,
// //     reviewsCount: 88,
// //     price: 699,
// //     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
// //     available: true,
// //     tags: ["Career Guidance", "Business Growth"],
// //     moreTagsCount: 2,
// //   },
// //   {
// //     id: "4",
// //     name: "Dr. Neha Sharma",
// //     role: "Mentor & Educator",
// //     experience: "10+ Years Experience",
// //     rating: 4.9,
// //     reviewsCount: 110,
// //     price: 600,
// //     avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
// //     available: true,
// //     tags: ["Study Planning", "Exam Strategy"],
// //     moreTagsCount: 2,
// //   },
// //   {
// //     id: "5",
// //     name: "Er. Rahul Verma",
// //     role: "JEE Mentor",
// //     experience: "8+ Years Experience",
// //     rating: 4.8,
// //     reviewsCount: 78,
// //     price: 600,
// //     avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
// //     available: true,
// //     tags: ["JEE Guidance", "Problem Solving"],
// //     moreTagsCount: 3,
// //   },
// //   {
// //     id: "6",
// //     name: "Dr. Meera Iyer",
// //     role: "Psychotherapist",
// //     experience: "10+ Years Experience",
// //     rating: 4.9,
// //     reviewsCount: 110,
// //     price: 999,
// //     avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80",
// //     available: true,
// //     tags: ["Anxiety Management", "Relationship Counselling"],
// //     moreTagsCount: 2,
// //   },
// //   {
// //     id: "7",
// //     name: "Mr. Arjun Das",
// //     role: "Life Coach",
// //     experience: "5+ Years Experience",
// //     rating: 4.6,
// //     reviewsCount: 48,
// //     price: 699,
// //     avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80",
// //     available: true,
// //     tags: ["Personal Growth", "Mindset Coaching"],
// //     moreTagsCount: 2,
// //   },
// //   {
// //     id: "8",
// //     name: "Ms. Priya Nair",
// //     role: "Overseas Education Expert",
// //     experience: "7+ Years Experience",
// //     rating: 4.8,
// //     reviewsCount: 66,
// //     price: 799,
// //     avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80",
// //     available: true,
// //     tags: ["Study Abroad", "University Selection"],
// //     moreTagsCount: 2,
// //   },
// // ];

// // export default function MentorsDirectory() {
// //   const [activeTab, setActiveTab] = useState("grid");
// //   const [selectedSort, setSelectedSort] = useState("Most Relevant");
// //   const [favorites, setFavorites] = useState<Record<string, boolean>>({});

// //   const toggleFavorite = (id: string) => {
// //     setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
// //       <div className="max-w-[1400px] mx-auto px-4 py-8">
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
// //           {/* LEFT SIDEBAR - FILTERS */}
// //           <aside className="lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm self-start space-y-6">
// //             <div className="flex items-center justify-between pb-3 border-b border-slate-100">
// //               <span className="font-bold text-slate-900 text-base">Filters</span>
// //               <button className="text-orange-600 hover:text-orange-700 text-sm font-semibold transition-colors">
// //                 Reset All
// //               </button>
// //             </div>

// //             {/* Filter: Class */}
// //             <div className="space-y-3">
// //               <div className="flex items-center justify-between font-semibold text-xs text-slate-800">
// //                 <span>Class</span>
// //                 <ChevronUp className="w-4 h-4 text-slate-400 cursor-pointer" />
// //               </div>
// //               <div className="space-y-2">
// //                 {["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"].map((item) => (
// //                   <label key={item} className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
// //                     <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-0" />
// //                     <span>{item}</span>
// //                   </label>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Filter: Expertise / Specialization */}
// //             <div className="space-y-3 pt-3 border-t border-slate-100">
// //               <span className="font-semibold text-xs text-slate-800 block">Expertise / Specialization</span>
// //               <div className="relative">
// //                 <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-xl px-3 py-2.5 pr-8 focus:outline-none focus:ring-1 focus:ring-orange-400">
// //                   <option>Select Expertise</option>
// //                   <option>Psychology</option>
// //                   <option>Engineering / JEE</option>
// //                   <option>Commerce & CA</option>
// //                   <option>Study Abroad</option>
// //                 </select>
// //                 <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
// //               </div>
// //             </div>

// //             {/* Filter: Session Type */}
// //             <div className="space-y-3 pt-3 border-t border-slate-100">
// //               <div className="flex items-center justify-between font-semibold text-xs text-slate-800">
// //                 <span>Session Type</span>
// //                 <ChevronUp className="w-4 h-4 text-slate-400 cursor-pointer" />
// //               </div>
// //               <div className="space-y-2">
// //                 {["One-to-One", "Group Session", "Workshop / Webinar"].map((item) => (
// //                   <label key={item} className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
// //                     <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-0" />
// //                     <span>{item}</span>
// //                   </label>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Filter: Session Mode */}
// //             <div className="space-y-3 pt-3 border-t border-slate-100">
// //               <div className="flex items-center justify-between font-semibold text-xs text-slate-800">
// //                 <span>Session Mode</span>
// //                 <ChevronUp className="w-4 h-4 text-slate-400 cursor-pointer" />
// //               </div>
// //               <div className="space-y-2">
// //                 {["Online (Video Call)", "Audio Call", "Chat Support"].map((item) => (
// //                   <label key={item} className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
// //                     <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-0" />
// //                     <span>{item}</span>
// //                   </label>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Filter: Availability */}
// //             <div className="space-y-3 pt-3 border-t border-slate-100">
// //               <div className="flex items-center justify-between font-semibold text-xs text-slate-800">
// //                 <span>Availability</span>
// //                 <ChevronUp className="w-4 h-4 text-slate-400 cursor-pointer" />
// //               </div>
// //               <div className="space-y-2">
// //                 {["Available Now", "Weekend Available"].map((item) => (
// //                   <label key={item} className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900">
// //                     <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-0" />
// //                     <span>{item}</span>
// //                   </label>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Filter: Sort By */}
// //             <div className="space-y-2 pt-3 border-t border-slate-100">
// //               <span className="font-semibold text-xs text-slate-800 block">Sort By</span>
// //               <div className="relative">
// //                 <select
// //                   value={selectedSort}
// //                   onChange={(e) => setSelectedSort(e.target.value)}
// //                   className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-xl px-3 py-2.5 pr-8 focus:outline-none focus:ring-1 focus:ring-orange-400"
// //                 >
// //                   <option>Most Relevant</option>
// //                   <option>Price: Low to High</option>
// //                   <option>Price: High to Low</option>
// //                   <option>Highest Rated</option>
// //                 </select>
// //                 <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
// //               </div>
// //             </div>
// //           </aside>

// //           {/* MAIN CONTENT AREA */}
// //           <main className="lg:col-span-9 space-y-6">
            
// //             {/* Header Title & Badges */}
// //             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
// //               <div>
// //                 <h1 className="text-2xl font-bold text-slate-900">All Mentors</h1>
// //                 <p className="text-xs text-slate-500 mt-1 max-w-xl">
// //                   Connect with verified and experienced mentors from Good Guiders who can guide, motivate and help you reach your full potential.
// //                 </p>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <div className="flex items-center gap-2.5 bg-emerald-50/70 border border-emerald-100 px-3.5 py-2 rounded-xl">
// //                   <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-600">
// //                     <ShieldCheck className="w-4 h-4" />
// //                   </div>
// //                   <div>
// //                     <div className="text-[11px] font-bold text-slate-800">100% Confidential</div>
// //                     <div className="text-[9px] text-slate-500">Safe & Secure Platform</div>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center gap-2.5 bg-emerald-50/70 border border-emerald-100 px-3.5 py-2 rounded-xl">
// //                   <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-600">
// //                     <UserCheck className="w-4 h-4" />
// //                   </div>
// //                   <div>
// //                     <div className="text-[11px] font-bold text-slate-800">Verified Mentors</div>
// //                     <div className="text-[9px] text-slate-500">Trusted by Students</div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* 4 Feature Banner Cards */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
// //               <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs flex items-start gap-3">
// //                 <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
// //                   <ShieldCheck className="w-4 h-4" />
// //                 </div>
// //                 <div>
// //                   <h4 className="text-xs font-bold text-slate-800">Verified Mentors</h4>
// //                   <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">All mentors are verified and background checked</p>
// //                 </div>
// //               </div>

// //               <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs flex items-start gap-3">
// //                 <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
// //                   <Award className="w-4 h-4" />
// //                 </div>
// //                 <div>
// //                   <h4 className="text-xs font-bold text-slate-800">Expert Guidance</h4>
// //                   <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">Learn from experienced & skilled mentors</p>
// //                 </div>
// //               </div>

// //               <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs flex items-start gap-3">
// //                 <div className="p-2 rounded-lg bg-rose-50 text-rose-500">
// //                   <UserCheck className="w-4 h-4" />
// //                 </div>
// //                 <div>
// //                   <h4 className="text-xs font-bold text-slate-800">Personalized Support</h4>
// //                   <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">Get one-on-one guidance tailored to you</p>
// //                 </div>
// //               </div>

// //               <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs flex items-start gap-3">
// //                 <div className="p-2 rounded-lg bg-indigo-50 text-indigo-500">
// //                   <Clock className="w-4 h-4" />
// //                 </div>
// //                 <div>
// //                   <h4 className="text-xs font-bold text-slate-800">Flexible & Convenient</h4>
// //                   <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">Choose time, duration & mode that suits you</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Search, Filter Bar & Count */}
// //             <div className="space-y-4">
// //               <div className="flex flex-col sm:flex-row items-center gap-3">
// //                 <div className="relative flex-1 w-full">
// //                   <input
// //                     type="text"
// //                     placeholder="Search by name, expertise or keyword..."
// //                     className="w-full bg-white border border-slate-200 text-xs rounded-xl pl-4 pr-10 py-2.5 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-400 shadow-xs"
// //                   />
// //                   <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
// //                 </div>

// //                 <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
// //                   <div className="flex items-center gap-2">
// //                     <span className="text-xs text-slate-500 whitespace-nowrap">Sort By:</span>
// //                     <div className="relative">
// //                       <select
// //                         value={selectedSort}
// //                         onChange={(e) => setSelectedSort(e.target.value)}
// //                         className="appearance-none bg-white border border-slate-200 text-xs font-medium rounded-xl pl-3 pr-8 py-2 text-slate-700 focus:outline-none shadow-xs"
// //                       >
// //                         <option>Most Relevant</option>
// //                         <option>Price: Low to High</option>
// //                         <option>Price: High to Low</option>
// //                       </select>
// //                       <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center gap-1">
// //                     <span className="text-xs text-slate-500 mr-1">View:</span>
// //                     <button
// //                       onClick={() => setActiveTab("grid")}
// //                       className={`p-1.5 rounded-lg border text-slate-600 transition-colors ${
// //                         activeTab === "grid" ? "bg-slate-100 border-slate-300" : "bg-white border-slate-200 hover:bg-slate-50"
// //                       }`}
// //                     >
// //                       <LayoutGrid className="w-4 h-4" />
// //                     </button>
// //                     <button
// //                       onClick={() => setActiveTab("list")}
// //                       className={`p-1.5 rounded-lg border text-slate-600 transition-colors ${
// //                         activeTab === "list" ? "bg-slate-100 border-slate-300" : "bg-white border-slate-200 hover:bg-slate-50"
// //                       }`}
// //                     >
// //                       <List className="w-4 h-4" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="text-xs font-bold text-slate-900">48 Mentors <span className="font-normal text-slate-500">Found</span></div>
// //             </div>

// //             {/* Mentor Cards Grid */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
// //               {mentorsData.map((mentor) => (
// //                 <div
// //                   key={mentor.id}
// //                   className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow p-3.5 flex flex-col justify-between relative"
// //                 >
// //                   <div>
// //                     {/* Top status & wishlist */}
// //                     <div className="flex items-center justify-between mb-3">
// //                       <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
// //                         Available
// //                       </span>
// //                       <button
// //                         onClick={() => toggleFavorite(mentor.id)}
// //                         className="text-slate-300 hover:text-rose-500 transition-colors"
// //                       >
// //                         <Heart
// //                           className={`w-4 h-4 ${favorites[mentor.id] ? "fill-rose-500 text-rose-500" : ""}`}
// //                         />
// //                       </button>
// //                     </div>

// //                     {/* Mentor Info */}
// //                     <div className="flex gap-3">
// //                       <img
// //                         src={mentor.avatar}
// //                         alt={mentor.name}
// //                         className="w-14 h-16 rounded-xl object-cover shrink-0"
// //                       />
// //                       <div className="flex-1 min-w-0">
// //                         <div className="flex items-center gap-1">
// //                           <h3 className="font-bold text-xs text-slate-900 truncate">{mentor.name}</h3>
// //                           <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 fill-indigo-100 shrink-0" />
// //                         </div>
// //                         <p className="text-[10px] text-slate-500 mt-0.5 leading-snug line-clamp-2">{mentor.role}</p>
// //                         <p className="text-[9px] text-slate-400 mt-1 flex items-center gap-1">
// //                           <Clock className="w-2.5 h-2.5" />
// //                           {mentor.experience}
// //                         </p>
// //                       </div>
// //                     </div>

// //                     {/* Tags */}
// //                     <div className="flex flex-wrap gap-1 mt-3.5">
// //                       {mentor.tags.map((tag) => (
// //                         <span key={tag} className="text-[9px] font-medium bg-indigo-50/70 text-indigo-700 px-2 py-0.5 rounded">
// //                           {tag}
// //                         </span>
// //                       ))}
// //                       {mentor.moreTagsCount && (
// //                         <span className="text-[9px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
// //                           +{mentor.moreTagsCount} more
// //                         </span>
// //                       )}
// //                     </div>
// //                   </div>

// //                   {/* Rating & Pricing */}
// //                   <div className="mt-4 pt-3 border-t border-slate-50 space-y-3">
// //                     <div className="flex items-center justify-between text-xs">
// //                       <div className="flex items-center gap-1">
// //                         <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
// //                         <span className="font-bold text-[11px] text-slate-800">{mentor.rating}</span>
// //                         <span className="text-[10px] text-slate-400">({mentor.reviewsCount})</span>
// //                       </div>
// //                       <div>
// //                         <span className="font-bold text-xs text-slate-900">₹{mentor.price}</span>
// //                         <span className="text-[10px] text-slate-400 font-normal"> / session</span>
// //                       </div>
// //                     </div>

// //                     {/* CTAs */}
// //                     <div className="grid grid-cols-2 gap-2">
// //                       <button className="w-full text-center py-1.5 text-[10px] font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
// //                         View Profile
// //                       </button>
// //                       <button className="w-full text-center py-1.5 text-[10px] font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors">
// //                         Book a Session
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Pagination */}
// //             <div className="flex items-center justify-center gap-1.5 pt-4">
// //               <button className="w-7 h-7 rounded-lg bg-indigo-950 text-white flex items-center justify-center text-xs font-semibold">
// //                 1
// //               </button>
// //               <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-100 flex items-center justify-center text-xs transition-colors">
// //                 2
// //               </button>
// //               <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-100 flex items-center justify-center text-xs transition-colors">
// //                 3
// //               </button>
// //               <span className="text-xs text-slate-400 px-1">...</span>
// //               <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-100 flex items-center justify-center text-xs transition-colors">
// //                 6
// //               </button>
// //               <button className="w-7 h-7 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 flex items-center justify-center transition-colors">
// //                 <ChevronRight className="w-3.5 h-3.5" />
// //               </button>
// //             </div>

// //             {/* Bottom Quiz / Recommendation Card */}
// //             <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
// //               <div className="flex items-center gap-4">
// //                 <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0">
// //                   <UserCheck className="w-8 h-8" />
// //                 </div>
// //                 <div>
// //                   <h3 className="text-base font-bold text-slate-900">Not sure whom to choose?</h3>
// //                   <p className="text-xs text-slate-500 mt-1">
// //                     Take our quick quiz and we'll help you find the perfect mentor for your goals.
// //                   </p>
// //                 </div>
// //               </div>
// //               <button className="px-6 py-2.5 border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white rounded-xl text-xs font-bold transition-all whitespace-nowrap">
// //                 Find My Mentor
// //               </button>
// //             </div>

// //             {/* Bottom Trust Badges Footer */}
// //             <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-4 border-t border-slate-200 text-slate-600">
// //               <div className="flex items-center gap-2 justify-center sm:justify-start">
// //                 <ShieldCheck className="w-4 h-4 text-slate-700" />
// //                 <span className="text-[11px] font-semibold text-slate-700">100% Confidential</span>
// //               </div>
// //               <div className="flex items-center gap-2 justify-center sm:justify-start">
// //                 <UserCheck className="w-4 h-4 text-slate-700" />
// //                 <span className="text-[11px] font-semibold text-slate-700">Verified & Trusted Mentors</span>
// //               </div>
// //               <div className="flex items-center gap-2 justify-center sm:justify-start">
// //                 <Lock className="w-4 h-4 text-slate-700" />
// //                 <span className="text-[11px] font-semibold text-slate-700">Safe & Secure Platform</span>
// //               </div>
// //               <div className="flex items-center gap-2 justify-center sm:justify-start">
// //                 <Calendar className="w-4 h-4 text-slate-700" />
// //                 <span className="text-[11px] font-semibold text-slate-700">Flexible Sessions</span>
// //               </div>
// //               <div className="flex items-center gap-2 justify-center sm:justify-start col-span-2 sm:col-span-1">
// //                 <Headphones className="w-4 h-4 text-slate-700" />
// //                 <span className="text-[11px] font-semibold text-slate-700">Support When You Need</span>
// //               </div>
// //             </div>

// //           </main>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// import React, { useState, useEffect } from "react";
// import {
//   Search,
//   ChevronDown,
//   ChevronUp,
//   LayoutGrid,
//   List,
//   Heart,
//   Star,
//   ShieldCheck,
//   Award,
//   UserCheck,
//   Clock,
//   Lock,
//   Calendar,
//   Headphones,
//   CheckCircle2,
//   ChevronRight,
// } from "lucide-react";

// interface Mentor {
//   id: string;
//   name: string;
//   role: string;
//   experience: string;
//   rating: number;
//   reviewsCount: number;
//   price: number;
//   avatar: string;
//   available: boolean;
//   tags: string[];
//   moreTagsCount?: number;
// }

// const mentorsData: Mentor[] = [
//   {
//     id: "1",
//     name: "Mr. Rohan Mehta",
//     role: "Counselling Psychologist & Wellness Expert",
//     experience: "6+ Years Experience",
//     rating: 4.9,
//     reviewsCount: 120,
//     price: 799,
//     avatar:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
//     available: true,
//     tags: ["Stress Management", "Student Counselling"],
//     moreTagsCount: 3,
//   },
//   {
//     id: "2",
//     name: "Dr. Ananya Sharma",
//     role: "Clinical Psychologist",
//     experience: "8+ Years Experience",
//     rating: 4.8,
//     reviewsCount: 96,
//     price: 899,
//     avatar:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
//     available: true,
//     tags: ["Confidence Building", "Emotional Well-being"],
//     moreTagsCount: 3,
//   },
//   {
//     id: "3",
//     name: "CA Rohan Kapoor",
//     role: "Commerce Mentor",
//     experience: "7+ Years Experience",
//     rating: 4.7,
//     reviewsCount: 88,
//     price: 699,
//     avatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
//     available: true,
//     tags: ["Career Guidance", "Business Growth"],
//     moreTagsCount: 2,
//   },
//   {
//     id: "4",
//     name: "Dr. Neha Sharma",
//     role: "Mentor & Educator",
//     experience: "10+ Years Experience",
//     rating: 4.9,
//     reviewsCount: 110,
//     price: 600,
//     avatar:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
//     available: true,
//     tags: ["Study Planning", "Exam Strategy"],
//     moreTagsCount: 2,
//   },
//   {
//     id: "5",
//     name: "Er. Rahul Verma",
//     role: "JEE Mentor",
//     experience: "8+ Years Experience",
//     rating: 4.8,
//     reviewsCount: 78,
//     price: 600,
//     avatar:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
//     available: true,
//     tags: ["JEE Guidance", "Problem Solving"],
//     moreTagsCount: 3,
//   },
//   {
//     id: "6",
//     name: "Dr. Meera Iyer",
//     role: "Psychotherapist",
//     experience: "10+ Years Experience",
//     rating: 4.9,
//     reviewsCount: 110,
//     price: 999,
//     avatar:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80",
//     available: true,
//     tags: ["Anxiety Management", "Relationship Counselling"],
//     moreTagsCount: 2,
//   },
//   {
//     id: "7",
//     name: "Mr. Arjun Das",
//     role: "Life Coach",
//     experience: "5+ Years Experience",
//     rating: 4.6,
//     reviewsCount: 48,
//     price: 699,
//     avatar:
//       "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80",
//     available: true,
//     tags: ["Personal Growth", "Mindset Coaching"],
//     moreTagsCount: 2,
//   },
//   {
//     id: "8",
//     name: "Ms. Priya Nair",
//     role: "Overseas Education Expert",
//     experience: "7+ Years Experience",
//     rating: 4.8,
//     reviewsCount: 66,
//     price: 799,
//     avatar:
//       "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80",
//     available: true,
//     tags: ["Study Abroad", "University Selection"],
//     moreTagsCount: 2,
//   },
// ];

// // Class options mapping
// const classMapping: Record<string, string[]> = {
//   "1-5": ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
//   "6-10": ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"],
//   "11-12": ["Class 11", "Class 12"],
// };

// export default function HeaderClass() {
//   const [activeTab, setActiveTab] = useState<"grid" | "list">("grid");
//   const [selectedSort, setSelectedSort] = useState("Most Relevant");
//   const [favorites, setFavorites] = useState<Record<string, boolean>>({});
//   const [selectedClassGroup, setSelectedClassGroup] = useState<string>("6-10");
//   const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

//   // URL se query param check karega (jaise ?class=1-5 ya ?class=6-10 ya ?class=11-12)
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const classParam = params.get("class");
//     if (classParam && classMapping[classParam]) {
//       setSelectedClassGroup(classParam);
//     }
//   }, []);

//   // Current class list base on selection
//   const currentClasses = classMapping[selectedClassGroup] || classMapping["6-10"];

//   const toggleFavorite = (id: string) => {
//     setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const handleCheckboxToggle = (item: string) => {
//     setSelectedCheckboxes((prev) =>
//       prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
//     );
//   };

//   const resetFilters = () => {
//     setSelectedCheckboxes([]);
//     setSelectedSort("Most Relevant");
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
//       <div className="max-w-[1400px] mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
//           {/* ================= LEFT SIDEBAR - FILTERS ================= */}
//           <aside className="lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm self-start space-y-6">
//             <div className="flex items-center justify-between pb-3 border-b border-slate-100">
//               <span className="font-bold text-slate-900 text-base">Filters</span>
//               <button
//                 onClick={resetFilters}
//                 className="text-orange-600 hover:text-orange-700 text-sm font-semibold transition-colors"
//               >
//                 Reset All
//               </button>
//             </div>

//             {/* Filter: Class (Dynamically changes based on URL) */}
//             <div className="space-y-3">
//               <div className="flex items-center justify-between font-semibold text-xs text-slate-800">
//                 <span>Class</span>
//                 <ChevronUp className="w-4 h-4 text-slate-400 cursor-pointer" />
//               </div>
//               <div className="space-y-2">
//                 {currentClasses.map((item) => (
//                   <label
//                     key={item}
//                     className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={selectedCheckboxes.includes(item)}
//                       onChange={() => handleCheckboxToggle(item)}
//                       className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-0 cursor-pointer"
//                     />
//                     <span>{item}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Filter: Expertise / Specialization */}
//             <div className="space-y-3 pt-3 border-t border-slate-100">
//               <span className="font-semibold text-xs text-slate-800 block">
//                 Expertise / Specialization
//               </span>
//               <div className="relative">
//                 <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-xl px-3 py-2.5 pr-8 focus:outline-none focus:ring-1 focus:ring-orange-400">
//                   <option>Select Expertise</option>
//                   <option>Psychology</option>
//                   <option>Engineering / JEE</option>
//                   <option>Commerce & CA</option>
//                   <option>Study Abroad</option>
//                 </select>
//                 <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
//               </div>
//             </div>

//             {/* Filter: Session Type */}
//             <div className="space-y-3 pt-3 border-t border-slate-100">
//               <div className="flex items-center justify-between font-semibold text-xs text-slate-800">
//                 <span>Session Type</span>
//                 <ChevronUp className="w-4 h-4 text-slate-400 cursor-pointer" />
//               </div>
//               <div className="space-y-2">
//                 {["One-to-One", "Group Session", "Workshop / Webinar"].map(
//                   (item) => (
//                     <label
//                       key={item}
//                       className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900"
//                     >
//                       <input
//                         type="checkbox"
//                         className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-0 cursor-pointer"
//                       />
//                       <span>{item}</span>
//                     </label>
//                   )
//                 )}
//               </div>
//             </div>

//             {/* Filter: Session Mode */}
//             <div className="space-y-3 pt-3 border-t border-slate-100">
//               <div className="flex items-center justify-between font-semibold text-xs text-slate-800">
//                 <span>Session Mode</span>
//                 <ChevronUp className="w-4 h-4 text-slate-400 cursor-pointer" />
//               </div>
//               <div className="space-y-2">
//                 {["Online (Video Call)", "Audio Call", "Chat Support"].map(
//                   (item) => (
//                     <label
//                       key={item}
//                       className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900"
//                     >
//                       <input
//                         type="checkbox"
//                         className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-0 cursor-pointer"
//                       />
//                       <span>{item}</span>
//                     </label>
//                   )
//                 )}
//               </div>
//             </div>

//             {/* Filter: Availability */}
//             <div className="space-y-3 pt-3 border-t border-slate-100">
//               <div className="flex items-center justify-between font-semibold text-xs text-slate-800">
//                 <span>Availability</span>
//                 <ChevronUp className="w-4 h-4 text-slate-400 cursor-pointer" />
//               </div>
//               <div className="space-y-2">
//                 {["Available Now", "Weekend Available"].map((item) => (
//                   <label
//                     key={item}
//                     className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900"
//                   >
//                     <input
//                       type="checkbox"
//                       className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-0 cursor-pointer"
//                     />
//                     <span>{item}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Filter: Sort By */}
//             <div className="space-y-2 pt-3 border-t border-slate-100">
//               <span className="font-semibold text-xs text-slate-800 block">
//                 Sort By
//               </span>
//               <div className="relative">
//                 <select
//                   value={selectedSort}
//                   onChange={(e) => setSelectedSort(e.target.value)}
//                   className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-xl px-3 py-2.5 pr-8 focus:outline-none focus:ring-1 focus:ring-orange-400"
//                 >
//                   <option>Most Relevant</option>
//                   <option>Price: Low to High</option>
//                   <option>Price: High to Low</option>
//                   <option>Highest Rated</option>
//                 </select>
//                 <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
//               </div>
//             </div>
//           </aside>

//           {/* ================= MAIN CONTENT ================= */}
//           <main className="lg:col-span-9 space-y-6">
            
//             {/* Header Title & Badges */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//               <div>
//                 <h1 className="text-2xl font-bold text-slate-900">
//                   Class {selectedClassGroup.replace("-", " to ")} Mentors
//                 </h1>
//                 <p className="text-xs text-slate-500 mt-1 max-w-xl">
//                   Connect with verified and experienced mentors from Good Guiders
//                   who can guide, motivate and help you reach your full potential.
//                 </p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="flex items-center gap-2.5 bg-emerald-50/70 border border-emerald-100 px-3.5 py-2 rounded-xl">
//                   <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-600">
//                     <ShieldCheck className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <div className="text-[11px] font-bold text-slate-800">
//                       100% Confidential
//                     </div>
//                     <div className="text-[9px] text-slate-500">
//                       Safe & Secure Platform
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2.5 bg-emerald-50/70 border border-emerald-100 px-3.5 py-2 rounded-xl">
//                   <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-600">
//                     <UserCheck className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <div className="text-[11px] font-bold text-slate-800">
//                       Verified Mentors
//                     </div>
//                     <div className="text-[9px] text-slate-500">
//                       Trusted by Students
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* 4 Feature Banner Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
//               <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs flex items-start gap-3">
//                 <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
//                   <ShieldCheck className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-bold text-slate-800">
//                     Verified Mentors
//                   </h4>
//                   <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
//                     All mentors are verified and background checked
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs flex items-start gap-3">
//                 <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
//                   <Award className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-bold text-slate-800">
//                     Expert Guidance
//                   </h4>
//                   <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
//                     Learn from experienced & skilled mentors
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs flex items-start gap-3">
//                 <div className="p-2 rounded-lg bg-rose-50 text-rose-500">
//                   <UserCheck className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-bold text-slate-800">
//                     Personalized Support
//                   </h4>
//                   <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
//                     Get one-on-one guidance tailored to you
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs flex items-start gap-3">
//                 <div className="p-2 rounded-lg bg-indigo-50 text-indigo-500">
//                   <Clock className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-bold text-slate-800">
//                     Flexible & Convenient
//                   </h4>
//                   <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
//                     Choose time, duration & mode that suits you
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Search, Filter Bar & Count */}
//             <div className="space-y-4">
//               <div className="flex flex-col sm:flex-row items-center gap-3">
//                 <div className="relative flex-1 w-full">
//                   <input
//                     type="text"
//                     placeholder="Search by name, expertise or keyword..."
//                     className="w-full bg-white border border-slate-200 text-xs rounded-xl pl-4 pr-10 py-2.5 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-400 shadow-xs"
//                   />
//                   <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
//                 </div>

//                 <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
//                   <div className="flex items-center gap-2">
//                     <span className="text-xs text-slate-500 whitespace-nowrap">
//                       Sort By:
//                     </span>
//                     <div className="relative">
//                       <select
//                         value={selectedSort}
//                         onChange={(e) => setSelectedSort(e.target.value)}
//                         className="appearance-none bg-white border border-slate-200 text-xs font-medium rounded-xl pl-3 pr-8 py-2 text-slate-700 focus:outline-none shadow-xs"
//                       >
//                         <option>Most Relevant</option>
//                         <option>Price: Low to High</option>
//                         <option>Price: High to Low</option>
//                         <option>Highest Rated</option>
//                       </select>
//                       <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-1">
//                     <span className="text-xs text-slate-500 mr-1">View:</span>
//                     <button
//                       onClick={() => setActiveTab("grid")}
//                       className={`p-1.5 rounded-lg border text-slate-600 transition-colors ${
//                         activeTab === "grid"
//                           ? "bg-slate-100 border-slate-300"
//                           : "bg-white border-slate-200 hover:bg-slate-50"
//                       }`}
//                     >
//                       <LayoutGrid className="w-4 h-4" />
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("list")}
//                       className={`p-1.5 rounded-lg border text-slate-600 transition-colors ${
//                         activeTab === "list"
//                           ? "bg-slate-100 border-slate-300"
//                           : "bg-white border-slate-200 hover:bg-slate-50"
//                       }`}
//                     >
//                       <List className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="text-xs font-bold text-slate-900">
//                 48 Mentors{" "}
//                 <span className="font-normal text-slate-500">
//                   Found for {currentClasses.join(", ")}
//                 </span>
//               </div>
//             </div>

//             {/* Mentor Cards Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
//               {mentorsData.map((mentor) => (
//                 <div
//                   key={mentor.id}
//                   className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow p-3.5 flex flex-col justify-between relative"
//                 >
//                   <div>
//                     <div className="flex items-center justify-between mb-3">
//                       <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
//                         Available
//                       </span>
//                       <button
//                         onClick={() => toggleFavorite(mentor.id)}
//                         className="text-slate-300 hover:text-rose-500 transition-colors"
//                       >
//                         <Heart
//                           className={`w-4 h-4 ${
//                             favorites[mentor.id]
//                               ? "fill-rose-500 text-rose-500"
//                               : ""
//                           }`}
//                         />
//                       </button>
//                     </div>

//                     <div className="flex gap-3">
//                       <img
//                         src={mentor.avatar}
//                         alt={mentor.name}
//                         className="w-14 h-16 rounded-xl object-cover shrink-0"
//                       />
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center gap-1">
//                           <h3 className="font-bold text-xs text-slate-900 truncate">
//                             {mentor.name}
//                           </h3>
//                           <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 fill-indigo-100 shrink-0" />
//                         </div>
//                         <p className="text-[10px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
//                           {mentor.role}
//                         </p>
//                         <p className="text-[9px] text-slate-400 mt-1 flex items-center gap-1">
//                           <Clock className="w-2.5 h-2.5" />
//                           {mentor.experience}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex flex-wrap gap-1 mt-3.5">
//                       {mentor.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="text-[9px] font-medium bg-indigo-50/70 text-indigo-700 px-2 py-0.5 rounded"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                       {mentor.moreTagsCount && (
//                         <span className="text-[9px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
//                           +{mentor.moreTagsCount} more
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="mt-4 pt-3 border-t border-slate-50 space-y-3">
//                     <div className="flex items-center justify-between text-xs">
//                       <div className="flex items-center gap-1">
//                         <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
//                         <span className="font-bold text-[11px] text-slate-800">
//                           {mentor.rating}
//                         </span>
//                         <span className="text-[10px] text-slate-400">
//                           ({mentor.reviewsCount})
//                         </span>
//                       </div>
//                       <div>
//                         <span className="font-bold text-xs text-slate-900">
//                           ₹{mentor.price}
//                         </span>
//                         <span className="text-[10px] text-slate-400 font-normal">
//                           {" "}
//                           / session
//                         </span>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-2">
//                       <button className="w-full text-center py-1.5 text-[10px] font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
//                         View Profile
//                       </button>
//                       <button className="w-full text-center py-1.5 text-[10px] font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors">
//                         Book a Session
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex items-center justify-center gap-1.5 pt-4">
//               <button className="w-7 h-7 rounded-lg bg-indigo-950 text-white flex items-center justify-center text-xs font-semibold">
//                 1
//               </button>
//               <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-100 flex items-center justify-center text-xs transition-colors">
//                 2
//               </button>
//               <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-100 flex items-center justify-center text-xs transition-colors">
//                 3
//               </button>
//               <span className="text-xs text-slate-400 px-1">...</span>
//               <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-100 flex items-center justify-center text-xs transition-colors">
//                 6
//               </button>
//               <button className="w-7 h-7 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 flex items-center justify-center transition-colors">
//                 <ChevronRight className="w-3.5 h-3.5" />
//               </button>
//             </div>

//             {/* Bottom Recommendation Card */}
//             <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
//               <div className="flex items-center gap-4">
//                 <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0">
//                   <UserCheck className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h3 className="text-base font-bold text-slate-900">
//                     Not sure whom to choose?
//                   </h3>
//                   <p className="text-xs text-slate-500 mt-1">
//                     Take our quick quiz and we'll help you find the perfect mentor
//                     for your goals.
//                   </p>
//                 </div>
//               </div>
//               <button className="px-6 py-2.5 border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white rounded-xl text-xs font-bold transition-all whitespace-nowrap">
//                 Find My Mentor
//               </button>
//             </div>

//             {/* Bottom Trust Badges */}
//             <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-4 border-t border-slate-200 text-slate-600">
//               <div className="flex items-center gap-2 justify-center sm:justify-start">
//                 <ShieldCheck className="w-4 h-4 text-slate-700" />
//                 <span className="text-[11px] font-semibold text-slate-700">
//                   100% Confidential
//                 </span>
//               </div>
//               <div className="flex items-center gap-2 justify-center sm:justify-start">
//                 <UserCheck className="w-4 h-4 text-slate-700" />
//                 <span className="text-[11px] font-semibold text-slate-700">
//                   Verified & Trusted Mentors
//                 </span>
//               </div>
//               <div className="flex items-center gap-2 justify-center sm:justify-start">
//                 <Lock className="w-4 h-4 text-slate-700" />
//                 <span className="text-[11px] font-semibold text-slate-700">
//                   Safe & Secure Platform
//                 </span>
//               </div>
//               <div className="flex items-center gap-2 justify-center sm:justify-start">
//                 <Calendar className="w-4 h-4 text-slate-700" />
//                 <span className="text-[11px] font-semibold text-slate-700">
//                   Flexible Sessions
//                 </span>
//               </div>
//               <div className="flex items-center gap-2 justify-center sm:justify-start col-span-2 sm:col-span-1">
//                 <Headphones className="w-4 h-4 text-slate-700" />
//                 <span className="text-[11px] font-semibold text-slate-700">
//                   Support When You Need
//                 </span>
//               </div>
//             </div>

//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  List,
  Heart,
  Star,
  ShieldCheck,
  Award,
  UserCheck,
  Clock,
  Lock,
  Calendar,
  Headphones,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  MessageSquare,
  Share2,
  Link2,
  Target,
  BookOpen,
  TrendingUp,
  GraduationCap,
} from "lucide-react";

interface Mentor {
  id: string;
  name: string;
  role: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  price: number;
  avatar: string;
  available: boolean;
  tags: string[];
  moreTagsCount?: number;
  // Dynamic fields for detail view
  mentorSince?: string;
  languages?: string;
  responseTime?: string;
  sessionsCount?: string;
  studentsMentored?: string;
  positiveFeedback?: string;
  bioIntro?: string;
  aboutText?: string;
}

const mentorsData: Mentor[] = [
  {
    id: "1",
    name: "Dr. Anjali Mehta",
    role: "Career & Academic Mentor",
    experience: "8+ Years Experience",
    rating: 4.8,
    reviewsCount: 120,
    price: 799,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    available: true,
    tags: ["Stress Management", "Student Counselling"],
    moreTagsCount: 3,
    mentorSince: "2016",
    languages: "English, Hindi",
    responseTime: "Within 2 Hours",
    sessionsCount: "1000+",
    studentsMentored: "500+",
    positiveFeedback: "98%",
    bioIntro:
      "I help students unlock their true potential by providing the right academic guidance, career clarity and personal growth strategies. My goal is to mentor you not just for today, but for a successful future.",
    aboutText:
      "I am a Ph.D. in Psychology and an NLP Practitioner with over 8 years of experience in mentoring students across India and abroad. I specialize in career counseling, exam strategy, and personal development. I believe in practical guidance, consistent support and building confidence in students to help them achieve their dreams.",
  },
  {
    id: "2",
    name: "Dr. Ananya Sharma",
    role: "Clinical Psychologist",
    experience: "8+ Years Experience",
    rating: 4.8,
    reviewsCount: 96,
    price: 899,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    available: true,
    tags: ["Confidence Building", "Emotional Well-being"],
    moreTagsCount: 3,
    mentorSince: "2017",
    languages: "English, Hindi",
    responseTime: "Within 1 Hour",
    sessionsCount: "850+",
    studentsMentored: "400+",
    positiveFeedback: "96%",
    bioIntro:
      "Helping students and young professionals master their mental well-being and build unbreakable confidence through personalized sessions.",
    aboutText:
      "With 8+ years of dedicated clinical psychology practice, I guide students through emotional hurdles, academic anxiety, and personalized growth routines.",
  },
  {
    id: "3",
    name: "CA Rohan Kapoor",
    role: "Commerce Mentor",
    experience: "7+ Years Experience",
    rating: 4.7,
    reviewsCount: 88,
    price: 699,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    available: true,
    tags: ["Career Guidance", "Business Growth"],
    moreTagsCount: 2,
    mentorSince: "2018",
    languages: "English, Hindi",
    responseTime: "Within 2 Hours",
    sessionsCount: "620+",
    studentsMentored: "350+",
    positiveFeedback: "97%",
    bioIntro:
      "Simplifying commerce, accountancy, and CA foundation strategies for students aiming for top ranks and clear career trajectories.",
    aboutText:
      "Experienced Chartered Accountant offering focused mentoring on strategic study plans, business fundamentals, and exam temperament.",
  },
  {
    id: "4",
    name: "Dr. Neha Sharma",
    role: "Mentor & Educator",
    experience: "10+ Years Experience",
    rating: 4.9,
    reviewsCount: 110,
    price: 600,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
    available: true,
    tags: ["Study Planning", "Exam Strategy"],
    moreTagsCount: 2,
    mentorSince: "2015",
    languages: "English, Hindi",
    responseTime: "Within 1 Hour",
    sessionsCount: "1200+",
    studentsMentored: "750+",
    positiveFeedback: "99%",
    bioIntro:
      "10+ years dedicated to structuring daily routines, subject roadmaps, and revision tactics for high-stakes examinations.",
    aboutText:
      "Educator passionate about making complex study schedules manageable, productive, and completely stress-free for learners.",
  },
  {
    id: "5",
    name: "Er. Rahul Verma",
    role: "JEE Mentor",
    experience: "8+ Years Experience",
    rating: 4.8,
    reviewsCount: 78,
    price: 600,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    available: true,
    tags: ["JEE Guidance", "Problem Solving"],
    moreTagsCount: 3,
    mentorSince: "2016",
    languages: "English, Hindi",
    responseTime: "Within 3 Hours",
    sessionsCount: "900+",
    studentsMentored: "600+",
    positiveFeedback: "98%",
    bioIntro:
      "Guiding engineering aspirants to conquer conceptual bottlenecks and optimize speed in competitive examinations.",
    aboutText:
      "Engineering graduate with deep insights into JEE Main and Advanced preparation methodologies and time management techniques.",
  },
  {
    id: "6",
    name: "Dr. Meera Iyer",
    role: "Psychotherapist",
    experience: "10+ Years Experience",
    rating: 4.9,
    reviewsCount: 110,
    price: 999,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80",
    available: true,
    tags: ["Anxiety Management", "Relationship Counselling"],
    moreTagsCount: 2,
    mentorSince: "2014",
    languages: "English, Hindi, Tamil",
    responseTime: "Within 2 Hours",
    sessionsCount: "1500+",
    studentsMentored: "900+",
    positiveFeedback: "99%",
    bioIntro:
      "Creating compassionate spaces for students and young adults to overcome anxiety and excel in their personal journeys.",
    aboutText:
      "Senior psychotherapist with a decade of expertise in mindfulness, cognitive restructuring, and stress alleviation.",
  },
  {
    id: "7",
    name: "Mr. Arjun Das",
    role: "Life Coach",
    experience: "5+ Years Experience",
    rating: 4.6,
    reviewsCount: 48,
    price: 699,
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80",
    available: true,
    tags: ["Personal Growth", "Mindset Coaching"],
    moreTagsCount: 2,
    mentorSince: "2019",
    languages: "English, Hindi, Bengali",
    responseTime: "Within 2 Hours",
    sessionsCount: "450+",
    studentsMentored: "280+",
    positiveFeedback: "95%",
    bioIntro:
      "Empowering students to overcome procrastination, cultivate winning habits, and unlock high productivity.",
    aboutText:
      "Certified mindset coach helping students align their daily habits with their biggest educational and professional aspirations.",
  },
  {
    id: "8",
    name: "Ms. Priya Nair",
    role: "Overseas Education Expert",
    experience: "7+ Years Experience",
    rating: 4.8,
    reviewsCount: 66,
    price: 799,
    avatar:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80",
    available: true,
    tags: ["Study Abroad", "University Selection"],
    moreTagsCount: 2,
    mentorSince: "2017",
    languages: "English, Hindi, Malayalam",
    responseTime: "Within 1 Hour",
    sessionsCount: "700+",
    studentsMentored: "450+",
    positiveFeedback: "98%",
    bioIntro:
      "Helping students navigate international university selections, SOP writing, and scholarship applications effortlessly.",
    aboutText:
      "Overseas education advisor with 7+ years of track record in placing students across top universities in the US, UK, and Europe.",
  },
];

// Class options mapping
const classMapping: Record<string, string[]> = {
  "1-5": ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
  "6-10": ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"],
  "11-12": ["Class 11", "Class 12"],
};

export default function HeaderClass() {
  const [activeTab, setActiveTab] = useState<"grid" | "list">("grid");
  const [selectedSort, setSelectedSort] = useState("Most Relevant");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [selectedClassGroup, setSelectedClassGroup] = useState<string>("6-10");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  // State to hold the currently selected mentor for the detail view
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  // URL se query param check karega (jaise ?class=1-5 ya ?class=6-10 ya ?class=11-12)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const classParam = params.get("class");
    if (classParam && classMapping[classParam]) {
      setSelectedClassGroup(classParam);
    }
  }, []);

  // Current class list base on selection
  const currentClasses =
    classMapping[selectedClassGroup] || classMapping["6-10"];

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCheckboxToggle = (item: string) => {
    setSelectedCheckboxes((prev) =>
      prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
    );
  };

  const resetFilters = () => {
    setSelectedCheckboxes([]);
    setSelectedSort("Most Relevant");
  };

  /* =========================================================
     DETAIL VIEW (Opens when "View Profile" is clicked)
     ========================================================= */
  if (selectedMentor) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Back Navigation Button */}
          <button
            onClick={() => setSelectedMentor(null)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Mentors List
          </button>

          {/* Top Profile Main Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Avatar & Basic Action Card */}
            <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="relative w-full aspect-square max-w-[260px] rounded-2xl overflow-hidden mb-4 shadow-inner">
                <img
                  src={selectedMentor.avatar}
                  alt={selectedMentor.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Mentor
                </span>
                <span className="absolute bottom-3 right-3 bg-white/95 text-emerald-600 text-[10px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Available
                </span>
              </div>

              <div className="flex items-center gap-1.5 justify-center">
                <h2 className="text-lg font-bold text-slate-900">{selectedMentor.name}</h2>
                <CheckCircle2 className="w-4 h-4 text-indigo-600 fill-indigo-100" />
              </div>
              <p className="text-xs text-slate-500 mt-0.5">{selectedMentor.role}</p>

              <div className="flex items-center justify-center gap-4 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100 w-full">
                <span className="flex items-center gap-1 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> {selectedMentor.experience}
                </span>
                <span className="flex items-center gap-1 text-[11px]">
                  <UserCheck className="w-3.5 h-3.5 text-slate-400" /> {selectedMentor.studentsMentored || "500+"} Students Mentored
                </span>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs mt-2 w-full">
                <span className="flex items-center gap-1 font-bold text-[11px] text-slate-800">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  {selectedMentor.rating} <span className="font-normal text-slate-400">({selectedMentor.reviewsCount})</span>
                </span>
                <span className="flex items-center gap-1 text-emerald-600 font-semibold text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {selectedMentor.positiveFeedback || "98%"} Positive Feedback
                </span>
              </div>

              <div className="w-full space-y-2 mt-4">
                <button className="w-full py-2.5 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl transition-colors shadow-xs">
                  Book a Session
                </button>
                <button className="w-full py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-500" /> Message Mentor
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 mt-4 pt-3 border-t border-slate-100 w-full text-slate-400">
                <span className="text-[10px]">Share Profile:</span>
                <button className="hover:text-emerald-500 transition-colors"><MessageSquare className="w-4 h-4" /></button>
                <button className="hover:text-indigo-600 transition-colors"><Link2 className="w-4 h-4" /></button>
                <button className="hover:text-slate-700 transition-colors"><Share2 className="w-4 h-4" /></button>
              </div>
            </div>

            {/* Middle Column: Introduction, Badges & About Me */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
              <div>
                <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  Hi, I'm {selectedMentor.name} 👋
                </h1>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {selectedMentor.bioIntro ||
                    "I help students unlock their true potential by providing the right academic guidance, career clarity and personal growth strategies. My goal is to mentor you not just for today, but for a successful future."}
                </p>
              </div>

              {/* 4 Stat Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="bg-indigo-50/50 border border-indigo-50 p-2.5 rounded-xl text-center">
                  <div className="text-[10px] text-slate-400">Mentor Since</div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">{selectedMentor.mentorSince || "2016"}</div>
                </div>
                <div className="bg-indigo-50/50 border border-indigo-50 p-2.5 rounded-xl text-center">
                  <div className="text-[10px] text-slate-400">Languages</div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5 truncate">{selectedMentor.languages || "English, Hindi"}</div>
                </div>
                <div className="bg-indigo-50/50 border border-indigo-50 p-2.5 rounded-xl text-center">
                  <div className="text-[10px] text-slate-400">Response Time</div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">{selectedMentor.responseTime || "Within 2 Hours"}</div>
                </div>
                <div className="bg-indigo-50/50 border border-indigo-50 p-2.5 rounded-xl text-center">
                  <div className="text-[10px] text-slate-400">Sessions Conducted</div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">{selectedMentor.sessionsCount || "1000+"}</div>
                </div>
              </div>

              {/* About Me Section */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900">About Me</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {selectedMentor.aboutText ||
                    "I am a Ph.D. in Psychology and an NLP Practitioner with over 8 years of experience in mentoring students across India and abroad. I specialize in career counseling, exam strategy, and personal development. I believe in practical guidance, consistent support and building confidence in students to help them achieve their dreams."}
                </p>
              </div>
            </div>

            {/* Right Column: Pricing & Booking Box */}
            <div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <div>
                <span className="text-[11px] text-slate-500">Mentoring Fee</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-2xl font-black text-slate-900">₹{selectedMentor.price}</span>
                  <span className="text-xs text-slate-400">/ session</span>
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-800 block">Session Duration</span>
                <span className="text-xs text-slate-600 block">60 Minutes</span>
              </div>

              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> 1-on-1 Personalized Mentoring</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Flexible Scheduling</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Doubt Clarification</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Progress Tracking</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Session Notes & Resources</li>
              </ul>

              <button className="w-full py-2.5 text-xs font-semibold text-white bg-[#6355d8] hover:bg-[#5244ca] rounded-xl transition-colors shadow-xs">
                Book a Session
              </button>
            </div>
          </div>

          {/* What I Provide (Services) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900">What I Provide (Services)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              
              <div className="bg-[#fbfcff] p-4 rounded-xl border border-slate-100 flex flex-col justify-between text-center space-y-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Personalized Mentoring</h4>
                  <p className="text-[10px] text-slate-500 mt-1">1-on-1 sessions tailored to your goals and challenges.</p>
                </div>
                <div className="bg-[#f0f3ff] text-indigo-700 rounded-lg py-1 text-xs font-bold">₹799 / session</div>
              </div>

              <div className="bg-[#fbfcff] p-4 rounded-xl border border-slate-100 flex flex-col justify-between text-center space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Career Guidance</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Career clarity, stream selection and future planning.</p>
                </div>
                <div className="bg-[#f0f3ff] text-indigo-700 rounded-lg py-1 text-xs font-bold">₹599 / session</div>
              </div>

              <div className="bg-[#fbfcff] p-4 rounded-xl border border-slate-100 flex flex-col justify-between text-center space-y-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Exam Strategy</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Study plan, preparation strategy and time management.</p>
                </div>
                <div className="bg-[#f0f3ff] text-indigo-700 rounded-lg py-1 text-xs font-bold">₹499 / session</div>
              </div>

              <div className="bg-[#fbfcff] p-4 rounded-xl border border-slate-100 flex flex-col justify-between text-center space-y-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Study Materials</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Notes, PDFs, practice papers and useful resources.</p>
                </div>
                <div className="bg-[#f0f3ff] text-indigo-700 rounded-lg py-1 text-xs font-bold">₹299 / package</div>
              </div>

              <div className="bg-[#fbfcff] p-4 rounded-xl border border-slate-100 flex flex-col justify-between text-center space-y-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Progress Tracking</h4>
                  <p className="text-[10px] text-slate-500 mt-1">Regular follow-ups and performance tracking for continuous improvement.</p>
                </div>
                <div className="bg-[#f0f3ff] text-indigo-700 rounded-lg py-1 text-xs font-bold">₹399 / session</div>
              </div>

            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1 pt-1">
              <span>💡</span> All sessions are 1-on-1 and completely personalized to your needs.
            </p>
          </div>

          {/* Experience & Education + Availability */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900">Experience & Education</h3>
              <div className="space-y-4">
                <div className="flex items-start justify-between text-xs">
                  <div className="flex gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-800">Ph.D. In Psychology</h5>
                      <p className="text-slate-500 text-[11px]">University of Delhi</p>
                    </div>
                  </div>
                  <span className="text-slate-400 text-[11px]">2012 - 2016</span>
                </div>
                <div className="flex items-start justify-between text-xs">
                  <div className="flex gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-800">NLP Practitioner Certification</h5>
                      <p className="text-slate-500 text-[11px]">ABNLP, USA</p>
                    </div>
                  </div>
                  <span className="text-slate-400 text-[11px]">2017</span>
                </div>
                <div className="flex items-start justify-between text-xs">
                  <div className="flex gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 mt-1" />
                    <div>
                      <h5 className="font-bold text-slate-800">Mentor & Career Counselor</h5>
                      <p className="text-slate-500 text-[11px]">Various Institutions</p>
                    </div>
                  </div>
                  <span className="text-slate-400 text-[11px]">2016 - Present</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900">Availability</h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Monday - Friday</div>
                    <div className="text-[11px] text-slate-500">10:00 AM - 8:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Saturday</div>
                    <div className="text-[11px] text-slate-500">10:00 AM - 6:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-800">Sunday</div>
                    <div className="text-[11px] text-slate-500">By Appointment Only</div>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 pt-2 border-t border-slate-50">• Timings are in IST</p>
            </div>
          </div>

          {/* Subjects, Who Can Benefit & Mentoring Approach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-slate-900">Subjects / Domains I Mentor</h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Career Counselling",
                  "Academic Mentoring",
                  "Psychology",
                  "Study Skills",
                  "Personal Development",
                  "Board Exams (10th, 12th)",
                  "Competitive Exams",
                  "College Admissions",
                ].map((sub) => (
                  <span
                    key={sub}
                    className="text-[10px] bg-slate-50 text-slate-700 px-2 py-1 rounded-lg border border-slate-100"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-slate-900">Who Can Benefit?</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> School Students (8th - 12th)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> College Students</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> Exam Aspirants</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> Students Confused about Career</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> Anyone looking for Personal Growth</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <h3 className="text-xs font-bold text-slate-900">My Mentoring Approach</h3>
              <p className="text-[11px] text-slate-500">I believe mentoring is a partnership. My approach is focused on:</p>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Understanding your strengths & challenges</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Creating a personalized plan</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Taking consistent action</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Building confidence & self-belief</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Achieving your goals together!</li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">Let's Achieve Your Goals Together!</h3>
              <p className="text-xs text-slate-500 mt-1">Book a session with me and take the first step towards a better future.</p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button className="w-full md:w-auto px-6 py-2.5 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-xl transition-colors shadow-xs">
                Book a Session Now
              </button>
              <button className="w-full md:w-auto px-6 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors">
                Message Mentor
              </button>
            </div>
          </div>

          {/* Detail View Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 text-slate-600 text-center">
            <div className="flex items-center justify-center gap-1.5 text-xs">
              <ShieldCheck className="w-4 h-4 text-slate-700" />
              <span>100% Safe & Secure Payments</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-xs">
              <Lock className="w-4 h-4 text-slate-700" />
              <span>Confidential & Private Sessions</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-xs">
              <UserCheck className="w-4 h-4 text-slate-700" />
              <span>Satisfaction Focused Mentoring</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-xs">
              <Calendar className="w-4 h-4 text-slate-700" />
              <span>Cancel/Reschedule Anytime</span>
            </div>
          </div>

          <div className="text-center text-xs text-slate-400 pt-2 pb-6">
            Have questions? <a href="#contact" className="text-orange-600 hover:underline font-semibold">Contact us</a>
          </div>

        </div>
      </div>
    );
  }

  /* =========================================================
     LISTING VIEW (Exact original UI, untouched)
     ========================================================= */
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ================= LEFT SIDEBAR - FILTERS ================= */}
          <aside className="lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm self-start space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-bold text-slate-900 text-base">Filters</span>
              <button
                onClick={resetFilters}
                className="text-orange-600 hover:text-orange-700 text-sm font-semibold transition-colors"
              >
                Reset All
              </button>
            </div>

            {/* Filter: Class (Dynamically changes based on URL) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between font-semibold text-xs text-slate-800">
                <span>Class</span>
                <ChevronUp className="w-4 h-4 text-slate-400 cursor-pointer" />
              </div>
              <div className="space-y-2">
                {currentClasses.map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCheckboxes.includes(item)}
                      onChange={() => handleCheckboxToggle(item)}
                      className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-0 cursor-pointer"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter: Expertise / Specialization */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <span className="font-semibold text-xs text-slate-800 block">
                Expertise / Specialization
              </span>
              <div className="relative">
                <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-xl px-3 py-2.5 pr-8 focus:outline-none focus:ring-1 focus:ring-orange-400">
                  <option>Select Expertise</option>
                  <option>Psychology</option>
                  <option>Engineering / JEE</option>
                  <option>Commerce & CA</option>
                  <option>Study Abroad</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Filter: Session Type */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="flex items-center justify-between font-semibold text-xs text-slate-800">
                <span>Session Type</span>
                <ChevronUp className="w-4 h-4 text-slate-400 cursor-pointer" />
              </div>
              <div className="space-y-2">
                {["One-to-One", "Group Session", "Workshop / Webinar"].map(
                  (item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-0 cursor-pointer"
                      />
                      <span>{item}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Filter: Session Mode */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="flex items-center justify-between font-semibold text-xs text-slate-800">
                <span>Session Mode</span>
                <ChevronUp className="w-4 h-4 text-slate-400 cursor-pointer" />
              </div>
              <div className="space-y-2">
                {["Online (Video Call)", "Audio Call", "Chat Support"].map(
                  (item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-0 cursor-pointer"
                      />
                      <span>{item}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Filter: Availability */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="flex items-center justify-between font-semibold text-xs text-slate-800">
                <span>Availability</span>
                <ChevronUp className="w-4 h-4 text-slate-400 cursor-pointer" />
              </div>
              <div className="space-y-2">
                {["Available Now", "Weekend Available"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer hover:text-slate-900"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-0 cursor-pointer"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter: Sort By */}
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <span className="font-semibold text-xs text-slate-800 block">
                Sort By
              </span>
              <div className="relative">
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-xl px-3 py-2.5 pr-8 focus:outline-none focus:ring-1 focus:ring-orange-400"
                >
                  <option>Most Relevant</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
              </div>
            </div>
          </aside>

          {/* ================= MAIN CONTENT ================= */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Header Title & Badges */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  Class {selectedClassGroup.replace("-", " to ")} Mentors
                </h1>
                <p className="text-xs text-slate-500 mt-1 max-w-xl">
                  Connect with verified and experienced mentors from Good Guiders
                  who can guide, motivate and help you reach your full potential.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2.5 bg-emerald-50/70 border border-emerald-100 px-3.5 py-2 rounded-xl">
                  <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-800">
                      100% Confidential
                    </div>
                    <div className="text-[9px] text-slate-500">
                      Safe & Secure Platform
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 bg-emerald-50/70 border border-emerald-100 px-3.5 py-2 rounded-xl">
                  <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-800">
                      Verified Mentors
                    </div>
                    <div className="text-[9px] text-slate-500">
                      Trusted by Students
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Feature Banner Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    Verified Mentors
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                    All mentors are verified and background checked
                  </p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    Expert Guidance
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                    Learn from experienced & skilled mentors
                  </p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-rose-50 text-rose-500">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    Personalized Support
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                    Get one-on-one guidance tailored to you
                  </p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-500">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    Flexible & Convenient
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                    Choose time, duration & mode that suits you
                  </p>
                </div>
              </div>
            </div>

            {/* Search, Filter Bar & Count */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Search by name, expertise or keyword..."
                    className="w-full bg-white border border-slate-200 text-xs rounded-xl pl-4 pr-10 py-2.5 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-400 shadow-xs"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 whitespace-nowrap">
                      Sort By:
                    </span>
                    <div className="relative">
                      <select
                        value={selectedSort}
                        onChange={(e) => setSelectedSort(e.target.value)}
                        className="appearance-none bg-white border border-slate-200 text-xs font-medium rounded-xl pl-3 pr-8 py-2 text-slate-700 focus:outline-none shadow-xs"
                      >
                        <option>Most Relevant</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Highest Rated</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-xs text-slate-500 mr-1">View:</span>
                    <button
                      onClick={() => setActiveTab("grid")}
                      className={`p-1.5 rounded-lg border text-slate-600 transition-colors ${
                        activeTab === "grid"
                          ? "bg-slate-100 border-slate-300"
                          : "bg-white border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveTab("list")}
                      className={`p-1.5 rounded-lg border text-slate-600 transition-colors ${
                        activeTab === "list"
                          ? "bg-slate-100 border-slate-300"
                          : "bg-white border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-xs font-bold text-slate-900">
                48 Mentors{" "}
                <span className="font-normal text-slate-500">
                  Found for {currentClasses.join(", ")}
                </span>
              </div>
            </div>

            {/* Mentor Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {mentorsData.map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-shadow p-3.5 flex flex-col justify-between relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        Available
                      </span>
                      <button
                        onClick={() => toggleFavorite(mentor.id)}
                        className="text-slate-300 hover:text-rose-500 transition-colors"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            favorites[mentor.id]
                              ? "fill-rose-500 text-rose-500"
                              : ""
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex gap-3">
                      <img
                        src={mentor.avatar}
                        alt={mentor.name}
                        className="w-14 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <h3 className="font-bold text-xs text-slate-900 truncate">
                            {mentor.name}
                          </h3>
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 fill-indigo-100 shrink-0" />
                        </div>
                        <p className="text-[10px] text-slate-500 mt-0.5 leading-snug line-clamp-2">
                          {mentor.role}
                        </p>
                        <p className="text-[9px] text-slate-400 mt-1 flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" />
                          {mentor.experience}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3.5">
                      {mentor.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-medium bg-indigo-50/70 text-indigo-700 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {mentor.moreTagsCount && (
                        <span className="text-[9px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                          +{mentor.moreTagsCount} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-50 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="font-bold text-[11px] text-slate-800">
                          {mentor.rating}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          ({mentor.reviewsCount})
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-xs text-slate-900">
                          ₹{mentor.price}
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          {" "}
                          / session
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedMentor(mentor)}
                        className="w-full text-center py-1.5 text-[10px] font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                      >
                        View Profile
                      </button>
                      <button className="w-full text-center py-1.5 text-[10px] font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors">
                        Book a Session
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1.5 pt-4">
              <button className="w-7 h-7 rounded-lg bg-indigo-950 text-white flex items-center justify-center text-xs font-semibold">
                1
              </button>
              <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-100 flex items-center justify-center text-xs transition-colors">
                2
              </button>
              <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-100 flex items-center justify-center text-xs transition-colors">
                3
              </button>
              <span className="text-xs text-slate-400 px-1">...</span>
              <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-100 flex items-center justify-center text-xs transition-colors">
                6
              </button>
              <button className="w-7 h-7 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 flex items-center justify-center transition-colors">
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom Recommendation Card */}
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0">
                  <UserCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Not sure whom to choose?
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Take our quick quiz and we'll help you find the perfect mentor
                    for your goals.
                  </p>
                </div>
              </div>
              <button className="px-6 py-2.5 border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-600 hover:text-white rounded-xl text-xs font-bold transition-all whitespace-nowrap">
                Find My Mentor
              </button>
            </div>

            {/* Bottom Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-4 border-t border-slate-200 text-slate-600">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <ShieldCheck className="w-4 h-4 text-slate-700" />
                <span className="text-[11px] font-semibold text-slate-700">
                  100% Confidential
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <UserCheck className="w-4 h-4 text-slate-700" />
                <span className="text-[11px] font-semibold text-slate-700">
                  Verified & Trusted Mentors
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Lock className="w-4 h-4 text-slate-700" />
                <span className="text-[11px] font-semibold text-slate-700">
                  Safe & Secure Platform
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Calendar className="w-4 h-4 text-slate-700" />
                <span className="text-[11px] font-semibold text-slate-700">
                  Flexible Sessions
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start col-span-2 sm:col-span-1">
                <Headphones className="w-4 h-4 text-slate-700" />
                <span className="text-[11px] font-semibold text-slate-700">
                  Support When You Need
                </span>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}