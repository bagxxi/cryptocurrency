<template>
  <div class="grid grid-flow-col auto-cols-max">
    <div></div>
    <div>
      <router-link class="mt-5 text-xl text-green-600 hover:underline" to="/">
      <img id="floating" src="@/assets/404.png" class="mr-2" width="500px" height="500px"/>
      </router-link>
    </div>
    <div></div>
  </div>
</template>

<style>
#floating {   
  animation-name: floating; 
  animation-duration: 3s; 
  animation-iteration-count: infinite; 
  animation-timing-function: ease-in-out; 
  margin-left: 30px; 
  margin-top: 5px; 
  -webkit-filter: drop-shadow(20px 20px 20px #FFF);
 filter: drop-shadow(20px 20px 20px #FFF); 
};

@keyframes floating { 
  0% { transform: translate(0,  0px); } 
  50%  { transform: translate(0, 15px); } 
  100%   { transform: translate(0, -0px); }     
};
</style>
