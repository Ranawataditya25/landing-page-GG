// import React, { useState } from "react";
// import {
//   Search,
//   RotateCcw,
//   CheckCircle2,
//   Heart,
//   Star,
//   ShieldCheck,
//   Award,
//   Sparkles,
//   Clock,
//   ChevronDown,
//   MessageSquare,
//   BadgeCheck,
// } from "lucide-react";

// interface Mentor {
//   id: number;
//   name: string;
//   role: string;
//   experience: string;
//   price: number;
//   rating: number;
//   reviews: number;
//   tags: string[];
//   moreTagsCount: number;
//   image: string;
// }

// const mentorsData: Mentor[] = [
//   {
//     id: 1,
//     name: "Mr. Rohan Mehta",
//     role: "Counselling Psychologist & Wellness Expert",
//     experience: "6+ Years Experience",
//     price: 799,
//     rating: 4.9,
//     reviews: 120,
//     tags: ["Stress Management", "Student Counselling"],
//     moreTagsCount: 3,
//     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
//   },
//   {
//     id: 2,
//     name: "Dr. Ananya Sharma",
//     role: "Clinical Psychologist",
//     experience: "8+ Years Experience",
//     price: 899,
//     rating: 4.8,
//     reviews: 96,
//     tags: ["Confidence Building", "Emotional Well-being"],
//     moreTagsCount: 3,
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
//   },
//   {
//     id: 3,
//     name: "Ms. Priya Nair",
//     role: "Educational Psychologist",
//     experience: "7+ Years Experience",
//     price: 749,
//     rating: 4.8,
//     reviews: 88,
//     tags: ["Study Stress", "Exam Anxiety"],
//     moreTagsCount: 2,
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
//   },
//   {
//     id: 4,
//     name: "Dr. Karan Malhotra",
//     role: "Behavioral Coach",
//     experience: "5+ Years Experience",
//     price: 699,
//     rating: 4.7,
//     reviews: 74,
//     tags: ["Personal Growth", "Habit Building"],
//     moreTagsCount: 2,
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
//   },
//   {
//     id: 5,
//     name: "Dr. Meera Iyer",
//     role: "Psychotherapist",
//     experience: "10+ Years Experience",
//     price: 999,
//     rating: 4.9,
//     reviews: 110,
//     tags: ["Anxiety Management", "Relationship Counselling"],
//     moreTagsCount: 3,
//     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80",
//   },
//   {
//     id: 6,
//     name: "Mr. Vikram Singh",
//     role: "Counselling Psychologist",
//     experience: "6+ Years Experience",
//     price: 749,
//     rating: 4.7,
//     reviews: 65,
//     tags: ["Stress Management", "Self-Esteem"],
//     moreTagsCount: 2,
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
//   },
//   {
//     id: 7,
//     name: "Ms. Neha Verma",
//     role: "Mental Wellness Coach",
//     experience: "4+ Years Experience",
//     price: 599,
//     rating: 4.6,
//     reviews: 52,
//     tags: ["Emotional Well-being", "Life Skills"],
//     moreTagsCount: 2,
//     image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80",
//   },
//   {
//     id: 8,
//     name: "Mr. Arjun Das",
//     role: "Student Counsellor",
//     experience: "5+ Years Experience",
//     price: 699,
//     rating: 4.6,
//     reviews: 48,
//     tags: ["Career Counselling", "Exam Stress"],
//     moreTagsCount: 2,
//     image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
//   },
// ];

// export default function PsychologicalSupportMentors() {
//   const [favorites, setFavorites] = useState<number[]>([]);

//   const toggleFavorite = (id: number) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans p-6 md:p-10">
//       <div className="max-w-[1440px] mx-auto space-y-8">
//         {/* Top Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-bold text-[#1a1040]">
//               Psychological Support Mentors
//             </h1>
//             <p className="text-sm text-slate-500 mt-1 max-w-2xl">
//               Connect with verified and experienced psychological support
//               mentors who can help you manage stress, build confidence, and
//               improve your mental well-being.
//             </p>
//           </div>

//           <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-lg border border-emerald-100 shadow-sm text-xs text-slate-600">
//             <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
//             <div>
//               <div className="flex items-center gap-2">
//                 <span className="font-semibold text-slate-700">100% Confidential</span>
//                 <span className="text-slate-300">•</span>
//                 <span>Verified Mentors</span>
//               </div>
//               <div className="flex items-center gap-2 text-slate-400">
//                 <span>Safe Space</span>
//                 <span className="text-slate-300">•</span>
//                 <span>Non-judgemental Support</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Feature Highlights Banner */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
//             <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
//               <Award className="w-5 h-5" />
//             </div>
//             <div>
//               <h4 className="text-xs font-bold text-slate-800">Verified Experts</h4>
//               <p className="text-[11px] text-slate-500">All mentors are verified and experienced</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
//             <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
//               <ShieldCheck className="w-5 h-5" />
//             </div>
//             <div>
//               <h4 className="text-xs font-bold text-slate-800">Confidential & Safe</h4>
//               <p className="text-[11px] text-slate-500">Your privacy is our top priority</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
//             <div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center flex-shrink-0">
//               <Sparkles className="w-5 h-5" />
//             </div>
//             <div>
//               <h4 className="text-xs font-bold text-slate-800">Personalized Support</h4>
//               <p className="text-[11px] text-slate-500">Guidance tailored to your needs</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
//             <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
//               <Clock className="w-5 h-5" />
//             </div>
//             <div>
//               <h4 className="text-xs font-bold text-slate-800">Flexible Sessions</h4>
//               <p className="text-[11px] text-slate-500">Choose time, duration and mode</p>
//             </div>
//           </div>
//         </div>

//         {/* Main Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//           {/* Left Filters Sidebar */}
//           <div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-6">
//             <div className="flex items-center justify-between pb-3 border-b border-slate-100">
//               <span className="font-bold text-slate-800 text-sm">Filters</span>
//               <button className="text-xs text-orange-500 flex items-center gap-1 hover:underline font-medium">
//                 <RotateCcw className="w-3 h-3" /> Reset All
//               </button>
//             </div>

//             {/* Specialization */}
//             <div className="space-y-3">
//               <div className="flex justify-between items-center text-xs font-bold text-slate-700">
//                 <span>Specialization</span>
//                 <ChevronDown className="w-4 h-4 text-slate-400 cursor-pointer" />
//               </div>
//               <div className="space-y-2 text-xs text-slate-600">
//                 {[
//                   "Stress Management",
//                   "Student Counselling",
//                   "Confidence & Self-Esteem",
//                   "Emotional Well-being",
//                   "Study & Exam Stress",
//                   "Personal Growth",
//                   "Relationship Counselling",
//                 ].map((item, idx) => (
//                   <label key={idx} className="flex items-center gap-2.5 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="rounded border-slate-300 text-purple-600 focus:ring-purple-500 w-3.5 h-3.5"
//                     />
//                     <span>{item}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Session Type */}
//             <div className="space-y-3 pt-3 border-t border-slate-100">
//               <div className="flex justify-between items-center text-xs font-bold text-slate-700">
//                 <span>Session Type</span>
//                 <ChevronDown className="w-4 h-4 text-slate-400 cursor-pointer" />
//               </div>
//               <div className="space-y-2 text-xs text-slate-600">
//                 {["One-to-One", "Group Session"].map((item, idx) => (
//                   <label key={idx} className="flex items-center gap-2.5 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="rounded border-slate-300 text-purple-600 focus:ring-purple-500 w-3.5 h-3.5"
//                     />
//                     <span>{item}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Session Mode */}
//             <div className="space-y-3 pt-3 border-t border-slate-100">
//               <div className="flex justify-between items-center text-xs font-bold text-slate-700">
//                 <span>Session Mode</span>
//                 <ChevronDown className="w-4 h-4 text-slate-400 cursor-pointer" />
//               </div>
//               <div className="space-y-2 text-xs text-slate-600">
//                 {["Online (Video Call)", "Audio Call", "Chat Support"].map((item, idx) => (
//                   <label key={idx} className="flex items-center gap-2.5 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="rounded border-slate-300 text-purple-600 focus:ring-purple-500 w-3.5 h-3.5"
//                     />
//                     <span>{item}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Availability */}
//             <div className="space-y-3 pt-3 border-t border-slate-100">
//               <div className="flex justify-between items-center text-xs font-bold text-slate-700">
//                 <span>Availability</span>
//                 <ChevronDown className="w-4 h-4 text-slate-400 cursor-pointer" />
//               </div>
//               <div className="space-y-2 text-xs text-slate-600">
//                 {["Available Now", "Weekend Available"].map((item, idx) => (
//                   <label key={idx} className="flex items-center gap-2.5 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       className="rounded border-slate-300 text-purple-600 focus:ring-purple-500 w-3.5 h-3.5"
//                     />
//                     <span>{item}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Sort By Dropdown */}
//             <div className="space-y-2 pt-3 border-t border-slate-100">
//               <label className="text-xs font-bold text-slate-700">Sort By</label>
//               <select className="w-full text-xs border border-slate-200 rounded-lg p-2 bg-white text-slate-700 outline-none focus:border-purple-500">
//                 <option>Most Relevant</option>
//                 <option>Rating: High to Low</option>
//                 <option>Price: Low to High</option>
//                 <option>Price: High to Low</option>
//               </select>
//             </div>
//           </div>

//           {/* Right Mentors Listing */}
//           <div className="lg:col-span-9 space-y-6">
//             {/* Search and Sort Toolbar */}
//             <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
//               <div className="relative w-full sm:w-2/3">
//                 <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//                 <input
//                   type="text"
//                   placeholder="Search by name, expertise or keyword..."
//                   className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-purple-500 shadow-sm"
//                 />
//               </div>
//               <div className="flex items-center gap-2 text-xs w-full sm:w-auto justify-end">
//                 <span className="text-slate-500 font-medium">Sort By:</span>
//                 <select className="border border-slate-200 rounded-lg px-3 py-2 bg-white font-medium text-slate-700 outline-none shadow-sm">
//                   <option>Most Relevant</option>
//                   <option>Highest Rated</option>
//                   <option>Most Experienced</option>
//                 </select>
//               </div>
//             </div>

//             <div className="text-xs font-semibold text-slate-500">12 Mentors Found</div>

//             {/* Grid of Mentors */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
//               {mentorsData.map((mentor) => (
//                 <div
//                   key={mentor.id}
//                   className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
//                 >
//                   <div>
//                     {/* Top verified & like badges */}
//                     <div className="flex items-center justify-between mb-3">
//                       <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 bg-emerald-50 font-semibold px-2 py-0.5 rounded-full">
//                         <CheckCircle2 className="w-3 h-3" /> Verified
//                       </span>
//                       <button
//                         onClick={() => toggleFavorite(mentor.id)}
//                         className="text-slate-300 hover:text-rose-500 transition-colors"
//                       >
//                         <Heart
//                           className={`w-4 h-4 ${
//                             favorites.includes(mentor.id) ? "fill-rose-500 text-rose-500" : ""
//                           }`}
//                         />
//                       </button>
//                     </div>

//                     {/* Avatar & Mentor Info */}
//                     <div className="flex items-start gap-3 mb-3">
//                       <img
//                         src={mentor.image}
//                         alt={mentor.name}
//                         className="w-14 h-14 rounded-full object-cover border border-slate-100 flex-shrink-0"
//                       />
//                       <div>
//                         <div className="flex items-center gap-1">
//                           <h3 className="text-xs font-bold text-slate-800 leading-tight">
//                             {mentor.name}
//                           </h3>
//                           <BadgeCheck className="w-3.5 h-3.5 text-[#5841D8] fill-[#5841D8]/10 flex-shrink-0" />
//                         </div>
//                         <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
//                           {mentor.role}
//                         </p>
//                         <p className="text-[10px] text-slate-400 mt-1">{mentor.experience}</p>
//                       </div>
//                     </div>

//                     {/* Skill Tags */}
//                     <div className="flex flex-wrap gap-1.5 my-3">
//                       {mentor.tags.map((tag, i) => (
//                         <span
//                           key={i}
//                           className="bg-[#F5F3FF] text-[#5841D8] text-[10px] px-2 py-0.5 rounded font-medium"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                       {mentor.moreTagsCount > 0 && (
//                         <span className="text-[10px] text-slate-400 font-medium self-center">
//                           +{mentor.moreTagsCount} more
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Pricing & Ratings */}
//                   <div>
//                     <div className="flex items-center justify-between pt-2 border-t border-slate-50 mb-3">
//                       <div className="text-xs font-bold text-slate-800">
//                         ₹{mentor.price} <span className="text-[10px] font-normal text-slate-400">/ session</span>
//                       </div>
//                       <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
//                         <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
//                         <span>{mentor.rating}</span>
//                         <span className="text-slate-400 font-normal">({mentor.reviews})</span>
//                       </div>
//                     </div>

//                     {/* Card Actions */}
//                     <div className="grid grid-cols-2 gap-2">
//                       <button className="py-1.5 px-2 rounded-lg border border-purple-200 text-[#5841D8] text-xs font-semibold hover:bg-purple-50 transition">
//                         View Profile
//                       </button>
//                       <button className="py-1.5 px-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold shadow-sm hover:opacity-95 transition">
//                         Book a Session
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Banner */}
//         <div className="bg-[#F6F4FE] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-purple-100">
//           <div className="flex items-center gap-6">
//             <div className="hidden sm:block w-24 h-20 bg-purple-200/50 rounded-xl flex-shrink-0 relative overflow-hidden">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <MessageSquare className="w-8 h-8 text-purple-600 opacity-80" />
//               </div>
//             </div>
//             <div>
//               <h2 className="text-base md:text-lg font-bold text-[#1a1040]">
//                 You are not alone. Help is just a conversation away.
//               </h2>
//               <p className="text-xs text-slate-600 mt-1">
//                 Talk to a trusted mentor and take the first step towards a healthier you.
//               </p>
//             </div>
//           </div>
//           <button className="bg-[#5841D8] hover:bg-[#4a34c9] text-white text-xs font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition shadow-md flex-shrink-0">
//             <MessageSquare className="w-4 h-4" />
//             <span>Talk to a Mentor Now</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import {
  Search,
  RotateCcw,
  CheckCircle2,
  Heart,
  Star,
  ShieldCheck,
  Award,
  Sparkles,
  Clock,
  ChevronDown,
  MessageSquare,
  BadgeCheck,
  ArrowLeft,
  Share2,
  Copy,
  Calendar,
  Lock,
  HeartHandshake,
  Brain,
  GraduationCap,
  Users,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

interface Mentor {
  id: number;
  name: string;
  role: string;
  experience: string;
  price: number;
  rating: number;
  reviews: number;
  sessionsCount?: number;
  bio?: string;
  aboutText?: string;
  approachText?: string;
  tags: string[];
  moreTagsCount: number;
  image: string;
}

const mentorsData: Mentor[] = [
  {
    id: 1,
    name: "Mr. Rohan Mehta",
    role: "Counselling Psychologist & Mental Wellness Expert",
    experience: "6+ Years Experience",
    price: 799,
    rating: 4.9,
    reviews: 120,
    sessionsCount: 1000,
    bio: "I help individuals understand themselves better, manage stress and emotions, and build a positive mindset. My goal is to provide a safe and confidential space where you can talk, heal, and grow.",
    aboutText:
      "I am a Counselling Psychologist with over 6 years of experience in helping individuals deal with stress, anxiety, low confidence, relationship issues and emotional challenges. I believe that every person has the strength to overcome difficulties with the right support and guidance.\n\nMy approach is friendly, empathetic and solution-focused.",
    tags: ["Stress Management", "Student Counselling"],
    moreTagsCount: 3,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Dr. Ananya Sharma",
    role: "Clinical Psychologist & Mind Coach",
    experience: "8+ Years Experience",
    price: 899,
    rating: 4.8,
    reviews: 96,
    sessionsCount: 1400,
    bio: "Dedicated to clinical psychology and personal growth therapies. Creating empowering environments to overcome anxiety, stress, and self-doubt.",
    aboutText:
      "Dr. Ananya Sharma specializes in clinical mental health and emotional well-being. She uses evidence-based Cognitive Behavioural Therapy (CBT) and mindful counselling to foster emotional balance.",
    tags: ["Confidence Building", "Emotional Well-being"],
    moreTagsCount: 3,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Ms. Priya Nair",
    role: "Educational Psychologist",
    experience: "7+ Years Experience",
    price: 749,
    rating: 4.8,
    reviews: 88,
    sessionsCount: 950,
    bio: "Specialist in academic stress management, performance anxiety, and student career counselling.",
    aboutText:
      "With over 7 years supporting students and young professionals, Priya focuses on habit loops, focus building, and dealing with intense exam and study pressures.",
    tags: ["Study Stress", "Exam Anxiety"],
    moreTagsCount: 2,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Dr. Karan Malhotra",
    role: "Behavioral Coach",
    experience: "5+ Years Experience",
    price: 699,
    rating: 4.7,
    reviews: 74,
    sessionsCount: 820,
    bio: "Passionate about behavioral architecture, breaking negative thought patterns, and guiding sustainable lifestyle transformations.",
    aboutText:
      "Karan empowers clients to build healthy personal routines and confidence through direct, compassionate, and actionable behavioral frameworks.",
    tags: ["Personal Growth", "Habit Building"],
    moreTagsCount: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Dr. Meera Iyer",
    role: "Psychotherapist",
    experience: "10+ Years Experience",
    price: 999,
    rating: 4.9,
    reviews: 110,
    sessionsCount: 2200,
    bio: "Senior Psychotherapist working with adult mental health, relationship conflicts, and trauma-informed healing.",
    aboutText:
      "Over a decade of clinical practice helping clients navigate deep emotional patterns, depression, anxiety, and interpersonal intimacy.",
    tags: ["Anxiety Management", "Relationship Counselling"],
    moreTagsCount: 3,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Mr. Vikram Singh",
    role: "Counselling Psychologist",
    experience: "6+ Years Experience",
    price: 749,
    rating: 4.7,
    reviews: 65,
    sessionsCount: 680,
    bio: "Empathetic counselling focused on workplace burnout, youth identity struggles, and boosting self-worth.",
    aboutText:
      "Vikram uses humanistic and client-centered models to provide deep clarity and actionable tools for life transitions.",
    tags: ["Stress Management", "Self-Esteem"],
    moreTagsCount: 2,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Ms. Neha Verma",
    role: "Mental Wellness Coach",
    experience: "4+ Years Experience",
    price: 599,
    rating: 4.6,
    reviews: 52,
    sessionsCount: 450,
    bio: "Helping young adults navigate everyday anxiety, establish boundaries, and develop resilient life skills.",
    aboutText:
      "Neha focuses on accessible wellness routines, mindfulness, emotional regulation, and self-compassion training.",
    tags: ["Emotional Well-being", "Life Skills"],
    moreTagsCount: 2,
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Mr. Arjun Das",
    role: "Student Counsellor",
    experience: "5+ Years Experience",
    price: 699,
    rating: 4.6,
    reviews: 48,
    sessionsCount: 510,
    bio: "Dedicated student counsellor focused on academic clarity, interview confidence, and exam anxiety mitigation.",
    aboutText:
      "Arjun provides structured roadmaps and empathetic support for students facing high expectations and career uncertainty.",
    tags: ["Career Counselling", "Exam Stress"],
    moreTagsCount: 2,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
  },
];

export default function PsychologicalSupportApp() {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  if (selectedMentor) {
    return (
      <MentorDetailView
        mentor={selectedMentor}
        onBack={() => setSelectedMentor(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans p-6 md:p-10">
      <div className="max-w-[1440px] mx-auto space-y-8">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1a1040]">
              Psychological Support Mentors
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-2xl">
              Connect with verified and experienced psychological support
              mentors who can help you manage stress, build confidence, and
              improve your mental well-being.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-lg border border-emerald-100 shadow-sm text-xs text-slate-600">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">100% Confidential</span>
                <span className="text-slate-300">•</span>
                <span>Verified Mentors</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span>Safe Space</span>
                <span className="text-slate-300">•</span>
                <span>Non-judgemental Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800">Verified Experts</h4>
              <p className="text-[11px] text-slate-500">All mentors are verified and experienced</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800">Confidential & Safe</h4>
              <p className="text-[11px] text-slate-500">Your privacy is our top priority</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800">Personalized Support</h4>
              <p className="text-[11px] text-slate-500">Guidance tailored to your needs</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800">Flexible Sessions</h4>
              <p className="text-[11px] text-slate-500">Choose time, duration and mode</p>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Filters Sidebar */}
          <div className="lg:col-span-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-bold text-slate-800 text-sm">Filters</span>
              <button className="text-xs text-orange-500 flex items-center gap-1 hover:underline font-medium">
                <RotateCcw className="w-3 h-3" /> Reset All
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                <span>Specialization</span>
                <ChevronDown className="w-4 h-4 text-slate-400 cursor-pointer" />
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                {[
                  "Stress Management",
                  "Student Counselling",
                  "Confidence & Self-Esteem",
                  "Emotional Well-being",
                  "Study & Exam Stress",
                  "Personal Growth",
                  "Relationship Counselling",
                ].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-slate-300 text-purple-600 focus:ring-purple-500 w-3.5 h-3.5"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                <span>Session Type</span>
                <ChevronDown className="w-4 h-4 text-slate-400 cursor-pointer" />
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                {["One-to-One", "Group Session"].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-slate-300 text-purple-600 focus:ring-purple-500 w-3.5 h-3.5"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                <span>Session Mode</span>
                <ChevronDown className="w-4 h-4 text-slate-400 cursor-pointer" />
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                {["Online (Video Call)", "Audio Call", "Chat Support"].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-slate-300 text-purple-600 focus:ring-purple-500 w-3.5 h-3.5"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                <span>Availability</span>
                <ChevronDown className="w-4 h-4 text-slate-400 cursor-pointer" />
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                {["Available Now", "Weekend Available"].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-slate-300 text-purple-600 focus:ring-purple-500 w-3.5 h-3.5"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-700">Sort By</label>
              <select className="w-full text-xs border border-slate-200 rounded-lg p-2 bg-white text-slate-700 outline-none">
                <option>Most Relevant</option>
                <option>Rating: High to Low</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Right Mentors Listing */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-2/3">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, expertise or keyword..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs placeholder:text-slate-400 focus:outline-none focus:border-purple-500 shadow-sm"
                />
              </div>
              <div className="flex items-center gap-2 text-xs w-full sm:w-auto justify-end">
                <span className="text-slate-500 font-medium">Sort By:</span>
                <select className="border border-slate-200 rounded-lg px-3 py-2 bg-white font-medium text-slate-700 outline-none shadow-sm">
                  <option>Most Relevant</option>
                  <option>Highest Rated</option>
                  <option>Most Experienced</option>
                </select>
              </div>
            </div>

            <div className="text-xs font-semibold text-slate-500">
              {mentorsData.length} Mentors Found
            </div>

            {/* Grid of Mentors */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {mentorsData.map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 bg-emerald-50 font-semibold px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" /> Verified
                      </span>
                      <button
                        onClick={() => toggleFavorite(mentor.id)}
                        className="text-slate-300 hover:text-rose-500 transition-colors"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            favorites.includes(mentor.id)
                              ? "fill-rose-500 text-rose-500"
                              : ""
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-start gap-3 mb-3">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-14 h-14 rounded-full object-cover border border-slate-100 flex-shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-1">
                          <h3 className="text-xs font-bold text-slate-800 leading-tight">
                            {mentor.name}
                          </h3>
                          <BadgeCheck className="w-3.5 h-3.5 text-[#5841D8] fill-[#5841D8]/10 flex-shrink-0" />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          {mentor.role}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1">
                          {mentor.experience}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 my-3">
                      {mentor.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-[#F5F3FF] text-[#5841D8] text-[10px] px-2 py-0.5 rounded font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {mentor.moreTagsCount > 0 && (
                        <span className="text-[10px] text-slate-400 font-medium self-center">
                          +{mentor.moreTagsCount} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-50 mb-3">
                      <div className="text-xs font-bold text-slate-800">
                        ₹{mentor.price}{" "}
                        <span className="text-[10px] font-normal text-slate-400">
                          / session
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{mentor.rating}</span>
                        <span className="text-slate-400 font-normal">
                          ({mentor.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedMentor(mentor)}
                        className="py-1.5 px-2 rounded-lg border border-purple-200 text-[#5841D8] text-xs font-semibold hover:bg-purple-50 transition"
                      >
                        View Profile
                      </button>
                      <button className="py-1.5 px-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold shadow-sm hover:opacity-95 transition">
                        Book a Session
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#F6F4FE] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-purple-100">
          <div className="flex items-center gap-6">
            <div className="hidden sm:block w-24 h-20 bg-purple-200/50 rounded-xl flex-shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-purple-600 opacity-80" />
              </div>
            </div>
            <div>
              <h2 className="text-base md:text-lg font-bold text-[#1a1040]">
                You are not alone. Help is just a conversation away.
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Talk to a trusted mentor and take the first step towards a healthier you.
              </p>
            </div>
          </div>
          <button className="bg-[#5841D8] hover:bg-[#4a34c9] text-white text-xs font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition shadow-md flex-shrink-0">
            <MessageSquare className="w-4 h-4" />
            <span>Talk to a Mentor Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Detailed Profile View Component
// -------------------------------------------------------------

function MentorDetailView({
  mentor,
  onBack,
}: {
  mentor: Mentor;
  onBack: () => void;
}) {
  const servicesList = [
    {
      title: "Stress Management",
      desc: "Learn proven techniques to manage stress, anxiety and overthinking in daily life.",
      price: mentor.price,
      icon: Brain,
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Student Counselling",
      desc: "Guidance for students facing academic pressure, focus issues, motivation and career confusion.",
      price: mentor.price,
      icon: GraduationCap,
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Confidence & Self-Esteem",
      desc: "Build self-confidence, improve self-image and overcome self-doubt.",
      price: mentor.price,
      icon: Star,
      bgColor: "bg-amber-50",
      textColor: "text-amber-500",
    },
    {
      title: "Emotional Well-being",
      desc: "Understand and manage emotions like sadness, anger, fear and loneliness.",
      price: mentor.price,
      icon: Heart,
      bgColor: "bg-rose-50",
      textColor: "text-rose-500",
    },
    {
      title: "Study & Exam Stress",
      desc: "Strategies to handle exam anxiety, time pressure and performance stress.",
      price: mentor.price,
      icon: Award,
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
    {
      title: "Personal Growth & Mindset",
      desc: "Develop positive habits, personal growth and a balanced mindset for a happier life.",
      price: mentor.price,
      icon: Sparkles,
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
  ];

  const targetAudience = [
    "School Students (8th - 12th)",
    "College Students",
    "Exam Aspirants",
    "Individuals Facing Stress or Anxiety",
    "Anyone Looking for Personal Growth",
  ];

  const approaches = [
    "Understand your thoughts and emotions",
    "Identify the root cause of challenges",
    "Learn practical coping strategies",
    "Build resilience and positive habits",
    "Achieve long-term emotional well-being",
  ];

  const reviewsList = [
    {
      name: "Ananya Sharma",
      role: "College Student",
      rating: 5.0,
      comment:
        `${mentor.name.split(" ")[1] || "Mentor"} is very supportive and a great listener. Sessions helped me manage my anxiety and exam stress effectively.`,
      time: "2 weeks ago",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Vikram Singh",
      role: "Engineering Student",
      rating: 5.0,
      comment:
        "The techniques and guidance I received helped me improve my focus and confidence a lot. Highly recommended!",
      time: "1 month ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Neha Verma",
      role: "School Student",
      rating: 5.0,
      comment:
        "I feel so comfortable talking to them. They understand my problems and always give practical solutions.",
      time: "2 months ago",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-16">
      {/* Top Breadcrumb Nav */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 font-medium text-slate-600 hover:text-purple-600 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Mentors
            </button>
            <span>/</span>
            <span>Online Mentors</span>
            <span>/</span>
            <span>Psychological Support</span>
            <span>/</span>
            <span className="text-slate-800 font-medium">{mentor.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6 space-y-6">
        {/* Main Hero Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Mentor Image */}
            <div className="lg:col-span-4 relative flex flex-col items-center">
              <div className="w-full aspect-[4/5] max-w-[300px] rounded-2xl overflow-hidden relative shadow-sm border border-slate-100">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-emerald-600/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                  <CheckCircle2 className="w-3 h-3" /> Verified Mentor
                </span>
                <span className="absolute bottom-3 right-3 bg-white/95 text-emerald-700 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Available
                </span>
              </div>
            </div>

            {/* Profile Intro */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-2xl font-bold text-slate-900">{mentor.name}</h1>
                  <BadgeCheck className="w-5 h-5 text-[#5841D8] fill-[#5841D8]/10" />
                </div>
                <p className="text-xs font-medium text-slate-600 mt-1">{mentor.role}</p>
              </div>

              {/* Badges / Stats */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 font-medium">
                  <Award className="w-3.5 h-3.5 text-purple-600" /> {mentor.experience}
                </span>
                <span className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 font-medium">
                  <Users className="w-3.5 h-3.5 text-purple-600" /> {mentor.sessionsCount || 1000}+ Sessions Conducted
                </span>
                <span className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-md border border-amber-100 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> {mentor.rating} ({mentor.reviews} Reviews)
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {mentor.bio}
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-4 gap-2 pt-2">
                <div className="flex flex-col items-center justify-center p-2.5 bg-[#FAF9FE] rounded-xl border border-purple-50 text-center">
                  <Lock className="w-4 h-4 text-purple-600 mb-1" />
                  <span className="text-[10px] font-semibold text-slate-700">Confidential & Private</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2.5 bg-[#F4FBF7] rounded-xl border border-emerald-50 text-center">
                  <HeartHandshake className="w-4 h-4 text-emerald-600 mb-1" />
                  <span className="text-[10px] font-semibold text-slate-700">Empathetic & Supportive</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2.5 bg-[#FEF9F6] rounded-xl border border-orange-50 text-center">
                  <Brain className="w-4 h-4 text-orange-500 mb-1" />
                  <span className="text-[10px] font-semibold text-slate-700">Evidence Based Approach</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2.5 bg-[#F5F8FE] rounded-xl border border-blue-50 text-center">
                  <ShieldCheck className="w-4 h-4 text-blue-600 mb-1" />
                  <span className="text-[10px] font-semibold text-slate-700">Safe & Non Judgemental</span>
                </div>
              </div>
            </div>

            {/* Right Booking Card */}
            <div className="lg:col-span-3 bg-[#FCFBFF] p-5 rounded-2xl border border-purple-100 shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[11px] text-slate-400 font-medium">Consultation Fee</span>
                <div className="text-2xl font-bold text-[#5841D8] mt-0.5">
                  ₹{mentor.price} <span className="text-xs text-slate-500 font-normal">/ session</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2 mb-4">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Session Duration: <strong className="text-slate-700">60 Minutes</strong></span>
                </div>

                <div className="space-y-2 border-t border-purple-100/70 pt-3 text-xs text-slate-600">
                  {[
                    "100% Confidential Sessions",
                    "Personalized Guidance",
                    "Practical Techniques",
                    "Flexible Scheduling",
                    "Follow-up Support",
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button className="w-full py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl text-xs shadow hover:opacity-95 transition">
                  Book a Session
                </button>
                <button className="w-full py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl text-xs hover:bg-slate-50 flex items-center justify-center gap-1.5 transition">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                  Message Mentor
                </button>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                <span>Share Profile:</span>
                <div className="flex items-center gap-2 text-slate-500">
                  <button className="hover:text-purple-600 transition"><Share2 className="w-3.5 h-3.5" /></button>
                  <button className="hover:text-purple-600 transition"><Copy className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (About & Services) */}
          <div className="lg:col-span-7 space-y-6">
            {/* About Me */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <Users className="w-4 h-4 text-purple-600" />
                <span>About Me</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">
                {mentor.aboutText}
              </p>
            </div>

            {/* Services */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-slate-800">What I Provide (Services)</h3>
              <div className="space-y-3">
                {servicesList.map((srv, idx) => {
                  const Icon = srv.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border border-slate-100 hover:border-purple-100 transition flex items-start justify-between gap-3 bg-[#FCFDFF]"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-lg ${srv.bgColor} ${srv.textColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-800">{srv.title}</h4>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{srv.desc}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-slate-700 whitespace-nowrap">
                        ₹{srv.price} <span className="text-[10px] font-normal text-slate-400">/ session</span>
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="text-[11px] text-slate-400 pt-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                All sessions are 1-on-1 and completely confidential.
              </div>
            </div>

            {/* Experience & Education */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-slate-800">Experience & Education</h3>
              <div className="space-y-4 border-l-2 border-purple-100 pl-4 ml-1">
                <div className="relative">
                  <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                  <div className="flex justify-between items-start text-xs">
                    <span className="font-bold text-slate-800">M.Sc. in Psychology</span>
                    <span className="text-slate-400 text-[11px]">2016 - 2018</span>
                  </div>
                  <p className="text-[11px] text-slate-500">University of Delhi</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                  <div className="flex justify-between items-start text-xs">
                    <span className="font-bold text-slate-800">PG Diploma in Counselling Psychology</span>
                    <span className="text-slate-400 text-[11px]">2018 - 2019</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Amity University</p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                  <div className="flex justify-between items-start text-xs">
                    <span className="font-bold text-slate-800">Counselling Psychologist</span>
                    <span className="text-slate-400 text-[11px]">2019 - Present</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Private Practice</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Who Can Benefit, Approach, Availability) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Who can benefit */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-slate-800">Who Can Benefit?</h3>
              <div className="space-y-2.5 text-xs text-slate-600">
                {targetAudience.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Approach */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-slate-800">My Approach</h3>
              <p className="text-xs text-slate-500">
                I use a compassionate and evidence-based approach to help you:
              </p>
              <div className="space-y-2 text-xs text-slate-600">
                {approaches.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
              <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-100/60 text-xs text-emerald-900 italic">
                “Your mental health matters. Let&apos;s work together for a better you.”
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-slate-800">Availability</h3>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> Monday - Friday
                  </span>
                  <span className="font-semibold text-slate-700">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> Saturday
                  </span>
                  <span className="font-semibold text-slate-700">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> Sunday
                  </span>
                  <span className="font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded text-[11px]">
                    By Appointment Only
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 pt-1">• Timings are in IST</p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-800">What People Say</h3>
            <button className="text-xs font-semibold text-purple-600 hover:underline flex items-center gap-1">
              View All Reviews <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviewsList.map((rev, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-100 bg-[#FAFAFC] flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{rev.name}</h4>
                      <p className="text-[10px] text-slate-400">{rev.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-[11px] font-bold text-slate-700 ml-1">
                      {rev.rating.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>
                <span className="text-[10px] text-slate-400">{rev.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner inside Details */}
        <div className="bg-[#F6F4FE] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-purple-100">
          <div>
            <h2 className="text-base font-bold text-[#1a1040]">You Are Not Alone!</h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Talk to someone who understands and supports you.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow transition hover:opacity-95">
              Book a Session Now
            </button>
            <button className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-slate-50 transition">
              Message Mentor
            </button>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 text-center text-xs text-slate-500">
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span>100% Confidential</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Lock className="w-4 h-4 text-purple-600" />
            <span>Private & Secure Sessions</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-purple-600" />
            <span>Trusted Support Experts</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Clock className="w-4 h-4 text-purple-600" />
            <span>Flexible & Easy Booking</span>
          </div>
        </div>
      </div>
    </div>
  );
}