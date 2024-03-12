<!-- script -->
<script setup>
  import { RouterLink } from "vue-router";
  import { ref } from "vue";

  const inputValue = ref();
</script>

<!-- template -->
<template>
  <div class="mt-5">
    <form
      class="flex gap-2 items-center"
      action="search"
      method="get"
      accept-charset="utf-8"
    >
      <input
        v-model="inputValue"
        class="h-10 text-xs w-full p-2 outline-none rounded-md bg-slate-100"
        type="text"
        value=""
        placeholder="Search anything you want to search..."
      />
      <RouterLink
        :to="{ path: '/search', query: { query: inputValue } }"
        class="w-12 h-10 bg-slate-100 rounded-md flex items-center justify-center"
      >
        <i class="bi bi-search"></i>
      </RouterLink>
    </form>
  </div>
</template>

<!-- style -->
<style scoped></style>
