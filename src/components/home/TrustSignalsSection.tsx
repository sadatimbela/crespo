import React from 'react';
import teamImage from '../../images/values.PNG';

const TrustSignalsSection: React.FC = () => {
  const values = [
    {
      icon: 'handshake',
      title: 'Integrity',
      description: 'We operate with unwavering honesty in every transaction. What we promise, we deliver — no exceptions, no hidden agendas.',
    },
    {
      icon: 'favorite',
      title: 'Client Commitment',
      description: 'Our clients are our priority at every step. We listen first, then act — ensuring every individual feels truly seen and supported.',
    },
    {
      icon: 'workspace_premium',
      title: 'Professionalism',
      description: 'From first inquiry to final handover, world-class standards define every interaction we have with our buyers, sellers, and partners.',
    },
    {
      icon: 'shield',
      title: 'Trust & Security',
      description: 'Every listing is legally verified. Your investment is protected through rigorous due diligence so you can proceed with complete peace of mind.',
    },
    {
      icon: 'map',
      title: 'Local Market Expertise',
      description: 'Rooted in Tanzania, our team brings deep knowledge of local laws, neighborhoods, and market dynamics that no outsider can replicate.',
    },
  ];

  return (
    <section id="our-values" className="bg-[#F8F6F6] py-24">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-inter font-bold text-5xl text-[#111827] mb-6">Our Values</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with Border */}
          <div className="relative">
            <div className="border-2 border-primary/20 rounded-2xl p-4">
              <img
                src={teamImage}
                alt="Crespo Real Estate team"
                className="rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full"
              />
            </div>
          </div>

          {/* Right - Values */}
          <div className="space-y-8">
            {values.map((value, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center">
                    <span className="font-material-icons text-2xl text-primary">{value.icon}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-syne font-bold text-xl text-[#111827] mb-1">{value.title}</h4>
                  <p className="font-manrope text-sm text-[#4b5563] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;
