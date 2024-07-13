import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import type { Viewport } from 'next'
import { Product, WithContext } from 'schema-dts'


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-poppins",
});
const jsonLd: WithContext<Product> = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Next.js Sticker',
  image: 'https://nextjs.org/imgs/sticker.png',
  description: 'Dynamic at the speed of static.',
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gato.pe/"),
  title: {
    default: "GATO",
    template: "%s - GATO",
  },
  alternates:{
    canonical: 'https://www.gato.pe/',
    languages: {
      'es-ES': 'https://www.gato.pe/es-ES',
    }
  },
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "GATO" }, { name: "GATO", url: "https://www.gato.pe/" }],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body className="font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        {children}</body>
    </html>
  );
}
