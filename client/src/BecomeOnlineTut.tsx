import React from 'react';
import { 
  CheckCircle, Users, BookOpen, Star, ShieldCheck, Headphones, 
  Video, FileText, Layout, Share2, Award, Briefcase, TrendingUp, 
  DollarSign, MessageSquare, UserCheck, ArrowRight, Gift, Sparkles 
} from 'lucide-react';
import  {Header}  from './components/Header';
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* HEADER / HERO SECTION */}
      <Header/>
      <header className="bg-gradient-to-b from-orange-50/50 to-white pb-12 pt-6 px-4 sm:px-6 lg:px-8 border-b border-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column - Main Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-semibold text-orange-600 tracking-wide uppercase bg-orange-100 px-3 py-1 rounded-full">
                Teach Online • Inspire Anytime, Anywhere
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                Become an <br />
                <span className="text-orange-600">Online Tutor</span> with <br />
                Good Guiders
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl">
                Your knowledge can change lives. Teach, create, engage and earn on your own terms—with India’s trusted learning platform.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-xs font-medium text-gray-700 bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Easy Registration in 5 Minutes</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-medium text-gray-700 bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Teach from Anywhere (Anytime, Anywhere)</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-medium text-gray-700 bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>No Commission Keep 100% of Your Earnings</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-medium text-gray-700 bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Dedicated Support We are with you</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-600/30 flex items-center space-x-3 transition transform hover:-translate-y-0.5">
                  <span>Join as an Online Tutor</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column - Hero Graphic & Side Features */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-orange-100">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Online Tutor Teaching" 
                  className="w-full h-72 sm:h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-lg">Teach • Create • Share • Inspire</p>
                    <p className="text-xs text-orange-200">Join the elite network of digital educators</p>
                  </div>
                </div>
              </div>

              {/* Highlight Sidebar Card */}
              <div className="bg-white p-5 rounded-2xl border border-orange-100 shadow-md space-y-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  More Than Teaching — It’s a Bigger Impact!
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span><strong>Flexible Teaching Hours:</strong> Teach on your schedule</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span><strong>Reach Students Across India:</strong> From any city or town</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span><strong>Build Your Personal Brand:</strong> Showcase your expertise</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* STATS BAR */}
          <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            <div className="space-y-1">
              <div className="flex justify-center text-orange-600"><BookOpen className="w-6 h-6" /></div>
              <div className="text-xl font-extrabold text-slate-900">50,000+</div>
              <div className="text-xs text-gray-500">Students Learning</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center text-orange-600"><Users className="w-6 h-6" /></div>
              <div className="text-xl font-extrabold text-slate-900">5,000+</div>
              <div className="text-xs text-gray-500">Active Tutors</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center text-orange-600"><Award className="w-6 h-6" /></div>
              <div className="text-xl font-extrabold text-slate-900">100+</div>
              <div className="text-xs text-gray-500">Subjects & Skills</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center text-orange-600"><Star className="w-6 h-6 fill-orange-500 text-orange-500" /></div>
              <div className="text-xl font-extrabold text-slate-900">4.8/5</div>
              <div className="text-xs text-gray-500">Tutor Satisfaction</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center text-orange-600"><ShieldCheck className="w-6 h-6" /></div>
              <div className="text-xl font-extrabold text-slate-900">100%</div>
              <div className="text-xs text-gray-500">No Commission</div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center text-orange-600"><Headphones className="w-6 h-6" /></div>
              <div className="text-xl font-extrabold text-slate-900">24/7</div>
              <div className="text-xs text-gray-500">Support</div>
            </div>
          </div>

        </div>
      </header>

      {/* WHO CAN APPLY SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Who Can Apply?</h2>
          <p className="text-gray-600 text-sm">If you have a passion for teaching and want to make an impact, you can join!</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {[
            { title: "School Teachers", desc: "Share your subject expertise and help students.", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=150" },
            { title: "College Students", desc: "Showcase your talent and start teaching while you study.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=150" },
            { title: "NEET / JEE Qualified", desc: "Turn your exam success into a teaching career. Guide aspiring students.", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=150" },
            { title: "Graduates / Postgraduates", desc: "Use your subject knowledge to teach and earn.", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=150" },
            { title: "Subject Specialists", desc: "If you are an expert in any subject or skill, this platform is for you.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=150" },
            { title: "Coaching Faculty", desc: "Expand your reach beyond your institute.", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=150" },
            { title: "Working Professionals", desc: "Share your real-world and industry skills.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=150" },
            { title: "Anyone with a Passion", desc: "If you love teaching and grow your platform.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=150" }
          ].map((item, idx) => (
            <div key={idx} className="bg-orange-50/50 hover:bg-orange-50 border border-orange-100 p-4 rounded-xl text-center space-y-3 transition">
              <div className="w-16 h-16 mx-auto bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold overflow-hidden shadow-inner">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-slate-900">{item.title}</h3>
              <p className="text-[10px] text-gray-500 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT CAN YOU DO AS AN ONLINE TUTOR */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">What Can You Do as an Online Tutor?</h2>
            <p className="text-gray-600 text-sm">All the tools you need to teach, engage and grow — in one place.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Video className="w-6 h-6 text-orange-600" />, title: "Take Live Online Classes", desc: "Teach with interactive whiteboard, audio-video and real-time doubt solving." },
              { icon: <FileText className="w-6 h-6 text-orange-600" />, title: "Upload Study Material", desc: "Share notes, PDFs, PPTs, assignments, worksheets and more." },
              { icon: <Layout className="w-6 h-6 text-orange-600" />, title: "Create Topic-wise / Chapter-wise Tests & MCQs", desc: "Make quizzes, mock tests and practice sets with instant results." },
              { icon: <Share2 className="w-6 h-6 text-orange-600" />, title: "Share Video Links", desc: "Add YouTube or other video links so students can learn at their own pace." },
              { icon: <Briefcase className="w-6 h-6 text-orange-600" />, title: "Assess Student Work", desc: "Check handwritten copies, assignments and give detailed feedback." },
              { icon: <Users className="w-6 h-6 text-orange-600" />, title: "Manage Batches", desc: "Create and manage multiple batches with flexible timings." },
              { icon: <TrendingUp className="w-6 h-6 text-orange-600" />, title: "Track Student Progress", desc: "Get analytics and reports of your students' performance." },
              { icon: <DollarSign className="w-6 h-6 text-orange-600" />, title: "Set Your Own Pricing", desc: "Choose your own fees for classes, courses or test series." },
              { icon: <MessageSquare className="w-6 h-6 text-orange-600" />, title: "Communicate Easily", desc: "Chat, send announcements and stay connected with your students." },
              { icon: <UserCheck className="w-6 h-6 text-orange-600" />, title: "Build Your Profile & Brand", desc: "Showcase your education, experience, achievements, certifications and more." }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3 hover:shadow-md transition">
                <div className="p-3 bg-orange-50 w-fit rounded-xl">{card.icon}</div>
                <h3 className="font-bold text-slate-900 text-sm">{card.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE GOOD GUIDERS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">Why Choose Good Guiders?</h2>
          <p className="text-orange-600 font-bold text-sm">A Better Platform for Teachers</p>
          <p className="text-gray-500 text-xs">We are built by educators, for educators. Here’s how we are different:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {[
            { title: "One-Time Annual Subscription", desc: "Pay just once a year and get full access. No hidden charges." },
            { title: "Zero Commission", desc: "We do not take any commission from your earnings. You keep 100% of what you earn." },
            { title: "Earn What You Deserve", desc: "Set your own fees and earn as per your skills, experience and availability. There is no limit to your income." },
            { title: "We Bring You Students", desc: "Our platform actively promotes your profile and helps you get online students who are looking for teachers like you." },
            { title: "Build Your Personal Brand", desc: "Showcase your profile, certifications, student reviews and grow your reputation as a trusted educator." },
            { title: "Dedicated Support", desc: "Our team is always here to help you with technical support, profile optimization and guidance." }
          ].map((feat, idx) => (
            <div key={idx} className="bg-orange-50/30 border border-orange-100 p-6 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <h3 className="font-bold text-sm text-slate-900">{feat.title}</h3>
              <p className="text-xs text-gray-600">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING & REFERRAL SECTION */}
      <section className="bg-orange-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-orange-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Pricing Box */}
          <div className="bg-white p-8 rounded-3xl shadow-md border border-orange-200 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full uppercase">Simple & Transparent Pricing</span>
              <h3 className="text-2xl font-black text-slate-900 mt-4">One Year Subscription for Online Tutors</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-orange-600">₹4,999</span>
                <span className="text-sm text-gray-500">for 1 Year</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Full Access to All Features</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> No Commission on Your Earnings</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Unlimited Batches & Students</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Dedicated Support</li>
              </ul>
            </div>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-lg transition text-center">
              Join Now at ₹4,999 →
            </button>
          </div>

          {/* Referral Box */}
          <div className="bg-white p-8 rounded-3xl shadow-md border border-orange-200 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full uppercase">Refer & Earn</span>
              <h3 className="text-2xl font-black text-slate-900 mt-4">Earn ₹1,000 for Every Successful Referral!</h3>
              <p className="text-sm text-gray-600 mt-2">Invite fellow educators to join Good Guiders. For every successful registration, you will get ₹1,000 in your wallet.</p>
              
              <div className="grid grid-cols-3 gap-4 my-6 text-center">
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div className="font-bold text-orange-600">1</div>
                  <div className="text-xs font-semibold mt-1">Invite Teachers</div>
                  <div className="text-[10px] text-gray-400">Share your referral link</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div className="font-bold text-orange-600">2</div>
                  <div className="text-xs font-semibold mt-1">They Register</div>
                  <div className="text-[10px] text-gray-400">And activate their account</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div className="font-bold text-orange-600">3</div>
                  <div className="text-xs font-semibold mt-1">You Earn ₹1,000</div>
                  <div className="text-[10px] text-gray-400">Directly in your wallet</div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-center justify-between">
              <span className="font-bold text-emerald-800 text-sm">Grow Together</span>
              <span className="text-xl font-extrabold text-emerald-600">+₹1,000</span>
            </div>
          </div>

        </div>
      </section>

      {/* WHAT OUR TUTORS SAY */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900">What Our Tutors Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              quote: "Good Guiders gives me the freedom to teach in my own way. I can upload my notes, take live classes and track my students' progress easily.", 
              name: "Neha Sharma", 
              subject: "Math Tutor",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100"
            },
            { 
              quote: "I love that there is no commission and I can set my own fees. The platform is very easy to use and the support team is always helpful.", 
              name: "Rohit Verma", 
              subject: "Physics Tutor",
              img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"
            },
            { 
              quote: "As a college student, I wanted to use my knowledge to help others. Good Guiders gave me the right platform to start teaching and earn.", 
              name: "Ananya Singh", 
              subject: "NEET Mentor",
              img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4 flex flex-col justify-between">
              <p className="text-xs text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-orange-200 overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonial.img} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{testimonial.name}</h4>
                  <p className="text-[10px] text-gray-400">{testimonial.subject}</p>
                </div>
                <div className="ml-auto flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-orange-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold">Join a Growing Community of Educators</h2>
            <p className="text-xs text-gray-400">Teach. Inspire. Empower. Create brighter futures—with Good Guiders.</p>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition flex items-center space-x-2">
            <span>Join as an Online Tutor</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </footer>

    </div>
  );
}