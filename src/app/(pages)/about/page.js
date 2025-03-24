'use client';

import { PageContainer, Button, DataGrid, Body, Hero, Banner } from "@/components";
import variables from '../../../styles/variables.module.scss';
import copy from '../../../copy/about/copy.md';
import placeholder from '../../../placeholderCopy/about/copy.md';
import FiftyFifty from "@/components/FiftyFifty/FiftyFifty";

const { attributes, react: AboutContent } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;


const About = () => {
    let { heroImage, pageTitle, promos, hero, members, fiftyFifty } = attributes;


    const button = (cta) =>
        <Button
            hollow={cta.hollow}
            variation={cta.variation}
            href={cta.value}
        >
            {cta.label}
        </Button>


    return (



        <PageContainer heroImage={heroImage} hero={hero} pageTitle={pageTitle}>
            <Body><AboutContent /></Body>
            <Banner 
                backgroundImage={`assets/images/gallery_michigan-ave.png`}
                backgroundColor={variables.primary}
                color={variables.white}
                text={'Welcome to the Crawford County Historical Society and Museum. Experience the rich history of Grayling and Crawford County through dynamic exhibits, interactive programs, and engaging community events that bring local stories to life.'}
                cta={<Button variation='white'>Learn More</Button>}
            />
            <h3>Our Leader</h3>
            <DataGrid data={members} />
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