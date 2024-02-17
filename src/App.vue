<!-- script -->
<script setup>
  import Navbar from "./components/Navbar.vue";
  import Background from "./components/Background.vue";
</script>

<!-- template -->
<template>
  <!-- utilities-->
  <Background></Background>
  <!-- end utilities-->

  <!-- main components -->
  <div class="min-h-screen flex flex-col justify-between">
    <!-- container -->
    <div class="h-screen">
      <!-- navbar -->
      <Navbar></Navbar>
      <!-- end Navbar -->
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
