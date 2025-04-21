'use client';

import { PageContainer, Button, DataGrid, Body, Hero, Banner, FiftyFifty } from "@/components";
import variables from '../../../styles/variables.module.scss';
import styles from './about.module.scss';
import { attributes, react as AboutContent } from '../../../copy/about/copy.md';


const About = () => {
    let { heroImage, pageTitle, hero, banner, membersTitle, members, fiftyFifty } = attributes;


    const button = (cta) =>
        <Button
            hollow={cta.hollow}
            variation={cta.variation}
            href={cta.value}
        >
            {cta.label}
        </Button>


    return (

        <PageContainer heroImage={heroImage} hero={hero} pageTitle={pageTitle} copy={<AboutContent />}>
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
            <FiftyFifty
                heading={fiftyFifty.heading}
                body={fiftyFifty.body}
                image={fiftyFifty.image}
                backgroundColor={variables[fiftyFifty.backgroundColor]}
                reverse={fiftyFifty.reverse}
                color={variables[fiftyFifty.color]}
                cta={button(fiftyFifty.cta)}
            />
        </PageContainer>


           

    )
}

export default About;