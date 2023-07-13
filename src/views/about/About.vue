<script setup>
import { ref } from 'vue'
import Prompt from '../../components/Prompt.vue'
import LsCommand from './components/LsCommand.vue'
import ComputerASCII from './components/ComputerASCII.vue'
import SectionTitle from '../../components/SectionTitle.vue'

window.addEventListener('scroll', () => {
  if (scrollY > 600) {
    document.getElementById('about-me-console').classList.add('animate-typing')
    document.getElementById('about-me-console').classList.remove('hidden')
    document.getElementById('about-me-console').addEventListener('animationend', (event) => {
      document.getElementById('about-me-response').classList.remove('hidden')
      document.getElementById('knowledge-prompt').classList.remove('hidden')
      document.getElementById('knowledge-console').classList.add('animate-typing')
      document.getElementById('knowledge-console').classList.remove('hidden')
      document.getElementById('knowledge-console').addEventListener('animationend', (event) => {
        document.getElementById('knowledge-response').classList.remove('hidden')
      })
    })
  } else {
    document.getElementById('about-me-console').classList.remove('animate-typing')
    document.getElementById('about-me-console').classList.add('hidden')
    document.getElementById('about-me-response').classList.add('hidden')
    document.getElementById('knowledge-prompt').classList.add('hidden')
    document.getElementById('knowledge-console').classList.remove('animate-typing')
    document.getElementById('knowledge-console').classList.add('hidden')
    document.getElementById('knowledge-response').classList.add('hidden')
  }
})
</script>

<template>
  <section id="about" class="flex flex-col justify-center items-center w-3/4 h-screen text-xl">
    <SectionTitle title="about me" />
    <div class="grid grid-cols-3 w-full">
      <div id="about-description" class="w-full text-start col-span-2 mt-24">
        <div class="flex">
          <p>[carri@rcpc ~]$&nbsp;</p>
          <div class="w-fit">
            <p
              id="about-me-console"
              class="hidden overflow-hidden whitespace-nowrap pr-5 text-white"
            >
              more about-me.txt
            </p>
          </div>
        </div>
        <div class="opacity-80 hidden mt-1 w-[90%] leading-loose" id="about-me-response">
          Hey there! I'm Richard,<br>
          A software engineer with a deep-rooted love for coding. My journey
          into the world of programming started during my high school days when I made the bold
          decision to switch schools and choose a technical major. <br>
          Little did I know that this decision would shape my entire career.
        </div>

        <div class="flex mt-20">
          <p id="knowledge-prompt" class="hidden">[carri@rcpc ~]$&nbsp;</p>
          <div class="w-fit">
            <p
              id="knowledge-console"
              class="hidden overflow-hidden whitespace-nowrap pr-5 text-white"
            >
              list knowledge
            </p>
          </div>
        </div>
        <LsCommand class="hidden" id="knowledge-response" />
      </div>

      <ComputerASCII />
    </div>
  </section>
</template>
