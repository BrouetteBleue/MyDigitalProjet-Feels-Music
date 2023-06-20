<template>
    <div class="container flex flex-col justify-center items-center w-full py-10 lg:py-20">

        <div class="hidden lg:flex w-5/12 justify-center mb-20">
            <SearchBar class="h-[35px] w-full" :smallBar=true /> 
        </div>
        <div class="flex lg:hidden w-[88%] lg:w-8/12 text-[#9E9E9E] text-xl font-bold mb-12 text-start">
            Liste des Beatmakers
        </div>


        <div class="flex flex-row flex-wrap justify-between lg:justify-center w-full">
            <CardsCardRound
                v-for="beatmaker in beatmakers"
                :key="beatmaker.id"
                :idBeatmaker="beatmaker.pseudo"
                :Beatmaker="true"
                class="w-[48%] lg:w-[21%] mb-10"
            />         
        </div>

        <div class="mt-10">
            <button>
                Voir plus
            </button>
        </div>
    
    </div>
</template>

<script setup>
import { ref } from 'vue';
const beatmakers = ref([]);

// Créer une variable réactive pour stocker si l'écran est grand ou non
const isLargeScreen = ref(false);

onMounted(() => {
    $fetch("http://localhost:3001/beatmakers", { 
        method: "GET",
    })
    .then((response) => {
        
        beatmakers.value = response.data.users;
    })
    .catch((error) => {
        console.error('An error occurred while fetching beatmakers:', error);
    });



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