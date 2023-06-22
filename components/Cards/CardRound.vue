<template lang="">
    <div class="flex flex-col justify-center items-center">
        <nuxt-link :to="`/beatmakers/${beatmaker.pseudo}`">
            <img class="rounded-full w-[170px] h-[170px] lg:w-[270px] lg:h-[270px]" src="@/assets/img/HARO536707.jpg" alt="">
        </nuxt-link>
        
        <nuxt-link :to="`/beatmakers/${beatmaker.pseudo}`">
            <div class="text-xl lg:text-2xl text-center font-semibold mt-4">
            {{ beatmaker.pseudo }}
            </div>
            <div class="flex flex-col items-center justify-center mt-2"> 
                <nuxt-link :to="`/beatmakers/${beatmaker.pseudo}`">
                    {{ beatmaker.country }}, {{ beatmaker.peudo }}
                </nuxt-link>
                <div v-if="CardType == 'beatmaker'" class="">
                    {{ beatmaker.productionsCount }} tracks
                </div>
            </div>
        </nuxt-link>
        
    </div>
</template>

<script setup>

    defineProps({
        beatmaker: {
            type: Object,
            required: true
        },
        CardType: {
            type: String,
            default: 'normal'
        },
    })




</script>
<style lang="">
    
</style>