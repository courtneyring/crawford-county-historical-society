import styles from './Banner.module.scss';
import variables from '@/styles/variables.module.scss';

const Banner = ({ text, cta, backgroundImage, backgroundColor, color }) => {
    console.log(variables);
    return (
        <div className={`${styles.banner} ${backgroundImage && styles.background}`} style={{ '--background-color': backgroundColor, backgroundImage: `url(${backgroundImage})`, color}}>
            <div className={styles.banner__content} >
                <h2 className={styles.banner__text}>{text}</h2>
                {cta}
            </div>

            

        </div>
    );
}

export default Banner;