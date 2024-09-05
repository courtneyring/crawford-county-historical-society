import { Urbanist } from "next/font/google";


import "./globals.scss";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import copy from '../copy/navigation/copy.md';
import placeholder from '../placeholderCopy/navigation/copy.md';

const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

const urbanist = Urbanist({ subsets: ['latin'], display: 'swap', weight: '400' })


export const metadata = {
  title: "Grayling Depot Fundraiser",
  description: "Grayling Depot Fundraiser",
};

export default function RootLayout({ children }) {

  let { title, links } = attributes;

  return (
    <html lang="en" >
      <head>
        <meta property="og:title" content="Grayling Depot Fundraiser" />
        <meta property="og:url" content="https://graylingdepot.com" />
        <meta property="og:image" content="https://graylingdepot.com/assets/images/grayling-depot-landing.png" />
      </head>
      <body className={urbanist.className}>
        {/* <Navbar links={links} title={title}/> */}
        {children}
        {/* <Footer /> */}
        </body>
    </html>
  );
}
