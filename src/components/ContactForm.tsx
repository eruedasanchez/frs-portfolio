'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userContactSchema } from "@/validations/userContactSchema";
import { sendEmail } from "@/actions/sendEmail";
import { Toaster, toast } from "sonner";
import { ContactFormProps } from "@/types/types";

type Inputs = {
    firstName: string, 
    lastName: string, 
    email: string, 
    phone: string,
    message: string
};

const ContactForm = ({ sendButton, contactFormPlaceholders } : ContactFormProps) => {
    const { register, handleSubmit, formState: {errors}} = useForm<Inputs>({
        resolver: zodResolver(userContactSchema)
    });
    
    const onSubmit = async (formData: Inputs) => {
        if (Object.keys(errors).length === 0) {
            try {
                const formDataToSend = new FormData();
                Object.entries(formData).forEach(([key, value]) => {
                    formDataToSend.append(key,value);
                });
                
                await sendEmail(formDataToSend);
            } catch (error) {
                console.error("Error al enviar el email:", error);
            }
        } 
    };
    
    return (
        <div className="box w-full">
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-2 max-tablet:flex-col">
                    <div className="w-full mb-2">
                        <input 
                            type="text" 
                            placeholder={contactFormPlaceholders.firstName}
                            {...register('firstName')}
                            className={`${errors.firstName?.message && 'w-full border-2 border-red-400 bg-red-200'}`}
                            
                        />
                        {
                            errors.firstName?.message && <p className="text-sm text-red-600 px-1 mt-1">{errors.firstName?.message}</p>
                        }
                    </div>
                    <div className="w-full mb-2 max-tablet:mb-4">
                        <input 
                            type="text" 
                            placeholder={contactFormPlaceholders.lastName}
                            {...register('lastName')}
                            className={`${errors.lastName?.message && 'border-2 border-red-400 bg-red-200'}`}
                        />
                        {
                            errors.lastName?.message && <p className="text-sm text-red-600 px-1 mt-1">{errors.lastName?.message}</p>
                        }
                    </div>
                </div>
                <div className="flex gap-2 max-tablet:flex-col">
                    <div className="w-full mb-2"> 
                        <input 
                            type="email" 
                            placeholder={contactFormPlaceholders.email}
                            {...register('email')}
                            className={`${errors.email?.message && 'border-2 border-red-400 bg-red-200'}`}
                        />
                        {
                            errors.email?.message && <p className="text-sm text-red-600 px-1 mt-1">{errors.email?.message}</p>
                        }
                    </div>
                    
                    <div className="w-full mb-2 max-tablet:mb-4">
                        <input 
                            type="text" 
                            placeholder={contactFormPlaceholders.phone}
                            {...register('phone')}
                            className={`${errors.phone?.message && 'border-2 border-red-400 bg-red-200'}`}
                        />
                        {
                            errors.phone?.message && <p className="text-sm text-red-600 px-1 mt-1">{errors.phone?.message}</p>
                        }
                    </div>
                </div>
                <textarea 
                    placeholder={contactFormPlaceholders.message} 
                    {...register('message')}
                    className={`min-h-[200px] mb-2 ${errors.message?.message && 'border-2 border-red-400 bg-red-200'}`}
                ></textarea>
                {
                    errors.message?.message && <p className="text-sm text-red-600 px-1 mt-1">{errors.message?.message}</p>
                }
                <button 
                        type="submit" 
                        className="btn bg-peach border border-brown-700 text-brown-700  
                        hover:text-peach-100 hover:bg-brown-700 hover:scale-110 transition-all duration-300"
                        onClick={
                            () => {
                                toast.promise(handleSubmit(onSubmit), {
                                    error: "An error has occurred. Please, verify the fields",
                                    success: 'Email was sent successfully!',
                                    loading: "Sending email..."
                                })
                            }
                        }
                >{sendButton}</button>
                {
                    (Object.keys(errors).length === 0) &&
                    <Toaster theme="system" visibleToasts={1} closeButton richColors/> 
                }
            </form>
        </div>
    );
}

export default ContactForm;



    