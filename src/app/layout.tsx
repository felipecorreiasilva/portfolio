import type { Metadata } from "next";
import "./globals.css";
import MainContainer from "@/components/MainContainer";

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
    <html className="scroll-smooth" lang="en">
      <body
        className={`container mx-auto bg-primary-950`}
      >
        <MainContainer>
        {children}
        </MainContainer>
      </body>
    </html>
  );
}
