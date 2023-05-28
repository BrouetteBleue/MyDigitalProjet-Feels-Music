<template lang="">
    <div class="flex flex-col absolute w-4/12 h-[300px] top-1/4 justify-center items-center bg-[#292929] border-[1px] border-[#595959] rounded-xl z-10 px-20">
        <div class="text-white">
            {{text}}
        </div>
        <div class="mt-5">
            {{prod}}
        </div>
        <div class="flex flex-row justify-evenly w-full mt-5">
            <button class="rounded-full bg-[#292929] border-[1px] border-[#595959] py-3 px-10">OUI</button>
            <ButtonsAddToCartBtn text="NON" class="h-[50px]"/>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        text: {
            type: String,
            default: 'Voulez-vous vraiment supprimer ce beat ?'
        },
        prod: {
            type: String,
            required: true
        },

    })

</script>