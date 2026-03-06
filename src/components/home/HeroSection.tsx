import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import happyHomeowner1 from '../../images/Happy Homeowners_1.jpg';
import happyHomeowner2 from '../../images/Happy Homeowners_2.jpg';
import happyHomeowner3 from '../../images/values.PNG';
import rightFeatureCard from '../../images/hero.PNG';

const HeroSection: React.FC = () => {
  const propertyImages = [
    happyHomeowner1,
    happyHomeowner2,
    happyHomeowner3,
    rightFeatureCard,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section className="relative bg-[#F8F6F6] pt-20 pb-32 overflow-hidden">
      {/* Background decorative blurs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute right-0 top-14 w-64 h-64 bg-[rgba(236,70,19,0.1)] rounded-full blur-[32px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute left-[738px] bottom-22 w-64 h-64 bg-[rgba(254,215,170,0.2)] rounded-full blur-[32px]"
      />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Heading */}
            <motion.h1 variants={itemVariants} className="font-inter text-[56px] lg:text-[70px] leading-[1.1] text-[#111827] mb-8">
              Discover Your<br />
              <span className="italic text-primary">Dream Home</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="font-manrope font-light text-xl leading-7 text-[#4b5563] mb-12 max-w-[676px]">
              The direct path to exclusive properties. Our team curates the market's
              finest opportunities tailored specifically to your needs, ensuring transparency
              at every step.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <Link to="/properties" className="bg-primary text-white font-manrope font-bold text-lg px-8 py-4 rounded-xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.2)] hover:opacity-90 transition-all hover:shadow-xl inline-flex items-center">
                Explore Properties
                <span className="font-material-icons text-sm ml-2">arrow_forward</span>
              </Link>
              <Link to="/contact" className="border-2 border-gray-300 text-[#374151] font-manrope font-bold text-lg px-8 py-4 rounded-xl hover:border-primary hover:text-primary transition-all inline-block">
                Work With Us
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <img src={propertyImages[0]} alt="" className="w-10 h-10 rounded-full border-2 border-[#f8f6f6] object-cover" />
                <img src={propertyImages[1]} alt="" className="w-10 h-10 rounded-full border-2 border-[#f8f6f6] object-cover" />
                <img src={propertyImages[2]} alt="" className="w-10 h-10 rounded-full border-2 border-[#f8f6f6] object-cover" />
                <div className="w-10 h-10 bg-[#111827] rounded-full border-2 border-[#f8f6f6] flex items-center justify-center">
                  <span className="font-manrope font-bold text-xs text-white">+2k</span>
                </div>
              </div>
              <span className="font-manrope text-sm text-[#6b7280]">
                Join 2,000+ happy homeowners
              </span>
            </motion.div>
          </motion.div>

          {/* Right - Featured Property Card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_#e5e7eb]">
              <div className="relative h-[625px]">
                <img
                  src={propertyImages[3]}
                  alt="Villa Serenity"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Property Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/90 border border-white/20 rounded-xl p-4 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-inter font-bold text-lg text-[#111827] mb-1">Masaki Waterfront Villa</h3>
                      <p className="font-space-mono text-xs text-[#6b7280] uppercase tracking-wide">Masaki, Dar es Salaam</p>
                    </div>
                  </div>
                  <div className="border-t border-[#e5e7eb] pt-3 flex items-center justify-between">
                    <span className="font-space-mono text-sm text-[#4b5563]">Tsh 2,500,000,000</span>
                    <div className="flex items-center gap-4 text-[#4b5563]">
                      <div className="flex items-center gap-1">
                        <span className="font-material-icons text-xs">bed</span>
                        <span className="font-manrope text-sm">4</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-material-icons text-xs">shower</span>
                        <span className="font-manrope text-sm">3.5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
