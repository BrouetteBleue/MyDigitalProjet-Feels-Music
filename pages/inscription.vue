<template>
    <div class="flex flex-col justify-center items-center w-7/12">
        <div class="flex flex-col justify-center items-center w-full bg-[#262626] rounded-lg">
            <div class="w-full text-center text-white font-normal text-5xl mt-20">
                S'inscrire
            </div>
            <div v-if="message">
                <div class="w-full text-center text-[#FB923C] font-normal text-xl mt-5">
                    {{ message }}
                </div>
            </div>
            <form class="flex flex-col justify-center items-start w-7/12 mt-10" method="POST">
                <div >
                    <InputsInputFormConnection v-model="pseudo" text="Pseudo" name="pseudo" :required=true class="mb-10" />
                    <InputsInputFormConnection v-model="email" type="email" text="Email" name="email" :required=true class="mb-10"/>
                    <InputsInputFormConnection v-model="password" type="password" text="Mot de passe" :required=true name="password" class="mb-10"/>
                    <InputsInputFormConnection v-model="passwordConfirm" type="password" text="Confirmer mot de passe" :required=true name="passordConfirm" class="mb-10"/>
                </div>

                <div class="mb-5">
                    <input type="checkbox" name="cgv" v-model="cgv" required> J'accepte les conditions générales de vente et d'utilisation
                </div>

                <div class="flex flex-row justify-between items-center w-full mb-5">
                    <nuxt-link to="/connexion" class="text-[#969CA8]">
                        Se connecter
                    </nuxt-link>

                    <ButtonsAddToCartBtn text="S'inscrire" name="send" @click.prevent="HandleInscription"/>
                </div>
            </form>

            
            <nuxt-link to="/" class="flex flex-row justify-end items-center w-7/12 mb-20 text-[#969CA8]">
                <IconsArrowBack class="mr-3"/> Retourner a l'accueil
            </nuxt-link>


            

        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';

definePageMeta({
  layout: "auth",
});

const pseudo = ref("")
const email = ref("")
const password = ref("")
const passwordConfirm = ref("")
const cgv = ref(false)

const message = ref(false)


const HandleInscription = async () => {

    if(!pseudo.value || !email.value || !password.value || !passwordConfirm.value) return message.value = "Veuillez remplir tous les champs."

    const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
    if (!alphanumericRegex.test(pseudo.value) || !alphanumericRegex.test(password.value)) return message.value = "Les champs pseudo et mot de passe doivent contenir uniquement des caractères alphanumériques.";

    if (password.value !== passwordConfirm.value) return message.value = "Les mots de passe ne sont pas identiques.";

    if (!cgv.value) return message.value = "Veuillez accepter les conditions générales de vente et d'utilisation.";

    const url = "http://localhost:3001/";
    // const url =  "https://feelsmusic.fr/api/";
        $fetch(url +"signin", {
            method: "POST",
            body: JSON.stringify({
                pseudo: pseudo.value.trim(),
                email: email.value.trim(),
                password: password.value.trim(),
                passwordConfirm: passwordConfirm.value.trim(),
            }),
        })
        .then((response) => {
            if (response.status === 201) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user.id));
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