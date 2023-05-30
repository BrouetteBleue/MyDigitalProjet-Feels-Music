<template>
    <div class="flex flex-col w-full">
                <div class="flex flex-row justify-start w-full mb-10">
                    <h1 class="text-[#9E9E9E] text-3xl font-extrabold">Mes commandes</h1>
                </div>
                <div>
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
                
                <div class="text-center mt-5">
                    Voir plus
                </div>

            </div>
</template>
<script setup>

</script>
