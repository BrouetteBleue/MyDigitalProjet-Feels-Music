<template lang="">
    <div class="flex flex-row justify-start items-end py-4 px-10 mb-[-50px]">
        
        <div class="flex flex-col justify-center items-end">
            <div class="w-5/12 text-md text-start text-black font-normal bg-[#F49743] rounded-xl pl-5 pr-4 py-3">
                {{props.Message}}
            </div>
            <div class="flex flex-row justify-end">
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
        Date: {
            type: String,
            default: '12:12 12/12/2021'
        },

    })

</script>
