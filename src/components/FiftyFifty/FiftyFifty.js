import Button from '../Button/Button';
import styles from './FiftyFifty.module.scss';

const FiftyFifty = ({ heading, body, cta, backgroundColor, color, image, reverse, pos }) => {
    console.log(image)
    return (
        <div className={`${styles.fiftyFifty} ${!!reverse && styles.reverse}`} style={{ backgroundColor, color }}>
            <div className={`${styles.fiftyFifty__content} `} >
                <div className={styles.fiftyFifty__text}> 
                    <h2>{heading}</h2>
                    <p>{body}</p>
                    {cta.label && cta.value ? <Button {...cta}/> : null}

                </div>
            </div>
            <div className={styles.fiftyFifty__image}>
                <div className={styles.fiftyFifty__imageContainer}>

                    <img src={image.file} alt={image.alt} style={{objectPosition: pos}}/>
                </div>
               
            </div>
        </div>
    )
}

export default FiftyFifty;