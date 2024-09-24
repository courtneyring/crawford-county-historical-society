'use client';

import { PageContainer, Promo, Body } from "@/components";

import copy from '../../../copy/about/copy.md';
import placeholder from '../../../placeholderCopy/about/copy.md';

const { attributes, react: AboutContent } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;


const About = () => {
    let { heroImage, pageTitle, body, promos } = attributes;
    console.log(promos)

    return (
        <PageContainer heroImage={heroImage} pageTitle={pageTitle}>
            <Body><AboutContent /></Body>
            <div className="grid grid-cols-1 lg:grid-cols-3 my-20 ">
                {promos.map((promo) => 
                    <Promo
                        header={promo.header}
                        body= {promo.body}
                        cta={promo.cta}
                        image={promo.image}
                        alignment='center'
                        backgroundPos={promo.backgroundPos}
                    />
                )}
                
            </div>
        </PageContainer>

    )
}

export default About;