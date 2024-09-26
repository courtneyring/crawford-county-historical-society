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

import configCopy from '../copy/config/copy.md';
import configPlaceholder from '../placeholderCopy/config/copy.md';



const { attributes: configAttributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? configPlaceholder : configCopy;

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
        <Navbar links={configAttributes.links} logoImage={configAttributes.logoImg} />
          {children}
        <Footer
          address={configAttributes.address}
          links={configAttributes.links}
          hours={configAttributes.hours}
          logoImg={configAttributes.logoImg}
        />
        
        </body>
    </html>
  );
}
