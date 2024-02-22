import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { useTranslations } from "next-intl";

const Header = async () => {
    const t = useTranslations('Header');
    
    const navLinks = [
        { label: t('NavLinks.firstLink.label'), url: t('NavLinks.firstLink.url') },
        { label: t('NavLinks.secondLink.label'), url: t('NavLinks.secondLink.url') },
        { label: t('NavLinks.thirdLink.label'), url: t('NavLinks.thirdLink.url') },
        { label: t('NavLinks.fourthLink.label'), url: t('NavLinks.fourthLink.url') }
    ];
    const contactMe = t('ContactMe');
    
    return (
        <header className="flex justify-between items-center h-21 max-width border-b border-brown">
                <Logo/>
                <Navbar
                    navStyles="gap-12 max-tablet:hidden"
                    ulStyles="gap-8"
                    showTheme
                    showLanguageMenu
                    navLinks={navLinks}
                    contactMe={contactMe}
                />
                <MobileMenu 
                    navLinks={navLinks}
                    contactMe={contactMe}
                />
        </header>
    );
}

export default Header;
