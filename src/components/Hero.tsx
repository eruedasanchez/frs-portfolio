import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { HeroProps } from "@/types/types";
import { Lora } from "next/font/google";
import Stats from "./Stats";
import '../app/styles/dream-avenue.css';
import '../app/styles/lora.css';

const lora = Lora({ subsets: ["latin"] });

const Hero = ({header, title, description, contact, viewPortfolio} : HeroProps) => {
    return (
        <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
            <div className="tablet:w-2/3 mt-10 tablet:mt-5">
                <div className="flex flex-col gap-3 items-center tablet:items-start 
                max-w-2xl text-center tablet:text-left">
                    <p className="font-lora font-light px-4 py-2 bg-peach-500 
                    text-gray-600 w-max rounded slider-reveal section-subtitle slider-reveal delay-250ms">
                        {header}
                    </p>
                    <h1 className="text-grey font-dream-avenue text-5xl font-light 
                    tracking-wide slider-reveal hero-title slider-reveal delay-500ms
                    dark:text-brown-700">{title}</h1>
                    <p className={`${lora.className} pr-2 text-grey-600 slider-reveal hero-text slider-reveal delay-750ms dark:text-peach-500`}>{description}</p>
                </div>
                <div className={`${lora.className} flex gap-5 mt-10 justify-center tablet:justify-start slider-reveal delay-1000ms`}>
                    <Link 
                        href={"/contact"} 
                        className="btn btn-primary 
                        hover:bg-peach-500 hover:text-brown-700 hover:border hover:border-brown-700 
                        hover:scale-105 transition-all duration-700
                        dark:bg-brown-700 dark:hover:text-brown-700 dark:hover:bg-peach-500">
                        <Phone size={18}/>{contact}
                    </Link>
                    <Link href={"/portfolio"} className="btn hover:scale-110 transition-all duration-600 dark:text-brown-700">
                        {viewPortfolio}
                        <ArrowRight size={16}/>
                    </Link>
                </div>
                <Stats
                    containedStyles={`${lora.className} bg-peach-400 w-full py-8 px-10 
                    rounded-l-lg mt-16 flex-wrap gap-12 hidden tablet:flex`}
                />
                <Stats 
                    containedStyles={`${lora.className} mt-10 grid grid-cols-2 gap-3 tablet:hidden`}
                    statsDetailStyles="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2"
                />
            </div>
            <div className="relative w-full max-w-[550px] aspect-[40/45] my-4 tablet:my-8 mx-auto">
                <Image
                    src={"/hero-1.jpg"}
                    alt="hero"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    priority
                    className="rounded-2xl"
                />
            </div> 
        </section>
    );
}

export default Hero;


