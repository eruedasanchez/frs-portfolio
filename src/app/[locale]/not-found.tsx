export const dynamic = 'force-dynamic';

import {useTranslations} from 'next-intl';

export default function NotFoundPage() {
    const t = useTranslations('NotFoundPage');

    return (
        <>
        <h1>Error</h1>
            {/* <h1>{t('title')}</h1>
            <p className="max-w-[460px]">{t('description')}</p> */}
        </>
    );
}