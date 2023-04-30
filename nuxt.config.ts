// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
    alias: {
        '@': resolve(__dirname, './src'),
    },

    modules: [
        '@nuxtjs/tailwindcss',
    ],
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

})
