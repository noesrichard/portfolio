<script setup>
const props = defineProps({
  char: String,
  wywts: String,
  wim: String
})
</script>
<template>
  <span class="opacity-70">type </span><strong class="opacity-100">{{ char }}</strong>
  <span class="opacity-70"> {{ " "+wywts+" " }} </span><strong>{{ wim }}</strong>
  <br />
</template>
<style scoped></style>
