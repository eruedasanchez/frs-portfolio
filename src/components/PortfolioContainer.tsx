import Link from "next/link";
import { useTranslations } from "next-intl";
import { Lora } from "next/font/google";
import Portfolio from "./Portfolio";
import SectionHeading from "./SectionHeading";

const lora = Lora({ subsets: ["latin"] });

const PortfolioContainer = () => {
    const portfolio = useTranslations('Portfolio');

    const portfolioTitles = [
        { name: portfolio('Titles.firstTitle.name') },
        { name: portfolio('Titles.secondTitle.name') },
        { name: portfolio('Titles.thirdTitle.name') },
        { name: portfolio('Titles.fourthTitle.name') },
        { name: portfolio('Titles.fifthTitle.name') }
    ];
    
    return (
        <section className="max-width section-padding">
            <SectionHeading
                title={portfolio('SectionHeading.title')}
                subtitle={portfolio('SectionHeading.subtitle')}
            />
            <Portfolio portfolioTitles={portfolioTitles}/>
            <Link 
                href={"/portfolio"} 
                className={`${lora.className} btn btn-primary mt-10 mx-auto w-max 
                hover:bg-peach-500 hover:text-brown-700 hover:border hover:border-brown-700
                hover:scale-105 transition-all duration-700`}
            >
                {portfolio('ViewPortfolio')}
            </Link>
        </section>
    );
}

export default PortfolioContainer;