<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const key = ref('')

window.addEventListener('keypress', (e) => {
  key.value = e.key
  let location = 'home'
  let options = { a: 'about', a: 'about', e: 'education', s: 'skills', j: 'experience', p: 'projects', c: 'contact' }
  setTimeout(() => {
    if ('aesjpc'.includes(key.value)) {
      window.location.href = options[key.value]
    } else {
      key.value = ''
    }
  }, 100)
})
</script>

<template @keyup="alert('keypress')">
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
  <main>
    <div class="main-container">
      <h1 style="font-size: 26px">Richard Carrion - Backend Developer</h1>
      <div>
        <br />
        Experienced Backend Software Engineer skilled in designing and implementing robust systems.
        <br />
        Proficient in Python, Java, and frameworks like Django, Flask and Spring.
        <br />
        Knowledge in database management, API integration, and cloud computing.
        <br />
        <br />
        <br />
      </div>
      Let's create exceptional software solutions together.
      <div class="options">
        type <strong>a</strong> to see more <strong>about me</strong>
        <br />
        type <strong>e</strong> to look at my <strong>education</strong>
        <br />
        type <strong>s</strong> to see my <strong>skills</strong>
        <br />
        type <strong>j</strong> to see my <strong>job experience</strong>
        <br />
        type <strong>p</strong> to see my <strong>projects</strong>
        <br />
        type <strong>c</strong> to <strong>contact me</strong>
        <br />
        <br />
        <div style="display: flex">
          <div id="wrap">
            carri@rcpc:~$ <span>{{ key }}</span>
          </div>
        </div>
      </div>

      <br />
      <br />
      or just scroll ...&nbsp;
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
#wrap {
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle;
}

* {
  font-family: monospace;
  font-size: 20px;
}
strong {
  font-weight: 1000;
}
main {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
header {
  font-size: 14px !important;
  background: black;
  padding-top: 10px;
  padding-bottom: 10px;
}

.code {
  opacity: 0.2;
}

.main-container {
  color: white;
  text-align: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.options {
  margin-top: 30px;
  width: 420px;
  text-align: left;
}

.workspace {
  font-size: 12px;
  margin-right: 10px;
  margin-left: 10px;
  color: white;
}
.icon {
  font-size: 12px;
}
</style>
