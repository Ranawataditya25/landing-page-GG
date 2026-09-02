// import React, { useState } from 'react';
// import { 
//   MapPin, 
//   GraduationCap, 
//   ShieldCheck, 
//   UserCheck, 
//   BookOpen, 
//   TrendingUp, 
//   Users, 
//   Star, 
//   Heart, 
//   ArrowRight,
//   Search,
//   BookMarked
// } from 'lucide-react';

// interface Tutor {
//   id: string;
//   name: string;
//   subject: string;
//   qualification: string;
//   location: string;
//   image: string;
//   status: 'Available' | 'Busy';
//   tags: string[];
//   rating: number;
//   reviewsCount: number;
//   hourlyRate: number;
// }

// const tutorsData: Tutor[] = [
//   {
//     id: '1',
//     name: 'Priya Sharma',
//     subject: 'Maths Tutor',
//     qualification: 'M.Sc. Mathematics',
//     location: 'Vaishali Nagar, Jaipur',
//     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
//     status: 'Available',
//     tags: ['Classes 1-5', 'CBSE', '5+ Years Exp.'],
//     rating: 4.9,
//     reviewsCount: 120,
//     hourlyRate: 400,
//   },
//   {
//     id: '2',
//     name: 'Rahul Verma',
//     subject: 'Science Tutor',
//     qualification: 'M.Tech. (IIT Roorkee)',
//     location: 'Mansarovar, Jaipur',
//     image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
//     status: 'Available',
//     tags: ['Classes 1-5', 'CBSE, RBSE', '7+ Years Exp.'],
//     rating: 4.8,
//     reviewsCount: 98,
//     hourlyRate: 450,
//   },
//   {
//     id: '3',
//     name: 'Neha Gupta',
//     subject: 'English Tutor',
//     qualification: 'M.A. English',
//     location: 'Jagatpura, Jaipur',
//     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
//     status: 'Available',
//     tags: ['Classes 1-5', 'CBSE, ICSE', '4+ Years Exp.'],
//     rating: 4.7,
//     reviewsCount: 76,
//     hourlyRate: 350,
//   },
//   {
//     id: '4',
//     name: 'Amit Singh',
//     subject: 'Hindi Tutor',
//     qualification: 'M.A. Hindi',
//     location: 'Malviya Nagar, Jaipur',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
//     status: 'Busy',
//     tags: ['Classes 1-5', 'CBSE, RBSE', '6+ Years Exp.'],
//     rating: 4.8,
//     reviewsCount: 110,
//     hourlyRate: 400,
//   },
// ];

// const valueProps = [
//   {
//     icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
//     iconBg: 'bg-emerald-50',
//     title: 'Verified & Trusted Tutors',
//     desc: 'Carefully verified for quality & safety.',
//   },
//   {
//     icon: <UserCheck className="w-6 h-6 text-purple-600" />,
//     iconBg: 'bg-purple-50',
//     title: 'Best Match for You',
//     desc: 'Find tutors as per your class, board & subject',
//   },
//   {
//     icon: <MapPin className="w-6 h-6 text-blue-600" />,
//     iconBg: 'bg-blue-50',
//     title: 'Tutors Near You',
//     desc: 'Learn from experienced tutors in your locality.',
//   },
//   {
//     icon: <BookOpen className="w-6 h-6 text-orange-500" />,
//     iconBg: 'bg-orange-50',
//     title: 'Personalized Learning',
//     desc: 'One-to-one attention for better understanding',
//   },
//   {
//     icon: <TrendingUp className="w-6 h-6 text-teal-600" />,
//     iconBg: 'bg-teal-50',
//     title: 'Better Learning. Better Results.',
//     desc: 'Concept clarity today, success tomorrow.',
//   },
// ];

// export default function TutorFinderPage() {
//   const [selectedTab, setSelectedTab] = useState<'1-5' | '6-10' | '10-12'>('1-5');
//   const [favorites, setFavorites] = useState<Record<string, boolean>>({});

//   const toggleFavorite = (id: string) => {
//     setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans p-4 sm:p-6 lg:p-10">
//       <div className="max-w-7xl mx-auto space-y-12">
        
//         {/* ================= HERO SECTION ================= */}
//         <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
//             {/* Left Column: Heading & Text */}
//             <div className="lg:col-span-7 space-y-6">
//               <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-600 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
//                 <MapPin className="w-4 h-4 text-orange-500" />
//                 Find Your Local Tutor
//               </div>

//               <div className="relative">
//                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2545] leading-tight tracking-tight">
//                   Find the Right Tutor <br className="hidden sm:inline" />
//                   Near You, With{' '}
//                   <span className="text-[#FF6B00] relative inline-block">
//                     Good Guiders
//                     <GraduationCap className="w-8 h-8 text-[#FF6B00] absolute -top-5 -right-9 rotate-12" />
//                   </span>
//                 </h1>
//                 <div className="w-12 h-1 bg-[#FF6B00] rounded-full mt-4" />
//               </div>

//               <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
//                 Good Guiders helps you connect with <strong className="text-slate-800 font-bold">trusted local tutors</strong> for personal attention, better results and academic growth.
//               </p>
//             </div>

//             {/* Right Column: Hero Graphic Card */}
//             <div className="lg:col-span-5 relative flex justify-center">
//               {/* Dotted Connection Path Decorator */}
//               <div className="absolute inset-0 border-2 border-dashed border-orange-200 rounded-full scale-95 pointer-events-none" />

//               <div className="relative z-10 w-full max-w-md bg-gradient-to-tr from-amber-50 to-orange-100/60 rounded-3xl p-4 sm:p-6 shadow-inner border border-orange-100">
//                 <div className="rounded-2xl overflow-hidden shadow-sm bg-white aspect-[4/3] relative">
//                   <img
//                     src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
//                     alt="Teacher assisting a young student"
//                     className="w-full h-full object-cover object-center"
//                   />
                  
//                   {/* Floating Map Pin Badge */}
//                   <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 shadow-lg border border-slate-100">
//                     <MapPin className="w-6 h-6 text-orange-500 fill-orange-500" />
//                   </div>
//                 </div>

//                 {/* Floating Card: Trusted Tutors */}
//                 <div className="absolute top-4 right-2 bg-[#0B2545] text-white px-3.5 py-2.5 rounded-xl shadow-lg flex items-center gap-2.5 border border-slate-700">
//                   <div className="p-1 bg-white/10 rounded-lg">
//                     <ShieldCheck className="w-4 h-4 text-orange-400" />
//                   </div>
//                   <div className="text-left">
//                     <div className="text-[11px] font-bold leading-none">Trusted Tutors</div>
//                     <div className="text-[9px] text-slate-300">Near You</div>
//                   </div>
//                 </div>

//                 {/* Floating Card: Personal Attention */}
//                 <div className="absolute bottom-1 right-4 bg-white text-slate-800 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3 border border-orange-100">
//                   <div className="p-2 bg-orange-50 rounded-lg">
//                     <Users className="w-4 h-4 text-orange-600" />
//                   </div>
//                   <div>
//                     <div className="text-xs font-bold leading-tight text-[#0B2545]">Personal Attention.</div>
//                     <div className="text-[10px] text-slate-500">Better Results.</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* ================= VALUE PROPOSITION / FEATURES ================= */}
//         <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
//           <div className="text-center mb-8">
//             <span className="text-xs uppercase tracking-wider text-orange-500 font-bold">•</span>
//             <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] inline-block mx-2">
//               Why Choose <span className="text-[#FF6B00]">Good Guiders</span> for Local Tutors?
//             </h2>
//             <span className="text-xs uppercase tracking-wider text-orange-500 font-bold">•</span>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {valueProps.map((item, index) => (
//               <div 
//                 key={index}
//                 className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAFAFA] hover:bg-white hover:shadow-md transition-all duration-200 border border-transparent hover:border-slate-100"
//               >
//                 <div className={`p-2.5 rounded-xl ${item.iconBg} flex-shrink-0`}>
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight mb-1">
//                     {item.title}
//                   </h3>
//                   <p className="text-[11px] text-slate-500 leading-normal">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ================= TUTORS DIRECTORY & FILTERS ================= */}
//         <div className="space-y-6">
          
//           {/* Section Header & Tab Controls */}
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <div className="flex items-center gap-2">
//               <span className="w-1.5 h-6 bg-[#FF6B00] rounded-full inline-block" />
//               <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
//                 Top Local Tutors Near You
//               </h2>
//             </div>

//             <div className="flex flex-wrap items-center gap-3">
//               {/* Class Tabs */}
//               <div className="bg-white p-1 rounded-2xl border border-slate-200 flex items-center shadow-sm">
//                 <button
//                   onClick={() => setSelectedTab('1-5')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
//                     selectedTab === '1-5'
//                       ? 'bg-orange-50 text-orange-600 border border-orange-200 shadow-sm'
//                       : 'text-slate-600 hover:text-slate-900'
//                   }`}
//                 >
//                   <span>👦</span> Class 1 – 5
//                 </button>
//                 <button
//                   onClick={() => setSelectedTab('6-10')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
//                     selectedTab === '6-10'
//                       ? 'bg-orange-50 text-orange-600 border border-orange-200 shadow-sm'
//                       : 'text-slate-600 hover:text-slate-900'
//                   }`}
//                 >
//                   <span>🧑</span> Class 6 – 10
//                 </button>
//                 <button
//                   onClick={() => setSelectedTab('10-12')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
//                     selectedTab === '10-12'
//                       ? 'bg-orange-50 text-orange-600 border border-orange-200 shadow-sm'
//                       : 'text-slate-600 hover:text-slate-900'
//                   }`}
//                 >
//                   <span>👨‍🎓</span> Class 10 – 12
//                 </button>
//               </div>

//               {/* View All Link */}
//               <a
//                 href="#all-tutors"
//                 className="text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1.5 pl-2 transition"
//               >
//                 View All Tutors <ArrowRight className="w-3.5 h-3.5" />
//               </a>
//             </div>
//           </div>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {tutorsData.map((tutor) => {
//               const isFav = !!favorites[tutor.id];
//               const isAvailable = tutor.status === 'Available';

//               return (
//                 <div
//                   key={tutor.id}
//                   className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
//                 >
//                   <div>
//                     {/* Top status & Favorite icon */}
//                     <div className="flex items-center justify-between mb-4">
//                       <span
//                         className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${
//                           isAvailable
//                             ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
//                             : 'bg-orange-50 text-orange-600 border-orange-100'
//                         }`}
//                       >
//                         {tutor.status}
//                       </span>
//                       <button
//                         onClick={() => toggleFavorite(tutor.id)}
//                         className="text-slate-400 hover:text-red-500 transition-colors"
//                         aria-label="Save tutor"
//                       >
//                         <Heart
//                           className={`w-4 h-4 ${isFav ? 'text-red-500 fill-red-500' : ''}`}
//                         />
//                       </button>
//                     </div>

//                     {/* Tutor Profile Details */}
//                     <div className="flex items-center gap-3.5 mb-4">
//                       <div className="relative">
//                         <img
//                           src={tutor.image}
//                           alt={tutor.name}
//                           className="w-14 h-14 rounded-full object-cover border-2 border-orange-100"
//                         />
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-slate-900 text-sm">{tutor.name}</h3>
//                         <p className="text-xs font-semibold text-slate-600">{tutor.subject}</p>
//                         <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
//                           <BookMarked className="w-3 h-3 text-slate-400" />
//                           <span className="truncate max-w-[130px]">{tutor.qualification}</span>
//                         </div>
//                         <div className="flex items-center gap-1 text-[11px] text-slate-500">
//                           <MapPin className="w-3 h-3 text-slate-400" />
//                           <span className="truncate max-w-[130px]">{tutor.location}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-1.5 mb-5">
//                       {tutor.tags.map((tag, idx) => (
//                         <span
//                           key={idx}
//                           className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${
//                             idx === 0
//                               ? 'bg-amber-50 text-amber-700'
//                               : idx === 1
//                               ? 'bg-emerald-50 text-emerald-700'
//                               : 'bg-purple-50 text-purple-700'
//                           }`}
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Rating and Price Footer */}
//                   <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
//                     <div className="flex items-center gap-1 text-slate-700">
//                       <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
//                       <span className="font-bold">{tutor.rating}</span>
//                       <span className="text-[11px] text-slate-400">({tutor.reviewsCount} Reviews)</span>
//                     </div>
//                     <div className="font-extrabold text-slate-900 text-sm">
//                       ₹{tutor.hourlyRate}
//                       <span className="text-[11px] font-normal text-slate-500"> /hr</span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* ================= BOTTOM CTA BANNER ================= */}
//         <div className="bg-[#FFF8F0] border border-orange-200/60 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
//           <div className="flex items-center gap-4 text-center md:text-left">
//             <div className="w-12 h-12 rounded-2xl bg-orange-100/80 flex items-center justify-center flex-shrink-0">
//               <GraduationCap className="w-7 h-7 text-[#FF6B00]" />
//             </div>
//             <div>
//               <p className="text-slate-800 text-sm sm:text-base font-semibold max-w-xl">
//                 Good Guiders connects you with the best local tutors, to help you learn better, stay ahead and achieve your goals.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <button className="bg-[#FF6B00] hover:bg-[#e05e00] text-white px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all">
//               <Search className="w-4 h-4" />
//               Find Your Local Tutor Now
//               <ArrowRight className="w-4 h-4" />
//             </button>
            
//             {/* Hand-drawn decorative curly indicator */}
//             <span className="text-orange-400 font-mono text-2xl hidden lg:inline-block rotate-45 select-none">
//               ⤷
//             </span>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { 
  MapPin, 
  GraduationCap, 
  ShieldCheck, 
  UserCheck, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Star, 
  Heart, 
  ArrowRight,
  Search,
  BookMarked,
  ChevronDown
} from 'lucide-react';
import  {Header}  from './Header';

interface Tutor {
  id: string;
  name: string;
  subject: string;
  qualification: string;
  location: string;
  image: string;
  status: 'Available' | 'Busy';
  tags: string[];
  rating: number;
  reviewsCount: number;
  hourlyRate: number;
}

const tutorsData: Tutor[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    subject: 'Maths Tutor',
    qualification: 'M.Sc. Mathematics',
    location: 'Vaishali Nagar, Jaipur',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    status: 'Available',
    tags: ['Classes 1-5', 'CBSE', '5+ Years Exp.'],
    rating: 4.9,
    reviewsCount: 120,
    hourlyRate: 400,
  },
  {
    id: '2',
    name: 'Rahul Verma',
    subject: 'Science Tutor',
    qualification: 'M.Tech. (IIT Roorkee)',
    location: 'Mansarovar, Jaipur',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    status: 'Available',
    tags: ['Classes 1-5', 'CBSE, RBSE', '7+ Years Exp.'],
    rating: 4.8,
    reviewsCount: 98,
    hourlyRate: 450,
  },
  {
    id: '3',
    name: 'Neha Gupta',
    subject: 'English Tutor',
    qualification: 'M.A. English',
    location: 'Jagatpura, Jaipur',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    status: 'Available',
    tags: ['Classes 1-5', 'CBSE, ICSE', '4+ Years Exp.'],
    rating: 4.7,
    reviewsCount: 76,
    hourlyRate: 350,
  },
  {
    id: '4',
    name: 'Amit Singh',
    subject: 'Hindi Tutor',
    qualification: 'M.A. Hindi',
    location: 'Malviya Nagar, Jaipur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    status: 'Busy',
    tags: ['Classes 1-5', 'CBSE, RBSE', '6+ Years Exp.'],
    rating: 4.8,
    reviewsCount: 110,
    hourlyRate: 400,
  },
];

const valueProps = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    iconBg: 'bg-emerald-50',
    title: 'Verified & Trusted Tutors',
    desc: 'Carefully verified for quality & safety.',
  },
  {
    icon: <UserCheck className="w-6 h-6 text-purple-600" />,
    iconBg: 'bg-purple-50',
    title: 'Best Match for You',
    desc: 'Find tutors as per your class, board & subject',
  },
  {
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    iconBg: 'bg-blue-50',
    title: 'Tutors Near You',
    desc: 'Learn from experienced tutors in your locality.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-orange-500" />,
    iconBg: 'bg-orange-50',
    title: 'Personalized Learning',
    desc: 'One-to-one attention for better understanding',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-teal-600" />,
    iconBg: 'bg-teal-50',
    title: 'Better Learning. Better Results.',
    desc: 'Concept clarity today, success tomorrow.',
  },
];

export default function TutorFinderPage() {
  const [selectedClass, setSelectedClass] = useState<string>('1-5');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans p-4 sm:p-6 lg:p-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ================= HERO SECTION ================= */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <Header/>
            {/* Left Column: Heading & Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-600 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                <MapPin className="w-4 h-4 text-orange-500" />
                Find Your Local Tutor
              </div>

              <div className="relative">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2545] leading-tight tracking-tight">
                  Find the Right Tutor <br className="hidden sm:inline" />
                  Near You, With{' '}
                  <span className="text-[#FF6B00] relative inline-block">
                    Good Guiders
                    <GraduationCap className="w-8 h-8 text-[#FF6B00] absolute -top-5 -right-9 rotate-12" />
                  </span>
                </h1>
                <div className="w-12 h-1 bg-[#FF6B00] rounded-full mt-4" />
              </div>

              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                Good Guiders helps you connect with <strong className="text-slate-800 font-bold">trusted local tutors</strong> for personal attention, better results and academic growth.
              </p>
            </div>

            {/* Right Column: Hero Graphic Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute inset-0 border-2 border-dashed border-orange-200 rounded-full scale-95 pointer-events-none" />

              <div className="relative z-10 w-full max-w-md bg-gradient-to-tr from-amber-50 to-orange-100/60 rounded-3xl p-4 sm:p-6 shadow-inner border border-orange-100">
                <div className="rounded-2xl overflow-hidden shadow-sm bg-white aspect-[4/3] relative">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
                    alt="Teacher assisting a young student"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 shadow-lg border border-slate-100">
                    <MapPin className="w-6 h-6 text-orange-500 fill-orange-500" />
                  </div>
                </div>

                <div className="absolute top-4 right-2 bg-[#0B2545] text-white px-3.5 py-2.5 rounded-xl shadow-lg flex items-center gap-2.5 border border-slate-700">
                  <div className="p-1 bg-white/10 rounded-lg">
                    <ShieldCheck className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-bold leading-none">Trusted Tutors</div>
                    <div className="text-[9px] text-slate-300">Near You</div>
                  </div>
                </div>

                <div className="absolute bottom-1 right-4 bg-white text-slate-800 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3 border border-orange-100">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Users className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight text-[#0B2545]">Personal Attention.</div>
                    <div className="text-[10px] text-slate-500">Better Results.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= VALUE PROPOSITION / FEATURES ================= */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-wider text-orange-500 font-bold">•</span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] inline-block mx-2">
              Why Choose <span className="text-[#FF6B00]">Good Guiders</span> for Local Tutors?
            </h2>
            <span className="text-xs uppercase tracking-wider text-orange-500 font-bold">•</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {valueProps.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAFAFA] hover:bg-white hover:shadow-md transition-all duration-200 border border-transparent hover:border-slate-100"
              >
                <div className={`p-2.5 rounded-xl ${item.iconBg} flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TUTORS DIRECTORY & FILTERS ================= */}
        <div className="space-y-6">
          
          {/* Section Header & Dropdown Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#FF6B00] rounded-full inline-block" />
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                Top Local Tutors Near You
              </h2>
            </div>

            <div className="flex items-center gap-4">
              Selected class
              {/* Choose Class Dropdown */}
              <div className="relative inline-block">
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-2xl pl-4 pr-10 py-2.5 shadow-sm hover:border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 cursor-pointer transition-all"
                >
                  <option disabled value="">Choose Class</option>
                  <option value="1-5">Class 1 – 5</option>
                  <option value="6-10">Class 6 – 10</option>
                
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* View All Link */}
             
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorsData.map((tutor) => {
              const isFav = !favorites[tutor.id];
              const isAvailable = tutor.status === 'Available';

              return (
                <div
                  key={tutor.id}
                  className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top status & Favorite icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${
                          isAvailable
                            ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                            : 'bg-orange-50 text-orange-600 border-orange-100'
                        }`}
                      >
                        {tutor.status}
                      </span>
                      <button
                        onClick={() => toggleFavorite(tutor.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors"
                        aria-label="Save tutor"
                      >
                        <Heart
                          className={`w-4 h-4 ${isFav ? 'text-red-500 fill-red-500' : ''}`}
                        />
                      </button>
                    </div>

                    {/* Tutor Profile Details */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="relative">
                        <img
                          src={tutor.image}
                          alt={tutor.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-orange-100"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">{tutor.name}</h3>
                        <p className="text-xs font-semibold text-slate-600">{tutor.subject}</p>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                          <BookMarked className="w-3 h-3 text-slate-400" />
                          <span className="truncate max-w-[130px]">{tutor.qualification}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span className="truncate max-w-[130px]">{tutor.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {tutor.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${
                            idx === 0
                              ? 'bg-amber-50 text-amber-700'
                              : idx === 1
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-purple-50 text-purple-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rating and Price Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-slate-700">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span className="font-bold">{tutor.rating}</span>
                      <span className="text-[11px] text-slate-400">({tutor.reviewsCount} Reviews)</span>
                    </div>
                    <div className="font-extrabold text-slate-900 text-sm">
                      ₹{tutor.hourlyRate}
                      <span className="text-[11px] font-normal text-slate-500"> /hr</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM CTA BANNER ================= */}
        <div className="bg-[#FFF8F0] border border-orange-200/60 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-orange-100/80 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-7 h-7 text-[#FF6B00]" />
            </div>
            <div>
              <p className="text-slate-800 text-sm sm:text-base font-semibold max-w-xl">
                Good Guiders connects you with the best local tutors, to help you learn better, stay ahead and achieve your goals.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-[#FF6B00] hover:bg-[#e05e00] text-white px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all">
              <Search className="w-4 h-4" />
              Find Your Local Tutor Now
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <span className="text-orange-400 font-mono text-2xl hidden lg:inline-block rotate-45 select-none">
              ⤷
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}