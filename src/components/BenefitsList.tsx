'use client';

import { useEffect, useRef } from "react";
import { Lora } from "next/font/google";
import { BenefitsListProps } from "@/types/types";

const lora = Lora({ subsets: ["latin"] });

const BenefitsList = ({ containedStyles, from, to, benefitsData } : BenefitsListProps) => {
    const benefitsRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    useEffect(() => {
        const currentRefs = benefitsRefs.current;
        let index = 0;
        
        const options = {
            root: null, 
            rootMargin: '0px', 
            threshold: 0.001
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slider-in-left-benefits'); 
                    observer.unobserve(entry.target); 
                    index++;
                }
            });
        }, options);

        benefitsRefs.current.forEach(benefitRef => {
            if (benefitRef) observer.observe(benefitRef);
        });
        
        return () => {
            currentRefs.forEach(benefitRef => {
                if (benefitRef) observer.unobserve(benefitRef);
            });
        };
    }, []);
    
    return (
        <div className={`grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
            tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 ${containedStyles}`}>
                {
                    benefitsData.slice(from,to).map((benefit, index) => (
                        <div 
                            key={index} 
                            ref={element => benefitsRefs.current[index] = element}
                            className={`box delay-${100 * (index+1)}ms`}
                        >
                            <h5 className={`${lora.className} text-2xl text-grey-700 mb-2`}>{benefit.name}</h5>
                            <p className={`${lora.className} text-base text-grey-600`}>{benefit.description}</p>
                        </div>
                    ))
                }
        </div>
    );
}

export default BenefitsList;
