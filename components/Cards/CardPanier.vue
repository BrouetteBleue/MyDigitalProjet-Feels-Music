<template lang="">
    <div class="flex flex-col lg:flex-row justify-between w-full bg-[#292929] border-[1px] border-[#595959] rounded-xl p-10 mb-10">
        <div class="flex flex-row">
            <div class="w-20 mr-5">
                <img class="" src="@/assets/img/HARO536707.jpg" alt="">
            </div>
            <div class="flex flex-col">
                <div class="text-xl lg:text-2xl font-semibold mt-2">
                    {{ production.title }}
                </div>
                <div class="text-xl lg:text-2xl text-[#F49C4D] font-semibold mt-2">
                    {{ production.account.pseudo}}
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-end items-center w-full">
            <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-5 w-full lg:w-4/12">
                <div>
                    MP3
                </div>
                <div class="text-[#F49C4D] lg:ml-20">
                    {{ production.price }} € 
                </div>
            </div>
            <div class="text-[#949494] w-full lg:mt-5 lg:w-[12%] flex flex-row justify-end">
                <IconsPlus class="rotate-45" @Click="HandleRemove"/>
            </div>
        
        </div>
        
        
        
    </div>
</template>

<script setup>

import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();


    const props = defineProps({
        production: {
            type: Object,
            required: true
        }
    })

    const HandleRemove = () => {
        cartStore.removeItem(props.production)
    }
</script>
