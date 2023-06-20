<template>
    <div class="flex flex-row justify-center py-20">
        <ProfilePageSideBar :focus="1" class="hidden lg:flex" />

        <div class="flex flex-col justify-center items-center w-7/12 ">
            <ProfilePageProds />
        </div>
    </div>
</template>

<script setup>
// definePageMeta({
//   middleware: 'auth',
  
// });

onBeforeMount(() => {
    if (process.client) {
        let token = localStorage.getItem("token")
        if(!token) {
            navigateTo("/connexion")
        }
    }
})

</script>
