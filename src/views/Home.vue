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
			class="h-[30rem] w-[90%] p-4 mt-28 mx-auto img-background rounded-xl bg-[hsla(0,0%,8%,0.475)] backdrop-blur-[6px]"
		>
			<section role="search input" class="rounded-2xl">
				<InputSearch></InputSearch>
			</section>

			<section
				rule="info"
				class="grid grid-cols-5 grid-rows-3 gap-2 w-[90%] h-[18rem] mx-auto mt-10"
			>
				<div class="col-start-1 row-start-1 row-span-2">
					<SosialMedia></SosialMedia>
				</div>
				<div class="col-start-2 col-span-4 row-start-1 row-span-3">
					<div class="w-full h-full flex flex-col justify-center items-center">
						<h1
							class="text-[1.8rem] leading-[2rem] font-black text-neutral-100 mx-2 red-hat"
						>
							Mind is a most
							<span
								class="mix-blend-screen px-2 bg-neutral-200 rounded-full block w-full"
							>
								<span class="mix-blend-difference">POWERFUL</span>
							</span>
							weapon of
							<span
								class="mix-blend-screen px-2 bg-neutral-200 rounded-full relative inline-block w-fit"
							>
								<span class="mix-blend-difference">HUMANITY. </span>
							</span>
						</h1>
						<p class="mx-2 mt-2 text-neutral-300">
							Explore your creativity and make the best changes of yourself.
						</p>
					</div>
				</div>
			</section>
			<!-- end landing -->
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
		opacity: 0.6;
		background-image: url("/SUDIO.gif");
		filter: brightness(60%);
		background-size: cover;
		z-index: -1;
	}
*/
</style>
