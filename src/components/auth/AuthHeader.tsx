import React from 'react';
import { Link } from 'react-router-dom';
import logoSrc from '../../../Assets/logo.png';

const AuthHeader: React.FC = () => {
  return (
    <Link to="/" className="flex items-center justify-center gap-3 mb-8">
      <img src={logoSrc} alt="Crespo Real Estate" className="h-12 w-auto" />
      <span className="font-syne text-3xl font-bold text-[#111827]">Crespo Real Estate</span>
    </Link>
  );
};

export default AuthHeader;
