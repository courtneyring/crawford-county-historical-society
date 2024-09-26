'use client';

import { Event, PageContainer } from '@/components';
import copy from '../../../copy/events/copy.md';
import placeholder from '../../../placeholderCopy/events/copy.md';
import moment from 'moment';

const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

const Events = () => {

    let { heroImage, pageTitle, events, notFoundText } = attributes;

    const convertToDate = (str, format) => {
        return moment.utc(new Date(str)).format(format);
    }

    return (
        <PageContainer heroImage={heroImage} pageTitle={pageTitle}>
            <div className='container mx-auto'>
                {!!events.length ?
                    events.map((event, idx) => {
                        return (
                            <div className="">
                                <Event
                                    key={`event-${idx}`}
                                    name={event.name}
                                    start={convertToDate(event.start, 'dddd, MMMM D, ha')}
                                    end={convertToDate(event.end, 'ha')}
                                    image={event.image}
                                    location={event.location}
                                    description={event.description}
                                    cta={event.cta}
                                />

                            </div>

                        )
                    })
                    :
                    <p>{notFoundText}</p>

                }


            </div>
            

        </PageContainer>

    )
}

export default Events;