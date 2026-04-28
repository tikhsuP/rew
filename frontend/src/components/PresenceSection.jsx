import React from 'react';
import { Flag, Award, MapPin } from 'lucide-react';

const PresenceSection = () => {
  const clients = [
    { name: 'Bakked Diamond', logo: '/bakked-diamond-logo.png' },
    { name: 'Bread-G', logo: null },
    { name: 'HAFIZ A SATTAR SONS SEWAI', logo: '/hafiz-logo.png' },
    { name: 'Jail Police', logo: null },
    { name: 'Ashok', logo: '/ashok-logo.png' },
    { name: 'Goldiee Masale', logo: null },
    { name: 'Bran-O', logo: '/brano-logo.png' },
    { name: 'Popular', logo: null },
    { name: 'Gomti Food Products', logo: '/gomti-logo.png' },
    { name: 'Milkmade', logo: '/milkmade-logo.png' },
    { name: 'Swati Food Products', logo: '/swati-logo.png' },
    { name: 'Baked Well', logo: null },
    { name: 'Nova', logo: '/nova-logo.png' },
    { name: 'Mother', logo: null },
    { name: 'OnceMore Rainforest', logo: '/rainforest-logo.png' },
    { name: 'Maheshwari Sweets', logo: '/maheshwari-logo.png' },
    { name: 'thekaranfoods', logo: '/karans-logo.png' },
    { name: 'Paradise', logo: '/paradise-logo.png' },
    { name: 'Veetaday Industries', logo: null },
    { name: 'Good Morning Nutritive India', logo: '/goodmorning-logo.png' },
    { name: 'Kalory', logo: null },
    { name: 'Amrit Taaza', logo: '/amrit-taaza-logo.png' },
    { name: 'Anand Bakery', logo: null },
    { name: 'Mithila Naturals', logo: null },
    { name: 'Sangri-La Nutri Food Products', logo: null },
    { name: 'SDZ FOOD PRODUCTS', logo: '/sdz-logo.png' },
    { name: 'GS Manglani', logo: null },
    { name: 'Meera Bakers', logo: null },
    { name: 'Badshah', logo: '/badshah-logo.png' },
    { name: 'Banas Dairy', logo: '/banas-dairy-logo.png' },
    { name: 'Amul', logo: '/amul-logo.png' },
    { name: 'Britannia', logo: '/britannia-logo.png' },
    { name: 'Parle', logo: '/parle-logo.png' }
  ];

  return (
    <section id="presence" className="py-16 bg-[#1a0f08]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
          Our Clients Across India
        </h2>

        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex items-center gap-2 bg-[#2a1810] px-4 py-2 rounded border border-[#c9923f]/20">
            <Flag className="text-[#d4a574]" size={18} />
            <span className="text-white/90 text-sm">Made in India</span>
          </div>
          <div className="flex items-center gap-2 bg-[#2a1810] px-4 py-2 rounded border border-[#c9923f]/20">
            <Award className="text-[#d4a574]" size={18} />
            <span className="text-white/90 text-sm">100+ Clients</span>
          </div>
          <div className="flex items-center gap-2 bg-[#2a1810] px-4 py-2 rounded border border-[#c9923f]/20">
            <MapPin className="text-[#d4a574]" size={18} />
            <span className="text-white/90 text-sm">Pan India</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex items-center justify-center h-28 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-20 object-contain"
                />
              ) : (
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-800 leading-tight line-clamp-3 group-hover:text-[#c9923f] transition-colors">
                    {client.name}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;
