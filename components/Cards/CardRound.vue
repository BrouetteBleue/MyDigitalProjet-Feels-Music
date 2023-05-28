<template lang="">
    <div>
        <nuxt-link :to="`/beatmakers/${idBeatmaker}`">
            <img class="rounded-full w-[78%] h-[70%] ml-10" src="@/assets/img/HARO536707.jpg" alt=""> 
        </nuxt-link>
        
        <nuxt-link :to="`/beatmakers/${idBeatmaker}`">
            <div class="text-2xl text-center font-semibold mt-4">
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