import { useTranslations } from "next-intl";
import SectionHeading from "./SectionHeading";
import Testimonials from "./Testimonials";

const TestimonialsContainer = () => {
    const testimonials = useTranslations('Testimonials');

    const testimonialsData = [
        { name: testimonials('TestimonialsData.firstTestimonial.name'), designation: testimonials('TestimonialsData.firstTestimonial.designation'), review: testimonials('TestimonialsData.firstTestimonial.review') },
        { name: testimonials('TestimonialsData.secondTestimonial.name'), designation:testimonials('TestimonialsData.secondTestimonial.designation'), review: testimonials('TestimonialsData.secondTestimonial.review') },
        { name: testimonials('TestimonialsData.thirdTestimonial.name'), designation: testimonials('TestimonialsData.thirdTestimonial.designation'), review: testimonials('TestimonialsData.thirdTestimonial.review') },
        { name: testimonials('TestimonialsData.fourthTestimonial.name'), designation:testimonials('TestimonialsData.fourthTestimonial.designation'), review: testimonials('TestimonialsData.fourthTestimonial.review') },
        { name: testimonials('TestimonialsData.fifthTestimonial.name'), designation: testimonials('TestimonialsData.fifthTestimonial.designation'), review: testimonials('TestimonialsData.fifthTestimonial.review') }
        
    ];
    
    return (
        <section className="max-width section-padding">
            <SectionHeading
                title={testimonials('SectionHeading.title')}
                subtitle={testimonials('SectionHeading.subtitle')}
            />
            <Testimonials testimonialsData={testimonialsData}/>
        </section>
    );
}

export default TestimonialsContainer;




