import Image from "next/image";
import { ContactHeaderProps } from "@/types/types";
import { Lora } from "next/font/google";
import '../app/styles/dream-avenue.css';

const lora = Lora({ subsets: ["latin"] });

const ContactHeader = ({ title, description } : ContactHeaderProps ) => {
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
                <h2 className="font-dream-avenue tracking-wide text-grey-700">{title}</h2>
                <p className="text-grey-600">{description}</p>
            </div>
        </section>
    );
}

export default ContactHeader;