import { z } from 'zod';

const validFirstNameRegex = /^[A-Za-z\s]+$/;

export const userContactSchema = z.object({
    firstName: z
        .string()
        .min(3, { message: "First Name must be at least 3 characters"})
        .max(120, { message: "First Name must be less than 120 characters"})
        .refine(firstName => validFirstNameRegex.test(firstName), {
            message: "First Name must contain only alphabetic characters. E.g: John"
        }),
    lastName: z
        .string()
        .min(3, { message: "Last Name must be at least 3 characters"})
        .max(120, { message: "Last Name must be less than 120 characters"})
        .refine(lastName => validFirstNameRegex.test(lastName), {
            message: "Last Name must contain only alphabetic characters. E.g: Doe"
        }),
    email: z.string().email({message: "Please enter a valid email. E.g:john.doe@gmail.com"}),
    phone: z.string().refine(phone => !isNaN(parseInt(phone)), {
        message: 'Phone must be a number. E.g: 1123456789'
    }),
    message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters"})
    .max(120, { message: "Message Name must be less than 280 characters"}),
}).refine(data => data.phone.length === 10, {
    message: "Phone must be 10 characters. E.g: 1123456789",
    path: ["phone"]
});





