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
    
    return (
        <html lang={locale}>
            <body className='bg-peach-600 dark:bg-slate-800'>
                <Providers>
                <NextTopLoader color="#B27947" showSpinner={false}/>
                    <Header/>
                    <main className="min-h-screen">{children}</main>
                    <Footer/>
                    <BackToTopButton/>
                </Providers>
            </body>
        </html>
    );
}