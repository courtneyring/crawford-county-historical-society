import styles from './Banner.module.scss';
import variables from '@/styles/variables.module.scss';

const Banner = ({ text, cta, backgroundImage, backgroundColor, color, variation, attribution }) => {
    return (
        <div className={`${styles.banner} ${backgroundImage && styles.background}  ${variation && styles[variation]}`} style={{ '--background-color': backgroundColor, backgroundImage: `url(${backgroundImage})`, color}}>
            <div className={styles.banner__content} >
                <p className={`${styles.banner__text}`}>{text}</p>
                <p className={styles.banner__attribution}>{attribution}</p>
                {cta}
            </div>

            

        </div>
    );
}

export default Banner;