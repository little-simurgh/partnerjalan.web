import React, { useState } from 'react';
import { GALLERY_DATA, TESTIMONIALS_DATA } from '../data/travelData';
import { Star, Camera, MessageSquare, Sparkles, MapPin, Quote } from 'lucide-react';

export const GalleryTestimonials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredGallery = GALLERY_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="galeri" className="py-16 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF4F6] text-[#136E82] text-xs font-bold mb-3 border border-[#136E82]/20">
            <Camera className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Dokumentasi & Ulasan Peserta</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#136E82] tracking-tight font-sans">
            Momen Kebersamaan Bersama Partner Jalan
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Intip keseruan foto dokumentasi peserta trip kami dari lereng Dieng, keindahan Bali, hingga eksotisnya Lombok!
          </p>
        </div>

        {/* Gallery Filter Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {[
            { id: 'all', name: 'Semua Foto' },
            { id: 'gunung', name: 'Pegunungan & Sunrise' },
            { id: 'pantai', name: 'Pantai & Laut' },
            { id: 'budaya', name: 'Sejarah & Budaya' },
            { id: 'rekreasi', name: 'Rekreasi Keluarga' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#136E82] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden border border-gray-100 bg-white aspect-[4/3] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#136E82]/90 via-[#136E82]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="px-3 py-1 rounded-full bg-[#EAB308] text-gray-950 text-[10px] font-extrabold uppercase tracking-wider mb-2 inline-block">
                  {item.region}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-yellow-200 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF4F6] text-[#136E82] text-xs font-bold mb-3 border border-[#136E82]/20">
            <MessageSquare className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Kisah Sukses Trip</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#136E82]">
            Apa Kata Rombongan & Peserta Kami?
          </h3>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((testi) => (
            <div
              key={testi.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 relative flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#136E82]/10 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating stars */}
                <div className="flex text-[#EAB308] mb-3">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6">
                  "{testi.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#EAF4F6]"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#136E82]">
                    {testi.name}
                  </h4>
                  <p className="text-[11px] text-[#EAB308] font-bold">
                    {testi.role}
                  </p>
                  <p className="text-[10px] text-gray-400">
                    {testi.tripName} • {testi.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
