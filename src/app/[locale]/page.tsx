import {unstable_setRequestLocale} from 'next-intl/server';
import BenefitsContainer from '@/components/BenefitsContainer';
import FaqsContainer from '@/components/FaqsContainer';
import HeroContainer from '@/components/HeroContainer';
import PortfolioContainer from '@/components/PortfolioContainer';
import SkillsContainer from '@/components/SkillsContainer';
import TestimonialsContainer from '@/components/TestimonialsContainer';

type Props = {
    params: {locale: string};
};

export default function HomePage({params: {locale}}: Props) {
    // Enable static rendering
    unstable_setRequestLocale(locale);
    
    return (
        <>
            <HeroContainer/>
            <SkillsContainer/>
            <BenefitsContainer/>
            <PortfolioContainer/>
            <TestimonialsContainer/>
            <FaqsContainer/>
        </>
    );
}