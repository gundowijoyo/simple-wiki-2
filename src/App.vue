<!-- script -->
<script setup>
  import Background from "./components/Background.vue";
  import Navbar from "./components/Navbar.vue";
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
      <section class="grid grid-cols-1 grid-rows-1">
        <RouterView v-slot="{ Component }">
          <Transition name="route">
            <Component :is="Component" />
          </Transition>
        </RouterView>
      </section>
      <!-- end router view -->
    </div>
    <!-- end container -->
    <!-- container -->
    <div class="">footer</div>
    <!-- end container -->
  </div>
  <!-- end main components-->
</template>

<!-- style -->
<style scoped>
  /* we will explain what these classes do next! */
  .route-enter-active,
  .route-leave-active {
    transition: opacity 0.5s ease;
  }

  .route-enter-from,
  .route-leave-to {
    opacity: 0;
  }
</style>
