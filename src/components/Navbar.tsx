import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, PhoneCall, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (packageName?: string) => void;
  onNavigateCustomPlanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigateCustomPlanner }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Katalog Trip', href: '#katalog' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Keunggulan', href: '#mengapa-kami' },
    { name: 'Custom Trip', href: '#custom-planner' },
    { name: 'Galeri & Ulasan', href: '#galeri' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-white/80 backdrop-blur-md py-3.5 border-b border-gray-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2.5 group cursor-pointer"
            id="brand-logo-link"
          >
            <div className="w-9 h-9 rounded-xl bg-[#136E82] flex items-center justify-center text-white font-bold shadow-md shadow-cyan-900/10 group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-5 h-5 text-[#EAB308] stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#136E82] flex items-center gap-1.5 font-sans">
                PARTNER<span className="text-[#EAB308] font-black">JALAN</span>
              </span>
              <span className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase -mt-1 flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-[#EAB308]" /> Tour & Travel Organizer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-100/80 p-1.5 rounded-full border border-gray-200/60 backdrop-blur-sm" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-semibold text-gray-600 hover:text-[#136E82] hover:bg-white rounded-full transition-all duration-200 shadow-none hover:shadow-xs"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              id="nav-custom-planner-btn"
              onClick={() => {
                onNavigateCustomPlanner();
                const element = document.querySelector('#custom-planner');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-[#136E82] bg-[#EAF4F6] hover:bg-[#136E82] hover:text-white transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
              Custom Trip
            </button>

            <button
              id="nav-booking-btn"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-gray-950 bg-[#EAB308] hover:bg-yellow-500 shadow-md transition-all duration-200"
            >
              <PhoneCall className="w-3.5 h-3.5 fill-gray-950" />
              Pesan Trip
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-gray-100 text-gray-700 hover:text-[#F27D26] border border-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 pt-4 pb-6 mt-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-[#E6F0EE] hover:text-[#1A3C34] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateCustomPlanner();
                  const element = document.querySelector('#custom-planner');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#1A3C34] bg-[#E6F0EE]"
              >
                <Sparkles className="w-4 h-4 text-[#F27D26]" />
                Rencanakan Custom Trip
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1A3C34] shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                Pesan / Tanya Admin
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
