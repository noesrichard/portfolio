<script setup>
import { ref } from 'vue'
import Preview from './components/Preview.vue'
import SectionTitle from '../../components/SectionTitle.vue';
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
</script>

<template>
  <section id="projects" class="flex flex-col items-center justify-center w-3/4 h-screen text-xl">
    <SectionTitle title="my projects"/>
    <div class="h-3/4 w-full flex flex-col justify-between mt-10">
      <div id="sessions" class="h-fit">
        <div
          class="hover:text-white hover:cursor-pointer mb-1 hover:bg-amber-200 hover:text-black"
          :class="isSelected(index) ? 'text-white' : 'text-gray-500'"
          v-for="(project, index) in projects"
          @click="select(index)"
        >
          ({{ index }}) + {{ project.name }}: 2 windows {{ isSelected(index) ? '(attached)' : '' }}
        </div>
      </div>
      <Preview :project="selectedProject" class="h-4/6"/>
    </div>
  </section>
</template>

<style scoped></style>
