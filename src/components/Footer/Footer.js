'use client';

import './Footer.scss';

import Promo from '../Promo/Promo';
// import useRepeatable from '@/hooks/useRepeatable';

const Footer = ({promos}) => {

  // const promos = useRepeatable({componentType: 'promo', copy: copy.footer, length: 3})

  return (
    <>
      <footer
        className="flex flex-col items-center bg-black text-center text-surface text-white lg:text-left ">
        <div className="container w-full py-10">
          <div className="grid gap-20 lg:grid-cols-3">
            {promos.map((promo, idx) => <Promo icon={promo.icon} header={promo.header} body={promo.body} href={{url: promo.linkUrl, label: promo.linkLabel}} copy={promo} key={`promo-${idx}`} />)}
  
          </div>
          <p className='text-xs mt-12'>Designed and Developed by <a href='https://courtneyring.com' target='_blank'>Courtney Ring</a></p>
        </div>


      </footer>
    </>
   
  )
}


export default Footer;