import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// METADATA DENGAN TAMBAHAN 10 KEYWORD UNTUK DOSEN
export const metadata: Metadata = {
  title: 'Warmindo Pakdhene: Tempat Makan & Nongkrong Murah di Solo',
  description: 'Cari tempat nongkrong murah di Solo dengan free Wi-Fi? Warmindo Pakdhene buka sampai jam 2 pagi. Harga mulai Rp8.000!',
  keywords: [
    'warmindo solo', 
    'tempat nongkrong murah solo', 
    'warmindo pakdhene', 
    'tempat nugas free wifi solo', 
    'kuliner malam solo', 
    'makan murah mahasiswa solo', 
    'magelangan enak di solo', 
    'ayam geprek murah solo', 
    'warmindo terdekat', 
    'cafe murah solo'
  ],
  verification: {
    google: 'DLzQmzdz_zLsom43WOgRsGeipfRxwcMf69mw9BB9Sms',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}