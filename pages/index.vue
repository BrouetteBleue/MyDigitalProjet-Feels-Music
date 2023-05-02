<template>
    <div>
        <body>
            <header class="relative h-[437px] flex flex-col justify-center items-center">
                <div class="bg-img absolute top-0 left-0 w-full h-full z-0">
                </div>
                <h1 class="text-white text-[32px] font-bold mb-10 z-10">Vous souhaitez acheter et vendre des beats en toute simplicité et de manière sécurisée ? </h1>
                <div class="signup-container z-10 w-[40%] md:w-[15%] text-2xl ">
                    <nuxt-link to="/connexion">
                        <buttons-rounded-button text="S'inscrire" class="text-[1.1vw]" />
                    </nuxt-link>                 
                <!-- <button class="signin-btn bg-[#F49743] w-full h-[50px] text-black font-semibold rounded-lg z-10">S'inscrire</button> -->
                </div>
                <hr class="border-1 border-orange-400 w-1/2 mt-20  mb-16 z-10">
                <div class="fade z-0"></div>
            </header>

            <div class="flex flex-col items-center justify-center mt-[-10px] mb-[2.5%] z-10">
                <h2 class="text-white text-2xl font-bold  z-10">Nos services</h2>

                <div class="flex justify-around items-center mt-12 mb-12 w-[70%]">
                    <div class="w-[22%]">
                    <div class="w-full h-full flex justify-center mb-[20%]">
                        <icons-shopping-bag />
                    </div>
                    <p class="text-white text-lg font-medium leading-[23px] mb-5 text-center">Achetez facilement et de manière sécurisée des beats de qualité, destinés aux professionnels comme aux amateurs de musique.</p>
                    </div>
                    <div class="w-[22%]">
                    <div class="w-full h-full flex justify-center mb-[20%]">
                        <icons-tag />
                    </div>
                    <p class="text-white text-lg font-medium leading-[23px] mb-5 text-center">Vendez facilement et rapidement vos beats, directement sur la plateforme, en fixant vos propres prix et en développant votre notoriété</p>
                    </div>
                    <div class="w-[22%] ">
                    <div class="w-full h-full flex justify-center mb-[20%]">
                        <icons-search-icon />
                    </div>
                    <p class="text-white text-lg font-medium leading-[23px] mb-5 text-center">Découvrez de nouveaux talents et développez votre communauté grâce à votre mise en avant sur FeelsMusic</p>
                    </div>
                </div>
                </div>
            
        </body>
    </div>
</template>