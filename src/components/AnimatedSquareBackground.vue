<!-- script -->
<script setup></script>

<!-- template -->
<template>
  <div class="absolute top-0 right-0 -z-[1000] w-screen h-[100vh]">
    <ul
      class="absolute w-screen h-[100vh] top-0 right-0 overflow-visible md:h-[800px]"
    >
      <li
        class="l1 left-[1%] bg-gradient-to-r from-amber-500 to-pink-500 w-20 h-20"
      ></li>
      <li
        class="l2 left-[10%] bg-gradient-to-r from-red-500 to-orange-500 w-5 h-5"
      ></li>
      <li
        class="l3 left-[15%] bg-gradient-to-r from-indigo-400 to-cyan-400 w-20 h-20"
      ></li>
      <li
        class="l4 left-[30%] bg-gradient-to-r from-blue-600 to-violet-600 w-32 h-32"
      ></li>
      <li
        class="l5 left-[35%] bg-gradient-to-r from-fuchsia-600 to-pink-600 w-16 h-16"
      ></li>
      <li
        class="l6 left-[40%] bg-gradient-to-r from-fuchsia-600 to-purple-600 w-12 h-12"
      ></li>
      <li
        class="l7 left-[60%] bg-gradient-to-r from-violet-600 to-indigo-600 w-8 h-8"
      ></li>
      <li
        class="l8 left-[65%] bg-gradient-to-r from-blue-600 to-violet-600 w-10 h-10"
      ></li>
      <li
        class="l9 left-[70%] bg-gradient-to-r from-pink-500 to-rose-500 w-14 h-14"
      ></li>
      <li
        class="l10 left-[80%] bg-gradient-to-r from-cyan-500 to-blue-500 w-20 h-20"
      ></li>
    </ul>
  </div>
</template>

<!-- style -->
<style scoped>
  li {
    position: absolute;
    display: block;
    border-radius: 10%;
    animation: animate 25s linear infinite;
    bottom: -150px;
    opacity: 0;
  }

  .l1 {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .l2 {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
    animation-duration: 14s;
  }

  .l3 {
    left: 75%;
    width: 20px;
    height: 20px;
    animation-delay: 6s;
  }

  .l4 {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 20s;
  }

  .l5 {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .l6 {
    left: 60%;
    width: 110px;
    height: 110px;
    animation-delay: 5s;
  }

  .l7 {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 9s;
  }

  .l8 {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .l9 {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .l10 {
    left: 50%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 13s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0px) rotate(0deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(-800px) rotate(360deg);
      opacity: 0;
    }
  }
</style>
