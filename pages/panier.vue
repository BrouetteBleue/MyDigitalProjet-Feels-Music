<template>
    <div class="flex flex-col w-full justify-center items-center my-20">
        <div class="flex flex-col w-8/12 items-center justify-center">
            <div class="flex flex-row justify-start w-full mb-10 ">
                <h1 class="text-[#9E9E9E] text-3xl font-extrabold">Panier</h1>
            </div>

            <div class="flex flex-col w-full">
                <CardsCardPanier class="mb-10"/>
                <CardsCardPanier class="mb-10"/>
            </div>

            <div class="w-full text-end text-[#F49C4D]">
                TOTAL: 20€
            </div>
            <div class="flex flex-row justify-end w-full">
                <div>
                    <input type="checkbox" name="cvg" class="mr-5">
                </div>
                J'accepte les conditions générales de vente et d'utilisation
            </div>

            <div class="w-full text-end">
                <button class="bg-[#FFDF00] rounded-lg text-black p-3">
                    Payer avec paypal
                </button>
            </div>


        </div>
    </div>
    
</template>