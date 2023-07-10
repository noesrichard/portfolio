<script setup>
import Prompt from '../components/Prompt.vue'
</script>

<template>
  <section id="about" class="flex items-center w-1/2 h-screen">
    <p class="w-2/4 text-justify">
      <Prompt
        text="
        Hey there! I'm Richard, a software engineer with a deep-rooted love for
        coding. My journey into the world of programming started during my high school days when I
        made the bold decision to switch schools and choose a technical major. Little did I know
        that this decision would shape my entire career.
        "
      />
    </p>
    <pre class="w-2/4">
          / ======= \
         / __________\
        | ___________ |
        | | <a >$hello</a><span  class="cursor"></span>  | |
        | |         | |
        | |_________| |________________________
        \=____________/    richard carrion     )
        / """"""""""" \                       /
       / ::::::::::::: \                  =D-'
      (_________________)
    </pre>
  </section>
</template>

<style scoped></style>
