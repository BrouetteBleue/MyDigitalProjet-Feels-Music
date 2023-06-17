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
    }
});

const data = ref([]);

const test = import.meta.env.VITE_API_HOST;     // comme ça qu'on peut recuperer les variables d'environnement

onMounted(async () => {
    try {
        const url = test || "https://feelsmusic.fr/api/";
        const response = await $fetch(url + props.type , { parseResponse: JSON.parse });
        
        if (response.data.categoryNames) {
            data.value = response.data.categoryNames;
        } else if (response.data.stylesNames) {
            data.value = response.data.stylesNames;
        }
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
    }
});

</script>


<template lang="">
    <div class="select-container w-10/12">
        <select class="block w-full bg-[#292929] border-[1px] border-[#404040] text-md text-[#979797] font-semibold py-2 px-4 pl-5 pr-10 rounded-full focus-visible:outline-none shadow-sm">
        <option value="option1">{{ text }}</option>
        <option v-for="element in data" :key="element" :value="element">{{ element }}</option>
        </select>
        <span class="select-arrow">
            <IconsArrow class="w-5 h-5"/>
        </span>
    </div>
</template>

