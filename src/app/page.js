'use client';
import "../styles/globals.scss";
import variables from '../styles/variables.module.scss';
import styles from './Home.module.scss';
import { Hero, Banner, Promo, Summary, Button } from '@/components';
import useResizeResponsive from "@/hooks/useResponsive";
import { isMobile } from "@/utils/breakpoints";

import copy from '../copy/home/copy.md';
import placeholder from '../placeholderCopy/home/copy.md';
import FiftyFifty from "@/components/FiftyFifty/FiftyFifty";


const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;


export default function Home() {

  let { hero, intro, fiftyFifties, promoGroup, banner } = attributes;

  const isMobileWidth = useResizeResponsive(isMobile);

  const button = (cta) =>
    <Button
      hollow={cta.hollow}
      variation={cta.variation}
      href={cta.value}
    >
      {cta.label}
    </Button>


  return (
    <main className="flex  flex-col items-center ">

      <Hero image={hero.image} pos={isMobileWidth && '-4rem'} />
      <Banner
        backgroundColor={variables.neutralDark}
        color={variables.white }
        text={intro.body}
        cta={<Button variation='secondary' href={intro.cta.value}>{intro.cta.label}</Button>}
      />
      {fiftyFifties.map((item, idx) => {
        return <FiftyFifty
          heading={item.heading}
          body={item.body}
          image={item.image}
          backgroundColor={variables[item.backgroundColor]}
          reverse={item.reverse}
          color={variables[item.color]}
          cta={button(item.cta)}
        />
      })}

      <div className={styles.home__promoGroup}>
        <h2>{promoGroup.heading}</h2>
        <div className={styles.home__promos}>
          {promoGroup.promos.map((promo, idx) => {
            return (
              <>
                <Promo
                  header={promo.header}
                  body={promo.body}
                  icon={promo.icon}
                />
                {idx < promoGroup.promos.length -1  && <div className={styles.home__promoHr} />}
              </>
             
            )
          })
          }
        </div>
        {button(promoGroup.cta)}
      </div>
      <Banner
        backgroundImage={banner.backgroundImage}
        backgroundColor={variables[banner.backgroundColor]}
        color={banner.color}
        text={banner.text}
        cta={<Button variation={banner.cta.variation} hollow={banner.cta.hollow} url={banner.cta.url}>{banner.cta.label}</Button>}
      />

    </main>
  );
}
