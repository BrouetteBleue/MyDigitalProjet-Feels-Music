<template>
    <div>
        <body>
            <header class="relative h-[437px] flex flex-col justify-center items-center">
                <div class="bg-img absolute top-0 left-0 w-full h-full z-0">
                </div>
                <h1 class="text-white text-3xl font-bold mb-10 z-10">Vous souhaitez acheter et vendre des beats en toute simplicité et de manière sécurisée ? </h1>
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
                    <p class="text-white text-lg font-medium leading-[23px] mb-5 text-center">
                        Découvrez de nouveaux talents et développez votre communauté grâce à votre mise en avant sur FeelsMusic
                    </p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center mt-12">
                <h2 class="font-bold text-3xl">Pourquoi Feels Music ?</h2>
                <div class="flex justify-around items-center w-9/12 mt-52 mb-12">
                    <div class="relative w-[30%] p-4 text-left mb-20 rounded-2xl  h-[450px]">
                        <div class="absolute w-[100%] h-[45%]  items-center bg-[#404040] -mt-[28%] z-2 flex justify-center pt- shadow-lg rounded-2xl text-orange-400">
                            <icons-music-note />
                        </div>
                        <div class="w-11/12">
                            <p class="text-white font-semibold text-xl pt-36 pl-12">
                                Nous proposons une grande variété de beats de qualité pour satisfaire tous les goûts musicaux, permettant ainsi aux artistes de trouver facilement le beat qui correspond à leur style et de créer des projets uniques et originaux.
                            </p>
                        </div>                              
                    </div>
                    <div class="relative w-[30%]  text-left pt-1 mb-20 bg-[rgb(244,151,67)] text-black rounded-2xl shadow-md h-[450px]">
                        <div class="absolute w-[95%] h-[45%] ml-3 items-center bg-[#404040] -mt-[25%] z-2 flex justify-center shadow-lg rounded-2xl">
                            <icons-light />
                        </div>
                        <div class="w-11/12">
                            <p class="text-black font-semibold text-xl pt-36 pl-12 ">
                                Nous mettons en valeur les petits beatmakers afin qu'ils aient plus de visibilité, car nous croyons en leur potentiel et souhaitons leur offrir une plateforme pour toucher un public plus large et développer leur fan base.
                            </p>
                        </div> 
                    </div>
                    <div class="relative w-[30%] p-4 text-left mb-20 rounded-2xl h-[450px]">
                        <div class="absolute w-[100%] h-[45%]  items-center bg-[#404040] -mt-[28%] z-2 flex justify-center pt- shadow-lg rounded-2xl text-orange-400">
                            <icons-dollar />
                        </div>
                        <div class="w-11/12">
                            <p class="text-white font-semibold text-xl pt-36 pl-12">
                                Nous permettons aux beatmakers de développer leur communauté et leur audience en leur offrant une vitrine pour présenter leur travail et en leur donnant la possibilité de se connecter avec des artistes du monde entier, favorisant ainsi les collaborations et les opportunités de carrière.
                            </p>
                        </div>             
                    </div>
                </div>
            </div>

            <!-- div placed like the ones above -->



            <div class="flex flex-col items-center justify-center">
                <h2 class="text-left font-bold text-3xl mb-5 w-[78%]">Dernières sorties</h2>
                <BarsLatests />     
            </div>

            <div class="flex flex-col items-center justify-center">
                <h2 class="text-left font-bold text-3xl mb-8 w-[78%]">Les stars du moment</h2>
                <BarsCurrentStars/>     
            </div>

            <div class="flex flex-col items-center justify-center">
                <h2 class="text-left font-bold text-3xl mb-8 w-[78%]">Les playlists du moment</h2>
                <BarsTrendPlaylist/>     
            </div>
                       
        </body>
    </div>
</template>