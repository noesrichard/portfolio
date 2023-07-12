<script setup>
import { ref } from 'vue'
import Prompt from '../../components/Prompt.vue'
import LsCommand from './components/LsCommand.vue'
import ComputerASCII from './components/ComputerASCII.vue'
import SectionTitle from '../../components/SectionTitle.vue'
</script>

<template>
  <section id="about" class="flex flex-col justify-center items-center w-3/4 h-screen text-xl">
    <SectionTitle title="about me" />
    <div class="flex items-center">
      <div id="about-description" class="w-5/6 text-justify">
        <Prompt :cursor="false" class="opacity-70">
          Hey there! I'm Richard, a software engineer with a deep-rooted love for coding. My journey
          into the world of programming started during my high school days when I made the bold
          decision to switch schools and choose a technical major. Little did I know that this
          decision would shape my entire career.
        </Prompt>
        <Prompt :cursor="false" class="mt-10">
          <span>list knowledge/technologies</span>
          <LsCommand />
        </Prompt>
      </div>
      <ComputerASCII />
    </div>
  </section>

</template>
