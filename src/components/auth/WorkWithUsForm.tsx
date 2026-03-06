import React from 'react';
import { Mail, Phone, User, MessageSquare, ChevronDown, CheckCircle } from 'lucide-react';

interface WorkWithUsFormProps {
    onSubmit: (data: any) => void;
}

const WorkWithUsForm: React.FC<WorkWithUsFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        phone: '',
        inquiryType: 'Buying',
        budget: '',
        message: '',
        agreeToContact: false
    });
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData({
            ...formData,
            [name]: val
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        console.log('Form data:', formData);
        setIsSubmitted(true);
        onSubmit(formData);
    };

    if (isSubmitted) {
        return (
            <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-syne font-bold text-2xl text-[#111827] mb-2">Thank You!</h3>
                <p className="font-manrope text-sm text-[#64748B]">
                    Your inquiry has been received. Our team will contact you shortly to discuss your real estate needs in Tanzania.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
                <label className="block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider mb-2">
                    Full Name
                </label>
                <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-[#F5F1E8] border border-[#E6E0DA] rounded-lg pl-12 pr-4 py-3 font-manrope font-extralight text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#FF0000] transition-colors"
                        required
                    />
                </div>
            </div>

            {/* Email Address */}
            <div>
                <label className="block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider mb-2">
                    Email Address
                </label>
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@example.com"
                        className="w-full bg-[#F5F1E8] border border-[#E6E0DA] rounded-lg pl-12 pr-4 py-3 font-manrope font-extralight text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#FF0000] transition-colors"
                        required
                    />
                </div>
            </div>

            {/* Phone Number */}
            <div>
                <label className="block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider mb-2">
                    Phone Number
                </label>
                <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+255 123 456 789"
                        className="w-full bg-[#F5F1E8] border border-[#E6E0DA] rounded-lg pl-12 pr-4 py-3 font-manrope font-extralight text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#FF0000] transition-colors"
                        required
                    />
                </div>
            </div>

            {/* Inquiry Type & Budget Range */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider mb-2">
                        Inquiry Type
                    </label>
                    <div className="relative">
                        <select
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleInputChange}
                            className="w-full bg-[#F5F1E8] border border-[#E6E0DA] rounded-lg px-4 py-3 font-manrope font-extralight text-sm text-[#0F172A] focus:outline-none focus:border-[#FF0000] transition-colors appearance-none"
                            required
                        >
                            <option value="Buying">Buying</option>
                            <option value="Selling">Selling</option>
                            <option value="Investing">Investing</option>
                            <option value="Diaspora Services">Diaspora Services</option>
                            <option value="Property Management">Property Management</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8] pointer-events-none" />
                    </div>
                </div>

                <div>
                    <label className="block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider mb-2">
                        Budget (Tsh)
                    </label>
                    <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        placeholder="e.g. 500M"
                        className="w-full bg-[#F5F1E8] border border-[#E6E0DA] rounded-lg px-4 py-3 font-manrope font-extralight text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#FF0000] transition-colors"
                    />
                </div>
            </div>

            {/* Message */}
            <div>
                <label className="block font-manrope font-extralight text-xs text-[#64748B] uppercase tracking-wider mb-2">
                    Your Message
                </label>
                <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#94A3B8]" />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        className="w-full bg-[#F5F1E8] border border-[#E6E0DA] rounded-lg pl-12 pr-4 py-3 font-manrope font-extralight text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#FF0000] transition-colors resize-none"
                        required
                    ></textarea>
                </div>
            </div>

            {/* Consent Checkbox */}
            <div>
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        name="agreeToContact"
                        checked={formData.agreeToContact}
                        onChange={handleInputChange}
                        className="w-4 h-4 mt-0.5 rounded border-[#E6E0DA] text-[#FF0000] focus:ring-[#FF0000]"
                        required
                    />
                    <span className="font-manrope font-extralight text-[11px] leading-snug text-[#64748B]">
                        I agree to be contacted by Crespo Real Estate representatives regarding my inquiry using the information provided.
                    </span>
                </label>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-[#FF0000] hover:bg-[#C05621] text-white font-manrope font-bold text-base py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
                Submit Inquiry
            </button>
        </form>
    );
};

export default WorkWithUsForm;
