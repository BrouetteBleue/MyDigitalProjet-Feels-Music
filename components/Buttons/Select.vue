<template lang="">
    <div class="select-container w-10/12">
        <select class="block w-full bg-[#292929] border-[1px] border-[#404040] text-md text-[#979797] font-semibold py-2 px-4 pl-5 pr-10 rounded-xl focus-visible:outline-none shadow-sm">
        <option value="option1">{{ text }}</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        </select>
        <span class="select-arrow">
            <IconsArrow class="w-5 h-5"/>
        </span>
    </div>
</template>
<script setup>
    defineProps({
        text: {
            type: String,
            default: ""
        }
    })
</script>
<style lang="">
    
</style>