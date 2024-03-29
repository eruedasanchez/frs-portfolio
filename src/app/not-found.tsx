export const dynamic = 'force-dynamic';

import { ReactNode } from 'react';
import { locales } from '@/config';
import { getTranslations } from 'next-intl/server';
import { Providers } from './[locale]/providers';
import NotFound from '@/components/NotFound';

type Props = {
    children: ReactNode;
    params: {locale: string};
};

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

export async function generateMetadata({ params: {locale} } : Omit<Props, 'children'>) {
    const t = await getTranslations({locale, namespace: 'Error-404'});
    
    return {
        title: t('title'),
        description: t('description')
    };
}

export default async function NotFoundPage() {
    return (
        <html lang="en">
            <body className='bg-peach-600 dark:bg-slate-800'>
                <Providers>
                    <NotFound/>
                </Providers>
            </body>
        </html>
    );
}





