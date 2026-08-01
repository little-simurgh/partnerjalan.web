import React from 'react';
import { ShieldCheck, Camera, Heart, Bus, Compass, DollarSign, Sparkles } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const usps = [
    {
      icon: Heart,
      title: 'Partner Rangers Super Ramah',
      desc: 'Tour Leader & kru pendamping yang komunikatif, terlatih, dan siap melayani semua usia peserta trip.'
    },
    {
      icon: Camera,
      title: 'Dokumentasi Foto & Video Premium',
      desc: 'Fotografer & videografer dedicated menghasilkan foto estetik & video cinematic siap tayang di media sosial.'
    },
    {
      icon: Sparkles,
      title: 'Souvenir Foto 4R & Frame 12R',
      desc: 'Bukan sekadar foto digital, setiap peserta mendapatkan kenang-kenangan foto cetak fisik berkualitas.'
    },
    {
      icon: Bus,
      title: 'Bus Executive Pariwisata Sejuk',
      desc: 'Armada bus terbaru lengkap dengan AC dingin, Reclining seat, Charger HP, dan audio karaoke.'
    },
    {
      icon: DollarSign,
      title: 'Harga Transparan Tanpa Hidden Fee',
      desc: 'Semua rincian biaya, tiket masuk, hingga tips pengemudi sudah terhitung transparan sejak awal.'
    },
    {
      icon: Compass,
      title: 'Fleksibilitas Custom Trip',
      desc: 'Bebas menentukan objek wisata, pilihan hotel, dan titik penjemputan sesuai kebutuhan rombongan Anda.'
    }
  ];

  return (
    <section id="mengapa-kami" className="py-16 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF4F6] text-[#136E82] text-xs font-bold mb-3 border border-[#136E82]/20">
            <ShieldCheck className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Keunggulan Partner Jalan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#136E82] tracking-tight font-sans">
            Mengapa Memilih Partner Jalan?
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Kami bukan sekadar menjual tiket paket wisata, tetapi menciptakan kenangan indah perjalanan liburan yang berkesan selamanya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, idx) => {
            const Icon = usp.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EAF4F6] flex items-center justify-center text-[#136E82] mb-4 group-hover:bg-[#136E82] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#136E82] mb-2 group-hover:text-[#EAB308] transition-colors">
                  {usp.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
