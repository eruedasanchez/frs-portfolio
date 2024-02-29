import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '../../config';
import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import { Metadata } from 'next';

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
        title: {
            default: t('title'),
            template: `%s | ${t('title')}`
        },
        description: t('description'),
        twitter: {
            card: "summary_large_image" 
        }
    };
}

// export const metadata: Metadata = {
//     title: {
//         default: "My awesome blog",
//         template: "%s - My awesome blog"
//     },
//     description: "Come and read my awesome articles!",
//     twitter: {
//         card: "summary_large_image"
//     }
// }

// twitter.card: Esta propiedad indica el tipo de tarjeta que se utilizará en los tweets 
// relacionados con la página. En este caso, se establece en "summary_large_image". 
// Esto significa que cuando alguien comparta un enlace a la página en Twitter, 
// se utilizará una tarjeta de resumen grande con imagen. 
// Esta tarjeta incluirá un resumen del contenido de la página junto con una imagen destacada.
// En resumen, el objeto twitter proporciona configuraciones específicas para cómo se representará 
// la página cuando se comparta en Twitter, incluyendo el tipo de tarjeta que se utilizará. 
// Esto es útil para asegurarse de que el contenido compartido en Twitter se presente de la manera 
// más atractiva y útil posible para los usuarios de esa plataforma.

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