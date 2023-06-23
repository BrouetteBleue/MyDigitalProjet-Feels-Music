<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();

    const props = defineProps({
        CardType: {
            type: String,
            default: 'normal'
        },
        production: {
            type: Object,
            required: true
        },
        beatmaker: {
            type: Object,
            required: true
        }
    })

    const isLiked = ref(props.production.isLiked);

    const handleLike = () => {
        const url = "http://localhost:3001/";
        // const url =  "https://feelsmusic.fr/api/";
        $fetch(url + 'like', { 
            method: "POST",
            headers: {
                Accept: 'application/json',
                Authorization: `${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                production: props.production.id
            }),
        })
        .then((response) => {
            if (response.status === 201) {
                isLiked.value = true;
            } else if (response.status === 200) {
                isLiked.value = false;
            }
        })
        .catch((error) => {
            console.error('An error occurred while liking the production', error);
        });
        }

</script>

<template lang="">
    <nuxt-link :to="`/prods/${production.id}`">
        <div class="flex flex-row justify-between h-[100px] mb-5 rounded-[0.75rem] border-[1px] border-[#404040] bg-[#292929] pl-4 pr-8 py-2">
            <div class="flex flex-row items-center w-[50%]">
                <img class="rounded-2xl w-[13%] h-[100%] mr-5 py-1" src="@/assets/img/HARO536707.jpg" alt=""> 
                <div class="flex flex-col">
                    <div class="text-2xl font-semibold mt-2">
                        {{ production.title }}
                    </div>
                    <div class="text-xl font-normal text-orange-400">
                        <nuxt-link :to="`/beatmakers/${beatmaker.pseudo}`">
                            {{ beatmaker.country }}, {{ beatmaker.pseudo }}
                        </nuxt-link>
                    </div>
                </div> 
            </div> 
            <div class="flex flex-row justify-end items-center mt-2 w-6/12" v-if="props.CardType !== 'like'">
                <div class="flex flex-row">
                    <ButtonsCategoryBtn :text="production.style" class="mr-5 py-1"/>
                    <ButtonsCategoryBtn :text="production.category" class="py-1"/>
                </div>
                
                

                <div class="flex flex-row" v-if="props.CardType == 'normal'">
                    <button @click.prevent="handleLike">
                        <IconsHeart class="mx-10" v-if="!isLiked"/> <IconsHeartFilled class="mx-10 text-[#F49743] w-[2em] h-[2em]" v-else/>
                    </button>
                    <button @click.prevent="cartStore.addItem(production)">
                        <ButtonsAddToCartBtn :text="production.price + ' €'" iconName="Cart" /> 
                    </button>
                    
                </div>

                <div class="flex flex-row"  v-else-if="props.CardType == 'commande'">
                    <button @click.prevent="handleLike">
                        <IconsHeart class="mx-10" v-if="!isLiked"/> <IconsHeartFilled class="mx-10 text-[#F49743] w-[2em] h-[2em]" v-else/>
                    </button>
                </div>


                <div class="flex flex-row" v-else-if="props.CardType == 'profil'">
                    <button @click.prevent="handleLike">
                        <IconsHeart class="mx-5" v-if="!isLiked"/> <IconsHeartFilled class="mx-5 text-[#F49743] w-[2em] h-[2em]" v-else/>
                    </button>
                    <nuxt-link :to="`profile/prods/${production.id}`">
                        <IconsPen class="mx-5 w-[2.3em] h-[2.3em] text-[#9E9E9E]" />
                    </nuxt-link>
                    <button>
                        <IconsTrash class="mx-5 w-[2.3em] h-[2.3em] text-[#9E9E9E]"/>
                    </button>
                </div>
                
            </div>

            <div class="flex flex-row justify-end items-center mt-2 w-6/12" v-else>
                <IconsHeartFilled class="w-[2.5em] h-[2.5em] text-orange-400" />
            </div>

        </div>
    </nuxt-link>
    
</template>

<style lang=""> 
    
</style>
