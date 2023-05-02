<template>
    <button class="rounded-full text-black w-full bg-orange-400 h-12 font-semibold text-xl py-1" >{{ text }}</button>
</template>

<script setup>
    defineProps({
        text: {
            type: String,
            default: ""
        }
    })
</script>