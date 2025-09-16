import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ReferralModal } from "./ReferralModal";

export function ReferEarn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* <section className="py-20 bg-gradient-to-r from-secondary color-hsla(25, 89%, 35%, 1.00);">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-black">
            <h2 className="text-4xl font-bold mb-6">Refer Your Friends & Earn Rewards!</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Help others join our community and earn up to ₹500 per referral! Share the gift of quality education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsModalOpen(true)}
                variant="outline"
                className="text-white hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
  style={{ backgroundColor: 'hsl(0, 62.8%, 30.6%)' }}
              >
                Refer Now
              </Button>
              <Button 
                variant="outline"
                 className="text-white hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
                   style={{ backgroundColor: 'hsl(0, 62.8%, 30.6%)' }}
              >
                Learn How It Works
              </Button>
            </div>
          </div>
        </div> */}
      {/* </section> */}


<section className="pt-20 pb-0 bg-gradient-to-r from-secondary to-white pt-13">

  <div className="max-w-7xl p-6 mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center text-black mb-12">
      <h2 className="text-4xl font-bold mb-6">Refer Your Friends & Earn Rewards!</h2>
      <p className="text-xl mb-4 opacity-90 max-w-2xl mx-auto">
        Help others join our community and earn up to ₹500 per referral! Share the gift of quality education.
      </p>
    </div>

    {/* Two cards in one row */}
    <div className="flex flex-col md:flex-row justify-center gap-8">
      {/* Card 1: Download App */}
      <div className="bg-white rounded-xl shadow-lg p-8 flex-1 max-w-md text-center">
        <h3 className="text-2xl font-semibold mb-4">Download Our App</h3>
        <p className="text-gray-700 mb-6">Get started with just one tap. Access learning and referrals on the go!</p>
        <Button
          variant="outline"
          className="text-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          style={{ backgroundColor: 'hsl(0, 62.8%, 30.6%)' }}
        >
          Download App
        </Button>
      </div>

      {/* Card 2: Refer Now */}
      <div className="bg-white rounded-xl shadow-lg p-8 flex-1 max-w-md text-center">
        <h3 className="text-2xl font-semibold mb-4">Refer & Earn</h3>
        <p className="text-gray-700 mb-6">Invite friends and earn ₹500 for every successful referral.</p>
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="outline"
          className="text-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          style={{ backgroundColor: 'hsl(0, 62.8%, 30.6%)' }}
        >
          Refer Now
        </Button>
      </div>
    </div>
  </div>
</section>


      <ReferralModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
