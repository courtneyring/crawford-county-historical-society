import styles from './ImageBlock.module.scss';

const ImageBlock = ({image}) => {
    return (
        <div className={`container mx-auto grid  ${styles.ImageBlock}`} style={{backgroundImage: `url(${image})`}}>

        </div>
    )
}

export default ImageBlock;