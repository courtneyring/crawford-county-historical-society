import styles from './Accordion.module.scss';

const AccordionItem = ({title, body, toggleFn, isOpen, idx }) => {
    return (
        <div className={styles.accordion__item} >
            <button className={styles.accordion__button} onClick={() => toggleFn(!isOpen)} >
                <span >{title}</span>
                <div className={styles.accordion__icon}>
                    <span ></span>
                    <span className={`${isOpen ? styles.open: ''}`}></span>
                </div>
            </button>
            <div className={`${styles.accordion__content} ${isOpen ? styles.open : ''}`}>
                <div className={styles.accordion__body}>
                    {body}
                </div>
                
            </div>
        </div>
    )
}

export default AccordionItem;