<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="workspace"> <icon icon="fa-solid fa-home" /> : Home </RouterLink>
      <RouterLink to="/about" class="workspace">
        <icon icon="fa-solid fa-home" /> : About
      </RouterLink>
      <RouterLink to="/education" class="workspace">
        <icon icon="fa-solid fa-list" /> : Education
      </RouterLink>
      <RouterLink to="/skills" class="workspace">
        <icon icon="fa-solid fa-snowboarding" /> : Skills
      </RouterLink>
      <RouterLink to="/jobs" class="workspace">
        <icon icon="fa-solid fa-wallet" /> : Job Experience
      </RouterLink>
      <RouterLink to="/projects" class="workspace">
        <icon icon="fa-solid fa-project-diagram" /> : Projects
      </RouterLink>
    </nav>
  </header>
  <main>
    <h2>
      <span class="code"> &lt;h2&gt; </span>
      <br>
      &nbsp;&nbsp; Hello world! 
      <br>
      <span class="code"> &lt;/h2&gt; </span>
    </h2>
    <h1 class="text-3xl font-bold underline">I'm Richard</h1>
    <p>And I'm a full stack developer who likes to learn and be efficient all the time!</p>
  </main>
</template>

<style scoped>
header {
  background: black;
  padding-top: 10px;
  padding-bottom: 10px;
}

.code { 
  opacity: 0.2; 
}

.workspace {
  margin-right: 10px;
  margin-left: 10px;
  color: white;
}
</style>
