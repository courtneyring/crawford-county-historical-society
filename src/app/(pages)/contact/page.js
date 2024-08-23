'use client';

import Hero from "@/components/Hero/Hero";
import { attributes, react as AboutContent } from '../../../copy/about/copy.md'

const About = () => {
    let { heroImage, pageTitle, body } = attributes;
    console.log(attributes)

    return (
        <main className="flex flex-col items-center">
            <Hero skinny image={heroImage} />
            <div className='max-w-7xl w-full px-2'>
                <h1 className="my-10">{pageTitle}</h1>
                <p className="text-xl leading-8 mx-auto"><AboutContent /></p>
            </div>

        </main>
    )
}

export default About;