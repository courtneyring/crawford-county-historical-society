'use client';

import { useState, useId } from "react";
import AccordionItem from "./AccordionItem";
import styles from './Accordion.module.scss';

const Accordion = ({ items }) => {
    const [activeAccordions, setActiveAccordions] = useState([])

    const toggle = (accordionId, isOpen) => {        
        isOpen ? setActiveAccordions([...activeAccordions, accordionId]) : 
            setActiveAccordions(activeAccordions.filter((idx) => idx != accordionId))
    }

    return (
        <div className={styles.accordion}>
            {items.map((item, idx) => {
                return <AccordionItem key={useId()} title={item.title} body={item.body} toggleFn={(isOpen) => toggle(idx, isOpen)} isOpen={activeAccordions.includes(idx)} idx={idx} ></AccordionItem>
            })}
        </div>

    )
}

export default Accordion;