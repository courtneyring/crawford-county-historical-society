import { Hero } from "@/components";
import './event.scss'
import { Libre_Baskerville, Courgette, Rufina, Arapey } from "next/font/google";
import Button from "@/components/Button/Button";
import ImagePromoBlock from "@/components/ImagePromoBlock/ImagePromoBlock";

const libreBaskerville = Libre_Baskerville({ subsets: ['latin'], weight: '700' })
const courgette = Courgette({ subsets: ['latin'], weight: '400' })
const rufina = Rufina({ subsets: ['latin'], weight: '400' })
const arapey = Arapey({ subsets: ['latin'], weight: '400' })

export function generateStaticParams() {
    return [{ id: 'oaktoberfest-fundraiser' }]
}

const EventPage = () => {


    return (
        <main>
            <div className='h-screen hero flex justify-center items-center flex-col'  >

                {/* <h1 className={`text-white text-9xl ${libreBaskerville.className}`}>Grayling Depot 1882</h1> */}
                <p className="text-2xl lg:text-4xl flex flex-col lg:block text-center font-bold ">
                    <span>Rolling Oak Brewing Co.</span>
                    <span className="lg:mx-5">x</span>
                    <span>Crawford County Historical Society</span></p>
                <img src='/assets/images/grayling-depot-logo.png' />
                <p className={`text-3xl lg:text-5xl mt-8 mb-16  font-bold ${courgette.className}`}>A limited release black lager</p>
                <div className="w-84 flex justify-between btn-container ">
                    <Button variation='primary' bgColor='#8E8271' color='white'>Donate Now</Button>
                    <Button variation='secondary' bgColor='#2f2f2f' color='white'>Learn More</Button>
                </div>

            </div>
            <div className="section-dark ">
                <div className="container m-auto text-center py-20 text-white">
                    <h2 className="text-4xl lg:text-6xl">$20 Donation, $1 Beer</h2>
                    <p className="text-2xl leading-10 lg:text-4xl lgleading-12 max-w-5xl my-10 mx-auto">Donate <span className="font-bold text-[#be1e2e]">$20</span> or more to the Crawford County Historical Society and get your next beer at Rolling Oak for <span className="font-bold text-[#be1e2e]">$1</span>. Donations accepted online, at the museum, or mailed in. <br /><br />October 5 to December&nbsp;31</p>
                </div>

            </div>
            <div className="md:h-screen section-light">
                <div className="container mx-auto lg-20">
                    <ImagePromoBlock
                        heading='Oak-toberfest Launch'
                        body={`Join us for the official launch of our new beer at Rolling Oak's annual Oak-toberfest! <br/><br />Saturday October 5 at Rolling Oak Brewery`}
                        image='https://scontent-lga3-1.cdninstagram.com/v/t39.30808-6/457406314_1072992684826730_5862692050148769817_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDEzNjIuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=74TgIXdwbQYQ7kNvgFejPRC&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQ0OTc4MjUzNjc4MjA1ODE2Mw%3D%3D.3-ccb7-5&oh=00_AYCNGKgji2fYE3dhDt-jWVaf63MOZjU9tDf8--BhJ0-L-g&oe=66DE4C58&_nc_sid=10d13b'
                        cta={{
                            value: 'https://www.facebook.com/events/1493218921216331',
                            label: 'Event Details',
                            target: '_blank',
                            bgColor: '#FFFFFC',
                            color: '#2f2f2f'
                        }}
                    />

                </div>

            </div>
            <div className="md:h-screen section-dark">
                <div className="container mx-auto md:py-20">
                    <ImagePromoBlock
                        reverse
                        textColor='white'
                        heading='About the Historical Society'
                        body='The Crawford County Historical Society and Museum is a non-governmental, 501c3 non-profit corporation, dedicated to “Collecting, Preserving and Interpreting Documents and Artifacts that illustrate the history of Crawford County, Michigan”.'
                        image='/assets/images/crawford-county-museum.jpg'
                        cta={{
                            value: 'https://crawfordcountyhistoricalsociety.com',
                            label: 'Learn More',
                            target: '_blank',
                            bgColor: '#FFFFFC',
                            color: '#2f2f2f'
                        }}
                    />

                </div>

            </div>
            <div className="md:h-screen">
                <div className="container mx-auto md:py-20">
                    <ImagePromoBlock
                        heading='About the Brewery'
                        body='Rolling Oak Brewing Co. is a brewery based in Grayling, Michigan. They serve exclusively original recipe beers brewed with premium ingredients and time-tested techiques.'
                        image='https://scontent-lga3-2.cdninstagram.com/v/t39.30808-6/456084578_1062852215840777_2968978742099350451_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4yMDQ4eDEzNjUuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=105&_nc_ohc=o58DT8y0HSAQ7kNvgGyo3Yf&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzQzNjc2OTI5MDIzMDk4NzM5OA%3D%3D.3-ccb7-5&oh=00_AYDqZKzDagnfDPcPJ-ckoPj5VOM2anmRUL4eHWOjTveYFw&oe=66DE43ED&_nc_sid=10d13b'
                        cta={{
                            value: 'https://www.rollingoakbrewing.com/',
                            label: 'See the tap list',
                            target: '_blank',
                            color: '#FFFFFC',
                            bgColor: '#2f2f2f'
                        }}
                    />

                </div>

            </div>
            <div className="section-light">
                <div className="container mx-auto py-20 flex flex-col items-center justify-center">
                    <h2 className="text-5xl mb-10">Questions?</h2>
                    <Button
                        url='crawfordcountyhistoricalsociety.com/#/contact'
                        variation='primary'
                        bgColor='#2f2f2f'
                        color='#fffffc'
                    >Contact Us</Button>

                </div>

            </div>

        </main>
    )
}

export default EventPage;