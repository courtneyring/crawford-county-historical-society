'use client';

import Hero from "@/components/Hero/Hero";
import { attributes } from '../../../copy/contact/copy.md'

const About = () => {
    let { heroImage, pageTitle, address, phone, email, hours } = attributes;

    return (
        <main className="flex flex-col items-center">
            <Hero skinny image={heroImage} />
            <div className='max-w-7xl w-full px-2'>
                <h1 className="my-10">{pageTitle}</h1>
                <p></p>
            </div>

        </main>
    )
}

export default About;