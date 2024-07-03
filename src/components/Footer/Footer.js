'use client';


import './Footer.scss';
import copy from '@/assets/json/copy.json'
import Promo from '../Promo/Promo';
import useRepeatable from '@/hooks/useRepeatable';

const Footer = () => {
  const footerCopy = copy.footer

  const promos = useRepeatable({componentType: 'promo', copy: copy.footer, length: 3})

  return (
    <>
      <footer
        className="flex flex-col items-center bg-black text-center text-surface text-white lg:text-left ">
        <div className="container w-full py-10">
          <div className="grid gap-20 lg:grid-cols-3">
            {promos.map((promo, idx) => <Promo copy={promo} key={`promo-${idx}`} />)}
  
            {/* <div className="mb-6 md:mb-0">
              <h5 className="mb-2 font-medium">Contact Us</h5>

              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div className="mb-6 md:mb-0">
              <h5 className="mb-2 font-medium">Footer text</h5>

              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>
            <div className="mb-6 md:mb-0">
              <h5 className="mb-2 font-medium">Footer text</h5>

              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div> */}
          </div>
          <p className='text-xs mt-12'>Designed and Developed by <a href='https://courtneyring.com' target='_blank'>Courtney Ring</a></p>
        </div>


      </footer>
    </>
   
  )
}


export default Footer;