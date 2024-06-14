<!-- script -->
<script setup>
	import InputSearch from "../components/InputSearch.vue";
	import SosialMedia from "../components/SosialMedia.vue";
</script>

<!-- template -->
<template>
	<div class="min-h-screen col-start-1 row-start-1 min-w-[100vw] max-w-[100vw]">
		<section
			role="landing"
			class="h-[30rem] w-[90%] relative p-4 mt-28 mx-auto rounded-xl bg-transparent md:w-[30rem] sm:w-[26rem]"
		>
			<section role="search input" class="rounded-2xl h-16">
				<InputSearch></InputSearch>
			</section>

			<section
				rule="info"
				class="grid grid-cols-5 grid-rows-3 gap-2 h-[18rem] mx-auto md:grid-cols-6"
			>
				<div class="col-start-1 row-start-1 row-span-2">
					<SosialMedia></SosialMedia>
				</div>
				<h1
					class="col-start-2 col-span-4 row-start-1 row-span-2 text-2xl text-neutral-400 font-bold px-2 md:text-4xl md:col-span-6"
				>
					<span class="text-transparent text-4xl leading-[2rem] md:text-6xl"
						>Make live more better.</span
					>
					Mind is a powerfull weapon, use's it.
				</h1>
				<p
					class="flex justify-center items-center col-start-1 col-span-5 text-center text-neutral-400 row-start-3 text-sm md:text-md md:px-10 md:col-span-6"
				>
					lorem ipsum sit dolor it amet cupidatat officia incididunt cupidatat
					laboris in pariatur esse laboris tempor est.
				</p>
			</section>
			<!-- blending mode -->
			<div
				class="absolute top-0 left-0 w-full h-full bg-[hsla(0,0%,7%,0.8)] z-[-1] p-4 mix-blend-darken backdrop-blur-[2px] rounded-xl"
			>
				<div class="h-16"></div>
				<section
					rule="info"
					class="grid grid-cols-5 grid-rows-3 gap-2 h-[18rem] mx-auto md:grid-cols-6"
				>
					<div class="col-start-1 row-start-1 row-span-2"></div>
					<h1
						class="col-start-2 text-neutral-400 text-4xl font-bold col-span-4 row-start-1 row-span-2 mix-blend-difference px-2 leading-[2rem] md:text-6xl md:col-span-6"
					>
						Make live more better.
					</h1>
				</section>
			</div>
			<!-- end blending mode -->

			<div class="w-auto h-24 flex justify-center items-end">
				<p class="text-xs text-neutral-400 uppercase">
					create with
					<i class="bi bi-heart-fill text-[0.6rem] text-red-600"></i> by
					ka-shifuka
				</p>
			</div>
		</section>

		<!-- main section -->
		<section role="main section" class=""></section>
		<!-- end main section -->
	</div>
</template>

<!-- style -->
<style scoped>
	/*
	.img-background::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		 background-color: hsl(0, 0%, 9%); 
		opacity: 0.6;
		backdrop-filter: blur(0px);
		z-index: -1;
	}
*/
</style>
