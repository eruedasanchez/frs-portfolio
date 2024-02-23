import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import ContactContainer from "@/components/ContactContainer";

export async function generateMetadata({ params: {locale} } : Omit<Props, 'children'>) {
    const t = await getTranslations({locale, namespace: 'ContactPageLayout'});
    
    return {
        title: t('title')
    };
}

type Props = { params: {locale: string}; };

const Contactpage = ({params: {locale}} : Props) => {
    unstable_setRequestLocale(locale);
    
    return <ContactContainer/>;
}

export default Contactpage;

