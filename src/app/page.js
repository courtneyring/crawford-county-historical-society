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

  let { hero, intro, fiftyFifties, promoGroup } = attributes;
  console.log(promoGroup)

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
              <Promo
                header={promo.heading}
                body={promo.body}
                icon={promo.icon}
              />
            )
          })
          }
        </div>
        {button(promoGroup.cta)}
      </div>
      <Banner
        backgroundImage={`assets/images/gallery_michigan-ave.png`}
        backgroundColor={variables.primary}
        color={variables.white}
        text={'Welcome to the Crawford County Historical Society and Museum. Experience the rich history of Grayling and Crawford County through dynamic exhibits, interactive programs, and engaging community events that bring local stories to life.'}
        cta={<Button variation='secondary'>Learn More</Button>}
      />

    </main>
  );
}
