<script setup>
import NavItem from '../components/NavItem.vue'
</script>
<template>
  <header class="sticky top-0 flex justify-between bg-black text-white py-3">
    <nav class="flex">
      <NavItem link="#home" icon="fa-solid fa-home" label="Home" />
      <NavItem link="#about" icon="fa-solid fa-address-card" label="About" />
      <NavItem link="#jobs" icon="fa-solid fa-briefcase" label="Job Experience" />
      <NavItem link="#projects" icon="fa-solid fa-project-diagram" label="Projects" />
    </nav>
    <nav class="flex">
      <NavItem link="" icon="fa-solid fa-envelope" label="Contact me" />
      <NavItem link="https://github.com/noesrichard" icon="fa-brands fa-github" label="GitHub" />
      <NavItem
        link="https://www.linkedin.com/in/richard-carri%C3%B3n-a21a3b219/"
        icon="fa-brands fa-linkedin"
        label="LinkedIn"
      />
    </nav>
  </header>
</template>
<style scoped>


.icon {
  font-size: 18px;
}

.contact-btn {
  font-size: 12px;
  padding: 5px;
  border: 1px solid #4af626;
  color: white;
}

.contact-btn:hover {
  cursor: pointer;
}
</style>
