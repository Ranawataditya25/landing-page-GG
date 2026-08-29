import React, { useState } from 'react';
import { 
  Users, 
  Target, 
  TrendingUp, 
  HeartHandshake, 
  ShieldCheck, 
  UserCheck, 
  GraduationCap, 
  Briefcase, 
  Star, 
  Heart, 
  ArrowRight,
  Clock,
  Calendar,
  Sparkles
} from 'lucide-react';

interface Mentor {
  id: number;
  name: string;
  role: string;
  degree: string;
  experience: string;
  tags: string[];
  rating: number;
  reviews: number;
  price: number;
  status: 'Available' | 'Busy';
  avatar: string;
}

const mentorsData: Mentor[] = [
  {
    id: 1,
    name: 'Dr. Neha Sharma',
    role: 'Career Mentor & Educator',
    degree: 'Ph.D. in Psychology',
    experience: '10+ Years Experience',
    tags: ['Career Guidance', 'Study Planning', 'Motivation'],
    rating: 4.9,
    reviews: 120,
    price: 600,
    status: 'Available',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Er. Rahul Verma',
    role: 'JEE Mentor',
    degree: 'M.Tech (IIT Delhi)',
    experience: '8+ Years Experience',
    tags: ['JEE Guidance', 'Physics', 'Problem Solving'],
    rating: 4.8,
    reviews: 98,
    price: 500,
    status: 'Available',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'Dr. Anjali Mehta',
    role: 'NEET Mentor',
    degree: 'MBBS, MD',
    experience: '9+ Years Experience',
    tags: ['NEET Guidance', 'Biology', 'Exam Strategy'],
    rating: 4.9,
    reviews: 76,
    price: 550,
    status: 'Available',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 4,
    name: 'CA Rohan Kapoor',
    role: 'Commerce Mentor',
    degree: 'CA, B.Com',
    experience: '7+ Years Experience',
    tags: ['Accountancy', 'Business Studies', 'Career Advice'],
    rating: 4.7,
    reviews: 64,
    price: 450,
    status: 'Busy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];

export default function MentorshipLanding(): React.JSX.Element {
  const [selectedClass, setSelectedClass] = useState('Class 1 – 5');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#FBFBFE] text-slate-800 font-sans p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#FFF4ED] text-[#E65100] px-3.5 py-1.5 rounded-full text-xs font-semibold border border-orange-100">
            <Users className="w-3.5 h-3.5" />
            <span>Mentorship with Good Guiders</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B1736] leading-tight">
            Grow Better. <br />
            Achieve More. <br />
            With <span className="text-[#F95700]">Good Guiders Mentors 🎓</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed">
            Connect with experienced mentors from Good Guiders who guide, motivate and help you reach your full potential.
          </p>

          {/* 4 Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white border border-slate-100 shadow-sm">
              <div className="p-2 rounded-lg bg-purple-50 text-purple-600 shrink-0">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Personalized Mentorship</h4>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">One-to-one guidance as per your goals</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white border border-slate-100 shadow-sm">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Expert Mentors</h4>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">Learn from verified & skilled mentors</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white border border-slate-100 shadow-sm">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Goal Oriented</h4>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">Stay focused and hit targets</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-xl bg-white border border-slate-100 shadow-sm">
              <div className="p-2 rounded-lg bg-amber-50 text-[#F95700] shrink-0">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Care & Motivation</h4>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">Mentors invested in your journey</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column / Hero Image & Float Badges */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-orange-100 to-amber-50 border-4 border-white shadow-xl aspect-4/3 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
              alt="Mentor and Student"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card Top */}
          <div className="absolute -top-3 right-0 sm:-right-4 bg-[#0B1736] text-white p-3 rounded-2xl shadow-xl flex items-start gap-3 max-w-[210px] border border-slate-700">
            <div className="p-1.5 rounded-lg bg-white/10 text-orange-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold">Trusted Mentors</p>
              <p className="text-[10px] text-slate-300">All mentors are thoroughly verified</p>
            </div>
          </div>

          {/* Floating Card Bottom */}
          <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white text-slate-800 p-3 rounded-2xl shadow-xl flex items-start gap-3 max-w-[210px] border border-slate-100">
            <div className="p-1.5 rounded-lg bg-orange-50 text-[#F95700]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold">Guidance Beyond Teaching</p>
              <p className="text-[10px] text-slate-500">Career advice, motivation & roadmap</p>
            </div>
          </div>
        </div>
      </div>

      {/* Class Selector Tabs */}
      <div className="text-center space-y-3 pt-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          Choose Your Class
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
        </div>

        <div className="flex items-center justify-center gap-2 bg-slate-100 p-1.5 rounded-full max-w-sm mx-auto">
          {['Class 1 – 5', 'Class 6 – 10', 'Class 10 – 12'].map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-full transition-all duration-200 ${
                selectedClass === cls
                  ? 'bg-[#FFF2EB] text-[#F95700] shadow-sm border border-orange-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      {/* Mentors Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-5 bg-[#F95700] rounded-full" />
          <h2 className="text-base sm:text-lg font-bold text-slate-900">Top Mentors on Good Guiders</h2>
        </div>
        <button className="text-xs font-bold text-[#F95700] hover:underline flex items-center gap-1">
          View All Mentors <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Mentor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mentorsData.map((mentor) => (
          <div 
            key={mentor.id}
            className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
          >
            {/* Top Bar: Badge & Wishlist */}
            <div className="flex items-center justify-between mb-3">
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                mentor.status === 'Available'
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                  : 'bg-amber-50 text-amber-600 border border-amber-100'
              }`}>
                {mentor.status}
              </span>
              <button 
                onClick={() => toggleFavorite(mentor.id)}
                className="text-slate-400 hover:text-rose-500 transition-colors"
                aria-label="Save Mentor"
              >
                <Heart 
                  className={`w-4 h-4 ${favorites.includes(mentor.id) ? 'fill-rose-500 text-rose-500' : ''}`} 
                />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex items-start gap-3 mb-3">
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 shrink-0"
              />
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{mentor.name}</h3>
                <p className="text-xs text-slate-500">{mentor.role}</p>
              </div>
            </div>

            {/* Qualifications */}
            <div className="space-y-1 mb-3 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{mentor.degree}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{mentor.experience}</span>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {mentor.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-slate-50 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-md border border-slate-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Rating & Pricing */}
            <div className="border-t border-slate-100 pt-3 mt-auto">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-slate-800">{mentor.rating}</span>
                  <span className="text-[10px] text-slate-400">({mentor.reviews})</span>
                </div>
                <div className="text-xs">
                  <span className="font-extrabold text-slate-900">₹{mentor.price}</span>
                  <span className="text-[10px] text-slate-400"> /session</span>
                </div>
              </div>

              <button className="w-full py-2 bg-orange-50 text-[#F95700] hover:bg-orange-100 font-semibold text-xs rounded-xl border border-orange-200 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Footer Banner */}
      <div className="bg-[#081226] text-white rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 shrink-0">
            <GraduationCap className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold">The Right Mentor Can Change Your Journey.</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Connect with Good Guiders mentors and take the right step towards your success today!
            </p>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="hidden md:flex items-center gap-6 text-center text-[11px] text-slate-300">
          <div className="space-y-1">
            <ShieldCheck className="w-4 h-4 mx-auto text-orange-400" />
            <p>Verified<br/>Mentors</p>
          </div>
          <div className="space-y-1">
            <UserCheck className="w-4 h-4 mx-auto text-orange-400" />
            <p>1-1 Personalized<br/>Guidance</p>
          </div>
          <div className="space-y-1">
            <Calendar className="w-4 h-4 mx-auto text-orange-400" />
            <p>Flexible<br/>Scheduling</p>
          </div>
          <div className="space-y-1">
            <HeartHandshake className="w-4 h-4 mx-auto text-orange-400" />
            <p>Support Beyond<br/>Academics</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center lg:text-right shrink-0 w-full lg:w-auto">
          <button className="w-full lg:w-auto bg-[#F95700] hover:bg-orange-600 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
            Find Your Mentor Now <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <p className="text-[10px] text-slate-400 mt-1.5">Learn. Grow. Succeed with Good Guiders.</p>
        </div>
      </div>
    </div>
  );
}