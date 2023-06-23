<template>
    <div class="w-full flex justify-center items-center mb-28">
        <div class="flex flex-row space-x-12 lg:space-x-0 lg:justify-between w-[78%] sm:w-auto lg:overflow-hidden overflow-x-auto pb-10">
            <nuxt-link to="/playlists/1" class="flex-shrink-0 w-4/5 sm:w-2/5 lg:w-[22%]">
                <CardsCardSquare :img="1" />
            </nuxt-link>
            <nuxt-link to="/playlists/1" class="flex-shrink-0 w-4/5 sm:w-2/5 lg:w-[22%]">
                <CardsCardSquare :img="2" />
            </nuxt-link>
            <nuxt-link to="/playlists/1" class="flex-shrink-0 w-4/5 sm:w-2/5 lg:w-[22%]">
                <CardsCardSquare :img="3"/>
            </nuxt-link>
            <nuxt-link to="/playlists/1" class="flex-shrink-0 w-4/5 sm:w-2/5 lg:w-[22%]">
                <CardsCardSquare :img="4"/>
            </nuxt-link>
        </div>
    </div>
</template>
<script setup>


</script>
<style lang="">
    
</style>