import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "John Mwita",
    location: "Toronto, Canada",
    text: "Investing in Dar es Salaam from Canada felt risky until I worked with Crespo. Their verification process gave me the confidence to buy our family home remotely.",
    rating: 5
  },
  {
    name: "Amani Soko",
    location: "Houston, USA",
    text: "The team at Crespo Real Estate is exceptional. They handled everything from due diligence to the final deed while I was halfway across the world.",
    rating: 5
  },
  {
    name: "Sarah Mbeki",
    location: "London, UK",
    text: "Transparency is rare in this market, but Crespo delivers it. The level of professionalism they show to we diaspora investors is truly world-class.",
    rating: 5
  },
  {
    name: "Baraka Elias",
    location: "Dodoma, Tanzania",
    text: "Found a perfect commercial plot in the capital. The local market expertise Crespo provides is far far superior to any other agency I've dealt with.",
    rating: 5
  },
  {
    name: "Mariam Juma",
    location: "Arusha, Tanzania",
    text: "Purchased a safari lodge property with ease. Their team knows Arusha inside out and ensured every legal requirement was satisfied before payment.",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  // We duplicate the array to create a seamless looping effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-[#FAF8F4] py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 mb-16">
        <div className="text-center">
          <div className="font-space-mono text-sm text-primary uppercase tracking-widest mb-4">Testimonials</div>
          <h2 className="font-syne font-bold text-5xl text-[#111827] mb-6">Voices of Trust</h2>
          <p className="font-manrope font-light text-lg text-[#6B7280] max-w-[640px] mx-auto">
            From the Tanzanian diaspora to local business leaders, see why Crespo Real Estate is the preferred partner for secure property investment.
          </p>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="flex relative items-center">
        {/* Gradients for soft edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAF8F4] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAF8F4] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -2160], // Perfect loop for 5 cards (400px each) + gaps (32px each)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
        >
          {duplicatedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[400px] flex-shrink-0 bg-white border border-[#E6E0DA] rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="material-icons text-[#FF0000] text-lg">star</span>
                ))}
              </div>

              <blockquote className="font-manrope text-base text-[#4b5563] leading-relaxed mb-8 italic">
                "{item.text}"
              </blockquote>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-[#F5F1E8] rounded-full flex items-center justify-center border border-[#E6E0DA]">
                  <span className="material-icons text-primary">person</span>
                </div>
                <div>
                  <div className="font-syne font-bold text-base text-[#111827]">{item.name}</div>
                  <div className="font-manrope text-sm text-primary font-medium tracking-wide">
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
