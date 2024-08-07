import Button from "../Button/Button";
import Promo from "../Promo/Promo";


const ImagePromoBlock = ({promo, image, reverse}) => {

    return (
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-5">
            
            <img src={image} className="md:order-2" />
            <div className="flex flex-col items-start justify-start md:order-1 md:justify-center">
                <h3 className="text-5xl mb-5">{promo.header}</h3>
                <p className="text-xl mb-5">{promo.body}</p>
                <Button text='Learn More' url='/test' />
            </div>
        </div>
    )
}

export default ImagePromoBlock;