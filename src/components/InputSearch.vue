<!-- script -->
<script setup>
  import { RouterLink } from "vue-router";
  import { searchArticleUrl } from "../api/index.js";
  import { ref, onMounted } from "vue";

  const inputValue = ref();
  const data = ref(null);

  /* Debouncing involves introducing a small delay before sending a request, allowing the user to finish their input before initiating the fetch. */

  let debounceTimer;

  function search() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async function () {
      const controller = new AbortController(); // for canceling request
      const signal = controller.signal; // Obtain a reference to the AbortSignal

      // fetching the request
      const response = await fetch(searchArticleUrl + inputValue.value);
      const rawDatas = await response.json();

      // filltering output data
      const results = [];
      for (let key in rawDatas.query.pages) {
        const title = rawDatas.query.pages[key].title.toLowerCase();
        if (title.includes(inputValue.value.toLowerCase())) {
          results.push(rawDatas.query.pages[key]);
        }
      }

      console.log(inputValue.value, results);
    }, 400);
  }
</script>

<!-- template -->
<template>
  <div class="mt-5">
    <form
      class="flex gap-2 items-center"
      action="search"
      autocomplete="off"
      role="presentation"
      method="get"
      accept-charset="utf-8"
    >
      <!-- decoy for non autocomplete -->
      <input
        autocomplete="false"
        name="hidden"
        type="text"
        style="display: none"
      />

      <input
        v-model="inputValue"
        class="h-10 text-xs w-full p-2 outline-none rounded-md bg-slate-100"
        type="text"
        value=""
        @keyup="search"
        placeholder="Search anything you want to search..."
      />
      <RouterLink
        :to="{ path: '/search', query: { query: inputValue } }"
        class="w-12 h-10 bg-slate-100 rounded-md flex items-center justify-center"
      >
        <i class="bi bi-search"></i>
      </RouterLink>
    </form>

    <div
      class="absolute rounded-lg mt-2 drop-shadow bg-slate-100 mx-auto w-72 h-fit z-10"
    >
      <div v-for="i in data" class="p-2">
        <img
          v-if="i.thumbnail?.source"
          class="w-10 h-10"
          :src="i.thumbnail?.source"
          alt=""
        />
        <img v-else class="w-10 h-10" src="/Image_not_available.png" alt="" />
        {{ i.title }}
      </div>
    </div>
  </div>
</template>

<!-- style -->
<style scoped></style>
