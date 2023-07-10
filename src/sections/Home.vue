<script setup>
import Prompt from '../components/Prompt.vue'
import HelpItem from '../components/HelpItem.vue'
import { ref } from 'vue'

const key = ref('')

window.addEventListener('keypress', (e) => {
  const chars = 'haepc'

  const options = {
    a: ['#about', 'about me'],
    e: ['#experience', 'job experience'],
    p: ['#projects', 'my projects'],
    c: ['#contact', 'contact me']
  }

  if (e.key === 'h') {
    window.location.href = '#home'
  } else {
    if (chars.includes(e.key)) {
      key.value = options[e.key][1]
    }
    setTimeout(() => {
      if (chars.includes(e.key)) {
        window.location.href = options[e.key][0]
        key.value = ''
      }
    }, 300)
  }
})
</script>

<template>
  <section id="home" class="w-1/2 flex flex-col items-center justify-center h-screen mt-10">
    <h1 class="text-center mb-5 text-4xl">Richard Carrion - Full Stack Developer</h1>
    <div class="text-center mb-10">
      Experienced Software Engineer skilled in designing and implementing robust systems.
    </div>
    <p class="text-center">Let's create exceptional software solutions together.</p>

    <div class="w-3/4 mt-20">
      <div>
        <HelpItem char="a" wim="about me" />
        <HelpItem char="e" wim="job experience" />
        <HelpItem char="p" wim="projects" />
        <HelpItem char="c" wim="contact me" />
      </div>

      <Prompt :text="key" class="mt-5" />
    </div>
    <p class="text-center mt-52">or just scroll...&nbsp;</p>
  </section>
</template>

<style scoped></style>
