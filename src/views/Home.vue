<!-- script -->
<script setup>
  import InputSearch from "../components/InputSearch.vue";
</script>

<!-- template -->
<template>
  <!-- main -->
  <main class="min-h-screen">
    <!-- header container -->
    <div class="h-screen flex justify-center items-center">
      <!-- search section -->
      <section
        class="w-[90%] h-[30rem] backdrop-blur-sm rounded-2xl p-4 bg-[rgba(0,0,0,0.4)]"
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
    </div>
    <!-- end header container -->
  </main>
  <!-- end main -->
</template>

<!-- style -->
<style scoped></style>
