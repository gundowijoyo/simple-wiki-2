<!-- script -->
<script setup>
  import { useRoute } from "vue-router";
  import { queryByPageId, parseByPageId } from "../api/index.js";
  import { ref, onMounted } from "vue";

  const route = useRoute();
  const data = ref({});

  onMounted(async () => {
    const response = await fetch(queryByPageId + route.query.pageid);
    const rawData = await response.json();
    console.log(rawData.query.pages);
    data.value = rawData.query.pages[route.query.pageid];
  });

  function hendleNewLine(strArticle) {
    let buffer = strArticle.replace(/\n/g, "<br>");
    buffer = buffer.split("<br>");
    buffer = buffer.filter(arr => arr != "");
    buffer = buffer.join("");
    buffer = buffer.replace(
      /<h2/g,
      "<h2 class='text-xl mt-3 mb-1 font-semibold' "
    );
    return buffer;
  }
</script>

<!-- template -->
<template>
  <main class="col-start-1 row-start-1 min-w-[100vw] max-w-[100vw]">
    <!-- main -->
    <section role="main" class="min-w-[100vw] max-w-[100vw]">
      <article
        class="mt-36 h-[70vh] w-[90vw] mx-auto text-sm p-2 rounded-lg overflow-hidden p-2 bg-white"
      >
        <div class="h-full w-full overflow-auto overflow-x-hidden">
          <div class="mx-1">
            <h1 class="text-3xl mt-2 font-black text-slate-900 text-center">
              About
            </h1>
            <h2 class="text-xl font-bold text-center mt-3">{{ data.title }}</h2>
            <img
              v-if="data.thumbnail"
              class="w-full aspect-[4/3] p-4 rounded-3xl"
              :src="data.thumbnail.source"
              alt=""
            />
          </div>
          <div
            v-if="data.extract"
            v-html="hendleNewLine(data.extract)"
            class="text-s mx-1"
          ></div>
        </div>
      </article>
    </section>
    <!-- end main -->
  </main>
</template>

<!-- style -->
<style scoped></style>
