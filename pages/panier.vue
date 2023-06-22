<template>
    <div class="flex flex-col w-full justify-center items-center my-5 lg:my-20">
        <div class="flex flex-col w-10/12 lg:w-8/12 items-center justify-center">
            <div class="flex flex-row justify-start w-full mb-5 lg:mb-10 ">
                <h1 class="text-[#9E9E9E] text-xl lg:text-3xl font-extrabold">Panier</h1>
            </div>

            <div class="w-full" v-if="!emptyCart">
                <div class="flex flex-col w-full">
                    <CardsCardPanier v-for="item in cartStore.Cart" :production=item :key="item.id" class="mb-10"/>
                </div>

                <div class="w-full text-xl text-end text-[#F49C4D]">
                    TOTAL: {{ cartStore.total }} €
                </div>
                <div class="flex flex-row justify-end w-full">
                    <div>
                        <input type="checkbox" name="cvg" class="mr-5">
                    </div>
                    J'accepte les conditions générales de vente et d'utilisation
                </div>

                <div class="w-full text-end">
                    <button class="bg-[#FFDF00] rounded-lg text-black p-3">
                        Payer avec paypal
                    </button>
                </div>
            </div>

            <div v-else class="min-h-[310px]">
                Votre panier est vide pour le moment.
            </div>
            


        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();

const emptyCart = ref(false)

if (cartStore.Cart.length == 0) {
    emptyCart.value = true
}



</script>