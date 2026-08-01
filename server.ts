import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Partner Jalan API" });
  });

  // AI Custom Trip Planner Endpoint
  app.post("/api/plan-trip", async (req, res) => {
    try {
      const { destination, participants, durationDays, budgetPerPerson, preferences } = req.body;

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback response if GEMINI_API_KEY is not yet configured
        return res.json({
          success: true,
          isFallback: true,
          title: `Rencana Custom Trip ${destination} (${durationDays} Hari, ${participants} Pax)`,
          summary: `Estimasi budget ~Rp ${(budgetPerPerson || 500000).toLocaleString('id-ID')}/pax dengan fasilitas bus pariwisata executive, dokumentasi foto/video, dan makan terjamin.`,
          recommendations: [
            `Hari 1: Penjemputan di meeting point, kunjungan ke objek wisata utama ${destination}, makan siang resto lokal, check-in hotel.`,
            `Hari 2: Highlighting spot foto populer, makan malam khas, dan wisata belanja oleh-oleh.`,
            durationDays > 2 ? `Hari 3-${durationDays}: Aktivitas eksklusif (wisata alam/pantai), penutupan acara & pembagian souvenir foto 4R.` : `Penutupan trip, dokumentasi video cinematic, dan kepulangan.`
          ],
          facilitiesIncluded: [
            'Bus Pariwisata Executive AC',
            'Tour Leader Profesional',
            'Photographer & Videographer',
            'Tiket Masuk All-In',
            'Bonus Cetak Foto 4R/peserta + Frame 12R Rombongan'
          ],
          estimatedPricePerPax: `Rp ${((budgetPerPerson || 450000)).toLocaleString('id-ID')}/Pack`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Anda adalah Consultant Travel Senior dari Partner Jalan (Biro Perjalanan & Tour Organizer Profesional di Indonesia).
Buatkan rekomendasi paket custom trip yang sangat memikat dan detail untuk calon pelanggan berikut:
- Destinasi: ${destination}
- Jumlah Peserta: ${participants} orang
- Durasi: ${durationDays} Hari
- Budget perkiraan: Rp ${budgetPerPerson ? budgetPerPerson.toLocaleString('id-ID') : 'Sesuai standar'} per pack
- Catatan/Keinginan khusus: ${preferences ? preferences.join(', ') : 'Wisata santai dan dokumentasi bagus'}

Fasilitas bawaan Partner Jalan yang selalu termasuk:
- Transportasi Bus Pariwisata Executive
- Tour Leader & Photographer/Videographer Dedicated
- Tiket Masuk & Makan
- Bonus Souvenir Frame Photo 12R + Cetak Foto 4R per peserta + Soft File

Formatkan respon secara ringkas, elegan, dan profesional dalam Bahasa Indonesia berformat JSON valid dengan key:
{
  "title": "Judul Menarik Rencana Trip",
  "summary": "Ringkasan nilai lebih & pengalaman yang akan didapatkan peserta",
  "recommendations": ["Rencana Hari 1: ...", "Rencana Hari 2: ...", ...],
  "facilitiesIncluded": ["Fasilitas 1", "Fasilitas 2", ...],
  "estimatedPricePerPax": "Rp XXX.XXX/Pack",
  "tips": "Saran persiapan singkat dari Partner Rangers"
}
Output hanya berupa string JSON murni tanpa markdown wrapper.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const responseText = response.text || '';
      const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();

      try {
        const parsed = JSON.parse(cleanJson);
        return res.json({ success: true, ...parsed });
      } catch {
        return res.json({
          success: true,
          title: `Rencana Custom Trip ${destination}`,
          summary: responseText,
          recommendations: [
            `Penjemputan rombongan ${participants} orang`,
            `Eksplorasi destinasi unggulan di ${destination}`,
            `Wisata kuliner & belanja oleh-oleh khas`
          ],
          facilitiesIncluded: ['Bus Executive', 'Tour Leader', 'Dokumentasi Video & Foto', 'Bonus 12R & 4R Photo'],
          estimatedPricePerPax: `Rp ${(budgetPerPerson || 500000).toLocaleString('id-ID')}/Pack`
        });
      }

    } catch (err: any) {
      console.error("Error generating trip plan:", err);
      res.status(500).json({ success: false, error: "Gagal membuat rekomendasi trip." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Partner Jalan running on http://localhost:${PORT}`);
  });
}

startServer();
