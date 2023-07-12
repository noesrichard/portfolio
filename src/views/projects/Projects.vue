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
</script>

<template>
  <section id="projects" class="flex items-center justify-center w-3/4 h-screen text-xl">
    <div class="flex flex-col items-center justify-center w-11/12 text-xl">
      <SectionTitle title="my projects" />
      <div class="h-3/4 w-full flex flex-col justify-between mt-10">
        <div id="sessions" class="h-fit">
          <div
            class="hover:text-white hover:cursor-pointer mb-1 hover:bg-amber-200 hover:text-black"
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

    <!-- <div class="mr-10 w-1/12"> -->
    <!--   <a -->
    <!--     class="[writing-mode:vertical-lr] [text-orientation:mixed] hover:cursor-pointer hover:scale-125 bg-black transition ease-in-out" -->
    <!--   > -->
    <!--     <icon icon="fa-solid fa-envelope" class="ml-2 mb-5 rotate-90 mr-[5px]"></icon>email me -->
    <!--   </a> -->
    <!--   <hr class="h-full relative rotate-90 opacity-30 my-10 mr-20" /> -->
    <!--   <a -->
    <!--     href="https://github.com/noesrichard" -->
    <!--     class="[writing-mode:vertical-lr] [text-orientation:mixed] hover:cursor-pointer hover:scale-125 bg-black transition ease-in-out" -->
    <!--   > -->
    <!--     <icon icon="fa-brands fa-github" class="ml-2 mb-5 rotate-90 mr-[5px]"></icon>GitHub -->
    <!--   </a> -->
    <!--   <hr class="h-full relative rotate-90 opacity-30 my-10 mr-20" /> -->
    <!--   <a -->
    <!--     href="https://www.linkedin.com/in/richard-carri%C3%B3n-a21a3b219/" -->
    <!--     class="[writing-mode:vertical-lr] [text-orientation:mixed] hover:cursor-pointer hover:scale-125 bg-black transition ease-in-out" -->
    <!--   > -->
    <!--     <icon icon="fa-brands fa-linkedin" class="ml-2 mb-5 rotate-90 mr-[5px]"></icon>LinkedIn -->
    <!--   </a> -->
    <!-- </div> -->
  </section>

  <!-- <div class="3/4 flex"> -->
  <!--   <a class="hover:cursor-pointer hover:scale-125 bg-black transition ease-in-out"> -->
  <!--     <icon icon="fa-solid fa-envelope" class=""></icon>email me -->
  <!--   </a> -->
  <!--   <hr class="w-1/3 opacity-30" /> -->
  <!--   <a -->
  <!--     href="https://github.com/noesrichard" -->
  <!--     class="hover:cursor-pointer hover:scale-125 bg-black transition ease-in-out" -->
  <!--   > -->
  <!--     <icon icon="fa-brands fa-github" class="" />GitHub -->
  <!--   </a> -->
  <!--   <hr class="w-1/3 opacity-30" /> -->
  <!--   <a -->
  <!--     href="https://www.linkedin.com/in/richard-carri%C3%B3n-a21a3b219/" -->
  <!--     class="hover:cursor-pointer hover:scale-125 bg-black transition ease-in-out w-[500px] bg-blue-50" -->
  <!--   > -->
  <!--     <icon icon="fa-brands fa-linkedin" class=""></icon>LinkedIn -->
  <!--   </a> -->
  <!-- </div> -->
</template>

<style scoped></style>
