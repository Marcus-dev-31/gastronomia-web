import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Marcos Di Cesare | Gastronomía",
  description:
    "Cursos online y presenciales de panadería, cocina y gestión gastronómica. Más de 20 años de experiencia formando cocineros y emprendedores.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}