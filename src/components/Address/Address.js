import styles from './Address.module.scss';

const Address = ({ address, centerAlign, fontSize }) => {
    return (
        <p className={`${styles.address} ${centerAlign && styles.center}`} style={{ fontSize }}>
            {address.street}
            <br />
            {address.street2}
            <br />
            {address.city}, {address.state} {address.zip}
        </p>
    )
}

export default Address;