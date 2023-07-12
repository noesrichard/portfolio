<script setup>
import { ref } from 'vue'
import NavbarItem from './NavbarItem.vue'
import ContactMe from './ContactMe.vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const selected = ref(0)
const open = ref(false)
const items = ref([
  { link: '#home', icon: 'fa-solid fa-home', label: 'Home' },
  { link: '#about', icon: 'fa-solid fa-address-card', label: 'About' },
  { link: '#experience', icon: 'fa-solid fa-briefcase', label: 'Job Experience' },
  { link: '#projects', icon: 'fa-solid fa-project-diagram', label: 'Projects' }
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
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
function selectItem(index) {
  selected.value = index
}

function openContact(){ 
  open.value = true;
  console.log("Open: ", open.value)
}
</script>
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0" >
        <div class="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" >
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" >
            <DialogPanel class="relative transform overflow-hidden bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ring-1 ring-insert ring-gray-300">
              <div class="bg-black pt-4">
                <div class="sm:flex sm:items-start">
                  <div class="text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-white">[new@rcpc ~]$ send-email</DialogTitle>
                    <div class="mt-2 ml-1 text-white text-base">
                      <label for="email"> &gt; email: </label>
                      <input id="email" type="text" class="text-white bg-black border-b-[1px] border-white ring-insert"/>
                      <br>
                      <br>
                      <label for="text"> &gt; text: </label>
                      <input id="text" type="text" class="text-white bg-black border-b-[1px] border-white ring-insert"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center bg-black px-3 ml-2 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-black sm:mt-0 sm:w-auto"
                  @click="open = false"
                >
                  Send
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center bg-black px-3 py-2 text-sm font-semibold text-red-500 shadow-sm ring-1 ring-inset ring-red-500 hover:bg-black sm:mt-0 sm:w-auto"
                  @click="open = false"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <header id="navbar" class="sticky top-0 bg-black text-white pt-3 z-10">
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
        <NavbarItem link="#" icon="fa-solid fa-envelope" label="contact me" @click="openContact()"/>
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
