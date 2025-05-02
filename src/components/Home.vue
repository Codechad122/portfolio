<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

const projects = [
  {
    id: '#slide1',
    name: 'Brew Haven',
    description: '',
    link: '/project-one',
    image: '/brew_haven_logo.png',
  },
  {
    id: '#slide2',
    name: 'Mini Monsters',
    description: 'I am the description',
    link: '/project-two',
    image: '/Mini_monsters_logo.png',
  },
  {
    id: '#slide3',
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
  <main class="max-w-full mx-auto p-4 flex flex-col justify-center items-center">
    <div class="carousel h-96 w-96 rounded-md bg-slate-200">
      <div
        v-for="(project, idx) in projects"
        :id="project.id.slice(1,)"
        class="carousel-item relative w-full"
      >
        <img :src="project.image" class="w-96 h-96" />
        <a :href="project.link" class="absolute h-full w-full"></a>
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a :href="idx == 0 ? projects[projects.length - 1].id : projects[idx - 1].id" class="btn btn-circle">❮</a>
          <a :href="idx == projects.length - 1 ? projects[0].id : projects[idx + 1].id" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>
