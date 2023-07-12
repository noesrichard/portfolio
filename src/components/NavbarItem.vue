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
    <div class="bg-black h-7 hover:scale-110 hover:border-b-2 hover:border-b-white hover:px-3 transition ease-in-out hover:cursor-pointer duration-200 hover:mx-5" :class="active ? 'border-b-white border-b-2' : ''" @click="navigate()">
      <a class="mx-3 text-sm" > <icon class="icon" :icon="icon" /> {{ label }} </a>
    </div>
</template>
