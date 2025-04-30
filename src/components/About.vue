<script setup>
import Navbar from './Navbar.vue'

import feather from 'feather-icons'
import { ref } from 'vue'
const cartItems = ref(0)

console.log(feather.icons['instagram'].toSvg())
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="flex flex-col mx-auto p-2 justify-center items-center gap-4">
    <div class="grid grid-cols-2 mx-auto max-w-6xl w-full gap-4">
      <div class="flex flex-col gap-4 p-4 col-start-auto">
        <h1 class="text-2xl">About Me</h1>
        <p>
          Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis
          ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet
          imperdiet sit.
        </p>
        <button class="btn btn-md rounded-md bg-blue-300">Resume</button>
      </div>

      <div class="rounded-full w-full place-items-end">
        <img src="/Mini_monsters_logo.png" />
      </div>
    </div>
    <div class="flex gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>


    </div>
  </main>
</template>
