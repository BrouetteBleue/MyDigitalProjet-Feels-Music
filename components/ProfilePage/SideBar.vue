<template>
    <div class="flex flex-col py-10 mr-10 w-[22%] h-4/5 justify-center items-center rounded-xl bg-[#292929] border-[1px] border-[#3D3D3D]">
            <div class="flex flex-col w-9/12 text-[#9E9E9E]">
                <nuxt-link to="/profile/prods">
                    <div :class="getClass(1)">
                        <IconsPen class="w-[2.5em] h-[2.5em]" /> 
                        <span class="w-full text-center">
                            Mes prods
                        </span> 
                    </div>
                </nuxt-link>
                
                <nuxt-link to="/profile/orders">
                    <div :class="getClass(2)">
                        <IconsCart class="w-[2.5em] h-[2.5em]" /> 
                        <span class="w-full text-center">
                            Mes commandes
                        </span> 
                    </div>
                </nuxt-link>
                
                <nuxt-link to="/profile/messages">
                    <div :class="getClass(3)">
                        <IconsChat class="w-[2.5em] h-[2.5em]" /> 
                        <span class="w-full text-center">
                            Messages
                        </span>
                    </div>
                </nuxt-link>
                
                <nuxt-link to="/profile/likes">
                    <div :class="getClass(4)">
                        <IconsHeart class="w-[2.5em] h-[2.5em]" /> 
                        <span class="w-full text-center">
                            Titres likés
                        </span>
                    </div>
                </nuxt-link>
                
                <nuxt-link to="/profile/playlists">
                    <div :class="getClass(5)">
                        <IconsPlaylist class="w-[2.5em] h-[2.5em]" /> 
                        <span class="w-full text-center">
                            Playlists préférées
                        </span> 
                    </div>
                </nuxt-link>
                
                <nuxt-link to="/profile/settings">
                    <div :class="getClass(6)">
                        <IconsSettings class="w-[2.5em] h-[2.5em]" />    
                        <span class="w-full text-center">
                            Informations personnelles
                        </span> 
                    </div>
                </nuxt-link>
                
                <nuxt-link to="/profile/historique">
                    <div :class="getClass(7)">
                        <IconsHistory class="w-[2.5em] h-[2.5em]" />
                        <span class="w-full text-center">
                                Historique
                        </span>
                    </div>
                </nuxt-link>
                
            </div>

        </div> 

</template>
<script setup>
    const props = defineProps({
        focus: {
            type: Number,
            default: 1
        }
    })

    let classActive = "flex flex-row text-center items-center p-5  bg-[#131313] border-b-2 border-x-2 border-[#3D3D3D] rounded-b-xl"
    let classInactive = "flex flex-row text-center items-center border-b-2 border-[#3D3D3D] p-5"

    function getClass(id) {
        return props.focus === id ? classActive : classInactive; //  si id = focus alors on retourne classActive sinon classInactive
    }
</script>