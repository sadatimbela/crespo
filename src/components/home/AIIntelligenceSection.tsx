import React from 'react';

const AIIntelligenceSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-space-mono text-sm text-primary uppercase tracking-widest mb-4">Why Choose Us?</div>
          <h2 className="font-inter font-bold text-5xl text-[#111827] mb-6">Redefining Real Estate</h2>
          <p className="font-manrope font-light text-lg text-[#4b5563] max-w-[740px] mx-auto">
            We are modernizing the real estate landscape in Tanzania by prioritizing transparency and professional integrity.
            Our mission is to bridge the gap between dream and reality through verified opportunities and world-class service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="font-material-icons text-3xl text-primary">verified</span>
            </div>
            <h3 className="font-syne font-bold text-2xl text-[#111827] mb-4">Verified Opportunities</h3>
            <p className="font-manrope text-base text-[#6b7280] leading-relaxed">
              Every listing on our platform undergoes a rigorous verification process to ensure accuracy,
              legality, and complete peace of mind for Tanzanian investors and families.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="font-material-icons text-3xl text-primary">workspace_premium</span>
            </div>
            <h3 className="font-syne font-bold text-2xl text-[#111827] mb-4">Professional Excellence</h3>
            <p className="font-manrope text-base text-[#6b7280] leading-relaxed">
              Our team brings international standards of professional service to the local market,
              ensuring a smooth, ethical, and transparent transaction from start to finish.
            </p>
          </div>

          {/* Feature 1 */}
          <div className="bg-white border border-[#f3f4f6] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="font-material-icons text-3xl text-primary">public</span>
            </div>
            <h3 className="font-syne font-bold text-2xl text-[#111827] mb-4">Modernizing Tanzania</h3>
            <p className="font-manrope text-base text-[#6b7280] leading-relaxed">
              We leverage modern digital tools to streamline property search and acquisition,
              connecting you to prime opportunities across the United Republic with unprecedented efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntelligenceSection;
