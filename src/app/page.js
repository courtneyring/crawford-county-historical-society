'use client';

import Image from "next/image";
import Promo from '@/components/Promo/Promo';
import copy from '@/assets/json/copy.json';
import { useEffect, useState } from "react";


export default function Home() {

  const [promos, setPromos] = useState([]);

  useEffect(() => {
    let homeCopy = copy.home;
    let newArr = [];
    for (let i = 0; i <= 2; i++) {
      let obj = {
        header: homeCopy[`promoHeader${i + 1}`],
        body: homeCopy[`promoBody${i + 1}`],
        linkUrl: homeCopy[`promoLinkUrl${i + 1}`],
        linkLabel: homeCopy[`promoLinkLabel${i + 1}`],
        icon: homeCopy[`promoIcon${i + 1}`],
      }

      newArr.push(obj);
    }
    console.log(newArr)
    setPromos(newArr);
  }, [])

  useEffect(() => {
    console.log(promos)
  }, [promos])




  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-7xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex grid grid-cols-3 gap-16">
          {promos.map((promo, idx) =>
            <Promo copy={promo} key={`promo-${idx}`} />
          )}


        </div>
        
      </div>
    </main>
  );
}
