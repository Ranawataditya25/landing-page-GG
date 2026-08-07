

import React from 'react';
import { 
  Video, 
  Users, 
  Calendar, 
  Target, 
  BarChart3, 
  ShieldCheck, 
  Star, 
  Smile, 
  Award,
  GraduationCap,
  MessageCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

// Data for feature cards
const featureSteps = [
  {
    id: 1,
    title: "1. Save Recordings Up to 7 Days",
    description: "You can save recordings for up to 7 days for your revision.",
    icon: <Video className="w-5 h-5 text-purple-600" />,
    bgColor: "bg-purple-100",
  },
  {
    id: 2,
    title: "2. All Expert Mentors",
    description: "All mentors here are highly experienced and experts in their field.",
    icon: <Users className="w-5 h-5 text-emerald-600" />,
    bgColor: "bg-emerald-100",
  },
  {
    id: 3,
    title: "3. Choose Your Way",
    description: "Choose mentors as per your budget, time slot and preferred language.",
    icon: <Calendar className="w-5 h-5 text-orange-600" />,
    bgColor: "bg-orange-100",
  },
  {
    id: 4,
    title: "4. Personalized Guidance",
    description: "Get 1:1 attention and tailored guidance to achieve your goals.",
    icon: <Target className="w-5 h-5 text-blue-600" />,
    bgColor: "bg-blue-100",
  },
  {
    id: 5,
    title: "5. Track Progress",
    description: "Regular tests, doubt solving and performance tracking to keep you on track.",
    icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
    bgColor: "bg-indigo-100",
  },
  {
    id: 6,
    title: "6. Safe & Trusted",
    description: "100% verified mentors and a safe, secure platform you can trust.",
    icon: <ShieldCheck className="w-5 h-5 text-teal-600" />,
    bgColor: "bg-teal-100",
  },
];

// Data for stats bar
const statsData = [
  {
    value: "4.8/5",
    label: "Average Rating",
    icon: <Star className="w-6 h-6 text-amber-400 fill-amber-400" />,
  },
  {
    value: "98%",
    label: "Satisfaction Rate",
    icon: <Smile className="w-6 h-6 text-sky-500" />,
  },
  {
    value: "10K+",
    label: "Students Mentored",
    icon: <Users className="w-6 h-6 text-blue-500" />,
  },
  {
    value: "5+ Years",
    label: "Average Experience",
    icon: <Award className="w-6 h-6 text-amber-500" />,
  },
];

export const MentorsSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-6 font-sans text-gray-800">
      
      {/* ================= HERO / BANNER SECTION ================= */}
      <div className="relative bg-gradient-to-r from-orange-50/40 via-orange-50/20 to-orange-100/50 rounded-2xl p-6 sm:p-10 overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[220px]">
        
        {/* Decorative Floating Elements */}
        <div className="absolute right-[22%] top-6 p-2 bg-orange-100/80 rounded-xl text-orange-400 hidden lg:block">
          <MessageCircle className="w-6 h-6 fill-orange-200" />
        </div>
        <div className="absolute right-[32%] bottom-8 p-3 bg-orange-100/80 rounded-2xl text-orange-400 hidden lg:block">
          <GraduationCap className="w-8 h-8" />
        </div>
        <div className="absolute right-4 top-4 text-orange-300 hidden lg:block">
          <Sparkles className="w-6 h-6 fill-orange-300" />
        </div>

        {/* Text Content */}
        <div className="z-10 max-w-xl space-y-2 text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#f97316] tracking-tight">
            All Mentors
          </h1>
          <p className="text-base font-medium text-gray-700">
            Learn from the best. Grow with the right guidance.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed pt-2">
            At GoodGuiders, our mentors are experienced educators, subject experts and successful achievers who are passionate about guiding students towards their goals.
          </p>

          {/* Standard Anchor Link */}
          <div className="pt-3">
            <a
              href="/mentordetail"
              className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              <span>Explore Mentor Details</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hero Image Holder */}
        <div className="relative z-10 mt-6 md:mt-0 flex-shrink-0">
          <div className="w-48 h-48 sm:w-56 sm:h-56 relative rounded-full bg-orange-100/60 flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
              alt="Mentor" 
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>

      {/* ================= FEATURES CAROUSEL SECTION ================= */}
      <div className="relative bg-[#fffdfa] border border-orange-100/60 rounded-2xl p-6 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 items-center">
          
          {/* Main Title Left Box */}
          <div className="lg:col-span-1 pr-2 space-y-2 border-b lg:border-b-0 lg:border-r border-gray-100 pb-4 lg:pb-0">
            <h2 className="text-lg font-bold text-[#0b132a] leading-tight">
              Why Learn with <br className="hidden lg:block"/>
              <span className="text-orange-500">GoodGuiders</span> Mentorship?
            </h2>
            <div className="w-8 h-1 bg-orange-500 rounded-full" />
            <p className="text-xs text-gray-500 font-medium leading-normal">
              Personalized guidance. Expert mentors. Better results.
            </p>
          </div>

          {/* Cards Horizontal List */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-2 lg:pt-0 overflow-x-auto">
            {featureSteps.map((step) => (
              <a 
                key={step.id} 
                href="/mentordetail"
                className="flex flex-col space-y-2 p-2 rounded-xl hover:bg-orange-50/30 transition-colors block"
              >
                <div className="flex items-center space-x-2">
                  <div className={`p-2 rounded-lg ${step.bgColor} flex-shrink-0`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xs font-bold text-[#0b132a] leading-snug">
                  {step.title}
                </h3>
                <p className="text-[11px] text-gray-500 leading-tight">
                  {step.description}
                </p>
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* ================= STATS BAR ================= */}
      <div className="bg-[#fcfdff] border border-gray-100 rounded-2xl p-4 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {statsData.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-center space-x-3 ${idx > 0 ? 'pt-3 md:pt-0' : ''}`}
            >
              <div className="p-2 rounded-full bg-gray-50">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-lg font-extrabold text-[#0b132a]">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-gray-500">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MentorsSection;