import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Warmindo Pakdhene: Tempat Makan & Nongkrong Murah di Solo',
  description: 'Cari tempat nongkrong murah di Solo dengan free Wi-Fi? Warmindo Pakdhene buka sampai jam 2 pagi. Harga mulai Rp8.000!',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-24">
      {/* HEADER - SEO H1 */}
      <header className="bg-orange-600 text-white p-8 text-center shadow-md">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Warmindo Pakdhene, Tempat Nongkrong Asyik Mahasiswa Solo
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Lagi cari tempat nongkrong murah di Solo yang asyik buat kumpul atau nugas? 
          <strong> Warmindo Pakdhene</strong> adalah jawabannya! Berlokasi strategis di daerah Panularan, Kec. Laweyan.
        </p>
      </header>

      {/* KONTEN UTAMA */}
      <section className="max-w-4xl mx-auto p-6 mt-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">Kenapa Harus Nongkrong di Sini?</h2>
        <ul className="list-disc pl-5 mb-8 text-gray-700 space-y-2">
          <li>Fasilitas <strong>Free Wi-Fi</strong> kencang, cocok buat nugas atau mabar.</li>
          <li>Area makan dua lantai yang luas dan nyaman.</li>
          <li>Buka setiap hari mulai pukul <strong>10.00 WIB sampai 02.00 WIB</strong>.</li>
          <li>Harga sangat bersahabat untuk kantong mahasiswa dan anak kos!</li>
        </ul>

        <h2 className="text-2xl font-bold mb-6 text-orange-600">Menu Best Seller Kami 🔥</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Menu 1 */}
          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <img 
              src="https://via.placeholder.com/300x200?text=Gambar+Magelangan" 
              alt="Magelangan Enak di Solo - Warmindo Pakdhene" 
              className="rounded-md w-full mb-3"
            />
            <h3 className="font-bold text-lg">Magelangan</h3>
            <p className="text-sm text-gray-600 mb-2">Perpaduan nasi &amp; mi goreng bumbu gurih khas.</p>
            <span className="font-bold text-orange-600">Rp 8.000</span>
          </div>

          {/* Menu 2 */}
          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <img 
              src="https://via.placeholder.com/300x200?text=Gambar+Ayam+Geprek" 
              alt="Ayam Geprek Murah di Solo - Warmindo Pakdhene" 
              className="rounded-md w-full mb-3"
            />
            <h3 className="font-bold text-lg">Ayam Geprek</h3>
            <p className="text-sm text-gray-600 mb-2">Ayam krispi dengan sambal pedas nikmat.</p>
            <span className="font-bold text-orange-600">Rp 10.000</span>
          </div>

          {/* Menu 3 */}
          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <img 
              src="https://via.placeholder.com/300x200?text=Gambar+Nasi+Goreng" 
              alt="Nasi Goreng Murah Solo - Warmindo Pakdhene" 
              className="rounded-md w-full mb-3"
            />
            <h3 className="font-bold text-lg">Nasi Goreng</h3>
            <p className="text-sm text-gray-600 mb-2">Cita rasa gurih dan aroma khas menggugah selera.</p>
            <span className="font-bold text-orange-600">Rp 15.000</span>
          </div>
        </div>
      </section>

      {/* WIDGET SIMULASI SEM & KPI (Sesuai Tugas Dosen) */}
      <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-xl shadow-2xl p-4 w-80 z-50 text-sm">
        <div className="flex justify-between items-center mb-2 border-b pb-2">
          <span className="font-bold text-blue-600 flex items-center gap-1">
            📊 Live SEM &amp; KPI Tracker
          </span>
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full animate-pulse">Active</span>
        </div>
        
        <div className="mb-3">
          <p className="text-xs text-gray-500 mb-1">Simulasi Iklan Search (Google Ads):</p>
          <div className="border border-blue-200 bg-blue-50 p-2 rounded-md">
            <p className="text-blue-700 font-semibold cursor-pointer hover:underline text-xs">
              Warmindo Pakdhene Solo - Makan Kenyang Mulai 8Rb
            </p>
            <p className="text-[10px] text-green-700 font-mono mt-1">Sponsor &middot; warmindopakdhenesolo.com</p>
            <p className="text-[11px] text-gray-600 mt-1 leading-tight">
              Tempat nongkrong mahasiswa di Solo dgn Free WiFi &amp; 2 lantai. Buka s/d jam 2 Pagi!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-center mt-3">
          <div className="bg-gray-50 p-2 rounded-md border">
            <p className="text-xs text-gray-500 font-semibold">Budget/Hari</p>
            <p className="font-bold text-gray-800">Rp 30.000</p>
          </div>
          <div className="bg-gray-50 p-2 rounded-md border">
            <p className="text-xs text-gray-500 font-semibold">Target CTR</p>
            <p className="font-bold text-green-600">8.5%</p>
          </div>
          <div className="bg-gray-50 p-2 rounded-md border">
            <p className="text-xs text-gray-500 font-semibold">Est. CPC</p>
            <p className="font-bold text-gray-800">Rp 850</p>
          </div>
          <div className="bg-gray-50 p-2 rounded-md border">
            <p className="text-xs text-gray-500 font-semibold">Conv. Rate</p>
            <p className="font-bold text-blue-600">12%</p>
          </div>
        </div>
      </div>
    </main>
  );
}