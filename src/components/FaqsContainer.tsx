import { useTranslations } from "next-intl";
import Faqs from "./Faqs";
import SectionHeading from "./SectionHeading";

const FaqsContainer = () => {
    const faqs = useTranslations('Faqs');

    const faqsData = [
        { question: faqs('FaqsData.firstFaq.question'), answer: faqs('FaqsData.firstFaq.answer') },
        { question: faqs('FaqsData.secondFaq.question'),answer:faqs('FaqsData.secondFaq.answer') },
        { question: faqs('FaqsData.thirdFaq.question'), answer: faqs('FaqsData.thirdFaq.answer') },
        { question: faqs('FaqsData.fourthFaq.question'),answer:faqs('FaqsData.fourthFaq.answer') },
        { question: faqs('FaqsData.fifthFaq.question'), answer: faqs('FaqsData.fifthFaq.answer') }
    ];

    return (
        <section className="max-width section-padding overflow-hidden">
            <SectionHeading
                title={faqs('SectionHeading.title')}
                subtitle={faqs('SectionHeading.subtitle')}
            />
            <Faqs
                faqsData={faqsData}
                anyQuestions={faqs('AnyQuestions')}
                collaborateTogether={faqs('CollaborateTogether')}
                contactMe={faqs('ContactMe')}
            />
        </section>
    );
}

export default FaqsContainer;


