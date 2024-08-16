'use client';
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";
// import { ParseContent } from '@/components';

const Hero = ({text, image, skinny}) => {
    return (
        <div className={`w-screen bg-cover bg-left md:bg-center relative flex items-center justify-center px-2 ${skinny ? 'h-80' : 'h-180'}`} style={{backgroundImage: `url(/assets/images/${image})`}}>
            <h1 className='text-5xl md:text-7xl md:absolute top-40 right-36 text-white leading-normal text-right'>{text}</h1>
        </div>
    )
}

export default Hero;