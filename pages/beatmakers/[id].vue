<template>
	<div class="flex flex-col justify-center items-center py-20">

		<div class="flex flex-row justify-between w-[80%] "> 


			<div class="flex flex-col justify-start items-center w-3/12 rounded-xl border-[1px] border-[#404040] bg-[#292929] pt-10">

				<div class="flex flex-row justify-between items-center w-9/12">
					<img src="@/assets/img/HARO536707.jpg" class="w-8/12 rounded-full" alt="">
					<div class="text-orange-400">
						<IconsShare class="w-[2.5em] h-[2.5em]" />
					</div>
				</div>

				<div class="flex flex-col justify-start items-start w-9/12">
					<div class="text-2xl text-center font-semibold mt-4 mb-5">
						Ben Jones Beats
					</div>
					<div class="flex flex-col items-start justify-center mt-2 mb-8">
						<span class="flex flex-row mb-2">
							<IconsMail class="w-[1.2em] h-[1.2em] mr-2" /> benjonesbeats@gmail.com
						</span>
						<span class="flex flex-row">
							<IconsInstagram class="w-[1.2em] h-[1.2em] mr-2" /> benjonesbeats
						</span>
					</div>

					<div class="flex flex-col mb-10">
						<span>
							Publications: 23
						</span>
						<span class="flex flew-row">
							Ouvert à une collab ? <IconsValid class="text-orange-400 w-[1.5em] h-[1.5em] ml-5"/>
						</span>
					</div>

					<div class="flex flex-row justify-between items-center w-full ">
						<ButtonsAddToCartBtn text="Contacter" iconName="Chat" class="h-[3em] rounded-lg"/>

						<IconsDanger class="text-orange-400 w-[2em] h-[2em]" />

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