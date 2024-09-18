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


const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;
const { attributes: navAttritubes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? footerPlaceholder : footerCopy;
const { attributes: footerAttributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? footerPlaceholder : footerCopy;

export default function Home() {

  let { hero, imagePromos, intro } = attributes;
  


  return (
    <main className="flex  flex-col items-center ">
      <Navbar links={navAttritubes.links} title={navAttritubes.title} />
      <Hero  image={hero.image} />
      <div className="bg-lightgrey w-full">
        <div className='container mx-auto'>
          <p className="text-4xl leading-12 max-w-5xl py-20 mx-auto">{intro}</p>
        </div>
      </div>

      <div className="container">
        {imagePromos.map((promo, idx) => {
          return (
            <div className="py-20">
              <ImagePromoBlock heading={promo.heading} body={promo.body} cta={promo.cta} image={promo.image} key={`promo-${idx}`} reverse={idx % 2} />
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
