import React, { useState } from 'react';
import { FAQS_DATA } from '../data/travelData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-[#F8F9FA] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF4F6] text-[#136E82] text-xs font-bold mb-3 border border-[#136E82]/20">
            <HelpCircle className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Tanya Jawab (FAQ)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#136E82] tracking-tight font-sans">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className="mt-2 text-gray-600 text-sm">
            Informasi lengkap seputar pemesanan, fasilitas, sistem pembayaran, dan pelaksanaan trip di Partner Jalan.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-[#136E82] hover:text-[#0E5565] transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#EAF4F6] text-[#136E82] text-xs font-extrabold flex items-center justify-center shrink-0">
                      Q
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#EAB308] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-gray-600 border-t border-gray-100 leading-relaxed bg-[#F8F9FA]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask Question CTA */}
        <div className="mt-12 text-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-600 mb-3">
            Punya pertanyaan lain yang belum terjawab? Tim Admin Partner Jalan siap melayani Anda 24/7!
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Partner%20Jalan%20saya%20ingin%20bertanya%20seputar%20paket%20trip"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#136E82] hover:bg-[#0E5565] text-white font-bold text-xs transition-colors shadow-xs"
          >
            Hubungi Admin via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
