<template lang="">

<div class="flex-shrink-0 w-4/5 sm:w-2/5 lg:w-[22%]">
    <nuxt-link :to="`/prods/${production.id}`">
        <img class="rounded-xl" src="@/assets/img/HARO536707.jpg" alt=""> 
        <div class="text-2xl font-semibold mt-2">
            {{ production.title }}
        </div>
        <div class="flex flex-row justify-between mt-2">
            <div>
                {{ beatmaker.pseudo }}
            </div>
            <div class="text-orange-400 text-xl font-normal">
                {{ production.price }} €
            </div>
        </div>
    </nuxt-link>
</div>
    
</template>

<script setup>
    const props = defineProps({
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
<style lang="">
    
</style>