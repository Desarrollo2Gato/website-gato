import type { Metadata } from "next";
import "./globals.css";
import type { Viewport } from 'next'

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gato.pe/"),
  title: {
    default: "Marketing y Desarrollo de Software - Agencia Gato",
    template: "%s - Agencia Gato",
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
  authors: [{ name: "Marketing y Desarrollo de Software - Agencia Gato" }, { name: "Agencia Gato", url: "https://www.gato.pe/" }],
  referrer: "origin-when-cross-origin",
  publisher: 'Marketing y Desarrollo de Software - Agencia Gato',
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
      
        {children}</body>
    </html>
  );
}
