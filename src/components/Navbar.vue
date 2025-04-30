<script setup>
import feather from 'feather-icons'
import { ref } from 'vue'
const cartItems = ref(0)

console.log(feather.icons['shopping-bag'].toSvg())
// <svg class="feather feather-x" ...><line ... /><line ... /></svg>
</script>

<template>
  <div class="navbar bg-[#2A3C2F] text-[#FFFFFF] shadow-sm">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl"><RouterLink to="/">
        <img src="/Portfolio_logo.png" class="h-12 rounded-md"/>
      </RouterLink></a>
    </div>
    <div class="flex items-center">
      <ul class="menu menu-horizontal px-1">
        <div class="flex">
          <li><RouterLink to="/about">About Me</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </div>
      </ul>
    </div>
  </div>
</template>
