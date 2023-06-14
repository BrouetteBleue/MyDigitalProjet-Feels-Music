<template lang="">
    <div class="flex flex-col justify-center items-center">
        <nuxt-link :to="`/beatmakers/${idBeatmaker}`">
            <img class="rounded-full w-[170px] h-[170px] lg:w-[270px] lg:h-[270px]" src="@/assets/img/HARO536707.jpg" alt="">
        </nuxt-link>
        
        <nuxt-link :to="`/beatmakers/${idBeatmaker}`">
            <div class="text-xl lg:text-2xl text-center font-semibold mt-4">
            Ben Jones Beats
            </div>
            <div class="flex flex-col items-center justify-center mt-2"> 
                <nuxt-link :to="`/beatmakers/${idBeatmaker}`">
                    UK, @Utilisateur
                </nuxt-link>
                <div v-if="Beatmaker == true" class="">
                    25 tracks
                </div>
            </div>
        </nuxt-link>
        
    </div>
</template>

<script setup>

    defineProps({
        Beatmaker: {
            type: Boolean,
            default: false
        },
        idBeatmaker: {
            type: Number,
            required: true
        }
    })




</script>
<style lang="">
    
</style>