import styles from './Promo.module.scss';
import Link from 'next/link';


const Promo = ({ icon, header, body, cta }) => {
    const Tag = cta ? Link : 'div';
    return (
        <Tag className={` ${styles.promo}`} href={cta?.value}>
            {icon && <img src={`/assets/icons/${icon}.svg`} className='h-14 w-auto mb-3' alt={`${icon} icon`}/>}
            <h3 className={styles.promo__header}>{header}</h3>
            <p className={styles.promo__body}>{body}</p>
            {cta &&
                <div className={styles.promo__cta}>{cta.label}
                    <img src='/assets/icons/chevron-right.svg' />
                </div>
            }
        </Tag>
    )
}

export default Promo;