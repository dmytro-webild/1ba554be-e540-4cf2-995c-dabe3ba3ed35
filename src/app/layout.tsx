import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Hortus Jannat Firenze | Luxury Niche Perfumes',
  description: 'Discover Hortus Jannat Firenze\'s exquisite collection of niche and ultra-niche luxury perfumes, handcrafted in Italy. Exceptional quality at an accessible price.',
  keywords: ["luxury perfume, niche perfume, ultra niche perfume, Italian perfume, Extrait de Parfum, Eau de Parfum, Florence, artisanal fragrance, high quality perfume, affordable luxury perfume, perfume store Europe"],
  openGraph: {
    "title": "Hortus Jannat Firenze | Luxury Niche Perfumes",
    "description": "Discover Hortus Jannat Firenze's exquisite collection of niche and ultra-niche luxury perfumes, handcrafted in Italy. Exceptional quality at an accessible price.",
    "url": "https://www.hortusjannat.com",
    "siteName": "Hortus Jannat Firenze",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/empty-perfume-bottle-still-life_23-2149234380.jpg",
        "alt": "Luxury Perfume Bottles"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Hortus Jannat Firenze | Luxury Niche Perfumes",
    "description": "Discover Hortus Jannat Firenze's exquisite collection of niche and ultra-niche luxury perfumes, handcrafted in Italy. Exceptional quality at an accessible price.",
    "images": [
      "http://img.b2bpic.net/free-photo/empty-perfume-bottle-still-life_23-2149234380.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunitoSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
