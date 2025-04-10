'use client';

import { PageContainer, Button, DataGrid, Body, Hero, Banner } from "@/components";
import variables from '../../../styles/variables.module.scss';
import copy from '../../../copy/about/copy.md';
import placeholder from '../../../placeholderCopy/about/copy.md';
import FiftyFifty from "@/components/FiftyFifty/FiftyFifty";

const { attributes, react: AboutContent } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;


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
            {/* <Body><AboutContent /></Body> */}
            <Banner 
                backgroundImage={banner.backgroundImage}
                backgroundColor={variables[banner.backgroundColor]}
                color={variables[banner.color]}
                text={banner.text}
                cta={<Button variation={banner.cta.variation}>Learn More</Button>}
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