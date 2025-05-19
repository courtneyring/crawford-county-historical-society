import styles from './LayeredImage.module.scss';

const LayeredImage = ({image, backgroundColor, positionX, positionY, customShift}) => {
    const shift = customShift ? customShift + 'px' : '25px';

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
        <div className={styles.layeredImage} style={{'--shift': shift}}>
            <div className={styles.layeredImage__accent} style={{ backgroundColor, ...accentStyle()}}></div>
            <img src={image.file} style={{...imageStyle()}} alt={image.alt}/>
        </div>
    )

}

export default LayeredImage;