<script setup>
import Prompt from '../../components/Prompt.vue'
import HelpItem from './components/HelpItem.vue'
import { ref } from 'vue'

const key = ref('')

window.addEventListener('keypress', (e) => {
  const chars = 'haepc'

  const options = {
    a: ['#about', 'about me'],
    e: ['#experience', 'experience'],
    p: ['#projects', 'projects'],
    c: ['#contact-me', 'contact me']
  }

  console.log(e)

  if (scrollY > 650 && chars.includes(e.key)) {
    window.location.href = options[e.key][0]
  }

  if (scrollY < 3000) {
    if (e.key === 'h') {
      window.location.href = '#home'
    } else {
      if (chars.includes(e.key)) {
        key.value = options[e.key][1]
        document.getElementById('home-console').classList.add('animate-typing')
        document.getElementById('cursor').classList.add('hidden')
        document.getElementById('home-console').classList.remove('hidden')
        document.getElementById('home-console').addEventListener('animationend', () => {
          console.log(options[e.key][0])
          window.location.href = options[e.key][0]
        })
      }
    }
  }
})
window.addEventListener('scroll', () => {
  if (scrollY < 650) {
    document.getElementById('home-console').classList.remove('animate-typing')
    document.getElementById('home-console').classList.add('hidden')
    document.getElementById('cursor').classList.remove('hidden')
  }
})
</script>

<template>
  <section id="home" class="w-1/2 flex flex-col items-center justify-center h-screen mt-10">
    <h1 class="text-center mb-5 text-4xl">Richard Carrión - Backend Developer</h1>
    <div class="text-center mb-10 opacity-70">
      Experienced Software Engineer skilled in designing and implementing robust systems.
    </div>
    <p class="text-center">Let's create exceptional software solutions together!</p>

    <div class="w-3/4 mt-20">
      <div>
        <HelpItem char="a" wywts="to see more" wim="about me" />
        <HelpItem char="e" wywts="to look at my" wim="experience" />
        <HelpItem char="p" wywts="to see my" wim="projects" />
        <HelpItem char="c" wywts="to" wim="contact me" />
      </div>

      <!-- <Prompt :text="key" class="mt-5" /> -->
      <div id="projects-prompt" class="flex place-self-start mt-5">
        <p>[carri@rcpc ~]$&nbsp;</p>
        <div class="w-fit">
          <p id="home-console" class="hidden overflow-hidden whitespace-nowrap pr-5 text-white">
            cd '{{ key }}'
          </p>
        </div>
        <span id="cursor" class="cursor"></span>
      </div>
    </div>
    <p class="text-center mt-52">or just scroll...&nbsp;</p>
  </section>
</template>

<style scoped>
.cursor {
  font-family: monospace;
  font-size: 1em;
}
.cursor:after {
  content: '_';
  opacity: 0;
  animation: cursor 1s infinite;
}
@keyframes cursor {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
