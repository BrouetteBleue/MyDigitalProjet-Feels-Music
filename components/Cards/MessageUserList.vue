<template lang="">
    <button class="flex flex-row justify-start items-center py-4 px-10">

        <img class="rounded-full w-[50px] mr-5" :src="props.Img" alt=""> 
            
        <div class="text-lg text-center font-semibold">
            {{props.Username}}
        </div>
        
    </button>
</template>

<script setup>

    const props = defineProps({
        Username: {
            type: String,
            default: 'Utilisateur mignon'
        },
        Img: {
            type: String,
            default: () => '/img/HARO536707.jpg'
        },

    })

</script>
