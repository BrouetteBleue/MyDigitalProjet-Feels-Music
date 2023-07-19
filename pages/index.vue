<template>
    <header class="relative h-[437px] flex flex-col justify-center items-center">
        <div class="bg-img absolute top-0 left-0 w-full h-full z-0">
        </div>
        <h1 class="text-white text-3xl text-center font-bold mb-10 z-10">Vous souhaitez acheter et vendre des beats en toute simplicité et de manière sécurisée ? </h1>
        <div class="signup-container z-10 w-[60%] md:w-[35%] lg:w-[15%] text-2xl ">
            <nuxt-link to="/inscription">
                <buttons-rounded-button text="S'inscrire" class="text-[1.1vw]" />
            </nuxt-link>                 
        <!-- <button class="signin-btn bg-[#F49743] w-full h-[50px] text-black font-semibold rounded-lg z-10">S'inscrire</button> -->
        </div>
        <hr class="border-1 border-orange-400 w-1/2 mt-20  mb-16 z-10">
        <div class="fade z-0"></div>
    </header>

    
    <div class="flex flex-col items-center justify-center mt-[-10px] mb-[2.5%] z-10">
        <h2 class="text-white text-2xl font-bold z-10">Nos services</h2>

        <div class="flex flex-col lg:flex-row justify-around items-center mt-12 mb-12 w-[80%] lg:w-[70%]">
            <div class="lg:w-[22%] w-full">
                <div class="w-full h-full flex justify-center mb-[10%] lg:mb-[20%]">
                    <icons-shopping-bag />
                </div>
                <p class="text-white text-lg font-medium leading-[23px] mb-5 text-center">Achetez facilement et de manière sécurisée des beats de qualité, destinés aux professionnels comme aux amateurs de musique.</p>
            </div>
            <div class="lg:w-[22%] w-full">
                <div class="w-full h-full flex justify-center mb-[10%] lg:mb-[20%]">
                    <icons-tag />
                </div>
                <p class="text-white text-lg font-medium leading-[23px] mb-5 text-center">Vendez facilement et rapidement vos beats, directement sur la plateforme, en fixant vos propres prix et en développant votre notoriété</p>
            </div>
            <div class="lg:w-[22%] w-full">
                <div class="w-full h-full flex justify-center mb-[10%] lg:mb-[20%]">
                    <icons-search-icon />
                </div>
                <p class="text-white text-lg font-medium leading-[23px] mb-5 text-center">
                    Découvrez de nouveaux talents et développez votre communauté grâce à votre mise en avant sur FeelsMusic
                </p>
            </div>
        </div>
    </div>

    <div class="container mx-auto px-4 lg:px-0">
        <div class="flex flex-col items-center justify-center mt-12">
            <h2 class="font-bold text-3xl lg:mb-0 mb-10">Pourquoi Feels Music ?</h2>
            <div class="flex lg:flex-row flex-col justify-around items-center lg:mt-52 mt-28 mb-12">
                <div class="relative lg:w-[30%] w-full p-4 text-left lg:mb-20 mb-60 rounded-2xl lg:h-[450px]  bg-[#1F1F1F]">
                    <div class="absolute lg:w-[95%] w-[90%] h-[30%] lg:h-[45%]  items-center bg-[#404040] sm:-mt-[32%] md:-mt-[18%]  lg:-mt-[28%] -mt-[25%] z-2 flex justify-center shadow-lg lg:rounded-2xl rounded-3xl text-orange-400">
                        <icons-music-note class="w-[3em] h-[3em] lg:w-[5em] lg:h-[5em]" />
                    </div>
                    <div class="lg:w-11/12">
                        <p class="text-white lg:text-start text-center font-semibold rounded-2xl text-xl lg:pt-36 pt-7 lg:pl-12 px-6 lg:px-0 pb-5">
                            Nous proposons une grande variété de beats de qualité pour satisfaire tous les goûts musicaux, permettant ainsi aux artistes de trouver facilement le beat qui correspond à leur style et de créer des projets uniques et originaux.
                        </p>
                    </div>                              
                </div>
                <div class="relative lg:w-[30%]  text-left pt-1 lg:mb-20 mb-60 bg-[#F49743] text-black rounded-2xl shadow-lg lg:h-[450px] h-[300px]">
                    <div class="absolute lg:w-[95%] w-[85%] lg:h-[45%] h-[30%] lg:ml-3 ml-6 items-center bg-[#404040] -mt-[23%] z-2 flex justify-center shadow-lg rounded-2xl">
                        <icons-light class="w-[3em] h-[3em] lg:w-[5em] lg:h-[5em]"/>
                    </div>
                    <div class="lg:w-11/12 ">
                        <p class="text-black lg:text-start text-center font-semibold text-xl lg:pt-36 pt-7 lg:pl-12 px-6 lg:px-0 ">
                            Nous mettons en valeur les petits beatmakers afin qu'ils aient plus de visibilité, car nous croyons en leur potentiel et souhaitons leur offrir une plateforme pour toucher un public plus large et développer leur fan base.
                        </p>
                    </div> 
                </div>
                <div class="relative lg:w-[30%] p-4 text-left lg:mb-20 mb-20 rounded-2xl lg:h-[450px] bg-[#1F1F1F]">
                    <div class="absolute lg:w-[95%] w-[90%] h-[30%] sm:h-[50%] lg:h-[45%]  items-center bg-[#404040] sm:-mt-[32%] md:-mt-[18%]  lg:-mt-[28%] -mt-[28%] z-2 flex justify-center shadow-lg rounded-2xl text-orange-400">
                        <icons-dollar class="w-[3em] h-[3em] lg:w-[5em] lg:h-[5em]" />
                    </div>
                    <div class="lg:w-11/12">
                        <p class="text-white lg:text-start text-center font-semibold text-xl lg:pt-36 pt-7 lg:pl-12 px-6 lg:px-0">
                            Nous permettons aux beatmakers de développer leur communauté et leur audience en leur offrant une vitrine pour présenter leur travail et en leur donnant la possibilité de se connecter avec des artistes du monde entier, favorisant ainsi les collaborations et les opportunités de carrière.
                        </p>
                    </div>             
                </div>
            </div>
        </div>

    </div>
    
    <!-- div placed like the ones above -->



    <div class="container mx-auto px-4 lg:px-0">
        <div class="flex flex-col items-center justify-center">
            <h2 class="text-center lg:text-left font-bold text-2xl lg:text-3xl mb-8">Dernières sorties</h2>
            <div class="w-full flex justify-center items-center mb-28">
                <div class="flex flex-row space-x-12 lg:space-x-0 lg:justify-between w-[78%] sm:w-auto lg:overflow-hidden overflow-x-auto pb-10">
                     <CardsCardSquare 
                        v-for="prod in latestTracks"
                        :key="prod.id"
                        :beatmaker="prod.account"
                        :production="prod"
                    />   
                </div> 
            </div>
        </div>           
    </div>
    

    <div class="flex flex-col items-center justify-center">
        <h2 class="text-center lg:text-left font-bold text-2xl lg:text-3xl mb-16">Les stars du moment</h2>
        <div class="w-full flex flex-row justify-center items-center mb-36">
<div class="flex flex-row lg:space-x-0 lg:justify-evenly w-[78%] lg:overflow-hidden overflow-x-auto pb-10">  
    <CardsCardRound 
        class="flex-shrink-0 w-4/5 sm:w-2/5 lg:w-[22%]" 
        v-for="beatmaker in currentStars"
        :key="beatmaker.pseudo"
        :beatmaker="beatmaker"
    />
</div>
        </div>    
    </div>

    <div class="flex flex-col items-center justify-start">
        <nuxt-link to="/playlists" class="w-[78%]">
            <h2 class="text-center lg:text-left font-bold text-2xl lg:text-3xl mb-8">Les playlists du moment</h2>
        </nuxt-link>
        
        <BarsTrendPlaylist/>     
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

const latestTracks = ref({});
const currentStars = ref({});


onMounted(async () => {
    const url = "http://localhost:3001/";
    $fetch(url + 'productions?latest=true&limit=4', { 
        method: "GET",
    })
    .then((response) => {
        latestTracks.value = response.data.cleanProductions;
    })
    .catch((error) => {
        console.error('An error occurred while fetching beatmakers:', error);
    });

    $fetch(url + "beatmakers?limit=4", { 
        method: "GET",
    })
    .then((response) => {
        currentStars.value = response.data.users;
    })
    .catch((error) => {
        console.error('An error occurred while fetching beatmakers:', error);
    });


});




</script>
