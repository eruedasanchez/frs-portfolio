"use server";

import React from "react";
import { Resend } from "resend";
import { validateMinString, validateMaxString, validateInput, validateEqLengthString } from "@/lib/utils";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const validNameRegex = /^[A-Za-z\s]+$/;
const validNumbersRegex = /^[0-9]+$/;
const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const sendEmail = async (formData: FormData) => {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const senderEmail = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    if(!validateMinString(firstName, 3)){
        return { error: "First Name must be at least 3 characters" };
    }

    if(!validateMaxString(firstName, 120)){
        return { error: "First Name must be less than 120 characters" };
    }

    if(!validateInput(firstName, validNameRegex)){
        return { error: "First Name must contain only alphabetic characters. E.g: John" };
    }
    
    if(!validateMinString(lastName, 3)){
        return { error: "First Name must be at least 3 characters" };
    }

    if(!validateMaxString(lastName, 120)){
        return { error: "First Name must be less than 120 characters" };
    }

    if(!validateInput(lastName, validNameRegex)){
        return { error: "Last Name must contain only alphabetic characters. E.g: Doe" };
    }

    if(!validateInput(senderEmail, validEmailRegex)){
        return { error: "Please enter a valid email. E.g:john.doe@gmail.com" };
    }
    
    if(!validateInput(phone, validNumbersRegex)){
        return { error: "Phone must be a number. E.g: 1123456789" };
    }

    if(!validateEqLengthString(phone, 10)){
        return { error: "Phone must be 10 characters. E.g: 1123456789" };
    }

    if(!validateMinString(message, 5)){
        return { error: "Message must be at least 5 characters" };
    }

    if(!validateMaxString(message, 280)){
        return { error: "Message must be less than 280 characters" };
    }
    
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
    });
};
