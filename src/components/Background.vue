<!-- script -->
<script setup>
  import { onMounted } from "vue";
  import images from "./BackgroundImages";

  onMounted(function () {
    // get all element of images background
    const backgrounds = document.querySelectorAll(".background");

    // build transition animation
    let counter = 5; // how many images can be transitioning
    let state = true;
    let zIndexCounter = 1;
    const timeCounter = 5000;

    setInterval(() => {
      // background transition effect
      if (backgrounds[counter]) {
        if (state) {
          backgrounds[counter].style.opacity = 0;
        } else {
          backgrounds[counter].style.opacity = 1;
        }
      }

      if (counter <= 1) state = false;
      if (counter >= 6) {
        state = true;
        if (backgrounds[counter]) backgrounds[counter].style.opacity = 0;
      }

      state ? counter-- : counter++;
      zIndexCounter++;
    }, timeCounter);
  });
</script>

<!-- template -->
<template>
  <!-- fixed bakground smooth gradient -->
  <div
    class="absolute top-0 left-0 right-0 grid grid-cols-1 grid-rows-1 right-0 h-screen z-[-1000] bg-cover overflow-hidden"
  >
    <img
      class="background transition-all duration-1000 w-screen h-screen row-start-1 col-start-1 select-none object-fit"
      v-for="image in images"
      :src="image"
    />
  </div>

  <div class="absolute z-[-100] top-0 right-0 left-0 w-screen h-screen">
    <div
      class="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.7)] to-black"
    ></div>
  </div>

  <div class="absolute z-[-100] top-0 right-0 left-0 w-screen h-screen">
    <div
      class="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-transparent"
    ></div>
  </div>
</template>

<!-- style -->
<style scoped></style>
