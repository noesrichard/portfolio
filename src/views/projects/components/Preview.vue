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
    <div class="bg-black z-20 relative flex top-3 ml-3 w-fit px-5">
      {{ project.name }}
      <div class="ml-4">
        <a :href="project.link">
          <icon icon="fa-brands fa-github" class="text-white bg-black" />
        </a>
      </div>
    </div>
    <div
      v-if="descriptionWindow"
      id="content"
      class="overflow-y-hidden border-gray-500 border-[1px] border-solid mb-1 text-gray-200 p-5"
    >
      <div id="project-content" class="flex">
        <div class="flex flex-col justify-between px-2 pb-2 w-1/2 text-gray-300">
          <div class="overflow-y-hidden block h-[250px]">
            {{ project.description }}
          </div>

          <div class="flex h-fit items-center">
            <div v-for="tech in project.techs" class="mr-8">
              <icon :icon="tech.icon" :class="tech.color" /> {{ tech.name }}
            </div>
          </div>
        </div>

        <div class="h-full w-1/2 flex justify-center mb-2">
          <div class="border-gray-500 border-[1px] border-solid h-[300px] w-[640px] p-1">
            <img
              :src="project.images[0]"
              class="saturate-0 hover:saturate-100 hover:scale-110 transition ease-in-out w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>

    <div id="windows" class="bg-green-300 flex text-black">
      <div
        class="hover:text-black hover:font-bold pl-1"
        :class="descriptionWindow ? 'text-black font-bold' : 'opacity-70'"
        @click="showDescription()"
      >
        1: description{{ descriptionWindow ? '*' : '' }}
      </div>
    </div>
  </div>
</template>
