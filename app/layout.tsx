import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// INI CARA RESMI NEXT.JS UNTUK VERIFIKASI GOOGLE SEARCH CONSOLE
export const metadata: Metadata = {
  title: 'Warmindo Pakdhene: Tempat Makan & Nongkrong Murah di Solo',
  description: 'Cari tempat nongkrong murah di Solo dengan free Wi-Fi? Warmindo Pakdhene buka sampai jam 2 pagi. Harga mulai Rp8.000!',
  verification: {
    google: 'DLzQmzdz_zLsom43WOgRsGeipfRxwcMf69mw9BB9Sms',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}