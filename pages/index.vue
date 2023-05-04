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
                <h2 class="text-white text-2xl font-bold z-10">Nos services</h2>

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

            <div class="flex flex-col items-center justify-center mt-12 mb-12">
                <h2 class="font-bold text-3xl">Pourquoi Feels Music ?</h2>
                <div class="flex justify-around items-center w-9/12 mt-52 mb-12">
                    <div class="relative w-[30%] p-4 text-left mb-20 rounded-2xl  h-[450px]">
                        <div class="absolute w-[95%] h-3/5  pt-20 bg-[#404040] -mt-[28%] z-2 flex justify-center pt- shadow-lg rounded-2xl text-orange-400">
                            <icons-music-note />
                        </div>
                        <div class="w-5/6">
                            <p class="text-white font-semibold text-2xl pt-36 pl-16  leading-[30px]">Nous proposons une grande variété de beats de qualité pour satisfaire tous les goûts musicaux, permettant ainsi aux artistes de trouver facilement le beat qui correspond à leur style et de créer des projets uniques et originaux.</p>
                        </div>                              
                    </div>
                    <div class="relative w-[30%] p-4 text-left mb-20 bg-[rgb(244,151,67)] text-black rounded-2xl shadow-md h-[450px]">
                        <div class="absolute w-[95%] h-3/5  pt-20 bg-[#404040] -mt-[28%] z-2 flex justify-center pt- shadow-lg rounded-2xl">
                            <icons-light />
                        </div>
                        <div class="w-10/12">
                            <p class="text-black font-semibold text-2xl pt-36 pl-16 leading-[30px]">Nous mettons en valeur les petits beatmakers afin qu'ils aient plus de visibilité, car nous croyons en leur potentiel et souhaitons leur offrir une plateforme pour toucher un public plus large et développer leur fan base.</p>
                        </div> 
                    </div>
                    <div class="relative w-[30%] p-4 text-left mb-20 rounded-2xl h-[450px]">
                        <div class="absolute w-[95%] h-3/5  pt-20 bg-[#404040] -mt-[28%] z-2 flex justify-center pt- shadow-lg rounded-2xl text-orange-400">
                            <icons-dollar />
                        </div>
                        <div class="w-10/12">
                            <p class="text-white font-semibold text-2xl pt-36 pl-16 leading-[30px]">Nous permettons aux beatmakers de développer leur communauté et leur audience en leur offrant une vitrine pour présenter leur travail et en leur donnant la possibilité de se connecter avec des artistes du monde entier, favorisant ainsi les collaborations et les opportunités de carrière.</p>
                        </div>             
                    </div>
                </div>
            </div>

            <!-- div placed like the ones above -->



                <h2 class="text-center">Dernières sorties</h2>
<div class="w-full flex items-center">
    <div class="grid grid-cols-4 gap-40 w-1/3">
        <div> sortie 1mmmmmmmmmmmmmmmmmmmmm</div>
        <div> sortie 2mmmmmmmmmmmmmmmmmmmmm</div>
        <div> sortie 3mmmmmmmmmmmmmmmmmmmmm</div>
        <div> sortie 4mmmmmmmmmmmmmmmmmmmmm</div>
    </div> 
</div>
            
        </body>
    </div>
</template>