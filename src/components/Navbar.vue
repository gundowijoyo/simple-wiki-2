<!-- script -->
<script setup>
  import { ref, onMounted } from "vue";

  /* variable */
  const isScrolled = ref(false);

  /* mounted */
  onMounted(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10
        ? (isScrolled.value = true)
        : (isScrolled.value = false);
      console.log(isScrolled.value);
    });
  });
</script>

<!-- template -->
<template>
  <nav
    class="fixed top-0 left-0 right-0 p-4 flex justify-between transition-colors duration-700"
    :class="isScrolled ? 'bg-white' : 'bg-trasparent'"
  >
    <!-- container -->
    <div class="flex items-center gap-2">
      <img class="w-8 h-8 rounded-lg" src="/logo.png" alt="logo" />
      <h1 class="text-slate-800 text-xl font-bold">Simple Wiki</h1>
    </div>
    <!-- end container -->

    <!-- container -->
    <div class="">
      <button class="text-2xl" type="button">
        <i class="bi bi-list"></i>
      </button>
    </div>
    <!-- end container -->
  </nav>
</template>

<!-- style -->
<style scoped></style>
