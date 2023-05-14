<template>
	<div class="flex flex-col justify-center items-center py-20">

		<div class="flex flex-row justify-between w-[80%] "> 


			<div class="flex flex-col justify-center w-10/12 h-3/4 lg:w-[29%] bg-[#292929] border-2 border-[#3D3D3D] rounded-3xl py-5 ">
            <div class="flex flex-row justify-center w-full pb-5">
                <img src="@/assets/img/HARO536707.jpg" alt="" class="w-6/12 h-[280px]">
                
                <div class="flex flex-col w-3/12 justify-start ml-10">
                    <div class="flex flex-row">
                        <IconsHeart class="mr-3 mb-3 w-[1.5em] h-[1.5em] text-white" /> 345
                    </div>

                    <button class="rounded-xl bg-[#181818] text-orange-400 mt-5 flex flex-row justify-evenly w-24 items-center font-medium">
                        share <IconsShare />
                    </button>  
                    
                    <div class="pt-20"> 
                        02/04/2023
                    </div> 
                    
                </div>
            </div>
            <div class="flex flex-col pl-11">
                <div class="text-4xl font-medium mb-6"> 
                    Yeh im mad  
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

            </div>
            
        </div>



			<div class="flex flex-col justify-between w-[70%]">
				<BarsTrackList />
				<div class="flex flex-row w-full text-center justify-center ">
					Voir plus
				</div>
			</div>

		</div>

		


	</div>
</template>