<!-- script -->
<script setup>
  import AnimatedSquareBackground from "../components/AnimatedSquareBackground.vue";

  import { useRoute } from "vue-router";
  import { queryByPageId } from "../api/index.js";
  import { ref, onMounted } from "vue";

  const route = useRoute();
  const data = ref({});

  onMounted(async () => {
    const response = await fetch(queryByPageId + route.query.pageid);
    const rawData = await response.json();

    console.log(rawData.query.pages[route.query.pageid]);
    data.value = rawData.query.pages[route.query.pageid];
  });
</script>

<!-- template -->
<template>
  <main class="col-start-1 row-start-1 min-w-[100vw] max-w-[100vw]">
    <!-- utils -->
    <AnimatedSquareBackground></AnimatedSquareBackground>
    <!-- end utils -->
    <!-- main -->
    <section role="main" class="min-w-[100vw] max-w-[100vw]">
      <article
        class="mt-36 h-[70vh] w-[90vw] mx-auto bg-amber-100 text-sm p-2 rounded-lg overflow-scroll border-y-4 bg-[rgba(133,77,14,0.7)] backdrop-blur-sm"
      >
        <div v-html="data.extract" class=""></div>
      </article>
    </section>
    <!-- end main -->
  </main>
</template>

<!-- style -->
<style scoped></style>
