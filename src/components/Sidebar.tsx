
import Link from "next/link";
import { SidebarProps } from "@/types/types";
import { Lora } from "next/font/google";
import { socialLinks } from "@/constants/constants";
import { X } from "lucide-react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const lora = Lora({ subsets: ["latin"] });

const Sidebar = ({ isOpen, toogleMenu, navLinks, contactMe, languages } : SidebarProps) => {
    return (
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
                    languages={languages}
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
    );
}

export default Sidebar;

