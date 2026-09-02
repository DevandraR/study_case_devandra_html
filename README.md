

# AI dan Implementasi AI di Industri Contact Center

Landing page interaktif dan modern yang menyajikan eksplorasi komprehensif mengenai penerapan Artificial Intelligence (AI) pada ekosistem layanan pelanggan omnichannel enterprise. Halaman ini dirancang dengan pendekatan visual *Swiss Editorial Minimalist*, performa ringan tanpa dependensi, dan responsif di seluruh perangkat.

![AI dan Implementasi AI di Industri Contact Center](./assets/Screenshot%202026-09-02%20084517.png)

---

## 🚀 Implementasi & Konsep Desain

### 🎨 Konsep & Pendekatan Desain
- **Swiss Editorial & Tech Minimalist:** Mengedepankan hierarki tipografi yang kuat, tata letak asimetris terstruktur (*Bento Grid*), serta kontras tinggi agar data teknis mudah dipindai (*scannable*) dan nyaman dibaca.
- **Enterprise Dark Palette:** Menggunakan kombinasi warna gelap bertingkat (*Deep Obsidian* `#080A10` & *Slate* `#0E121B`) yang elegan, dipadukan dengan aksen fungsional *Emerald Green* (indikator & efisiensi) serta *Cyan* (telemetri data AI).
- **Living Interface & Tactile Interactivity:** Mengutamakan pengalaman pengguna yang hidup melalui simulator copilot real-time, visualisasi audio dinamis, dan kalkulator interaktif dibanding sekadar elemen visual statis.

### 1. HTML5 (`index.html`)
- **Struktur Semantik & Aksesibel:** Menggunakan elemen semantik baku (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`) dengan hierarki heading tunggal `<h1>` yang jelas untuk kebutuhan SEO dan aksesibilitas.
- **Bagian-Bagian Halaman:**
  - **Top Announcement Bar:** Status sistem dan SLA operasional real-time.
  - **Hero Section:** Judul utama studi kasus, deskripsi nilai, dan strip KPI metrik dampak implementasi.
  - **Evolusi Industri (Legacy vs AI):** Tabel perbandingan langsung tantangan call center konvensional versus solusi AI modern.
  - **4 Pilar Implementasi Strategis (Bento Grid):**
    1. *Conversational AI & Voicebot Otonom 24/7* (ASR/NLP & Speech Engine)
    2. *Real-Time Agent Copilot & Auto-ACW* (Panduan langsung dan ringkasan CRM instan)
    3. *100% Automated Quality Assurance & Compliance* (Audit kepatuhan dan analisis sentimen)
    4. *Predictive Omnichannel Routing* (Pencocokan agen cerdas berbasis sentimen & keahlian)
  - **Interactive Live Simulator Console:** Ruang kerja simulasi Copilot dengan feed transkrip, waveform suara, dan gauge sentimen.
  - **Kalkulator Proyeksi ROI:** Slider kalkulasi penghematan jam kerja dan estimasi efisiensi biaya operasional.
  - **Arsitektur Ekosistem Omnichannel:** Diagram alur integrasi kanal (Telepon, WhatsApp, Webchat, CRM).
  - **FAQ Accordion & Lead Contact Form:** Jawaban seputar keamanan data (UU PDP / ISO 27001) serta formulir permintaan demo.
  - **Footer Enterprise:** Informasi profil, sertifikasi keamanan, dan kontak fiktif PT Omni Nexus Indonesia.

---

### 2. CSS3 (`index.css`)
- **Desain Sistem & Tipografi:**
  - Kombinasi Google Fonts: `Space Grotesk` (Display Headings), `Plus Jakarta Sans` (Body Text), dan `JetBrains Mono` (Data/Teknis).
  - Palet warna bertema *Deep Obsidian* (`#080A10`), permukaan gelap bertingkat (`#0E121B`, `#151A26`), serta aksen luminesens *Emerald* (`#10B981`) dan *Cyan* (`#06B6D4`).
- **Tata Letak & Responsivitas:**
  - Menggunakan kombinasi fleksibel **CSS Grid** (Asymmetric Bento, 2-Column Comparison) dan **Flexbox**.
  - Breakpoint adaptif pada `1240px`, `1080px`, `768px`, dan `480px` untuk memastikan tampilan pas dan bebas *horizontal scroll* pada layar desktop, tablet, maupun ponsel ringkas.
- **Detail Visual & Mikro-Interaksi:**
  - *Hairline precision borders* (`rgba(255,255,255,0.07)`), efek hover taktil (`translateY`), status LED berkedip (`pulse-dot`), dan latar grid berpola halus.

---

### 3. JavaScript (`main.js`)
- **Live Copilot & Sentiment Simulator:**
  - Mendukung 3 skenario interaktif (Komplain Transaksi, Kendala API, dan Retensi Pelanggan/Churn).
  - Mengubah transkrip percakapan, gauge meter sentimen, tag analisis risiko, rekomendasi skrip jawaban agen, dan format ringkasan tiket (ACW) secara real-time.
  - Generator animasi audio equalizer bar (waveform) yang responsif.
- **Kalkulator ROI & Dampak Operasional Dinamis:**
  - Menghitung secara otomatis jam kerja yang dihemat per bulan, estimasi defleksi tiket mandiri (65%), dan proyeksi efisiensi biaya (dalam Rupiah) berdasarkan pergeseran slider jumlah agen, volume tiket, dan AHT.
- **Fitur Interaktif Tambahan:**
  - **KPI Animated Counters:** Efek hitung angka dinamis pada metrik hero menggunakan `IntersectionObserver`.
  - **FAQ Accordion:** Logika buka-tutup pertanyaan yang mulus dengan sinkronisasi atribut `aria-expanded`.
  - **Mobile Navigation Drawer:** Buka-tutup menu navigasi responsif pada perangkat tablet dan ponsel.
  - **Mockup Lead Form Submission:** Validasi form dan penanganan status konfirmasi pengiriman pesan.

---

## 💻 Cara Menjalankan Secara Lokal

1. Buka terminal pada folder proyek:
   ```bash
   python -m http.server 3000
   ```
2. Buka browser dan akses:
   ```text
   http://localhost:3000
   ```

---

<div align="center">
  <sub>
    <strong>Nama:</strong> Devandra Reswara Arkananta &nbsp;|&nbsp; <strong>Email:</strong> devandra271203@gmail.com
  </sub>
</div>
