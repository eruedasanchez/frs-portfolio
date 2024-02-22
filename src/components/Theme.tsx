'use client';

import { useState, useEffect } from "react";
import { MoonStar, Sun } from "lucide-react";
import { ThemeProps } from "@/types/types";
import { useTheme } from "next-themes";

const Theme = ({ containerStyles, iconStyles } : ThemeProps) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null;
    

    return (
        <>
            {
                theme === 'dark' ?
                <div className={containerStyles}> 
                    <MoonStar 
                        className={iconStyles}
                        onClick={() => setTheme('light')}
                    />
                </div> :
                <div className={containerStyles}>
                    <Sun 
                        className={iconStyles}
                        onClick={() => setTheme('dark')}
                    />
                </div> 
            }
        </>
    );
}

export default Theme;

