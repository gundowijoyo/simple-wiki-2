<!-- script -->
<script setup>
  import Background from "../components/Background.vue";
  import InputSearch from "../components/InputSearch.vue";

  import { onMounted } from "vue";
  import Typed from "typed.js";

  onMounted(() => {
    /* tyoed js */
    /*
    const h1Typed1 = new Typed("#typed-1", {
      strings: ["Simple Wiki", "Is", "Simple", "and", "is Awesome"],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true
    });
    */
  });
</script>

<!-- template -->
<template>
  <main
    class="min-h-screen col-start-1 row-start-1 min-w-[100vw] max-w-[100vw]"
  >
    <!-- utuls -->
    <Background></Background>
    <!-- end utuls -->
    <!-- main -->
    <section role="main header" class="">
      <!-- header container -->
      <div class="h-screen pt-48 md:h-[800px]">
        <!-- search section -->
        <section
          data-aos="fade-up"
          class="mx-auto w-[90%] h-[30rem] backdrop-blur-sm rounded-2xl p-4 bg-[rgba(0,0,0,0.4)]"
        >
          <h1 class="text-3xl font-black text-slate-100 tracking-wider">
            Hi, Welcome
          </h1>

          <!-- search input -->
          <InputSearch></InputSearch>
          <!-- end search input -->
          <p class="mt-5 text-sm text-slate-200 tracking-wide">
            Simple wiki adalah aplikasi pencari artikel yang sederhana den mudah
            di gunakan berbasis pada API's mediawiki dan wikipedia.
          </p>
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
<style scoped></style>
