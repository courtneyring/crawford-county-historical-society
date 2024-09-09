
'use client';
import { Hero, Promo } from "@/components";
import './event.scss'
import { Libre_Baskerville, Courgette, Rufina, Arapey, Urbanist } from "next/font/google";
import Button from "@/components/Button/Button";
import ImagePromoBlock from "@/components/ImagePromoBlock/ImagePromoBlock";
import FadeIn from "@/animations/FadeIn";


const libreBaskerville = Libre_Baskerville({ subsets: ['latin'], weight: '700' })
const courgette = Courgette({ subsets: ['latin'], weight: '400' })
const rufina = Rufina({ subsets: ['latin'], weight: '400' })
const arapey = Arapey({ subsets: ['latin'], weight: '400' })



const GraylingDepot = () => {

    const scrollDown = (id) => {
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <div className='h-screen min-h-screen hero lg:flex items-center justify-center'  >
                <FadeIn className='h-full flex justify-center items-center flex-col p-5'>
                    <div className="grid grid-cols-3 mb-10 logos">
                        <div className="flex justify-center items-center"><img className="rolling-oak-logo  " src='/assets/images/rolling-oak-logo.png' /></div>

                        <div className="h-5 h-full flex justify-center items-center font-bold">X</div>
                        <div className="flex justify-center items-center"><img className="cchs-logo" src='/assets/images/cchs-logo.png' /></div>

                    </div>
                    
                    <img className='hidden md:block' src='/assets/images/grayling-depot-logo.png' />
                    <img className=' md:hidden mt-[8rem]' src='/assets/images/grayling-depot-logo-mobile.png' />

                    <p className={`text-2xl lg:text-5xl mt-4 md:mt-8 mb-6 md:mb-16  font-bold text-center md:text-left ${courgette.className}`}>A limited release black lager</p>
                    <div className="pb-16 md:pb-0 flex justify-between btn-container ">
                        <Button variation='secondary' bgColor='#2f2f2f' color='white' fn={() => scrollDown('detailSection')} >Learn More</Button>
                        <Button variation='primary' bgColor='#FFFFFC' color='#2f2f2f' fn={() => scrollDown('donationSection')}>Donate Now</Button>

                    </div>
                </FadeIn>

            </div>
            <div className="section-dark md:min-h-[50rem]  flex items-center justify-center" id='detailSection'>
                <FadeIn className='flex align-center h-full'>

                    <div className="container m-auto text-center py-20 text-white px-5 md:px-0">
                        {/* <FadeIn> */}
                        <h2 className="text-4xl lg:text-6xl">Grayling Depot Official Launch</h2>
                        <p className="text-2xl leading-10 lg:text-4xl lg:leading-12 max-w-5xl my-10 mx-auto">Join us for the <span style={{color: '#be1e2e'}}>official launch</span> of "Grayling Depot" at Rolling Oak's annual Oaktoberfest! Saturday October 5 from 3 to 10pm at Rolling&nbsp;Oak&nbsp;Brewery</p>
                        {/* <Button color='#ffffc' bgColor='#be1e2e' url='https://www.instagram.com/p/C-8NmOIuZ4_/' variation='primary'>Event Details</Button> */}
                        {/* </FadeIn> */}

                    </div>
                </FadeIn>


            </div>
            <div className="section-xlight  md:min-h-[50rem]  flex items-center justify-center" id='donationSection'>
                <FadeIn className='min-h-full'>


                    <div className="container mx-auto py-20 px-5 ">
                        <h2 className="text-4xl lg:text-6xl text-center mb-10">$20&nbsp;Donation, $1&nbsp;Beer</h2>
                        <p className="text-2xl lg:text-3xl my-20">Can't make Oaktoberfest? Donate <span className='underline' style={{ color: '#be1e2e' }}>$20 or more</span> to the Crawford County Historical Society and get your next beer at Rolling Oak for <span className='underline' style={{ color: '#be1e2e' }}>$1</span>. Donations accepted online, mailed in or at the museum.</p>
                        <div className="flex flex-col md:flex-row items-center justify-between">

                            <Promo
                                icon='computer'
                                header='Online'
                                body='Pay online through the North Central Michigan Community Foundation'
                                href={{ url: 'https://www.cfnem.org/ncmcf/funds/give.html?fund=662', label: 'Make Donation' }}
                            />

                            <Promo
                                icon='mail'
                                header='Mailed'
                                body='Make checks out to CCHSFF and send to Crawford County Historical Society, P.O.&nbsp;Box&nbsp;218, Grayling, MI 49738'
                                // href={{ url: 'http://google.com', label: 'Check out more' }}
                            />

                            <Promo
                                icon='person'
                                header='In-Person'
                                body='Visit us at the museum and make a donation during your visit'
                                href={{ url: 'https://crawfordcountyhistoricalsociety.com/#/contact', label: 'Get Directions' }}
                            />


                        </div>
                        
                        {/* <ImagePromoBlock
                            heading='$20 Donation, $1 Beer'
                            body={`Donate $20 or more to the Crawford County Historical Society and get your next beer at Rolling Oak for $1. Donations accepted <a  style='text-decoration:underline; cursor: pointer !important' href='https://www.cfnem.org/ncmcf/funds/give.html?fund=662'>online</a>, at the museum, or mailed in.`}
                            image='/assets/images/rolling-oak-glasses.jpg'
                            
                            // cta={{
                            //     value: 'https://www.instagram.com/p/C-8NmOIuZ4_/',
                            //     label: 'Event Details',
                            //     color: '#FFFFFC',
                            //     bgColor: '#2f2f2f'
                            // }}
                        /> */}

                    </div>
                </FadeIn>

            </div>
            <div className=" section-light md:min-h-[50rem]  flex items-center justify-center ">
                <FadeIn>
                    <div className="container mx-auto lg:py-20">
                        <ImagePromoBlock
                            reverse
                            heading='About the Historical Society'
                            body='The Crawford County Historical Society and Museum is a non-governmental, 501c3 non-profit corporation, dedicated to “Collecting, Preserving and Interpreting Documents and Artifacts that illustrate the history of Crawford County, Michigan”.'
                            image='/assets/images/crawford-county-museum.jpg'
                            imagePos='object-left'
                            cta={{
                                value: 'https://crawfordcountyhistoricalsociety.com',
                                label: 'Learn More',
                                color: '#FFFFFC',
                                bgColor: '#2f2f2f'
                            }}
                        />

                    </div>

                </FadeIn>


            </div>
            <div className='section-light  md:min-h-[50rem]  flex items-center justify-center'>
                <FadeIn >
                    <div className="container mx-auto md:py-20">
                        <ImagePromoBlock
                            heading='About the Brewery'
                            body='Rolling Oak Brewing Co. is a brewery based in Grayling, Michigan. They serve exclusively original recipe beers brewed with premium ingredients and time-tested techiques.'
                            image='/assets/images/rolling-oak-logs.jpg'
                            cta={{
                                value: 'https://www.rollingoakbrewing.com/taplist',
                                label: 'See the tap list',
                                target: '_blank',
                                color: '#FFFFFC',
                                bgColor: '#2f2f2f'
                            }}
                        />

                    </div>

                </FadeIn>
            </div >

            {/* <div className="section-dark md:h-[30rem] flex align-center">
                <div className="container mx-auto py-20 flex flex-col items-center justify-center">
                    <h2 className="text-5xl mb-10 text-[#FFFFFC]">Questions?</h2>
                    <Button
                        url='crawfordcountyhistoricalsociety.com/#/contact'
                        variation='primary'
                        bgColor='#D4D1C9'
                        color='#2f2f2f'
                    >Contact Us</Button>

                </div>

            </div> */}
        </>
    )
}

export default GraylingDepot