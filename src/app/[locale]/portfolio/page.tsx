import { unstable_setRequestLocale } from "next-intl/server";
import PortfolioSite from "@/components/PortfolioSite";
import PortfolioSection from "@/components/PortfolioSection";
import { portfolios } from "@/constants/constants";
import { useTranslations } from "next-intl";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: 'About | Florencia Rueda Sanchez'
// };

type Props = {
    params: {locale: string};
};

const PortfolioPage = ({params: {locale}}: Props) => {
    // Enable static rendering
    unstable_setRequestLocale(locale);

    const portfolioSection = useTranslations('PortfolioSection');
    const portfolio = useTranslations('Portfolio');

    const portfolioTitles = [
        { name: portfolio('Titles.firstTitle.name') },
        { name: portfolio('Titles.secondTitle.name') },
        { name: portfolio('Titles.thirdTitle.name') },
        { name: portfolio('Titles.fourthTitle.name') },
        { name: portfolio('Titles.fifthTitle.name') },
        { name: portfolio('Titles.sixthTitle.name') },
        { name: portfolio('Titles.seventhTitle.name') },
        { name: portfolio('Titles.eighthTitle.name') },
        { name: portfolio('Titles.ninthTitle.name') }
    ];

    return (
        <>
            <PortfolioSite/>
            <PortfolioSection
                data={portfolios}
                title={portfolioSection('title')}
                portfolioTitles={portfolioTitles}
            />
        </>
    );
}

export default PortfolioPage;




