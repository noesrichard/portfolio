<script setup>
const props = defineProps({
  tag: String,
  text: String,
  newLine: {
    type: Boolean,
    default: true
  }
})
</script>
<template>
  <div v-if="newLine">
    <span class="opacity-30">&lt;{{ tag }}&gt;</span>
    <div class="pl-10">
      {{ text }}
      <slot></slot>
    </div>
    <span class="opacity-30">&lt;/{{ tag }}&gt;</span>
  </div>
</template>

<style scoped></style>
