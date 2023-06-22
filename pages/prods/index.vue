<template>
    <div class="flex flex-col justify-center items-center">

        <div class="flex lg:hidden text-[#9E9E9E] text-xl lg:text-3xl font-extrabold text-start w-11/12">
            Liste des beats
        </div>

        <div class="hidden lg:flex w-[80%] justify-end">
            <ButtonsSelect text="Popularité" class="w-[15%]"/>
        </div>

        <div class="flex flex-row justify-between w-[90%] ">
            <div class="hidden lg:flex flex-col justify-center items-center w-3/12 h-[16em] rounded-xl border-[1px] border-[#404040] bg-[#292929]">
              Filtrer par :
              <ButtonsSelect v-model="selectedCategoryId" text="Catégorie" type="categories" name="category_id"/>
              <ButtonsSelect v-model="selectedStyleId" text="Style" type="styles" name="style_id"/>
                <input type="range"  min="0" max="100" class="text-[#CFCFCF] bg-[#292929]" >
            </div>

            <div class="flex flex-row justify-between w-full mt-5">
              <div class="w-full flex flex-row justify-center items-center mb-28">
                <div class="hidden lg:flex flex-col w-10/12" v-if="isLargeScreen">
                  <CardsCardTrack 
                    v-for="prod in filteredProductions"
                    :key="prod.id"
                    :beatmaker="prod.account"
                    :production="prod"
                    :Beatmaker="true"
                  />
                </div>

                <div class="flex lg:hidden flex-row flex-wrap justify-between w-full" v-else>
                  <CardsCardTrackMobile 
                    v-for="prod in filteredProductions"
                    :key="prod.id"
                    :beatmaker="prod.account"
                    :production="prod"
                    :Beatmaker="true"
                  />
                </div>  


              </div>
            </div>

        </div>
        
       
    </div>
</template>


<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const data = ref({});
const allProductions = ref([]);
const filteredProductions = ref([]);

const selectedCategoryId = ref("option1");
const selectedStyleId = ref("option1");

// Créer une variable réactive pour stocker si l'écran est grand ou non
const isLargeScreen = ref(false);

onMounted(async () => {
  // const url = "http://localhost:3001/";
  const url =  "https://feelsmusic.fr/api/";
    $fetch(url + 'productions', { 
        method: "GET",
        headers: {
          Accept: 'application/json',
          Authorization: `${localStorage.getItem('token')}`
        }
    })
    .then((response) => {
        data.value = response.data.cleanProductions;
        allProductions.value = response.data.cleanProductions;
        filteredProductions.value = response.data.cleanProductions;
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

watchEffect(() => {
  if (selectedCategoryId.value !== 'option1') {
    filteredProductions.value = allProductions.value.filter(prod => prod.categoryId == selectedCategoryId.value);
  } else if (selectedStyleId.value !== 'option1') {
    filteredProductions.value = allProductions.value.filter(prod => prod.styleId == selectedStyleId.value);
  } else {
    filteredProductions.value = [...allProductions.value];
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
    .select-container {
      position: relative;
    }
    .select-container select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
    .select-arrow {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: rotate(90deg) translateY(25%) translateX(-50%);
      pointer-events: none;
    }

    input[type=range] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  margin-top: 15px;
  height: 4px;
  background-color: #979797; /* Couleur de la barre de progression */
  cursor: pointer;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  background-color: #979797; /* Couleur du curseur */
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -6px; /* Centrer le curseur sur la barre */
}

input[type=range]::-moz-range-thumb {
  background-color: #979797; /* Couleur du curseur */
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
}

input[type=range]::-ms-thumb {
  background-color: #979797; /* Couleur du curseur */
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -6px; /* Centrer le curseur sur la barre */
}

input[type=range]::-webkit-slider-runnable-track {
  background-color: #979797; /* Couleur de la barre de progression */
  height: 4px;
  cursor: pointer;
}

input[type=range]::-moz-range-track {
  background-color: #979797; /* Couleur de la barre de progression */
  height: 4px;
  cursor: pointer;
}

input[type=range]::-ms-track {
  background-color: #979797; /* Couleur de la barre de progression */
  height: 4px;
  cursor: pointer;
  border: none;
}
  </style>