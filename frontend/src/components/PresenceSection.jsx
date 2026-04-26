import React, { useState } from 'react';
import { Flag, Award, MapPin } from 'lucide-react';

const PresenceSection = () => {
  const [activeState, setActiveState] = useState(null);

  const clients = [
    { name: 'Bakked Diamond', state: 'UP' },
    { name: 'Bread-G', state: 'UP' },
    { name: 'HAFIZ A SATTAR SONS SEWAI', state: 'UP' },
    { name: 'Jail Police', state: 'UP' },
    { name: 'Ashok', state: 'Delhi' },
    { name: 'Goldiee Masale', state: 'UP' },
    { name: 'Bran-O', state: 'Haryana' },
    { name: 'Popular', state: 'Kerala' },
    { name: 'Gomti Food Products', state: 'UP' },
    { name: 'Milkmade', state: 'Punjab' },
    { name: 'Swati Food Products', state: 'UP' },
    { name: 'Baked Well', state: 'Maharashtra' },
    { name: 'Nova', state: 'Karnataka' },
    { name: 'Mother', state: 'Tamil Nadu' },
    { name: 'OnceMore Rainforest', state: 'Kerala' },
    { name: 'Maheshwari Sweets', state: 'Rajasthan' },
    { name: 'thekaranfoods', state: 'UP' },
    { name: 'Paradise', state: 'Telangana' },
    { name: 'Veetaday Industries', state: 'Maharashtra' },
    { name: 'Good Morning Nutritive India', state: 'UP' },
    { name: 'Kalory', state: 'West Bengal' },
    { name: 'Amrit Taaza', state: 'Punjab' },
    { name: 'Anand Bakery', state: 'Gujarat' },
    { name: 'Mithila Naturals', state: 'Bihar' },
    { name: 'Sangri-La Nutri Food Products', state: 'Madhya Pradesh' },
    { name: 'SDZ FOOD PRODUCTS', state: 'Andhra Pradesh' },
    { name: 'GS Manglani', state: 'Rajasthan' },
    { name: 'Meera Bakers', state: 'UP' },
    { name: 'Badshah', state: 'Maharashtra' },
    { name: 'Banas Dairy', state: 'Gujarat' },
    { name: 'Amul', state: 'Gujarat' },
    { name: 'Britannia', state: 'Karnataka' },
    { name: 'Parle', state: 'Maharashtra' }
  ];

  // Count clients per state
  const stateCounts = clients.reduce((acc, client) => {
    acc[client.state] = (acc[client.state] || 0) + 1;
    return acc;
  }, {});

  const getStateColor = (stateId) => {
    if (activeState === stateId) {
      return '#ffd700';
    }
    if (stateCounts[stateId]) {
      return '#c9923f';
    }
    return '#3a3a3a';
  };

  const getStateOpacity = (stateId) => {
    if (activeState === stateId) {
      return '1';
    }
    if (stateCounts[stateId]) {
      return '0.7';
    }
    return '0.3';
  };

  return (
    <section id="presence" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
          Our Presence Across India
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Interactive India Map */}
          <div className="space-y-6">
            <div className="relative bg-gradient-to-br from-[#1a1410]/50 to-[#0f0f0f] rounded-xl p-8 border border-[#c9923f]/20">
              <svg viewBox="0 0 800 900" className="w-full h-auto drop-shadow-2xl">
                <defs>
                  <filter id="shadow3d">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                    <feOffset dx="2" dy="4" result="offsetblur"/>
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.5"/>
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Jammu & Kashmir */}
                <path id="JK" d="M 280 50 L 320 60 L 340 80 L 350 110 L 340 140 L 320 150 L 290 145 L 270 130 L 260 100 Z" 
                  fill={getStateColor('JK')} opacity={getStateOpacity('JK')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100" />

                {/* Himachal Pradesh */}
                <path id="HP" d="M 290 145 L 320 150 L 340 165 L 330 180 L 310 185 L 285 175 Z" 
                  fill={getStateColor('HP')} opacity={getStateOpacity('HP')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100" />

                {/* Punjab */}
                <path id="Punjab" d="M 285 175 L 310 185 L 315 200 L 305 215 L 280 210 L 270 195 Z" 
                  fill={getStateColor('Punjab')} opacity={getStateOpacity('Punjab')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('Punjab')} onMouseLeave={() => setActiveState(null)} />

                {/* Haryana */}
                <path id="Haryana" d="M 280 210 L 305 215 L 310 230 L 300 245 L 275 240 Z" 
                  fill={getStateColor('Haryana')} opacity={getStateOpacity('Haryana')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('Haryana')} onMouseLeave={() => setActiveState(null)} />

                {/* Delhi */}
                <path id="Delhi" d="M 290 230 L 300 235 L 295 245 L 285 240 Z" 
                  fill={getStateColor('Delhi')} opacity={getStateOpacity('Delhi')} stroke="#ffd700" strokeWidth="2" filter="url(#glow)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('Delhi')} onMouseLeave={() => setActiveState(null)} />

                {/* Uttar Pradesh */}
                <path id="UP" d="M 300 245 L 340 250 L 380 260 L 410 275 L 430 290 L 435 310 L 425 330 L 400 340 L 370 335 L 340 325 L 310 315 L 285 300 L 275 280 L 280 260 Z" 
                  fill={getStateColor('UP')} opacity={getStateOpacity('UP')} stroke="#c9923f" strokeWidth="1.5" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('UP')} onMouseLeave={() => setActiveState(null)} />

                {/* Rajasthan */}
                <path id="Rajasthan" d="M 230 250 L 275 260 L 280 280 L 285 300 L 270 320 L 250 335 L 220 330 L 195 310 L 185 280 L 200 260 Z" 
                  fill={getStateColor('Rajasthan')} opacity={getStateOpacity('Rajasthan')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('Rajasthan')} onMouseLeave={() => setActiveState(null)} />

                {/* Gujarat */}
                <path id="Gujarat" d="M 170 340 L 220 350 L 240 370 L 235 395 L 220 415 L 195 420 L 170 410 L 155 390 L 150 365 Z" 
                  fill={getStateColor('Gujarat')} opacity={getStateOpacity('Gujarat')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('Gujarat')} onMouseLeave={() => setActiveState(null)} />

                {/* Madhya Pradesh */}
                <path id="Madhya Pradesh" d="M 250 335 L 310 340 L 350 350 L 370 365 L 360 390 L 340 405 L 310 410 L 280 405 L 250 395 L 235 375 Z" 
                  fill={getStateColor('Madhya Pradesh')} opacity={getStateOpacity('Madhya Pradesh')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('Madhya Pradesh')} onMouseLeave={() => setActiveState(null)} />

                {/* Maharashtra */}
                <path id="Maharashtra" d="M 220 420 L 265 425 L 300 435 L 320 455 L 315 480 L 290 495 L 260 490 L 230 475 L 210 455 Z" 
                  fill={getStateColor('Maharashtra')} opacity={getStateOpacity('Maharashtra')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('Maharashtra')} onMouseLeave={() => setActiveState(null)} />

                {/* Karnataka */}
                <path id="Karnataka" d="M 260 510 L 300 515 L 330 530 L 335 555 L 320 580 L 290 585 L 260 575 L 245 555 Z" 
                  fill={getStateColor('Karnataka')} opacity={getStateOpacity('Karnataka')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('Karnataka')} onMouseLeave={() => setActiveState(null)} />

                {/* Kerala */}
                <path id="Kerala" d="M 250 600 L 275 610 L 280 640 L 270 670 L 250 680 L 230 670 L 225 645 L 235 620 Z" 
                  fill={getStateColor('Kerala')} opacity={getStateOpacity('Kerala')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('Kerala')} onMouseLeave={() => setActiveState(null)} />

                {/* Tamil Nadu */}
                <path id="Tamil Nadu" d="M 290 590 L 330 600 L 360 620 L 370 650 L 355 680 L 330 690 L 300 685 L 280 670 L 275 645 L 285 615 Z" 
                  fill={getStateColor('Tamil Nadu')} opacity={getStateOpacity('Tamil Nadu')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('Tamil Nadu')} onMouseLeave={() => setActiveState(null)} />

                {/* Andhra Pradesh */}
                <path id="Andhra Pradesh" d="M 335 490 L 380 500 L 410 520 L 415 545 L 400 570 L 370 575 L 340 565 L 325 540 Z" 
                  fill={getStateColor('Andhra Pradesh')} opacity={getStateOpacity('Andhra Pradesh')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('Andhra Pradesh')} onMouseLeave={() => setActiveState(null)} />

                {/* Telangana */}
                <path id="Telangana" d="M 340 455 L 370 465 L 380 485 L 370 505 L 345 510 L 325 495 Z" 
                  fill={getStateColor('Telangana')} opacity={getStateOpacity('Telangana')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('Telangana')} onMouseLeave={() => setActiveState(null)} />

                {/* Chhattisgarh */}
                <path id="Chhattisgarh" d="M 370 370 L 410 380 L 425 400 L 420 425 L 395 435 L 365 430 L 350 410 Z" 
                  fill={getStateColor('Chhattisgarh')} opacity={getStateOpacity('Chhattisgarh')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100" />

                {/* Odisha */}
                <path id="Odisha" d="M 425 400 L 460 410 L 475 435 L 470 465 L 450 480 L 420 475 L 400 455 L 405 425 Z" 
                  fill={getStateColor('Odisha')} opacity={getStateOpacity('Odisha')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100" />

                {/* West Bengal */}
                <path id="West Bengal" d="M 435 310 L 470 320 L 490 340 L 495 365 L 480 385 L 455 390 L 430 380 L 420 355 Z" 
                  fill={getStateColor('West Bengal')} opacity={getStateOpacity('West Bengal')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('West Bengal')} onMouseLeave={() => setActiveState(null)} />

                {/* Bihar */}
                <path id="Bihar" d="M 400 290 L 435 295 L 455 310 L 450 330 L 425 340 L 395 335 Z" 
                  fill={getStateColor('Bihar')} opacity={getStateOpacity('Bihar')} stroke="#c9923f" strokeWidth="1" filter="url(#shadow3d)"
                  className="transition-all duration-300 cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setActiveState('Bihar')} onMouseLeave={() => setActiveState(null)} />

                {/* Active state glow */}
                {activeState && stateCounts[activeState] && (
                  <circle cx="400" cy="100" r="3" fill="#ffd700" filter="url(#glow)">
                    <animate attributeName="r" values="3;6;3" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                )}
              </svg>

              {/* Active State Info */}
              {activeState && stateCounts[activeState] && (
                <div className="absolute top-8 right-8 bg-black/90 backdrop-blur-sm px-6 py-3 rounded-lg border border-[#ffd700]/60 shadow-xl">
                  <div className="text-white font-semibold text-lg">{activeState}</div>
                  <div className="text-[#ffd700] text-sm">{stateCounts[activeState]} Client{stateCounts[activeState] > 1 ? 's' : ''}</div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Client Logos Grid */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 bg-[#1a1410] px-4 py-2 rounded border border-[#c9923f]/20">
                <Flag className="text-[#c9923f]" size={18} />
                <span className="text-white/90 text-sm">Made in India</span>
              </div>
              <div className="flex items-center gap-2 bg-[#1a1410] px-4 py-2 rounded border border-[#c9923f]/20">
                <Award className="text-[#c9923f]" size={18} />
                <span className="text-white/90 text-sm">{clients.length} Clients</span>
              </div>
              <div className="flex items-center gap-2 bg-[#1a1410] px-4 py-2 rounded border border-[#c9923f]/20">
                <MapPin className="text-[#c9923f]" size={18} />
                <span className="text-white/90 text-sm">Pan India</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-4 flex items-center justify-center h-20 cursor-pointer transition-all duration-300 ${
                    activeState === client.state 
                      ? 'shadow-xl shadow-[#ffd700]/50 scale-105 ring-2 ring-[#ffd700]' 
                      : 'hover:shadow-lg hover:scale-105'
                  }`}
                  onMouseEnter={() => setActiveState(client.state)}
                  onMouseLeave={() => setActiveState(null)}
                  onClick={() => setActiveState(activeState === client.state ? null : client.state)}
                >
                  <div className="text-center">
                    <div className="text-xs font-bold text-gray-800 leading-tight line-clamp-2">
                      {client.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1410;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c9923f;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d4a574;
        }
      `}</style>
    </section>
  );
};

export default PresenceSection;
