<script setup>
import { ref } from 'vue'

const props = defineProps({
  project: {}
})
const descriptionWindow = ref(true)
function showImages() {
  descriptionWindow.value = false
}
function showDescription() {
  descriptionWindow.value = true
}
</script>

<template>
  <div class="flex flex-col justify-end">
    <div class="bg-black z-20 relative top-3 ml-3 w-fit px-5">{{ project.name }}</div>
    <div
      v-if="descriptionWindow"
      id="content"
      class="overflow-y-hidden border-gray-500 border-[1px] border-solid mb-1 text-gray-200 p-5"
    >
      <div id="project-content" class="flex">
        <div class="px-2 w-2/4 text-gray-300">
          {{ project.description }}
          <div class="flex">
            <div v-for="tech in project.techs" class="mr-8 mt-5">
              <icon :icon="tech.icon" :class="tech.color" /> {{ tech.name }}
            </div>
          </div>
        </div>
        <div class="h-2/2 w-2/4 flex items-center justify-center">
          <div class="border-gray-500 border-[1px] border-solid p-2 w-5/6 h-fit">
            <img :src="'src/assets/images/' + project.images[0]" class="w-fit saturate-0 hover:saturate-100 hover:scale-110 transition ease-in-out"/>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      id="content"
      class="overflow-y-hidden border-gray-500 border-[1px] border-solid mb-1 text-gray-200 p-3"
    >
      <div id="project-content" class="flex">
        <div class="h-2/2 w-2/4 flex items-center justify-center">
          <div class="border-gray-500 border-[1px] border-solid p-2">
            <img :src="'src/assets/images/' + project.images[0]" />
          </div>
        </div>
      </div>
    </div>
    <div id="windows" class="bg-gray-600 flex text-black">
      <div
        class="hover:text-black hover:cursor-pointer hover:font-bold"
        :class="descriptionWindow ? 'text-black font-bold' : 'opacity-70'"
        @click="showDescription()"
      >
        1: description{{descriptionWindow ? '*' : ''}}
      </div>
      <div
        class="hover:text-black hover:cursor-pointer hover:font-bold"
        :class="!descriptionWindow ? 'text-black font-bold' : 'opacity-70'"
        @click="showImages()"
      >
        &nbsp; 2: images{{!descriptionWindow ? "*" : ""}}
      </div>
    </div>
  </div>
</template>
