import styles from './Address.module.scss';

const Address = ({ address }) => {
    return (
        <p className={styles.address}>
            {address.street}
            <br />
            {address.street2}
            <br />
            {address.city}, {address.state} {address.zip}
        </p>
    )
}

export default Address;