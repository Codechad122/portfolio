<script setup>
import Navbar from './Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="mx-auto flex flex-col">
      <div class="w-full bg-green-100 justify-center flex">
        <p>image will go here</p>
        <img />
      </div>
      <div class="bg-purple-100 flex justify-center">description will go here about the project</div>
    </div>
  </main>
</template>
