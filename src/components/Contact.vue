<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue';
</script>

<template>
    <header>
        <Navbar />
    </header>
    <div class="bg-[#54372B] text-[#F7E1BC] h-screen flex flex-col mx-auto  gap-4 justify-center items-center p-4">
        <h2 class="text-2xl">Get in touch</h2>
        <p class="text-lg">Hey there, fill out this form</p>

        <form action="submit" class="text-black flex flex-col gap-4 shadow-md p-4 bg-stone-200">
            <div class="flex gap-4">
                <input type="text" placeholder="Name" class="shadow-inner bg-white px-4">
                <input type="text" placeholder="Email" class="shadow-inner bg-white px-4">
            </div>
            <div class="w-full">
                <textarea placeholder="Message" class="w-full shadow-inner bg-white px-4"></textarea>
            </div>
            <button class="btn btn-sm">Submit</button>
        </form>
    </div>
    <Footer />
</template>