'use client';

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { keys, socialLinks } from "@/constants/constants";
import { Lora } from "next/font/google";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Theme from "./Theme";
import LanguageDropdownMenu from "./LanguageDropdownMenu";

const lora = Lora({ subsets: ["latin"] });

interface MobileMenuProps {
    navLinks: { label: string; url: string }[]
    contactMe: string
}

const MobileMenu = ({navLinks, contactMe} : MobileMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toogleMenu = () => setIsOpen(!isOpen);
    
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === keys.ESC) setIsOpen(false); 
    }, [setIsOpen]);
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);


    
    return (
        <div className="tablet:hidden">
            <div className="flex justify-center items-center gap-6">
                {/* toogle button */}
                <LanguageDropdownMenu
                    containerStyles="border-grey-700 
                    hover:scale-105 hover:border-brown
                    dark:border-brown-700 dark:hover:border-brown"
                    iconStyles="text-grey-700 hover:text-brown
                    dark:text-brown-700 dark:hover:text-brown"
                />
                <Theme
                    containerStyles="w-9 h-9 rounded-full flex justify-center items-center
                    border-2 border-grey-700 
                    hover:scale-105 hover:border-brown transition-all duration-300 cursor-pointer
                    dark:border-brown-700 dark:hover:border-brown"
                    iconStyles="w-6 h-6 text-grey-700 hover:text-brown
                    dark:text-brown-700 dark:hover:text-brown"
                />
                <button 
                    className="text-grey-700 hover:text-brown transition-colors duration-300 outline-none
                    dark:text-brown-700 dark:hover:text-brown"
                    onClick={toogleMenu}
                >
                    <Menu/>
                </button>
            </div>
            {/* sidebar */}
            <div className={`border-4 w-full h-full flex flex-col bg-peach-600 dark:bg-slate-800 
            fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out transform
            ${isOpen ? 'trasnlate-x-0' : 'translate-x-full'}`}>
                <div className="flex w-full items-center justify-between h-21 max-width border-b border-brown">
                    <Logo/>
                    <button 
                        className="text-grey-700 hover:text-brown-700 transition-colors duration-300
                        dark:text-brown dark:hover:text-brown-700"
                        onClick={toogleMenu}
                    >
                        <X/>
                    </button>
                </div>
                <Navbar
                    navStyles="flex-col justify-center flex-1 gap-10"
                    ulStyles="flex-col gap-5"
                    showTheme={false}
                    toogleMenu={toogleMenu}
                    showLanguageMenu={false}
                    navLinks={navLinks}
                    contactMe={contactMe}
                />
                <div className={`${lora.className} w-full h-20 flex justify-between items-center border-t border-brown px-7`}>
                    {
                        socialLinks.map((link) => (
                            <Link 
                                key={link.id} 
                                href={link.url}
                                className='text-grey-700 hover:text-brown transition-colors duration-300
                                dark:text-peach-500 dark:hover:text-brown'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.label}
                            </Link>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default MobileMenu;