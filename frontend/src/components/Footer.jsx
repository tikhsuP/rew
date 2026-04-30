import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0805] py-6 border-t border-[#c9923f]/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-sm">
            © {currentYear} Rahul Engineering Works. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;