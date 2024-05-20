<!-- script -->
<script setup>
  import Typed from "typed.js";
  import InputSearch from "../components/InputSearch.vue";
  import { onMounted } from "vue";

  onMounted(() => {
    const text = [
      "<span class='text-blue-600'>1%</span> Lebih baik dari kemarin."
    ];
    const typed = new Typed("#typed-1", {
      strings: text,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });
  });
</script>

<!-- template -->
<template>
  <main
    class="min-h-screen col-start-1 row-start-1 min-w-[100vw] max-w-[100vw]"
  >
    <!-- main -->
    <section role="main header" class="">
      <!-- header container -->
      <header class="h-screen md:h-[800px]">
        <!-- nav -->
        <nav class="w-full h-20 px-4 flex justify-between items-center">
          <h3 class="text-2xl font-black text-slate-100 tracking-tighter">
            Simple<span
              class="mix-blend-screen bg-slate-100 px-1 mx-1 rounded-md"
              ><span class="mix-blend-difference text-xl">Wiki</span></span
            >
          </h3>
        </nav>
        <!-- end nav -->
        <!-- search element -->
        <section class="mx-auto w-[90%] h-[20rem] rounded-2xl p-4">
          <InputSearch></InputSearch>
        </section>
        <!-- end search element -->
        <!-- kata-kata :v -->
        <section class="absolute bottom-1/3 mx-auto w-full h-20">
          <div class="w-[90%] px-5 h-full mx-auto">
            <h3
              id="typed-1"
              class="text-slate-100 font-bold text-xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] tracking-tight opacity-90"
            ></h3>
          </div>
        </section>
        <!-- end kata-kata  -->
      </header>
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
