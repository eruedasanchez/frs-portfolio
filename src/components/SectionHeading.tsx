import { SectionHeadingProps } from "@/types/types";
import { Lora } from "next/font/google";
import '../app/styles/dream-avenue.css';

const lora = Lora({ subsets: ["latin"] });

const SectionHeading = ({title, subtitle} : SectionHeadingProps) => {
    return (
        <div className="max-w-xl mx-auto mb-16 text-center">
            <h2 className="font-dream-avenue text-4xl font-light tracking-wider text-grey-700 dark:text-brown-700 mb-2">{title}</h2>
            <p className={`${lora.className} text-grey-600 dark:text-peach-500`}>{subtitle}</p>
        </div>
    );
}

export default SectionHeading;