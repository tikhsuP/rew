import React, { useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const PRODUCTS = [
  {
    id: 1,
    name: "Rotary Rack Oven",
    category: "Ovens",
    image: "/1.png",
    alt: "Large industrial rotary rack oven with stainless steel finish in a commercial bakery",
  },
  {
    id: 2,
    name: "Swing Tray Oven",
    category: "Ovens",
    image: "/2.png",
    alt: "Commercial swing tray oven with multiple baking trays inside a professional bakery",
  },
  {
    id: 3,
    name: "Chain Type Tunnel Oven",
    category: "Ovens",
    image: "/3.png",
    alt: "Industrial chain type tunnel oven used for continuous baking in large-scale production",
  },
  {
    id: 4,
    name: "Wire Mesh Type Tunnel Oven",
    category: "Ovens",
    image: "/4.png",
    alt: "Wire mesh tunnel oven conveyor system for industrial bakery production line",
  },
  {
    id: 5,
    name: "Slow Speed Mixer",
    category: "Mixers",
    image: "/5.png",
    alt: "Industrial slow speed dough mixer with stainless steel bowl in a commercial kitchen",
  },
  {
    id: 6,
    name: "Spiral Mixer",
    category: "Mixers",
    image: "/6.png",
    alt: "Heavy-duty commercial spiral dough mixer for large-scale bread production",
  },
  {
    id: 7,
    name: "High Speed Mixer",
    category: "Mixers",
    image: "/7.png",
    alt: "Industrial high speed commercial mixer with stainless steel construction",
  },
  {
    id: 8,
    name: "Planetary Mixer",
    category: "Mixers",
    image: "/8.png",
    alt: "Large commercial planetary mixer with multiple attachments for bakery use",
  },
  {
    id: 9,
    name: "Slow Speed Slicer",
    category: "Slicers",
    image: "/9.png",
    alt: "Industrial slow speed bread slicer machine for commercial bakery operations",
  },
  {
    id: 10,
    name: "High Speed Slicer",
    category: "Slicers",
    image: "/10.png",
    alt: "Commercial high speed automatic bread slicing machine in a production facility",
  },
  {
    id: 11,
    name: "Air Washer",
    category: "Utilities",
    image: "/11.png",
    alt: "Industrial air washer and purification unit for commercial bakery environments",
  },
  {
    id: 12,
    name: "Depanning Table",
    category: "Utilities",
    image: "/12.png",
    alt: "Stainless steel commercial depanning table for removing bread from baking tins",
  },
  {
    id: 13,
    name: "Cooling Trolley",
    category: "Utilities",
    image: "/13.png",
    alt: "Industrial bread cooling trolley with multiple wire shelves for bakery use",
  },
  {
    id: 14,
    name: "Moulds Conveyor",
    category: "Conveyors",
    image: "/14.png",
    alt: "Industrial moulds conveyor belt system for automated bakery production line",
  },
  {
    id: 15,
    name: "Loading And Unloading Conveyor",
    category: "Conveyors",
    image: "/15.png",
    alt: "Commercial loading and unloading conveyor system for industrial bakery automation",
  },
  {
    id: 16,
    name: "Cotton Belt Conveyor",
    category: "Conveyors",
    image: "/16.png",
    alt: "Transporting delicate items like biscuits, dough, steamed bread, and pastries through baking, cooling, and packaging lines",
  },
  {
    id: 17,
    name: "Moulds",
    category: "Accessories",
    image: "/17.png",
    alt: "Set of industrial stainless steel bread baking moulds in various sizes",
  },
  {
    id: 18,
    name: "Lids",
    category: "Accessories",
    image: "/18.png",
    alt: "Commercial stainless steel baking tin lids for industrial bread production",
  },
  {
    id: 19,
    name: "Trays",
    category: "Accessories",
    image: "/19.png",
    alt: "Industrial perforated stainless steel baking trays for commercial bakery use",
  },
  {
    id: 20,
    name: "Bun Rings",
    category: "Accessories",
    image: "/20.png",
    alt: "Commercial stainless steel bun rings for shaping and baking buns in bulk",
  },
  {
    id: 21,
    name: "Contact Us",
    category: null,
    image: "/21.png",
    alt: "Contact Us",
  },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const getProductDescription = (product) => {
  const descriptionsByCategory = {
    Ovens:
      "Built for consistent baking performance with efficient heat distribution and durable industrial-grade construction.",
    Mixers:
      "Engineered for smooth dough preparation with stable torque delivery and easy batch handling for continuous operations.",
    Slicers:
      "Precision slicing solutions designed for uniform cuts, high throughput, and low-maintenance daily production.",
    Utilities:
      "Essential utility systems that streamline workflow, improve hygiene, and support reliable plant-wide operations.",
    Conveyors:
      "Automated conveying equipment that improves line efficiency and ensures smooth product movement across stages.",
    Accessories:
      "High-quality bakery accessories that improve output consistency and support seamless production handling.",
  };

  return (
    descriptionsByCategory[product.category] ||
    "Industrial bakery equipment designed for reliable performance and long-term productivity."
  );
};

const getProductPriceRange = (product) => {
  const baseRangesByCategory = {
    Ovens: [450000, 1450000],
    Mixers: [160000, 520000],
    Slicers: [120000, 390000],
    Utilities: [110000, 340000],
    Conveyors: [180000, 680000],
    Accessories: [12000, 78000],
  };

  const fallbackRange = [95000, 250000];
  const [baseMin, baseMax] =
    baseRangesByCategory[product.category] || fallbackRange;
  const variation = (product.id % 5) * 4000;

  return {
    min: baseMin + variation,
    max: baseMax + variation,
  };
};

const formatInr = (value) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);

const ProductCard = ({ product, size, index, onOpen }) => {
  const sizeClasses = {
    hero: "col-span-2 row-span-2",
    large: "col-span-2 row-span-1",
    medium: "col-span-1 row-span-1",
    small: "col-span-1 row-span-1",
  };

  const imgHeightClasses = {
    hero: "h-[420px]",
    large: "h-[220px]",
    medium: "h-[200px]",
    small: "h-[180px]",
  };

  const titleSizeClasses = {
    hero: "text-2xl",
    large: "text-lg",
    medium: "text-base",
    small: "text-sm",
  };

  return (
    <>
      {product.category ? (
        <button
          type="button"
          onClick={() => onOpen(product)}
          className={`${sizeClasses[size]} group relative overflow-hidden bg-[#111] border border-[rgba(200,146,42,0.12)] hover:border-[rgba(200,146,42,0.4)] transition-all duration-500`}
          style={{ animationDelay: `${index * 80}ms` }}
        >
          {/* Image area */}
          <div
            className={`relative w-full ${imgHeightClasses[size]} overflow-hidden bg-[#0a0a0a]`}
          >
            <img
              src={product.image}
              alt={product.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#C8922A] bg-[rgba(0,0,0,0.7)] px-2 py-1 border border-[rgba(200,146,42,0.3)]">
                {product.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3
              className={`font-heading font-semibold text-white leading-tight ${titleSizeClasses[size]} group-hover:text-[#C8922A] transition-colors duration-300`}
            >
              {product.name}
            </h3>
          </div>

          {/* Bottom gold line on hover */}
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8922A] group-hover:w-full transition-all duration-500" />
        </button>
      ) : (
        <div
          onClick={() => scrollToSection("contact")}
          className={`flex ${sizeClasses[size]} group relative overflow-hidden bg-[#111] border border-[rgba(200,146,42,0.12)] hover:border-[rgba(200,146,42,0.4)] transition-all duration-500`}
          style={{
            animationDelay: `${index * 80}ms`,
            textAlign: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* Image area */}

          <div className="flex" style={{ margin: "3.5vh 3vw" }}>
            <h1
              className={`font-heading font-semibold text-white leading-tight text-2xl group-hover:text-[#C8922A] transition-colors duration-300`}
            >
              Looking for something else?
            </h1>
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#c9923f] hover:bg-[#b8822e] text-white font-semibold px-8 py-6 text-base rounded transition-all"
          >
            Contact Us
          </Button>

          {/* Bottom gold line on hover */}
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8922A] group-hover:w-full transition-all duration-500" />
        </div>
      )}
    </>
  );
};

// Magazine layout: define which products get which size
const LAYOUT = [
  { id: 1, size: "hero" },
  { id: 2, size: "medium" },
  { id: 3, size: "medium" },
  { id: 4, size: "large" },
  { id: 5, size: "hero" },
  { id: 6, size: "medium" },
  { id: 7, size: "medium" },
  { id: 8, size: "large" },
  { id: 9, size: "medium" },
  { id: 10, size: "medium" },
  { id: 11, size: "medium" },
  { id: 12, size: "medium" },
  { id: 13, size: "large" },
  { id: 14, size: "hero" },
  { id: 15, size: "large" },
  { id: 16, size: "large" },
  { id: 17, size: "medium" },
  { id: 18, size: "medium" },
  { id: 19, size: "large" },
  { id: 20, size: "medium" },
  { id: 21, size: "medium" },
];

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const selectedProductPriceRange = useMemo(() => {
    if (!selectedProduct) return null;
    return getProductPriceRange(selectedProduct);
  }, [selectedProduct]);

  const selectedProductSlides = useMemo(() => {
    if (!selectedProduct) return [];

    // Duplicate/variant slides so every product has a slideshow even with one source image.
    return [
      selectedProduct.image,
      selectedProduct.image,
      selectedProduct.image,
    ].map((image, idx) => ({
      id: `${selectedProduct.id}-${idx}`,
      image,
      alt: `${selectedProduct.alt} - View ${idx + 1}`,
    }));
  }, [selectedProduct]);

  return (
    <section
      id="products"
      className="py-16 lg:py-24 bg-[#0D0D0D] relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[rgba(200,146,42,0.04)] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2
              className="font-heading font-bold text-white"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1 }}
            >
              Our Products
            </h2>
            <div className="h-[2px] w-12 bg-primary mt-3" />
          </div>
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-auto">
          {LAYOUT.map((item, index) => {
            const product = PRODUCTS.find((p) => p.id === item.id);
            return (
              <ProductCard
                key={product.id}
                product={product}
                size={item.size}
                index={index}
                onOpen={setSelectedProduct}
              />
            );
          })}
        </div>
      </div>

      <div className="gold-divider mt-16" />

      <Dialog
        open={Boolean(selectedProduct)}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      >
        <DialogContent className="max-w-3xl bg-[#0D0D0D] border border-[rgba(200,146,42,0.35)] p-4 sm:p-6 text-white">
          {selectedProduct && (
            <div className="space-y-4">
              <DialogTitle className="sr-only">
                {selectedProduct.name}
              </DialogTitle>

              <Carousel opts={{ loop: true }} className="w-full px-10">
                <CarouselContent>
                  {selectedProductSlides.map((slide) => (
                    <CarouselItem key={slide.id}>
                      <div className="h-[360px] w-full overflow-hidden rounded-md bg-[#111] border border-[rgba(200,146,42,0.2)]">
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-1 bg-black/70 border-[rgba(200,146,42,0.45)] text-white hover:bg-black" />
                <CarouselNext className="right-1 bg-black/70 border-[rgba(200,146,42,0.45)] text-white hover:bg-black" />
              </Carousel>

              <div className="text-center space-y-2">
                <h3 className="font-heading text-2xl text-[#C8922A]">
                  {selectedProduct.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-200">
                  {getProductDescription(selectedProduct)}
                </p>
                <p className="text-base sm:text-lg font-semibold text-white">
                  Price Range: ₹{formatInr(selectedProductPriceRange?.min || 0)}{" "}
                  - ₹{formatInr(selectedProductPriceRange?.max || 0)}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsSection;
