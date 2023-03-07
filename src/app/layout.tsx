import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Provider from '@/components/ProviderTheme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   
      <body>
        <Provider>
          <Header />
          <Navbar />

          {children}
        </Provider>
      
      </body>
    </html>
  )
};
