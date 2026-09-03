import React, { useState } from 'react';
import { 
  Search, Filter, ChevronRight, Star, Users, Award, Clock, 
  MapPin, Heart, BookOpen, Shield, Sparkles, User, Play, 
  CheckSquare, Square
} from 'lucide-react';
import  {Header}  from './components/Header';
// --- MOCK DATA ---
const categories = [
  { name: 'All Activities', count: 48, active: false },
  { name: 'Art & Craft', count: 8, active: false },
  { name: 'Music', count: 5, active: false },
  { name: 'Dance', count: 6, active: true },
  { name: 'Public Speaking', count: 3, active: false },
  { name: 'Yoga & Fitness', count: 4, active: false },
  { name: 'Coding & Robotics', count: 5, active: false },
  { name: 'Sports', count: 7, active: false },
  { name: 'Language & Writing', count: 3, active: false },
  { name: 'Photography', count: 2, active: false },
  { name: 'Drama & Theatre', count: 3, active: false },
  { name: 'Chess', count: 1, active: false },
  { name: 'Rubik\'s Cube', count: 1, active: false },
  { name: 'Gardening', count: 1, active: false },
  { name: '3D Modeling', count: 1, active: false },
  { name: 'Video Editing', count: 1, active: false },
  { name: 'Graphic Design', count: 1, active: false },
  { name: 'Podcasting', count: 1, active: false },
  { name: 'Storytelling', count: 1, active: false },
  { name: 'Science Experiments', count: 1, active: false },
  { name: 'Entrepreneurship', count: 1, active: false },
  { name: 'Mindfulness', count: 1, active: false },
  { name: 'Journaling', count: 1, active: false },
  { name: 'Language Learning', count: 1, active: false },
  { name: 'Spoken English', count: 1, active: false },
  { name: 'Financial Literacy', count: 1, active: false },
  { name: 'Leadership Skills', count: 1, active: false },
  { name: 'Writing & Poetry', count: 1, active: false },
  { name: 'Debate & Elocution', count: 1, active: false },
  { name: 'Sports & Games', count: 1, active: false },
  { name: 'Martial Arts', count: 1, active: false },
  { name: 'Swimming', count: 1, active: false },
  { name: 'Table Tennis', count: 1, active: false },
  { name: 'Badminton', count: 1, active: false },
  { name: 'Volleyball', count: 1, active: false },
  { name: 'Tennis', count: 1, active: false },
  { name: 'Shoots / Archery', count: 1, active: false },
];

const subFilters = ['All Dance Forms', 'Classical', 'Folk', 'Western', 'Contemporary', 'Hip Hop', 'Bollywood', 'Other Styles'];

const mentorsData = [
  { name: 'Ms. Riya Nair', role: 'Bharatanatyam Expert', rating: '4.9 (55)', exp: '8+ Years Exp.', students: '120+ Students', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
  { name: 'Mr. Arjun Malhotra', role: 'Hip-Hop Instructor', rating: '4.9 (48)', exp: '6+ Years Exp.', students: '90+ Students', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
  { name: 'Ms. Ananya lyer', role: 'Contemporary Dancer', rating: '4.9 (60)', exp: '7+ Years Exp.', students: '110+ Students', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80' },
  { name: 'Mr. Karan Mehta', role: 'Bollywood Choreographer', rating: '4.8 (50)', exp: '5+ Years Exp.', students: '80+ Students', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
  { name: 'Ms. Pooja Sharma', role: 'Kathak Specialist', rating: '4.9 (65)', exp: '10+ Years Exp.', students: '150+ Students', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' },
  { name: 'Ms. Neha Verma', role: 'Salsa Instructor', rating: '4.7 (52)', exp: '5+ Years Exp.', students: '70+ Students', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80' },
  { name: 'Mr. Dev Dance', role: 'Jazz & Freestyle Expert', rating: '4.8 (62)', exp: '7+ Years Exp.', students: '95+ Students', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80' },
  { name: 'Ms. Simran Kaur', role: 'Odissi Dance Teacher', rating: '4.9 (77)', exp: '6+ Years Exp.', students: '100+ Students', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80' },
  { name: 'Mr. Rahul Singh', role: 'Kathakali Master Coach', rating: '4.7 (53)', exp: '5+ Years Exp.', students: '60+ Students', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80' },
  { name: 'Ms. Tanya Kapoor', role: 'Kuchipudi Dance Coach', rating: '4.8 (58)', exp: '4+ Years Exp.', students: '70+ Students', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80' },
];

export default function App() {
  const [selectedSubFilter, setSelectedSubFilter] = useState('All Dance Forms');
  const [ageFilters, setAgeFilters] = useState({ all: true, '5-10': false, '10-15': false, '16-18': false, '18+': false });
  const [skillLevel, setSkillLevel] = useState('Beginner');

  return (
    <div className="min-h-screen bg-[#F8F9FE] text-[#1E1B4B] font-sans antialiased flex flex-col">
      <Header/>
      {/* HEADER SECTION */}
      <header className="px-6 py-4 bg-white border-b border-purple-50 flex items-center justify-between sticky top-0 z-30">
        <div>
          <h1 className="text-xl font-bold text-indigo-950 flex items-center gap-2">
            Explore <span className="text-indigo-600">Extracurricular Activities</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Discover a wide range of activities that build skills, boost confidence, and help you grow beyond the classroom.
          </p>
        </div>

        {/* Top Right Badges */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100">
            <Users className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-bold text-indigo-950">5000+</span>
            <span className="text-xs text-slate-500">Students Engaged</span>
          </div>

          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-purple-100 shadow-sm">
            <div className="flex -space-x-1.5 overflow-hidden">
              <img className="inline-block h-5 w-5 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="" />
              <img className="inline-block h-5 w-5 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="" />
              <img className="inline-block h-5 w-5 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" alt="" />
            </div>
            <div className="text-[10px] leading-tight">
              <span className="text-slate-400 block font-normal">Trusted by</span>
              <span className="font-bold text-indigo-950">Students & Parents</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER (Sidebar + Content) */}
      <div className="flex flex-1">
        
        {/* SIDEBAR */}
        <aside className="w-72 bg-white border-r border-purple-100 p-4 flex flex-col shrink-0">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-indigo-600" /> Filter Activities
            </span>
            <button className="text-indigo-600 hover:text-indigo-800 text-[11px] font-medium">Clear Filters</button>
          </div>

          {/* Activities List */}
          <div className="flex-1 overflow-y-auto pr-1 space-y-1 custom-scrollbar text-xs">
            {categories.map((cat, idx) => (
              <div 
                key={idx}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  cat.active ? 'bg-purple-50 text-indigo-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className={`w-1.5 h-1.5 rounded-full ${cat.active ? 'bg-indigo-600' : 'bg-slate-400'}`}></span>
                  <span className="truncate">{cat.name}</span>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${cat.active ? 'bg-purple-200/60 text-indigo-800' : 'bg-slate-100 text-slate-500'}`}>
                  {cat.count}
                </span>
              </div>
            ))}

            {/* Age Group Filters */}
            <div className="pt-4 mt-4 border-t border-slate-100">
              <p className="text-[11px] font-bold text-indigo-950 mb-2 uppercase tracking-wider">Age Group</p>
              <div className="space-y-2 text-slate-600">
                {[
                  { id: 'all', label: 'All Ages' },
                  { id: '5-10', label: '5 - 10 Years' },
                  { id: '10-15', label: '10 - 15 Years' },
                  { id: '16-15', label: '16 - 15 Years' }, // matching visual typography
                  { id: '18+', label: '18+ Years' },
                ].map((age) => (
                  <label key={age.id} className="flex items-center gap-2.5 cursor-pointer hover:text-indigo-900">
                    <input 
                      type="checkbox" 
                      defaultChecked={age.id === 'all'} 
                      className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5"
                    />
                    <span>{age.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Skill Level Filters */}
            <div className="pt-4 mt-4 border-t border-slate-100">
              <p className="text-[11px] font-bold text-indigo-950 mb-2 uppercase tracking-wider">Skill Level</p>
              <div className="flex flex-wrap gap-1.5">
                {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                  <button 
                    key={lvl}
                    onClick={() => setSkillLevel(lvl)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium border transition-all ${
                      skillLevel === lvl 
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' 
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 p-6 overflow-y-auto space-y-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span>Home</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span>Activities</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-indigo-600 font-semibold">Dance</span>
          </div>

          {/* HERO BANNER SECTION */}
          <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg flex flex-col lg:flex-row justify-between gap-6">
            
            {/* Left Content */}
            <div className="max-w-xl z-10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-3">Dance</h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Learn various dance forms and express yourself. <br />
                  Dance is more than movement – it's an expression of emotion, culture, and creativity. Build confidence, discipline, fitness and stage presence through dance.
                </p>
              </div>

              {/* Tags inside banner */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['Fitness', 'Confidence', 'Discipline', 'Creativity', 'Expression'].map((tag, i) => (
                  <span key={i} className="text-[11px] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-slate-200 border border-white/10 font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-4 gap-4 pt-6 mt-6 border-t border-white/10 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 text-indigo-400 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="font-bold text-white text-base">28</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Mentors</span>
                </div>
                <div className="flex flex-col items-center border-l border-white/10">
                  <div className="flex items-center gap-1 text-indigo-400 mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-bold text-white text-base">86</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Programs</span>
                </div>
                <div className="flex flex-col items-center border-l border-white/10">
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="font-bold text-white text-base">4.8</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Average Rating</span>
                </div>
                <div className="flex flex-col items-center border-l border-white/10">
                  <div className="flex items-center gap-1 text-purple-400 mb-1">
                    <Award className="w-4 h-4" />
                    <span className="font-bold text-white text-base">1.2K+</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Students Enrolled</span>
                </div>
              </div>
            </div>

            {/* Right Image & Info Card */}
            <div className="flex flex-col lg:flex-row gap-4 items-center z-10">
              {/* Dancer Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 w-full lg:w-72 h-72">
                <img 
                  src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&auto=format&fit=crop&q=80" 
                  alt="Classical Dancer" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* About Dance Card */}
              <div className="bg-white/95 backdrop-blur-md text-indigo-950 p-4 rounded-xl w-full lg:w-72 shadow-xl border border-purple-100 flex flex-col justify-between text-xs">
                <div>
                  <h3 className="font-bold text-indigo-950 text-sm mb-1.5 flex items-center justify-between">
                    About Dance
                  </h3>
                  <p className="text-slate-500 text-[11px] leading-relaxed mb-3">
                    Dance helps improve flexibility, coordination, confidence and self-expression. From classical to contemporary, there's a style for everyone!
                  </p>
                  
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-indigo-600"/> Category</span>
                      <span className="font-semibold text-indigo-950">Performing Arts</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-indigo-600"/> Suitable For</span>
                      <span className="font-semibold text-indigo-950">All Age Groups</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-indigo-600"/> Skill Level</span>
                      <span className="font-semibold text-indigo-950">Beginner to Advanced</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-indigo-600"/> Average Duration</span>
                      <span className="font-semibold text-indigo-950">1 - 2 Hours / Session</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-indigo-600"/> Learning Mode</span>
                      <span className="font-semibold text-indigo-950">Online & Offline</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100">
                  <span className="text-slate-400 block mb-1 font-medium">Benefits</span>
                  <p className="text-[11px] font-medium text-slate-700">Physical Fitness, Confidence, Creativity, Social Skills</p>
                </div>
              </div>
            </div>

          </div>

          {/* Sub-Filters Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {subFilters.map((sub, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSubFilter(sub)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedSubFilter === sub 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* TOP DANCE MENTORS SECTION */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-indigo-950">Top Dance Mentors</h3>
              <a href="#view-all" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                View All Mentors <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {mentorsData.map((mentor, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-purple-100/60 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  
                  {/* Avatar & Verification badge */}
                  <div className="relative mb-3">
                    <img src={mentor.image} alt={mentor.name} className="w-20 h-20 rounded-full object-cover border-2 border-indigo-50 shadow-inner" />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                  </div>

                  <h4 className="font-bold text-xs text-indigo-950 mb-0.5">{mentor.name}</h4>
                  <p className="text-[11px] text-slate-500 mb-2 truncate max-w-full">{mentor.role}</p>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-1 text-[11px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-semibold mb-3">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{mentor.rating}</span>
                  </div>

                  {/* Stats metadata */}
                  <div className="w-full flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-2 mb-3">
                    <span>{mentor.exp}</span>
                    <span>{mentor.students}</span>
                  </div>

                  {/* Button */}
                  <button className="w-full py-1.5 rounded-lg border border-indigo-100 bg-indigo-50/50 hover:bg-indigo-600 hover:text-white text-indigo-600 text-xs font-semibold transition-colors">
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* WHY LEARN DANCE SECTION */}
          <div className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm">
            <h3 className="text-base font-bold text-indigo-950 mb-6">Why Learn Dance?</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-indigo-600 flex items-center justify-center mb-3 border border-purple-100">
                  <Heart className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-xs text-indigo-950 mb-1">Physical Fitness</h5>
                <p className="text-[11px] text-slate-500 leading-tight">Improves strength, flexibility & stamina.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-indigo-600 flex items-center justify-center mb-3 border border-purple-100">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-xs text-indigo-950 mb-1">Boosts Confidence</h5>
                <p className="text-[11px] text-slate-500 leading-tight">Builds self-esteem & stage presence.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-indigo-600 flex items-center justify-center mb-3 border border-purple-100">
                  <Award className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-xs text-indigo-950 mb-1">Better Focus</h5>
                <p className="text-[11px] text-slate-500 leading-tight">Enhances concentration and memory.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-indigo-600 flex items-center justify-center mb-3 border border-purple-100">
                  <Shield className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-xs text-indigo-950 mb-1">Emotional Well-being</h5>
                <p className="text-[11px] text-slate-500 leading-tight">Reduces stress and boosts happiness.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-indigo-600 flex items-center justify-center mb-3 border border-purple-100">
                  <Users className="w-5 h-5" />
                </div>
                <h5 className="font-bold text-xs text-indigo-950 mb-1">Social Skills</h5>
                <p className="text-[11px] text-slate-500 leading-tight">Encourages teamwork and communication.</p>
              </div>

            </div>
          </div>

          {/* READY TO START BOTTOM BANNER */}
          <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <img 
                src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=300&auto=format&fit=crop&q=80" 
                alt="Dancer illustration" 
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md hidden sm:block"
              />
              <div>
                <h4 className="text-base font-bold text-indigo-950 mb-1">Ready to start your dance journey?</h4>
                <p className="text-xs text-slate-600">Connect with our mentor and find the perfect program for you.</p>
                
                <div className="flex flex-wrap gap-4 mt-3 text-[11px] text-slate-600">
                  <span className="flex items-center gap-1 font-medium"><Users className="w-3.5 h-3.5 text-indigo-600" /> Personalized Guidance</span>
                  <span className="flex items-center gap-1 font-medium"><Clock className="w-3.5 h-3.5 text-indigo-600" /> Flexible Timings</span>
                  <span className="flex items-center gap-1 font-medium"><Shield className="w-3.5 h-3.5 text-indigo-600" /> Safe & Supportive</span>
                </div>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow-md shadow-indigo-200 text-xs whitespace-nowrap transition-all flex items-center gap-1.5">
              Connect with Mentors <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </main>
      </div>

    </div>
  );
}