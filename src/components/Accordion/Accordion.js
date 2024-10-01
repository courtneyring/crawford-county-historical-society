'use client';

import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ items }) => {
    const [activeAccordions, setActiveAccordions] = useState([])

    const toggle = (accordionId, isOpen) => {
        console.log(isOpen)
        
        isOpen ? setActiveAccordions([...activeAccordions, accordionId]) : 
            setActiveAccordions(activeAccordions.filter((idx) => idx != accordionId))
    }

    return (
        <div className="w-full">
            {items.map((item, idx) => {
                return <AccordionItem key={`accordion-${idx}`} title={item.title} body={item.body} toggleFn={(isOpen) => toggle(idx, isOpen)} isOpen={activeAccordions.includes(idx)} idx={idx}></AccordionItem>
            })}
        </div>

    )
}

export default Accordion;