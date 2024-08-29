'use client';

import { Event, PageContainer } from '@/components';
import copy from '../../../copy/events/copy.md';
import placeholder from '../../../placeholderCopy/events/copy.md';

const { attributes } = process.env.NEXT_PUBLIC_PLACEHOLDER_COPY === 'true' ? placeholder : copy;

const Events = () => {

    let { heroImage, pageTitle, events } = attributes;

    return (
        <PageContainer heroImage={heroImage} pageTitle={pageTitle}>

            {events.map((event, idx) => {
                return (
                    <div className="h-60 mb-20">
                        <Event
                            key={`event-${idx}`}
                            name={event.name}
                            start={event.start}
                            end={event.end}
                            image={event.image}
                            location={event.location}
                            description={event.description}
                        />

                    </div>

                )
            })}


        </PageContainer>

    )
}

export default Events;