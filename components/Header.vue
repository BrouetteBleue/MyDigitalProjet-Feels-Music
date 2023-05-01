<template>
    <div class="flex flex-row justify-between pt-5 border-b-2 border-b-[#404040]">
        <div class="w-[5%] ml-8">
            <nuxt-link to="/">
                <IconsLogo class="pb-5" />
            </nuxt-link>   
        </div>
        <div class="w-[5%] pt-1">
            <nuxt-link to="/prods">
                Tracks
            </nuxt-link>     
        </div>
        <div class="w-[5%] pt-1">
            <nuxt-link to="/beatmakers">
                Artistes
            </nuxt-link>         
        </div>
        <div class="flex flex-row w-[50%] h-10 rounded-full border-2 border-[#404040]">
            <input type="text" class=" w-11/12 rounded-full bg-[#1A1A1A] focus:outline-none focus:ring-0 pl-4">
            <button class="w-[10%] pt-1 pl-3">
                <IconsSearch class="w-full"/>
            </button>
        </div>
        <div class="w-[10%] ">
            <nuxt-link to="/profile/prods/add">
                <ButtonsRoundedButton  text="Vendez vos prods"/>
            </nuxt-link>   
        </div>
        <div class="w-[5%] text-center">
            <nuxt-link to="/profile/messages">
                <button class="rounded-full">
                <IconsChat />
            </button>
            </nuxt-link>    
        </div>
        <div class="w-[5%] text-center">
            <nuxt-link to="/profile">
                <button class="rounded-full">
                    <IconsProfile />
                </button>
            </nuxt-link>
            
        </div>
        <div class="w-[5%] text-center">
            <nuxt-link to="/panier">
                <button class="rounded-full">
                    <IconsCart />
                </button>
            </nuxt-link>
            
        </div>
    </div>
</template>

<script setup>
 
</script>

<style lang="scss" scoped>

</style>