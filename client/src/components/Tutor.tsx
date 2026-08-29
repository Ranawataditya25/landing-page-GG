import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  Video, 
  Target, 
  TrendingUp, 
  Headphones, 
  Star, 
  Heart, 
  ArrowRight,
  Clock,
  Award,
  Sparkles,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

interface Tutor {
  id: number;
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  rating: number;
  reviews: number;
  price: number;
  status: 'Available' | 'Busy';
  tags: string[];
  image: string;
}

const tutorsData: Tutor[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    subject: 'Maths Tutor',
    qualification: 'M.Sc. Mathematics',
    experience: '6+ Years Exp.',
    rating: 4.9,
    reviews: 120,
    price: 400,
    status: 'Available',
    tags: ['Live Classes', 'Doubt Solving', 'Test Prep'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    subject: 'Physics Tutor',
    qualification: 'M.Tech. (IIT Roorkee)',
    experience: '5+ Years Exp.',
    rating: 4.8,
    reviews: 98,
    price: 450,
    status: 'Available',
    tags: ['Live Classes', 'Concept Clarity', 'Board Prep'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Neha Gupta',
    subject: 'English Tutor',
    qualification: 'M.A. English',
    experience: '4+ Years Exp.',
    rating: 4.7,
    reviews: 76,
    price: 350,
    status: 'Available',
    tags: ['Live Classes', 'Grammar', 'Speaking'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Amit Singh',
    subject: 'Chemistry Tutor',
    qualification: 'M.Sc. Chemistry',
    experience: '6+ Years Exp.',
    rating: 4.8,
    reviews: 110,
    price: 400,
    status: 'Busy',
    tags: ['Live Classes', 'Doubt Solving', 'JEE/NEET Prep'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
  },
];

export default function GoodGuidersLanding() {
  const [selectedClass, setSelectedClass] = useState('Class 1 – 5');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const classCategories = [
    { label: 'Class 1 – 5', emoji: '👦' },
    { label: 'Class 6 – 10', emoji: '🧑‍🎓' },
    { label: 'Class 10 – 12', emoji: '👨‍🎓' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Hero Section */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-200 bg-orange-50/70 text-xs font-semibold text-slate-700">
              <GraduationCap className="w-4 h-4 text-orange-500" />
              <span>Online Tutoring with Good Guiders</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#112347] tracking-tight leading-[1.18]">
              Better Learning. Anywhere. <br />
              Anytime. Only with <br />
              <span className="text-[#ea580c] inline-flex items-center gap-2">
                Good Guiders <GraduationCap className="w-9 h-9 inline-block text-[#ea580c]" />
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-500 text-sm sm:text-base max-w-xl">
              Connect with expert online tutors from Good Guiders and get personalized guidance to achieve your goals.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Live Interactive Sessions</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Engage in real-time learning sessions</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Personalized Learning</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Custom study plans just for you</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-sky-50 text-sky-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Track Progress & Improve</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Regular tests and performance reports</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Flexible & Convenient</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Learn at your time from anywhere</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background Shape */}
            <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-square">
              <div className="absolute inset-0 bg-[#fde9df] rounded-t-full -z-10" />

              {/* Student Image */}
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80"
                alt="Student learning online"
                className="w-full h-full object-cover object-top rounded-b-2xl"
              />

              {/* Floating Badge - Top Right */}
              <div className="absolute -top-3 -right-4 bg-[#112347] text-white p-3 rounded-xl shadow-lg flex items-center gap-3 max-w-[210px]">
                <div className="p-2 rounded-lg bg-white/10">
                  <Users className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">Trusted Experts</div>
                  <div className="text-[10px] text-slate-300 leading-tight mt-0.5">Experienced & verified tutors you can rely on.</div>
                </div>
              </div>

              {/* Floating Badge - Bottom Right */}
              <div className="absolute bottom-6 -right-6 bg-white border border-slate-100 p-3 rounded-xl shadow-xl flex items-center gap-3 max-w-[220px]">
                <div className="p-2 rounded-lg bg-orange-50">
                  <ShieldCheck className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 leading-tight">Safe & Secure</div>
                  <div className="text-[10px] text-slate-500 leading-tight mt-0.5">100% verified tutors for a safe learning experience.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Choose Class Tabs */}
        <div className="flex flex-col items-center justify-center pt-6 space-y-4">
          <div className="flex items-center gap-3 text-xs font-bold tracking-wider text-slate-700 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>Choose Your Class</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          </div>

          <div className="inline-flex bg-white p-1 rounded-xl shadow-sm border border-slate-200">
            {classCategories.map((cat) => {
              const isActive = selectedClass === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedClass(cat.label)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#ea580c] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="text-base">{cat.emoji}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tutors Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Top Online Tutors on Good Guiders
              </h2>
            </div>
            <button className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 transition-colors">
              View All Tutors <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tutorsData.map((tutor) => (
              <div 
                key={tutor.id} 
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col justify-between"
              >
                <div>
                  {/* Top Status & Favorite */}
                  <div className="flex items-center justify-between">
                    <span 
                      className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                        tutor.status === 'Available'
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                          : 'bg-amber-50 text-amber-600 border border-amber-200'
                      }`}
                    >
                      {tutor.status}
                    </span>
                    <button 
                      onClick={() => toggleFavorite(tutor.id)}
                      className="text-slate-400 hover:text-rose-500 transition-colors"
                    >
                      <Heart 
                        className={`w-4 h-4 ${
                          favorites.includes(tutor.id) ? 'fill-rose-500 text-rose-500' : ''
                        }`} 
                      />
                    </button>
                  </div>

                  {/* Profile Info */}
                  <div className="flex items-center gap-3 mt-3">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-100"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">{tutor.name}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{tutor.subject}</p>
                    </div>
                  </div>

                  {/* Credentials */}
                  <div className="mt-3 space-y-1 text-[11px] text-slate-600">
                    <div className="flex items-center gap-1.5 truncate">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{tutor.qualification}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{tutor.experience}</span>
                    </div>
                  </div>

                  {/* Rating & Pricing */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-xs">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-bold text-slate-800">{tutor.rating}</span>
                      <span className="text-slate-400 text-[10px]">({tutor.reviews} Reviews)</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">₹{tutor.price}</span>
                      <span className="text-slate-400 text-[11px]"> /hr</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {tutor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Profile Button */}
                <button className="mt-4 w-full py-2 rounded-lg border border-orange-500 text-orange-600 text-xs font-semibold hover:bg-orange-50 transition-colors">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-orange-50/70 border border-orange-100 rounded-2xl p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6 text-orange-600" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Why Learn with Good Guiders Online Tutors?
              </h3>
              <p className="text-xs text-slate-500 max-w-xl leading-relaxed">
                Expert guidance, personalized attention and flexible learning – everything you need to succeed, all in one place.
              </p>
            </div>
          </div>

          {/* Quick Key Highlights */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-700">
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-orange-500" />
              <span className="font-medium">Expert & Verified Tutors</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Target className="w-4 h-4 text-emerald-500" />
              <span className="font-medium">Personalized Learning Plans</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="font-medium">Better Results & Confidence</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              <span className="font-medium">Learn Anytime, Anywhere</span>
            </div>
          </div>

          {/* CTA Action */}
          <button className="whitespace-nowrap px-6 py-3 rounded-xl bg-[#ea580c] hover:bg-orange-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition-colors shrink-0">
            <span>Start Learning with Good Guiders</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}