<template>
    <div class="flex flex-col justify-center items-center w-7/12">
        <div class="flex flex-col justify-center items-center w-full bg-[#262626] rounded-lg">
            <div class="w-full text-center text-white font-normal text-5xl mt-20">
                Connexion
            </div>

            <div class="flex flex-col justify-center items-center w-7/12 mt-20 ">
                    <InputsInputFormConnection text="Email" class="mb-10"/>
                    <InputsInputFormConnection text="Mot de passe" class="mb-10"/>
            </div>

            <div class="flex flex-row justify-between items-center w-7/12 mb-5">
                <nuxt-link to="/connexion" class="text-[#969CA8]">
                    S'inscrire
                </nuxt-link>

                <ButtonsAddToCartBtn text="Se connecter" @Click="HandleConnexion"/>
            </div>

            <nuxt-link to="/" class="flex flex-row justify-end items-center w-7/12 mb-20 text-[#969CA8]">
                <IconsArrowBack class="mr-3"/> Retourner a l'accueil
            </nuxt-link>


            

        </div>
    </div>
</template>

<script setup>

definePageMeta({
  layout: "auth",
});


</script>