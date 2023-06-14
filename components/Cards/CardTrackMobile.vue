<script setup>

    const props = defineProps({
        CardType: {
            type: String,
            default: 'normal'
        },
        idProd: {
            type: Number,
            required: true
        },
        // idBeatmaker: {
        //     type: Number,
        //     required: true
        // }
    })


</script>

<template lang="">
    <nuxt-link class="w-[48%]" :to="`/prods/${idProd}`">
        <div class="flex flex-col items-start w-full">
                <img class="rounded-2xl w-full py-1" src="@/assets/img/HARO536707.jpg" alt=""> 
                <div class="flex flex-row justify-between items-center w-full">
                    <div class="flex flex-col">
                        <div class="text-sm font-semibold mt-2">
                            Ben Jones Beats
                        </div>
                        <div class="text-sm font-normal text-white">
                            <nuxt-link :to="`/beatmakers/1`">
                                Utilisateur
                            </nuxt-link>
                        </div>
                        <div class="text-sm font-normal text-[#F49743]">
                            25,00€
                        </div>
                    </div> 
                    <div class="text-[#F49743]" v-if="CardType == 'like'">
                        <IconsHeartFilled class="w-[2em] h-[2em]"/>
                    </div>
                </div>
                
            </div> 
    </nuxt-link>
    
</template>

