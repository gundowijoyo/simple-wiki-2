<!-- script -->
<script setup>
  import { onMounted } from "vue";
  import images from "./BackgroundImages";

  onMounted(function () {
    // get all element of images background
    const backgrounds = document.querySelectorAll(".background");

    // build transition animation
    // how many images can be transitioning
    let counter = 3;

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
      if (counter >= 4) {
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
    class="absolute top-0 left-0 grid grid-cols-1 grid-rows-1 right-0 h-fit z-[-1000] brightness-125 bg-cover overflow-hidden md:w-[50%]"
  >
    <img
      class="background transition-all duration-1000 w-screen h-screen row-start-1 col-start-1 select-none object-fit md:h-[800px]"
      v-for="image in images"
      :src="image"
    />

    <div
      class="absolute top-0 right-0 bottom-0 left-0 z-10 bg-black opacity-60"
    ></div>
  </div>

  <div
    class="absolute z-[-100] top-1 right-0 left-0 w-screen h-screen md:h-[800px]"
  >
    <div
      class="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.05)] via-[rgba(0, 0,0,0.2)] to-[hsl(240,5.9%,3.21%)]"
    ></div>
  </div>

  <!-- <div
    class="absolute z-[-100] top-0 right-0 left-0 w-screen h-screen md:h-[800px]"
  >
    <div
      class="absolute top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-[rgba(255,255,255,0.6)] via-[rgba(255,255,255,0.1)] to-transparent"
    ></div>
  </div> -->
</template>

<!-- style -->
<style scoped></style>
