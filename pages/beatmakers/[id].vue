<template>
	<div class="flex flex-col justify-center items-center py-10 lg:py-20">

		<div class="flex flex-col lg:flex-row justify-between w-[88%] lg:w-[80%] "> 


			<div class="flex flex-col justify-start items-center lg:w-3/12 h-4/5 rounded-xl border-[1px] border-[#404040] bg-[#292929] pt-10">

				<div class="flex flex-row justify-center lg:justify-between items-center w-9/12">
					<img src="@/assets/img/HARO536707.jpg" class="w-8/12 rounded-full" alt="">
					<div class="text-orange-400 hidden lg:flex">
						<IconsShare class="w-[2.5em] h-[2.5em]" />
					</div>
				</div>

				<div class="flex flex-col justify-start items-center lg:items-start w-9/12">
					<div class="flex flex-row items-center">
						<div class="text-2xl text-center font-semibold mt-4 mb-5 mr-5">
							{{ beatmaker.pseudo }}
						</div>
						<div class="text-orange-400 flex lg:hidden">
							<IconsShare class="w-[2.5em] h-[2.5em]" />
						</div>
					</div>
					
					<div class="flex flex-col items-center lg:items-start justify-center mt-2 mb-8">
						<span class="flex flex-row mb-2">
							<IconsMail class="w-[1.2em] h-[1.2em] mr-2" /> {{ beatmaker.email }}
						</span>
						<span class="flex flex-row">
							<IconsInstagram class="w-[1.2em] h-[1.2em] mr-2" v-if="beatmaker.instagram" /> {{ beatmaker.instagram }}
						</span>
					</div>

					<div class="flex flex-col items-center lg:items-start mb-10">
						<span>
							Publications: {{ beatmaker.productionsCount }}
						</span>
						<span class="flex flew-row">
							Ouvert à une collab ? <IconsValid class="text-orange-400 w-[1.5em] h-[1.5em] ml-5" v-if="beatmaker.openToWork"/> <IconsCross class="text-orange-400 w-[1.5em] h-[1.5em] ml-5" v-else/>
						</span>
					</div>

					<div class="flex flex-row justify-between items-center w-9/12 lg:w-full mb-10 lg-mb-0">
						<ButtonsAddToCartBtn text="Contacter" iconName="Chat" class="h-[3em] rounded-lg"/>

						<IconsDanger class="text-orange-400 w-[2em] h-[2em]" />

					</div>


				</div>
			</div>



			<div class="flex flex-col justify-between lg:w-9/12 mt-10 lg:mt-0">
				<div class="w-full flex flex-row justify-center items-center mb-28">
					<div class="hidden lg:flex flex-col w-10/12">
						<CardsCardTrack 
							v-for="prod in data.productions"
							:key="prod.id"
							:beatmaker="beatmaker"
							:production="prod"
							:Beatmaker="true"
						/>
					</div>
				</div>
				
				
				<div class="flex flex-row w-full text-center justify-center ">
					Voir plus
				</div>
			</div>

		</div>

		


	</div>
</template>

<script setup>
import { ref } from 'vue';
const data = ref({});
const beatmaker = ref({});
const route = useRoute();

onMounted(async () => {
    const username = route.params.id; // Assurez-vous que le nom de paramètre corresponde à celui défini dans votre fichier de route.
    // const url = "http://localhost:3001/";
	const url =  "https://feelsmusic.fr/api/";
	$fetch(url + `user/${username}`, { 
                method: "GET",
            })
            .then((response) => {
				data.value = response.data.user;
               
                beatmaker.value = {
					pseudo: response.data.user.pseudo,
					country: response.data.user.country,
					avatar: response.data.user.avatar,
					phone: response.data.user.phone,
					email: response.data.user.email,
					instagram: response.data.user.instagram,
					productionsCount: response.data.user.productionsCount,
					openToWork: response.data.user.open_To_Work,
				};
				console.log(beatmaker);
            })
            .catch((error) => {
                console.error('An error occurred while fetching beatmakers:', error);
            });
});
</script>