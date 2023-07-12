<script setup>
import Navbar from './components/Navbar.vue'
import About from './views/about/About.vue'
import Home from './views/home/Home.vue'
import Experience from './views/experience/Experience.vue'
import Projects from './views/projects/Projects.vue'
import ContactMe from './components/ContactMe.vue'
</script>

<template>
  <Navbar />
  <main class="flex flex-col items-center bg-black text-2xl text-white">
    <Home />
    <About />
    <Experience />
    <Projects />


  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
