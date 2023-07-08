<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>
    <nav>
      <RouterLink to="/" class="workspace">
        <icon class="icon" icon="fa-solid fa-home" /> : Home
      </RouterLink>
      <RouterLink to="/about" class="workspace">
        <icon class="icon" icon="fa-solid fa-home" /> : About
      </RouterLink>
      <RouterLink to="/education" class="workspace">
        <icon class="icon" icon="fa-solid fa-list" /> : Eucation
      </RouterLink>
      <RouterLink to="/skills" class="workspace">
        <icon class="icon" icon="fa-solid fa-snowboarding" /> : Skills
      </RouterLink>
      <RouterLink to="/jobs" class="workspace">
        <icon class="icon" icon="fa-solid fa-wallet" /> : Job Experience
      </RouterLink>
      <RouterLink to="/projects" class="workspace">
        <icon class="icon" icon="fa-solid fa-project-diagram" /> : Projects
      </RouterLink>
    </nav>
  </header>
</template>
<style scoped>
header{ 
  color: white;
  font-size: 14px !important;
  background: black;
  padding-top: 10px;
  padding-bottom: 10px;
}

.workspace {
  font-size: 12px;
  margin-right: 10px;
  margin-left: 10px;
  color: white;
}
</style>
