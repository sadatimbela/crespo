import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import logoSrc from '../../../Assets/logo.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(8px)", "blur(12px)"]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/#hot-deals', label: 'Hot Deals' },
    { path: '/#why-choose-us', label: 'Why Choose Us?' },
    { path: '/#how-it-works', label: 'How It Works' },
    { path: '/#invest-tanzania', label: 'Invest in TZ' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ backgroundColor: `rgba(255, 255, 255, ${bgOpacity.get()})`, backdropFilter: backdropBlur }}
      className="sticky top-0 z-50 border-b border-[#E6D5C3]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <img src={logoSrc} alt="Crespo Real Estate Ltd" className="h-10 w-auto" />
          <span className="font-inter text-base sm:text-xl font-bold text-[#111827] hidden sm:inline">Crespo Real Estate Ltd</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-manrope transition-colors ${isActive(link.path)
                ? 'text-[#FF0000] font-semibold'
                : 'text-[#374151] hover:text-[#FF0000]'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/signup"
            className="bg-[#FF0000] text-white font-manrope font-bold px-6 py-2 rounded-lg hover:bg-[#B86851] transition-all hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#374151] hover:text-[#FF0000] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="font-material-icons text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 sm:top-20 left-0 w-full bg-white border-b border-[#E6D5C3] shadow-lg py-4 px-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-manrope text-lg py-2 transition-colors ${isActive(link.path)
                ? 'text-[#FF0000] font-semibold'
                : 'text-[#374151] hover:text-[#FF0000]'
                }`}
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-gray-100 my-2 pt-4 flex flex-col gap-4">
            <Link
              to="/signup"
              className="bg-[#FF0000] text-white font-manrope font-bold px-6 py-3 rounded-lg hover:bg-[#B86851] transition-all hover:shadow-lg text-center"
              onClick={closeMobileMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
