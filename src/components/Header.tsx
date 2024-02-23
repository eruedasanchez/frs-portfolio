import { useTranslations } from "next-intl";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";


const Header = async () => {
    const header = useTranslations('Header');
    const navLinks = [
        { label: header('NavLinks.firstLink.label'), url: header('NavLinks.firstLink.url') },
        { label: header('NavLinks.secondLink.label'), url: header('NavLinks.secondLink.url') },
        { label: header('NavLinks.thirdLink.label'), url: header('NavLinks.thirdLink.url') },
        { label: header('NavLinks.fourthLink.label'), url: header('NavLinks.fourthLink.url') }
    ];
    const contactMe = header('ContactMe');

    const languages = [
        {title: header('Languages.firstLanguage.title'), flag: header('Languages.firstLanguage.flag'), isoCode: header('Languages.firstLanguage.isoCode')},
        {title: header('Languages.secondLanguage.title'), flag: header('Languages.secondLanguage.flag'), isoCode: header('Languages.secondLanguage.isoCode')},
        {title: header('Languages.thirdLanguage.title'), flag: header('Languages.thirdLanguage.flag'), isoCode: header('Languages.thirdLanguage.isoCode')}
    ];
    
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
