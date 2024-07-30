'use client';

import { ParseContent } from '@/components';

const Hero = ({text, image, skinny}) => {
    return (
        <div className={`w-screen bg-cover bg-left md:bg-center relative flex items-center justify-center px-2 ${skinny ? 'h-80' : 'h-125'}`} style={{backgroundImage: `url(/assets/images/${image})`}}>
            {text && <ParseContent className='text-5xl md:text-7xl md:absolute top-40 right-36 text-white leading-normal text-center' content={text} tag={'h1'}/>}
        </div>
    )
}

export default Hero;