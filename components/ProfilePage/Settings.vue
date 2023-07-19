<template>
    <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between w-full mb-5">
                    <h1 class="text-[#9E9E9E] text-xl lg:text-3xl font-extrabold lg:font-bold">Informations personnelles</h1>
                </div>
                <div class="flex flex-col justify-center items-center rounded-xl bg-[#292929] border-[1px] border-[#3D3D3D] pb-16">
                    <div class="flex flex-row items-end ml-8 lg:ml-0 my-8 lg:my-16">
                        <img src="@/assets/img/HARO536707.jpg" alt="" class="rounded-full w-[100px] ">
                        <IconsPen class="w-[2em] h-[2em] text-[#9E9E9E]"/>
                    </div>

                    <div class="flex flex-col lg:flex-row flex-wrap w-11/12 lg:w-full justify-center">
                        <input type="text" class="w-full lg:w-[40%] rounded-xl border-[1px] bg-transparent border-[#3D3D3D] lg:mr-[5%] lg:mb-10 mb-5 px-3 py-2" placeholder="Prenom">
                        <input type="text" class="w-full lg:w-[40%] rounded-xl border-[1px] bg-transparent border-[#3D3D3D] lg:ml-[5%] lg:mb-10 mb-5 px-3 py-2" placeholder="Nom">
                        <input type="text" class="w-full lg:w-[40%] rounded-xl border-[1px] bg-transparent border-[#3D3D3D] lg:mr-[5%] lg:mb-10 mb-5 px-3 py-2" placeholder="Nom d'utilisateur">
                        <input type="text" class="w-full lg:w-[40%] rounded-xl border-[1px] bg-transparent border-[#3D3D3D] lg:ml-[5%] lg:mb-10 mb-5 px-3 py-2" placeholder="Tél">
                    </div>

                    <div class="flex flex-row flex-wrap w-11/12 lg:w-full justify-center">
                        <input type="text" class="w-full lg:mx-[5%] rounded-xl border-[1px] bg-transparent border-[#3D3D3D] lg:mr-[5%] mb-5 lg:mb-10 px-3 py-2" placeholder="Adresse e-mail">
                    </div>
                    <div class="flex flex-row flex-wrap w-11/12 lg:w-full justify-center">
                        <input type="text" class="w-full lg:w-[40%] rounded-xl border-[1px] bg-transparent border-[#3D3D3D] lg:mr-[5%] mb-5 lg:mb-10 px-3 py-2" placeholder="Pays">
                        <input type="text" class="w-full lg:w-[40%] rounded-xl border-[1px] bg-transparent border-[#3D3D3D] lg:ml-[5%] mb-5 lg:mb-10 px-3 py-2" placeholder="Instagram">
                    </div>

                    <div class="flex flex-row flex-wrap w-11/12 lg:w-full justify-center mb-10">
                        <span class="text-[#9CA1A1] mr-5">Ouvert à une collaboration ? </span>
                        <button class="flex flex-row items-center text-[#9CA1A1] rounded-full border-[1px] border-[#3D3D3D]  px-4">
                            OUI <IconsValid class="w-[2em] h-[2em] text-[#F49743] ml-2 "/>
                        </button>
                    </div>

                    <div class="flex flex-row justify-center lg:justify-end w-full ">
                        <ButtonsAddToCartBtn class="text-lg w-24 h-[50px] rounded-xl mx-[5%]" text="Valider"/> 
                    </div>
                </div>
                
            </div>
</template>
<script setup>

</script>
