<script setup>
import Header from './components/Header.vue'
import About from './sections/About.vue'
import Home from './sections/Home.vue'

</script>

<template>
  <Header />
  <main class="flex flex-col items-center bg-black text-2xl text-white">
    <Home />
    <About />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
