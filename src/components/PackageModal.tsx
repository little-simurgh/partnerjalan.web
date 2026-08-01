import React from 'react';
import { Package, RegionData } from '../types';
import { FACILITIES_DATA } from '../data/travelData';
import { X, CheckCircle, Clock, MapPin, Bus, Camera, Gift, Hotel, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';

interface PackageModalProps {
  pkg: Package | null;
  region: RegionData | null;
  onClose: () => void;
  onBook: (packageName: string, regionName: string) => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({ pkg, region, onClose, onBook }) => {
  if (!pkg || !region) return null;

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Halo Partner Jalan, saya ingin menanyakan & memesan *${pkg.name}* (${region.region}) dengan tipe *${pkg.type}* (Harga: ${pkg.price}). Mohon info jadwal ketersediaan dan detailnya. Terima kasih!`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#136E82]/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl my-8 bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#EAF4F6] border-b border-gray-200/60 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white hover:bg-gray-100 text-gray-700 transition-colors shadow-xs"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-[#136E82] text-white text-xs font-bold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#EAB308]" />
              {region.region}
            </span>
            <span className="px-3 py-1 rounded-full bg-white text-gray-800 text-xs font-bold flex items-center gap-1 border border-gray-200">
              <Clock className="w-3.5 h-3.5 text-[#136E82]" />
              {pkg.type}
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-[#136E82] font-sans pr-8">
            {pkg.name}
          </h3>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-xs text-gray-600">Harga Mulai Dari:</span>
            <span className="text-2xl font-black text-[#136E82] font-sans">
              {pkg.price}
            </span>
            <span className="text-xs text-gray-500">(All-In Fasilitas)</span>
          </div>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-700 text-sm">
          {/* Complete Itinerary */}
          <div>
            <h4 className="text-xs font-bold text-[#136E82] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#EAB308]" />
              Rencana & Ringkasan Itinerary
            </h4>
            <div className="space-y-2 bg-[#F8F9FA] p-4 rounded-2xl border border-gray-100">
              {pkg.itinerary.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#EAF4F6] text-[#136E82] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#136E82]/20">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hotel Recommendations if available */}
          {region.hotels.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-[#136E82] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Hotel className="w-4 h-4 text-[#EAB308]" />
                Pilihan Hotel / Penginapan Rekomendasi
              </h4>
              <div className="flex flex-wrap gap-2">
                {region.hotels.map((hotel, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-[#F8F9FA] text-xs text-gray-800 border border-gray-200 flex items-center gap-1.5"
                  >
                    <Hotel className="w-3 h-3 text-[#136E82]" />
                    {hotel}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Included Facilities Grid */}
          <div>
            <h4 className="text-xs font-bold text-[#136E82] uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#EAB308]" />
              Fasilitas & Layanan All-In Terhitung
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Tour Facilities */}
              <div className="bg-[#F8F9FA] p-4 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-1.5 font-bold text-[#136E82] text-xs mb-2">
                  <Bus className="w-4 h-4 text-[#EAB308]" /> Fasilitas Kendaraan & Kru
                </div>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  {FACILITIES_DATA.tour.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#136E82] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Peserta Facilities */}
              <div className="bg-[#F8F9FA] p-4 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-1.5 font-bold text-[#136E82] text-xs mb-2">
                  <Camera className="w-4 h-4 text-[#EAB308]" /> Fasilitas Peserta
                </div>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  {FACILITIES_DATA.peserta.map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#136E82] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonus Exclusive */}
              <div className="bg-[#EAF4F6] p-4 rounded-2xl border border-[#136E82]/20">
                <div className="flex items-center gap-1.5 font-bold text-[#136E82] text-xs mb-2">
                  <Gift className="w-4 h-4 text-[#EAB308]" /> Bonus Eksklusif Gratis
                </div>
                <ul className="space-y-1.5 text-xs text-[#136E82]">
                  {FACILITIES_DATA.bonus.map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#EAB308] shrink-0 mt-0.5" />
                      <span className="font-semibold">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#F8F9FA] border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleWhatsAppDirect}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#EAB308] hover:bg-[#D9A200] text-gray-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-gray-950 text-gray-950" />
            Tanya via WhatsApp
          </button>

          <button
            onClick={() => {
              onClose();
              onBook(pkg.name, region.region);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#136E82] hover:bg-[#0E5565] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            Isi Form Pemesanan
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
