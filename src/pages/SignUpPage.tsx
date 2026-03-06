import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthHeader from '../components/auth/AuthHeader';
import WorkWithUsForm from '../components/auth/WorkWithUsForm';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (formData: any) => {
    try {
      setError(null);
      // In a real app, you'd send this to an API or Supabase table
      console.log('Lead captured on "Work with Us" page:', formData);

      // Optionally redirect after a few seconds if you want
      // setTimeout(() => navigate('/'), 3000);
    } catch (err: any) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center py-12 px-4 font-inter">
      <div className="max-w-[520px] w-full">
        {/* Logo */}
        <AuthHeader />

        {/* Work With Us Card */}
        <div className="bg-white border border-[#E6E0DA] rounded-2xl p-8 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-syne font-bold text-3xl text-[#221410] mb-2">
              Work With Us
            </h1>
            <p className="font-manrope font-extralight text-sm text-[#4B5563]">
              Tell us about your requirements and start your property journey in Tanzania today.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="font-manrope text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Form */}
          <WorkWithUsForm onSubmit={handleFormSubmit} />

        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-manrope font-medium text-sm text-[#64748B] hover:text-[#FF0000] transition-colors"
          >
            <span className="material-icons text-base">arrow_back</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
