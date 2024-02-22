import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const navLinks = [
    {
        id: 1,
        label: "Home",
        url: "/"
    },
    {
        id: 2,
        label: "About",
        url: "/about"
    },
    {
        id: 3,
        label: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 4,
        label: "Contact",
        url: "/contact"
    }
];


// el arreglo skils no lo voy a usar mas al parecer
export const skills = [
    {
        id: 1,
        name: "Destination Knowledge",
        description: "In-depth knowledge about tourist places, history, culture, gastronomy and other relevant aspects of the destinations you guide.",
        icon: "/service-1.svg"
    },
    {
        id: 2,
        name: "Knowledge of tourism standards and regulations",
        description: "Solid knowledge of local tourism standards and regulations to ensure compliance with laws and safety standards.",
        icon: "/service-2.svg"
    },
    {
        id: 3,
        name: "Communication Skills",
        description: "Excellent communication, able to convey information in a clear, interesting and engaging way to people from different cultures and backgrounds.",
        icon: "/service-3.svg"
    },
    {
        id: 4,
        name: "Tourist photography",
        description: "Skills such as framing, composition, light management and basic technical knowledge of photography to obtain impressive images that tourists can take with them as a souvenir of their experience.",
        icon: "/service-4.svg",
    },
    {
        id: 5,  
        name: "Languages",
        description: "Skills in several languages ​​such as Spanish, English, Portuguese and Italian to communicate with international tourists.",
        icon: "/service-5.svg"
    },
    {
        id: 6,
        name: "Orienteering and Navigation",
        description: "Strong orientation and navigation skills to guide tourists safely and efficiently through unfamiliar destinations.",
        icon: "/service-6.svg"
    }
];


// el arreglo benefits no lo voy a usar mas al parecer
export const benefits = [
    {
        id: 1,
        name: "Local knowledge",
        description: "I have deep knowledge about the destinations you visited. I can provide detailed information about local history, culture, cuisine and points of interest that tourists may not otherwise know about.",
    },
    {
        id: 2,
        name: "Personalized experience",
        description: "I can adapt the tours according to the specific interests and needs of tourists. Additionally, I offer personalized recommendations and suggestions on what to see and do based on individual interests.",
    },
    {
        id: 3,
        name: "Privileged access",
        description: "I have privileged access to certain places and activities that may not be available to the general public. This may include access to historical sites, exclusive events or unique experiences that enrich the tourist's visit."
    },
    {
        id: 4,
        name: "Mobile-Optimized Coding for Widespread Accessibility",
        description: "In today's mobile-driven landscape, a responsive website is essential. I specialize in coding mobile-friendly designs that seamlessly adapt to various devices and screen sizes. Your website will maintain its appearance and functionality across desktops, smartphones, and tablets, allowing you to reach and engage your audience effectively."
    },
    {
        id: 5,
        name: "Safety and Comfort",
        description: "Provide a safe and comfortable environment for tourists when navigating unknown destinations. They know safe areas and I help them avoid potentially dangerous situations."
    }
];


// este si lo uso solo cambiar los titles 
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

export const faqs = [
    {
        id: 1,
        question: "What sets me apart as a tour guide?",
        answer: "As a tour guide, what sets me apart is my personalized approach and commitment to creating authentic and memorable experiences for each of my clients. Not only do I provide detailed information about the destinations we visit, but I also strive to connect with each individual, tailoring the tour based on their specific interests and needs."
    },
    {
        id: 2,
        question: "What type of tours or experiences do I offer?",
        answer: "I offer a wide range of tours and experiences designed to meet the interests and preferences of diverse travelers. From cultural tours that explore the region's rich history and heritage to exciting outdoor excursions that allow visitors to enjoy nature at its best, I aim to provide options to suit all tastes. Additionally, I offer food tours that allow travelers to discover the authentic flavors of the region and themed tours that explore specific topics such as urban art, architecture or local folklore. Whether you prefer to explore on foot, by bicycle, by private vehicle or more adventurously, I have options to meet the needs of all travelers and make your experience unforgettable."
    },
    {
        id: 3,
        question: "How do I prepare for each tour?",
        answer: "For each tour, I immerse myself in extensive research to ensure that I am fully prepared and can deliver an exceptional experience to my clients. This involves studying the history, culture and points of interest of the destination, as well as staying up to date with the latest news and relevant local events. I carefully plan the tour route, selecting the most notable locations and designing an itinerary that maximizes my clients' time and gives them a complete view of the destination. Additionally, I coordinate any necessary logistics, such as transportation and entry reservations, to ensure a smooth and seamless experience."
    },
    {
        id: 4,
        question: "What expectation do I have for my clients at the end of each tour?",
        answer: "At the end of each tour, my main expectation is that my clients leave with deep satisfaction and enrichment. I wish that you not only enjoyed a memorable experience, but also gained a deeper and more meaningful understanding of the destination you have explored. I aspire for my clients to feel inspired, excited and connected to the culture, history and beauty of the place they have visited."
    },
    {
        id: 5,
        question: "How do I stay up to date with trends and news in the tourism industry?",
        answer: " To stay up to date with trends and developments in the tourism industry, I regularly dedicate time to research, study and participation in relevant events such as participation in tourism conferences and seminars to stay abreast of the latest trends, best practices and developments. in the industry, reading books, magazines and specialized publications on tourism to obtain information about new destinations, popular tourist activities and changes in traveler preferences added to the monitoring digital media such as blogs, websites and social networks related to tourism to be aware of news, events and opinions of experts in the industry."
    }
];

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

// este arreglo no lo voy a usar mas 
export const timeline = [
    {
        id: 1,
        title: "Tourist Guide - Oslo, Norway",
        duration: "2020 - Present",
        description: "Planning, organization of private tours and guided visits to the notable places of the Norwegian capital such as the Folk Museum, the Viking Museum and the Royal Palace of Oslo."
    },
    {
        id: 2,
        title: "Tourist Guide - Buenos Aires Bus",
        duration: "2015 - 2020",
        description: "Tourist bus that runs through the most emblematic neighborhoods of the city of Buenos Aires with panoramic views to appreciate historical places, cultural spaces and unique neighborhoods full of Argentine culture."
    },
    {
        id: 3,
        title: "Tourist Guide - Sturla Viajes",
        duration: "2013 - 2015",
        description: "River passenger transportation in Delta. Coordination, attention and administration of operational and satellite navigation systems in the units, providing us with immediate information about the location, speed and itinerary."
    },
    {
        id: 4,
        title: "Degree in Tourism - University of Moron",
        duration: "2010 - 2013",
        description: "Internships and professional practices applying knowledge in real work environments and acquiring practical experience in the tourism industry."
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

