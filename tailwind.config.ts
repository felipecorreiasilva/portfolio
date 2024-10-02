import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  			fontTitleHero: ["Playful Delight","sans-serif"],
  			fontOswald: ["Oswald","sans-serif"],
  		},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          '950': '#04030f',
  				'900': '#060514',
  				'800': '#08071a',
        }
      },
    },
  },
  plugins: [],
};
export default config;
