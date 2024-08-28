'use client';

import { attributes } from '../../../copy/events/copy.md';
import { Event, PageContainer } from '@/components';

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