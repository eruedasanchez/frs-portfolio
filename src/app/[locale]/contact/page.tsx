import { unstable_setRequestLocale } from "next-intl/server";
import ContactContainer from "@/components/ContactContainer";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: 'About | Florencia Rueda Sanchez'
// };

type Props = { params: {locale: string}; };

const Contactpage = ({params: {locale}} : Props) => {
    unstable_setRequestLocale(locale);
    
    return <ContactContainer/>;
}

export default Contactpage;

