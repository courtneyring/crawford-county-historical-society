'use client'
import { useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import useResize from '@/hooks/useResize';
import { isMobile } from '@/utils/breakpoints';
import useResizeResponsive from '@/hooks/useResponsive';
import { createPortal } from 'react-dom';
import Overlay from '../Overlay/Overlay';


const Navbar = ({ links, logoImage, title }) => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMobileWidth = useResizeResponsive(isMobile);


  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }


  return (
    <nav className="flex justify-between w-full items-center absolute z-20 left-0 px-5">

      <div>
        {(logoImage && !menuIsOpen) && <img src={logoImage} />}
        {(!logoImage && !menuIsOpen) && <div className='text-white'>{title}</div>}
      </div>
      

      {isMobileWidth ?
        // <div className='  '>
          <MenuButton clickFn={toggleMenu} isOpen={menuIsOpen} />
        // </div>
       
        :
        <div className=''>
          {links.map((link, idx) => {
            return <a className=' [&:not(:last-child)]:px-5 text-white decoration-transparent underline hover:decoration-white duration-500 transition-all' href={link.value}>{link.label}</a>
          })}
        </div>
      }
      {menuIsOpen && createPortal(
        <Overlay closeFn={() => setMenuIsOpen(false)} hideClose={true} background={'black'}>
          <div className='flex flex-col p-10'>
            {links.map((link, idx) => {
              return <a className=' text-white text-3xl pb-5' href={link.value}>{link.label}</a>
            })}
          </div>
          
        </Overlay >,
        document.body
      )}

    </nav>
  )
}

export default Navbar;
