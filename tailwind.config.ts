import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeInx: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeOut: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeOutx: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeInx: "fadeInx 0.5s ease-in-out",
        fadeOut: "fadeOut 0.9s ease-in-out",
        fadeOutx: "fadeOutx 0.5s ease-in-out",
      },
      colors: {
        primary: "#F3ECF5",
        success: "#6C247F",
        secndary: "#00B0F0",
        customBlue: {
          50: '#7D007E'
        }
      },
    },
    backgroundImage: {
      hero: "url('/banar/11.svg')",
      partner: "url('/partner/02.svg')",
      service: "url('/partner/02.svg')",
      customer: "url('/banar/14.svg')",
    },
  },
  plugins: [],
} satisfies Config;
