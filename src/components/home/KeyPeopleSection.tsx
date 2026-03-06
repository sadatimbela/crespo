import React from 'react';
import teamImg from '../../../Assets/team/team.PNG';

const KeyPeopleSection: React.FC = () => {
    const team = [
        {
            name: 'Adam Mdoe',
            position: 'Founder & CEO',
            image: teamImg
        },
        {
            name: 'Nia Mboya',
            position: 'Head of Operations',
            image: teamImg
        },
        {
            name: 'Peter Moshi',
            position: 'Principal Legal Advisor',
            image: teamImg
        },
        {
            name: 'Zahara Hamisi',
            position: 'Diaspora Relations Manager',
            image: teamImg
        }
    ];

    return (
        <section id="leadership" className="bg-white py-16 md:py-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="font-space-mono text-sm text-primary uppercase tracking-widest mb-4">Our Key People</div>
                    <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl text-[#111827] mb-4 md:mb-6">Meet Our Leadership</h2>
                    <p className="font-manrope font-light text-lg text-[#4b5563] max-w-[740px] mx-auto">
                        Our team brings together decades of local expertise and legal precision to ensure
                        your investment journey in Tanzania is secure and successful.
                    </p>
                </div>

                {/* People Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((person, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl bg-[#F8F6F6] transition-all hover:shadow-xl">
                            <div className="aspect-[4/5] relative overflow-hidden">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=0000FF&color=fff&size=512`;
                                    }}
                                />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="font-syne font-bold text-xl text-white mb-1">{person.name}</h3>
                                    <p className="font-manrope text-sm text-white/80">{person.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyPeopleSection;
