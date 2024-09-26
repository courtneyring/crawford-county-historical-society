'use client';
import Hero from "@/components/Hero/Hero";
import ImagePromoBlock from '@/components/ImagePromoBlock/ImagePromoBlock';

import copy from '../copy/home/copy.md';
import placeholder from '../placeholderCopy/home/copy.md';

import "./globals.scss";

import Summary from "@/components/Summary/Summary";
import useResizeResponsive from "@/hooks/useResponsive";
import { isMobile } from "@/utils/breakpoints";


const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;


export default function Home() {

  let { hero, imagePromos, intro } = attributes;

  const isMobileWidth = useResizeResponsive(isMobile);

  return (
    <main className="flex  flex-col items-center ">
     
        <Hero image={hero.image} pos={isMobileWidth && '-4rem'} />
        <div className="bg-lightgrey w-full">
          <Summary>{intro}</Summary>
        </div>
        <div >
          {imagePromos.map((promo, idx) => {
            return (
              <ImagePromoBlock heading={promo.header} body={promo.body} cta={promo.cta} image={promo.image} key={`promo-${idx}`} reverse={idx % 2 != 0} imageAlignment={promo.imageAlignment} />
            )
          })}

        </div>

    </main>
  );
}
