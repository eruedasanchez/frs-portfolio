"use server";

import React from "react";
// import { validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const senderEmail = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // if(!validateString(senderEmail, 500)){
    //     return {
    //         error: "Invalid sender email"
    //     }
    // }

    // if(!validateString(message, 5000)){
    //     return {
    //         error: "Invalid message"
    //     }
    // }

    
    await resend.emails.send({
        from: "Florencia Rueda Sanchez Portfolio <onboarding@resend.dev>",
        to: "ezequiel.ruedasanchez@gmail.com",
        subject: "New message from portfolio's contact form",
        reply_to: senderEmail as string,
        react: React.createElement(ContactFormEmail, {
            firstName: firstName as string,
            lastName: lastName as string,
            senderEmail: senderEmail as string,
            phone: phone as string, 
            message: message as string
        }) 
        // <ContactFormEmail message={message} senderEmail={senderEmail}/>
    });
};


// // text: message as string,

