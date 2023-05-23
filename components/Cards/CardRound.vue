<template lang="">
    <div>
        <nuxt-link to="/beatmakers/1">
            <img class="rounded-full w-[78%] h-[70%] ml-10" src="@/assets/img/HARO536707.jpg" alt=""> 
        </nuxt-link>
        
        <nuxt-link to="/beatmakers/1">
            <div class="text-2xl text-center font-semibold mt-4">
            Ben Jones Beats
            </div>
            <div class="flex flex-col items-center justify-center mt-2"> 
                <nuxt-link to="/beatmakers/1">
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
            default: 'false'
        }
    })




</script>
<style lang="">
    
</style>