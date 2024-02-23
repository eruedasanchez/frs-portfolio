import Link from "next/link";
import { Lora } from "next/font/google";
import { contactDetails, socialLinks } from "@/constants/constants";
import { useTranslations } from "next-intl";
import NavLink from "./NavLink";
import Logo from "./Logo";

const lora = Lora({ subsets: ["latin"] });

const Footer = () => {
    const t = useTranslations('Header');
    const footer = useTranslations('Footer'); 
    
    const navLinks = [
        { label: t('NavLinks.firstLink.label'), url: t('NavLinks.firstLink.url') },
        { label: t('NavLinks.secondLink.label'), url: t('NavLinks.secondLink.url') },
        { label: t('NavLinks.thirdLink.label'), url: t('NavLinks.thirdLink.url') },
        { label: t('NavLinks.fourthLink.label'), url: t('NavLinks.fourthLink.url') }
    ];
    
    return (
        <footer className={`${lora.className} py-10 border-t border-brown-700 max-width`}>
            <div className="flex justify-between items-center">
                <Logo/>
                <nav className="flex gap-12 max-tablet:hidden">
                    <ul className="flex items-center gap-8">
                        {
                            navLinks.map((navLink) => (
                                <NavLink 
                                    key={navLink.label}
                                    href={navLink.url}
                                    label={navLink.label} 
                                />
                            ))
                        }
                    </ul>
                </nav>
                <div className="flex gap-3">
                    {
                        socialLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                className="w-10 h-10 bg-peach border border-brown-700 text-brown-700 rounded-full flex justify-center items-center
                                hover:bg-brown-700 hover:border hover:border-peach hover:text-peach
                                transition-all duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <link.icon size={19} strokeWidth={0} fill="currentColor" />
                            </Link>

                        ))
                    }
                </div>
            </div>
            {/* contact details */}
            <div className="w-max p-5 mx-auto flex gap-5 
            tablet:gap-10 flex-col tablet:flex-row items-center">
                {
                    contactDetails.map((detail, index) => (
                        <div key={index} className="flex gap-3 items-center text-brown-700">
                            <detail.icon size={20}/>
                            {
                                index === contactDetails.length - 1 ?
                                <p className="text-grey-600 dark:text-peach-500 text-base">{footer('location')}</p> :
                                <p className="text-grey-600 dark:text-peach-500 text-base">{detail.text}</p>

                            }
                            
                        </div>
                    ))
                }
            </div>
            {/* copyright text */}
            <p className="mt-8 text-gray-600 dark:text-peach-500 text-center text-sm">
            {footer('copyrightStart')} {new Date().getFullYear()} {footer('copyrightEnd')}
            </p>
        </footer>
    )
}

export default Footer;