import styles from './ImageGrid.module.scss';


const ImageGrid = ({images}) => {
    return (
        <div className={styles.imageGrid}>
            {images.map((image, idx) => {
                return <img src={image} className={styles.imageGrid__image} key={`imagegrid-${image}`}/>
            })}
        </div>
    )

}


export default ImageGrid;