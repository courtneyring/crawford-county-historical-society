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



const Navbar = ({ links, logoImage, title, background }) => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMobileWidth = useResizeResponsive(isMobile);


  const toggleMenu = () => {
    let bodyStyle = menuIsOpen ? 'unset' : 'hidden';
    document.body.style.overflow = bodyStyle;
    setMenuIsOpen(!menuIsOpen)
  }


  return (
    <nav className={`${styles.navbar} ${background && styles.background }`}>

      {/* <div> */}
      <Link className='h-full w-auto'  href='/'>
        {(logoImage && !menuIsOpen) && <img src={logoImage} className='h-full w-auto' />}
        {(!logoImage && !menuIsOpen) && <div className='text-white'>{title}</div>}
      </Link>

      {/* </div> */}


      {isMobileWidth ?
        // <div className='  '>
        <MenuButton clickFn={toggleMenu} isOpen={menuIsOpen} />
        // </div>

        :
        <div className=''>
          {links.map((link, idx) => {
            return <Link className=' [&:not(:last-child)]:pr-5 pl-5 text-2xl text-white decoration-transparent underline hover:decoration-white duration-500 transition-all' href={link.value} key={`navbar-d-${idx}`}>{link.label}</Link>
          })}
        </div>
      }
      {menuIsOpen && createPortal(
        <Overlay closeFn={() => setMenuIsOpen(false)} hideClose={true} background={'bg-black'}>
          <div className='flex flex-col p-10'>
            {links.map((link, idx) => {
              return <Link className=' text-white text-3xl pb-5' href={link.value} key={`navbar-m-${idx}`} onClick={toggleMenu}>{link.label}</Link>
            })}
          </div>

        </Overlay >,
        document.body
      )}

    </nav>
  )
}

export default Navbar;
