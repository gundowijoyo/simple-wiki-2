<!-- script -->
<script setup>
  import Background from "../components/HomeBackground.vue";
  import { RouterLink } from "vue-router";
  import { ref } from "vue";

  const searchValue = ref();
</script>

<!-- template -->
<template>
  <!-- utilites -->
  <Background></Background>
  <!-- end utilites -->

  <!-- main -->
  <main class="min-h-screen">
    <!-- header container -->
    <div class="h-screen flex justify-center items-center">
      <div class="w-[90%] h-[30rem] backdrop-blur-sm rounded-2xl p-4">
        <h1 class="text-2xl font-semibold text-slate-900">Hi, Welcome</h1>

        <!-- search input -->
        <div class="mt-5">
          <form
            class="flex gap-2 items-center"
            action="search"
            method="get"
            accept-charset="utf-8"
          >
            <input
              v-model="searchValue"
              class="h-10 text-xs w-full p-2 outline-none rounded-md"
              type="text"
              value=""
              placeholder="Search anything you want to search..."
            />
            <RouterLink
              :to="{ path: '/search', query: { query: searchValue } }"
              class="w-12 h-10 bg-white rounded-md flex items-center justify-center"
            >
              <i class="bi bi-search"></i>
            </RouterLink>
          </form>
        </div>
        <!-- end search input -->
        <p class="mt-5 text-sm text-slate-900">
          Simple wiki adalah aplikasi pencari artikel yang sederhana den mudah
          di gunakan berbasis pada APIs mediawiki dan wikipedia.
        </p>
      </div>
    </div>
    <!-- end header container -->
  </main>
  <!-- end main -->
</template>

<!-- style -->
<style scoped></style>
