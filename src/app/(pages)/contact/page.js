'use client';

import Link from "next/link";
import { Map, PageContainer, Address, Hours } from "@/components";
import Form from "@/components/Form/Form";
import { attributes } from '../../../copy/contact/copy.md';
import { attributes as configAttributes} from '../../../copy/config/copy.md';


const Contact = () => {
    let { pageTitle, hero } = attributes;


    return (
        <PageContainer hero={hero} pageTitle={pageTitle}>
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
                        <Form />
                    </div>
                    <Map sourceUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.8505399802675!2d-84.71720358452077!3d44.66140519466946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882011411ddf3bef%3A0x22e70df983887b6!2sCrawford+County+Historical+Museum!5e0!3m2!1sen!2sus!4v1460244247057' />

        </PageContainer>
    )
}

export default Contact;