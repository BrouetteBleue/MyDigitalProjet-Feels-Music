<template>
    <div class="flex flex-row justify-center py-10 lg:py-20">
        <ProfilePageSideBar :focus="5" class="hidden lg:flex" />

        <div class="flex flex-col justify-center items-center w-[88%] lg:w-7/12 ">
            <ProfilePageLikedPlaylists />
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