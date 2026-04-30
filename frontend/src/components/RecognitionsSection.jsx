import React, { useState } from 'react';
import { X } from 'lucide-react';

const RecognitionsSection = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const certificates = [
    { name: 'ISO 9001 Certificate', file: '/iso-9001-cert.pdf' },
    { name: 'ZED Bronze Certificate', file: '/zed-bronze-cert.pdf' },
    { name: 'Import-Export Certificate', file: '/import-export-cert.pdf' },
    { name: 'Air Pollution Certificate', file: '/air-pollution-cert.pdf' },
    { name: 'GST Certificate', file: '/gst-cert.pdf' }
  ];

  const openPdf = (cert) => {
    setSelectedPdf(cert);
    document.body.style.overflow = 'hidden';
  };

  const closePdf = () => {
    setSelectedPdf(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="recognitions" className="py-16 bg-[#0f0805] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Our <span className="text-[#d4a574]">Recognitions</span>
        </h2>

        {/* Marquee Container */}
        <div className="relative">
          <div className="marquee-container overflow-hidden">
            <div className="marquee-content flex gap-6 animate-marquee">
              {/* First set of certificates */}
              {certificates.map((cert, index) => (
                <div
                  key={`cert-1-${index}`}
                  className="flex-shrink-0 w-64 h-80 bg-white rounded-lg shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4a574]/20 border-2 border-[#c9923f]/20"
                  onClick={() => openPdf(cert)}
                >
                  <div className="h-full flex flex-col">
                    <div className="flex-1 overflow-hidden rounded-t-lg bg-gray-100">
                      <iframe
                        src={cert.file}
                        className="w-full h-full pointer-events-none"
                        title={cert.name}
                      />
                    </div>
                    <div className="p-4 bg-gradient-to-r from-[#c9923f] to-[#d4a574] rounded-b-lg">
                      <p className="text-white font-semibold text-sm text-center line-clamp-2">
                        {cert.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {certificates.map((cert, index) => (
                <div
                  key={`cert-2-${index}`}
                  className="flex-shrink-0 w-64 h-80 bg-white rounded-lg shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4a574]/20 border-2 border-[#c9923f]/20"
                  onClick={() => openPdf(cert)}
                >
                  <div className="h-full flex flex-col">
                    <div className="flex-1 overflow-hidden rounded-t-lg bg-gray-100">
                      <iframe
                        src={cert.file}
                        className="w-full h-full pointer-events-none"
                        title={cert.name}
                      />
                    </div>
                    <div className="p-4 bg-gradient-to-r from-[#c9923f] to-[#d4a574] rounded-b-lg">
                      <p className="text-white font-semibold text-sm text-center line-clamp-2">
                        {cert.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for viewing PDF */}
      {selectedPdf && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closePdf}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl w-[90%] h-[90%] md:w-[60%] md:h-[80%] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closePdf}
              className="absolute -top-4 -right-4 w-10 h-10 bg-[#c9923f] hover:bg-[#b8822e] text-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
            >
              <X size={24} />
            </button>

            {/* PDF title */}
            <div className="bg-gradient-to-r from-[#c9923f] to-[#d4a574] px-6 py-4 rounded-t-xl">
              <h3 className="text-white font-bold text-xl">{selectedPdf.name}</h3>
            </div>

            {/* PDF viewer */}
            <div className="flex-1 overflow-hidden rounded-b-xl">
              <iframe
                src={selectedPdf.file}
                className="w-full h-full"
                title={selectedPdf.name}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .marquee-container {
          position: relative;
        }
        
        .marquee-content {
          display: flex;
          animation: marquee 40s linear infinite;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default RecognitionsSection;
