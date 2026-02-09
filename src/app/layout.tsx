import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";

// Modern sans-serif for body text
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Elegant serif for headings
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Pets Garden - Premium Pet Care Services",
  description: "Experience premium pet care with The Pets Garden. We provide hostel facilities, grooming, healthcare, and loving care for your beloved pets.",
  keywords: "pet care, dog grooming, pet hostel, pet health, pet grooming, pet services",
  authors: [{ name: "The Pets Garden" }],
  openGraph: {
    title: "The Pets Garden - Premium Pet Care Services",
    description: "Experience premium pet care with The Pets Garden. We provide hostel facilities, grooming, healthcare, and loving care for your beloved pets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased font-inter bg-warm-ivory text-warm-dark">
        {children}
      </body>
    </html>
  );
}
