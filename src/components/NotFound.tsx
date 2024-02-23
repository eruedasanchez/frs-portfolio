import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Lora } from 'next/font/google';

const lora = Lora({ subsets: ["latin"] });

const NotFound = () => {
    return (
        <div className={`${lora.className} flex flex-col justify-center items-center gap-4 h-screen`}>
            <div className="relative w-[150px] h-[150px]">
                <Image
                    src={"/dachshund.png"}
                    alt='logo-dachshund'
                    fill
                    priority
                />
            </div>
            <h1 className="text-8xl text-grey dark:text-brown-700 pulse">404</h1>
            <p className="text-xl text-grey-600 dark:text-peach-500 mb-4">Oops! Page Not Found</p>
            <Link 
                href="/"
                className="btn btn-primary 
                hover:bg-peach-500 hover:text-brown-700 hover:border hover:border-brown-700 
                hover:scale-105 transition-all duration-700
                dark:bg-brown-700 dark:hover:text-brown-700 dark:hover:bg-peach-500"
            >
                Go back to Home
            </Link>
        </div> 
    )
}

export default NotFound;