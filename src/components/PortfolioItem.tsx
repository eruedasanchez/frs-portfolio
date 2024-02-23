'use client';

import { useState } from "react";
import { PortfolioProps } from "@/types/types";
import PortfolioCenter from "./PortfolioCenter";
import PortfolioThumbnails from "./PortfolioThumbnails";

const PortfolioItem = ({ key, portfolio, portfolioTitle } : PortfolioProps) => {
    const [currentImg, setCurrentImg] = useState(portfolio.images[0]);

    return (
        <div key={key} className="box dark:bg-brown">
            <PortfolioCenter
                portfolio={portfolio}
                currentImg={currentImg}
                setCurrentImg={setCurrentImg}
                portfolioTitle={portfolioTitle}
            />
            <PortfolioThumbnails
                portfolio={portfolio}
                currentImg={currentImg}
                setCurrentImg={setCurrentImg}
                portfolioTitle={portfolioTitle}
            />
        </div>
    );
}

export default PortfolioItem;

