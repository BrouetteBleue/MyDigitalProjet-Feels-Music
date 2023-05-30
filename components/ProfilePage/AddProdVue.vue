<template>
    <div class="flex flex-col w-full">
        <div v-if="deleteBtn || editBtn" class="absolute w-full h-full opacity-40 bg-black top-0 left-0" @click="deleteBtn=false; editBtn = false">
            
        </div>
        <CardsModalConfirm v-if="deleteBtn" prod="caca" @click="handleDelete" />
        <CardsModalConfirm v-if="editBtn" text="Voulez-vous vraiment modifier ce beat ?" prod="caca" @click="handleEdit" />

        <div class="flex flex-row justify-between w-full mb-5">
            <h1 class="text-[#9E9E9E] text-3xl font-bold">Mes prods</h1>  
        </div>
        <div class="flex flex-col justify-center items-center rounded-xl bg-[#292929] border-[1px] border-[#3D3D3D] py-16 px-10">
            <div class="w-full flex flex-row">
                <input type="text" class="w-full rounded-full border-[1px] bg-transparent border-[#3D3D3D] text-[border-[#3D3D3D] mr-[5%] mb-10 px-3 py-2" name="Titre" placeholder="Titre">
            </div>
            <div class="flex flex-row w-full items-start justify-center">
                <div class="flex flex-col justify-start w-1/2 mr-2">
                    <div class="flex flex-row flex-wrap justify-start mb-8">
                        <ButtonsSelect class="w-[30%] mr-5 rounded-full" text="Catégorie"/>
                        <ButtonsSelect class="w-[30%]" text="Style"/>
                    </div>

                    <div class="flex flex-row flex-wrap justify-center">
                        <textarea class="w-full  rounded-xl border-[1px] bg-transparent border-[#3D3D3D] text-[border-[#3D3D3D] mr-[5%] mb-10 px-3 py-2 overflow-y-hidden" name="" id="" cols="30" rows="6" placeholder="Tags"></textarea> 
                    </div>

                    <div class="flex flex-row justify-between">
                        <input type="text" class="w-[25%] mx-[5%] rounded-full border-[1px] bg-transparent border-[#3D3D3D] text-[border-[#3D3D3D] text-center mr-[5%] mb-5 px-3 py-2" placeholder="Prix">
                        <ButtonsDraglink inputId="upload1" class="w-[45%]" />
                    </div>
                    <button v-if="props.TypeForm == 'edit'" class="flex flex-row bg-[#FF6E6E] w-7/12 rounded-xl py-3 px-3 text-black justify-center font-semibold text-lg" @click="deleteBtn=true">
                        Supprimer ce beat <IconsCross class="w-[1.5em] h-[1.5em] ml-4"/>
                    </button>
                </div>

                <div class="flex flex-row w-1/2 justify-start items-center ml-2">
                    <div class="mr-5 w-5/12 h-[220px] rounded-2xl bg-[#505050]">
                        <img v-if="imageSrc" :src="imageSrc" alt="Preview" class="w-full h-full object-cover rounded-2xl">
                    </div> 
                    <ButtonsDraglink @file-selected="onFileSelected" :emitEvent="true" inputId="upload2" class="w-5/12"/>
                </div>
            </div>
            
        

            <div class="flex flex-row justify-end w-full ">
                <ButtonsAddToCartBtn v-if="props.TypeForm == 'add' " class="text-lg w-24 h-[50px] rounded-xl mx-[5%]" text="Ajouter" icon-name="Plus"/> 
                <ButtonsAddToCartBtn v-if="props.TypeForm == 'edit' " class="text-lg w-24 h-[50px] rounded-xl mx-[5%]" text="Modifier" @click="editBtn=true"/> 
            </div>
        </div>
        
    </div>
</template>
<script setup>
import { ref } from 'vue';

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

    const handleDelete = () => {
        if(deleteBtn){

        };
    }

    const handleEdit = () => {
        if(editBtn){

        };
    }

</script>