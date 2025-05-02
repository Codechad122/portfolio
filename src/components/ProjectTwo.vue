<script setup>
import Navbar from './Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-[#333333] text-[#ffffff]">
    <div class="mx-auto flex flex-col p-4 gap-4">
      <h1 class="text-center text-4xl">Mini Monsters</h1>
      <div class="w-full justify-center flex">
          <figure class="px-10 pt-10">
            <img src="/Welcome Screen mini monsters.jpg" alt="Shoes" class="rounded-xl" />
          </figure>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="place-items-start">
          <h2 class="text-2xl text-center">Project Overview</h2>
          <p>I am the description. A small write up about the project will go here</p>
        </div>

        <div class="place-items-end text-[#ffffff] text-2xl ">
          <div class="flex flex-col gap-4">
            <div class="flex gap-4 justify-between">
              <p>Service</p>
              <p>Web Design</p>
            </div>

            <div class="justify-between place-items-start flex gap-4">
              <p>Industry</p>
              <p>Design</p>
            </div>

            <div class="flex justify-between gap-4">
              <p>Year</p>
              <p class="">2024</p>
            </div>

            <div class="flex flex-col gap-4">
              <p class="text-center">Live Website</p>
              <button class="bg-[#215900] p-1 rounded-full "><a href="https://www.figma.com/proto/IR0IJSw72cBiSb7jmcw1Sf/Untitled?node-id=42-27224&p=f&viewport=1656%2C1084%2C0.03&t=C1JA33cK4R8Zth1P-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=42%3A27224&show-proto-sidebar=1">Click Here</a></button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-4 place-items-end">
        <img src="/Player_screen_win_1_mini_monsters.jpg" class="col-span-2 rounded-md shadow-md" />
        <img src="/You_Win_Screen_mini_monsters.jpg" class="col-span-2 rounded-md shadow-md" />
        <!-- <img src="/brew_haven_products_page.jpg" class="col-start-2 col-span-2 justify-center rounded-md shadow-md" /> -->
      </div>
    </div>
  </main>
</template>
