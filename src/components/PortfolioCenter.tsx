import { useState } from "react";
import Image from "next/image";
import { Lora } from "next/font/google";
import { Portfolio, PortfolioThumbnailsProps } from "@/types/types";
import { ArrowUpRight } from "lucide-react";
import Lightbox from "./Lightbox";

const lora = Lora({ subsets: ["latin"] });

const PortfolioCenter = ({portfolio, currentImg, setCurrentImg, portfolioTitle} : PortfolioThumbnailsProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handlePrevImage = (portfolio: Portfolio, currentImg: string, setCurrentImg: React.Dispatch<React.SetStateAction<string>>) => {
        const indexCurrentImage = portfolio.images.findIndex(image => image === currentImg);
        
        indexCurrentImage === 0 ? 
        setCurrentImg(portfolio.images[portfolio.images.length - 1]) :
        setCurrentImg(portfolio.images[indexCurrentImage - 1]);
    }

    const handleNextImage = (portfolio: Portfolio, currentImg: string, setCurrentImg: React.Dispatch<React.SetStateAction<string>>) => {
        const indexCurrentImage = portfolio.images.findIndex(image => image === currentImg);
        
        indexCurrentImage === portfolio.images.length - 1 ? 
        setCurrentImg(portfolio.images[0]) :
        setCurrentImg(portfolio.images[indexCurrentImage + 1]);
    }

    return (
        <>
            <>
                <h4 className={`${lora.className} text-2xl mb-5`}>{portfolioTitle?.name}</h4>
                <div className="relative w-full h-80 rounded-lg overflow-hidden 
                group cursor-pointer mb-5 hover:scale-105 transition-all duration-450">
                    <Image
                        src={currentImg}
                        alt={portfolio.title}
                        fill
                        className="object-cover"
                    />
                    <div className="bg-black bg-opacity-10 backdrop-blur-[1px]
                    absolute top-0 left-0 w-full h-full opacity-0
                    group-hover:opacity-100 transition-opacity duration-300
                    flex items-center justify-center">
                        <div 
                            className="w-16 h-16 text-brown-700 rounded-lg
                            flex items-center justify-center 
                            bg-peach border border-brown-700 p-3 transition-all duration-300 
                            hover:bg-brown-700 hover:text-peach hover:border hover:border-peach"
                            onClick={() => setIsOpen(true)}>
                            <ArrowUpRight/>
                        </div>
                    </div>
                </div>
            </>
            {
                isOpen && 
                <Lightbox
                    portfolio={portfolio} 
                    currentImg={currentImg} 
                    setCurrentImg={setCurrentImg}
                    setIsOpen={setIsOpen}
                    handlePrevImage={handlePrevImage} 
                    handleNextImage={handleNextImage}
                /> 
            }
        </>
    )
}

export default PortfolioCenter;