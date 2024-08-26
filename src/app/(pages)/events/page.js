'use client';

import Hero from "@/components/Hero/Hero";
// import copy from '@/assets/json/copy.json';
// import useRepeatable from "@/hooks/useRepeatable";
import { Panel } from "@/components";
import { attributes } from '../../../copy/events/copy.md';
import { Event } from '@/components';

const Events = () => {
    // const eventsCopy = copy.events;

    let { heroImage, pageTitle, events } = attributes;

    return (
        <main className="flex flex-col items-center">
            <Hero skinny image={heroImage}/>
            <div className='max-w-7xl w-full px-2'>
                <h1>{pageTitle}</h1>
                {events.map((event, idx) => {
                    return (<Event 
                        key={`event-${idx}`}
                        title={event.title}
                        // start={event.start}
                        // end={event.end}
                        // image={event.image}
                        // location={event.location}
                        description={event.description}
                    />)
                })}
               
            </div>
            
        </main>
    )
}

export default Events;