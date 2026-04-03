import React from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Industrial Oven',
      image: 'https://images.unsplash.com/photo-1703607873351-1406161a2c66?q=80&w=800'
    },
    {
      id: 2,
      name: 'Rotary Rack Oven',
      image: 'https://images.pexels.com/photos/6291407/pexels-photo-6291407.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      name: 'Rusk Making Machine',
      image: 'https://images.pexels.com/photos/29226707/pexels-photo-29226707.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      name: 'Spiral Mixer',
      image: 'https://images.unsplash.com/photo-1768321611024-39d91399abaf?q=80&w=800'
    },
    {
      id: 5,
      name: 'Belt Conveyor',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=800'
    }
  ];

  return (
    <section id="products" className="py-20 bg-[#0a0a0a] relative">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">
          Our Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gradient-to-b from-[#1a1410] to-[#0f0f0f] rounded-xl overflow-hidden border border-[#c9923f]/20 hover:border-[#c9923f]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#c9923f]/10"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 text-center">
                  {product.name}
                </h3>

                {/* View Details Button */}
                <Button
                  variant="outline"
                  className="w-full border border-[#c9923f]/40 bg-transparent text-[#c9923f] hover:bg-[#c9923f] hover:text-white hover:border-[#c9923f] transition-all duration-300 group/btn rounded-md"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Details
                  <ChevronRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
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
