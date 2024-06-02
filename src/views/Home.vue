<!-- script -->
<script setup>
	import NavHeader from "../components/NavHeader.vue";
	import InputSearch from "../components/InputSearch.vue";
	import SosialMedia from "../components/SosialMedia.vue";
</script>

<!-- template -->
<template>
	<main
		class="min-h-screen col-start-1 row-start-1 min-w-[100vw] max-w-[100vw]"
	>
		<!-- main -->
		<section role="main header" class="">
			<!-- header container -->
			<NavHeader></NavHeader>

			<header class="h-screen md:h-[800px]">
				<!-- search element -->
				<section class="mx-auto w-[90%] mt-28 px-4 rounded-2xl">
					<InputSearch></InputSearch>
				</section>
				<!-- end search element -->

				<!-- landing -->
				<section
					rule="info"
					class="grid grid-cols-5 grid-rows-5 gap-2 w-[90%] h-[30rem] mx-auto p-2 mt-10"
				>
					<div class="col-start-1 row-start-1 row-span-2">
						<SosialMedia></SosialMedia>
					</div>
					<div class="col-start-2 col-span-4 row-start-1 row-span-3">
						<div
							class="w-full h-full flex flex-col justify-center items-center"
						>
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
									class="mix-blend-screen px-2 bg-neutral-200 rounded-full relative inline-block w-[7.8rem]"
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
			</header>
			<!-- end header container -->

			<!-- main section -->
			<section role="main section" class=""></section>
			<!-- end main section -->
		</section>
	</main>
</template>

<!-- style -->
<style scoped></style>
