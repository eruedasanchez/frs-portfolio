'use client';

import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { LightboxProps } from '@/types/types';
import { keys } from '@/constants/constants';

const Lightbox = ({portfolio, currentImg, setCurrentImg, setIsOpen, handlePrevImage, handleNextImage} : LightboxProps) => {
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === keys.LEFT) handlePrevImage(portfolio, currentImg, setCurrentImg);
        if (event.key === keys.RIGHT) handleNextImage(portfolio, currentImg, setCurrentImg);
        if (event.key === keys.ESC) setIsOpen(false); 
    }, [currentImg, handleNextImage, handlePrevImage, portfolio, setCurrentImg, setIsOpen]);
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]); 
    
    return (
        <div className="fixed inset-0 w-full h-full z-30 flex justify-center items-center
        bg-black bg-opacity-70 gap-5">
            <button 
                className="w-10 h-10 flex justify-center items-center absolute top-5 right-5  
                bg-peach border border-brown-700 p-1 rounded-full text-brown-700 transition-colors duration-300
                hover:bg-brown-700 hover:text-peach hover:border hover:border-peach"
                onClick={() => setIsOpen(false)}
            >
                <X/>
            </button>
            <button 
                className="bg-peach border border-brown-700 p-1 rounded-full text-brown-700 transition-colors duration-300
                hover:bg-brown-700 hover:text-peach hover:border hover:border-peach"
                onClick={() => handlePrevImage(portfolio, currentImg, setCurrentImg)}
            >
                <ChevronLeft/>
            </button>
            <div className="relative rounded-2xl w-full tablet:w-3/5 h-[calc(250px+5vw)] tablet:h-[calc(300px+20vw)]">
                {
                    <Image
                        src={currentImg}
                        alt={portfolio.title}
                        layout="fill"
                        objectPosition="center"
                        className="rounded-2xl"
                    />
                }
            </div>
            <button 
                className="bg-peach border border-brown-700 p-1 rounded-full text-brown-700 transition-colors duration-300
                hover:bg-brown-700 hover:text-peach hover:border hover:border-peach"
                onClick={() => handleNextImage(portfolio, currentImg, setCurrentImg)}
            >
                <ChevronRight/>
            </button>
        </div>
    )
}

export default Lightbox