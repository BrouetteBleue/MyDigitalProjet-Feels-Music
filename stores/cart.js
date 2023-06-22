import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        items: [],
    }),
    getters: {
        totalItems() {
            return this.items.length;
        },
        Cart() {
            return this.items

        },
        total() {
            return parseFloat(this.items.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2));
        }
    },
    actions: {
        addItem(production) {
            this.items.push(production);
          },
            removeItem(production) {
                this.items.splice(production, 1);
            }
    },
    persist: true
});
