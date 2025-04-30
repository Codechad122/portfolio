<script setup>
import Navbar from './Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="mx-auto flex flex-col p-4 gap-4">
      <div class="w-full bg-green-100 justify-center flex">
        <div class="card bg-green-100 shadow-sm h-96 p-2">
          <figure class="">
            <img src="/Welcome Screen mini monsters.jpg" alt="Shoes" class="h-96" />
          </figure>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="place-items-start">
          I am the description. A small write up about the project will go here
        </div>
        <div class="flex flex-col gap-4 place-items-end">
          <img src="/Player_screen_win_1_mini_monsters.jpg" class="rounded-md shadow-md" />
          <img src="/Welcome_Screen_mini_monsters.jpg" class="rounded-md shadow-md" />
          <img src="/You_Win_Screen_mini_monsters.jpg" class="rounded-md shadow-md" />
        </div>
      </div>
    </div>
  </main>
</template>
