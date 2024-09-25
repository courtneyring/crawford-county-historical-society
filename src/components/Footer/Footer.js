'use client';
import './Footer.scss';
import Address from '../Address/Address';
import Hours from '../Hours/Hours';
import Button from '../Button/Button';
import { imagePath } from '@/utils/imagePrefix';


const Footer = ({ address, links, hours, logoImg }) => {


  return (
    <>
      <footer
        className="flex flex-col s bg-black items-center text-surface text-white font-light w-full">
        <div className="container w-full py-10 px-5">
          <div className="grid-container ">
            <div className='image-body'>
              <img src={imagePath(logoImg)} className='w-52 md:w-44 mb-5 mx-auto md:mx-0'/>
              <Address address={address}/>
            </div>
            <div className='hours w-3/5 mx-auto mb-5 md:mb-0'>
              <Hours hours={hours} />
            </div>
            <div className='grid grid-cols-3 text-center flex items-between justify-between md:flex-col links md:text-right'>
              {links.map((link) => {
                return <Button url={link.value}>{link.label}</Button>
              })}
            </div>
          </div>
          <p className='text-md mt-12'>Designed and developed by <a href='https://courtneyring.com' target='_blank' className='underline'>Courtney Ring</a></p>
        </div>


      </footer>
    </>

  )
}


export default Footer;