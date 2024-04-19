<!-- script -->
<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();

  const isScrolled = ref(false);
  const isNavSiderActive = ref(false);
  const scrollOrNavIsActive = ref(false);
  const isOffset = ref(false);

  /* offset state need global var for not reset in event listener */
  let previousOffset;
  let isOffsetMoreThan100vh = false;

  onMounted(async () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10
        ? (isScrolled.value = true)
        : (isScrolled.value = false);
    });
    // nav sider
    const navElement = document.querySelector("nav");
    setInterval(() => {
      isScrolledOrIsNavSider();
      if (isNavSiderActive.value) {
        navElement.style.height = "60vh";
      } else {
        navElement.style.height = "64px";
      }
      // offset state
      /* to evaluate whether this is scrolled up or down */
      const offset = window.scrollY;
      if (!isNavSiderActive.value) {
        if (offset >= window.innerHeight && isOffsetMoreThan100vh == false) {
          isOffsetMoreThan100vh = true;
        }
        if (offset == 0 && isOffsetMoreThan100vh == true) {
          isOffsetMoreThan100vh = false;
        }
        if (!(previousOffset == offset)) {
          if (previousOffset < offset && isOffsetMoreThan100vh) {
            isOffset.value = true;
          } else {
            isOffset.value = false;
          }
        }
        if (isOffset.value) {
          navElement.style.transform = "translateY(-100px)";
        } else {
          navElement.style.transform = "translateY(0px)";
        }
      }
      previousOffset = offset;
    }, 100);
  });

  function isScrolledOrIsNavSider() {
    if (isScrolled.value || isNavSiderActive.value || route.name == "search") {
      scrollOrNavIsActive.value = true;
    } else {
      scrollOrNavIsActive.value = false;
    }
  }
</script>
-->

<!-- template -->
<template>
  <nav
    class="fixed top-0 left-0 right-0 p-4 transition-all duration-700 z-[100] my-2 mx-3 rounded-lg overflow-hidden"
    :class="scrollOrNavIsActive ? 'bg-zinc-900' : 'bg-transparent'"
  >
    <div class="flex justify-between w-full">
      <!-- container -->
      <div class="flex items-center gap-2">
        <img class="w-8 h-8 rounded-lg" src="/logo.png" alt="logo" />
        <h1 class="text-xl font-extrabold text-slate-200 tracking-wider">
          Simple Wiki
        </h1>
      </div>
      <!-- end container -->
      <!-- container -->
      <div class="grid grid-cols-1 grid-rows-1 text-slate-200">
        <Transition name="buttonTransition">
          <button
            v-if="!isNavSiderActive"
            @click="isNavSiderActive = !isNavSiderActive"
            class="w-8 h-8 text-2xl col-start-1 row-start-1"
            type="button"
          >
            <i class="bi bi-list"></i>
          </button>
          <button
            v-else
            @click="isNavSiderActive = !isNavSiderActive"
            class="w-8 h-8 text-2xl col-start-1 row-start-1"
            type="button"
          >
            <i class="bi bi-x"></i>
          </button>
        </Transition>
      </div>
      <!-- end container -->
    </div>
    <!-- navigation section -->
    <section class="w-full h-52 mt-10 text-zinc-100">
      {{ $route.name }}
      <section v-if="$route.name == 'home'" class="">hahahahha</section>
    </section>
    <!-- end  navigation section -->
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
    transform: scale(0.1) rotate(0deg);
  }

  .buttonTransition-leave-to {
    opacity: 0;
    transform: scale(2) rotate(180deg);
  }
</style>
