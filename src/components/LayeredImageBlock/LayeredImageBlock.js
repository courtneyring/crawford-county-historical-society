import Button from "../Button/Button";
import LayeredImage from "../LayeredImage/LayeredImage";
import styles from './LayeredImageBlock.module.scss';
import variables from '@/styles/variables.module.scss';


const LayeredImageBlock = ({heading, body, layeredImage, cta, backgroundColor, color, reverse}) => {
    return (
        <div className={`${styles.lImageBlock} ${reverse && styles.reverse}`} style={{backgroundColor, color}}>
            <div className={styles.lImageBlock__image}>
                <LayeredImage
                    {...layeredImage}
                />

            </div>

            <div className={styles.lImageBlock__content}>
                <h2 className={styles.lImageBlock__title}>{heading}</h2>
                <p className={styles.lImageBlock__description}>{body}</p>
                <Button {...cta}></Button>
            </div>

        </div>
    )
}


export default LayeredImageBlock;