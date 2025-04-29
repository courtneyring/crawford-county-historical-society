'use client';

import variables from '../styles/variables.module.scss';
import styles from './Home.module.scss';
import { Hero, Banner, Promo, Button, FiftyFifty } from '@/components';
import { Fragment } from 'react';
import { attributes } from '../copy/home/copy.md';


export default function Home() {

  let { hero, intro, fiftyFifties, promoGroup, banner } = attributes;

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

      <Hero image={hero.image} pos={hero.pos}/>
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
          key={`fifty-${item.heading}`}
        />
      })}

      <div className={styles.home__promoGroup}>
        <h2>{promoGroup.heading}</h2>
        <div className={styles.home__promos}>
          {promoGroup.promos.map((promo, idx) => {
            return (
              <Fragment key={promo.header}>
                <Promo
                  header={promo.header}
                  body={promo.body}
                  icon={promo.icon}

                />
                {idx < promoGroup.promos.length -1  && <div className={styles.home__promoHr} />}
              </Fragment>
             
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
        cta={<Button {...banner.cta}></Button>}
      />

    </main>
  );
}
