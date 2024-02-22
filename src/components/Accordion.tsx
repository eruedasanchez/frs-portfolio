'use client';

import { useState } from "react";
import { AccordionProps } from "@/types/types";
import { Plus } from "lucide-react";

const Accordion = ({ faqsData } : AccordionProps) => {
    const [currentActive, setCurrentActive] = useState<number | null>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const handleAccordion = (id: number) => {
        if (currentActive === id) {
            setIsOpen(!isOpen); 
        } else {
            setCurrentActive(id); 
            setIsOpen(true); 
        }
    };
    
    return (
        <div className="flex flex-col gap-3">
            {
                faqsData.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-peach-600 px-5 rounded-lg cursor-pointer" 
                        onClick={() => handleAccordion(index)}
                    >
                        <div className="flex justify-between items-center py-5">
                            <h6 className="text-grey-700">{item.question}</h6>
                            <div className={`transition-all duration-400 dark:text-brown-700
                            ${isOpen && currentActive === index && 'rotate-45'}
                            `}>
                                <Plus size={16}></Plus>
                            </div>
                        </div>
                        <div className={`text-grey-600 transition-all duration-500 
                        ${isOpen && currentActive === index ? 'max-h-[1000px] opacity-100 pb-5' : 'max-h-0 opacity-0'}
                        `}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Accordion;
