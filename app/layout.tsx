import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Warmindo Pakdhene: Tempat Makan & Nongkrong Murah di Solo',
  description: 'Cari tempat nongkrong murah di Solo dengan free Wi-Fi? Warmindo Pakdhene buka sampai jam 2 pagi. Harga mulai Rp8.000!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* INI KODE SAKTI BIAR LANGSUNG TEMBUS GOOGLE */}
        <meta name="google-site-verification" content="DLzQmzdz_zLsom43WOgRsGeipfRxwcMf69mw9BB9Sms" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}