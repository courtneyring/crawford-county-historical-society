
'use client';
import { Hero } from "@/components";
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

    const scrollDown = () => {
        document.getElementById('detailSection').scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <div className='h-screen hero'  >
                <FadeIn className='h-full flex justify-center items-center flex-col p-5'>
                    <div className="grid grid-cols-3 mb-10 logos">
                        <div className="flex justify-center items-center"><img className="rolling-oak-logo  " src='/assets/images/rolling-oak-logo.png' /></div>

                        <div className="h-5 h-full flex justify-center items-center font-bold">X</div>
                        <div className="flex justify-center items-center"><img className="cchs-logo" src='/assets/images/cchs-logo.png' /></div>

                    </div>
                    
                    <img className='hidden md:block' src='/assets/images/grayling-depot-logo.png' />
                    <img className=' md:hidden mt-[8rem]' src='/assets/images/grayling-depot-logo-mobile.png' />

                    <p className={`text-2xl lg:text-5xl mt-4 md:mt-8 mb-6 md:mb-16  font-bold text-center md:text-left ${courgette.className}`}>A limited release black lager</p>
                    <div className="flex justify-between btn-container ">
                        <Button variation='primary' bgColor='#FFFFFC' color='#2f2f2f'>Donate Now</Button>
                        <Button variation='secondary' bgColor='#2f2f2f' color='white' fn={scrollDown} >Learn More</Button>
                    </div>
                </FadeIn>

            </div>
            <div className="section-dark md:h-screen md:max-h-[60rem]" id='detailSection'>
                <FadeIn className='flex align-center h-full'>

                    <div className="container m-auto text-center py-20 text-white px-5 md:px-0">
                        {/* <FadeIn> */}
                        <h2 className="text-4xl lg:text-6xl">$20 Donation, $1 Beer</h2>
                        <p className="text-2xl leading-10 lg:text-4xl lgleading-12 max-w-5xl my-10 mx-auto">Donate <span className="font-bold text-[#be1e2e]">$20</span> or more to the Crawford County Historical Society and get your next beer at Rolling Oak for <span className="font-bold text-[#be1e2e]">$1</span>. Donations accepted online, at the museum, or mailed in. <br /><br />October 5 to December&nbsp;31</p>

                        {/* </FadeIn> */}

                    </div>
                </FadeIn>


            </div>
            <div className="section-light md:h-screen md:max-h-[60rem] ">
                <FadeIn className='h-full'>


                    <div className="container mx-auto md:py-20">
                        <ImagePromoBlock
                            heading='Oak-toberfest Launch'
                            body={`Join us for the official launch of our new beer at Rolling Oak's annual Oak-toberfest! <br/><br />Saturday October 5 at Rolling Oak Brewery`}
                            image='/assets/images/rolling-oak-glasses.jpg'
                            
                            cta={{
                                value: 'https://www.instagram.com/p/C-8NmOIuZ4_/',
                                label: 'Event Details',
                                target: '_blank',
                                bgColor: '#FFFFFC',
                                color: '#2f2f2f'
                            }}
                        />

                    </div>
                </FadeIn>

            </div>
            <div className=" section-light md:h-screen md:max-h-[60rem]">
                <FadeIn>
                    <div className="container mx-auto md:py-20">
                        <ImagePromoBlock
                            reverse
                            heading='About the Historical Society'
                            body='The Crawford County Historical Society and Museum is a non-governmental, 501c3 non-profit corporation, dedicated to “Collecting, Preserving and Interpreting Documents and Artifacts that illustrate the history of Crawford County, Michigan”.'
                            image='/assets/images/crawford-county-museum.jpg'
                            imagePos='object-left'
                            cta={{
                                value: 'https://crawfordcountyhistoricalsociety.com',
                                label: 'Learn More',
                                target: '_blank',
                                bgColor: '#FFFFFC',
                                color: '#2f2f2f'
                            }}
                        />

                    </div>

                </FadeIn>


            </div>
            <div className='section-light md:h-screen md:max-h-[60rem]'>
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

            <div className="section-dark md:h-[30rem] flex align-center">
                <div className="container mx-auto py-20 flex flex-col items-center justify-center">
                    <h2 className="text-5xl mb-10 text-[#FFFFFC]">Questions?</h2>
                    <Button
                        url='crawfordcountyhistoricalsociety.com/#/contact'
                        variation='primary'
                        bgColor='#D4D1C9'
                        color='#2f2f2f'
                    >Contact Us</Button>

                </div>

            </div>
        </>
    )
}

export default GraylingDepot