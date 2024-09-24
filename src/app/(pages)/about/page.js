'use client';

import { PageContainer, Promo, Body } from "@/components";

import copy from '../../../copy/about/copy.md';
import placeholder from '../../../placeholderCopy/about/copy.md';

const { attributes, react: AboutContent } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;


const About = () => {
    let { heroImage, pageTitle, body } = attributes;
    console.log(attributes)

    return (
        <PageContainer heroImage={heroImage} pageTitle={pageTitle}>
            <Body><AboutContent /></Body>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-20">
                <Promo
                    header='Volunteer'
                    body='Volunteers are a vital component of the museum’s success. We welcome all volunteers no matter if you have a little time to offer or a lot.'
                    href={{ label: 'learn more', value: '/support/volunteer' }}
                    image={'https://www.tenement.org/wp-content/uploads/2020/07/97Orchard_Exteriors-website-1_1584x1458_acf_cropped_1584x1458_acf_cropped.jpg'}
                    alignment='center'
                />
                <Promo
                    header='Museum Donations'
                    body='A donation to the Crawford County Historical Society is a donation that helps to keep the museum up and running. Your donation helps to pay the bills and continue to preserve the history of the county.'
                    href={{ label: 'learn more', value: '/support/volunteer' }}
                    image={'https://www.tenement.org/wp-content/uploads/2020/07/97Orchard_Exteriors-website-1_1584x1458_acf_cropped_1584x1458_acf_cropped.jpg'}
                    alignment='center'
                />
                <Promo
                    header='Society Donations'
                    body='The Crawford County Historical Society Foundation Fund was established in 2009. It was created to provide long-term financial support for the historical society and museum. Donations to the fund are invested in a larger fund called the Community Foundation for Northeast Michigan. '
                    href={{ label: 'learn more', value: '/support/volunteer' }}
                    image={'https://www.tenement.org/wp-content/uploads/2020/07/97Orchard_Exteriors-website-1_1584x1458_acf_cropped_1584x1458_acf_cropped.jpg'}
                    alignment='center'
                />
            </div>
        </PageContainer>

    )
}

export default About;