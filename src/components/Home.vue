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
  <main
    class="max-w-full mx-auto p-4 flex flex-col justify-center items-center text-[#ffffff] bg-[#333333]"
  >
    <div class="carousel h-96 w-96 rounded-md bg-slate-200">
      <div
        v-for="(project, idx) in projects"
        :id="project.id.slice(1)"
        class="carousel-item relative w-full"
      >
        <img :src="project.image" class="w-96 h-96" />
        <a :href="project.link" class="absolute h-full w-full"></a>
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a
            :href="idx == 0 ? projects[projects.length - 1].id : projects[idx - 1].id"
            class="btn btn-circle"
            >❮</a
          >
          <a
            :href="idx == projects.length - 1 ? projects[0].id : projects[idx + 1].id"
            class="btn btn-circle"
            >❯</a
          >
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 mx-auto max-w-6xl w-full gap-4">
      <div class="flex flex-col gap-4 p-4 col-start-auto">
        <h1 class="text-2xl">About Me</h1>
        <p>
          I believe that good UX design is all about making intuitive and meanigful experiences that
          helps the user feel empowered. My approach to design is all about research, accessibility,
          and iteration. This helps to ensure that every design decision helps improve the usability
          while also helping to maintain the aesthetic appeal.
        </p>
        <button class="btn btn-md rounded-md bg-blue-300">Resume</button>
      </div>

      <div class="rounded-full w-full place-items-end">
        <img src="/self_image.jpg" />
      </div>

      <div class="flex flex-col gap-4 p-4 col-start-auto">
        <h2 class="text-2xl">Facts</h2>
        <p>4 years of figma</p>
        <p>3 years of prototyping</p>
      </div>

      <div class="rounded-full w-full place-items-end">
        <img src="/self_image.jpg" />
      </div>

      <div class="flex flex-col gap-4 p-4 col-start-auto">
        <h2 class="text-2xl">My expertise</h2>
        <div><p>UI/UX Design</p></div>
        <div><p>Prototyping</p></div>
        <div><p>Front End Design</p></div>
        <div><p>Photoshop</p></div>
        <div><p>Illistrator</p></div>
        <div><p>Indesign</p></div>
      </div>

      <div class="rounded-full w-full place-items-end">
        <img src="/self_image.jpg" />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="p-4 bg-[#215900]">Looking to get a free quote contact me here</div>
      <button class="rounded-md p-4 bg-[#215900]"><a href="/contact">Contact</a></button>
      <div class="flex gap-4 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-instagram"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-linkedin"
        >
          <path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          ></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-mail"
        >
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          ></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </div>
    </div>
  </main>
  <Footer />
</template>
