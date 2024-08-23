'use client';
import Hero from "@/components/Hero/Hero";
import { attributes, react as HomeContent } from '../copy/home/copy.md'
import ImagePromoBlock from '@/components/ImagePromoBlock/ImagePromoBlock';


export default function Home() {

  let { hero, imagePromos, intro } = attributes;
  console.log(imagePromos)

  return (
    <main className="flex  flex-col items-center ">
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
     
    </main>
  );
}
