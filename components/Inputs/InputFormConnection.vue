<template>
    <input type="text" class="rounded-lg text-white h-10 w-full bg-[#262626] border-[1px] border-white font-normal text-sm px-5" :placeholder="text">
</template>

<script setup>
    defineProps({
        text: {
            type: String,
            default: ""
        }
    })
</script>