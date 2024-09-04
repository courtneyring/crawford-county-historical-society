'use client';
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";
import Button from "../Button/Button";
// import { ParseContent } from '@/components';

const Hero = ({text, image, variation='default', cta}) => {

    const heightMap = {
        default: 'h-180',
        skinny: 'h-96',
        full: 'h-screen'
    }

    return (
        <div className={`w-screen bg-cover bg-left md:bg-center relative flex items-center justify-center px-2 ${heightMap[variation]}`} style={{backgroundImage: `url(${image})`}}>
            <div className="max-w-6xl flex flex-col items-center">
                <h1 className='text-5xl md:text-9xl  text-white leading-normal mb-10 text-center'>{text}</h1>
                {/* <Button url='/about' variation='secondary'>Learn More</Button> */}

            </div>

        </div>
    )
}

export default Hero;