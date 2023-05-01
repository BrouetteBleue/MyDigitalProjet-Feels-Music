<template>
    <button class="rounded-full text-black bg-orange-400 w-full h-10 font-semibold  py-1 ">{{ text }}</button>
</template>

<script setup>
    defineProps({
        text: {
            type: String,
            default: ""
        }
    })
</script>