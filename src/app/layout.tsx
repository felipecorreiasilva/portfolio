import type { Metadata } from "next";
import "./globals.css";
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Felipe Correia",
  description: "Felipe Correia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth overflow-x-hidden" lang="en">
      <body
        className={`container mx-auto text-white bg-primary-950`}
      >
        <Header/>
        <MainContainer>
        {children}
        </MainContainer>
      </body>
    </html>
  );
}
