import styles from './AddressHoursContact.module.scss';
import Address from '../Address/Address';

const AddressHoursContact = ({address, hours, email, phone, dark=true, centerAlign, fontSize}) => {
    return (
        <div className={`${styles.ahc} ${centerAlign && styles.center}`} style={{ fontSize }}>
            <div className={styles.ahc__address}>
                <Address address={address} centerAlign={centerAlign} fontSize={fontSize}/>
            </div>

            <p className={styles.ahc__hours}>{hours.label}<br />
                {hours.value}</p>

            <div className={`${styles.ahc__contact} ${dark && styles.dark}`}>
                <span>
                    <a className={styles.ahc__email} href={`mailto:${email}`}><img src='/assets/icons/envelope.svg' />{email}</a>
                    <a className={styles.ahc__phone} href={`tel:${phone}`}><img src='/assets/icons/phone.svg' />{phone}</a>

                </span>

            </div>
        </div>

    )
}

export default AddressHoursContact;