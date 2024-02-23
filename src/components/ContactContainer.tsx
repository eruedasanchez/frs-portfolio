import { useTranslations } from "next-intl";
import ContactHeader from "./ContactHeader";
import ContactBody from "./ContactBody";

const ContactContainer = () => {
    const contactPage = useTranslations('ContactPage');
    
    const contactData = [
        { title: contactPage('ContactData.emailData.title'), info: contactPage('ContactData.emailData.info') },
        { title: contactPage('ContactData.callData.title'), info: contactPage('ContactData.callData.info') },
        { title: contactPage('ContactData.locationData.title'), info: contactPage('ContactData.locationData.info') },
    ];

    const contactFormPlaceholders = {
        firstName: contactPage('FormPlaceholders.firstName'),
        lastName: contactPage('FormPlaceholders.lastName'),
        email: contactPage('FormPlaceholders.email'),
        phone: contactPage('FormPlaceholders.phone'),
        message: contactPage('FormPlaceholders.message'),
    };
    
    return (
        <>
            <ContactHeader 
                title={contactPage('ContactHeader.title')} 
                description={contactPage('ContactHeader.description')}
            />
            <ContactBody 
                contactData={contactData} 
                socialProfilesTitle={contactPage('SocialProfiles')}
                sendButton={contactPage('Send')}
                contactFormPlaceholders={contactFormPlaceholders}
            />
        </>
    );
}

export default ContactContainer;