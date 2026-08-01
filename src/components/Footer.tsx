import React from 'react';
import { Compass, Mail, Phone, MapPin, Instagram, Youtube, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#136E82] text-gray-200 border-t border-[#136E82]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#EAB308] flex items-center justify-center text-gray-950 font-bold shadow-md">
                <Compass className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                PARTNER<span className="text-[#EAB308]">JALAN</span>
              </span>
            </div>

            <p className="text-xs text-gray-100 max-w-sm leading-relaxed">
              Biro perjalanan & tour organizer profesional terpercaya di Indonesia. Melayani penawaran Open Trip dan
              Private Trip dengan fasilitas armada bus executive, dokumentasi foto & video, dan bonus souvenir eksklusif.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-2xl bg-white/10 border border-white/10 hover:bg-[#EAB308] hover:border-[#EAB308] hover:text-gray-950 flex items-center justify-center text-white transition-all"
                aria-label="Instagram Partner Jalan"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-2xl bg-white/10 border border-white/10 hover:bg-[#EAB308] hover:border-[#EAB308] hover:text-gray-950 flex items-center justify-center text-white transition-all"
                aria-label="YouTube Partner Jalan"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Destinasi Populer */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Destinasi Utama
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#katalog" className="hover:text-[#EAB308] transition-colors">Paket Wisata Semarang</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-[#EAB308] transition-colors">Paket Wisata Purwokerto</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-[#EAB308] transition-colors">Paket Wisata Dieng Plateau</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-[#EAB308] transition-colors">Paket Wisata Yogyakarta</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-[#EAB308] transition-colors">Paket Wisata Jakarta & Bogor</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-[#EAB308] transition-colors">Paket Wisata Bali 5 Hari</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-[#EAB308] transition-colors">Paket Wisata Lombok 7 Hari</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigasi Cepat */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#EAB308] transition-colors">Beranda Utama</a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-[#EAB308] transition-colors">Fasilitas All-In</a>
              </li>
              <li>
                <a href="#mengapa-kami" className="hover:text-[#EAB308] transition-colors">Keunggulan Kami</a>
              </li>
              <li>
                <a href="#custom-planner" className="hover:text-[#EAB308] transition-colors">Perencana Custom Trip</a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-[#EAB308] transition-colors">Galeri Dokumentasi</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#EAB308] transition-colors">Tanya Jawab (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Kontak Admin */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak Layanan
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                <span>Jl. Malioboro No. 88, Yogyakarta / Kantor Cabang Semarang & Purwokerto</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EAB308] shrink-0" />
                <a href="https://wa.me/6281234567890" className="hover:text-[#EAB308] transition-colors">
                  +62 812-3456-7890 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EAB308] shrink-0" />
                <a href="mailto:partnerjalantour@gmail.com" className="hover:text-[#EAB308] transition-colors">
                  partnerjalantour@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-200/90 gap-4">
          <p>© {new Date().getFullYear()} Partner Jalan (Partner Jalan Tour & Travel Organizer). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-[#EAB308] fill-[#EAB308]" /> untuk pecinta liburan Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};
