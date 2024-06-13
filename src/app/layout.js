import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* navbar section start */}
        <Navbar></Navbar>
        {/* navbar section end */}
        {/* content section start */}
        {children}
        {/* content section end */}
        {/* footer section start */}
        <Footer></Footer>
        {/* footer section end */}
        </body>
    </html>
  );
}