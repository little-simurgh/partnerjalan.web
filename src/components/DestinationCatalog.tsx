import React, { useState, useMemo } from 'react';
import { DESTINATIONS_DATA } from '../data/travelData';
import { Package, RegionData } from '../types';
import { MapPin, Clock, CheckCircle2, Hotel, ArrowRight, Sparkles, Search, Filter } from 'lucide-react';

interface DestinationCatalogProps {
  selectedRegionSlug: string;
  onSelectRegionSlug: (slug: string) => void;
  onSelectPackage: (pkg: Package, region: RegionData) => void;
  onBookPackage: (packageName: string, regionName: string) => void;
}

export const DestinationCatalog: React.FC<DestinationCatalogProps> = ({
  selectedRegionSlug,
  onSelectRegionSlug,
  onSelectPackage,
  onBookPackage,
}) => {
  const [durationFilter, setDurationFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const regions = DESTINATIONS_DATA;

  // Filtered packages
  const filteredData = useMemo(() => {
    return regions.map((region) => {
      // Check region match
      if (selectedRegionSlug && selectedRegionSlug !== 'all' && region.slug !== selectedRegionSlug) {
        return null;
      }

      const matchingPackages = region.packages.filter((pkg) => {
        // Duration filter
        if (durationFilter === 'oneday' && pkg.type !== 'One Day Service') return false;
        if (durationFilter === '2d1n' && pkg.type !== '2 Hari 1 Malam') return false;
        if (durationFilter === 'multiday' && !['5 Hari', '7 Hari'].includes(pkg.type)) return false;

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = pkg.name.toLowerCase().includes(q);
          const matchRegion = region.region.toLowerCase().includes(q);
          const matchItinerary = pkg.itinerary.some((item) => item.toLowerCase().includes(q));
          if (!matchName && !matchRegion && !matchItinerary) return false;
        }

        return true;
      });

      if (matchingPackages.length === 0) return null;

      return {
        ...region,
        packages: matchingPackages,
      };
    }).filter(Boolean) as RegionData[];
  }, [selectedRegionSlug, durationFilter, searchQuery, regions]);

  return (
    <section id="katalog" className="py-16 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF4F6] text-[#136E82] text-xs font-bold mb-3 border border-[#136E82]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Katalog Resmi Paket Wisata</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#136E82] tracking-tight font-sans">
            Pilih Destinasi & Paket Trip Impian
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Tersedia berbagai pilihan paket Open Trip dan Private Trip lengkap dengan Bus Executive, Tiket Wisata,
            Makan, dan Dokumentasi Video/Foto.
          </p>
        </div>

        {/* Region Filter Buttons Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          <button
            onClick={() => onSelectRegionSlug('all')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
              selectedRegionSlug === 'all' || !selectedRegionSlug
                ? 'bg-[#136E82] text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Semua Destinasi
          </button>
          {regions.map((reg) => (
            <button
              key={reg.slug}
              onClick={() => onSelectRegionSlug(reg.slug)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                selectedRegionSlug === reg.slug
                  ? 'bg-[#136E82] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#EAB308]" />
              {reg.region}
            </button>
          ))}
        </div>

        {/* Secondary Filters Bar (Duration + Search) */}
        <div className="bg-white border border-gray-100 p-4 rounded-3xl mb-10 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          {/* Duration Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs text-gray-500 font-bold flex items-center gap-1 whitespace-nowrap mr-1">
              <Filter className="w-3.5 h-3.5 text-[#EAB308]" /> Durasi:
            </span>
            <button
              onClick={() => setDurationFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                durationFilter === 'all'
                  ? 'bg-[#EAF4F6] text-[#136E82] font-bold'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setDurationFilter('oneday')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                durationFilter === 'oneday'
                  ? 'bg-[#EAF4F6] text-[#136E82] font-bold'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              One Day Service
            </button>
            <button
              onClick={() => setDurationFilter('2d1n')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                durationFilter === '2d1n'
                  ? 'bg-[#EAF4F6] text-[#136E82] font-bold'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              2 Hari 1 Malam
            </button>
            <button
              onClick={() => setDurationFilter('multiday')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                durationFilter === 'multiday'
                  ? 'bg-[#EAF4F6] text-[#136E82] font-bold'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Multi-Day (5-7 Hari)
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-2.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari destinasi / objek wisata..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#136E82]"
            />
          </div>
        </div>

        {/* Empty state */}
        {filteredData.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-sm">
              Tidak ada paket wisata yang cocok dengan pencarian / filter Anda.
            </p>
            <button
              onClick={() => {
                onSelectRegionSlug('all');
                setDurationFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 rounded-full bg-[#136E82] text-white text-xs font-bold shadow-sm"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Package Listings by Region */}
        <div className="space-y-12">
          {filteredData.map((regData) => (
            <div key={regData.slug} className="space-y-6">
              {/* Region Header Card */}
              <div className="relative rounded-3xl overflow-hidden bg-[#136E82] text-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm border border-[#136E82]/10">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-white/20">
                    <img
                      src={regData.image}
                      alt={regData.region}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#EAB308] uppercase tracking-wider">
                        Wilayah Destinasi
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
                      <span className="text-xs text-gray-200">
                        {regData.packages.length} Paket Tersedia
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white mt-0.5">
                      {regData.region}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-100 mt-1 max-w-2xl leading-relaxed">
                      {regData.description}
                    </p>

                    {/* Hotel Preview if available */}
                    {regData.hotels.length > 0 && (
                      <div className="mt-3 flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-semibold text-gray-200 flex items-center gap-1">
                          <Hotel className="w-3.5 h-3.5 text-[#EAB308]" /> Hotel Rekomendasi:
                        </span>
                        {regData.hotels.slice(0, 4).map((h, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-white/10 text-[11px] text-white"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regData.packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Header info */}
                      <div className="pb-4 border-b border-gray-100">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#EAF4F6] text-[#136E82] text-[11px] font-bold">
                            <Clock className="w-3 h-3 text-[#EAB308]" />
                            {pkg.type}
                          </span>
                          {pkg.popular && (
                            <span className="px-3 py-1 rounded-full bg-[#EAB308] text-gray-950 text-[10px] font-extrabold uppercase tracking-wider">
                              Best Seller
                            </span>
                          )}
                        </div>

                        <h4 className="text-lg font-bold text-[#136E82] group-hover:text-[#0E5565] transition-colors mt-2">
                          {pkg.name}
                        </h4>

                        <div className="mt-2 flex items-baseline gap-1">
                          <span className="text-xl font-black text-[#136E82]">
                            {pkg.price}
                          </span>
                        </div>
                      </div>

                      {/* Itinerary Preview */}
                      <div className="py-4 space-y-2">
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                          Spot Destinasi Utama:
                        </span>
                        <ul className="space-y-1.5 text-xs text-gray-600">
                          {pkg.itinerary.slice(0, 5).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#136E82] shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="pt-3 flex items-center gap-2 mt-auto">
                      <button
                        onClick={() => onSelectPackage(pkg, regData)}
                        className="flex-1 py-2.5 px-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-[#136E82] text-xs font-bold transition-colors flex items-center justify-center gap-1"
                      >
                        Detail
                      </button>

                      <button
                        onClick={() => onBookPackage(pkg.name, regData.region)}
                        className="py-2.5 px-5 rounded-2xl bg-[#136E82] hover:bg-[#0E5565] text-white text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-sm"
                      >
                        Pesan
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
