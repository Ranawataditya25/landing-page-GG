// // // import React, { useState } from 'react';
// // // import {
// // //   BookOpen,
// // //   FlaskConical,
// // //   Globe,
// // //   Languages,
// // //   Sparkles,
// // //   Award,
// // //   PhoneCall,
// // //   FileText,
// // //   HelpCircle,
// // //   Download,
// // //   Eye,
// // //   BarChart2,
// // //   ChevronDown,
// // //   ChevronRight,
// // //   Lightbulb,
// // // } from 'lucide-react';

// // // export default function StudyDashboard() {
// // //   const [activeTab, setActiveTab] = useState('English');
// // //   const [openChapter, setOpenChapter] = useState<number | null>(1);

// // //   const subjects = [
// // //     { name: 'Mathematics', icon: '📐', color: 'text-emerald-600' },
// // //     { name: 'Science', icon: '🧪', color: 'text-purple-600' },
// // //     { name: 'Social Science', icon: '🌐', color: 'text-orange-500' },
// // //     { name: 'Hindi', icon: 'अ', color: 'text-amber-600' },
// // //     { name: 'Sanskrit', icon: 'ॐ', color: 'text-cyan-500' },
// // //     { name: 'Telugu', icon: 'తె', color: 'text-pink-500' },
// // //     { name: 'Urdu', icon: 'اردو', color: 'text-green-600' },
// // //   ];

// // //   const chapters = [
// // //     {
// // //       id: 1,
// // //       title: 'Chapter 1',
// // //       subtitle: 'A House, A Home',
// // //       subtopics: [
// // //         '1.1 In the Bazaars of Hyderabad',
// // //         '1.2 Around the World',
// // //         '1.3 Key Words',
// // //         '1.4 Word Meanings',
// // //         '1.5 Question and Answer',
// // //       ],
// // //     },
// // //     { id: 2, title: 'Chapter 2', subtitle: 'Tenses' },
// // //     { id: 3, title: 'Chapter 3', subtitle: 'Nouns' },
// // //     { id: 4, title: 'Chapter 4', subtitle: 'Adjectives' },
// // //     { id: 5, title: 'Chapter 5', subtitle: 'Verbs' },
// // //     { id: 6, title: 'Chapter 6', subtitle: 'The Sentence' },
// // //     { id: 7, title: 'Chapter 7', subtitle: 'Adverbs' },
// // //     { id: 8, title: 'Chapter 8', subtitle: 'Prepositions' },
// // //     { id: 9, title: 'Chapter 9', subtitle: 'Conjunctions' },
// // //     { id: 10, title: 'Chapter 10', subtitle: 'Punctuation' },
// // //   ];

// // //   const modelPapers = Array.from({ length: 10 }, (_, i) => `Model Paper ${i + 1}`);

// // //   const renderResourceCard = (title: string, desc: string) => (
// // //     <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm space-y-4">
// // //       <div>
// // //         <h3 className="font-bold text-gray-800 text-sm">{title}</h3>
// // //         <p className="text-xs text-gray-500">{desc}</p>
// // //       </div>

// // //       {/* Shorts Notes */}
// // //       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-blue-50 bg-blue-50/20 gap-3">
// // //         <div className="flex items-center gap-3">
// // //           <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
// // //             <FileText className="w-5 h-5" />
// // //           </div>
// // //           <div>
// // //             <h4 className="text-xs font-bold text-gray-800">Shorts Notes</h4>
// // //             <p className="text-[11px] text-gray-500">Quick and easy notes to revise this topic.</p>
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center gap-2">
// // //           <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition">
// // //             <Eye className="w-3.5 h-3.5" /> View Notes
// // //           </button>
// // //           <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition">
// // //             <Download className="w-3.5 h-3.5" /> Download
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Assignments */}
// // //       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-green-50 bg-green-50/20 gap-3">
// // //         <div className="flex items-center gap-3">
// // //           <div className="p-2 bg-green-100 text-green-600 rounded-lg">
// // //             <FileText className="w-5 h-5" />
// // //           </div>
// // //           <div>
// // //             <h4 className="text-xs font-bold text-gray-800">Assignments</h4>
// // //             <p className="text-[11px] text-gray-500">Complete assignments to test your understanding.</p>
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center gap-2">
// // //           <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition">
// // //             <Eye className="w-3.5 h-3.5" /> View Assignment
// // //           </button>
// // //           <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition">
// // //             <Download className="w-3.5 h-3.5" /> Download Assignment
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* MCQS Practice */}
// // //       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-purple-50 bg-purple-50/20 gap-3">
// // //         <div className="flex items-center gap-3">
// // //           <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
// // //             <HelpCircle className="w-5 h-5" />
// // //           </div>
// // //           <div>
// // //             <h4 className="text-xs font-bold text-gray-800">MCQS Practice</h4>
// // //             <p className="text-[11px] text-gray-500">Practice multiple choice questions for this topic.</p>
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center gap-2">
// // //           <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition">
// // //             <BarChart2 className="w-3.5 h-3.5" /> Easy
// // //           </button>
// // //           <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-orange-500 border border-orange-200 rounded-lg hover:bg-orange-50 transition">
// // //             <BarChart2 className="w-3.5 h-3.5" /> Medium
// // //           </button>
// // //           <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition">
// // //             <BarChart2 className="w-3.5 h-3.5" /> Hard
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );

// // //   return (
// // //     <div className="min-h-screen bg-slate-50 p-4 font-sans text-gray-800">
// // //       {/* Top Navigation Bar */}
// // //       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2.5 mb-5 flex items-center gap-2 overflow-x-auto">
// // //         {subjects.map((sub) => (
// // //           <button
// // //             key={sub.name}
// // //             onClick={() => setActiveTab(sub.name)}
// // //             className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition"
// // //           >
// // //             <span className={`text-base ${sub.color}`}>{sub.icon}</span>
// // //             <span>{sub.name}</span>
// // //           </button>
// // //         ))}
// // //       </div>

// // //       <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
// // //         {/* Left Sidebar */}
// // //         <div className="lg:col-span-3 space-y-4">
// // //           <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
// // //             <div className="flex items-center gap-2 font-bold text-xs text-gray-700 pb-3 border-b border-gray-100 mb-3">
// // //               <BookOpen className="w-4 h-4 text-blue-600" />
// // //               <span>Chapters</span>
// // //             </div>

// // //             <div className="space-y-1">
// // //               {chapters.map((ch) => {
// // //                 const isOpen = openChapter === ch.id;
// // //                 return (
// // //                   <div key={ch.id} className="rounded-xl overflow-hidden">
// // //                     <div
// // //                       onClick={() => setOpenChapter(isOpen ? null : ch.id)}
// // //                       className={`flex items-center justify-between p-2.5 cursor-pointer rounded-xl text-xs font-semibold transition ${
// // //                         isOpen ? 'bg-purple-50 text-purple-700' : 'hover:bg-gray-50 text-gray-700'
// // //                       }`}
// // //                     >
// // //                       <div className="flex items-center gap-2.5">
// // //                         <div className={`p-1.5 rounded-lg ${isOpen ? 'bg-purple-200/60' : 'bg-purple-50 text-purple-600'}`}>
// // //                           <BookOpen className="w-3.5 h-3.5" />
// // //                         </div>
// // //                         <div className="text-left leading-tight">
// // //                           <p className="font-bold text-[11px]">{ch.title}</p>
// // //                           <p className="text-[10px] text-gray-500 font-normal">{ch.subtitle}</p>
// // //                         </div>
// // //                       </div>
// // //                       {ch.subtopics ? (
// // //                         <ChevronDown className={`w-3.5 h-3.5 transition ${isOpen ? 'rotate-180' : ''}`} />
// // //                       ) : (
// // //                         <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
// // //                       )}
// // //                     </div>

// // //                     {isOpen && ch.subtopics && (
// // //                       <div className="pl-6 pr-2 py-2 space-y-1.5 bg-purple-50/40 rounded-b-xl">
// // //                         {ch.subtopics.map((sub, idx) => (
// // //                           <div
// // //                             key={idx}
// // //                             className="text-[11px] font-medium text-gray-600 hover:text-purple-700 cursor-pointer py-1 px-2 rounded hover:bg-purple-100/50"
// // //                           >
// // //                             {sub}
// // //                           </div>
// // //                         ))}
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>

// // //           {/* Gamification Cards */}
// // //           <div className="bg-purple-50/70 border border-purple-100 rounded-2xl p-4 flex items-center gap-3">
// // //             <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl">
// // //               <Award className="w-5 h-5" />
// // //             </div>
// // //             <div>
// // //               <h4 className="text-xs font-bold text-purple-950">Keep Practicing!</h4>
// // //               <p className="text-[10px] text-purple-700">More you practice, better you get.</p>
// // //             </div>
// // //           </div>

// // //           <div className="bg-orange-50/70 border border-orange-100 rounded-2xl p-4 flex items-center gap-3">
// // //             <div className="p-2.5 bg-orange-100 text-orange-600 rounded-xl">
// // //               <PhoneCall className="w-5 h-5" />
// // //             </div>
// // //             <div>
// // //               <h4 className="text-xs font-bold text-orange-950">Need Help from Good Guiders?</h4>
// // //               <p className="text-[10px] text-orange-700">Then call us on</p>
// // //               <p className="text-xs font-bold text-orange-600 mt-0.5">8058051515</p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Center Content */}
// // //         <div className="lg:col-span-6 space-y-4">
// // //           <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-5">
// // //             <h1 className="text-xl font-black text-blue-950">Class 6 – English</h1>

// // //             {/* Metric Banner Cards */}
// // //             <div className="grid grid-cols-3 gap-3">
// // //               <div className="border border-purple-100 bg-purple-50/30 p-3 rounded-xl flex items-center gap-3">
// // //                 <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
// // //                   <HelpCircle className="w-4 h-4" />
// // //                 </div>
// // //                 <div>
// // //                   <div className="font-black text-sm text-gray-800">2,500+</div>
// // //                   <div className="text-[10px] text-gray-500 font-medium">Questions</div>
// // //                 </div>
// // //               </div>

// // //               <div className="border border-green-100 bg-green-50/30 p-3 rounded-xl flex items-center gap-3">
// // //                 <div className="p-2 bg-green-100 text-green-600 rounded-lg">
// // //                   <FileText className="w-4 h-4" />
// // //                 </div>
// // //                 <div>
// // //                   <div className="font-black text-sm text-gray-800">150+</div>
// // //                   <div className="text-[10px] text-gray-500 font-medium">Assignments</div>
// // //                 </div>
// // //               </div>

// // //               <div className="border border-orange-100 bg-orange-50/30 p-3 rounded-xl flex items-center gap-3">
// // //                 <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
// // //                   <FileText className="w-4 h-4" />
// // //                 </div>
// // //                 <div>
// // //                   <div className="font-black text-sm text-gray-800">35+</div>
// // //                   <div className="text-[10px] text-gray-500 font-medium">Model Papers</div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Sections */}
// // //             {renderResourceCard(
// // //               'Topic 1.1: In the Bazaars of Hyderabad',
// // //               'Explore study material and practice resources for this topic.'
// // //             )}

// // //             {renderResourceCard(
// // //               'Chapter 1: A House, A Home (Covering All Topics)',
// // //               'Practice and resources for the complete chapter.'
// // //             )}

// // //             {renderResourceCard(
// // //               'English (Covering All Chapters)',
// // //               'Practice and resources for the entire subject.'
// // //             )}

// // //             {/* Footer Tip */}
// // //             <div className="bg-blue-50 border border-blue-100 p-3.5 rounded-xl flex items-center gap-3">
// // //               <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0" />
// // //               <p className="text-xs text-blue-900 leading-snug">
// // //                 <span className="font-bold">Tip:</span> Complete topic-wise practice first, then move to chapter-wise practice and finally subject-wise practice for better results.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Right Sidebar - Model Papers */}
// // //         <div className="lg:col-span-3">
// // //           <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
// // //             <h3 className="font-bold text-sm text-blue-950 mb-1">Model Papers English</h3>
// // //             <p className="text-[11px] text-gray-500 mb-4 leading-normal">
// // //               These model papers are best for your final exams preparation. Practice them regularly and improve your marks.
// // //             </p>

// // //             <div className="space-y-2.5">
// // //               {modelPapers.map((paper, idx) => (
// // //                 <div
// // //                   key={idx}
// // //                   className="p-2.5 border border-gray-100 rounded-xl hover:shadow-sm transition bg-white"
// // //                 >
// // //                   <div className="flex items-center gap-2 mb-2">
// // //                     <FileText className="w-3.5 h-3.5 text-purple-600" />
// // //                     <span className="text-xs font-bold text-gray-800">{paper}</span>
// // //                   </div>
// // //                   <div className="flex items-center justify-end gap-2">
// // //                     <button className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50">
// // //                       <Eye className="w-3 h-3" /> View
// // //                     </button>
// // //                     <button className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-emerald-600 border border-emerald-200 rounded-md hover:bg-emerald-50">
// // //                       <Download className="w-3 h-3" /> Download
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




// // // import React, { useState } from 'react';
// // // import {
// // //   BookOpen,
// // //   FileText,
// // //   HelpCircle,
// // //   Download,
// // //   Eye,
// // //   BarChart2,
// // //   ChevronDown,
// // //   ChevronRight,
// // //   Award,
// // //   PhoneCall,
// // //   Lightbulb,
// // // } from 'lucide-react';

// // // export default function StudyDashboard() {
// // //   const [activeTab, setActiveTab] = useState('English');
// // //   const [openChapter, setOpenChapter] = useState<number | null>(1);

// // //   const subjects = [
// // //     { name: 'English', icon: '📖', color: 'text-blue-600' },
// // //     { name: 'Mathematics', icon: '📐', color: 'text-emerald-600' },
// // //     { name: 'Science', icon: '🧪', color: 'text-purple-600' },
// // //     { name: 'Social Science', icon: '🌐', color: 'text-orange-500' },
// // //     { name: 'Hindi', icon: 'अ', color: 'text-amber-600' },
// // //     { name: 'Sanskrit', icon: 'ॐ', color: 'text-cyan-500' },
// // //     { name: 'Telugu', icon: 'తె', color: 'text-pink-500' },
// // //     { name: 'Urdu', icon: 'اردو', color: 'text-green-600' },
// // //   ];

// // //   const chapters = [
// // //     {
// // //       id: 1,
// // //       title: 'Chapter 1',
// // //       subtitle: 'A House, A Home',
// // //       subtopics: [
// // //         '1.1 In the Bazaars of Hyderabad',
// // //         '1.2 Around the World',
// // //         '1.3 Key Words',
// // //         '1.4 Word Meanings',
// // //         '1.5 Question and Answer',
// // //       ],
// // //     },
// // //     { id: 2, title: 'Chapter 2', subtitle: 'Tenses' },
// // //     { id: 3, title: 'Chapter 3', subtitle: 'Nouns' },
// // //     { id: 4, title: 'Chapter 4', subtitle: 'Adjectives' },
// // //     { id: 5, title: 'Chapter 5', subtitle: 'Verbs' },
// // //     { id: 6, title: 'Chapter 6', subtitle: 'The Sentence' },
// // //     { id: 7, title: 'Chapter 7', subtitle: 'Adverbs' },
// // //     { id: 8, title: 'Chapter 8', subtitle: 'Prepositions' },
// // //     { id: 9, title: 'Chapter 9', subtitle: 'Conjunctions' },
// // //     { id: 10, title: 'Chapter 10', subtitle: 'Punctuation' },
// // //   ];

// // //   const modelPapers = Array.from({ length: 10 }, (_, i) => `Model Paper ${i + 1}`);

// // //   const renderResourceCard = (title: string, desc: string) => (
// // //     <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
// // //       <div>
// // //         <h3 className="font-bold text-slate-800 text-base">{title}</h3>
// // //         <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
// // //       </div>

// // //       {/* Short Notes */}
// // //       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-blue-100 bg-blue-50/40 gap-3">
// // //         <div className="flex items-center gap-3.5">
// // //           <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl">
// // //             <FileText className="w-5 h-5" />
// // //           </div>
// // //           <div>
// // //             <h4 className="text-sm font-bold text-slate-800">Short Notes</h4>
// // //             <p className="text-xs text-slate-500 mt-0.5">Quick and easy notes to revise this topic.</p>
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center gap-2.5 flex-shrink-0">
// // //           <button className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition shadow-sm">
// // //             <Eye className="w-4 h-4" /> View Notes
// // //           </button>
// // //           <button className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-sm">
// // //             <Download className="w-4 h-4" /> Download
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Assignments */}
// // //       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 gap-3">
// // //         <div className="flex items-center gap-3.5">
// // //           <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl">
// // //             <FileText className="w-5 h-5" />
// // //           </div>
// // //           <div>
// // //             <h4 className="text-sm font-bold text-slate-800">Assignments</h4>
// // //             <p className="text-xs text-slate-500 mt-0.5">Complete assignments to test your understanding.</p>
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center gap-2.5 flex-shrink-0">
// // //           <button className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-sm">
// // //             <Eye className="w-4 h-4" /> View Assignment
// // //           </button>
// // //           <button className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition shadow-sm">
// // //             <Download className="w-4 h-4" /> Download Assignment
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* MCQS Practice */}
// // //       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-purple-100 bg-purple-50/40 gap-3">
// // //         <div className="flex items-center gap-3.5">
// // //           <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl">
// // //             <HelpCircle className="w-5 h-5" />
// // //           </div>
// // //           <div>
// // //             <h4 className="text-sm font-bold text-slate-800">MCQs Practice</h4>
// // //             <p className="text-xs text-slate-500 mt-0.5">Practice multiple choice questions for this topic.</p>
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center gap-2 flex-shrink-0">
// // //           <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-sm">
// // //             <BarChart2 className="w-3.5 h-3.5" /> Easy
// // //           </button>
// // //           <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-orange-600 bg-white border border-orange-200 rounded-lg hover:bg-orange-50 transition shadow-sm">
// // //             <BarChart2 className="w-3.5 h-3.5" /> Medium
// // //           </button>
// // //           <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 bg-white border border-rose-200 rounded-lg hover:bg-rose-50 transition shadow-sm">
// // //             <BarChart2 className="w-3.5 h-3.5" /> Hard
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );

// // //   return (
// // //     <div className="min-h-screen bg-slate-100 p-4 md:p-6 font-sans text-slate-800 antialiased">
// // //       {/* Top Navigation Bar */}
// // //       <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-3 mb-6 flex items-center gap-2.5 overflow-x-auto">
// // //         {subjects.map((sub) => {
// // //           const isActive = activeTab === sub.name;
// // //           return (
// // //             <button
// // //               key={sub.name}
// // //               onClick={() => setActiveTab(sub.name)}
// // //               className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition border ${
// // //                 isActive
// // //                   ? 'bg-blue-50 border-blue-200 text-blue-700 shadow-sm'
// // //                   : 'border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50'
// // //               }`}
// // //             >
// // //               <span className={`text-base ${sub.color}`}>{sub.icon}</span>
// // //               <span>{sub.name}</span>
// // //             </button>
// // //           );
// // //         })}
// // //       </div>

// // //       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
// // //         {/* Left Sidebar */}
// // //         <div className="lg:col-span-3 space-y-5">
// // //           <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80">
// // //             <div className="flex items-center gap-2.5 font-bold text-sm text-slate-800 pb-3.5 border-b border-slate-100 mb-3">
// // //               <BookOpen className="w-4 h-4 text-blue-600" />
// // //               <span>Chapters</span>
// // //             </div>

// // //             <div className="space-y-1.5">
// // //               {chapters.map((ch) => {
// // //                 const isOpen = openChapter === ch.id;
// // //                 return (
// // //                   <div key={ch.id} className="rounded-xl overflow-hidden">
// // //                     <div
// // //                       onClick={() => setOpenChapter(isOpen ? null : ch.id)}
// // //                       className={`flex items-center justify-between p-3 cursor-pointer rounded-xl text-sm font-medium transition ${
// // //                         isOpen ? 'bg-purple-50 text-purple-800 font-semibold' : 'hover:bg-slate-50 text-slate-700'
// // //                       }`}
// // //                     >
// // //                       <div className="flex items-center gap-3">
// // //                         <div
// // //                           className={`p-2 rounded-lg ${
// // //                             isOpen ? 'bg-purple-200/70 text-purple-700' : 'bg-slate-100 text-slate-600'
// // //                           }`}
// // //                         >
// // //                           <BookOpen className="w-4 h-4" />
// // //                         </div>
// // //                         <div className="text-left leading-tight">
// // //                           <p className="font-bold text-xs tracking-tight">{ch.title}</p>
// // //                           <p className="text-xs text-slate-500 font-normal mt-0.5">{ch.subtitle}</p>
// // //                         </div>
// // //                       </div>
// // //                       {ch.subtopics ? (
// // //                         <ChevronDown className={`w-4 h-4 transition ${isOpen ? 'rotate-180 text-purple-700' : 'text-slate-400'}`} />
// // //                       ) : (
// // //                         <ChevronRight className="w-4 h-4 text-slate-400" />
// // //                       )}
// // //                     </div>

// // //                     {isOpen && ch.subtopics && (
// // //                       <div className="pl-6 pr-2 py-2.5 space-y-1 bg-purple-50/50 rounded-b-xl border-t border-purple-100/50">
// // //                         {ch.subtopics.map((sub, idx) => (
// // //                           <div
// // //                             key={idx}
// // //                             className="text-xs font-medium text-slate-600 hover:text-purple-800 cursor-pointer py-1.5 px-2.5 rounded-lg hover:bg-purple-100/60 transition"
// // //                           >
// // //                             {sub}
// // //                           </div>
// // //                         ))}
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>

// // //           {/* Gamification Cards */}
// // //           <div className="bg-purple-50/80 border border-purple-100 rounded-2xl p-4 flex items-center gap-3.5 shadow-sm">
// // //             <div className="p-3 bg-purple-100 text-purple-700 rounded-xl flex-shrink-0">
// // //               <Award className="w-5 h-5" />
// // //             </div>
// // //             <div>
// // //               <h4 className="text-sm font-bold text-purple-950">Keep Practicing!</h4>
// // //               <p className="text-xs text-purple-800/80 mt-0.5">The more you practice, the better you get.</p>
// // //             </div>
// // //           </div>

// // //           <div className="bg-amber-50/80 border border-amber-100 rounded-2xl p-4 flex items-center gap-3.5 shadow-sm">
// // //             <div className="p-3 bg-amber-100 text-amber-700 rounded-xl flex-shrink-0">
// // //               <PhoneCall className="w-5 h-5" />
// // //             </div>
// // //             <div>
// // //               <h4 className="text-sm font-bold text-amber-950">Need Help from Experts?</h4>
// // //               <p className="text-xs text-amber-800/80 mt-0.5">Call our support helpline:</p>
// // //               <p className="text-sm font-bold text-amber-700 mt-1">8058051515</p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Center Content */}
// // //         <div className="lg:col-span-6 space-y-5">
// // //           <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-6">
// // //             <div className="flex items-center justify-between">
// // //               <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Class 6 – English</h1>
// // //             </div>

// // //             {/* Metric Banner Cards */}
// // //             <div className="grid grid-cols-3 gap-3.5">
// // //               <div className="border border-purple-100 bg-purple-50/40 p-3.5 rounded-xl flex items-center gap-3">
// // //                 <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl flex-shrink-0">
// // //                   <HelpCircle className="w-5 h-5" />
// // //                 </div>
// // //                 <div>
// // //                   <div className="font-extrabold text-base text-slate-900 leading-tight">2,500+</div>
// // //                   <div className="text-xs text-slate-500 font-medium">Questions</div>
// // //                 </div>
// // //               </div>

// // //               <div className="border border-emerald-100 bg-emerald-50/40 p-3.5 rounded-xl flex items-center gap-3">
// // //                 <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl flex-shrink-0">
// // //                   <FileText className="w-5 h-5" />
// // //                 </div>
// // //                 <div>
// // //                   <div className="font-extrabold text-base text-slate-900 leading-tight">150+</div>
// // //                   <div className="text-xs text-slate-500 font-medium">Assignments</div>
// // //                 </div>
// // //               </div>

// // //               <div className="border border-orange-100 bg-orange-50/40 p-3.5 rounded-xl flex items-center gap-3">
// // //                 <div className="p-2.5 bg-orange-100 text-orange-600 rounded-xl flex-shrink-0">
// // //                   <FileText className="w-5 h-5" />
// // //                 </div>
// // //                 <div>
// // //                   <div className="font-extrabold text-base text-slate-900 leading-tight">35+</div>
// // //                   <div className="text-xs text-slate-500 font-medium">Model Papers</div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Content Cards */}
// // //             {renderResourceCard(
// // //               'Topic 1.1: In the Bazaars of Hyderabad',
// // //               'Explore study material and practice resources for this topic.'
// // //             )}

// // //             {renderResourceCard(
// // //               'Chapter 1: A House, A Home (Covering All Topics)',
// // //               'Practice and resources for the complete chapter.'
// // //             )}

// // //             {renderResourceCard(
// // //               'English (Covering All Chapters)',
// // //               'Practice and resources for the entire subject.'
// // //             )}

// // //             {/* Footer Tip */}
// // //             <div className="bg-blue-50/70 border border-blue-100 p-4 rounded-xl flex items-start gap-3.5">
// // //               <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
// // //               <p className="text-xs text-blue-950 leading-relaxed">
// // //                 <span className="font-bold">Tip:</span> Complete topic-wise practice first, then move to chapter-wise practice and finally subject-wise practice for better exam results.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Right Sidebar - Model Papers */}
// // //         <div className="lg:col-span-3">
// // //           <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80">
// // //             <h3 className="font-bold text-base text-slate-900 mb-1">Model Papers English</h3>
// // //             <p className="text-xs text-slate-500 mb-4 leading-relaxed">
// // //               Curated model papers designed for final exam preparation.
// // //             </p>

// // //             <div className="space-y-2.5">
// // //               {modelPapers.map((paper, idx) => (
// // //                 <div
// // //                   key={idx}
// // //                   className="p-3 border border-slate-100 rounded-xl hover:border-slate-200 hover:shadow-sm transition bg-white"
// // //                 >
// // //                   <div className="flex items-center gap-2 mb-2.5">
// // //                     <FileText className="w-4 h-4 text-purple-600 flex-shrink-0" />
// // //                     <span className="text-xs font-bold text-slate-800">{paper}</span>
// // //                   </div>
// // //                   <div className="flex items-center justify-end gap-2">
// // //                     <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition">
// // //                       <Eye className="w-3.5 h-3.5" /> View
// // //                     </button>
// // //                     <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition">
// // //                       <Download className="w-3.5 h-3.5" /> Download
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




// // // import React, { useState, useEffect, useMemo } from "react";
// // // import { useSearchParams, useLocation } from "react-router-dom";
// // // import {
// // //   BookOpen,
// // //   FileText,
// // //   HelpCircle,
// // //   Download,
// // //   Eye,
// // //   BarChart2,
// // //   ChevronDown,
// // //   ChevronRight,
// // //   Award,
// // //   PhoneCall,
// // //   Lightbulb,
// // // } from "lucide-react";

// // // export default function StudyDashboard() {
// // //   // Safe extraction without router crash
// // //   let navState: any = null;
// // //   let rawSubject: string | null = null;
// // //   let rawClass: string | null = null;
// // //   let rawBoard: string | null = null;

// // //   try {
// // //     const location = useLocation();
// // //     navState = location?.state;
// // //   } catch (e) {
// // //     navState = null;
// // //   }

// // //   try {
// // //     const [searchParams] = useSearchParams();
// // //     rawSubject = searchParams.get("subject");
// // //     rawClass = searchParams.get("class");
// // //     rawBoard = searchParams.get("board");
// // //   } catch (e) {
// // //     if (typeof window !== "undefined") {
// // //       const urlParams = new URLSearchParams(window.location.search);
// // //       rawSubject = urlParams.get("subject");
// // //       rawClass = urlParams.get("class");
// // //       rawBoard = urlParams.get("board");
// // //     }
// // //   }

// // //   // Dynamic values with fallback defaults
// // //   const currentSubject = useMemo(() => {
// // //     return navState?.subject || rawSubject || "English";
// // //   }, [navState, rawSubject]);

// // //   const currentClass = useMemo(() => {
// // //     if (navState?.class) return navState.class;
// // //     if (rawClass) {
// // //       return rawClass.toLowerCase().includes("class")
// // //         ? rawClass
// // //         : `Class ${rawClass}`;
// // //     }
// // //     return "Class 6";
// // //   }, [navState, rawClass]);

// // //   const currentBoard = useMemo(() => {
// // //     return navState?.board || rawBoard || "CBSE";
// // //   }, [navState, rawBoard]);

// // //   const [activeTab, setActiveTab] = useState<string>(currentSubject);
// // //   const [openChapter, setOpenChapter] = useState<number | null>(1);

// // //   // Sync state if incoming subject changes
// // //   useEffect(() => {
// // //     if (currentSubject) {
// // //       setActiveTab(currentSubject);
// // //     }
// // //   }, [currentSubject]);

// // //   const subjects = [
// // //     { name: "English", icon: "📖", color: "text-blue-600" },
// // //     { name: "Mathematics", icon: "📐", color: "text-emerald-600" },
// // //     { name: "Science", icon: "🧪", color: "text-purple-600" },
// // //     { name: "Social Science", icon: "🌐", color: "text-orange-500" },
// // //     { name: "Hindi", icon: "अ", color: "text-amber-600" },
// // //     { name: "Sanskrit", icon: "ॐ", color: "text-cyan-500" },
// // //     { name: "Telugu", icon: "తె", color: "text-pink-500" },
// // //     { name: "Urdu", icon: "اردو", color: "text-green-600" },
// // //   ];

// // //   const chapters = [
// // //     {
// // //       id: 1,
// // //       title: "Chapter 1",
// // //       subtitle: "A House, A Home",
// // //       subtopics: [
// // //         "1.1 In the Bazaars of Hyderabad",
// // //         "1.2 Around the World",
// // //         "1.3 Key Words",
// // //         "1.4 Word Meanings",
// // //         "1.5 Question and Answer",
// // //       ],
// // //     },
// // //     { id: 2, title: "Chapter 2", subtitle: "Tenses", subtopics: [] },
// // //     { id: 3, title: "Chapter 3", subtitle: "Nouns", subtopics: [] },
// // //     { id: 4, title: "Chapter 4", subtitle: "Adjectives", subtopics: [] },
// // //     { id: 5, title: "Chapter 5", subtitle: "Verbs", subtopics: [] },
// // //     { id: 6, title: "Chapter 6", subtitle: "The Sentence", subtopics: [] },
// // //     { id: 7, title: "Chapter 7", subtitle: "Adverbs", subtopics: [] },
// // //     { id: 8, title: "Chapter 8", subtitle: "Prepositions", subtopics: [] },
// // //     { id: 9, title: "Chapter 9", subtitle: "Conjunctions", subtopics: [] },
// // //     { id: 10, title: "Chapter 10", subtitle: "Punctuation", subtopics: [] },
// // //   ];

// // //   const modelPapers = Array.from({ length: 10 }, (_, i) => `Model Paper ${i + 1}`);

// // //   const handleTabChange = (subjectName: string) => {
// // //     setActiveTab(subjectName);
// // //     if (typeof window !== "undefined" && window.history?.pushState) {
// // //       const url = new URL(window.location.href);
// // //       url.searchParams.set("subject", subjectName);
// // //       window.history.pushState({}, "", url.toString());
// // //     }
// // //   };

// // //   const renderResourceCard = (title: string, desc: string) => (
// // //     <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
// // //       <div>
// // //         <h3 className="font-bold text-slate-800 text-base">{title}</h3>
// // //         <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
// // //       </div>

// // //       {/* Short Notes */}
// // //       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-blue-100 bg-blue-50/40 gap-3">
// // //         <div className="flex items-center gap-3.5">
// // //           <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl">
// // //             <FileText className="w-5 h-5" />
// // //           </div>
// // //           <div>
// // //             <h4 className="text-sm font-bold text-slate-800">Short Notes</h4>
// // //             <p className="text-xs text-slate-500 mt-0.5">Quick and easy notes to revise this topic.</p>
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center gap-2.5 flex-shrink-0">
// // //           <button
// // //             type="button"
// // //             className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition shadow-xs cursor-pointer"
// // //           >
// // //             <Eye className="w-4 h-4" /> View Notes
// // //           </button>
// // //           <button
// // //             type="button"
// // //             className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-xs cursor-pointer"
// // //           >
// // //             <Download className="w-4 h-4" /> Download
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Assignments */}
// // //       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 gap-3">
// // //         <div className="flex items-center gap-3.5">
// // //           <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl">
// // //             <FileText className="w-5 h-5" />
// // //           </div>
// // //           <div>
// // //             <h4 className="text-sm font-bold text-slate-800">Assignments</h4>
// // //             <p className="text-xs text-slate-500 mt-0.5">Complete assignments to test your understanding.</p>
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center gap-2.5 flex-shrink-0">
// // //           <button
// // //             type="button"
// // //             className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-xs cursor-pointer"
// // //           >
// // //             <Eye className="w-4 h-4" /> View Assignment
// // //           </button>
// // //           <button
// // //             type="button"
// // //             className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition shadow-xs cursor-pointer"
// // //           >
// // //             <Download className="w-4 h-4" /> Download Assignment
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* MCQs Practice */}
// // //       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-purple-100 bg-purple-50/40 gap-3">
// // //         <div className="flex items-center gap-3.5">
// // //           <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl">
// // //             <HelpCircle className="w-5 h-5" />
// // //           </div>
// // //           <div>
// // //             <h4 className="text-sm font-bold text-slate-800">MCQs Practice</h4>
// // //             <p className="text-xs text-slate-500 mt-0.5">Practice multiple choice questions for this topic.</p>
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center gap-2 flex-shrink-0">
// // //           <button
// // //             type="button"
// // //             className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-xs cursor-pointer"
// // //           >
// // //             <BarChart2 className="w-3.5 h-3.5" /> Easy
// // //           </button>
// // //           <button
// // //             type="button"
// // //             className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-orange-600 bg-white border border-orange-200 rounded-lg hover:bg-orange-50 transition shadow-xs cursor-pointer"
// // //           >
// // //             <BarChart2 className="w-3.5 h-3.5" /> Medium
// // //           </button>
// // //           <button
// // //             type="button"
// // //             className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 bg-white border border-rose-200 rounded-lg hover:bg-rose-50 transition shadow-xs cursor-pointer"
// // //           >
// // //             <BarChart2 className="w-3.5 h-3.5" /> Hard
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );

// // //   return (
// // //     <div className="min-h-screen bg-slate-100 p-4 md:p-6 font-sans text-slate-800 antialiased">
// // //       <div className="max-w-[1340px] mx-auto">
        
// // //         {/* TOP SUBJECTS NAVBAR */}
// // //         <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-3 mb-6 flex items-center gap-2.5 overflow-x-auto">
// // //           {subjects.map((sub) => {
// // //             const isActive = activeTab.toLowerCase() === sub.name.toLowerCase();
// // //             return (
// // //               <button
// // //                 key={sub.name}
// // //                 type="button"
// // //                 onClick={() => handleTabChange(sub.name)}
// // //                 className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition border cursor-pointer ${
// // //                   isActive
// // //                     ? "bg-blue-50 border-blue-200 text-blue-700 shadow-xs"
// // //                     : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50"
// // //                 }`}
// // //               >
// // //                 <span className={`text-base ${sub.color}`}>{sub.icon}</span>
// // //                 <span>{sub.name}</span>
// // //               </button>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* MAIN 3-COLUMN GRID */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
// // //           {/* LEFT SIDEBAR: CHAPTERS */}
// // //           <div className="lg:col-span-3 space-y-5">
// // //             <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80">
// // //               <div className="flex items-center gap-2.5 font-bold text-sm text-slate-800 pb-3.5 border-b border-slate-100 mb-3">
// // //                 <BookOpen className="w-4 h-4 text-blue-600" />
// // //                 <span>Chapters ({activeTab})</span>
// // //               </div>

// // //               <div className="space-y-1.5">
// // //                 {chapters.map((ch) => {
// // //                   const isOpen = openChapter === ch.id;
// // //                   const hasSubtopics = ch.subtopics && ch.subtopics.length > 0;
// // //                   return (
// // //                     <div key={ch.id} className="rounded-xl overflow-hidden">
// // //                       <div
// // //                         onClick={() => setOpenChapter(isOpen ? null : ch.id)}
// // //                         className={`flex items-center justify-between p-3 cursor-pointer rounded-xl text-sm font-medium transition ${
// // //                           isOpen
// // //                             ? "bg-purple-50 text-purple-800 font-semibold"
// // //                             : "hover:bg-slate-50 text-slate-700"
// // //                         }`}
// // //                       >
// // //                         <div className="flex items-center gap-3">
// // //                           <div
// // //                             className={`p-2 rounded-lg ${
// // //                               isOpen
// // //                                 ? "bg-purple-200/70 text-purple-700"
// // //                                 : "bg-slate-100 text-slate-600"
// // //                             }`}
// // //                           >
// // //                             <BookOpen className="w-4 h-4" />
// // //                           </div>
// // //                           <div className="text-left leading-tight">
// // //                             <p className="font-bold text-xs tracking-tight">{ch.title}</p>
// // //                             <p className="text-xs text-slate-500 font-normal mt-0.5">
// // //                               {ch.subtitle}
// // //                             </p>
// // //                           </div>
// // //                         </div>
// // //                         {hasSubtopics ? (
// // //                           <ChevronDown
// // //                             className={`w-4 h-4 transition ${
// // //                               isOpen ? "rotate-180 text-purple-700" : "text-slate-400"
// // //                             }`}
// // //                           />
// // //                         ) : (
// // //                           <ChevronRight className="w-4 h-4 text-slate-400" />
// // //                         )}
// // //                       </div>

// // //                       {isOpen && hasSubtopics && (
// // //                         <div className="pl-6 pr-2 py-2.5 space-y-1 bg-purple-50/50 rounded-b-xl border-t border-purple-100/50">
// // //                           {ch.subtopics.map((sub, idx) => (
// // //                             <div
// // //                               key={idx}
// // //                               className="text-xs font-medium text-slate-600 hover:text-purple-800 cursor-pointer py-1.5 px-2.5 rounded-lg hover:bg-purple-100/60 transition"
// // //                             >
// // //                               {sub}
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   );
// // //                 })}
// // //               </div>
// // //             </div>

// // //             {/* Helpline / Motivation Badges */}
// // //             <div className="bg-purple-50/80 border border-purple-100 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
// // //               <div className="p-3 bg-purple-100 text-purple-700 rounded-xl flex-shrink-0">
// // //                 <Award className="w-5 h-5" />
// // //               </div>
// // //               <div>
// // //                 <h4 className="text-sm font-bold text-purple-950">Keep Practicing!</h4>
// // //                 <p className="text-xs text-purple-800/80 mt-0.5">The more you practice, the better you get.</p>
// // //               </div>
// // //             </div>

// // //             <div className="bg-amber-50/80 border border-amber-100 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
// // //               <div className="p-3 bg-amber-100 text-amber-700 rounded-xl flex-shrink-0">
// // //                 <PhoneCall className="w-5 h-5" />
// // //               </div>
// // //               <div>
// // //                 <h4 className="text-sm font-bold text-amber-950">Need Help from Experts?</h4>
// // //                 <p className="text-xs text-amber-800/80 mt-0.5">Call our support helpline:</p>
// // //                 <p className="text-sm font-bold text-amber-700 mt-1">8058051515</p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* MIDDLE COLUMN: ACTIVE CONTENT */}
// // //           <div className="lg:col-span-6 space-y-5">
// // //             <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 space-y-6">
              
// // //               <div className="flex items-center justify-between">
// // //                 <div>
// // //                   <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
// // //                     {currentClass} – {activeTab}
// // //                   </h1>
// // //                   <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
// // //                     {currentBoard} Board
// // //                   </span>
// // //                 </div>
// // //               </div>

// // //               {/* Metric Stats Banner */}
// // //               <div className="grid grid-cols-3 gap-3.5">
// // //                 <div className="border border-purple-100 bg-purple-50/40 p-3.5 rounded-xl flex items-center gap-3">
// // //                   <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl flex-shrink-0">
// // //                     <HelpCircle className="w-5 h-5" />
// // //                   </div>
// // //                   <div>
// // //                     <div className="font-extrabold text-base text-slate-900 leading-tight">2,500+</div>
// // //                     <div className="text-xs text-slate-500 font-medium">Questions</div>
// // //                   </div>
// // //                 </div>

// // //                 <div className="border border-emerald-100 bg-emerald-50/40 p-3.5 rounded-xl flex items-center gap-3">
// // //                   <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl flex-shrink-0">
// // //                     <FileText className="w-5 h-5" />
// // //                   </div>
// // //                   <div>
// // //                     <div className="font-extrabold text-base text-slate-900 leading-tight">150+</div>
// // //                     <div className="text-xs text-slate-500 font-medium">Assignments</div>
// // //                   </div>
// // //                 </div>

// // //                 <div className="border border-orange-100 bg-orange-50/40 p-3.5 rounded-xl flex items-center gap-3">
// // //                   <div className="p-2.5 bg-orange-100 text-orange-600 rounded-xl flex-shrink-0">
// // //                     <FileText className="w-5 h-5" />
// // //                   </div>
// // //                   <div>
// // //                     <div className="font-extrabold text-base text-slate-900 leading-tight">35+</div>
// // //                     <div className="text-xs text-slate-500 font-medium">Model Papers</div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Resource Cards */}
// // //               {renderResourceCard(
// // //                 `Topic 1.1: In the Bazaars of Hyderabad`,
// // //                 `Explore study material and practice resources for this topic.`
// // //               )}

// // //               {renderResourceCard(
// // //                 `Chapter 1: A House, A Home (Covering All Topics)`,
// // //                 `Practice and resources for the complete chapter.`
// // //               )}

// // //               {renderResourceCard(
// // //                 `${activeTab} (Covering All Chapters)`,
// // //                 `Practice and resources for the entire subject.`
// // //               )}

// // //               {/* Tip Box */}
// // //               <div className="bg-blue-50/70 border border-blue-100 p-4 rounded-xl flex items-start gap-3.5">
// // //                 <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
// // //                 <p className="text-xs text-blue-950 leading-relaxed">
// // //                   <span className="font-bold">Tip:</span> Complete topic-wise practice first, then move to chapter-wise practice and finally subject-wise practice for better exam results.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* RIGHT COLUMN: MODEL PAPERS */}
// // //           <div className="lg:col-span-3">
// // //             <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80">
// // //               <h3 className="font-bold text-base text-slate-900 mb-1">
// // //                 Model Papers {activeTab}
// // //               </h3>
// // //               <p className="text-xs text-slate-500 mb-4 leading-relaxed">
// // //                 Curated model papers designed for final exam preparation.
// // //               </p>

// // //               <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
// // //                 {modelPapers.map((paper, idx) => (
// // //                   <div
// // //                     key={idx}
// // //                     className="p-3 border border-slate-100 rounded-xl hover:border-slate-200 hover:shadow-xs transition bg-white"
// // //                   >
// // //                     <div className="flex items-center gap-2 mb-2.5">
// // //                       <FileText className="w-4 h-4 text-purple-600 flex-shrink-0" />
// // //                       <span className="text-xs font-bold text-slate-800">{paper}</span>
// // //                     </div>
// // //                     <div className="flex items-center justify-end gap-2">
// // //                       <button
// // //                         type="button"
// // //                         className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition cursor-pointer"
// // //                       >
// // //                         <Eye className="w-3.5 h-3.5" /> View
// // //                       </button>
// // //                       <button
// // //                         type="button"
// // //                         className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition cursor-pointer"
// // //                       >
// // //                         <Download className="w-3.5 h-3.5" /> Download
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState, useEffect, useMemo } from "react";
// // import { useSearchParams, useLocation } from "react-router-dom";
// // import {
// //   BookOpen,
// //   FileText,
// //   HelpCircle,
// //   Download,
// //   Eye,
// //   BarChart2,
// //   ChevronDown,
// //   ChevronRight,
// //   Award,
// //   PhoneCall,
// //   Lightbulb,
// // } from "lucide-react";

// // export default function StudyDashboard() {
// //   // Safe extraction without router crash
// //   let navState: any = null;
// //   let rawSubject: string | null = null;
// //   let rawClass: string | null = null;
// //   let rawBoard: string | null = null;

// //   try {
// //     const location = useLocation();
// //     navState = location?.state;
// //   } catch (e) {
// //     navState = null;
// //   }

// //   try {
// //     const [searchParams] = useSearchParams();
// //     rawSubject = searchParams.get("subject");
// //     rawClass = searchParams.get("class");
// //     rawBoard = searchParams.get("board");
// //   } catch (e) {
// //     if (typeof window !== "undefined") {
// //       const urlParams = new URLSearchParams(window.location.search);
// //       rawSubject = urlParams.get("subject");
// //       rawClass = urlParams.get("class");
// //       rawBoard = urlParams.get("board");
// //     }
// //   }

// //   // Dynamic values with fallback defaults
// //   const currentSubject = useMemo(() => {
// //     return navState?.subject || rawSubject || "English";
// //   }, [navState, rawSubject]);

// //   const currentClass = useMemo(() => {
// //     if (navState?.class) return navState.class;
// //     if (rawClass) {
// //       return rawClass.toLowerCase().includes("class")
// //         ? rawClass
// //         : `Class ${rawClass}`;
// //     }
// //     return "Class 6";
// //   }, [navState, rawClass]);

// //   const currentBoard = useMemo(() => {
// //     return navState?.board || rawBoard || "CBSE";
// //   }, [navState, rawBoard]);

// //   // Check if class is 10 or 12
// //   const isBoardClass = useMemo(() => {
// //     const classNum = currentClass.replace(/\D/g, "");
// //     return classNum === "10" || classNum === "12";
// //   }, [currentClass]);

// //   const [activeTab, setActiveTab] = useState<string>(currentSubject);
// //   const [openChapter, setOpenChapter] = useState<number | null>(1);

// //   // Sync state if incoming subject changes
// //   useEffect(() => {
// //     if (currentSubject) {
// //       setActiveTab(currentSubject);
// //     }
// //   }, [currentSubject]);

// //   const subjects = [
// //     { name: "English", icon: "📖", color: "text-blue-600" },
// //     { name: "Mathematics", icon: "📐", color: "text-emerald-600" },
// //     { name: "Science", icon: "🧪", color: "text-purple-600" },
// //     { name: "Social Science", icon: "🌐", color: "text-orange-500" },
// //     { name: "Hindi", icon: "अ", color: "text-amber-600" },
// //     { name: "Sanskrit", icon: "ॐ", color: "text-cyan-500" },
// //     { name: "Telugu", icon: "తె", color: "text-pink-500" },
// //     { name: "Urdu", icon: "اردو", color: "text-green-600" },
// //   ];

// //   const chapters = [
// //     {
// //       id: 1,
// //       title: "Chapter 1",
// //       subtitle: "A House, A Home",
// //       subtopics: [
// //         "1.1 In the Bazaars of Hyderabad",
// //         "1.2 Around the World",
// //         "1.3 Key Words",
// //         "1.4 Word Meanings",
// //         "1.5 Question and Answer",
// //       ],
// //     },
// //     { id: 2, title: "Chapter 2", subtitle: "Tenses", subtopics: [] },
// //     { id: 3, title: "Chapter 3", subtitle: "Nouns", subtopics: [] },
// //     { id: 4, title: "Chapter 4", subtitle: "Adjectives", subtopics: [] },
// //     { id: 5, title: "Chapter 5", subtitle: "Verbs", subtopics: [] },
// //     { id: 6, title: "Chapter 6", subtitle: "The Sentence", subtopics: [] },
// //     { id: 7, title: "Chapter 7", subtitle: "Adverbs", subtopics: [] },
// //     { id: 8, title: "Chapter 8", subtitle: "Prepositions", subtopics: [] },
// //     { id: 9, title: "Chapter 9", subtitle: "Conjunctions", subtopics: [] },
// //     { id: 10, title: "Chapter 10", subtitle: "Punctuation", subtopics: [] },
// //   ];

// //   const modelPapers = Array.from({ length: 10 }, (_, i) => `Model Paper ${i + 1}`);
  
// //   // Previous Years Papers for Class 10 & 12 (2015 to 2024)
// //   const previousYearsPapers = [
// //     "2015 Board Paper",
// //     "2016 Board Paper",
// //     "2017 Board Paper",
// //     "2018 Board Paper",
// //     "2019 Board Paper",
// //     "2020 Board Paper",
// //     "2021 Board Paper",
// //     "2022 Board Paper",
// //     "2023 Board Paper",
// //     "2024 Board Paper",
// //   ];

// //   const handleTabChange = (subjectName: string) => {
// //     setActiveTab(subjectName);
// //     if (typeof window !== "undefined" && window.history?.pushState) {
// //       const url = new URL(window.location.href);
// //       url.searchParams.set("subject", subjectName);
// //       window.history.pushState({}, "", url.toString());
// //     }
// //   };

// //   const renderResourceCard = (title: string, desc: string) => (
// //     <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
// //       <div>
// //         <h3 className="font-bold text-slate-800 text-base">{title}</h3>
// //         <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
// //       </div>

// //       {/* Short Notes */}
// //       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-blue-100 bg-blue-50/40 gap-3">
// //         <div className="flex items-center gap-3.5">
// //           <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl">
// //             <FileText className="w-5 h-5" />
// //           </div>
// //           <div>
// //             <h4 className="text-sm font-bold text-slate-800">Short Notes</h4>
// //             <p className="text-xs text-slate-500 mt-0.5">Quick and easy notes to revise this topic.</p>
// //           </div>
// //         </div>
// //         <div className="flex items-center gap-2.5 flex-shrink-0">
// //           <button
// //             type="button"
// //             className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition shadow-xs cursor-pointer"
// //           >
// //             <Eye className="w-4 h-4" /> View Notes
// //           </button>
// //           <button
// //             type="button"
// //             className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-xs cursor-pointer"
// //           >
// //             <Download className="w-4 h-4" /> Download
// //           </button>
// //         </div>
// //       </div>

// //       {/* Assignments */}
// //       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 gap-3">
// //         <div className="flex items-center gap-3.5">
// //           <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl">
// //             <FileText className="w-5 h-5" />
// //           </div>
// //           <div>
// //             <h4 className="text-sm font-bold text-slate-800">Assignments</h4>
// //             <p className="text-xs text-slate-500 mt-0.5">Complete assignments to test your understanding.</p>
// //           </div>
// //         </div>
// //         <div className="flex items-center gap-2.5 flex-shrink-0">
// //           <button
// //             type="button"
// //             className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-xs cursor-pointer"
// //           >
// //             <Eye className="w-4 h-4" /> View Assignment
// //           </button>
// //           <button
// //             type="button"
// //             className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition shadow-xs cursor-pointer"
// //           >
// //             <Download className="w-4 h-4" /> Download Assignment
// //           </button>
// //         </div>
// //       </div>

// //       {/* MCQs Practice */}
// //       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-purple-100 bg-purple-50/40 gap-3">
// //         <div className="flex items-center gap-3.5">
// //           <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl">
// //             <HelpCircle className="w-5 h-5" />
// //           </div>
// //           <div>
// //             <h4 className="text-sm font-bold text-slate-800">MCQs Practice</h4>
// //             <p className="text-xs text-slate-500 mt-0.5">Practice multiple choice questions for this topic.</p>
// //           </div>
// //         </div>
// //         <div className="flex items-center gap-2 flex-shrink-0">
// //           <button
// //             type="button"
// //             className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-xs cursor-pointer"
// //           >
// //             <BarChart2 className="w-3.5 h-3.5" /> Easy
// //           </button>
// //           <button
// //             type="button"
// //             className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-orange-600 bg-white border border-orange-200 rounded-lg hover:bg-orange-50 transition shadow-xs cursor-pointer"
// //           >
// //             <BarChart2 className="w-3.5 h-3.5" /> Medium
// //           </button>
// //           <button
// //             type="button"
// //             className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 bg-white border border-rose-200 rounded-lg hover:bg-rose-50 transition shadow-xs cursor-pointer"
// //           >
// //             <BarChart2 className="w-3.5 h-3.5" /> Hard
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="min-h-screen bg-slate-100 p-4 md:p-6 font-sans text-slate-800 antialiased">
// //       <div className="max-w-[1340px] mx-auto">
        
// //         {/* TOP SUBJECTS NAVBAR */}
// //         <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-3 mb-6 flex items-center gap-2.5 overflow-x-auto">
// //           {subjects.map((sub) => {
// //             const isActive = activeTab.toLowerCase() === sub.name.toLowerCase();
// //             return (
// //               <button
// //                 key={sub.name}
// //                 type="button"
// //                 onClick={() => handleTabChange(sub.name)}
// //                 className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition border cursor-pointer ${
// //                   isActive
// //                     ? "bg-blue-50 border-blue-200 text-blue-700 shadow-xs"
// //                     : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50"
// //                 }`}
// //               >
// //                 <span className={`text-base ${sub.color}`}>{sub.icon}</span>
// //                 <span>{sub.name}</span>
// //               </button>
// //             );
// //           })}
// //         </div>

// //         {/* MAIN 3-COLUMN GRID */}
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
// //           {/* LEFT SIDEBAR: CHAPTERS */}
// //           <div className="lg:col-span-3 space-y-5">
// //             <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80">
// //               <div className="flex items-center gap-2.5 font-bold text-sm text-slate-800 pb-3.5 border-b border-slate-100 mb-3">
// //                 <BookOpen className="w-4 h-4 text-blue-600" />
// //                 <span>Chapters ({activeTab})</span>
// //               </div>

// //               <div className="space-y-1.5">
// //                 {chapters.map((ch) => {
// //                   const isOpen = openChapter === ch.id;
// //                   const hasSubtopics = ch.subtopics && ch.subtopics.length > 0;
// //                   return (
// //                     <div key={ch.id} className="rounded-xl overflow-hidden">
// //                       <div
// //                         onClick={() => setOpenChapter(isOpen ? null : ch.id)}
// //                         className={`flex items-center justify-between p-3 cursor-pointer rounded-xl text-sm font-medium transition ${
// //                           isOpen
// //                             ? "bg-purple-50 text-purple-800 font-semibold"
// //                             : "hover:bg-slate-50 text-slate-700"
// //                         }`}
// //                       >
// //                         <div className="flex items-center gap-3">
// //                           <div
// //                             className={`p-2 rounded-lg ${
// //                               isOpen
// //                                 ? "bg-purple-200/70 text-purple-700"
// //                                 : "bg-slate-100 text-slate-600"
// //                             }`}
// //                           >
// //                             <BookOpen className="w-4 h-4" />
// //                           </div>
// //                           <div className="text-left leading-tight">
// //                             <p className="font-bold text-xs tracking-tight">{ch.title}</p>
// //                             <p className="text-xs text-slate-500 font-normal mt-0.5">
// //                               {ch.subtitle}
// //                             </p>
// //                           </div>
// //                         </div>
// //                         {hasSubtopics ? (
// //                           <ChevronDown
// //                             className={`w-4 h-4 transition ${
// //                               isOpen ? "rotate-180 text-purple-700" : "text-slate-400"
// //                             }`}
// //                           />
// //                         ) : (
// //                           <ChevronRight className="w-4 h-4 text-slate-400" />
// //                         )}
// //                       </div>

// //                       {isOpen && hasSubtopics && (
// //                         <div className="pl-6 pr-2 py-2.5 space-y-1 bg-purple-50/50 rounded-b-xl border-t border-purple-100/50">
// //                           {ch.subtopics.map((sub, idx) => (
// //                             <div
// //                               key={idx}
// //                               className="text-xs font-medium text-slate-600 hover:text-purple-800 cursor-pointer py-1.5 px-2.5 rounded-lg hover:bg-purple-100/60 transition"
// //                             >
// //                               {sub}
// //                             </div>
// //                           ))}
// //                         </div>
// //                       )}
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>

// //             {/* Helpline / Motivation Badges */}
// //             <div className="bg-purple-50/80 border border-purple-100 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
// //               <div className="p-3 bg-purple-100 text-purple-700 rounded-xl flex-shrink-0">
// //                 <Award className="w-5 h-5" />
// //               </div>
// //               <div>
// //                 <h4 className="text-sm font-bold text-purple-950">Keep Practicing!</h4>
// //                 <p className="text-xs text-purple-800/80 mt-0.5">The more you practice, the better you get.</p>
// //               </div>
// //             </div>

// //             <div className="bg-amber-50/80 border border-amber-100 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
// //               <div className="p-3 bg-amber-100 text-amber-700 rounded-xl flex-shrink-0">
// //                 <PhoneCall className="w-5 h-5" />
// //               </div>
// //               <div>
// //                 <h4 className="text-sm font-bold text-amber-950">Need Help from Experts?</h4>
// //                 <p className="text-xs text-amber-800/80 mt-0.5">Call our support helpline:</p>
// //                 <p className="text-sm font-bold text-amber-700 mt-1">8058051515</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* MIDDLE COLUMN: ACTIVE CONTENT */}
// //           <div className="lg:col-span-6 space-y-5">
// //             <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 space-y-6">
              
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
// //                     {currentClass} – {activeTab}
// //                   </h1>
// //                   <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
// //                     {currentBoard} Board
// //                   </span>
// //                 </div>
// //               </div>

// //               {/* Metric Stats Banner */}
// //               <div className="grid grid-cols-3 gap-3.5">
// //                 <div className="border border-purple-100 bg-purple-50/40 p-3.5 rounded-xl flex items-center gap-3">
// //                   <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl flex-shrink-0">
// //                     <HelpCircle className="w-5 h-5" />
// //                   </div>
// //                   <div>
// //                     <div className="font-extrabold text-base text-slate-900 leading-tight">2,500+</div>
// //                     <div className="text-xs text-slate-500 font-medium">Questions</div>
// //                   </div>
// //                 </div>

// //                 <div className="border border-emerald-100 bg-emerald-50/40 p-3.5 rounded-xl flex items-center gap-3">
// //                   <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl flex-shrink-0">
// //                     <FileText className="w-5 h-5" />
// //                   </div>
// //                   <div>
// //                     <div className="font-extrabold text-base text-slate-900 leading-tight">150+</div>
// //                     <div className="text-xs text-slate-500 font-medium">Assignments</div>
// //                   </div>
// //                 </div>

// //                 <div className="border border-orange-100 bg-orange-50/40 p-3.5 rounded-xl flex items-center gap-3">
// //                   <div className="p-2.5 bg-orange-100 text-orange-600 rounded-xl flex-shrink-0">
// //                     <FileText className="w-5 h-5" />
// //                   </div>
// //                   <div>
// //                     <div className="font-extrabold text-base text-slate-900 leading-tight">
// //                       {isBoardClass ? "10+" : "35+"}
// //                     </div>
// //                     <div className="text-xs text-slate-500 font-medium">
// //                       {isBoardClass ? "Past Papers" : "Model Papers"}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Resource Cards */}
// //               {renderResourceCard(
// //                 `Topic 1.1: In the Bazaars of Hyderabad`,
// //                 `Explore study material and practice resources for this topic.`
// //               )}

// //               {renderResourceCard(
// //                 `Chapter 1: A House, A Home (Covering All Topics)`,
// //                 `Practice and resources for the complete chapter.`
// //               )}

// //               {renderResourceCard(
// //                 `${activeTab} (Covering All Chapters)`,
// //                 `Practice and resources for the entire subject.`
// //               )}

// //               {/* Tip Box */}
// //               <div className="bg-blue-50/70 border border-blue-100 p-4 rounded-xl flex items-start gap-3.5">
// //                 <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
// //                 <p className="text-xs text-blue-950 leading-relaxed">
// //                   <span className="font-bold">Tip:</span> Complete topic-wise practice first, then move to chapter-wise practice and finally subject-wise practice for better exam results.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* RIGHT COLUMN: PREVIOUS YEARS PAPERS (CLASS 10/12) OR MODEL PAPERS (OTHER CLASSES) */}
// //           <div className="lg:col-span-3">
// //             <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80">
// //               {isBoardClass ? (
// //                 /* CLASS 10 / 12 UI */
// //                 <>
// //                   <h3 className="font-bold text-base text-blue-950 tracking-tight">
// //                     Previous Years Papers
// //                   </h3>
// //                   <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed font-normal">
// //                     Solve previous years papers to understand the exam pattern and improve your performance.
// //                   </p>

// //                   <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
// //                     {previousYearsPapers.map((paper, idx) => (
// //                       <div
// //                         key={idx}
// //                         className="p-3.5 border border-slate-100/90 rounded-2xl hover:border-slate-200 hover:shadow-xs transition bg-white space-y-3"
// //                       >
// //                         <div className="flex items-center gap-2.5">
// //                           <FileText className="w-4 h-4 text-purple-600 flex-shrink-0" />
// //                           <span className="text-xs font-bold text-blue-950 tracking-tight">
// //                             {paper}
// //                           </span>
// //                         </div>
// //                         <div className="grid grid-cols-2 gap-2">
// //                           <button
// //                             type="button"
// //                             className="flex items-center justify-center gap-1.5 py-1.5 px-2 text-xs font-bold text-blue-600 bg-white border border-blue-200/90 rounded-xl hover:bg-blue-50 transition cursor-pointer shadow-2xs"
// //                           >
// //                             <Eye className="w-3.5 h-3.5" /> View
// //                           </button>
// //                           <button
// //                             type="button"
// //                             className="flex items-center justify-center gap-1.5 py-1.5 px-2 text-xs font-bold text-emerald-600 bg-white border border-emerald-200/90 rounded-xl hover:bg-emerald-50 transition cursor-pointer shadow-2xs"
// //                           >
// //                             <Download className="w-3.5 h-3.5" /> Download
// //                           </button>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </>
// //               ) : (
// //                 /* OTHER CLASSES (6, 7, 8, 9, 11) UI */
// //                 <>
// //                   <h3 className="font-bold text-base text-slate-900 mb-1">
// //                     Model Papers {activeTab}
// //                   </h3>
// //                   <p className="text-xs text-slate-500 mb-4 leading-relaxed">
// //                     Curated model papers designed for final exam preparation.
// //                   </p>

// //                   <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
// //                     {modelPapers.map((paper, idx) => (
// //                       <div
// //                         key={idx}
// //                         className="p-3 border border-slate-100 rounded-xl hover:border-slate-200 hover:shadow-xs transition bg-white"
// //                       >
// //                         <div className="flex items-center gap-2 mb-2.5">
// //                           <FileText className="w-4 h-4 text-purple-600 flex-shrink-0" />
// //                           <span className="text-xs font-bold text-slate-800">{paper}</span>
// //                         </div>
// //                         <div className="flex items-center justify-end gap-2">
// //                           <button
// //                             type="button"
// //                             className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition cursor-pointer"
// //                           >
// //                             <Eye className="w-3.5 h-3.5" /> View
// //                           </button>
// //                           <button
// //                             type="button"
// //                             className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition cursor-pointer"
// //                           >
// //                             <Download className="w-3.5 h-3.5" /> Download
// //                           </button>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </>
// //               )}
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useState, useEffect, useMemo } from "react";
// import { useSearchParams, useLocation } from "react-router-dom";
// import {
//   BookOpen,
//   FileText,
//   HelpCircle,
//   Download,
//   Eye,
//   BarChart2,
//   ChevronDown,
//   ChevronRight,
//   Award,
//   PhoneCall,
//   Lightbulb,
// } from "lucide-react";

// export default function StudyDashboard() {
//   // Safe extraction without router crash
//   let navState: any = null;
//   let rawSubject: string | null = null;
//   let rawClass: string | null = null;
//   let rawBoard: string | null = null;

//   try {
//     const location = useLocation();
//     navState = location?.state;
//   } catch (e) {
//     navState = null;
//   }

//   try {
//     const [searchParams] = useSearchParams();
//     rawSubject = searchParams.get("subject");
//     rawClass = searchParams.get("class");
//     rawBoard = searchParams.get("board");
//   } catch (e) {
//     if (typeof window !== "undefined") {
//       const urlParams = new URLSearchParams(window.location.search);
//       rawSubject = urlParams.get("subject");
//       rawClass = urlParams.get("class");
//       rawBoard = urlParams.get("board");
//     }
//   }

//   // Dynamic values with fallback defaults
//   const currentSubject = useMemo(() => {
//     return navState?.subject || rawSubject || "English";
//   }, [navState, rawSubject]);

//   const currentClass = useMemo(() => {
//     if (navState?.class) return navState.class;
//     if (rawClass) {
//       return rawClass.toLowerCase().includes("class")
//         ? rawClass
//         : `Class ${rawClass}`;
//     }
//     return "Class 6";
//   }, [navState, rawClass]);

//   const currentBoard = useMemo(() => {
//     return navState?.board || rawBoard || "CBSE";
//   }, [navState, rawBoard]);

//   // Check if class is 10 or 12
//   const isBoardClass = useMemo(() => {
//     const classNum = currentClass.replace(/\D/g, "");
//     return classNum === "10" || classNum === "12";
//   }, [currentClass]);

//   const [activeTab, setActiveTab] = useState<string>(currentSubject);
//   const [openChapter, setOpenChapter] = useState<number | null>(1);

//   // Sync state if incoming subject changes
//   useEffect(() => {
//     if (currentSubject) {
//       setActiveTab(currentSubject);
//     }
//   }, [currentSubject]);

//   const subjects = [
//     { name: "English", icon: "📖", color: "text-blue-600" },
//     { name: "Mathematics", icon: "📐", color: "text-emerald-600" },
//     { name: "Science", icon: "🧪", color: "text-purple-600" },
//     { name: "Social Science", icon: "🌐", color: "text-orange-500" },
//     { name: "Hindi", icon: "अ", color: "text-amber-600" },
//     { name: "Sanskrit", icon: "ॐ", color: "text-cyan-500" },
//     { name: "Telugu", icon: "తె", color: "text-pink-500" },
//     { name: "Urdu", icon: "اردو", color: "text-green-600" },
//   ];

//   const chapters = [
//     {
//       id: 1,
//       title: "Chapter 1",
//       subtitle: "A House, A Home",
//       subtopics: [
//         "1.1 In the Bazaars of Hyderabad",
//         "1.2 Around the World",
//         "1.3 Key Words",
//         "1.4 Word Meanings",
//         "1.5 Question and Answer",
//       ],
//     },
//     { id: 2, title: "Chapter 2", subtitle: "Tenses", subtopics: [] },
//     { id: 3, title: "Chapter 3", subtitle: "Nouns", subtopics: [] },
//     { id: 4, title: "Chapter 4", subtitle: "Adjectives", subtopics: [] },
//     { id: 5, title: "Chapter 5", subtitle: "Verbs", subtopics: [] },
//     { id: 6, title: "Chapter 6", subtitle: "The Sentence", subtopics: [] },
//     { id: 7, title: "Chapter 7", subtitle: "Adverbs", subtopics: [] },
//     { id: 8, title: "Chapter 8", subtitle: "Prepositions", subtopics: [] },
//     { id: 9, title: "Chapter 9", subtitle: "Conjunctions", subtopics: [] },
//     { id: 10, title: "Chapter 10", subtitle: "Punctuation", subtopics: [] },
//   ];

//   const modelPapers = Array.from({ length: 10 }, (_, i) => `Model Paper ${i + 1}`);
  
//   // Previous Years Papers for Class 10 & 12 (2015 to 2024)
//   const previousYearsPapers = [
//     "2015 Board Paper",
//     "2016 Board Paper",
//     "2017 Board Paper",
//     "2018 Board Paper",
//     "2019 Board Paper",
//     "2020 Board Paper",
//     "2021 Board Paper",
//     "2022 Board Paper",
//     "2023 Board Paper",
//     "2024 Board Paper",
//   ];

//   const handleTabChange = (subjectName: string) => {
//     setActiveTab(subjectName);
//     if (typeof window !== "undefined" && window.history?.pushState) {
//       const url = new URL(window.location.href);
//       url.searchParams.set("subject", subjectName);
//       window.history.pushState({}, "", url.toString());
//     }
//   };

//   const renderResourceCard = (title: string, desc: string) => (
//     <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
//       <div>
//         <h3 className="font-bold text-slate-800 text-base">{title}</h3>
//         <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
//       </div>

//       {/* Short Notes */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-blue-100 bg-blue-50/40 gap-3">
//         <div className="flex items-center gap-3.5">
//           <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl">
//             <FileText className="w-5 h-5" />
//           </div>
//           <div>
//             <h4 className="text-sm font-bold text-slate-800">Short Notes</h4>
//             <p className="text-xs text-slate-500 mt-0.5">Quick and easy notes to revise this topic.</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-2.5 flex-shrink-0">
//           <button
//             type="button"
//             className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition shadow-xs cursor-pointer"
//           >
//             <Eye className="w-4 h-4" /> View Notes
//           </button>
//           <button
//             type="button"
//             className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-xs cursor-pointer"
//           >
//             <Download className="w-4 h-4" /> Download
//           </button>
//         </div>
//       </div>

//       {/* Assignments */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 gap-3">
//         <div className="flex items-center gap-3.5">
//           <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl">
//             <FileText className="w-5 h-5" />
//           </div>
//           <div>
//             <h4 className="text-sm font-bold text-slate-800">Assignments</h4>
//             <p className="text-xs text-slate-500 mt-0.5">Complete assignments to test your understanding.</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-2.5 flex-shrink-0">
//           <button
//             type="button"
//             className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-xs cursor-pointer"
//           >
//             <Eye className="w-4 h-4" /> View Assignment
//           </button>
//           <button
//             type="button"
//             className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition shadow-xs cursor-pointer"
//           >
//             <Download className="w-4 h-4" /> Download Assignment
//           </button>
//         </div>
//       </div>

//       {/* MCQs Practice */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-purple-100 bg-purple-50/40 gap-3">
//         <div className="flex items-center gap-3.5">
//           <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl">
//             <HelpCircle className="w-5 h-5" />
//           </div>
//           <div>
//             <h4 className="text-sm font-bold text-slate-800">MCQs Practice</h4>
//             <p className="text-xs text-slate-500 mt-0.5">Practice multiple choice questions for this topic.</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-2 flex-shrink-0">
//           <button
//             type="button"
//             className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-xs cursor-pointer"
//           >
//             <BarChart2 className="w-3.5 h-3.5" /> Easy
//           </button>
//           <button
//             type="button"
//             className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-orange-600 bg-white border border-orange-200 rounded-lg hover:bg-orange-50 transition shadow-xs cursor-pointer"
//           >
//             <BarChart2 className="w-3.5 h-3.5" /> Medium
//           </button>
//           <button
//             type="button"
//             className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 bg-white border border-rose-200 rounded-lg hover:bg-rose-50 transition shadow-xs cursor-pointer"
//           >
//             <BarChart2 className="w-3.5 h-3.5" /> Hard
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-slate-100 p-4 md:p-6 font-sans text-slate-800 antialiased">
//       <div className="max-w-[1340px] mx-auto">
        
//         {/* TOP SUBJECTS NAVBAR */}
//         <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-3 mb-6 flex items-center gap-2.5 overflow-x-auto">
//           {subjects.map((sub) => {
//             const isActive = activeTab.toLowerCase() === sub.name.toLowerCase();
//             return (
//               <button
//                 key={sub.name}
//                 type="button"
//                 onClick={() => handleTabChange(sub.name)}
//                 className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition border cursor-pointer ${
//                   isActive
//                     ? "bg-blue-50 border-blue-200 text-blue-700 shadow-xs"
//                     : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50"
//                 }`}
//               >
//                 <span className={`text-base ${sub.color}`}>{sub.icon}</span>
//                 <span>{sub.name}</span>
//               </button>
//             );
//           })}
//         </div>

//         {/* MAIN 3-COLUMN GRID */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
//           {/* LEFT SIDEBAR: CHAPTERS */}
//           <div className="lg:col-span-3 space-y-5">
//             <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80">
//               <div className="flex items-center gap-2.5 font-bold text-sm text-slate-800 pb-3.5 border-b border-slate-100 mb-3">
//                 <BookOpen className="w-4 h-4 text-blue-600" />
//                 <span>Chapters ({activeTab})</span>
//               </div>

//               <div className="space-y-1.5">
//                 {chapters.map((ch) => {
//                   const isOpen = openChapter === ch.id;
//                   const hasSubtopics = ch.subtopics && ch.subtopics.length > 0;
//                   return (
//                     <div key={ch.id} className="rounded-xl overflow-hidden">
//                       <div
//                         onClick={() => setOpenChapter(isOpen ? null : ch.id)}
//                         className={`flex items-center justify-between p-3 cursor-pointer rounded-xl text-sm font-medium transition ${
//                           isOpen
//                             ? "bg-purple-50 text-purple-800 font-semibold"
//                             : "hover:bg-slate-50 text-slate-700"
//                         }`}
//                       >
//                         <div className="flex items-center gap-3">
//                           <div
//                             className={`p-2 rounded-lg ${
//                               isOpen
//                                 ? "bg-purple-200/70 text-purple-700"
//                                 : "bg-slate-100 text-slate-600"
//                             }`}
//                           >
//                             <BookOpen className="w-4 h-4" />
//                           </div>
//                           <div className="text-left leading-tight">
//                             <p className="font-bold text-xs tracking-tight">{ch.title}</p>
//                             <p className="text-xs text-slate-500 font-normal mt-0.5">
//                               {ch.subtitle}
//                             </p>
//                           </div>
//                         </div>
//                         {hasSubtopics ? (
//                           <ChevronDown
//                             className={`w-4 h-4 transition ${
//                               isOpen ? "rotate-180 text-purple-700" : "text-slate-400"
//                             }`}
//                           />
//                         ) : (
//                           <ChevronRight className="w-4 h-4 text-slate-400" />
//                         )}
//                       </div>

//                       {isOpen && hasSubtopics && (
//                         <div className="pl-6 pr-2 py-2.5 space-y-1 bg-purple-50/50 rounded-b-xl border-t border-purple-100/50">
//                           {ch.subtopics.map((sub, idx) => (
//                             <div
//                               key={idx}
//                               className="text-xs font-medium text-slate-600 hover:text-purple-800 cursor-pointer py-1.5 px-2.5 rounded-lg hover:bg-purple-100/60 transition"
//                             >
//                               {sub}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Helpline / Motivation Badges */}
//             <div className="bg-purple-50/80 border border-purple-100 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
//               <div className="p-3 bg-purple-100 text-purple-700 rounded-xl flex-shrink-0">
//                 <Award className="w-5 h-5" />
//               </div>
//               <div>
//                 <h4 className="text-sm font-bold text-purple-950">Keep Practicing!</h4>
//                 <p className="text-xs text-purple-800/80 mt-0.5">The more you practice, the better you get.</p>
//               </div>
//             </div>

//             <div className="bg-amber-50/80 border border-amber-100 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
//               <div className="p-3 bg-amber-100 text-amber-700 rounded-xl flex-shrink-0">
//                 <PhoneCall className="w-5 h-5" />
//               </div>
//               <div>
//                 <h4 className="text-sm font-bold text-amber-950">Need Help from Experts?</h4>
//                 <p className="text-xs text-amber-800/80 mt-0.5">Call our support helpline:</p>
//                 <p className="text-sm font-bold text-amber-700 mt-1">8058051515</p>
//               </div>
//             </div>
//           </div>

//           {/* MIDDLE COLUMN: ACTIVE CONTENT */}
//           <div className="lg:col-span-6 space-y-5">
//             <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 space-y-6">
              
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
//                     {currentClass} – {activeTab}
//                   </h1>
//                   <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
//                     {currentBoard} Board
//                   </span>
//                 </div>
//               </div>

//               {/* Metric Stats Banner */}
//               <div className="grid grid-cols-3 gap-3.5">
//                 <div className="border border-purple-100 bg-purple-50/40 p-3.5 rounded-xl flex items-center gap-3">
//                   <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl flex-shrink-0">
//                     <HelpCircle className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <div className="font-extrabold text-base text-slate-900 leading-tight">2,500+</div>
//                     <div className="text-xs text-slate-500 font-medium">Questions</div>
//                   </div>
//                 </div>

//                 <div className="border border-emerald-100 bg-emerald-50/40 p-3.5 rounded-xl flex items-center gap-3">
//                   <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl flex-shrink-0">
//                     <FileText className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <div className="font-extrabold text-base text-slate-900 leading-tight">150+</div>
//                     <div className="text-xs text-slate-500 font-medium">Assignments</div>
//                   </div>
//                 </div>

//                 <div className="border border-orange-100 bg-orange-50/40 p-3.5 rounded-xl flex items-center gap-3">
//                   <div className="p-2.5 bg-orange-100 text-orange-600 rounded-xl flex-shrink-0">
//                     <FileText className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <div className="font-extrabold text-base text-slate-900 leading-tight">
//                       {isBoardClass ? "10+" : "35+"}
//                     </div>
//                     <div className="text-xs text-slate-500 font-medium">
//                       {isBoardClass ? "Past Papers" : "Model Papers"}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Resource Cards */}
//               {renderResourceCard(
//                 `Topic 1.1: In the Bazaars of Hyderabad`,
//                 `Explore study material and practice resources for this topic.`
//               )}

//               {renderResourceCard(
//                 `Chapter 1: A House, A Home (Covering All Topics)`,
//                 `Practice and resources for the complete chapter.`
//               )}

//               {renderResourceCard(
//                 `${activeTab} (Covering All Chapters)`,
//                 `Practice and resources for the entire subject.`
//               )}

//               {/* Tip Box */}
//               <div className="bg-blue-50/70 border border-blue-100 p-4 rounded-xl flex items-start gap-3.5">
//                 <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
//                 <p className="text-xs text-blue-950 leading-relaxed">
//                   <span className="font-bold">Tip:</span> Complete topic-wise practice first, then move to chapter-wise practice and finally subject-wise practice for better exam results.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: PREVIOUS YEARS PAPERS (CLASS 10/12) OR MODEL PAPERS (OTHER CLASSES) */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80">
//               {isBoardClass ? (
//                 /* CLASS 10 / 12 UI */
//                 <>
//                   <h3 className="font-bold text-base text-blue-950 tracking-tight">
//                     Previous Years Papers
//                   </h3>
//                   <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed font-normal">
//                     Solve previous years papers to understand the exam pattern and improve your performance.
//                   </p>

//                   <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
//                     {previousYearsPapers.map((paper, idx) => (
//                       <div
//                         key={idx}
//                         className="p-3.5 border border-slate-100/90 rounded-2xl hover:border-slate-200 hover:shadow-xs transition bg-white space-y-3"
//                       >
//                         <div className="flex items-center gap-2.5">
//                           <FileText className="w-4 h-4 text-purple-600 flex-shrink-0" />
//                           <span className="text-xs font-bold text-blue-950 tracking-tight">
//                             {paper}
//                           </span>
//                         </div>
//                         <div className="grid grid-cols-2 gap-2">
//                           <button
//                             type="button"
//                             className="flex items-center justify-center gap-1.5 py-1.5 px-2 text-xs font-bold text-blue-600 bg-white border border-blue-200/90 rounded-xl hover:bg-blue-50 transition cursor-pointer shadow-2xs"
//                           >
//                             <Eye className="w-3.5 h-3.5" /> View
//                           </button>
//                           <button
//                             type="button"
//                             className="flex items-center justify-center gap-1.5 py-1.5 px-2 text-xs font-bold text-emerald-600 bg-white border border-emerald-200/90 rounded-xl hover:bg-emerald-50 transition cursor-pointer shadow-2xs"
//                           >
//                             <Download className="w-3.5 h-3.5" /> Download
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               ) : (
//                 /* OTHER CLASSES (6, 7, 8, 9, 11) UI */
//                 <>
//                   <h3 className="font-bold text-base text-slate-900 mb-1">
//                     Model Papers {activeTab}
//                   </h3>
//                   <p className="text-xs text-slate-500 mb-4 leading-relaxed">
//                     Curated model papers designed for final exam preparation.
//                   </p>

//                   <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
//                     {modelPapers.map((paper, idx) => (
//                       <div
//                         key={idx}
//                         className="p-3 border border-slate-100 rounded-xl hover:border-slate-200 hover:shadow-xs transition bg-white"
//                       >
//                         <div className="flex items-center gap-2 mb-2.5">
//                           <FileText className="w-4 h-4 text-purple-600 flex-shrink-0" />
//                           <span className="text-xs font-bold text-slate-800">{paper}</span>
//                         </div>
//                         <div className="flex items-center justify-end gap-2">
//                           <button
//                             type="button"
//                             className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition cursor-pointer"
//                           >
//                             <Eye className="w-3.5 h-3.5" /> View
//                           </button>
//                           <button
//                             type="button"
//                             className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition cursor-pointer"
//                           >
//                             <Download className="w-3.5 h-3.5" /> Download
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import {
  BookOpen,
  FileText,
  HelpCircle,
  Download,
  Eye,
  BarChart2,
  ChevronDown,
  ChevronRight,
  Award,
  PhoneCall,
  Lightbulb,
} from "lucide-react";
import { Header } from '../src/components/Header';
export default function StudyDashboard() {
  // Safe extraction without router crash
  let navState: any = null;
  let rawSubject: string | null = null;
  let rawClass: string | null = null;
  let rawBoard: string | null = null;

  try {
    const location = useLocation();
    navState = location?.state;
  } catch (e) {
    navState = null;
  }

  try {
    const [searchParams] = useSearchParams();
    rawSubject = searchParams.get("subject");
    rawClass = searchParams.get("class");
    rawBoard = searchParams.get("board");
  } catch (e) {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      rawSubject = urlParams.get("subject");
      rawClass = urlParams.get("class");
      rawBoard = urlParams.get("board");
    }
  }

  // Dynamic values with fallback defaults
  const currentSubject = useMemo(() => {
    return navState?.subject || rawSubject || "English";
  }, [navState, rawSubject]);

  const currentClass = useMemo(() => {
    if (navState?.class) return navState.class;
    if (rawClass) {
      return rawClass.toLowerCase().includes("class")
        ? rawClass
        : `Class ${rawClass}`;
    }
    return "Class 10";
  }, [navState, rawClass]);

  const currentBoard = useMemo(() => {
    return navState?.board || rawBoard || "CBSE";
  }, [navState, rawBoard]);

  // Check if class is 10 or 12
  const isBoardClass = useMemo(() => {
    const classNum = currentClass.replace(/\D/g, "");
    return classNum === "10" || classNum === "12";
  }, [currentClass]);

  const [activeTab, setActiveTab] = useState<string>(currentSubject);
  const [openChapter, setOpenChapter] = useState<number | null>(1);
  const [paperTab, setPaperTab] = useState<"pyq" | "model">("pyq");

  // Sync state if incoming subject changes
  useEffect(() => {
    if (currentSubject) {
      setActiveTab(currentSubject);
    }
  }, [currentSubject]);

  const subjects = [
    { name: "English", icon: "📖", color: "text-blue-600" },
    { name: "Mathematics", icon: "📐", color: "text-emerald-600" },
    { name: "Science", icon: "🧪", color: "text-purple-600" },
    { name: "Social Science", icon: "🌐", color: "text-orange-500" },
    { name: "Hindi", icon: "अ", color: "text-amber-600" },
    { name: "Sanskrit", icon: "ॐ", color: "text-cyan-500" },
    { name: "Telugu", icon: "తె", color: "text-pink-500" },
    { name: "Urdu", icon: "اردو", color: "text-green-600" },
  ];

  const chapters = [
    {
      id: 1,
      title: "Chapter 1",
      subtitle: "A House, A Home",
      subtopics: [
        "1.1 In the Bazaars of Hyderabad",
        "1.2 Around the World",
        "1.3 Key Words",
        "1.4 Word Meanings",
        "1.5 Question and Answer",
      ],
    },
    { id: 2, title: "Chapter 2", subtitle: "Tenses", subtopics: [] },
    { id: 3, title: "Chapter 3", subtitle: "Nouns", subtopics: [] },
    { id: 4, title: "Chapter 4", subtitle: "Adjectives", subtopics: [] },
    { id: 5, title: "Chapter 5", subtitle: "Verbs", subtopics: [] },
    { id: 6, title: "Chapter 6", subtitle: "The Sentence", subtopics: [] },
    { id: 7, title: "Chapter 7", subtitle: "Adverbs", subtopics: [] },
    { id: 8, title: "Chapter 8", subtitle: "Prepositions", subtopics: [] },
    { id: 9, title: "Chapter 9", subtitle: "Conjunctions", subtopics: [] },
    { id: 10, title: "Chapter 10", subtitle: "Punctuation", subtopics: [] },
  ];

  const modelPapers = Array.from({ length: 10 }, (_, i) => `Model Paper ${i + 1}`);

  // Previous Years Papers for Class 10 & 12 (2015 to 2024)
  const previousYearsPapers = [
    "2015 Board Paper",
    "2016 Board Paper",
    "2017 Board Paper",
    "2018 Board Paper",
    "2019 Board Paper",
    "2020 Board Paper",
    "2021 Board Paper",
    "2022 Board Paper",
    "2023 Board Paper",
    "2024 Board Paper",
  ];

  const handleTabChange = (subjectName: string) => {
    setActiveTab(subjectName);
    if (typeof window !== "undefined" && window.history?.pushState) {
      const url = new URL(window.location.href);
      url.searchParams.set("subject", subjectName);
      window.history.pushState({}, "", url.toString());
    }
  };

  const renderResourceCard = (title: string, desc: string) => (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">

      <div>
        <h3 className="font-bold text-slate-800 text-base">{title}</h3>
        <p className="text-sm text-slate-500 mt-0.5">{desc}</p>
      </div>

      {/* Short Notes */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-blue-100 bg-blue-50/40 gap-3">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Short Notes</h4>
            <p className="text-xs text-slate-500 mt-0.5">Quick and easy notes to revise this topic.</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <button
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition shadow-xs cursor-pointer"
          >
            <Eye className="w-4 h-4" /> View Notes
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4" /> Download
          </button>
        </div>
      </div>

      {/* Assignments */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 gap-3">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Assignments</h4>
            <p className="text-xs text-slate-500 mt-0.5">Complete assignments to test your understanding.</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <button
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-xs cursor-pointer"
          >
            <Eye className="w-4 h-4" /> View Assignment
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4" /> Download Assignment
          </button>
        </div>
      </div>

      {/* MCQs Practice */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-purple-100 bg-purple-50/40 gap-3">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">MCQs Practice</h4>
            <p className="text-xs text-slate-500 mt-0.5">Practice multiple choice questions for this topic.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition shadow-xs cursor-pointer"
          >
            <BarChart2 className="w-3.5 h-3.5" /> Easy
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-orange-600 bg-white border border-orange-200 rounded-lg hover:bg-orange-50 transition shadow-xs cursor-pointer"
          >
            <BarChart2 className="w-3.5 h-3.5" /> Medium
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 bg-white border border-rose-200 rounded-lg hover:bg-rose-50 transition shadow-xs cursor-pointer"
          >
            <BarChart2 className="w-3.5 h-3.5" /> Hard
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-6 font-sans text-slate-800 antialiased">
      <div className="max-w-[1340px] mx-auto">
        <Header/>
        {/* TOP SUBJECTS NAVBAR */}
        <div className="bg-white rounded-2xl shadow-xs border border-slate-200/80 p-3 mb-6 flex items-center gap-2.5 overflow-x-auto">
          {subjects.map((sub) => {
            const isActive = activeTab.toLowerCase() === sub.name.toLowerCase();
            return (
              <button
                key={sub.name}
                type="button"
                onClick={() => handleTabChange(sub.name)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition border cursor-pointer ${
                  isActive
                    ? "bg-blue-50 border-blue-200 text-blue-700 shadow-xs"
                    : "border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50"
                }`}
              >
                <span className={`text-base ${sub.color}`}>{sub.icon}</span>
                <span>{sub.name}</span>
              </button>
            );
          })}
        </div>

        {/* MAIN 3-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT SIDEBAR: CHAPTERS */}
          <div className="lg:col-span-3 space-y-5">
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80">
              <div className="flex items-center gap-2.5 font-bold text-sm text-slate-800 pb-3.5 border-b border-slate-100 mb-3">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Chapters ({activeTab})</span>
              </div>

              <div className="space-y-1.5">
                {chapters.map((ch) => {
                  const isOpen = openChapter === ch.id;
                  const hasSubtopics = ch.subtopics && ch.subtopics.length > 0;
                  return (
                    <div key={ch.id} className="rounded-xl overflow-hidden">
                      <div
                        onClick={() => setOpenChapter(isOpen ? null : ch.id)}
                        className={`flex items-center justify-between p-3 cursor-pointer rounded-xl text-sm font-medium transition ${
                          isOpen
                            ? "bg-purple-50 text-purple-800 font-semibold"
                            : "hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${
                              isOpen
                                ? "bg-purple-200/70 text-purple-700"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div className="text-left leading-tight">
                            <p className="font-bold text-xs tracking-tight">{ch.title}</p>
                            <p className="text-xs text-slate-500 font-normal mt-0.5">
                              {ch.subtitle}
                            </p>
                          </div>
                        </div>
                        {hasSubtopics ? (
                          <ChevronDown
                            className={`w-4 h-4 transition ${
                              isOpen ? "rotate-180 text-purple-700" : "text-slate-400"
                            }`}
                          />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        )}
                      </div>

                      {isOpen && hasSubtopics && (
                        <div className="pl-6 pr-2 py-2.5 space-y-1 bg-purple-50/50 rounded-b-xl border-t border-purple-100/50">
                          {ch.subtopics.map((sub, idx) => (
                            <div
                              key={idx}
                              className="text-xs font-medium text-slate-600 hover:text-purple-800 cursor-pointer py-1.5 px-2.5 rounded-lg hover:bg-purple-100/60 transition"
                            >
                              {sub}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Helpline / Motivation Badges */}
            <div className="bg-purple-50/80 border border-purple-100 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
              <div className="p-3 bg-purple-100 text-purple-700 rounded-xl flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-purple-950">Keep Practicing!</h4>
                <p className="text-xs text-purple-800/80 mt-0.5">The more you practice, the better you get.</p>
              </div>
            </div>

            <div className="bg-amber-50/80 border border-amber-100 rounded-2xl p-4 flex items-center gap-3.5 shadow-xs">
              <div className="p-3 bg-amber-100 text-amber-700 rounded-xl flex-shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-950">Need Help from Experts?</h4>
                <p className="text-xs text-amber-800/80 mt-0.5">Call our support helpline:</p>
                <p className="text-sm font-bold text-amber-700 mt-1">8058051515</p>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: ACTIVE CONTENT */}
          <div className="lg:col-span-6 space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {currentClass} – {activeTab}
                  </h1>
                  <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full border border-slate-200">
                    {currentBoard} Board
                  </span>
                </div>
              </div>

              {/* Metric Stats Banner */}
              <div className="grid grid-cols-3 gap-3.5">
                <div className="border border-purple-100 bg-purple-50/40 p-3.5 rounded-xl flex items-center gap-3">
                  <div className="p-2.5 bg-purple-100 text-purple-600 rounded-xl flex-shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-base text-slate-900 leading-tight">2,500+</div>
                    <div className="text-xs text-slate-500 font-medium">Questions</div>
                  </div>
                </div>

                <div className="border border-emerald-100 bg-emerald-50/40 p-3.5 rounded-xl flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-base text-slate-900 leading-tight">150+</div>
                    <div className="text-xs text-slate-500 font-medium">Assignments</div>
                  </div>
                </div>

                <div className="border border-orange-100 bg-orange-50/40 p-3.5 rounded-xl flex items-center gap-3">
                  <div className="p-2.5 bg-orange-100 text-orange-600 rounded-xl flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-base text-slate-900 leading-tight">
                      {isBoardClass ? "45+" : "35+"}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {isBoardClass ? "Papers & PYQs" : "Model Papers"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resource Cards */}
              {renderResourceCard(
                `Topic 1.1: In the Bazaars of Hyderabad`,
                `Explore study material and practice resources for this topic.`
              )}

              {renderResourceCard(
                `Chapter 1: A House, A Home (Covering All Topics)`,
                `Practice and resources for the complete chapter.`
              )}

              {renderResourceCard(
                `${activeTab} (Covering All Chapters)`,
                `Practice and resources for the entire subject.`
              )}

              {/* Tip Box */}
              <div className="bg-blue-50/70 border border-blue-100 p-4 rounded-xl flex items-start gap-3.5">
                <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-950 leading-relaxed">
                  <span className="font-bold">Tip:</span> Complete topic-wise practice first, then move to chapter-wise practice and finally subject-wise practice for better exam results.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PAPERS SECTION */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200/80 space-y-4">
              
              {/* TAB SWITCHER FOR CLASS 10 & 12 */}
              {isBoardClass ? (
                <>
                  <div className="flex bg-slate-100 p-1 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setPaperTab("pyq")}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                        paperTab === "pyq"
                          ? "bg-white text-blue-600 shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Past Papers (PYQ)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaperTab("model")}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                        paperTab === "model"
                          ? "bg-white text-blue-600 shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Model Papers
                    </button>
                  </div>

                  {paperTab === "pyq" ? (
                    /* PREVIOUS YEARS PAPERS LIST */
                    <div>
                      <h3 className="font-bold text-base text-blue-950 tracking-tight">
                        Previous Years Papers
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
                        Solve previous years papers to understand the exam pattern and improve your performance.
                      </p>

                      <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1">
                        {previousYearsPapers.map((paper, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 border border-slate-100/90 rounded-2xl hover:border-slate-200 hover:shadow-xs transition bg-white space-y-3"
                          >
                            <div className="flex items-center gap-2.5">
                              <FileText className="w-4 h-4 text-purple-600 flex-shrink-0" />
                              <span className="text-xs font-bold text-blue-950 tracking-tight">
                                {paper}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                type="button"
                                className="flex items-center justify-center gap-1.5 py-1.5 px-2 text-xs font-bold text-blue-600 bg-white border border-blue-200/90 rounded-xl hover:bg-blue-50 transition cursor-pointer shadow-2xs"
                              >
                                <Eye className="w-3.5 h-3.5" /> View
                              </button>
                              <button
                                type="button"
                                className="flex items-center justify-center gap-1.5 py-1.5 px-2 text-xs font-bold text-emerald-600 bg-white border border-emerald-200/90 rounded-xl hover:bg-emerald-50 transition cursor-pointer shadow-2xs"
                              >
                                <Download className="w-3.5 h-3.5" /> Download
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* MODEL PAPERS LIST FOR CLASS 10 & 12 */
                    <div>
                      <h3 className="font-bold text-base text-slate-900 mb-1">
                        Model Papers ({activeTab})
                      </h3>
                      <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                        Curated model papers designed for Class {currentClass.replace(/\D/g, "")} board preparation.
                      </p>

                      <div className="space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
                        {modelPapers.map((paper, idx) => (
                          <div
                            key={idx}
                            className="p-3 border border-slate-100 rounded-xl hover:border-slate-200 hover:shadow-xs transition bg-white"
                          >
                            <div className="flex items-center gap-2 mb-2.5">
                              <FileText className="w-4 h-4 text-purple-600 flex-shrink-0" />
                              <span className="text-xs font-bold text-slate-800">{paper}</span>
                            </div>
                            <div className="flex items-center justify-end gap-2">
                              <button
                                type="button"
                                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition cursor-pointer"
                              >
                                <Eye className="w-3.5 h-3.5" /> View
                              </button>
                              <button
                                type="button"
                                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition cursor-pointer"
                              >
                                <Download className="w-3.5 h-3.5" /> Download
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* DEFAULT VIEW FOR OTHER CLASSES (6, 7, 8, 9, 11) */
                <div>
                  <h3 className="font-bold text-base text-slate-900 mb-1">
                    Model Papers {activeTab}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    Curated model papers designed for final exam preparation.
                  </p>

                  <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
                    {modelPapers.map((paper, idx) => (
                      <div
                        key={idx}
                        className="p-3 border border-slate-100 rounded-xl hover:border-slate-200 hover:shadow-xs transition bg-white"
                      >
                        <div className="flex items-center gap-2 mb-2.5">
                          <FileText className="w-4 h-4 text-purple-600 flex-shrink-0" />
                          <span className="text-xs font-bold text-slate-800">{paper}</span>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" /> View
                          </button>
                          <button
                            type="button"
                            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-white border border-emerald-200 rounded-lg hover:bg-emerald-50 transition cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5" /> Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}