import React from 'react';
import {
  HeartHandshake,
  User,
  Target,
  BrainCircuit,
  Sprout,
  ShieldCheck,
  Calendar,
  Headphones,
  Lock,
  Clock,
  MessageCircle,
  Briefcase
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, iconBg, title, description }) => (
  <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm border border-orange-50/50">
    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
      {icon}
    </div>
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">{title}</h3>
      <p className="mt-1 text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  </div>
);

interface MentorCardProps {
  name: string;
  role: string;
  experience: string;
  description: string;
  imageUrl: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ name, role, experience, description, imageUrl }) => (
  <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
    <div>
      <div className="flex items-center gap-3">
        <img
          src={imageUrl}
          alt={name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-100"
        />
        <div>
          <h4 className="text-xs font-bold text-slate-900">{name}</h4>
          <p className="text-[11px] font-semibold text-indigo-600">{role}</p>
          <p className="flex items-center gap-1 text-[10px] text-slate-500 mt-0.5">
            <Briefcase className="w-3 h-3" />
            {experience}
          </p>
        </div>
      </div>
      <p className="mt-3 text-[11px] leading-snug text-slate-500 line-clamp-2">{description}</p>
    </div>
    <button
      type="button"
      className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg bg-indigo-50 py-1.5 text-xs font-semibold text-indigo-600 transition-colors hover:bg-indigo-100"
    >
      <Calendar className="h-3.5 w-3.5" />
      Book a Session
    </button>
  </div>
);

export default function PsychologicalSupport() {
  const mentors = [
    {
      name: "Dr. Ananya Sharma",
      role: "Clinical Psychologist",
      experience: "8+ Years Experience",
      description: "Specialized in stress management, anxiety, and emotional well-being.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Mr. Rohan Mehta",
      role: "Counselling Psychologist",
      experience: "6+ Years Experience",
      description: "Expert in student counselling, exam stress and motivation.",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Ms. Priya Nair",
      role: "Educational Psychologist",
      experience: "7+ Years Experience",
      description: "Focus on self-esteem, relationships, and personal growth.",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Mr. Karan Malhotra",
      role: "Behavioral Coach",
      experience: "5+ Years Experience",
      description: "Helps in building positive habits, resilience and confidence.",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 flex justify-center items-center font-sans">
      <div className="w-full max-w-6xl space-y-6">

        {/* Top Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-[#FCF8F3] p-6 md:p-10 border border-[#F6EFE6]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            
            {/* Left Column: Heading & Body */}
            <div className="lg:col-span-4 z-10">
              <span className="text-[11px] font-bold tracking-widest text-[#E07038] uppercase">
                Our Psychological Support
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#16215B] leading-[1.15] md:text-4xl">
                Mental Well-being. <br />
                Better You. <span className="text-[#EB5A24]">Stronger Tomorrow.</span>
              </h1>
              <div className="my-4 h-1 w-10 bg-[#EB5A24] rounded-full" />
              <p className="text-xs leading-relaxed text-slate-600">
                Pursuing goals is important, but so is your mental well-being. Our psychological
                support mentors are here to help you manage stress, overcome challenges, and build a
                healthy mindset. Get a safe space to talk, be heard, and grow emotionally — because
                your mental health matters.
              </p>
            </div>

            {/* Middle Column: Person Image */}
            <div className="relative flex justify-center lg:col-span-4 h-full min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
                alt="Mental Well-being Hero"
                className="rounded-3xl object-cover h-full w-full max-h-[380px] shadow-sm"
              />
            </div>

            {/* Right Column: Stacked Feature Cards */}
            <div className="flex flex-col gap-3 lg:col-span-4">
              <FeatureCard
                icon={<HeartHandshake className="h-5 w-5 text-emerald-600" />}
                iconBg="bg-emerald-100"
                title="Emotional Well-Being"
                description="Talk about your feelings and get support to manage emotions like stress, anxiety, and overthinking."
              />
              <FeatureCard
                icon={<User className="h-5 w-5 text-indigo-600" />}
                iconBg="bg-indigo-100"
                title="Stress Management"
                description="Learn practical techniques to reduce stress and find balance in your daily life."
              />
              <FeatureCard
                icon={<Target className="h-5 w-5 text-purple-600" />}
                iconBg="bg-purple-100"
                title="Confidence & Self-Esteem"
                description="Build self-confidence and believe in yourself to face life's challenges with a positive mindset."
              />
            </div>
          </div>

          {/* Bottom Grid: Remaining 3 Feature Cards */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <FeatureCard
              icon={<BrainCircuit className="h-5 w-5 text-rose-500" />}
              iconBg="bg-rose-100"
              title="Mental Clarity & Focus"
              description="Improve concentration, clarity of thought, and stay motivated towards your goals."
            />
            <FeatureCard
              icon={<Sprout className="h-5 w-5 text-emerald-600" />}
              iconBg="bg-emerald-100"
              title="Personal Growth & Resilience"
              description="Develop healthy habits, build resilience, and grow stronger through life's ups and downs."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-5 w-5 text-blue-600" />}
              iconBg="bg-blue-100"
              title="Safe & Confidential Space"
              description="Your privacy is our priority. We provide a supportive and judgment-free space where you can be yourself."
            />
          </div>
        </section>

        {/* Bottom Mentors & CTA Section */}
        <section className="rounded-3xl border border-indigo-50/80 bg-[#FAF9FD] p-6 md:p-8">
          
          {/* Section Header Indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-xs text-indigo-400">---&gt;</span>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#352E7A]">
              Meet Our Psychological Support Mentors
            </h2>
            <span className="text-xs text-indigo-400">&lt;---</span>
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.map((mentor, index) => (
              <MentorCard key={index} {...mentor} />
            ))}
          </div>

          {/* Bottom Action / Trust Banner */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm md:flex-row">
            
            {/* Left: Message */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-800">
                  You are not alone. We are here for you.
                </h3>
                <p className="text-[11px] text-slate-500">
                  Take the first step towards a healthier mind and a happier you.
                </p>
              </div>
            </div>

            {/* Middle: Feature Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <Headphones className="h-4 w-4 text-purple-600" />
                <div className="text-left leading-none">
                  <p className="text-[11px] font-bold text-slate-700">One-to-One</p>
                  <p className="text-[9px] text-slate-400">Online Sessions</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-purple-600" />
                <div className="text-left leading-none">
                  <p className="text-[11px] font-bold text-slate-700">100% Confidential</p>
                  <p className="text-[9px] text-slate-400">&amp; Secure</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-purple-600" />
                <div className="text-left leading-none">
                  <p className="text-[11px] font-bold text-slate-700">Flexible Timing</p>
                  <p className="text-[9px] text-slate-400">That Suits You</p>
                </div>
              </div>
            </div>

            {/* Right: Action Button */}
            <button
              type="button"
              className="flex shrink-0 items-center gap-2 rounded-xl bg-[#4F35D2] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              <MessageCircle className="h-4 w-4" />
              Talk to a Mentor
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}