<script setup>
import Navbar from './Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="">
    <div class="mx-auto flex flex-col p-4 gap-4">
      <div class="w-full justify-center flex">
        <div class="card shadow-sm h-96">
          <figure class="px-10 pt-10">
            <img src="/brew_haven_home_page.jpg" alt="Shoes" class="rounded-xl" />
          </figure>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="place-items-start">
          I am the description. A small write up about the project will go here
        </div>
        <div class="flex flex-col gap-4 place-items-end">
          <img src="/brew_haven_about_us_page.jpg" class="rounded-md shadow-md" />
          <img src="/brew_haven_contact_page.jpg" class="rounded-md shadow-md" />
          <img src="/brew_haven_products_page.jpg" class="rounded-md shadow-md" />
        </div>
      </div>
    </div>
  </main>
</template>
