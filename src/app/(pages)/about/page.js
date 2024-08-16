'use client';

import Hero from "@/components/Hero/Hero";
import copy from '@/assets/json/copy.json';
import useRepeatable from "@/hooks/useRepeatable";
import { ParseContent } from "@/components";

const About = () => {
    const aboutCopy = copy.about;
    const textBlocks = useRepeatable({ componentType: 'textBlock', copy: copy.about, length:5})

    return (
        <main className="flex flex-col items-center">
            <Hero skinny image={aboutCopy.heroImg}/>
            <div className='max-w-7xl w-full px-2'>
                <h1>{aboutCopy.pageName}</h1>
                {textBlocks.map((textBlock, idx) => {
                    return (
                        <>
                            <h2>{textBlock.title}</h2>
                            <ParseContent content={textBlock.body} tag='p'/>
                        </>
                    )
                })}
            </div>
            
        </main>
    )
}

export default About;