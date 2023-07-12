<script setup>
const props = defineProps({
  text: {
    type: String,
    default: null
  },
  cursor: {
    type: Boolean,
    default: true
  }
})
</script>
<template>
  <div>
    [carri@rcpc ~]$
    {{ text != null ? text : '' }}
    <slot></slot>
    <span :class="cursor ? 'cursor' : ''"> </span>
  </div>
</template>

<style scoped>
.cursor {
  font-family: monospace;
  font-size: 1em;
}
.cursor:after {
  content: '_';
  opacity: 0;
  animation: cursor 1s infinite;
}
@keyframes cursor {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
