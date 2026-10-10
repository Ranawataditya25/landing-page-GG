

// import React, { useState } from 'react';
// import { 
//   Home, 
//   UserCheck, 
//   Target, 
//   ShieldCheck, 
//   Star, 
//   MapPin, 
//   GraduationCap, 
//   Briefcase, 
//   BookOpen, 
//   CheckCircle, 
//   ChevronDown, 
//   ChevronLeft, 
//   ChevronRight 
// } from 'lucide-react';

// import { Header } from '../src/components/Header';

// interface Tutor {
//   id: number;
//   name: string;
//   image: string;
//   degree: string;
//   experience: string;
//   classes: string;
//   subjects: string;
//   boards: string;
//   rating: number;
//   reviewsCount: number;
//   price: string;
// }

// const tutorsData: Tutor[] = [
//   {
//     id: 1,
//     name: "Amit Sharma",
//     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
//     degree: "M.Sc. Physics, IIT Delhi",
//     experience: "8+ Years Experience",
//     classes: "Class 11 - 12",
//     subjects: "Physics, Mathematics",
//     boards: "CBSE | ICSE",
//     rating: 4.9,
//     reviewsCount: 128,
//     price: "₹4,500 / month"
//   },
//   {
//     id: 2,
//     name: "Pooja Yadav",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
//     degree: "M.Sc. Mathematics",
//     experience: "4+ Years Experience",
//     classes: "Class 6 - 12",
//     subjects: "Mathematics",
//     boards: "CBSE | ICSE",
//     rating: 4.6,
//     reviewsCount: 52,
//     price: "₹5,000 / month"
//   },
//   {
//     id: 3,
//     name: "Rohit Verma",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
//     degree: "M.Sc. Mathematics",
//     experience: "7+ Years Experience",
//     classes: "Class 7 - 12",
//     subjects: "Mathematics, Physics",
//     boards: "CBSE | ICSE",
//     rating: 4.7,
//     reviewsCount: 80,
//     price: "₹6,000 / month"
//   },
//   {
//     id: 4,
//     name: "Neha Gupta",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
//     degree: "B.Tech, NIT Warangal",
//     experience: "6+ Years Experience",
//     classes: "Class 6 - 12",
//     subjects: "Mathematics",
//     boards: "CBSE | State Board",
//     rating: 4.8,
//     reviewsCount: 96,
//     price: "₹6,500 / month"
//   },
//   {
//     id: 5,
//     name: "Saurabh Singh",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
//     degree: "B.Tech, IIT Roorkee",
//     experience: "5+ Years Experience",
//     classes: "Class 8 - 12",
//     subjects: "Physics",
//     boards: "CBSE | ICSE",
//     rating: 4.9,
//     reviewsCount: 64,
//     price: "₹7,000 / month"
//   },
//   {
//     id: 6,
//     name: "Ankit Kumar",
//     image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80",
//     degree: "M.Sc. Physics",
//     experience: "6+ Years Experience",
//     classes: "Class 8 - 12",
//     subjects: "Physics, Mathematics",
//     boards: "CBSE | State Board",
//     rating: 4.6,
//     reviewsCount: 58,
//     price: "₹7,500 / month"
//   }
// ];

// export default function TutorsListingPage() {
//   const [pinCode, setPinCode] = useState('');

//   const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const numericValue = e.target.value.replace(/\D/g, '');
//     if (numericValue.length <= 6) {
//       setPinCode(numericValue);
//     }
//   };

//   const handleNavigateToProfile = (tutorId: number) => {
//     // Router dependency break na ho isliye direct route navigation
//     window.location.href = `/profilelocaltutor/${tutorId}`;
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] text-slate-700 font-sans pb-12">
      
//       <Header/>
//       {/* <header className="bg-white border-b border-slate-200 py-3 px-4 mb-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <span className="font-bold text-slate-900 text-lg tracking-tight">FindMyTutor</span>
//         </div>
//       </header> */}

//       <div className="max-w-7xl mx-auto px-4">
//         {/* Banner Section */}
//         <div className="bg-[#FFF6F0] rounded-2xl p-5 mb-6 shadow-sm border border-orange-100 flex flex-col lg:flex-row items-center justify-between overflow-hidden gap-4">
//           <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 w-full">
//             <div className="pr-4 border-b lg:border-b-0 lg:border-r border-orange-200 min-w-[190px]">
//               <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Tutors Near You</h1>
//               <p className="text-xs text-slate-500 mt-1">We found 18 tutors for you</p>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 flex-1">
//               <div className="flex items-start gap-2">
//                 <div className="w-8 h-8 rounded-full bg-[#FF7043] flex items-center justify-center text-white shrink-0">
//                   <Home className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Personalized<br/>Home Tuition</h4>
//                   <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">One-to-one attention for better understanding and strong concepts.</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-2">
//                 <div className="w-8 h-8 rounded-full bg-[#2E7D32] flex items-center justify-center text-white shrink-0">
//                   <UserCheck className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Experienced<br/>Mentors</h4>
//                   <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Learn from qualified & verified mentors with years of teaching experience.</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-2">
//                 <div className="w-8 h-8 rounded-full bg-[#7B1FA2] flex items-center justify-center text-white shrink-0">
//                   <Target className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Better Results</h4>
//                   <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Regular assessments, concept clarity & doubt clearing to help you score better.</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-2">
//                 <div className="w-8 h-8 rounded-full bg-[#1976D2] flex items-center justify-center text-white shrink-0">
//                   <ShieldCheck className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Safe & Trusted</h4>
//                   <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Background verified tutors for a safe and reliable learning environment.</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-2">
//                 <div className="w-8 h-8 rounded-full bg-[#E91E63] flex items-center justify-center text-white shrink-0">
//                   <Star className="w-4 h-4 fill-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Flexible &<br/>Convenient</h4>
//                   <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Choose timing, days & mode of learning as per your convenience.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="hidden xl:flex items-center justify-center shrink-0 w-32 h-24 overflow-hidden rounded-2xl bg-orange-100/50">
//               <img 
//                 src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80" 
//                 alt="Tutor" 
//                 className="w-full h-full object-cover object-top"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Outlined Filter Bar */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5">
//           {/* PIN Code */}
//           <div className="flex flex-col">
//             <span className="text-[11px] font-bold text-slate-700 mb-1">PIN Code</span>
//             <div className="flex items-center gap-2 border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 transition shadow-sm h-11">
//               <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
//               <input 
//                 type="tel"
//                 inputMode="numeric"
//                 pattern="[0-9]*"
//                 placeholder="Enter PIN Code"
//                 value={pinCode} 
//                 onChange={handlePinChange}
//                 className="w-full text-xs font-semibold text-slate-800 outline-none bg-transparent placeholder:text-slate-400 placeholder:font-normal"
//               />
//             </div>
//           </div>

//           {/* Board */}
//           <div className="flex flex-col">
//             <span className="text-[11px] font-bold text-slate-700 mb-1">Board</span>
//             <div className="relative border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 transition shadow-sm h-11 flex items-center">
//               <select className="w-full text-xs text-slate-700 bg-transparent pr-6 font-medium appearance-none outline-none cursor-pointer">
//                 <option value="">Select Board</option>
//                 <option value="cbse">CBSE</option>
//                 <option value="icse">ICSE</option>
//                 <option value="state">State Board</option>
//               </select>
//               <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
//             </div>
//           </div>

//           {/* Class */}
//           <div className="flex flex-col">
//             <span className="text-[11px] font-bold text-slate-700 mb-1">Class</span>
//             <div className="relative border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 transition shadow-sm h-11 flex items-center">
//               <select className="w-full text-xs text-slate-700 bg-transparent pr-6 font-medium appearance-none outline-none cursor-pointer">
//                 <option value="">Select Class</option>
//                 <option value="class-6-8">Class 6 - 8</option>
//                 <option value="class-9-10">Class 9 - 10</option>
//                 <option value="class-11-12">Class 11 - 12</option>
//               </select>
//               <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
//             </div>
//           </div>

//           {/* Subject */}
//           <div className="flex flex-col">
//             <span className="text-[11px] font-bold text-slate-700 mb-1">Subject</span>
//             <div className="relative border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 transition shadow-sm h-11 flex items-center">
//               <select className="w-full text-xs text-slate-700 bg-transparent pr-6 font-medium appearance-none outline-none cursor-pointer">
//                 <option value="">Select Subject</option>
//                 <option value="maths">Mathematics</option>
//                 <option value="physics">Physics</option>
//                 <option value="chemistry">Chemistry</option>
//               </select>
//               <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
//             </div>
//           </div>

//           {/* Sort by */}
//           <div className="flex flex-col">
//             <span className="text-[11px] font-bold text-slate-700 mb-1">Sort by</span>
//             <div className="relative border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 transition shadow-sm h-11 flex items-center">
//               <select className="w-full text-xs text-slate-700 bg-transparent pr-6 font-medium appearance-none outline-none cursor-pointer">
//                 <option value="">Select Option</option>
//                 <option value="price-asc">Price: Low to High</option>
//                 <option value="price-desc">Price: High to Low</option>
//                 <option value="rating-desc">Rating: High to Low</option>
//               </select>
//               <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
//             </div>
//           </div>
//         </div>

//         {/* Tutor Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {tutorsData.map((tutor) => (
//             <div 
//               key={tutor.id} 
//               className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between overflow-hidden p-4"
//             >
//               <div>
//                 <div className="flex items-start gap-4">
//                   <img 
//                     src={tutor.image} 
//                     alt={tutor.name} 
//                     className="w-16 h-16 rounded-xl object-cover object-top border border-slate-100 shadow-sm shrink-0"
//                   />
//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-center gap-1">
//                       <h3 className="text-sm font-bold text-slate-900 truncate">{tutor.name}</h3>
//                       <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500 text-white shrink-0" />
//                     </div>

//                     <div className="mt-1 space-y-1">
//                       <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
//                         <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
//                         <span className="truncate">{tutor.degree}</span>
//                       </div>
//                       <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
//                         <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
//                         <span>{tutor.experience}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
//                   <div className="flex items-start gap-1.5 text-[11px] text-slate-600">
//                     <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
//                     <span>{tutor.classes}</span>
//                   </div>
//                   <div className="flex items-start gap-1.5 text-[11px] text-slate-600">
//                     <span className="w-3.5 h-3.5 flex items-center justify-center font-serif text-[10px] text-slate-400 shrink-0">ψ</span>
//                     <span>{tutor.subjects}</span>
//                   </div>
//                   <div className="flex items-start gap-1.5 text-[11px] text-slate-600">
//                     <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
//                     <span>{tutor.boards}</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-1 mt-3">
//                   <div className="flex text-amber-400">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
//                     ))}
//                   </div>
//                   <span className="text-xs font-bold text-slate-800 ml-1">{tutor.rating}</span>
//                   <span className="text-[10px] text-slate-400">({tutor.reviewsCount} Reviews)</span>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <div className="bg-[#EDF7EE] text-[#2E7D32] py-1.5 text-center text-xs font-bold rounded-lg mb-3">
//                   {tutor.price}
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-2">
//                   <button 
//                     onClick={() => handleNavigateToProfile(tutor.id)}
//                     className="w-full py-1.5 text-xs font-semibold text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-50 active:bg-blue-100 transition cursor-pointer"
//                   >
//                     View Profile
//                   </button>
//                   <button className="w-full py-1.5 text-xs font-semibold text-white bg-[#FF4500] hover:bg-[#E03E00] active:bg-[#c93700] rounded-lg transition shadow-sm cursor-pointer">
//                     Contact
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Bar */}
//         <div className="flex items-center justify-center gap-2 mt-8">
//           <button className="w-7 h-7 rounded border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition">
//             <ChevronLeft className="w-4 h-4" />
//           </button>
          
//           <button className="w-7 h-7 rounded bg-blue-600 text-white font-medium text-xs flex items-center justify-center">
//             1
//           </button>
          
//           <button className="w-7 h-7 rounded border border-slate-200 text-slate-700 font-medium text-xs flex items-center justify-center hover:bg-slate-100 transition">
//             2
//           </button>

//           <button className="w-7 h-7 rounded border border-slate-200 text-slate-700 font-medium text-xs flex items-center justify-center hover:bg-slate-100 transition">
//             3
//           </button>

//           <span className="text-xs text-slate-400 px-1">...</span>

//           <button className="w-7 h-7 rounded border border-slate-200 text-slate-700 font-medium text-xs flex items-center justify-center hover:bg-slate-100 transition">
//             4
//           </button>
          
//           <button className="w-7 h-7 rounded border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition">
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
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
  Loader2 
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

// Fallback static data in case API fails or while loading
const fallbackTutorsData: Tutor[] = [
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
  const [pinCode, setPinCode] = useState('');
  const [tutors, setTutors] = useState<Tutor[]>(fallbackTutorsData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch mentors data from API on component mount
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://goodguiders-maxbrain.onrender.com/api/stats/mentors');
        
        if (!response.ok) {
          throw new Error('Failed to fetch mentors data from server');
        }

        const data = await response.json();
        
        // Handle different possible API response structures (array or nested object)
        const mentorsList = Array.isArray(data) ? data : data.mentors || data.data || [];

        if (mentorsList.length > 0) {
          const formattedTutors: Tutor[] = mentorsList.map((item: any, index: number) => ({
            id: item.id || item._id || index + 1,
            name: item.name || item.fullName || "Verified Tutor",
            image: item.image || item.photo || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
            degree: item.degree || item.qualification || "Qualified Educator",
            experience: item.experience || "Experienced Mentor",
            classes: item.classes || "Class 6 - 12",
            subjects: item.subjects || "General Subjects",
            boards: item.boards || "CBSE | ICSE",
            rating: item.rating || 4.8,
            reviewsCount: item.reviewsCount || item.reviews || 50,
            price: item.price || "₹5,000 / month"
          }));
          setTutors(formattedTutors);
        }
      } catch (err: any) {
        console.error('Error fetching mentors:', err);
        setError(err.message || 'Something went wrong');
        // Keeps fallback data if fetch fails
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    if (numericValue.length <= 6) {
      setPinCode(numericValue);
    }
  };

  const handleNavigateToProfile = (tutorId: number) => {
    window.location.href = `/profilelocaltutor/${tutorId}`;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-700 font-sans pb-12">
      <Header />

      <div className="max-w-7xl mx-auto px-4 mt-4">
        {/* Banner Section */}
        <div className="bg-[#FFF6F0] rounded-2xl p-5 mb-6 shadow-sm border border-orange-100 flex flex-col lg:flex-row items-center justify-between overflow-hidden gap-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 w-full">
            <div className="pr-4 border-b lg:border-b-0 lg:border-r border-orange-200 min-w-[190px]">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Tutors Near You</h1>
              <p className="text-xs text-slate-500 mt-1">
                We found {tutors.length} tutors for you
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 flex-1">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FF7043] flex items-center justify-center text-white shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Personalized<br/>Home Tuition</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">One-to-one attention for better understanding.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2E7D32] flex items-center justify-center text-white shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Experienced<br/>Mentors</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Learn from qualified & verified mentors.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#7B1FA2] flex items-center justify-center text-white shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Better Results</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Regular assessments & doubt clearing.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1976D2] flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Safe & Trusted</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Background verified reliable tutors.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E91E63] flex items-center justify-center text-white shrink-0">
                  <Star className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Flexible &<br/>Convenient</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">Choose timing & mode as per convenience.</p>
                </div>
              </div>
            </div>

            <div className="hidden xl:flex items-center justify-center shrink-0 w-32 h-24 overflow-hidden rounded-2xl bg-orange-100/50">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80" 
                alt="Tutor Banner" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Outlined Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3.5">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-slate-700 mb-1">PIN Code</span>
            <div className="flex items-center gap-2 border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 transition shadow-sm h-11">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <input 
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter PIN Code"
                value={pinCode} 
                onChange={handlePinChange}
                className="w-full text-xs font-semibold text-slate-800 outline-none bg-transparent placeholder:text-slate-400 placeholder:font-normal"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-slate-700 mb-1">Board</span>
            <div className="relative border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 transition shadow-sm h-11 flex items-center">
              <select className="w-full text-xs text-slate-700 bg-transparent pr-6 font-medium appearance-none outline-none cursor-pointer">
                <option value="">Select Board</option>
                <option value="cbse">CBSE</option>
                <option value="icse">ICSE</option>
                <option value="state">State Board</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-slate-700 mb-1">Class</span>
            <div className="relative border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 transition shadow-sm h-11 flex items-center">
              <select className="w-full text-xs text-slate-700 bg-transparent pr-6 font-medium appearance-none outline-none cursor-pointer">
                <option value="">Select Class</option>
                <option value="class-6-8">Class 6 - 8</option>
                <option value="class-9-10">Class 9 - 10</option>
                <option value="class-11-12">Class 11 - 12</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-slate-700 mb-1">Subject</span>
            <div className="relative border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 transition shadow-sm h-11 flex items-center">
              <select className="w-full text-xs text-slate-700 bg-transparent pr-6 font-medium appearance-none outline-none cursor-pointer">
                <option value="">Select Subject</option>
                <option value="maths">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-slate-700 mb-1">Sort by</span>
            <div className="relative border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-blue-500 transition shadow-sm h-11 flex items-center">
              <select className="w-full text-xs text-slate-700 bg-transparent pr-6 font-medium appearance-none outline-none cursor-pointer">
                <option value="">Select Option</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating: High to Low</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-slate-200 mb-6">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-2" />
            <p className="text-xs text-slate-500 font-medium">Loading live mentors data...</p>
          </div>
        )}

        {/* Tutor Cards Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((tutor) => (
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
                    <button 
                      onClick={() => handleNavigateToProfile(tutor.id)}
                      className="w-full py-1.5 text-xs font-semibold text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-50 active:bg-blue-100 transition cursor-pointer"
                    >
                      View Profile
                    </button>
                    <button className="w-full py-1.5 text-xs font-semibold text-white bg-[#FF4500] hover:bg-[#E03E00] active:bg-[#c93700] rounded-lg transition shadow-sm cursor-pointer">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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