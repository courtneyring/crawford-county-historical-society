'use client';

import { PageContainer, Button, DataGrid, Body, Hero, Banner, FiftyFifty } from "@/components";
import variables from '../../../styles/variables.module.scss';
import styles from './about.module.scss';
import { attributes, react as AboutContent } from '../../../copy/about/copy.md';


const About = () => {
    let { heroImage, pageTitle, hero, banner, membersTitle, members, fiftyFifties } = attributes;


    const button = (cta) =>
        <Button
            hollow={cta.hollow}
            variation={cta.variation}
            href={cta.value}
        >
            {cta.label}
        </Button>


    return (

        <PageContainer heroImage={heroImage} hero={hero} pageTitle={pageTitle} copy={<AboutContent />} >
            <Banner 
                backgroundImage={banner.backgroundImage}
                backgroundColor={variables[banner.backgroundColor]}
                color={variables[banner.color]}
                text={banner.text}
                attribution={banner.attribution}
                variation='wide'
                // cta={<Button variation={banner.cta.variation}>Learn More</Button>}
            />
            
            <DataGrid data={members} title={membersTitle} />
            {fiftyFifties.map((item, idx) => {
                return <FiftyFifty
                    heading={item.heading}
                    body={item.body}
                    image={item.image}
                    backgroundColor={variables[item.backgroundColor]}
                    reverse={item.reverse}
                    color={variables[item.color]}
                    cta={item.cta ? button(item.cta) : null}
                    pos={item.pos}
                    key={`fifty-${item.heading}`}
                />
            })}
        </PageContainer>


           

    )
}

export default About;