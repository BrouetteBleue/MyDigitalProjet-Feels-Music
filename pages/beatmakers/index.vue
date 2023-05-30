<template>
    <div class="flex flex-col justify-center items-center w-full py-20">

        <div class="w-5/12 justify-center mb-20">
            <SearchBar class="h-[35px] w-full" :smallBar=true /> 
        </div>


        <div class="flex flex-row flex-wrap justify-center w-10/12">
            <CardsCardRound  class="w-[20%] mb-10" :idBeatmaker="1" :Beatmaker="true"/>
            <CardsCardRound  class="w-[20%] mb-10" :idBeatmaker="2" :Beatmaker="true"/>
            <CardsCardRound  class="w-[20%] mb-10" :idBeatmaker="3" :Beatmaker="true"/>
            <CardsCardRound  class="w-[20%] mb-10" :idBeatmaker="4" :Beatmaker="true"/>
            <CardsCardRound  class="w-[20%] mb-10" :idBeatmaker="5" :Beatmaker="true"/>
            <CardsCardRound  class="w-[20%] mb-10" :idBeatmaker="6" :Beatmaker="true"/>
            <CardsCardRound  class="w-[20%] mb-10" :idBeatmaker="7" :Beatmaker="true"/>
            <CardsCardRound  class="w-[20%] mb-10" :idBeatmaker="8" :Beatmaker="true"/>
            <CardsCardRound  class="w-[20%] mb-10" :idBeatmaker="9" :Beatmaker="true"/>
            <CardsCardRound  class="w-[20%] mb-10" :idBeatmaker="10" :Beatmaker="true"/>           
        </div>

        <div class="mt-10">
            <button>
                Voir plus
            </button>
        </div>
    
    </div>
</template>