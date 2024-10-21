'use client';
import useResizeResponsive from "@/hooks/useResponsive";
import Button from "../Button/Button";
import styles from './Hero.module.scss';


const Hero = ({text, image, variation='default', cta, pos}) => {

    return (
        <div className={`${styles.hero} ${styles[variation]}`} style={{backgroundImage: `url(${image})`, backgroundPosition: pos}}>
            <div className={`${styles.gradient} w-full h-full`}>
                <div className="max-w-6xl flex flex-col items-center">
                    <h1 className='text-5xl md:text-9xl  text-white leading-normal mb-10 text-center'>{text}</h1>
                    {/* <Button url='/about' variation='secondary'>Learn More</Button> */}

                </div>
            </div>
           

        </div>
    )
}

export default Hero;