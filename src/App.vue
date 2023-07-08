<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
const key = ref('')
window.addEventListener('keypress', (e) => {
  let location = 'home'
  let options = {
    a: 'about',
    a: 'about',
    e: 'education',
    s: 'skills',
    j: 'experience',
    p: 'projects',
    c: 'contact'
  }

  if ('aesjpc'.includes(e.key)) {
    key.value = e.key
  }
  setTimeout(() => {
    if ('aesjpc'.includes(e.key)) {
      window.location.href = options[key.value]
    }
  }, 100)
})
</script>

<template @keyup="alert('keypress')">
  <Header />
  <main>
    <div class="main-container">
      <h1 style="font-size: 38px">Richard Carrion - Backend Developer</h1>
      <div class="description">
        Experienced Backend Software Engineer skilled in designing and implementing robust systems.
        <!-- <br /> -->
        <!-- Proficient in Python, Java, and frameworks like Django, Flask and Spring. -->
        <!-- <br /> -->
        <!-- Knowledge in database management, API integration, and cloud computing. -->
      </div>
      <p class="phrase">Let's create exceptional software solutions together.</p>
      <div class="console">
        <div>
          <p class="help-item">type <strong>a</strong> to see more <strong>about me</strong></p>
          <p class="help-item">type <strong>e</strong> to look at my <strong>education</strong></p>
          <p class="help-item">type <strong>s</strong> to see my <strong>skills</strong></p>
          <p class="help-item">type <strong>j</strong> to see my <strong>job experience</strong></p>
          <p class="help-item">type <strong>p</strong> to see my <strong>projects</strong></p>
          <p class="help-item">type <strong>c</strong> to <strong>contact me</strong></p>
        </div>
        <div style="display: flex">
          <div class="prompt">
            [carri@rcpc ~]$ <span>{{ key }}</span>
          </div>
        </div>
      </div>

      <p class="scroll">or just scroll...&nbsp;</p>
    </div>
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
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle;
}

* {
  font-family: monospace;
  font-size: 22px;
}


main {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  color: white;
  text-align: center;
  width: 50%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.description {
  margin-top: 20px;
  width: 600px;
}
.phrase {
  margin-top: 60px;
}

.console {
  margin-top: 60px;
  width: 420px;
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
  margin-top: 100px;
}
</style>
