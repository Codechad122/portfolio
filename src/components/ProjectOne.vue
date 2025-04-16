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
        <div class="card bg-green-100 shadow-sm h-96">
          <figure class="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
        </div>
      </div>
      <div class="bg-purple-100 flex justify-center">
        description will go here about the project
      </div>
    </div>
  </main>
</template>
