<template>
    <button class="flex flex-row items-center justify-center rounded-full max-w-[100px] w-[80px] h-[35%] border-[1px] border-[#404040] text-md text-[#979797]" >{{ text }} </button>
</template>

<script setup>
    defineProps({
        text: {
            type: String,
            default: ""
        }
    })
</script>