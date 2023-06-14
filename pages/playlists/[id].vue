<template>
	<div class="flex flex-col justify-center items-center py-10 lg:py-20">

		<div class="flex flex-col lg:flex-row justify-between w-[88%] lg:w-[80%] "> 
			<div class="flex flex-col justify-center w-full h-3/4 lg:w-[29%] bg-[#292929] border-2 border-[#3D3D3D] rounded-3xl py-5 mb-10">
                <div class="flex flex-col lg:flex-row justify-center w-full pb-5">
                    <div class="flex flex-row justify-center w-full lg:w-6/12">
                        <img src="@/assets/img/HARO536707.jpg" alt="" class="w-7/12 lg:w-full h-[220px] lg:h-[280px]" />
                    </div>
                    
                    <div class="flex lg:hidden justify-center text-4xl font-medium mb-3 mt-5"> 
                        Yeh im mad  
                    </div>
                    <div class="flex flex-row items-center lg:flex-col lg:w-3/12 justify-center lg:justify-start lg:ml-10">
                        <div class="flex flex-row mr-3 lg:mr-0">
                            <IconsHeart class="mr-3 lg:mb-3 w-[1.5em] h-[1.5em] text-white" /> 345
                        </div>

                        <button class="rounded-xl bg-[#181818] text-orange-400 lg:mt-5 flex flex-row justify-evenly w-24 items-center font-medium mr-3 lg:mr-0">
                            share <IconsShare />
                        </button>  
                        
                        <div class="lg:pt-20"> 
                            02/04/2023
                        </div> 
                        
                    </div>
                </div>
                <div class="flex flex-col items-center lg:items-start pl-11">
                    <div class="hidden lg:flex text-4xl font-medium mb-6"> 
                        Yeh im mad  
                    </div>

                    <div class="flex flex-row mb-4">
                        <span class="text-[#878787] text-base">Catégorie:</span>  
                        <span class="font-medium text-base ml-4">Hip-hop</span>
                    </div>

                    <div class="flex flex-row flex-wrap">
                        <ButtonsKeyword text="808" class="mr-3 mb-3" />
                        <ButtonsKeyword text="lil baby" class="mr-3 mb-3" />
                        <ButtonsKeyword text="rap" class="mr-3 mb-3"/>
                        <ButtonsKeyword text="type beat" class="mr-3 mb-3"/>
                    </div>
                </div> 
            </div>

			<div class="flex flex-col justify-between lg:w-[70%]">
				<BarsTrackList />
				<div class="flex flex-row w-full text-center justify-center ">
					Voir plus
				</div>
			</div>

		</div>
	</div>
</template>