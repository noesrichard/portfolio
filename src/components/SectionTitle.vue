<script setup>
const props = defineProps({
title: String
});
</script>
<template>
  <div class="w-fit z-[5] bg-black place-self-end mx-10 px-5">{{title}}</div>
  <hr class="w-full relative -mt-[13px] opacity-30" />
</template>


<style scoped></style>
