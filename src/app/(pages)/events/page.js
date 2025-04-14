'use client';

import { Event, PageContainer } from '@/components';
import { attributes } from '../../../copy/events/copy.md';
import moment from 'moment';
import styles from './Events.module.scss';


const Events = () => {

    let { hero, pageTitle, events, notFoundText } = attributes;

    const convertToDate = (str, format) => {
        console.log(moment.utc(new Date(str)).format(format))
        return moment.utc(new Date(str)).format(format);
    }

    return (
        <PageContainer hero={hero} pageTitle={pageTitle}>
            <div className={styles.events}>
                {!!events.length ?
                    events.map((event, idx) => {
                        return (
                            <Event
                                key={`event-${event.name}`}
                                name={event.name}
                                date={convertToDate(event.start, 'dddd, MMMM D')}
                                startTime={convertToDate(event.start, 'ha')}
                                endTime={convertToDate(event.end, 'ha')}
                                image={event.image}
                                location={event.location}
                                description={event.description}
                                cta={event.cta}
                            />
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