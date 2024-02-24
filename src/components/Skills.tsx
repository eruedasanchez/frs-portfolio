'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Lora } from "next/font/google";
import { SkillsProps } from "@/types/types";

const lora = Lora({ subsets: ["latin"] });

const Skills = ({ skillsData } : SkillsProps) => {
    const skillsRefs = useRef<(HTMLDivElement | null)[]>([]);
    
    useEffect(() => {
        const currentRefs = skillsRefs.current;
        let index = 0;
        
        const options = {
            root: null, 
            rootMargin: '0px', 
            threshold: 0.001
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slider-reveal'); 
                    observer.unobserve(entry.target); 
                    index++;
                }
            });
        }, options);

        skillsRefs.current.forEach(skillRef => {
            if (skillRef) observer.observe(skillRef);
        });

        // Limpiar el observador cuando el componente se desmonte
        return () => {
            currentRefs.forEach(skillRef => {
                if (skillRef) observer.unobserve(skillRef);
            });
        };
    }, []);
    
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
        tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
            {
                skillsData.map((skill, index) => (
                    <div 
                        key={index} 
                        ref={element => skillsRefs.current[index] = element}
                        className="box flex flex-col items-center gap-5"
                    >
                        <div className="relative w-16 h-16 rounded bg-brown dark:bg-brown-700  
                        flex items-center justify-center flex-shrink-0 mb-2">
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={35}
                                height={35}
                                // fill
                            />
                        </div>
                        <div className="text-center hover:scale-105 transition-all duration-600">
                            <h4 className={`${lora.className} text-2xl text-grey-700 mb-2`}>{skill.name}</h4>
                            <p className={`${lora.className} text-base text-grey-600`}>{skill.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Skills;