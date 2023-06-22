<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: "styles"
    },
    name: {
        type: String,
        default: ""
    },
    modelValue: [String, Number],
});

const data = ref([]);



onMounted(async () => {
    try {
        // const url = "http://localhost:3001/";
        const url =  "https://feelsmusic.fr/api/";
        const response = await $fetch(url + props.type , { parseResponse: JSON.parse });
        
        if (response.data.categories) {
            data.value = response.data.categories;
        } else if (response.data.styles) {
            data.value = response.data.styles;
        }
        // console.log(response.data.styles);
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
    }
});

</script>


<template lang="">
    <div class="select-container w-10/12">
        <select @change="$emit('update:modelValue', $event.target.value)" :value="modelValue" class="block w-full bg-[#292929] border-[1px] border-[#404040] text-md text-[#979797] font-semibold py-2 px-4 pl-5 pr-10 rounded-full focus-visible:outline-none shadow-sm" :name="name">
        <option value="option1">{{ text }}</option>
        <option v-for="element in data" :key="element.name" :value="element.id">{{ element.name }}</option>
        </select>
        <span class="select-arrow">
            <IconsArrow class="w-5 h-5"/> 
        </span>
    </div>
</template>

