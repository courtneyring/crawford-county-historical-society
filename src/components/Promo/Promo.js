import { imagePath } from '@/utils/imagePrefix';
import './Promo.scss';
import Link from 'next/link';


const Promo = ({ icon, header, eyebrow, body, cta, alignment, image, backgroundPos }) => {
    const Tag = cta ? Link : 'div';
    return (
        <Tag className={`items-${alignment} promo`} href={cta?.value}>
            {image && <div className="promo__image" style={{ backgroundImage: `url(${image})`, backgroundPosition: backgroundPos }}></div>}
            {icon && <img src={imagePath(`assets/icons/${icon}.svg`)} className='h-14 w-auto mb-3' />}
            {eyebrow && <p className="promo__eyebrow">{eyebrow}</p>}
            <h3 className='promo__header'>{header}</h3>
            <p className={`promo__body`}>{body}</p>
            {cta &&
                <div className={`promo__cta`}>{cta.label}
                    <img src={imagePath('assets/icons/chevron-right.svg')} />
                </div>
            }
        </Tag>
    )
}

export default Promo;