<template>
  <div id="app">
    <mains></mains>
  </div>
</template>

<script>
import Mains from '@/views/Mains.vue'

export default {
  name: 'App',
  components: {
    Mains
  }
}
</script>

<style scoped>
@import '@/assets/css/base.css';

#app {
  height: 100vh;
}
</style>
