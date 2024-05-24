<!-- script -->
<script setup>
  const props = defineProps({
    isDomLoaded: Boolean
  });
</script>

<!-- template -->
<template>
  <Transition>
    <div
      v-if="props.isDomLoaded == false"
      class="w-screen h-screen fixed bg-neutral-100 z-[1000] flex items-center justify-center"
    >
      <div class="loader"></div>
    </div>
  </Transition>
</template>

<!-- style -->
<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  .loader {
    height: 30px;
    aspect-ratio: 2.5;
    --_g: no-repeat radial-gradient(farthest-side, #884e0b 90%, #0000);
    background: var(--_g), var(--_g), var(--_g), var(--_g);
    background-size: 20% 50%;
    animation: l44 1s infinite linear alternate;
  }
  @keyframes l44 {
    0%,
    5% {
      background-position:
        calc(0 * 100% / 3) 50%,
        calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%,
        calc(3 * 100% / 3) 50%;
    }
    12.5% {
      background-position:
        calc(0 * 100% / 3) 0,
        calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%,
        calc(3 * 100% / 3) 50%;
    }
    25% {
      background-position:
        calc(0 * 100% / 3) 0,
        calc(1 * 100% / 3) 0,
        calc(2 * 100% / 3) 50%,
        calc(3 * 100% / 3) 50%;
    }
    37.5% {
      background-position:
        calc(0 * 100% / 3) 100%,
        calc(1 * 100% / 3) 0,
        calc(2 * 100% / 3) 0,
        calc(3 * 100% / 3) 50%;
    }
    50% {
      background-position:
        calc(0 * 100% / 3) 100%,
        calc(1 * 100% / 3) 100%,
        calc(2 * 100% / 3) 0,
        calc(3 * 100% / 3) 0;
    }
    62.5% {
      background-position:
        calc(0 * 100% / 3) 50%,
        calc(1 * 100% / 3) 100%,
        calc(2 * 100% / 3) 100%,
        calc(3 * 100% / 3) 0;
    }
    75% {
      background-position:
        calc(0 * 100% / 3) 50%,
        calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 100%,
        calc(3 * 100% / 3) 100%;
    }
    87.5% {
      background-position:
        calc(0 * 100% / 3) 50%,
        calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%,
        calc(3 * 100% / 3) 100%;
    }
    95%,
    100% {
      background-position:
        calc(0 * 100% / 3) 50%,
        calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%,
        calc(3 * 100% / 3) 50%;
    }
  }
</style>
