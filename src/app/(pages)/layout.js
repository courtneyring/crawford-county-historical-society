'use client';

import { Urbanist } from "next/font/google";
import { Navbar, Footer } from '@/components';
import { attributes as configAttributes } from '@/copy/config/copy.md';
import { usePathname } from 'next/navigation';

import "@/styles/globals.scss";
import { capitalizeFirstLetter } from "@/utils/helpers";

const urbanist = Urbanist({ subsets: ['latin'], display: 'swap', weight: ['300', '400', '500', '700'] })


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const pageName = capitalizeFirstLetter(pathname.split('/')[1])
  

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{`${pathname !== '/' ? `${pageName} | ` : ''}Crawford County Historical Society`}</title>
      </head>
      <body className={urbanist.className}>
        <Navbar links={configAttributes.links} logoImage={configAttributes.logoImg} background={pathname !== '/'}/>
        {children}
        <Footer
          address={configAttributes.address}
          links={configAttributes.links}
          hours={configAttributes.hours}
          logoImg={configAttributes.logoImg}
          phone={configAttributes.phone}
          email={configAttributes.email}
        />
      </body>
    </html>
  );
}
