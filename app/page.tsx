'use client';
import React, { useState } from 'react';

export default function Home() {
  // Logika untuk buka/tutup widget SEM
  const [isWidgetOpen, setIsWidgetOpen] = useState(true);

  return (
    <main className="min-h-screen bg-slate-50 text-gray-800 font-sans pb-28">
      
      {/* HERO SECTION - Background pakai foto toko.png */}
      <header 
        className="relative text-white pt-24 pb-20 px-6 text-center shadow-lg rounded-b-[3rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/image/toko.png')" }}
      >
        {/* Lapisan transparan hitam agar teks tetap terbaca */}
        <div className="absolute inset-0 bg-black/60 rounded-b-[3rem]"></div>

        {/* Konten Hero (di atas lapisan transparan) */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Warmindo Pakdhene <br className="hidden md:block"/> 
            <span className="text-amber-400 text-3xl md:text-5xl">Nongkrong Asyik, Harga Mahasiswa</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-95 mb-8 drop-shadow-sm">
            Tempat nongkrong murah di Solo yang pas buat kumpul atau nugas! 
            Fasilitas Free Wi-Fi, 2 Lantai, dan buka dari jam 10 Pagi s/d 2 Pagi.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://gofood.co.id/" target="_blank" rel="noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2">
              🏍️ Pesan via GoFood
            </a>
            <a href="https://shopee.co.id/m/shopeefood" target="_blank" rel="noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2 border-2 border-white">
              🛍️ Pesan via ShopeeFood
            </a>
          </div>
        </div>
      </header>

      {/* KONTEN UTAMA */}
      <section className="max-w-5xl mx-auto px-6 mt-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12 transform hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold mb-6 text-orange-600 text-center">Kenapa Nongkrong di Sini?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📶</span>
              <div>
                <h3 className="font-bold text-xl">Free Wi-Fi Kencang</h3>
                <p>Internet stabil bikin nugas atau mabar lancar tanpa lag.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">🏠</span>
              <div>
                <h3 className="font-bold text-xl">Area 2 Lantai Luas</h3>
                <p>Pilih tempat duduk sesukamu, suasana nyaman banget.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">🕛</span>
              <div>
                <h3 className="font-bold text-xl">Buka Sampai Pagi</h3>
                <p>Operasional jam 10.00 - 02.00 WIB. Pas buat kalongers!</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-3xl">💸</span>
              <div>
                <h3 className="font-bold text-xl">Harga Bersahabat</h3>
                <p>Aman untuk dompet mahasiswa dan anak kos akhir bulan.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Menu Best Seller Kami 🔥</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div className="h-48 overflow-hidden bg-gray-200">
              <img src="/image/magelangan.png" alt="Magelangan Enak di Solo - Warmindo Pakdhene" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-bold text-2xl text-gray-800 mb-2">Magelangan</h3>
              <p className="text-gray-600 mb-4 h-12">Perpaduan nasi &amp; mi goreng dengan bumbu gurih khas.</p>
              <span className="inline-block bg-orange-100 text-orange-700 font-black text-xl py-1 px-4 rounded-lg">Rp 8.000</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div className="h-48 overflow-hidden bg-gray-200">
              <img src="/image/ayam-geprek.png" alt="Ayam Geprek Murah di Solo - Warmindo Pakdhene" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-bold text-2xl text-gray-800 mb-2">Ayam Geprek</h3>
              <p className="text-gray-600 mb-4 h-12">Ayam krispi balutan renyah dengan sambal pedas nikmat.</p>
              <span className="inline-block bg-orange-100 text-orange-700 font-black text-xl py-1 px-4 rounded-lg">Rp 10.000</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div className="h-48 overflow-hidden bg-gray-200">
              <img src="/image/nasi-goreng.png" alt="Nasi Goreng Murah Solo - Warmindo Pakdhene" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-bold text-2xl text-gray-800 mb-2">Nasi Goreng</h3>
              <p className="text-gray-600 mb-4 h-12">Cita rasa gurih dan aroma khas yang menggugah selera.</p>
              <span className="inline-block bg-orange-100 text-orange-700 font-black text-xl py-1 px-4 rounded-lg">Rp 15.000</span>
            </div>
          </div>
        </div>

        {/* DAFTAR MENU LENGKAP */}
        <div className="mt-16 mb-8 text-center">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Daftar Menu Lengkap 📖</h2>
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-2 md:p-6 overflow-hidden max-w-3xl mx-auto">
            <img 
              src="/image/daftar-menu.png" 
              alt="Daftar Menu Lengkap Warmindo Pakdhene" 
              className="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* WIDGET SIMULASI SEM & KPI (Bisa Buka Tutup) */}
      <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-xl shadow-2xl w-80 z-50 text-sm overflow-hidden transition-all duration-300">
        {/* Header Widget - Bisa diklik */}
        <div 
          className="flex justify-between items-center p-3 bg-slate-50 border-b cursor-pointer hover:bg-slate-100 transition-colors"
          onClick={() => setIsWidgetOpen(!isWidgetOpen)}
        >
          <span className="font-bold text-blue-600 flex items-center gap-2">
            📊 Live SEM &amp; KPI
          </span>
          <div className="flex items-center gap-2">
            {isWidgetOpen && (
              <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full animate-pulse">
                Active
              </span>
            )}
            <span className="text-gray-400 font-bold ml-1">
              {isWidgetOpen ? '—' : '+'}
            </span>
          </div>
        </div>
        
        {/* Isi Widget (Hanya tampil jika isWidgetOpen true) */}
        {isWidgetOpen && (
          <div className="p-4">
            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1">Simulasi Iklan Search (Google Ads):</p>
              <div className="border border-blue-200 bg-blue-50 p-3 rounded-md">
                <p className="text-blue-700 font-semibold cursor-pointer hover:underline text-sm leading-tight">
                  Warmindo Pakdhene Solo - Makan Kenyang Mulai 8Rb
                </p>
                <p className="text-[11px] text-green-700 font-mono mt-1">Sponsor &middot; warmindo-seo.vercel.app</p>
                <p className="text-xs text-gray-600 mt-1 leading-snug">
                  Tempat nongkrong mahasiswa di Solo dgn Free WiFi &amp; 2 lantai. Buka s/d jam 2 Pagi!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center mt-3">
              <div className="bg-gray-50 p-2 rounded-md border">
                <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">Budget/Hari</p>
                <p className="font-bold text-gray-800 text-sm">Rp 30.000</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md border">
                <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">Target CTR</p>
                <p className="font-bold text-green-600 text-sm">8.5%</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md border">
                <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">Est. CPC</p>
                <p className="font-bold text-gray-800 text-sm">Rp 850</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md border">
                <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">Conv. Rate</p>
                <p className="font-bold text-blue-600 text-sm">12%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}