<template>
    <div class="flex flex-col justify-start">
        <img class="h-[88%]" src="@/assets/img/HARO536707.jpg" alt=""> 

        <div class="flex flex-row justify-between items-center">
            <div class="flex flex-col justify-start lg:items-start items-center w-full">
                <div class="text-lg lg:text-2xl font-normal mt-2">
                    Best life
                </div>
                <div v-if="props.CardType !== 'Acceuil'" class="text-lg lg:text-2xl font-normal">
                    25 Tracks
                </div>
            </div>

            <IconsHeartFilled class="w-[2.5em] h-[2.5em] text-[#F49743]" v-if="props.CardType == 'like'" />
        </div>
        
        
    </div>
</template>

<script setup>
    const props = defineProps({
        CardType: {
            type: String,
            default: 'Acceuil'
        }
    })
</script>
