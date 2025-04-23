'use client';

import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import { Map, PageContainer, Address, Hours } from "@/components";
import Form from "@/components/Form/Form";
import { attributes, react as IntroCopy } from '../../../copy/contact/copy.md';
import { attributes as configAttributes } from '../../../copy/config/copy.md';
import styles from './contact.module.scss';
import AddressHoursContact from "@/components/AddressHoursContact/AddressHoursContact";
import { isDesktop } from '@/utils/breakpoints';
import useResizeResponsive from '@/hooks/useResponsive';
import variables from '../../../styles/variables.module.scss';


const Contact = () => {
    let { pageTitle, hero } = attributes;
    const params = useSearchParams();
    const submitted = params.get('submitted');
    const isDesktopWidth = useResizeResponsive(isDesktop);

    const submit = () => {
        window.location = '/contact?submitted=true';
    }

    return (
        <PageContainer hero={hero} pageTitle={pageTitle} copy={<IntroCopy />} excludePadding={['bottom']}>
            <div className={styles.contact__container}>
                <div className={styles.contact__inner}>
                    <div className={styles.contact__ahc}>
                        <AddressHoursContact {...configAttributes} dark={false} centerAlign={!isDesktopWidth} fontSize={isDesktopWidth ? variables.smallMedium : null}/>
                    </div>

                    <div className={styles.contact__form} >
                        <Form submitted={submitted} onSubmit={submit} />
                    </div>
                </div>
              
            </div>

            <div className={styles.contact__map}>

                <Map sourceUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.8505399802675!2d-84.71720358452077!3d44.66140519466946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882011411ddf3bef%3A0x22e70df983887b6!2sCrawford+County+Historical+Museum!5e0!3m2!1sen!2sus!4v1460244247057' />

            </div>
            

        </PageContainer>
    )
}

export default Contact;