import styles from './LayeredImage.module.scss';

const LayeredImage = ({image, backgroundColor, positionX, positionY}) => {
    const shift = '20px';

    const accentStyle= () => {
        const marginTop = positionX === 'right' ? shift : null;
        const marginLeft = positionY === 'bottom' ? shift : null;
        return { marginTop, marginLeft }
    }

    const imageStyle = () => {
        const marginTop = positionX === 'left' ? shift : null;
        const marginLeft = positionY === 'top' ? shift : null;
        return { marginTop, marginLeft }
    }

    return (
        <div className={styles.layeredImage}>
            <div className={styles.layeredImage__accent} style={{ backgroundColor, ...accentStyle()}}></div>
            <img src={image} style={{...imageStyle()}}/>
        </div>
    )

}

export default LayeredImage;