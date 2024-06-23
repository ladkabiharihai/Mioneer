'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer.js/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import HomeView from "./components/Section1/HomeView";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const pathname = usePathname();

 







  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </head>

      <body className={inter.className}>

        <Home />
        <Navbar />
       { pathname === "/" ?
       
        <HomeView /> :  children
       
       
       }
        <Footer/>
        </body>
    </html>
  );
}
