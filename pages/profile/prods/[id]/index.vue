<template>
    <div class="flex flex-row justify-center py-20">
        <ProfilePageSideBar :focus="1" class="hidden lg:flex" />

        <div class="flex flex-col justify-center items-center w-7/12">
            <ProfilePageAddProdVue TypeForm="edit"/>
        </div>
    </div>
</template>

<script setup>
onBeforeMount(() => {
    if (process.client) {
        let token = localStorage.getItem("token")
        if(!token) {
            navigateTo("/connexion")
        }
    }
})
</script>