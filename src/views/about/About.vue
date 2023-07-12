<script setup>
import { ref } from 'vue'
import Prompt from '../../components/Prompt.vue'

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
document.write(today)
</script>

<template>
  <section id="about" class="flex items-center w-3/4 h-screen text-xl">
    <div class="w-5/6 text-justify">
      <Prompt :cursor="false" class="opacity-70">
        Hey there! I'm Richard, a software engineer with a deep-rooted love for coding. My journey
        into the world of programming started during my high school days when I made the bold
        decision to switch schools and choose a technical major. Little did I know that this
        decision would shape my entire career.
      </Prompt>
      <box-icon name="twitter"></box-icon>
      <Prompt :cursor="false" class="mt-10">
        <span>ls knowledge/technologies</span>
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
      </Prompt>
    </div>
    <pre class="w-3/6 text-sm -mt-40">
      <!--     / ======= \ -->
      <!--    / __________\ -->
      <!--   | ___________ | -->
      <!--   | | <span class="text-console-green">$</span><span class="text-console-green">hello</span><span  class="cursor"></span>  | | -->
      <!--   | |         | | -->
      <!--   | |_________| |________________________ -->
      <!--   \=____________/    richard carrion     ) -->
      <!--   / """"""""""" \                       / -->
      <!--  / ::::::::::::: \                  =D-' -->
      <!-- (_________________) -->
                       .,,uod8B8bou,,.
              ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
         ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
         !...:!TVBBBRPFT||||||||||!!^^""'   ||||
         !.......:!?|||||!!^^""'            ||||
         !.........||||                     ||||
         !.........||||  <span class="text-console-green">$_</span>                 ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         !.........||||                     ||||
         `.........||||                    ,||||
          .;.......||||               _.-!!|||||
   .,uodWBBBBb.....||||       _.-!!|||||||||!:'
!YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....
!..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   `.
!....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     `.
!......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"`;:::       `.
!........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
`..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
  `..........:::::::::::::::::::::::;iof688888888888b.     `YBBBP^'
    `........::::::::::::::::;iof688888888888888888888b.     `
      `......:::::::::;iof688888888888888888888888888888b.
        `....:::;iof688888888888888888888888888888888899fT!
          `..::!8888888888888888888888888888888899fT|!^"'
            `' !!988888888888888888888888899fT|!^"'
                `!!8888888888888888899fT|!^"'
                  `!988888888899fT|!^"'
                    `!9899fT|!^"'
                      `!^"'
    </pre>
  </section>
</template>

<style scoped></style>
