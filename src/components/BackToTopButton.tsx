'use client';

import { MoveUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    };

    return (
        <button onClick={scrollToTop}> 
            <MoveUp className={`w-10 h-10 fixed bottom-[20px] right-[20px] z-40 
            ${isVisible ? 'opacity-100 transition-opacity duration-700' : 'opacity-0 transition-opacity duration-700'}   
            bg-peach border border-brown-700 p-2 rounded-full text-brown-700
            hover:bg-brown-700 hover:text-peach hover:border hover:border-peach`}/>
        </button>
    );
}

export default BackToTopButton;

