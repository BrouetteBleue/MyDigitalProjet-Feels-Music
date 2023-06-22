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
        
        if (token) {
            const [, payload,] = token.split('.');
            const decodedPayload = JSON.parse(atob(payload));
            const expirationDate = decodedPayload.exp;

            console.log(expirationDate)
            if (expirationDate < new Date().getTime() / 1000) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigateTo("/connexion")
            }
        }else {
            console.log("no token")
            navigateTo("/connexion")
        }
    }
})

</script>
