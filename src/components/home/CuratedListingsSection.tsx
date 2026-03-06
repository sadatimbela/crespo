import React from 'react';
import { Link } from 'react-router-dom';
import glassPavilion from '../../images/The Glass Pavilion.jpg';
import skylinePenthouse from '../../images/Skyline Penthouse.jpg';
import desertOasis from '../../images/Desert Oasis.jpg';
import coastalRetreat from '../../images/Coastal Retreat.jpg';

const CuratedListingsSection: React.FC = () => {
  const propertyImages = [
    glassPavilion,
    skylinePenthouse,
    desertOasis,
    coastalRetreat
  ];

  const properties = [
    { title: "Masaki Waterfront Villa", location: "Masaki, Dar es Salaam", price: "Tsh 2.5B", image: propertyImages[0] },
    { title: "Nungwi Beach Resort", location: "Nungwi, Zanzibar", price: "Tsh 4.8B", image: propertyImages[1] },
    { title: "Oysterbay Penthouse", location: "Oysterbay, Dar es Salaam", price: "Tsh 1.2B", image: propertyImages[2] },
    { title: "Arusha Safari Estate", location: "Arumeru, Arusha", price: "Tsh 850M", image: propertyImages[3] },
    { title: "Kigamboni Coastal Plot", location: "Kigamboni, Dar es Salaam", price: "Tsh 450M", image: propertyImages[0] },
    { title: "Mbezi Beach Mansion", location: "Mbezi Beach, Dar es Salaam", price: "Tsh 1.8B", image: propertyImages[1] },
    { title: "Dodoma Executive Home", location: "Area D, Dodoma", price: "Tsh 650M", image: propertyImages[2] },
    { title: "Paje Breeze Villa", location: "Paje, Zanzibar", price: "Tsh 950M", image: propertyImages[3] },
    { title: "Mikocheni Modern Townhouse", location: "Mikocheni, Dar es Salaam", price: "Tsh 750M", image: propertyImages[0] },
    { title: "Kilimanjaro View Lodge", location: "Machame, Kilimanjaro", price: "Tsh 1.1B", image: propertyImages[1] },
    { title: "Iringa Highland Retreat", location: "Gangilonga, Iringa", price: "Tsh 350M", image: propertyImages[2] },
    { title: "Bagamoyo Heritage Plot", location: "Bagamoyo, Pwani", price: "Tsh 280M", image: propertyImages[3] },
  ];

  return (
    <section id="hot-deals" className="bg-[#F9F7F2] py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
          <path d="M0 0h20v20H0z" fill="var(--terracotta-primary)" opacity="0.05" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <div className="font-sans font-bold text-sm text-primary uppercase tracking-widest mb-4">Featured Properties</div>
            <h2 className="font-inter font-bold text-5xl text-[#111827]">Hot Deals 🔥</h2>
          </div>

          <Link to="/properties" className="flex items-center gap-2 font-manrope font-bold text-primary hover:gap-4 transition-all">
            View All Properties
            <span className="font-material-icons text-sm">arrow_forward</span>
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((prop, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)] relative group h-[380px]"
            >
              <img
                src={prop.image}
                alt={prop.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-inter font-bold text-xl text-white mb-1">{prop.title}</h3>
                <p className="font-manrope text-sm text-white/70 mb-3">{prop.location}</p>
                <div className="flex justify-between items-center">
                  <span className="font-space-mono text-sm text-white font-bold">{prop.price}</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-material-icons text-white text-sm">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedListingsSection;
