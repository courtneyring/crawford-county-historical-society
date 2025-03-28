'use client';
import Link from "next/link";
import { Map, PageContainer, Address, Hours } from "@/components";


import copy from '../../../copy/contact/copy.md';
import placeholder from '../../../placeholderCopy/contact/copy.md';
const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

import configCopy from '../../../copy/config/copy.md';
import configPlaceholder from '../../../placeholderCopy/config/copy.md';
const { attributes: configAttributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? configPlaceholder : configCopy;




const Contact = () => {
    let { pageTitle, hero } = attributes;

    return (
        <PageContainer hero={hero} pageTitle={pageTitle}>
                <div className="grid md:grid-cols-2 container mx-auto px-3 md:px-0 mb-10">
                    <div>
                    <Address address={configAttributes.address}  />
                        <p>
                            <span className="font-bold">Phone</span><br />
                        <Link className="underline cursor" href={`tel:${configAttributes.phone}`}>{configAttributes.phone}</Link>
                        </p>
                        <p>
                            <span className="font-bold">Email</span><br />
                        <Link className="underline cursor" href={`mailto:${configAttributes.email}`}>{configAttributes.email}</Link>
                        </p>
                        <p>
                        <span className="font-bold">Hours</span><br />
                        <Hours hours={configAttributes.hours} />
                        </p>
                        

                    </div>
                    <Map sourceUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.8505399802675!2d-84.71720358452077!3d44.66140519466946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882011411ddf3bef%3A0x22e70df983887b6!2sCrawford+County+Historical+Museum!5e0!3m2!1sen!2sus!4v1460244247057' />

                </div>
        </PageContainer>
    )
}

export default Contact;