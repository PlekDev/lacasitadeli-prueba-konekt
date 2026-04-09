import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-headline",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-label",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Casita Deli | Sabores Artesanales",
  description: "Descubre la mejor selección de productos gourmet, repostería artesanal y cocina internacional en La Casita Delicatessen.",
  keywords: ["La Casita", "Gourmet", "Deli", "Market", "Artesanal", "Comida"],
  authors: [{ name: "La Casita Deli" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "La Casita Deli | Sabores Artesanales",
    description: "Productos gourmet y cocina artesanal entregados en tu hogar.",
    siteName: "La Casita Deli",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${newsreader.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
