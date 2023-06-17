<template>
    <div class="flex flex-col justify-center items-center w-7/12">
        <div class="flex flex-col justify-center items-center w-full bg-[#262626] rounded-lg">
            <div class="w-full text-center text-white font-normal text-5xl mt-20">
                Connexion
            </div>
            <div v-if="message">
                <div class="w-full text-center text-[#FB923C] font-normal text-xl mt-5">
                    {{ message }}
                </div>
            </div>

            <div class="flex flex-col justify-center items-center w-7/12 mt-10 ">
                    <InputsInputFormConnection v-model="email" type="email" text="Email" name="email" :required=true class="mb-10"/>
                    <InputsInputFormConnection v-model="password" type="password" :required=true name="password" text="Mot de passe" class="mb-10"/>
            </div>

            <div class="flex flex-row justify-between items-center w-7/12 mb-5">
                <nuxt-link to="/inscription" class="text-[#969CA8]">
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

import { ref } from 'vue';

const email = ref("")
const password = ref("")

const message = ref(false)


const HandleConnexion = async () => {

    if(!email.value || !password.value) return message.value = "Veuillez remplir tous les champs."

        $fetch("/api/auth", {
            method: "POST",
            credentials: 'include',
            body: JSON.stringify({
                email: email.value.trim(),
                password: password.value.trim()
            }),
        })
        .then((response) => {
            if (response.statusCode === 201) {
                sessionStorage.setItem('token', response.body.token);
                sessionStorage.setItem('user', JSON.stringify(response.body.user.id));
                 navigateTo("/");
            } else {
                message.value = response.data.statusMessage;
            }
        })
        .catch((error) => {
            message.value = error.data.statusMessage; // pour accéder au contenu de l'erreur zzebi
        });
};

</script>