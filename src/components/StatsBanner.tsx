import React from 'react';
import { Users, Map, Award, Camera, Bus, ShieldCheck } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '10.000+',
      label: 'Peserta Trip',
      desc: 'Siswa, Komunitas, Keluarga & BUMN'
    },
    {
      icon: Map,
      value: '7+ Wilayah',
      label: 'Destinasi Utama',
      desc: 'Semarang, Jogja, Dieng, Bali, Lombok, dll'
    },
    {
      icon: Camera,
      value: 'Gratis 100%',
      label: 'Foto 4R & Frame 12R',
      desc: 'Dokumentasi eksklusif semua peserta'
    },
    {
      icon: Bus,
      value: 'Executive',
      label: 'Bus Pariwisata',
      desc: 'Nyaman, AC, Reclining seat & driver andal'
    }
  ];

  return (
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#EAF4F6] rounded-2xl flex items-center justify-center text-[#136E82]">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
                  Partner Feature
                </span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#136E82] tracking-tight font-sans">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#EAB308] mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {stat.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
