<script setup>
import { ref } from 'vue';
const props = defineProps({
  link: String,
  label: String,
  icon: String,
  active: Boolean,
})

function navigate(){ 
  window.location.href = props.link; 
}
</script>
<template>
  <div class="hover:bg-white hover:cursor-pointer h-8" :class="active ? 'bg-white' : 'bg-black'" @click="navigate()">
    <div class="bg-black h-7">
      <a class="mx-3 text-sm" > <icon class="icon" :icon="icon" /> {{ label }} </a>
    </div>
  </div>
</template>
