'use client';
import useResizeResponsive from "@/hooks/useResponsive";
import styles from './Hero.module.scss';


const Hero = ({text, image, variation='default', cta, pos}) => {

    return (
        <div className={`${styles.hero} ${styles[variation]}`} style={{backgroundImage: `url(${image})`, backgroundPosition: pos}}>
            <div className={`${styles.gradient}`}>
            </div>
        </div>
    )
}

export default Hero;