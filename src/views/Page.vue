<!-- script -->
<script setup>
  import InputSearch from "../components/InputSearch.vue";
  import { useRoute } from "vue-router";
  import { queryByPageId, parseByPageId } from "../api/index.js";
  import { ref, onMounted } from "vue";

  const route = useRoute();
  const data = ref({});

  onMounted(async () => {
    const response = await fetch(queryByPageId + route.query.id);
    const rawData = await response.json();
    console.log(rawData.query.pages);
    data.value = rawData.query.pages[route.query.id];
  });

  function hendleNewLine(strArticle) {
    let buffer = strArticle.replace(/\n/g, "<br>");
    buffer = buffer.split("<br>");
    buffer = buffer.filter(arr => arr != "");
    buffer = buffer.join("");
    buffer = buffer.replace(
      /<h2/g,
      "<h2 data-aos='fade-up' class='text-2xl mt-3 mb-1 font-semibold' "
    );
    buffer = buffer.replace(
      /<h3/g,
      "<h3 data-aos='fade-up' class='text-xl mt-2 mb-1 font-semibold' "
    );
    buffer = buffer.replace(
      /<h4/g,
      "<h4 data-aos='fade-up' class='text-md mt-2 font-semibold' "
    );
    buffer = buffer.replace(
      /<p/g,
      "<p data-aos='fade-up' data-aos-delay='100' class='text-justify' "
    );
    buffer = buffer.replace(
      /<ul/g,
      "<ul data-aos='fade-up' data-aos-delay='100' "
    );
    buffer = buffer.replace(
      /<dl/g,
      "<dl data-aos='fade-up' data-aos-delay='100' "
    );

    // Use regex to find all id attributes in span
    const regex = /<span id="(\w+)"/g;
    const matches = buffer.matchAll(regex);
    const ids = [...matches].map(m => m[1]);
    ids.unshift("pengenalan");

    console.log(ids);

    return buffer;
  }
</script>

<!-- template -->
<template>
  <main class="col-start-1 row-start-1 min-w-[100vw] max-w-[100vw]">
    <!-- main -->
    <section role="main" class="min-w-[100vw] max-w-[100vw]">
      <InputSearch></InputSearch>
      <a class="" href="#Sejarah">sejarah</a>
      <article
        class="mt-36 w-[98vw] h-fit mx-auto text-sm p-2 rounded-lg overflow-hidden p-2 bg-[hsla(210,40%,96.1%,0.0)]"
      >
        <div class="h-full w-full overflow-clip text-white overflow-x-hidden">
          <div class="mx-1">
            <h1 class="text-3xl mt-2 font-black text-slate-100 text-center">
              About
            </h1>
            <h2 class="text-xl font-bold text-slate-100 text-center mt-3">
              {{ data.title }}
            </h2>
            <img
              v-if="data.thumbnail"
              data-aos="fade-up"
              class="w-full aspect-[4/3] p-4 rounded-3xl"
              :src="data.thumbnail.source"
              alt=""
            />
            <br v-else />
          </div>
          <div
            v-if="data.extract"
            v-html="hendleNewLine(data.extract)"
            class="text-s mx-1 text-slate-100"
          ></div>
        </div>
      </article>
    </section>
    <!-- end main -->
  </main>
</template>

<!-- style -->
<style scoped></style>
