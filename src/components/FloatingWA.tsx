import React, { useState } from 'react';
import { MessageCircle, X, Compass, Send, Sparkles } from 'lucide-react';

export const FloatingWA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      title: 'Tanya Paket Wisata Dieng / Jogja',
      msg: 'Halo Partner Jalan, saya ingin bertanya tentang paket wisata Dieng / Yogyakarta...'
    },
    {
      title: 'Konsultasi Private Trip Rombongan',
      msg: 'Halo Partner Jalan, saya ingin konsultasi Private Trip Rombongan Kantor / Keluarga...'
    },
    {
      title: 'Tanya Paket Wisata Bali / Lombok',
      msg: 'Halo Partner Jalan, saya mau minta brosur & rincian paket Bali / Lombok...'
    },
    {
      title: 'Chat Langsung CS Partner Jalan',
      msg: 'Halo Partner Jalan, saya mau diskusi mengenai jadwal keberangkatan trip...'
    }
  ];

  const handleOpenWA = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup Modal */}
      {isOpen && (
        <div className="mb-4 w-72 sm:w-80 bg-[#136E82] border border-[#136E82]/30 rounded-2xl shadow-2xl p-4 text-white animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#EAB308] text-gray-950 flex items-center justify-center font-bold">
                <MessageCircle className="w-4 h-4 fill-gray-950" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-white">CS Partner Jalan</h4>
                <p className="text-[10px] text-[#EAB308] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] animate-ping" /> Online 24/7
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
              aria-label="Tutup popup WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-100 my-3 leading-relaxed">
            Pilih pertanyaan cepat untuk terhubung langsung dengan Customer Service Partner Jalan via WhatsApp:
          </p>

          <div className="space-y-2">
            {quickMessages.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsOpen(false);
                  handleOpenWA(item.msg);
                }}
                className="w-full text-left p-2.5 rounded-xl bg-white/10 hover:bg-[#EAB308] text-white hover:text-gray-950 border border-white/10 text-xs font-bold transition-all flex items-center justify-between gap-2 group"
              >
                <span className="line-clamp-1">{item.title}</span>
                <Send className="w-3.5 h-3.5 text-[#EAB308] group-hover:text-gray-950 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 rounded-full bg-[#136E82] text-white shadow-2xl hover:bg-[#0E5565] hover:scale-105 transition-all duration-300 flex items-center justify-center border-2 border-[#EAB308]"
        aria-label="Tanya Admin WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EAB308] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#EAB308]"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white text-[#136E82]" />
      </button>
    </div>
  );
};
