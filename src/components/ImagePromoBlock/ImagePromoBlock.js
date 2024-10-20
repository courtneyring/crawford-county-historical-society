import Button from "../Button/Button";
import styles from './ImagePromoBlock.module.scss'


const ImagePromoBlock = ({heading, body, cta, image, reverse, textColor, imageAlignment}) => {
    console.log(styles.block)

    return (
        <div className={`${styles.block } container mx-auto ${!!reverse ? styles.reverse : ''}`}>
            
            
            
            <div className={`${styles.block__text} ${reverse ? 'md:pl-10' : 'md:pr-10'} text-${textColor}`}>
                <h3 className="text-center md:text-left text-5xl mb-5">{heading}</h3>
                <p className="text-center md:text-left text-2xl mb-5 leading-10" dangerouslySetInnerHTML={{__html: body}}></p>
                {cta && <Button url={cta.value} variation='primary' target={cta.target} bgColor={cta.bgColor} color={cta.color}>{cta.label}</Button>}
            </div>
            <div className={styles.block__image}>
                <img src={image} style={{ objectPosition: `${imageAlignment ?? 50}% center` }} />

            </div>
        </div>
    )
}

export default ImagePromoBlock;