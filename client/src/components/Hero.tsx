// import { Button } from "@/components/ui/button";

// export function Hero() {
//   const scrollToFeatures = () => {
//     const element = document.getElementById("features");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToEarlyRegistration = () => {
//     const element = document.getElementById("early-registration");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="home"
//      className="bg-gradient-to-br from-[#5d9af5] to-[#a6ffb8] pt-20 pb-8"

//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-5 items-center">
//           <div className="text-center lg:text-left">
//             <h1 className="text-[39px] h-[170px] font-bold text-gray-900 mb-6 leading-tight">
//   India's <span className="text-primary">Growing</span> Mentorship & Career Guidance App for Students
// </h1>

//             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//               From Class 6 to Career – One App, All Answers
//             </p>
//             <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
//               <Button
//                 className="bg-primary hover:bg-hsl(25, 86%, 31%); text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
//                 onClick={scrollToEarlyRegistration}
//               >
//                 Join Now & Save 20%
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors"
//                 onClick={scrollToFeatures}
//               >
//                 Learn More
//               </Button>
//             </div>
//           </div>
//       <div className="flex justify-center h-[309px] w-[78%] mx-auto">


//             {/* Students mentorship guidance scene */}
//             <img
//               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
//               alt="Students receiving mentorship guidance"
//               className="rounded-2xl shadow-2xl w-full max-w-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import {
  Sparkles,
  Download,
  ShieldCheck,
  BookOpen,
  Target,
  Lock,
  MapPin,
  Video,
  UserCheck,
  CheckCircle2,
  Users,
  Globe,
  Star,
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  badgeIcon: React.ReactNode;
  badgeBg: string;
  badgeColor: string;
  image: string;
  bulletColor: string;
  bullets: string[];
  footerIcon: React.ReactNode;
  footerText: string;
  footerBg: string;
  footerColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  badgeIcon,
  badgeBg,
  badgeColor,
  image,
  bulletColor,
  bullets,
  footerIcon,
  footerText,
  footerBg,
  footerColor,
}) => {
  return (
    <div className="flex flex-col bg-white rounded-3xl p-3 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      {/* Top Image Box */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 mb-4">
        {/* Top-Left Floating Badge Icon */}
        <div
          className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md ${badgeBg} ${badgeColor}`}
        >
          {badgeIcon}
        </div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between px-2 pb-1">
        <div>
          <h3 className={`text-lg font-bold mb-3 ${bulletColor}`}>{title}</h3>
          <ul className="space-y-2.5 mb-5">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${bulletColor}`} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Tag */}
        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium ${footerBg} ${footerColor}`}
        >
          {footerIcon}
          <span>{footerText}</span>
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const cards: FeatureCardProps[] = [
    {
      title: 'Local Tutors',
      badgeIcon: <MapPin className="w-4 h-4 text-emerald-600" />,
      badgeBg: 'bg-emerald-100',
      badgeColor: 'text-emerald-600',
      image:
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
      bulletColor: 'text-emerald-600',
      bullets: [
        'Find trusted tutors near you',
        'Personal attention & better learning',
        'One-to-one or small group sessions',
        'Subjects from school to competitive exams',
      ],
      footerIcon: <Users className="w-4 h-4 text-emerald-600" />,
      footerText: 'Near You. For You.',
      footerBg: 'bg-emerald-50',
      footerColor: 'text-emerald-700',
    },
    {
      title: 'Online Tutors',
      badgeIcon: <Video className="w-4 h-4 text-blue-600" />,
      badgeBg: 'bg-blue-100',
      badgeColor: 'text-blue-600',
      image:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      bulletColor: 'text-blue-600',
      bullets: [
        'Learn live from expert teachers',
        'Interactive live classes from home',
        'Flexible timing to fit your schedule',
        'All subjects & board curriculum covered',
      ],
      footerIcon: <Globe className="w-4 h-4 text-blue-600" />,
      footerText: 'Learn Live. Anywhere.',
      footerBg: 'bg-blue-50',
      footerColor: 'text-blue-700',
    },
    {
      title: 'Online Mentors',
      badgeIcon: <UserCheck className="w-4 h-4 text-purple-600" />,
      badgeBg: 'bg-purple-100',
      badgeColor: 'text-purple-600',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
      bulletColor: 'text-purple-600',
      bullets: [
        'Get guidance for your goals & career',
        'Personalized mentoring sessions',
        'Career & exam strategy by experts',
        'Support for college, job & study abroad goals',
      ],
      footerIcon: <Star className="w-4 h-4 text-purple-600" />,
      footerText: 'Guidance Growth. Success.',
      footerBg: 'bg-purple-50',
      footerColor: 'text-purple-700',
    },
  ];

  const highlights = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      bg: 'bg-blue-50',
      title: 'Verified & Trusted Tutors',
      desc: 'Only verified and experienced educators.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
      bg: 'bg-emerald-50',
      title: 'Learn Your Way',
      desc: 'Learn online or offline, at your convenience.',
    },
    {
      icon: <Target className="w-5 h-5 text-purple-500" />,
      bg: 'bg-purple-50',
      title: 'Achieve Your Goals',
      desc: 'Personalized guidance for better results.',
    },
    {
      icon: <Lock className="w-5 h-5 text-amber-500" />,
      bg: 'bg-amber-50',
      title: 'Safe & Secure Learning',
      desc: 'Your privacy and success is our priority.',
    },
  ];

  return (
    <section className="w-full bg-[#fdfdfd] py-12 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Heading, CTA & Mini Features */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>India's Largest Teacher Connect Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111827] leading-[1.2] mb-3">
              From Local Tutors to Expert Mentors —{' '}
              <span className="text-[#f95721] block sm:inline">All in One Place.</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-md">
              Find the right guidance for every subject, every class & every goal — all in one place.
            </p>

            {/* Download App Banner */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 p-3.5 bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 rounded-2xl mb-10 max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center shadow-md">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Download Our App Now!</h4>
                  <p className="text-xs text-slate-500">Learn. Connect. Grow — On the Go.</p>
                </div>
              </div>

              {/* App Store / Google Play Buttons */}
              <div className="flex gap-2">
                <button
                  type="button"
                  className="bg-black text-white px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-[10px] hover:opacity-90 transition-opacity"
                >
                  <span className="leading-none text-left">
                    <span className="block text-[8px] text-gray-400">GET IT ON</span>
                    Google Play
                  </span>
                </button>
                <button
                  type="button"
                  className="bg-black text-white px-2.5 py-1.5 rounded-lg flex items-center gap-1 text-[10px] hover:opacity-90 transition-opacity"
                >
                  <span className="leading-none text-left">
                    <span className="block text-[8px] text-gray-400">Download on the</span>
                    App Store
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* 4 Bottom Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 shadow-xs ${item.bg}`}
                >
                  {item.icon}
                </div>
                <h5 className="text-[11px] font-bold text-slate-800 leading-tight mb-0.5">
                  {item.title}
                </h5>
                <p className="text-[10px] text-slate-500 leading-tight">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3 Category Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {cards.map((card, idx) => (
            <FeatureCard key={idx} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;