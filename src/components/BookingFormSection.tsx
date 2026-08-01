import React, { useState, useEffect } from 'react';
import { DESTINATIONS_DATA } from '../data/travelData';
import { BookingFormData } from '../types';
import { Send, CheckCircle, Clock, MapPin, Users, Calendar, Phone, User, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';

interface BookingFormSectionProps {
  initialPackageName?: string;
  initialRegionName?: string;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({
  initialPackageName = '',
  initialRegionName = ''
}) => {
  const [formType, setFormType] = useState<'native' | 'tally'>('native');

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    region: initialRegionName || 'Semarang',
    packageName: initialPackageName || 'Paket Wisata Semarang 1',
    tripType: 'Private Trip',
    departureDate: '',
    participantsCount: 20,
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackageName) {
      setFormData((prev) => ({
        ...prev,
        packageName: initialPackageName,
        region: initialRegionName || prev.region
      }));
    }
  }, [initialPackageName, initialRegionName]);

  // Update available packages when region changes
  const currentRegionData = DESTINATIONS_DATA.find(
    (r) => r.region.toLowerCase() === formData.region.toLowerCase()
  ) || DESTINATIONS_DATA[0];

  const handleRegionChange = (newRegionName: string) => {
    const reg = DESTINATIONS_DATA.find((r) => r.region === newRegionName) || DESTINATIONS_DATA[0];
    setFormData({
      ...formData,
      region: reg.region,
      packageName: reg.packages[0]?.name || ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Mohon lengkapi Nama dan Nomor WhatsApp.');
      return;
    }

    setSubmitted(true);

    // Save lead to local storage
    try {
      const existingLeads = JSON.parse(localStorage.getItem('pj_leads') || '[]');
      existingLeads.push({ ...formData, createdAt: new Date().toISOString() });
      localStorage.setItem('pj_leads', JSON.stringify(existingLeads));
    } catch {
      // ignore
    }

    // Format WhatsApp message
    const message = encodeURIComponent(
      `Halo Admin Partner Jalan, saya ingin melakukan pemesanan trip:\n\n` +
      `👤 *Nama:* ${formData.fullName}\n` +
      `📱 *No WA:* ${formData.phone}\n` +
      `🗺 *Destinasi:* ${formData.region}\n` +
      `📦 *Paket:* ${formData.packageName}\n` +
      `🏷 *Tipe Trip:* ${formData.tripType}\n` +
      `📅 *Rencana Keberangkatan:* ${formData.departureDate || 'Belum pasti / Fleksibel'}\n` +
      `👥 *Jumlah Peserta:* ${formData.participantsCount} Pax\n` +
      `💬 *Catatan:* ${formData.notes || '-'}\n\n` +
      `Mohon konfirmasi pendaftaran dan rincian pembayarannya. Terima kasih!`
    );

    setTimeout(() => {
      window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
    }, 800);
  };

  return (
    <section id="form-pemesanan" className="py-16 bg-[#F8F9FA] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF4F6] text-[#136E82] text-xs font-bold mb-3 border border-[#136E82]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>Form Pemesanan & Pendataan Leads</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#136E82] tracking-tight font-sans">
            Formulir Pemesanan Trip
          </h2>
          <p className="mt-2 text-gray-600 text-sm">
            Isi formulir singkat di bawah ini untuk memesan atau berkonsultasi mengenai paket Open / Private Trip Anda.
          </p>

          {/* Form Engine Switcher */}
          <div className="mt-6 inline-flex p-1.5 rounded-full bg-gray-200/80 border border-gray-300/60">
            <button
              onClick={() => setFormType('native')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                formType === 'native'
                  ? 'bg-[#136E82] text-white shadow-xs'
                  : 'text-gray-600 hover:text-[#136E82]'
              }`}
            >
              Form Pemesanan Cepat
            </button>
            <button
              onClick={() => setFormType('tally')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                formType === 'tally'
                  ? 'bg-[#136E82] text-white shadow-xs'
                  : 'text-gray-600 hover:text-[#136E82]'
              }`}
            >
              Embed Tally.so Form
            </button>
          </div>
        </div>

        {formType === 'native' ? (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#EAF4F6] text-[#136E82] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10 text-[#136E82]" />
                </div>
                <h3 className="text-2xl font-bold text-[#136E82]">
                  Data Pemesanan Terkirim!
                </h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                  Terima kasih <strong className="text-[#EAB308]">{formData.fullName}</strong>. Data Anda telah terekam,
                  dan aplikasi WhatsApp akan otomatis terbuka untuk melanjutkan obrolan dengan Customer Service Partner Jalan.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold"
                  >
                    Isi Form Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#136E82] mb-1 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#EAB308]" />
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-gray-800 text-xs placeholder-gray-400 focus:outline-none focus:border-[#136E82]"
                    />
                  </div>

                  {/* Phone / WA */}
                  <div>
                    <label className="block text-xs font-bold text-[#136E82] mb-1 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#EAB308]" />
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 081234567890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-gray-800 text-xs placeholder-gray-400 focus:outline-none focus:border-[#136E82]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Region Selection */}
                  <div>
                    <label className="block text-xs font-bold text-[#136E82] mb-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#EAB308]" />
                      Pilih Wilayah Destinasi
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => handleRegionChange(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-gray-800 text-xs focus:outline-none focus:border-[#136E82] font-medium"
                    >
                      {DESTINATIONS_DATA.map((r) => (
                        <option key={r.slug} value={r.region}>
                          {r.region}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Package Selection */}
                  <div>
                    <label className="block text-xs font-bold text-[#136E82] mb-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#EAB308]" />
                      Pilihan Paket Trip
                    </label>
                    <select
                      value={formData.packageName}
                      onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-gray-800 text-xs focus:outline-none focus:border-[#136E82] font-medium"
                    >
                      {currentRegionData.packages.map((pkg) => (
                        <option key={pkg.id} value={pkg.name}>
                          {pkg.name} ({pkg.type} - {pkg.price})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Trip Type */}
                  <div>
                    <label className="block text-xs font-bold text-[#136E82] mb-1">
                      Tipe Trip
                    </label>
                    <select
                      value={formData.tripType}
                      onChange={(e) => setFormData({ ...formData, tripType: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-gray-800 text-xs focus:outline-none focus:border-[#136E82]"
                    >
                      <option value="Private Trip">Private Trip (Rombongan Sendiri)</option>
                      <option value="Open Trip">Open Trip (Gabungan)</option>
                    </select>
                  </div>

                  {/* Departure Date */}
                  <div>
                    <label className="block text-xs font-bold text-[#136E82] mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#EAB308]" />
                      Rencana Tanggal
                    </label>
                    <input
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-gray-800 text-xs focus:outline-none focus:border-[#136E82]"
                    />
                  </div>

                  {/* Participants Count */}
                  <div>
                    <label className="block text-xs font-bold text-[#136E82] mb-1 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#EAB308]" />
                      Jumlah Peserta (Pax)
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={500}
                      value={formData.participantsCount}
                      onChange={(e) => setFormData({ ...formData, participantsCount: Number(e.target.value) })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-gray-800 text-xs focus:outline-none focus:border-[#136E82]"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-[#136E82] mb-1 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#EAB308]" />
                    Catatan Tambahan / Special Request
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contoh: Titik penjemputan di Stasiun Tawang Semarang, butuh opsi vegetarian untuk 3 orang."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F9FA] border border-gray-200 text-gray-800 text-xs placeholder-gray-400 focus:outline-none focus:border-[#136E82]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#136E82] hover:bg-[#0E5565] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Send className="w-4 h-4 fill-white text-[#EAB308]" />
                  Kirim Pemesanan via WhatsApp
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="bg-white p-4 sm:p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="aspect-[4/5] sm:aspect-[16/10] w-full bg-[#F8F9FA] rounded-2xl border border-gray-200 overflow-hidden relative">
              <iframe
                data-tally-src="https://tally.so/embed/mRxe8D?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="100%"
                title="Form Pemesanan Partner Jalan"
                className="w-full h-full border-0"
                src="https://tally.so/embed/mRxe8D?alignLeft=1&hideTitle=1&transparentBackground=1"
              ></iframe>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
              <span>Formulir didukung oleh Tally.so.</span>
              <a
                href="https://tally.so"
                target="_blank"
                rel="noreferrer"
                className="text-[#136E82] font-bold underline inline-flex items-center gap-0.5"
              >
                Buka di tab terpisah <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
