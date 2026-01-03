"use client";

import CustomCursor from "@/components/Cursor/CustomCursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ParticlesBackground from "@/components/Particles/ParticlesBackground";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <CustomCursor />
          <ParticlesBackground />
          <Header />
          <ParticlesBackground />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
