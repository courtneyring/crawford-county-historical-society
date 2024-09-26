import { Urbanist } from "next/font/google";


import "./globals.scss";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import copy from '../copy/navigation/copy.md';
import placeholder from '../placeholderCopy/navigation/copy.md';
import footerCopy from '../copy/footer/copy.md';
import footerPlaceholder from '../placeholderCopy/footer/copy.md';


const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;
const { attributes: footerAttributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? footerPlaceholder : footerCopy;

const urbanist = Urbanist({ subsets: ['latin'], display: 'swap', weight: ['300', '400', '500', '700'] })

export const metadata = {
  title: "CCHS",
  description: "CCHS",
};

export default function RootLayout({ children }) {

  let { title, links } = attributes;


  return (
    <html lang="en">
      <body className={urbanist.className}>
        {/* <Navbar links={links} title={title}/> */}
        {children}
        {/* <Footer 
          address={footerAttributes.address}
          links={footerAttributes.links}
          hours={footerAttributes.hours}
          logoImg={footerAttributes.logoImg}
          /> */}
        </body>
    </html>
  );
}
