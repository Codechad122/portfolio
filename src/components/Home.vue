<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

const projects = [
  { id: 1, name: 'Project 1', description: 'I am the description', link: '/project-one' },
  { id: 2, name: 'Project 2', description: 'I am the description', link: '/project-two' },
  { id: 3, name: 'Project 3', description: 'I am the description', link: '/project-three' },
]
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="max-w-full mx-auto p-4 flex flex-col">
    <div class="bg-[#F7E1BC] h-96">image will go here</div>
    <br />
    <div class="grid grid-cols-3 gap-4">
      <div v-for="i in projects" :key="i.id" class="card bg-base-100 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{{ i.name }}</h2>
          <p>
            {{ i.description }}
          </p>
          <div class="card-actions">
            <button class="btn btn-primary"><RouterLink :to="i.link">Click Me</RouterLink></button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- <Footer /> -->
</template>
