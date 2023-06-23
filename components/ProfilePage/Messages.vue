<template>
    <div class="flex flex-col w-full h-full">
                <div class="flex flex-row justify-between w-full mb-7">
                    <h1 class="text-[#9E9E9E] text-3xl font-bold">Messages</h1>
                </div>
                <div class="flex flex-row w-full h-[800px] rounded-xl bg-[#292929] border-[1px] border-[#3D3D3D] py-10">
                    <div class="flex flex-col w-11/12 lg:w-[30%] overflow-y-auto ">
                        <CardsMessageUserList Username="Utilisateur 1"/>
                        <CardsMessageUserList Username="Utilisateur 2"/>
                        <CardsMessageUserList Username="Utilisateur 3"/>
                        <CardsMessageUserList Username="Utilisateur 4"/>
                        <CardsMessageUserList Username="Utilisateur 5"/>
                        <CardsMessageUserList Username="Utilisateur 6"/>
                    </div>

                    <div v-if="isLargeScreen" class="flex flex-col justify-start w-[70%]">
                        <div class="">
                            <nuxt-link to="/beatmakers/1">
                                <CardsMessageUserList />
                            </nuxt-link>
                            
                        </div>
                        
                        <div class="flex flex-col h-4/5 mb-5 overflow-y-auto">
                            <CardsEnemyMessage Message="bus quidem natus architectatus corrupti, possimus nulla itaque quas quidemrat eum et duas sunt aliquam eveniet is quisquam quod, voluptate in nesciunt quasi ipsam labore earum temporibus magni voluptates sed veritatis aut natus eos dolorum officiis quos qui et accusantium expedita enim quibusdam libero! Sequi, in nobis." />
                            <CardsMyMessage />
                            <CardsEnemyMessage />
                        </div>

                        <div class="flex flex-row justify-start px-10">
                            <textarea class="w-10/12 bg-[#D9D9D9] rounded-xl text-start text-[#131313] p-5 overflow-y-hidden" name="" id="" cols="30" rows="2" placeholder="Votre message.."></textarea>
                            <button class="w-2/12 pl-8">
                                <IconsSend class="w-[50px] h-[50px] text-[#F49743]"/>
                            </button>
                            
                        </div>
                    </div>
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
