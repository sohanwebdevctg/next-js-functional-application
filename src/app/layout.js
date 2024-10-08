import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* navbar section start */}
        <Navbar></Navbar>
        {/* navbar section end */}
        {/* content section start */}
        <div className="min-h-screen">
          {children}
        </div>
        {/* content section end */}
        {/* footer section start */}
        <Footer></Footer>
        {/* footer section end */}
        </body>
    </html>
  );
}
