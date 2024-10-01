import "./globals.scss";
import { Urbanist } from "next/font/google";
import { Navbar, Footer } from '@/components';

import configCopy from '../copy/config/copy.md';
import configPlaceholder from '../placeholderCopy/config/copy.md';


const { attributes: configAttributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? configPlaceholder : configCopy;

const urbanist = Urbanist({ subsets: ['latin'], display: 'swap', weight: ['300', '400', '500', '700'] })

export const metadata = {
  title: "CCHS",
  description: "CCHS",
};

export default function RootLayout({ children }) {


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
