<template>
    <div class="flex flex-row w-[52%] h-12 rounded-3xl border-[1px] border-[#404040]">
        <input
        type="text"
        class="w-11/12 rounded-l-full bg-[#1A1A1A] focus:outline-none focus:ring-0 pl-4"
        />
        <button class="w-[10%] pt-1 bg-[#1A1A1A] rounded-r-full">
            <IconsSearch :class=styleClass />
        </button>
    </div>
</template>

<script setup>
    const props = defineProps({
        smallBar: {
            type: Boolean,
            default: 'false'
        }
    })

    let styleClass = "";

    if (props.smallBar == true) {
        styleClass = "w-full text-[#979797]";
    } else {
        styleClass = "w-full text-orange-400";
    }
</script>