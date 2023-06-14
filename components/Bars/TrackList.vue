<template lang="">
    <div class="w-full flex flex-row justify-center items-center mb-28">
        <div class="hidden lg:flex flex-col w-10/12">
            <CardsCardTrack :idProd="1"/>
            <CardsCardTrack :idProd="2"/>
            <CardsCardTrack :idProd="3" />
            <CardsCardTrack :idProd="4"/>
        </div>  
        <div class="flex lg:hidden flex-row flex-wrap justify-between w-full">
            <CardsCardTrackMobile :idProd="1"/>
            <CardsCardTrackMobile :idProd="2"/>
            <CardsCardTrackMobile :idProd="3"/>
            <CardsCardTrackMobile :idProd="4"/> 
        </div>  
    </div>
</template>  
<script setup>


</script>
<style lang="">
    
</style>