<script setup>
const props = defineProps({
  title: String,
  start: {
    type: Boolean,
    deafult: true
  },
  start: {
    type: Boolean,
    deafult: true
  }
})
</script>
<template>
  <div
    class="w-fit z-[5] bg-black mx-10 px-5 flex"
    :class="!start ? 'place-self-end' : 'place-self-start'"
  >
    {{ title }}
    <slot></slot>
  </div>
  <hr class="w-full relative -mt-[13px] opacity-30" />
</template>

<style scoped></style>
