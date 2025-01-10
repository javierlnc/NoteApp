import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'orange' : "#ff7d1a",
        'palo-orange':"#ffede0",
        'dark-blue':"#1d2025",
        'dark-grayish': '#68707d',
        'grayish': '#b6bcc8',
        'light-grayish':'#f7f8fd',
        'white': '#ffffff',
        'black': '#000000',
      },
    },
  },

  plugins: [],
} satisfies Config;
