<template>
    <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center w-7/12 bg-[#262626] rounded-lg">
            <div class="w-full text-center text-white text-2xl">
                S'inscrire
            </div>

            <div class="flex flex-col justify-center items-center w-full">
                <div class="flex flex-row justify-between w-full mt-10">
                    <InputsInputFormConnection text="Nom" />
                    <InputsInputFormConnection text="Prénom" />
                </div>
                <div class="flex flex-row justify-between w-full mt-10">
                    <InputsInputFormConnection text="Email" />
                    <InputsInputFormConnection text="Mot de passe" />
                </div>
                <div class="flex flex-row justify-between w-full mt-10">
                    <InputsInputFormConnection text="Pseudo" />
                    <InputsInputFormConnection text="Confirmer mot de passe" />
                </div>
                <div class="flex flex-row justify-between w-full mt-10">
                    <InputsInputFormConnection text="Date de naissance" />
                    <InputsInputFormConnection text="Ville" />
                </div>
                <div class="flex flex-row justify-between w-full mt-10">
                    <InputsInputFormConnection text="Pays" />
                    <InputsInputFormConnection text="Code postal" />
                </div>
                <div class="flex flex-row justify-between w-full mt-10">
                    <InputsInputFormConnection text="Numéro de téléphone" />
                </div>
            </div>


            

        </div>
    </div>
</template>