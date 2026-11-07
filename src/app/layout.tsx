import type { Metadata } from "next";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropostaPro - Gerador de Propostas Comerciais",
  description:
    "Plataforma moderna para criação de propostas comerciais profissionais para autônomos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
