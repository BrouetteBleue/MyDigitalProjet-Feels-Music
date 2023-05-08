<template>
    <button class="rounded-lg text-white h-[32%] w-[125px] bg-black font-normal text-sm" >{{ text }}</button>
</template>

<script setup>
    defineProps({
        text: {
            type: String,
            default: ""
        }
    })
</script>