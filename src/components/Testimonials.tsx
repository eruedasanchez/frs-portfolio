'use client';

import { useEffect, useRef, useState } from "react";
import { reviews } from "@/constants/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper as SwiperType} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SingleReview from "./SingleReview";
import { useWindowSize } from "@/hooks/useWindowsSize";
import { Lora } from "next/font/google";
import { TestimonialsProps } from "@/types/types";

const lora = Lora({ subsets: ["latin"] });


const Testimonials = ({ testimonialsData } : TestimonialsProps) => {
    const swiperRef = useRef<SwiperType>();
    const [sliderPerView, setSliderPerView] = useState(3);
    const {width} = useWindowSize();

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
        <div className={`${lora.className}`}>
            <div className="pb-3 border-b border-brown flex justify-between items-center">
                <p>{testimonialsData.length} total reviews</p>
                <div className="flex gap-3">
                    <button 
                        className="bg-peach border border-brown-700 p-1 rounded-full text-brown-700
                        hover:bg-brown-700 hover:text-peach hover:border hover:border-peach
                        transition-all duration-300"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <ChevronLeft/>
                    </button>
                    <button 
                        className="bg-peach border border-brown-700 p-1 rounded-full text-brown-700
                        hover:bg-brown-700 hover:text-peach hover:border hover:border-peach
                        transition-all duration-300"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <ChevronRight/>
                    </button>
                </div>
            </div>
            <div className="pt-8">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={sliderPerView}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {
                        testimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <SingleReview testimonial={testimonial} review={reviews[index]} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;