import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import MilestoneContainer from "@/components/MilestoneContainer";
import MilestoneHero from "@/components/MilestoneHero";

// export const metadata: Metadata = {
//     title: 'About'
// };

// Al colocar solo title: 'About', como en layout habiamos definido,
// title: {
    //         default: "My awesome blog",
    //         template: "%s - My awesome blog"
    //     },
    // entonces %s toma el titulo de la pagina, en este caso About y se
    // va a reflejar como About - My awesome blog en el encabezado de la pagina

// Ahora, si no queremos esto y queremos que tenga un titulo fijo. hacemos lo 
// siguiente:

// export const metadata: Metadata = {
//     title: {
//         absolute: 'About page'
//     }
// };

// De esta manera, el header no toma el template y fija siempre About page 


type Props = { params: {locale: string}; };

export async function generateMetadata({ params: {locale} } : Omit<Props, 'children'>) {
    const t = await getTranslations({locale, namespace: 'AboutPage'});
    
    return {
        title: t('title'),
        description: t('description'),
        // openGraph: {
        //     images: [
        //         {
        //             url: 'norge.png'
        //         }
        //     ]
        // }
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

