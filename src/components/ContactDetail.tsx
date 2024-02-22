import { ContactDetailProps } from "@/types/types";

const ContactDetail = ({ info } : ContactDetailProps) => {
    return (
        <div className="box !p-6">
            <h6 className="text-grey-600">{info.title}</h6>
            <p className="text-grey-700">{info.info}</p>
        </div>
    );
}

export default ContactDetail;