<template>
    <button class="flex flex-row items-center justify-center rounded-full text-black w-[130px] h-[35%] bg-orange-400 font-medium text-base" >{{ text }} <IconsCart class="w-[1em] h-[1em] ml-2"/></button>
</template>

<script setup>
    defineProps({
        text: {
            type: String,
            default: ""
        }
    })
</script>