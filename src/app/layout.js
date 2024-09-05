import { Inter } from "next/font/google";


import "./globals.scss";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import copy from '../copy/navigation/copy.md';
import placeholder from '../placeholderCopy/navigation/copy.md';

const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Grayling Depot Fundraiser",
  description: "Grayling Depot Fundraiser",
};

export default function RootLayout({ children }) {

  let { title, links } = attributes;

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/images/favicon.png"
          type="image/png"
        />
      </head>
      <body>
        {/* <Navbar links={links} title={title}/> */}
        {children}
        {/* <Footer /> */}
        </body>
    </html>
  );
}
