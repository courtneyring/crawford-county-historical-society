import styles from './FiftyFifty.module.scss';

const FiftyFifty = ({ heading, body, cta, backgroundColor, color, image, reverse }) => {
    return (
        <div className={styles.fiftyFifty}>
            <div className={`${styles.fiftyFifty__content}  ${!!reverse && styles.reverse}`} style={{ backgroundColor, color }}>
                <div className={styles.fiftyFifty__text}> 
                    <h2>{heading}</h2>
                    <p>{body}</p>
                    {cta}
                </div>
            </div>
            <div className={styles.fiftyFifty__image}>
                <img src={image} />
            </div>
        </div>
    )
}

export default FiftyFifty;