import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Casita - Sistema de Punto de Venta",
  description: "Sistema de punto de venta para La Casita. Gestión de inventario, ventas y corte de caja.",
  keywords: ["La Casita", "POS", "Punto de Venta", "Inventario", "Ventas"],
  authors: [{ name: "La Casita" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "La Casita - Sistema POS",
    description: "Sistema de punto de venta para La Casita",
    siteName: "La Casita",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
