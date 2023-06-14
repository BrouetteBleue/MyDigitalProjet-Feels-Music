<template>
    <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between w-full mb-10">
                    <h1 class="text-[#9E9E9E] text-3xl font-bold">Titres likés</h1>
                </div>

                <div v-if="isLargeScreen" class="flex flex-col">
                    <CardsCardTrack :idProd="1" CardType="like"/>
                    <CardsCardTrack :idProd="2" CardType="like"/>
                    <CardsCardTrack :idProd="3" CardType="like"/>
                    <CardsCardTrack :idProd="4" CardType="like"/>
                    <CardsCardTrack :idProd="5" CardType="like"/>
                    <CardsCardTrack :idProd="6" CardType="like"/>
                    <CardsCardTrack :idProd="7" CardType="like"/>
                    <CardsCardTrack :idProd="8" CardType="like"/>
                </div>

                <div v-if="!isLargeScreen" class="flex flex-row flex-wrap justify-between w-full">
                    <CardsCardTrackMobile :idProd="1" CardType="like" class="mb-5"/>
                    <CardsCardTrackMobile :idProd="2" CardType="like" class="mb-5"/>
                    <CardsCardTrackMobile :idProd="3" CardType="like" class="mb-5"/>
                    <CardsCardTrackMobile :idProd="4" CardType="like" class="mb-5"/>
                    <CardsCardTrackMobile :idProd="5" CardType="like" class="mb-5"/>
                    <CardsCardTrackMobile :idProd="6" CardType="like" class="mb-5"/>
                    <CardsCardTrackMobile :idProd="7" CardType="like" class="mb-5"/>
                    <CardsCardTrackMobile :idProd="8" CardType="like" class="mb-5"/>
                </div>
                
                <div class="text-center mt-5">
                    Voir plus
                </div>

            </div>
</template>
<script setup>
    
import { ref, onMounted, onUnmounted } from 'vue';

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
