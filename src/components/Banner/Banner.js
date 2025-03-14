import styles from './Banner.module.scss';
import variables from '@/styles/variables.module.scss';

const Banner = ({ backgroundImage, text, cta, style }) => {
    console.log(variables);
    return (
        <div className={styles.banner} style={style}>
            {/* <div className={styles.banner__content}> */}
                <h2 className={styles.banner__text}>{text}</h2>
                {cta}

            {/* </div> */}

        </div>
    );
}

export default Banner;