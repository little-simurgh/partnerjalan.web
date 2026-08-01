import React, { useState } from 'react';
import { Compass, Sparkles, ShieldCheck, Camera, Bus, MapPin, Search, ArrowRight, Star, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onSelectRegion: (regionSlug: string) => void;
  onOpenBooking: () => void;
  onOpenCustomPlanner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectRegion, onOpenBooking, onOpenCustomPlanner }) => {
  const [selectedQuickRegion, setSelectedQuickRegion] = useState('');

  const quickRegions = [
    { name: 'Dieng', slug: 'dieng', badge: 'Terpopuler' },
    { name: 'Yogyakarta', slug: 'yogyakarta', badge: 'Favorit' },
    { name: 'Bali', slug: 'bali', badge: '5 Hari' },
    { name: 'Lombok', slug: 'lombok', badge: '7 Hari' },
    { name: 'Semarang', slug: 'semarang', badge: '1 Day' },
    { name: 'Purwokerto', slug: 'purwokerto', badge: 'Baturraden' },
    { name: 'Jakarta-Bogor', slug: 'jakarta-bogor', badge: 'Dufan & Puncak' },
  ];

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedQuickRegion) {
      onSelectRegion(selectedQuickRegion);
      const catalogEl = document.querySelector('#katalog');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Bento Main Hero Box */}
      <div className="relative overflow-hidden rounded-3xl bg-[#136E82] text-white p-8 sm:p-12 lg:p-16 shadow-xl border border-cyan-900/10">
        <img
          src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=1600"
          alt="Partner Jalan Travel Experience"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#136E82] via-[#136E82]/85 to-transparent z-10" />

        <div className="relative z-20 max-w-3xl">
          {/* Featured Trip Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAB308] text-gray-950 text-xs font-extrabold uppercase tracking-widest mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5 fill-gray-950" />
            <span>Featured Tour Organizer</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 font-sans">
            Jelajahi Destinasi Impian<br />
            <span className="text-[#EAB308]">Bersama Partner Jalan.</span>
          </h1>

          <p className="text-gray-100 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
            Open Trip & Private Trip dengan armada <strong className="text-white">Bus Executive</strong>,
            fotografer handal, itinerary anti-ribet, serta bonus <strong className="text-[#EAB308]">Gratis Cetak Foto 4R + Frame 12R</strong>.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#katalog"
              className="px-8 py-4 bg-[#EAB308] text-gray-950 font-extrabold rounded-2xl shadow-xl hover:bg-yellow-400 transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <Compass className="w-5 h-5 text-gray-950 stroke-[2.5]" />
              Lihat Paket Trip
              <ArrowRight className="w-4 h-4 text-gray-950" />
            </a>

            <button
              onClick={onOpenCustomPlanner}
              className="px-8 py-4 border border-white/30 text-white font-bold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all text-sm sm:text-base flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#EAB308]" />
              Rencanakan Custom Trip
            </button>
          </div>

          {/* Highlights Mini Pills */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-gray-100">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
              <Bus className="w-4 h-4 text-[#EAB308]" /> Bus Pariwisata Executive
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
              <Camera className="w-4 h-4 text-[#EAB308]" /> Bonus Foto 4R & Frame 12R
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#EAB308]" /> All-In No Hidden Fees
            </span>
          </div>
        </div>
      </div>

      {/* Quick Search Bento Module */}
      <div className="mt-6 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <form onSubmit={handleQuickSearch} className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative flex-1 w-full text-left">
            <label htmlFor="region-quick-select" className="block text-xs font-bold text-[#136E82] uppercase tracking-wider mb-1.5">
              Pilih Destinasi Tujuan Kamu
            </label>
            <div className="relative flex items-center">
              <MapPin className="w-5 h-5 text-[#EAB308] absolute left-3.5 pointer-events-none" />
              <select
                id="region-quick-select"
                value={selectedQuickRegion}
                onChange={(e) => setSelectedQuickRegion(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#136E82] font-medium"
              >
                <option value="">-- Semua Destinasi (Semarang, Dieng, Jogja, Bali, Lombok, dll) --</option>
                {quickRegions.map((reg) => (
                  <option key={reg.slug} value={reg.slug}>
                    {reg.name} ({reg.badge})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            onClick={handleQuickSearch}
            className="w-full sm:w-auto mt-2 sm:mt-6 px-8 py-3.5 rounded-2xl text-xs font-extrabold text-white bg-[#136E82] hover:bg-[#0E5565] flex items-center justify-center gap-2 shadow-md transition-colors"
          >
            <Search className="w-4 h-4" />
            Cari Paket
          </button>
        </form>

        {/* Quick Filter Tag Buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-400 font-semibold mr-1">Populer:</span>
          {quickRegions.map((reg) => (
            <button
              key={reg.slug}
              onClick={() => {
                onSelectRegion(reg.slug);
                const el = document.querySelector('#katalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3 py-1 rounded-xl text-xs font-medium bg-[#EAF4F6] text-[#136E82] hover:bg-[#136E82] hover:text-white transition-colors"
            >
              {reg.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
