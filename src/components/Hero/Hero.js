'use client';
import Button from "../Button/Button";
import './Hero.css';

const Hero = ({text, image, variation='default', cta, imagePos}) => {

    const heightMap = {
        default: 'h-180',
        skinny: 'h-96',
        full: 'h-screen'
    }

    return (
        <div className={` w-screen bg-cover bg-[${imagePos}] md:bg-center relative flex items-center justify-center h-[30rem] md:${heightMap[variation]}`} style={{backgroundImage: `url(${image})`}}>
            <div className="gradient w-full h-full">
                <div className="max-w-6xl flex flex-col items-center">
                    <h1 className='text-5xl md:text-9xl  text-white leading-normal mb-10 text-center'>{text}</h1>
                    {/* <Button url='/about' variation='secondary'>Learn More</Button> */}

                </div>
            </div>
           

        </div>
    )
}

export default Hero;