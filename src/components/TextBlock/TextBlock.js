import styles from './TextBlock.module.scss';

const TextBlock = ({heading, children}) => {
    return (
        <div className={`flex container mx-auto flex-col md:flex-row px-5 ${styles.textblock}`}>
            <h2 >{heading}</h2>
            <p >{children}</p>
        </div>
    )
}

export default TextBlock;