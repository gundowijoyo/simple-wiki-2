<!-- script -->
<script setup>
  import Navbar from "./components/Navbar.vue";
  import Background from "./components/Background.vue";

  import { RouterView } from "vue-router";
</script>

<!-- template -->
<template>
  <!-- utilities-->
  <Background></Background>
  <!-- end utilities-->
  <!-- main components -->
  <div class="min-h-screen flex flex-col justify-between">
    <!-- container -->
    <div class="">
      <!-- navbar -->
      <Navbar></Navbar>
      <!-- end Navbar -->
      <!-- router view -->
      <RouterView></RouterView>
      <!-- end router view -->
    </div>
    <!-- end container -->
    <!-- container -->
    <div class="min-h-screen">footer</div>
    <!-- end container -->
  </div>
  <!-- end main components-->
</template>

<!-- style -->
<style scoped></style>
