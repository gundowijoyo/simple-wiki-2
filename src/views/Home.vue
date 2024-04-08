<!-- script -->
<script setup>
  import Background from "../components/Background.vue";
  import InputSearch from "../components/InputSearch.vue";

  import { onMounted } from "vue";
  import Typed from "typed.js";

  onMounted(() => {
    const h1Typed1 = new Typed("#typed-1", {
      strings: ["Simple Wiki", "Is", "Simple", "and", "is Awesome"],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true
    });
  });
</script>

<!-- template -->
<template>
  <main class="min-h-screen col-start-1 row-start-1">
    <!-- utuls -->
    <Background></Background>
    <!-- end utuls -->
    <!-- main -->
    <!-- header container -->
    <section class="h-screen pt-48">
      <!-- search section -->
      <section
        data-aos="fade-up"
        class="mx-auto w-[90%] h-[30rem] backdrop-blur-sm rounded-2xl p-4 bg-[rgba(0,0,0,0.4)]"
      >
        <h1 class="text-2xl font-bold text-slate-100 tracking-wider">
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
    </section>
    <!-- end header container -->
    <!-- main section -->
    <section class="relative min-w-[100vw] max-w-[100vw] overflow-hidden">
      <div
        class="w-screen h-52 bg-amber-500 absolute top-0 left-[-4rem] rotate-[30deg] z-[-1500]"
      ></div>
      <div
        class="w-screen h-52 bg-amber-600 absolute top-[2rem] left-[-3rem] rotate-[30deg] z-[-2000]"
      ></div>
      <section role="Title" class="w-full h-fit p-5">
        <div data-aos="fade-left" class="mt-20">
          <h1
            class="inline text-3xl tracking-wider font-black text-zinc-800"
            id="typed-1"
          ></h1>
          &nbsp;
        </div>
        <div class="text-sm flex justify-start gap-1 tracking-wide">
          <p data-aos="fade-up" data-aos-delay="50">Write By</p>
          <p data-aos="fade-up" data-aos-delay="100">Arya</p>
          <p data-aos="fade-up" data-aos-delay="200">Dewangga</p>
          <div class="flex">
            <p data-aos="fade-up" data-aos-delay="300">Puja</p>
            <p data-aos="fade-left" data-aos-delay="500">.</p>
          </div>
        </div>
      </section>
      <section role="about" id="about" class="w-full h-fit p-5">
        <div class="mt-20 text-right">
          <h1
            data-aos="fade-right"
            data-aos-delay="50"
            class="text-2xl tracking-wide font-black text-zinc-800"
          >
            About Simple Wiki
          </h1>
          <p data-aos="fade-right" data-aos-delay="150" class="text-sm">
            Secara Singkat Simple Wiki adalah project sederhana yang
            mengintregasikan API dari Wikipedia dan Mediawiki. Setidaknya ini
            menambah protfolio :)
          </p>
        </div>
      </section>
    </section>
    <!-- end main section -->
  </main>
</template>

<!-- style -->
<style scoped></style>
