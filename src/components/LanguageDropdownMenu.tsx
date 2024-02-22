'use client';

import { languages } from "@/constants/constants";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Lora } from "next/font/google";
import { LanguageData, LanguageDropdownMenuProps } from "@/types/types";
// import LanguageLink from "./LanguageLink";
import { useLocale } from "next-intl";

const lora = Lora({ subsets: ["latin"] });

const LanguageDropdownMenu = ({containerStyles, iconStyles} : LanguageDropdownMenuProps) => {
    const [currentLanguageFlag, setCurrentLanguageFlag] = useState(languages[0].flag);
    const [isOpen, setIsOpen] = useState(false);
    
    // const currentLocale = useLocale();
    
    // useEffect(() => {
    //     setCurrentLanguageFlag(getFlagByLocale(currentLocale));
    // }, [currentLocale]);

    // const getFlagByLocale = (locale: string): string => {
    //     const language = languages.find(lang => lang.isoCode === locale);
    //     return language ? language.flag : "";
    // }
    
    // const handleChangeLanguage = (language: LanguageData): void => {
    //     setIsOpen(isOpen => !isOpen);
    //     setCurrentLanguageFlag(language.flag);
    // }
    
    return (
        <div className={`${lora.className} ${containerStyles} border-2 relative rounded-xl p-2 transition-all duration-700 
        hover:scale-105 cursor-pointer ${isOpen ? 'w-[150px] translate-y-6 mt-3 mb-8' : 'w-[75px]'}`}> 
            <div 
                className='w-full rounded-xl flex justify-between items-center cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image
                    src={currentLanguageFlag}
                    alt="current-language-flag"
                    width={26}
                    height={26}
                />
                {
                    !isOpen ? 
                    <ChevronDown className={`w-4 ${iconStyles}`}/> : 
                    <ChevronUp className={`w-4 ${iconStyles}`}/>
                }
            </div>
            {/* <div className={`text-grey-600 transition-all duration-1000 
            ${isOpen ? 'max-h-[155px] opacity-100 p-1 my-2' : 'max-h-0 opacity-0'}`}
            >
                <LanguageLink index={0} locale="en" handleChangeLanguage={handleChangeLanguage}/>
                <LanguageLink index={1} locale="es" handleChangeLanguage={handleChangeLanguage}/>
                <LanguageLink index={2} locale="no" handleChangeLanguage={handleChangeLanguage}/>
            </div> */}
        </div>
    );
}

export default LanguageDropdownMenu;