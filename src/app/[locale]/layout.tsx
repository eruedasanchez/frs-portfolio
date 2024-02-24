import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '../../config';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';

type Props = {
    children: ReactNode;
    params: {locale: string};
};

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

export async function generateMetadata({ params: {locale} } : Omit<Props, 'children'>) {
    const t = await getTranslations({locale, namespace: 'LocaleLayout'});
    
    return {
        title: t('title')
    };
}

export default async function LocaleLayout({ children, params: {locale} } : Props) {
    unstable_setRequestLocale(locale);

    const header = await getTranslations('Header');
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
        <html lang={locale}>
            <body className='bg-peach-600 dark:bg-slate-800'>
                <Providers>
                <NextTopLoader color="#B27947" showSpinner={false}/>
                    <Header
                        navLinks={navLinks}
                        contactMe={contactMe}
                        languages={languages}
                    />
                    <main className="min-h-screen">{children}</main>
                    <Footer/>
                    <BackToTopButton/>
                </Providers>
            </body>
        </html>
    );
}