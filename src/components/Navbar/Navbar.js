'use client'
import { useEffect, useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import { isMobile } from '@/utils/breakpoints';
import useResizeResponsive from '@/hooks/useResponsive';
import { createPortal } from 'react-dom';
import Overlay from '../Overlay/Overlay';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
import variables from '../../styles/variables.module.scss';



const Navbar = ({ links, logoImage, title, background }) => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMobileWidth = useResizeResponsive(isMobile);


  const toggleMenu = () => {
    let bodyStyle = menuIsOpen ? 'unset' : 'hidden';
    document.body.style.overflow = bodyStyle;
    setMenuIsOpen(!menuIsOpen)
  }


  return (
    <nav className={`${styles.navbar} ${background && styles.background}`}>


      <Link className={styles.navbar__logo} href='/'>
        <img src={logoImage} />
        {/* {(logoImage && !menuIsOpen) && <img src={logoImage} className='h-full w-auto' />} */}
        {/* {(!logoImage && !menuIsOpen) && <div className='text-white'>{title}</div>} */}
      </Link>



      {isMobileWidth ?

        <MenuButton clickFn={toggleMenu} isOpen={menuIsOpen} />

        :
        <div className=''>
          {links.map((link, idx) => {
            return <Link className={`${styles.navbar__link}`} href={link.value} key={`navbar-d-${link}`}>{link.label}</Link>
          })}
        </div>
      }
      {menuIsOpen && createPortal(
        <Overlay closeFn={() => setMenuIsOpen(false)} hideClose={true} background={variables.neutralDark}>
          <div className={styles.navbar__mobileDialog}>
            {links.map((link, idx) => {
              return <Link className={styles.navbar__link} href={link.value} key={`m-${link}`} onClick={toggleMenu}>{link.label}</Link>
            })}
          </div>

        </Overlay >,
        document.body
      )}

    </nav>
  )
}

export default Navbar;
