'use client';

import Hero from "@/components/Hero/Hero";
import copy from '@/assets/json/copy.json';
import useRepeatable from "@/hooks/useRepeatable";
import { Map, ParseContent } from "@/components";

const About = () => {
    const aboutCopy = copy.about;
    const textBlocks = useRepeatable({ componentType: 'textBlock', copy: copy.contact, length: 3 })

    return (
        <main className="flex flex-col items-center">
            <Hero skinny image={aboutCopy.heroImg} />
            <div className='max-w-7xl w-full px-2 py-10'>
                <h1>{aboutCopy.pageName}</h1>

                <div className='grid md:grid-cols-2'>
                    <Map className='sm:order-2 md:order-1'/>
                    <div className='flex flex-col md:ml-10 sm:order-2 md:order-1'>
                        {textBlocks.map((textBlock, idx) => {
                            return (
                                <div className='mb-8'>
                                    <h3>{textBlock.title}</h3>
                                    <ParseContent content={textBlock.body} tag='p' />
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>

        </main>
    )
}

export default About;