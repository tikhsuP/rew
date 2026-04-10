import React from 'react';
import { Flag, Award, MapPin } from 'lucide-react';

const PresenceSection = () => {
  const clients = [
    { name: 'BRITANNIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Britannia_Industries_Logo.svg/320px-Britannia_Industries_Logo.svg.png' },
    { name: 'BIKANERVALA', color: '#ff6f00' },
    { name: 'PARLE', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_Qi2d3pKMaVxYWkMJnV6qAQH9K3eNdM6Rw&s' },
    { name: 'PATANJALI', color: '#558b2f' },
    { name: 'P.E.INITIN', color: '#1b5e20' },
    { name: 'Bornn', color: '#ffc107' },
    { name: 'Biale', color: '#d32f2f' },
    { name: 'Agson', color: '#1565c0' },
    { name: 'Bonn', color: '#c62828' }
  ];

  return (
    <section id="presence" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
          Our Presence Across India
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: India Map */}
          <div className="space-y-6">
            {/* Map Container */}
            <div className="relative">
              {/* Stylized India Map with golden glow */}
              <div className="relative w-full max-w-lg mx-auto h-[500px] bg-gradient-to-br from-[#2a2015]/30 to-transparent rounded-lg border border-[#c9923f]/20 p-8">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {/* India outline */}
                  <path
                    d="M 200 30 L 230 55 L 255 85 L 270 120 L 280 160 L 290 200 L 293 240 L 290 280 L 280 320 L 265 360 L 245 400 L 220 435 L 195 455 L 170 435 L 145 400 L 125 360 L 110 320 L 100 280 L 97 240 L 100 200 L 110 160 L 125 120 L 150 85 L 175 55 Z"
                    fill="url(#mapGradient)"
                    stroke="#c9923f"
                    strokeWidth="1.5"
                    opacity="0.9"
                  />
                  
                  <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#c9923f', stopOpacity: 0.3 }} />
                      <stop offset="50%" style={{ stopColor: '#d4a574', stopOpacity: 0.2 }} />
                      <stop offset="100%" style={{ stopColor: '#c9923f', stopOpacity: 0.3 }} />
                    </linearGradient>
                    
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Glowing points for major regions */}
                  <g filter="url(#glow)">
                    <circle cx="200" cy="150" r="8" fill="#ffd700">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="150" cy="200" r="8" fill="#ffd700">
                      <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="210" cy="280" r="8" fill="#ffd700">
                      <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </svg>
                
                {/* Uttar Pradesh Label */}
                <div className="absolute top-1/4 right-8 bg-black/80 backdrop-blur-sm px-4 py-2 rounded border border-[#c9923f]/40">
                  <div className="text-white font-semibold text-sm">Uttar Pradesh</div>
                  <div className="text-[#c9923f] text-xs">12 Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Client Logos + Stats */}
          <div className="space-y-6">
            {/* Stats Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-[#1a1410] px-4 py-2 rounded border border-[#c9923f]/20">
                <Flag className="text-[#c9923f]" size={18} />
                <span className="text-white/90 text-sm">Made in India</span>
              </div>
              <div className="flex items-center gap-2 bg-[#1a1410] px-4 py-2 rounded border border-[#c9923f]/20">
                <Award className="text-[#c9923f]" size={18} />
                <span className="text-white/90 text-sm">100+ Installations</span>
              </div>
              <div className="flex items-center gap-2 bg-[#1a1410] px-4 py-2 rounded border border-[#c9923f]/20">
                <MapPin className="text-[#c9923f]" size={18} />
                <span className="text-white/90 text-sm">Pan India Presence</span>
              </div>
            </div>

            {/* Client Logos Grid */}
            <div className="grid grid-cols-3 gap-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 flex items-center justify-center h-24 hover:shadow-xl transition-all hover:scale-105"
                >
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} className="max-w-full max-h-12 object-contain" />
                  ) : (
                    <div 
                      className="text-lg font-bold text-center"
                      style={{ color: client.color }}
                    >
                      {client.name}
                    </div>
                  )}
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
