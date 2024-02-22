import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
// import { faqs } from "@/constants/constants";
import Accordion from "./Accordion";
import { Lora } from "next/font/google";
import { FaqsProps } from "@/types/types";

const lora = Lora({ subsets: ["latin"] });

const Faqs = ({faqsData, anyQuestions, collaborateTogether, contactMe } : FaqsProps) => {
    return (
        <div className={`${lora.className} flex flex-col tablet:flex-row gap-5 items-start`}>
            <div className="box">
                <Accordion faqsData={faqsData}/>
            </div>
            <div className="box flex flex-col gap-5 tablet:max-w-md">
                <div className="w-16 h-16 bg-brown-700 text-peach-100 flex items-center justify-center 
                flex-shrink-0 mb-2">
                    <Star 
                        fill="currentColor"
                        size={30}
                    />
                </div>
                <div>
                    <h5 className="text-grey-700 mb-2">{anyQuestions}</h5>
                    <p className="text-grey-600">{collaborateTogether}</p>
                </div>
                <Link
                    href={"/contact"}
                    className="btn btn-primary w-max
                    hover:bg-peach-500 hover:text-brown-700 hover:border hover:border-brown-700
                    hover:scale-105 transition-all duration-700"
                >
                    {contactMe} <ArrowRight/>
                </Link>
            </div>
        </div>
    )
}

export default Faqs;