import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Asernum",
  description: "Asernum est une agence de services numériques spécialisée dans l'identité, la biométrie, la confiance numérique et l'authentification de documents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
      <link rel='icon' href='/public/img/svg/logo.svg' />
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}
