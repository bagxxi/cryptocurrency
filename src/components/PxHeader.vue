<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-black p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
         <router-link
          to="/">
          <div class="flex items-stretch ...">
            <div class="self-start ...">
              <img src="@/assets/stocks.png" class="mr-2" width="50px" height="50px"/>
            </div>
            <div class="self-end ...">
              <img src="@/assets/BAWSAQ_logo.png" class="mr-2" width="200px" height="100px"/>
            </div>
          </div>
        </router-link>
        </div>
        <div class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow"></div>
          <router-link
          to="/about"
          ><img src="@/assets/about.png" class="mr-2" width="100px" height="100px"/></router-link>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
export default {
    name:'PxHeader',

}
</script>