<!-- script -->
<script setup>
  import { ref, onMounted } from "vue";

  const isScrolled = ref(false);
  const isNavSiderActive = ref(false);

  onMounted(async () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10
        ? (isScrolled.value = true)
        : (isScrolled.value = false);
    });
  });
</script>

<!-- template -->
<template>
  <nav
    class="fixed top-0 left-0 right-0 p-4 h-16 flex justify-between transition-all duration-700 z-[100]"
    :class="isScrolled ? 'bg-[#080708]' : 'bg-transparent '"
  >
    <!-- container -->
    <div class="flex items-center gap-2">
      <img class="w-8 h-8 rounded-lg" src="/logo.png" alt="logo" />
      <h1 class="text-xl font-extrabold text-slate-200">Simple Wiki</h1>
    </div>
    <!-- end container -->

    <!-- container sider -->
    <div
      :class="
        isNavSiderActive ? 'top-16 opacity-1' : 'top-[-25rem] opacity-[0.0]'
      "
      class="fixed left-0 right-0 m-3 min-h-[20rem] bg-white drop-shadow-xl rounded-xl transition-all duration-700 p-2"
    >
      <!-- header -->
      <div class="flex items-center gap-4">
        <h2 class="font-semibold text-zinc-800 px-5">{{ $route.name }}</h2>
      </div>
      <!-- header -->
    </div>
    <!-- end container sider -->

    <!-- container -->
    <div class="">
      <!-- container button -->
      <div class="grid grid-cols-1 grid-rows-1 text-slate-200">
        <Transition name="buttonTransition">
          <button
            @click="isNavSiderActive = !isNavSiderActive"
            class="w-8 h-8 text-2xl col-start-1 row-start-1"
            v-if="!isNavSiderActive"
            type="button"
          >
            <i class="bi bi-list"></i>
          </button>
          <button
            @click="isNavSiderActive = !isNavSiderActive"
            class="w-8 h-8 text-2xl col-start-1 row-start-1"
            v-else
            type="button"
          >
            <i class="bi bi-x"></i>
          </button>
        </Transition>
      </div>
    </div>
    <!-- end container -->
  </nav>
</template>

<!-- style -->
<style scoped>
  .buttonTransition-enter-active,
  .buttonTransition-leave-active {
    transition: 0.5s ease;
  }

  .buttonTransition-enter-from {
    opacity: 0;
    transform: scale(0.1);
  }

  .buttonTransition-leave-to {
    opacity: 0;
    transform: scale(2);
  }

  .gradient-bg {
    background-size: 400% 400%;
    animation: gradient-bg 20s ease infinite;
  }
  @keyframes gradient-bg {
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
