import React, { useState } from 'react';
import { Button } from './ui/button';
import { ChevronRight, Zap } from 'lucide-react';

const ProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Industrial Oven',
      image: 'https://images.unsplash.com/photo-1703607873351-1406161a2c66?q=80&w=800',
      description: 'High-capacity industrial baking ovens with precise temperature control',
      features: ['Energy Efficient', 'Multi-deck', 'Digital Control']
    },
    {
      id: 2,
      name: 'Rotary Rack Oven',
      image: 'https://images.pexels.com/photos/6291407/pexels-photo-6291407.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Rotating rack system for uniform baking and maximum efficiency',
      features: ['360° Rotation', 'Large Capacity', 'Even Heat Distribution']
    },
    {
      id: 3,
      name: 'Rusk Making Machine',
      image: 'https://images.pexels.com/photos/29226707/pexels-photo-29226707.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Automated rusk production line with cutting and toasting',
      features: ['Automated', 'High Output', 'Precision Cutting']
    },
    {
      id: 4,
      name: 'Spiral Mixer',
      image: 'https://images.unsplash.com/photo-1768321611024-39d91399abaf?q=80&w=800',
      description: 'Heavy-duty spiral mixers for dough preparation',
      features: ['Powerful Motor', 'Variable Speed', 'Durable Build']
    },
    {
      id: 5,
      name: 'Belt Conveyor',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=800',
      description: 'Industrial conveyor systems for production line automation',
      features: ['Customizable Length', 'Speed Control', 'Stainless Steel']
    }
  ];

  return (
    <section id="products" className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#121212] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#c9923f]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#c9923f]">Products</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Premium industrial bakery machinery designed for efficiency and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl overflow-hidden border border-[#c9923f]/20 hover:border-[#c9923f]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c9923f]/20 hover:scale-105"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-[#c9923f]/10 backdrop-blur-sm transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Zap className="text-[#c9923f] animate-pulse" size={48} />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c9923f] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#c9923f] rounded-full"></div>
                      <span className="text-white/60 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full border-[#c9923f]/30 text-[#c9923f] hover:bg-[#c9923f] hover:text-white transition-all duration-300 group/btn"
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
