<template>
    <div class="flex flex-row justify-evenly items-center mt-20">
        
        <div class="flex flex-col justify-center w-[30%] bg-[#292929] rounded-3xl py-5">
            <div class="flex flex-row justify-center w-full pb-5">
                <img src="@/assets/img/HARO536707.jpg" alt="" class="w-6/12 rounded-xl h-[280px]">
                
                <div class="flex flex-col w-3/12 justify-start ml-10">
                    <div class="flex flex-row">
                        <IconsHeart class="mr-3 mb-3 w-[1.5em] h-[1.5em] text-white" /> 345
                    </div>
                    <div class="flex flex-row">
                        <IconsEye class="mr-3 mb-3 w-[1.5em] h-[1.5em]" /> 3,4K
                    </div>
                    <div class="flex flex-row">
                        <IconsDownload class="mr-3 mb-3 w-[1.5em] h-[1.5em]"/> 112
                    </div>

                    <button class="rounded-xl bg-[#181818] text-orange-400 mt-5 flex flex-row justify-evenly w-24 items-center font-medium">
                        share <IconsShare />
                    </button>  
                    
                    <div class="pt-20">
                        <div>
                        120 BPM
                        </div>
                        <div>
                            02/04/2023
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="flex flex-col pl-11">
                <div class="text-4xl font-medium mb-6">
                    Yeh im mad 
                </div>

                <div class="flex flex-row text-xl mb-6">
                    <span class="mr-6">vitalee</span>   <ButtonsAddToCartBtn text="Contacter" />
                </div>

                <div class="flex flex-row mb-4">
                    <span class="text-[#878787] text-base">Catégorie:</span>  <span class="font-medium text-base ml-4">Hip-hop</span>
                </div>

                <div class="flex flex-row">
                    <ButtonsKeyword text="808" class="mr-3" />
                    <ButtonsKeyword text="lil baby" class="mr-3" />
                    <ButtonsKeyword text="rap" class="mr-3"/>
                    <ButtonsKeyword text="type beat" class="mr-3"/>
                </div>

                <ButtonsAddToCartBtn text="25,00€" class="mt-10 mb-5" />
            </div>
            
        </div>
       
        <div class="w-6/12 flex flex-col">
            <div class="flex flex-col "> <!-- song bar -->


                <div class="flex flex-row">
                    <div class="flex flex-row w-4/12">
                        <img src="@/assets/img/HARO536707.jpg" alt="" class="w-2/6 mr-2">

                        <div class="flex flex-col">
                            <span class="text-2xl font-medium">yeh im mad</span>
                            <span class="text-orange-400">vitalee</span>
                        </div>
                    </div>

                    <div class="flex flex-row">
                        <span class="mr-16">2:56</span>

                        <div class="flex flex-row justify-between text-white">
                            <IconsForward class="w-6 h-6" />
                            <IconsPlay class="w-6 h-6" />
                            <IconsForward class="w-6 h-6 rotate-180" />
                        </div>
                    </div>

                    <div class="flex flex-row">
                        <IconsVolume class="w-6 h-6 mr-3" /> 
                        <input type="range">
                    </div>

                    <div>
                        <ButtonsAddToCartBtn text="25,00€" class="mt-10 mb-5" />
                    </div>
                    
                </div>



                <div>
                    <input type="range" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

</script>


<style>

</style>