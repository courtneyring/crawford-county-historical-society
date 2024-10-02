'use client';
import "./globals.scss";

import { Hero, ImagePromoBlock, Summary, Button } from '@/components';
import useResizeResponsive from "@/hooks/useResponsive";
import { isMobile } from "@/utils/breakpoints";

import copy from '../copy/home/copy.md';
import placeholder from '../placeholderCopy/home/copy.md';


const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;


export default function Home() {

  let { hero, imagePromos, intro } = attributes;

  const isMobileWidth = useResizeResponsive(isMobile);

  return (
    <main className="flex  flex-col items-center ">
     
        <Hero image={hero.image} pos={isMobileWidth && '-4rem'} />
        <div className={`bg-darkgrey w-full`}>
          <Summary textColor='white'>{intro}</Summary>
        </div>
        <div className="bg-white w-full">
          {imagePromos.map((promo, idx) => {
            return (
              <ImagePromoBlock heading={promo.header} body={promo.body} cta={promo.cta} image={promo.image} key={`promo-${idx}`} reverse={idx % 2 != 0} imageAlignment={promo.imageAlignment} />
            )
          })}

        </div>
        <div className="bg-blue w-full flex items-center justify-center flex-col py-36">
        <h2 className='text-lightgrey text-5xl mb-10' >We want to hear from you!</h2>
          <Button variant='primary' bgColor='#e1e2e2' color='#000000'>Contact Us</Button>
        </div>

    </main>
  );
}
