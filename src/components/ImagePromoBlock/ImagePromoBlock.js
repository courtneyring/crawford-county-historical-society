import Button from "../Button/Button";
import Promo from "../Promo/Promo";


const ImagePromoBlock = ({heading, body, cta, image, reverse}) => {

    return (
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 ">
            
            <div className={`h-180 ${!reverse && `md:order-2`}`}> 
                <img src={image} className="object-cover h-full"/>

            </div>
            
            <div className={`flex flex-col items-start justify-start md:order-1 md:justify-center ${reverse ? 'md:pl-10' : 'md:pr-10'}`}>
                <h3 className="text-5xl mb-5">{heading}</h3>
                <p className="text-2xl mb-5 leading-10">{body}</p>
                {cta && <Button url={cta.value} variation='primary'>{cta.label}</Button>}
            </div>
        </div>
    )
}

export default ImagePromoBlock;