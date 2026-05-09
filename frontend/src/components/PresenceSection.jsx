import React from "react";
import { Flag, Award, MapPin } from "lucide-react";

const PresenceSection = () => {
  const clients = [
    { name: "Bakked Diamond", logo: "/bakked-diamond-logo.webp" },
    { name: "Bread-G", logo: "/breadg-logo.webp" },
    { name: "HAFIZ A SATTAR SONS SEWAI", logo: "/hafiz-logo.webp" },
    { name: "Jail Police", logo: "/jail-police-logo.webp" },
    { name: "Ashok", logo: "/ashok-logo.webp" },
    { name: "Goldiee Masale", logo: "/goldiee-logo.webp" },
    { name: "Bran-O", logo: "/brano-logo.webp" },
    { name: "Popular", logo: "/popular-logo.webp" },
    { name: "Gomti Food Products", logo: "/gomti-logo.webp" },
    { name: "Milkmade", logo: "/milkmade-logo.webp" },
    { name: "Swati Food Products", logo: "/swati-logo.webp" },
    { name: "Baked Well", logo: "/baked-well-logo.webp" },
    { name: "Nova", logo: "/nova-logo.webp" },
    { name: "Mother", logo: "/mother-logo.webp" },
    { name: "OnceMore Rainforest", logo: "/rainforest-logo.webp" },
    { name: "Maheshwari Sweets", logo: "/maheshwari-logo.webp" },
    { name: "thekaranfoods", logo: "/karans-logo.webp" },
    { name: "Paradise", logo: "/paradise-logo.webp" },
    { name: "Veetaday Industries", logo: "/veetaday-logo.webp" },
    { name: "Good Morning Nutritive India", logo: "/goodmorning-logo.webp" },
    { name: "Kalory", logo: "/kalory-logo.webp" },
    { name: "Amrit Taaza", logo: "/amrit-taaza-logo.webp" },
    { name: "Anand Bakery", logo: "/anand-bakery-logo.webp" },
    { name: "Mithila Naturals", logo: "/mithila-logo.webp" },
    { name: "Sangri-La Nutri Food Products", logo: "/sangrila-logo.webp" },
    { name: "SDZ FOOD PRODUCTS", logo: "/sdz-logo.webp" },
    { name: "GS Manglani", logo: "/gs-manglani-logo.webp" },
    { name: "Meera Bakers", logo: "/meera-bakers-logo.webp" },
    { name: "Badshah", logo: "/badshah-logo.webp" },
    { name: "Banas Dairy", logo: "/banas-dairy-logo.webp" },
    { name: "Amul", logo: "/amul-logo.webp" },
    { name: "Britannia", logo: "/britannia-logo.webp" },
    { name: "Parle", logo: "/parle-logo.webp" },
    { name: "Gogiya", logo: "/gogiya-logo.webp" },
  ];

  return (
    <section
      id="clients"
      className="py-16 lg:py-24 bg-[#0D0D0D] relative overflow-hidden"
    >
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
            <span className="text-white/90 text-sm">750+ Clients</span>
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
                  className={`object-contain ${"w-[95%] h-[95%]"}`}
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
