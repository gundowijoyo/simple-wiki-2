<!-- script -->
<script setup></script>

<!-- template -->
<template>
  <nav class="w-full h-20 px-4 flex justify-between items-center">
    <h3
      class="text-2xl font-black tracking-tighter diagonal-gr drop-shadow-2xl"
    >
      Simple Wiki
    </h3>
    <div class="">
      <a class="cursor-pointer" href="mailto:aryadewanggapuja@gmail.com">
        <span
          class="mix-blend-screen bg-zinc-200 p-1 rounded-lg text-sm font-bold transition-colors duration-500 hover:bg-[#b8b8b8] hover:mix-blend-normal hover:text-white"
          >Feedback</span
        >
      </a>
    </div>
  </nav>
</template>

<!-- style -->
<style scoped>
  .diagonal-gr {
    background-image: -webkit-linear-gradient(
      50deg,
      #b8b8b8 70%,
      hsl(0, 0%, 95%) 50.3%
    );
    background-size: 200% 100%;
    background-position: -105px 0px;
    background-clip: text;
    color: transparent;
  }
</style>
