'use client';
import './Footer.scss';
import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";
import Promo from '../Promo/Promo';

const Footer = ({ promos }) => {

  const getHours = (promo) => {
    return promo.fields.map((field) => {
      return <div className='flex justify-between'><span>{field.key}</span><span>{field.value}</span></div>
    })
  }
  const getLinks = (promo) => {
    return <div className='flex flex-col'>
      {promo.links.map((link) => {
        return <a href={link.url}>{link.label}</a>
      })}
    </div>
  }

  return (
    <>
      <footer
        className="flex flex-col bg-black  text-surface text-white  ">
        <div className="container w-full py-10">
          <div className="grid gap-20 lg:grid-cols-3">
            {promos.map((promo) => {
              return (


                <div>
                  {promo.type == 'hours' && getHours(promo)}
                  {promo.type == 'links' && getLinks(promo)}
                  {/* {parse(DOMPurify.sanitize(promo.body))} */}
                </div>

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