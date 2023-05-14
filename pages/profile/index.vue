<template>
    <div class="flex flex-row justify-center py-20">
        <div class="flex flex-col py-10 mr-10 w-[22%] h-4/5 justify-center items-center rounded-xl bg-[#292929] border-[1px] border-[#3D3D3D]">
            <div class="flex flex-col w-9/12 text-[#9E9E9E]">
                <button :class="getClass(1)" @click="changeFocus(1)">
                    <IconsPen class="w-[2.5em] h-[2.5em]" /> 
                    <span class="w-full text-center">
                        Mes prods
                    </span> 
                </button>
                <button :class="getClass(2)" @click="changeFocus(2)">
                    <IconsCart class="w-[2.5em] h-[2.5em]" /> 
                    <span class="w-full text-center">
                        Mes commandes
                    </span> 
                </button>
                <button :class="getClass(3)" @click="changeFocus(3)">
                    <IconsChat class="w-[2.5em] h-[2.5em]" /> 
                    <span class="w-full text-center">
                        Messages
                    </span>
                </button>
                <button :class="getClass(4)" @click="changeFocus(4)">
                    <IconsHeart class="w-[2.5em] h-[2.5em]" /> 
                    <span class="w-full text-center">
                        Titres likés
                    </span>
                </button>
                <button :class="getClass(5)" @click="changeFocus(5)">
                    <IconsPlaylist class="w-[2.5em] h-[2.5em]" /> 
                    <span class="w-full text-center">
                        Playlists préférées
                    </span> 
                </button>
                <button :class="getClass(6)" @click="changeFocus(6)">
                    <IconsSettings class="w-[2.5em] h-[2.5em]" />    
                    <span class="w-full text-center">
                        Informations personnelles
                    </span> 
                </button>
                <button :class="getClass(7)" @click="changeFocus(7)">
                   <IconsHistory class="w-[2.5em] h-[2.5em]" />
                   <span class="w-full text-center">
                        Historique
                   </span>
                </button>
            </div>

        </div> 

        <div class="flex flex-col justify-center items-center w-7/12 ">
            <ProfilePageProds v-if="focus === 1" />
            <ProfilePageOrders v-if="focus === 2" />
            <ProfilePageMessages v-if="focus === 3" />
            <ProfilePageLikes v-if="focus === 4" />
            <ProfilePageLikedPlaylists v-if="focus === 5" />
            <ProfilePageSettings v-if="focus === 6" />
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';


    let focus = ref(1);

    let classActive = "flex flex-row text-center items-center p-5  bg-[#131313] border-b-2 border-x-2 border-[#3D3D3D] rounded-b-xl"
    let classInactive = "flex flex-row text-center items-center border-b-2 border-[#3D3D3D] p-5"


    function changeFocus(id){
        focus.value = id;
    }

    function getClass(id) {
        return focus.value === id ? classActive : classInactive; //  si id = focus alors on retourne classActive sinon classInactive
    }
</script>