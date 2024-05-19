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
        const signal = controller.signal;

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

  /* extraxt value have a lot of text so i need to be get the frits one */
  function getFristText(text) {
    const textArray = text.split(" ");
    const resultArray = [];
    // if is a 20 frist text we stop it
    for (let i = 0; i < 15; i++) {
      resultArray.push(textArray[i]);
    }
    return resultArray.join(" ").replace(/<p/g, "<p class='inline'");
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
        class="h-10 text-xs w-full p-2 outline-none rounded-md bg-slate-100 tracking-wide cursor-text shadow-md"
        type="text"
        value=""
        @keyup="searchRequest"
        placeholder="Search articles here ..."
      />
      <!-- end main input -->
      <div class="absolute top-2 right-3 text-zinc-300">
        <i v-if="!isLoad" class="bi bi-search relative text-[20px]"></i>
        <i v-else class="bi bi-search relative text-[20px] pulse"></i>
      </div>
      <!-- end input -->
      <!-- search viewer-->
      <Transition name="sv">
        <div
          v-if="data.length > 0"
          class="w-full absolute rounded-lg top-12 overflow-hidden z-50"
        >
          <section v-for="(info, index) in data" class="">
            <!-- router link -->
            <a
              :href="'page?id=' + info.pageid"
              class="flex justify-between items-center gap-3 px-2 py-1 border-y border-zinc-800 rounded-md bg-slate-100 hover:bg-slate-200 cursor-pointer"
              :class="{
                'border-t-0 rounded-t-0': index == 0,
                'border-b-0 rounded-b-0': index == data.length - 1
              }"
            >
              <div class="">
                <img
                  v-if="info.thumbnail"
                  class="w-14 h-10 rounded-md"
                  :src="info.thumbnail.source"
                  alt="info.title"
                />
                <img
                  v-if="!info.thumbnail"
                  class="w-14 h-10 rounded-md"
                  src="/imageNotFound.png"
                  alt=""
                />
              </div>
              <div class="w-full h-fit overflow-hidden">
                <h1 class="text-[0.6rem] font-bold">{{ info.title }}</h1>
                <div class="text-[0.4rem]">
                  <span
                    class="inline"
                    v-html="getFristText(info.extract)"
                  ></span>
                  <span>...</span>
                </div>
              </div>
            </a>
            <!-- router link -->
          </section>
        </div>
      </Transition>
      <!-- end search viewer-->
    </form>
  </div>
</template>

<!-- style -->
<style scoped>
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  .sv-enter-active,
  .sv-leave-active {
    transition: opacity 300ms ease;
  }
  .sv-enter-from,
  .sv-leave-to {
    opacity: 0;
  }
</style>
