'use client';
import './Footer.scss';
// import parse from "html-react-parser";
// import DOMPurify from "isomorphic-dompurify";
// import Promo from '../Promo/Promo';
import Address from '../Address/Address';
import Hours from '../Hours/Hours';
import Button from '../Button/Button';

const Footer = ({ address, links, hours, logoImg }) => {

  // const getHours = (promo) => {
  //   return (
  //     <div className='hours max-w-60 sm:max-w-none mx-auto sm:mx-0 mb-10'>
  //       {
  //         promo.fields.map((field) => {
  //           return <div className='flex justify-between '><span>{field.key}</span><span>{field.value}</span></div>
  //         })
  //       }

  //     </div>
  //   )

  // }
  // const getLinks = (promo) => {
  //   return <div className='flex sm:flex-col text-center justify-between sm:text-right links '>
  //     {promo.links.map((link) => {
  //       return <a href={link.url}>{link.label}</a>
  //     })}
  //   </div>
  // }

  // const getImageBody = (promo) => {
  //   return <div className='image-body flex items-center flex-col sm:block mb-10'>
  //     <img className='w-48' src={promo.image} />
  //     <p className='text-center md:text-left'>{parse(DOMPurify.sanitize(promo.body))}</p>
  //   </div>
  // }

  return (
    <>
      <footer
        className="flex flex-col s bg-black items-center text-surface text-white font-light w-full">
        <div className="container w-full py-10 px-5">
          <div className="grid-container ">
            <div className='image-body'>
              <img src={logoImg} className='w-44 mb-5'/>
              <Address address={address}/>
            </div>
            <div className='hours'>
              <Hours hours={hours} />
            </div>
            <div className='flex items-between justify-between md:flex-col links text-right'>
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