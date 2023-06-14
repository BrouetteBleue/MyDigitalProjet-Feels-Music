import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "auth" | "default"
declare module "C:/Users/oui/Desktop/CODE/MyDigitalProject-Feels-Music-FrontEnd/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}