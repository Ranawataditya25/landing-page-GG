



// import React, { useState } from 'react';
// import {
//   Users,
//   GraduationCap,
//   Star,
//   ShieldCheck,
//   Bookmark,
//   ChevronLeft,
//   ChevronRight,
//   Headphones,
//   CheckCircle2,
//   Award,
//   Clock,
//   MessageSquare,
//   ArrowRight,
// } from 'lucide-react';

// interface Mentor {
//   id: number;
//   name: string;
//   isVerified: boolean;
//   categoryTag: string;
//   categoryTagBg: string;
//   subtitle: string;
//   role: string;
//   roleColor: string;
//   rating: number;
//   studentsCount: string;
//   experience: string;
//   avatarUrl: string;
// }

// const mentorsData: Mentor[] = [
//   {
//     id: 1,
//     name: 'Rahul Sharma',
//     isVerified: true,
//     categoryTag: 'JEE',
//     categoryTagBg: 'bg-orange-500 text-white',
//     subtitle: 'IIT Delhi Alumnus',
//     role: 'JEE Physics Mentor',
//     roleColor: 'text-orange-600',
//     rating: 4.9,
//     studentsCount: '1,200+ Students',
//     experience: '8+ Years',
//     avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
//   },
//   {
//     id: 2,
//     name: 'Dr. Aditi Verma',
//     isVerified: true,
//     categoryTag: 'NEET',
//     categoryTagBg: 'bg-emerald-600 text-white',
//     subtitle: 'AIIMS Delhi Graduate',
//     role: 'NEET Biology Mentor',
//     roleColor: 'text-emerald-600',
//     rating: 4.9,
//     studentsCount: '950+ Students',
//     experience: '7+ Years',
//     avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
//   },
//   {
//     id: 3,
//     name: 'Ankit Jain',
//     isVerified: true,
//     categoryTag: 'Class 6 - 10',
//     categoryTagBg: 'bg-blue-600 text-white',
//     subtitle: 'IIT Bombay Alumnus',
//     role: 'Maths Mentor',
//     roleColor: 'text-blue-600',
//     rating: 4.8,
//     studentsCount: '1,500+ Students',
//     experience: '9+ Years',
//     avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
//   },
//   {
//     id: 4,
//     name: 'Neha Kapoor',
//     isVerified: true,
//     categoryTag: 'CAREER',
//     categoryTagBg: 'bg-purple-600 text-white',
//     subtitle: 'Ex. Career Analyst, NASSCOM',
//     role: 'Career & College Guidance',
//     roleColor: 'text-purple-600',
//     rating: 4.9,
//     studentsCount: '1,100+ Students',
//     experience: '6+ Years',
//     avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
//   },
// ];

// const categories = ['All', 'Class 1 - 5', 'Class 6 - 10', 'Class 11 - 12', 'JEE', 'NEET', 'Olympiad'];

// export const MentorsSection: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState<string>('All');

//   return (
//     <div className="w-full">
//       {/* Upper Mentors Section */}
//       <section className="bg-[#FFFDFB] py-10 px-4 md:px-12 text-slate-800">
//         <div className="max-w-7xl mx-auto space-y-10">
          
//           {/* Header Section */}
//           {/* <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
//             <div>
//               <div className="flex items-center gap-2 mb-1">
//                 <span className="w-6 h-[2px] bg-orange-500 inline-block"></span>
//                 <span className="text-xs font-bold tracking-wider text-orange-600 uppercase">
//                   Our Expert Mentors
//                 </span>
//               </div>
//               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//                 Meet Your Mentors
//               </h2>
//               <p className="text-slate-500 text-sm mt-1">
//                 Learn from experienced experts who are passionate about your success.
//               </p>
//             </div>

            
//             <div className="flex flex-wrap items-center gap-2">
//               <span className="text-xs font-semibold text-slate-600 mr-2">Explore mentors for:</span>
//               {categories.map((category) => {
//                 const isActive = activeCategory === category;
//                 return (
//                   <button
//                     key={category}
//                     onClick={() => setActiveCategory(category)}
//                     className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
//                       isActive
//                         ? 'bg-orange-500 text-white shadow-sm'
//                         : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 );
//               })}
//             </div>
//           </div> */}

// <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
//   <div>
//     <div className="flex items-center justify-center gap-2 mb-1">
//       <span className="w-6 h-[2px] bg-orange-500 inline-block"></span>
//       <span className="text-xs font-bold tracking-wider text-orange-600 uppercase">
//         Our Expert Mentors
//       </span>
//       <span className="w-6 h-[2px] bg-orange-500 inline-block"></span>
//     </div>
//     <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
//       Meet Your Mentors
//     </h2>
//     <p className="text-slate-500 text-sm mt-1">
//       Learn from experienced experts who are passionate about your success.
//     </p>
//   </div>

//   {/* Category Filters - Centered */}
//   <div className="flex flex-wrap items-center justify-center gap-2">
//     <span className="text-xs font-semibold text-slate-600 mr-2 w-full sm:w-auto">Explore mentors for:</span>
//     {categories.map((category) => {
//       const isActive = activeCategory === category;
//       return (
//         <button
//           key={category}
//           onClick={() => setActiveCategory(category)}
//           className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
//             isActive
//               ? 'bg-orange-500 text-white shadow-sm'
//               : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
//           }`}
//         >
//           {category}
//         </button>
//       );
//     })}
//   </div>
// </div>
          

//           {/* Feature Badges Banner */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-orange-50/60 p-4 rounded-2xl border border-orange-100">
//             <div className="flex items-center gap-3">
//               <div className="p-2.5 bg-orange-100 text-orange-600 rounded-xl">
//                 <Users className="w-5 h-5" />
//               </div>
//               <span className="text-xs font-bold text-slate-800 leading-tight">
//                 Experienced & Verified<br />Mentors
//               </span>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="p-2.5 bg-orange-100 text-orange-600 rounded-xl">
//                 <GraduationCap className="w-5 h-5" />
//               </div>
//               <span className="text-xs font-bold text-slate-800 leading-tight">
//                 Subject Experts from<br />Top Institutions
//               </span>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="p-2.5 bg-orange-100 text-orange-600 rounded-xl">
//                 <Star className="w-5 h-5 fill-orange-500 text-orange-500" />
//               </div>
//               <span className="text-xs font-bold text-slate-800 leading-tight">
//                 Trusted by Thousands<br />of Students
//               </span>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="p-2.5 bg-orange-100 text-orange-600 rounded-xl">
//                 <ShieldCheck className="w-5 h-5" />
//               </div>
//               <span className="text-xs font-bold text-slate-800 leading-tight">
//                 Personalized Guidance<br />for Better Results
//               </span>
//             </div>
//           </div>

//           {/* Mentor Cards Carousel Wrapper */}
//           <div className="relative group">
//             {/* Left Arrow */}
//             <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white border border-slate-200 shadow-md rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-50 transition">
//               <ChevronLeft className="w-5 h-5" />
//             </button>

//             {/* Cards Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {mentorsData.map((mentor) => (
//                 <div
//                   key={mentor.id}
//                   className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
//                 >
//                   <div>
//                     {/* Top Header inside Card */}
//                     <div className="flex justify-between items-start mb-2">
//                       <span
//                         className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${mentor.categoryTagBg}`}
//                       >
//                         {mentor.categoryTag}
//                       </span>
//                       <button className="text-slate-400 hover:text-slate-600">
//                         <Bookmark className="w-4 h-4" />
//                       </button>
//                     </div>

//                     {/* Avatar Section */}
//                     <div className="relative w-28 h-28 mx-auto my-2 rounded-full overflow-hidden bg-slate-100">
//                       <img
//                         src={mentor.avatarUrl}
//                         alt={mentor.name}
//                         className="w-full h-full object-cover object-top"
//                       />
//                     </div>

//                     {/* Info */}
//                     <div className="text-center mt-3">
//                       <div className="flex items-center justify-center gap-1">
//                         <h3 className="font-bold text-slate-900 text-base">{mentor.name}</h3>
//                         {mentor.isVerified && (
//                           <CheckCircle2 className="w-4 h-4 text-orange-500 fill-orange-500 text-white" />
//                         )}
//                       </div>
//                       <p className="text-xs text-slate-500 mt-0.5">{mentor.subtitle}</p>
//                       <p className={`text-xs font-semibold mt-1 ${mentor.roleColor}`}>
//                         {mentor.role}
//                       </p>
//                     </div>

//                     {/* Stats */}
//                     <div className="flex items-center justify-between text-[11px] text-slate-600 mt-4 px-1">
//                       <div className="flex items-center gap-1 font-semibold">
//                         <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
//                         <span>{mentor.rating}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Users className="w-3.5 h-3.5 text-slate-400" />
//                         <span>{mentor.studentsCount}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Clock className="w-3.5 h-3.5 text-slate-400" />
//                         <span>{mentor.experience}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Actions */}
//                   <div className="grid grid-cols-2 gap-2 mt-5">
//                     <button className="py-2 text-xs font-bold text-orange-600 border border-orange-200 rounded-lg hover:bg-orange-50 transition">
//                       View Profile
//                     </button>
//                     <button className="py-2 text-xs font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition">
//                       Book Session
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Arrow */}
//             <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white border border-slate-200 shadow-md rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-50 transition">
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>


// <div className="flex flex-col items-center justify-center gap-6 w-full text-center">
  
 

//   {/* Centered Orange Button */}
//   <div className="flex justify-center w-full mt-2">
//     <button className="flex items-center justify-center gap-2 bg-[#FF6B1A] hover:bg-[#E85A09] text-white font-medium text-base px-6 py-3 rounded-2xl shadow-md transition-all duration-200 active:scale-95">
//       <span>Explore All Mentors</span>
//       <svg 
//         className="w-5 h-5 stroke-[2.5]" 
//         fill="none" 
//         stroke="currentColor" 
//         viewBox="0 0 24 24" 
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path 
//           strokeLinecap="round" 
//           strokeLinejoin="round" 
//           d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
//         />
//       </svg>
//     </button>
//   </div>
// </div>


//           {/* CTA Section */}
//           <div className="bg-orange-50/80 rounded-2xl p-5 border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shrink-0">
//                 <Headphones className="w-6 h-6" />
//               </div>
//               <div>
//                 <h4 className="font-bold text-slate-900 text-base">Not sure who to choose?</h4>
//                 <p className="text-xs text-slate-500">
//                   Let us help you connect with the right mentor for your goals.
//                 </p>
//               </div>
//             </div>
//             <button className="whitespace-nowrap px-5 py-2.5 text-xs font-bold text-orange-600 bg-white border border-orange-200 rounded-xl hover:bg-orange-50 transition flex items-center gap-2">
//               Find My Mentor
//               <ArrowRight className="w-3.5 h-3.5" />
//             </button>
//           </div>

//           {/* Footer Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-4 border-t border-slate-100">
//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-orange-100/70 text-orange-600 rounded-2xl">
//                 <Users className="w-6 h-6" />
//               </div>
//               <div>
//                 <div className="font-extrabold text-slate-900 text-lg">5000+</div>
//                 <div className="text-xs text-slate-500 font-medium">Students Mentored</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-orange-100/70 text-orange-600 rounded-2xl">
//                 <Award className="w-6 h-6" />
//               </div>
//               <div>
//                 <div className="font-extrabold text-slate-900 text-lg">95%+</div>
//                 <div className="text-xs text-slate-500 font-medium">Success Rate</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-orange-100/70 text-orange-600 rounded-2xl">
//                 <ShieldCheck className="w-6 h-6" />
//               </div>
//               <div>
//                 <div className="text-xs font-bold text-slate-900">Trusted by</div>
//                 <div className="text-xs text-slate-500 font-medium">Students & Parents</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-orange-100/70 text-orange-600 rounded-2xl">
//                 <MessageSquare className="w-6 h-6" />
//               </div>
//               <div>
//                 <div className="text-xs font-bold text-slate-900">Personalized</div>
//                 <div className="text-xs text-slate-500 font-medium">Mentorship</div>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="p-3 bg-orange-100/70 text-orange-600 rounded-2xl">
//                 <Headphones className="w-6 h-6" />
//               </div>
//               <div>
//                 <div className="text-xs font-bold text-slate-900">Always Here</div>
//                 <div className="text-xs text-slate-500 font-medium">For You</div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* NEW BOTTOM SECTION (From Image) */}
//       <section className="bg-slate-50/60 py-16 px-4 md:px-12 border-t border-slate-100">
//         {/* <div className="max-w-7xl mx-auto text-center space-y-2">
//           <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase">
//             HOW OUR PROGRAM COMPARES
//           </span>
//           <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
//             What sets this <span className="text-orange-500">program apart?</span>
//           </h2>
//         </div> */}
//       </section>
//     </div>
//   );
// };

// export default MentorsSection;



import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import {
  Users,
  GraduationCap,
  Star,
  ShieldCheck,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Headphones,
  CheckCircle2,
  Award,
  Clock,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

// --- TYPES ---
export interface Mentor {
  id: number;
  name: string;
  isVerified: boolean;
  categoryTag: string;
  categoryTagBg: string;
  subtitle: string;
  role: string;
  roleColor: string;
  rating: number;
  studentsCount: string;
  experience: string;
  avatarUrl: string;
  about?: string;
  skills?: string[];
  education?: string[];
  hourlyRate?: string;
}

// --- MOCK DATA ---
export const mentorsData: Mentor[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    isVerified: true,
    categoryTag: 'JEE',
    categoryTagBg: 'bg-orange-500 text-white',
    subtitle: 'IIT Delhi Alumnus',
    role: 'JEE Physics Mentor',
    roleColor: 'text-orange-600',
    rating: 4.9,
    studentsCount: '1,200+ Students',
    experience: '8+ Years',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    about: 'Passionate Physics Educator dedicated to helping JEE aspirants master core concepts and problem-solving techniques.',
    skills: ['Kinematics', 'Electrodynamics', 'Modern Physics', 'Optics'],
    education: ['B.Tech, IIT Delhi'],
    hourlyRate: '₹1,200 / session',
  },
  {
    id: 2,
    name: 'Dr. Aditi Verma',
    isVerified: true,
    categoryTag: 'NEET',
    categoryTagBg: 'bg-emerald-600 text-white',
    subtitle: 'AIIMS Delhi Graduate',
    role: 'NEET Biology Mentor',
    roleColor: 'text-emerald-600',
    rating: 4.9,
    studentsCount: '950+ Students',
    experience: '7+ Years',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    about: 'Medical professional turned full-time NEET Biology mentor. Simplifies complex NCERT concepts through visual diagrams.',
    skills: ['Human Physiology', 'Genetics', 'Plant Anatomy'],
    education: ['MBBS, AIIMS New Delhi'],
    hourlyRate: '₹1,500 / session',
  },
  {
    id: 3,
    name: 'Ankit Jain',
    isVerified: true,
    categoryTag: 'Class 6 - 10',
    categoryTagBg: 'bg-blue-600 text-white',
    subtitle: 'IIT Bombay Alumnus',
    role: 'Maths Mentor',
    roleColor: 'text-blue-600',
    rating: 4.8,
    studentsCount: '1,500+ Students',
    experience: '9+ Years',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    about: 'Specializing in building strong mathematical foundations for school students.',
    skills: ['Algebra', 'Geometry', 'NTSE Prep'],
    education: ['B.Tech, IIT Bombay'],
    hourlyRate: '₹1,000 / session',
  },
  {
    id: 4,
    name: 'Neha Kapoor',
    isVerified: true,
    categoryTag: 'CAREER',
    categoryTagBg: 'bg-purple-600 text-white',
    subtitle: 'Ex. Career Analyst, NASSCOM',
    role: 'Career & College Guidance',
    roleColor: 'text-purple-600',
    rating: 4.9,
    studentsCount: '1,100+ Students',
    experience: '6+ Years',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    about: 'Helps students navigate career paths, entrance exam choices, and college selection.',
    skills: ['Stream Selection', 'College Counseling'],
    education: ['MBA, MDI Gurgaon'],
    hourlyRate: '₹1,800 / session',
  },
];

const categories = ['All', 'Class 1 - 5', 'Class 6 - 10', 'Class 11 - 12', 'JEE', 'NEET', 'Olympiad'];

// --- SECTION COMPONENT (Home Component) ---
export const MentorsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <section className="bg-[#FFFDFB] py-10 px-4 md:px-12 text-slate-800">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="w-6 h-[2px] bg-orange-500 inline-block"></span>
                <span className="text-xs font-bold tracking-wider text-orange-600 uppercase">
                  Our Expert Mentors
                </span>
                <span className="w-6 h-[2px] bg-orange-500 inline-block"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Meet Your Mentors
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Learn from experienced experts who are passionate about your success.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-semibold text-slate-600 mr-2 w-full sm:w-auto">
                Explore mentors for:
              </span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-orange-500 text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentorsData.map((mentor) => (
              <div
                key={mentor.id}
                onClick={() => navigate(`/mentordetail?id=${mentor.id}`)}
                className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${mentor.categoryTagBg}`}>
                      {mentor.categoryTag}
                    </span>
                    <button onClick={(e) => e.stopPropagation()} className="text-slate-400 hover:text-slate-600">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="relative w-28 h-28 mx-auto my-2 rounded-full overflow-hidden bg-slate-100">
                    <img src={mentor.avatarUrl} alt={mentor.name} className="w-full h-full object-cover object-top" />
                  </div>

                  <div className="text-center mt-3">
                    <div className="flex items-center justify-center gap-1">
                      <h3 className="font-bold text-slate-900 text-base">{mentor.name}</h3>
                      {mentor.isVerified && <CheckCircle2 className="w-4 h-4 text-orange-500 fill-orange-500 text-white" />}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{mentor.subtitle}</p>
                    <p className={`text-xs font-semibold mt-1 ${mentor.roleColor}`}>{mentor.role}</p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-600 mt-4 px-1">
                    <div className="flex items-center gap-1 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{mentor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{mentor.studentsCount}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{mentor.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/mentordetail?id=${mentor.id}`);
                    }}
                    className="py-2 text-xs font-bold text-orange-600 border border-orange-200 rounded-lg hover:bg-orange-50 transition"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/mentordetail?id=${mentor.id}`);
                    }}
                    className="py-2 text-xs font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                  >
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Explore All Mentors Click Action */}
          <div className="flex justify-center w-full mt-2">
            <button
              onClick={() => navigate('/mentordetail')}
              className="flex items-center justify-center gap-2 bg-[#FF6B1A] hover:bg-[#E85A09] text-white font-medium text-base px-6 py-3 rounded-2xl shadow-md transition-all duration-200 active:scale-95"
            >
              <span>Explore All Mentors</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

// --- MENTOR DETAIL PAGE COMPONENT (/mentordetail) ---
export const Mentordetail: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const selectedMentor = mentorsData.find((m) => m.id === Number(id));

  // If specific ID is passed, show single Detail View
  if (selectedMentor) {
    return (
      <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-12 text-slate-800">
        <div className="max-w-4xl mx-auto space-y-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6">
            <img
              src={selectedMentor.avatarUrl}
              alt={selectedMentor.name}
              className="w-32 h-32 rounded-2xl object-cover"
            />
            <div className="space-y-2 flex-1 text-center md:text-left">
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase ${selectedMentor.categoryTagBg}`}>
                {selectedMentor.categoryTag}
              </span>
              <h1 className="text-2xl font-bold text-slate-900">{selectedMentor.name}</h1>
              <p className="text-slate-500 text-sm">{selectedMentor.subtitle}</p>
              <p className={`text-xs font-semibold ${selectedMentor.roleColor}`}>{selectedMentor.role}</p>
              <p className="text-slate-600 text-sm pt-2">{selectedMentor.about}</p>
            </div>
            <button className="py-3 px-6 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600">
              Book Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If NO ID is passed, show ALL mentors grid
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-12 text-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <h1 className="text-3xl font-extrabold text-slate-900">All Mentors</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentorsData.map((m) => (
            <div
              key={m.id}
              onClick={() => navigate(`/mentordetail?id=${m.id}`)}
              className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm cursor-pointer hover:shadow-md"
            >
              <img src={m.avatarUrl} alt={m.name} className="w-20 h-20 mx-auto rounded-full object-cover" />
              <h3 className="text-center font-bold text-slate-900 mt-2">{m.name}</h3>
              <p className="text-center text-xs text-slate-500">{m.role}</p>
              <button className="mt-4 w-full py-2 bg-orange-500 text-white rounded-lg text-xs font-bold">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- APP COMPONENT ---
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MentorsSection />} />
        <Route path="/mentordetail" element={<Mentordetail />} />
      </Routes>
    </Router>
  );
}