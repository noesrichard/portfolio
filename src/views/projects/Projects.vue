<script setup>
import { ref } from 'vue'
import Preview from './components/Preview.vue'
import SectionTitle from '../../components/SectionTitle.vue'
import data from './components/project-data.js'

const selected = ref(0)
const projects = [...data]

const selectedProject = ref(projects[0])

function isSelected(index) {
  return selected.value == index
}
function select(index) {
  selected.value = index
  selectedProject.value = projects[index]
}

window.addEventListener('scroll', () => {
  if (scrollY > 2500) {
    document.getElementById('projects-console').classList.add('animate-typing')
    document.getElementById('projects-console').classList.remove('hidden')
    document.getElementById('projects-console').addEventListener('animationend', (event) => {
      document.getElementById('sessions').classList.remove('hidden')
      document.getElementById('prompt-projects').classList.add('hidden')
    })
  } else {
    document.getElementById('projects-console').classList.remove('animate-typing')
    document.getElementById('projects-console').classList.add('hidden')
    document.getElementById('sessions').classList.add('hidden')
    document.getElementById('prompt-projects').classList.remove('hidden')
  }
})
</script>

<template>
  <section id="projects" class="flex flex-col items-center justify-center w-3/4 h-screen text-xl">
    <div class="flex flex-col w-full text-xl h-3/4">
      <SectionTitle title="my projects" />
      <div id="prompt-projects" class="flex place-self-start mt-5">
        <p>[carri@rcpc ~]$&nbsp;</p>
        <div class="w-fit">
          <p id="projects-console" class="hidden overflow-hidden whitespace-nowrap pr-5 text-white">
            ./projects.sh
          </p>
        </div>
      </div>
      <div id="sessions" class="w-full flex flex-col justify-between mt-10 z-10 h-full hidden">
        <div class="h-2/6">
          <div
            class="hover:cursor-pointer mb-1 hover:bg-amber-200 hover:text-black"
            :class="isSelected(index) ? 'text-white' : 'text-gray-500'"
            v-for="(project, index) in projects"
            @click="select(index)"
          >
            ({{ index }}) + {{ project.name }}: 2 windows
            {{ isSelected(index) ? '(attached)' : '' }}
          </div>
        </div>
        <Preview :project="selectedProject" class="h-4/6" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
