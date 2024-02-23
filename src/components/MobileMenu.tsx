'use client';

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Lora } from "next/font/google";
import { keys, socialLinks } from "@/constants/constants";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Theme from "./Theme";
import LanguageDropdownMenu from "./LanguageDropdownMenu";
import { MobileMenuProps } from "@/types/types";
import Sidebar from "./Sidebar";

const lora = Lora({ subsets: ["latin"] });

const MobileMenu = ({ navLinks, contactMe, languages } : MobileMenuProps) => {
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
                <LanguageDropdownMenu
                    containerStyles="border-grey-700 
                    hover:scale-105 hover:border-brown
                    dark:border-brown-700 dark:hover:border-brown"
                    iconStyles="text-grey-700 hover:text-brown
                    dark:text-brown-700 dark:hover:text-brown"
                    languages={languages}
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
            <Sidebar
                isOpen={isOpen}
                toogleMenu={toogleMenu}
                navLinks={navLinks}
                contactMe={contactMe}
                languages={languages}
            />
        </div>
    );
}

export default MobileMenu;