<template>
    <input :type="type" :value="modelValue" :name="name" :placeholder="text" :required="required" @input="$emit('update:modelValue', $event.target.value)" class="rounded-lg text-white h-10 w-full bg-[#262626] border-[1px] border-white font-normal text-sm px-5" />
</template>

<script setup>

const props = defineProps({
    text: {
        type: String,
        default: ""
    },
    modelValue: {
        type: String,
    },
    type: {
        type: String,
        default: "text"
    },
    name: {
        type: String,
        default: ""
    },
    required: {
        type: Boolean,
        default: false
    },
});

const emit = defineEmits(['update:modelValue']);
</script>