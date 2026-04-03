import React from 'react';
import { Flag, Award, MapPin } from 'lucide-react';

const PresenceSection = () => {
  const clients = [
    { name: 'BRITANNIA', color: '#d32f2f' },
    { name: 'BIKANERVALA', color: '#ff6f00' },
    { name: 'PARLE', color: '#0277bd' },
    { name: 'PATANJALI', color: '#558b2f' },
    { name: 'P.E.INITIN', color: '#1976d2' },
    { name: 'BORNN', color: '#c62828' },
    { name: 'BIALE', color: '#d32f2f' },
    { name: 'AGSON', color: '#283593' },
    { name: 'BONN', color: '#d32f2f' }
  ];

  return (
    <section id="presence" className="py-20 bg-[#0f0f0f] relative">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">
          Our Presence Across India
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: India Map */}
          <div className="space-y-8">
            {/* Map Container */}
            <div className="bg-gradient-to-br from-[#1a1410] to-[#0f0f0f] rounded-2xl p-10 border border-[#c9923f]/30 relative">
              {/* India Map SVG */}
              <div className="relative w-full max-w-md mx-auto">
                <svg viewBox="0 0 500 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                  {/* India outline path */}
                  <path
                    d="M 250 50 
                       L 280 70 L 310 90 L 330 120 L 340 150 L 355 180 
                       L 365 220 L 368 260 L 365 300 L 355 340 L 340 380 
                       L 320 420 L 295 460 L 270 490 L 245 510 L 220 520 
                       L 195 510 L 170 490 L 145 460 L 125 420 L 110 380 
                       L 100 340 L 95 300 L 98 260 L 105 220 L 120 180 
                       L 140 150 L 160 120 L 185 90 L 215 70 Z"
                    fill="url(#indiaGradient)"
                    stroke="#c9923f"
                    strokeWidth="2"
                    filter="url(#glow)"
                  />
                  
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#2a2015', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#1a1410', stopOpacity: 1 }} />
                    </linearGradient>
                    
                    {/* Glow filter */}
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Glowing markers for major cities/states */}
                  <circle cx="280" cy="200" r="6" fill="#ffd700" opacity="0.9">
                    <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="280" cy="200" r="12" fill="none" stroke="#ffd700" strokeWidth="1" opacity="0.4">
                    <animate attributeName="r" values="12;20;12" dur="2s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="150" cy="250" r="6" fill="#ffd700" opacity="0.9">
                    <animate attributeName="r" values="6;8;6" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="150" cy="250" r="12" fill="none" stroke="#ffd700" strokeWidth="1" opacity="0.4">
                    <animate attributeName="r" values="12;20;12" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="200" cy="350" r="6" fill="#ffd700" opacity="0.9">
                    <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="350" r="12" fill="none" stroke="#ffd700" strokeWidth="1" opacity="0.4">
                    <animate attributeName="r" values="12;20;12" dur="3s" repeatCount="indefinite" />
                  </circle>
                </svg>
                
                {/* Tooltip */}
                <div className="absolute top-1/4 right-4 bg-black/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#c9923f]/40">
                  <div className="text-white font-semibold text-sm">Uttar Pradesh</div>
                  <div className="text-[#c9923f] text-xs">12 Clients</div>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-[#1a1410] to-[#0f0f0f] rounded-lg p-4 border border-[#c9923f]/20 text-center hover:border-[#c9923f]/50 transition-all">
                <Flag className="text-[#c9923f] mx-auto mb-2" size={24} />
                <div className="text-white/90 text-sm font-medium">Made in India</div>
              </div>
              <div className="bg-gradient-to-br from-[#1a1410] to-[#0f0f0f] rounded-lg p-4 border border-[#c9923f]/20 text-center hover:border-[#c9923f]/50 transition-all">
                <Award className="text-[#c9923f] mx-auto mb-2" size={24} />
                <div className="text-white/90 text-sm font-medium">100+ Installations</div>
              </div>
              <div className="bg-gradient-to-br from-[#1a1410] to-[#0f0f0f] rounded-lg p-4 border border-[#c9923f]/20 text-center hover:border-[#c9923f]/50 transition-all">
                <MapPin className="text-[#c9923f] mx-auto mb-2" size={24} />
                <div className="text-white/90 text-sm font-medium">Pan India Presence</div>
              </div>
            </div>
          </div>

          {/* Right: Client Logos */}
          <div className="grid grid-cols-3 gap-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 flex items-center justify-center aspect-[4/3] hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <div 
                    className="text-xl font-bold tracking-tight"
                    style={{ color: client.color }}
                  >
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;
