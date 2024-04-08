<!-- script -->
<script setup>
  import { useRoute } from "vue-router";
  import { queryByPageId } from "../api/index.js";
  import { ref, onMounted } from "vue";

  const route = useRoute();

  onMounted(async () => {
    const response = await fetch(queryByPageId + route.query.pageid);
    const rawData = await response.json();
    
    console.log(rawData)
  });
</script>

<!-- template -->
<template>
  <main class="col-start-1 row-start-1">
    <h1>Lmao</h1>
    Cupidatat labore culpa amet dolore et irure commodo pariatur. Qui sit magna
    non sunt quis labore occaecat nostrud culpa occaecat sit officia. Labore
    veniam aliquip aliquip irure quis adipisicing. Lorem amet esse non nisi
    veniam veniam aliqua ex non commodo esse id occaecat. Consequat culpa cillum
    pariatur ipsum Lorem consequat ea dolor. Reprehenderit magna reprehenderit
    laborum do culpa commodo nulla eiusmod aliquip et fugiat enim veniam duis.
    Consequat labore consequat in ea. Laborum velit sint mollit dolore est
    nostrud magna id eiusmod. Adipisicing eiusmod non duis ex aliqua Lorem aute.
    Ut consectetur dolore ad excepteur duis tempor elit amet nostrud
    reprehenderit tempor nisi sint duis. {{ route.query }}
  </main>
</template>

<!-- style -->
<style scoped></style>
