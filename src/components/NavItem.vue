<script setup>
import { ref } from 'vue';
const props = defineProps({
  link: String,
  label: String,
  icon: String
})
let path = window.location.href
const i = path.indexOf('#')
path = path.substring(i)
const isActive = ref(path === props.link)
console.log(isActive)
</script>
<template>
  <div class="hover:bg-white h-8" >
    <div class="bg-black h-7">
      <a :href="link" class="mx-3 text-sm" >
        <icon class="icon" :icon="icon" /> {{ label }}
      </a>
    </div>
  </div>
</template>
