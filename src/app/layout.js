"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Crypto Edu | Master Cryptocurrency and Blockchain</title>
        <meta
          name="description"
          content="Crypto Edu empowers learners with expert-guided cryptocurrency and blockchain knowledge. Access practical guides, trading strategies, security tips, and more to stay ahead in the crypto space."
        />
        <meta
          name="keywords"
          content="Crypto Edu, cryptocurrency, blockchain, trading strategies, crypto security, wallets, DeFi, digital currency education"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto m-0 p-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
