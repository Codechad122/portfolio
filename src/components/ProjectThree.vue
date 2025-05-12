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
          <img src="/onboarding_el_toyanese.png" alt="Shoes" class="rounded-xl" />
        </figure>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="place-items-start">
          <h2 class="text-2xl text-center">Project Overview</h2>
          <p>
            El Toyanese is a vibrant food truck experience designed to celebrate and share authentic
            Hispanic cuisine with the local community. The project focuses on creating a strong
            visual identity and user-friendly digital platform to enhance customer engagement and
            streamline the ordering process. By combining traditional flavors with modern design, it
            honors cultural heritage while appealing to a broader audience. This project aims to
            increase brand visibility, build customer loyalty, and support the growth of a
            community-centered business.
          </p>
        </div>

        <div class="place-items-end text-[#ffffff] text-2xl">
          <div class="flex flex-col gap-4">
            <div class="flex gap-4 justify-between">
              <p>Service</p>
              <p>App Design</p>
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
              <p class="text-center">Live Prototype</p>
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
        <img src="/loin_page_1_png" class="rounded-md shadow-md" />
        <img src="/login_page_2.png" class="rounded-md shadow-md" />
        <img src="/best_selling_home_page.png" class="rounded-md shadow-md" />
        <img src="/burrito_home.png" class="rounded-md shadow-md" />
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
        <img src="/thankyou_for_ordering_.png" class="rounded-md shadow-md" />
      </div>
    </div>
  </main>
</template>
