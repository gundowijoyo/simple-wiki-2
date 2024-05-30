<!-- script -->
<script setup>
	import InputSearch from "../components/InputSearch.vue";
	import ListOfHeading from "../components/ListOfHeading.vue";
	import { queryByPageId, parseByPageId } from "../api/index.js";
	import { useRoute } from "vue-router";
	import { ref, onMounted } from "vue";

	const data = ref({});
	const route = useRoute();
	const isDomLoaded = ref(false);
	const headingList = ref(false);

	onMounted(async () => {
		try {
			const response = await fetch(queryByPageId + route.query.id);
			const rawData = await response.json();
			console.log(rawData.query.pages);
			data.value = rawData.query.pages[route.query.id];
			console.log("hello");
		} catch (error) {}
	});

	function hendleNewLine(strArticle) {
		let buffer = strArticle.replace(/\n/g, "<br>");
		buffer = buffer.split("<br>");
		buffer = buffer.filter(arr => arr != "");
		buffer = buffer.join("");
		buffer = buffer.replace(
			/<h2/g,
			"<h2 data-aos='fade-up' class='text-2xl mt-3 mb-1 font-semibold' "
		);
		buffer = buffer.replace(
			/<h3/g,
			"<h3 data-aos='fade-up' class='text-xl mt-2 mb-1 font-semibold' "
		);
		buffer = buffer.replace(
			/<h4/g,
			"<h4 data-aos='fade-up' class='text-md mt-2 font-semibold' "
		);
		buffer = buffer.replace(
			/<p/g,
			"<p data-aos='fade-up' data-aos-delay='100' class='text-justify my-2' "
		);
		buffer = buffer.replace(
			/<ul/g,
			"<ul data-aos='fade-up' data-aos-delay='100' "
		);
		buffer = buffer.replace(
			/<dl/g,
			"<dl data-aos='fade-up' data-aos-delay='100' "
		);

		// Use regex to find all id attributes in span
		const regex = /<span id="(\w+)"/g;
		const matches = buffer.matchAll(regex);
		const ids = [...matches].map(m => m[1]);
		headingList.value = ids;

		console.log(ids);

		return buffer;
	}
</script>

<!-- template -->
<template>
	<main class="col-start-1 row-start-1 min-w-[100vw] max-w-[100vw]">
		<!-- main -->
		<section role="main" class="min-w-[100vw] max-w-[100vw]">
			<section class="w-[90%] mx-4">
				<InputSearch></InputSearch>
			</section>
			<!-- article -->
			<article
				class="mt-10 w-[98vw] h-fit mx-auto text-sm p-2 rounded-lg overflow-hidden p-2 bg-[hsla(210,40%,96.1%,0.0)]"
			>
				<div class="h-full w-full overflow-clip text-white overflow-x-hidden">
					<div class="mx-1">
						<h1 class="text-3xl mt-2 font-black text-slate-100 text-center">
							About
						</h1>
						<h2 class="text-xl font-bold text-slate-100 text-center mt-3">
							{{ data.title }}
						</h2>
						<div class="grid grid-rows-1 grid-cols-1">
							<Transition>
								<img
									v-if="data.thumbnail"
									class="w-full aspect-[4/3] p-4 rounded-3xl col-start-1 row-start-1"
									:src="data.thumbnail.source"
									alt=""
								/>
								<img
									v-else
									class="w-full aspect-[4/3] rounded-md col-start-1 row-start-1"
									src="/imageNotFound.png"
									alt=""
								/>
							</Transition>
						</div>
					</div>
					<!-- extract data -->
					<div class="grid grid-cols-1 grid-rows-1">
						<Transition>
							<div v-if="data.extract" class="">
								<h3
									id="pengenalan"
									class="mx-1 text-2xl mt-3 mb-1 font-semibold"
								>
									Pengenalan
								</h3>
								<div
									v-html="hendleNewLine(data.extract)"
									class="text-s mx-1 text-slate-100 col-start-1 row-start-1"
								></div>
							</div>
							<div
								v-else
								class="w-auto h-screen mx-1 bg-neutral-900 rounded-xl animate-pulse col-start-1 row-start-1"
							></div>
						</Transition>
					</div>
					<!-- end extract data-->
				</div>
			</article>
			<!-- end article -->

			<!-- utils -->
			<ListOfHeading
				v-if="data.extract"
				:headingList="headingList"
			></ListOfHeading>
			<!-- end utils -->
		</section>
		<!-- end main -->
	</main>
</template>

<!-- style -->
<style scoped>
	.dot-enter-active,
	.dot-leave-active {
		transition: 0.5s ease;
	}

	.dot-enter-from,
	.dot-leave-to {
		opacity: 0;
		transform: rotate(180deg);
	}

	.v-enter-active,
	.v-leave-active {
		transition: 0.5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
