import React from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
       id: 1,
      name: 'Rotary Rack Oven',
      image: 'https://images.unsplash.com/photo-1703607873351-1406161a2c66?q=80&w=600'
    },
    {
      id: 2,
      name: 'Swing Tray Oven',
      image: 'https://images.pexels.com/photos/6291407/pexels-photo-6291407.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      name: 'Chain Type Tunnel Oven',
      image: 'https://images.pexels.com/photos/29226707/pexels-photo-29226707.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      name: 'Wire Mesh Type Tunnel Oven',
      image: 'https://images.unsplash.com/photo-1768321611024-39d91399abaf?q=80&w=600'
    },
    {
      id: 5,
      name: 'Slow Speed Mixer',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 6,
      name: 'Spiral Mixer',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 7,
      name: 'High Speed Mixer',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 8,
      name: 'Planetary Mixer',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 9,
      name: 'Slow Speed Slicer',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 10,
      name: 'High Speed Slicer',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 11,
      name: 'Air Washer',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 12,
      name: 'Depanning Table',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 13,
      name: 'Cooling Trolley',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 14,
      name: 'Moulds Conveyor',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 15,
      name: 'Loading And Unloading Conveyor',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 16,
      name: 'Batch Coding Conveyor',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 17,
      name: 'Moulds',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 18,
      name: 'Lids',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 19,
      name: 'Trays',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
    {
      id: 20,
      name: 'Bun Rings',
      image: 'https://images.unsplash.com/photo-1687054445403-af57b11883ef?q=80&w=600'
    },
  ];

  return (
    <section id="products" className="py-16 bg-[#0f0805]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-[#2a1810] rounded-lg overflow-hidden border border-[#c9923f]/10 hover:border-[#c9923f]/30 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f08]/60 to-transparent"></div>
              </div>

              <div className="p-4 text-center">
                <h3 className="text-white font-semibold text-base mb-3">
                  {product.name}
                </h3>

                {/* <Button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#c9923f] hover:bg-[#b8822e] text-white text-sm px-6 py-2 rounded transition-all w-full flex items-center justify-center gap-2"
                >
                  View Details
                  <ChevronDown size={14} />
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;