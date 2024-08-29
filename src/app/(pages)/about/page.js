'use client';

import { PageContainer } from "@/components";

import copy from '../../../copy/about/copy.md';
import placeholder from '../../../placeholderCopy/about/copy.md';

const { attributes, react: AboutContent } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;


const About = () => {
    let { heroImage, pageTitle, body } = attributes;
    console.log(attributes)

    return (
        <PageContainer heroImage={heroImage} pageTitle={pageTitle}>
            <p className="text-xl leading-8 mx-auto"><AboutContent /></p>
        </PageContainer>

    )
}

export default About;