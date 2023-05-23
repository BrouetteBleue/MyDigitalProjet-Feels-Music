<template lang="">
    <div class="flex flex-row justify-between h-[100px] mb-5 rounded-[0.75rem] border-[1px] border-[#404040] bg-[#292929] pl-4 pr-8 py-2">
        <div class="flex flex-row items-center w-[50%]">
            <img class="rounded-2xl w-[13%] h-[100%] mr-5 py-1" src="@/assets/img/HARO536707.jpg" alt=""> 
            <div class="flex flex-col">
                <div class="text-2xl font-semibold mt-2">
                    Ben Jones Beats
                </div>
                <div class="text-xl font-normal text-orange-400">
                    <nuxt-link to="/beatmakers/1">
                        UK, @Utilisateur
                    </nuxt-link>
                </div>
            </div> 
        </div> 
        <div class="flex flex-row justify-end items-center mt-2 w-6/12" v-if="props.CardType !== 'like'">
            <ButtonsCategoryBtn text="Hip-hop" class="mr-5"/>
            <ButtonsCategoryBtn text="Trap"/>
            

            <div class="flex flex-row" v-if="props.CardType == 'normal'">
                <IconsHeart class="mx-10" />
                <ButtonsAddToCartBtn text="25,00€" iconName="Cart" /> 
            </div>

            <div class="flex flex-row"  v-else-if="props.CardType == 'commande'">
                <IconsHeart class="mx-10" />
            </div>


            <div class="flex flex-row" v-else-if="props.CardType == 'profil'">
                <IconsHeart class="mx-5"/>
                <IconsPen class="mx-5 w-[2.3em] h-[2.3em] text-[#9E9E9E]" />
                <IconsTrash class="mx-5 w-[2.3em] h-[2.3em] text-[#9E9E9E]"/>
            </div>
            
        </div>

        <div class="flex flex-row justify-end items-center mt-2 w-6/12" v-else>
            <IconsHeartFilled class="w-[2.5em] h-[2.5em] text-orange-400" />
        </div>

    </div>
</template>

<script setup>

    const props = defineProps({
        CardType: {
            type: String,
            default: 'normal'
        }
    })


</script>
<style lang=""> 
    
</style>
