'use client';

import Promo from '@/components/Promo/Promo';
import copy from '@/assets/json/copy.json';
import useRepeatable from '@/hooks/useRepeatable';
import Hero from "@/components/Hero/Hero";


export default function Home() {

  const promos = useRepeatable({componentType: 'promo', copy: copy.home, length: 3});
  const homeCopy = copy.home;

  return (
    <main className="flex  flex-col items-center ">
      <Hero text={homeCopy.heroText} image={homeCopy.heroImage}/>
      <div className=" max-w-7xl w-full items-center justify-between lg:flex px-2">
        <div className="flex grid md:grid-cols-3 gap-16 py-10">
          {promos.map((promo, idx) =>
            <Promo copy={promo} key={`promo-${idx}`} />
          )}


        </div>
        
      </div>
    </main>
  );
}
