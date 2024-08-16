'use client';

import Hero from "@/components/Hero/Hero";
import copy from '@/assets/json/copy.json';
import useRepeatable from "@/hooks/useRepeatable";
import { Panel } from "@/components";

const Events = () => {
    const eventsCopy = copy.events;
    const eventsPanels = copy.eventspanels
    const textBlocks = useRepeatable({ componentType: 'textBlock', copy: copy.about, length:5})

    return (
        <main className="flex flex-col items-center">
            <Hero skinny image={eventsCopy.heroImg}/>
            <div className='max-w-7xl w-full px-2'>
                <h1>{eventsCopy.pageName}</h1>
                {eventsPanels.map((panel) => {
                    return <Panel copy={panel}/>
                })}
               
            </div>
            
        </main>
    )
}

export default Events;