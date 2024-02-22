import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'es', 'no'] as const;

export const pathnames = {
    '/': '/',
    '/home': {
        en: '/home',
        es: '/inicio',
        no: '/hjem'
    },
    '/about': {
        en: '/about',
        es: '/acerca',
        no: '/om'
    },
    '/portfolio': {
        en: '/portfolio',
        es: '/portafolio',
        no: '/portefolje'
    },
    '/contact': {
        en: '/contact',
        es: '/contacto',
        no: '/kontakt'
    }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;