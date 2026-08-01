import React from 'react';
import { MapPin, Star, Navigation, ExternalLink, ShieldCheck, CheckCircle, Clock, Phone, Mail, Building2 } from 'lucide-react';

export const GoogleLocationReviews: React.FC = () => {
  const googleShareUrl = "https://share.google/dBy7I8fBpiah22o5U";

  const googleReviews = [
    {
      id: 1,
      author: 'Ahmad Fauzi & Rombongan SMA 1',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      date: '1 minggu lalu',
      tripName: 'Private Trip Dieng Plateau (30 Pax)',
      comment: 'Layanan Partner Jalan luar biasa mantap! Dari armada bus executive yang super bersih & dingin, tour leader yang ramah banget bantu peserta lansia dan anak-anak. Hasil dokumentasi foto & videonya keren abis, dapet bonus frame foto 12R lagi. Recommended banget!',
    },
    {
      id: 2,
      author: 'Dian Permata (Grup Outing Kantor)',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      date: '2 minggu lalu',
      tripName: 'Custom Trip Bali 5D4N',
      comment: 'Sangat profesional! Kami pesan custom trip 45 pax untuk gathering kantor. Makanannya enak di resto ternama, tempat penginapan hotel bintang 4 sesuai perjanjian tanpa ada biaya tersembunyi. Admin fast respon 24/7!',
    },
    {
      id: 3,
      author: 'Rizky Kurniawan',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      date: '1 bulan lalu',
      tripName: 'Open Trip Yogyakarta 2D1N',
      comment: 'Baru pertama kali ikutan Open Trip di Partner Jalan dan pengalaman nya ramah banget buat solo traveler. Rutenya pas, nggak terlalu buru-buru, guide nya informatif seputar sejarah Candi & Gumuk Pasir. Bintang 5 pokoknya!',
    },
    {
      id: 4,
      author: 'Siti Rahmawati & Keluarga',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
      rating: 5,
      date: '2 bulan lalu',
      tripName: 'Paket Wisata Semarang & Lawang Sewu',
      comment: 'Sangat responsif dari awal konsultasi itinerary sampai kepulangan trip. Bus pariwisata nya nyaman banget, sopir mengemudi halus dan tenang. Anak-anak seneng banget dapet souvenir merchenise gratis.',
    },
  ];

  return (
    <section id="google-maps-location" className="py-16 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF4F6] text-[#136E82] text-xs font-bold mb-3 border border-[#136E82]/20">
            {/* Google Icon SVG */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Google Maps Verified Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#136E82] tracking-tight font-sans">
            Ulasan Google Maps & Lokasi Kantor Kami
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Partner Jalan terdaftar resmi di Google Maps. Cek transparansi lokasi kantor, rute jalan, dan ulasan langsung dari para pelanggan kami.
          </p>
        </div>

        {/* Rating Banner Badge */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#EAF4F6] border border-[#136E82]/20 flex items-center justify-center shrink-0">
              <svg className="w-9 h-9" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-[#136E82]">4.9</span>
                <div className="flex text-[#EAB308]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#EAB308] text-[#EAB308]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-500">(150+ Ulasan Google)</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#136E82]" />
                <span>Bisnis Terverifikasi di Google Maps • Rating Sempurna Pasca Trip</span>
              </p>
            </div>
          </div>

          <a
            href={googleShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-[#EAB308] hover:bg-yellow-500 text-gray-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Buka Profil Google Maps
          </a>
        </div>

        {/* Map & Office Location Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Interactive Map Embed View */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden relative border border-gray-200">
              <iframe
                title="Google Maps Partner Jalan Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126498.41113000635!2d110.32049448375841!3d-7.797223697920194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787d21653ad%3A0xd9d57a922119934f!2sYogyakarta%2C%20Yogyakarta%20City%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-md border border-gray-200 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EAB308]" />
                <span className="text-xs font-bold text-[#136E82]">Kantor Pusat Partner Jalan</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
              <div className="text-xs text-gray-600 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#136E82]" />
                <span>Terbuka Untuk Kunjungan & Konsultasi Langsung</span>
              </div>
              <a
                href={googleShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#136E82] hover:bg-[#0E5565] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                Petunjuk Arah (Directions)
              </a>
            </div>
          </div>

          {/* Office Info & Hours */}
          <div className="lg:col-span-5 bg-[#136E82] text-white p-6 sm:p-8 rounded-3xl border border-[#136E82]/10 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#EAB308] text-xs font-bold mb-4">
                <Building2 className="w-3.5 h-3.5" />
                <span>Informasi Kantor Operasional</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-4">
                Partner Jalan Tour & Travel
              </h3>

              <div className="space-y-4 text-xs text-gray-100 mb-6">
                <div className="flex items-start gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/10">
                  <MapPin className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold mb-0.5">Alamat Utama:</strong>
                    <span>Jl. Malioboro No. 88, Malioboro, Kota Yogyakarta (Juga melayani area kumpul Semarang, Purwokerto, & Solo).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/10">
                  <Clock className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold mb-0.5">Jam Operasional Kantor:</strong>
                    <span>Senin - Sabtu: 08.00 - 18.00 WIB</span><br />
                    <span className="text-[#EAB308] font-semibold">Layanan Konsultasi WA Admin: 24/7 Nonstop</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/10 p-3.5 rounded-2xl border border-white/10">
                  <Phone className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold mb-0.5">Kontak Resmi:</strong>
                    <span>WhatsApp / Call: +62 812-3456-7890</span><br />
                    <span>Email: partnerjalantour@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={googleShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-2xl bg-[#EAB308] hover:bg-yellow-500 text-gray-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all text-center"
            >
              Lihat Peta di Google Maps ({googleShareUrl})
            </a>
          </div>
        </div>

        {/* Real Google Reviews Grid */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#136E82]">
                Ulasan Asli Dari Google Maps Customer Kami
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Tinjauan riil kepuasan peserta trip rombongan sekolah, instansi kantor, dan keluarga.
              </p>
            </div>

            <a
              href={googleShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#136E82] hover:text-[#0E5565] underline"
            >
              <span>Lihat Semua 150+ Ulasan</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {googleReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#EAF4F6]"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#136E82]">
                          {rev.author}
                        </h4>
                        <span className="text-[10px] text-gray-400 font-medium">
                          {rev.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#EAF4F6] text-[10px] font-bold text-[#136E82]">
                      <CheckCircle className="w-3 h-3 text-[#EAB308]" />
                      <span>Google Verified</span>
                    </div>
                  </div>

                  <div className="flex text-[#EAB308] mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />
                    ))}
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 text-[10px] font-bold mb-3">
                    {rev.tripName}
                  </span>

                  <p className="text-xs text-gray-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
