import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{tsx,css}"
  ],
  theme: {
    extend: {
      screens: {
        mobile: "490px",
        tabletS: "600px",
        tabletM: "768px",
        tabletL: "900px",
        tablet: "1040px",
        desktopM:"1300px",
        desktop: "1620px"
      },
      aspectRatio: {
        '40/45': '40 / 45'
      },
      fontFamily: {
        'dream-avenue': ['dream_avenueregular', 'sans-serif'],
        'lora': ['lorabold_italic', 'sans-serif']
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        green: "#5EDC11",
        yellow: "#FFCE22",
        orange: "#FF7222",
        pink: "#FF22E9",
        blue: "#2260FF",
        purple: {
          DEFAULT: "#5700FF",
          100:"#FCFAFF",
          200:"#F5F00FF",
          300:"#EEE5FF",
          400:"#DECFFC",
          500:"#BC99FF",
          600:"#9A66FF",
          700:"#7833FF",
        },
        brown: {
          DEFAULT: "#C5AB9B",
          700: "#B27947"  
        }, 
        peach: {
          DEFAULT: "#E1DBD1",
          100:"#FDFDFC",
          200:"#FBFAF9",
          300:"#F9F8F6",
          400:"#F7F6F3",
          500:"#F5F3F0",
          600:"#DFD3CA",
          700:"#EBE7E0",
        },
        grey: {
          DEFAULT: "#1A1A1A",
          100:"#CCCCCC",
          200:"#B3B3B3",
          300:"#999999",
          400:"#808080",
          500:"#666666",
          600:"#4D4D4D",
          700:"#333333",
        }
      },
      backgroundImage: {
        "@gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "@gradient-comic": "comic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
    }
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
