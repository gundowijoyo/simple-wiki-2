<!-- script -->
<script setup>
  import Navbar from "./components/Navbar.vue";

  import {RouterView} from "vue-router"
</script>

<!-- template -->
<template>
  <!-- utilities-->
  <!-- end utilities-->

  <!-- main components -->
  <div class="min-h-screen flex flex-col justify-between">
    <!-- container -->
    <div class="h-[1000vh]">
      <!-- navbar -->
      <Navbar></Navbar>
      <!-- end Navbar -->
      
      <!-- router view -->
      <RouterView></RouterView>
      <!-- end router view -->
    </div>
    <!-- end container -->

    <!-- container -->
    <div class="h-screen">footer</div>
    <!-- end container -->
  </div>
  <!-- end main components-->
</template>

<!-- style -->
<style scoped></style>
