import React from 'react';
import { Flag, Award, MapPin } from 'lucide-react';

const PresenceSection = () => {
  const clients = [
    { name: 'Bakked Diamond' },
    { name: 'Bread-G' },
    { name: 'HAFIZ A SATTAR SONS SEWAI' },
    { name: 'Jail Police' },
    { name: 'Ashok' },
    { name: 'Goldiee Masale' },
    { name: 'Bran-O' },
    { name: 'Popular' },
    { name: 'Gomti Food Products' },
    { name: 'Milkmade' },
    { name: 'Swati Food Products' },
    { name: 'Baked Well' },
    { name: 'Nova' },
    { name: 'Mother' },
    { name: 'OnceMore Rainforest' },
    { name: 'Maheshwari Sweets' },
    { name: 'thekaranfoods' },
    { name: 'Paradise' },
    { name: 'Veetaday Industries' },
    { name: 'Good Morning Nutritive India' },
    { name: 'Kalory' },
    { name: 'Amrit Taaza' },
    { name: 'Anand Bakery' },
    { name: 'Mithila Naturals' },
    { name: 'Sangri-La Nutri Food Products' },
    { name: 'SDZ FOOD PRODUCTS' },
    { name: 'GS Manglani' },
    { name: 'Meera Bakers' },
    { name: 'Badshah' },
    { name: 'Banas Dairy' },
    { name: 'Amul' },
    { name: 'Britannia' },
    { name: 'Parle' }
  ];

  return (
    <section id="presence" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
          Our Clients Across India
        </h2>

        {/* Stats Badges */}
        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-[#1a1410] px-4 py-2 rounded border border-[#c9923f]/20">
            <Flag className="text-[#c9923f]" size={18} />
            <span className="text-white/90 text-sm">Made in India</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1a1410] px-4 py-2 rounded border border-[#c9923f]/20">
            <Award className="text-[#c9923f]" size={18} />
            <span className="text-white/90 text-sm">100+ Clients</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1a1410] px-4 py-2 rounded border border-[#c9923f]/20">
            <MapPin className="text-[#c9923f]" size={18} />
            <span className="text-white/90 text-sm">Pan India</span>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex items-center justify-center h-28 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="text-center">
                <div className="text-sm font-bold text-gray-800 leading-tight line-clamp-3 group-hover:text-[#c9923f] transition-colors">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;