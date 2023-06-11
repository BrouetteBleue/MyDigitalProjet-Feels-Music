<template>
    <div class="flex flex-row justify-between lg:justify-between h-[6.5rem] w-full border-b-[1px] border-b-[#404040] bg-[#1A1A1A]">
      <div class="flex flex-row items-center justify-between lg:w-[8%] lg:ml-10 w-[25%] max-h-[6.5rem]">
        <button @click="toggleSidebar" class="flex flex-row justify-center w-1/2 text-[#A8A8A8] lg:hidden">
          <svg class="w-[2em] h-[2em]" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"
            ></path>
          </svg>
        </button>
        <nuxt-link class="flex flex-row justify-center lg:w-full w-1/2" to="/">
          <img class="h-full w-full hidden lg:block" src="@/assets/img/logo_feels_blanc.png"  alt="">
          <img class="w-[2.5em] h-[2.5em] flex lg:hidden" src="@/assets/img/mobile-logo.png"  alt=""/>
        </nuxt-link>
      </div>
  
      <!-- Navigation pour les grands écrans -->
      <div class="hidden lg:flex lg:w-[95%]  pt-7 justify-between">
        <div class="flex flex-row justify-between w-[25%]">
            <div class="w-[50%] pt-1 text-center text-xl">
                <nuxt-link to="/prods">
                    Tracks
                </nuxt-link>
            </div>
            <div class="w-[50%] pt-1 text-center text-xl">
                <nuxt-link to="/beatmakers">
                    Artistes
                </nuxt-link>
            </div>
            <div class="w-[50%] pt-1 text-center text-xl">
                <nuxt-link to="/playlists">
                    Playlists
                </nuxt-link>
            </div>
        </div>
        
        <SearchBar />

        <div class="w-[13%] ">
          <nuxt-link to="/profile/prods/add">
            <ButtonsRoundedButton text="Vendez vos prods" />
          </nuxt-link>
        </div>
        <div class="flex flex-row justify-between w-[15%]">
            <div class="w-[33%] text-center pt-1">
            <nuxt-link to="/profile/messages">
                <button class="rounded-full">
                <IconsChat />
                </button>
            </nuxt-link>
            </div>
            <div class="w-[33%] text-center">
            <nuxt-link to="/profile">
                <button class="rounded-full">
                <IconsProfile />
                </button>
            </nuxt-link>
            </div>
            <div class="w-[33%] text-center">
            <nuxt-link to="/panier">
                <button class="rounded-full">
                <IconsCart />
                </button>
            </nuxt-link>
            </div>
        </div>
        
      </div>
  
      <!-- Bouton du menu latéral pour les petits écrans -->
      
      <div class="flex justify-center items-center w-[75%] lg:pr-6  lg:hidden">
        <SearchBar class="w-[72%]"/>
        <div class="w-[16%] pl-2 lg:pl-0 text-center text-[#A8A8A8]">
            <nuxt-link to="/profile">
                <button class="rounded-full">
                <IconsProfile />
                </button>
            </nuxt-link>
            </div>
            <div class="w-[16%] text-center text-[#A8A8A8]">
            <nuxt-link to="/panier">
                <button class="rounded-full">
                <IconsCart />
                </button>
            </nuxt-link>
            </div>
      </div>
  
      
    </div>
  
    <!-- Side menu -->
    <div class="fixed transform top-0 left-0 w-64 h-full bg-[#1A1A1A] overflow-auto ease-in-out transition-all duration-300 z-30" :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'" >
      <!-- Contenu du menu latéral -->
        <div class="flex flex-col items-center justify-center pt-5">
            <div class="flex flex-row justify-between items-center mb-10">
                <nuxt-link class="flex flex-row justify-center items-center w-10/12" to="/">
                    <img class="mr-20 w-5/12" src="@/assets/img/logo_feels_blanc.png"  alt="" />
                </nuxt-link>
                <div class="w-2/12 text-[#F49743] font-bold text-2xl" @click="toggleSidebar">
                  X
                </div>
            </div>
            <div class="border-b-2 mb-5 pb-3 border-y-[#404040] w-full text-center">
                <nuxt-link to="/prods">
                    Tracks
                </nuxt-link>
            </div>
            <div class="border-b-2 mb-5 pb-3 border-b-[#404040] w-full text-center">
                <nuxt-link to="/beatmakers">
                    Artistes
                </nuxt-link>
            </div>
            <div class="border-b-2 mb-5 pb-3 border-b-[#404040] w-full text-center">
                <nuxt-link to="/profile/prods/add">
                    Vendez vos prods
                </nuxt-link>
            </div>
            <div class="border-b-2 mb-5 pb-3 border-b-[#404040] w-full text-center">
                <nuxt-link to="/profile/messages">
                    Messages
                </nuxt-link>
            </div>
            <div class="border-b-2 mb-5 pb-3 border-b-[#404040] w-full text-center">
                <nuxt-link to="/profile">
                    Profil
                </nuxt-link>
            </div>

        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

const sidebarOpen = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>

<style lang="scss" scoped>
</style>