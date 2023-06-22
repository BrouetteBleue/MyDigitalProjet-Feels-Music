<script setup>

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


</script>

<template lang="">
    <nuxt-link class="w-[48%]" :to="`/prods/${production.id}`">
        <div class="flex flex-col items-start w-full">
                <img class="rounded-2xl w-full py-1" src="@/assets/img/HARO536707.jpg" alt=""> 
                <div class="flex flex-row justify-between items-center w-full">
                    <div class="flex flex-col">
                        <div class="text-sm font-semibold mt-2">
                            {{ production.title }}
                        </div>
                        <div class="text-sm font-normal text-white">
                            <nuxt-link :to="`/beatmakers/${beatmaker.pseudo}`">
                                {{ beatmaker.pseudo }}
                            </nuxt-link>
                        </div>
                        <div class="text-sm font-normal text-[#F49743]">
                            {{ production.price }} €
                        </div>
                    </div> 
                    <div class="text-[#F49743]" v-if="CardType == 'like'">
                        <IconsHeartFilled class="w-[2em] h-[2em]"/>
                    </div>
                </div>
                
            </div> 
    </nuxt-link>
    
</template>

