import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Header  */}
      <Header />
      {/* Navbar */}
      <Navbar />
      {/* Search Box */}
      <body>{children}</body>
    </html>
  )
};
