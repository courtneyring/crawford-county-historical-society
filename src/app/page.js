'use client';
import Hero from "@/components/Hero/Hero";
import { attributes, react as HomeContent } from '../copy/home.md'
import ImagePromoBlock from '@/components/ImagePromoBlock/ImagePromoBlock';


export default function Home() {

  let { hero, imagePromos } = attributes;
  console.log(imagePromos)

  return (
    <main className="flex  flex-col items-center ">
      <Hero text={hero.title} image={hero.image} cta={{label: 'Learn More', value: '/about'}}/>
      <div className='container'>
        <p>The Crawford County Historical Society and Museum is a non-governmental, 501c3 non-profit corporation, dedicated to “Collecting, Preserving and Interpreting Documents and Artifacts that illustrate the history of Crawford County, Michigan”.</p>
        {imagePromos.map((promo, idx) => {
          return <ImagePromoBlock heading={promo.heading} body={promo.body} cta={promo.cta} image={promo.image} key={`promo-${idx}`}/>
        })}


      </div>
     
    </main>
  );
}
