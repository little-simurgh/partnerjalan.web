import React, { useState } from 'react';
import { Sparkles, Send, Loader2, CheckCircle2, MessageCircle, Bus, Gift, MapPin, Calculator, ShieldCheck } from 'lucide-react';

interface CustomTripPlannerProps {
  onBookCustom: (customSummary: string) => void;
}

export const CustomTripPlanner: React.FC<CustomTripPlannerProps> = ({ onBookCustom }) => {
  const [destination, setDestination] = useState('Yogyakarta');
  const [participants, setParticipants] = useState(30);
  const [durationDays, setDurationDays] = useState(2);
  const [budgetPerPerson, setBudgetPerPerson] = useState(750000);
  const [preferencesText, setPreferencesText] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [proposalResult, setProposalResult] = useState<any>(null);

  const handleGeneratePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setProposalResult(null);

    try {
      const prefs = preferencesText
        ? preferencesText.split(',').map((p) => p.trim())
        : ['Dokumentasi foto video bagus', 'Wisata ramah keluarga & resto enak'];

      const res = await fetch('/api/plan-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination,
          participants,
          durationDays,
          budgetPerPerson,
          preferences: prefs,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setProposalResult(data);
      } else {
        throw new Error('Gagal memproses rekomendasi.');
      }
    } catch {
      // Local fallback in case of error
      setProposalResult({
        title: `Rencana Custom Trip ${destination} (${durationDays} Hari, ${participants} Pax)`,
        summary: `Estimasi paket eksklusif custom trip ke ${destination} untuk ${participants} peserta selama ${durationDays} hari. Dilengkapi bus pariwisata executive, makan terjamin, dan bonus foto 4R & frame 12R.`,
        recommendations: [
          `Hari 1: Penjemputan di titik pilihan, perjalanan dengan bus executive, kunjungan spot utama ${destination}, makan siang & check-in hotel.`,
          `Hari 2: Kunjungan spot foto & rekreasi favorit, makan malam bersama, dan berburu oleh-oleh khas.`,
          durationDays > 2 ? `Hari 3-${durationDays}: Eksplorasi wisata alam/pantai & sesi penutupan hangat.` : `Sesi foto bersama & kepulangan.`
        ],
        facilitiesIncluded: [
          'Bus Pariwisata Executive AC & Reclining Seat',
          'Tour Leader & Photographer Dedicated',
          'Tiket Wisata All-In',
          'Bonus Foto 4R/peserta & Frame 12R Rombongan'
        ],
        estimatedPricePerPax: `Rp ${(budgetPerPerson || 650000).toLocaleString('id-ID')}/Pack`
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSendToWhatsApp = () => {
    if (!proposalResult) return;
    const text = encodeURIComponent(
      `Halo Partner Jalan, saya ingin konsultasi Custom Trip:\n\n` +
      `📌 *Destinasi:* ${destination}\n` +
      `👥 *Jumlah Peserta:* ${participants} Pax\n` +
      `⏱ *Durasi:* ${durationDays} Hari\n` +
      `💰 *Perkiraan Budget:* Rp ${budgetPerPerson.toLocaleString('id-ID')}/Pack\n` +
      `📝 *Catatan Khusus:* ${preferencesText || 'Sesuai rekomendasi'}\n\n` +
      `Mohon info ketersediaan dan draf penawaran resminya. Terima kasih!`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <section id="custom-planner" className="py-16 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF4F6] text-[#136E82] text-xs font-bold mb-3 border border-[#136E82]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Asisten Perencana Custom Trip</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#136E82] tracking-tight font-sans">
            Rencanakan Custom Trip Rombongan Anda
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Punya rombongan sekolah, kantor, atau keluarga besar? Hitung estimasi budget dan buat rekomendasi itinerary
            impian secara instan!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-[#136E82] mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#EAB308]" />
              Parameter Custom Trip
            </h3>

            <form onSubmit={handleGeneratePlan} className="space-y-4">
              {/* Destination */}
              <div>
                <label className="block text-xs font-bold text-[#136E82] mb-1">
                  Pilih Destinasi Tujuan
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-gray-800 text-xs font-medium focus:outline-none focus:border-[#136E82]"
                >
                  <option value="Yogyakarta">Yogyakarta (Gunungkidul, Kota, Merapi, Candi)</option>
                  <option value="Dieng">Dieng Plateau (Negeri di Atas Awan)</option>
                  <option value="Semarang">Semarang (Dusun Semilir, Lawang Sewu, Saloka)</option>
                  <option value="Purwokerto">Purwokerto (Baturraden, Small World, Owabong)</option>
                  <option value="Jakarta & Bogor">Jakarta & Bogor (Dufan, Puncak, Safari)</option>
                  <option value="Bali">Bali (Kuta, Pandawa, GWK, Bedugul, Tanah Lot)</option>
                  <option value="Lombok">Lombok (Gili Trawangan, Kuta, Sasak Ende)</option>
                  <option value="Destinasi Custom Lain">Destinasi Lainnya (Request Khusus)</option>
                </select>
              </div>

              {/* Participant Count & Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#136E82] mb-1">
                    Jumlah Peserta (Pax)
                  </label>
                  <input
                    type="number"
                    min={5}
                    max={500}
                    value={participants}
                    onChange={(e) => setParticipants(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-gray-800 text-xs font-medium focus:outline-none focus:border-[#136E82]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#136E82] mb-1">
                    Durasi (Hari)
                  </label>
                  <select
                    value={durationDays}
                    onChange={(e) => setDurationDays(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-gray-800 text-xs font-medium focus:outline-none focus:border-[#136E82]"
                  >
                    <option value={1}>1 Hari (One Day)</option>
                    <option value={2}>2 Hari 1 Malam</option>
                    <option value={3}>3 Hari 2 Malam</option>
                    <option value={5}>5 Hari</option>
                    <option value={7}>7 Hari</option>
                  </select>
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-[#136E82]">
                    Target Budget / Pack
                  </label>
                  <span className="text-xs font-bold text-[#EAB308]">
                    Rp {budgetPerPerson.toLocaleString('id-ID')}
                  </span>
                </div>
                <input
                  type="range"
                  min={200000}
                  max={3000000}
                  step={50000}
                  value={budgetPerPerson}
                  onChange={(e) => setBudgetPerPerson(Number(e.target.value))}
                  className="w-full accent-[#EAB308] cursor-pointer"
                />
              </div>

              {/* Special preferences */}
              <div>
                <label className="block text-xs font-bold text-[#136E82] mb-1">
                  Catatan / Permintaan Khusus
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Outing perusahaan 50 pax, ingin games outbound, resto masakan laut, dan panggung hiburan."
                  value={preferencesText}
                  onChange={(e) => setPreferencesText(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-gray-800 text-xs placeholder-gray-400 focus:outline-none focus:border-[#136E82]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#136E82] hover:bg-[#0E5565] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Menyusun Rekomendasi...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#EAB308]" />
                    Buat Rekomendasi Itinerary Custom
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Result Proposal Card */}
          <div className="lg:col-span-7 bg-[#136E82] text-white p-6 sm:p-8 rounded-3xl border border-[#136E82]/10 shadow-md min-h-[420px] flex flex-col justify-between">
            {!proposalResult && !loading && (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-[#EAB308] text-gray-950 flex items-center justify-center mb-4 shadow-md">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Siap Merancang Trip Impian Rombongan Anda?
                </h4>
                <p className="text-xs text-gray-100 max-w-md">
                  Pilih parameter di sebelah kiri (Destinasi, Peserta, Durasi, Budget), lalu klik tombol
                  <strong className="text-[#EAB308] font-semibold"> "Buat Rekomendasi"</strong> untuk melihat draf
                  itinerary dan penawaran instan.
                </p>
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center justify-center h-full text-center py-16 space-y-4">
                <Loader2 className="w-10 h-10 text-[#EAB308] animate-spin" />
                <p className="text-sm font-semibold text-gray-100">
                  Konsultan Partner Jalan sedang menyusun estimasi rincian paket terbaik...
                </p>
              </div>
            )}

            {proposalResult && !loading && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="border-b border-white/10 pb-4">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#EAB308] text-gray-950 text-xs font-extrabold">
                      Draf Proposal Custom Trip
                    </span>
                    <span className="text-sm font-extrabold text-[#EAB308]">
                      Estimasi: {proposalResult.estimatedPricePerPax || `Rp ${budgetPerPerson.toLocaleString('id-ID')}/Pack`}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">
                    {proposalResult.title}
                  </h3>
                  <p className="text-xs text-gray-100 mt-2 leading-relaxed">
                    {proposalResult.summary}
                  </p>
                </div>

                {/* Itinerary Steps */}
                <div>
                  <h4 className="text-xs font-bold text-[#EAB308] uppercase tracking-wider mb-2">
                    Rencana Kegiatan:
                  </h4>
                  <div className="space-y-2 bg-white/10 p-4 rounded-2xl border border-white/10">
                    {proposalResult.recommendations?.map((rec: string, i: number) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Included Facilities */}
                <div>
                  <h4 className="text-xs font-bold text-[#EAB308] uppercase tracking-wider mb-2">
                    Fasilitas All-In Termasuk:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {proposalResult.facilitiesIncluded?.map((fac: string, i: number) => (
                      <div key={i} className="px-3 py-2 rounded-xl bg-white/10 text-xs text-gray-100 border border-white/10 flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#EAB308] shrink-0" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Kirim Draf Ini ke WA Admin
                  </button>

                  <button
                    onClick={() => onBookCustom(proposalResult.title)}
                    className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#EAB308] hover:bg-yellow-400 text-gray-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    Lanjutkan ke Form Pemesanan
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
