<script setup>
import Navbar from './Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-[#333333] text-[#ffffff]">
    <div class="mx-auto flex flex-col p-4 gap-4">
      <h1 class="text-center text-4xl">Brew Haven</h1>
      <div class="w-full justify-center flex">
        <figure class="px-10 pt-10">
          <img src="/brew_haven_home_page_.jpg" alt="Shoes" class="rounded-xl" />
        </figure>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="place-items-start">
          <h2 class="text-2xl text-center">Project Overview</h2>
          <p>
            Brew Haven unites coffee lovers from every part of the world into a tight knit community
            who all love coffe and want great tasting beans while keeping the environmnet healthy
            and keeping everything sustanable.
          </p>
        </div>

        <div class="place-items-end text-[#ffffff] text-2xl">
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
              <button class="bg-[#215900] p-1 rounded-full">
                <a href="http://midpoint-portfolio.s3-website-us-east-1.amazonaws.com/"
                  >Click Here</a
                >
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-4 place-items-end">
        <img src="/brew_haven_about_us_page.jpg" class="col-span-2 rounded-md shadow-md" />
        <img src="/brew_haven_contact_page.jpg" class="col-span-2 rounded-md shadow-md" />
        <img
          src="/brew_haven_products_page.jpg"
          class="col-start-2 col-span-2 justify-center rounded-md shadow-md"
        />
      </div>
    </div>
  </main>
</template>
