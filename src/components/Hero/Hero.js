'use client';
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";
import Button from "../Button/Button";
// import { ParseContent } from '@/components';

const Hero = ({text, image, skinny, cta}) => {
    return (
        <div className={`w-screen bg-cover bg-left md:bg-center relative flex items-center justify-center px-2 ${skinny ? 'h-80' : 'h-180'}`} style={{backgroundImage: `url(/assets/images/${image})`}}>
            <div className="max-w-3xl md:absolute top-40 right-36 text-right">
                <h1 className='text-5xl md:text-7xl  text-white leading-normal mb-10'>{text}</h1>
                <Button>Learn More</Button>

            </div>

        </div>
    )
}

export default Hero;