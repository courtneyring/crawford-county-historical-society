'use client';
import './Footer.scss';
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";
import Promo from '../Promo/Promo';

const Footer = ({ promos }) => {

  const getHours = (promo) => {
    return (
      <div className='hours max-w-60 sm:max-w-none mx-auto sm:mx-0 mb-10'>
        {
          promo.fields.map((field) => {
            return <div className='flex justify-between '><span>{field.key}</span><span>{field.value}</span></div>
          })
        }

      </div>
    )

  }
  const getLinks = (promo) => {
    return <div className='flex sm:flex-col text-center justify-between sm:text-right links '>
      {promo.links.map((link) => {
        return <a href={link.url}>{link.label}</a>
      })}
    </div>
  }

  const getImageBody = (promo) => {
    return <div className='image-body flex items-center flex-col sm:block mb-10'>
      <img className='w-48' src={promo.image} />
      <p className='text-center md:text-left'>{parse(DOMPurify.sanitize(promo.body))}</p>
    </div>
  }

  return (
    <>
      <footer
        className="flex flex-col bg-black items-center text-surface text-white font-light ">
        <div className="container w-full py-10 px-5">
          <div className="md:px-5 lg:px-10 grid-container ">
            {promos.map((promo) => {
              return (


                <>
                  {promo.type == 'hours' && getHours(promo)}
                  {promo.type == 'links' && getLinks(promo)}
                  {promo.type == 'image-body' && getImageBody(promo)}
                  {/* {parse(DOMPurify.sanitize(promo.body))} */}
                </>

              )
            })}

          </div>
          {/* <p className='text-xs mt-12'>Designed and Developed by <a href='https://courtneyring.com' target='_blank'>Courtney Ring</a></p> */}
        </div>


      </footer>
    </>

  )
}


export default Footer;