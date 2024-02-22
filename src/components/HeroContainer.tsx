import { useTranslations } from "next-intl";
import Hero from "./Hero";

const HeroContainer = () => {
    const hero = useTranslations('Hero');
    
    return (
        <Hero
            header={hero('header')}
            title={hero('title')}
            description={hero('description')}
            contact={hero('contact')} 
            viewPortfolio={hero('viewPortfolio')} 
        />
    );
}

export default HeroContainer;




