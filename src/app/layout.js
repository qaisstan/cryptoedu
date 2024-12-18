"use client";


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <title>TRUSTON | Innovative Web Solutions for Your Business</title>
        <meta
          name="description"
          content="TRUSTON delivers innovative web solutions including web development, automation, SEO optimization, and more. Experience fast, responsive, and user-friendly digital services tailored to your business needs."
        />
        <meta
          name="keywords"
          content="TRUSTON, web solutions, automation, SEO optimization, responsive design, cloud infrastructure, API integration, business services, innovative technology"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        
          <Header />
          <main className="flex-grow container mx-auto m-0 p-0">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
