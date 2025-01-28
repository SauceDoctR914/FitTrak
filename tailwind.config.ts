import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    './node_modules/@nuxt/ui/dist/**/*.{mjs,js,vue}',  
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--color-primary-50) / <alpha-value>)",
          100: "rgb(var(--color-primary-100) / <alpha-value>)",
          200: "rgb(var(--color-primary-200) / <alpha-value>)",
          300: "rgb(var(--color-primary-300) / <alpha-value>)",
          400: "rgb(var(--color-primary-400) / <alpha-value>)",
          500: "rgb(var(--color-primary-500) / <alpha-value>)",
          600: "rgb(var(--color-primary-600) / <alpha-value>)",
          700: "rgb(var(--color-primary-700) / <alpha-value>)",
          800: "rgb(var(--color-primary-800) / <alpha-value>)",
          900: "rgb(var(--color-primary-900) / <alpha-value>)",
          950: "rgb(var(--color-primary-950) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-primary-500) / <alpha-value>)"
        },
        secondary: {
          50: "rgb(var(--color-secondary-50) / <alpha-value>)",
          100: "rgb(var(--color-secondary-100) / <alpha-value>)",
          200: "rgb(var(--color-secondary-200) / <alpha-value>)",
          300: "rgb(var(--color-secondary-300) / <alpha-value>)",
          400: "rgb(var(--color-secondary-400) / <alpha-value>)",
          500: "rgb(var(--color-secondary-500) / <alpha-value>)",
          600: "rgb(var(--color-secondary-600) / <alpha-value>)",
          700: "rgb(var(--color-secondary-700) / <alpha-value>)",
          800: "rgb(var(--color-secondary-800) / <alpha-value>)",
          900: "rgb(var(--color-secondary-900) / <alpha-value>)",
          950: "rgb(var(--color-secondary-950) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-secondary-500) / <alpha-value>)"
        },
        midnight: {
          50: "rgb(var(--color-midnight-50) / <alpha-value>)",
          100: "rgb(var(--color-midnight-100) / <alpha-value>)",
          200: "rgb(var(--color-midnight-200) / <alpha-value>)",
          300: "rgb(var(--color-midnight-300) / <alpha-value>)",
          400: "rgb(var(--color-midnight-400) / <alpha-value>)",
          500: "rgb(var(--color-midnight-500) / <alpha-value>)",
          600: "rgb(var(--color-midnight-600) / <alpha-value>)",
          700: "rgb(var(--color-midnight-700) / <alpha-value>)",
          800: "rgb(var(--color-midnight-800) / <alpha-value>)",
          900: "rgb(var(--color-midnight-900) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-midnight-50) / <alpha-value>)"
        }
      },
      backgroundImage: {
        'gradient-card': 'linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(59, 130, 246, 0.9))',
        'gradient-card-light': 'linear-gradient(135deg, rgba(139, 92, 246, 0.7), rgba(59, 130, 246, 0.7))',
        'gradient-card-soft': 'linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(59, 130, 246, 0.5))',
      }
    },
  },
}

export default config;