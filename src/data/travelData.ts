import { RegionData, FacilitiesData, Testimonial, GalleryItem } from '../types';

export const DESTINATIONS_DATA: RegionData[] = [
  {
    region: 'Semarang',
    slug: 'semarang',
    description: 'Nikmati pesona Kota Atlas dengan wisata sejarah Lawang Sewu, Kota Lama, dan keindahan wisata modern Dusun Semilir.',
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=800&q=80',
    hotels: [],
    packages: [
      {
        id: 'smg-1',
        name: 'Paket Wisata Semarang 1',
        type: 'One Day Service',
        price: 'Rp 250K/Pack',
        numericPrice: 250000,
        itinerary: [
          'Penjemputan di Titik Kumpul',
          'Wisata Dusun Semilir (Spot Foto & Wahana)',
          'Makan Siang di Resto Lokal',
          'Jelajah Sejarah Lawang Sewu',
          'Eksplorasi Kota Lama Semarang',
          'Belanja Oleh-oleh di Kampung Semarang Resto & Souvenir'
        ],
        popular: true
      },
      {
        id: 'smg-2',
        name: 'Paket Wisata Semarang 2',
        type: 'One Day Service',
        price: 'Rp 280K/Pack',
        numericPrice: 280000,
        itinerary: [
          'Penjemputan Peserta & Briefing',
          'Kunjungan Cimory On The Valley',
          'Makan Siang Gedong Salam Resto',
          'Wisata Rekreasi Dusun Semilir',
          'Jalan-jalan Santai di Kota Lama',
          'Pusat Oleh-oleh Kampung Semarang Resto'
        ]
      },
      {
        id: 'smg-3',
        name: 'Paket Wisata Semarang 3',
        type: 'One Day Service',
        price: 'Rp 315K/Pack',
        numericPrice: 315000,
        itinerary: [
          'Penjemputan Peserta',
          'Bermain Wahana Seru di Saloka Theme Park',
          'Makan Siang di Resto Pilihan',
          'Wisata Religi & Arsitektur Masjid Agung Jawa Tengah',
          'Wisata Belanja Kampung Semarang Resto'
        ]
      }
    ]
  },
  {
    region: 'Purwokerto',
    slug: 'purwokerto',
    description: 'Kesegaran alam lereng Gunung Slamet, wisata Baturraden yang asri, dan keindahan wisata keluarga modern.',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    hotels: [
      'Surya Yudha Hotel',
      'Green Valley Resort Baturaden',
      'Queen Garden Hotel Baturraden',
      'Grand Kolopaking Hotel (Kebumen)',
      'Hotel Grand Putra Syariah'
    ],
    packages: [
      {
        id: 'pwt-1',
        name: 'Paket Wisata Purwokerto 1',
        type: 'One Day Service',
        price: 'Rp 200K/Pack',
        numericPrice: 200000,
        itinerary: [
          'Penjemputan & Perjalanan',
          'Wisata Alam Lokawisata Baturaden',
          'Taman Miniatur Dunia (Small World)',
          'Pusat Oleh-oleh Khas Banyumas (Getuk Goreng & Mendoan)'
        ]
      },
      {
        id: 'pwt-2',
        name: 'Paket Wisata Purwokerto 2',
        type: 'One Day Service',
        price: 'Rp 250K/Pack',
        numericPrice: 250000,
        itinerary: [
          'Penjemputan Peserta',
          'Eksplorasi Lokawisata Baturaden',
          'Spot Foto Edukasi Small World',
          'Wisata Keluarga The Village Purwokerto',
          'Belanja Oleh-oleh Khas Purwokerto'
        ]
      },
      {
        id: 'pwt-3',
        name: 'Paket Wisata Purwokerto 3',
        type: 'One Day Service',
        price: 'Rp 270K/Pack',
        numericPrice: 270000,
        itinerary: [
          'Wisata Baturaden',
          'Small World Miniatur Dunia',
          'The Village Purwokerto',
          'Relaksasi Air Panas Belerang Pancuran Pitu',
          'Pusat Oleh-oleh khas Purwokerto'
        ],
        popular: true
      },
      {
        id: 'pwt-4',
        name: 'Paket Wisata Purwokerto 4',
        type: '2 Hari 1 Malam',
        price: 'Rp 350K/Pack',
        numericPrice: 350000,
        itinerary: [
          'Hari 1: Penjemputan, Wisata Baturaden & Small World, Check-in Hotel',
          'Hari 2: Eksplorasi Pantai Menganti Kebumen, Goa Jatijajar, Belanja Oleh-oleh & Kepulangan'
        ]
      },
      {
        id: 'pwt-5',
        name: 'Paket Wisata Purwokerto 5',
        type: '2 Hari 1 Malam',
        price: 'Rp 370K/Pack',
        numericPrice: 370000,
        itinerary: [
          'Hari 1: Baturaden, Small World, The Village & Flower Garden',
          'Hari 2: Serunya Owabong Waterboom Purbalingga & Pusat Oleh-oleh'
        ]
      }
    ]
  },
  {
    region: 'Dieng',
    slug: 'dieng',
    description: 'Negeri di Atas Awan! Nikmati keajaiban sunrise Bukit Sikunir, Candi Arjuna nan megah, dan Telaga Warna yang memukau.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    hotels: [
      'Tani Jiwo Hostel',
      'Hotel Gunung Mas Syariah',
      'Green Savanah',
      'Hotel Dieng Pass'
    ],
    packages: [
      {
        id: 'dng-1',
        name: 'Paket Wisata Dieng 1',
        type: 'One Day Service',
        price: 'Rp 450K/Pack',
        numericPrice: 450000,
        itinerary: [
          'Melihat Pemandangan Gardu Pandang Tieng',
          'Kompleks Candi Arjuna bersejarah',
          'Aktivitas Kawah Sikidang',
          'Pemandangan Telaga Warna & Telaga Pengilon',
          'Goa Alam Dieng',
          'Nonton Dokumenter Dieng Plateau Theater',
          'Spot Foto Batu Ratapan Angin',
          'Pusat Oleh-oleh Khas Dieng (Carica & Purwaceng)',
          'Golden Sunrise Bukit Sikunir'
        ],
        popular: true
      },
      {
        id: 'dng-2',
        name: 'Paket Wisata Dieng 2',
        type: '2 Hari 1 Malam',
        price: 'Rp 670K/Pack',
        numericPrice: 670000,
        itinerary: [
          'Hari 1: Penjemputan, Gardu Pandang Tieng, Kompleks Candi Arjuna, Kawah Sikidang, Telaga Warna & Pengilon, Check-in Hotel',
          'Hari 2: Golden Sunrise Bukit Sikunir, Batu Ratapan Angin, Dieng Plateau Theater, Belanja Oleh-oleh Carica khas Dieng & Kepulangan'
        ]
      }
    ]
  },
  {
    region: 'Yogyakarta',
    slug: 'yogyakarta',
    description: 'Istimewanya Jogja! Dari pantai eksotis Gunungkidul, petualangan Lava Tour Merapi, Candi Prambanan, hingga belanja Malioboro.',
    image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80',
    hotels: [
      'Kalya Hotel',
      'Cordela Hotel',
      'Fave Hotel',
      'Burza Hotel',
      'Nueve Hotel'
    ],
    packages: [
      {
        id: 'jog-1',
        name: 'Paket Wisata 1 Gunungkidul',
        type: 'One Day Service',
        price: 'Rp 300K-600K/Pack',
        numericPrice: 350000,
        itinerary: [
          'Wisata Tebing Breksi',
          'Cave Tubing Goa Pindul',
          'Santai di Pantai Ngandong',
          'Sunset & Dinner di Bukit Bintang',
          'Pusat Batik & Oleh-oleh Jogja'
        ]
      },
      {
        id: 'jog-2',
        name: 'Paket Wisata 2 Kota Yogyakarta',
        type: 'One Day Service',
        price: 'Rp 300K-600K/Pack',
        numericPrice: 300000,
        itinerary: [
          'Wisata Sejarah Keraton Yogyakarta',
          'Taman Sari Water Castle',
          'Belanja & Jalan-jalan Jalan Malioboro',
          'Eksplorasi Taman Pintar',
          'Pusat Oleh-oleh khas Jogja (Bakpia)'
        ]
      },
      {
        id: 'jog-3',
        name: 'Paket Wisata 3 Candi',
        type: 'One Day Service',
        price: 'Rp 400K-600K/Pack',
        numericPrice: 400000,
        itinerary: [
          'Kemegahan Candi Prambanan',
          'Keraton Yogyakarta',
          'Panorama Sunset Candi Ijo',
          'Wisata Edukasi Taman Pintar',
          'Pusat Oleh-oleh'
        ]
      },
      {
        id: 'jog-4',
        name: 'Paket Wisata 4 Merapi',
        type: 'One Day Service',
        price: 'Rp 300K-600K/Pack',
        numericPrice: 350000,
        itinerary: [
          'Petualangan Offroad Merapi Lava Tour Jeep',
          'The Lost World Castle',
          'Jalan-Jalan Malioboro',
          'Belanja Bakpia Kukus 25'
        ],
        popular: true
      },
      {
        id: 'jog-5',
        name: 'Paket Wisata Yogyakarta 5',
        type: '2 Hari 1 Malam',
        price: 'Rp 700K-900K/Pack',
        numericPrice: 750000,
        itinerary: [
          'Hari 1: Candi Prambanan, Cave Tubing Goa Pindul, Tebing Breksi, Sunset Pantai Ngandong, Check-in Hotel',
          'Hari 2: Keraton Yogyakarta, Tamansari, Malioboro, Taman Pintar, Belanja Oleh-oleh khas Jogja'
        ]
      },
      {
        id: 'jog-6',
        name: 'Paket Wisata Yogyakarta 6',
        type: '2 Hari 1 Malam',
        price: 'Rp 700K-900K/Pack',
        numericPrice: 750000,
        itinerary: [
          'Hari 1: Merapi Lava Tour Jeep, Merapi Park World Landmarks, Monumen Jogja Kembali (Monjali), Malioboro',
          'Hari 2: Benteng Vredebrug, Istana Air Tamansari, Taman Pintar & Pusat Oleh-oleh Bakpia'
        ]
      },
      {
        id: 'jog-7',
        name: 'Paket Wisata Yogyakarta 7',
        type: '2 Hari 1 Malam',
        price: 'Rp 700K-900K/Pack',
        numericPrice: 800000,
        itinerary: [
          'Hari 1: Eksotis Pantai Drini, Sunset Spektakuler HeHa Sky View, Kids Fun / Tempat Rekreasi',
          'Hari 2: Tamansari, Monjali, Taman Pintar, Belanja Sepuasnya di Malioboro & Pusat Oleh-oleh'
        ]
      }
    ]
  },
  {
    region: 'Jakarta & Bogor',
    slug: 'jakarta-bogor',
    description: 'Keseruan rekreasi wahana Dufan Ancol, sejuknya Puncak Bogor, Taman Safari, hingga belanja grosir fashion terbaik.',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=800&q=80',
    hotels: [
      'Hotel Amarsya',
      'Parama Hotel Puncak',
      'Wisma Anton Soedjarwo'
    ],
    packages: [
      {
        id: 'jkt-1',
        name: 'Paket Wisata Jakarta',
        type: 'One Day Service',
        price: 'Rp 800K/Pack',
        numericPrice: 800000,
        itinerary: [
          'Puas Bermain di Dunia Fantasi (Dufan) & Ancol Dreamland',
          'Wisata Belanja Pakaian ITC Mangga Dua'
        ]
      },
      {
        id: 'jkt-2',
        name: 'Paket Wisata Depok-Bogor',
        type: 'One Day Service',
        price: 'Rp 750K/Pack',
        numericPrice: 750000,
        itinerary: [
          'Wisata Religi Megah Masjid Kubah Emas Depok',
          'Pengalaman Edukasi Satwa Taman Safari Indonesia Bogor',
          'Belanja Kuliner Lapis Talas Sangkuriang Bogor'
        ]
      },
      {
        id: 'jkt-3',
        name: 'Paket Wisata Bogor',
        type: 'One Day Service',
        price: 'Rp 870K/Pack',
        numericPrice: 870000,
        itinerary: [
          'JungleLand Adventure Theme Park Sentul',
          'Wisata Edukasi & Botani Kebun Raya Bogor',
          'Oleh-oleh Lapis Talas Sangkuriang'
        ],
        popular: true
      },
      {
        id: 'jkt-4',
        name: 'Paket Wisata Jakarta-Depok-Bogor',
        type: '2 Hari 1 Malam',
        price: 'Rp 1.500K/Pack',
        numericPrice: 1500000,
        itinerary: [
          'Hari 1: Taman Mini Indonesia Indah (TMII), Dufan Ancol, Museum Fatahillah Kota Tua, Check-in Hotel',
          'Hari 2: Taman Bunga Nusantara, Masjid Kubah Emas Depok, Shopping spree ITC Mangga Dua'
        ]
      }
    ]
  },
  {
    region: 'Bali',
    slug: 'bali',
    description: 'Surga Destinasi Dunia! Keindahan pantai Pandawa, Tari Kecak Uluwatu, pura ikonik Bedugul, dan sunset Jimbaran.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    hotels: [
      'Everyday Smart',
      'J Hotel Kuta',
      'Pop Dewi Sri',
      'Amaris Dewi Sri',
      'Swiss-Bel Express Legian',
      'G Sign Kuta',
      'Fame Sunset',
      'Tusita',
      'Solaris Kuta',
      'Edelweis Kuta',
      'Max One Legian',
      'J4 Legian',
      'Love Fashion Hotel',
      'Grand Ixora Kuta',
      'Adhijaya Kuta',
      'Vasanti Kuta',
      'Harper Legian'
    ],
    packages: [
      {
        id: 'bali-1',
        name: 'Paket Wisata Bali 1',
        type: '5 Hari',
        price: 'Rp 1.500K/Pack',
        numericPrice: 1500000,
        itinerary: [
          'Hari 1: Penjemputan di Bandara/Titik Kumpul & Check-in Hotel',
          'Hari 2: Water Sport Tanjung Benoa, Pantai Pandawa & Megahnya Garuda Wisnu Kencana (GWK)',
          'Hari 3: Pura Luhur Uluwatu & Santap Seafood Sunset Pantai Jimbaran',
          'Hari 4: Wanagiri Hidden Hill, Pura Ulun Danu Bedugul & Belanja Kaos Joger',
          'Hari 5: Pusat Oleh-oleh Krisna & Pengantaran Kepulangan'
        ],
        popular: true
      },
      {
        id: 'bali-2',
        name: 'Paket Wisata Bali 2',
        type: '5 Hari',
        price: 'Rp 1.500K/Pack',
        numericPrice: 1500000,
        itinerary: [
          'Hari 1: Penjemputan Peserta & Check-in Hotel',
          'Hari 2: Ikonik Pura Tanah Lot & Water Sport Tanjung Benoa',
          'Hari 3: Eksotis Pantai Pandawa & Wisata Budaya Monumen Bajra Sandhi',
          'Hari 4: Teater Tari Kecak Pura Luhur Uluwatu & Dinner Romantic Jimbaran Beach',
          'Hari 5: Belanja Oleh-oleh Krisna Bali Pusat Oleh-Oleh & Transfer Out'
        ]
      }
    ]
  },
  {
    region: 'Lombok',
    slug: 'lombok',
    description: 'Eksotika Gili Trawangan, kebudayaan Suku Sasak Ende, serta pantai pasir putih Kuta Lombok dan Bukit Merese.',
    image: 'https://images.unsplash.com/photo-1571769267292-e24df4d48e4e?auto=format&fit=crop&w=800&q=80',
    hotels: [
      'Amaia Hotel Lombok',
      'Hotel Central Inn Senggigi',
      'Origin Lombok',
      'Fizz Hotel Lombok',
      'Griya Asri Lombok',
      'Grand Madani Hotel Syariah',
      'Grand Inn Hotel Lombok'
    ],
    packages: [
      {
        id: 'lmb-1',
        name: 'Paket Wisata Lombok 1',
        type: '7 Hari',
        price: 'Rp 2.000K/Pack',
        numericPrice: 2000000,
        itinerary: [
          'Hari 1: Penjemputan & Kampung Tenun Sukarara',
          'Hari 2: Wisata Budaya Rumah Adat Ende & Pantai Kuta Lombok',
          'Hari 3: Pemandangan Laut Pantai Tanjung A\'an & Sunset Bukit Merese',
          'Hari 4: Island Hopping Gili Trawangan, Bukit Malaka & Bukit Malimbu',
          'Hari 5: Pantai Selong Belanak & Pantai Mawun',
          'Hari 6: Belanja Oleh-oleh Khas Lombok (Mutiara & Kaos Lombok)',
          'Hari 7: Transfer Out & Kepulangan'
        ],
        popular: true
      },
      {
        id: 'lmb-2',
        name: 'Paket Wisata Lombok 2',
        type: '7 Hari',
        price: 'Rp 2.000K/Pack',
        numericPrice: 2000000,
        itinerary: [
          'Hari 1: Penjemputan & Wisata Tiga Gili Eksotis (Gili Nanggu, Gili Sudak, Gili Kedis)',
          'Hari 2: Penyeberangan & Aktivitas Seru di Gili Trawangan',
          'Hari 3: Panorama dari Bukit Malaka & Bukit Malimbu',
          'Hari 4: Edukasi Kerajinan Kampung Tenun Sukarara & Rumah Adat Ende',
          'Hari 5: Pesona Pantai Kuta Lombok & Pantai Tanjung A\'an',
          'Hari 6: Sunset Bukit Merese & Belanja Oleh-oleh Khas Lombok',
          'Hari 7: Persiapan Kepulangan & Transfer Out'
        ]
      }
    ]
  }
];

export const FACILITIES_DATA: FacilitiesData = {
  tour: [
    'Transportasi Bus Pariwisata Executive (AC, Audio, Reclining Seat)',
    'Profesional Tour Leader (Partner Rangers Ramah & Pengalaman)',
    'Photographer & Videographer Kegiatan Dedicated',
    'Biaya Parkir Bus & Rest Area',
    'Tips Driver & Co-Driver (Sudah Termasuk)',
    'Peralatan P3K & Obat-obatan Standar',
    'Banner / Spanduk Kegiatan Custom Logo Organisasi'
  ],
  peserta: [
    'Tiket Masuk Seluruh Destinasi Wisata Sesuai Itinerary',
    'Dokumentasi Video Cinematic Highlight',
    'Air Mineral Botol Dingin Selama Perjalanan',
    'Snack Box & Snack Ringan',
    'Makan Berat Resto Lokal Bermutu (Pagi, Siang, Malam)'
  ],
  bonus: [
    'Gratis Frame Photo 12R untuk Rombongan / Organisasi',
    'Gratis Cetak Photo 4R untuk Setiap Peserta',
    'Akses Download Soft File Master Photo & Video High-Res',
    'Doorprize Menarik dari Partner Jalan saat Di Bus',
    'Poster Digital Kegiatan untuk Kenang-kenangan'
  ]
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Bapak Ahmad Prasetyo',
    role: 'Ketua Panitia Outing PT Solusi Bangun Mandiri',
    tripName: 'Paket Wisata Yogyakarta (Merapi & Candi)',
    comment: 'Luar biasa profesional! Bus Pariwisata sangat nyaman, Tour Leader-nya ramah banget mas-masnya. Yang paling juara adalah dokumentasinya: dapat frame 12R dan foto 4R buat semua karyawan. Worth it banget!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: 'Juli 2026'
  },
  {
    id: 'testi-2',
    name: 'Ibu Ratna Dewi',
    role: 'Keluarga Besar (Private Trip 28 Pax)',
    tripName: 'Paket Wisata Dieng 2Hari 1Malam',
    comment: 'Trip ke Dieng dingin tapi hangat karena pelayanan dari Partner Jalan. Sunrise Sikunir dan Candi Arjuna dipandu dengan sangat tertata. Anak-anak dan orang tua semua senang. Terima kasih Partner Jalan!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    date: 'Juni 2026'
  },
  {
    id: 'testi-3',
    name: 'Rian Saputra',
    role: 'Komunitas Alumni SMA Negeri 1',
    tripName: 'Paket Wisata Bali 5 Hari',
    comment: 'Perjalanan 5 hari di Bali tanpa kendala sedikit pun. Hotel tempat menginap bersih & bagus dekat Kuta. Makanannya enak di resto lokal ternama. Videografernya jago banget bikin reels Instagram!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    date: 'Mei 2026'
  },
  {
    id: 'testi-4',
    name: 'Dr. Hendra Kusuma',
    role: 'Rombongan Ikatan Dokter',
    tripName: 'Paket Wisata Lombok 7 Hari',
    comment: 'Partner Jalan benar-benar partner terbaik untuk perjalanan jarak jauh. Pelayanan dari booking sampai kepulangan super lancar. Rekomendasi banget buat yang mau private trip bebas ribet.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    date: 'April 2026'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sunrise Bukit Sikunir Dieng',
    region: 'Dieng',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    category: 'gunung'
  },
  {
    id: 'gal-2',
    title: 'Kecak Dance Uluwatu Sunset',
    region: 'Bali',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
    category: 'budaya'
  },
  {
    id: 'gal-3',
    title: 'Gili Trawangan Island Hopping',
    region: 'Lombok',
    imageUrl: 'https://images.unsplash.com/photo-1571769267292-e24df4d48e4e?auto=format&fit=crop&w=600&q=80',
    category: 'pantai'
  },
  {
    id: 'gal-4',
    title: 'Merapi Lava Tour Offroad Jeep',
    region: 'Yogyakarta',
    imageUrl: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=600&q=80',
    category: 'rekreasi'
  },
  {
    id: 'gal-5',
    title: 'Lawang Sewu & Kota Lama',
    region: 'Semarang',
    imageUrl: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=600&q=80',
    category: 'budaya'
  },
  {
    id: 'gal-6',
    title: 'Lokawisata Baturaden Fresh Springs',
    region: 'Purwokerto',
    imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80',
    category: 'rekreasi'
  }
];

export const FAQS_DATA = [
  {
    question: 'Apa perbedaan antara Open Trip dan Private Trip di Partner Jalan?',
    answer: 'Open Trip adalah perjalanan gabungan dengan peserta lain dengan tanggal yang sudah ditentukan, sangat cocok untuk solo traveler atau kelompok kecil. Sedangkan Private Trip adalah paket eksklusif khusus untuk rombongan/keluarga/perusahaan Anda sendiri dengan tanggal keberangkatan dan itinerary yang fleksibel sesuai permintaan.'
  },
  {
    question: 'Fasilitas apa saja yang sudah termasuk dalam harga paket trip?',
    answer: 'Secara umum seluruh paket Partner Jalan sudah ALL-IN! Termasuk Transportasi Bus Pariwisata executive, Tiket Masuk seluruh destinasi, Makan & Snack, Tour Leader profesional, Tim Dokumentasi Foto & Video, Obat-obatan P3K, serta Bonus Eksklusif berupa Cetak Foto 4R untuk setiap peserta dan Frame Foto 12R untuk rombongan.'
  },
  {
    question: 'Bagaimana sistem pembayaran dan Down Payment (DP)?',
    answer: 'Pemesanan dapat dilakukan dengan DP mulai dari 30% dari total biaya trip. Pelunasan dapat dilakukan maksimal 3 hari sebelum tanggal keberangkatan (H-3) atau sesuai kesepakatan saat konfirmasi pemesanan.'
  },
  {
    question: 'Apakah bisa customize (ubah) destinasi sesuai keinginan rombongan kami?',
    answer: 'Tentu saja! Untuk opsi Private Trip, tim Partner Jalan melayani custom itinerary sesuai destinasi impian, durasi hari, dan budget rombongan Anda. Anda bisa berkonsultasi gratis melalui fitur Custom Trip Planner di website atau langsung via WhatsApp.'
  },
  {
    question: 'Di mana titik kumpul (Meeting Point) untuk pemberangkatan?',
    answer: 'Untuk Private Trip, kami siap menjemput rombongan di lokasi pilihan Anda (Sekolah, Kantor, Rumah, Stasiun, atau Bandara). Untuk Open Trip, titik kumpul akan diinformasikan oleh Tour Leader H-2 sebelum keberangkatan.'
  }
];
