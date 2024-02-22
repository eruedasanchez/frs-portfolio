import Image from "next/image";
import { PortfolioThumbnailsProps } from "@/types/types";

const PortfolioThumbnails = ({currentImg, portfolio, setCurrentImg } : PortfolioThumbnailsProps) => {
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                portfolio.images.map((image, index) => (
                    <div 
                        key={index} 
                        className="relative h-20 w-full rounded-lg overflow-hidden group cursor-pointer 
                        hover:scale-105 transition-all duration-200"
                        onClick={() => setCurrentImg(image)}>
                        <Image
                            src={image}
                            alt={portfolio.title}
                            fill
                            className="object-cover"
                        />
                        <div className={`bg-black bg-opacity-10 backdrop-blur-[1px]
                        absolute top-0 left-0 w-full h-full
                        transition-opacity duration-300
                        ${currentImg === image ? 'opacity-0' : 'opacity-100'}`}>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PortfolioThumbnails;