<template>
    <button class="rounded-full text-black w-full bg-[#F49743] h-12 font-semibold text-xl py-1" >{{ text }}</button>
</template>

<script setup>
    defineProps({
        text: {
            type: String,
            default: ""
        }
    })
</script>