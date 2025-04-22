<script setup>
import feather from 'feather-icons'
import { ref } from 'vue'
const cartItems = ref(0)

console.log(feather.icons['shopping-bag'].toSvg())
// <svg class="feather feather-x" ...><line ... /><line ... /></svg>
</script>

<template>
  <div class="navbar bg-[#54372B] text-[#F7E1BC] shadow-sm">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl"><RouterLink to="/">My Portfolio</RouterLink></a>
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
