import Button from "../Button/Button";
import Promo from "../Promo/Promo";


const ImagePromoBlock = ({header, body, cta, image, reverse}) => {

    return (
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-5 py-10">
            
            <img src={image} className={!reverse && `md:order-2`} />
            <div className="flex flex-col items-start justify-start md:order-1 md:justify-center">
                <h3 className="text-5xl mb-5">{header}</h3>
                <p className="text-xl mb-5">{body}</p>
                <Button url={cta.value}>{cta.label}</Button>
            </div>
        </div>
    )
}

export default ImagePromoBlock;