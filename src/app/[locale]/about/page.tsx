import MilestoneContainer from "@/components/MilestoneContainer";
import MilestoneHero from "@/components/MilestoneHero";
import { unstable_setRequestLocale } from "next-intl/server";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: 'About | Florencia Rueda Sanchez'
// };

type Props = { params: {locale: string}; };

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

