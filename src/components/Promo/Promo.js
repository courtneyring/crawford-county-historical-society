import './Promo.scss';

const Promo = ({ icon, header, eyebrow, body, cta, alignment, image, backgroundPos }) => {
    const Tag = cta ? 'a' : 'div';
    return (
        <Tag className={`items-${alignment} promo`} href={cta?.url}>
            {image && <div className="promo__image" style={{ backgroundImage: `url(${image})`, backgroundPosition: {backgroundPos} }}></div>}
            {icon && <img src={`/assets/icons/${icon}.svg`} className='h-14 w-auto mb-3' />}
            {eyebrow && <p className="promo__eyebrow">{eyebrow}</p>}
            <h3 className='promo__header'>{header}</h3>
            <p className={`promo__body`}>{body}</p>
            {cta &&
                <div className={`promo__cta`}>{cta.label}
                    <img  src='/assets/icons/chevron-right.svg' />
                </div>
            }
        </Tag>
    )
}

export default Promo;