import React from 'react';
import { Flag, Award, MapPin } from 'lucide-react';

const PresenceSection = () => {
  const clients = [
    { name: 'Britannia', logo: 'BRITANNIA' },
    { name: 'Bikanervala', logo: 'BIKANERVALA' },
    { name: 'Parle', logo: 'PARLE' },
    { name: 'Patanjali', logo: 'PATANJALI' },
    { name: 'P.E.Initin', logo: 'P.E.INITIN' },
    { name: 'Bornn', logo: 'BORNN' },
    { name: 'Biale', logo: 'BIALE' },
    { name: 'Agson', logo: 'AGSON' },
    { name: 'Bonn', logo: 'BONN' }
  ];

  const states = [
    { name: 'Maharashtra', clients: 15, top: '45%', left: '25%' },
    { name: 'Uttar Pradesh', clients: 12, top: '28%', left: '38%' },
    { name: 'Gujarat', clients: 10, top: '38%', left: '18%' },
    { name: 'Karnataka', clients: 8, top: '58%', left: '28%' },
    { name: 'Tamil Nadu', clients: 9, top: '68%', left: '35%' },
    { name: 'West Bengal', clients: 7, top: '32%', left: '52%' },
    { name: 'Rajasthan', clients: 6, top: '32%', left: '25%' },
    { name: 'Telangana', clients: 8, top: '52%', left: '35%' }
  ];

  return (
    <section id="presence" className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201, 146, 63, 0.1) 35px, rgba(201, 146, 63, 0.1) 70px)' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 sm:mb-16 text-center">
          Our Presence <span className="text-[#c9923f]">Across India</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Map Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 sm:p-12 rounded-2xl border border-[#c9923f]/20 shadow-2xl hover:shadow-[#c9923f]/20 transition-all duration-500">
              {/* India Map SVG Placeholder */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {/* Simplified India Map Outline */}
                  <path
                    d="M200 50 L220 80 L240 100 L250 140 L270 180 L280 220 L285 260 L280 300 L270 340 L250 380 L230 420 L210 450 L190 470 L170 450 L150 420 L130 380 L110 340 L100 300 L95 260 L100 220 L110 180 L130 140 L150 100 L170 80 L190 60 Z"
                    fill="#1a1a1a"
                    stroke="#c9923f"
                    strokeWidth="2"
                    className="drop-shadow-[0_0_10px_rgba(201,146,63,0.3)]"
                  />
                  
                  {/* State Highlights */}
                  {states.map((state, index) => (
                    <g key={index}>
                      <circle
                        cx={`${parseFloat(state.left)}`}
                        cy={`${parseFloat(state.top)}`}
                        r="8"
                        fill="#c9923f"
                        className="animate-pulse"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                      <circle
                        cx={`${parseFloat(state.left)}`}
                        cy={`${parseFloat(state.top)}`}
                        r="15"
                        fill="none"
                        stroke="#c9923f"
                        strokeWidth="1"
                        opacity="0.3"
                        className="animate-ping"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                    </g>
                  ))}
                </svg>

                {/* State Info Tooltip (Example for UP) */}
                <div className="absolute top-1/4 right-0 bg-black/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-[#c9923f]/30 shadow-xl">
                  <div className="text-white font-semibold text-sm">Uttar Pradesh</div>
                  <div className="text-[#c9923f] text-xs">12 Clients</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-4 rounded-xl border border-[#c9923f]/20 text-center hover:border-[#c9923f]/50 transition-all duration-300">
                <Flag className="text-[#c9923f] mx-auto mb-2" size={24} />
                <div className="text-white text-sm">Made in India</div>
              </div>
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-4 rounded-xl border border-[#c9923f]/20 text-center hover:border-[#c9923f]/50 transition-all duration-300">
                <Award className="text-[#c9923f] mx-auto mb-2" size={24} />
                <div className="text-white text-sm">100+ Installations</div>
              </div>
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-4 rounded-xl border border-[#c9923f]/20 text-center hover:border-[#c9923f]/50 transition-all duration-300">
                <MapPin className="text-[#c9923f] mx-auto mb-2" size={24} />
                <div className="text-white text-sm">Pan India Presence</div>
              </div>
            </div>
          </div>

          {/* Client Logos */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-[#c9923f]/30 transition-all duration-300 hover:scale-105 flex items-center justify-center aspect-[4/3] group cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-[#c9923f] transition-colors duration-300">
                      {client.logo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;
