import styles from './DataGrid.module.scss';

const DataGrid = ({ data, title }) => {
    return (
        <div className={styles.dataGrid}>
            <h2 className={styles.dataGrid__title}>{title}</h2>
            <div className={styles.dataGrid__grid}>
                {data.map((item, index) => {
                    return <div key={`grid-item-${item.label}`} >

                        <div className={styles.dataGrid__label}>{item.label}</div>
                        <div className={styles.dataGrid__value} >{item.value}</div>
                    </div>
                })
                }
            </div>

        </div>
    )
}

export default DataGrid;