<template>
    <div class="flex flex-col md:flex-row justify-center items-center bg-[#1A1A1A] md:px-60 md:py-28 py-16">
        <div class="w-[15%] text-center">
            <nuxt-link to="/">
                <IconsLogo width="80%" height="100%" class="pb-5 mt-10" />
            </nuxt-link>
        </div>
        <div class="flex flex-col w-[70%] md:w-[20%]">
            <p class="font-bold text-2xl pb-4">Découvrir</p> 
            <nuxt-link to="/prods" class="pb-1">
                Tracks
            </nuxt-link>
            <nuxt-link to="/beatmakers" class="pb-1">
                Beatmakers
            </nuxt-link>
            <nuxt-link to="/profile/prods/add" class="pb-1">
                Vendez vos prods
            </nuxt-link>
        </div>
        <div class="flex flex-col w-[70%] md:w-[20%]">
            <p class="font-bold text-2xl pb-4">À propos</p> 
            <nuxt-link to="/mentions-legales" class="pb-1">
                Mentions légales
            </nuxt-link>
            <nuxt-link to="/politique-de-confidentialite" class="pb-1">
                Politique de confidentialité
            </nuxt-link>
            <nuxt-link to="/conditions-generales-de-ventes" class="pb-1">
                Conditions générales de vente
            </nuxt-link>
        </div>
        <div class="flex flex-col w-[70%]  md:w-[20%]">
            <p class="font-bold text-2xl pb-4">Contact</p>
            <p class="pb-1">contact@feelsmusic.com</p>
            <p class="pb-1">+33 1 23 45 67 89</p>
            <p class="pb-1">1 rue du caca</p>
        </div>
    </div>
</template>

<script setup>
 
</script>

<style lang="scss" scoped>

</style>