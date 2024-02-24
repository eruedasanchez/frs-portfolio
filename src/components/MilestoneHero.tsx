import Image from "next/image";
import { useTranslations } from "next-intl";
import { Lora } from "next/font/google";
import Stats from "./Stats";
import '../app/styles/dream-avenue.css';
import '../app/styles/lora.css';

const lora = Lora({ subsets: ["latin"] });

const MilestoneHero = () => {
    const milestoneHero = useTranslations('MilestoneHero');

    return (
        <section className="max-width section-padding flex flex-col tablet:flex-row gap-20 items-center">
            <div className="relative w-full max-w-[550px] aspect-[40/45] my-1 tablet:my-8 mx-auto">
                <Image
                    src={"/hero-2.webp"}
                    alt="about img"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    priority
                    className="rounded-2xl"
                />
            </div>
            <div className="tablet:w-1/2">
                    <div className="space-y-3 max-tablet:text-center flex flex-col">
                        <p className="font-lora font-light px-4 py-2 bg-peach-500 text-grey-600 w-max rounded mb-1
                        tablet:w-max max-tablet:mx-auto slider-reveal delay-250ms">
                            {milestoneHero('header')}
                        </p>
                        <h1 className="font-dream-avenue text-4xl tracking-wide font-light text-grey-700 dark:text-brown-700 slider-reveal delay-500ms">{milestoneHero('title')}</h1>
                        <p className={`${lora.className} text-grey-600 slider-reveal delay-750ms dark:text-peach-500`}>
                            {milestoneHero('description')}
                        </p>
                    </div>
                    <div className={`${lora.className}`}>
                        <Stats 
                            containedStyles="bg-peach-400 rounded-;g tablet:rounded-none tablet:bg-transparent
                            tablet:border-t-2 tablet:border-b-2 tablet:border-brown
                            w-full py-8 px-10 mt-14 tablet:mt-24 gap-12 flex flex-col
                            tablet:flex-row"
                            statsDetailStyles="flex justify-center items-center gap-10 tablet:block"
                            isPortfolio
                        />
                    </div>
                </div>
            </section>
    );
}

export default MilestoneHero;