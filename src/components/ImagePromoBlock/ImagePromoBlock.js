import Button from "../Button/Button";
import Promo from "../Promo/Promo";
import './ImagePromoBlock.scss'

const ImagePromoBlock = ({heading, body, cta, image, reverse, textColor, imageAlignment}) => {

    return (
        <div className={`block ${!!reverse ? `reverse` : ''}`}>
            
            
            
            <div className={`block__text ${reverse ? 'md:pl-10' : 'md:pr-10'} text-${textColor}`}>
                <h3 className="text-center md:text-left text-5xl mb-5">{heading}</h3>
                <p className="text-center md:text-left text-2xl mb-5 leading-10" dangerouslySetInnerHTML={{__html: body}}></p>
                {cta && <Button url={cta.value} variation='primary' target={cta.target} bgColor={cta.bgColor} color={cta.color}>{cta.label}</Button>}
            </div>
            <div className={`block__image `}>
                <img src={image} style={{ objectPosition: `${imageAlignment ?? 50}% center` }} />

            </div>
        </div>
    )
}

export default ImagePromoBlock;