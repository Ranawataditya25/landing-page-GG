
// import React, { useState } from 'react';
// import { useLocation } from 'wouter';
// import { 
//   Star, Heart, Clock, CheckCircle2, ChevronRight, ChevronLeft, X, 
//   Info, Grid, List, MessageSquare, RotateCcw, SlidersHorizontal, Zap
// } from 'lucide-react';
// import  Banner  from './components/Banner';

// // Safe Fallback Banner Component in case local `./components/Banner` doesn't exist
// const SafeBanner = () => (
//   <div className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-6 px-4 text-center shadow-md">
//     <h1 className="text-xl md:text-2xl font-bold">Find & Connect with Top Academic Mentors</h1>
//     <p className="text-xs md:text-sm mt-1 text-orange-100">1:1 Mentorship, Online Classes & Doubt Solving for NEET & JEE</p>
//   </div>
// );

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
//   }
// ];

// export default function MentorsPage() {
//   // Using wouter's location hook instead of react-router-dom
//   const [, setLocation] = useLocation();

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

//   // Navigates to new route using wouter
//   const handleNavigateToProfile = (mentorId: number) => {
//     setLocation(`/mentorprofile?id=${mentorId}`);
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

//         <div className="flex flex-col lg:flex-row gap-6 items-start">
          
//           {/* ================= SIDEBAR FILTERS ================= */}
//           <aside className="w-full lg:w-[290px] flex-shrink-0 bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-4">
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
//                   className="w-full border border-gray-200 rounded-lg p-2 text-xs text-gray-600 bg-white focus:outline-none focus:ring-1 focus:ring-[#FF5722] mb-2"
//                 >
//                   <option value="">Select Language</option>
//                   <option value="English">English</option>
//                   <option value="Hindi">Hindi</option>
//                   <option value="Hinglish">Hinglish</option>
//                 </select>
//                 <div className="flex flex-wrap gap-1.5">
//                   {['English', 'Hindi', 'Hinglish'].map((lang) => {
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

//             <div className="pt-4 border-t border-gray-100 space-y-2">
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
//                       ({INITIAL_MENTORS.length} Mentors Found)
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
import { Header } from '../src/components/Header';
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

  // Navigates using Mentor's Name in URL parameter
  // const handleNavigateToProfile = (mentorName: string) => {
  //   setLocation(`/mentorprofile?name=${encodeURIComponent(mentorName)}`);
  // };

  const handleNavigateToProfile = (mentorName: string) => {
  // Line se spaces (%20) hatakar '-' (hyphen) lagayega
  const cleanName = mentorName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  setLocation(`/mentorprofile?name=${cleanName}`);
};

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-800 font-sans text-xs">
      <Header/>
    

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <Banner />
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
                              onClick={() => handleNavigateToProfile(mentor.name)}
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