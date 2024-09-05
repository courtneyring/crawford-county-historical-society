import Button from "../Button/Button";
import Promo from "../Promo/Promo";


const ImagePromoBlock = ({heading, body, cta, image, reverse, textColor, imagePos}) => {


    return (
        <div className=" flex flex-col md:grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 ">
            
            <div className={`h-[40rem] md:h-[50rem] ${!reverse && `md:order-2`}`}> 
                <img src={image} className={`object-cover h-full w-full object-${imagePos}`}/>

            </div>
            
            <div className={` py-20 flex flex-col items-center justify-start md:items-start md:order-1 md:justify-center ${reverse ? 'md:pl-10' : 'md:pr-10'} text-${textColor}`}>
                <h3 className="text-center md:text-left text-5xl mb-5">{heading}</h3>
                <p className="text-center md:text-left text-2xl mb-5 leading-10" dangerouslySetInnerHTML={{__html: body}}></p>
                {cta && <Button url={cta.value} variation='primary' target={cta.target} bgColor={cta.bgColor} color={cta.color}>{cta.label}</Button>}
            </div>
        </div>
    )
}

export default ImagePromoBlock;