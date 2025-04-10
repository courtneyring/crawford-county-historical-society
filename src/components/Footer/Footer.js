'use client';
import styles from './Footer.module.scss';
import Address from '../Address/Address';
import Hours from '../Hours/Hours';
import Button from '../Button/Button';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const Footer = ({ address, links, hours, logoImg, phone, email }) => {

  return (
    <>
      <footer
        className={`${styles.footer}`}>
        <div className={styles.footer__container}>
          <div className={styles.footer__left}>
            <div className={styles.footer__logo}>
              <img src={logoImg}/>
              
            </div>
            <div className={styles.footer__address}>
              <Address address={address} />
            </div>
            <div className={styles.footer__divider}></div>
           
            <div className={styles.footer__hours}>
              <p style={{ fontStyle: 'italic' }}>{hours.label}<br />
                {hours.value}</p><br />
              <p className={styles.footer__phone}><img src='/assets/icons/pin.svg' />{phone}</p>
              <p className={styles.footer__email}><img src='/assets/icons/pin.svg' />{email}</p>

              
              {/* <Hours hours={hours} /> */}
            </div>

            <div className={styles.footer__divider}></div>

          </div>
            {/* <div className={styles.footer__hr}></div> */}
            <div className={`${styles.footer__links}`}>
              {links.map((link, idx) => {
                return (
                  <div className={styles.footer__link} key={link.value} >
                    <Button url={link.value} variation='link' textDecoration='none'>{link.label}</Button>
                  </div>
                )
              })}
            </div>
           
        </div>
         
          <div className={styles.footer__hr}></div>
          <p className={styles.footer__credit}>Designed and developed by <Link href='https://courtneyring.com' target='_blank' className='underline'>Courtney Ring</Link></p>
        


      </footer>
    </>

  )
}


export default Footer;