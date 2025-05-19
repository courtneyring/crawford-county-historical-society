'use client';

import { PageContainer, Button, DataGrid, Body, Hero, Banner, FiftyFifty } from "@/components";
import variables from '@/styles/variables.module.scss';
import styles from './about.module.scss';
import { html, attributes } from '@/copy/about/copy.md'



const About = ({ data }) => {

    let { heroImage, pageTitle, hero, banner, membersTitle, members, fiftyFifties } = data ? data : attributes;

    return (

        <PageContainer heroImage={heroImage} hero={hero} pageTitle={pageTitle} copy={html}>
            <Banner
                backgroundImage={banner.backgroundImage}
                backgroundColor={variables[banner.backgroundColor]}
                color={variables[banner.color]}
                text={banner.text}
                attribution={banner.attribution}
                variation='wide'
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
                    cta={item.cta && item.cta}
                    pos={item.pos}
                    key={`fifty-${item.heading}`}
                />
            })}
        </PageContainer>

    )
}

export default About;