import { useTranslations } from "next-intl";
import Benefits from "./Benefits";
import SectionHeading from "./SectionHeading";

const BenefitsContainer = () => {
    const benefits = useTranslations('Benefits');
    
    const benefitsData = [
        { name: benefits('benefitsData.firstBenefit.name'), description: benefits('benefitsData.firstBenefit.description') },
        { name: benefits('benefitsData.secondBenefit.name'), description:benefits('benefitsData.secondBenefit.description') },
        { name: benefits('benefitsData.thirdBenefit.name'), description: benefits('benefitsData.thirdBenefit.description') },
        { name: benefits('benefitsData.fourthBenefit.name'), description:benefits('benefitsData.fourthBenefit.description') },
        { name: benefits('benefitsData.fifthBenefit.name'), description: benefits('benefitsData.fifthBenefit.description') }
        
    ];

    return (
        <section className="max-width section-padding">
            <SectionHeading
                title={benefits('SectionHeading.title')}
                subtitle={benefits('SectionHeading.subtitle')}
            />
            <Benefits benefitsData={benefitsData}/>
        </section>
    );
}

export default BenefitsContainer;