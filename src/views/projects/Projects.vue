<script setup>
import { ref } from 'vue'

const selected = ref(0)
const projects = [
  {
    name: 'amortization-system',
    description:
      'The Amortization System web page, built using Angular and backed by JSON-Server, provides a comprehensive platform for users, including administrators, to manage banks and bank-administrators. Administrators can effortlessly add banks and assign bank-administrators to each bank. Bank-administrators, in turn, have the authority to configure tax rates and monthly payment schedules for various loan options. This flexible system caters to different loan types, including the German and French amortization systems.',
    images: [
      'sistema-amortizacion/simulador-admin.png',
      'sistema-amortizacion/bancos-admin.png',
      'sistema-amortizacion/asesores-admin.png',
      'sistema-amortizacion/configuracion-asesor.png'
    ],
    techs: [
      { icon: 'fa-brands fa-angular', name: 'Angular', color: 'text-red-500' },
      { icon: 'fa-brands fa-angular', name: 'json-server', color: 'text-red-500' }
    ]
  },
  {
    name: 'color-recognition',
    description:
      'The Amortization System web page, built using Angular and backed by JSON-Server, provides a comprehensive platform for users, including administrators, to manage banks and bank-administrators. Administrators can effortlessly add banks and assign bank-administrators to each bank. Bank-administrators, in turn, have the authority to configure tax rates and monthly payment schedules for various loan options. This flexible system caters to different loan types, including the German and French amortization systems. ',
    images: [
      'sistema-amortizacion/simulador-admin.png',
      'sistema-amortizacion/bancos-admin.png',
      'sistema-amortizacion/asesores-admin.png',
      'sistema-amortizacion/configuracion-asesor.png'
    ],
    techs: [
      { icon: 'fa-brands fa-angular', name: 'Angular', color: 'text-red-500' },
      { icon: 'fa-brands fa-angular', name: 'json-server', color: 'text-red-500' }
    ]
  }
]
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
  <section id="projects" class="flex items-center w-3/4 h-screen text-xl">
    <div class="h-3/4 w-full flex flex-col">
      <div id="sessions" class="h-1/6">
        <div
          class="hover:text-white hover:cursor-pointer mb-1 hover:bg-amber-200 hover:text-black"
          :class="isSelected(index) ? 'text-white' : 'text-gray-500'"
          v-for="(project, index) in projects"
          @click="select(index)"
        >
          ({{ index }}) + {{ project.name }}: 2 windows {{ isSelected(index) ? '(attached)' : '' }}
        </div>
      </div>
      <div class="h-5/6 flex flex-col justify-end">
        <div class="bg-black z-20 relative top-3 ml-3 w-fit">{{ selectedProject.name }}</div>
        <div
          id="content"
          class="overflow-y-hidden border-gray-500 border-[1px] border-solid mb-1 text-gray-200 p-3"
        >
          <div id="project-content" class="flex">
            <div class="px-2 w-2/4 text-gray-300">
              {{ selectedProject.description }}
              <div class="flex">
                <div v-for="tech in selectedProject.techs" class="mr-5 mt-5"> <icon :icon="tech.icon" :class="tech.color" /> {{ tech.name }}</div>
              </div>
            </div>
            <div class="h-2/2 w-2/4 flex items-center justify-center">
              <div class="border-gray-500 border-[1px] border-solid p-2">
                <img :src="'src/assets/images/' + selectedProject.images[0]" />
              </div>
            </div>
          </div>
        </div>
        <div id="windows" class="bg-green-300 flex text-black">
          <div class="hover:text-black">1: description*</div>
          <div class="text-gray-500 hover:text-black hover:cursor-pointer">&nbsp; 2: images</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
