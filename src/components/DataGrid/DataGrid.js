import styles from './DataGrid.module.scss';

const DataGrid = ({data}) => {
    return (
        <div className={styles.dataGrid}>
            {data.map((item, index) => {
                return <div key={index} >
                    <div className={styles.dataGrid__label}>{item.label}</div>
                    <div className={styles.dataGrid__value} >{item.value}</div>   
                </div>
                })
            }
        </div>
    )
}

export default DataGrid;