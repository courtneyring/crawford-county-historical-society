import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
// import copy from '@/assets/json/copy.json'
import { attributes } from '../copy/navigation/copy.md'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CCHS",
  description: "CCHS",
};

export default function RootLayout({ children }) {

  let { title, links } = attributes;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar links={links} title={title}/>
        {children}
        {/* <Footer promos={footerPromos} /> */}
        </body>
    </html>
  );
}
