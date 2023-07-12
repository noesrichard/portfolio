<script setup>
import { ref } from 'vue'
import NavbarItem from './NavbarItem.vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const selected = ref(0)
const open = ref(false)
const items = ref([
  { link: '#home', icon: 'fa-solid fa-home', label: 'Home' },
  { link: '#about', icon: 'fa-solid fa-address-card', label: 'About' },
  { link: '#experience', icon: 'fa-solid fa-briefcase', label: 'Job Experience' },
  { link: '#projects', icon: 'fa-solid fa-project-diagram', label: 'Projects' },
  { link: '#contact-me', icon: 'fa-solid fa-envelope', label: 'Contact Me' }
])
const links = ref([
  { link: 'https://github.com/noesrichard', icon: 'fa-brands fa-github', label: 'GitHub' },
  { link: 'https://www.linkedin.com/in/richard-carri%C3%B3n-a21a3b219/', icon: 'fa-brands fa-linkedin', label: 'LinkedIn' }
])

const sections = document.getElementsByTagName('section')
for (let i = 0; i < sections.length; i++) {
  const section = sections[i]
}

window.addEventListener('scroll', () => {
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i]
    if (scrollY >= section.offsetTop - 400 && scrollY <= section.offsetTop + section.clientHeight) {
      selected.value = i
    }
  }
})

var prevScrollpos = window.pageYOffset;
function selectItem(index) {
  selected.value = index
}

function openContact(){ 
  open.value = true;
}
</script>
<template>
  <header id="navbar" class="sticky top-0 bg-black text-white pt-3 z-50">
    <div class="flex justify-between">
      <div class="flex">
        <NavbarItem
          v-for="(item, index) in items"
          :link="item.link"
          :icon="item.icon"
          :label="item.label"
          :active="index == selected"
          @click="selectItem(index)"
        />
      </div>
      <div class="flex">
        <NavbarItem v-for="item in links" :link="item.link" :icon="item.icon" :label="item.label" />
      </div>
    </div>
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
