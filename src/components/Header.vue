<script setup>
import { ref } from 'vue'
import NavItem from '../components/NavItem.vue'

const selected = ref(0)
const items = ref([
  {
    link: '#home',
    icon: 'fa-solid fa-home',
    label: 'Home'
  },
  {
    link: '#about',
    icon: 'fa-solid fa-address-card',
    label: 'About'
  },
  {
    link: '#jobs',
    icon: 'fa-solid fa-briefcase',
    label: 'Job Experience'
  },
  {
    link: '#projects',
    icon: 'fa-solid fa-project-diagram',
    label: 'Projects'
  }
])
const links = ref([
  {
    link: '',
    icon: 'fa-solid fa-envelope',
    label: 'Contact me'
  },
  {
    link: 'https://github.com/noesrichard',
    icon: 'fa-brands fa-github',
    label: 'GitHub'
  },
  {
    link: 'https://www.linkedin.com/in/richard-carri%C3%B3n-a21a3b219/',
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn'
  }
])
console.log(0 == selected)
function selectItem(index){ 
  selected.value = index;
}
</script>
<template>
  <header class="sticky top-0 bg-black text-white py-3">
    <nav class="flex justify-between">
      <div class="flex">
        <NavItem
          v-for="(item, index) in items"
          :link="item.link"
          :icon="item.icon"
          :label="item.label"
          :active="index == selected"
          @click="selectItem(index)"
        />
      </div>
      <div class="flex">
        <NavItem v-for="item in links" :link="item.link" :icon="item.icon" :label="item.label" />
      </div>
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
