<template>
    <button class="flex flex-row items-center justify-center rounded-full text-black w-[130px] h-[30px] bg-orange-400 font-medium text-base" >
        {{ text }} <component :is="icons[iconName]" class="w-[1em] h-[1em] ml-2 text-black"/>  
        </button>
</template>

<script setup>

    //  import IconsCart from '@/components/Icons/Cart.vue'

const props = defineProps({
        text: {
            type: String,
            default: ""
        },
        iconName: {
            type: String,
            default: 'Cart' // default icon
        }
    })
    const iconsModules = import.meta.glob('@/components/Icons/*.vue', { eager: true })

    const icons = Object.fromEntries(
        Object.entries(iconsModules).map(([path, module]) => {
            const iconName = path.match(/\/([^/]+)\.vue$/)[1]
            return [iconName, module.default]
        })
    )

</script>