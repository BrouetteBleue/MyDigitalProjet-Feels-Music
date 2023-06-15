<template>
    <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between w-full mb-10">
                    <h1 class="text-[#9E9E9E] text-xl lg:text-3xl font-extrabold">Mes prods</h1>
                    <nuxt-link to="/profile/prods/add">
                        <ButtonsAddToCartBtn text="Ajouter un beat"  iconName="Plus" class="w-[200px] h-[45px] rounded-xl"/>
                    </nuxt-link>
                </div>
                <div v-if="isLargeScreen">
                    <CardsCardTrack CardType="profil" :idProd="1" />
                    <CardsCardTrack CardType="profil" :idProd="2" />
                    <CardsCardTrack CardType="profil" :idProd="3" />
                    <CardsCardTrack CardType="profil" :idProd="4" />
                    <CardsCardTrack CardType="profil" :idProd="5" />
                    <CardsCardTrack CardType="profil" :idProd="6" />
                    <CardsCardTrack CardType="profil" :idProd="7" />
                    <CardsCardTrack CardType="profil" :idProd="8" />
                    <CardsCardTrack CardType="profil" :idProd="9" />
                </div>
                <div v-if="!isLargeScreen" class="flex flex-row flex-wrap justify-between w-full">
                    <CardsCardTrackMobile :idProd="1" />
                    <CardsCardTrackMobile :idProd="2" />
                    <CardsCardTrackMobile :idProd="3" />
                    <CardsCardTrackMobile :idProd="4" />
                    <CardsCardTrackMobile :idProd="5" />
                    <CardsCardTrackMobile :idProd="6" />
                    <CardsCardTrackMobile :idProd="7" />
                    <CardsCardTrackMobile :idProd="8" />
                    <CardsCardTrackMobile :idProd="9" />
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
