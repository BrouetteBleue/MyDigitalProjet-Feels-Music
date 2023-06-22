import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/oui/Desktop/CODE/MyDigitalProject-Feels-Music-FrontEnd/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}