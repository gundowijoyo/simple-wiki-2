<!-- script -->
<script setup>
	import { gsrSearchUrl } from "../api/index.js";
	import { useRoute } from "vue-router";
	import { watch, ref, onMounted } from "vue";

	const route = useRoute();

	const data = ref([]);
	const isLoad = ref(false);
	const isSearchable = ref(true);

	onMounted(async () => {
		getData(() => {
			isLoad.value = true;
		});
	});

	async function getData(callback) {
		try {
			const response = await fetch(gsrSearchUrl + route.query.q);
			const json = await response.json();

			console.log(json);
			if (!json.query) {
				isSearchable.value = false;
			}
			data.value = json.query.pages;
		} catch (e) {
		} finally {
			callback();
		}
	}

	function getFristText(text) {
		const textArray = text.split(" ");
		const resultArray = [];
		for (let i = 0; i < 15; i++) {
			resultArray.push(textArray[i]);
		}
		return resultArray.join(" ").replace(/<p/g, "<p class='inline'");
	}
</script>

<!-- template -->
<template>
	<div
		id="search-view"
		class="col-start-1 row-start-1 grid grid-cols-1 grid-rows-1"
	>
		<Transition>
			<div
				v-if="isLoad && isSearchable"
				class="w-[80%] mx-auto my-5 flex flex-col gap-2 col-start-1 row-start-1"
			>
				<section v-for="(info, index) in data">
					<!-- router link -->
					<RouterLink
						:to="'/page/' + info.pageid"
						class="flex justify-between items-center gap-3 px-2 py-1 border-y border-zinc-800 rounded-md bg-slate-100 hover:bg-slate-200 cursor-pointer"
						:class="{
							'border-t-0 rounded-t-0': index == 0,
							'border-b-0 rounded-b-0': index == data.length - 1
						}"
					>
						<section role="thumbnail">
							<img
								v-if="info.thumbnail"
								class="w-14 h-10 rounded-md"
								:src="info.thumbnail.source"
								alt="info.title"
							/>
							<img
								v-if="!info.thumbnail"
								class="w-14 h-10 rounded-md"
								src="/imageNotFound.png"
								alt=""
							/>
						</section>

						<div
							class="w-full h-fit overflow-hidden flex justify-between gap-2"
						>
							<div>
								<h1 class="text-[0.76rem] font-bold">
									{{ info.title }}
								</h1>
								<div class="text-[0.48rem]">
									<span
										class="inline"
										v-html="getFristText(info.extract)"
									></span>
									<span>...</span>
								</div>
							</div>
							<div class="flex items-center">
								<i class="bi bi-box-arrow-up-right text-xs"></i>
							</div>
						</div>
					</RouterLink>
					<!-- router link -->
				</section>
			</div>

			<!-- skeleton -->
			<div
				v-else-if="!isLoad && isSearchable"
				class="w-[90%] h-screen mx-auto bg-amber-100 col-start-1 row-start-1 rounded-xl"
			></div>
			<!-- end skeleton -->

			<!-- 404 -->
			<div
				v-else
				class="w-[90%] h-screen mx-auto bg-red-100 col-start-1 row-start-1 rounded-xl"
			></div>
			<!-- 404 -->
		</Transition>
	</div>
</template>

<!-- style -->
<style scoped>
	.v-enter-active,
	.v-leave-active {
		transition: opacity 500ms ease;
	}
	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
