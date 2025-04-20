<script setup>
import Navbar from './Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="flex flex-col mx-auto p-2 justify-center items-center gap-4">
    <h1 class="text-2xl">About Me</h1>
    <div class="bg-green-100 h-96 w-full">image will go here</div>
    <div class="bg-purple-100">
      <p class="w-full">I am an about me description. More info yet to come.</p>
    </div>
  </main>
</template>
