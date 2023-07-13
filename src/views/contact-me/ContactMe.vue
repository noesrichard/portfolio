<script setup>
var prevScrollpos = window.pageYOffset
window.onscroll = function () {
  console.log(scrollY)
  if (scrollY > 3860) {
    console.log(scrollY)
    document.getElementById('console-contact-me').classList.add('animate-typing')
    document.getElementById('console-contact-me').classList.remove('hidden')
    document.getElementById('console-contact-me').addEventListener('animationend', (event) => {
      document.getElementById('email').classList.add('animate-typingInput')
      document.getElementById('email').classList.remove('hidden')
      document.getElementById('email').addEventListener('animationend', (event) => {
        document.getElementById('email-input').classList.remove('hidden')
        document.getElementById('subject').classList.add('animate-typingSubject')
        document.getElementById('subject').classList.remove('hidden')
        document.getElementById('subject').addEventListener('animationend', () => {
          document.getElementById('subject-input').classList.remove('hidden')
          document.getElementById('send-button').classList.remove('hidden')
        })
      })
    })
  } if(scrollY < 3200) {
    document.getElementById('console-contact-me').classList.remove('animate-typing')
    document.getElementById('console-contact-me').classList.add('hidden')
    document.getElementById('email').classList.remove('animate-typingInput')
    document.getElementById('email').classList.add('hidden')
    document.getElementById('email-input').classList.add('hidden')
    document.getElementById('subject').classList.remove('animate-typingSubject')
    document.getElementById('subject').classList.add('hidden')
    document.getElementById('subject-input').classList.add('hidden')
    document.getElementById('send-button').classList.add('hidden')
  }
}
</script>

<template>
  <section id="contact-me" class="w-3/4 flex flex-col justify-center items-center text-xl h-screen">
    <div class="w-3/4 h-2/4 border-gray-600 border-[1px] p-5 rounded-md">
      <div class="flex flex-col justify-between h-full">
        <div>
          <div class="flex">
            <p>[new@rcpc ~]$&nbsp;</p>
            <div class="w-fit">
              <p
                id="console-contact-me"
                class="hidden overflow-hidden whitespace-nowrap pr-5 text-white"
              >
                Hello! Complete the form so we can start working together :)
              </p>
            </div>
          </div>
          <div class="w-fit flex mt-5 mb-1">
            <p id="email" class="hidden overflow-hidden whitespace-nowrap pr-5 text-white">
              > email
            </p>
          </div>
          <input
            type="text"
            id="email-input"
            class="bg-black border-[1px] border-white hidden w-full"
          />
          <div class="w-fit flex mt-5 mb-1">
            <p id="subject" class="hidden overflow-hidden whitespace-nowrap pr-5 text-white">
              > subject
            </p>
          </div>
          <div class="h-[230px]">
            <textarea
              id="subject-input"
              class="bg-black border-[1px] border-white hidden w-full h-full"
            ></textarea>
          </div>
        </div>
        <div class="bg-black sm:flex sm:flex-row-reverse">
          <button
            id="send-button"
            type="button"
            class="mt-3 w-full justify-center bg-black px-3 ml-2 py-2 text-base font-semibold text-console-green shadow-sm ring-1 ring-inset ring-console-green hover:bg-black sm:mt-0 sm:w-auto hidden hover:scale-110 transition ease-in-out duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
