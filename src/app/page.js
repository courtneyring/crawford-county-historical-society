'use client';
import Hero from "@/components/Hero/Hero";
import ImagePromoBlock from '@/components/ImagePromoBlock/ImagePromoBlock';

import copy from '../copy/home/copy.md';
import placeholder from '../placeholderCopy/home/copy.md';

import "./globals.scss";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import navCopy from '../copy/navigation/copy.md';
import navPlaceholder from '../placeholderCopy/navigation/copy.md';
import footerCopy from '../copy/footer/copy.md';
import footerPlaceholder from '../placeholderCopy/footer/copy.md';
import Summary from "@/components/Summary/Summary";


const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;
const { attributes: navAttritubes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? navPlaceholder : navCopy;
const { attributes: footerAttributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? footerPlaceholder : footerCopy;

export default function Home() {

  let { hero, imagePromos, intro } = attributes;
  


  return (
    <main className="flex  flex-col items-center ">
      <Navbar links={navAttritubes.links} title={navAttritubes.title} logoImage={navAttritubes.image}/>
      <Hero  image={hero.image} imagePos='-4rem'/>
      <div className="bg-lightgrey w-full">
        <Summary>{intro}</Summary>
      </div>

      <div className="container">
        {imagePromos.map((promo, idx) => {
          return (
            <div className="md:py-20">
              <ImagePromoBlock heading={promo.heading} body={promo.body} cta={promo.cta} image={promo.image} key={`promo-${idx}`} reverse={idx % 2} imagePos={`object-${promo.align}`} />
            </div>
          )
          
          
        })}

      </div>
      <Footer
        address={footerAttributes.address}
        links={footerAttributes.links}
        hours={footerAttributes.hours}
        logoImg={footerAttributes.logoImg}
      />
    </main>
  );
}
