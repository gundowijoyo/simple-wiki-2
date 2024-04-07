<!-- script -->
<script setup>
  import { RouterLink } from "vue-router";
  import { searchArticleUrl } from "../api/index.js";
  import { ref, onMounted } from "vue";

  const inputValue = ref();
  const data = ref([]);
  const isLoad = ref(false);

  /* Debouncing involves introducing a small delay before sending a request,
   * allowing the user to finish their input before initiating the fetch. */
  let debounceTimer;
  function searchRequest() {
    isLoad.value = true;
    data.value = [];
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async function () {
      try {
        // for canceling request
        const controller = new AbortController();
        // Obtain a reference to the AbortSignal
        const signal = controller.signal;
        // fetching the request
        const response = await fetch(searchArticleUrl + inputValue.value, {
          signal
        });
        const rawDatas = await response.json();
        // filltering output data
        const fillterData = [];
        for (let key in rawDatas.query.pages) {
          const title = rawDatas.query.pages[key].title.toLowerCase();
          if (title.includes(inputValue.value.toLowerCase())) {
            fillterData.push(rawDatas.query.pages[key]);
          }
        }
        // input = "" abort
        if (inputValue.value.length <= 0) controller.abort();
        data.value = fillterData;
        console.log(inputValue.value, fillterData);
      } catch (error) {
      } finally {
        isLoad.value = false;
      }
    }, 400);
  }
</script>

<!-- template -->
<template>
  <div class="mt-5">
    <form
      class="flex gap-2 items-center relative"
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
      <!-- end decoy-->
      <!-- main input -->
      <input
        v-model="inputValue"
        class="h-10 text-xs w-full p-2 outline-none rounded-md bg-slate-100"
        type="text"
        value=""
        @keyup="searchRequest"
        placeholder="Search anything you want to search..."
      />
      <!-- end main input -->
      <div class="absolute right-3 text-zinc-300">
        <i v-if="!isLoad" class="bi bi-search relative text-[20px]"></i>
        <i v-else class="bi bi-search relative text-[20px] animate-pulse"></i>
      </div>
      <!-- <div
        class="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center"
      >
        <RouterLink
          v-if="!isLoad"
          :to="{ path: '/search', query: { query: inputValue } }"
        >
        </RouterLink>
      </div> -->
      <!-- end input -->
      <!-- search viewer-->
      <div
        v-if="data.length > 0"
        class="bg-amber-100 w-full absolute rounded-lg top-12"
      >
        <section v-for="info in data" class="">
          <RouterLink :to="{ path: '/search', query: { pageid: info.pageid } }">
            {{ info.title }}
          </RouterLink>
        </section>
      </div>
      <!-- end search viewer-->
    </form>
  </div>
</template>

<!-- style -->
<style scoped></style>
