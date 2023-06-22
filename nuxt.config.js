// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
    alias: {
       assets: "/<rootDir>/assets",
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    nitro: {
        prerender: {
        crawlLinks: true
        }
    },
    publicRuntimeConfig: {
        API_BASE_URL: process.env.API_BASE_URL
    },
    

})
