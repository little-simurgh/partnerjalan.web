import React from 'react';
import { FACILITIES_DATA } from '../data/travelData';
import { Bus, UserCheck, Gift, CheckCircle, Sparkles, Camera, ShieldAlert, Award } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  return (
    <section id="fasilitas" className="py-16 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF4F6] text-[#136E82] text-xs font-bold mb-3 border border-[#136E82]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Fasilitas Terlengkap All-In</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#136E82] tracking-tight font-sans">
            Fasilitas Mewah & Pelayanan Sepenuh Hati
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Di Partner Jalan, Anda tidak perlu pusing memikirkan biaya tersembunyi. Semua kebutuhan perjalanan rombongan
            sudah kami persiapkan secara transparan dan berkelas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Fasilitas Armada & Kru */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EAF4F6] flex items-center justify-center text-[#136E82] mb-6">
                <Bus className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-[#136E82] mb-2">
                Layanan Armada & Kru Tour
              </h3>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                Armada bus pariwisata executive bersih, dingin, dan dikemudikan oleh pengemudi berpengalaman & bersahabat.
              </p>

              <ul className="space-y-3">
                {FACILITIES_DATA.tour.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#136E82] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Fasilitas Konsumsi & Tiket Peserta */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EAF4F6] flex items-center justify-center text-[#136E82] mb-6">
                <UserCheck className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-[#136E82] mb-2">
                Layanan Tiket & Konsumsi Peserta
              </h3>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                Tiket masuk objek wisata all-in, konsumsi menu resto favorit, snack box lezat, dan air mineral berkala.
              </p>

              <ul className="space-y-3">
                {FACILITIES_DATA.peserta.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#136E82] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: Bonus Eksklusif Partner Jalan */}
          <div className="bg-[#136E82] text-white p-8 rounded-3xl shadow-md border border-[#136E82]/10 relative group flex flex-col justify-between">
            <div className="absolute top-6 right-6 bg-[#EAB308] text-gray-950 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              Bonus Spesial
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EAB308] text-gray-950 flex items-center justify-center mb-6 shadow-md">
                <Gift className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Bonus & Dokumentasi Gratis
              </h3>
              <p className="text-xs text-gray-100 mb-6 leading-relaxed">
                Kenang-kenangan eksklusif! Foto dicetak langsung untuk setiap peserta + frame kayu 12R untuk organisasi.
              </p>

              <ul className="space-y-3">
                {FACILITIES_DATA.bonus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-white font-medium">
                    <CheckCircle className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF4F6] text-[#136E82] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#136E82]">
                Garansi Layanan & Kepuasan Peserta
              </h4>
              <p className="text-xs text-gray-500">
                Semua fasilitas dijamin sesuai penawaran tanpa biaya tersembunyi (*No Hidden Fees*).
              </p>
            </div>
          </div>
          <a
            href="#custom-planner"
            className="px-6 py-3 rounded-full bg-[#136E82] hover:bg-[#0E5565] text-white font-bold text-xs whitespace-nowrap transition-colors"
          >
            Konsultasi Rombongan
          </a>
        </div>
      </div>
    </section>
  );
};
