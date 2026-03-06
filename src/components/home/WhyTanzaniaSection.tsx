import React, { useEffect, useRef, useState } from 'react';

interface ReasonCardProps {
    icon: string;
    title: string;
    description: string;
    stat: string;
    statLabel: string;
    index: number;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ icon, title, description, stat, statLabel, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s, box-shadow 0.3s ease, translate 0.3s ease`,
            }}
        >
            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[80px] transition-all duration-500 group-hover:bg-primary/10" />

            {/* Icon */}
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="font-material-icons text-3xl text-primary group-hover:text-white transition-colors duration-300">{icon}</span>
            </div>

            {/* Content */}
            <h3 className="font-syne font-bold text-xl text-[#111827] mb-3">{title}</h3>
            <p className="font-manrope text-sm text-[#6b7280] leading-relaxed mb-6">{description}</p>

            {/* Stat */}
            <div className="border-t border-gray-100 pt-4 flex items-end gap-2">
                <span className="font-space-mono font-bold text-2xl text-primary">{stat}</span>
                <span className="font-manrope text-xs text-[#9ca3af] mb-0.5">{statLabel}</span>
            </div>
        </div>
    );
};

const WhyTanzaniaSection: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerVisible, setHeaderVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
            { threshold: 0.2 }
        );
        if (headerRef.current) observer.observe(headerRef.current);
        return () => observer.disconnect();
    }, []);

    const reasons = [
        {
            icon: 'location_city',
            title: 'Rapid Urban Growth',
            description: 'Dar es Salaam is one of Africa\'s fastest-growing cities, with urban expansion creating immense demand for quality residential and commercial real estate.',
            stat: '5.6%',
            statLabel: 'annual urban growth rate',
        },
        {
            icon: 'trending_up',
            title: 'Rising Land Values',
            description: 'Prime land in Masaki, Oysterbay, and Zanzibar has appreciated dramatically over the last decade, offering investors significant long-term capital gains.',
            stat: '12%+',
            statLabel: 'average annual appreciation',
        },
        {
            icon: 'construction',
            title: 'Infrastructure Expansion',
            description: 'Billions in government and private investment are transforming Tanzania\'s infrastructure — from the SGR rail network to new airports, roads, and port expansions.',
            stat: '$10B+',
            statLabel: 'infrastructure investment pipeline',
        },
        {
            icon: 'flight_land',
            title: 'Diaspora Opportunity',
            description: 'With secure ownership laws and a supportive investment climate, Tanzania is increasingly attracting diaspora investors seeking to build wealth on home soil.',
            stat: '3M+',
            statLabel: 'Tanzanian diaspora globally',
        },
    ];

    return (
        <section id="invest-tanzania" className="relative bg-[#F0EBE5] py-16 md:py-28 overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-8 relative z-10">
                {/* Section Header */}
                <div
                    ref={headerRef}
                    className="text-center mb-16"
                    style={{
                        opacity: headerVisible ? 1 : 0,
                        transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.7s ease, transform 0.7s ease',
                    }}
                >
                    <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-[#111827] mb-4 md:mb-6">
                        Why Invest in <span className="text-primary">Tanzania?</span>
                    </h2>
                    <p className="font-manrope font-light text-lg text-[#4b5563] max-w-[680px] mx-auto leading-relaxed">
                        Tanzania is East Africa's hidden gem — a stable, high-growth market where strategic land
                        investment today can deliver exceptional returns tomorrow.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {reasons.map((reason, idx) => (
                        <ReasonCard key={idx} {...reason} index={idx} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyTanzaniaSection;
