'use client';

import { useEffect, useRef } from "react";
import { Lora } from "next/font/google";
import { MilestoneProps } from "@/types/types";

const lora = Lora({ subsets: ["latin"] });

const Milestone = ({ timeline } : MilestoneProps) => {
    const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    useEffect(() => {
        const currentRefs = milestoneRefs.current;
        let index = 0;
        
        const options = {
            root: null, 
            rootMargin: '0px', 
            threshold: 0.04 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    (index % 2 === 0) ? 
                    entry.target.classList.add('slider-in-right') :
                    entry.target.classList.add('slider-in-left'); 
                    
                    observer.unobserve(entry.target); 
                    index++;
                }
            });
        }, options);

        milestoneRefs.current.forEach(milestoneRef => {
            if (milestoneRef) observer.observe(milestoneRef);
        });

        // Limpiar el observador cuando el componente se desmonte
        return () => {
            currentRefs.forEach(milestoneRef => {
                if (milestoneRef) observer.unobserve(milestoneRef);
            });
        };
    }, []);
    
    return (
        <div className="space-y-8 relative before:absolute before:inset-0 
        before:ml-5 before:translate-x-px tablet:before:mx-auto tablet:before:translate-x-0
        before:h-full before:w-0.5 before:bg-brown before:bg-opacity-30">
            {
                timeline.map((milestone, index) => (
                    <div 
                        key={index}
                        className="relative flex items-center justify-between  
                        tablet:justify-normal tablet:odd:flex-row-reverse group"
                    >
                        <div className={`flex justify-center items-center
                            w-10 h-10 rounded-full bg-peach border border-brown-700 shrink-0
                            tablet:order-1 tablet:group-odd:-translate-x-1/2 tablet:group-even:translate-x-1/2
                            group-first:before:absolute group-first:before:w-1 group-first:before:h-20 
                            group-first:before:-top-[81px] group-first:before:bg-peach-600 dark:group-first:before:bg-slate-800
                            group-last:before:absolute group-last:before:w-1 group-last:before:h-20
                            group-last:before:bottom-full tablet:group-last:before:top-[39px] group-last:before:bg-peach-600 dark:group-last:before:bg-slate-800
                            `}
                        >
                            <span className="w-3 h-3 bg-brown-700 border-brown-700 rounded-full"></span>
                        </div>
                        <div
                            ref={element => milestoneRefs.current[index] = element}
                            className={`${lora.className} delay-${200 * (index+1)}ms
                            w-[calc(100%-4rem)] tablet:w-[calc(50%-2.5rem)] box !p-5 tablet:!p-8`}
                        >
                            <div className="flex justify-between items-center space-x-2 mb-1">
                                <h6 className="text-grey-700">{milestone.title}</h6>
                                <p className="font-semibold text-brown-700">{milestone.duration}</p>
                            </div>
                            <div className="text-gray-600">{milestone.description}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Milestone;

