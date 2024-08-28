'use client';

import Hero from "@/components/Hero/Hero";
import { attributes } from '../../../copy/contact/copy.md'
import { Map, PageContainer } from "@/components";

const About = () => {
    let { heroImage, pageTitle, address, phone, email, hours } = attributes;

    return (
        <PageContainer heroImage={heroImage} pageTitle={pageTitle}>
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
                    <Map sourceUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.8505399802675!2d-84.71720358452077!3d44.66140519466946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882011411ddf3bef%3A0x22e70df983887b6!2sCrawford+County+Historical+Museum!5e0!3m2!1sen!2sus!4v1460244247057' />

                </div>
        </PageContainer>
    )
}

export default About;