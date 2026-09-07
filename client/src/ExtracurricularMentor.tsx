import React from 'react';
import { 
  Users, Award, Sparkles, Star, ShieldCheck, Headphones, 
  CheckCircle2, ArrowRight, Play, BookOpen, UserCheck, 
  Share2, Calendar, TrendingUp, Heart, DollarSign, 
  Globe, Clock, HelpCircle, Mail 
} from 'lucide-react';
import  {Header}  from './components/Header';
export default function ExtracurricularMentorLanding() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased overflow-x-hidden">
      <Header/>
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-blue-400/30">
              Create • Inspire • Empower
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Become an <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Extracurricular Activities
              </span> <br />
              Mentor with Good Guiders
            </h1>
            <p className="text-lg text-slate-300 max-w-xl">
              Turn your passion into impact! Join Good Guiders as an Extracurricular Activities Mentor and help students explore their interests, discover hidden talents and grow into confident, well-rounded individuals.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#pricing" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition duration-300 flex items-center gap-2 text-base"
              >
                Join as an Activities Mentor <ArrowRight className="w-5 h-5" />
              </a>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-xl backdrop-blur-md transition duration-300 flex items-center gap-2 border border-white/20 text-base">
                <Play className="w-5 h-5 fill-current text-orange-400" /> Watch How It Works
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur-xl opacity-30"></div>
            <div className="relative bg-slate-800/40 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" 
                alt="Mentor teaching guitar" 
                className="rounded-2xl w-full h-72 object-cover shadow-2xl mb-6"
              />
              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="block text-xl font-bold text-orange-400">Music</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="block text-xl font-bold text-pink-400">Dance</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="block text-xl font-bold text-cyan-400">Art</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                  <span className="block text-xl font-bold text-amber-400">Sports</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
          <div>
            <p className="text-2xl font-black text-orange-400">50,000+</p>
            <p className="text-xs text-slate-400 mt-1">Students Exploring Talents</p>
          </div>
          <div>
            <p className="text-2xl font-black text-white">3,000+</p>
            <p className="text-xs text-slate-400 mt-1">Activity Mentors</p>
          </div>
          <div>
            <p className="text-2xl font-black text-white">100+</p>
            <p className="text-xs text-slate-400 mt-1">Activity Categories</p>
          </div>
          <div>
            <p className="text-2xl font-black text-amber-400">4.8/5</p>
            <p className="text-xs text-slate-400 mt-1">Mentor Satisfaction</p>
          </div>
          <div>
            <p className="text-2xl font-black text-emerald-400">100%</p>
            <p className="text-xs text-slate-400 mt-1">No Commission</p>
          </div>
          <div>
            <p className="text-2xl font-black text-cyan-400">24/7</p>
            <p className="text-xs text-slate-400 mt-1">Platform Support</p>
          </div>
        </div>
      </section>

      {/* 2. WHO CAN APPLY? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Who Can Apply?</h2>
          <p className="text-slate-600 mt-3 text-lg">If you have a skill, passion or experience in any extracurricular activity, you can join!</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Professional Artists & Musicians", desc: "Music teachers, singers, instrumentalists, painters, designers etc.", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80" },
            { title: "Dance Instructors", desc: "Classical, Western, Folk, Contemporary and more.", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80" },
            { title: "Sports Coaches", desc: "Cricket, Football, Basketball, Badminton, Yoga, Fitness, Martial Arts and more.", img: "https://images.unsplash.com/photo-1517649763962-0c6232660102?w=400&q=80" },
            { title: "Hobby Experts", desc: "Photography, Chess, Rubik's Cube, Gardening, Model Making, Robotics and more.", img: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=400&q=80" },
            { title: "Working Professionals", desc: "Share your real-world skills like public speaking, creative writing, drama, etc.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
            { title: "College Students", desc: "If you have a talent and want to share it with younger students, you are welcome!", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80" },
            { title: "Retired Professionals", desc: "Use your experience to guide and mentor the next generation.", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&q=80" },
            { title: "Anyone with a Passion", desc: "If you love any activity and want to help others learn and grow, this is for you!", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 flex flex-col items-center text-center group">
              <img src={item.img} alt={item.title} className="w-20 h-20 rounded-full object-cover mb-4 group-hover:scale-105 transition duration-300 shadow-md" />
              <h3 className="font-bold text-slate-900 text-base mb-1">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHAT CAN YOU DO AS A MENTOR? */}
      <section className="bg-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">What Can You Do as an Extracurricular Activities Mentor?</h2>
            <p className="text-slate-600 mt-3 text-lg">Share your skills, inspire creativity, and help students grow — in multiple ways.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Globe className="w-6 h-6 text-blue-600" />, title: "Conduct Online or Offline Sessions", desc: "Take 1-on-1 or group sessions as per your convenience." },
              { icon: <BookOpen className="w-6 h-6 text-orange-600" />, title: "Share Learning Resources", desc: "Share videos, PDFs, practice material and useful links." },
              { icon: <UserCheck className="w-6 h-6 text-indigo-600" />, title: "Personalized Guidance", desc: "Help students improve their skills with personalized feedback." },
              { icon: <Users className="w-6 h-6 text-emerald-600" />, title: "Mentor Groups & Clubs", desc: "Create interest-based groups (e.g., music club, art club, etc.)." },
              { icon: <Award className="w-6 h-6 text-amber-600" />, title: "Showcase Your Work", desc: "Display your achievements, performances or portfolio." },
              { icon: <Calendar className="w-6 h-6 text-rose-600" />, title: "Flexible Scheduling", desc: "Set your own availability and teaching mode (online/offline)." },
              { icon: <TrendingUp className="w-6 h-6 text-purple-600" />, title: "Career & Opportunities Guidance", desc: "Guide students for competitions, auditions and future opportunities in your field." },
              { icon: <Heart className="w-6 h-6 text-red-500" />, title: "Build a Community", desc: "Connect with like-minded students and fellow mentors." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 hover:border-blue-500 transition duration-300">
                <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-slate-100">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE GOOD GUIDERS? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Why Choose Good Guiders?</h2>
          <p className="text-slate-600 mt-3 text-lg">We believe in empowering mentors and giving them the best platform to grow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { title: "One Platform for All Talents", desc: "From music to sports, art to public speaking—everything under one roof." },
            { title: "No Commission", desc: "We never take a cut from your earnings. You keep 100% of what you earn." },
            { title: "Wide Student Reach", desc: "We bring you genuine students who are interested in learning extracurricular skills." },
            { title: "Flexible & Independent", desc: "Work on your own terms—choose your fees, schedule and mode (online/offline)." },
            { title: "Build Your Personal Brand", desc: "Showcase your talent, get recognition and grow your reputation as a trusted mentor." },
            { title: "Dedicated Support", desc: "Our team is always here to help you with technical support, profile optimization and guidance." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">
                {idx + 1}
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PRICING & REFERRAL SECTION */}
      <section id="pricing" className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Pricing Box */}
          <div className="bg-white text-slate-900 p-8 sm:p-10 rounded-3xl shadow-2xl border-4 border-orange-500 relative">
            <span className="absolute -top-4 right-8 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Simple & Transparent Pricing
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              One Year Subscription for Extracurricular Mentors
            </h3>
            <div className="my-6">
              <span className="text-5xl font-black text-orange-600">₹999</span>
              <span className="text-slate-500 text-lg font-medium"> for 1 Year</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Full access to all platform features",
                "No commission on your earnings",
                "Connect with students across India",
                "Dedicated support"
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> {feat}
                </li>
              ))}
            </ul>
            <a 
              href="#join" 
              className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition duration-300 text-lg"
            >
              Join Now at ₹999 →
            </a>
          </div>

          {/* Referral Box */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6">
            <span className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-emerald-400/30">
              Refer & Earn
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Earn ₹199 for Every Successful Referral!
            </h3>
            <p className="text-slate-300 text-sm">
              Invite fellow activity mentors to join Good Guiders. For every successful registration, you will get ₹199 in your wallet.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
              <div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-orange-400">1</div>
                <p className="text-xs text-slate-300 font-medium">Invite Mentors</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-orange-400">2</div>
                <p className="text-xs text-slate-300 font-medium">They Register</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-400/40 rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-emerald-400">3</div>
                <p className="text-xs text-emerald-300 font-medium">You Earn ₹199</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">What Our Activity Mentors Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "Priya Nair", 
              role: "Dance Mentor", 
              quote: "Good Guiders gave me a platform to share my passion for dance and connect with so many enthusiastic students. It's truly fulfilling!",
              img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
            },
            { 
              name: "Karan Mehta", 
              role: "Music Mentor", 
              quote: "I love the freedom to teach on my own terms. The platform is simple, supportive and there is no commission, which is amazing!",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
            },
            { 
              name: "Sneha Kapoor", 
              role: "Art & Craft Mentor", 
              quote: "I started as a hobby artist and now I teach students from different cities. Good Guiders has helped me turn my passion into a purpose.",
              img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80"
            },
          ].map((testi, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic mb-6">"{testi.quote}"</p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img src={testi.img} alt={testi.name} className="w-12 h-12 rounded-full object-cover shadow" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testi.name}</h4>
                  <p className="text-xs text-slate-500">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ & SUPPORT SECTION */}
      <section className="bg-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Frequently Asked Questions</h2>
            {[
              "Is there any commission on my earnings?",
              "What is included in the subscription?",
              "Can I take both online and offline sessions?",
              "Who can become an extracurricular mentor?",
              "How do I get students?",
              "Can I change my activity category later?"
            ].map((faq, i) => (
              <details key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 group cursor-pointer">
                <summary className="font-semibold text-slate-800 flex justify-between items-center list-none">
                  {faq}
                  <span className="text-slate-400 group-open:rotate-180 transition duration-300">▼</span>
                </summary>
                <p className="text-sm text-slate-600 mt-3 pt-3 border-t border-slate-100">
                  Yes, everything is fully transparent. You get direct access to your payouts and complete freedom over your schedule and pricing structure.
                </p>
              </details>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between text-center">
            <div>
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Still have questions?</h3>
              <p className="text-xs text-slate-500 mb-6">We're here to help!</p>
              <a 
                href="#contact" 
                className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow transition duration-300 text-sm mb-4"
              >
                Contact Us
              </a>
            </div>
            <p className="text-xs text-slate-400 pt-4 border-t border-slate-100">
              or Email us at <br />
              <span className="font-semibold text-slate-600">support@goodguiders.com</span>
            </p>
          </div>

        </div>
      </section>

      {/* 8. FOOTER CTA */}
      <section id="join" className="bg-gradient-to-r from-orange-500 to-amber-500 py-16 px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Let's Create a More Creative & Confident Generation
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto">
            Join thousands of mentors who are inspiring young minds through music, art, sports and more.
          </p>
          <div>
            <a 
              href="#pricing" 
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition duration-300 text-base"
            >
              Join as an Activities Mentor <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs font-semibold tracking-wider uppercase text-white/80 pt-4">
            Talents Today • Better Tomorrows
          </p>
        </div>
      </section>

    </div>
  );
}