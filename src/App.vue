<template>
  <div>
    <the-header/>
    <the-menu/>
    <the-content/>
  </div>
</template>

<script>
import TheContent from './components/layout/TheContent.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheMenu from './components/layout/TheMenu.vue'


export default {
  name: "App",
  components: {
    TheContent,
    TheHeader,
    TheMenu
  
  },
}
</script>

<style>
@import './assets/css/main.css';
</style>
