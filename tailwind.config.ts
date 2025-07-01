import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Primary font for body text - clean, modern, excellent readability
        inter: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        // Elegant serif font for headings - sophisticated, charming
        playfair: [
          "var(--font-playfair)",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
        // Alternative sans-serif - friendly, modern, versatile
        poppins: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
        // Monospace font for code - elegant, readable
        jetbrains: [
          "var(--font-jetbrains)",
          "JetBrains Mono",
          "Fira Code",
          "monospace",
        ],
      },
      colors: {
        // Custom green theme colors
        primary: {
          DEFAULT: "rgb(46, 213, 115)",
          light: "rgba(46, 213, 116, 0.36)",
          pattern: "rgba(46, 213, 116, 0.073)",
        },
        // CSS variables for theme switching
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      animation: {
        // Custom animations for portfolio
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-down": "slideDown 0.8s ease-out",
        "slide-left": "slideLeft 0.8s ease-out",
        "slide-right": "slideRight 0.8s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "bounce-gentle": "bounceGentle 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      spacing: {
        // Custom spacing for portfolio layout
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      screens: {
        // Custom breakpoints for better responsive design
        xs: "475px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
