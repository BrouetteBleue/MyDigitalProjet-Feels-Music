<template lang="">
    <div class="flex flex-row justify-start items-end py-4 px-10 mb-[-50px]">

        <img class="rounded-full w-[50px] mr-5 mb-6" :src="props.Img" alt=""> 
        
        <div class="flex flex-col justify-center items-start">
            <div class="w-5/12 text-md text-start text-white font-normal bg-[#404040] rounded-xl pl-5 pr-4 py-3">
                {{props.Message}}
            </div>
            <div class="flex flex-row justify-start">
                {{props.Date}}
            </div>
        </div>
        
        
    </div>
</template>

<script setup>

    const props = defineProps({
        Message: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
        },
        Img: {
            type: String,
            default: () => '/img/HARO536707.jpg'
        },
        Date: {
            type: String,
            default: '12:12 12/12/2021'
        },

    })

</script>
