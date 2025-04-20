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
        <div class="card bg-green-100 shadow-sm p-2">
          <figure class="">
            <img src="/Onboarding screen for mockups.jpg" alt="Shoes" class="h-96" />
          </figure>
        </div>
      </div>
      <div class="bg-purple-100 flex justify-center">
        description will go here about the project
      </div>
    </div>
  </main>
</template>
