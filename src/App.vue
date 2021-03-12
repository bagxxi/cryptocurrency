<template>
  <main class="bg-fixed ..." style="background-image: url('@/assets/currencies.jpeg')">
    <px-header />

    <router-view class="container px-5 sm:px-20 py-20 w-screen justify-center" />
  </main>
</template>

<script>
import PxHeader from '@/components/PxHeader'

export default {
  name: 'app',
  components: { PxHeader }
}
</script>

<style>
@font-face {
  font-family: "Pricedown";
  src: local("Pricedown"),
  url(./fonts/pricedownbl.ttf) format("truetype");
}
#app {
  font-family: 'Pricedown', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
