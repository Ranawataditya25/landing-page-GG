import React, { useState } from 'react';
import { 
  CheckCircle2, Users, BookOpen, Award, ShieldCheck, Headphones, 
  Video, MapPin, TrendingUp, Share2, UserCheck, MessageSquare, 
  ChevronDown, ChevronUp, ArrowRight, Star, Gift, DollarSign, Sparkles
} from 'lucide-react';
import  {Header}  from './components/Header';
export default function GoodGuidersMentor() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const applyRoles = [
    { title: "Exam Qualified Professionals", desc: "IT, NEET, UPSC, SSC, State PSC, Bank, etc." },
    { title: "Working Professionals", desc: "Share your industry experience and career guidance" },
    { title: "Teachers & Faculty", desc: "School/College teachers, subject experts" },
    { title: "Coaching Institute Owners", desc: "Reach more students beyond your classroom" },
    { title: "College Students", desc: "Share your recent experience and guide juniors" },
    { title: "Domain Experts", desc: "Experts in skills like coding, design, communication, entrepreneurship, etc." },
    { title: "Retired Professionals", desc: "Your experience can shape many bright futures." },
    { title: "Anyone with a Will to Guide", desc: "If you have the passion to help and mentor students, you are welcome!" }
  ];

  const mentorFeatures = [
    { icon: <Video className="w-6 h-6 text-emerald-600" />, title: "Online Mentorship", desc: "Guide students from anywhere. Conduct 1-on-1 or group sessions through our platform." },
    { icon: <MapPin className="w-6 h-6 text-red-500" />, title: "Offline (Local) Mentorship", desc: "Provide tailored advice in your city for in-person guidance, counselling and career support." },
    { icon: <TrendingUp className="w-6 h-6 text-blue-600" />, title: "Career Counseling", desc: "Help students choose the right career path after school/college." },
    { icon: <Share2 className="w-6 h-6 text-amber-500" />, title: "Share Study Material", desc: "Share notes, PDFs, videos and useful resources." },
    { icon: <UserCheck className="w-6 h-6 text-purple-600" />, title: "Personalized Guidance", desc: "Provide tailored advice based on student's goals, interests and strengths." },
    { icon: <Users className="w-6 h-6 text-teal-600" />, title: "Mentor Groups", desc: "Conduct group sessions, webinars or discussions on career, skills and life guidance." }
  ];

  const benefits = [
    { icon: <Video className="w-7 h-7 text-emerald-600" />, title: "One Platform Online & Offline", desc: "Guide students across India or in your local area - your choice." },
    { icon: <ShieldCheck className="w-7 h-7 text-red-500" />, title: "No Commission", desc: "We never take a cut from your earnings. You keep 100% of what you earn." },
    { icon: <DollarSign className="w-7 h-7 text-blue-600" />, title: "Earn as Per Your Effort", desc: "Set your own fees and earn as much as you want based on your time, expertise and impact." },
    { icon: <Users className="w-7 h-7 text-orange-500" />, title: "We Bring You Students", desc: "Get connected with genuine students actively looking for mentors." },
    { icon: <Sparkles className="w-7 h-7 text-indigo-600" />, title: "Build Your Personal Brand", desc: "Showcase your achievements, experience and expertise to a large audience." },
    { icon: <Headphones className="w-7 h-7 text-cyan-600" />, title: "Dedicated Support", desc: "Our team is always here to help you with technical support, profile optimization and guidance." }
  ];

  const testimonials = [
    { 
      name: "Dr. Anjali Mehta", 
      role: "NEET Mentor", 
      text: "Good Guiders gave me a platform to share my experience and help students choose the right career path. The support team is excellent!" 
    },
    { 
      name: "Rohit Sharma", 
      role: "UPSC Mentor", 
      text: "I love the flexibility. I can mentor students online as well as in my city. There is no commission, and I can focus on what I love - guiding." 
    },
    { 
      name: "Sneha Kapoor", 
      role: "Career Mentor", 
      text: "As a working professional, I wanted to give back. Good Guiders makes it so easy to connect with genuine students. Truly a meaningful platform!" 
    }
  ];

  const faqs = [
    { q: "Is there any commission on my earnings?", a: "No, we do not charge any commission. You keep 100% of what you earn." },
    { q: "How do I get students?", a: "We actively market and connect you with genuine students looking for guidance based on your expertise." },
    { q: "What is included in the subscription?", a: "Full access to all platform features, profile listing, zero commission on earnings, and dedicated support." },
    { q: "Can I set my own fees?", a: "Yes, you have full flexibility to set your own fees according to your time and expertise." },
    { q: "Can I mentor both online and offline?", a: "Yes, you can choose to guide students either online across India or offline in your local area." },
    { q: "Who can become a mentor?", a: "Professionals, teachers, exam-qualified experts, coaching owners, college students, and anyone with a passion to guide." }
  ];

  const testimonialImages = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header/>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-blue-800 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Inspire • Guide • Empower
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 leading-tight">
              Become a Mentor with <span className="text-red-500">Good Guiders</span>
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              Your experience can change a student's life. Join Good Guiders as a Mentor and help students make better choices in academics, careers and life. Whether you want to mentor online or in your local area, this is the right platform for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition">
                Join as a Mentor <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-6 py-3 rounded-lg backdrop-blur-sm transition">
                Be a Local Mentor
              </button>
            </div>

            {/* Quick highlights */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-blue-200 border-t border-blue-800/60 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Easy Registration in 5 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Online or Offline Mentoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No Commission (Keep 100%)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dedicated Support Team</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="Mentor working" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg text-gray-900 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-medium">Trusted Network</p>
                  <p className="text-sm font-bold">Good Guiders Mentors</p>
                </div>
                <span className="bg-emerald-500 text-white text-xs px-2.5 py-1 rounded-full font-bold">4.8/5 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-5 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">50,000+</p>
            <p className="text-xs text-blue-200 mt-1">Students Guided</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">5,000+</p>
            <p className="text-xs text-blue-200 mt-1">Active Mentors</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">100+</p>
            <p className="text-xs text-blue-200 mt-1">Exams & Career Options</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">4.8/5</p>
            <p className="text-xs text-blue-200 mt-1">Mentor Satisfaction</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
            <p className="text-xs text-blue-200 mt-1">No Commission</p>
          </div>
        </div>
      </section>

      {/* WHO CAN APPLY SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Who Can Apply to Become a Mentor?</h2>
          <p className="text-gray-600 mt-2">If you have the experience, knowledge or passion to guide, you can join!</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {applyRoles.map((role, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl text-center hover:shadow-md transition">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                {role.title.charAt(0)}
              </div>
              <h3 className="font-bold text-gray-900 text-base">{role.title}</h3>
              <p className="text-xs text-gray-600 mt-2">{role.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT CAN YOU DO SECTION */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Can You Do as a Mentor?</h2>
            <p className="text-gray-600 mt-2">Multiple ways to guide, support and make an impact — all in one platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentorFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/60 flex items-start gap-4">
                <div className="p-3 bg-gray-50 rounded-xl shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{feat.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE GOOD GUIDERS SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Good Guiders as a Mentor?</h2>
          <p className="text-gray-600 mt-2">We value mentors and give you the freedom, support and opportunities to grow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="border border-gray-100 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
              <div className="p-4 bg-gray-50 rounded-full mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{benefit.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING & REFERRAL SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Pricing Box */}
          <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Simple & Transparent Pricing</span>
            <h3 className="text-2xl font-black text-gray-900 mt-4">One Year Subscription for Mentors</h3>
            <div className="my-6 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-red-600">₹2,999</span>
              <span className="text-gray-500 font-medium">for 1 Year</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> Full access to all features</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> No commission on your earnings</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> Connect with students across India</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> Dedicated support</li>
            </ul>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2">
              Join Now at ₹2,999 <ArrowRight className="w-5 h-5"/>
            </button>
          </div>

          {/* Refer & Earn Box */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">Refer & Earn</span>
            <h3 className="text-2xl font-black mt-4">Earn ₹500 for Every Successful Referral!</h3>
            <p className="text-emerald-100 text-sm mt-2">Invite fellow educators, professionals or experts to join Good Guiders. For every successful registration, you will get ₹500 in your wallet.</p>
            
            <div className="grid grid-cols-3 gap-4 my-8 text-center">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <span className="w-8 h-8 bg-white text-emerald-800 font-bold rounded-full flex items-center justify-center mx-auto mb-2 text-sm">1</span>
                <p className="text-xs font-semibold">Invite Mentors</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <span className="w-8 h-8 bg-white text-emerald-800 font-bold rounded-full flex items-center justify-center mx-auto mb-2 text-sm">2</span>
                <p className="text-xs font-semibold">They Register</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <span className="w-8 h-8 bg-white text-emerald-800 font-bold rounded-full flex items-center justify-center mx-auto mb-2 text-sm">3</span>
                <p className="text-xs font-semibold">You Earn ₹500</p>
              </div>
            </div>
            
            <div className="bg-white text-gray-900 p-4 rounded-2xl flex items-center justify-between font-bold">
              <span>Grow Together</span>
              <span className="text-emerald-600 text-xl">₹500 / Referral</span>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Mentors Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic">"{test.text}"</p>
              </div>
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src={testimonialImages[idx % testimonialImages.length]} alt={test.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{test.name}</h4>
                  <p className="text-xs text-gray-500">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2">Find answers to common questions about becoming a mentor.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full px-6 py-4 text-left font-semibold text-gray-900 flex justify-between items-center focus:outline-none"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-gray-500"/> : <ChevronDown className="w-5 h-5 text-gray-500"/>}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Help box */}
          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-3xl p-6 text-center">
            <Headphones className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-bold text-gray-900">Still have questions?</h3>
            <p className="text-sm text-gray-600 mt-1">We're here to help!</p>
            <div className="mt-4 flex justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition">
                Contact Us
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">or Email us at <span className="font-semibold text-blue-600">support@goodguiders.com</span></p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black">Let's Create a Brighter Future — Together</h2>
          <p className="text-blue-200 mt-2 text-sm">Join thousands of mentors who are guiding, inspiring and empowering the next generation.</p>
          <div className="mt-6">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition inline-flex items-center gap-2">
              Join as a Mentor <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}