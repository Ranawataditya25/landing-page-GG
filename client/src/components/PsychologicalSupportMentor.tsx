


import React from 'react';
import {
  Heart,
  Target,
  Brain,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Flower2,
} from 'lucide-react';

// --- Types ---
interface CardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  desc: string;
}

interface Mentor {
  name: string;
  role: string;
  roleColor: string;
  imgBorder: string;
  image: string;
  tags: string[];
}

// --- Mentors Data ---
const mentorsData: Mentor[] = [
  {
    name: 'Dr. Ananya Sharma',
    role: 'Clinical Psychologist',
    roleColor: 'text-emerald-600',
    imgBorder: 'border-emerald-400',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    tags: ['Anxiety & Stress Management', 'Emotional Well-being'],
  },
  {
    name: 'Mr. Rohan Mehta',
    role: 'Counselling Psychologist',
    roleColor: 'text-purple-600',
    imgBorder: 'border-purple-300',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&auto=format&fit=crop&q=80',
    tags: ['Confidence Building', 'Self-esteem & Motivation'],
  },
  {
    name: 'Ms. Priya Nair',
    role: 'Educational Psychologist',
    roleColor: 'text-pink-600',
    imgBorder: 'border-pink-300',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
    tags: ['Study Stress & Focus', 'Exam Anxiety Support'],
  },
  {
    name: 'Mr. Karan Malhotra',
    role: 'Behavioral Coach',
    roleColor: 'text-teal-600',
    imgBorder: 'border-teal-300',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    tags: ['Habit Building', 'Personal Growth'],
  },
  {
    name: 'Ms. Neha Verma',
    role: 'Mindfulness Coach',
    roleColor: 'text-indigo-600',
    imgBorder: 'border-indigo-300',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    tags: ['Mindfulness & Relaxation', 'Emotional Balance'],
  },
];

export const PsychologicalSupport: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAF9FF] py-12 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Background Soft Floating Shapes */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#2E1065] rounded-bl-full opacity-90 -z-10" />
      <div className="absolute top-6 right-12 w-[480px] h-[480px] bg-[#EAE3FF] rounded-full blur-2xl opacity-70 -z-10" />
      <div className="absolute top-0 right-1/3 w-[360px] h-[360px] bg-[#E3FAF2] rounded-full blur-3xl opacity-80 -z-10" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#DCFCE7] rounded-tr-full blur-2xl opacity-70 -z-10" />
      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-[#F3E8FF] rounded-full blur-2xl opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ================= 1. HERO + CARDS SECTION (CLEAN FLEX NO-OVERLAP) ================= */}
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          
          {/* LEFT HERO TEXT - Strictly Isolated Container */}
          <div className="w-full lg:w-[35%] xl:w-[32%] shrink-0 space-y-4 pt-2">
            <span className="text-[#FFA000] font-bold text-xs tracking-widest uppercase block">
              OUR PSYCHOLOGICAL SUPPORT
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-[38px] font-extrabold text-[#1E0E62] leading-tight">
              Mental Well-being.<br />
              Better You. Stronger Tomorrow.
            </h1>

            {/* Purple Line */}
            <div className="w-10 h-[3px] bg-[orange] rounded-full my-3" />

            {/* Safe Paragraph Text */}
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-sm">
              Pursuing goals is important, but so is your mental well-being.
              Our psychological support mentors are here to help you manage stress,
              overcome challenges, and build a healthy mindset. Get a safe space
              to talk, be heard, and grow emotionally – because your mental health matters.
            </p>

            {/* Bottom Row Card 4 (Placed directly under left hero text for perfect alignment) */}
            <div className="pt-6 hidden lg:block">
              <CardItem
                icon={<Brain className="w-5 h-5 text-[#F43F5E]" />}
                iconBg="bg-[#FFE4E6]"
                title="MENTAL CLARITY & FOCUS"
                desc="Improve concentration, clarity of thought, and stay motivated towards your goals."
              />
            </div>
          </div>

          {/* RIGHT CARDS - 2 Column Layout with Staircase Arrangement */}
          <div className="w-full lg:w-[63%] xl:w-[65%] space-y-5">
            
            {/* Top Row: Emotional Well-being Card (Aligned to Right) */}
            <div className="flex justify-end">
              <div className="w-full sm:w-[49%]">
                <CardItem
                  icon={<Heart className="w-5 h-5 text-[#32B583] fill-[#32B583]" />}
                  iconBg="bg-[#E8F8F0]"
                  title="EMOTIONAL WELL-BEING"
                  desc="Talk about your feelings and get support to manage emotions like stress, anxiety, and overthinking."
                />
              </div>
            </div>

            {/* Middle Row: Stress Management + Confidence & Self-Esteem */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <CardItem
                icon={<Flower2 className="w-5 h-5 text-[#8B5CF6]" />}
                iconBg="bg-[#F3E8FF]"
                title="STRESS MANAGEMENT"
                desc="Learn practical techniques to reduce stress and find balance in your daily life."
              />
              <CardItem
                icon={<Target className="w-5 h-5 text-[#A855F7]" />}
                iconBg="bg-[#F3E8FF]"
                title="CONFIDENCE & SELF-ESTEEM"
                desc="Build self-confidence and believe in yourself to tackle challenges with a positive mindset."
              />
            </div>

            {/* Bottom Row for Mobile/Tablet or Right Side Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="lg:hidden">
                <CardItem
                  icon={<Brain className="w-5 h-5 text-[#F43F5E]" />}
                  iconBg="bg-[#FFE4E6]"
                  title="MENTAL CLARITY & FOCUS"
                  desc="Improve concentration, clarity of thought, and stay motivated towards your goals."
                />
              </div>
              <CardItem
                icon={<Sparkles className="w-5 h-5 text-[#14B8A6]" />}
                iconBg="bg-[#CCFBF1]"
                title="PERSONAL GROWTH & RESILIENCE"
                desc="Develop healthy habits, build resilience, and grow stronger through life's ups and downs."
              />
              <CardItem
                icon={<ShieldCheck className="w-5 h-5 text-[#9333EA]" />}
                iconBg="bg-[#F3E8FF]"
                title="SAFE & CONFIDENTIAL SPACE"
                desc="Your privacy matters. We provide a supportive and non-judgmental space where you can be yourself."
              />
            </div>

          </div>

        </div>

        {/* ================= 2. MENTORS SECTION ================= */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm space-y-6">
          
          {/* Section Divider Header */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] bg-slate-200 flex-1" />
            <div className="flex items-center gap-2 px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              <h2 className="text-xs md:text-sm font-extrabold text-slate-800 uppercase tracking-widest text-center">
                MEET OUR PSYCHOLOGICAL SUPPORT MENTORS
              </h2>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            </div>
            <div className="h-[1px] bg-slate-200 flex-1" />
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {mentorsData.map((mentor, index) => (
              <div
                key={index}
                className="bg-[#FAF9FE] p-3.5 rounded-2xl border border-slate-100 flex flex-col justify-between gap-3 hover:border-slate-200 transition-colors min-w-0"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className={`w-11 h-11 rounded-full object-cover border-2 ${mentor.imgBorder} shrink-0`}
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {mentor.name}
                    </h4>
                    <p className={`text-[10px] font-semibold ${mentor.roleColor} truncate mt-0.5`}>
                      {mentor.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-200/60 text-[10px] text-slate-600">
                  {mentor.tags.map((tag, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-1.5 min-w-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                      <span className="truncate">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-[#F3EEFF] rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E6F7F0] flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6 text-[#32B583] fill-[#32B583]" />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-extrabold text-slate-900">
                  You are not alone. We are with you!
                </h4>
                <p className="text-xs md:text-sm text-slate-600 mt-0.5">
                  Talk to our mentors and take the first step towards a happier, healthier you.
                </p>
              </div>
            </div>

            <button className="bg-[#32B583] hover:bg-[#28986D] text-white font-semibold text-xs md:text-sm px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shrink-0 cursor-pointer shadow-xs">
              <span>Talk to a Mentor Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

// --- Single Feature Card Component ---
const CardItem: React.FC<CardProps> = ({ icon, iconBg, title, desc }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 flex items-start gap-3.5 w-full transition-all hover:-translate-y-0.5 min-w-0">
      <div className={`p-2.5 rounded-2xl ${iconBg} shrink-0 flex items-center justify-center`}>
        {icon}
      </div>
      <div className="space-y-1 flex-1 min-w-0">
        <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase leading-snug truncate">
          {title}
        </h3>
        <p className="text-slate-500 text-[11px] leading-relaxed break-words">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default PsychologicalSupport;