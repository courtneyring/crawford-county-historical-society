'use client'
import { useState } from 'react';
import copy from '../../assets/json/copy.json';


const Navbar = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const links = copy.navbar;


  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }


  return (
    <nav className="bg-black p-6 justify-center items-center flex">
      <div className='container flex items-center justify-between flex-wrap w-full'>

        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">CCHS</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white" onClick={toggleMenu}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className={`w-full block lg:flex lg:items-center lg:w-auto ${!menuIsOpen && 'hidden'}`}>
          <div className="text-base flex sm:flex-col lg:flex-row">
            {links.map((link, idx) => {
              return <a href={link.value} className={` mt-4 lg:mt-0 text-white hover:text-white  ${idx != links.length - 1 && 'mr-4'}`} key={`link-${idx}`}>
                {link.label}
              </a>
            })}
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar;