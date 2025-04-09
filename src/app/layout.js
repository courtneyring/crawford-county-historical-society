'use client'

import { usePathname } from 'next/navigation'
import { Urbanist } from "next/font/google";
import { Navbar, Footer } from '@/components';
import { attributes as configAttributes } from '../copy/config/copy.md';

import "../styles/globals.scss";

const urbanist = Urbanist({ subsets: ['latin'], display: 'swap', weight: ['300', '400', '500', '700'] })

// export const metadata = {
//   title: "CCHS",
//   description: "CCHS",
// };

export default function RootLayout({ children }) {
  const isAdmin = usePathname().includes('admin');

  return (
    <html lang="en">
      <body className={urbanist.className}>
        {!isAdmin && <Navbar links={configAttributes.links} logoImage={configAttributes.logoImg} />}
          {children}
        {!isAdmin && <Footer
          address={configAttributes.address}
          links={configAttributes.links}
          hours={configAttributes.hours}
          logoImg={configAttributes.logoImg}
          phone={configAttributes.phone}
          email={configAttributes.email}
        />}
        
        </body>
    </html>
  );
}
