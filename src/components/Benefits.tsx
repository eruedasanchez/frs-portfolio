import BenefitsList from "./BenefitsList";
import { BenefitsProps } from "@/types/types";

const Benefits = ({ benefitsData } : BenefitsProps ) => {
    return (
        <>
            <BenefitsList
                containedStyles="mb-3 tablet:mb-6"
                from={0} 
                to={2} 
                benefitsData={benefitsData}
            />
            <BenefitsList 
                from={2}
                to={5}
                benefitsData={benefitsData}
            />
        </>
    );
}

export default Benefits;