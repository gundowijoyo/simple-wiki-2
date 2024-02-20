<!-- script -->
<script setup>
  import { onMounted } from "vue";
  import images from "./BackgroundImages";

  onMounted(() => {
    const imagesEl = document.querySelectorAll("#images");

    window.addEventListener("scroll", () => {
      const scrollYOffset = window.scrollY;

      imagesEl[0].style.top = 0 - scrollYOffset / 10 + "px";
      imagesEl[1].style.top = 0 - scrollYOffset / 12 + "px";
      imagesEl[2].style.top = 0 - scrollYOffset / 14 + "px";
      imagesEl[3].style.top = 0 - scrollYOffset / 16 + "px";
      imagesEl[4].style.top = 0 - scrollYOffset / 18 + "px";
      imagesEl[5].style.top = 0 - scrollYOffset / 20 + "px";
      imagesEl[6].style.top = 0 - scrollYOffset / 22 + "px";

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
    class="fixed top-5 left-0 right-0 h-[100vh] z-[-1000] bg-cover columns-2 p-4 text-center"
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
