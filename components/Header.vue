<template>
    <div class="flex flex-row justify-between h-[6.5rem] pt-7 border-b-[1px] border-b-[#404040] bg-[#1A1A1A]">
      <div class="w-[5%] ml-10">
        <nuxt-link to="/">
          <!-- <IconsLogo class="pb-5" /> -->
          <img src="@/assets/img/logo_feels_blanc.png" alt="">
        </nuxt-link>
      </div>
  
      <!-- Navigation pour les grands écrans -->
      <div class="hidden md:flex md:w-[95%] justify-between">
        <div class="flex flex-row justify-between w-[16%]">
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
      
      <div class="flex justify-between pr-6 pb-6 md:hidden">
        <SearchBar class="w-[80%]"/>
        <button @click="toggleSidebar" class="p-2">
          <svg class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"
            ></path>
          </svg>
        </button>
      </div>
  
      
    </div>
  
    <!-- Side menu -->
    <div class="fixed transform top-0 left-0 w-64 h-full bg-[#1A1A1A] overflow-auto ease-in-out transition-all duration-300 z-30" :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'" >
      <!-- Contenu du menu latéral -->
        <div class="flex flex-col items-center justify-center pt-5">
            <div>
                <nuxt-link to="/">
                    <IconsLogo class="mb-10 mr-40" />
                </nuxt-link>
            </div>
            <div class="border-y-2  border-y-[#404040] w-full text-center">
                <nuxt-link to="/prods">
                    Tracks
                </nuxt-link>
            </div>
            <div class="border-b-2  border-b-[#404040] w-full text-center">
                <nuxt-link to="/beatmakers">
                    Artistes
                </nuxt-link>
            </div>
            <div class="border-b-2  border-b-[#404040] w-full text-center">
                <nuxt-link to="/profile/prods/add">
                    Vendez vos prods
                </nuxt-link>
            </div>
            <div class="border-b-2  border-b-[#404040] w-full text-center">
                <nuxt-link to="/profile/messages">
                    Messages
                </nuxt-link>
            </div>
            <div class="border-b-2  border-b-[#404040] w-full text-center">
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