"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Provider from "@/components/ProviderTheme";
import SearchBox from "@/components/SearchBox";
import { useSelectedLayoutSegment } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const SelectedLayoutSegment = useSelectedLayoutSegment();
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          <Navbar />
          {SelectedLayoutSegment !== "about" ? <SearchBox /> : null}
          {children}
        </Provider>
      </body>
    </html>
  );
}
