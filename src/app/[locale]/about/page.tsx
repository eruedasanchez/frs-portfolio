import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import MilestoneContainer from "@/components/MilestoneContainer";
import MilestoneHero from "@/components/MilestoneHero";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: 'About | Florencia Rueda Sanchez'
// };

type Props = { params: {locale: string}; };

export async function generateMetadata({ params: {locale} } : Omit<Props, 'children'>) {
    const t = await getTranslations({locale, namespace: 'AboutPage'});
    
    return {
        title: t('title')
    };
}

const AboutPage = ({params: {locale}}: Props) => {
    // Enable static rendering
    unstable_setRequestLocale(locale);

    return (
        <>
            <MilestoneHero/>
            <MilestoneContainer/>
        </>
    )
}

export default AboutPage;

