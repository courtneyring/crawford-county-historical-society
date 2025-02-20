import FadeIn from "@/animations/FadeIn";
import Button from "../Button/Button";
import styles from './ImagePromoBlock.module.scss'


const ImagePromoBlock = ({ heading, body, cta, image, reverse, textColor, imageAlignment, icon, uneven }) => {
    console.log(styles.block)

    return (
        <FadeIn className={`${styles.block} container mx-auto ${!!reverse ? styles.reverse : ''} ${!!uneven ? styles.uneven : ''}`} excludeTranslate={true}>

            <div className={`${styles.block__text} ${reverse ? 'md:pl-10' : 'md:pr-10'} text-${textColor}`}>
                <h3 className="text-center md:text-left text-5xl mb-5">{heading}</h3>
                <p className="text-center md:text-left mb-5 leading-10" dangerouslySetInnerHTML={{ __html: body }}></p>
                {cta && <Button url={cta.value} variation='primary' target={cta.target} bgColor={cta.bgColor} color={cta.color}>{cta.label}</Button>}
            </div>


            {image &&  <div className={styles.block__image}>
                <img src={image} style={{ objectPosition: `${imageAlignment ?? 50}% center` }} />
            </div>}
            {icon && <div className={styles.block__icon}>
                <img src={`assets/icons/${icon}.svg`}  />
            </div>}
            {/* </FadeIn> */}

        </FadeIn>
    )
}

export default ImagePromoBlock;