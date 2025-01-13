import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Roboto } from 'next/font/google'

// Fontes testes
const roboto = Roboto({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: ' Casa Museu Eva Klabin',
  description: 'Bem vindos ao nosso site',
  openGraph:{
    title: 'Casa Museu Eva Klabin',
    description:'',
    images: ['images/logo.png'],
  }
};

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
      </body>
    </html>
  );
}
