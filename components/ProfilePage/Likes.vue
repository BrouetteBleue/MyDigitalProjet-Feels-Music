<template>
    <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between w-full mb-10">
                    <h1 class="text-[#9E9E9E] text-3xl font-bold">Titres likés</h1>
                </div>

                <div class="w-full flex flex-row justify-center items-center mb-28">
                  <div class="hidden lg:flex flex-col w-10/12" v-if="isLargeScreen">
                    <CardsCardTrack 
                      v-for="prod in data"
                      :key="prod.production.id"
                      :beatmaker="prod.beatmaker"
                      :production="prod.production"
                      :CardType="'like'"
                    />
                  </div>

                  <div class="flex lg:hidden flex-row flex-wrap justify-between w-full" v-else>
                    <CardsCardTrackMobile 
                      v-for="prod in data"
                      :key="prod.production.id"
                      :beatmaker="prod.beatmaker"
                      :production="prod.production"
                      :CardType="'like'"
                    />
                  </div>  
              </div>
                
                <div class="text-center mt-5">
                    Voir plus
                </div>

            </div>
</template>
<script setup>
    
import { ref, onMounted, onUnmounted } from 'vue';

const data = ref({});

onMounted(async () => {
    $fetch(`http://localhost:3001/like`, { 
        method: "GET",
        headers: {
          Accept: 'application/json',
          Authorization: `${localStorage.getItem('token')}`
        }

    })
    .then((response) => {
        data.value = response.data.userLikes;
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
