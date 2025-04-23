'use client';
import styles from './Footer.module.scss';
import Address from '../Address/Address';
import Hours from '../Hours/Hours';
import Button from '../Button/Button';
import Link from 'next/link';
import AddressHoursContact from '../AddressHoursContact/AddressHoursContact';
import { isMobile } from '@/utils/breakpoints';
import useResizeResponsive from '@/hooks/useResponsive';

const Footer = ({ address, links, hours, logoImg, phone, email }) => {
  const isMobileWidth = useResizeResponsive(isMobile);

  return (
    <>
      <footer
        className={`${styles.footer}`}>
        <div className={styles.footer__container}>
          <div className={styles.footer__left}>
            <div className={styles.footer__logo}>
              <img src={logoImg} />

            </div>
            <AddressHoursContact {...{address, hours, phone, email}} centerAlign={isMobileWidth}/>

            <div className={styles.footer__divider}></div>

          </div>
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