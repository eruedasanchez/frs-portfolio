'use client';

import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@/hooks/useWindowsSize";
import { PortfolioSectionProps } from "@/types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lora } from "next/font/google";
import PortfolioItem from "./PortfolioItem";

const lora = Lora({ subsets: ["latin"] });

const PortfolioSection = ({ data, title, portfolioTitles } : PortfolioSectionProps) => {
    const swiperRef = useRef<SwiperType>();
    const [sliderPerView, setSliderPerView] = useState(3);
    const { width } = useWindowSize();
    
    useEffect(() => {
        if(width < 768){
            setSliderPerView(1);
        } else if(width < 1268){
            setSliderPerView(2);
        } else {
            setSliderPerView(3);
        }
    }, [width]);
    
    return (
        <section className={`${lora.className} max-width section-padding`}>
            <div className="pb-3 border-b border-brown flex justify-between items-center">
                <p>{title}</p>
                <div className="flex gap-2">
                    <button 
                        className="bg-peach border border-brown-700 p-1 rounded-full text-brown-700
                        transition-all duration-300
                        hover:bg-brown-700 hover:text-peach hover:border hover:border-peach"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <ChevronLeft/>
                    </button>
                    <button 
                        className="bg-peach border border-brown-700 p-1 rounded-full text-brown-700
                        transition-all duration-300
                        hover:bg-brown-700 hover:text-peach hover:border hover:border-peach"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <ChevronRight/>
                    </button>
                </div>
            </div>
            <div className="max-width section-padding pt-6">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={sliderPerView}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {
                        data.map((portfolio,index) => (
                            <SwiperSlide key={index}>
                                <PortfolioItem 
                                    key={portfolio.id}
                                    portfolio={portfolio}
                                    portfolioTitle={portfolioTitles[index]}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
}

export default PortfolioSection;

