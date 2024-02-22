import { useTranslations } from "next-intl";
import { StatsProps } from "@/types/types";
import StatsDetail from "./StatsDetail";

const Stats = ({ containedStyles, statsDetailStyles, isPortfolio} : StatsProps) => {
    const stats = useTranslations('Stats');
    return (    
        <div className={containedStyles}>
            <StatsDetail
                quantity={10}
                title={stats('customers')}
                statsDetailStyles={statsDetailStyles}
                isPortfolio={isPortfolio}
            />
            <StatsDetail
                quantity={5}
                title={stats('visited')}
                statsDetailStyles={statsDetailStyles}
                isPortfolio={isPortfolio}
            />
            <StatsDetail
                quantity={5}
                title={stats('experience')}
                statsDetailStyles={statsDetailStyles}
                isPortfolio={isPortfolio}
            />
        </div>
    )
}

export default Stats;

