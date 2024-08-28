'use client';

import Hero from "@/components/Hero/Hero";
import { Header, PageContainer } from "@/components";
import { attributes, react as AboutContent } from '../../../copy/about/copy.md'

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