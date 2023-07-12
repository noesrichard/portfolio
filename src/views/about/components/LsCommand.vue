<script setup>
import { ref } from 'vue'
var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth()).padStart(2, '0') //January is 0!
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const monthName = monthNames[today.getMonth()]

today = monthName + ' ' + dd
const date = ref(today)
</script>
<template>

        <div class="flex mt-2">
  <div id="data" class="flex flex-col">
    <div>
      <span class="opacity-70">drwxr-xr-x. 2 {{ today }}</span>
      &nbsp;
      <span class="text-green-500">Proficient</span>
    </div>
    <div>
      <span class="opacity-70">drwxr-xr-x. 4 {{ today }}</span>
      &nbsp;
      <span class="text-green-500">Proficient</span>
    </div>
    <div>
      <span class="opacity-70">drwxr-xr-x. 6 {{ today }}</span>
      &nbsp;
      <span class="text-green-500">Proficient</span>
    </div>
    <div>
      <span class="opacity-70">drwxr-xr-x. 2 {{ today }}</span>
      &nbsp;
      <span class="text-orange-500">Competent</span>
    </div>
    <div>
      <span class="opacity-70">drwxr-xr-x. 2 {{ today }}</span>
      &nbsp;
      <span class="text-orange-200">Advance Beginner</span>
    </div>
    <div>
      <span class="opacity-70">drwxr-xr-x. 1 {{ today }}</span>
      &nbsp;
      <span class="text-red-500">Beginner</span>
    </div>
    <div>
      <span class="opacity-70">drwxr-xr-x. 1 {{ today }}</span>
      &nbsp;
      <span class="text-red-500">Beginner</span>
    </div>
  </div>

  <div id="what" class="ml-5">
    <div><icon icon="fa-brands fa-react" class="text-blue-500" /> React</div>
    <div><icon icon="fa-brands fa-angular" class="text-red-500" /> Angular</div>
    <div><icon icon="fa-solid fa-database" class="" /> SQL</div>
    <div><icon icon="fa-solid fa-pepper-hot" class="" /> Flask</div>
    <div><icon icon="fa-solid fa-leaf" class="text-green-500" /> Spring Boot</div>
    <div><icon icon="fa-brands fa-linux" /> Linux</div>
    <div><icon icon="fa-solid fa-wind" class="text-blue-300" /> tailwindcss</div>
  </div>
    </div>
</template>
