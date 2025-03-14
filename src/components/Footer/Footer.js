'use client';
import styles from './Footer.module.scss';
import Address from '../Address/Address';
import Hours from '../Hours/Hours';
import Button from '../Button/Button';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const Footer = ({ address, links, hours, logoImg }) => {

  //temp fix - TODO
  // const pathname = usePathname();
  // if (pathname.includes('admin')) {
  //   return <></>
  // }

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
           
            <div className={styles.footer__hours}>
              {hours.label}<br />
              {hours.value}
              {/* <Hours hours={hours} /> */}
            </div>
          </div>
            {/* <div className={styles.footer__hr}></div> */}
            <div className={`${styles.footer__links}`}>
              {links.map((link, idx) => {
                return (
                  <div className={styles.footer__link}>
                    <Button url={link.value} key={`footerlink-${idx}`} variation='link' textDecoration='none'>{link.label}</Button>
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