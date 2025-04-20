<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

const projects = [
  {
    id: 1,
    name: 'Brew Haven',
    description: 'I am the description',
    link: '/project-one',
    image: '/brew_haven_logo.png',
  },
  {
    id: 2,
    name: 'Mini Monsters',
    description: 'I am the description',
    link: '/project-two',
    image: '/Mini_monsters_logo.png',
  },
  {
    id: 3,
    name: 'El Toyanese',
    description: 'I am the description',
    link: '/project-three',
    image: '/el toyanese logo.png',
  },
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
          <img :src="i.image" alt="Shoes" class="rounded-xl" />
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
