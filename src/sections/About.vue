<script setup>
import Prompt from '../components/Prompt.vue'
</script>

<template>
  <section id="about" class="flex items-center w-3/4 h-screen">
    <div class="w-2/4 text-justify">
      <Prompt
        text="
        Hey there! I'm Richard, a software engineer with a deep-rooted love for
        coding. My journey into the world of programming started during my high school days when I
        made the bold decision to switch schools and choose a technical major. Little did I know
        that this decision would shape my entire career."
      />
      <Prompt :cursor="false" class="mt-10">
        <span>ls knowledge/technologies</span>
        <div class="text-console-green flex">
          <div class="mr-5"><icon icon="fa-brands fa-react" />react</div>
          <div class="mr-5"><icon icon="fa-brands fa-angular" />angular</div>
          <div class="mr-5"><icon icon="fa-solid fa-leaf" />spring-boot</div>
          <div class="mr-5"><icon icon="fa-solid fa-pepper-hot" />flask</div>
          <div class="mr-5"><icon icon="fa-brands fa-linux" />linux</div>
        </div>
      </Prompt>
    </div>
    <pre class="w-2/4">
          / ======= \
         / __________\
        | ___________ |
        | | <span class="text-console-green">$</span><span class="text-console-green">hello</span><span  class="cursor"></span>  | |
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
