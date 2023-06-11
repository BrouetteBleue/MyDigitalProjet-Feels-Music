<template>
    <div class="flex flex-row w-[45%] lg:h-12 h-10 rounded-3xl border-[1px] border-[#404040]">
        <input type="text" class="lg:w-11/12 w-9/12 rounded-l-full bg-[#1A1A1A] focus:outline-none focus:ring-0 pl-4" />
        <button class="flex flex-row justify-center items-center lg:w-1/12 w-3/12 pt-1 bg-[#1A1A1A] rounded-r-full">
            <IconsSearch :class=styleClass />
        </button>
    </div>
</template>

<script setup>
    const props = defineProps({
        smallBar: {
            type: Boolean,
            default: false
        }
    })

    let styleClass = "";

    if (props.smallBar == true) {
        styleClass = "w-8/12 text-[#979797]";
    } else {
        styleClass = "w-8/12 text-orange-400";
    }
</script>