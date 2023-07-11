<script setup>
import Header from './components/Header.vue'
import About from './sections/About.vue'
import Home from './sections/Home.vue'
import Experience from './sections/Experience.vue'

</script>

<template>
  <Header />
  <main class="flex flex-col items-center bg-black text-2xl text-white">
    <Home />
    <About />
    <Experience />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
