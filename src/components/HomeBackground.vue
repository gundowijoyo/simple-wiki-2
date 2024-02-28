<!-- script -->
<script setup>
  import { onMounted } from "vue";
  import images from "./BackgroundImages";

  onMounted(() => {
    const imagesEl = document.querySelectorAll("#images");

    window.addEventListener("scroll", () => {
      const scrollYOffset = window.scrollY;
      const exponent = scrollYOffset ;

      imagesEl[0].style.top = 0 - exponent / 5 + "px";
      imagesEl[1].style.top = 0 - exponent / 7 + "px";
      imagesEl[2].style.top = 0 - exponent / 9 + "px";
      imagesEl[3].style.top = 0 - exponent / 11 + "px";
      imagesEl[4].style.top = 0 - exponent / 13 + "px";
      imagesEl[5].style.top = 0 - exponent / 15 + "px";
      imagesEl[6].style.top = 0 - exponent / 17 + "px";
      for (let imageEl of imagesEl) {
        imageEl.style.opacity = 100 - scrollYOffset / 100 + "%";
      }
    });
  });
</script>

<!-- template -->
<template>
  <!-- fixed bakground smooth gradient -->
  <div
    class="fixed top-12 left-0 right-0 h-[100vh] z-[-1000] bg-cover columns-2 p-4"
  >
    <img
      id="images"
      v-for="image in images"
      class="w-52 h-fit mt-4 rounded-lg relative mx-auto"
      :src="image"
      alt="UtilsBg-images"
    />
  </div>
</template>

<!-- style -->
<style scoped></style>
