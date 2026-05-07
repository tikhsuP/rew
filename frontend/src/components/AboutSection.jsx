import React from 'react';

const AboutSection = () => {
  return (
    <section id='about'
      className="py-20 lg:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{ backgroundColor: '#111111' }}
    >
      {/* Faded background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        // style={{
        //   backgroundImage:
        //     "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80')",
        //   opacity: 0.08,
        //   filter: 'grayscale(60%)',
        // }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto flex items-stretch min-h-[280px]">
        <div className="w-2/5 flex flex-row items-center justify-center border-r border-[#C8922A] gap-4 select-none">
          <span
            className="text-[#C8922A] uppercase leading-none"
            style={{
            //   fontFamily: "'Impact', 'Anton', 'Arial Black', sans-serif",
              fontSize: 'clamp(1.6rem, 4vw, 3.8rem)',
              letterSpacing: '0.15em',
            //   textShadow: '0 0 30px rgba(200,146,42,0.55), 0 0 60px rgba(200,146,42,0.2)',
              fontWeight: 900,
              WebkitTextStroke: '1px rgba(200,146,42,0.4)',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
            }}
          >
            SINCE
          </span>
          <span
            className="text-[#C8922A] uppercase leading-none"
            style={{
            //   fontFamily: "'Impact', 'Anton', 'Arial Black', sans-serif",
              fontSize: 'clamp(3.5rem, 6.5vw, 6.5rem)',
              letterSpacing: '0.08em',
            //   textShadow: '0 0 40px rgba(200,146,42,0.6), 0 0 80px rgba(200,146,42,0.25)',
              fontWeight: 900,
              WebkitTextStroke: '1.5px rgba(200,146,42,0.5)',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
            }}
          >
            1992
          </span>
        </div>

        {/* Right: Content — 75% width */}
        <div className="w-3/4 flex flex-col justify-center pl-10 md:pl-14">
          
          <p className="text-gray-200 text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
            We <span className="text-[#C8922A] font-semibold">Rahul Engineering Works</span> are a
            Bakery Equipment manufacturing firm. Here, customers can get access to all types of
            bakery related equipments in best quality. We deal in{' '}
            <span className="text-white font-medium">Bread, Rusk and Biscuit Making Machinaries.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
