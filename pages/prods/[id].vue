<template>
    <div class="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-evenly  my-20">
        
        <div class="flex flex-col justify-center w-10/12 h-3/4 lg:w-[29%] bg-[#292929] border-2 border-[#3D3D3D] rounded-3xl py-5 ">
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
                    <span class="mr-6">vitalee</span>   <ButtonsAddToCartBtn text="Contacter" iconName="Chat" />
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
       
        <div class="w-10/12 lg:w-6/12 flex flex-col">
            <div class="flex flex-col items-center bg-[#292929] border-2 border-[#3D3D3D] rounded-xl pt-2"> <!-- song bar -->


                <div class="flex flex-row items-center">
                    <div class="flex flex-row w-4/12 items-center px-2 invisible lg:visible">
                        <img src="@/assets/img/HARO536707.jpg" alt="" class="w-3/12 mr-2 rounded-xl">

                        <div class="flex flex-col ">
                            <span class="text-2xl font-medium">yeh im mad</span>
                            <span class="text-orange-400">vitalee</span>
                        </div>
                    </div>

                    <div class="flex flex-row w-[30%] justify-center items-center">
                        <span class="mr-16">2:56</span>

                        <div class="flex flex-row justify-between items-center text-white">
                            <IconsForward class="rotate-180"/>
                            <IconsPlay class="mx-2" />
                            <IconsForward  />
                        </div>
                    </div>

                    <div class="flex flex-row justify-between items-center w-[36%]">
                        
                        <div class="flex flex-row text-white">
                            <IconsVolume class="w-6 h-6 mr-3" /> 
                            <input type="range">
                        </div>

                        <div>
                            <ButtonsAddToCartBtn text="25,00€" class="mt-8 mb-5 invisible lg:visible" />
                        </div>                       
                    </div>
                    
                </div>



                <div class="flex flex-row h-4 w-[99%] justify-center items-center">
                    <input type="range" />
                </div>
            </div> <!-- song bar -->


            <div class="flex flex-col bg-[#292929] border-2 border-[#3D3D3D] rounded-xl pt-2 pb-12 mt-12">

                <div class="flex flex-row w-full items-center py-5">
                    <img class="rounded-full w-[60px] h-[60px] ml-6 lg:ml-14" src="@/assets/img/HARO536707.jpg" alt="">
                   
                    <div class="flex flex-col lg:flex-row w-full items-center py-5">
                        <div class="text-sm font-normal w-11/12 pl-1 mb-2">
                            <input type="text" placeholder="Écrire un commentaire..." class="border-b-2 border-[#3D3D3D] bg-transparent text-[#3D3D3D] w-11/12 ml-6 mr-5">
                        </div>
                        <div > 
                            <ButtonsAddToCartBtn text="Envoyer" iconName="" class="mt-8 mb-5 mr-8" />
                        </div>
                    </div>
                        

                     
                </div>
    
                <CardsCardComment />
                <CardsCardComment />
                <CardsCardComment /> 
                <CardsCardComment />
                <CardsCardComment />
            </div>

            <div class="text-center mt-10">
                Voir plus
            </div>

        </div>
    </div>
</template>


<script setup>

</script>


<style>

</style>