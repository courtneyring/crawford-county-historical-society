import styles from './Banner.module.scss';
import variables from '@/styles/variables.module.scss';

const Banner = ({ text, cta, backgroundImage, backgroundColor, color }) => {
    return (
        <div className={`${styles.banner} ${backgroundImage && styles.background}`} style={{ '--background-color': backgroundColor, backgroundImage: `url(${backgroundImage})`, color}}>
            <div className={styles.banner__content} >
                <p className={styles.banner__text}>{text}</p>
                {cta}
            </div>

            

        </div>
    );
}

export default Banner;