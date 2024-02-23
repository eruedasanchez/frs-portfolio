import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const socialLinks = [
    {
        id: 1,
        label: "Facebook",
        icon: Facebook,
        url: "https://www.facebook.com/"
    },
    {
        id: 2,
        label: "Linkedin",
        icon: Linkedin,
        url: "https://www.linkedin.com/"
    },
    {
        id: 3,
        label: "Twitter",
        icon: Twitter,
        url: "https://twitter.com/"
    },
];

export const portfolios = [
    {
        id: 1,
        title: "Buenos Aires Bus - BA",
        link: "#",
        images: [
            "/ba-bus-1.jpg",
            "/ba-bus-2.jpg",
            "/ba-bus-3.jpg"
        ]
    },
    {
        id: 2,
        title: "Sturla Viajes - BA",
        link: "#",
        images: [
            "/delta-1.jpg",
            "/delta-2.jpg",
            "/delta-3.jpeg"
        ]
    },
    {
        id: 3,
        title: "Wine Route - Mendoza",
        link: "#",
        images: [
            "/wine-tour-1.jpg",
            "/wine-tour-2.png",
            "/wine-tour-3.jpg",
        ]
    },
    {
        id: 4,
        title: "Circuito Chico - Bariloche",
        link: "#",
        images: [
            "/bariloche-1.jpg",
            "/bariloche-2.jpeg",
            "/bariloche-3.jpeg",
        ]
    },
    {
        id: 5,
        title: "Iguazu Falls - Misiones",
        link: "#",
        images: [
            "/cataratas-1.jpg",
            "/cataratas-2.jpg",
            "/cataratas-3.jpg",
        ]
    },
    {
        id: 6,
        title: "Purmamarca - Jujuy",
        link: "#",
        images: [
            "/purmamarca-1.jpg",
            "/purmamarca-2.jpeg",
            "/purmamarca-3.jpeg"
        ]
    },
    {
        id: 7,
        title: "Perito Moreno Glacier - Santa Cruz",
        link: "#",
        images: [
            "/perito-moreno-1.jpg",
            "/perito-moreno-2.jpeg",
            "/perito-moreno-3.jpg"
        ]
    },
    {
        id: 8,
        title: "City of Oslo - Norway",
        link: "#",
        images: [
            "/oslo-1.jpg",
            "/oslo-2.jpg",
            "/oslo-3.jpg"
        ]
    },
    {
        id: 9,
        title: "Amsterdam -  Netherlands",
        link: "#",
        images: [
            "/amstherdam-1.jpg",
            "/amstherdam-2.jpg",
            "/amstherdam-3.jpg"
        ]
    }
];

export const reviews = [
    {
        id: 1,
        stars: 5,
        socialLinks: [
            {
                id: 1,
                icon: Facebook,
                url: "#"
            },
            {
                id: 2,
                icon: Linkedin,
                url: "#"
            },
            {
                id: 3,
                icon: Twitter,
                url: "#"
            }
        ],
    },
    {
        id: 2,
        stars: 3,
        socialLinks: [
            {
                id: 1,
                icon: Facebook,
                url: "https://www.facebook.com"
            },
            {
                id: 2,
                icon: Linkedin,
                url: "https://www.linkedin.com/",
            },
            {
                id: 3,
                icon: Twitter,
                url: "https://twitter.com/",
            }
        ]
    },
    {
        id: 3,
        stars: 5,
        socialLinks: [
            {
                id: 1,
                icon: Facebook,
                url: "#"
            },
            {
                id: 2,
                icon: Linkedin,
                url: "#"
            },
            {
                id: 3,
                icon: Twitter,
                url: "#"
            }
        ]
    },
    {
        id: 4,
        stars: 4,
        socialLinks: [
            {
                id: 1,
                icon: Facebook,
                url: "#"
            },
            {
                id: 2,
                icon: Linkedin,
                url: "#",
            },
            {
                id: 3,
                icon: Twitter,
                url: "#",
            }
        ]
    },
    {
        id: 5,
        stars: 4,
        socialLinks: [
            {
                id: 1,
                icon: Facebook,
                url: "#"
            },
            {
                id: 2,
                icon: Linkedin,
                url: "#"
            },
            {
                id: 3,
                icon: Twitter,
                url: "#"
            }
        ]
    }
];







export const contactDetails = [
    {
        id: 1,
        icon: Phone,
        text: "+47 486 73497"
    },
    {
        id: 2,
        icon: Mail,
        text: "florencia.rs@gmail.com"
    },
    {
        id: 3,
        icon: MapPin,
        text: "Oslo, Norway"
    }
];


export const contactData = [
    {
        id: 1,
        title: "You can email me here",
        contact: "florencia.rs@gmail.com"
    },
    {
        id: 2,
        title: "Gime me a call",
        contact: "+47 486 73497"
    },
    {
        id: 3,
        title: "Location",
        contact: "Oslo, Norway"
    },
    
];

export const languages = [
    {
        title: "English",
        flag: "/uk.png",
        isoCode: "en"
    },
    {
        title: "Spanish",
        flag: "/spanish.png",
        isoCode: "es"
    },
    {
        title: "Norge",
        flag: "/norge.png",
        isoCode: "no"
    }
]

export const keys = {
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    ESC: 'Escape'
}

