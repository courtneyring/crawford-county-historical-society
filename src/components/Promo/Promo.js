import './Promo.scss';

const Promo = ({ icon, header, eyebrow, body, href, alignment, image }) => {
    const Tag = href ? 'a' : 'div';
    return (
        <Tag className={`items-${alignment} promo`} href={href?.url}>
            {image && <div className="w-full h-60 mb-5" style={{ backgroundImage: `url(${image})` }}></div>}
            {icon && <img src={`/assets/icons/${icon}.svg`} className='h-14 w-auto mb-3' />}
            {eyebrow && <p className="promo__eyebrow">{eyebrow}</p>}
            <h3 className='promo__header'>{header}</h3>
            <p className={`promo__body`}>{body}</p>
            {href &&
                <div className={`promo__cta`} href={href.value}>{href.label}
                    <img  src='/assets/icons/chevron-right.svg' />
                </div>
            }
        </Tag>
    )
}

export default Promo;