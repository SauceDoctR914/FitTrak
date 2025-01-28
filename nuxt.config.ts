// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-22',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/supabase',
    '@vueuse/nuxt',
  ],
  css: ["./assets/scss/app.scss"],
  colorMode: {
    classSuffix: ''
  },
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons'],
    colors: ['primary'],
    // colors: {
      // primary: 'rgba(var(--color-primary), 1)'
      //  {
      //   DEFAULT: "#8b5cf6",
      //   50: "#f5f3ff",
      //   100: "#ede9fe",
      //   200: "#ddd6fe",
      //   300: "#c4b5fd",
      //   400: "#a78bfa",
      //   500: "#8b5cf6",
      //   600: "#7c3aed",
      //   700: "#6d28d9",
      //   800: "#5b21b6",
      //   900: "#4c1d95",
      //   950: "#2e1065"
      // }
    // },

    button: {
      default: {
        color: 'gray',
        variant: 'ghost',
        rounded: 'rounded-md',
      },
    },
    input: {
      default: {
        color: 'primary', // Use primary color here
        variant: 'outline',
      },
    },
  },
  supabase: {
    redirectOptions: {
      // login: '/',
      // callback: '/confirm',
    }
  },
  alias: {
    "~": ".",
    "@": ".",
    "~~": "/",
    "@@": "/",
    "@components": "/components",
    "@stores": "/stores",
    "@composables": "/composables",
    "#tailwind-config": "./tailwind.config",
  },
  typescript: {
    shim: false
  },
  tailwindcss: {
    viewer: false,
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: true,
    config: {
      important: true, // This might help override any conflicting styles
    }
  },
})