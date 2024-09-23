'use client';
import Button from "../Button/Button";
import './Hero.scss';

const Hero = ({text, image, variation='default', cta, imagePos}) => {


    return (
        <div className={`hero ${variation}`} style={{backgroundImage: `url(${image})`, backgroundPosition: imagePos}}>
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