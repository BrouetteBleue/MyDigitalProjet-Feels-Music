<template>
    <div class="flex flex-row justify-center py-20">
        <ProfilePageSideBar :focus="1" />

        <div class="flex flex-col justify-center items-center w-7/12 ">
            <ProfilePageProds />
        </div>
    </div>
</template>

<script setup>

</script>

<!-- <button :class="getClass(1)" @click="changeFocus(1)">
    <IconsPen class="w-[2.5em] h-[2.5em]" /> 
    <span class="w-full text-center">
        Mes prods
    </span> 
</button>
<button :class="getClass(2)" @click="changeFocus(2)">
    <IconsCart class="w-[2.5em] h-[2.5em]" /> 
    <span class="w-full text-center">
        Mes commandes
    </span> 
</button>
<button :class="getClass(3)" @click="changeFocus(3)">
    <IconsChat class="w-[2.5em] h-[2.5em]" /> 
    <span class="w-full text-center">
        Messages
    </span>
</button>
<button :class="getClass(4)" @click="changeFocus(4)">
    <IconsHeart class="w-[2.5em] h-[2.5em]" /> 
    <span class="w-full text-center">
        Titres likés
    </span>
</button>
<button :class="getClass(5)" @click="changeFocus(5)">
    <IconsPlaylist class="w-[2.5em] h-[2.5em]" /> 
    <span class="w-full text-center">
        Playlists préférées
    </span> 
</button>
<button :class="getClass(6)" @click="changeFocus(6)">
    <IconsSettings class="w-[2.5em] h-[2.5em]" />    
    <span class="w-full text-center">
        Informations personnelles
    </span> 
</button>
<button :class="getClass(7)" @click="changeFocus(7)">
   <IconsHistory class="w-[2.5em] h-[2.5em]" />
   <span class="w-full text-center">
        Historique
   </span>
</button> -->