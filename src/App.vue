<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'

const key = ref('')

window.onscroll = function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById('prompt').classList.add('left-prompt')
  } else {
    document.getElementById('prompt').classList.remove('left-prompt')
  }
}

window.addEventListener('keypress', (e) => {
  let options = {
    a: ['#about', 'about me'],
    e: ['#experience', 'job experience'],
    p: ['#projects', 'my projects'],
    c: ['#contact', 'contact me']
  }

  if ('aepc'.includes(e.key)) {
    key.value = e.key
  }
  setTimeout(() => {
    if ('aepc'.includes(e.key)) {
      window.location.href = options[key.value][0]
    }
  }, 300)
})
</script>

<template @keyup="alert('keypress')">
  <Header />
  <main class="flex flex-col items-center bg-black text-2xl h-screen text-white">
    <section id="home" class="w-1/2 flex flex-col items-center">
      <h1 class="text-center">Richard Carrion - Backend Developer</h1>
      <div class="text-center">
        Experienced Backend Software Engineer skilled in designing and implementing robust systems.
      </div>
      <p class="text-center">Let's create exceptional software solutions together.</p>

      <div class="w-3/4">
        <div>
            <p class="opacity-70">type <strong class="opacity-100">a</strong> to see more <strong>about me</strong></p>
            <p class="opacity-70">type <strong class="opacity-100">e</strong> to see my <strong>job experience</strong></p>
            <p class="opacity-70">type <strong class="opacity-100">p</strong> to see my <strong>projects</strong></p>
            <p class="opacity-70">type <strong class="opacity-100">c</strong> to <strong>contact me</strong></p>
        </div>

        <div>
          [carri@rcpc ~]$ <span>{{ key }}</span>
        </div>
      </div>
      <p class="text-center">or just scroll...&nbsp;</p>
    </section>

    <section id="about" class="flex items-center w-1/2">
      <p class="w-2/4">
        [carri@rcpc ~]$ Hey there! I'm Richard, a software engineer with a deep-rooted love for
        coding. My journey into the world of programming started during my high school days when I
        made the bold decision to switch schools and choose a technical major. Little did I know
        that this decision would shape my entire career.
      </p>
      <pre class="w-2/4">
          / ======= \
         / __________\
        | ___________ |
        | | <a >$hello</a><span ></span> | |
        | |         | |
        | |_________| |________________________
        \=____________/    richard carrion     )
        / """"""""""" \                       /
       / ::::::::::::: \                  =D-'
      (_________________)
    </pre>
    </section>
  </main>
</template>

<style scoped>
span {
  font-family: monospace;
  font-size: 1em;
}
span:after {
  content: '_';
  opacity: 0;
  animation: cursor 1s infinite;
}
@keyframes cursor {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
