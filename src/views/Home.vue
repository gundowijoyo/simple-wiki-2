<!-- script -->
<script setup>
  import InputSearch from "../components/InputSearch.vue";
</script>

<!-- template -->
<template>
  <!-- main -->
  <main class="min-h-screen">
    <!-- header container -->
    <div class="h-screen pt-48">
      <!-- search section -->
      <section
        class="mx-auto w-[90%] h-[30rem] backdrop-blur-sm rounded-2xl p-4 bg-[rgba(0,0,0,0.4)]"
      >
        <h1 class="text-2xl font-bold text-slate-100">Hi, Welcome</h1>

        <!-- search input -->
        <InputSearch></InputSearch>
        <!-- end search input -->
        <p class="mt-5 text-sm text-slate-200">
          Simple wiki adalah aplikasi pencari artikel yang sederhana den mudah
          di gunakan berbasis pada API's mediawiki dan wikipedia.
        </p>
      </section>
      <!-- end search section -->

      <div class="text-center mt-5">
        <h2 class="text-slate-200 font-extrabold">
          &copy;Arya Dewangga Puja | 2023
        </h2>
      </div>
    </div>
    <!-- end header container -->
  </main>
  <!-- end main -->
</template>

<!-- style -->
<style scoped></style>
