import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Open_Sans, Catamaran, Montserrat } from 'next/font/google';
import { CurrentEvents } from "@/components/section_current_events/current_events";

/* Fonts testes imports */
const openSans = Open_Sans({
  weight:  ['400', '500', '600', '700'], // Medium, bold
  subsets: ['latin'],
  display: 'swap'
});

const catamaran = Catamaran({
  weight: "100", // Light
  subsets: ['latin'],
  display: 'swap'
});
const montSerrat = Montserrat({
  weight:  ['400', '500', '600', '700'], // Medium, bold
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>    
        <Header/>
        {children} 
        <CurrentEvents />      
      </body>
    </html>
  );
}
