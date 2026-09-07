import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  PhoneCall, 
  Mail, 
  Calendar, 
  DollarSign, 
  GraduationCap, 
  Globe, 
  Sparkles, 
  MessageSquare, 
  BookOpen, 
  Briefcase, 
  Star 
} from 'lucide-react';
import  {Header}  from './components/Header';
export default function PsychologicalSupportLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased overflow-x-hidden">
      <Header/>
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background ambient glow shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
              <span>Listen</span> • <span>Understand</span> • <span>Support</span> • <span>Empower</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-cyan-300">Psychological Support Provider</span> with Good Guiders
            </h1>

            <p className="text-blue-100/90 text-base sm:text-lg max-w-2xl leading-relaxed">
              Because a healthier mind builds a brighter future. Join Good Guiders as a certified or aspiring psychological support provider and help students overcome stress, anxiety, career confusion, and personal challenges. Be the support system they need.
            </p>

            <div className="pt-2">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-3 group text-base">
                <span>Join as a Psychological Support Provider</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Right Cards & Visuals */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Top Image Card Mock */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-b from-blue-900/60 to-blue-950/80 p-3">
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-teal-300 border border-white/10">
                Healthy Minds • Brighter Futures
              </div>
              <div className="h-48 sm:h-56 rounded-xl overflow-hidden relative flex items-center justify-center bg-blue-900/40">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Professional Support Provider" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>

            {/* Feature Checkpoints List */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-3">
              {[
                { title: "Online or Offline Support", desc: "Offer sessions as per your availability" },
                { title: "Make a Real Difference", desc: "Help students build confidence" },
                { title: "Be a Part of a Trusted Platform", desc: "Join a growing community" },
                { title: "Flexible Timings", desc: "Work at your convenience" },
                { title: "No Commission", desc: "You keep 100% of what you earn" },
                { title: "Dedicated Support", desc: "We are with you always" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <div className="mt-0.5 bg-teal-400/20 text-teal-300 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white">{item.title}:</span>{' '}
                    <span className="text-blue-200 text-xs sm:text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-white border-b border-slate-200 py-6 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <Users className="w-6 h-6 text-blue-600 mb-1" />
            <span className="text-xl font-extrabold text-slate-900">50,000+</span>
            <span className="text-xs text-slate-500 font-medium">Students Supported</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <HeartHandshake className="w-6 h-6 text-blue-600 mb-1" />
            <span className="text-xl font-extrabold text-slate-900">2,000+</span>
            <span className="text-xs text-slate-500 font-medium">Support Providers</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <GraduationCap className="w-6 h-6 text-blue-600 mb-1" />
            <span className="text-xl font-extrabold text-slate-900">100+</span>
            <span className="text-xs text-slate-500 font-medium">Schools & Colleges</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <Star className="w-6 h-6 text-amber-500 fill-amber-500 mb-1" />
            <span className="text-xl font-extrabold text-slate-900">4.8/5</span>
            <span className="text-xs text-slate-500 font-medium">Provider Satisfaction</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <ShieldCheck className="w-6 h-6 text-emerald-600 mb-1" />
            <span className="text-xl font-extrabold text-slate-900">100%</span>
            <span className="text-xs text-slate-500 font-medium">No Commission</span>
          </div>
          <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
            <PhoneCall className="w-6 h-6 text-blue-600 mb-1" />
            <span className="text-xl font-extrabold text-slate-900">24/7</span>
            <span className="text-xs text-slate-500 font-medium">Platform Support</span>
          </div>
        </div>
      </section>

      {/* 3. WHO CAN APPLY? */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Who Can Apply?</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">If you have the right mindset, empathy and skills to support others, you can join!</p>
          </div>
          <div className="mt-4 md:mt-0 bg-blue-50 border border-blue-100 text-blue-800 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
            <span>Different People • Same Purpose</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Certified Psychologists",
              desc: "Clinical, counselling, educational or licensed psychologists.",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300"
            },
            {
              title: "Counsellors",
              desc: "Career counsellors, academic counsellors, life coaches.",
              img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300"
            },
            {
              title: "Therapists",
              desc: "Behavioural therapists, mental health therapists, wellness coaches.",
              img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300"
            },
            {
              title: "Social Workers",
              desc: "Professionals working in child/student development and social care.",
              img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300"
            },
            {
              title: "College Students (Trained/Certified)",
              desc: "Students with relevant certifications or experience can also apply.",
              img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
            },
            {
              title: "Educators",
              desc: "Teachers who want to provide emotional and psychological support.",
              img: "https://images.unsplash.com/photo-1580894732475-8027150a58e6?auto=format&fit=crop&q=80&w=300"
            },
            {
              title: "Anyone with Relevant Skills & Passion",
              desc: "If you have the knowledge, training or genuine willingness to help — you are welcome!",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-blue-500/20 shadow-inner">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">{item.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHAT CAN YOU DO AS A PSYCHOLOGICAL SUPPORT PROVIDER? */}
      <section className="bg-blue-50/60 border-y border-slate-200/60 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What Can You Do as a Psychological Support Provider?</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">Support students in multiple ways — online or offline, as per your expertise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
                title: "One-to-One Counselling",
                desc: "Conduct personal counselling sessions (online or offline)."
              },
              {
                icon: <Briefcase className="w-5 h-5 text-emerald-600" />,
                title: "Career Guidance Support",
                desc: "Help students with career-related stress, decision making and planning."
              },
              {
                icon: <Sparkles className="w-5 h-5 text-rose-600" />,
                title: "Goal Setting & Mindset Building",
                desc: "Help students set goals, stay focused and build a positive mindset."
              },
              {
                icon: <Users className="w-5 h-5 text-indigo-600" />,
                title: "Parental Guidance Sessions",
                desc: "Conduct sessions for parents to help them understand children better."
              },
              {
                icon: <Globe className="w-5 h-5 text-blue-600" />,
                title: "Group Sessions",
                desc: "Conduct group discussions, workshops and awareness sessions."
              },
              {
                icon: <HeartHandshake className="w-5 h-5 text-rose-600" />,
                title: "Emotional Well-being",
                desc: "Support students dealing with anxiety, stress, low confidence or motivation issues."
              },
              {
                icon: <BookOpen className="w-5 h-5 text-blue-600" />,
                title: "Communication Support",
                desc: "Guide students in improving communication and social skills."
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
                title: "Create a Safe Space",
                desc: "Be a trusted listener and help students express themselves without judgment."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE GOOD GUIDERS? */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Choose Good Guiders?</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">We value your expertise and give you the freedom, support and opportunities to grow.</p>
          </div>
          <div className="mt-4 md:mt-0 text-slate-400 font-semibold italic text-sm">
            Together for a Happier Generation
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe className="w-6 h-6 text-teal-600" />,
              title: "One Platform Online & Offline",
              desc: "Reach students across India — online or in your local area."
            },
            {
              icon: <DollarSign className="w-6 h-6 text-rose-600" />,
              title: "No Commission",
              desc: "We never take a cut from your earnings. You keep 100% of what you earn."
            },
            {
              icon: <Calendar className="w-6 h-6 text-indigo-600" />,
              title: "Flexible Practice",
              desc: "Work at your own time, in your own way."
            },
            {
              icon: <Users className="w-6 h-6 text-orange-600" />,
              title: "Wide Reach",
              desc: "We bring you students who genuinely need psychological support."
            },
            {
              icon: <Award className="w-6 h-6 text-blue-600" />,
              title: "Build Your Professional Brand",
              desc: "Showcase your qualifications, experience and approach to a large audience."
            },
            {
              icon: <HeadphonesIcon className="w-6 h-6 text-rose-600" />,
              title: "Dedicated Support",
              desc: "Our team is always here to help you with technical support, profile optimization and guidance."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PRICING & REFERRAL BANNER */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Pricing Box */}
          <div className="lg:col-span-6 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold px-3 py-1 rounded-full">
              Simple & Transparent Pricing
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-1">One Year Subscription</h3>
            <p className="text-blue-200 text-sm mb-6">for Psychological Support Providers</p>

            <div className="my-6">
              <span className="text-4xl sm:text-5xl font-black text-amber-400">₹2,999</span>
              <span className="text-blue-200 text-base font-medium ml-2">for 1 Year</span>
            </div>

            <ul className="space-y-3 mb-8 text-sm text-blue-100">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Full access to all platform features</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>No commission on your earnings</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Connect with students across India</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Dedicated support</span>
              </li>
            </ul>

            <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-orange-500/30 transition-all text-center">
              Join Now at ₹2,999 →
            </button>
          </div>

          {/* Referral Box */}
          <div className="lg:col-span-6 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/15 shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-orange-500/20 text-orange-300 border border-orange-500/30 text-xs font-semibold px-3 py-1 rounded-full">
              Refer & Earn
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-1">Earn ₹500 for Every Successful Referral!</h3>
            <p className="text-blue-200 text-sm mb-6">Invite fellow professionals to join Good Guiders. For every successful registration, you will get ₹500 in your wallet.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center mx-auto mb-2 text-sm">1</div>
                <h4 className="font-bold text-xs sm:text-sm">Invite Providers</h4>
                <p className="text-blue-200 text-[11px] mt-1">Share your referral link</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center mx-auto mb-2 text-sm">2</div>
                <h4 className="font-bold text-xs sm:text-sm">They Register</h4>
                <p className="text-blue-200 text-[11px] mt-1">And activate their account</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <div className="w-8 h-8 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center mx-auto mb-2 text-sm">3</div>
                <h4 className="font-bold text-xs sm:text-sm">You Earn ₹500</h4>
                <p className="text-blue-200 text-[11px] mt-1">For each successful signup</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-amber-200 block">Support • Spread • Grow</span>
                <span className="text-lg font-bold text-white">Refer & Get Rewarded</span>
              </div>
              <div className="text-2xl font-black text-amber-400">₹500</div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What Our Support Providers Say</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">Real experiences from professionals on our platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "\"Good Guiders gives me a meaningful platform to reach students who truly need guidance. I can work on my own terms and make a real difference.\"",
              name: "Dr. Radhika Mehta",
              role: "Counselling Psychologist",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
            },
            {
              quote: "\"I love the flexibility and the impact I can create. The team is very supportive and there is no commission, which is amazing.\"",
              name: "Amit Verma",
              role: "Career Counsellor",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
            },
            {
              quote: "\"As a student with a psychology background, this platform allows me to contribute and grow my skills.\"",
              name: "Neha Singh",
              role: "Student Counsellor",
              img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6">{item.quote}</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-slate-500 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-blue-50/50 border-t border-slate-200/60 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">Find answers to common questions about becoming a psychological support provider.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is there any commission on my earnings?",
                a: "No! Good Guiders operates on a 0% commission model for support providers. You keep 100% of the fees you collect from your sessions."
              },
              {
                q: "Who can become a psychological support provider?",
                a: "Certified psychologists, counsellors, therapists, social workers, trained college students, educators, and individuals with relevant skills and passion can apply."
              },
              {
                q: "What is included in the subscription?",
                a: "The subscription gives you 1 full year of access to platform tools, student matching, profile showcasing, zero commission benefits, and dedicated support."
              },
              {
                q: "How do I get students?",
                a: "Good Guiders promotes your profile across schools, colleges, digital channels, and our active network of learners who need psychological support."
              },
              {
                q: "Can I offer both online and offline sessions?",
                a: "Yes, you have complete flexibility to conduct sessions online or offline depending on your expertise and preferences."
              },
              {
                q: "Is my personal information safe?",
                a: "We maintain strict data privacy standards to ensure all provider and student information remains fully confidential and secure."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left font-semibold text-slate-900 flex justify-between items-center text-sm sm:text-base focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-slate-400">
                    {openFaq === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Help Box inside FAQ */}
          <div className="mt-10 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between shadow-sm gap-4">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mx-auto">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Still have questions?</h4>
                <p className="text-slate-500 text-xs sm:text-sm">We're here to help!</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Contact Us</span>
              </button>
              <a href="mailto:support@goodguiders.com" className="w-full sm:w-auto text-center text-slate-600 hover:text-blue-600 font-medium text-xs sm:text-sm px-3 py-2">
                or Email us at support@goodguiders.com
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 9. BOTTOM FOOTER CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200">
              A Healthier Mind. A Brighter Tomorrow.
            </h3>
            <p className="text-blue-200 text-xs sm:text-sm">Join a community of compassionate professionals and help shape a better future.</p>
          </div>
          <div>
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-orange-500/25 transition-all text-sm flex items-center gap-2">
              <span>Join as a Psychological Support Provider</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

function HeadphonesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"></path>
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
    </svg>
  );
}