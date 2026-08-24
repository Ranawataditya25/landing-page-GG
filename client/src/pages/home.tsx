import { Header } from "@/components/Header";
import {Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ReferEarn } from "@/components/ReferEarn";
import { EarlyRegistration } from "@/components/EarlyRegistration";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import News from "@/components/News";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import  Compitive  from "@/components/Compitive";
import  TopMentors  from "@/components/TopMentor";
import PsychologicalSupportMentor from "@/components/PsychologicalSupportMentor"
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />

      <Compitive />
      <TopMentors />
      <PsychologicalSupportMentor />
      <ReferEarn />
      
      {/* <EarlyRegistration /> */}
      <Testimonials />
      <Contact />
      {/* <News /> */}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
