import Image from 'next/image';
import { languages } from '@/constants/constants';
import { locales } from '@/config';
import { Link } from '@/navigation';

type Locale = typeof locales[number];
type ValidPathname = "/" | "/home" | "/about" | "/portfolio" | "/contact";

interface LanguageLinkProps {
    index: number,
    locale: Locale,
    handleChangeLanguage: () => void;
    currentPathname: ValidPathname
}

const LanguageLink = ({ index, locale, handleChangeLanguage, currentPathname } : LanguageLinkProps) => {
    
    return (
        <Link
            href={currentPathname}
            locale={locale} 
            className="flex w-full h-1/2 justify-between px-1 py-1 mb-2
            cursor-pointer border-l-transparent border-l-2
            hover:border-l-brown-700 hover:transition-all hover:duration-700"
            onClick={() => handleChangeLanguage()}
            
        >
            <h3 className="text-sm font-light text-gray-700 dark:text-peach-500 ">{languages[index].title}</h3>
            <Image
                src={languages[index].flag}
                alt={languages[index].title}
                width={20}
                height={20}
            />
        </Link>
    )
}

export default LanguageLink;