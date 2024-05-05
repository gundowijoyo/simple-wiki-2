<!-- script -->
<script setup>
  import InputSearch from "../components/InputSearch.vue";

  import Typed from "typed.js";
</script>

<!-- template -->
<template>
  <main
    class="min-h-screen col-start-1 row-start-1 min-w-[100vw] max-w-[100vw]"
  >
    <!-- main -->
    <section role="main header" class="">
      <!-- header container -->
      <div class="h-screen pt-10 md:h-[800px]">
        <!-- search section -->
        <section class="mx-auto w-[90%] h-[20rem] rounded-2xl p-4">
          <div
            class="gradient-animated w-full mt-10 h-fit bg-clip-text text-transparent flex justify-between"
          >
            <div class="">
              <h1 class="font-black text-3xl tracking-wider">Simplified</h1>
              <h1 class="font-black text-3xl tracking-wider">Wikipedia,</h1>
            </div>
            <div class="flex items-end">
              <i class="bi bi-discord text-2xl"></i>
            </div>
          </div>
          <!-- search input -->
          <InputSearch></InputSearch>
          <!-- end search input -->
        </section>
        <!-- end search section -->
      </div>
      <!-- end header container -->
      <!-- main section -->
      <section role="main section" class=""></section>
      <!-- end main section -->
    </section>
  </main>
</template>

<!-- style -->
<style scoped>
  .gradient-animated {
    background: linear-gradient(
      -45deg,
      #ee7752,
      #e73c7e,
      #23a6d5,
      hsl(224, 76.3%, 48%)
    );
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
    background-clip: text;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
