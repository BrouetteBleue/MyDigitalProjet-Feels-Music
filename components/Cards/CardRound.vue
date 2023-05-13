<template lang="">
    <div>
        <img class="rounded-full w-[78%] h-[70%] ml-10" src="@/assets/img/HARO536707.jpg" alt=""> 
        <div class="text-2xl text-center font-semibold mt-4">
            Ben Jones Beats
        </div>
        <div class="flex flex-col items-center justify-center mt-2"> 
            <div>
                UK, @Utilisateur
            </div>
            <div v-if="Beatmaker == true" class="">
                25 tracks
            </div>
        </div>
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