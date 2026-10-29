import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Correia",
  description: "Portfólio profissional de Felipe Correia, Desenvolvedor Full Stack & Desktop. Projetos, habilidades e contacto.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-[#030014] text-neutral-100 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
