<script setup>
import Navbar from './Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-[#333333] text-[#ffffff]">
    <div class="mx-auto flex flex-col p-4 gap-4">
      <h1 class="text-center text-4xl">El Toyanese</h1>
      <div class="w-full justify-center flex">
        <figure class="px-10 pt-10">
          <img src="/onboarding_el_toyanese.jpg" alt="Shoes" class="rounded-xl" />
        </figure>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="place-items-start">
          <h2 class="text-2xl text-center">Project Overview</h2>
          <p>I am the description. A small write up about the project will go here</p>
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
                <a
                  href="https://www.figma.com/proto/IR0IJSw72cBiSb7jmcw1Sf/Untitled?node-id=0-1&p=f&viewport=-8252%2C-2562%2C0.5&t=dZfQ2qgiLtSn1YNF-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=126%3A6699&show-proto-sidebar=1"
                  >Click Here</a
                >
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-4 place-items-end">
        <img src="/login_page_1.png" class="rounded-md shadow-md" />
        <img src="/login_page_2.png" class="rounded-md shadow-md" />
        <img src="/best_selling_home_page.png" class="rounded-md shadow-md" />
        <img src="/Burrito_home_page.jpg" class="rounded-md shadow-md" />
        <img src="/drink_home_page.png" class="rounded-md shadow-md" />
        <img src="/profile_page.png" class="rounded-md shadow-md" />
        <img src="/register_page.png" class="rounded-md shadow-md" />
        <img src="/soup_home_page.png" class="rounded-md shadow-md" />
        <img src="/taco_home_page.png" class="rounded-md shadow-md" />
        <img src="/Carna_asada_Burrito.png" class="rounded-md shadow-md" />
        <img src="/Carna_asada_taco.png" class="rounded-md shadow-md" />
        <img src="/tinga_de_pollo_taco.png" class="rounded-md shadow-md" />
        <img src="/Payment_screen.png" class="rounded-md shadow-md" />
        <img src="/Confirm_payment_screen.png" class="rounded-md shadow-md" />
        <img src="/thankyou_for_ordering.png" class="rounded-md shadow-md" />
      </div>
    </div>
  </main>
</template>
