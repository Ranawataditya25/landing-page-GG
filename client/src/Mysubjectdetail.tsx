// // // // // import React, { useState } from "react";
// // // // // import {
// // // // //   Search,
// // // // //   ChevronRight,
// // // // //   HelpCircle,
// // // // //   FileText,
// // // // //   Users,
// // // // //   CheckCircle2,
// // // // //   BookOpen,
// // // // //   Calculator,
// // // // //   FlaskConical,
// // // // //   Globe,
// // // // //   ArrowRight,
// // // // //   Landmark,
// // // // // } from "lucide-react";

// // // // // const statesList = [
// // // // //   "CBSE",
// // // // //   "Andhra Pradesh",
// // // // //   "Arunachal Pradesh",
// // // // //   "Assam",
// // // // //   "Bihar",
// // // // //   "Chhattisgarh",
// // // // //   "Goa",
// // // // //   "Gujarat",
// // // // //   "Haryana",
// // // // //   "Himachal Pradesh",
// // // // //   "Jharkhand",
// // // // //   "Karnataka",
// // // // //   "Kerala",
// // // // //   "Madhya Pradesh",
// // // // //   "Maharashtra",
// // // // //   "Manipur",
// // // // //   "Meghalaya",
// // // // //   "Odisha",
// // // // //   "Punjab",
// // // // // ];

// // // // // const subjects = [
// // // // //   {
// // // // //     title: "English",
// // // // //     desc: "Grammar, Prose, Poetry, Comprehension and more",
// // // // //     icon: <BookOpen className="w-7 h-7 text-blue-500" />,
// // // // //     color: "blue",
// // // // //     borderClass: "border-blue-200 text-blue-600 hover:bg-blue-50",
// // // // //   },
// // // // //   {
// // // // //     title: "Mathematics",
// // // // //     desc: "Numbers, Algebra, Geometry, Mensuration and more",
// // // // //     icon: <Calculator className="w-7 h-7 text-emerald-500" />,
// // // // //     color: "emerald",
// // // // //     borderClass: "border-emerald-200 text-emerald-600 hover:bg-emerald-50",
// // // // //   },
// // // // //   {
// // // // //     title: "Science",
// // // // //     desc: "Physics, Chemistry, Biology and more",
// // // // //     icon: <FlaskConical className="w-7 h-7 text-purple-500" />,
// // // // //     color: "purple",
// // // // //     borderClass: "border-purple-200 text-purple-600 hover:bg-purple-50",
// // // // //   },
// // // // //   {
// // // // //     title: "Social Science",
// // // // //     desc: "History, Geography, Civics, Economics and more",
// // // // //     icon: <Globe className="w-7 h-7 text-amber-600" />,
// // // // //     color: "amber",
// // // // //     borderClass: "border-amber-200 text-amber-600 hover:bg-amber-50",
// // // // //   },
// // // // //   {
// // // // //     title: "Telugu",
// // // // //     desc: "తెలుగు పాఠాలు, వ్యాకరణం, సాహిత్యం మరియు మరిన్ని",
// // // // //     customIcon: (
// // // // //       <span className="text-2xl font-bold text-pink-500 leading-none">తె</span>
// // // // //     ),
// // // // //     borderClass: "border-pink-200 text-pink-600 hover:bg-pink-50",
// // // // //   },
// // // // //   {
// // // // //     title: "Hindi",
// // // // //     desc: "व्याकरण, पाठ, कविता, लेखन और अधिक",
// // // // //     customIcon: (
// // // // //       <span className="text-2xl font-bold text-amber-600 leading-none">अ</span>
// // // // //     ),
// // // // //     borderClass: "border-amber-200 text-amber-600 hover:bg-amber-50",
// // // // //   },
// // // // //   {
// // // // //     title: "Sanskrit",
// // // // //     desc: "शब्द, व्याकरण, अनुवाद, श्लोक और अधिक",
// // // // //     customIcon: (
// // // // //       <span className="text-2xl font-bold text-teal-600 leading-none">ॐ</span>
// // // // //     ),
// // // // //     borderClass: "border-teal-200 text-teal-600 hover:bg-teal-50",
// // // // //   },
// // // // //   {
// // // // //     title: "Urdu",
// // // // //     desc: "نثر ، نظم ، قواعد ، مکالمہ اور بہت کچھ",
// // // // //     customIcon: (
// // // // //       <span className="text-2xl font-bold text-green-600 leading-none">ٹ</span>
// // // // //     ),
// // // // //     borderClass: "border-green-200 text-green-600 hover:bg-green-50",
// // // // //   },
// // // // // ];

// // // // // const features = [
// // // // //   "Topic Wise Questions",
// // // // //   "Model Papers",
// // // // //   "Chapter Wise Questions",
// // // // //   "Practice Tests",
// // // // //   "Assignments & Worksheets",
// // // // //   "Exam Guidance",
// // // // // ];

// // // // // export default function ClassSubjectsDashboard() {
// // // // //   const [selectedState, setSelectedState] = useState("CBSE");
// // // // //   const [searchQuery, setSearchQuery] = useState("");

// // // // //   const filteredStates = statesList.filter((item) =>
// // // // //     item.toLowerCase().includes(searchQuery.toLowerCase())
// // // // //   );

// // // // //   return (
// // // // //     <div className="min-vh-100 bg-[#f8fafc] p-4 md:p-8 font-sans text-slate-700">
// // // // //       <div className="max-w-7xl mx-auto space-y-6">
        
// // // // //         {/* Top Banner Card */}
// // // // //         <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
// // // // //           <div className="flex-1 space-y-4">
// // // // //             <div>
// // // // //               <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
// // // // //                 Class 6 – All Subjects
// // // // //               </h1>
// // // // //               <p className="text-slate-500 text-sm mt-1 max-w-xl">
// // // // //                 Explore all subjects for Class 6 and access the best study
// // // // //                 resources, practice tests and much more.
// // // // //               </p>
// // // // //             </div>

// // // // //             {/* Metric Pills */}
// // // // //             <div className="flex flex-wrap items-center gap-3 pt-2">
// // // // //               <div className="flex items-center gap-3 bg-white border border-slate-100 shadow-sm rounded-xl px-4 py-2">
// // // // //                 <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
// // // // //                   <HelpCircle className="w-5 h-5" />
// // // // //                 </div>
// // // // //                 <div>
// // // // //                   <div className="font-bold text-sm text-slate-900">5,000+</div>
// // // // //                   <div className="text-xs text-slate-400">Questions</div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="flex items-center gap-3 bg-white border border-slate-100 shadow-sm rounded-xl px-4 py-2">
// // // // //                 <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
// // // // //                   <FileText className="w-5 h-5" />
// // // // //                 </div>
// // // // //                 <div>
// // // // //                   <div className="font-bold text-sm text-slate-900">100+</div>
// // // // //                   <div className="text-xs text-slate-400">Model Papers</div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="flex items-center gap-3 bg-white border border-slate-100 shadow-sm rounded-xl px-4 py-2">
// // // // //                 <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
// // // // //                   <Users className="w-5 h-5" />
// // // // //                 </div>
// // // // //                 <div>
// // // // //                   <div className="font-bold text-sm text-slate-900">500+</div>
// // // // //                   <div className="text-xs text-slate-400">Mentors</div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Features Column */}
// // // // //           <div className="flex-1 max-w-md w-full">
// // // // //             <h3 className="font-semibold text-sm text-slate-900 mb-3">
// // // // //               What You'll Get Here
// // // // //             </h3>
// // // // //             <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-medium text-slate-600">
// // // // //               {features.map((feature, idx) => (
// // // // //                 <div key={idx} className="flex items-center gap-2">
// // // // //                   <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
// // // // //                   <span>{feature}</span>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Illustration Section */}
// // // // //           <div className="hidden lg:flex items-center justify-center relative w-48 h-36">
// // // // //             <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 absolute -top-1 right-2">
// // // // //               <Globe className="w-16 h-16" />
// // // // //             </div>
// // // // //             <div className="absolute bottom-0 left-0 bg-emerald-500 h-6 w-28 rounded-md shadow -rotate-3"></div>
// // // // //             <div className="absolute bottom-5 left-2 bg-amber-500 h-6 w-28 rounded-md shadow 1"></div>
// // // // //             <div className="absolute bottom-10 left-1 bg-blue-600 h-6 w-28 rounded-md shadow -rotate-1"></div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Main Content Area */}
// // // // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          
// // // // //           {/* Left Sidebar */}
// // // // //           <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
// // // // //             <div className="flex items-center gap-2 text-slate-800 font-semibold mb-4 px-2">
// // // // //               <Landmark className="w-5 h-5 text-indigo-900" />
// // // // //               <span>Select State / Board</span>
// // // // //             </div>

// // // // //             <div className="relative mb-3">
// // // // //               <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Search State / Board..."
// // // // //                 value={searchQuery}
// // // // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // // // //                 className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-indigo-500 focus:bg-white transition"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="space-y-1 max-h-[520px] overflow-y-auto pr-1">
// // // // //               {filteredStates.map((state) => {
// // // // //                 const isActive = selectedState === state;
// // // // //                 return (
// // // // //                   <button
// // // // //                     key={state}
// // // // //                     onClick={() => setSelectedState(state)}
// // // // //                     className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition text-left ${
// // // // //                       isActive
// // // // //                         ? "bg-[#0b104a] text-white shadow-sm"
// // // // //                         : "text-slate-600 hover:bg-slate-50"
// // // // //                     }`}
// // // // //                   >
// // // // //                     <span>{state}</span>
// // // // //                     <ChevronRight
// // // // //                       className={`w-3.5 h-3.5 ${
// // // // //                         isActive ? "text-white" : "text-slate-400"
// // // // //                       }`}
// // // // //                     />
// // // // //                   </button>
// // // // //                 );
// // // // //               })}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Right Subject Cards Grid */}
// // // // //           <div className="md:col-span-3 space-y-4">
// // // // //             <div className="flex justify-between items-center bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100">
// // // // //               <div>
// // // // //                 <h2 className="text-lg font-bold text-slate-900">
// // // // //                   {selectedState} Board
// // // // //                 </h2>
// // // // //                 <p className="text-xs text-slate-500 mt-0.5">
// // // // //                   Select a subject to access study materials, notes, and practice tests.
// // // // //                 </p>
// // // // //               </div>
// // // // //               <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
// // // // //                 <BookOpen className="w-4 h-4" />
// // // // //               </button>
// // // // //             </div>

// // // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // // // //               {subjects.map((subj, index) => (
// // // // //                 <div
// // // // //                   key={index}
// // // // //                   className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between items-center text-center hover:shadow-md transition-shadow min-h-[220px]"
// // // // //                 >
// // // // //                   <div className="flex flex-col items-center">
// // // // //                     <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
// // // // //                       {subj.icon || subj.customIcon}
// // // // //                     </div>

// // // // //                     <h3 className="font-bold text-slate-900 text-sm mb-1">
// // // // //                       {subj.title}
// // // // //                     </h3>
// // // // //                     <p className="text-[11px] text-slate-400 leading-relaxed max-w-[160px]">
// // // // //                       {subj.desc}
// // // // //                     </p>
// // // // //                   </div>

// // // // //                   <button
// // // // //                     className={`mt-4 w-full py-1.5 px-3 border rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition ${subj.borderClass}`}
// // // // //                   >
// // // // //                     <span>Explore {subj.title}</span>
// // // // //                     <ArrowRight className="w-3 h-3" />
// // // // //                   </button>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }





// // // // import React, { useState } from "react";
// // // // import { useLocation, useSearchParams } from "react-router-dom";
// // // // import {
// // // //   Search,
// // // //   ChevronRight,
// // // //   HelpCircle,
// // // //   FileText,
// // // //   Users,
// // // //   CheckCircle2,
// // // //   BookOpen,
// // // //   Calculator,
// // // //   FlaskConical,
// // // //   Globe,
// // // //   ArrowRight,
// // // //   Landmark,
// // // // } from "lucide-react";

// // // // const statesList = [
// // // //   "CBSE",
// // // //   "Andhra Pradesh",
// // // //   "Arunachal Pradesh",
// // // //   "Assam",
// // // //   "Bihar",
// // // //   "Chhattisgarh",
// // // //   "Goa",
// // // //   "Gujarat",
// // // //   "Haryana",
// // // //   "Himachal Pradesh",
// // // //   "Jharkhand",
// // // //   "Karnataka",
// // // //   "Kerala",
// // // //   "Madhya Pradesh",
// // // //   "Maharashtra",
// // // //   "Manipur",
// // // //   "Meghalaya",
// // // //   "Odisha",
// // // //   "Punjab",
// // // // ];

// // // // const subjects = [
// // // //   {
// // // //     title: "English",
// // // //     desc: "Grammar, Prose, Poetry, Comprehension and more",
// // // //     icon: <BookOpen className="w-7 h-7 text-blue-500" />,
// // // //     color: "blue",
// // // //     borderClass: "border-blue-200 text-blue-600 hover:bg-blue-50",
// // // //   },
// // // //   {
// // // //     title: "Mathematics",
// // // //     desc: "Numbers, Algebra, Geometry, Mensuration and more",
// // // //     icon: <Calculator className="w-7 h-7 text-emerald-500" />,
// // // //     color: "emerald",
// // // //     borderClass: "border-emerald-200 text-emerald-600 hover:bg-emerald-50",
// // // //   },
// // // //   {
// // // //     title: "Science",
// // // //     desc: "Physics, Chemistry, Biology and more",
// // // //     icon: <FlaskConical className="w-7 h-7 text-purple-500" />,
// // // //     color: "purple",
// // // //     borderClass: "border-purple-200 text-purple-600 hover:bg-purple-50",
// // // //   },
// // // //   {
// // // //     title: "Social Science",
// // // //     desc: "History, Geography, Civics, Economics and more",
// // // //     icon: <Globe className="w-7 h-7 text-amber-600" />,
// // // //     color: "amber",
// // // //     borderClass: "border-amber-200 text-amber-600 hover:bg-amber-50",
// // // //   },
// // // //   {
// // // //     title: "Telugu",
// // // //     desc: "తెలుగు పాఠాలు, వ్యాకరణం, సాహిత్యం మరియు మరిన్ని",
// // // //     customIcon: (
// // // //       <span className="text-2xl font-bold text-pink-500 leading-none">తె</span>
// // // //     ),
// // // //     borderClass: "border-pink-200 text-pink-600 hover:bg-pink-50",
// // // //   },
// // // //   {
// // // //     title: "Hindi",
// // // //     desc: "व्याकरण, पाठ, कविता, लेखन और अधिक",
// // // //     customIcon: (
// // // //       <span className="text-2xl font-bold text-amber-600 leading-none">अ</span>
// // // //     ),
// // // //     borderClass: "border-amber-200 text-amber-600 hover:bg-amber-50",
// // // //   },
// // // //   {
// // // //     title: "Sanskrit",
// // // //     desc: "शब्द, व्याकरण, अनुवाद, श्लोक और अधिक",
// // // //     customIcon: (
// // // //       <span className="text-2xl font-bold text-teal-600 leading-none">ॐ</span>
// // // //     ),
// // // //     borderClass: "border-teal-200 text-teal-600 hover:bg-teal-50",
// // // //   },
// // // //   {
// // // //     title: "Urdu",
// // // //     desc: "نثر ، نظم ، قواعد ، مکالمہ اور بہت کچھ",
// // // //     customIcon: (
// // // //       <span className="text-2xl font-bold text-green-600 leading-none">ٹ</span>
// // // //     ),
// // // //     borderClass: "border-green-200 text-green-600 hover:bg-green-50",
// // // //   },
// // // // ];

// // // // const features = [
// // // //   "Topic Wise Questions",
// // // //   "Model Papers",
// // // //   "Chapter Wise Questions",
// // // //   "Practice Tests",
// // // //   "Assignments & Worksheets",
// // // //   "Exam Guidance",
// // // // ];

// // // // export default function ClassSubjectsDashboard() {
// // // //   const [selectedState, setSelectedState] = useState("CBSE");
// // // //   const [searchQuery, setSearchQuery] = useState("");

// // // //   // Navigation State & Query Params Access
// // // //   const location = useLocation();
// // // //   const [searchParams] = useSearchParams();

// // // //   // Selected Class read logic (State se ya URL Query se)
// // // //   const navState = location.state as {
// // // //     id?: number;
// // // //     title?: string;
// // // //     stream?: string;
// // // //     subtitle?: string;
// // // //   } | null;

// // // //   const queryClass = searchParams.get("class");
// // // //   const currentClassName =
// // // //     navState?.title || (queryClass ? `Class ${queryClass}` : "Class 6");

// // // //   const filteredStates = statesList.filter((item) =>
// // // //     item.toLowerCase().includes(searchQuery.toLowerCase())
// // // //   );

// // // //   return (
// // // //     <div className="min-h-screen bg-[#f8fafc] p-4 md:p-8 font-sans text-slate-700">
// // // //       <div className="max-w-7xl mx-auto space-y-6">

// // // //         {/* Top Banner Card */}
// // // //         <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
// // // //           <div className="flex-1 space-y-4">
// // // //             <div>
// // // //               <div className="flex items-center gap-2 mb-1">
// // // //                 <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2.5 py-1 rounded-md">
// // // //                   {currentClassName}
// // // //                 </span>
// // // //                 {navState?.stream && (
// // // //                   <span className="bg-purple-50 text-purple-600 text-xs font-bold px-2.5 py-1 rounded-md">
// // // //                     {navState.stream} Stream
// // // //                   </span>
// // // //                 )}
// // // //               </div>
// // // //               <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
// // // //                 {currentClassName} – All Subjects
// // // //               </h1>
// // // //               <p className="text-slate-500 text-sm mt-1 max-w-xl">
// // // //                 Explore all subjects for {currentClassName} and access the best study
// // // //                 resources, practice tests, and syllabus material.
// // // //               </p>
// // // //             </div>

// // // //             {/* Metric Pills */}
// // // //             <div className="flex flex-wrap items-center gap-3 pt-2">
// // // //               <div className="flex items-center gap-3 bg-white border border-slate-100 shadow-sm rounded-xl px-4 py-2">
// // // //                 <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
// // // //                   <HelpCircle className="w-5 h-5" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <div className="font-bold text-sm text-slate-900">5,000+</div>
// // // //                   <div className="text-xs text-slate-400">Questions</div>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="flex items-center gap-3 bg-white border border-slate-100 shadow-sm rounded-xl px-4 py-2">
// // // //                 <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
// // // //                   <FileText className="w-5 h-5" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <div className="font-bold text-sm text-slate-900">100+</div>
// // // //                   <div className="text-xs text-slate-400">Model Papers</div>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="flex items-center gap-3 bg-white border border-slate-100 shadow-sm rounded-xl px-4 py-2">
// // // //                 <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
// // // //                   <Users className="w-5 h-5" />
// // // //                 </div>
// // // //                 <div>
// // // //                   <div className="font-bold text-sm text-slate-900">500+</div>
// // // //                   <div className="text-xs text-slate-400">Mentors</div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Features Column */}
// // // //           <div className="flex-1 max-w-md w-full">
// // // //             <h3 className="font-semibold text-sm text-slate-900 mb-3">
// // // //               What You'll Get in {currentClassName}
// // // //             </h3>
// // // //             <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-medium text-slate-600">
// // // //               {features.map((feature, idx) => (
// // // //                 <div key={idx} className="flex items-center gap-2">
// // // //                   <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
// // // //                   <span>{feature}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* Illustration Section */}
// // // //           <div className="hidden lg:flex items-center justify-center relative w-48 h-36">
// // // //             <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 absolute -top-1 right-2">
// // // //               <Globe className="w-16 h-16" />
// // // //             </div>
// // // //             <div className="absolute bottom-0 left-0 bg-emerald-500 h-6 w-28 rounded-md shadow -rotate-3"></div>
// // // //             <div className="absolute bottom-5 left-2 bg-amber-500 h-6 w-28 rounded-md shadow 1"></div>
// // // //             <div className="absolute bottom-10 left-1 bg-blue-600 h-6 w-28 rounded-md shadow -rotate-1"></div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Main Content Area */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">

// // // //           {/* Left Sidebar */}
// // // //           <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
// // // //             <div className="flex items-center gap-2 text-slate-800 font-semibold mb-4 px-2">
// // // //               <Landmark className="w-5 h-5 text-indigo-900" />
// // // //               <span>Select State / Board</span>
// // // //             </div>

// // // //             <div className="relative mb-3">
// // // //               <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Search State / Board..."
// // // //                 value={searchQuery}
// // // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // // //                 className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-indigo-500 focus:bg-white transition"
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-1 max-h-[520px] overflow-y-auto pr-1">
// // // //               {filteredStates.map((state) => {
// // // //                 const isActive = selectedState === state;
// // // //                 return (
// // // //                   <button
// // // //                     key={state}
// // // //                     onClick={() => setSelectedState(state)}
// // // //                     className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition text-left ${
// // // //                       isActive
// // // //                         ? "bg-[#0b104a] text-white shadow-sm"
// // // //                         : "text-slate-600 hover:bg-slate-50"
// // // //                     }`}
// // // //                   >
// // // //                     <span>{state}</span>
// // // //                     <ChevronRight
// // // //                       className={`w-3.5 h-3.5 ${
// // // //                         isActive ? "text-white" : "text-slate-400"
// // // //                       }`}
// // // //                     />
// // // //                   </button>
// // // //                 );
// // // //               })}
// // // //             </div>
// // // //           </div>

// // // //           {/* Right Subject Cards Grid */}
// // // //           <div className="md:col-span-3 space-y-4">
// // // //             <div className="flex justify-between items-center bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100">
// // // //               <div>
// // // //                 <h2 className="text-lg font-bold text-slate-900">
// // // //                   {selectedState} Board – {currentClassName}
// // // //                 </h2>
// // // //                 <p className="text-xs text-slate-500 mt-0.5">
// // // //                   Select a subject to access study materials, notes, and practice tests.
// // // //                 </p>
// // // //               </div>
// // // //               <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
// // // //                 <BookOpen className="w-4 h-4" />
// // // //               </button>
// // // //             </div>

// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // // //               {subjects.map((subj, index) => (
// // // //                 <div
// // // //                   key={index}
// // // //                   className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between items-center text-center hover:shadow-md transition-shadow min-h-[220px]"
// // // //                 >
// // // //                   <div className="flex flex-col items-center">
// // // //                     <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
// // // //                       {subj.icon || subj.customIcon}
// // // //                     </div>

// // // //                     <h3 className="font-bold text-slate-900 text-sm mb-1">
// // // //                       {subj.title}
// // // //                     </h3>
// // // //                     <p className="text-[11px] text-slate-400 leading-relaxed max-w-[160px]">
// // // //                       {subj.desc}
// // // //                     </p>
// // // //                   </div>

// // // //                   <button
// // // //                     className={`mt-4 w-full py-1.5 px-3 border rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition ${subj.borderClass}`}
// // // //                   >
// // // //                     <span>Explore {subj.title}</span>
// // // //                     <ArrowRight className="w-3 h-3" />
// // // //                   </button>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }




// // // // import React, { useState } from "react";
// // // // import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
// // // // import {
// // // //   Search,
// // // //   ChevronRight,
// // // //   HelpCircle,
// // // //   FileText,
// // // //   Users,
// // // //   CheckCircle2,
// // // //   BookOpen,
// // // //   Calculator,
// // // //   FlaskConical,
// // // //   Globe,
// // // //   ArrowRight,
// // // //   Landmark,
// // // //   ArrowLeft,
// // // //   GraduationCap,
// // // //   Sparkles,
// // // //   BookMarked,
// // // // } from "lucide-react";

// // // // const statesList = [
// // // //   "CBSE",
// // // //   "ICSE",
// // // //   "Rajasthan (RBSE)",
// // // //   "Uttar Pradesh (UPMSP)",
// // // //   "Maharashtra (MSBSHSE)",
// // // //   "Bihar (BSEB)",
// // // //   "Madhya Pradesh (MPBSE)",
// // // //   "Gujarat (GSEB)",
// // // //   "Karnataka (KSEEB)",
// // // //   "Andhra Pradesh",
// // // //   "Tamil Nadu",
// // // //   "West Bengal",
// // // //   "Punjab (PSEB)",
// // // //   "Haryana (HBSE)",
// // // // ];

// // // // const subjectCatalog: Record<string, Array<{
// // // //   title: string;
// // // //   desc: string;
// // // //   icon: React.ReactNode;
// // // //   borderClass: string;
// // // //   chaptersCount: number;
// // // //   questionsCount: string;
// // // // }>> = {
// // // //   default: [
// // // //     {
// // // //       title: "Mathematics",
// // // //       desc: "Numbers, Algebra, Geometry, Statistics & Arithmetic",
// // // //       icon: <Calculator className="w-6 h-6 text-emerald-600" />,
// // // //       borderClass: "border-emerald-200 text-emerald-700 hover:bg-emerald-50/50",
// // // //       chaptersCount: 14,
// // // //       questionsCount: "1,200+",
// // // //     },
// // // //     {
// // // //       title: "Science",
// // // //       desc: "Physics concepts, Chemistry reactions & Life Sciences",
// // // //       icon: <FlaskConical className="w-6 h-6 text-blue-600" />,
// // // //       borderClass: "border-blue-200 text-blue-700 hover:bg-blue-50/50",
// // // //       chaptersCount: 16,
// // // //       questionsCount: "1,500+",
// // // //     },
// // // //     {
// // // //       title: "English",
// // // //       desc: "Grammar, Literature, Reading Comprehension & Writing",
// // // //       icon: <BookOpen className="w-6 h-6 text-rose-600" />,
// // // //       borderClass: "border-rose-200 text-rose-700 hover:bg-rose-50/50",
// // // //       chaptersCount: 12,
// // // //       questionsCount: "800+",
// // // //     },
// // // //     {
// // // //       title: "Social Science",
// // // //       desc: "History, Geography, Democratic Politics & Economics",
// // // //       icon: <Globe className="w-6 h-6 text-amber-600" />,
// // // //       borderClass: "border-amber-200 text-amber-700 hover:bg-amber-50/50",
// // // //       chaptersCount: 18,
// // // //       questionsCount: "950+",
// // // //     },
// // // //     {
// // // //       title: "Hindi",
// // // //       desc: "व्याकरण, पाठ, गद्य-पद्य, निबंध एवं पत्र लेखन",
// // // //       icon: <span className="text-xl font-bold text-purple-600">अ</span>,
// // // //       borderClass: "border-purple-200 text-purple-700 hover:bg-purple-50/50",
// // // //       chaptersCount: 15,
// // // //       questionsCount: "600+",
// // // //     },
// // // //     {
// // // //       title: "Sanskrit",
// // // //       desc: "शब्द रूप, धातु रूप, अनुवाद एवं श्लोक",
// // // //       icon: <span className="text-xl font-bold text-teal-600">ॐ</span>,
// // // //       borderClass: "border-teal-200 text-teal-700 hover:bg-teal-50/50",
// // // //       chaptersCount: 10,
// // // //       questionsCount: "400+",
// // // //     },
// // // //   ],
// // // // };

// // // // const deliverables = [
// // // //   "Chapter-wise Question Bank",
// // // //   "Previous 10-Year Solved Papers",
// // // //   "Revision Notes & Cheat Sheets",
// // // //   "Adaptive Practice Quizzes",
// // // //   "Mock Tests with National Rank",
// // // //   "Instant Step-by-Step Solutions",
// // // // ];

// // // // export default function ClassSubjectsDashboard() {
// // // //   const [selectedState, setSelectedState] = useState("CBSE");
// // // //   const [searchQuery, setSearchQuery] = useState("");
// // // //   const [activeTab, setActiveTab] = useState<"all" | "core" | "language">("all");

// // // //   const location = useLocation();
// // // //   const [searchParams] = useSearchParams();
// // // //   const navigate = useNavigate();

// // // //   const navState = location.state as {
// // // //     id?: number;
// // // //     title?: string;
// // // //     stream?: string;
// // // //     subtitle?: string;
// // // //     classNumber?: string;
// // // //   } | null;

// // // //   const rawQueryClass = searchParams.get("class");
// // // //   const queryStream = searchParams.get("stream");

// // // //   // Dynamic class title resolution
// // // //   const displayedTitle =
// // // //     navState?.title ||
// // // //     (rawQueryClass ? (rawQueryClass.toLowerCase().includes("class") ? rawQueryClass : `Class ${rawQueryClass}`) : "Class 6");

// // // //   const displayedStream = navState?.stream || queryStream || "";

// // // //   const filteredStates = statesList.filter((item) =>
// // // //     item.toLowerCase().includes(searchQuery.toLowerCase())
// // // //   );

// // // //   const subjects = subjectCatalog.default;

// // // //   return (
// // // //     <div className="min-h-screen bg-slate-50/70 p-4 sm:p-6 lg:p-8 font-sans text-slate-800">
// // // //       <div className="max-w-7xl mx-auto space-y-6">
// // // //         {/* Navigation Bar */}
// // // //         <div className="flex items-center justify-between">
// // // //           <button
// // // //             onClick={() => navigate(-1)}
// // // //             className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200/80 px-3.5 py-2 rounded-xl shadow-xs transition"
// // // //           >
// // // //             <ArrowLeft className="w-4 h-4" />
// // // //             <span>Back to Classes</span>
// // // //           </button>

// // // //           <div className="text-xs font-semibold text-slate-500">
// // // //             Selected: <span className="text-orange-600 font-bold">{selectedState} Board</span>
// // // //           </div>
// // // //         </div>

// // // //         {/* Hero Banner */}
// // // //         <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 relative overflow-hidden flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
// // // //           <div className="flex-1 space-y-4">
// // // //             <div className="flex flex-wrap items-center gap-2">
// // // //               <span className="bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider">
// // // //                 {displayedTitle}
// // // //               </span>
// // // //               {displayedStream && (
// // // //                 <span className="bg-purple-50 border border-purple-200 text-purple-700 text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider">
// // // //                   {displayedStream}
// // // //                 </span>
// // // //               )}
// // // //               <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
// // // //                 <Sparkles className="w-3 h-3" />
// // // //                 Updated 2026 Curriculum
// // // //               </span>
// // // //             </div>

// // // //             <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
// // // //               {displayedTitle} {displayedStream ? `(${displayedStream})` : ""} – All Subjects
// // // //             </h1>

// // // //             <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
// // // //               Access comprehensive learning material, chapter-wise practice tests, solved question banks, and live mentor guidance aligned with the <strong>{selectedState}</strong> board syllabus.
// // // //             </p>

// // // //             {/* Quick Metrics */}
// // // //             <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
// // // //               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center">
// // // //                 <div className="text-lg font-black text-slate-900">5,000+</div>
// // // //                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Questions</div>
// // // //               </div>
// // // //               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center">
// // // //                 <div className="text-lg font-black text-slate-900">120+</div>
// // // //                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mock Papers</div>
// // // //               </div>
// // // //               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center">
// // // //                 <div className="text-lg font-black text-slate-900">500+</div>
// // // //                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mentors</div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Right Checklist Box */}
// // // //           <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 w-full lg:w-80">
// // // //             <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
// // // //               <BookMarked className="w-4 h-4 text-orange-600" />
// // // //               Included Resources
// // // //             </h3>
// // // //             <div className="space-y-2">
// // // //               {deliverables.map((item, idx) => (
// // // //                 <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
// // // //                   <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
// // // //                   <span>{item}</span>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Main Content Layout */}
// // // //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
// // // //           {/* Sidebar (State & Board Selector) */}
// // // //           <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200/80">
// // // //             <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-3">
// // // //               <Landmark className="w-4 h-4 text-orange-600" />
// // // //               <span>Select State / Board</span>
// // // //             </div>

// // // //             <div className="relative mb-3">
// // // //               <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Search board..."
// // // //                 value={searchQuery}
// // // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // // //                 className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-orange-500 focus:bg-white transition"
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-1 max-h-[460px] overflow-y-auto pr-1">
// // // //               {filteredStates.map((state) => {
// // // //                 const isActive = selectedState === state;
// // // //                 return (
// // // //                   <button
// // // //                     key={state}
// // // //                     onClick={() => setSelectedState(state)}
// // // //                     className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-semibold rounded-xl transition ${
// // // //                       isActive
// // // //                         ? "bg-orange-600 text-white shadow-xs"
// // // //                         : "text-slate-600 hover:bg-slate-50"
// // // //                     }`}
// // // //                   >
// // // //                     <span>{state}</span>
// // // //                     <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
// // // //                   </button>
// // // //                 );
// // // //               })}
// // // //             </div>
// // // //           </div>

// // // //           {/* Subjects Grid */}
// // // //           <div className="lg:col-span-3 space-y-4">
// // // //             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200/80 gap-3">
// // // //               <div>
// // // //                 <h2 className="text-base font-bold text-slate-900">
// // // //                   {selectedState} • {displayedTitle} Subjects
// // // //                 </h2>
// // // //                 <p className="text-xs text-slate-400 font-medium">
// // // //                   Select a subject to begin practice test or read detailed chapter notes.
// // // //                 </p>
// // // //               </div>
// // // //             </div>

// // // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
// // // //               {subjects.map((subj, index) => (
// // // //                 <div
// // // //                   key={index}
// // // //                   className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200/80 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[240px] group"
// // // //                 >
// // // //                   <div>
// // // //                     <div className="flex items-center justify-between mb-4">
// // // //                       <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
// // // //                         {subj.icon}
// // // //                       </div>
// // // //                       <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
// // // //                         {subj.chaptersCount} Chapters
// // // //                       </span>
// // // //                     </div>

// // // //                     <h3 className="font-extrabold text-slate-900 text-base mb-1 group-hover:text-orange-600 transition-colors">
// // // //                       {subj.title}
// // // //                     </h3>
// // // //                     <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
// // // //                       {subj.desc}
// // // //                     </p>
// // // //                   </div>

// // // //                   <div className="pt-4 border-t border-slate-100 mt-4">
// // // //                     <button
// // // //                       onClick={() =>
// // // //                         navigate(
// // // //                           `/subject-chapters?class=${encodeURIComponent(
// // // //                             displayedTitle
// // // //                           )}&subject=${encodeURIComponent(subj.title)}&board=${encodeURIComponent(
// // // //                             selectedState
// // // //                           )}`
// // // //                         )
// // // //                       }
// // // //                       className={`w-full py-2.5 px-3 border rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${subj.borderClass}`}
// // // //                     >
// // // //                       <span>Explore {subj.title}</span>
// // // //                       <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }




// // // import React, { useState } from "react";
// // // import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
// // // import {
// // //   Search,
// // //   ChevronRight,
// // //   CheckCircle2,
// // //   BookOpen,
// // //   Calculator,
// // //   FlaskConical,
// // //   Globe,
// // //   ArrowRight,
// // //   Landmark,
// // //   ArrowLeft,
// // //   Sparkles,
// // //   BookMarked,
// // // } from "lucide-react";

// // // const statesList: string[] = [
// // //   "CBSE",
// // //   "ICSE",
// // //   "Rajasthan (RBSE)",
// // //   "Uttar Pradesh (UPMSP)",
// // //   "Maharashtra (MSBSHSE)",
// // //   "Bihar (BSEB)",
// // //   "Madhya Pradesh (MPBSE)",
// // //   "Gujarat (GSEB)",
// // //   "Karnataka (KSEEB)",
// // //   "Andhra Pradesh",
// // //   "Tamil Nadu",
// // //   "West Bengal",
// // //   "Punjab (PSEB)",
// // //   "Haryana (HBSE)",
// // // ];

// // // interface SubjectItem {
// // //   title: string;
// // //   desc: string;
// // //   icon: React.ReactNode;
// // //   borderClass: string;
// // //   chaptersCount: number;
// // //   questionsCount: string;
// // // }

// // // const subjectCatalog: Record<string, SubjectItem[]> = {
// // //   default: [
// // //     {
// // //       title: "Mathematics",
// // //       desc: "Numbers, Algebra, Geometry, Statistics & Arithmetic",
// // //       icon: <Calculator className="w-6 h-6 text-emerald-600" />,
// // //       borderClass: "border-emerald-200 text-emerald-700 hover:bg-emerald-50/50",
// // //       chaptersCount: 14,
// // //       questionsCount: "1,200+",
// // //     },
// // //     {
// // //       title: "Science",
// // //       desc: "Physics concepts, Chemistry reactions & Life Sciences",
// // //       icon: <FlaskConical className="w-6 h-6 text-blue-600" />,
// // //       borderClass: "border-blue-200 text-blue-700 hover:bg-blue-50/50",
// // //       chaptersCount: 16,
// // //       questionsCount: "1,500+",
// // //     },
// // //     {
// // //       title: "English",
// // //       desc: "Grammar, Literature, Reading Comprehension & Writing",
// // //       icon: <BookOpen className="w-6 h-6 text-rose-600" />,
// // //       borderClass: "border-rose-200 text-rose-700 hover:bg-rose-50/50",
// // //       chaptersCount: 12,
// // //       questionsCount: "800+",
// // //     },
// // //     {
// // //       title: "Social Science",
// // //       desc: "History, Geography, Democratic Politics & Economics",
// // //       icon: <Globe className="w-6 h-6 text-amber-600" />,
// // //       borderClass: "border-amber-200 text-amber-700 hover:bg-amber-50/50",
// // //       chaptersCount: 18,
// // //       questionsCount: "950+",
// // //     },
// // //     {
// // //       title: "Hindi",
// // //       desc: "व्याकरण, पाठ, गद्य-पद्य, निबंध एवं पत्र लेखन",
// // //       icon: <span className="text-xl font-bold text-purple-600">अ</span>,
// // //       borderClass: "border-purple-200 text-purple-700 hover:bg-purple-50/50",
// // //       chaptersCount: 15,
// // //       questionsCount: "600+",
// // //     },
// // //     {
// // //       title: "Sanskrit",
// // //       desc: "शब्द रूप, धातु रूप, अनुवाद एवं श्लोक",
// // //       icon: <span className="text-xl font-bold text-teal-600">ॐ</span>,
// // //       borderClass: "border-teal-200 text-teal-700 hover:bg-teal-50/50",
// // //       chaptersCount: 10,
// // //       questionsCount: "400+",
// // //     },
// // //   ],
// // // };

// // // const deliverables = [
// // //   "Chapter-wise Question Bank",
// // //   "Previous 10-Year Solved Papers",
// // //   "Revision Notes & Cheat Sheets",
// // //   "Adaptive Practice Quizzes",
// // //   "Mock Tests with National Rank",
// // //   "Instant Step-by-Step Solutions",
// // // ];

// // // export default function ClassSubjectsDashboard() {
// // //   const [selectedState, setSelectedState] = useState("CBSE");
// // //   const [searchQuery, setSearchQuery] = useState("");

// // //   // Safe router hooks handling
// // //   const location = useLocation();
// // //   const [searchParams] = useSearchParams();
// // //   const navigate = useNavigate();

// // //   const navState = (location?.state || {}) as {
// // //     id?: number;
// // //     title?: string;
// // //     stream?: string;
// // //     subtitle?: string;
// // //     classNumber?: string;
// // //   };

// // //   const rawQueryClass = searchParams ? searchParams.get("class") : null;
// // //   const queryStream = searchParams ? searchParams.get("stream") : null;

// // //   // Dynamic class title resolution
// // //   const displayedTitle =
// // //     navState?.title ||
// // //     (rawQueryClass
// // //       ? rawQueryClass.toLowerCase().includes("class")
// // //         ? rawQueryClass
// // //         : `Class ${rawQueryClass}`
// // //       : "Class 6");

// // //   const displayedStream = navState?.stream || queryStream || "";

// // //   const filteredStates = statesList.filter((item) =>
// // //     item.toLowerCase().includes(searchQuery.toLowerCase())
// // //   );

// // //   const subjects = subjectCatalog.default || [];

// // //   return (
// // //     <div className="min-h-screen bg-slate-50/70 p-4 sm:p-6 lg:p-8 font-sans text-slate-800">
// // //       <div className="max-w-7xl mx-auto space-y-6">
// // //         {/* Navigation Bar */}
// // //         <div className="flex items-center justify-between">
// // //           <button
// // //             type="button"
// // //             onClick={() => navigate(-1)}
// // //             className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3.5 py-2 rounded-xl shadow-sm transition hover:shadow cursor-pointer"
// // //           >
// // //             <ArrowLeft className="w-4 h-4" />
// // //             <span>Back to Classes</span>
// // //           </button>

// // //           <div className="text-xs font-semibold text-slate-500">
// // //             Selected: <span className="text-orange-600 font-bold">{selectedState} Board</span>
// // //           </div>
// // //         </div>

// // //         {/* Hero Banner */}
// // //         <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 relative overflow-hidden flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
// // //           <div className="flex-1 space-y-4">
// // //             <div className="flex flex-wrap items-center gap-2">
// // //               <span className="bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider">
// // //                 {displayedTitle}
// // //               </span>
// // //               {displayedStream && (
// // //                 <span className="bg-purple-50 border border-purple-200 text-purple-700 text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider">
// // //                   {displayedStream}
// // //                 </span>
// // //               )}
// // //               <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
// // //                 <Sparkles className="w-3 h-3" />
// // //                 Updated 2026 Curriculum
// // //               </span>
// // //             </div>

// // //             <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
// // //               {displayedTitle} {displayedStream ? `(${displayedStream})` : ""} – All Subjects
// // //             </h1>

// // //             <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
// // //               Access comprehensive learning material, chapter-wise practice tests, solved question banks, and live mentor guidance aligned with the <strong>{selectedState}</strong> board syllabus.
// // //             </p>

// // //             {/* Quick Metrics */}
// // //             <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
// // //               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center">
// // //                 <div className="text-lg font-black text-slate-900">5,000+</div>
// // //                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Questions</div>
// // //               </div>
// // //               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center">
// // //                 <div className="text-lg font-black text-slate-900">120+</div>
// // //                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mock Papers</div>
// // //               </div>
// // //               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center">
// // //                 <div className="text-lg font-black text-slate-900">500+</div>
// // //                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mentors</div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right Checklist Box */}
// // //           <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 w-full lg:w-80">
// // //             <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
// // //               <BookMarked className="w-4 h-4 text-orange-600" />
// // //               Included Resources
// // //             </h3>
// // //             <div className="space-y-2">
// // //               {deliverables.map((item, idx) => (
// // //                 <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
// // //                   <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
// // //                   <span>{item}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Main Content Layout */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
// // //           {/* Sidebar (State & Board Selector) */}
// // //           <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200">
// // //             <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-3">
// // //               <Landmark className="w-4 h-4 text-orange-600" />
// // //               <span>Select State / Board</span>
// // //             </div>

// // //             <div className="relative mb-3">
// // //               <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search board..."
// // //                 value={searchQuery}
// // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // //                 className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-orange-500 focus:bg-white transition"
// // //               />
// // //             </div>

// // //             <div className="space-y-1 max-h-[460px] overflow-y-auto pr-1">
// // //               {filteredStates.length > 0 ? (
// // //                 filteredStates.map((state) => {
// // //                   const isActive = selectedState === state;
// // //                   return (
// // //                     <button
// // //                       key={state}
// // //                       type="button"
// // //                       onClick={() => setSelectedState(state)}
// // //                       className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-semibold rounded-xl transition cursor-pointer ${
// // //                         isActive
// // //                           ? "bg-orange-600 text-white shadow-sm"
// // //                           : "text-slate-600 hover:bg-slate-50"
// // //                       }`}
// // //                     >
// // //                       <span>{state}</span>
// // //                       <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
// // //                     </button>
// // //                   );
// // //                 })
// // //               ) : (
// // //                 <p className="text-xs text-slate-400 py-3 text-center">No board found</p>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* Subjects Grid */}
// // //           <div className="lg:col-span-3 space-y-4">
// // //             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200 gap-3">
// // //               <div>
// // //                 <h2 className="text-base font-bold text-slate-900">
// // //                   {selectedState} • {displayedTitle} Subjects
// // //                 </h2>
// // //                 <p className="text-xs text-slate-400 font-medium">
// // //                   Select a subject to begin practice test or read detailed chapter notes.
// // //                 </p>
// // //               </div>
// // //             </div>

// // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
// // //               {subjects.map((subj, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[240px] group"
// // //                 >
// // //                   <div>
// // //                     <div className="flex items-center justify-between mb-4">
// // //                       <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
// // //                         {subj.icon}
// // //                       </div>
// // //                       <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
// // //                         {subj.chaptersCount} Chapters
// // //                       </span>
// // //                     </div>

// // //                     <h3 className="font-extrabold text-slate-900 text-base mb-1 group-hover:text-orange-600 transition-colors">
// // //                       {subj.title}
// // //                     </h3>
// // //                     <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
// // //                       {subj.desc}
// // //                     </p>
// // //                   </div>

// // //                   <div className="pt-4 border-t border-slate-100 mt-4">
// // //                     <button
// // //                       type="button"
// // //                       onClick={() =>
// // //                         navigate(
// // //                           `/subject-chapters?class=${encodeURIComponent(
// // //                             displayedTitle
// // //                           )}&subject=${encodeURIComponent(subj.title)}&board=${encodeURIComponent(
// // //                             selectedState
// // //                           )}`
// // //                         )
// // //                       }
// // //                       className={`w-full py-2.5 px-3 border rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${subj.borderClass}`}
// // //                     >
// // //                       <span>Explore {subj.title}</span>
// // //                       <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState, useMemo } from "react";
// // import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
// // import {
// //   Search,
// //   ChevronRight,
// //   CheckCircle2,
// //   BookOpen,
// //   Calculator,
// //   FlaskConical,
// //   Globe,
// //   ArrowRight,
// //   Landmark,
// //   ArrowLeft,
// //   Sparkles,
// //   BookMarked,
// // } from "lucide-react";

// // const statesList: string[] = [
// //   "CBSE",
// //   "ICSE",
// //   "Rajasthan (RBSE)",
// //   "Uttar Pradesh (UPMSP)",
// //   "Maharashtra (MSBSHSE)",
// //   "Bihar (BSEB)",
// //   "Madhya Pradesh (MPBSE)",
// //   "Gujarat (GSEB)",
// //   "Karnataka (KSEEB)",
// //   "Andhra Pradesh",
// //   "Tamil Nadu",
// //   "West Bengal",
// //   "Punjab (PSEB)",
// //   "Haryana (HBSE)",
// // ];

// // interface SubjectItem {
// //   title: string;
// //   desc: string;
// //   icon: React.ReactNode;
// //   borderClass: string;
// //   chaptersCount: number;
// //   questionsCount: string;
// // }

// // const defaultSubjects: SubjectItem[] = [
// //   {
// //     title: "Mathematics",
// //     desc: "Numbers, Algebra, Geometry, Statistics & Arithmetic",
// //     icon: <Calculator className="w-6 h-6 text-emerald-600" />,
// //     borderClass: "border-emerald-200 text-emerald-700 hover:bg-emerald-50/50",
// //     chaptersCount: 14,
// //     questionsCount: "1,200+",
// //   },
// //   {
// //     title: "Science",
// //     desc: "Physics concepts, Chemistry reactions & Life Sciences",
// //     icon: <FlaskConical className="w-6 h-6 text-blue-600" />,
// //     borderClass: "border-blue-200 text-blue-700 hover:bg-blue-50/50",
// //     chaptersCount: 16,
// //     questionsCount: "1,500+",
// //   },
// //   {
// //     title: "English",
// //     desc: "Grammar, Literature, Reading Comprehension & Writing",
// //     icon: <BookOpen className="w-6 h-6 text-rose-600" />,
// //     borderClass: "border-rose-200 text-rose-700 hover:bg-rose-50/50",
// //     chaptersCount: 12,
// //     questionsCount: "800+",
// //   },
// //   {
// //     title: "Social Science",
// //     desc: "History, Geography, Democratic Politics & Economics",
// //     icon: <Globe className="w-6 h-6 text-amber-600" />,
// //     borderClass: "border-amber-200 text-amber-700 hover:bg-amber-50/50",
// //     chaptersCount: 18,
// //     questionsCount: "950+",
// //   },
// //   {
// //     title: "Hindi",
// //     desc: "व्याकरण, पाठ, गद्य-पद्य, निबंध एवं पत्र लेखन",
// //     icon: <span className="text-xl font-bold text-purple-600">अ</span>,
// //     borderClass: "border-purple-200 text-purple-700 hover:bg-purple-50/50",
// //     chaptersCount: 15,
// //     questionsCount: "600+",
// //   },
// //   {
// //     title: "Sanskrit",
// //     desc: "शब्द रूप, धातु रूप, अनुवाद एवं श्लोक",
// //     icon: <span className="text-xl font-bold text-teal-600">ॐ</span>,
// //     borderClass: "border-teal-200 text-teal-700 hover:bg-teal-50/50",
// //     chaptersCount: 10,
// //     questionsCount: "400+",
// //   },
// // ];

// // const deliverables = [
// //   "Chapter-wise Question Bank",
// //   "Previous 10-Year Solved Papers",
// //   "Revision Notes & Cheat Sheets",
// //   "Adaptive Practice Quizzes",
// //   "Mock Tests with National Rank",
// //   "Instant Step-by-Step Solutions",
// // ];

// // export default function ClassSubjectsDashboard() {
// //   const [selectedState, setSelectedState] = useState<string>("CBSE");
// //   const [searchQuery, setSearchQuery] = useState<string>("");

// //   // Safe router hooks fallback to prevent crash
// //   let navState: any = null;
// //   let rawQueryClass: string | null = null;
// //   let queryStream: string | null = null;
// //   let navigateHandler = (path: string | number) => {
// //     if (typeof path === "number") {
// //       window.history.back();
// //     } else {
// //       window.location.href = path;
// //     }
// //   };

// //   try {
// //     const location = useLocation();
// //     navState = location?.state;
// //   } catch (e) {
// //     navState = null;
// //   }

// //   try {
// //     const [searchParams] = useSearchParams();
// //     rawQueryClass = searchParams.get("class");
// //     queryStream = searchParams.get("stream");
// //   } catch (e) {
// //     if (typeof window !== "undefined") {
// //       const urlParams = new URLSearchParams(window.location.search);
// //       rawQueryClass = urlParams.get("class");
// //       queryStream = urlParams.get("stream");
// //     }
// //   }

// //   try {
// //     const reactNavigate = useNavigate();
// //     navigateHandler = (path: string | number) => {
// //       if (typeof path === "number") {
// //         reactNavigate(path);
// //       } else {
// //         reactNavigate(path);
// //       }
// //     };
// //   } catch (e) {
// //     // fallback remains window.location
// //   }

// //   // Dynamic class title resolution
// //   const displayedTitle = useMemo(() => {
// //     if (navState?.title) return navState.title;
// //     if (rawQueryClass) {
// //       return rawQueryClass.toLowerCase().includes("class")
// //         ? rawQueryClass
// //         : `Class ${rawQueryClass}`;
// //     }
// //     return "Class 6";
// //   }, [navState, rawQueryClass]);

// //   const displayedStream = navState?.stream || queryStream || "";

// //   const filteredStates = useMemo(() => {
// //     return statesList.filter((item) =>
// //       item.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// //   }, [searchQuery]);

// //   return (
// //     <div className="min-h-screen bg-slate-50/70 p-4 sm:p-6 lg:p-8 font-sans text-slate-800">
// //       <div className="max-w-7xl mx-auto space-y-6">
// //         {/* Navigation Bar */}
// //         <div className="flex items-center justify-between">
// //           <button
// //             type="button"
// //             onClick={() => navigateHandler(-1)}
// //             className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3.5 py-2 rounded-xl shadow-xs transition hover:shadow cursor-pointer"
// //           >
// //             <ArrowLeft className="w-4 h-4" />
// //             <span>Back to Classes</span>
// //           </button>

// //           <div className="text-xs font-semibold text-slate-500">
// //             Selected: <span className="text-orange-600 font-bold">{selectedState} Board</span>
// //           </div>
// //         </div>

// //         {/* Hero Banner */}
// //         <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 relative overflow-hidden flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
// //           <div className="flex-1 space-y-4">
// //             <div className="flex flex-wrap items-center gap-2">
// //               <span className="bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider">
// //                 {displayedTitle}
// //               </span>
// //               {displayedStream && (
// //                 <span className="bg-purple-50 border border-purple-200 text-purple-700 text-xs font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider">
// //                   {displayedStream}
// //                 </span>
// //               )}
// //               <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
// //                 <Sparkles className="w-3 h-3" />
// //                 Updated 2026 Curriculum
// //               </span>
// //             </div>

// //             <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
// //               {displayedTitle} {displayedStream ? `(${displayedStream})` : ""} – All Subjects
// //             </h1>

// //             <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
// //               Access comprehensive learning material, chapter-wise practice tests, solved question banks, and live mentor guidance aligned with the <strong>{selectedState}</strong> board syllabus.
// //             </p>

// //             {/* Quick Metrics */}
// //             <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
// //               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center">
// //                 <div className="text-lg font-black text-slate-900">5,000+</div>
// //                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Questions</div>
// //               </div>
// //               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center">
// //                 <div className="text-lg font-black text-slate-900">120+</div>
// //                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mock Papers</div>
// //               </div>
// //               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center">
// //                 <div className="text-lg font-black text-slate-900">500+</div>
// //                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mentors</div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Checklist Box */}
// //           <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 w-full lg:w-80">
// //             <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
// //               <BookMarked className="w-4 h-4 text-orange-600" />
// //               Included Resources
// //             </h3>
// //             <div className="space-y-2">
// //               {deliverables.map((item, idx) => (
// //                 <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
// //                   <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
// //                   <span>{item}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Main Content Layout */}
// //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
// //           {/* Sidebar (State & Board Selector) */}
// //           <div className="bg-white rounded-3xl p-5 shadow-xs border border-slate-200">
// //             <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-3">
// //               <Landmark className="w-4 h-4 text-orange-600" />
// //               <span>Select State / Board</span>
// //             </div>

// //             <div className="relative mb-3">
// //               <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
// //               <input
// //                 type="text"
// //                 placeholder="Search board..."
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-orange-500 focus:bg-white transition"
// //               />
// //             </div>

// //             <div className="space-y-1 max-h-[460px] overflow-y-auto pr-1">
// //               {filteredStates.length > 0 ? (
// //                 filteredStates.map((state) => {
// //                   const isActive = selectedState === state;
// //                   return (
// //                     <button
// //                       key={state}
// //                       type="button"
// //                       onClick={() => setSelectedState(state)}
// //                       className={`w-full flex items-center justify-between px-3 py-2.5 text-xs font-semibold rounded-xl transition cursor-pointer ${
// //                         isActive
// //                           ? "bg-orange-600 text-white shadow-xs"
// //                           : "text-slate-600 hover:bg-slate-50"
// //                       }`}
// //                     >
// //                       <span>{state}</span>
// //                       <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
// //                     </button>
// //                   );
// //                 })
// //               ) : (
// //                 <p className="text-xs text-slate-400 py-3 text-center">No board found</p>
// //               )}
// //             </div>
// //           </div>

// //           {/* Subjects Grid */}
// //           <div className="lg:col-span-3 space-y-4">
// //             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white px-6 py-4 rounded-2xl shadow-xs border border-slate-200 gap-3">
// //               <div>
// //                 <h2 className="text-base font-bold text-slate-900">
// //                   {selectedState} • {displayedTitle} Subjects
// //                 </h2>
// //                 <p className="text-xs text-slate-400 font-medium">
// //                   Select a subject to begin practice test or read detailed chapter notes.
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
// //               {defaultSubjects.map((subj, index) => (
// //                 <div
// //                   key={index}
// //                   className="bg-white rounded-3xl p-6 shadow-xs border border-slate-200 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[240px] group"
// //                 >
// //                   <div>
// //                     <div className="flex items-center justify-between mb-4">
// //                       <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
// //                         {subj.icon}
// //                       </div>
// //                       <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
// //                         {subj.chaptersCount} Chapters
// //                       </span>
// //                     </div>

// //                     <h3 className="font-extrabold text-slate-900 text-base mb-1 group-hover:text-orange-600 transition-colors">
// //                       {subj.title}
// //                     </h3>
// //                     <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
// //                       {subj.desc}
// //                     </p>
// //                   </div>

// //                   <div className="pt-4 border-t border-slate-100 mt-4">
// //                     <button
// //                       type="button"
// //                       onClick={() =>
// //                         navigateHandler(
// //                           `/subject-chapters?class=${encodeURIComponent(
// //                             displayedTitle
// //                           )}&subject=${encodeURIComponent(subj.title)}&board=${encodeURIComponent(
// //                             selectedState
// //                           )}`
// //                         )
// //                       }
// //                       className={`w-full py-2.5 px-3 border rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${subj.borderClass}`}
// //                     >
// //                       <span>Explore {subj.title}</span>
// //                       <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// import React, { useState, useMemo } from "react";
// import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
// import {
//   Search,
//   ChevronRight,
//   HelpCircle,
//   FileText,
//   Users,
//   CheckCircle2,
//   BookOpen,
//   Calculator,
//   FlaskConical,
//   Globe,
//   ArrowRight,
//   Landmark,
// } from "lucide-react";

// // State / Board list exactly matching the screenshot
// const statesList: string[] = [
//   "CBSE",
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chhattisgarh",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Odisha",
//   "Punjab",
// ];

// // All 8 Subjects exactly as in the UI
// const subjects = [
//   {
//     id: "english",
//     title: "English",
//     desc: "Grammar, Prose, Poetry,\nComprehension and more",
//     icon: <BookOpen className="w-6 h-6 text-[#3b82f6]" />,
//     iconBg: "bg-[#eff6ff]",
//     btnBorder: "border-[#bfdbfe] text-[#2563eb] hover:bg-[#eff6ff]",
//   },
//   {
//     id: "mathematics",
//     title: "Mathematics",
//     desc: "Numbers, Algebra, Geometry,\nMensuration and more",
//     icon: <Calculator className="w-6 h-6 text-[#10b981]" />,
//     iconBg: "bg-[#ecfdf5]",
//     btnBorder: "border-[#a7f3d0] text-[#059669] hover:bg-[#ecfdf5]",
//   },
//   {
//     id: "science",
//     title: "Science",
//     desc: "Physics, Chemistry, Biology\nand more",
//     icon: <FlaskConical className="w-6 h-6 text-[#a855f7]" />,
//     iconBg: "bg-[#faf5ff]",
//     btnBorder: "border-[#e9d5ff] text-[#9333ea] hover:bg-[#faf5ff]",
//   },
//   {
//     id: "social-science",
//     title: "Social Science",
//     desc: "History, Geography, Civics,\nEconomics and more",
//     icon: <Globe className="w-6 h-6 text-[#f97316]" />,
//     iconBg: "bg-[#fff7ed]",
//     btnBorder: "border-[#fed7aa] text-[#ea580c] hover:bg-[#fff7ed]",
//   },
//   {
//     id: "telugu",
//     title: "Telugu",
//     desc: "తెలుగు పాఠాలు, వ్యాకరణం,\nసాహిత్యం మరియు మరిన్ని",
//     customIcon: <span className="text-xl font-bold text-[#ec4899]">తె</span>,
//     iconBg: "bg-[#fdf2f8]",
//     btnBorder: "border-[#fbcfe8] text-[#db2777] hover:bg-[#fdf2f8]",
//   },
//   {
//     id: "hindi",
//     title: "Hindi",
//     desc: "व्याकरण, पाठ, कविता,\nलेखन और अधिक",
//     customIcon: <span className="text-xl font-bold text-[#f59e0b]">अ</span>,
//     iconBg: "bg-[#fffbeb]",
//     btnBorder: "border-[#fde68a] text-[#d97706] hover:bg-[#fffbeb]",
//   },
//   {
//     id: "sanskrit",
//     title: "Sanskrit",
//     desc: "शब्द, व्याकरण, अनुवाद,\nश्लोक और अधिक",
//     customIcon: <span className="text-xl font-bold text-[#0d9488]">ॐ</span>,
//     iconBg: "bg-[#f0fdfa]",
//     btnBorder: "border-[#99f6e4] text-[#0d9488] hover:bg-[#f0fdfa]",
//   },
//   {
//     id: "urdu",
//     title: "Urdu",
//     desc: "نثر ، نظم ، قواعد ، مکالمہ\nاور بہت کچھ",
//     customIcon: <span className="text-xl font-bold text-[#16a34a]">ٹ</span>,
//     iconBg: "bg-[#f0fdf4]",
//     btnBorder: "border-[#bbf7d0] text-[#16a34a] hover:bg-[#f0fdf4]",
//   },
// ];

// export default function ClassSubjectsDashboard() {
//   const [selectedState, setSelectedState] = useState<string>("CBSE");
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   // Safe router resolution to avoid white screen
//   let navState: any = null;
//   let rawQueryClass: string | null = null;
//   let navigateHandler = (path: string) => {
//     window.location.href = path;
//   };

//   try {
//     const location = useLocation();
//     navState = location?.state;
//   } catch (e) {
//     navState = null;
//   }

//   try {
//     const [searchParams] = useSearchParams();
//     rawQueryClass = searchParams.get("class");
//   } catch (e) {
//     if (typeof window !== "undefined") {
//       const urlParams = new URLSearchParams(window.location.search);
//       rawQueryClass = urlParams.get("class");
//     }
//   }

//   try {
//     const reactNavigate = useNavigate();
//     navigateHandler = (path: string) => {
//       reactNavigate(path);
//     };
//   } catch (e) {}

//   // Dynamic Class Title (e.g. "Class 6")
//   const displayedTitle = useMemo(() => {
//     if (navState?.title) return navState.title;
//     if (rawQueryClass) {
//       return rawQueryClass.toLowerCase().includes("class")
//         ? rawQueryClass
//         : `Class ${rawQueryClass}`;
//     }
//     return "Class 6";
//   }, [navState, rawQueryClass]);

//   const filteredStates = useMemo(() => {
//     return statesList.filter((s) =>
//       s.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   }, [searchQuery]);

//   return (
//     <div className="min-h-screen bg-[#f4f7fa] p-4 md:p-6 lg:p-8 font-sans text-slate-700 antialiased">
//       <div className="max-w-[1340px] mx-auto space-y-6">
        
//         {/* ========================================== */}
//         {/* TOP HERO BANNER CARD                       */}
//         {/* ========================================== */}
//         <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
//           {/* Left Column: Heading & 3 Metric Badges */}
//           <div className="flex-1 space-y-5">
//             <div>
//               <h1 className="text-2xl lg:text-[28px] font-extrabold text-[#0f172a] tracking-tight mb-1.5">
//                 {displayedTitle} – All Subjects
//               </h1>
//               <p className="text-[13px] text-slate-500 max-w-md font-normal leading-relaxed">
//                 Explore all subjects for {displayedTitle} and access the best study resources, practice tests and much more.
//               </p>
//             </div>

//             {/* 3 Metric Pills */}
//             <div className="flex flex-wrap items-center gap-3 pt-1">
//               <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-xs min-w-[110px]">
//                 <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
//                   <HelpCircle className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <div className="text-[13px] font-bold text-slate-900 leading-tight">5,000+</div>
//                   <div className="text-[10px] text-slate-400 font-medium">Questions</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-xs min-w-[110px]">
//                 <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
//                   <FileText className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <div className="text-[13px] font-bold text-slate-900 leading-tight">100+</div>
//                   <div className="text-[10px] text-slate-400 font-medium">Model Papers</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-xs min-w-[110px]">
//                 <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
//                   <Users className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <div className="text-[13px] font-bold text-slate-900 leading-tight">500+</div>
//                   <div className="text-[10px] text-slate-400 font-medium">Mentors</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Middle Column: What You'll Get Here (2 Columns Grid) */}
//           <div className="flex-1 max-w-md w-full lg:px-4">
//             <h3 className="text-sm font-bold text-[#0f172a] mb-3.5">
//               What You'll Get Here
//             </h3>
//             <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
//               <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
//                 <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
//                 <span>Topic Wise Questions</span>
//               </div>
//               <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
//                 <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
//                 <span>Model Papers</span>
//               </div>
//               <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
//                 <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
//                 <span>Chapter Wise Questions</span>
//               </div>
//               <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
//                 <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
//                 <span>Practice Tests</span>
//               </div>
//               <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
//                 <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
//                 <span>Assignments & Worksheets</span>
//               </div>
//               <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
//                 <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
//                 <span>Exam Guidance</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: 3D Illustration Graphic Vector */}
//           <div className="hidden lg:flex items-center justify-center relative w-56 h-36 shrink-0">
//             {/* Globe Background */}
//             <div className="w-20 h-20 rounded-full bg-[#dbeafe] border-2 border-white shadow-xs flex items-center justify-center text-blue-500 absolute -top-1 right-2">
//               <Globe className="w-12 h-12 text-[#3b82f6]/70" />
//             </div>
            
//             {/* Pencil Stand & Pencils */}
//             <div className="absolute bottom-6 right-20 w-8 h-10 bg-[#3b82f6] rounded-t-md border-b-2 border-slate-700 z-10 flex justify-center items-start pt-1">
//               <div className="w-1.5 h-6 bg-amber-400 rounded-t-xs -rotate-12 transform origin-bottom"></div>
//               <div className="w-1.5 h-7 bg-red-400 rounded-t-xs"></div>
//               <div className="w-1.5 h-6 bg-emerald-400 rounded-t-xs rotate-12 transform origin-bottom"></div>
//             </div>

//             {/* Stack of 3 Books */}
//             <div className="absolute bottom-0 right-14 w-32 flex flex-col items-center gap-[2px]">
//               {/* Green Book */}
//               <div className="w-28 h-6 bg-[#22c55e] rounded-sm shadow-md border-l-4 border-[#15803d] flex items-center justify-end px-2">
//                 <div className="w-full h-1 bg-white/30 rounded"></div>
//               </div>
//               {/* Orange Book */}
//               <div className="w-32 h-6 bg-[#f97316] rounded-sm shadow-md border-l-4 border-[#c2410c] flex items-center justify-end px-2">
//                 <div className="w-full h-1 bg-white/30 rounded"></div>
//               </div>
//               {/* Blue Book */}
//               <div className="w-36 h-6 bg-[#2563eb] rounded-sm shadow-md border-l-4 border-[#1d4ed8] flex items-center justify-end px-2">
//                 <div className="w-full h-1 bg-white/30 rounded"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ========================================== */}
//         {/* MAIN BODY: SIDEBAR + SUBJECT CARDS         */}
//         {/* ========================================== */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
//           {/* LEFT SIDEBAR (Col span 3) */}
//           <div className="lg:col-span-3 bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
//             <div className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider mb-3 px-1">
//               <Landmark className="w-4 h-4 text-slate-600" />
//               <span>Select State / Board</span>
//             </div>

//             {/* Search Box */}
//             <div className="relative mb-3">
//               <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
//               <input
//                 type="text"
//                 placeholder="Search State / Board..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full text-xs pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-indigo-500 focus:bg-white transition"
//               />
//             </div>

//             {/* States List */}
//             <div className="space-y-0.5 max-h-[480px] overflow-y-auto pr-1">
//               {filteredStates.map((state) => {
//                 const isActive = selectedState === state;
//                 return (
//                   <button
//                     key={state}
//                     type="button"
//                     onClick={() => setSelectedState(state)}
//                     className={`w-full flex items-center justify-between px-3 py-2 text-[12px] font-medium rounded-lg transition text-left cursor-pointer ${
//                       isActive
//                         ? "bg-[#0b104a] text-white shadow-xs font-semibold"
//                         : "text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     <span>{state}</span>
//                     <ChevronRight
//                       className={`w-3.5 h-3.5 ${
//                         isActive ? "text-white" : "text-slate-400"
//                       }`}
//                     />
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT SUBJECT CARDS (Col span 9) */}
//           <div className="lg:col-span-9 bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
            
//             {/* Header with Title and Syllabus Icon */}
//             <div className="flex justify-between items-start mb-6">
//               <div>
//                 <h2 className="text-xl font-bold text-slate-900 leading-tight">
//                   {selectedState} Board
//                 </h2>
//                 <p className="text-xs text-slate-400 mt-1">
//                   Select a subject to access study materials, notes, and practice tests.
//                 </p>
//               </div>
//               <div className="p-2 border border-slate-200 rounded-lg text-blue-500 bg-blue-50/40">
//                 <BookOpen className="w-4 h-4" />
//               </div>
//             </div>

//             {/* 8 Subjects Grid (4 Cols on desktop) */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
//               {subjects.map((subj) => (
//                 <div
//                   key={subj.id}
//                   className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between items-center text-center min-h-[220px]"
//                 >
//                   <div className="flex flex-col items-center">
//                     {/* Circle Icon */}
//                     <div
//                       className={`w-12 h-12 rounded-full ${subj.iconBg} flex items-center justify-center mb-3`}
//                     >
//                       {subj.icon || subj.customIcon}
//                     </div>

//                     {/* Subject Name */}
//                     <h3 className="font-bold text-slate-800 text-[14px] mb-1.5">
//                       {subj.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-[11px] text-slate-400 leading-relaxed whitespace-pre-line">
//                       {subj.desc}
//                     </p>
//                   </div>

//                   {/* Explore Button */}
//                   <button
//                     type="button"
//                     onClick={() =>
//                       navigateHandler(
//                         `/mysubjectdetail?class=${encodeURIComponent(
//                           displayedTitle
//                         )}&subject=${encodeURIComponent(
//                           subj.title
//                         )}&board=${encodeURIComponent(selectedState)}`
//                       )
//                     }
//                     className={`mt-4 w-full py-1.5 px-3 border rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${subj.btnBorder}`}
//                   >
//                     <span>Explore {subj.title}</span>
//                     <ArrowRight className="w-3 h-3" />
//                   </button>
//                 </div>
//               ))}
//             </div>

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }



// import React, { useState, useMemo } from "react";
// import { useLocation, useSearchParams, useNavigate, Link } from "react-router-dom";
// import {
//   Search,
//   ChevronRight,
//   HelpCircle,
//   FileText,
//   Users,
//   CheckCircle2,
//   BookOpen,
//   Calculator,
//   FlaskConical,
//   Globe,
//   ArrowRight,
//   Landmark,
// } from "lucide-react";

// // State / Board list
// const statesList: string[] = [
//   "CBSE",
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chhattisgarh",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Odisha",
//   "Punjab",
// ];

// // All 8 Subjects
// const subjects = [
//   {
//     id: "english",
//     title: "English",
//     desc: "Grammar, Prose, Poetry,\nComprehension and more",
//     icon: <BookOpen className="w-6 h-6 text-[#3b82f6]" />,
//     iconBg: "bg-[#eff6ff]",
//     btnBorder: "border-[#bfdbfe] text-[#2563eb] hover:bg-[#eff6ff]",
//   },
//   {
//     id: "mathematics",
//     title: "Mathematics",
//     desc: "Numbers, Algebra, Geometry,\nMensuration and more",
//     icon: <Calculator className="w-6 h-6 text-[#10b981]" />,
//     iconBg: "bg-[#ecfdf5]",
//     btnBorder: "border-[#a7f3d0] text-[#059669] hover:bg-[#ecfdf5]",
//   },
//   {
//     id: "science",
//     title: "Science",
//     desc: "Physics, Chemistry, Biology\nand more",
//     icon: <FlaskConical className="w-6 h-6 text-[#a855f7]" />,
//     iconBg: "bg-[#faf5ff]",
//     btnBorder: "border-[#e9d5ff] text-[#9333ea] hover:bg-[#faf5ff]",
//   },
//   {
//     id: "social-science",
//     title: "Social Science",
//     desc: "History, Geography, Civics,\nEconomics and more",
//     icon: <Globe className="w-6 h-6 text-[#f97316]" />,
//     iconBg: "bg-[#fff7ed]",
//     btnBorder: "border-[#fed7aa] text-[#ea580c] hover:bg-[#fff7ed]",
//   },
//   {
//     id: "telugu",
//     title: "Telugu",
//     desc: "తెలుగు పాఠాలు, వ్యాకరణం,\nసాహిత్యం మరియు మరిన్ని",
//     customIcon: <span className="text-xl font-bold text-[#ec4899]">తె</span>,
//     iconBg: "bg-[#fdf2f8]",
//     btnBorder: "border-[#fbcfe8] text-[#db2777] hover:bg-[#fdf2f8]",
//   },
//   {
//     id: "hindi",
//     title: "Hindi",
//     desc: "व्याकरण, पाठ, कविता,\nलेखन और अधिक",
//     customIcon: <span className="text-xl font-bold text-[#f59e0b]">अ</span>,
//     iconBg: "bg-[#fffbeb]",
//     btnBorder: "border-[#fde68a] text-[#d97706] hover:bg-[#fffbeb]",
//   },
//   {
//     id: "sanskrit",
//     title: "Sanskrit",
//     desc: "शब्द, व्याकरण, अनुवाद,\nश्लोक और अधिक",
//     customIcon: <span className="text-xl font-bold text-[#0d9488]">ॐ</span>,
//     iconBg: "bg-[#f0fdfa]",
//     btnBorder: "border-[#99f6e4] text-[#0d9488] hover:bg-[#f0fdfa]",
//   },
//   {
//     id: "urdu",
//     title: "Urdu",
//     desc: "نثر ، نظم ، قواعد ، مکالمہ\nاور بہت کچھ",
//     customIcon: <span className="text-xl font-bold text-[#16a34a]">ٹ</span>,
//     iconBg: "bg-[#f0fdf4]",
//     btnBorder: "border-[#bbf7d0] text-[#16a34a] hover:bg-[#f0fdf4]",
//   },
// ];

// export default function ClassSubjectsDashboard() {
//   const [selectedState, setSelectedState] = useState<string>("CBSE");
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   // Safe router retrieval
//   let navState: any = null;
//   let rawQueryClass: string | null = null;
//   let navigate: any = null;

//   try {
//     const location = useLocation();
//     navState = location?.state;
//   } catch (e) {
//     navState = null;
//   }

//   try {
//     const [searchParams] = useSearchParams();
//     rawQueryClass = searchParams.get("class");
//   } catch (e) {
//     if (typeof window !== "undefined") {
//       const urlParams = new URLSearchParams(window.location.search);
//       rawQueryClass = urlParams.get("class");
//     }
//   }

//   try {
//     navigate = useNavigate();
//   } catch (e) {
//     navigate = null;
//   }

//   // Dynamic Class Title (Defaults to "Class 6")
//   const displayedTitle = useMemo(() => {
//     if (navState?.title) return navState.title;
//     if (rawQueryClass) {
//       return rawQueryClass.toLowerCase().includes("class")
//         ? rawQueryClass
//         : `Class ${rawQueryClass}`;
//     }
//     return "Class 6";
//   }, [navState, rawQueryClass]);

//   const filteredStates = useMemo(() => {
//     return statesList.filter((s) =>
//       s.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   }, [searchQuery]);

//   // Click handler redirecting to /selectedsubjects
//   const handleSubjectClick = (subjectTitle: string, subjectId: string) => {
//     const targetUrl = `/selectedsubjects?class=${encodeURIComponent(
//       displayedTitle
//     )}&subject=${encodeURIComponent(
//       subjectTitle
//     )}&board=${encodeURIComponent(selectedState)}&subjectId=${encodeURIComponent(
//       subjectId
//     )}`;

//     if (navigate) {
//       try {
//         navigate(targetUrl, {
//           state: {
//             class: displayedTitle,
//             subject: subjectTitle,
//             subjectId: subjectId,
//             board: selectedState,
//           },
//         });
//         return;
//       } catch (err) {
//         // Fallback to window navigation if router throws
//       }
//     }
//     window.location.href = targetUrl;
//   };

//   return (
//     <div className="min-h-screen bg-[#f4f7fa] p-4 md:p-6 lg:p-8 font-sans text-slate-700 antialiased">
//       <div className="max-w-[1340px] mx-auto space-y-6">
        
//         {/* ========================================== */}
//         {/* TOP HERO BANNER CARD                       */}
//         {/* ========================================== */}
//         <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
//           {/* Left Column: Heading & 3 Metric Badges */}
//           <div className="flex-1 space-y-5">
//             <div>
//               <h1 className="text-2xl lg:text-[28px] font-extrabold text-[#0f172a] tracking-tight mb-1.5">
//                 {displayedTitle} – All Subjects
//               </h1>
//               <p className="text-[13px] text-slate-500 max-w-md font-normal leading-relaxed">
//                 Explore all subjects for {displayedTitle} and access the best study resources, practice tests and much more.
//               </p>
//             </div>

//             {/* 3 Metric Pills */}
//             <div className="flex flex-wrap items-center gap-3 pt-1">
//               <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-xs min-w-[110px]">
//                 <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
//                   <HelpCircle className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <div className="text-[13px] font-bold text-slate-900 leading-tight">5,000+</div>
//                   <div className="text-[10px] text-slate-400 font-medium">Questions</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-xs min-w-[110px]">
//                 <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
//                   <FileText className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <div className="text-[13px] font-bold text-slate-900 leading-tight">100+</div>
//                   <div className="text-[10px] text-slate-400 font-medium">Model Papers</div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-xs min-w-[110px]">
//                 <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
//                   <Users className="w-4 h-4" />
//                 </div>
//                 <div>
//                   <div className="text-[13px] font-bold text-slate-900 leading-tight">500+</div>
//                   <div className="text-[10px] text-slate-400 font-medium">Mentors</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Middle Column: What You'll Get Here */}
//           <div className="flex-1 max-w-md w-full lg:px-4">
//             <h3 className="text-sm font-bold text-[#0f172a] mb-3.5">
//               What You'll Get Here
//             </h3>
//             <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
//               <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
//                 <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
//                 <span>Topic Wise Questions</span>
//               </div>
//               <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
//                 <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
//                 <span>Model Papers</span>
//               </div>
//               <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
//                 <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
//                 <span>Chapter Wise Questions</span>
//               </div>
//               <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
//                 <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
//                 <span>Practice Tests</span>
//               </div>
//               <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
//                 <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
//                 <span>Assignments & Worksheets</span>
//               </div>
//               <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
//                 <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
//                 <span>Exam Guidance</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Graphic Vector */}
//           <div className="hidden lg:flex items-center justify-center relative w-56 h-36 shrink-0">
//             <div className="w-20 h-20 rounded-full bg-[#dbeafe] border-2 border-white shadow-xs flex items-center justify-center text-blue-500 absolute -top-1 right-2">
//               <Globe className="w-12 h-12 text-[#3b82f6]/70" />
//             </div>
            
//             <div className="absolute bottom-6 right-20 w-8 h-10 bg-[#3b82f6] rounded-t-md border-b-2 border-slate-700 z-10 flex justify-center items-start pt-1">
//               <div className="w-1.5 h-6 bg-amber-400 rounded-t-xs -rotate-12 transform origin-bottom"></div>
//               <div className="w-1.5 h-7 bg-red-400 rounded-t-xs"></div>
//               <div className="w-1.5 h-6 bg-emerald-400 rounded-t-xs rotate-12 transform origin-bottom"></div>
//             </div>

//             <div className="absolute bottom-0 right-14 w-32 flex flex-col items-center gap-[2px]">
//               <div className="w-28 h-6 bg-[#22c55e] rounded-sm shadow-md border-l-4 border-[#15803d] flex items-center justify-end px-2">
//                 <div className="w-full h-1 bg-white/30 rounded"></div>
//               </div>
//               <div className="w-32 h-6 bg-[#f97316] rounded-sm shadow-md border-l-4 border-[#c2410c] flex items-center justify-end px-2">
//                 <div className="w-full h-1 bg-white/30 rounded"></div>
//               </div>
//               <div className="w-36 h-6 bg-[#2563eb] rounded-sm shadow-md border-l-4 border-[#1d4ed8] flex items-center justify-end px-2">
//                 <div className="w-full h-1 bg-white/30 rounded"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ========================================== */}
//         {/* MAIN BODY: SIDEBAR + SUBJECT CARDS         */}
//         {/* ========================================== */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
//           {/* LEFT SIDEBAR */}
//           <div className="lg:col-span-3 bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
//             <div className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider mb-3 px-1">
//               <Landmark className="w-4 h-4 text-slate-600" />
//               <span>Select State / Board</span>
//             </div>

//             {/* Search Box */}
//             <div className="relative mb-3">
//               <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
//               <input
//                 type="text"
//                 placeholder="Search State / Board..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full text-xs pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-indigo-500 focus:bg-white transition"
//               />
//             </div>

//             {/* States List */}
//             <div className="space-y-0.5 max-h-[480px] overflow-y-auto pr-1">
//               {filteredStates.map((state) => {
//                 const isActive = selectedState === state;
//                 return (
//                   <button
//                     key={state}
//                     type="button"
//                     onClick={() => setSelectedState(state)}
//                     className={`w-full flex items-center justify-between px-3 py-2 text-[12px] font-medium rounded-lg transition text-left cursor-pointer ${
//                       isActive
//                         ? "bg-[#0b104a] text-white shadow-xs font-semibold"
//                         : "text-slate-600 hover:bg-slate-50"
//                     }`}
//                   >
//                     <span>{state}</span>
//                     <ChevronRight
//                       className={`w-3.5 h-3.5 ${
//                         isActive ? "text-white" : "text-slate-400"
//                       }`}
//                     />
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT SUBJECT CARDS */}
//           <div className="lg:col-span-9 bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
            
//             <div className="flex justify-between items-start mb-6">
//               <div>
//                 <h2 className="text-xl font-bold text-slate-900 leading-tight">
//                   {selectedState} Board
//                 </h2>
//                 <p className="text-xs text-slate-400 mt-1">
//                   Select a subject to access study materials, notes, and practice tests.
//                 </p>
//               </div>
//               <div className="p-2 border border-slate-200 rounded-lg text-blue-500 bg-blue-50/40">
//                 <BookOpen className="w-4 h-4" />
//               </div>
//             </div>

//             {/* 8 Subjects Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
//               {subjects.map((subj) => (
//                 <div
//                   key={subj.id}
//                   onClick={() => handleSubjectClick(subj.title, subj.id)}
//                   className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between items-center text-center min-h-[220px] cursor-pointer group select-none"
//                 >
//                   <div className="flex flex-col items-center">
//                     <div
//                       className={`w-12 h-12 rounded-full ${subj.iconBg} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}
//                     >
//                       {subj.icon || subj.customIcon}
//                     </div>

//                     <h3 className="font-bold text-slate-800 text-[14px] mb-1.5">
//                       {subj.title}
//                     </h3>

//                     <p className="text-[11px] text-slate-400 leading-relaxed whitespace-pre-line">
//                       {subj.desc}
//                     </p>
//                   </div>

//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSubjectClick(subj.title, subj.id);
//                     }}
//                     className={`mt-4 w-full py-1.5 px-3 border rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${subj.btnBorder}`}
//                   >
//                     <span>Explore {subj.title}</span>
//                     <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
//                   </button>
//                 </div>
//               ))}
//             </div>

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }



import React, { useState, useMemo } from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import {
  Search,
  ChevronRight,
  HelpCircle,
  FileText,
  Users,
  CheckCircle2,
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  ArrowRight,
  Landmark,
} from "lucide-react";

// State / Board list
const statesList: string[] = [
  "CBSE",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Odisha",
  "Punjab",
];

// All 8 Subjects
const subjects = [
  {
    id: "english",
    title: "English",
    desc: "Grammar, Prose, Poetry,\nComprehension and more",
    icon: <BookOpen className="w-6 h-6 text-[#3b82f6]" />,
    iconBg: "bg-[#eff6ff]",
    btnBorder: "border-[#bfdbfe] text-[#2563eb] hover:bg-[#eff6ff]",
  },
  {
    id: "mathematics",
    title: "Mathematics",
    desc: "Numbers, Algebra, Geometry,\nMensuration and more",
    icon: <Calculator className="w-6 h-6 text-[#10b981]" />,
    iconBg: "bg-[#ecfdf5]",
    btnBorder: "border-[#a7f3d0] text-[#059669] hover:bg-[#ecfdf5]",
  },
  {
    id: "science",
    title: "Science",
    desc: "Physics, Chemistry, Biology\nand more",
    icon: <FlaskConical className="w-6 h-6 text-[#a855f7]" />,
    iconBg: "bg-[#faf5ff]",
    btnBorder: "border-[#e9d5ff] text-[#9333ea] hover:bg-[#faf5ff]",
  },
  {
    id: "social-science",
    title: "Social Science",
    desc: "History, Geography, Civics,\nEconomics and more",
    icon: <Globe className="w-6 h-6 text-[#f97316]" />,
    iconBg: "bg-[#fff7ed]",
    btnBorder: "border-[#fed7aa] text-[#ea580c] hover:bg-[#fff7ed]",
  },
  {
    id: "telugu",
    title: "Telugu",
    desc: "తెలుగు పాఠాలు, వ్యాకరణం,\nసాహిత్యం మరియు మరిన్ని",
    customIcon: <span className="text-xl font-bold text-[#ec4899]">తె</span>,
    iconBg: "bg-[#fdf2f8]",
    btnBorder: "border-[#fbcfe8] text-[#db2777] hover:bg-[#fdf2f8]",
  },
  {
    id: "hindi",
    title: "Hindi",
    desc: "व्याकरण, पाठ, कविता,\nलेखन और अधिक",
    customIcon: <span className="text-xl font-bold text-[#f59e0b]">अ</span>,
    iconBg: "bg-[#fffbeb]",
    btnBorder: "border-[#fde68a] text-[#d97706] hover:bg-[#fffbeb]",
  },
  {
    id: "sanskrit",
    title: "Sanskrit",
    desc: "शब्द, व्याकरण, अनुवाद,\nश्लोक और अधिक",
    customIcon: <span className="text-xl font-bold text-[#0d9488]">ॐ</span>,
    iconBg: "bg-[#f0fdfa]",
    btnBorder: "border-[#99f6e4] text-[#0d9488] hover:bg-[#f0fdfa]",
  },
  {
    id: "urdu",
    title: "Urdu",
    desc: "نثر ، نظم ، قواعد ، مکالمہ\nاور بہت کچھ",
    customIcon: <span className="text-xl font-bold text-[#16a34a]">ٹ</span>,
    iconBg: "bg-[#f0fdf4]",
    btnBorder: "border-[#bbf7d0] text-[#16a34a] hover:bg-[#f0fdf4]",
  },
];

export default function ClassSubjectsDashboard() {
  const [selectedState, setSelectedState] = useState<string>("CBSE");
  const [searchQuery, setSearchQuery] = useState<string>("");

  let navState: any = null;
  let rawQueryClass: string | null = null;
  let navigate: any = null;

  try {
    const location = useLocation();
    navState = location?.state;
  } catch (e) {
    navState = null;
  }

  try {
    const [searchParams] = useSearchParams();
    rawQueryClass = searchParams.get("class");
  } catch (e) {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      rawQueryClass = urlParams.get("class");
    }
  }

  try {
    navigate = useNavigate();
  } catch (e) {
    navigate = null;
  }

  const displayedTitle = useMemo(() => {
    if (navState?.class) return navState.class;
    if (navState?.title) return navState.title;
    if (rawQueryClass) {
      return rawQueryClass.toLowerCase().includes("class")
        ? rawQueryClass
        : `Class ${rawQueryClass}`;
    }
    return "Class 6";
  }, [navState, rawQueryClass]);

  const filteredStates = useMemo(() => {
    return statesList.filter((s) =>
      s.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSubjectClick = (subjectTitle: string, subjectId: string) => {
    const targetUrl = `/selectedsubjects?class=${encodeURIComponent(
      displayedTitle
    )}&subject=${encodeURIComponent(
      subjectTitle
    )}&board=${encodeURIComponent(selectedState)}&subjectId=${encodeURIComponent(
      subjectId
    )}`;

    if (navigate) {
      try {
        navigate(targetUrl, {
          state: {
            class: displayedTitle,
            subject: subjectTitle,
            subjectId: subjectId,
            board: selectedState,
          },
        });
        return;
      } catch (err) {
        // Fallback to direct navigation
      }
    }
    window.location.href = targetUrl;
  };

  return (
    <div className="min-h-screen bg-[#f4f7fa] p-4 md:p-6 lg:p-8 font-sans text-slate-700 antialiased">
      <div className="max-w-[1340px] mx-auto space-y-6">
        
        {/* TOP HERO BANNER CARD */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          <div className="flex-1 space-y-5">
            <div>
              <h1 className="text-2xl lg:text-[28px] font-extrabold text-[#0f172a] tracking-tight mb-1.5">
                {displayedTitle} – All Subjects
              </h1>
              <p className="text-[13px] text-slate-500 max-w-md font-normal leading-relaxed">
                Explore all subjects for {displayedTitle} and access the best study resources, practice tests and much more.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-xs min-w-[110px]">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-slate-900 leading-tight">5,000+</div>
                  <div className="text-[10px] text-slate-400 font-medium">Questions</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-xs min-w-[110px]">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-slate-900 leading-tight">100+</div>
                  <div className="text-[10px] text-slate-400 font-medium">Model Papers</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 rounded-xl px-3.5 py-2 shadow-xs min-w-[110px]">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-slate-900 leading-tight">500+</div>
                  <div className="text-[10px] text-slate-400 font-medium">Mentors</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-md w-full lg:px-4">
            <h3 className="text-sm font-bold text-[#0f172a] mb-3.5">
              What You'll Get Here
            </h3>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
                <span>Topic Wise Questions</span>
              </div>
              <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
                <span>Model Papers</span>
              </div>
              <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
                <span>Chapter Wise Questions</span>
              </div>
              <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
                <span>Practice Tests</span>
              </div>
              <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
                <span>Assignments & Worksheets</span>
              </div>
              <div className="flex items-center gap-2 text-[12px] font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#7c3aed] shrink-0 fill-purple-100" />
                <span>Exam Guidance</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative w-56 h-36 shrink-0">
            <div className="w-20 h-20 rounded-full bg-[#dbeafe] border-2 border-white shadow-xs flex items-center justify-center text-blue-500 absolute -top-1 right-2">
              <Globe className="w-12 h-12 text-[#3b82f6]/70" />
            </div>
            
            <div className="absolute bottom-6 right-20 w-8 h-10 bg-[#3b82f6] rounded-t-md border-b-2 border-slate-700 z-10 flex justify-center items-start pt-1">
              <div className="w-1.5 h-6 bg-amber-400 rounded-t-xs -rotate-12 transform origin-bottom"></div>
              <div className="w-1.5 h-7 bg-red-400 rounded-t-xs"></div>
              <div className="w-1.5 h-6 bg-emerald-400 rounded-t-xs rotate-12 transform origin-bottom"></div>
            </div>

            <div className="absolute bottom-0 right-14 w-32 flex flex-col items-center gap-[2px]">
              <div className="w-28 h-6 bg-[#22c55e] rounded-sm shadow-md border-l-4 border-[#15803d] flex items-center justify-end px-2">
                <div className="w-full h-1 bg-white/30 rounded"></div>
              </div>
              <div className="w-32 h-6 bg-[#f97316] rounded-sm shadow-md border-l-4 border-[#c2410c] flex items-center justify-end px-2">
                <div className="w-full h-1 bg-white/30 rounded"></div>
              </div>
              <div className="w-36 h-6 bg-[#2563eb] rounded-sm shadow-md border-l-4 border-[#1d4ed8] flex items-center justify-end px-2">
                <div className="w-full h-1 bg-white/30 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN BODY: SIDEBAR + SUBJECT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider mb-3 px-1">
              <Landmark className="w-4 h-4 text-slate-600" />
              <span>Select State / Board</span>
            </div>

            <div className="relative mb-3">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search State / Board..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-indigo-500 focus:bg-white transition"
              />
            </div>

            <div className="space-y-0.5 max-h-[480px] overflow-y-auto pr-1">
              {filteredStates.map((state) => {
                const isActive = selectedState === state;
                return (
                  <button
                    key={state}
                    type="button"
                    onClick={() => setSelectedState(state)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-[12px] font-medium rounded-lg transition text-left cursor-pointer ${
                      isActive
                        ? "bg-[#0b104a] text-white shadow-xs font-semibold"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{state}</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 ${
                        isActive ? "text-white" : "text-slate-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SUBJECT CARDS */}
          <div className="lg:col-span-9 bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100">
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 leading-tight">
                  {selectedState} Board
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Select a subject to access study materials, notes, and practice tests.
                </p>
              </div>
              <div className="p-2 border border-slate-200 rounded-lg text-blue-500 bg-blue-50/40">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {subjects.map((subj) => (
                <div
                  key={subj.id}
                  onClick={() => handleSubjectClick(subj.title, subj.id)}
                  className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-200 transition-all flex flex-col justify-between items-center text-center min-h-[220px] cursor-pointer group select-none"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full ${subj.iconBg} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}
                    >
                      {subj.icon || subj.customIcon}
                    </div>

                    <h3 className="font-bold text-slate-800 text-[14px] mb-1.5">
                      {subj.title}
                    </h3>

                    <p className="text-[11px] text-slate-400 leading-relaxed whitespace-pre-line">
                      {subj.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSubjectClick(subj.title, subj.id);
                    }}
                    className={`mt-4 w-full py-1.5 px-3 border rounded-lg text-[11px] font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${subj.btnBorder}`}
                  >
                    <span>Explore {subj.title}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}