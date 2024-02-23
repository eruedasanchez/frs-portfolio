import Image from "next/image";
import { Lora } from "next/font/google";
import { useTranslations } from "next-intl";
import '../app/styles/dream-avenue.css';

const lora = Lora({ subsets: ["latin"] });

const PortfolioSite = () => {
    const portfolioSite = useTranslations('PortfolioSite');

    return (
        <section className={`${lora.className} max-width section-padding`}>
            <div className="box text-center flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded bg-brown-700 flex items-center justify-center flex-shrink-0 mb-5">
                    <Image
                        src={"/stars.svg"}
                        alt='icon'
                        width={35}
                        height={35}
                    />
                </div>
                <h2 className="font-dream-avenue text-grey-700 tracking-wider">{portfolioSite('title')}</h2>
                <p className="text-grey-600">{portfolioSite('description')}</p>
            </div>
        </section>

    );
}

export default PortfolioSite;