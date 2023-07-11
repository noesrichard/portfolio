<script setup>
import Tag from '../components/Tags.vue'
</script>

<template>
  <section id="experience" class="flex items-center w-3/4 h-screen pl-1">
    <div id="neovim" class="flex h-3/4">
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
          <li class="flex opacity-40 hover:opacity-100 hover:cursor-pointer p-2">
            >
            <icon icon="fa-solid fa-briefcase" class="mx-2 text-2xl"/>
            universidad-tecnica-ambato.work
          </li>
        </ul>
      </div>
      <div id="file" class="flex w-2/3 overflow-y-hidden">
        <div class="flex flex-col">
          <ul>
            <li class="opacity-30" v-for="n in 100">{{ n }}</li>
          </ul>
        </div>
        <div class="pl-1 flex flex-col justify-center">
          <Tag tag="company" text="Empresa Eléctrica Ambato Regional Centro Norte S. A. EEASA" />
          <Tag tag="position" text="Internship" />
          <Tag tag="what i did">
            <ul class="list-disc">
              <li class="my-2">Development of a PWA web application in Angular for the management and monitoring of civil and electrical works within the distribution department.</li>
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
  </section>
</template>

<style scoped></style>
