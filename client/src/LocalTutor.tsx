// import React, { useState } from "react";
// import {
//   MapPin,
//   ChevronDown,
//   GraduationCap,
//   Briefcase,
//   BookOpen,
//   Atom,
//   Building2,
//   Star,
//   CheckCircle2,
//   Home,
//   Users,
//   Target,
//   ShieldCheck,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// import { Header } from '../src/components/Header';
// interface Tutor {
//   id: number;
//   name: string;
//   verified: boolean;
//   degree: string;
//   experience: string;
//   classes: string;
//   subjects: string;
//   boards: string;
//   rating: number;
//   reviewsCount: number;
//   price: string;
//   avatar: string;
// }

// const mockTutors: Tutor[] = [
//   {
//     id: 1,
//     name: "Amit Sharma",
//     verified: true,
//     degree: "M.Sc. Physics, IIT Delhi",
//     experience: "8+ Years Experience",
//     classes: "Class 11 - 12",
//     subjects: "Physics, Mathematics",
//     boards: "CBSE | ICSE",
//     rating: 4.9,
//     reviewsCount: 128,
//     price: "₹4,500 / month",
//     avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
//   },
//   {
//     id: 2,
//     name: "Pooja Yadav",
//     verified: true,
//     degree: "M.Sc. Mathematics",
//     experience: "4+ Years Experience",
//     classes: "Class 6 - 12",
//     subjects: "Mathematics",
//     boards: "CBSE | ICSE",
//     rating: 4.6,
//     reviewsCount: 52,
//     price: "₹5,000 / month",
//     avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
//   },
//   {
//     id: 3,
//     name: "Rohit Verma",
//     verified: true,
//     degree: "M.Sc. Mathematics",
//     experience: "7+ Years Experience",
//     classes: "Class 7 - 12",
//     subjects: "Mathematics, Physics",
//     boards: "CBSE | ICSE",
//     rating: 4.7,
//     reviewsCount: 80,
//     price: "₹6,000 / month",
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
//   },
//   {
//     id: 4,
//     name: "Neha Gupta",
//     verified: true,
//     degree: "B.Tech, NIT Warangal",
//     experience: "6+ Years Experience",
//     classes: "Class 6 - 12",
//     subjects: "Mathematics",
//     boards: "CBSE | State Board",
//     rating: 4.8,
//     reviewsCount: 96,
//     price: "₹6,500 / month",
//     avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
//   },
//   {
//     id: 5,
//     name: "Saurabh Singh",
//     verified: true,
//     degree: "B.Tech, IIT Roorkee",
//     experience: "5+ Years Experience",
//     classes: "Class 8 - 12",
//     subjects: "Physics",
//     boards: "CBSE | ICSE",
//     rating: 4.9,
//     reviewsCount: 64,
//     price: "₹7,000 / month",
//     avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
//   },
//   {
//     id: 6,
//     name: "Ankit Kumar",
//     verified: true,
//     degree: "M.Sc. Physics",
//     experience: "6+ Years Experience",
//     classes: "Class 8 - 12",
//     subjects: "Physics, Mathematics",
//     boards: "CBSE | State Board",
//     rating: 4.6,
//     reviewsCount: 58,
//     price: "₹7,500 / month",
//     avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&auto=format&fit=crop&q=80",
//   },
// ];

// export default function TutorsListingPage() {
//   const [currentPage, setCurrentPage] = useState(1);

//   return (
//     <div className="min-h-screen bg-[#f8fafc] text-slate-800 antialiased">
//       <Header/>
//       <div className="w-full bg-[#fdf8f4] border-b border-orange-100/60 px-6 py-6 lg:px-12 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
//           {/* Header Left */}
//           <div className="shrink-0 text-center lg:text-left">
//             <h1 className="text-2xl lg:text-3xl font-bold text-[#1e293b]">
//               Tutors Near You
//             </h1>
//             <p className="text-sm text-slate-500 mt-1">
//               We found 18 tutors for you
//             </p>
//           </div>

//           {/* Feature Badges */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 flex-1 max-w-4xl">
//             <div className="flex items-start gap-2.5">
//               <div className="w-9 h-9 rounded-full bg-[#ea580c] flex items-center justify-center text-white shrink-0 shadow-sm">
//                 <Home className="w-4 h-4" />
//               </div>
//               <div className="text-xs">
//                 <p className="font-semibold text-slate-800 leading-tight">Personalized</p>
//                 <p className="text-slate-500 text-[11px] leading-tight">Home Tuition</p>
//                 <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
//                   One-to-one attention for better understanding and strong concepts.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-2.5">
//               <div className="w-9 h-9 rounded-full bg-[#16a34a] flex items-center justify-center text-white shrink-0 shadow-sm">
//                 <Users className="w-4 h-4" />
//               </div>
//               <div className="text-xs">
//                 <p className="font-semibold text-slate-800 leading-tight">Experienced Mentors</p>
//                 <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
//                   Learn from qualified & verified mentors with years of teaching experience.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-2.5">
//               <div className="w-9 h-9 rounded-full bg-[#7c3aed] flex items-center justify-center text-white shrink-0 shadow-sm">
//                 <Target className="w-4 h-4" />
//               </div>
//               <div className="text-xs">
//                 <p className="font-semibold text-slate-800 leading-tight">Better Results</p>
//                 <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
//                   Regular assessments, concept clarity & doubt clearing to help you score better.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-2.5">
//               <div className="w-9 h-9 rounded-full bg-[#2563eb] flex items-center justify-center text-white shrink-0 shadow-sm">
//                 <ShieldCheck className="w-4 h-4" />
//               </div>
//               <div className="text-xs">
//                 <p className="font-semibold text-slate-800 leading-tight">Safe & Trusted</p>
//                 <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
//                   Background verified tutors for a safe and reliable learning environment.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-2.5">
//               <div className="w-9 h-9 rounded-full bg-[#db2777] flex items-center justify-center text-white shrink-0 shadow-sm">
//                 <Star className="w-4 h-4 fill-white" />
//               </div>
//               <div className="text-xs">
//                 <p className="font-semibold text-slate-800 leading-tight">Flexible & Convenient</p>
//                 <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
//                   Choose timing, days & mode of learning as per your convenience.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
//         {/* Filters Bar */}
//         <div className="bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-slate-100 p-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
//             {/* PIN Code */}
//             <div className="flex items-center gap-3 border border-slate-200 rounded-lg px-3 py-2 bg-slate-50/40 focus-within:border-blue-500 focus-within:bg-white transition-all">
//               <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
//                 <MapPin className="w-4 h-4" />
//               </div>
//               <div className="min-w-0 flex-1">
//                 <p className="text-[11px] font-medium text-slate-400 leading-tight">PIN Code</p>
//                 <input
//                   type="text"
//                   defaultValue="110044"
//                   className="w-full text-xs font-semibold text-slate-800 bg-transparent outline-none p-0"
//                 />
//               </div>
//             </div>

//             {/* Board Selector */}
//             <div className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2 bg-slate-50/40 hover:bg-slate-50 cursor-pointer">
//               <div className="min-w-0">
//                 <p className="text-[11px] font-medium text-slate-400 leading-tight">Board</p>
//                 <p className="text-xs text-slate-700 truncate font-medium">Select Board</p>
//               </div>
//               <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
//             </div>

//             {/* Class Selector */}
//             <div className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2 bg-slate-50/40 hover:bg-slate-50 cursor-pointer">
//               <div className="min-w-0">
//                 <p className="text-[11px] font-medium text-slate-400 leading-tight">Class</p>
//                 <p className="text-xs text-slate-700 truncate font-medium">Select Class</p>
//               </div>
//               <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
//             </div>

//             {/* Subject Selector */}
//             <div className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2 bg-slate-50/40 hover:bg-slate-50 cursor-pointer">
//               <div className="min-w-0">
//                 <p className="text-[11px] font-medium text-slate-400 leading-tight">Subject</p>
//                 <p className="text-xs text-slate-700 truncate font-medium">Select Subject</p>
//               </div>
//               <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
//             </div>

//             {/* Sort by Option */}
//             <div className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2 bg-slate-50/40 hover:bg-slate-50 cursor-pointer">
//               <div className="min-w-0">
//                 <p className="text-[11px] font-medium text-slate-400 leading-tight">Sort by</p>
//                 <p className="text-xs text-slate-700 truncate font-medium">Select Option</p>
//               </div>
//               <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
//             </div>
//           </div>
//         </div>

//         {/* Results Info & Secondary Sort */}
//         <div className="flex items-center justify-between text-xs text-slate-600">
//           <span className="font-semibold text-slate-900">18 Tutors Found</span>
//           <div className="flex items-center gap-2">
//             <span>Sort by:</span>
//             <button className="flex items-center gap-1.5 border border-slate-200 bg-white rounded-md px-2.5 py-1 text-slate-700 hover:border-slate-300 font-medium">
//               <span>Price: Low to High</span>
//               <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
//             </button>
//           </div>
//         </div>

//         {/* Tutor Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {mockTutors.map((tutor) => (
//             <div
//               key={tutor.id}
//               className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
//             >
//               <div className="p-5">
//                 <div className="flex items-start gap-4">
//                   {/* Tutor Avatar */}
//                   <img
//                     src={tutor.avatar}
//                     alt={tutor.name}
//                     className="w-20 h-24 rounded-xl object-cover shrink-0 border border-slate-100"
//                   />

//                   {/* Tutor Details */}
//                   <div className="space-y-1.5 flex-1 min-w-0">
//                     <div className="flex items-center gap-1.5">
//                       <h3 className="font-bold text-slate-900 text-sm truncate">
//                         {tutor.name}
//                       </h3>
//                       {tutor.verified && (
//                         <CheckCircle2 className="w-4 h-4 text-[#2563eb] fill-blue-50 shrink-0" />
//                       )}
//                     </div>

//                     <div className="flex items-center gap-1.5 text-slate-600 text-[11px]">
//                       <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
//                       <span className="truncate">{tutor.degree}</span>
//                     </div>

//                     <div className="flex items-center gap-1.5 text-slate-600 text-[11px]">
//                       <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
//                       <span>{tutor.experience}</span>
//                     </div>

//                     <div className="flex items-center gap-1.5 text-slate-600 text-[11px]">
//                       <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0" />
//                       <span>{tutor.classes}</span>
//                     </div>

//                     <div className="flex items-center gap-1.5 text-slate-600 text-[11px]">
//                       <Atom className="w-3.5 h-3.5 text-slate-400 shrink-0" />
//                       <span className="truncate">{tutor.subjects}</span>
//                     </div>

//                     <div className="flex items-center gap-1.5 text-slate-600 text-[11px]">
//                       <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
//                       <span>{tutor.boards}</span>
//                     </div>

//                     {/* Ratings */}
//                     <div className="flex items-center gap-1 pt-0.5">
//                       <div className="flex items-center text-amber-400">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`w-3 h-3 ${
//                               i < Math.floor(tutor.rating)
//                                 ? "fill-amber-400 text-amber-400"
//                                 : "text-slate-200"
//                             }`}
//                           />
//                         ))}
//                       </div>
//                       <span className="text-xs font-bold text-slate-900 ml-1">
//                         {tutor.rating}
//                       </span>
//                       <span className="text-[10px] text-slate-400">
//                         ({tutor.reviewsCount} Reviews)
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Card Footer */}
//               <div>
//                 {/* Price Bar */}
//                 <div className="bg-[#ecfdf5] border-t border-b border-emerald-100 py-1 px-4 text-center">
//                   <span className="text-emerald-700 font-semibold text-xs tracking-tight">
//                     {tutor.price}
//                   </span>
//                 </div>

//                 {/* Actions */}
//                 <div className="grid grid-cols-2 gap-2 p-3 bg-white">
//                   <button className="w-full py-1.5 px-3 text-xs font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
//                     View Profile
//                   </button>
//                   <button className="w-full py-1.5 px-3 text-xs font-semibold text-white bg-[#f95721] rounded-lg hover:bg-[#e04815] transition-colors shadow-sm">
//                     Contact
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-center gap-1 py-8">
//           <button
//             onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//             className="w-7 h-7 flex items-center justify-center rounded-md border border-slate-200 text-slate-400 hover:border-slate-300 disabled:opacity-40"
//           >
//             <ChevronLeft className="w-4 h-4" />
//           </button>
//           {[1, 2, 3, 4].map((page) => (
//             <button
//               key={page}
//               onClick={() => setCurrentPage(page)}
//               className={`w-7 h-7 flex items-center justify-center rounded-md text-xs font-medium transition-colors ${
//                 currentPage === page
//                   ? "bg-[#2563eb] text-white font-semibold"
//                   : "text-slate-600 hover:bg-slate-100"
//               }`}
//             >
//               {page}
//             </button>
//           ))}
//           <button
//             onClick={() => setCurrentPage((p) => Math.min(4, p + 1))}
//             className="w-7 h-7 flex items-center justify-center rounded-md border border-slate-200 text-slate-400 hover:border-slate-300"
//           >
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { 
  Home, 
  UserCheck, 
  Target, 
  ShieldCheck, 
  Star, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  CheckCircle, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight,
  Edit3
} from 'lucide-react';
import { Header } from '../src/components/Header';
interface Tutor {
  id: number;
  name: string;
  image: string;
  degree: string;
  experience: string;
  classes: string;
  subjects: string;
  boards: string;
  rating: number;
  reviewsCount: number;
  price: string;
}

const tutorsData: Tutor[] = [
  {
    id: 1,
    name: "Amit Sharma",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    degree: "M.Sc. Physics, IIT Delhi",
    experience: "8+ Years Experience",
    classes: "Class 11 - 12",
    subjects: "Physics, Mathematics",
    boards: "CBSE | ICSE",
    rating: 4.9,
    reviewsCount: 128,
    price: "₹4,500 / month"
  },
  {
    id: 2,
    name: "Pooja Yadav",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    degree: "M.Sc. Mathematics",
    experience: "4+ Years Experience",
    classes: "Class 6 - 12",
    subjects: "Mathematics",
    boards: "CBSE | ICSE",
    rating: 4.6,
    reviewsCount: 52,
    price: "₹5,000 / month"
  },
  {
    id: 3,
    name: "Rohit Verma",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    degree: "M.Sc. Mathematics",
    experience: "7+ Years Experience",
    classes: "Class 7 - 12",
    subjects: "Mathematics, Physics",
    boards: "CBSE | ICSE",
    rating: 4.7,
    reviewsCount: 80,
    price: "₹6,000 / month"
  },
  {
    id: 4,
    name: "Neha Gupta",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
    degree: "B.Tech, NIT Warangal",
    experience: "6+ Years Experience",
    classes: "Class 6 - 12",
    subjects: "Mathematics",
    boards: "CBSE | State Board",
    rating: 4.8,
    reviewsCount: 96,
    price: "₹6,500 / month"
  },
  {
    id: 5,
    name: "Saurabh Singh",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    degree: "B.Tech, IIT Roorkee",
    experience: "5+ Years Experience",
    classes: "Class 8 - 12",
    subjects: "Physics",
    boards: "CBSE | ICSE",
    rating: 4.9,
    reviewsCount: 64,
    price: "₹7,000 / month"
  },
  {
    id: 6,
    name: "Ankit Kumar",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80",
    degree: "M.Sc. Physics",
    experience: "6+ Years Experience",
    classes: "Class 8 - 12",
    subjects: "Physics, Mathematics",
    boards: "CBSE | State Board",
    rating: 4.6,
    reviewsCount: 58,
    price: "₹7,500 / month"
  }
];

export default function TutorsListingPage() {
  const [pinCode, setPinCode] = useState('110044');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-700 font-sans pb-12">
      {/* Breadcrumb Header */}
      <Header/>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-xs text-slate-500">
       
       
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Banner Section */}
        <div className="bg-[#FFF6F0] rounded-2xl p-5 mb-6 shadow-sm border border-orange-100 flex flex-col lg:flex-row items-center justify-between overflow-hidden gap-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 w-full">
            {/* Title */}
            <div className="pr-4 border-b lg:border-b-0 lg:border-r border-orange-200 min-w-[190px]">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Tutors Near You</h1>
              <p className="text-xs text-slate-500 mt-1">We found 18 tutors for you</p>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 flex-1">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FF7043] flex items-center justify-center text-white shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Personalized<br/>Home Tuition</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">One-to-one attention for better understanding and strong concepts.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2E7D32] flex items-center justify-center text-white shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Experienced<br/>Mentors</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Learn from qualified & verified mentors with years of teaching experience.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#7B1FA2] flex items-center justify-center text-white shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Better Results</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Regular assessments, concept clarity & doubt clearing to help you score better.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1976D2] flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Safe & Trusted</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Background verified tutors for a safe and reliable learning environment.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E91E63] flex items-center justify-center text-white shrink-0">
                  <Star className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Flexible &<br/>Convenient</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Choose timing, days & mode of learning as per your convenience.</p>
                </div>
              </div>
            </div>

            {/* Banner Image - Face properly positioned without crop */}
            <div className="hidden xl:flex items-center justify-center shrink-0 w-32 h-24 overflow-hidden rounded-2xl bg-orange-100/50">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80" 
                alt="Tutor" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-center">
          <div className="flex items-center gap-2 border-b sm:border-b-0 sm:border-r border-slate-200 pr-2">
            <div className="w-8 h-8 rounded-full border border-blue-400 flex items-center justify-center text-blue-600 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <label className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">PIN Code</label>
              <input 
                type="text" 
                value={pinCode} 
                onChange={(e) => setPinCode(e.target.value)}
                className="w-full text-sm font-bold text-slate-900 outline-none bg-transparent"
              />
            </div>
          </div>

          <div className="border-b sm:border-b-0 sm:border-r border-slate-200 pr-2">
            <label className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Board</label>
            <div className="relative">
              <select className="w-full text-xs text-slate-700 bg-transparent py-1 pr-6 font-medium appearance-none outline-none cursor-pointer">
                <option>Select Board</option>
                <option>CBSE</option>
                <option>ICSE</option>
                <option>State Board</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-1 top-2 pointer-events-none" />
            </div>
          </div>

          <div className="border-b md:border-b-0 md:border-r border-slate-200 pr-2">
            <label className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Class</label>
            <div className="relative">
              <select className="w-full text-xs text-slate-700 bg-transparent py-1 pr-6 font-medium appearance-none outline-none cursor-pointer">
                <option>Select Class</option>
                <option>Class 6 - 8</option>
                <option>Class 9 - 10</option>
                <option>Class 11 - 12</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-1 top-2 pointer-events-none" />
            </div>
          </div>

          <div className="border-b sm:border-b-0 sm:border-r border-slate-200 pr-2">
            <label className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Subject</label>
            <div className="relative">
              <select className="w-full text-xs text-slate-700 bg-transparent py-1 pr-6 font-medium appearance-none outline-none cursor-pointer">
                <option>Select Subject</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-1 top-2 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Sort by</label>
            <div className="relative">
              <select className="w-full text-xs text-slate-700 bg-transparent py-1 pr-6 font-medium appearance-none outline-none cursor-pointer">
                <option>Select Option</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-1 top-2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Results Header */}
        {/* <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-slate-800">18 Tutors Found</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Sort by:</span>
            <div className="relative">
              <select className="text-xs font-medium border border-slate-300 rounded px-2 py-1 pr-6 bg-white outline-none cursor-pointer">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-1.5 top-2 pointer-events-none" />
            </div>
          </div>
        </div> */}

        {/* Tutor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorsData.map((tutor) => (
            <div 
              key={tutor.id} 
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between overflow-hidden p-4"
            >
              <div>
                <div className="flex items-start gap-4">
                  <img 
                    src={tutor.image} 
                    alt={tutor.name} 
                    className="w-16 h-16 rounded-xl object-cover object-top border border-slate-100 shadow-sm shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <h3 className="text-sm font-bold text-slate-900 truncate">{tutor.name}</h3>
                      <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500 text-white shrink-0" />
                    </div>

                    <div className="mt-1 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{tutor.degree}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{tutor.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-600">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{tutor.classes}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-600">
                    <span className="w-3.5 h-3.5 flex items-center justify-center font-serif text-[10px] text-slate-400 shrink-0">ψ</span>
                    <span>{tutor.subjects}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-600">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{tutor.boards}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-800 ml-1">{tutor.rating}</span>
                  <span className="text-[10px] text-slate-400">({tutor.reviewsCount} Reviews)</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="bg-[#EDF7EE] text-[#2E7D32] py-1.5 text-center text-xs font-bold rounded-lg mb-3">
                  {tutor.price}
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button className="w-full py-1.5 text-xs font-semibold text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-50 transition">
                    View Profile
                  </button>
                  <button className="w-full py-1.5 text-xs font-semibold text-white bg-[#FF4500] hover:bg-[#E03E00] rounded-lg transition shadow-sm">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Bar */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button className="w-7 h-7 rounded border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition">
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button className="w-7 h-7 rounded bg-blue-600 text-white font-medium text-xs flex items-center justify-center">
            1
          </button>
          
          <button className="w-7 h-7 rounded border border-slate-200 text-slate-700 font-medium text-xs flex items-center justify-center hover:bg-slate-100 transition">
            2
          </button>

          <button className="w-7 h-7 rounded border border-slate-200 text-slate-700 font-medium text-xs flex items-center justify-center hover:bg-slate-100 transition">
            3
          </button>

          <span className="text-xs text-slate-400 px-1">...</span>

          <button className="w-7 h-7 rounded border border-slate-200 text-slate-700 font-medium text-xs flex items-center justify-center hover:bg-slate-100 transition">
            4
          </button>
          
          <button className="w-7 h-7 rounded border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}