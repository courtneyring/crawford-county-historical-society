'use client';

import Promo from '@/components/Promo/Promo';
import copy from '@/assets/json/copy.json';
import useRepeatable from '@/hooks/useRepeatable';
import Hero from "@/components/Hero/Hero";
import { attributes, react as HomeContent } from '../copy/home.md'
import ImagePromoBlock from '@/components/ImagePromoBlock/ImagePromoBlock';



export default function Home() {

  let { hero, imagePromos } = attributes;
  

  const promoCopy = {
    "header": "Crawford County History",
    "body": "Learn more about Crawford County through historical photographs and information.",
    href: {
      url: '/history',
      label: 'Export the Past',
    }
  }



  return (
    <main className="flex  flex-col items-center ">
      <Hero text={hero.title} image={hero.image} cta={{label: 'Learn More', value: '/about'}}/>
      <div className='container'>
        <p>The Crawford County Historical Society and Museum is a non-governmental, 501c3 non-profit corporation, dedicated to “Collecting, Preserving and Interpreting Documents and Artifacts that illustrate the history of Crawford County, Michigan”.</p>
        {}
        <ImagePromoBlock promo={promoCopy} image='https://images.squarespace-cdn.com/content/v1/624b503d11269629b387b9c3/1649102910495-TNRUPY6VYTRMUGH1P4IU/image-asset.jpeg?format=2500w' />
        <ImagePromoBlock reverse={true} promo={promoCopy} image='https://images.squarespace-cdn.com/content/v1/624b503d11269629b387b9c3/1649102910495-TNRUPY6VYTRMUGH1P4IU/image-asset.jpeg?format=2500w' />
        <ImagePromoBlock promo={promoCopy} image='https://images.squarespace-cdn.com/content/v1/624b503d11269629b387b9c3/1649102910495-TNRUPY6VYTRMUGH1P4IU/image-asset.jpeg?format=2500w' />

      </div>
     
    </main>
  );
}
