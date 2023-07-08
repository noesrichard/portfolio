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
      window.location.href = options[key.value[0]]
    }
  }, 300)
})
</script>

<template @keyup="alert('keypress')">
  <Header />
  <main class="main-container">
    <section class="hero-section" id="home">
      <h1 style="font-size: 38px">Richard Carrion - Backend Developer</h1>
      <div class="description">
        Experienced Backend Software Engineer skilled in designing and implementing robust systems.
      </div>
      <p class="phrase">Let's create exceptional software solutions together.</p>
    </section>
    <div class="console">
      <div>
        <p class="help-item">type <strong>a</strong> to see more <strong>about me</strong></p>
        <p class="help-item">type <strong>e</strong> to see my <strong>job experience</strong></p>
        <p class="help-item">type <strong>p</strong> to see my <strong>projects</strong></p>
        <p class="help-item">type <strong>c</strong> to <strong>contact me</strong></p>
      </div>
    </div>

    <div class="prompt" id="prompt">
      [carri@rcpc ~]$ <span>{{ key }}</span>
    </div>
    <p class="scroll">or just scroll...&nbsp;</p>

    <section id="about">
      <p>
        Hey there! I'm Richard, a software engineer with a deep-rooted love for coding. My journey
        into the world of programming started during my high school days when I made the bold
        decision to switch schools and choose a technical major. Little did I know that this
        decision would shape my entire career.
      </p>
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
/* styling */
html {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, #fff 0%, #aaa 100%) no-repeat;
  overflow-x: hidden;
  overflow-y: hidden;
}

body {
  text-align: center;
  display: table;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
}

.prompt {
  width: 30%;
  color: white;
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 1;
}

* {
  color: white;
  font-family: monospace;
  font-size: 22px;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-section {
  width: 50%;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 45vh;
}

.description {
  margin-top: 20px;
  width: 600px;
  position: sticky;
}
.phrase {
  margin-top: 60px;
}

#about {
  width: 50%;
  color: white;
  height: 100vh;
  z-index: 2;
}

.console {
  margin-top: 60px;
  width: 30%;
  text-align: left;
  margin-bottom: 40px;
}

.help-item {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 5px;
}
strong {
  color: #ffffff;
  font-weight: 8000;
}
.scroll {
  margin-top: 10vh;
  margin-bottom: 10vh;
}

.left-prompt{ 
  width: 30% !important;
}
</style>
