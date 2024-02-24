'use client';

import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { HeaderProps } from "@/types/types";

const Header = ({ navLinks, contactMe, languages } : HeaderProps) => {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsNavbarFixed(true);
            } else {
                setIsNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header className={`flex justify-between items-center h-21 max-width border-b border-brown
        ${isNavbarFixed && 'fixed top-0 left-0 right-0 z-50 bg-peach-600 transition-all duration-500'}`}>
                <Logo/>
                <Navbar
                    navStyles="gap-12 max-tablet:hidden"
                    ulStyles="gap-8"
                    showTheme
                    showLanguageMenu
                    navLinks={navLinks}
                    contactMe={contactMe}
                    languages={languages}
                />
                <MobileMenu 
                    navLinks={navLinks}
                    contactMe={contactMe}
                    languages={languages}
                />
        </header>
    );
}

export default Header;
