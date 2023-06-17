<template>
    <div class="flex flex-col w-full">
        <div v-if="deleteBtn || editBtn" class="absolute w-full h-full opacity-40 bg-black top-0 left-0" @click="deleteBtn=false; editBtn = false">
            
        </div>
        <CardsModalConfirm v-if="deleteBtn" prod="caca" @click="handleDelete" />
        <CardsModalConfirm v-if="editBtn" text="Voulez-vous vraiment modifier ce beat ?" prod="caca" @click="handleEdit" />

        <div class="flex flex-row justify-between w-full mb-5">
            <h1 class="text-[#9E9E9E] text-3xl font-bold">Mes prods</h1>  
        </div>
        <div class="flex flex-col justify-center items-center rounded-xl bg-[#292929] border-[1px] border-[#3D3D3D] py-5 lg:py-16 px-3 lg:px-10">
            <div class="w-full flex flex-row">
                <input type="text" class="w-full rounded-full border-[1px] bg-transparent border-[#3D3D3D] text-[border-[#3D3D3D] lg:mr-[5%] mb-10 px-3 py-2" name="title" placeholder="Titre">
            </div>
            <div class="flex flex-col lg:flex-row w-full items-start justify-center">
                <div class="flex flex-col justify-start lg:w-1/2 w-full mr-2">
                    <div class="flex flex-row lg:flex-wrap justify-start mb-8">
                        <ButtonsSelect class="w-1/2 lg:w-[30%] mr-5 rounded-full" text="Catégorie" type="categories"/>
                        <ButtonsSelect class="w-1/2 lg:w-[30%]" text="Style" type="styles"/>
                    </div>

                    <div class="flex flex-row flex-wrap justify-center">
                        <textarea class="w-full  rounded-xl border-[1px] bg-transparent border-[#3D3D3D] text-[border-[#3D3D3D] lg:mr-[5%] mb-10 px-3 py-2 overflow-y-hidden" name="tags" id="" cols="30" rows="6" placeholder="Tags"></textarea> 
                    </div>

                    <div class="flex flex-row justify-between">
                        <input type="number" name="price" class="lg:w-[25%] w-1/2 lg:mx-[5%] rounded-full border-[1px] bg-transparent border-[#3D3D3D] text-[border-[#3D3D3D] text-center mr-[5%] mb-5 px-3 py-2" placeholder="Prix">
                        <ButtonsDraglink inputId="song" class="w-[45%] lg:flex hidden" />
                    </div>

                    <button v-if="props.TypeForm == 'edit'" class="flex flex-row bg-[#FF6E6E] w-7/12 rounded-xl py-3 px-3 text-black justify-center font-semibold text-lg" @click="deleteBtn=true">
                        Supprimer ce beat <IconsCross class="w-[1.5em] h-[1.5em] ml-4"/>
                    </button>
                </div>

                <div class="flex flex-row lg:w-1/2 w-full justify-start items-center ml-2">
                    <div class="mr-5 w-5/12 h-[150px] lg:h-[220px] rounded-2xl bg-[#505050]">
                        <img v-if="imageSrc" :src="imageSrc" alt="Preview" class="w-full h-full object-cover rounded-2xl">
                    </div> 
                    <ButtonsDraglink @file-selected="onFileSelected" :emitEvent="true" inputId="cover" class="w-6/12"/>
                </div>

                <div v-if="!isLargeScreen" class="flex flex-col items-end w-full my-10">
                    <span class="text-[#9CA1A1] w-full text-left text-xl font-bold mb-3">Votre fichier audio </span>
                    <ButtonsDraglink inputId="cover" class="w-8/12" />
                </div>
                
            </div>
            
        

            <div class="flex flex-row justify-end w-full ">
                <ButtonsAddToCartBtn v-if="props.TypeForm == 'add' " class="text-lg w-24 h-[50px] rounded-xl mx-[5%]" text="Ajouter" @click.prevent="handleAdd" icon-name="Plus"/> 
                <ButtonsAddToCartBtn v-if="props.TypeForm == 'edit' " class="text-lg w-24 h-[50px] rounded-xl mx-[5%]" text="Modifier" @click="editBtn=true"/> 
            </div>
        </div>
        
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

    let imageSrc = ref(null);
    let deleteBtn = ref(false);
    let editBtn = ref(false);

    const onFileSelected = (file) => {
        imageSrc.value = URL.createObjectURL(file);
    }

    const props = defineProps({
        TypeForm : {
            type: String,
            default: "add"
        }
    })

    const handleAdd = () => {
        
    }

    const handleDelete = () => {
        if(deleteBtn){

        };
    }

    const handleEdit = () => {
        if(editBtn){

        };
    }


// Créer une variable réactive pour stocker si l'écran est grand ou non
const isLargeScreen = ref(false);

// Ajouter un écouteur d'événement pour détecter le redimensionnement de la fenêtre
onMounted(() => {
  // Exécuter ce code uniquement côté client
  if (typeof window !== 'undefined') {
    isLargeScreen.value = window.innerWidth >= 1024;
    window.addEventListener('resize', updateScreenSize);
  }
});

// Supprimer l'écouteur d'événement lorsque le composant est démonté
onUnmounted(() => {
  // Exécuter ce code uniquement côté client
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateScreenSize);
  }
});

// Mettre à jour isLargeScreen basé sur la largeur de la fenêtre
function updateScreenSize() {
  isLargeScreen.value = window.innerWidth >= 1024;
}

</script>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}
</style>