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

    return (
        <>
            <ContactHeader 
                title={contactPage('ContactHeader.title')} 
                description={contactPage('ContactHeader.description')}
            />
            <ContactBody 
                contactData={contactData} 
                socialProfilesTitle={contactPage('SocialProfiles')}
                sendButton={contactPage('Send')}/>
        </>
    );
}

export default ContactContainer;