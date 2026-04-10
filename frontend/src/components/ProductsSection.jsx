import React from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Industrial Oven',
      image: 'https://images.unsplash.com/photo-1703607873351-1406161a2c66?q=80&w=600'
    },
    {
      id: 2,
      name: 'Rotary Rack Oven',
      image: 'https://images.pexels.com/photos/6291407/pexels-photo-6291407.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      name: 'Rusk Making Machine',
      image: 'https://images.pexels.com/photos/29226707/pexels-photo-29226707.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      name: 'Spiral Mixer',
      image: 'https://images.unsplash.com/photo-1768321611024-39d91399abaf?q=80&w=600'
    },
    {
      id: 5,
      name: 'Belt Conveyor',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    }
  ];

  return (
    <section id="products" className="py-16 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
          Our Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-[#1a1410] rounded-lg overflow-hidden border border-[#c9923f]/10 hover:border-[#c9923f]/30 transition-all"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Product Info */}
              <div className="p-4 text-center">
                <h3 className="text-white font-semibold text-base mb-3">
                  {product.name}
                </h3>

                {/* View Details Button */}
                <Button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#c9923f] hover:bg-[#b8822e] text-white text-sm px-6 py-2 rounded transition-all w-full flex items-center justify-center gap-2"
                >
                  View Details
                  <ChevronDown size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
