import { LucideIcon } from "lucide-react";
import React from "react";
import { string } from "zod";

export interface NavLinksProps{
    index?: number,
    href: string,
    label: string,
    containedStyles?: string,
    toogleMenu?: () => void 
}

export interface NavbarProps{
    navStyles: string, 
    ulStyles: string,
    showTheme: boolean,
    toogleMenu?: () => void,
    showLanguageMenu: boolean,
    navLinks: { label: string; url: string }[],
    contactMe: string
}  


export interface HeroProps{
    header: string, 
    title: string,
    description: string,
    contact: string, 
    viewPortfolio: string,
} 

export interface SectionHeadingProps{
    title: string,
    subtitle: string
}

export interface SkillsProps{
    skillsData: { name: string; description: string;  icon: string }[] 
}

export type BenefitsData = {
    name: string;
    description: string;
}[];

export interface BenefitsProps {
    benefitsData: BenefitsData 
}

export interface BenefitsListProps{
    containedStyles?: string,
    from: number,
    to: number,
    benefitsData: BenefitsData
}

export interface Portfolio{
    id: number,
    title:  string,
    link: string,
    images: string[]
}

export type PortfolioTitle = { name: string; };

export interface PortfolioTitlesProps{
    portfolioTitles: PortfolioTitle[] 
}

export interface PortfolioProps{
    key: number,
    portfolio: Portfolio,
    portfolioTitle: PortfolioTitle
}

export interface PortfolioCenterProps{
    currentImg: string, 
    portfolio: Portfolio,
}

export interface PortfolioThumbnailsProps extends PortfolioCenterProps{
    setCurrentImg: React.Dispatch<React.SetStateAction<string>>,
    portfolioTitle?: PortfolioTitle
}

export interface LightboxProps{
    portfolio: Portfolio,
    currentImg: string,
    setCurrentImg: React.Dispatch<React.SetStateAction<string>>, 
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, 
    handlePrevImage: (portfolio: Portfolio, currentImg: string, setCurrentImg: React.Dispatch<React.SetStateAction<string>>) => void, 
    handleNextImage: (portfolio: Portfolio, currentImg: string, setCurrentImg: React.Dispatch<React.SetStateAction<string>>) => void
}

export interface SocialLink{
    id: number,
    icon: LucideIcon,
    url: string
}

export type Testimonial = {
    name: string;
    designation: string; 
    review: string
};

export interface TestimonialsProps{
    testimonialsData: Testimonial[] 
}

export interface Review{
    id: number,
    stars: number,
    socialLinks: SocialLink[]
}

export interface SingleReviewProps{
    testimonial: Testimonial, 
    review: Review
}

export type Faq = {
    question: string;
    answer: string; 
};

export interface FaqsProps{
    faqsData: Faq[],
    anyQuestions: string,
    collaborateTogether: string,
    contactMe: string,
}

export interface AccordionProps{
    faqsData: Faq[] 
}

export interface StatsProps{
    containedStyles: string, 
    statsDetailStyles?: string, 
    isPortfolio?: boolean
}

export interface StatsDetailProps{
    quantity: number,
    title: string,
    statsDetailStyles?: string 
    isPortfolio?: boolean
}

export interface PortfolioSectionProps{
    data: Portfolio[], 
    title: string,
    portfolioTitles: PortfolioTitle[]
}


export interface ContactHeaderProps{
    title: string,
    description: string
}

export type ContactInfo = {
    title: string;
    info: string; 
};

export interface ContactBodyProps{
    contactData : ContactInfo[],
    socialProfilesTitle: string,
    sendButton: string
}

// export interface ContactData{
//     id: number,
//     title: string,
//     contact: string
// }

export interface ContactFormProps {
    sendButton: string
}

export interface ContactDetailProps{
    info: ContactInfo
}

export interface ThemeProps{
    containerStyles: string, 
    iconStyles: string
}

export interface LanguageDropdownMenuProps{
    containerStyles: string, 
    iconStyles: string
}


export interface LanguageData{
    title: string,
    flag: string
}

export type Milestone = {
    title: string;
    duration: string; 
    description: string
};

export interface MilestoneProps{
    timeline: Milestone[] 
}


















