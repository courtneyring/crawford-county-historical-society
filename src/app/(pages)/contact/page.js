'use client';

import Hero from "@/components/Hero/Hero";
import { attributes } from '../../../copy/contact/copy.md'
import { Map } from "@/components";

const About = () => {
    let { heroImage, pageTitle, address, phone, email, hours } = attributes;

    return (
        <main className="flex flex-col items-center">
            <Hero skinny image={heroImage} />
            <div className='max-w-7xl w-full px-2'>
                <h1 className="my-10">{pageTitle}</h1>
                <div className="grid grid-cols-2">
                    <div>
                        <p>{address.street}
                            <br />
                            {address.street2}
                            <br />
                            {address.city}, {address.state} {address.zip}
                        </p>
                        <p>
                            <span className="font-bold">Phone</span><br />
                            {phone}
                        </p>
                        <p>
                            <span className="font-bold">Email</span><br />
                            {email}
                        </p>
                        <p>
                            <span className="font-bold">Hours</span><br />
                            <div className="grid grid-cols-2 max-w-52">
                                {Object.entries(hours).map(([key, value]) => {
                                    return (
                                        <>
                                            <span className="capitalize">{key}</span>
                                            <span>{value}</span>
                                        </>
                                    )

                                })}
                            </div>
                        </p>


                    </div>
                    <Map />

                </div>

                
            </div>

        </main>
    )
}

export default About;