'use client';

import { PageContainer, Promo, Body, Hero } from "@/components";

import copy from '../../../copy/about/copy.md';
import placeholder from '../../../placeholderCopy/about/copy.md';

const { attributes, react: AboutContent } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;


const About = () => {
    let { heroImage, pageTitle, promos, hero } = attributes;

    return (
        <PageContainer heroImage={heroImage} hero={hero} pageTitle={pageTitle}>
            <Body><AboutContent /></Body>
            <div className="w-full">
                

                {/* <div className="grid grid-cols-1 lg:grid-cols-3 my-20 container mx-auto"> */}
                    {/* {promos.map((promo, idx) =>
                        <Promo
                            header={promo.header}
                            body={promo.body}
                            cta={promo.cta}
                            image={promo.image}
                            alignment='center'
                            backgroundPos={promo.backgroundPos}
                            key={`${idx}`}
                        />
                    )} */}

                {/* </div> */}

            </div>
           
        </PageContainer>

    )
}

export default About;