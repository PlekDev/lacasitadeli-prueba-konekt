import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
