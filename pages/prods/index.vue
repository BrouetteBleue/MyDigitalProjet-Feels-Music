<template>
    <div class="flex flex-col justify-center items-center">
        <div class="flex w-[80%] justify-end">
            <ButtonsSelect text="Popularité" class="w-[15%]"/>
        </div>

        <div class="flex flex-row justify-between w-[80%] ">
            <div class="flex flex-col justify-center items-center w-3/12 h-[16em] rounded-xl border-[1px] border-[#404040] bg-[#292929]">
                <ButtonsSelect text="Catégories"/>
                <ButtonsSelect text="Style"/>
                <input type="range"  min="0" max="100" class="text-[#CFCFCF] bg-[#292929]" >
            </div>



            <div class="flex flex-col justify-between w-[70%]">
                <BarsTrackList />
            </div>

        </div>
        
       
    </div>
</template>




<style>
    .select-container {
      position: relative;
    }
    .select-container select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
    .select-arrow {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: rotate(90deg) translateY(25%) translateX(-50%);
      pointer-events: none;
    }

    input[type=range] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  margin-top: 15px;
  height: 4px;
  background-color: #979797; /* Couleur de la barre de progression */
  cursor: pointer;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  background-color: #979797; /* Couleur du curseur */
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -6px; /* Centrer le curseur sur la barre */
}

input[type=range]::-moz-range-thumb {
  background-color: #979797; /* Couleur du curseur */
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
}

input[type=range]::-ms-thumb {
  background-color: #979797; /* Couleur du curseur */
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -6px; /* Centrer le curseur sur la barre */
}

input[type=range]::-webkit-slider-runnable-track {
  background-color: #979797; /* Couleur de la barre de progression */
  height: 4px;
  cursor: pointer;
}

input[type=range]::-moz-range-track {
  background-color: #979797; /* Couleur de la barre de progression */
  height: 4px;
  cursor: pointer;
}

input[type=range]::-ms-track {
  background-color: #979797; /* Couleur de la barre de progression */
  height: 4px;
  cursor: pointer;
  border: none;
}
  </style>