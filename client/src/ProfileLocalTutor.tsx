// // // // // import React, { useState } from "react";
// // // // // import {
// // // // //   CheckCircle2,
// // // // //   Star,
// // // // //   User,
// // // // //   MapPin,
// // // // //   Landmark,
// // // // //   GraduationCap,
// // // // //   BookOpen,
// // // // //   Languages,
// // // // //   MessageCircle,
// // // // //   Calendar,
// // // // //   Heart,
// // // // //   Briefcase,
// // // // //   CalendarCheck,
// // // // //   ChevronDown,
// // // // // } from "lucide-react";

// // // // // interface Review {
// // // // //   id: string;
// // // // //   name: string;
// // // // //   grade: string;
// // // // //   board: string;
// // // // //   timeAgo: string;
// // // // //   rating: number;
// // // // //   comment: string;
// // // // //   avatarBg: string;
// // // // //   avatarColor: string;
// // // // // }

// // // // // const reviewsData: Review[] = [
// // // // //   {
// // // // //     id: "1",
// // // // //     name: "Rohit Verma",
// // // // //     grade: "Class 12",
// // // // //     board: "CBSE",
// // // // //     timeAgo: "2 days ago",
// // // // //     rating: 5,
// // // // //     comment:
// // // // //       "Sir explains concepts in a very clear and simple way. His problem solving techniques really helped me improve my marks in Physics.",
// // // // //     avatarBg: "bg-purple-100",
// // // // //     avatarColor: "text-purple-600",
// // // // //   },
// // // // //   {
// // // // //     id: "2",
// // // // //     name: "Ananya Sharma",
// // // // //     grade: "Class 11",
// // // // //     board: "RBSE",
// // // // //     timeAgo: "1 week ago",
// // // // //     rating: 5,
// // // // //     comment:
// // // // //       "Very knowledgeable and patient teacher. Doubt sessions are extremely helpful. Highly recommended!",
// // // // //     avatarBg: "bg-emerald-100",
// // // // //     avatarColor: "text-emerald-600",
// // // // //   },
// // // // //   {
// // // // //     id: "3",
// // // // //     name: "Kartik Mehta",
// // // // //     grade: "Class 12",
// // // // //     board: "CBSE",
// // // // //     timeAgo: "3 weeks ago",
// // // // //     rating: 5,
// // // // //     comment:
// // // // //       "Great teaching style and regular tests help a lot in preparation. Boosted my confidence in Board exams.",
// // // // //     avatarBg: "bg-blue-100",
// // // // //     avatarColor: "text-blue-600",
// // // // //   },
// // // // // ];

// // // // // const ratingBreakdown = [
// // // // //   { stars: 5, label: "5 Stars", count: 110, percentage: 86 },
// // // // //   { stars: 4, label: "4 Stars", count: 14, percentage: 11 },
// // // // //   { stars: 3, label: "3 Stars", count: 3, percentage: 2.5 },
// // // // //   { stars: 2, label: "2 Stars", count: 1, percentage: 1 },
// // // // //   { stars: 1, label: "1 Star", count: 0, percentage: 0 },
// // // // // ];

// // // // // export default function TutorProfilePage() {
// // // // //   const [activeTab, setActiveTab] = useState("reviews");
// // // // //   const [filterRating, setFilterRating] = useState("All Ratings");
// // // // //   const [sortBy, setSortBy] = useState("Newest First");
// // // // //   const [selectedSlot, setSelectedSlot] = useState("05:00 PM – 06:00 PM");

// // // // //   return (
// // // // //     <div className="min-h-screen bg-[#f8fafc] text-gray-800 antialiased p-4 md:p-8">
// // // // //       <div className="max-w-6xl mx-auto space-y-6">

// // // // //         {/* TOP PROFILE CARD */}
// // // // //         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
// // // // //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
// // // // //             {/* Left: Avatar & Personal Info */}
// // // // //             <div className="lg:col-span-4 flex gap-4">
// // // // //               <img
// // // // //                 src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
// // // // //                 alt="Amit Sharma"
// // // // //                 className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover shadow-inner flex-shrink-0"
// // // // //               />
// // // // //               <div className="space-y-1.5">
// // // // //                 <div className="flex items-center gap-1.5">
// // // // //                   <h1 className="text-xl font-bold text-gray-900">Amit Sharma</h1>
// // // // //                   <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-600 text-white" />
// // // // //                 </div>
// // // // //                 <p className="text-xs text-gray-600 font-medium">M.Sc. Physics, IIT Delhi</p>

// // // // //                 <div className="flex items-center gap-1 text-xs text-gray-600 pt-0.5">
// // // // //                   <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
// // // // //                   <span className="font-semibold text-gray-900">4.9</span>
// // // // //                   <span className="text-gray-500">(128 Reviews)</span>
// // // // //                 </div>

// // // // //                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
// // // // //                   <User className="w-3.5 h-3.5 text-gray-400" />
// // // // //                   <span>8+ Years Experience</span>
// // // // //                 </div>

// // // // //                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
// // // // //                   <MapPin className="w-3.5 h-3.5 text-gray-400" />
// // // // //                   <span>Jaipur, Rajasthan</span>
// // // // //                 </div>

// // // // //                 {/* Tags */}
// // // // //                 <div className="flex flex-wrap gap-1.5 pt-1">
// // // // //                   <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">Physics</span>
// // // // //                   <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">Mathematics</span>
// // // // //                   <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">Class 11 – 12</span>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Middle: Details Grid */}
// // // // //             <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs border-y lg:border-y-0 lg:border-x border-gray-100 py-4 lg:py-0 lg:px-6">
// // // // //               {/* Board */}
// // // // //               <div className="space-y-1.5">
// // // // //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// // // // //                   <Landmark className="w-4 h-4 text-blue-600" />
// // // // //                   <span>Board</span>
// // // // //                 </div>
// // // // //                 <div className="flex flex-wrap gap-1">
// // // // //                   {["CBSE", "RBSE", "ICSE", "NIOS", "State Board"].map((board) => (
// // // // //                     <span key={board} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// // // // //                       {board}
// // // // //                     </span>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Class */}
// // // // //               <div className="space-y-1.5">
// // // // //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// // // // //                   <GraduationCap className="w-4 h-4 text-blue-600" />
// // // // //                   <span>Class</span>
// // // // //                 </div>
// // // // //                 <div className="flex flex-wrap gap-1">
// // // // //                   {["Class 11", "Class 12"].map((cls) => (
// // // // //                     <span key={cls} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// // // // //                       {cls}
// // // // //                     </span>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Subjects */}
// // // // //               <div className="space-y-1.5">
// // // // //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// // // // //                   <BookOpen className="w-4 h-4 text-blue-600" />
// // // // //                   <span>Subjects</span>
// // // // //                 </div>
// // // // //                 <div className="flex flex-wrap gap-1">
// // // // //                   {["Physics", "Mathematics"].map((sub) => (
// // // // //                     <span key={sub} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// // // // //                       {sub}
// // // // //                     </span>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Languages Known */}
// // // // //               <div className="space-y-1.5">
// // // // //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// // // // //                   <Languages className="w-4 h-4 text-blue-600" />
// // // // //                   <span>Languages Known</span>
// // // // //                 </div>
// // // // //                 <div className="flex flex-wrap gap-1">
// // // // //                   {["English", "Hindi"].map((lang) => (
// // // // //                     <span key={lang} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// // // // //                       {lang}
// // // // //                     </span>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Right: Pricing & Action Buttons */}
// // // // //             <div className="lg:col-span-3 flex flex-col items-center justify-center space-y-3 w-full">
// // // // //               <div className="text-center">
// // // // //                 <div className="text-2xl font-bold text-emerald-600">
// // // // //                   ₹4,500 <span className="text-xs font-normal text-gray-500">/ month</span>
// // // // //                 </div>
// // // // //                 <p className="text-[11px] text-gray-400 font-medium">(Negotiable)</p>
// // // // //               </div>

// // // // //               <button className="w-full py-2.5 px-4 bg-[#ff4a22] hover:bg-[#e63e18] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition">
// // // // //                 <MessageCircle className="w-4 h-4 fill-white" />
// // // // //                 <span>Contact Tutor</span>
// // // // //               </button>

// // // // //               <button className="w-full py-2.5 px-4 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition">
// // // // //                 <Calendar className="w-4 h-4" />
// // // // //                 <span>Book a Free Demo</span>
// // // // //               </button>

// // // // //               <button className="text-xs font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1.5 pt-1 transition">
// // // // //                 <Heart className="w-4 h-4" />
// // // // //                 <span>Save Tutor</span>
// // // // //               </button>
// // // // //             </div>

// // // // //           </div>
// // // // //         </div>

// // // // //         {/* TABS HEADER */}
// // // // //         <div className="flex items-center gap-8 border-b border-gray-200 text-sm font-medium px-2">
// // // // //           <button
// // // // //             onClick={() => setActiveTab("about")}
// // // // //             className={`pb-3 flex items-center gap-2 transition ${
// // // // //               activeTab === "about"
// // // // //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// // // // //                 : "text-gray-500 hover:text-gray-700"
// // // // //             }`}
// // // // //           >
// // // // //             <User className="w-4 h-4" /> About Me
// // // // //           </button>
// // // // //           <button
// // // // //             onClick={() => setActiveTab("experience")}
// // // // //             className={`pb-3 flex items-center gap-2 transition ${
// // // // //               activeTab === "experience"
// // // // //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// // // // //                 : "text-gray-500 hover:text-gray-700"
// // // // //             }`}
// // // // //           >
// // // // //             <Briefcase className="w-4 h-4" /> Experience
// // // // //           </button>
// // // // //           <button
// // // // //             onClick={() => setActiveTab("reviews")}
// // // // //             className={`pb-3 flex items-center gap-2 transition ${
// // // // //               activeTab === "reviews"
// // // // //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// // // // //                 : "text-gray-500 hover:text-gray-700"
// // // // //             }`}
// // // // //           >
// // // // //             <Star className="w-4 h-4" /> Reviews (128)
// // // // //           </button>
// // // // //           <button
// // // // //             onClick={() => setActiveTab("availability")}
// // // // //             className={`pb-3 flex items-center gap-2 transition ${
// // // // //               activeTab === "availability"
// // // // //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// // // // //                 : "text-gray-500 hover:text-gray-700"
// // // // //             }`}
// // // // //           >
// // // // //             <CalendarCheck className="w-4 h-4" /> Availability
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* MAIN BODY: REVIEWS & BOOK DEMO SIDEBAR */}
// // // // //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
// // // // //           {/* Left: Rating Breakdown & List */}
// // // // //           <div className="lg:col-span-8 space-y-6">
            
// // // // //             {/* Aggregate Rating Card */}
// // // // //             <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
// // // // //               <div className="sm:col-span-4 text-center sm:border-r border-gray-100 sm:pr-4">
// // // // //                 <p className="text-xs font-semibold text-gray-600">Overall Rating</p>
// // // // //                 <p className="text-4xl font-extrabold text-gray-900 mt-1">4.9</p>
// // // // //                 <div className="flex justify-center gap-1 my-1.5">
// // // // //                   {[...Array(5)].map((_, i) => (
// // // // //                     <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
// // // // //                   ))}
// // // // //                 </div>
// // // // //                 <p className="text-xs text-gray-400">(128 Reviews)</p>
// // // // //               </div>

// // // // //               {/* Progress Bars */}
// // // // //               <div className="sm:col-span-8 space-y-1.5 text-xs">
// // // // //                 {ratingBreakdown.map((row) => (
// // // // //                   <div key={row.stars} className="flex items-center gap-3">
// // // // //                     <span className="w-12 text-gray-600">{row.label}</span>
// // // // //                     <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
// // // // //                       <div
// // // // //                         className="bg-amber-400 h-full rounded-full transition-all duration-500"
// // // // //                         style={{ width: `${row.percentage}%` }}
// // // // //                       />
// // // // //                     </div>
// // // // //                     <span className="w-6 text-right text-gray-500 font-medium">
// // // // //                       {row.count}
// // // // //                     </span>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Filter & Sort Bar */}
// // // // //             <div className="flex flex-wrap items-center justify-between gap-4 py-1 text-xs">
// // // // //               <div className="flex items-center gap-2">
// // // // //                 <span className="text-gray-500 font-medium">Filter by</span>
// // // // //                 <div className="relative">
// // // // //                   <select
// // // // //                     value={filterRating}
// // // // //                     onChange={(e) => setFilterRating(e.target.value)}
// // // // //                     className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none"
// // // // //                   >
// // // // //                     <option>All Ratings</option>
// // // // //                     <option>5 Stars</option>
// // // // //                     <option>4 Stars</option>
// // // // //                   </select>
// // // // //                   <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="flex items-center gap-2">
// // // // //                 <span className="text-gray-500 font-medium">Sort by</span>
// // // // //                 <div className="relative">
// // // // //                   <select
// // // // //                     value={sortBy}
// // // // //                     onChange={(e) => setSortBy(e.target.value)}
// // // // //                     className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none"
// // // // //                   >
// // // // //                     <option>Newest First</option>
// // // // //                     <option>Oldest First</option>
// // // // //                   </select>
// // // // //                   <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Individual Reviews */}
// // // // //             <div className="space-y-4">
// // // // //               {reviewsData.map((item) => (
// // // // //                 <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
// // // // //                   <div className="flex items-start justify-between">
// // // // //                     <div className="flex items-center gap-3">
// // // // //                       <div
// // // // //                         className={`w-9 h-9 rounded-full ${item.avatarBg} ${item.avatarColor} font-bold flex items-center justify-center text-sm`}
// // // // //                       >
// // // // //                         {item.name.charAt(0)}
// // // // //                       </div>
// // // // //                       <div>
// // // // //                         <h4 className="text-xs font-bold text-gray-900 leading-tight">
// // // // //                           {item.name}
// // // // //                         </h4>
// // // // //                         <p className="text-[11px] text-gray-400">
// // // // //                           {item.grade} • {item.board}
// // // // //                         </p>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                     <span className="text-[11px] text-gray-400">{item.timeAgo}</span>
// // // // //                   </div>

// // // // //                   <div className="flex gap-0.5 my-2">
// // // // //                     {[...Array(item.rating)].map((_, i) => (
// // // // //                       <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
// // // // //                     ))}
// // // // //                   </div>

// // // // //                   <p className="text-xs text-gray-600 leading-relaxed">
// // // // //                     {item.comment}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* View More Button */}
// // // // //             <div className="text-center pt-2">
// // // // //               <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-50 transition">
// // // // //                 View More Reviews
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Right Sidebar: Free Demo Booking */}
// // // // //           <div className="lg:col-span-4 sticky top-6">
// // // // //             <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
// // // // //               <div className="flex items-center gap-2">
// // // // //                 <Calendar className="w-5 h-5 text-blue-600" />
// // // // //                 <h3 className="font-bold text-gray-900 text-sm">Book a Free Demo Class</h3>
// // // // //               </div>

// // // // //               <p className="text-xs text-gray-500 leading-relaxed">
// // // // //                 Book a free demo class and experience the teaching style.
// // // // //               </p>

// // // // //               <div className="space-y-3 pt-2">
// // // // //                 {/* Date Input */}
// // // // //                 <div className="relative">
// // // // //                   <input
// // // // //                     type="text"
// // // // //                     defaultValue="24 May 2025"
// // // // //                     readOnly
// // // // //                     className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-800 font-medium focus:outline-none cursor-pointer"
// // // // //                   />
// // // // //                   <Calendar className="w-4 h-4 text-blue-600 absolute right-3 top-3 pointer-events-none" />
// // // // //                 </div>

// // // // //                 {/* Time Slot Dropdown */}
// // // // //                 <div className="relative">
// // // // //                   <select
// // // // //                     value={selectedSlot}
// // // // //                     onChange={(e) => setSelectedSlot(e.target.value)}
// // // // //                     className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-800 font-medium focus:outline-none cursor-pointer"
// // // // //                   >
// // // // //                     <option>05:00 PM – 06:00 PM</option>
// // // // //                     <option>06:00 PM – 07:00 PM</option>
// // // // //                     <option>07:00 PM – 08:00 PM</option>
// // // // //                   </select>
// // // // //                   <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
// // // // //                 </div>

// // // // //                 {/* CTA Button */}
// // // // //                 <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-lg transition shadow-sm shadow-blue-200">
// // // // //                   Book Now
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //         </div>

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import React, { useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import {
// // // //   CheckCircle2,
// // // //   Star,
// // // //   User,
// // // //   MapPin,
// // // //   Landmark,
// // // //   GraduationCap,
// // // //   BookOpen,
// // // //   Languages,
// // // //   MessageCircle,
// // // //   Calendar,
// // // //   Heart,
// // // //   Briefcase,
// // // //   CalendarCheck,
// // // //   ChevronDown,
// // // //   ArrowLeft
// // // // } from "lucide-react";

// // // // interface Tutor {
// // // //   id: number;
// // // //   name: string;
// // // //   image: string;
// // // //   degree: string;
// // // //   experience: string;
// // // //   classes: string[];
// // // //   subjects: string[];
// // // //   boards: string[];
// // // //   languages: string[];
// // // //   location: string;
// // // //   rating: number;
// // // //   reviewsCount: number;
// // // //   price: string;
// // // //   about?: string;
// // // // }

// // // // const tutorsDatabase: Record<string, Tutor> = {
// // // //   "1": {
// // // //     id: 1,
// // // //     name: "Amit Sharma",
// // // //     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
// // // //     degree: "M.Sc. Physics, IIT Delhi",
// // // //     experience: "8+ Years Experience",
// // // //     classes: ["Class 11", "Class 12"],
// // // //     subjects: ["Physics", "Mathematics"],
// // // //     boards: ["CBSE", "RBSE", "ICSE", "NIOS", "State Board"],
// // // //     languages: ["English", "Hindi"],
// // // //     location: "Jaipur, Rajasthan",
// // // //     rating: 4.9,
// // // //     reviewsCount: 128,
// // // //     price: "₹4,500 / month",
// // // //     about: "Dedicated physics educator with an M.Sc. from IIT Delhi. Focused on conceptual clarity, competitive problem-solving strategies, and structured regular assessments."
// // // //   },
// // // //   "2": {
// // // //     id: 2,
// // // //     name: "Pooja Yadav",
// // // //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
// // // //     degree: "M.Sc. Mathematics",
// // // //     experience: "4+ Years Experience",
// // // //     classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// // // //     subjects: ["Mathematics"],
// // // //     boards: ["CBSE", "ICSE"],
// // // //     languages: ["English", "Hindi"],
// // // //     location: "Jaipur, Rajasthan",
// // // //     rating: 4.6,
// // // //     reviewsCount: 52,
// // // //     price: "₹5,000 / month",
// // // //     about: "Passionate mathematics mentor specializing in building foundational algebra, geometry, and calculus skills with customized doubt-clearing sessions."
// // // //   },
// // // //   "3": {
// // // //     id: 3,
// // // //     name: "Rohit Verma",
// // // //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
// // // //     degree: "M.Sc. Mathematics",
// // // //     experience: "7+ Years Experience",
// // // //     classes: ["Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// // // //     subjects: ["Mathematics", "Physics"],
// // // //     boards: ["CBSE", "ICSE"],
// // // //     languages: ["English", "Hindi"],
// // // //     location: "Jaipur, Rajasthan",
// // // //     rating: 4.7,
// // // //     reviewsCount: 80,
// // // //     price: "₹6,000 / month",
// // // //     about: "Experienced instructor for secondary and senior secondary students with strong focus on board preparation, speed mathematics, and physical concepts."
// // // //   },
// // // //   "4": {
// // // //     id: 4,
// // // //     name: "Neha Gupta",
// // // //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
// // // //     degree: "B.Tech, NIT Warangal",
// // // //     experience: "6+ Years Experience",
// // // //     classes: ["Class 6", "Class 8", "Class 10", "Class 12"],
// // // //     subjects: ["Mathematics"],
// // // //     boards: ["CBSE", "State Board"],
// // // //     languages: ["English", "Hindi"],
// // // //     location: "Jaipur, Rajasthan",
// // // //     rating: 4.8,
// // // //     reviewsCount: 96,
// // // //     price: "₹6,500 / month",
// // // //     about: "Engineering graduate providing structured mathematics coaching designed to tackle school syllabus alongside Olympiad-level problems."
// // // //   },
// // // //   "5": {
// // // //     id: 5,
// // // //     name: "Saurabh Singh",
// // // //     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
// // // //     degree: "B.Tech, IIT Roorkee",
// // // //     experience: "5+ Years Experience",
// // // //     classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// // // //     subjects: ["Physics"],
// // // //     boards: ["CBSE", "ICSE"],
// // // //     languages: ["English", "Hindi"],
// // // //     location: "Jaipur, Rajasthan",
// // // //     rating: 4.9,
// // // //     reviewsCount: 64,
// // // //     price: "₹7,000 / month",
// // // //     about: "IIT Roorkee alumnus specializing in physics mechanics, electrodynamics, and modern physics with emphasis on numerical problem solving."
// // // //   },
// // // //   "6": {
// // // //     id: 6,
// // // //     name: "Ankit Kumar",
// // // //     image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
// // // //     degree: "M.Sc. Physics",
// // // //     experience: "6+ Years Experience",
// // // //     classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// // // //     subjects: ["Physics", "Mathematics"],
// // // //     boards: ["CBSE", "State Board"],
// // // //     languages: ["English", "Hindi"],
// // // //     location: "Jaipur, Rajasthan",
// // // //     rating: 4.6,
// // // //     reviewsCount: 58,
// // // //     price: "₹7,500 / month",
// // // //     about: "Practical and interactive teaching approach tailored for students aiming to score top percentile in boards and school examinations."
// // // //   }
// // // // };

// // // // interface Review {
// // // //   id: string;
// // // //   name: string;
// // // //   grade: string;
// // // //   board: string;
// // // //   timeAgo: string;
// // // //   rating: number;
// // // //   comment: string;
// // // //   avatarBg: string;
// // // //   avatarColor: string;
// // // // }

// // // // const reviewsData: Review[] = [
// // // //   {
// // // //     id: "1",
// // // //     name: "Rohit Verma",
// // // //     grade: "Class 12",
// // // //     board: "CBSE",
// // // //     timeAgo: "2 days ago",
// // // //     rating: 5,
// // // //     comment:
// // // //       "Sir explains concepts in a very clear and simple way. His problem solving techniques really helped me improve my marks in Physics.",
// // // //     avatarBg: "bg-purple-100",
// // // //     avatarColor: "text-purple-600",
// // // //   },
// // // //   {
// // // //     id: "2",
// // // //     name: "Ananya Sharma",
// // // //     grade: "Class 11",
// // // //     board: "RBSE",
// // // //     timeAgo: "1 week ago",
// // // //     rating: 5,
// // // //     comment:
// // // //       "Very knowledgeable and patient teacher. Doubt sessions are extremely helpful. Highly recommended!",
// // // //     avatarBg: "bg-emerald-100",
// // // //     avatarColor: "text-emerald-600",
// // // //   },
// // // //   {
// // // //     id: "3",
// // // //     name: "Kartik Mehta",
// // // //     grade: "Class 12",
// // // //     board: "CBSE",
// // // //     timeAgo: "3 weeks ago",
// // // //     rating: 5,
// // // //     comment:
// // // //       "Great teaching style and regular tests help a lot in preparation. Boosted my confidence in Board exams.",
// // // //     avatarBg: "bg-blue-100",
// // // //     avatarColor: "text-blue-600",
// // // //   },
// // // // ];

// // // // const ratingBreakdown = [
// // // //   { stars: 5, label: "5 Stars", count: 110, percentage: 86 },
// // // //   { stars: 4, label: "4 Stars", count: 14, percentage: 11 },
// // // //   { stars: 3, label: "3 Stars", count: 3, percentage: 2.5 },
// // // //   { stars: 2, label: "2 Stars", count: 1, percentage: 1 },
// // // //   { stars: 1, label: "1 Star", count: 0, percentage: 0 },
// // // // ];

// // // // export default function ProfileLocalTutor() {
// // // //   const { id } = useParams<{ id: string }>();
// // // //   const navigate = useNavigate();

// // // //   const tutorId = id || "1";
// // // //   const tutor = tutorsDatabase[tutorId] || tutorsDatabase["1"];

// // // //   const [activeTab, setActiveTab] = useState("reviews");
// // // //   const [filterRating, setFilterRating] = useState("All Ratings");
// // // //   const [sortBy, setSortBy] = useState("Newest First");
// // // //   const [selectedSlot, setSelectedSlot] = useState("05:00 PM – 06:00 PM");

// // // //   return (
// // // //     <div className="min-h-screen bg-[#f8fafc] text-gray-800 antialiased p-4 md:p-8">
// // // //       <div className="max-w-6xl mx-auto space-y-6">

// // // //         {/* Back Button */}
// // // //         <button
// // // //           onClick={() => navigate(-1)}
// // // //           className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm transition"
// // // //         >
// // // //           <ArrowLeft className="w-3.5 h-3.5" />
// // // //           <span>Back to Tutors</span>
// // // //         </button>

// // // //         {/* TOP PROFILE CARD */}
// // // //         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
// // // //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
// // // //             {/* Left: Avatar & Personal Info */}
// // // //             <div className="lg:col-span-4 flex gap-4">
// // // //               <img
// // // //                 src={tutor.image}
// // // //                 alt={tutor.name}
// // // //                 className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover shadow-inner flex-shrink-0"
// // // //               />
// // // //               <div className="space-y-1.5">
// // // //                 <div className="flex items-center gap-1.5">
// // // //                   <h1 className="text-xl font-bold text-gray-900">{tutor.name}</h1>
// // // //                   <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-600 text-white" />
// // // //                 </div>
// // // //                 <p className="text-xs text-gray-600 font-medium">{tutor.degree}</p>

// // // //                 <div className="flex items-center gap-1 text-xs text-gray-600 pt-0.5">
// // // //                   <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
// // // //                   <span className="font-semibold text-gray-900">{tutor.rating}</span>
// // // //                   <span className="text-gray-500">({tutor.reviewsCount} Reviews)</span>
// // // //                 </div>

// // // //                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
// // // //                   <User className="w-3.5 h-3.5 text-gray-400" />
// // // //                   <span>{tutor.experience}</span>
// // // //                 </div>

// // // //                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
// // // //                   <MapPin className="w-3.5 h-3.5 text-gray-400" />
// // // //                   <span>{tutor.location}</span>
// // // //                 </div>

// // // //                 {/* Quick Subject Tags */}
// // // //                 <div className="flex flex-wrap gap-1.5 pt-1">
// // // //                   {tutor.subjects.map((sub) => (
// // // //                     <span key={sub} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
// // // //                       {sub}
// // // //                     </span>
// // // //                   ))}
// // // //                   <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
// // // //                     {tutor.classes.slice(0, 2).join(" – ")}
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Middle: Details Grid */}
// // // //             <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs border-y lg:border-y-0 lg:border-x border-gray-100 py-4 lg:py-0 lg:px-6">
// // // //               {/* Board */}
// // // //               <div className="space-y-1.5">
// // // //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// // // //                   <Landmark className="w-4 h-4 text-blue-600" />
// // // //                   <span>Board</span>
// // // //                 </div>
// // // //                 <div className="flex flex-wrap gap-1">
// // // //                   {tutor.boards.map((board) => (
// // // //                     <span key={board} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// // // //                       {board}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //               {/* Class */}
// // // //               <div className="space-y-1.5">
// // // //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// // // //                   <GraduationCap className="w-4 h-4 text-blue-600" />
// // // //                   <span>Class</span>
// // // //                 </div>
// // // //                 <div className="flex flex-wrap gap-1">
// // // //                   {tutor.classes.map((cls) => (
// // // //                     <span key={cls} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// // // //                       {cls}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //               {/* Subjects */}
// // // //               <div className="space-y-1.5">
// // // //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// // // //                   <BookOpen className="w-4 h-4 text-blue-600" />
// // // //                   <span>Subjects</span>
// // // //                 </div>
// // // //                 <div className="flex flex-wrap gap-1">
// // // //                   {tutor.subjects.map((sub) => (
// // // //                     <span key={sub} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// // // //                       {sub}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //               {/* Languages Known */}
// // // //               <div className="space-y-1.5">
// // // //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// // // //                   <Languages className="w-4 h-4 text-blue-600" />
// // // //                   <span>Languages Known</span>
// // // //                 </div>
// // // //                 <div className="flex flex-wrap gap-1">
// // // //                   {tutor.languages.map((lang) => (
// // // //                     <span key={lang} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// // // //                       {lang}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Right: Pricing & Action Buttons */}
// // // //             <div className="lg:col-span-3 flex flex-col items-center justify-center space-y-3 w-full">
// // // //               <div className="text-center">
// // // //                 <div className="text-2xl font-bold text-emerald-600">
// // // //                   {tutor.price.split("/")[0]} <span className="text-xs font-normal text-gray-500">/ month</span>
// // // //                 </div>
// // // //                 <p className="text-[11px] text-gray-400 font-medium">(Negotiable)</p>
// // // //               </div>

// // // //               <button className="w-full py-2.5 px-4 bg-[#ff4a22] hover:bg-[#e63e18] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition">
// // // //                 <MessageCircle className="w-4 h-4 fill-white" />
// // // //                 <span>Contact Tutor</span>
// // // //               </button>

// // // //               <button className="w-full py-2.5 px-4 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition">
// // // //                 <Calendar className="w-4 h-4" />
// // // //                 <span>Book a Free Demo</span>
// // // //               </button>

// // // //               <button className="text-xs font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1.5 pt-1 transition">
// // // //                 <Heart className="w-4 h-4" />
// // // //                 <span>Save Tutor</span>
// // // //               </button>
// // // //             </div>

// // // //           </div>
// // // //         </div>

// // // //         {/* TABS HEADER */}
// // // //         <div className="flex items-center gap-8 border-b border-gray-200 text-sm font-medium px-2">
// // // //           <button
// // // //             onClick={() => setActiveTab("about")}
// // // //             className={`pb-3 flex items-center gap-2 transition ${
// // // //               activeTab === "about"
// // // //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// // // //                 : "text-gray-500 hover:text-gray-700"
// // // //             }`}
// // // //           >
// // // //             <User className="w-4 h-4" /> About Me
// // // //           </button>
// // // //           <button
// // // //             onClick={() => setActiveTab("experience")}
// // // //             className={`pb-3 flex items-center gap-2 transition ${
// // // //               activeTab === "experience"
// // // //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// // // //                 : "text-gray-500 hover:text-gray-700"
// // // //             }`}
// // // //           >
// // // //             <Briefcase className="w-4 h-4" /> Experience
// // // //           </button>
// // // //           <button
// // // //             onClick={() => setActiveTab("reviews")}
// // // //             className={`pb-3 flex items-center gap-2 transition ${
// // // //               activeTab === "reviews"
// // // //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// // // //                 : "text-gray-500 hover:text-gray-700"
// // // //             }`}
// // // //           >
// // // //             <Star className="w-4 h-4" /> Reviews ({tutor.reviewsCount})
// // // //           </button>
// // // //           <button
// // // //             onClick={() => setActiveTab("availability")}
// // // //             className={`pb-3 flex items-center gap-2 transition ${
// // // //               activeTab === "availability"
// // // //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// // // //                 : "text-gray-500 hover:text-gray-700"
// // // //             }`}
// // // //           >
// // // //             <CalendarCheck className="w-4 h-4" /> Availability
// // // //           </button>
// // // //         </div>

// // // //         {/* MAIN BODY */}
// // // //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
// // // //           {/* Left Content Column */}
// // // //           <div className="lg:col-span-8 space-y-6">

// // // //             {activeTab === "about" && (
// // // //               <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
// // // //                 <h3 className="font-bold text-gray-900 text-sm">About {tutor.name}</h3>
// // // //                 <p className="text-xs text-gray-600 leading-relaxed">
// // // //                   {tutor.about}
// // // //                 </p>
// // // //               </div>
// // // //             )}

// // // //             {activeTab === "experience" && (
// // // //               <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
// // // //                 <h3 className="font-bold text-gray-900 text-sm">Teaching Experience</h3>
// // // //                 <p className="text-xs text-gray-600 leading-relaxed">
// // // //                   Over {tutor.experience} of dedicated teaching mentoring students across {tutor.boards.join(", ")} syllabus.
// // // //                 </p>
// // // //               </div>
// // // //             )}

// // // //             {activeTab === "availability" && (
// // // //               <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
// // // //                 <h3 className="font-bold text-gray-900 text-sm">Available Timings</h3>
// // // //                 <p className="text-xs text-gray-600 leading-relaxed">
// // // //                   Available on Monday to Saturday for one-on-one sessions between 04:00 PM to 08:00 PM.
// // // //                 </p>
// // // //               </div>
// // // //             )}

// // // //             {activeTab === "reviews" && (
// // // //               <>
// // // //                 {/* Aggregate Rating Card */}
// // // //                 <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
// // // //                   <div className="sm:col-span-4 text-center sm:border-r border-gray-100 sm:pr-4">
// // // //                     <p className="text-xs font-semibold text-gray-600">Overall Rating</p>
// // // //                     <p className="text-4xl font-extrabold text-gray-900 mt-1">{tutor.rating}</p>
// // // //                     <div className="flex justify-center gap-1 my-1.5">
// // // //                       {[...Array(5)].map((_, i) => (
// // // //                         <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
// // // //                       ))}
// // // //                     </div>
// // // //                     <p className="text-xs text-gray-400">({tutor.reviewsCount} Reviews)</p>
// // // //                   </div>

// // // //                   {/* Progress Bars */}
// // // //                   <div className="sm:col-span-8 space-y-1.5 text-xs">
// // // //                     {ratingBreakdown.map((row) => (
// // // //                       <div key={row.stars} className="flex items-center gap-3">
// // // //                         <span className="w-12 text-gray-600">{row.label}</span>
// // // //                         <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
// // // //                           <div
// // // //                             className="bg-amber-400 h-full rounded-full transition-all duration-500"
// // // //                             style={{ width: `${row.percentage}%` }}
// // // //                           />
// // // //                         </div>
// // // //                         <span className="w-6 text-right text-gray-500 font-medium">
// // // //                           {row.count}
// // // //                         </span>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Filter & Sort Bar */}
// // // //                 <div className="flex flex-wrap items-center justify-between gap-4 py-1 text-xs">
// // // //                   <div className="flex items-center gap-2">
// // // //                     <span className="text-gray-500 font-medium">Filter by</span>
// // // //                     <div className="relative">
// // // //                       <select
// // // //                         value={filterRating}
// // // //                         onChange={(e) => setFilterRating(e.target.value)}
// // // //                         className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none"
// // // //                       >
// // // //                         <option>All Ratings</option>
// // // //                         <option>5 Stars</option>
// // // //                         <option>4 Stars</option>
// // // //                       </select>
// // // //                       <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="flex items-center gap-2">
// // // //                     <span className="text-gray-500 font-medium">Sort by</span>
// // // //                     <div className="relative">
// // // //                       <select
// // // //                         value={sortBy}
// // // //                         onChange={(e) => setSortBy(e.target.value)}
// // // //                         className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none"
// // // //                       >
// // // //                         <option>Newest First</option>
// // // //                         <option>Oldest First</option>
// // // //                       </select>
// // // //                       <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Individual Reviews */}
// // // //                 <div className="space-y-4">
// // // //                   {reviewsData.map((item) => (
// // // //                     <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
// // // //                       <div className="flex items-start justify-between">
// // // //                         <div className="flex items-center gap-3">
// // // //                           <div
// // // //                             className={`w-9 h-9 rounded-full ${item.avatarBg} ${item.avatarColor} font-bold flex items-center justify-center text-sm`}
// // // //                           >
// // // //                             {item.name.charAt(0)}
// // // //                           </div>
// // // //                           <div>
// // // //                             <h4 className="text-xs font-bold text-gray-900 leading-tight">
// // // //                               {item.name}
// // // //                             </h4>
// // // //                             <p className="text-[11px] text-gray-400">
// // // //                               {item.grade} • {item.board}
// // // //                             </p>
// // // //                           </div>
// // // //                         </div>
// // // //                         <span className="text-[11px] text-gray-400">{item.timeAgo}</span>
// // // //                       </div>

// // // //                       <div className="flex gap-0.5 my-2">
// // // //                         {[...Array(item.rating)].map((_, i) => (
// // // //                           <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
// // // //                         ))}
// // // //                       </div>

// // // //                       <p className="text-xs text-gray-600 leading-relaxed">
// // // //                         {item.comment}
// // // //                       </p>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>

// // // //                 {/* View More Button */}
// // // //                 <div className="text-center pt-2">
// // // //                   <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-50 transition">
// // // //                     View More Reviews
// // // //                   </button>
// // // //                 </div>
// // // //               </>
// // // //             )}

// // // //           </div>

// // // //           {/* Right Sidebar: Free Demo Booking */}
// // // //           <div className="lg:col-span-4 sticky top-6">
// // // //             <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
// // // //               <div className="flex items-center gap-2">
// // // //                 <Calendar className="w-5 h-5 text-blue-600" />
// // // //                 <h3 className="font-bold text-gray-900 text-sm">Book a Free Demo Class</h3>
// // // //               </div>

// // // //               <p className="text-xs text-gray-500 leading-relaxed">
// // // //                 Book a free demo class and experience {tutor.name.split(" ")[0]}'s teaching style.
// // // //               </p>

// // // //               <div className="space-y-3 pt-2">
// // // //                 {/* Date Input */}
// // // //                 <div className="relative">
// // // //                   <input
// // // //                     type="date"
// // // //                     defaultValue="2026-08-28"
// // // //                     className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-800 font-medium focus:outline-none cursor-pointer"
// // // //                   />
// // // //                 </div>

// // // //                 {/* Time Slot Dropdown */}
// // // //                 <div className="relative">
// // // //                   <select
// // // //                     value={selectedSlot}
// // // //                     onChange={(e) => setSelectedSlot(e.target.value)}
// // // //                     className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-800 font-medium focus:outline-none cursor-pointer"
// // // //                   >
// // // //                     <option>05:00 PM – 06:00 PM</option>
// // // //                     <option>06:00 PM – 07:00 PM</option>
// // // //                     <option>07:00 PM – 08:00 PM</option>
// // // //                   </select>
// // // //                   <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
// // // //                 </div>

// // // //                 {/* CTA Button */}
// // // //                 <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-lg transition shadow-sm shadow-blue-200">
// // // //                   Book Now
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }



// // // import React, { useState } from "react";
// // // import { useRoute, useLocation } from "wouter";
// // // import {
// // //   CheckCircle2,
// // //   Star,
// // //   User,
// // //   MapPin,
// // //   Landmark,
// // //   GraduationCap,
// // //   BookOpen,
// // //   Languages,
// // //   MessageCircle,
// // //   Calendar,
// // //   Heart,
// // //   Briefcase,
// // //   CalendarCheck,
// // //   ChevronDown,
// // //   ArrowLeft
// // // } from "lucide-react";

// // // interface Tutor {
// // //   id: number;
// // //   name: string;
// // //   image: string;
// // //   degree: string;
// // //   experience: string;
// // //   classes: string[];
// // //   subjects: string[];
// // //   boards: string[];
// // //   languages: string[];
// // //   location: string;
// // //   rating: number;
// // //   reviewsCount: number;
// // //   price: string;
// // //   about?: string;
// // // }

// // // const tutorsDatabase: Record<string, Tutor> = {
// // //   "1": {
// // //     id: 1,
// // //     name: "Amit Sharma",
// // //     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
// // //     degree: "M.Sc. Physics, IIT Delhi",
// // //     experience: "8+ Years Experience",
// // //     classes: ["Class 11", "Class 12"],
// // //     subjects: ["Physics", "Mathematics"],
// // //     boards: ["CBSE", "RBSE", "ICSE", "NIOS", "State Board"],
// // //     languages: ["English", "Hindi"],
// // //     location: "Jaipur, Rajasthan",
// // //     rating: 4.9,
// // //     reviewsCount: 128,
// // //     price: "₹4,500 / month",
// // //     about: "Dedicated physics educator with an M.Sc. from IIT Delhi. Focused on conceptual clarity, competitive problem-solving strategies, and structured regular assessments."
// // //   },
// // //   "2": {
// // //     id: 2,
// // //     name: "Pooja Yadav",
// // //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
// // //     degree: "M.Sc. Mathematics",
// // //     experience: "4+ Years Experience",
// // //     classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// // //     subjects: ["Mathematics"],
// // //     boards: ["CBSE", "ICSE"],
// // //     languages: ["English", "Hindi"],
// // //     location: "Jaipur, Rajasthan",
// // //     rating: 4.6,
// // //     reviewsCount: 52,
// // //     price: "₹5,000 / month",
// // //     about: "Passionate mathematics mentor specializing in building foundational algebra, geometry, and calculus skills with customized doubt-clearing sessions."
// // //   },
// // //   "3": {
// // //     id: 3,
// // //     name: "Rohit Verma",
// // //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
// // //     degree: "M.Sc. Mathematics",
// // //     experience: "7+ Years Experience",
// // //     classes: ["Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// // //     subjects: ["Mathematics", "Physics"],
// // //     boards: ["CBSE", "ICSE"],
// // //     languages: ["English", "Hindi"],
// // //     location: "Jaipur, Rajasthan",
// // //     rating: 4.7,
// // //     reviewsCount: 80,
// // //     price: "₹6,000 / month",
// // //     about: "Experienced instructor for secondary and senior secondary students with strong focus on board preparation, speed mathematics, and physical concepts."
// // //   },
// // //   "4": {
// // //     id: 4,
// // //     name: "Neha Gupta",
// // //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
// // //     degree: "B.Tech, NIT Warangal",
// // //     experience: "6+ Years Experience",
// // //     classes: ["Class 6", "Class 8", "Class 10", "Class 12"],
// // //     subjects: ["Mathematics"],
// // //     boards: ["CBSE", "State Board"],
// // //     languages: ["English", "Hindi"],
// // //     location: "Jaipur, Rajasthan",
// // //     rating: 4.8,
// // //     reviewsCount: 96,
// // //     price: "₹6,500 / month",
// // //     about: "Engineering graduate providing structured mathematics coaching designed to tackle school syllabus alongside Olympiad-level problems."
// // //   },
// // //   "5": {
// // //     id: 5,
// // //     name: "Saurabh Singh",
// // //     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
// // //     degree: "B.Tech, IIT Roorkee",
// // //     experience: "5+ Years Experience",
// // //     classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// // //     subjects: ["Physics"],
// // //     boards: ["CBSE", "ICSE"],
// // //     languages: ["English", "Hindi"],
// // //     location: "Jaipur, Rajasthan",
// // //     rating: 4.9,
// // //     reviewsCount: 64,
// // //     price: "₹7,000 / month",
// // //     about: "IIT Roorkee alumnus specializing in physics mechanics, electrodynamics, and modern physics with emphasis on numerical problem solving."
// // //   },
// // //   "6": {
// // //     id: 6,
// // //     name: "Ankit Kumar",
// // //     image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
// // //     degree: "M.Sc. Physics",
// // //     experience: "6+ Years Experience",
// // //     classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// // //     subjects: ["Physics", "Mathematics"],
// // //     boards: ["CBSE", "State Board"],
// // //     languages: ["English", "Hindi"],
// // //     location: "Jaipur, Rajasthan",
// // //     rating: 4.6,
// // //     reviewsCount: 58,
// // //     price: "₹7,500 / month",
// // //     about: "Practical and interactive teaching approach tailored for students aiming to score top percentile in boards and school examinations."
// // //   }
// // // };

// // // const reviewsData = [
// // //   {
// // //     id: "1",
// // //     name: "Rohit Verma",
// // //     grade: "Class 12",
// // //     board: "CBSE",
// // //     timeAgo: "2 days ago",
// // //     rating: 5,
// // //     comment: "Sir explains concepts in a very clear and simple way. His problem solving techniques really helped me improve my marks in Physics.",
// // //     avatarBg: "bg-purple-100",
// // //     avatarColor: "text-purple-600",
// // //   },
// // //   {
// // //     id: "2",
// // //     name: "Ananya Sharma",
// // //     grade: "Class 11",
// // //     board: "RBSE",
// // //     timeAgo: "1 week ago",
// // //     rating: 5,
// // //     comment: "Very knowledgeable and patient teacher. Doubt sessions are extremely helpful. Highly recommended!",
// // //     avatarBg: "bg-emerald-100",
// // //     avatarColor: "text-emerald-600",
// // //   },
// // //   {
// // //     id: "3",
// // //     name: "Kartik Mehta",
// // //     grade: "Class 12",
// // //     board: "CBSE",
// // //     timeAgo: "3 weeks ago",
// // //     rating: 5,
// // //     comment: "Great teaching style and regular tests help a lot in preparation. Boosted my confidence in Board exams.",
// // //     avatarBg: "bg-blue-100",
// // //     avatarColor: "text-blue-600",
// // //   },
// // // ];

// // // const ratingBreakdown = [
// // //   { stars: 5, label: "5 Stars", count: 110, percentage: 86 },
// // //   { stars: 4, label: "4 Stars", count: 14, percentage: 11 },
// // //   { stars: 3, label: "3 Stars", count: 3, percentage: 2.5 },
// // //   { stars: 2, label: "2 Stars", count: 1, percentage: 1 },
// // //   { stars: 1, label: "1 Star", count: 0, percentage: 0 },
// // // ];

// // // export default function ProfileLocalTutor() {
// // //   const [, params] = useRoute("/profilelocaltutor/:id");
// // //   const [, setLocation] = useLocation();

// // //   const tutorId = params?.id || "1";
// // //   const tutor = tutorsDatabase[tutorId] || tutorsDatabase["1"];

// // //   const [activeTab, setActiveTab] = useState("reviews");
// // //   const [filterRating, setFilterRating] = useState("All Ratings");
// // //   const [sortBy, setSortBy] = useState("Newest First");
// // //   const [selectedSlot, setSelectedSlot] = useState("05:00 PM – 06:00 PM");

// // //   return (
// // //     <div className="min-h-screen bg-[#f8fafc] text-gray-800 antialiased p-4 md:p-8">
// // //       <div className="max-w-6xl mx-auto space-y-6">

// // //         {/* Back Button */}
// // //         <button
// // //           onClick={() => setLocation("/localtutor")}
// // //           className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm transition cursor-pointer"
// // //         >
// // //           <ArrowLeft className="w-3.5 h-3.5" />
// // //           <span>Back to Tutors</span>
// // //         </button>

// // //         {/* TOP PROFILE CARD */}
// // //         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
// // //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
// // //             {/* Avatar & Info */}
// // //             <div className="lg:col-span-4 flex gap-4">
// // //               <img
// // //                 src={tutor.image}
// // //                 alt={tutor.name}
// // //                 className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover shadow-inner flex-shrink-0"
// // //               />
// // //               <div className="space-y-1.5">
// // //                 <div className="flex items-center gap-1.5">
// // //                   <h1 className="text-xl font-bold text-gray-900">{tutor.name}</h1>
// // //                   <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-600 text-white" />
// // //                 </div>
// // //                 <p className="text-xs text-gray-600 font-medium">{tutor.degree}</p>

// // //                 <div className="flex items-center gap-1 text-xs text-gray-600 pt-0.5">
// // //                   <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
// // //                   <span className="font-semibold text-gray-900">{tutor.rating}</span>
// // //                   <span className="text-gray-500">({tutor.reviewsCount} Reviews)</span>
// // //                 </div>

// // //                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
// // //                   <User className="w-3.5 h-3.5 text-gray-400" />
// // //                   <span>{tutor.experience}</span>
// // //                 </div>

// // //                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
// // //                   <MapPin className="w-3.5 h-3.5 text-gray-400" />
// // //                   <span>{tutor.location}</span>
// // //                 </div>

// // //                 <div className="flex flex-wrap gap-1.5 pt-1">
// // //                   {tutor.subjects.map((sub) => (
// // //                     <span key={sub} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
// // //                       {sub}
// // //                     </span>
// // //                   ))}
// // //                   <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
// // //                     {tutor.classes.slice(0, 2).join(" – ")}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Details Grid */}
// // //             <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs border-y lg:border-y-0 lg:border-x border-gray-100 py-4 lg:py-0 lg:px-6">
// // //               <div className="space-y-1.5">
// // //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// // //                   <Landmark className="w-4 h-4 text-blue-600" />
// // //                   <span>Board</span>
// // //                 </div>
// // //                 <div className="flex flex-wrap gap-1">
// // //                   {tutor.boards.map((board) => (
// // //                     <span key={board} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// // //                       {board}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               <div className="space-y-1.5">
// // //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// // //                   <GraduationCap className="w-4 h-4 text-blue-600" />
// // //                   <span>Class</span>
// // //                 </div>
// // //                 <div className="flex flex-wrap gap-1">
// // //                   {tutor.classes.map((cls) => (
// // //                     <span key={cls} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// // //                       {cls}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               <div className="space-y-1.5">
// // //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// // //                   <BookOpen className="w-4 h-4 text-blue-600" />
// // //                   <span>Subjects</span>
// // //                 </div>
// // //                 <div className="flex flex-wrap gap-1">
// // //                   {tutor.subjects.map((sub) => (
// // //                     <span key={sub} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// // //                       {sub}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               <div className="space-y-1.5">
// // //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// // //                   <Languages className="w-4 h-4 text-blue-600" />
// // //                   <span>Languages Known</span>
// // //                 </div>
// // //                 <div className="flex flex-wrap gap-1">
// // //                   {tutor.languages.map((lang) => (
// // //                     <span key={lang} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// // //                       {lang}
// // //                     </span>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Pricing & CTA */}
// // //             <div className="lg:col-span-3 flex flex-col items-center justify-center space-y-3 w-full">
// // //               <div className="text-center">
// // //                 <div className="text-2xl font-bold text-emerald-600">
// // //                   {tutor.price.split("/")[0]} <span className="text-xs font-normal text-gray-500">/ month</span>
// // //                 </div>
// // //                 <p className="text-[11px] text-gray-400 font-medium">(Negotiable)</p>
// // //               </div>

// // //               <button className="w-full py-2.5 px-4 bg-[#ff4a22] hover:bg-[#e63e18] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition">
// // //                 <MessageCircle className="w-4 h-4 fill-white" />
// // //                 <span>Contact Tutor</span>
// // //               </button>

// // //               <button className="w-full py-2.5 px-4 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition">
// // //                 <Calendar className="w-4 h-4" />
// // //                 <span>Book a Free Demo</span>
// // //               </button>

// // //               <button className="text-xs font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1.5 pt-1 transition">
// // //                 <Heart className="w-4 h-4" />
// // //                 <span>Save Tutor</span>
// // //               </button>
// // //             </div>

// // //           </div>
// // //         </div>

// // //         {/* TABS */}
// // //         <div className="flex items-center gap-8 border-b border-gray-200 text-sm font-medium px-2">
// // //           <button
// // //             onClick={() => setActiveTab("about")}
// // //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// // //               activeTab === "about"
// // //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// // //                 : "text-gray-500 hover:text-gray-700"
// // //             }`}
// // //           >
// // //             <User className="w-4 h-4" /> About Me
// // //           </button>
// // //           <button
// // //             onClick={() => setActiveTab("experience")}
// // //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// // //               activeTab === "experience"
// // //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// // //                 : "text-gray-500 hover:text-gray-700"
// // //             }`}
// // //           >
// // //             <Briefcase className="w-4 h-4" /> Experience
// // //           </button>
// // //           <button
// // //             onClick={() => setActiveTab("reviews")}
// // //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// // //               activeTab === "reviews"
// // //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// // //                 : "text-gray-500 hover:text-gray-700"
// // //             }`}
// // //           >
// // //             <Star className="w-4 h-4" /> Reviews ({tutor.reviewsCount})
// // //           </button>
// // //           <button
// // //             onClick={() => setActiveTab("availability")}
// // //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// // //               activeTab === "availability"
// // //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// // //                 : "text-gray-500 hover:text-gray-700"
// // //             }`}
// // //           >
// // //             <CalendarCheck className="w-4 h-4" /> Availability
// // //           </button>
// // //         </div>

// // //         {/* MAIN BODY */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
// // //           <div className="lg:col-span-8 space-y-6">
// // //             {activeTab === "about" && (
// // //               <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
// // //                 <h3 className="font-bold text-gray-900 text-sm">About {tutor.name}</h3>
// // //                 <p className="text-xs text-gray-600 leading-relaxed">{tutor.about}</p>
// // //               </div>
// // //             )}

// // //             {activeTab === "experience" && (
// // //               <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
// // //                 <h3 className="font-bold text-gray-900 text-sm">Teaching Experience</h3>
// // //                 <p className="text-xs text-gray-600 leading-relaxed">
// // //                   Over {tutor.experience} of dedicated mentoring across {tutor.boards.join(", ")} curriculums.
// // //                 </p>
// // //               </div>
// // //             )}

// // //             {activeTab === "availability" && (
// // //               <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
// // //                 <h3 className="font-bold text-gray-900 text-sm">Available Timings</h3>
// // //                 <p className="text-xs text-gray-600 leading-relaxed">
// // //                   Available from Monday to Saturday between 04:00 PM to 08:00 PM.
// // //                 </p>
// // //               </div>
// // //             )}

// // //             {activeTab === "reviews" && (
// // //               <>
// // //                 <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
// // //                   <div className="sm:col-span-4 text-center sm:border-r border-gray-100 sm:pr-4">
// // //                     <p className="text-xs font-semibold text-gray-600">Overall Rating</p>
// // //                     <p className="text-4xl font-extrabold text-gray-900 mt-1">{tutor.rating}</p>
// // //                     <div className="flex justify-center gap-1 my-1.5">
// // //                       {[...Array(5)].map((_, i) => (
// // //                         <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
// // //                       ))}
// // //                     </div>
// // //                     <p className="text-xs text-gray-400">({tutor.reviewsCount} Reviews)</p>
// // //                   </div>

// // //                   <div className="sm:col-span-8 space-y-1.5 text-xs">
// // //                     {ratingBreakdown.map((row) => (
// // //                       <div key={row.stars} className="flex items-center gap-3">
// // //                         <span className="w-12 text-gray-600">{row.label}</span>
// // //                         <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
// // //                           <div
// // //                             className="bg-amber-400 h-full rounded-full transition-all duration-500"
// // //                             style={{ width: `${row.percentage}%` }}
// // //                           />
// // //                         </div>
// // //                         <span className="w-6 text-right text-gray-500 font-medium">
// // //                           {row.count}
// // //                         </span>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex flex-wrap items-center justify-between gap-4 py-1 text-xs">
// // //                   <div className="flex items-center gap-2">
// // //                     <span className="text-gray-500 font-medium">Filter by</span>
// // //                     <div className="relative">
// // //                       <select
// // //                         value={filterRating}
// // //                         onChange={(e) => setFilterRating(e.target.value)}
// // //                         className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none"
// // //                       >
// // //                         <option>All Ratings</option>
// // //                         <option>5 Stars</option>
// // //                         <option>4 Stars</option>
// // //                       </select>
// // //                       <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
// // //                     </div>
// // //                   </div>

// // //                   <div className="flex items-center gap-2">
// // //                     <span className="text-gray-500 font-medium">Sort by</span>
// // //                     <div className="relative">
// // //                       <select
// // //                         value={sortBy}
// // //                         onChange={(e) => setSortBy(e.target.value)}
// // //                         className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none"
// // //                       >
// // //                         <option>Newest First</option>
// // //                         <option>Oldest First</option>
// // //                       </select>
// // //                       <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 <div className="space-y-4">
// // //                   {reviewsData.map((item) => (
// // //                     <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
// // //                       <div className="flex items-start justify-between">
// // //                         <div className="flex items-center gap-3">
// // //                           <div className={`w-9 h-9 rounded-full ${item.avatarBg} ${item.avatarColor} font-bold flex items-center justify-center text-sm`}>
// // //                             {item.name.charAt(0)}
// // //                           </div>
// // //                           <div>
// // //                             <h4 className="text-xs font-bold text-gray-900 leading-tight">{item.name}</h4>
// // //                             <p className="text-[11px] text-gray-400">{item.grade} • {item.board}</p>
// // //                           </div>
// // //                         </div>
// // //                         <span className="text-[11px] text-gray-400">{item.timeAgo}</span>
// // //                       </div>

// // //                       <div className="flex gap-0.5 my-2">
// // //                         {[...Array(item.rating)].map((_, i) => (
// // //                           <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
// // //                         ))}
// // //                       </div>

// // //                       <p className="text-xs text-gray-600 leading-relaxed">{item.comment}</p>
// // //                     </div>
// // //                   ))}
// // //                 </div>

// // //                 <div className="text-center pt-2">
// // //                   <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-50 transition">
// // //                     View More Reviews
// // //                   </button>
// // //                 </div>
// // //               </>
// // //             )}
// // //           </div>

// // //           {/* Right Sidebar */}
// // //           <div className="lg:col-span-4 sticky top-6">
// // //             <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
// // //               <div className="flex items-center gap-2">
// // //                 <Calendar className="w-5 h-5 text-blue-600" />
// // //                 <h3 className="font-bold text-gray-900 text-sm">Book a Free Demo Class</h3>
// // //               </div>

// // //               <p className="text-xs text-gray-500 leading-relaxed">
// // //                 Book a free demo class and experience {tutor.name.split(" ")[0]}'s teaching style.
// // //               </p>

// // //               <div className="space-y-3 pt-2">
// // //                 <div className="relative">
// // //                   <input
// // //                     type="date"
// // //                     defaultValue="2026-08-28"
// // //                     className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-800 font-medium focus:outline-none cursor-pointer"
// // //                   />
// // //                 </div>

// // //                 <div className="relative">
// // //                   <select
// // //                     value={selectedSlot}
// // //                     onChange={(e) => setSelectedSlot(e.target.value)}
// // //                     className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-800 font-medium focus:outline-none cursor-pointer"
// // //                   >
// // //                     <option>05:00 PM – 06:00 PM</option>
// // //                     <option>06:00 PM – 07:00 PM</option>
// // //                     <option>07:00 PM – 08:00 PM</option>
// // //                   </select>
// // //                   <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
// // //                 </div>

// // //                 <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-lg transition shadow-sm shadow-blue-200">
// // //                   Book Now
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>

// // //         </div>

// // //       </div>
// // //     </div>
// // //   );
// // // }



// // import React, { useState } from "react";
// // import { useRoute, useLocation } from "wouter";
// // import {
// //   CheckCircle2,
// //   Star,
// //   User,
// //   MapPin,
// //   Landmark,
// //   GraduationCap,
// //   BookOpen,
// //   Languages,
// //   MessageCircle,
// //   Calendar,
// //   Heart,
// //   Briefcase,
// //   CalendarCheck,
// //   ChevronDown,
// //   ArrowLeft
// // } from "lucide-react";

// // interface Tutor {
// //   id: number;
// //   name: string;
// //   image: string;
// //   degree: string;
// //   experience: string;
// //   classes: string[];
// //   subjects: string[];
// //   boards: string[];
// //   languages: string[];
// //   location: string;
// //   rating: number;
// //   reviewsCount: number;
// //   price: string;
// //   about?: string;
// // }

// // const tutorsDatabase: Record<string, Tutor> = {
// //   "1": {
// //     id: 1,
// //     name: "Amit Sharma",
// //     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
// //     degree: "M.Sc. Physics, IIT Delhi",
// //     experience: "8+ Years Experience",
// //     classes: ["Class 11", "Class 12"],
// //     subjects: ["Physics", "Mathematics"],
// //     boards: ["CBSE", "RBSE", "ICSE", "NIOS", "State Board"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.9,
// //     reviewsCount: 128,
// //     price: "₹4,500 / month",
// //     about: "Dedicated physics educator with an M.Sc. from IIT Delhi. Focused on conceptual clarity, competitive problem-solving strategies, and structured regular assessments."
// //   },
// //   "2": {
// //     id: 2,
// //     name: "Pooja Yadav",
// //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
// //     degree: "M.Sc. Mathematics",
// //     experience: "4+ Years Experience",
// //     classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// //     subjects: ["Mathematics"],
// //     boards: ["CBSE", "ICSE"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.6,
// //     reviewsCount: 52,
// //     price: "₹5,000 / month",
// //     about: "Passionate mathematics mentor specializing in building foundational algebra, geometry, and calculus skills with customized doubt-clearing sessions."
// //   },
// //   "3": {
// //     id: 3,
// //     name: "Rohit Verma",
// //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
// //     degree: "M.Sc. Mathematics",
// //     experience: "7+ Years Experience",
// //     classes: ["Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// //     subjects: ["Mathematics", "Physics"],
// //     boards: ["CBSE", "ICSE"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.7,
// //     reviewsCount: 80,
// //     price: "₹6,000 / month",
// //     about: "Experienced instructor for secondary and senior secondary students with strong focus on board preparation, speed mathematics, and physical concepts."
// //   },
// //   "4": {
// //     id: 4,
// //     name: "Neha Gupta",
// //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
// //     degree: "B.Tech, NIT Warangal",
// //     experience: "6+ Years Experience",
// //     classes: ["Class 6", "Class 8", "Class 10", "Class 12"],
// //     subjects: ["Mathematics"],
// //     boards: ["CBSE", "State Board"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.8,
// //     reviewsCount: 96,
// //     price: "₹6,500 / month",
// //     about: "Engineering graduate providing structured mathematics coaching designed to tackle school syllabus alongside Olympiad-level problems."
// //   },
// //   "5": {
// //     id: 5,
// //     name: "Saurabh Singh",
// //     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
// //     degree: "B.Tech, IIT Roorkee",
// //     experience: "5+ Years Experience",
// //     classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// //     subjects: ["Physics"],
// //     boards: ["CBSE", "ICSE"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.9,
// //     reviewsCount: 64,
// //     price: "₹7,000 / month",
// //     about: "IIT Roorkee alumnus specializing in physics mechanics, electrodynamics, and modern physics with emphasis on numerical problem solving."
// //   },
// //   "6": {
// //     id: 6,
// //     name: "Ankit Kumar",
// //     image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
// //     degree: "M.Sc. Physics",
// //     experience: "6+ Years Experience",
// //     classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// //     subjects: ["Physics", "Mathematics"],
// //     boards: ["CBSE", "State Board"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.6,
// //     reviewsCount: 58,
// //     price: "₹7,500 / month",
// //     about: "Practical and interactive teaching approach tailored for students aiming to score top percentile in boards and school examinations."
// //   }
// // };

// // const allReviewsData = [
// //   {
// //     id: "1",
// //     name: "Rohit Verma",
// //     grade: "Class 12",
// //     board: "CBSE",
// //     timeAgo: "2 days ago",
// //     rating: 5,
// //     comment: "Sir explains concepts in a very clear and simple way. His problem solving techniques really helped me improve my marks in Physics.",
// //     avatarBg: "bg-purple-100",
// //     avatarColor: "text-purple-600",
// //   },
// //   {
// //     id: "2",
// //     name: "Ananya Sharma",
// //     grade: "Class 11",
// //     board: "RBSE",
// //     timeAgo: "1 week ago",
// //     rating: 5,
// //     comment: "Very knowledgeable and patient teacher. Doubt sessions are extremely helpful. Highly recommended!",
// //     avatarBg: "bg-emerald-100",
// //     avatarColor: "text-emerald-600",
// //   },
// //   {
// //     id: "3",
// //     name: "Kartik Mehta",
// //     grade: "Class 12",
// //     board: "CBSE",
// //     timeAgo: "3 weeks ago",
// //     rating: 5,
// //     comment: "Great teaching style and regular tests help a lot in preparation. Boosted my confidence in Board exams.",
// //     avatarBg: "bg-blue-100",
// //     avatarColor: "text-blue-600",
// //   },
// //   {
// //     id: "4",
// //     name: "Priyanka Sen",
// //     grade: "Class 11",
// //     board: "CBSE",
// //     timeAgo: "1 month ago",
// //     rating: 5,
// //     comment: "Numerical problem solving clarity is amazing. Sir provides very detailed notes and practice sheets.",
// //     avatarBg: "bg-rose-100",
// //     avatarColor: "text-rose-600",
// //   },
// //   {
// //     id: "5",
// //     name: "Vikas Choudhary",
// //     grade: "Class 12",
// //     board: "RBSE",
// //     timeAgo: "1 month ago",
// //     rating: 4,
// //     comment: "Very disciplined approach to teaching and timely completion of course syllabus.",
// //     avatarBg: "bg-amber-100",
// //     avatarColor: "text-amber-600",
// //   },
// //   {
// //     id: "6",
// //     name: "Deepak Rawat",
// //     grade: "Class 12",
// //     board: "ICSE",
// //     timeAgo: "2 months ago",
// //     rating: 5,
// //     comment: "Best tutor for board preparations. Weekly tests and mock question paper discussion really helped me score 95+.",
// //     avatarBg: "bg-teal-100",
// //     avatarColor: "text-teal-600",
// //   }
// // ];

// // const ratingBreakdown = [
// //   { stars: 5, label: "5 Stars", count: 110, percentage: 86 },
// //   { stars: 4, label: "4 Stars", count: 14, percentage: 11 },
// //   { stars: 3, label: "3 Stars", count: 3, percentage: 2.5 },
// //   { stars: 2, label: "2 Stars", count: 1, percentage: 1 },
// //   { stars: 1, label: "1 Star", count: 0, percentage: 0 },
// // ];

// // export default function ProfileLocalTutor() {
// //   const [, params] = useRoute("/profilelocaltutor/:id");
// //   const [, setLocation] = useLocation();

// //   const tutorId = params?.id || "1";
// //   const tutor = tutorsDatabase[tutorId] || tutorsDatabase["1"];

// //   const [activeTab, setActiveTab] = useState("reviews");
// //   const [filterRating, setFilterRating] = useState("All Ratings");
// //   const [sortBy, setSortBy] = useState("Newest First");
// //   const [selectedSlot, setSelectedSlot] = useState("05:00 PM – 06:00 PM");
// //   const [visibleReviewsCount, setVisibleReviewsCount] = useState(3);

// //   const handleLoadMoreReviews = () => {
// //     setVisibleReviewsCount((prev) => prev + 3);
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#f8fafc] text-gray-800 antialiased p-4 md:p-8">
// //       <div className="max-w-6xl mx-auto space-y-6">

// //         {/* Back Button */}
// //         <button
// //           onClick={() => setLocation("/localtutor")}
// //           className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm transition cursor-pointer"
// //         >
// //           <ArrowLeft className="w-3.5 h-3.5" />
// //           <span>Back to Tutors</span>
// //         </button>

// //         {/* TOP PROFILE CARD */}
// //         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
// //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
// //             {/* Avatar & Info */}
// //             <div className="lg:col-span-4 flex gap-4">
// //               <img
// //                 src={tutor.image}
// //                 alt={tutor.name}
// //                 className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover shadow-inner flex-shrink-0"
// //               />
// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5">
// //                   <h1 className="text-xl font-bold text-gray-900">{tutor.name}</h1>
// //                   <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-600 text-white" />
// //                 </div>
// //                 <p className="text-xs text-gray-600 font-medium">{tutor.degree}</p>

// //                 <div className="flex items-center gap-1 text-xs text-gray-600 pt-0.5">
// //                   <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
// //                   <span className="font-semibold text-gray-900">{tutor.rating}</span>
// //                   <span className="text-gray-500">({tutor.reviewsCount} Reviews)</span>
// //                 </div>

// //                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
// //                   <User className="w-3.5 h-3.5 text-gray-400" />
// //                   <span>{tutor.experience}</span>
// //                 </div>

// //                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
// //                   <MapPin className="w-3.5 h-3.5 text-gray-400" />
// //                   <span>{tutor.location}</span>
// //                 </div>

// //                 <div className="flex flex-wrap gap-1.5 pt-1">
// //                   {tutor.subjects.map((sub) => (
// //                     <span key={sub} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
// //                       {sub}
// //                     </span>
// //                   ))}
// //                   <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
// //                     {tutor.classes.slice(0, 2).join(" – ")}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Details Grid */}
// //             <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs border-y lg:border-y-0 lg:border-x border-gray-100 py-4 lg:py-0 lg:px-6">
// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// //                   <Landmark className="w-4 h-4 text-blue-600" />
// //                   <span>Board</span>
// //                 </div>
// //                 <div className="flex flex-wrap gap-1">
// //                   {tutor.boards.map((board) => (
// //                     <span key={board} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// //                       {board}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// //                   <GraduationCap className="w-4 h-4 text-blue-600" />
// //                   <span>Class</span>
// //                 </div>
// //                 <div className="flex flex-wrap gap-1">
// //                   {tutor.classes.map((cls) => (
// //                     <span key={cls} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// //                       {cls}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// //                   <BookOpen className="w-4 h-4 text-blue-600" />
// //                   <span>Subjects</span>
// //                 </div>
// //                 <div className="flex flex-wrap gap-1">
// //                   {tutor.subjects.map((sub) => (
// //                     <span key={sub} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// //                       {sub}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// //                   <Languages className="w-4 h-4 text-blue-600" />
// //                   <span>Languages Known</span>
// //                 </div>
// //                 <div className="flex flex-wrap gap-1">
// //                   {tutor.languages.map((lang) => (
// //                     <span key={lang} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// //                       {lang}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Pricing & CTA */}
// //             <div className="lg:col-span-3 flex flex-col items-center justify-center space-y-3 w-full">
// //               <div className="text-center">
// //                 <div className="text-2xl font-bold text-emerald-600">
// //                   {tutor.price.split("/")[0]} <span className="text-xs font-normal text-gray-500">/ month</span>
// //                 </div>
// //                 <p className="text-[11px] text-gray-400 font-medium">(Negotiable)</p>
// //               </div>

// //               <button className="w-full py-2.5 px-4 bg-[#ff4a22] hover:bg-[#e63e18] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition">
// //                 <MessageCircle className="w-4 h-4 fill-white" />
// //                 <span>Contact Tutor</span>
// //               </button>

// //               <button className="w-full py-2.5 px-4 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition">
// //                 <Calendar className="w-4 h-4" />
// //                 <span>Book a Free Demo</span>
// //               </button>

// //               <button className="text-xs font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1.5 pt-1 transition">
// //                 <Heart className="w-4 h-4" />
// //                 <span>Save Tutor</span>
// //               </button>
// //             </div>

// //           </div>
// //         </div>

// //         {/* TABS */}
// //         <div className="flex items-center gap-8 border-b border-gray-200 text-sm font-medium px-2">
// //           <button
// //             onClick={() => setActiveTab("about")}
// //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// //               activeTab === "about"
// //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// //                 : "text-gray-500 hover:text-gray-700"
// //             }`}
// //           >
// //             <User className="w-4 h-4" /> About Me
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("experience")}
// //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// //               activeTab === "experience"
// //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// //                 : "text-gray-500 hover:text-gray-700"
// //             }`}
// //           >
// //             <Briefcase className="w-4 h-4" /> Experience
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("reviews")}
// //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// //               activeTab === "reviews"
// //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// //                 : "text-gray-500 hover:text-gray-700"
// //             }`}
// //           >
// //             <Star className="w-4 h-4" /> Reviews ({tutor.reviewsCount})
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("availability")}
// //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// //               activeTab === "availability"
// //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// //                 : "text-gray-500 hover:text-gray-700"
// //             }`}
// //           >
// //             <CalendarCheck className="w-4 h-4" /> Availability
// //           </button>
// //         </div>

// //         {/* MAIN BODY */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
// //           {/* Left Content Column */}
// //           <div className="lg:col-span-8 space-y-6">
// //             {activeTab === "about" && (
// //               <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
// //                 <h3 className="font-bold text-gray-900 text-sm">About {tutor.name}</h3>
// //                 <p className="text-xs text-gray-600 leading-relaxed">{tutor.about}</p>
// //               </div>
// //             )}

// //             {activeTab === "experience" && (
// //               <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
// //                 <h3 className="font-bold text-gray-900 text-sm">Teaching Experience</h3>
// //                 <p className="text-xs text-gray-600 leading-relaxed">
// //                   Over {tutor.experience} of dedicated mentoring across {tutor.boards.join(", ")} curriculums.
// //                 </p>
// //               </div>
// //             )}

// //             {activeTab === "availability" && (
// //               <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
// //                 <h3 className="font-bold text-gray-900 text-sm">Available Timings</h3>
// //                 <p className="text-xs text-gray-600 leading-relaxed">
// //                   Available from Monday to Saturday between 04:00 PM to 08:00 PM.
// //                 </p>
// //               </div>
// //             )}

// //             {activeTab === "reviews" && (
// //               <>
// //                 {/* Aggregate Rating Card */}
// //                 <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
// //                   <div className="sm:col-span-4 text-center sm:border-r border-gray-100 sm:pr-4">
// //                     <p className="text-xs font-semibold text-gray-600">Overall Rating</p>
// //                     <p className="text-4xl font-extrabold text-gray-900 mt-1">{tutor.rating}</p>
// //                     <div className="flex justify-center gap-1 my-1.5">
// //                       {[...Array(5)].map((_, i) => (
// //                         <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
// //                       ))}
// //                     </div>
// //                     <p className="text-xs text-gray-400">({tutor.reviewsCount} Reviews)</p>
// //                   </div>

// //                   <div className="sm:col-span-8 space-y-1.5 text-xs">
// //                     {ratingBreakdown.map((row) => (
// //                       <div key={row.stars} className="flex items-center gap-3">
// //                         <span className="w-12 text-gray-600">{row.label}</span>
// //                         <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
// //                           <div
// //                             className="bg-amber-400 h-full rounded-full transition-all duration-500"
// //                             style={{ width: `${row.percentage}%` }}
// //                           />
// //                         </div>
// //                         <span className="w-6 text-right text-gray-500 font-medium">
// //                           {row.count}
// //                         </span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Filter & Sort Bar */}
// //                 <div className="flex flex-wrap items-center justify-between gap-4 py-1 text-xs">
// //                   <div className="flex items-center gap-2">
// //                     <span className="text-gray-500 font-medium">Filter by</span>
// //                     <div className="relative">
// //                       <select
// //                         value={filterRating}
// //                         onChange={(e) => setFilterRating(e.target.value)}
// //                         className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none cursor-pointer"
// //                       >
// //                         <option>All Ratings</option>
// //                         <option>5 Stars</option>
// //                         <option>4 Stars</option>
// //                       </select>
// //                       <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center gap-2">
// //                     <span className="text-gray-500 font-medium">Sort by</span>
// //                     <div className="relative">
// //                       <select
// //                         value={sortBy}
// //                         onChange={(e) => setSortBy(e.target.value)}
// //                         className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none cursor-pointer"
// //                       >
// //                         <option>Newest First</option>
// //                         <option>Oldest First</option>
// //                       </select>
// //                       <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Reviews List */}
// //                 <div className="space-y-4">
// //                   {allReviewsData.slice(0, visibleReviewsCount).map((item) => (
// //                     <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
// //                       <div className="flex items-start justify-between">
// //                         <div className="flex items-center gap-3">
// //                           <div className={`w-9 h-9 rounded-full ${item.avatarBg} ${item.avatarColor} font-bold flex items-center justify-center text-sm`}>
// //                             {item.name.charAt(0)}
// //                           </div>
// //                           <div>
// //                             <h4 className="text-xs font-bold text-gray-900 leading-tight">{item.name}</h4>
// //                             <p className="text-[11px] text-gray-400">{item.grade} • {item.board}</p>
// //                           </div>
// //                         </div>
// //                         <span className="text-[11px] text-gray-400">{item.timeAgo}</span>
// //                       </div>

// //                       <div className="flex gap-0.5 my-2">
// //                         {[...Array(item.rating)].map((_, i) => (
// //                           <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
// //                         ))}
// //                       </div>

// //                       <p className="text-xs text-gray-600 leading-relaxed">{item.comment}</p>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* View More / Less Reviews Button */}
// //                 {visibleReviewsCount < allReviewsData.length ? (
// //                   <div className="text-center pt-2">
// //                     <button 
// //                       onClick={handleLoadMoreReviews}
// //                       className="px-6 py-2.5 border border-blue-600 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-50 transition cursor-pointer shadow-sm"
// //                     >
// //                       View More Reviews
// //                     </button>
// //                   </div>
// //                 ) : (
// //                   <div className="text-center pt-2">
// //                     <button 
// //                       onClick={() => setVisibleReviewsCount(3)}
// //                       className="px-6 py-2.5 border border-slate-300 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 transition cursor-pointer shadow-sm"
// //                     >
// //                       Show Less Reviews
// //                     </button>
// //                   </div>
// //                 )}
// //               </>
// //             )}
// //           </div>

// //           {/* Right Sidebar: Balanced Margin & Alignment */}
// //           <div className="lg:col-span-4 sticky top-6 mt-0 lg:mt-14">
// //             <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
// //               <div className="flex items-center gap-2">
// //                 <Calendar className="w-5 h-5 text-blue-600" />
// //                 <h3 className="font-bold text-gray-900 text-sm">Book a Free Demo Class</h3>
// //               </div>

// //               {/* <p className="text-xs text-gray-500 leading-relaxed">
// //                 Book a free demo class and experience {tutor.name.split(" ")[0]}'s teaching style.
// //               </p> */}

// //               <p className="text-xs text-gray-500 leading-relaxed">
// //   Book a free demo class and experience {tutor.name.split(" ")[0]}'s unique teaching style.
// //   Discover simple, practical, and easy-to-understand learning with personalized guidance.
// //   See how difficult topics can become simple and interesting. Join the demo class today
// //   and experience the difference for yourself!
// // </p>

// //               <div className="space-y-3 pt-2">
// //                 <div className="relative">
// //                   <input
// //                     type="date"
// //                     defaultValue="2026-08-28"
// //                     className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-800 font-medium focus:outline-none cursor-pointer"
// //                   />
// //                 </div>

// //                 <div className="relative">
// //                   <select
// //                     value={selectedSlot}
// //                     onChange={(e) => setSelectedSlot(e.target.value)}
// //                     className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-800 font-medium focus:outline-none cursor-pointer"
// //                   >
// //                     <option>05:00 PM – 06:00 PM</option>
// //                     <option>06:00 PM – 07:00 PM</option>
// //                     <option>07:00 PM – 08:00 PM</option>
// //                   </select>
// //                   <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
// //                 </div>

// //                 <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-lg transition shadow-sm shadow-blue-200 cursor-pointer">
// //                   Book Now
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //         </div>

// //       </div>
// //     </div>
// //   );
// // }



// // import React, { useState } from "react";
// // import { useRoute, useLocation } from "wouter";
// // import {
// //   CheckCircle2,
// //   Star,
// //   User,
// //   MapPin,
// //   Landmark,
// //   GraduationCap,
// //   BookOpen,
// //   Languages,
// //   MessageCircle,
// //   Calendar,
// //   Heart,
// //   Briefcase,
// //   CalendarCheck,
// //   ChevronDown,
// //   ArrowLeft
// // } from "lucide-react";

// // interface Tutor {
// //   id: number;
// //   name: string;
// //   image: string;
// //   degree: string;
// //   experience: string;
// //   classes: string[];
// //   subjects: string[];
// //   boards: string[];
// //   languages: string[];
// //   location: string;
// //   rating: number;
// //   reviewsCount: number;
// //   price: string;
// //   about?: string;
// // }

// // const tutorsDatabase: Record<string, Tutor> = {
// //   "1": {
// //     id: 1,
// //     name: "Amit Sharma",
// //     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
// //     degree: "M.Sc. Physics, IIT Delhi",
// //     experience: "8+ Years Experience",
// //     classes: ["Class 11", "Class 12"],
// //     subjects: ["Physics", "Mathematics"],
// //     boards: ["CBSE", "RBSE", "ICSE", "NIOS", "State Board"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.9,
// //     reviewsCount: 128,
// //     price: "₹4,500 / month",
// //     about: "Dedicated physics educator with an M.Sc. from IIT Delhi. Focused on conceptual clarity, competitive problem-solving strategies, and structured regular assessments."
// //   },
// //   "2": {
// //     id: 2,
// //     name: "Pooja Yadav",
// //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
// //     degree: "M.Sc. Mathematics",
// //     experience: "4+ Years Experience",
// //     classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// //     subjects: ["Mathematics"],
// //     boards: ["CBSE", "ICSE"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.6,
// //     reviewsCount: 52,
// //     price: "₹5,000 / month",
// //     about: "Passionate mathematics mentor specializing in building foundational algebra, geometry, and calculus skills with customized doubt-clearing sessions."
// //   },
// //   "3": {
// //     id: 3,
// //     name: "Rohit Verma",
// //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
// //     degree: "M.Sc. Mathematics",
// //     experience: "7+ Years Experience",
// //     classes: ["Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// //     subjects: ["Mathematics", "Physics"],
// //     boards: ["CBSE", "ICSE"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.7,
// //     reviewsCount: 80,
// //     price: "₹6,000 / month",
// //     about: "Experienced instructor for secondary and senior secondary students with strong focus on board preparation, speed mathematics, and physical concepts."
// //   },
// //   "4": {
// //     id: 4,
// //     name: "Neha Gupta",
// //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
// //     degree: "B.Tech, NIT Warangal",
// //     experience: "6+ Years Experience",
// //     classes: ["Class 6", "Class 8", "Class 10", "Class 12"],
// //     subjects: ["Mathematics"],
// //     boards: ["CBSE", "State Board"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.8,
// //     reviewsCount: 96,
// //     price: "₹6,500 / month",
// //     about: "Engineering graduate providing structured mathematics coaching designed to tackle school syllabus alongside Olympiad-level problems."
// //   },
// //   "5": {
// //     id: 5,
// //     name: "Saurabh Singh",
// //     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
// //     degree: "B.Tech, IIT Roorkee",
// //     experience: "5+ Years Experience",
// //     classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// //     subjects: ["Physics"],
// //     boards: ["CBSE", "ICSE"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.9,
// //     reviewsCount: 64,
// //     price: "₹7,000 / month",
// //     about: "IIT Roorkee alumnus specializing in physics mechanics, electrodynamics, and modern physics with emphasis on numerical problem solving."
// //   },
// //   "6": {
// //     id: 6,
// //     name: "Ankit Kumar",
// //     image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
// //     degree: "M.Sc. Physics",
// //     experience: "6+ Years Experience",
// //     classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// //     subjects: ["Physics", "Mathematics"],
// //     boards: ["CBSE", "State Board"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.6,
// //     reviewsCount: 58,
// //     price: "₹7,500 / month",
// //     about: "Practical and interactive teaching approach tailored for students aiming to score top percentile in boards and school examinations."
// //   }
// // };

// // const allReviewsData = [
// //   {
// //     id: "1",
// //     name: "Rohit Verma",
// //     grade: "Class 12",
// //     board: "CBSE",
// //     timeAgo: "2 days ago",
// //     rating: 5,
// //     comment: "Sir explains concepts in a very clear and simple way. His problem solving techniques really helped me improve my marks in Physics.",
// //     avatarBg: "bg-purple-100",
// //     avatarColor: "text-purple-600",
// //   },
// //   {
// //     id: "2",
// //     name: "Ananya Sharma",
// //     grade: "Class 11",
// //     board: "RBSE",
// //     timeAgo: "1 week ago",
// //     rating: 5,
// //     comment: "Very knowledgeable and patient teacher. Doubt sessions are extremely helpful. Highly recommended!",
// //     avatarBg: "bg-emerald-100",
// //     avatarColor: "text-emerald-600",
// //   },
// //   {
// //     id: "3",
// //     name: "Kartik Mehta",
// //     grade: "Class 12",
// //     board: "CBSE",
// //     timeAgo: "3 weeks ago",
// //     rating: 5,
// //     comment: "Great teaching style and regular tests help a lot in preparation. Boosted my confidence in Board exams.",
// //     avatarBg: "bg-blue-100",
// //     avatarColor: "text-blue-600",
// //   },
// //   {
// //     id: "4",
// //     name: "Priyanka Sen",
// //     grade: "Class 11",
// //     board: "CBSE",
// //     timeAgo: "1 month ago",
// //     rating: 5,
// //     comment: "Numerical problem solving clarity is amazing. Sir provides very detailed notes and practice sheets.",
// //     avatarBg: "bg-rose-100",
// //     avatarColor: "text-rose-600",
// //   },
// //   {
// //     id: "5",
// //     name: "Vikas Choudhary",
// //     grade: "Class 12",
// //     board: "RBSE",
// //     timeAgo: "1 month ago",
// //     rating: 4,
// //     comment: "Very disciplined approach to teaching and timely completion of course syllabus.",
// //     avatarBg: "bg-amber-100",
// //     avatarColor: "text-amber-600",
// //   },
// //   {
// //     id: "6",
// //     name: "Deepak Rawat",
// //     grade: "Class 12",
// //     board: "ICSE",
// //     timeAgo: "2 months ago",
// //     rating: 5,
// //     comment: "Best tutor for board preparations. Weekly tests and mock question paper discussion really helped me score 95+.",
// //     avatarBg: "bg-teal-100",
// //     avatarColor: "text-teal-600",
// //   }
// // ];

// // const ratingBreakdown = [
// //   { stars: 5, label: "5 Stars", count: 110, percentage: 86 },
// //   { stars: 4, label: "4 Stars", count: 14, percentage: 11 },
// //   { stars: 3, label: "3 Stars", count: 3, percentage: 2.5 },
// //   { stars: 2, label: "2 Stars", count: 1, percentage: 1 },
// //   { stars: 1, label: "1 Star", count: 0, percentage: 0 },
// // ];

// // export default function ProfileLocalTutor() {
// //   const [, params] = useRoute("/profilelocaltutor/:id");
// //   const [, setLocation] = useLocation();

// //   const tutorId = params?.id || "1";
// //   const tutor = tutorsDatabase[tutorId] || tutorsDatabase["1"];

// //   const [activeTab, setActiveTab] = useState("reviews");
// //   const [filterRating, setFilterRating] = useState("All Ratings");
// //   const [sortBy, setSortBy] = useState("Newest First");
// //   const [selectedSlot, setSelectedSlot] = useState("05:00 PM – 06:00 PM");
// //   const [visibleReviewsCount, setVisibleReviewsCount] = useState(1);

// //   const handleLoadMoreReviews = () => {
// //     setVisibleReviewsCount(allReviewsData.length);
// //   };

// //   const handleShowLessReviews = () => {
// //     setVisibleReviewsCount(1);
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#f8fafc] text-gray-800 antialiased p-4 md:p-8">
// //       <div className="max-w-6xl mx-auto space-y-6">

// //         {/* Back Button */}
// //         <button
// //           onClick={() => setLocation("/localtutor")}
// //           className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm transition cursor-pointer"
// //         >
// //           <ArrowLeft className="w-3.5 h-3.5" />
// //           <span>Back to Tutors</span>
// //         </button>

// //         {/* TOP PROFILE CARD */}
// //         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
// //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
// //             {/* Avatar & Info */}
// //             <div className="lg:col-span-4 flex gap-4">
// //               <img
// //                 src={tutor.image}
// //                 alt={tutor.name}
// //                 className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover shadow-inner flex-shrink-0"
// //               />
// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5">
// //                   <h1 className="text-xl font-bold text-gray-900">{tutor.name}</h1>
// //                   <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-600 text-white" />
// //                 </div>
// //                 <p className="text-xs text-gray-600 font-medium">{tutor.degree}</p>

// //                 <div className="flex items-center gap-1 text-xs text-gray-600 pt-0.5">
// //                   <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
// //                   <span className="font-semibold text-gray-900">{tutor.rating}</span>
// //                   <span className="text-gray-500">({tutor.reviewsCount} Reviews)</span>
// //                 </div>

// //                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
// //                   <User className="w-3.5 h-3.5 text-gray-400" />
// //                   <span>{tutor.experience}</span>
// //                 </div>

// //                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
// //                   <MapPin className="w-3.5 h-3.5 text-gray-400" />
// //                   <span>{tutor.location}</span>
// //                 </div>

// //                 <div className="flex flex-wrap gap-1.5 pt-1">
// //                   {tutor.subjects.map((sub) => (
// //                     <span key={sub} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
// //                       {sub}
// //                     </span>
// //                   ))}
// //                   <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
// //                     {tutor.classes.slice(0, 2).join(" – ")}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Details Grid */}
// //             <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs border-y lg:border-y-0 lg:border-x border-gray-100 py-4 lg:py-0 lg:px-6">
// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// //                   <Landmark className="w-4 h-4 text-blue-600" />
// //                   <span>Board</span>
// //                 </div>
// //                 <div className="flex flex-wrap gap-1">
// //                   {tutor.boards.map((board) => (
// //                     <span key={board} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// //                       {board}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// //                   <GraduationCap className="w-4 h-4 text-blue-600" />
// //                   <span>Class</span>
// //                 </div>
// //                 <div className="flex flex-wrap gap-1">
// //                   {tutor.classes.map((cls) => (
// //                     <span key={cls} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// //                       {cls}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// //                   <BookOpen className="w-4 h-4 text-blue-600" />
// //                   <span>Subjects</span>
// //                 </div>
// //                 <div className="flex flex-wrap gap-1">
// //                   {tutor.subjects.map((sub) => (
// //                     <span key={sub} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// //                       {sub}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// //                   <Languages className="w-4 h-4 text-blue-600" />
// //                   <span>Languages Known</span>
// //                 </div>
// //                 <div className="flex flex-wrap gap-1">
// //                   {tutor.languages.map((lang) => (
// //                     <span key={lang} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// //                       {lang}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Pricing & CTA */}
// //             <div className="lg:col-span-3 flex flex-col items-center justify-center space-y-3 w-full">
// //               <div className="text-center">
// //                 <div className="text-2xl font-bold text-emerald-600">
// //                   {tutor.price.split("/")[0]} <span className="text-xs font-normal text-gray-500">/ month</span>
// //                 </div>
// //                 <p className="text-[11px] text-gray-400 font-medium">(Negotiable)</p>
// //               </div>

// //               <button className="w-full py-2.5 px-4 bg-[#ff4a22] hover:bg-[#e63e18] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition cursor-pointer">
// //                 <MessageCircle className="w-4 h-4 fill-white" />
// //                 <span>Contact Tutor</span>
// //               </button>

// //               <button className="w-full py-2.5 px-4 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition cursor-pointer">
// //                 <Calendar className="w-4 h-4" />
// //                 <span>Book a Free Demo</span>
// //               </button>

// //               <button className="text-xs font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1.5 pt-1 transition cursor-pointer">
// //                 <Heart className="w-4 h-4" />
// //                 <span>Save Tutor</span>
// //               </button>
// //             </div>

// //           </div>
// //         </div>

// //         {/* TABS */}
// //         <div className="flex items-center gap-8 border-b border-gray-200 text-sm font-medium px-2">
// //           <button
// //             onClick={() => setActiveTab("about")}
// //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// //               activeTab === "about"
// //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// //                 : "text-gray-500 hover:text-gray-700"
// //             }`}
// //           >
// //             <User className="w-4 h-4" /> About Me
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("experience")}
// //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// //               activeTab === "experience"
// //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// //                 : "text-gray-500 hover:text-gray-700"
// //             }`}
// //           >
// //             <Briefcase className="w-4 h-4" /> Experience
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("reviews")}
// //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// //               activeTab === "reviews"
// //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// //                 : "text-gray-500 hover:text-gray-700"
// //             }`}
// //           >
// //             <Star className="w-4 h-4" /> Reviews ({tutor.reviewsCount})
// //           </button>
        
// //         </div>

// //         {/* MAIN BODY */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
// //           {/* Left Content Column */}
// //           <div className="lg:col-span-8 space-y-6">
// //             {activeTab === "about" && (
// //               <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
// //                 <h3 className="font-bold text-gray-900 text-sm">About {tutor.name}</h3>
// //                 <p className="text-xs text-gray-600 leading-relaxed">{tutor.about}</p>
// //               </div>
// //             )}

// //             {activeTab === "experience" && (
// //               <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
// //                 <h3 className="font-bold text-gray-900 text-sm">Teaching Experience</h3>
// //                 <p className="text-xs text-gray-600 leading-relaxed">
// //                   Over {tutor.experience} of dedicated mentoring across {tutor.boards.join(", ")} curriculums.
// //                 </p>
// //               </div>
// //             )}

// //             {/* {activeTab === "availability" && (
// //               <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
// //                 <h3 className="font-bold text-gray-900 text-sm">Available Timings</h3>
// //                 <p className="text-xs text-gray-600 leading-relaxed">
// //                   Available from Monday to Saturday between 04:00 PM to 08:00 PM.
// //                 </p>
// //               </div>
// //             )} */}

// //             {activeTab === "reviews" && (
// //               <>
// //                 {/* Aggregate Rating Card */}
// //                 <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
// //                   <div className="sm:col-span-4 text-center sm:border-r border-gray-100 sm:pr-4">
// //                     <p className="text-xs font-semibold text-gray-600">Overall Rating</p>
// //                     <p className="text-4xl font-extrabold text-gray-900 mt-1">{tutor.rating}</p>
// //                     <div className="flex justify-center gap-1 my-1.5">
// //                       {[...Array(5)].map((_, i) => (
// //                         <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
// //                       ))}
// //                     </div>
// //                     <p className="text-xs text-gray-400">({tutor.reviewsCount} Reviews)</p>
// //                   </div>

// //                   <div className="sm:col-span-8 space-y-1.5 text-xs">
// //                     {ratingBreakdown.map((row) => (
// //                       <div key={row.stars} className="flex items-center gap-3">
// //                         <span className="w-12 text-gray-600">{row.label}</span>
// //                         <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
// //                           <div
// //                             className="bg-amber-400 h-full rounded-full transition-all duration-500"
// //                             style={{ width: `${row.percentage}%` }}
// //                           />
// //                         </div>
// //                         <span className="w-6 text-right text-gray-500 font-medium">
// //                           {row.count}
// //                         </span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Filter & Sort Bar */}
// //                 <div className="flex flex-wrap items-center justify-between gap-4 py-1 text-xs">
// //                   <div className="flex items-center gap-2">
// //                     <span className="text-gray-500 font-medium">Filter by</span>
// //                     <div className="relative">
// //                       <select
// //                         value={filterRating}
// //                         onChange={(e) => setFilterRating(e.target.value)}
// //                         className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none cursor-pointer"
// //                       >
// //                         <option>All Ratings</option>
// //                         <option>5 Stars</option>
// //                         <option>4 Stars</option>
// //                       </select>
// //                       <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center gap-2">
// //                     <span className="text-gray-500 font-medium">Sort by</span>
// //                     <div className="relative">
// //                       <select
// //                         value={sortBy}
// //                         onChange={(e) => setSortBy(e.target.value)}
// //                         className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none cursor-pointer"
// //                       >
// //                         <option>Newest First</option>
// //                         <option>Oldest First</option>
// //                       </select>
// //                       <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Reviews List */}
// //                 <div className="space-y-4">
// //                   {allReviewsData.slice(0, visibleReviewsCount).map((item) => (
// //                     <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
// //                       <div className="flex items-start justify-between">
// //                         <div className="flex items-center gap-3">
// //                           <div className={`w-9 h-9 rounded-full ${item.avatarBg} ${item.avatarColor} font-bold flex items-center justify-center text-sm`}>
// //                             {item.name.charAt(0)}
// //                           </div>
// //                           <div>
// //                             <h4 className="text-xs font-bold text-gray-900 leading-tight">{item.name}</h4>
// //                             <p className="text-[11px] text-gray-400">{item.grade} • {item.board}</p>
// //                           </div>
// //                         </div>
// //                         <span className="text-[11px] text-gray-400">{item.timeAgo}</span>
// //                       </div>

// //                       <div className="flex gap-0.5 my-2">
// //                         {[...Array(item.rating)].map((_, i) => (
// //                           <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
// //                         ))}
// //                       </div>

// //                       <p className="text-xs text-gray-600 leading-relaxed">{item.comment}</p>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Single Click View More / Show Less Button */}
// //                 {visibleReviewsCount < allReviewsData.length ? (
// //                   <div className="text-center pt-2">
// //                     <button 
// //                       onClick={handleLoadMoreReviews}
// //                       className="px-6 py-2.5 border border-blue-600 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-50 transition cursor-pointer shadow-sm"
// //                     >
// //                       View More Reviews
// //                     </button>
// //                   </div>
// //                 ) : (
// //                   <div className="text-center pt-2">
// //                     <button 
// //                       onClick={handleShowLessReviews}
// //                       className="px-6 py-2.5 border border-slate-300 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 transition cursor-pointer shadow-sm"
// //                     >
// //                       Show Less Reviews
// //                     </button>
// //                   </div>
// //                 )}
// //               </>
// //             )}
// //           </div>

// //           {/* Right Sidebar: Height and Top Margin perfectly aligned */}
// //           <div className="lg:col-span-4 sticky top-6">
// //             <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
// //               <div className="flex items-center gap-2">
// //                 <Calendar className="w-5 h-5 text-blue-600" />
// //                 <h3 className="font-bold text-gray-900 text-sm">Book a Free Demo Class</h3>
// //               </div>
// // {/* 
// //               <p className="text-xs text-gray-500 leading-relaxed">
// //                 Book a free demo class and experience {tutor.name.split(" ")[0]}'s teaching style.
// //               </p> */}

// //               <p className="text-xs text-gray-500 leading-relaxed">
// //   Book a free demo class and experience {tutor.name.split(" ")[0]}'s unique teaching style.
// //   Get personalized guidance with simple, practical, and easy-to-understand explanations.
// //   Discover how difficult topics can become clear, engaging, and interesting.
// //   Learn at your own pace, ask questions, and build confidence with expert support.
// //   Join the demo class today 
// // </p>

// //               <div className="space-y-3 pt-2">
// //                 <div className="relative">
// //                   <input
// //                     type="date"
// //                     defaultValue="2026-08-28"
// //                     className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-800 font-medium focus:outline-none cursor-pointer"
// //                   />
// //                 </div>

// //                 <div className="relative">
// //                   <select
// //                     value={selectedSlot}
// //                     onChange={(e) => setSelectedSlot(e.target.value)}
// //                     className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-800 font-medium focus:outline-none cursor-pointer"
// //                   >
// //                     <option>05:00 PM – 06:00 PM</option>
// //                     <option>06:00 PM – 07:00 PM</option>
// //                     <option>07:00 PM – 08:00 PM</option>
// //                   </select>
// //                   <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
// //                 </div>

// //                 <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-lg transition shadow-sm shadow-blue-200 cursor-pointer">
// //                   Book Now
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //         </div>

// //       </div>
// //     </div>
// //   );
// // }



// // import React, { useState } from "react";
// // import { useRoute, useLocation } from "wouter";
// // import {
// //   CheckCircle2,
// //   Star,
// //   User,
// //   MapPin,
// //   Landmark,
// //   GraduationCap,
// //   BookOpen,
// //   Languages,
// //   MessageCircle,
// //   Calendar,
// //   Heart,
// //   Briefcase,
// //   ChevronDown,
// //   ArrowLeft
// // } from "lucide-react";
// // import { Header } from '../src/components/Header';
// // interface ExperienceItem {
// //   period: string;
// //   duration: string;
// //   role: string;
// //   organization: string;
// //   icon: "school" | "home" | "coaching" | "online";
// // }

// // interface Tutor {
// //   id: number;
// //   name: string;
// //   image: string;
// //   degree: string;
// //   experience: string;
// //   classes: string[];
// //   subjects: string[];
// //   boards: string[];
// //   languages: string[];
// //   location: string;
// //   rating: number;
// //   reviewsCount: number;
// //   price: string;
// //   aboutIntro?: string;
// //   educationDetails?: string[];
// //   experiences?: ExperienceItem[];
// // }

// // const defaultExperiences: ExperienceItem[] = [
// //   {
// //     period: "2021 – Present",
// //     duration: "(3+ Years)",
// //     role: "PGT Physics",
// //     organization: "St. Xavier's Senior Secondary School, Jaipur",
// //     icon: "school"
// //   },
// //   {
// //     period: "2018 – 2021",
// //     duration: "(3 Years)",
// //     role: "Home Tutor",
// //     organization: "Self-Employed, Jaipur",
// //     icon: "home"
// //   },
// //   {
// //     period: "2016 – 2018",
// //     duration: "(2 Years)",
// //     role: "Faculty – Physics",
// //     organization: "Career Point Coaching Institute, Jaipur",
// //     icon: "coaching"
// //   },
// //   {
// //     period: "2014 – 2016",
// //     duration: "(2 Years)",
// //     role: "Subject Matter Expert",
// //     organization: "Online Tutoring Platforms",
// //     icon: "online"
// //   }
// // ];

// // const tutorsDatabase: Record<string, Tutor> = {
// //   "1": {
// //     id: 1,
// //     name: "Amit Sharma",
// //     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
// //     degree: "M.Sc. Physics, IIT Delhi",
// //     experience: "8+ Years Experience",
// //     classes: ["Class 11", "Class 12"],
// //     subjects: ["Physics", "Mathematics"],
// //     boards: ["CBSE", "RBSE", "ICSE", "NIOS", "State Board"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.9,
// //     reviewsCount: 128,
// //     price: "₹4,500 / month",
// //     aboutIntro:
// //       "Hello! I'm Amit Sharma, a passionate educator with 8+ years of teaching experience. I specialize in Physics and Mathematics for Classes 11 & 12. My teaching approach is concept-based learning with real-life examples and regular assessments to ensure better understanding and improvement.",
// //     educationDetails: [
// //       "I completed my M.Sc. in Physics from IIT Delhi (2016–2018) with 82%.",
// //       "I did my B.Sc. (Hons.) Physics from University of Delhi (2013–2016) with 78%.",
// //       "I qualified CBSE Class 12 in 2012 with 91% and Class 10 in 2010 with 93%."
// //     ],
// //     experiences: defaultExperiences
// //   },
// //   "2": {
// //     id: 2,
// //     name: "Pooja Yadav",
// //     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
// //     degree: "M.Sc. Mathematics",
// //     experience: "4+ Years Experience",
// //     classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// //     subjects: ["Mathematics"],
// //     boards: ["CBSE", "ICSE"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.6,
// //     reviewsCount: 52,
// //     price: "₹5,000 / month",
// //     aboutIntro:
// //       "Hello! I'm Pooja Yadav, a passionate mathematics mentor specializing in building foundational algebra, geometry, and calculus skills with customized doubt-clearing sessions.",
// //     educationDetails: [
// //       "I completed my M.Sc. in Mathematics with top honors.",
// //       "I did my B.Sc. in Mathematics from University of Rajasthan."
// //     ],
// //     experiences: defaultExperiences
// //   },
// //   "3": {
// //     id: 3,
// //     name: "Rohit Verma",
// //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
// //     degree: "M.Sc. Mathematics",
// //     experience: "7+ Years Experience",
// //     classes: ["Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// //     subjects: ["Mathematics", "Physics"],
// //     boards: ["CBSE", "ICSE"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.7,
// //     reviewsCount: 80,
// //     price: "₹6,000 / month",
// //     aboutIntro:
// //       "Hello! I'm Rohit Verma, an experienced instructor for secondary and senior secondary students with a strong focus on board preparation and speed mathematics.",
// //     educationDetails: [
// //       "M.Sc. Mathematics with distinction.",
// //       "B.Sc. PCM from Rajasthan University."
// //     ],
// //     experiences: defaultExperiences
// //   },
// //   "4": {
// //     id: 4,
// //     name: "Neha Gupta",
// //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
// //     degree: "B.Tech, NIT Warangal",
// //     experience: "6+ Years Experience",
// //     classes: ["Class 6", "Class 8", "Class 10", "Class 12"],
// //     subjects: ["Mathematics"],
// //     boards: ["CBSE", "State Board"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.8,
// //     reviewsCount: 96,
// //     price: "₹6,500 / month",
// //     aboutIntro:
// //       "Hello! I'm Neha Gupta, an engineering graduate providing structured mathematics coaching designed to tackle school syllabus alongside Olympiad-level problems.",
// //     educationDetails: [
// //       "B.Tech from NIT Warangal.",
// //       "Senior Secondary CBSE with 95% in Mathematics."
// //     ],
// //     experiences: defaultExperiences
// //   },
// //   "5": {
// //     id: 5,
// //     name: "Saurabh Singh",
// //     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
// //     degree: "B.Tech, IIT Roorkee",
// //     experience: "5+ Years Experience",
// //     classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// //     subjects: ["Physics"],
// //     boards: ["CBSE", "ICSE"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.9,
// //     reviewsCount: 64,
// //     price: "₹7,000 / month",
// //     aboutIntro:
// //       "Hello! I'm Saurabh Singh, an IIT Roorkee alumnus specializing in physics mechanics, electrodynamics, and modern physics with emphasis on numerical problem solving.",
// //     educationDetails: [
// //       "B.Tech from IIT Roorkee.",
// //       "Top 1% in JEE Advanced Physics section."
// //     ],
// //     experiences: defaultExperiences
// //   },
// //   "6": {
// //     id: 6,
// //     name: "Ankit Kumar",
// //     image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
// //     degree: "M.Sc. Physics",
// //     experience: "6+ Years Experience",
// //     classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
// //     subjects: ["Physics", "Mathematics"],
// //     boards: ["CBSE", "State Board"],
// //     languages: ["English", "Hindi"],
// //     location: "Jaipur, Rajasthan",
// //     rating: 4.6,
// //     reviewsCount: 58,
// //     price: "₹7,500 / month",
// //     aboutIntro:
// //       "Hello! I'm Ankit Kumar. I use a practical and interactive teaching approach tailored for students aiming to score top percentile in boards and school examinations.",
// //     educationDetails: [
// //       "M.Sc. in Physics.",
// //       "B.Sc. in Science and Mathematics."
// //     ],
// //     experiences: defaultExperiences
// //   }
// // };

// // const allReviewsData = [
// //   {
// //     id: "1",
// //     name: "Rohit Verma",
// //     grade: "Class 12",
// //     board: "CBSE",
// //     timeAgo: "2 days ago",
// //     rating: 5,
// //     comment:
// //       "Sir explains concepts in a very clear and simple way. His problem solving techniques really helped me improve my marks in Physics.",
// //     avatarBg: "bg-purple-100",
// //     avatarColor: "text-purple-600"
// //   },
// //   {
// //     id: "2",
// //     name: "Ananya Sharma",
// //     grade: "Class 11",
// //     board: "RBSE",
// //     timeAgo: "1 week ago",
// //     rating: 5,
// //     comment:
// //       "Very knowledgeable and patient teacher. Doubt sessions are extremely helpful. Highly recommended!",
// //     avatarBg: "bg-emerald-100",
// //     avatarColor: "text-emerald-600"
// //   },
// //   {
// //     id: "3",
// //     name: "Kartik Mehta",
// //     grade: "Class 12",
// //     board: "CBSE",
// //     timeAgo: "3 weeks ago",
// //     rating: 5,
// //     comment:
// //       "Great teaching style and regular tests help a lot in preparation. Boosted my confidence in Board exams.",
// //     avatarBg: "bg-blue-100",
// //     avatarColor: "text-blue-600"
// //   },
// //   {
// //     id: "4",
// //     name: "Priyanka Sen",
// //     grade: "Class 11",
// //     board: "CBSE",
// //     timeAgo: "1 month ago",
// //     rating: 5,
// //     comment:
// //       "Numerical problem solving clarity is amazing. Sir provides very detailed notes and practice sheets.",
// //     avatarBg: "bg-rose-100",
// //     avatarColor: "text-rose-600"
// //   },
// //   {
// //     id: "5",
// //     name: "Vikas Choudhary",
// //     grade: "Class 12",
// //     board: "RBSE",
// //     timeAgo: "1 month ago",
// //     rating: 4,
// //     comment:
// //       "Very disciplined approach to teaching and timely completion of course syllabus.",
// //     avatarBg: "bg-amber-100",
// //     avatarColor: "text-amber-600"
// //   },
// //   {
// //     id: "6",
// //     name: "Deepak Rawat",
// //     grade: "Class 12",
// //     board: "ICSE",
// //     timeAgo: "2 months ago",
// //     rating: 5,
// //     comment:
// //       "Best tutor for board preparations. Weekly tests and mock question paper discussion really helped me score 95+.",
// //     avatarBg: "bg-teal-100",
// //     avatarColor: "text-teal-600"
// //   }
// // ];

// // const ratingBreakdown = [
// //   { stars: 5, label: "5 Stars", count: 110, percentage: 86 },
// //   { stars: 4, label: "4 Stars", count: 14, percentage: 11 },
// //   { stars: 3, label: "3 Stars", count: 3, percentage: 2.5 },
// //   { stars: 2, label: "2 Stars", count: 1, percentage: 1 },
// //   { stars: 1, label: "1 Star", count: 0, percentage: 0 }
// // ];

// // export default function ProfileLocalTutor() {
// //   const [, params] = useRoute("/profilelocaltutor/:id");
// //   const [, setLocation] = useLocation();

// //   const tutorId = params?.id || "1";
// //   const tutor = tutorsDatabase[tutorId] || tutorsDatabase["1"];

// //   const [activeTab, setActiveTab] = useState<"about" | "experience" | "reviews">("about");
// //   const [filterRating, setFilterRating] = useState("All Ratings");
// //   const [sortBy, setSortBy] = useState("Newest First");
// //   const [selectedSlot, setSelectedSlot] = useState("05:00 PM – 06:00 PM");
// //   const [visibleReviewsCount, setVisibleReviewsCount] = useState(1);

// //   const experiences = tutor.experiences || defaultExperiences;

// //   const renderTimelineIcon = (iconType: string) => {
// //     switch (iconType) {
// //       case "school":
// //       case "coaching":
// //         return <Landmark className="w-6 h-6 text-blue-600" />;
// //       case "home":
// //         return <GraduationCap className="w-6 h-6 text-blue-600" />;
// //       case "online":
// //         return <BookOpen className="w-6 h-6 text-blue-600" />;
// //       default:
// //         return <Landmark className="w-6 h-6 text-blue-600" />;
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#f8fafc] text-gray-800 antialiased p-4 md:p-8">

// //       <Header/>
// //       <div className="max-w-6xl mx-auto space-y-6">

// //         {/* Back Button */}
// //         {/* <button
// //           onClick={() => setLocation("/localtutor")}
// //           className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm transition cursor-pointer"
// //         >
// //           <ArrowLeft className="w-3.5 h-3.5" />
// //           <span>Back to Tutors</span>
// //         </button> */}

// //         {/* TOP PROFILE CARD */}
// //         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
// //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
// //             {/* Avatar & Info */}
// //             <div className="lg:col-span-4 flex gap-4">
// //               <img
// //                 src={tutor.image}
// //                 alt={tutor.name}
// //                 className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover shadow-inner flex-shrink-0"
// //               />
// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5">
// //                   <h1 className="text-xl font-bold text-gray-900">{tutor.name}</h1>
// //                   <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-600 text-white" />
// //                 </div>
// //                 <p className="text-xs text-gray-600 font-medium">{tutor.degree}</p>

// //                 <div className="flex items-center gap-1 text-xs text-gray-600 pt-0.5">
// //                   <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
// //                   <span className="font-semibold text-gray-900">{tutor.rating}</span>
// //                   <span className="text-gray-500">({tutor.reviewsCount} Reviews)</span>
// //                 </div>

// //                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
// //                   <User className="w-3.5 h-3.5 text-gray-400" />
// //                   <span>{tutor.experience}</span>
// //                 </div>

// //                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
// //                   <MapPin className="w-3.5 h-3.5 text-gray-400" />
// //                   <span>{tutor.location}</span>
// //                 </div>

// //                 <div className="flex flex-wrap gap-1.5 pt-1">
// //                   {tutor.subjects.map((sub) => (
// //                     <span key={sub} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
// //                       {sub}
// //                     </span>
// //                   ))}
// //                   <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
// //                     {tutor.classes.slice(0, 2).join(" – ")}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Details Grid */}
// //             <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs border-y lg:border-y-0 lg:border-x border-gray-100 py-4 lg:py-0 lg:px-6">
// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// //                   <Landmark className="w-4 h-4 text-blue-600" />
// //                   <span>Board</span>
// //                 </div>
// //                 <div className="flex flex-wrap gap-1">
// //                   {tutor.boards.map((board) => (
// //                     <span key={board} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// //                       {board}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// //                   <GraduationCap className="w-4 h-4 text-blue-600" />
// //                   <span>Class</span>
// //                 </div>
// //                 <div className="flex flex-wrap gap-1">
// //                   {tutor.classes.map((cls) => (
// //                     <span key={cls} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// //                       {cls}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// //                   <BookOpen className="w-4 h-4 text-blue-600" />
// //                   <span>Subjects</span>
// //                 </div>
// //                 <div className="flex flex-wrap gap-1">
// //                   {tutor.subjects.map((sub) => (
// //                     <span key={sub} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// //                       {sub}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="space-y-1.5">
// //                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
// //                   <Languages className="w-4 h-4 text-blue-600" />
// //                   <span>Languages Known</span>
// //                 </div>
// //                 <div className="flex flex-wrap gap-1">
// //                   {tutor.languages.map((lang) => (
// //                     <span key={lang} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
// //                       {lang}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Pricing & CTA */}
// //             <div className="lg:col-span-3 flex flex-col items-center justify-center space-y-3 w-full">
// //               <div className="text-center">
// //                 <div className="text-2xl font-bold text-emerald-600">
// //                   {tutor.price.split("/")[0]} <span className="text-xs font-normal text-gray-500">/ month</span>
// //                 </div>
// //                 <p className="text-[11px] text-gray-400 font-medium">(Negotiable)</p>
// //               </div>

// //               <button className="w-full py-2.5 px-4 bg-[#ff4a22] hover:bg-[#e63e18] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition cursor-pointer">
// //                 <MessageCircle className="w-4 h-4 fill-white" />
// //                 <span>Contact Tutor</span>
// //               </button>

// //               <button className="w-full py-2.5 px-4 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition cursor-pointer">
// //                 <Calendar className="w-4 h-4" />
// //                 <span>Book a Free Demo</span>
// //               </button>

// //               <button className="text-xs font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1.5 pt-1 transition cursor-pointer">
// //                 <Heart className="w-4 h-4" />
// //                 <span>Save Tutor</span>
// //               </button>
// //             </div>

// //           </div>
// //         </div>

// //         {/* TABS */}
// //         <div className="flex items-center gap-8 border-b border-gray-200 text-sm font-medium px-2">
// //           <button
// //             onClick={() => setActiveTab("about")}
// //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// //               activeTab === "about"
// //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// //                 : "text-gray-500 hover:text-gray-700"
// //             }`}
// //           >
// //             <User className="w-4 h-4" /> About Me
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("experience")}
// //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// //               activeTab === "experience"
// //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// //                 : "text-gray-500 hover:text-gray-700"
// //             }`}
// //           >
// //             <Briefcase className="w-4 h-4" /> Experience
// //           </button>
// //           <button
// //             onClick={() => setActiveTab("reviews")}
// //             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
// //               activeTab === "reviews"
// //                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
// //                 : "text-gray-500 hover:text-gray-700"
// //             }`}
// //           >
// //             <Star className="w-4 h-4" /> Reviews ({tutor.reviewsCount})
// //           </button>
// //         </div>

// //         {/* MAIN BODY */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
// //           {/* Left Content Column */}
// //           <div className="lg:col-span-8 space-y-6">

// //             {/* TAB: ABOUT ME */}
// //             {activeTab === "about" && (
// //               <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
// //                 <h3 className="text-xl font-bold text-[#1e1b4b]">About the Tutor</h3>
                
// //                 <p className="text-[13.5px] leading-relaxed text-gray-700 font-normal">
// //                   {tutor.aboutIntro || `Dedicated educator with extensive experience teaching ${tutor.subjects.join(" & ")}.`}
// //                 </p>

// //                 {tutor.educationDetails && tutor.educationDetails.length > 0 && (
// //                   <div className="space-y-3.5 pt-2">
// //                     {tutor.educationDetails.map((detail, index) => (
// //                       <p key={index} className="text-[13.5px] text-gray-700 font-normal leading-relaxed">
// //                         {detail}
// //                       </p>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
// //             )}

// //             {/* TAB: EXPERIENCE */}
// //             {activeTab === "experience" && (
// //               <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
// //                 <h3 className="text-xl font-bold text-[#1e1b4b] mb-8">Teaching Experience</h3>

// //                 <div className="relative">
// //                   {/* Vertical Timeline Line */}
// //                   <div className="absolute left-[135px] top-6 bottom-8 w-[1.5px] bg-slate-200 hidden sm:block" />

// //                   <div className="space-y-8">
// //                     {experiences.map((exp, index) => (
// //                       <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 relative">
                        
// //                         {/* Period & Duration */}
// //                         <div className="sm:w-[110px] text-left sm:text-right flex-shrink-0">
// //                           <p className="text-xs font-semibold text-blue-600">{exp.period}</p>
// //                           <p className="text-xs text-gray-500 font-medium">{exp.duration}</p>
// //                         </div>

// //                         {/* Connector Bullet & Icon */}
// //                         <div className="flex items-center gap-4 flex-shrink-0 relative">
// //                           {/* Dot on line */}
// //                           <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-300 bg-white z-10 hidden sm:block -ml-[5px]" />
                          
// //                           {/* Circle Icon Container */}
// //                           <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center flex-shrink-0 shadow-sm">
// //                             {renderTimelineIcon(exp.icon)}
// //                           </div>
// //                         </div>

// //                         {/* Role and Organization */}
// //                         <div className="space-y-0.5">
// //                           <h4 className="text-base font-bold text-gray-900">{exp.role}</h4>
// //                           <p className="text-xs text-gray-600 font-normal">{exp.organization}</p>
// //                         </div>

// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* TAB: REVIEWS */}
// //             {activeTab === "reviews" && (
// //               <>
// //                 {/* Aggregate Rating Card */}
// //                 <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
// //                   <div className="sm:col-span-4 text-center sm:border-r border-gray-100 sm:pr-4">
// //                     <p className="text-xs font-semibold text-gray-600">Overall Rating</p>
// //                     <p className="text-4xl font-extrabold text-gray-900 mt-1">{tutor.rating}</p>
// //                     <div className="flex justify-center gap-1 my-1.5">
// //                       {[...Array(5)].map((_, i) => (
// //                         <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
// //                       ))}
// //                     </div>
// //                     <p className="text-xs text-gray-400">({tutor.reviewsCount} Reviews)</p>
// //                   </div>

// //                   <div className="sm:col-span-8 space-y-1.5 text-xs">
// //                     {ratingBreakdown.map((row) => (
// //                       <div key={row.stars} className="flex items-center gap-3">
// //                         <span className="w-12 text-gray-600">{row.label}</span>
// //                         <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
// //                           <div
// //                             className="bg-amber-400 h-full rounded-full transition-all duration-500"
// //                             style={{ width: `${row.percentage}%` }}
// //                           />
// //                         </div>
// //                         <span className="w-6 text-right text-gray-500 font-medium">
// //                           {row.count}
// //                         </span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Filter & Sort Bar */}
// //                 <div className="flex flex-wrap items-center justify-between gap-4 py-1 text-xs">
// //                   <div className="flex items-center gap-2">
// //                     <span className="text-gray-500 font-medium">Filter by</span>
// //                     <div className="relative">
// //                       <select
// //                         value={filterRating}
// //                         onChange={(e) => setFilterRating(e.target.value)}
// //                         className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none cursor-pointer"
// //                       >
// //                         <option>All Ratings</option>
// //                         <option>5 Stars</option>
// //                         <option>4 Stars</option>
// //                       </select>
// //                       <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center gap-2">
// //                     <span className="text-gray-500 font-medium">Sort by</span>
// //                     <div className="relative">
// //                       <select
// //                         value={sortBy}
// //                         onChange={(e) => setSortBy(e.target.value)}
// //                         className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none cursor-pointer"
// //                       >
// //                         <option>Newest First</option>
// //                         <option>Oldest First</option>
// //                       </select>
// //                       <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Reviews List */}
// //                 <div className="space-y-4">
// //                   {allReviewsData.slice(0, visibleReviewsCount).map((item) => (
// //                     <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
// //                       <div className="flex items-start justify-between">
// //                         <div className="flex items-center gap-3">
// //                           <div className={`w-9 h-9 rounded-full ${item.avatarBg} ${item.avatarColor} font-bold flex items-center justify-center text-sm`}>
// //                             {item.name.charAt(0)}
// //                           </div>
// //                           <div>
// //                             <h4 className="text-xs font-bold text-gray-900 leading-tight">{item.name}</h4>
// //                             <p className="text-[11px] text-gray-400">{item.grade} • {item.board}</p>
// //                           </div>
// //                         </div>
// //                         <span className="text-[11px] text-gray-400">{item.timeAgo}</span>
// //                       </div>

// //                       <div className="flex gap-0.5 my-2">
// //                         {[...Array(item.rating)].map((_, i) => (
// //                           <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
// //                         ))}
// //                       </div>

// //                       <p className="text-xs text-gray-600 leading-relaxed">{item.comment}</p>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Single Click View More / Show Less Button */}
// //                 {visibleReviewsCount < allReviewsData.length ? (
// //                   <div className="text-center pt-2">
// //                     <button 
// //                       onClick={() => setVisibleReviewsCount(allReviewsData.length)}
// //                       className="px-6 py-2.5 border border-blue-600 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-50 transition cursor-pointer shadow-sm"
// //                     >
// //                       View More Reviews
// //                     </button>
// //                   </div>
// //                 ) : (
// //                   <div className="text-center pt-2">
// //                     <button 
// //                       onClick={() => setVisibleReviewsCount(1)}
// //                       className="px-6 py-2.5 border border-slate-300 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 transition cursor-pointer shadow-sm"
// //                     >
// //                       Show Less Reviews
// //                     </button>
// //                   </div>
// //                 )}
// //               </>
// //             )}

// //           </div>

// //           {/* Right Sidebar: Book Demo Form */}
// //           <div className="lg:col-span-4 sticky top-6">
// //             <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
// //               <div className="flex items-center gap-2">
// //                 <Calendar className="w-5 h-5 text-blue-600" />
// //                 <h3 className="font-bold text-gray-900 text-sm">Book a Free Demo Class</h3>
// //               </div>

// //               <p className="text-xs text-gray-500 leading-relaxed">
// //                 Book a free demo class and experience {tutor.name.split(" ")[0]}'s unique teaching style.
// //                 Get personalized guidance with simple, practical, and easy-to-understand explanations.
// //                 Discover how difficult topics can become clear, engaging, and interesting.
// //               </p>

// //               <div className="space-y-3 pt-2">
// //                 <div className="relative">
// //                   <input
// //                     type="date"
// //                     defaultValue="2026-08-28"
// //                     className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-800 font-medium focus:outline-none cursor-pointer"
// //                   />
// //                 </div>

// //                 <div className="relative">
// //                   <select
// //                     value={selectedSlot}
// //                     onChange={(e) => setSelectedSlot(e.target.value)}
// //                     className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2.5 text-xs text-gray-800 font-medium focus:outline-none cursor-pointer"
// //                   >
// //                     <option>05:00 PM – 06:00 PM</option>
// //                     <option>06:00 PM – 07:00 PM</option>
// //                     <option>07:00 PM – 08:00 PM</option>
// //                   </select>
// //                   <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-3 pointer-events-none" />
// //                 </div>

// //                 <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded-lg transition shadow-sm shadow-blue-200 cursor-pointer">
// //                   Book Now
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //         </div>

// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import { useRoute, useLocation } from "wouter";
// import {
//   CheckCircle2,
//   Star,
//   User,
//   MapPin,
//   Landmark,
//   GraduationCap,
//   BookOpen,
//   Languages,
//   MessageCircle,
//   Calendar,
//   Heart,
//   Briefcase,
//   ChevronDown,
//   ArrowLeft,
//   X,
//   PlayCircle,
//   HelpCircle,
//   Users,
//   Target,
//   Clock
// } from "lucide-react";
// import { Header } from '../src/components/Header';

// interface ExperienceItem {
//   period: string;
//   duration: string;
//   role: string;
//   organization: string;
//   icon: "school" | "home" | "coaching" | "online";
// }

// interface Tutor {
//   id: number;
//   name: string;
//   image: string;
//   degree: string;
//   experience: string;
//   classes: string[];
//   subjects: string[];
//   boards: string[];
//   languages: string[];
//   location: string;
//   rating: number;
//   reviewsCount: number;
//   price: string;
//   aboutIntro?: string;
//   educationDetails?: string[];
//   experiences?: ExperienceItem[];
// }

// const defaultExperiences: ExperienceItem[] = [
//   {
//     period: "2021 – Present",
//     duration: "(3+ Years)",
//     role: "PGT Physics",
//     organization: "St. Xavier's Senior Secondary School, Jaipur",
//     icon: "school"
//   },
//   {
//     period: "2018 – 2021",
//     duration: "(3 Years)",
//     role: "Home Tutor",
//     organization: "Self-Employed, Jaipur",
//     icon: "home"
//   },
//   {
//     period: "2016 – 2018",
//     duration: "(2 Years)",
//     role: "Faculty – Physics",
//     organization: "Career Point Coaching Institute, Jaipur",
//     icon: "coaching"
//   },
//   {
//     period: "2014 – 2016",
//     duration: "(2 Years)",
//     role: "Subject Matter Expert",
//     organization: "Online Tutoring Platforms",
//     icon: "online"
//   }
// ];

// const tutorsDatabase: Record<string, Tutor> = {
//   "1": {
//     id: 1,
//     name: "Amit Sharma",
//     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
//     degree: "M.Sc. Physics, IIT Delhi",
//     experience: "8+ Years Experience",
//     classes: ["Class 11", "Class 12"],
//     subjects: ["Physics", "Mathematics"],
//     boards: ["CBSE", "RBSE", "ICSE", "NIOS", "State Board"],
//     languages: ["English", "Hindi"],
//     location: "Jaipur, Rajasthan",
//     rating: 4.9,
//     reviewsCount: 128,
//     price: "₹4,500 / month",
//     aboutIntro:
//       "Hello! I'm Amit Sharma, a passionate educator with 8+ years of teaching experience. I specialize in Physics and Mathematics for Classes 11 & 12. My teaching approach is concept-based learning with real-life examples and regular assessments to ensure better understanding and improvement.",
//     educationDetails: [
//       "I completed my M.Sc. in Physics from IIT Delhi (2016–2018) with 82%.",
//       "I did my B.Sc. (Hons.) Physics from University of Delhi (2013–2016) with 78%.",
//       "I qualified CBSE Class 12 in 2012 with 91% and Class 10 in 2010 with 93%."
//     ],
//     experiences: defaultExperiences
//   },
//   "2": {
//     id: 2,
//     name: "Pooja Yadav",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
//     degree: "M.Sc. Mathematics",
//     experience: "4+ Years Experience",
//     classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
//     subjects: ["Mathematics"],
//     boards: ["CBSE", "ICSE"],
//     languages: ["English", "Hindi"],
//     location: "Jaipur, Rajasthan",
//     rating: 4.6,
//     reviewsCount: 52,
//     price: "₹5,000 / month",
//     aboutIntro:
//       "Hello! I'm Pooja Yadav, a passionate mathematics mentor specializing in building foundational algebra, geometry, and calculus skills with customized doubt-clearing sessions.",
//     educationDetails: [
//       "I completed my M.Sc. in Mathematics with top honors.",
//       "I did my B.Sc. in Mathematics from University of Rajasthan."
//     ],
//     experiences: defaultExperiences
//   },
//   "3": {
//     id: 3,
//     name: "Rohit Verma",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
//     degree: "M.Sc. Mathematics",
//     experience: "7+ Years Experience",
//     classes: ["Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
//     subjects: ["Mathematics", "Physics"],
//     boards: ["CBSE", "ICSE"],
//     languages: ["English", "Hindi"],
//     location: "Jaipur, Rajasthan",
//     rating: 4.7,
//     reviewsCount: 80,
//     price: "₹6,000 / month",
//     aboutIntro:
//       "Hello! I'm Rohit Verma, an experienced instructor for secondary and senior secondary students with a strong focus on board preparation and speed mathematics.",
//     educationDetails: [
//       "M.Sc. Mathematics with distinction.",
//       "B.Sc. PCM from Rajasthan University."
//     ],
//     experiences: defaultExperiences
//   },
//   "4": {
//     id: 4,
//     name: "Neha Gupta",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
//     degree: "B.Tech, NIT Warangal",
//     experience: "6+ Years Experience",
//     classes: ["Class 6", "Class 8", "Class 10", "Class 12"],
//     subjects: ["Mathematics"],
//     boards: ["CBSE", "State Board"],
//     languages: ["English", "Hindi"],
//     location: "Jaipur, Rajasthan",
//     rating: 4.8,
//     reviewsCount: 96,
//     price: "₹6,500 / month",
//     aboutIntro:
//       "Hello! I'm Neha Gupta, an engineering graduate providing structured mathematics coaching designed to tackle school syllabus alongside Olympiad-level problems.",
//     educationDetails: [
//       "B.Tech from NIT Warangal.",
//       "Senior Secondary CBSE with 95% in Mathematics."
//     ],
//     experiences: defaultExperiences
//   },
//   "5": {
//     id: 5,
//     name: "Saurabh Singh",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
//     degree: "B.Tech, IIT Roorkee",
//     experience: "5+ Years Experience",
//     classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
//     subjects: ["Physics"],
//     boards: ["CBSE", "ICSE"],
//     languages: ["English", "Hindi"],
//     location: "Jaipur, Rajasthan",
//     rating: 4.9,
//     reviewsCount: 64,
//     price: "₹7,000 / month",
//     aboutIntro:
//       "Hello! I'm Saurabh Singh, an IIT Roorkee alumnus specializing in physics mechanics, electrodynamics, and modern physics with emphasis on numerical problem solving.",
//     educationDetails: [
//       "B.Tech from IIT Roorkee.",
//       "Top 1% in JEE Advanced Physics section."
//     ],
//     experiences: defaultExperiences
//   },
//   "6": {
//     id: 6,
//     name: "Ankit Kumar",
//     image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
//     degree: "M.Sc. Physics",
//     experience: "6+ Years Experience",
//     classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
//     subjects: ["Physics", "Mathematics"],
//     boards: ["CBSE", "State Board"],
//     languages: ["English", "Hindi"],
//     location: "Jaipur, Rajasthan",
//     rating: 4.6,
//     reviewsCount: 58,
//     price: "₹7,500 / month",
//     aboutIntro:
//       "Hello! I'm Ankit Kumar. I use a practical and interactive teaching approach tailored for students aiming to score top percentile in boards and school examinations.",
//     educationDetails: [
//       "M.Sc. in Physics.",
//       "B.Sc. in Science and Mathematics."
//     ],
//     experiences: defaultExperiences
//   }
// };

// const allReviewsData = [
//   {
//     id: "1",
//     name: "Rohit Verma",
//     grade: "Class 12",
//     board: "CBSE",
//     timeAgo: "2 days ago",
//     rating: 5,
//     comment:
//       "Sir explains concepts in a very clear and simple way. His problem solving techniques really helped me improve my marks in Physics.",
//     avatarBg: "bg-purple-100",
//     avatarColor: "text-purple-600"
//   },
//   {
//     id: "2",
//     name: "Ananya Sharma",
//     grade: "Class 11",
//     board: "RBSE",
//     timeAgo: "1 week ago",
//     rating: 5,
//     comment:
//       "Very knowledgeable and patient teacher. Doubt sessions are extremely helpful. Highly recommended!",
//     avatarBg: "bg-emerald-100",
//     avatarColor: "text-emerald-600"
//   },
//   {
//     id: "3",
//     name: "Kartik Mehta",
//     grade: "Class 12",
//     board: "CBSE",
//     timeAgo: "3 weeks ago",
//     rating: 5,
//     comment:
//       "Great teaching style and regular tests help a lot in preparation. Boosted my confidence in Board exams.",
//     avatarBg: "bg-blue-100",
//     avatarColor: "text-blue-600"
//   },
//   {
//     id: "4",
//     name: "Priyanka Sen",
//     grade: "Class 11",
//     board: "CBSE",
//     timeAgo: "1 month ago",
//     rating: 5,
//     comment:
//       "Numerical problem solving clarity is amazing. Sir provides very detailed notes and practice sheets.",
//     avatarBg: "bg-rose-100",
//     avatarColor: "text-rose-600"
//   },
//   {
//     id: "5",
//     name: "Vikas Choudhary",
//     grade: "Class 12",
//     board: "RBSE",
//     timeAgo: "1 month ago",
//     rating: 4,
//     comment:
//       "Very disciplined approach to teaching and timely completion of course syllabus.",
//     avatarBg: "bg-amber-100",
//     avatarColor: "text-amber-600"
//   },
//   {
//     id: "6",
//     name: "Deepak Rawat",
//     grade: "Class 12",
//     board: "ICSE",
//     timeAgo: "2 months ago",
//     rating: 5,
//     comment:
//       "Best tutor for board preparations. Weekly tests and mock question paper discussion really helped me score 95+.",
//     avatarBg: "bg-teal-100",
//     avatarColor: "text-teal-600"
//   }
// ];

// const ratingBreakdown = [
//   { stars: 5, label: "5 Stars", count: 110, percentage: 86 },
//   { stars: 4, label: "4 Stars", count: 14, percentage: 11 },
//   { stars: 3, label: "3 Stars", count: 3, percentage: 2.5 },
//   { stars: 2, label: "2 Stars", count: 1, percentage: 1 },
//   { stars: 1, label: "1 Star", count: 0, percentage: 0 }
// ];

// export default function ProfileLocalTutor() {
//   const [, params] = useRoute("/profilelocaltutor/:id");
//   const [, setLocation] = useLocation();

//   const tutorId = params?.id || "1";
//   const tutor = tutorsDatabase[tutorId] || tutorsDatabase["1"];

//   const [activeTab, setActiveTab] = useState<"about" | "experience" | "reviews">("about");
//   const [filterRating, setFilterRating] = useState("All Ratings");
//   const [sortBy, setSortBy] = useState("Newest First");
//   const [selectedSlot, setSelectedSlot] = useState("05:00 PM – 06:00 PM");
//   const [demoDate, setDemoDate] = useState("2025-05-24");
//   const [visibleReviewsCount, setVisibleReviewsCount] = useState(1);

//   const experiences = tutor.experiences || defaultExperiences;

//   const renderTimelineIcon = (iconType: string) => {
//     switch (iconType) {
//       case "school":
//       case "coaching":
//         return <Landmark className="w-6 h-6 text-blue-600" />;
//       case "home":
//         return <GraduationCap className="w-6 h-6 text-blue-600" />;
//       case "online":
//         return <BookOpen className="w-6 h-6 text-blue-600" />;
//       default:
//         return <Landmark className="w-6 h-6 text-blue-600" />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f8fafc] text-gray-800 antialiased p-4 md:p-8">
//       <Header />
//       <div className="max-w-6xl mx-auto space-y-6">

//         {/* TOP PROFILE CARD */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
//             {/* Avatar & Info */}
//             <div className="lg:col-span-4 flex gap-4">
//               <img
//                 src={tutor.image}
//                 alt={tutor.name}
//                 className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover shadow-inner flex-shrink-0"
//               />
//               <div className="space-y-1.5">
//                 <div className="flex items-center gap-1.5">
//                   <h1 className="text-xl font-bold text-gray-900">{tutor.name}</h1>
//                   <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-600 text-white" />
//                 </div>
//                 <p className="text-xs text-gray-600 font-medium">{tutor.degree}</p>

//                 <div className="flex items-center gap-1 text-xs text-gray-600 pt-0.5">
//                   <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
//                   <span className="font-semibold text-gray-900">{tutor.rating}</span>
//                   <span className="text-gray-500">({tutor.reviewsCount} Reviews)</span>
//                 </div>

//                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
//                   <User className="w-3.5 h-3.5 text-gray-400" />
//                   <span>{tutor.experience}</span>
//                 </div>

//                 <div className="flex items-center gap-1.5 text-xs text-gray-600">
//                   <MapPin className="w-3.5 h-3.5 text-gray-400" />
//                   <span>{tutor.location}</span>
//                 </div>

//                 <div className="flex flex-wrap gap-1.5 pt-1">
//                   {tutor.subjects.map((sub) => (
//                     <span key={sub} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
//                       {sub}
//                     </span>
//                   ))}
//                   <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
//                     {tutor.classes.slice(0, 2).join(" – ")}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Details Grid */}
//             <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs border-y lg:border-y-0 lg:border-x border-gray-100 py-4 lg:py-0 lg:px-6">
//               <div className="space-y-1.5">
//                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
//                   <Landmark className="w-4 h-4 text-blue-600" />
//                   <span>Board</span>
//                 </div>
//                 <div className="flex flex-wrap gap-1">
//                   {tutor.boards.map((board) => (
//                     <span key={board} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
//                       {board}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-1.5">
//                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
//                   <GraduationCap className="w-4 h-4 text-blue-600" />
//                   <span>Class</span>
//                 </div>
//                 <div className="flex flex-wrap gap-1">
//                   {tutor.classes.map((cls) => (
//                     <span key={cls} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
//                       {cls}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-1.5">
//                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
//                   <BookOpen className="w-4 h-4 text-blue-600" />
//                   <span>Subjects</span>
//                 </div>
//                 <div className="flex flex-wrap gap-1">
//                   {tutor.subjects.map((sub) => (
//                     <span key={sub} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
//                       {sub}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-1.5">
//                 <div className="flex items-center gap-1.5 text-gray-500 font-medium">
//                   <Languages className="w-4 h-4 text-blue-600" />
//                   <span>Languages Known</span>
//                 </div>
//                 <div className="flex flex-wrap gap-1">
//                   {tutor.languages.map((lang) => (
//                     <span key={lang} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
//                       {lang}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Pricing & CTA */}
//             <div className="lg:col-span-3 flex flex-col items-center justify-center space-y-3 w-full">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-emerald-600">
//                   {tutor.price.split("/")[0]} <span className="text-xs font-normal text-gray-500">/ month</span>
//                 </div>
//                 <p className="text-[11px] text-gray-400 font-medium">(Negotiable)</p>
//               </div>

//               <button className="w-full py-2.5 px-4 bg-[#ff4a22] hover:bg-[#e63e18] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition cursor-pointer">
//                 <MessageCircle className="w-4 h-4 fill-white" />
//                 <span>Contact Tutor</span>
//               </button>

//               <button className="w-full py-2.5 px-4 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition cursor-pointer">
//                 <Calendar className="w-4 h-4" />
//                 <span>Book a Free Demo</span>
//               </button>

//               <button className="text-xs font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1.5 pt-1 transition cursor-pointer">
//                 <Heart className="w-4 h-4" />
//                 <span>Save Tutor</span>
//               </button>
//             </div>

//           </div>
//         </div>

//         {/* TABS */}
//         <div className="flex items-center gap-8 border-b border-gray-200 text-sm font-medium px-2">
//           <button
//             onClick={() => setActiveTab("about")}
//             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
//               activeTab === "about"
//                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
//                 : "text-gray-500 hover:text-gray-700"
//             }`}
//           >
//             <User className="w-4 h-4" /> About Me
//           </button>
//           <button
//             onClick={() => setActiveTab("experience")}
//             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
//               activeTab === "experience"
//                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
//                 : "text-gray-500 hover:text-gray-700"
//             }`}
//           >
//             <Briefcase className="w-4 h-4" /> Experience
//           </button>
//           <button
//             onClick={() => setActiveTab("reviews")}
//             className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
//               activeTab === "reviews"
//                 ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
//                 : "text-gray-500 hover:text-gray-700"
//             }`}
//           >
//             <Star className="w-4 h-4" /> Reviews ({tutor.reviewsCount})
//           </button>
//         </div>

//         {/* MAIN BODY */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
//           {/* Left Content Column */}
//           <div className="lg:col-span-8 space-y-6">

//             {/* TAB: ABOUT ME */}
//             {activeTab === "about" && (
//               <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
//                 <h3 className="text-xl font-bold text-[#1e1b4b]">About the Tutor</h3>
                
//                 <p className="text-[13.5px] leading-relaxed text-gray-700 font-normal">
//                   {tutor.aboutIntro || `Dedicated educator with extensive experience teaching ${tutor.subjects.join(" & ")}.`}
//                 </p>

//                 {tutor.educationDetails && tutor.educationDetails.length > 0 && (
//                   <div className="space-y-3.5 pt-2">
//                     {tutor.educationDetails.map((detail, index) => (
//                       <p key={index} className="text-[13.5px] text-gray-700 font-normal leading-relaxed">
//                         {detail}
//                       </p>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* TAB: EXPERIENCE */}
//             {activeTab === "experience" && (
//               <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
//                 <h3 className="text-xl font-bold text-[#1e1b4b] mb-8">Teaching Experience</h3>

//                 <div className="relative">
//                   <div className="absolute left-[135px] top-6 bottom-8 w-[1.5px] bg-slate-200 hidden sm:block" />

//                   <div className="space-y-8">
//                     {experiences.map((exp, index) => (
//                       <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 relative">
//                         <div className="sm:w-[110px] text-left sm:text-right flex-shrink-0">
//                           <p className="text-xs font-semibold text-blue-600">{exp.period}</p>
//                           <p className="text-xs text-gray-500 font-medium">{exp.duration}</p>
//                         </div>

//                         <div className="flex items-center gap-4 flex-shrink-0 relative">
//                           <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-300 bg-white z-10 hidden sm:block -ml-[5px]" />
//                           <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center flex-shrink-0 shadow-sm">
//                             {renderTimelineIcon(exp.icon)}
//                           </div>
//                         </div>

//                         <div className="space-y-0.5">
//                           <h4 className="text-base font-bold text-gray-900">{exp.role}</h4>
//                           <p className="text-xs text-gray-600 font-normal">{exp.organization}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* TAB: REVIEWS */}
//             {activeTab === "reviews" && (
//               <>
//                 <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
//                   <div className="sm:col-span-4 text-center sm:border-r border-gray-100 sm:pr-4">
//                     <p className="text-xs font-semibold text-gray-600">Overall Rating</p>
//                     <p className="text-4xl font-extrabold text-gray-900 mt-1">{tutor.rating}</p>
//                     <div className="flex justify-center gap-1 my-1.5">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
//                       ))}
//                     </div>
//                     <p className="text-xs text-gray-400">({tutor.reviewsCount} Reviews)</p>
//                   </div>

//                   <div className="sm:col-span-8 space-y-1.5 text-xs">
//                     {ratingBreakdown.map((row) => (
//                       <div key={row.stars} className="flex items-center gap-3">
//                         <span className="w-12 text-gray-600">{row.label}</span>
//                         <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
//                           <div
//                             className="bg-amber-400 h-full rounded-full transition-all duration-500"
//                             style={{ width: `${row.percentage}%` }}
//                           />
//                         </div>
//                         <span className="w-6 text-right text-gray-500 font-medium">
//                           {row.count}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap items-center justify-between gap-4 py-1 text-xs">
//                   <div className="flex items-center gap-2">
//                     <span className="text-gray-500 font-medium">Filter by</span>
//                     <div className="relative">
//                       <select
//                         value={filterRating}
//                         onChange={(e) => setFilterRating(e.target.value)}
//                         className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none cursor-pointer"
//                       >
//                         <option>All Ratings</option>
//                         <option>5 Stars</option>
//                         <option>4 Stars</option>
//                       </select>
//                       <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <span className="text-gray-500 font-medium">Sort by</span>
//                     <div className="relative">
//                       <select
//                         value={sortBy}
//                         onChange={(e) => setSortBy(e.target.value)}
//                         className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none cursor-pointer"
//                       >
//                         <option>Newest First</option>
//                         <option>Oldest First</option>
//                       </select>
//                       <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   {allReviewsData.slice(0, visibleReviewsCount).map((item) => (
//                     <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
//                       <div className="flex items-start justify-between">
//                         <div className="flex items-center gap-3">
//                           <div className={`w-9 h-9 rounded-full ${item.avatarBg} ${item.avatarColor} font-bold flex items-center justify-center text-sm`}>
//                             {item.name.charAt(0)}
//                           </div>
//                           <div>
//                             <h4 className="text-xs font-bold text-gray-900 leading-tight">{item.name}</h4>
//                             <p className="text-[11px] text-gray-400">{item.grade} • {item.board}</p>
//                           </div>
//                         </div>
//                         <span className="text-[11px] text-gray-400">{item.timeAgo}</span>
//                       </div>

//                       <div className="flex gap-0.5 my-2">
//                         {[...Array(item.rating)].map((_, i) => (
//                           <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
//                         ))}
//                       </div>

//                       <p className="text-xs text-gray-600 leading-relaxed">{item.comment}</p>
//                     </div>
//                   ))}
//                 </div>

//                 {visibleReviewsCount < allReviewsData.length ? (
//                   <div className="text-center pt-2">
//                     <button 
//                       onClick={() => setVisibleReviewsCount(allReviewsData.length)}
//                       className="px-6 py-2.5 border border-blue-600 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-50 transition cursor-pointer shadow-sm"
//                     >
//                       View More Reviews
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="text-center pt-2">
//                     <button 
//                       onClick={() => setVisibleReviewsCount(1)}
//                       className="px-6 py-2.5 border border-slate-300 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 transition cursor-pointer shadow-sm"
//                     >
//                       Show Less Reviews
//                     </button>
//                   </div>
//                 )}
//               </>
//             )}

//           </div>

//           {/* Right Sidebar: Book Demo Form (Screenshot Matched) */}
//           <div className="lg:col-span-4 sticky top-6">
//             <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-6">
              
//               {/* Header with Title and Close Button */}
//               <div className="flex items-start justify-between">
//                 <div>
//                   <h3 className="text-lg font-bold text-[#1e1b4b]">Book a Free Demo Class</h3>
//                   <p className="text-xs text-gray-600 mt-1 font-normal leading-relaxed">
//                     Experience my teaching style with a free demo class. No commitment!
//                   </p>
//                 </div>
//                 <button className="text-gray-400 hover:text-gray-600 p-1 -mr-1 -mt-1 cursor-pointer">
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* Feature Points List */}
//               <div className="space-y-4">
                
//                 {/* Point 1 */}
//                 <div className="flex items-start gap-3.5">
//                   <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//                     <PlayCircle className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-xs font-bold text-gray-900 leading-tight">Understand My Teaching</h4>
//                     <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">
//                       See how I explain concepts in a simple and effective way.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Point 2 */}
//                 <div className="flex items-start gap-3.5">
//                   <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
//                     <HelpCircle className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-xs font-bold text-gray-900 leading-tight">Clarify Your Doubts</h4>
//                     <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">
//                       Get your questions answered clearly in real time.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Point 3 */}
//                 <div className="flex items-start gap-3.5">
//                   <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
//                     <Users className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-xs font-bold text-gray-900 leading-tight">Personalized Attention</h4>
//                     <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">
//                       Experience 1-to-1 guidance tailored to your needs.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Point 4 */}
//                 <div className="flex items-start gap-3.5">
//                   <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
//                     <Calendar className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-xs font-bold text-gray-900 leading-tight">Interactive Session</h4>
//                     <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">
//                       Live demo with real examples and doubt solving.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Point 5 */}
//                 <div className="flex items-start gap-3.5">
//                   <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center flex-shrink-0">
//                     <Target className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="text-xs font-bold text-gray-900 leading-tight">Plan Your Next Step</h4>
//                     <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">
//                       Get suggestions and a study plan for better performance.
//                     </p>
//                   </div>
//                 </div>

//               </div>

//               {/* Booking Inputs */}
//               <div className="space-y-3 pt-2">
                
//                 {/* Date Input */}
//                 <div className="relative flex items-center">
//                   <Calendar className="w-4 h-4 text-blue-600 absolute left-3.5 pointer-events-none" />
//                   <input
//                     type="date"
//                     value={demoDate}
//                     onChange={(e) => setDemoDate(e.target.value)}
//                     className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-xs text-gray-800 font-semibold focus:outline-none focus:border-blue-500 cursor-pointer"
//                   />
//                   <Calendar className="w-4 h-4 text-blue-600 absolute right-3.5 pointer-events-none" />
//                 </div>

//                 {/* Time Slot Select */}
//                 <div className="relative flex items-center">
//                   <Clock className="w-4 h-4 text-blue-600 absolute left-3.5 pointer-events-none" />
//                   <select
//                     value={selectedSlot}
//                     onChange={(e) => setSelectedSlot(e.target.value)}
//                     className="w-full appearance-none bg-white border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-xs text-gray-800 font-semibold focus:outline-none focus:border-blue-500 cursor-pointer"
//                   >
//                     <option value="05:00 PM – 06:00 PM">05:00 PM – 06:00 PM</option>
//                     <option value="06:00 PM – 07:00 PM">06:00 PM – 07:00 PM</option>
//                     <option value="07:00 PM – 08:00 PM">07:00 PM – 08:00 PM</option>
//                   </select>
//                   <ChevronDown className="w-4 h-4 text-blue-600 absolute right-3.5 pointer-events-none" />
//                 </div>

//                 {/* Book Demo Button */}
//                 <button className="w-full py-3 bg-[#0047ff] hover:bg-[#003be0] text-white font-semibold text-xs rounded-xl transition shadow-md shadow-blue-200 cursor-pointer mt-2">
//                   Book Demo Class
//                 </button>
//               </div>

//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { useRoute, useLocation } from "wouter";
import {
  CheckCircle2,
  Star,
  User,
  MapPin,
  Landmark,
  GraduationCap,
  BookOpen,
  Languages,
  MessageCircle,
  Calendar,
  Heart,
  Briefcase,
  ChevronDown,
  ArrowLeft,
  X,
  PlayCircle,
  HelpCircle,
  Users,
  Target,
  Clock
} from "lucide-react";
import { Header } from '../src/components/Header';

interface ExperienceItem {
  period: string;
  duration: string;
  role: string;
  organization: string;
  icon: "school" | "home" | "coaching" | "online";
}

interface Tutor {
  id: number;
  name: string;
  image: string;
  degree: string;
  experience: string;
  classes: string[];
  subjects: string[];
  boards: string[];
  languages: string[];
  location: string;
  rating: number;
  reviewsCount: number;
  price: string;
  aboutIntro?: string;
  educationDetails?: string[];
  experiences?: ExperienceItem[];
}

const defaultExperiences: ExperienceItem[] = [
  {
    period: "2021 – Present",
    duration: "(3+ Years)",
    role: "PGT Physics",
    organization: "St. Xavier's Senior Secondary School, Jaipur",
    icon: "school"
  },
  {
    period: "2018 – 2021",
    duration: "(3 Years)",
    role: "Home Tutor",
    organization: "Self-Employed, Jaipur",
    icon: "home"
  },
  {
    period: "2016 – 2018",
    duration: "(2 Years)",
    role: "Faculty – Physics",
    organization: "Career Point Coaching Institute, Jaipur",
    icon: "coaching"
  },
  {
    period: "2014 – 2016",
    duration: "(2 Years)",
    role: "Subject Matter Expert",
    organization: "Online Tutoring Platforms",
    icon: "online"
  }
];

const tutorsDatabase: Record<string, Tutor> = {
  "1": {
    id: 1,
    name: "Amit Sharma",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    degree: "M.Sc. Physics, IIT Delhi",
    experience: "8+ Years Experience",
    classes: ["Class 11", "Class 12"],
    subjects: ["Physics", "Mathematics"],
    boards: ["CBSE", "RBSE", "ICSE", "NIOS", "State Board"],
    languages: ["English", "Hindi"],
    location: "Jaipur, Rajasthan",
    rating: 4.9,
    reviewsCount: 128,
    price: "₹4,500 / month",
    aboutIntro:
      "Hello! I'm Amit Sharma, a passionate educator with 8+ years of teaching experience. I specialize in Physics and Mathematics for Classes 11 & 12. My teaching approach is concept-based learning with real-life examples and regular assessments to ensure better understanding and improvement.",
    educationDetails: [
      "I completed my M.Sc. in Physics from IIT Delhi (2016–2018) with 82%.",
      "I did my B.Sc. (Hons.) Physics from University of Delhi (2013–2016) with 78%.",
      "I qualified CBSE Class 12 in 2012 with 91% and Class 10 in 2010 with 93%."
    ],
    experiences: defaultExperiences
  },
  "2": {
    id: 2,
    name: "Pooja Yadav",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    degree: "M.Sc. Mathematics",
    experience: "4+ Years Experience",
    classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
    subjects: ["Mathematics"],
    boards: ["CBSE", "ICSE"],
    languages: ["English", "Hindi"],
    location: "Jaipur, Rajasthan",
    rating: 4.6,
    reviewsCount: 52,
    price: "₹5,000 / month",
    aboutIntro:
      "Hello! I'm Pooja Yadav, a passionate mathematics mentor specializing in building foundational algebra, geometry, and calculus skills with customized doubt-clearing sessions.",
    educationDetails: [
      "I completed my M.Sc. in Mathematics with top honors.",
      "I did my B.Sc. in Mathematics from University of Rajasthan."
    ],
    experiences: defaultExperiences
  },
  "3": {
    id: 3,
    name: "Rohit Verma",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    degree: "M.Sc. Mathematics",
    experience: "7+ Years Experience",
    classes: ["Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
    subjects: ["Mathematics", "Physics"],
    boards: ["CBSE", "ICSE"],
    languages: ["English", "Hindi"],
    location: "Jaipur, Rajasthan",
    rating: 4.7,
    reviewsCount: 80,
    price: "₹6,000 / month",
    aboutIntro:
      "Hello! I'm Rohit Verma, an experienced instructor for secondary and senior secondary students with a strong focus on board preparation and speed mathematics.",
    educationDetails: [
      "M.Sc. Mathematics with distinction.",
      "B.Sc. PCM from Rajasthan University."
    ],
    experiences: defaultExperiences
  },
  "4": {
    id: 4,
    name: "Neha Gupta",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    degree: "B.Tech, NIT Warangal",
    experience: "6+ Years Experience",
    classes: ["Class 6", "Class 8", "Class 10", "Class 12"],
    subjects: ["Mathematics"],
    boards: ["CBSE", "State Board"],
    languages: ["English", "Hindi"],
    location: "Jaipur, Rajasthan",
    rating: 4.8,
    reviewsCount: 96,
    price: "₹6,500 / month",
    aboutIntro:
      "Hello! I'm Neha Gupta, an engineering graduate providing structured mathematics coaching designed to tackle school syllabus alongside Olympiad-level problems.",
    educationDetails: [
      "B.Tech from NIT Warangal.",
      "Senior Secondary CBSE with 95% in Mathematics."
    ],
    experiences: defaultExperiences
  },
  "5": {
    id: 5,
    name: "Saurabh Singh",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    degree: "B.Tech, IIT Roorkee",
    experience: "5+ Years Experience",
    classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
    subjects: ["Physics"],
    boards: ["CBSE", "ICSE"],
    languages: ["English", "Hindi"],
    location: "Jaipur, Rajasthan",
    rating: 4.9,
    reviewsCount: 64,
    price: "₹7,000 / month",
    aboutIntro:
      "Hello! I'm Saurabh Singh, an IIT Roorkee alumnus specializing in physics mechanics, electrodynamics, and modern physics with emphasis on numerical problem solving.",
    educationDetails: [
      "B.Tech from IIT Roorkee.",
      "Top 1% in JEE Advanced Physics section."
    ],
    experiences: defaultExperiences
  },
  "6": {
    id: 6,
    name: "Ankit Kumar",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80",
    degree: "M.Sc. Physics",
    experience: "6+ Years Experience",
    classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"],
    subjects: ["Physics", "Mathematics"],
    boards: ["CBSE", "State Board"],
    languages: ["English", "Hindi"],
    location: "Jaipur, Rajasthan",
    rating: 4.6,
    reviewsCount: 58,
    price: "₹7,500 / month",
    aboutIntro:
      "Hello! I'm Ankit Kumar. I use a practical and interactive teaching approach tailored for students aiming to score top percentile in boards and school examinations.",
    educationDetails: [
      "M.Sc. in Physics.",
      "B.Sc. in Science and Mathematics."
    ],
    experiences: defaultExperiences
  }
};

const allReviewsData = [
  {
    id: "1",
    name: "Rohit Verma",
    grade: "Class 12",
    board: "CBSE",
    timeAgo: "2 days ago",
    rating: 5,
    comment:
      "Sir explains concepts in a very clear and simple way. His problem solving techniques really helped me improve my marks in Physics.",
    avatarBg: "bg-purple-100",
    avatarColor: "text-purple-600"
  },
  {
    id: "2",
    name: "Ananya Sharma",
    grade: "Class 11",
    board: "RBSE",
    timeAgo: "1 week ago",
    rating: 5,
    comment:
      "Very knowledgeable and patient teacher. Doubt sessions are extremely helpful. Highly recommended!",
    avatarBg: "bg-emerald-100",
    avatarColor: "text-emerald-600"
  },
  {
    id: "3",
    name: "Kartik Mehta",
    grade: "Class 12",
    board: "CBSE",
    timeAgo: "3 weeks ago",
    rating: 5,
    comment:
      "Great teaching style and regular tests help a lot in preparation. Boosted my confidence in Board exams.",
    avatarBg: "bg-blue-100",
    avatarColor: "text-blue-600"
  },
  {
    id: "4",
    name: "Priyanka Sen",
    grade: "Class 11",
    board: "CBSE",
    timeAgo: "1 month ago",
    rating: 5,
    comment:
      "Numerical problem solving clarity is amazing. Sir provides very detailed notes and practice sheets.",
    avatarBg: "bg-rose-100",
    avatarColor: "text-rose-600"
  },
  {
    id: "5",
    name: "Vikas Choudhary",
    grade: "Class 12",
    board: "RBSE",
    timeAgo: "1 month ago",
    rating: 4,
    comment:
      "Very disciplined approach to teaching and timely completion of course syllabus.",
    avatarBg: "bg-amber-100",
    avatarColor: "text-amber-600"
  },
  {
    id: "6",
    name: "Deepak Rawat",
    grade: "Class 12",
    board: "ICSE",
    timeAgo: "2 months ago",
    rating: 5,
    comment:
      "Best tutor for board preparations. Weekly tests and mock question paper discussion really helped me score 95+.",
    avatarBg: "bg-teal-100",
    avatarColor: "text-teal-600"
  }
];

const ratingBreakdown = [
  { stars: 5, label: "5 Stars", count: 110, percentage: 86 },
  { stars: 4, label: "4 Stars", count: 14, percentage: 11 },
  { stars: 3, label: "3 Stars", count: 3, percentage: 2.5 },
  { stars: 2, label: "2 Stars", count: 1, percentage: 1 },
  { stars: 1, label: "1 Star", count: 0, percentage: 0 }
];

export default function ProfileLocalTutor() {
  const [, params] = useRoute("/profilelocaltutor/:id");
  const [, setLocation] = useLocation();

  const tutorId = params?.id || "1";
  const tutor = tutorsDatabase[tutorId] || tutorsDatabase["1"];

  const [activeTab, setActiveTab] = useState<"about" | "experience" | "reviews">("about");
  const [filterRating, setFilterRating] = useState("All Ratings");
  const [sortBy, setSortBy] = useState("Newest First");
  const [selectedSlot, setSelectedSlot] = useState("05:00 PM – 06:00 PM");
  const [demoDate, setDemoDate] = useState("2025-05-24");
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(2);

  const experiences = tutor.experiences || defaultExperiences;

  const renderTimelineIcon = (iconType: string) => {
    switch (iconType) {
      case "school":
      case "coaching":
        return <Landmark className="w-6 h-6 text-blue-600" />;
      case "home":
        return <GraduationCap className="w-6 h-6 text-blue-600" />;
      case "online":
        return <BookOpen className="w-6 h-6 text-blue-600" />;
      default:
        return <Landmark className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800 antialiased p-4 md:p-8">
      <Header />
      <div className="max-w-6xl mx-auto space-y-6">

        {/* TOP PROFILE CARD */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Avatar & Info */}
            <div className="lg:col-span-4 flex gap-4">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover shadow-inner flex-shrink-0"
              />
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <h1 className="text-xl font-bold text-gray-900">{tutor.name}</h1>
                  <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-600 text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium">{tutor.degree}</p>

                <div className="flex items-center gap-1 text-xs text-gray-600 pt-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-gray-900">{tutor.rating}</span>
                  <span className="text-gray-500">({tutor.reviewsCount} Reviews)</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <User className="w-3.5 h-3.5 text-gray-400" />
                  <span>{tutor.experience}</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <span>{tutor.location}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {tutor.subjects.map((sub) => (
                    <span key={sub} className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
                      {sub}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">
                    {tutor.classes.slice(0, 2).join(" – ")}
                  </span>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs border-y lg:border-y-0 lg:border-x border-gray-100 py-4 lg:py-0 lg:px-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-gray-500 font-medium">
                  <Landmark className="w-4 h-4 text-blue-600" />
                  <span>Board</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {tutor.boards.map((board) => (
                    <span key={board} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
                      {board}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-gray-500 font-medium">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>Class</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {tutor.classes.map((cls) => (
                    <span key={cls} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
                      {cls}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-gray-500 font-medium">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Subjects</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {tutor.subjects.map((sub) => (
                    <span key={sub} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-gray-500 font-medium">
                  <Languages className="w-4 h-4 text-blue-600" />
                  <span>Languages Known</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {tutor.languages.map((lang) => (
                    <span key={lang} className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-[11px]">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center space-y-3 w-full">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">
                  {tutor.price.split("/")[0]} <span className="text-xs font-normal text-gray-500">/ month</span>
                </div>
                <p className="text-[11px] text-gray-400 font-medium">(Negotiable)</p>
              </div>

              <button className="w-full py-2.5 px-4 bg-[#ff4a22] hover:bg-[#e63e18] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition cursor-pointer">
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Contact Tutor</span>
              </button>

              <button className="w-full py-2.5 px-4 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition cursor-pointer">
                <Calendar className="w-4 h-4" />
                <span>Book a Free Demo</span>
              </button>

              <button className="text-xs font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1.5 pt-1 transition cursor-pointer">
                <Heart className="w-4 h-4" />
                <span>Save Tutor</span>
              </button>
            </div>

          </div>
        </div>

        {/* TABS (Centered) */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 border-b border-gray-200 text-sm font-medium px-2">
          <button
            onClick={() => setActiveTab("about")}
            className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
              activeTab === "about"
                ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <User className="w-4 h-4" /> About Me
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
              activeTab === "experience"
                ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Briefcase className="w-4 h-4" /> Experience
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-3 flex items-center gap-2 transition cursor-pointer ${
              activeTab === "reviews"
                ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Star className="w-4 h-4" /> Reviews ({tutor.reviewsCount})
          </button>
        </div>

        {/* MAIN BODY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Content Column */}
          <div className="lg:col-span-8 space-y-6">

            {/* TAB: ABOUT ME */}
            {activeTab === "about" && (
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-[#1e1b4b]">About the Tutor</h3>
                
                <p className="text-[13.5px] leading-relaxed text-gray-700 font-normal">
                  {tutor.aboutIntro || `Dedicated educator with extensive experience teaching ${tutor.subjects.join(" & ")}.`}
                </p>

                {tutor.educationDetails && tutor.educationDetails.length > 0 && (
                  <div className="space-y-3.5 pt-2">
                    {tutor.educationDetails.map((detail, index) => (
                      <p key={index} className="text-[13.5px] text-gray-700 font-normal leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB: EXPERIENCE */}
            {activeTab === "experience" && (
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-8">Teaching Experience</h3>

                <div className="relative">
                  <div className="absolute left-[135px] top-6 bottom-8 w-[1.5px] bg-slate-200 hidden sm:block" />

                  <div className="space-y-8">
                    {experiences.map((exp, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 relative">
                        <div className="sm:w-[110px] text-left sm:text-right flex-shrink-0">
                          <p className="text-xs font-semibold text-blue-600">{exp.period}</p>
                          <p className="text-xs text-gray-500 font-medium">{exp.duration}</p>
                        </div>

                        <div className="flex items-center gap-4 flex-shrink-0 relative">
                          <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-300 bg-white z-10 hidden sm:block -ml-[5px]" />
                          <div className="w-14 h-14 rounded-full bg-blue-50/70 border border-blue-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                            {renderTimelineIcon(exp.icon)}
                          </div>
                        </div>

                        <div className="space-y-0.5">
                          <h4 className="text-base font-bold text-gray-900">{exp.role}</h4>
                          <p className="text-xs text-gray-600 font-normal">{exp.organization}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: REVIEWS */}
            {activeTab === "reviews" && (
              <>
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-4 text-center sm:border-r border-gray-100 sm:pr-4">
                    <p className="text-xs font-semibold text-gray-600">Overall Rating</p>
                    <p className="text-4xl font-extrabold text-gray-900 mt-1">{tutor.rating}</p>
                    <div className="flex justify-center gap-1 my-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">({tutor.reviewsCount} Reviews)</p>
                  </div>

                  <div className="sm:col-span-8 space-y-1.5 text-xs">
                    {ratingBreakdown.map((row) => (
                      <div key={row.stars} className="flex items-center gap-3">
                        <span className="w-12 text-gray-600">{row.label}</span>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="bg-amber-400 h-full rounded-full transition-all duration-500"
                            style={{ width: `${row.percentage}%` }}
                          />
                        </div>
                        <span className="w-6 text-right text-gray-500 font-medium">
                          {row.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 py-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 font-medium">Filter by</span>
                    <div className="relative">
                      <select
                        value={filterRating}
                        onChange={(e) => setFilterRating(e.target.value)}
                        className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none cursor-pointer"
                      >
                        <option>All Ratings</option>
                        <option>5 Stars</option>
                        <option>4 Stars</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 font-medium">Sort by</span>
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 pr-7 text-gray-700 font-medium focus:outline-none cursor-pointer"
                      >
                        <option>Newest First</option>
                        <option>Oldest First</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2 top-2.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {allReviewsData.slice(0, visibleReviewsCount).map((item) => (
                    <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full ${item.avatarBg} ${item.avatarColor} font-bold flex items-center justify-center text-sm`}>
                            {item.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-900 leading-tight">{item.name}</h4>
                            <p className="text-[11px] text-gray-400">{item.grade} • {item.board}</p>
                          </div>
                        </div>
                        <span className="text-[11px] text-gray-400">{item.timeAgo}</span>
                      </div>

                      <div className="flex gap-0.5 my-2">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      <p className="text-xs text-gray-600 leading-relaxed">{item.comment}</p>
                    </div>
                  ))}
                </div>

                {/* View More / Show Less Reviews (Default 2 items) */}
                {visibleReviewsCount < allReviewsData.length ? (
                  <div className="text-center pt-2">
                    <button 
                      onClick={() => setVisibleReviewsCount(allReviewsData.length)}
                      className="px-6 py-2.5 border border-blue-600 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-50 transition cursor-pointer shadow-sm"
                    >
                      View More Reviews
                    </button>
                  </div>
                ) : (
                  <div className="text-center pt-2">
                    <button 
                      onClick={() => setVisibleReviewsCount(2)}
                      className="px-6 py-2.5 border border-slate-300 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 transition cursor-pointer shadow-sm"
                    >
                      Show Less Reviews
                    </button>
                  </div>
                )}
              </>
            )}

          </div>

          {/* Right Sidebar: Book Demo Form */}
          <div className="lg:col-span-4 sticky top-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-6">
              
              {/* Header with Title and Close Button */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#1e1b4b]">Book a Free Demo Class</h3>
                  <p className="text-xs text-gray-600 mt-1 font-normal leading-relaxed">
                    Experience my teaching style with a free demo class. No commitment!
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-1 -mr-1 -mt-1 cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Feature Points List */}
              <div className="space-y-4">
                
                {/* Point 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <PlayCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 leading-tight">Understand My Teaching</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">
                      See how I explain concepts in a simple and effective way.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 leading-tight">Clarify Your Doubts</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">
                      Get your questions answered clearly in real time.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 leading-tight">Personalized Attention</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">
                      Experience 1-to-1 guidance tailored to your needs.
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 leading-tight">Interactive Session</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">
                      Live demo with real examples and doubt solving.
                    </p>
                  </div>
                </div>

                {/* Point 5 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 leading-tight">Plan Your Next Step</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-normal">
                      Get suggestions and a study plan for better performance.
                    </p>
                  </div>
                </div>

              </div>

              {/* Booking Inputs */}
              <div className="space-y-3 pt-2">
                
                {/* Date Input */}
                <div className="relative flex items-center">
                  <Calendar className="w-4 h-4 text-blue-600 absolute left-3.5 pointer-events-none" />
                  <input
                    type="date"
                    value={demoDate}
                    onChange={(e) => setDemoDate(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-xs text-gray-800 font-semibold focus:outline-none focus:border-blue-500 cursor-pointer"
                  />
                  <Calendar className="w-4 h-4 text-blue-600 absolute right-3.5 pointer-events-none" />
                </div>

                {/* Time Slot Select */}
                <div className="relative flex items-center">
                  <Clock className="w-4 h-4 text-blue-600 absolute left-3.5 pointer-events-none" />
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full appearance-none bg-white border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-xs text-gray-800 font-semibold focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="05:00 PM – 06:00 PM">05:00 PM – 06:00 PM</option>
                    <option value="06:00 PM – 07:00 PM">06:00 PM – 07:00 PM</option>
                    <option value="07:00 PM – 08:00 PM">07:00 PM – 08:00 PM</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-blue-600 absolute right-3.5 pointer-events-none" />
                </div>

                {/* Book Demo Button */}
                <button className="w-full py-3 bg-[#0047ff] hover:bg-[#003be0] text-white font-semibold text-xs rounded-xl transition shadow-md shadow-blue-200 cursor-pointer mt-2">
                  Book Demo Class
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}