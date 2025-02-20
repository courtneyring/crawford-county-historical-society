import styles from './Promo.module.scss';
import Link from 'next/link';


const Promo = ({ icon, header, eyebrow, body, cta, alignment, image, backgroundPos }) => {
    const Tag = cta ? Link : 'div';
    return (
        <Tag className={`items-${alignment} ${styles.promo}`} href={cta?.value}>
            {image && <div className={styles.promo__image} style={{ backgroundImage: `url(${image})`, backgroundPosition: backgroundPos }}></div>}
            {icon && <img src={`assets/icons/${icon}.svg`} className='h-14 w-auto mb-3' />}
            {eyebrow && <p className={styles.promo__eyebrow}>{eyebrow}</p>}
            <h3 className={styles.promo__header}>{header}</h3>
            <p className={styles.promo__body}>{body}</p>
            {cta &&
                <div className={styles.promo__cta}>{cta.label}
                    <img src='assets/icons/chevron-right.svg' />
                </div>
            }
        </Tag>
    )
}

export default Promo;