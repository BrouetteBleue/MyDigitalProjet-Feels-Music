<template>
    <div class="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-evenly my-10 lg:my-20">
        
        <div class="flex flex-col justify-center w-10/12 h-3/4 lg:w-[29%] bg-[#292929] border-2 border-[#3D3D3D] rounded-3xl py-5 ">
            <div class="flex flex-col lg:flex-row justify-center items-center w-full pb-5">
                <div class="w-8/12 lg:w-6/12 flex flex-row justify-center">
                    <img src="@/assets/img/HARO536707.jpg" alt="" class="w-full rounded-xl max-h-[280px]">
                </div>
                
                <div class="flex flex-col lg:w-3/12 justify-start lg:ml-10">
                    <div class="flex flex-row lg:flex-col mt-5">
                        <div class="flex flex-row  mr-5">
                        <IconsHeart class="mr-1 lg:mr-3 mb-3 w-[1.5em] h-[1.5em] text-white" /> {{ data.likes }}
                        </div>
                        <div class="flex flex-row mr-5">
                            <IconsEye class="mr-1 lg:mr-3 mb-3 w-[1.5em] h-[1.5em]" /> {{ data.views }}
                        </div>
                        <div class="flex flex-row mr-5">
                            <IconsDownload class="mr-1 lg:mr-3 mb-3 w-[1.5em] h-[1.5em]"/> {{ data.downloads }}
                        </div>
                    </div>
                    
                    <!-- mobile -->
                    <div class="flex flex-row justify-center lg:hidden">
                        <div class="mr-5">
                        {{ data.bpm }} BPM
                        </div>
                        <div> 
                           {{  data.created_at }}
                        </div>
                    </div> 
                    <!-- mobile -->

                    <!-- big -->
                    <button class="rounded-xl bg-[#181818] text-orange-400 mt-5 flex-row justify-evenly w-24 items-center font-medium hidden lg:flex">
                        share <IconsShare />
                    </button>  
                    
                    <div class="pt-20 hidden lg:flex flex-col">
                        <div>
                            {{ data.bpm }} BPM
                        </div>
                        <div> 
                            {{  data.created_at }}
                        </div>
                    </div> 
                    <!-- big -->
                    
                </div>
            </div>
            <div class="flex flex-col items-center lg:items-start pl-0 lg:pl-11">
                <div class="text-2xl lg:text-4xl font-medium mb-3 lg:mb-6"> 
                    {{  data.title }}
                </div>

                <div class="flex flex-row text-xl mb-6">
                    <span class="mr-6">{{ data.account?.pseudo}}</span>   <ButtonsAddToCartBtn text="Contacter" iconName="Chat" />
                </div>

                <div class="flex flex-row mb-4">
                    <span class="text-[#878787] text-base">Catégorie:</span>  <span class="font-medium text-base ml-4">{{ data.category?.name}}</span>
                </div>

                <div class="flex flex-row flex-wrap justify-center">
                    <ButtonsKeyword text="808" class="mr-3 mb-3" />
                    <ButtonsKeyword text="lil baby" class="mr-3 mb-3" />
                    <ButtonsKeyword text="rap" class="mr-3 mb-3"/>
                    <ButtonsKeyword text="type beat" class="mr-3 mb-3"/>
                    <ButtonsKeyword text="type beat" class="mr-3 mb-3"/>
                    <ButtonsKeyword text="type beat" class="mr-3 mb-3"/>
                </div>

                <ButtonsAddToCartBtn :text="data.price +' €'" iconName="Cart" class="mt-10 mb-5" />

                <button class="rounded-xl bg-[#181818] text-orange-400 mt-5 flex-row justify-evenly w-24 items-center font-medium flex lg:hidden">
                        share <IconsShare />
                </button> 
            </div>
            
        </div>
       
        <div class="w-10/12 lg:w-6/12 flex flex-col">
            <div class="flex flex-col items-center bg-[#292929] border-2 border-[#3D3D3D] rounded-xl pt-2 min-w-[115%] lg:min-w-full -ml-6 lg:-ml-0"> <!-- song bar -->


                <div class="flex flex-row items-center">
                    <div class="flex flex-row w-4/12 items-center px-2 invisible lg:visible">
                        <img src="@/assets/img/HARO536707.jpg" alt="" class="w-3/12 mr-2 rounded-xl">

                        <div class="flex flex-col ">
                            <span class="text-2xl font-medium">{{ data.title }}</span>
                            <span  class="text-orange-400">{{ data.account?.pseudo}}</span>
                            <!-- <span v-else> loading</span> -->
                        </div>
                    </div>

                    <div class="flex flex-row w-[30%] justify-center items-center">
                        <span class="mr-16">2:56</span>

                        <div class="flex flex-row justify-between items-center text-white">
                            <button @click="handleSkipBackward">
                                <IconsForward class="rotate-180" />
                            </button>
                            <button @click="handlePlay">
                                <IconsPlay v-if="!isTimerPlaying" class="mx-2" />
                                <IconsPause v-if="isTimerPlaying" class="mx-2" />
                            </button>
                            <button @click="handleSkipForward">
                                <IconsForward />
                            </button>
                        </div>
                    </div>

                    <div class="flex flex-row justify-between items-center w-[36%]">
                        
                        <div class="hidden lg:flex flex-row text-white">
                            <IconsVolume class="w-6 h-6 mr-3 mt-1" /> 
                            <input type="range" min="0" max="0.3" step="0.005" @input="handleVolume" id="volume">
                        </div>

                        <div>
                            <ButtonsAddToCartBtn :text="data.price +' €'" iconName="Cart" class="mt-8 mb-5 invisible lg:visible" />
                        </div>                       
                    </div>
                    
                </div>



                <div class="flex flex-row h-4 w-[99%] justify-start items-center">
                    <!-- <div class="flex flex-row cursor-pointer relative bg-[#979797] h-[0.4rem] w-full mt-5 z-[1]" id="progress">    
                        <div class="cursor-pointer relative bg-white h-[0.4rem]" id="progressBar"></div>  
                        <div class="bg-white h-[1.2rem] w-[1.2rem] translate-x-[-50%] translate-y-[-32%] rounded-full z-10 shadow-xl shadow-orange-400" id="progressHead"></div> 
                    </div> -->
                    <div class="grid grid-cols-2 w-full">
                        <div class="col-span-2 h-[0.4rem] relative cursor-pointer bg-gray-500 rounded-full mt-5" id="progressBarContainer" @click="(event) => handleSetTime(event)"> 
                            <div class="h-full bg-white w-0 rounded-full z-20" id="progressBar"></div>
                            <div class="absolute bg-white h-[1.2rem] w-[1.2rem] top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-10 mt-1" id="progressHead"></div>
                        </div>
                    </div>
                </div>
            </div> <!-- song bar -->


            <div class="flex flex-col bg-[#292929] border-2 border-[#3D3D3D] rounded-xl pt-2 pb-12 mt-12">

                <div class="flex flex-row w-full items-center py-5">
                    <img class="rounded-full w-[60px] h-[60px] ml-6 lg:ml-14" src="@/assets/img/HARO536707.jpg" alt="">
                   
                    <!-- <div class="flex flex-col lg:flex-row w-full items-center py-5"> -->
                        <div class="text-sm font-normal w-8/12 lg:w-11/12 pl-1 mb-2">
                            <input type="text" placeholder="Écrire un commentaire..." class="border-b-2 border-[#3D3D3D] bg-transparent text-white w-11/12 ml-6 mr-5">
                        </div>
                        <div > 
                            <ButtonsAddToCartBtn text="Envoyer" class="mt-8 mb-5 mr-8 hidden lg:flex" />
                        </div>
                    <!-- </div> -->
                            
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

import { ref } from 'vue';

const data = ref({});
const prod = ref({});
const route = useRoute();

onMounted(async () => {
    const param = route.params.id; // Assurez-vous que le nom de paramètre corresponde à celui défini dans votre fichier de route.
    const url = "http://localhost:3001/";
    // const url =  "https://feelsmusic.fr/api/";
    $fetch(`${url}production/${param}`, { 
                method: "GET",
            })
            .then((response) => {
				data.value = response.data.production;
               
                // prod.value = {
				// 	pseudo: response.data.user.pseudo,
				// 	country: response.data.user.country,
				// 	avatar: response.data.user.avatar,
				// 	phone: response.data.user.phone,
				// 	email: response.data.user.email,
				// 	instagram: response.data.user.instagram,
				// 	productionsCount: response.data.user.productionsCount,
				// 	openToWork: response.data.user.open_To_Work,
				// };
				console.log(data.value.account.pseudo);
            })
            .catch((error) => {
                console.error('An error occurred while fetching beatmakers:', error);
            });
});


let tracks = [
    {
        name: "Chargé ta grand mere",
        artist: "Kaaris",
        cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?crop=entropy&cs=tinysrgb&fm=jpg",
        source: "/audio/charge.mp3",
    },
    {
        name: "Hip Hop 02",
        artist: "Artist 2",
        cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885?crop=entropy&cs=tinysrgb&fm=jpg",
        source: "https://assets.mixkit.co/music/download/mixkit-hip-hop-02-738.mp3",
    },
    {
        name: "Dreaming Big",
        artist: "Artist 3",
        cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?crop=entropy&cs=tinysrgb&fm=jpg",
        source: "https://assets.mixkit.co/music/download/mixkit-dreaming-big-31.mp3",
    },
];

let audio = null;
let barWidth = null;
let duration = null;
let currentTime = null;
let currentTrackIndex = 0;
let currentTrack = tracks[0];

    let isTimerPlaying = ref(false);

    const handleVolume = (event) => {
        audio.volume = event.target.value;
        console.log("VOLUME AUDIO : "+audio.volume);
        console.log("valeur input : "+event.target.value);
    }


    const handleSkipForward = () => {
        if (currentTrackIndex < tracks.length - 1) {
            currentTrackIndex++;        
        } else {
            currentTrackIndex = 0;
        }

        currentTrack = tracks[currentTrackIndex];

        audio.src = currentTrack.source;
        handlePlay();
    }

    const handleSkipBackward = () => {
        if (currentTrackIndex > 0) {
            currentTrackIndex--;
            
        } else {
            currentTrackIndex = tracks.length - 1;
        }
        
        currentTrack = tracks[currentTrackIndex];

        audio.src = currentTrack.source;

        handlePlay();
    }


    const handlePlay = () => {
        if (!audio) { // pour eviter les erreurs 500 au rechargement 
            audio = new Audio();
            audio.src = currentTrack.source;
            audio.volume = 0.1;
            document.getElementById("volume").value = 0.1;

            audio.onloadedmetadata = () => {
                audio.oncanplay = () => {
                    // Code à exécuter lorsque l'audio peut être lu
                    // audio.volume = 0.1;
                    // document.getElementById("volume").value = 0.1;

                };
            };

            audio.ontimeupdate = () => {
                // Code à exécuter pendant la lecture
                console.log(audio.duration);

                if(audio.duration) {
                    barWidth = (100 / audio.duration) * audio.currentTime;


                    // on met a jour le temps (pour l'instant pas besoin)
                    let durmin = Math.floor(audio.duration / 60);
                    let dursec = Math.floor(audio.duration - durmin / 60);
                    let curmin = Math.floor(audio.currentTime / 60);
                    let cursec = Math.floor(audio.currentTime - curmin / 60);

                    if (durmin < 10) {
                        durmin = "0" + durmin;
                    }
                    if (dursec < 10) {
                        dursec = "0" + dursec;
                    }
                    if (curmin < 10) {
                        curmin = "0" + curmin;
                    }
                    if (cursec < 10) {
                        cursec = "0" + cursec;
                    }


                    // if the song is finished
                    if (audio.currentTime == audio.duration) {
                        handleSkipForward();
                    }

                    // audio.volume = 0.055;


                }
                console.log(barWidth);

                // on met a jour la barre de progression
                document.getElementById('progressHead').style.left = barWidth + '%';
                document.getElementById('progressBar').style.width = barWidth + '%';
                
            };

            audio.onplay = () => {
                isTimerPlaying.value = true;
            };

            audio.onpause = () => {
                isTimerPlaying.value = false;
            };
        }


        if (audio.paused) {
            audio.play();
            isTimerPlaying.value = true;
        } else {
            audio.pause();
            isTimerPlaying.value = false;
        }
    };


    const handleSetTime = (x) => {
        // let maxDuration = audio.duration;
        let position = x.pageX - document.getElementById("progressBarContainer").offsetLeft;
        let percentage = (100 * position) / document.getElementById("progressBarContainer").offsetWidth;
        if(percentage > 100) {
            percentage = 100;
        }
        if(percentage < 0) {
            percentage = 0;
        }

        audio.currentTime = (audio.duration * percentage) / 100;
        document.getElementById('progressHead').style.left = percentage + '%';
        document.getElementById('progressBar').style.width = percentage + '%';
    }


    // quand le composant est détruit : on coupe le son sinon ca reste tout le temps en fond
    onBeforeUnmount(() => { 
        if (audio) {
            audio.pause();
            audio.currentTime = 0;

            // ces deux ligne c pour optimiser la mémoire (on vide la source et on recharge le lecteur) ca peut aider a vider la mémoire plus vite c pas sur a 100% que ce soit vraiment efficace
            audio.src = '';
            audio.load();
        }
    });
    

    
</script>
