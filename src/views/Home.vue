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
      <div class="h-screen pt-10 md:h-[800px]">
        <!-- search section -->
        <section class="mx-auto w-[90%] h-[20rem] rounded-2xl p-4">
          <div
            class="w-full mt-10 h-fit p-2 text-transparent flex justify-between rounded-lg bg-[hsla(240,5.9%,7.8%,0.5)] backdrop-blur"
          >
            <div class="text-2xl">
              <h1 class="text-slate-50 font-black red-hat tracking-wider">
                Simplified
              </h1>
              <h1
                class="gradient-animated text-slate-50 font-black red-hat tracking-wider"
              >
                <span class="text-transparent tracking-tighter">Wiki</span
                >pedia<span class="text-slate-600">,</span>
              </h1>
            </div>
            <div class="flex items-end gap-2">
              <img class="w-6 h-6 rounded-lg" src="/logo.png" alt="" />
              <i
                class="w-6 h-6 flex items-center justify-center bi bi-github text-gray-300 text-2xl"
              ></i>
            </div>
          </div>
          <!-- search input -->
          <InputSearch></InputSearch>
          <!-- end search input -->
        </section>
        <!-- end search section -->
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
