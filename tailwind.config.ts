import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // AI Pulse Brand Colors
        "brand-cyan": "hsl(var(--brand-cyan))",
        "brand-purple": "hsl(var(--brand-purple))",
        "brand-navy": "hsl(var(--brand-navy))",
      },
      backgroundImage: {
        "gradient-pulse": "var(--gradient-pulse)",
        "gradient-tech": "var(--gradient-tech)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "pulse-ring": {
          "0%": {
            transform: "scale(0.33)",
            opacity: "1",
          },
          "80%, 100%": {
            transform: "scale(1.8)",
            opacity: "0",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(var(--brand-cyan) / 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px hsl(var(--brand-cyan) / 0.6)",
          },
        },
        "slide-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "glow-cyan": {
          "0%": {
            boxShadow: "0 0 20px hsl(var(--brand-cyan) / 0.3)",
            transform: "scale(1)",
          },
          "100%": {
            boxShadow: "0 0 40px hsl(var(--brand-cyan) / 0.6)",
            transform: "scale(1.05)",
          },
        },
        "glow-purple": {
          "0%": {
            boxShadow: "0 0 20px hsl(var(--brand-purple) / 0.3)",
            transform: "scale(1)",
          },
          "100%": {
            boxShadow: "0 0 40px hsl(var(--brand-purple) / 0.6)",
            transform: "scale(1.05)",
          },
        },
        "shooting-star": {
          "0%": {
            transform: "translateX(-100px) translateY(-100px)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100px) translateY(100px)",
            opacity: "0",
          },
        },
        "color-shift": {
          "0%": { color: "hsl(var(--brand-cyan))" },
          "25%": { color: "hsl(var(--brand-purple))" },
          "50%": { color: "hsl(var(--brand-cyan))" },
          "75%": { color: "hsl(var(--brand-purple))" },
          "100%": { color: "hsl(var(--brand-cyan))" },
        },
        "float-rotate": {
          "0%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "33%": {
            transform: "translateY(-10px) rotate(120deg)",
          },
          "66%": {
            transform: "translateY(5px) rotate(240deg)",
          },
          "100%": {
            transform: "translateY(0px) rotate(360deg)",
          },
        },
        "interactive-pulse": {
          "0%": {
            boxShadow: "0 0 0 0 hsl(var(--brand-cyan) / 0.4)",
          },
          "70%": {
            boxShadow: "0 0 0 20px hsl(var(--brand-cyan) / 0)",
          },
          "100%": {
            boxShadow: "0 0 0 0 hsl(var(--brand-cyan) / 0)",
          },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-up": "slide-up 0.6s ease-out",
        "glow-cyan": "glow-cyan 2s ease-in-out infinite alternate",
        "glow-purple": "glow-purple 2s ease-in-out infinite alternate",
        "shooting-star": "shooting-star 3s ease-in-out infinite",
        "color-shift": "color-shift 4s ease-in-out infinite",
        "float-rotate": "float-rotate 4s ease-in-out infinite",
        "interactive-pulse": "interactive-pulse 2s infinite",
        "gradient-shift": "gradient-shift 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
