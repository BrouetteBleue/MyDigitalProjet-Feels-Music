<template>
    <div class="flex flex-row h-10" @dragover.prevent @drop="onDrop">
        <div class="rounded-l-full text-black w-9/12 bg-white font-semibold text-lg py-1 px-5 text-start" id="preview">
            <p>{{ fileName }}</p>
        </div>     
        <label :for="inputId" class="flex flex-row text-white w-3/12 bg-[#D9D9D9] font-semibold text-xl py-1  justify-center items-center" @dragleave="dragging = false" @dragover="dragging = true" :class="{ 'dragging': dragging }" >
            <IconsTrombone class="w-[1.5em] h-[1.5em]" />
        </label>
        <input :id="inputId" type="file" :name="inputId" class="hidden" @change="onFileChange">
    </div>
    
</template>

<script setup>
    import { ref } from 'vue';
    const emits = defineEmits(['file-selected']);

    let file = ref(null);
    let fileName = ref('Sélectionnez');
    let dragging = ref(false);
    const props = defineProps({
        emitEvent: {
            type: Boolean,
            default: false
        },
        inputId: {
            type: String,
            required: true
        }
    })
    
    
    // Savoir si on émet l'évenement ou non (pour le cas ou je veux afficher l'image déposée)

    const onFileChange = (e) => {
        file.value = e.target.files[0];
        fileName.value = file.value ? file.value.name : 'Sélectionnez';
        if (props.emitEvent) {
            emits('file-selected', file.value);
        }
    }

    const onDrop = (e) => {
        e.preventDefault();
        file.value = e.dataTransfer.files[0];
        fileName.value = file.value ? file.value.name : 'Sélectionnez';
        if (props.emitEvent) {
            emits('file-selected', file.value);
        }
    }
</script>

<style scoped>
.dragging {
    background-color: #F49743; 
}
</style>