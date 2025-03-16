'use client';

import { PageContainer, Button, Promo, Body, Hero, Banner } from "@/components";
import variables from '../../../styles/variables.module.scss';
import copy from '../../../copy/about/copy.md';
import placeholder from '../../../placeholderCopy/about/copy.md';

const { attributes, react: AboutContent } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;


const About = () => {
    let { heroImage, pageTitle, promos, hero } = attributes;

    return (



        <PageContainer heroImage={heroImage} hero={hero} pageTitle={pageTitle}>
            <Body><AboutContent /></Body>
            <Banner 
                backgroundImage={`assets/images/gallery_michigan-ave.png`}
                backgroundColor={variables.primary}
                color={variables.white}
                text={'Welcome to the Crawford County Historical Society and Museum. Experience the rich history of Grayling and Crawford County through dynamic exhibits, interactive programs, and engaging community events that bring local stories to life.'}
                cta={<Button variation='secondary'>Learn More</Button>}
            />
        </PageContainer>

                //     
        //     <div className="w-full">
                

        //         {/* <div className="grid grid-cols-1 lg:grid-cols-3 my-20 container mx-auto"> */}
        //             {/* {promos.map((promo, idx) =>
        //                 <Promo
        //                     header={promo.header}
        //                     body={promo.body}
        //                     cta={promo.cta}
        //                     image={promo.image}
        //                     alignment='center'
        //                     backgroundPos={promo.backgroundPos}
        //                     key={`${idx}`}
        //                 />
        //             )} */}

        //         {/* </div> */}

        //     </div>
           

    )
}

export default About;