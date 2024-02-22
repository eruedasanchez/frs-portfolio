import Image from 'next/image';
import { Link } from '@/navigation';
import { languages } from '@/constants/constants';
import { LanguageData } from '@/types/types';
import { locales } from '@/config';

type Locale = typeof locales[number];

interface LanguageLinkProps {
    index: number,
    locale: Locale,
    handleChangeLanguage: (language: LanguageData) => void;
}

const LanguageLink = ({ index, locale, handleChangeLanguage } : LanguageLinkProps) => {
    return (
        <Link
            href="/"
            locale={locale} 
            className="flex w-full h-1/2 justify-between px-1 py-1 mb-2
            cursor-pointer border-l-transparent border-l-2
            hover:border-l-brown-700 hover:transition-all hover:duration-700"
            onClick={() => handleChangeLanguage(languages[index])}
            
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