export default defineNuxtRouteMiddleware((to, from) => {
 

  // const cookie = process.client && window.localStorage.getItem('token') ? window.localStorage.getItem('token') : null;

  if(process.client) {
    let token = localStorage.getItem('token');
    
    console.log(token);

    if (token === null) {
      // abortNavigation();
      return navigateTo('/connexion');
    }
  }
  

  
});