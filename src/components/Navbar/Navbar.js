'use client'
import { useState } from 'react';
import MenuButton from '../MenuButton/Menubutton';


const Navbar = ({ links, logoImage, title }) => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);


  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }


  return (
    <nav className="flex justify-between py-5">
      {logoImage ?
        <img src={logoImage} /> :
        <div className='text-white'>{title}</div>
      }
      <div className='hidden md:block'>
        {links.map((link, idx) => {
          return <a className=' [&:not(:last-child)]:px-5 text-white decoration-transparent underline hover:decoration-white duration-500 transition-all' href={link.value}>{link.label}</a>
        })}
      </div>
      <MenuButton clickFn={toggleMenu} isOpen={menuIsOpen}/>
      
    </nav>
  )
}

export default Navbar;
