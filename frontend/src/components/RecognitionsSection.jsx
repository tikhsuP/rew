import React, { useState } from 'react';
import { X, FileText } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker — served locally from /public for reliability
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL || ''}/pdf.worker.min.mjs`;

const certificates = [
  { name: 'ISO 9001 : 2015', file: '/iso-9001-cert.pdf' },
  { name: 'ZED Bronze', file: '/zed-bronze-cert.pdf' },
  { name: 'Import - Export', file: '/import-export-cert.pdf' },
  { name: 'Air Pollution', file: '/air-pollution-cert.pdf' },
  { name: 'GST', file: '/gst-cert.pdf' },
  { name: 'Water Pollution', file: '/water-pollution-cert.pdf' },
  { name: 'Labour Registration', file: '/labour-registration-cert.pdf' },
  { name: 'Udyam', file: '/udyam-cert.pdf' },
  { name: 'India\'s 5000 Best', file: '/india5000-cert.pdf' },
];

const CertCard = ({ cert, onClick, idPrefix }) => (
  <div
    data-testid={`recognition-card-${idPrefix}-${cert.name.replace(/\s+/g, '-').toLowerCase()}`}
    onClick={() => onClick(cert)}
    className="group flex-shrink-0 w-56 sm:w-64 h-72 sm:h-80 bg-white rounded-lg shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4a574]/30 border-2 border-[#c9923f]/30 overflow-hidden flex flex-col"
  >
    <div className="flex-1 bg-gray-100 flex items-center justify-center overflow-hidden relative">
      <Document
        file={cert.file}
        loading={
          <div className="flex items-center justify-center w-full h-full text-[#c9923f]">
            <FileText size={48} className="animate-pulse" />
          </div>
        }
        error={
          <div className="flex flex-col items-center justify-center w-full h-full text-gray-500 p-4 text-center">
            <FileText size={48} className="mb-2" />
            <span className="text-xs">Preview unavailable</span>
          </div>
        }
      >
        <Page
          pageNumber={1}
          width={224}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
    </div>
    <div className="px-4 py-3 bg-gradient-to-r from-[#c9923f] to-[#d4a574]">
      <p className="text-white font-semibold text-sm text-center truncate">
        {cert.name}
      </p>
    </div>
  </div>
);

const RecognitionsSection = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const openPdf = (cert) => {
    setSelectedPdf(cert);
    document.body.style.overflow = 'hidden';
  };

  const closePdf = () => {
    setSelectedPdf(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section
      id="recognitions"
      data-testid="recognitions-section"
      className="py-16 lg:py-24 bg-[#0f0805] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
            Our Recognitions
          </h2>
          <p className="text-white/60 text-sm lg:text-base mx-auto">
            Certifications and recognitions that uphold our commitment to quality and compliance.
          </p>
        </div>

        {/* Marquee */}
        <div className="recognitions-marquee-mask relative">
          <div className="recognitions-marquee-track flex gap-6 py-4">
            {certificates.map((cert, i) => (
              <CertCard key={`a-${i}`} cert={cert} onClick={openPdf} idPrefix="a" />
            ))}
            {certificates.map((cert, i) => (
              <CertCard key={`b-${i}`} cert={cert} onClick={openPdf} idPrefix="b" />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPdf && (
        <div
          data-testid="recognition-modal"
          className="fixed inset-0 bg-black/85 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closePdf}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl w-[95%] h-[90%] md:w-[60%] md:h-[85%] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-[#c9923f] to-[#d4a574] px-6 py-4 flex items-center justify-between">
              <h3 className="text-white font-bold text-lg lg:text-xl">{selectedPdf.name}</h3>
              <button
                data-testid="recognition-modal-close"
                onClick={closePdf}
                className="w-9 h-9 bg-white/20 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-hidden bg-gray-100">
              <iframe
                src={`${selectedPdf.file}#view=FitH`}
                className="w-full h-full"
                title={selectedPdf.name}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecognitionsSection;
