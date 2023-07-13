<script setup>
import Tag from '../../components/Tags.vue'
import SectionTitle from '../../components/SectionTitle.vue'

window.addEventListener('scroll', () => {
  if (scrollY > 1500) {
    document.getElementById('experience-console').classList.add('animate-typing')
    document.getElementById('experience-console').classList.remove('hidden')
    document.getElementById('experience-console').addEventListener('animationend', () => {
      document.getElementById('neovim').classList.remove('hidden')
      document.getElementById('prompt-experience').classList.add('hidden')
    })
  } else {
    document.getElementById('prompt-experience').classList.remove('hidden')
    document.getElementById('experience-console').classList.remove('animate-typing')
    document.getElementById('experience-console').classList.add('hidden')
    document.getElementById('neovim').classList.add('hidden')
  }
})
</script>

<template>
  <section
    id="experience"
    class="flex flex-col justify-center items-center w-3/4 h-screen pl-1 text-xl"
  >
    <div class="flex flex-col h-3/4 w-full">
      <SectionTitle title="experience" />
      <div class="flex place-self-start mt-20" id="prompt-experience">
        <p>[carri@rcpc ~]$&nbsp;</p>
        <div class="w-fit">
          <p
            id="experience-console"
            class="hidden overflow-hidden whitespace-nowrap pr-5 text-white"
          >
            editor experience
          </p>
        </div>
      </div>
      <div id="neovim" class="flex h-3/4 mt-20 hidden">
        <div id="file-tree" class="text-xl w-1/3">
          <ul class="">
            <li class="flex p-2 hover:cursor-pointer">
              >
              <img
                class="mx-2"
                width="30"
                height="1"
                src="https://app.eeasa.com.ec/intranet/assets/images/LogoBlancoEEASA.png"
              />
              empresa-eléctrica-ambato.work
            </li>
            <!-- <li class="flex opacity-40 hover:opacity-100 hover:cursor-pointer p-2"> -->
            <!--   > -->
            <!--   <icon icon="fa-solid fa-briefcase" class="mx-2 text-2xl" /> -->
            <!--   universidad-tecnica-ambato.work -->
            <!-- </li> -->
          </ul>
        </div>
        <div id="file" class="flex w-2/3 overflow-y-hidden">
          <div class="flex flex-col">
            <ul>
              <li class="opacity-30" v-for="n in 100">{{ n }}</li>
            </ul>
          </div>
          <div class="pl-5 flex flex-col justify-center">
            <Tag tag="company" text="Empresa Eléctrica Ambato Regional Centro Norte S. A. EEASA" />
            <Tag tag="position" text="Internship" />
            <Tag tag="what i did">
              <ul class="list-disc">
                <li class="my-2">
                  Development of a PWA web application in Angular for the management and monitoring
                  of civil and electrical works within the distribution department.
                </li>
                <li class="my-2">Development of RESTful APIs in Java.</li>
                <li class="my-2">Relational database management with Oracle Database.</li>
              </ul>
            </Tag>
            <Tag tag="technologies" text="">
              <div class="flex justify-evenly">
                <div><icon class="text-red-500" icon="fa-brands fa-angular" /> Angular</div>
                <div><icon class="text-amber-500" icon="fa-brands fa-java" /> Java Servlets</div>
                <div>
                  <icon class="text-zinc-500" icon="fa-solid fa-database" /> Oracle Weblogic Server
                </div>
              </div>
            </Tag>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
