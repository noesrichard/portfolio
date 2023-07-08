<script setup></script>
<template>
  <header>
    <nav>
      <a href="/#" class="workspace"> <icon class="icon" icon="fa-solid fa-home" /> Home </a>
      <a href="/#about" class="workspace">
        <icon class="icon" icon="fa-solid fa-address-card" /> About
      </a>
      <a href="/#jobs" class="workspace">
        <icon class="icon" icon="fa-solid fa-briefcase" /> Job Experience
      </a>
      <a href="/#projects" class="workspace">
        <icon class="icon" icon="fa-solid fa-project-diagram" /> Projects
      </a>
    </nav>
    <nav>
      <a href="" class="workspace">
        <icon class="icon" icon="fa-solid fa-envelope" /> Contact me
      </a>
      <a href="https://github.com/noesrichard" class="workspace">
        <icon class="icon" icon="fa-brands fa-github" /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/richard-carri%C3%B3n-a21a3b219/" class="workspace">
        <icon class="icon" icon="fa-brands fa-linkedin" /> LinkedIn
      </a>
    </nav>
  </header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 14px !important;
  background: black;
  padding-top: 10px;
  padding-bottom: 10px;
}

.workspace {
  margin-right: 10px;
  margin-left: 10px;
  color: white;
}

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
