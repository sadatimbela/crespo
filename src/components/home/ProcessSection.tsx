import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-[#F0EBE5] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left - Sticky Content */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="font-space-mono text-sm text-primary uppercase tracking-widest mb-6">How It Works</div>
              <h2 className="font-inter font-bold text-5xl text-[#111827] mb-6 leading-tight">
                Your Trusted Path to<br />
                <span className="italic text-primary text-4xl">Property Ownership</span>
              </h2>
              <p className="font-manrope font-light text-lg text-[#4b5563] mb-8 leading-relaxed">
                We've designed a clear, secure process specifically tailored for diaspora investors and local buyers
                seeking absolute certainty in the Tanzanian market.
              </p>
            </div>
          </div>

          {/* Right - Process Steps */}
          <div className="lg:col-span-8 space-y-12">
            {[
              {
                step: '01',
                title: 'Consultation',
                desc: 'We begin with a personalized session to understand your investment goals, budget, and location preferences, ensuring we find exactly what you are looking for.'
              },
              {
                step: '02',
                title: 'Property Selection',
                desc: 'Receive a curated list of prime opportunities that match your criteria. We provide detailed reports, virtual walkthroughs, and clear photos for every selection.'
              },
              {
                step: '03',
                title: 'Verification and Due Diligence',
                desc: 'Our team performs rigorous legal checks, verifying title deeds, survey maps, and historical ownership to ensure every property is 100% legitimate and debt-free.'
              },
              {
                step: '04',
                title: 'Purchase Process',
                desc: 'We guide you through the secure transaction phase, managing contract preparation, escrow-like protections, and ensuring your funds are handled with maximum security.'
              },
              {
                step: '05',
                title: 'Ownership Transfer',
                desc: 'Our professionals handle the entire registration and title transfer process with the Ministry of Lands, delivering your certified documents and keys effortlessly.'
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 border border-primary/20 bg-white group-hover:bg-primary group-hover:border-primary rounded-full flex items-center justify-center transition-all duration-300">
                      <span className="font-space-mono font-bold text-lg text-primary group-hover:text-white">{item.step}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-syne font-bold text-2xl text-[#111827] mb-4">{item.title}</h3>
                    <p className="font-manrope text-base text-[#4b5563] leading-relaxed max-w-[600px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {index < 4 && <div className="ml-7 mt-6 h-12 w-px bg-primary/10" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
